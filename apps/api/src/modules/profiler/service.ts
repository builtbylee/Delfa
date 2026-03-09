import { and, desc, eq, inArray, sql } from "drizzle-orm";

import {
  basicsCompatibilityPreview,
  mirrorMomentCatalog,
  profilerMetadata,
  profilerQuestionMap,
  profilerQuestionsBySection,
  profilerSectionJourneyFrames,
  profilerSectionMap,
  profilerSections,
  type CompatibilityPreview,
  type MirrorMomentPayload,
  type ProfilerJourneyTone,
  type ProfilerResponsePayload,
  type ProfilerSectionDefinition,
  type ProfilerSectionId,
  type ProfilerSectionProgress,
  type UserCompatibilityProfile,
  type UserProfilerResponse,
} from "@delfa/shared";

import { getDb } from "../../db/client.js";
import {
  compatibilityConfidenceSnapshots,
  mirrorMoments,
  profilerProgress,
  profilerResponses,
} from "../../db/schema/index.js";

type UserRecord = {
  id: string;
};

function nowIso() {
  return new Date().toISOString();
}

function defaultProgress(sectionId: ProfilerSectionId): ProfilerSectionProgress {
  return {
    sectionId,
    status: "not_started",
    completionPercent: 0,
    updatedAtIso: nowIso(),
  };
}

function getRequiredQuestionCount(sectionId: ProfilerSectionId) {
  const questions = profilerQuestionsBySection[sectionId];
  if (!questions) {
    throw new Error("unknown_section");
  }

  return questions.filter((question) => question.required).length;
}

function buildCompatibilityProfile(
  progress: readonly ProfilerSectionProgress[],
): UserCompatibilityProfile {
  const completedSections = progress.filter(
    (section) => section.status === "completed",
  ).length;
  const completionPercent = Math.round(
    (completedSections / profilerSections.length) * 100,
  );

  const dimensionScores = [
    {
      dimension: "intent" as const,
      score: progress.find((section) => section.sectionId === "basics")?.status ===
        "completed"
        ? 78
        : 52,
      confidence:
        progress.find((section) => section.sectionId === "basics")?.status ===
        "completed"
          ? "high_confidence"
          : "medium_confidence",
      sourceMix: ["stated"] as const,
    },
    {
      dimension: "life_direction" as const,
      score:
        progress.find((section) => section.sectionId === "life_direction")?.status ===
        "completed"
          ? 75
          : 55,
      confidence:
        progress.find((section) => section.sectionId === "life_direction")?.status ===
        "completed"
          ? "high_confidence"
          : "low_confidence",
      sourceMix: ["stated"] as const,
    },
    {
      dimension: "chemistry" as const,
      score:
        progress.find((section) => section.sectionId === "basics")?.status ===
        "completed"
          ? 70
          : 48,
      confidence:
        progress.find((section) => section.sectionId === "basics")?.status ===
        "completed"
          ? "medium_confidence"
          : "low_confidence",
      sourceMix: ["stated", "derived"] as const,
    },
  ] satisfies UserCompatibilityProfile["dimensionScores"];

  return {
    schemaVersion: profilerMetadata.schemaVersion,
    computedAtIso: nowIso(),
    publicProfilePayload: {
      completionPercent,
    },
    privateCalibrationPayload: {
      completedSections,
    },
    dimensionScores,
    explanationPreview: basicsCompatibilityPreview.strongSignals.map(
      (signal) => signal.summary,
    ),
  };
}

function toJourneyFrame(sectionId: ProfilerSectionId) {
  return profilerSectionJourneyFrames.find((frame) => frame.sectionId === sectionId);
}

function pickMirrorMoment(sectionId: ProfilerSectionId): MirrorMomentPayload | undefined {
  const definition = mirrorMomentCatalog.find(
    (item) => item.sectionId === sectionId,
  );

  if (!definition) {
    return undefined;
  }

  return {
    id: definition.id,
    title: definition.title,
    body: definition.body,
    strengthenedDimensions: definition.strengthenedDimensions,
    confidence: "solid",
  };
}

function getRecommendedNextSections(
  sectionId: ProfilerSectionId,
): readonly ProfilerSectionId[] {
  const remaining = profilerSections
    .filter(
      (section) =>
        section.id !== sectionId && section.requiredForMatching === false,
    )
    .map((section) => section.id);

  return remaining.slice(0, 2);
}

