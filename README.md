# Delfa

Delfa is a relationship-first dating app designed to replace swipe fatigue with one high-quality match at a time.

[![Delfa interactive deck preview](https://raw.githubusercontent.com/builtbylee/Delfa/main/docs/presentations/assets/delfa-deck-hero-v3.svg)](https://builtbylee.github.io/Delfa/presentations/delfa-explainer-deck.html)

[Open Interactive Deck](https://builtbylee.github.io/Delfa/presentations/delfa-explainer-deck.html)

## Core Product Principles

- One active match at a time
- Progressive profiling instead of a long upfront questionnaire
- No weak first match; Delfa waits until quality clears a bar
- Data-backed compatibility focused on long-term relationship outcomes
- Graceful disconnects instead of ghosting
- Incentives for effort, honesty, and follow-through

## Repository Structure

```text
.
├── .github/
│   ├── ISSUE_TEMPLATE/
│   └── PULL_REQUEST_TEMPLATE.md
├── apps/
│   ├── api/
│   └── mobile/
├── docs/
│   ├── product/
│   └── research/
├── packages/
│   └── shared/
├── CHANGELOG.md
├── CLAUDE.md
├── ISSUES.md
├── README.md
├── RELEASE_MANIFEST.md
└── TECHNICAL_MANUAL.md
```

## Documentation

- `README.md`: repo overview and working conventions
- `TECHNICAL_MANUAL.md`: product and architecture blueprint
- `docs/product/profiler-v1.md`: first structured profiler spec and question architecture
- `docs/product/profiler-question-bank-v1.md`: canonical question wording and answer inventory
- `docs/product/profiler-schema-v1.md`: canonical profiler question schema and response rules
- `docs/product/profiler-data-model-v1.md`: profiler persistence and domain-model draft
- `docs/product/profiler-scoring-v1.md`: compatibility-scoring draft for V1
- `docs/product/profiler-user-flows-v1.md`: implementation-ready profiler UX flows
- `docs/product/match-experience-v1.md`: core match-stage differentiators and interaction design direction
- `docs/product/match-lifecycle-v1.md`: canonical state machine for active matches, exits, timeouts, and next-match unlock rules
- `docs/product/match-delivery-policy-v1.md`: first-match quality floor, cold-start priors, and launch-mode human review rules
- `docs/product/launch-strategy-v1.md`: recommended launch and growth strategy once Delfa is ready
- `docs/product/attraction-engine-v1.md`: implementation-ready attraction engine design and guardrails
- `docs/product/live-ranking-v1.md`: implementation-ready live ranking and queueing policy
- `docs/product/post-date-learning-v1.md`: private post-date reflection and learning loop
- `docs/product/trust-safety-v1.md`: trust, verification, reporting, and safety operations
- `docs/product/measurement-system-v1.md`: activation, outcome, trust, and launch metrics
- `docs/product/backend-architecture-v1.md`: backend runtime shape, module boundaries, and persistence strategy
- `docs/product/database-schema-v1.md`: initial PostgreSQL schema ownership and indexing plan
- `docs/product/api-surface-v1.md`: public and internal API surface plan
- `docs/product/async-jobs-events-v1.md`: transactional outbox, worker jobs, and domain event design
- `docs/product/infrastructure-deployment-v1.md`: launch infrastructure, observability, and deployment plan
- `docs/presentations/delfa-explainer-deck-v1.md`: explainer deck source covering Delfa's product direction and architecture
- [`docs/presentations/delfa-explainer-deck.html`](docs/presentations/delfa-explainer-deck.html): GitHub Pages-ready interactive explainer deck
- `docs/research/market-and-relationship-research.md`: evidence base for product and profiler decisions
- `docs/research/dating-app-strengths.md`: verified strengths from current dating apps worth adapting for Delfa
- `CHANGELOG.md`: chronological project changes
- `ISSUES.md`: current product and engineering backlog
- `RELEASE_MANIFEST.md`: release scope and version tracking
- `CLAUDE.md`: project context and recently completed work

## Shared Implementation

- `packages/shared/src/profiler/types.ts`: canonical profiler domain types
- `packages/shared/src/profiler/question-bank.ts`: shared section/question definitions derived from the profiler docs
- `packages/shared/src/profiler/contracts.ts`: API request and response contracts for profiler flows
- `packages/shared/src/profiler/experience.ts`: shared profiler experience definitions for section framing, mirror moments, compatibility preview, and attraction calibration
- `packages/shared/src/match/types.ts`: canonical match-interaction domain types
- `packages/shared/src/match/matching-policy.ts`: shared first-match quality floor and launch cohort policy definitions
- `packages/shared/src/match/attraction.ts`: shared attraction-engine policy and signal definitions
- `packages/shared/src/match/interaction-catalog.ts`: default three-round chemistry path and ready-to-meet gating rules
- `packages/shared/src/match/ranking.ts`: shared live-ranking stage and weight definitions
- `packages/shared/src/match/outcomes.ts`: shared post-date reflection payloads and learning policy
- `packages/shared/src/match/trust-safety.ts`: shared verification, reporting, and enforcement policy definitions
- `packages/shared/src/match/measurement.ts`: shared product event and metric definitions
- `packages/shared/src/match/contracts.ts`: API request and response contracts for guided match interactions
- `packages/shared/src/index.ts`: shared package export surface

## Initial Scope

This repository now has a documentation-first foundation plus shared profiler, matching, trust/safety, outcome-learning, and backend architecture definitions. The next implementation phase should wire these contracts and backend plans into `apps/api` and `apps/mobile`.
