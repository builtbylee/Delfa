import { Type } from "@sinclair/typebox";
import type { FastifyInstance } from "fastify";

export async function registerBillingRoutes(app: FastifyInstance) {
  app.get(
    "/v1/billing/entitlements",
    {
      schema: {
        response: {
          200: Type.Object({
            service: Type.Literal("billing"),
            status: Type.Literal("scaffolded"),
          }),
        },
      },
    },
    async () => ({
      service: "billing" as const,
      status: "scaffolded" as const,
    }),
  );
}