export async function getProfilerProgressForUser(user: UserRecord) {
  const db = getDb();
  const progressRows = await db.query.profilerProgress.findMany({
    where: eq(profilerProgress.userId, user.id),
  });

  const mapped = new Map(
    progressRows.map((row) => [
      row.sectionId,
      {
        sectionId: row.sectionId as ProfilerSectionId,
        status: row.status,
        completionPercent: row.completionPercent,
        startedAtIso: row.startedAt?.toISOString(),
        completedAtIso: row.completedAt?.toISOString(),
        updatedAtIso: row.updatedAt.toISOString(),
      } satisfies ProfilerSectionProgress,
    ]),
  );

  return profilerSections.map(
    (section) => mapped.get(section.id) ?? defaultProgress(section.id),
  );
}

export async function getProfilerSectionsForUser(user: UserRecord) {
  return {
    schemaVersion: profilerMetadata.schemaVersion,
    sections: profilerSections,
    progress: await getProfilerProgressForUser(user),
  };
}

export async function getProfilerSectionForUser(
  user: UserRecord,
  sectionId: ProfilerSectionId,
) {
  const progress = await getProfilerProgressForUser(user);
  return {
    schemaVersion: profilerMetadata.schemaVersion,
    section: profilerSectionMap[sectionId],
    questions: profilerQuestionsBySection[sectionId],
    progress:
      progress.find((item) => item.sectionId === sectionId) ??
      defaultProgress(sectionId),
    journeyFrame: toJourneyFrame(sectionId),
  };
}

export async function upsertProfilerResponseForUser(
  user: UserRecord,
  questionId: string,
  payload: ProfilerResponsePayload,
) {
  const question = profilerQuestionMap[questionId];

  if (!question) {
    throw new Error("unknown_question");
  }

  const db = getDb();

  await db
    .update(profilerResponses)
    .set({
      isCurrent: 0,
      supersededAt: new Date(),
    })
    .where(
      and(
        eq(profilerResponses.userId, user.id),
        eq(profilerResponses.questionId, questionId),
        eq(profilerResponses.isCurrent, 1),
      ),
    );

  const [saved] = await db
    .insert(profilerResponses)
    .values({
      userId: user.id,
      questionId,
      schemaVersion: profilerMetadata.schemaVersion,
      privacyLevel: question.privacy,
      responsePayload: payload,
    })
    .returning();

  if (!saved) {
    throw new Error("profiler_response_save_failed");
  }

  const sectionProgress = await recomputeSectionProgress(user, question.sectionId);

  return {
    savedResponse: {
      questionId: saved.questionId,
      schemaVersion: saved.schemaVersion,
      privacy: saved.privacyLevel,
      payload: saved.responsePayload as ProfilerResponsePayload,
      answeredAtIso: saved.answeredAt.toISOString(),
    } satisfies UserProfilerResponse,
    sectionProgress,
    recomputeBehavior: question.recomputeBehavior ?? "none",
  };
}

async function recomputeSectionProgress(
  user: UserRecord,
  sectionId: ProfilerSectionId,
): Promise<ProfilerSectionProgress> {
  const db = getDb();
  const requiredQuestionIds = profilerQuestionsBySection[sectionId]
    ?.filter((question) => question.required)
    .map((question) => question.id);

  if (!requiredQuestionIds) {
    throw new Error("unknown_section");
  }

  const currentResponses = requiredQuestionIds.length
    ? await db.query.profilerResponses.findMany({
        where: and(
          eq(profilerResponses.userId, user.id),
          eq(profilerResponses.isCurrent, 1),
          inArray(profilerResponses.questionId, requiredQuestionIds),
        ),
      })
    : [];

  const answeredCount = new Set(
    currentResponses.map((response) => response.questionId),
  ).size;
  const totalRequired = getRequiredQuestionCount(sectionId);
  const completionPercent =
    totalRequired === 0
      ? 100
      : Math.round((answeredCount / totalRequired) * 100);
  const status =
    completionPercent === 100
      ? "completed"
      : completionPercent > 0
        ? "in_progress"
        : "not_started";
  const now = new Date();

  const existing = await db.query.profilerProgress.findFirst({
    where: and(
      eq(profilerProgress.userId, user.id),
      eq(profilerProgress.sectionId, sectionId),
    ),
  });

  if (existing) {
    const [updated] = await db
      .update(profilerProgress)
      .set({
        status,
        completionPercent,
        updatedAt: now,
        startedAt: existing.startedAt ?? (completionPercent > 0 ? now : null),
        completedAt: status === "completed" ? now : null,
      })
      .where(eq(profilerProgress.id, existing.id))
      .returning();

    if (!updated) {
      throw new Error("profiler_progress_update_failed");
    }

    return {
      sectionId,
      status: updated.status,
      completionPercent: updated.completionPercent,
      startedAtIso: updated.startedAt?.toISOString(),
      completedAtIso: updated.completedAt?.toISOString(),
      updatedAtIso: updated.updatedAt.toISOString(),
    };
  }

  const [created] = await db
    .insert(profilerProgress)
    .values({
      userId: user.id,
      sectionId,
      schemaVersion: profilerMetadata.schemaVersion,
      status,
      completionPercent,
      startedAt: completionPercent > 0 ? now : null,
      completedAt: status === "completed" ? now : null,
    })
    .returning();

  if (!created) {
    throw new Error("profiler_progress_create_failed");
  }

  return {
    sectionId,
    status: created.status,
    completionPercent: created.completionPercent,
    startedAtIso: created.startedAt?.toISOString(),
    completedAtIso: created.completedAt?.toISOString(),
    updatedAtIso: created.updatedAt.toISOString(),
  };
}

