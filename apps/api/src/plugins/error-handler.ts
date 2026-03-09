import type { FastifyInstance } from "fastify";

import { HttpError } from "../errors/http.js";

export async function registerErrorHandler(app: FastifyInstance) {
  app.setErrorHandler((error, _request, reply) => {
    if (error instanceof HttpError) {
      return reply.code(error.statusCode).send({
        error: error.code,
        message: error.message,
      });
    }

    app.log.error(error);
    return reply.code(500).send({
      error: "internal_error",
      message: "Something went wrong.",
    });
  });
}
