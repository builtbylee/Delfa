import { Type } from "@sinclair/typebox";
import type { FastifyInstance } from "fastify";

export async function registerProfileRoutes(app: FastifyInstance) {
  app.get(
    "/v1/profile/me",
    {
      schema: {
        response: {
          200: Type.Object({
            service: Type.Literal("profile"),
            mediaStorage: Type.String(),
            status: Type.Literal("scaffolded"),
          }),
        },
      },
    },
    async () => ({
      service: "profile" as const,
      mediaStorage: app.delfa.stack.objectStorage,
      status: "scaffolded" as const,
    }),
  );
}
