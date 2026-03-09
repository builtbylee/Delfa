import { Type } from "@sinclair/typebox";
import type { FastifyInstance } from "fastify";

export async function registerIdentityRoutes(app: FastifyInstance) {
  app.get(
    "/v1/me",
    {
      schema: {
        response: {
          200: Type.Object({
            service: Type.Literal("identity"),
            authProvider: Type.String(),
            status: Type.Literal("scaffolded"),
          }),
        },
      },
    },
    async () => ({
      service: "identity" as const,
      authProvider: app.delfa.stack.auth,
      status: "scaffolded" as const,
    }),
  );
}
