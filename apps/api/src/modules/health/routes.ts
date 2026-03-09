import { Type } from "@sinclair/typebox";
import type { FastifyInstance } from "fastify";

export async function registerHealthRoutes(app: FastifyInstance) {
  app.get(
    "/healthz",
    {
      schema: {
        response: {
          200: Type.Object({
            status: Type.Literal("ok"),
            role: Type.String(),
          }),
        },
      },
    },
    async () => ({
      status: "ok" as const,
      role: app.delfa.role,
    }),
  );

  app.get(
    "/readyz",
    {
      schema: {
        response: {
          200: Type.Object({
            status: Type.Literal("ready"),
            framework: Type.String(),
            auth: Type.String(),
            hosting: Type.String(),
          }),
        },
      },
    },
    async () => ({
      status: "ready" as const,
      framework: app.delfa.stack.framework,
      auth: app.delfa.stack.auth,
      hosting: app.delfa.stack.hosting,
    }),
  );
}
