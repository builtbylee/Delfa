import { Type } from "@sinclair/typebox";

const progressStatusSchema = Type.Union([
  Type.Literal("not_started"),
  Type.Literal("in_progress"),
  Type.Literal("completed"),
]);

const responsePayloadSchema = Type.Any();

export const profilerSectionIdSchema = Type.Union([
  Type.Literal("basics"),
  Type.Literal("life_direction"),
  Type.Literal("communication_repair"),
  Type.Literal("emotional_security"),
  Type.Literal("lifestyle_intimacy_chemistry"),
]);

export const profilerSectionProgressSchema = Type.Object({
  sectionId: profilerSectionIdSchema,
  status: progressStatusSchema,
  completionPercent: Type.Number(),
  startedAtIso: Type.Optional(Type.String()),
  completedAtIso: Type.Optional(Type.String()),
  updatedAtIso: Type.String(),
});

export const mirrorMomentSchema = Type.Object({
  id: Type.String(),
  title: Type.String(),
  body: Type.String(),
  strengthenedDimensions: Type.Array(Type.String()),
  confidence: Type.Union([Type.Literal("emerging"), Type.Literal("solid")]),
});

export const compatibilityPreviewDimensionSchema = Type.Object({
  dimension: Type.String(),
  label: Type.String(),
  status: Type.Union([
    Type.Literal("strong_signal"),
    Type.Literal("needs_more_depth"),
  ]),
  summary: Type.String(),
  recommendedSectionId: Type.Optional(profilerSectionIdSchema),
});

export const compatibilityPreviewSchema = Type.Object({
  surface: Type.Union([
    Type.Literal("after_basics"),
    Type.Literal("section_completion"),
    Type.Literal("summary"),
  ]),
  summary: Type.String(),
  strongSignals: Type.Array(compatibilityPreviewDimensionSchema),
  growthSignals: Type.Array(compatibilityPreviewDimensionSchema),
});

export const compatibilityProfileSchema = Type.Object({
  schemaVersion: Type.String(),
  publicProfilePayload: Type.Record(Type.String(), Type.Unknown()),
  privateCalibrationPayload: Type.Record(Type.String(), Type.Unknown()),
  dimensionScores: Type.Array(
    Type.Object({
      dimension: Type.String(),
      score: Type.Number(),
      confidence: Type.Union([
        Type.Literal("low_confidence"),
        Type.Literal("medium_confidence"),
        Type.Literal("high_confidence"),
      ]),
      sourceMix: Type.Array(Type.String()),
    }),
  ),
  explanationPreview: Type.Array(Type.String()),
});

export const profilerQuestionSchema = Type.Object({
  id: Type.String(),
  sectionId: profilerSectionIdSchema,
  title: Type.String(),
  type: Type.String(),
  privacy: Type.String(),
  required: Type.Boolean(),
  prompt: Type.Array(Type.String()),
  scoringDimensions: Type.Array(Type.String()),
  recomputeBehavior: Type.Optional(Type.String()),
});

export const profilerSectionSchema = Type.Object({
  id: profilerSectionIdSchema,
  title: Type.String(),
  description: Type.String(),
  requiredForMatching: Type.Boolean(),
  minCompletionForMatching: Type.Optional(Type.Number()),
  sortOrder: Type.Number(),
  estimatedDuration: Type.Object({
    minMinutes: Type.Number(),
    maxMinutes: Type.Number(),
  }),
});

export const getProfilerSectionsResponseSchema = Type.Object({
  schemaVersion: Type.String(),
  sections: Type.Array(profilerSectionSchema),
  progress: Type.Array(profilerSectionProgressSchema),
});

export const getProfilerSectionResponseSchema = Type.Object({
  schemaVersion: Type.String(),
  section: profilerSectionSchema,
  questions: Type.Array(profilerQuestionSchema),
  progress: profilerSectionProgressSchema,
  journeyFrame: Type.Optional(
    Type.Object({
      sectionId: profilerSectionIdSchema,
      introEyebrow: Type.String(),
      introHeadline: Type.String(),
      introBody: Type.String(),
      completionHeadline: Type.String(),
      completionBody: Type.String(),
      tone: Type.String(),
    }),
  ),
});

export const upsertProfilerResponseBodySchema = Type.Object({
  questionId: Type.String(),
  payload: responsePayloadSchema,
});

export const upsertProfilerResponseResponseSchema = Type.Object({
  savedResponse: Type.Object({
    questionId: Type.String(),
    schemaVersion: Type.String(),
    privacy: Type.String(),
    payload: responsePayloadSchema,
    answeredAtIso: Type.String(),
  }),
  sectionProgress: profilerSectionProgressSchema,
  recomputeBehavior: Type.Union([
    Type.Literal("none"),
    Type.Literal("ranking_only"),
    Type.Literal("full_match_recompute"),
  ]),
});

export const completeProfilerSectionBodySchema = Type.Object({
  sectionId: profilerSectionIdSchema,
});

export const completeProfilerSectionResponseSchema = Type.Object({
  sectionProgress: profilerSectionProgressSchema,
  unlockedSectionIds: Type.Array(profilerSectionIdSchema),
  mirrorMoment: Type.Optional(mirrorMomentSchema),
  compatibilityPreview: Type.Optional(compatibilityPreviewSchema),
  recommendedNextSectionIds: Type.Optional(Type.Array(profilerSectionIdSchema)),
});

export const getProfilerSummaryResponseSchema = Type.Object({
  schemaVersion: Type.String(),
  completionPercent: Type.Number(),
  compatibilityProfile: Type.Optional(compatibilityProfileSchema),
  compatibilityPreview: Type.Optional(compatibilityPreviewSchema),
});

export const postProfilerRecomputeResponseSchema = Type.Object({
  schemaVersion: Type.String(),
  compatibilityProfile: compatibilityProfileSchema,
});
