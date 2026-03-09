import { Type } from "@sinclair/typebox";
import type { FastifyInstance } from "fastify";

export async function registerMatchRoutes(app: FastifyInstance) {
  app.get(
    "/v1/match/delivery-status",
    {
      schema: {
        response: {
          200: Type.Object({
            service: Type.Literal("matching"),
            attractionEngineVersion: Type.String(),
            rankingVersion: Type.String(),
            status: Type.Literal("scaffolded"),
          }),
        },
      },
    },
    async () => ({
      service: "matching" as const,
      attractionEngineVersion: app.delfa.schemaVersions.attraction,
      rankingVersion: app.delfa.schemaVersions.ranking,
      status: "scaffolded" as const,
    }),
  );
}
