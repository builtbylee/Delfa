# Delfa API Surface V1

- Version: `0.1.0`
- Date: `2026-03-09`
- Status: `Implementation-ready API plan`

## 1. Goal

Define a backend API surface that maps directly to Delfa's core product flows without exposing internal ranking logic.

## 2. API Style

Use:

- `REST/JSON` for primary client APIs
- `WebSocket` for realtime delivery, chat, guided prompt reveals, and presence
- internal worker-trigger APIs only for ops and automation

Rules:

- version public APIs under `/v1`
- keep request/response contracts stable and additive
- validate all inputs at the boundary
- never expose raw internal scores or protected-trait logic

## 3. Public API Domains

### 3.1 Auth and account

- `POST /v1/auth/register`
- `POST /v1/auth/login`
- `POST /v1/auth/refresh`
- `POST /v1/auth/logout`
- `GET /v1/me`
- `PATCH /v1/me/device`

### 3.2 Profile

- `GET /v1/profile/me`
- `PATCH /v1/profile/me`
- `POST /v1/profile/media/upload`
- `PATCH /v1/profile/media/order`
- `DELETE /v1/profile/media/:id`

### 3.3 Profiler

- `GET /v1/profiler/basics`
- `POST /v1/profiler/basics/responses`
- `GET /v1/profiler/sections`
- `GET /v1/profiler/sections/:id`
- `POST /v1/profiler/sections/:id/responses`
- `GET /v1/profiler/preview`
- `GET /v1/profiler/mirror-moment/:sectionId`

### 3.4 Match delivery

- `GET /v1/match/delivery-status`
- `GET /v1/match/current`
- `POST /v1/match/refresh`

### 3.5 Active match experience

- `GET /v1/matches/:matchId`
- `GET /v1/matches/:matchId/rounds`
- `POST /v1/matches/:matchId/rounds/:roundId/respond`
- `GET /v1/matches/:matchId/messages`
- `POST /v1/matches/:matchId/messages`

### 3.6 Ready to meet and date flow

- `POST /v1/matches/:matchId/ready-to-meet`
- `GET /v1/matches/:matchId/before-we-meet`
- `POST /v1/matches/:matchId/before-we-meet`

### 3.7 Match closure and outcomes

- `POST /v1/matches/:matchId/leave-now`
- `POST /v1/matches/:matchId/graceful-disconnect`
- `GET /v1/matches/:matchId/post-date`
- `POST /v1/matches/:matchId/post-date`

### 3.8 Trust and safety

- `GET /v1/trust/overview`
- `POST /v1/trust/report`
- `POST /v1/trust/block`
- `POST /v1/trust/verification/start`
- `GET /v1/trust/verification/status`

### 3.9 Billing

- `GET /v1/billing/entitlements`
- `POST /v1/billing/subscribe`
- `POST /v1/billing/webhooks`

## 4. WebSocket Channels

Use match-scoped channels only.

Event families:

- `match.message.created`
- `match.message.read`
- `match.round.opened`
- `match.round.revealed`
- `match.ready_to_meet.mutual`
- `match.state.changed`
- `match.before_we_meet.updated`
- `trust.case.updated` for admin/ops only

## 5. Internal APIs

Restricted to workers and ops:

- candidate generation
- quality-hold reevaluation
- launch review approval
- trust escalation resolution
- measurement rollup triggers

These should never be exposed directly to the mobile client.

## 6. Response Design Rules

All user-facing responses should:

- explain state clearly
- show next best action
- avoid fake precision
- avoid internal score leakage

Example:

- good: `We’re still looking for someone who clears your match-quality bar.`
- bad: `No candidate exceeded 0.71 final rank.`

## 7. Idempotency and concurrency rules

Required for:

- profiler submissions
- ready-to-meet intent
- before-we-meet updates
- graceful disconnect
- post-date reflections
- trust reports

Use idempotency keys on mutating endpoints that can be retried from mobile clients.

## 8. Success Criteria

The API surface is correct when:

- it maps cleanly to the product flows already defined
- clients never need internal ranking knowledge
- retries are safe on mobile networks
- realtime state changes do not depend on polling alone
