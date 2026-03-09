# Delfa Explainer Deck V1

- Version: `0.2.0`
- Date: `2026-03-09`
- Format: `Markdown slide source`
- Status: `Investor / product explainer draft aligned to revised V1`

---

# Delfa

## A relationship-first dating app

One meaningful match at a time.  
Built to replace swipe fatigue with depth, honesty, and follow-through.

Core promise:

- fewer matches
- better matches
- less ghosting
- more clarity
- more learning from every interaction

---

# The Problem

## What current dating apps optimize for

- endless browsing
- low-effort engagement
- addictive loops
- superficial evaluation
- ghosting with no closure
- monetization that benefits from users staying single

## What users actually want

- intentional dating
- trust and safety
- genuine compatibility
- clear relationship intent
- less burnout

---

# Delfa's Wedge

## Anti-swipe, relationship-first, evidence-backed

Delfa is not another swipe app with better branding.

It is designed around:

- one active match at a time
- progressive profiling
- guided getting-to-know-you prompts
- graceful disconnect instead of ghosting
- transparency over black-box manipulation

---

# Product Principles

- No swipe-first infinite feed
- No pay-to-win boosts or visibility sales
- No headline match percentage
- No events or meetup layer
- No blunt race or ethnicity exclusion filters
- No dark patterns that keep users in limbo

What Delfa should optimize for:

- relationship outcomes
- respectful follow-through
- trust
- compatibility confidence

---

# How Delfa Works

## High-level flow

1. User signs up
2. User completes `Basics`
3. Delfa surfaces one active match
4. Match enters a lightweight getting-to-know-you phase
5. Both users either:
   - progress
   - signal ready to meet
   - gracefully disconnect
6. Outcome data improves future matching

---

# The Profiler

## Designed for honesty, not performance

The profiler avoids self-flattering direct questions and instead uses:

- scenario-based questions
- forced tradeoffs
- ranking tasks
- pairwise attraction calibration
- repeated signals over time

## Structure

- `Basics`
- `Life Direction`
- `Communication and Repair`
- `Emotional Style and Security`
- `Lifestyle, Intimacy and Chemistry`

Basics gets users to match quickly.  
Deeper sections improve match precision and confidence.

---

# What Basics Captures

## Minimum signal for initial matching

- match scope and eligibility
- relationship direction
- family and structure preferences
- pace and availability
- top partner priorities
- positive-event responsiveness
- uncertainty response
- lifestyle snapshot
- attraction calibration

Design goal:

`maximum useful signal with minimum user effort`

---

# Compatibility Confidence

## Not a single score

Delfa should show confidence by dimension:

- intent
- life direction
- pace
- responsiveness
- attachment
- lifestyle
- chemistry
- conflict and repair
- intimacy
- stress and finance

If confidence is weak, Delfa should say exactly how to improve it:

- `Communication and repair: low confidence`
- `Improve this by completing Communication and Repair`

---

# The Match Experience

## Guided getting-to-know-you prompts

Each active match includes a small number of shared prompts instead of relying on an empty chat box alone.

Design rules:

- `2-3` early prompts
- asynchronous completion
- `15-30 seconds` per prompt
- up to `24 hours` to respond
- both answers revealed only after both users respond

Goal:

The prompts should create a more natural starting point for real conversation.

---

# Match Guidance

## Keeping the match experience simple

Key mechanisms:

- compatibility confidence by dimension
- mutual ready-to-meet signal
- optional readiness check-ins

Important:

- no desirability score
- no leaderboard or streak mechanics

---

# Transition to Real Life

## Before We Meet Protocol

When both users are ready, Delfa should guide the handoff from app to date.

Protocol components:

- mutual expectations check
- safety setup
- first-date planning assistance

This is where current apps largely stop helping.  
Delfa should keep helping.

---

# Ending Matches Well

## Graceful Disconnect

Instead of ghosting, users can close a match respectfully and safely.

The system should capture:

- curated shared closure reasons
- private calibration signals

This becomes one of Delfa's signature systems.

---

# Trust and Safety

## A product pillar, not a moderation afterthought

Delfa should treat safety as core product infrastructure:

- staged verification
- authenticity controls
- ongoing trust signals
- safety-oriented pre-date flows
- respectful closure tools
- careful handling of sensitive data

Trust is part of the product, not just the policy layer.

---

# System Architecture

## Modular monolith, three runtimes, one PostgreSQL database

Backend stack:

- `Fastify + TypeBox`
- `Drizzle ORM + drizzle-kit`
- `PostgreSQL + pgvector + RLS`
- `pg-boss` worker model
- `Redis` for cache, presence, and rate support
- `Clerk` for auth
- `Cloudflare` for DNS, WAF, rate limiting, and Turnstile
- `Cloudflare R2` for object storage
- `OneSignal` for push notifications
- `Sentry + OpenTelemetry` for observability

Runtime shape:

- `apps/api` for synchronous APIs
- `apps/api` worker runtime for outbox jobs and timers
- `apps/api` realtime runtime for websocket fanout
- `packages/shared` for shared contracts and domain models

Backend module boundaries:

- `identity`
- `profile`
- `profiler`
- `attraction`
- `matching`
- `match_lifecycle`
- `outcomes`
- `trust_safety`
- `billing`
- `measurement`
- `ops_admin`

Architecture rules:

- modular monolith first
- transactional outbox + worker model
- no event bus at launch
- no microservices at launch
- extract only when scale proves the need

---

# Product Guardrails

## What Delfa must not become

- a swipe casino
- a dating entertainment feed
- a black-box compatibility scam
- a social events product
- a pay-for-attention marketplace
- a rejection-scoring machine

If a feature increases engagement but reduces honesty, clarity, or trust, it should be rejected.

---

# What Comes Next

## Highest-value implementation sequence

1. Build database schema and migrations
2. Integrate Clerk auth into `apps/api`
3. Implement core API modules against the shared contracts
4. Wire transactional outbox and worker jobs
5. Implement match delivery and ranking pipeline
6. Add realtime chat, guided rounds, and OneSignal delivery

## Bottom line

Delfa's advantage is not just better matching.  
It is a better structure for how real relationships begin.
