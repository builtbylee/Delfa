import { eq } from "drizzle-orm";

import type { AuthenticatedUser } from "../../auth/clerk.js";
import { getDb } from "../../db/client.js";
import {
  users,
  verificationState,
} from "../../db/schema/index.js";

export async function ensureIdentityUser(authUser: AuthenticatedUser) {
  const db = getDb();

  const existing = await db.query.users.findFirst({
    where: eq(users.clerkUserId, authUser.clerkUserId),
  });

  if (existing) {
    return existing;
  }

  const [created] = await db
    .insert(users)
    .values({
      clerkUserId: authUser.clerkUserId,
    })
    .returning();

  if (!created) {
    throw new Error("identity_user_create_failed");
  }

  await db.insert(verificationState).values({
    userId: created.id,
  });

  return created;
}
