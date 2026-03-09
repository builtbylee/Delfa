import {
  index,
  integer,
  jsonb,
  pgEnum,
  pgSchema,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

import { users } from "./identity.js";

export const profilerSchema = pgSchema("profiler");

export const profilerProgressStatusEnum = pgEnum("profiler_progress_status", [
  "not_started",
  "in_progress",
  "completed",
]);

export const profilerPrivacyLevelEnum = pgEnum("profiler_privacy_level", [
  "PUBLIC_PROFILE",
  "MATCHING_PRIVATE",
  "SENSITIVE_PRIVATE",
]);

export const profilerResponses = profilerSchema.table(
  "profiler_responses",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    questionId: text("question_id").notNull(),
    schemaVersion: text("schema_version").notNull(),
    privacyLevel: profilerPrivacyLevelEnum("privacy_level").notNull(),
    responsePayload: jsonb("response_payload").notNull(),
    isCurrent: integer("is_current").notNull().default(1),
    answeredAt: timestamp("answered_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    supersededAt: timestamp("superseded_at", { withTimezone: true }),
  },
  (table) => ({
    userQuestionIdx: index("profiler_responses_user_question_idx").on(
      table.userId,
      table.questionId,
    ),
  }),
);

export const profilerProgress = profilerSchema.table(
  "profiler_progress",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    sectionId: text("section_id").notNull(),
    schemaVersion: text("schema_version").notNull(),
    status: profilerProgressStatusEnum("status").notNull(),
    completionPercent: integer("completion_percent").notNull().default(0),
    startedAt: timestamp("started_at", { withTimezone: true }),
    completedAt: timestamp("completed_at", { withTimezone: true }),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    userSectionIdx: index("profiler_progress_user_section_idx").on(
      table.userId,
      table.sectionId,
    ),
  }),
);

export const mirrorMoments = profilerSchema.table(
  "mirror_moments",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    sectionId: text("section_id").notNull(),
    mirrorMomentId: text("mirror_moment_id").notNull(),
    payload: jsonb("payload").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    userSectionIdx: index("mirror_moments_user_section_idx").on(
      table.userId,
      table.sectionId,
    ),
  }),
);

export const compatibilityConfidenceSnapshots = profilerSchema.table(
  "compatibility_confidence_snapshots",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    schemaVersion: text("schema_version").notNull(),
    completionPercent: integer("completion_percent").notNull().default(0),
    compatibilityPreview: jsonb("compatibility_preview"),
    dimensionScores: jsonb("dimension_scores"),
    explanationPreview: jsonb("explanation_preview"),
    computedAt: timestamp("computed_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    userComputedIdx: index("compatibility_confidence_snapshots_user_idx").on(
      table.userId,
      table.computedAt,
    ),
  }),
);
