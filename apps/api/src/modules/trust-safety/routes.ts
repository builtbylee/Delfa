import { Type } from "@sinclair/typebox";
import type { FastifyInstance } from "fastify";

export async function registerTrustRoutes(app: FastifyInstance) {
  app.get(
    "/v1/trust/overview",
    {
      schema: {
        response: {
          200: Type.Object({
            service: Type.Literal("trust_safety"),
            pushProvider: Type.String(),
            trustSafetyVersion: Type.String(),
            status: Type.Literal("scaffolded"),
          }),
        },
      },
    },
    async () => ({
      service: "trust_safety" as const,
      pushProvider: app.delfa.stack.push,
      trustSafetyVersion: app.delfa.schemaVersions.trustSafety,
      status: "scaffolded" as const,
    }),
  );
}
