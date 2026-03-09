import { migrate } from "drizzle-orm/node-postgres/migrator";

import { getDb } from "./client.js";

async function main() {
  await migrate(getDb(), {
    migrationsFolder: "./drizzle",
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