export async function completeProfilerSectionForUser(
  user: UserRecord,
  sectionId: ProfilerSectionId,
) {
  const sectionProgress = await recomputeSectionProgress(user, sectionId);

  if (sectionProgress.status !== "completed") {
    throw new Error("section_not_complete");
  }

  const mirrorMoment = pickMirrorMoment(sectionId);
  const db = getDb();

  if (mirrorMoment) {
    await db.insert(mirrorMoments).values({
      userId: user.id,
      sectionId,
      mirrorMomentId: mirrorMoment.id,
      payload: mirrorMoment,
    });
  }

  const progress = await getProfilerProgressForUser(user);
  const profile = buildCompatibilityProfile(progress);

  await db.insert(compatibilityConfidenceSnapshots).values({
    userId: user.id,
    schemaVersion: profilerMetadata.schemaVersion,
    completionPercent: Math.round(
      progress.reduce((sum, item) => sum + item.completionPercent, 0) /
        progress.length,
    ),
    compatibilityPreview:
      sectionId === "basics" ? basicsCompatibilityPreview : null,
    dimensionScores: profile.dimensionScores,
    explanationPreview: profile.explanationPreview,
  });

  return {
    sectionProgress,
    unlockedSectionIds: profilerSections
      .filter((section) => section.requiredForMatching === false)
      .map((section) => section.id),
    mirrorMoment,
    compatibilityPreview:
      sectionId === "basics" ? basicsCompatibilityPreview : undefined,
    recommendedNextSectionIds: getRecommendedNextSections(sectionId),
  };
}

export async function getProfilerSummaryForUser(user: UserRecord) {
  const progress = await getProfilerProgressForUser(user);
  const completionPercent = Math.round(
    progress.reduce((sum, item) => sum + item.completionPercent, 0) /
      progress.length,
  );

  return {
    schemaVersion: profilerMetadata.schemaVersion,
    completionPercent,
    compatibilityProfile: buildCompatibilityProfile(progress),
    compatibilityPreview: basicsCompatibilityPreview,
  };
}

export async function getMirrorMomentForUser(
  user: UserRecord,
  sectionId: ProfilerSectionId,
) {
  const db = getDb();
  const latest = await db.query.mirrorMoments.findFirst({
    where: and(
      eq(mirrorMoments.userId, user.id),
      eq(mirrorMoments.sectionId, sectionId),
    ),
    orderBy: desc(mirrorMoments.createdAt),
  });

  return latest?.payload as MirrorMomentPayload | undefined;
}

export async function recomputeProfilerForUser(user: UserRecord) {
  const progress = await getProfilerProgressForUser(user);
  const compatibilityProfile = buildCompatibilityProfile(progress);

  await getDb().insert(compatibilityConfidenceSnapshots).values({
    userId: user.id,
    schemaVersion: profilerMetadata.schemaVersion,
    completionPercent: Math.round(
      progress.reduce((sum, item) => sum + item.completionPercent, 0) /
        progress.length,
    ),
    compatibilityPreview: basicsCompatibilityPreview,
    dimensionScores: compatibilityProfile.dimensionScores,
    explanationPreview: compatibilityProfile.explanationPreview,
  });

  return {
    schemaVersion: profilerMetadata.schemaVersion,
    compatibilityProfile,
  };
}
