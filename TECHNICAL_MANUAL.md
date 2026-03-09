# TECHNICAL_MANUAL

- Version: `0.6.0`
- Date: `2026-03-09`
- Status: `Foundational blueprint`

## 1. Product Definition

### 1.1 Product Name

`Delfa`

### 1.2 Product Thesis

Delfa is a dating app for people seeking a healthy long-term relationship. It differentiates itself by prioritizing intentionality, compatibility, and follow-through rather than endless browsing and low-effort interactions.

### 1.3 Core Differentiators

- One meaningful match at a time
- Progressive profiler that grows over time
- Scenario-framed profiler sections with mirror moments and compatibility preview
- No weak first match; Delfa waits until confidence clears a quality bar
- Guided getting-to-know-you prompts after matching
- Voice-first guided interaction and shared micro-experiences inside the match flow
- Graceful disconnects with structured feedback
- Mutual ready-to-meet and a guided pre-date protocol
- Compatibility confidence tied to profiler depth
- Compatibility modeled on data-backed relationship factors
- Launch-mode human-assisted first-match review
- In-app experience only; no events or meetup layer

## 2. User Problems Delfa Solves

### 2.1 Current Dating App Gaps

- Swipe fatigue and choice overload
- Ghosting and lack of closure
- Shallow or dishonest profiles
- Unclear relationship intent
- Low trust caused by bots, scams, and low-effort behavior
- Incentive structures designed to maximize engagement rather than outcomes

### 2.2 Delfa Response

- Limit active attention to one strong match
- Require meaningful profile signal before high-quality matching
- Learn from user behavior and graceful disconnects
- Make relationship intent and life goals core inputs
- Reward consistency, responsiveness, and seriousness
- Help users get to know each other through a small number of guided shared prompts rather than relying on an empty chat box

## 3. Product Architecture

### 3.1 Primary User Flows

1. User signs up and completes lightweight onboarding.
2. User completes initial profiler modules.
3. Matching engine waits until the first-match quality floor is cleared.
4. Matching engine produces one active match.
5. Users enter a guided exploration period.
6. Match resolves in one of three ways:
   - mutual progression
   - graceful disconnect
   - timeout/inactivity resolution
7. Feedback updates future ranking and profiler calibration.
8. If both users are ready, Delfa guides the transition to an in-person date.

The canonical lifecycle state machine lives in `docs/product/match-lifecycle-v1.md`.

### 3.2 Core Product Modules

- Auth and account management
- User profile and media
- Progressive profiler
- Matching engine
- Match delivery policy and first-match quality floor
- Match lifecycle management
- Chat and guided prompts
- Match interaction plan orchestration
- Attraction engine
- Live ranking engine
- Post-date learning loop
- Graceful disconnect workflow
- Trust and safety controls
- Subscription and entitlements
- Analytics and experimentation

## 4. Relationship Science Basis

The profiler and matching logic should prioritize:

- Relationship intent and commitment
- Attachment security
- Emotional stability and self-regulation
- Communication and repair patterns
- Partner responsiveness and empathy
- Values and worldview alignment
- Lifestyle and financial compatibility
- Family and children alignment
- Stress and coping style
- Intimacy and sexual compatibility

These factors should carry greater weight than surface preferences or hobby overlap.

Detailed supporting evidence is documented in `docs/research/market-and-relationship-research.md`.

## 5. Profiler Design Principles

### 5.1 Input Design

Avoid self-flattering direct prompts where users can easily choose the idealized answer.

Prefer:

- Scenario-based questions
- Forced tradeoff questions
- Recent-behavior questions
- Ranking and prioritization
- Repeated signals over time
- Behavioral learning from likes, skips, response quality, and disconnect reasons
- Questions on stress behavior, commitment behavior, and intimacy style where the research shows they materially affect long-term fit

### 5.2 Progressive Profiling

The profiler should be modular:

- Phase 1: core identity, intent, non-negotiables
- Phase 2: values, lifestyle, and communication patterns
- Phase 3: attachment, conflict, stress, and intimacy
- Phase 4: ongoing calibration through behavior and reflection

The profiler experience should also include:

- section journey framing
- section-complete mirror moments
- compatibility preview immediately after Basics
- richer attraction calibration through adaptive pairwise cards

Current working profiler structure and question design live in `docs/product/profiler-v1.md`.

The current profiler now includes stronger direct coverage for:

- stress and communication under pressure
- commitment and investment style once dating becomes real
- religion/spirituality salience as a values-alignment input
- disappointment reactivity as an emotional-stability signal
- touch-style preferences inside intimacy fit

### 5.3 Confidence and Progressive Signal

Delfa should not show a simplistic match percentage.

Instead, it should expose confidence by dimension, tied directly to completed profiler sections and interaction data.

Example:

- life direction confidence
- communication and repair confidence
- intimacy confidence

The product should explicitly tell users which section completion would improve low-confidence dimensions.

The product should also be explicit when it is holding for a stronger first match instead of surfacing a weak one.

### 5.4 Sensitive Preference Handling

Delfa should not expose blunt exclusion filters for protected characteristics such as race or ethnicity.

