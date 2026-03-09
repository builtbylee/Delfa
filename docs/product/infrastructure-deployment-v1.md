# Delfa Infrastructure and Deployment V1

- Version: `0.1.0`
- Date: `2026-03-09`
- Status: `Implementation-ready infrastructure plan`

## 1. Goal

Define a launch-ready infrastructure shape that is reliable enough for Delfa's trust-sensitive product while staying operationally lean.

## 2. Deployment Model

Launch with one primary region and one environment stack per environment:

- `api`
- `worker`
- `realtime`
- `postgres`
- `redis`
- `object_storage`
- `otel_collector`

Keep staging and production as separate stacks.

## 3. Recommended Managed Components

- `Managed PostgreSQL`
- `Managed Redis`
- `Managed object storage`
- `Managed secrets store`
- `Managed TLS and edge proxy`
- `Managed error/telemetry backend`

The goal is to avoid owning undifferentiated infrastructure too early.

## 4. Region Strategy

For launch:

- run in one region close to the first city
- keep database, worker, and realtime in the same region
- do not introduce multi-region writes at launch

Why:

- match delivery and lifecycle coordination are latency-sensitive
- trust and consistency matter more than global edge distribution at this stage

## 5. Compute Layout

### 5.1 API service

- autoscaled stateless containers
- private network access to Postgres and Redis
- no long-running in-memory workflow state

### 5.2 Worker service

- separate autoscaled pool
- consumes outbox jobs
- runs lifecycle timers, measurement rollups, and trust automations

### 5.3 Realtime service

- separate process from API
- connection-oriented
- websocket fanout and presence

## 6. Storage Layout

### 6.1 PostgreSQL

- primary read/write instance
- point-in-time recovery enabled
- automated backups
- read replica only when proven necessary

### 6.2 Redis

- cache
- rate limiting
- websocket fanout support
- ephemeral presence state

### 6.3 Object storage

- original profile media
- transformed derivatives
- verification assets

Verification assets should be access-controlled separately from public profile media.

## 7. Secrets and Config

- store secrets outside the repo
- rotate provider keys regularly
- separate environment config by stage
- treat trust/safety provider credentials as high-sensitivity

## 8. Observability

Instrument from day one with OpenTelemetry.

Required signals:

- traces for request paths and worker jobs
- metrics for activation, match delivery, trust, and job health
- logs with stable correlation ids

Required dashboards:

- API latency and error rate
- job backlog and dead-letter count
- quality-hold population
- first-match delivery latency
- trust report volume and SLA
- post-date reflection completion

## 9. Release and Migration Rules

- migrations must be forward-safe
- no destructive migration without explicit rollout plan
- feature-flag risky matching changes
- roll out ranking changes with audit visibility

## 10. Business Continuity

- database backups tested by restore, not just enabled
- worker jobs resumable after deploy failure
- realtime disconnect should never corrupt persisted state
- trust enforcement actions must be durable even if notification delivery fails

## 11. Launch Ops Policy

At launch, the ops team should have:

- launch-match review queue
- trust report queue
- dead-letter inspection
- lifecycle retry console
- audit trail access for enforcement decisions

## 12. Success Criteria

The infrastructure plan is correct when:

- launch can run reliably in one city without overbuilding
- backend failures degrade safely rather than corrupting match state
- trust and moderation flows remain operable during incidents
- scaling the API or worker independently does not require architecture changes
