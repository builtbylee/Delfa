import type { FastifyInstance } from "fastify";

import { registerBillingRoutes } from "./billing/routes.js";
import { registerHealthRoutes } from "./health/routes.js";
import { registerIdentityRoutes } from "./identity/routes.js";
import { registerMatchRoutes } from "./matching/routes.js";
import { registerProfilerRoutes } from "./profiler/routes.js";
import { registerProfileRoutes } from "./profile/routes.js";
import { registerTrustRoutes } from "./trust-safety/routes.js";

export async function registerApiRoutes(app: FastifyInstance) {
  await registerHealthRoutes(app);
  await registerIdentityRoutes(app);
  await registerProfileRoutes(app);
  await registerProfilerRoutes(app);
  await registerMatchRoutes(app);
  await registerTrustRoutes(app);
  await registerBillingRoutes(app);
}
