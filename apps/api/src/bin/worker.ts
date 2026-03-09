import { buildWorkerRuntime } from "../worker/runtime.js";

async function main() {
  const runtime = buildWorkerRuntime();
  await runtime.start();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
