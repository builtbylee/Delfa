export function buildWorkerRuntime() {
  return {
    async start() {
      const message = {
        status: "started",
        role: "worker",
        queue: "pg-boss",
      };

      console.log(JSON.stringify(message));
    },
  };
}