Recommended approach:

- Capture explicit compatibility around lifestyle, goals, religion, age range, distance, and relationship structure
- Use respectful mutual eligibility settings where required
- Learn attraction patterns through positive framing, behavioral signals, and disconnect data
- Never share protected-trait-based rejection reasons with other users
- Audit ranking outcomes for unfair bias

## 6. Matching System Blueprint

### 6.1 Ranking Inputs

- Stated preferences
- Non-negotiable compatibility
- Relationship science dimensions
- Behavioral calibration data
- Match effort and reliability signals
- Safety and trust scores
- Local cohort quality
- Population-level priors from similar successful pairings

### 6.2 Match Delivery Model

- One active match at a time by default
- Match unlock cadence controlled by lifecycle completion
- No infinite feed or swipe stack in the core experience
- Premium should improve insight quality, not volume
- Each match should include a lightweight guided getting-to-know-you flow with shared prompts
- First-match surfacing should follow the delivery policy in `docs/product/match-delivery-policy-v1.md`
- The first active-match experience should be a three-round chemistry path:
  - round 1: voice-first warmth prompt
  - round 2: shared micro-experience
  - round 3: deeper reciprocal disclosure

### 6.3 Match Experience Differentiators

- private readiness check-ins
- mutual ready-to-meet signal
- before-we-meet protocol
- graceful disconnect
- faster ready-to-meet availability once enough real interaction signal is present

### 6.4 Feedback Loop

Each completed match should produce structured signals:

- chemistry
- conversation style
- values alignment
- lifestyle alignment
- timing/readiness
- attraction
- relationship goals

Feedback should be split into:

- user-visible closure reasons
- private ranking/calibration signals

Detailed match-stage direction lives in `docs/product/match-experience-v1.md`.

### 6.5 First-Match Quality Policy

Delfa should not rely on later behavioral learning to rescue a weak cold start.

The first match should be surfaced only when all of these are true:

- attraction is likely in range
- relationship intent aligns
- life-goal compatibility is plausible
- the users can realistically meet
- both users are active and ready

In launch mode:

- use a tightly controlled cohort
- prefer `24-72` hour wait windows over weak first matches
- allow founder or ops review before first-match surfacing

Detailed rules live in `docs/product/match-delivery-policy-v1.md`.

### 6.6 Attraction Engine

The attraction engine should:

- use controlled pairwise calibration cards
- create a strong cold-start attraction prior
- learn from real match behavior and post-date outcomes
- stay private and avoid public type labels

Detailed rules live in `docs/product/attraction-engine-v1.md`.

### 6.7 Live Ranking

The ranking engine should:

- filter eligibility first
- enforce the quality floor before ranking
- use strong cold-start priors
- refine from similar successful pairings
- improve further with behavioral and post-date learning

Detailed rules live in `docs/product/live-ranking-v1.md`.

### 6.8 Post-Date Learning

The strongest learning loop in Delfa should come from real date outcomes.

The post-date system should:

- ask a short private reflection
- distinguish logistics failure from chemistry failure
- learn whether attraction strengthened, held, or weakened
- use second-date intent as a critical outcome signal

Detailed rules live in `docs/product/post-date-learning-v1.md`.

### 6.9 Trust and Safety Operations

Trust and safety should include:

- staged verification
- trust tiers
- simple report and block flows
- repeat-offender prevention
- integrated date safety tools

Detailed rules live in `docs/product/trust-safety-v1.md`.

### 6.10 Measurement System

Delfa should measure:

- first-match plausibility
- guided interaction completion
- mutual ready-to-meet
- date conversion
- second-date continuation
- trust and safety incident rates

Detailed rules live in `docs/product/measurement-system-v1.md`.

## 7. Monetization

### 7.1 Pricing Direction

- Free tier with meaningful access
- Premium target price: `£9.99 / $9.99` monthly

### 7.2 Monetization Rules

Delfa must not monetize through:

- boosts
- more swipes
- selling visibility
- pay-to-win match access

Premium can monetize:

- deeper compatibility insights
- richer calibration feedback
- advanced reflection tools
- enhanced profile guidance

## 9. Launch Strategy

Recommended launch shape:

- one city
- one clear relationship-minded wedge
- controlled founding cohort
- waitlist led by profiler insight
- women-first trust strategy in straight markets
- product-led sharing rather than early broad paid acquisition

Do not expand until the first city proves density and outcomes.

Detailed launch direction lives in `docs/product/launch-strategy-v1.md`.

## 8. Technical Stack Direction

This section is directional and may be refined once implementation begins.

### 8.1 App Surfaces

- `apps/mobile`: primary client application
- `apps/api`: backend API and matching services
- `packages/shared`: shared types, validation, and domain models

### 8.2 Recommended Initial Stack

