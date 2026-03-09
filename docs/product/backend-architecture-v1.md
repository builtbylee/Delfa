# Delfa Backend Architecture V1

- Version: `0.1.0`
- Date: `2026-03-09`
- Status: `Implementation-ready architecture plan`

## 1. Goal

Define a backend structure that supports Delfa's core product rules from day one:

- no weak first match
- one active match at a time
- strong transactional consistency across matching and trust
- private attraction and profiler signals
- durable lifecycle timers and follow-ups
- outcome learning from real dates

## 2. Architecture Decision

Delfa should start as a `modular monolith`, not a microservice system.

Why:

- the product has tightly coupled write paths:
  - profiler updates affect ranking
  - trust decisions affect match eligibility
  - post-date outcomes affect attraction and ranking
  - subscriptions affect product access
- early-stage density and product learning matter more than independent service scaling
- a single codebase and single transactional database reduce failure modes at launch

The code should still be designed with `hard module boundaries` so that high-load or high-risk domains can be extracted later if needed.

## 3. Runtime Shape

Launch with three backend runtime surfaces:

1. `API service`
   - synchronous read/write APIs
   - auth/session handling
   - profile and profiler flows
   - match interaction reads/writes
   - admin and ops APIs

2. `Worker service`
   - background jobs
   - quality-hold reevaluation
   - match lifecycle timers
   - media processing orchestration
   - analytics rollups
   - trust/safety automations

3. `Realtime gateway`
   - websocket or equivalent session fanout
   - chat delivery
   - typing/presence events
   - guided-prompt reveal events

These can initially ship from the same codebase and the same deployment stack, but they should run as separate processes.

## 4. Module Boundaries

`apps/api` should be organized into bounded modules.

### 4.1 Core modules

- `identity`
  - accounts
  - auth sessions
  - device registration
  - verification state

- `profile`
  - public profile data
  - private ranking-only profile data
  - media assets
  - location and launch-city membership

- `profiler`
  - section definitions
  - responses
  - mirror moments
  - compatibility preview
  - confidence state

- `attraction`
  - pairwise decks
  - attraction signal store
  - attraction embeddings and preference vectors
  - fit scoring

- `matching`
  - eligibility filters
  - ranking
  - quality floor
  - quality hold
  - surfaced-match reasons

- `match_lifecycle`
  - active match state machine
  - guided interaction rounds
  - ready-to-meet
  - before-we-meet
  - graceful disconnect

- `outcomes`
  - post-date reflections
  - see-again intent
  - outcome learning updates

- `trust_safety`
  - reports
  - moderation actions
  - trust tiers
  - verification workflows
  - abuse and repeat-offender handling

- `billing`
  - entitlements
  - subscriptions
  - receipts

- `measurement`
  - product events
  - activation metrics
  - quality and trust metrics

- `ops_admin`
  - launch-mode human review
  - trust tooling
  - queue inspection
  - match approval and hold tools

### 4.2 Shared infrastructure modules

- `db`
- `cache`
- `storage`
- `events`
- `telemetry`
- `config`
- `authz`

## 5. Data Ownership Rules

Each module owns its own tables and write paths.

Rules:

- read across modules is allowed through well-defined queries
- write across module tables is only allowed through the owning module
- cross-module workflows use application services and domain events
- no module reaches directly into another module's private business logic

This is the main protection against a distributed monolith forming inside one codebase.

## 6. Persistence Strategy

### 6.1 Primary system of record

- `PostgreSQL` is the system of record
- keep transactional product data in Postgres
- use `pgvector` for attraction and similarity features that benefit from nearest-neighbor search

### 6.2 Secondary infrastructure

- `Redis` for cache, rate limits, ephemeral presence, websocket fanout support, and job coordination
- `Object storage` for profile media, verification assets, and generated derivatives

### 6.3 Do not use at launch

- no multi-database microservice split
- no Kafka-style event bus from day one
- no separate OLTP and search clusters unless scale proves the need

## 7. Security Model

Use `application-layer authorization` first, with `row-level security` on the most sensitive user-owned tables as defense in depth.

Apply extra protection to:

- private profiler responses
- attraction vectors and ranking-only preference data
- trust/safety cases
- post-date reflections
- moderation notes

## 8. Realtime and Chat

Chat and guided prompts should not be modeled as a separate chat product.

Rules:

- match-scoped only
- one active match per user
- message delivery and read states stored in Postgres
- websocket layer handles live delivery and presence
- Redis can support fanout and short-lived presence state

## 9. Evolution Path

Start with the modular monolith. Extract only when one of these becomes true:

- trust/safety tooling needs separate isolation and staffing
- realtime delivery scales very differently from core APIs
- ranking workloads materially impact core transactional latency
- analytics ingest volume justifies a separate pipeline

Probable first extractions later:

1. realtime gateway
2. analytics/event pipeline
3. trust/safety review tooling

## 10. External Research Basis

This architecture decision is grounded in current primary guidance and mature engineering practice:

- Martin Fowler's `Monolith First` guidance argues that successful microservice systems usually start as a monolith and emphasize modularity from the start.
- PostgreSQL current docs support row-level security, declarative partitioning, and logical replication as built-in scaling and safety primitives.
- pgvector supports exact and approximate nearest-neighbor search with HNSW and IVFFlat inside Postgres, which is a strong fit for Delfa's attraction engine without introducing a separate vector database on day one.
- OpenTelemetry's current documentation supports a standardized traces/metrics/logs approach for backend observability from day one.

References:

- [Martin Fowler: Monolith First](https://martinfowler.com/bliki/MonolithFirst.html)
- [PostgreSQL Row Security Policies](https://www.postgresql.org/docs/current/ddl-rowsecurity.html)
- [PostgreSQL Declarative Partitioning](https://www.postgresql.org/docs/current/ddl-partitioning.html)
- [PostgreSQL Logical Replication](https://www.postgresql.org/docs/current/logical-replication.html)
- [pgvector](https://github.com/pgvector/pgvector)
- [OpenTelemetry Documentation](https://opentelemetry.io/docs/)

## 11. Success Criteria

The architecture is correct if it gives Delfa:

- fast product iteration in one codebase
- strict transactional consistency where trust depends on it
- clear module ownership
- enough scale headroom for one-city launch and early growth
- clean extraction paths later without a rewrite
