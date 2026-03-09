# Implementation Status

- Version: `0.1.0`
- Date: `2026-03-09`
- Purpose: `Canonical subsystem status matrix`

## Status Labels

- `implemented`: running code exists in the repo beyond placeholders
- `partially_implemented`: foundational code exists, but the subsystem is not end-to-end complete
- `spec_only`: documented and modeled, but not yet implemented in runtime code

## Current Status Matrix

| Subsystem | Status | Notes |
| --- | --- | --- |
| Workspace/tooling foundation | `implemented` | npm workspaces, strict TS baseline, build/typecheck scripts |
| Shared profiler contracts | `implemented` | Shared types, question bank, experience, and contracts exist in `packages/shared/src/profiler` |
| Shared match contracts | `implemented` | Shared matching/attraction/ranking/outcomes/trust/measurement modules exist in `packages/shared/src/match` |
| API bootstrap | `implemented` | Fastify app, API/worker/realtime entrypoints, and centralized error handler exist |
| Clerk auth foundation | `implemented` | Clerk request auth plus dev-only fallback implemented in `apps/api/src/auth/clerk.ts` |
| Database client | `implemented` | Drizzle PostgreSQL client implemented |
| Identity persistence | `implemented` | Identity tables and automatic identity-user provisioning implemented |
| Profile persistence | `partially_implemented` | Profile tables exist; route surface is still scaffold-level |
| Profiler persistence/API | `implemented` | Real DB-backed profiler section/response/completion/summary endpoints implemented |
| Matching API | `spec_only` | Route exists only as scaffold; matching engine not implemented in `apps/api` |
| Match lifecycle runtime | `spec_only` | State machine is documented, not yet implemented server-side |
| Guided match interaction runtime | `spec_only` | Voice/shared rounds are defined in docs/shared contracts, not yet implemented |
| Attraction engine runtime | `spec_only` | Spec and shared policies exist; no runtime ranking/calibration service yet |
| Live ranking runtime | `spec_only` | Spec and shared policies exist; no runtime candidate generation/ranking service yet |
| Post-date learning runtime | `spec_only` | Spec and shared types exist; no API/service implementation yet |
| Trust and safety runtime | `spec_only` | Spec exists; trust-safety route is scaffold only |
| Billing runtime | `spec_only` | Billing route is scaffold only |
| Worker runtime | `partially_implemented` | Worker entrypoint exists; no real jobs/outbox wiring yet |
| Realtime runtime | `partially_implemented` | Realtime entrypoint exists; no real chat/presence/prompt delivery yet |
| Async outbox/jobs | `spec_only` | Documented but not wired into runtime |
| Measurement instrumentation | `spec_only` | Measurement spec exists; no runtime event pipeline yet |
| Mobile app runtime | `spec_only` | `apps/mobile` is still not implemented |

## Practical Reading Of Repo State

What is real today:

- authenticated API foundation
- PostgreSQL persistence foundation
- identity bootstrap
- real profiler persistence and retrieval

What is still planned:

- matching
- trust and safety operations
- realtime interaction
- worker jobs
- post-date learning loop
- billing
- mobile product runtime