- Mobile: React Native with TypeScript
- Backend: Node.js 22 + TypeScript modular monolith with separate API, worker, and realtime runtimes
- Database: PostgreSQL
- Cache and coordination: Redis
- Auth: Clerk
- File storage: Cloudflare R2
- Payments: Stripe or equivalent
- Queueing: pg-boss
- HTTP framework: Fastify
- Validation: TypeBox
- ORM and migrations: Drizzle ORM + drizzle-kit
- Push notifications: OneSignal
- Hosting: Fly.io
- Edge security: Cloudflare DNS, WAF, rate limiting, and Turnstile
- Observability: OpenTelemetry + Sentry

Implementation-ready profiler design artifacts live in:

- `docs/product/profiler-question-bank-v1.md`
- `docs/product/profiler-schema-v1.md`
- `docs/product/profiler-data-model-v1.md`
- `docs/product/profiler-scoring-v1.md`
- `docs/product/profiler-user-flows-v1.md`
- `docs/product/match-lifecycle-v1.md`
- `docs/product/match-experience-v1.md`
- `docs/presentations/delfa-explainer-deck.html`
- `docs/presentations/delfa-explainer-deck-v1.md`

The first live profiler implementation layer now lives in:

- `packages/shared/src/profiler/types.ts`
- `packages/shared/src/profiler/question-bank.ts`
- `packages/shared/src/profiler/contracts.ts`
- `packages/shared/src/profiler/experience.ts`
- `packages/shared/src/match/types.ts`
- `packages/shared/src/match/interaction-catalog.ts`
- `packages/shared/src/match/contracts.ts`

Implementation-ready backend architecture artifacts now live in:

- `docs/product/backend-architecture-v1.md`
- `docs/product/database-schema-v1.md`
- `docs/product/api-surface-v1.md`
- `docs/product/async-jobs-events-v1.md`
- `docs/product/infrastructure-deployment-v1.md`

The initial `apps/api` scaffold now lives in:

- `apps/api/package.json`
- `apps/api/src/app.ts`
- `apps/api/src/bin/api.ts`
- `apps/api/src/bin/worker.ts`
- `apps/api/src/bin/realtime.ts`
- `apps/api/src/modules`
- `apps/api/drizzle.config.ts`

## 9. Backend Architecture Direction

### 9.1 Service boundary model

Start with a modular monolith. Do not split into microservices at launch.

Recommended runtime surfaces:

- API service
- Worker service
- Realtime gateway

Recommended backend modules:

- identity
- profile
- profiler
- attraction
- matching
- match_lifecycle
- outcomes
- trust_safety
- billing
- measurement
- ops_admin

### 9.2 Database direction

Use one PostgreSQL database with logical schemas by domain:

- `identity`
- `profile`
- `profiler`
- `matching`
- `interaction`
- `outcomes`
- `trust`
- `billing`
- `measurement`
- `ops`

Use row-level security as defense in depth on high-sensitivity tables and keep append-heavy tables partitioned only where justified.

### 9.3 API direction

Use:

- REST/JSON for core mobile flows
- WebSocket for realtime chat, guided prompt reveals, and match-state fanout
- internal worker and ops endpoints for automation only

### 9.4 Async execution direction

Use a transactional outbox plus worker model at launch.

Why:

- it keeps async work consistent with committed database state
- it supports lifecycle timers and trust automations
- it avoids premature broker complexity

### 9.5 Infrastructure direction

Launch in one primary region with:

- API service
- Worker service
- Realtime service
- Managed PostgreSQL
- Managed Redis
- Managed object storage
- OpenTelemetry-based observability

## 10. Initial Data Model Domains

- User
- Profile
- ProfilerResponse
- MatchCandidate
- Match
- MatchFeedback
- GracefulDisconnect
- Subscription
- TrustSignal
- PreferenceCalibration

## 11. Security and Privacy Requirements

- Minimize collection of sensitive data
- Treat identity-related data as high-sensitivity
- Separate public profile data from ranking-only data
- Never expose internal scoring logic directly
- Avoid storing unnecessary free-text sensitive explanations
- Provide auditable controls for moderation and abuse handling

## 12. Build Sequence

### Phase 1

- Finalize product requirements
- Finalize profiler schema
- Finalize match lifecycle rules
- Stand up repo, tooling, and design system foundations
- Build shared profiler types and contracts

### Phase 2

- Build authentication
- Build onboarding and profile core
- Build profiler modules
- Build matching service and data model

### Phase 3

- Build chat and guided prompts
- Build graceful disconnect flow
- Build subscription handling
- Build trust and safety controls

### Phase 4

- Instrument analytics
- Validate match quality
- Tune ranking and calibration loops

## 12. Change Log Entry

### 2026-03-08

- Created initial architectural blueprint for Delfa
- Documented product principles, profiler design rules, and matching model
- Established initial technical structure and release baseline
- Added a research brief covering dating app market pain points and data-backed relationship predictors
- Expanded the research brief with a verification pass covering monetization, privacy, AI deception, regulation, and inclusion risks
- Expanded the relationship research with verified findings on positive-event responsiveness, humor/playfulness, and live interaction signals
- Added the first structured profiler spec and a research brief on current dating apps' strongest reusable mechanics
- Added canonical profiler schema, data model, scoring, and UI-flow drafts to move the profiler toward implementation
- Added the canonical profiler question bank with exact wording, answer sets, and display rules
