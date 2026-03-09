import Fastify from "fastify";
import cors from "@fastify/cors";
import websocket from "@fastify/websocket";
import type { TypeBoxTypeProvider } from "@fastify/type-provider-typebox";

import { registerApiRoutes } from "./modules/index.js";
import { buildAppContext } from "./runtime/context.js";

export async function buildApiApp() {
  const app = Fastify({
    logger: {
      level: process.env.LOG_LEVEL ?? "info",
    },
  }).withTypeProvider<TypeBoxTypeProvider>();

  await app.register(cors, {
    origin: true,
    credentials: true,
  });

  await app.register(websocket);

  app.decorate("delfa", buildAppContext("api"));

  await registerApiRoutes(app);

  return app;
}
