import { Type } from "@sinclair/typebox";
import type { FastifyInstance } from "fastify";
import type { Static } from "@sinclair/typebox";

import { requireAuthenticatedUser } from "../../auth/clerk.js";
import { HttpError } from "../../errors/http.js";
import { ensureIdentityUser } from "../identity/service.js";
import {
  completeProfilerSectionForUser,
  getMirrorMomentForUser,
  getProfilerSectionForUser,
  getProfilerSectionsForUser,
  getProfilerSummaryForUser,
  recomputeProfilerForUser,
  upsertProfilerResponseForUser,
} from "./service.js";
import {
  completeProfilerSectionBodySchema,
  completeProfilerSectionResponseSchema,
  getProfilerSectionResponseSchema,
  getProfilerSectionsResponseSchema,
  getProfilerSummaryResponseSchema,
  postProfilerRecomputeResponseSchema,
  profilerSectionIdSchema,
  upsertProfilerResponseBodySchema,
  upsertProfilerResponseResponseSchema,
  mirrorMomentSchema,
} from "./schemas.js";

type ProfilerSectionParams = {
  sectionId: Static<typeof profilerSectionIdSchema>;
};
type UpsertProfilerResponseBody = Static<typeof upsertProfilerResponseBodySchema>;
type CompleteProfilerSectionBody = Static<typeof completeProfilerSectionBodySchema>;

export async function registerProfilerRoutes(app: FastifyInstance) {
  app.get(
    "/v1/profiler/sections",
    {
      schema: {
        response: {
          200: getProfilerSectionsResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const authUser = await requireAuthenticatedUser(request, reply);
      if (!authUser) return;
      const user = await ensureIdentityUser(authUser);
      return getProfilerSectionsForUser(user);
    },
  );

  app.get<{ Params: ProfilerSectionParams }>(
    "/v1/profiler/sections/:sectionId",
    {
      schema: {
        params: Type.Object({
          sectionId: profilerSectionIdSchema,
        }),
        response: {
          200: getProfilerSectionResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const authUser = await requireAuthenticatedUser(request, reply);
      if (!authUser) return;
      const user = await ensureIdentityUser(authUser);
      return getProfilerSectionForUser(user, request.params.sectionId);
    },
  );

  app.post<{
    Params: ProfilerSectionParams;
    Body: UpsertProfilerResponseBody;
  }>(
    "/v1/profiler/sections/:sectionId/responses",
    {
      schema: {
        params: Type.Object({
          sectionId: profilerSectionIdSchema,
        }),
        body: upsertProfilerResponseBodySchema,
        response: {
          200: upsertProfilerResponseResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const authUser = await requireAuthenticatedUser(request, reply);
      if (!authUser) return;
      const user = await ensureIdentityUser(authUser);

      const result = await upsertProfilerResponseForUser(
        user,
        request.body.questionId,
        request.body.payload,
      );

      if (result.savedResponse.questionId !== request.body.questionId) {
        throw new HttpError(400, "invalid_question", "Question could not be saved.");
      }

      return result;
    },
  );

  app.post<{
    Params: ProfilerSectionParams;
    Body: CompleteProfilerSectionBody;
  }>(
    "/v1/profiler/sections/:sectionId/complete",
    {
      schema: {
        params: Type.Object({
          sectionId: profilerSectionIdSchema,
        }),
        body: completeProfilerSectionBodySchema,
        response: {
          200: completeProfilerSectionResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const authUser = await requireAuthenticatedUser(request, reply);
      if (!authUser) return;
      const user = await ensureIdentityUser(authUser);

      if (request.body.sectionId !== request.params.sectionId) {
        throw new HttpError(
          400,
          "section_mismatch",
          "Route section and body section must match.",
        );
      }

      try {
        return await completeProfilerSectionForUser(user, request.params.sectionId);
      } catch (error) {
        if (
          error instanceof Error &&
          error.message === "section_not_complete"
        ) {
          throw new HttpError(
            400,
            "section_not_complete",
            "Section is not complete yet.",
          );
        }

        throw error;
      }
    },
  );

  app.get(
    "/v1/profiler/preview",
    {
      schema: {
        response: {
          200: getProfilerSummaryResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const authUser = await requireAuthenticatedUser(request, reply);
      if (!authUser) return;
      const user = await ensureIdentityUser(authUser);
      return getProfilerSummaryForUser(user);
    },
  );

  app.get<{ Params: ProfilerSectionParams }>(
    "/v1/profiler/mirror-moment/:sectionId",
    {
      schema: {
        params: Type.Object({
          sectionId: profilerSectionIdSchema,
        }),
        response: {
          200: Type.Object({
            mirrorMoment: Type.Optional(mirrorMomentSchema),
          }),
        },
      },
    },
    async (request, reply) => {
      const authUser = await requireAuthenticatedUser(request, reply);
      if (!authUser) return;
      const user = await ensureIdentityUser(authUser);
      return {
        mirrorMoment: await getMirrorMomentForUser(user, request.params.sectionId),
      };
    },
  );

  app.post(
    "/v1/profiler/recompute",
    {
      schema: {
        response: {
          200: postProfilerRecomputeResponseSchema,
        },
      },
    },
    async (request, reply) => {
      const authUser = await requireAuthenticatedUser(request, reply);
      if (!authUser) return;
      const user = await ensureIdentityUser(authUser);
      return recomputeProfilerForUser(user);
    },
  );
}
