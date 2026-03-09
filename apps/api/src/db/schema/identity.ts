import {
  boolean,
  index,
  pgEnum,
  pgSchema,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const identitySchema = pgSchema("identity");

export const accountStateEnum = pgEnum("account_state", [
  "active",
  "paused",
  "blocked",
  "deleted",
]);

export const verificationStageEnum = pgEnum("verification_stage", [
  "none",
  "basic",
  "photo",
  "manual_review",
]);

export const trustTierEnum = pgEnum("trust_tier", [
  "unverified",
  "basic",
  "verified",
  "heightened_review",
]);

export const users = identitySchema.table(
  "users",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    clerkUserId: text("clerk_user_id").notNull().unique(),
    accountState: accountStateEnum("account_state").notNull().default("active"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
    deletedAt: timestamp("deleted_at", { withTimezone: true }),
  },
  (table) => ({
    clerkUserIdIdx: index("identity_users_clerk_user_id_idx").on(table.clerkUserId),
  }),
);

export const devices = identitySchema.table(
  "devices",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    platform: text("platform").notNull(),
    pushToken: text("push_token"),
    lastSeenAt: timestamp("last_seen_at", { withTimezone: true }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    userIdIdx: index("identity_devices_user_id_idx").on(table.userId),
  }),
);

export const verificationState = identitySchema.table(
  "verification_state",
  {
    userId: uuid("user_id")
      .primaryKey()
      .references(() => users.id, { onDelete: "cascade" }),
    stage: verificationStageEnum("stage").notNull().default("none"),
    trustTier: trustTierEnum("trust_tier").notNull().default("unverified"),
    isReviewRequired: boolean("is_review_required").notNull().default(false),
    reviewStatus: text("review_status"),
    verifiedAt: timestamp("verified_at", { withTimezone: true }),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    trustTierIdx: index("identity_verification_state_trust_tier_idx").on(
      table.trustTier,
    ),
  }),
);
