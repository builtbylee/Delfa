import { buildRealtimeApp } from "../realtime/app.js";

async function main() {
  const app = await buildRealtimeApp();
  const port = Number(process.env.REALTIME_PORT ?? 3002);
  const host = process.env.HOST ?? "0.0.0.0";

  await app.listen({ host, port });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
