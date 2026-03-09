import { Type } from "@sinclair/typebox";
import type { FastifyInstance } from "fastify";

export async function registerProfilerRoutes(app: FastifyInstance) {
  app.get(
    "/v1/profiler/preview",
    {
      schema: {
        response: {
          200: Type.Object({
            service: Type.Literal("profiler"),
            schemaVersion: Type.String(),
            experienceVersion: Type.String(),
            status: Type.Literal("scaffolded"),
          }),
        },
      },
    },
    async () => ({
      service: "profiler" as const,
      schemaVersion: app.delfa.schemaVersions.profiler,
      experienceVersion: app.delfa.schemaVersions.profilerExperience,
      status: "scaffolded" as const,
    }),
  );
}
