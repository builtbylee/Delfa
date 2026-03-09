import { createClerkClient, verifyToken } from "@clerk/backend";
import type { FastifyReply, FastifyRequest } from "fastify";

const authHeaderPrefixes = ["Bearer ", "bearer "];

export type AuthenticatedUser = {
  clerkUserId: string;
};

export function getClerkClient() {
  const secretKey = process.env.CLERK_SECRET_KEY;

  if (!secretKey) {
    return null;
  }

  return createClerkClient({ secretKey });
}

function getBearerToken(request: FastifyRequest) {
  const authorization = request.headers.authorization;

  if (!authorization) {
    return null;
  }

  const prefix = authHeaderPrefixes.find((value) =>
    authorization.startsWith(value),
  );

  if (!prefix) {
    return null;
  }

  return authorization.slice(prefix.length).trim();
}

async function verifyClerkBearerToken(token: string) {
  const secretKey = process.env.CLERK_SECRET_KEY;
  const jwtKey = process.env.CLERK_JWT_KEY;

  if (!secretKey && !jwtKey) {
    return null;
  }

  const payload = await verifyToken(token, {
    secretKey,
    jwtKey,
    authorizedParties: process.env.CLERK_AUTHORIZED_PARTIES
      ? process.env.CLERK_AUTHORIZED_PARTIES.split(",").map((value) =>
          value.trim(),
        )
      : undefined,
  });

  return payload;
}

export async function authenticateRequest(
  request: FastifyRequest,
): Promise<AuthenticatedUser | null> {
  const token = getBearerToken(request);

  if (token) {
    const payload = await verifyClerkBearerToken(token);

    if (payload?.sub) {
      return {
        clerkUserId: payload.sub,
      };
    }
  }

  if (process.env.NODE_ENV !== "production") {
    const devUserId = request.headers["x-dev-user-id"];

    if (typeof devUserId === "string" && devUserId.length > 0) {
      return {
        clerkUserId: devUserId,
      };
    }
  }

  return null;
}

export async function requireAuthenticatedUser(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const user = await authenticateRequest(request);

  if (!user) {
    await reply.code(401).send({
      error: "unauthorized",
      message: "A valid Clerk session is required.",
    });

    return null;
  }

  return user;
}
