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
            edgeSecurity: Type.String(),
            pushProvider: Type.String(),
            trustSafetyVersion: Type.String(),
            status: Type.Literal("scaffolded"),
          }),
        },
      },
    },
    async () => ({
      service: "trust_safety" as const,
      edgeSecurity: app.delfa.stack.edgeSecurity,
      pushProvider: app.delfa.stack.push,
      trustSafetyVersion: app.delfa.schemaVersions.trustSafety,
      status: "scaffolded" as const,
    }),
  );
}
