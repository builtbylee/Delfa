import { buildApiApp } from "../app.js";

async function main() {
  const app = await buildApiApp();
  const port = Number(process.env.PORT ?? 3001);
  const host = process.env.HOST ?? "0.0.0.0";

  await app.listen({ host, port });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
