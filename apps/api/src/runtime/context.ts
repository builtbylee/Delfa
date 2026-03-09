import {
  ATTRACTION_ENGINE_SCHEMA_VERSION,
  MATCH_INTERACTION_SCHEMA_VERSION,
  MEASUREMENT_SCHEMA_VERSION,
  POST_DATE_SCHEMA_VERSION,
  PROFILER_EXPERIENCE_VERSION,
  PROFILER_SCHEMA_VERSION,
  RANKING_ENGINE_SCHEMA_VERSION,
  TRUST_SAFETY_SCHEMA_VERSION,
} from "@delfa/shared";

export type RuntimeRole = "api" | "realtime" | "worker";

export type AppContext = {
  role: RuntimeRole;
  stack: {
    auth: "clerk";
    hosting: "fly.io";
    objectStorage: "managed-object-storage";
    push: "onesignal";
    queue: "pg-boss";
    cache: "redis";
    orm: "drizzle";
    validation: "typebox";
    framework: "fastify";
  };
  schemaVersions: {
    profiler: string;
    profilerExperience: string;
    matchInteraction: string;
    attraction: string;
    ranking: string;
    postDate: string;
    trustSafety: string;
    measurement: string;
  };
};

export function buildAppContext(role: RuntimeRole): AppContext {
  return {
    role,
    stack: {
      auth: "clerk",
      hosting: "fly.io",
      objectStorage: "managed-object-storage",
      push: "onesignal",
      queue: "pg-boss",
      cache: "redis",
      orm: "drizzle",
      validation: "typebox",
      framework: "fastify",
    },
    schemaVersions: {
      profiler: PROFILER_SCHEMA_VERSION,
      profilerExperience: PROFILER_EXPERIENCE_VERSION,
      matchInteraction: MATCH_INTERACTION_SCHEMA_VERSION,
      attraction: ATTRACTION_ENGINE_SCHEMA_VERSION,
      ranking: RANKING_ENGINE_SCHEMA_VERSION,
      postDate: POST_DATE_SCHEMA_VERSION,
      trustSafety: TRUST_SAFETY_SCHEMA_VERSION,
      measurement: MEASUREMENT_SCHEMA_VERSION,
    },
  };
}
