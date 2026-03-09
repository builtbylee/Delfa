import {
  index,
  integer,
  pgEnum,
  pgSchema,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

import { users } from "./identity.js";

export const profileSchema = pgSchema("profile");

export const publicVisibilityStateEnum = pgEnum("public_visibility_state", [
  "draft",
  "visible",
  "hidden",
]);

export const mediaModerationStateEnum = pgEnum("media_moderation_state", [
  "pending",
  "approved",
  "rejected",
]);

export const locations = profileSchema.table(
  "locations",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    citySlug: text("city_slug").notNull().unique(),
    label: text("label").notNull(),
    lat: integer("lat"),
    lng: integer("lng"),
    activeLaunchMarket: integer("active_launch_market").notNull().default(0),
  },
  (table) => ({
    citySlugIdx: index("profile_locations_city_slug_idx").on(table.citySlug),
  }),
);

export const publicProfiles = profileSchema.table(
  "public_profiles",
  {
    userId: uuid("user_id")
      .primaryKey()
      .references(() => users.id, { onDelete: "cascade" }),
    firstName: text("first_name"),
    age: integer("age"),
    cityId: uuid("city_id").references(() => locations.id),
    bio: text("bio"),
    publicVisibilityState: publicVisibilityStateEnum("public_visibility_state")
      .notNull()
      .default("draft"),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    cityIdIdx: index("profile_public_profiles_city_id_idx").on(table.cityId),
  }),
);

export const privateProfileFacts = profileSchema.table(
  "private_profile_facts",
  {
    userId: uuid("user_id")
      .primaryKey()
      .references(() => users.id, { onDelete: "cascade" }),
    genderIdentity: text("gender_identity"),
    genderOpenness: text("gender_openness"),
    ageMin: integer("age_min"),
    ageMax: integer("age_max"),
    distanceRadiusKm: integer("distance_radius_km"),
    relationshipStructure: text("relationship_structure"),
    launchCohortId: text("launch_cohort_id"),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
);

export const profileMedia = profileSchema.table(
  "profile_media",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    storageKey: text("storage_key").notNull(),
    mediaType: text("media_type").notNull(),
    position: integer("position").notNull().default(0),
    moderationState: mediaModerationStateEnum("moderation_state")
      .notNull()
      .default("pending"),
    createdAt: timestamp("created_at", { withTimezone: true })
      .notNull()
      .defaultNow(),
  },
  (table) => ({
    userIdIdx: index("profile_media_user_id_idx").on(table.userId),
  }),
);
