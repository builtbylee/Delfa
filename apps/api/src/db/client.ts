import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "./schema/index.js";

let pool: Pool | undefined;
let db:
  | ReturnType<typeof drizzle<typeof schema>>
  | undefined;

function getDatabaseUrl() {
  return process.env.DATABASE_URL ?? "postgres://localhost:5432/delfa";
}

export function getPool() {
  if (!pool) {
    pool = new Pool({
      connectionString: getDatabaseUrl(),
    });
  }

  return pool;
}

export function getDb() {
  if (!db) {
    db = drizzle(getPool(), { schema });
  }

  return db;
}

export type DbClient = ReturnType<typeof getDb>;
