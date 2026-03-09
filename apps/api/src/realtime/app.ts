import Fastify from "fastify";
import websocket from "@fastify/websocket";
import type { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";

import { buildAppContext } from "../runtime/context.js";

export async function buildRealtimeApp() {
  const app = Fastify({
    logger: {
      level: process.env.LOG_LEVEL ?? "info",
    },
  }).withTypeProvider<TypeBoxTypeProvider>();

  await app.register(websocket);

  app.decorate("delfa", buildAppContext("realtime"));

  app.get("/healthz", async () => ({
    status: "ok" as const,
    role: app.delfa.role,
  }));

  app.get(
    "/ws",
    { websocket: true },
    (connection) => {
      connection.socket.send(
        JSON.stringify({
          status: "connected",
          role: app.delfa.role,
        }),
      );
    },
  );

  return app;
}
