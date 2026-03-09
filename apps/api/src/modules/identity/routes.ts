import { Type } from "@sinclair/typebox";
import type { FastifyInstance } from "fastify";

import { requireAuthenticatedUser } from "../../auth/clerk.js";
import { ensureIdentityUser } from "./service.js";

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
            userId: Type.String(),
            clerkUserId: Type.String(),
          }),
        },
      },
    },
    async (request, reply) => {
      const authUser = await requireAuthenticatedUser(request, reply);
      if (!authUser) return;
      const user = await ensureIdentityUser(authUser);

      return {
        service: "identity" as const,
        authProvider: app.delfa.stack.auth,
        status: "scaffolded" as const,
        userId: user.id,
        clerkUserId: user.clerkUserId,
      };
    },
  );
}
