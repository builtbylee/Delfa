import { Type } from "@sinclair/typebox";
import type { FastifyInstance } from "fastify";

import { requireAuthenticatedUser } from "../../auth/clerk.js";
import { ensureIdentityUser } from "../identity/service.js";

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
    async (request, reply) => {
      const authUser = await requireAuthenticatedUser(request, reply);
      if (!authUser) return;
      await ensureIdentityUser(authUser);
      return {
        service: "profile" as const,
        mediaStorage: app.delfa.stack.objectStorage,
        status: "scaffolded" as const,
      };
    },
  );
}
