# CLAUDE

## Project Summary

Delfa is a relationship-first dating app focused on one high-quality match at a time, progressive profiling, and graceful disconnects.

## Recently Completed

- Established initial repository structure for Delfa
- Added foundational project documentation
- Created first-pass technical blueprint and release baseline
- Added a research brief grounding Delfa's product and profiler decisions in market and relationship-science evidence
- Strengthened the market research brief with a verification pass that distinguishes verified, partial, and excluded external claims
- Strengthened the relationship-science brief with verified additions on capitalization, shared humor, and interaction-stage signal capture
- Added the first structured profiler spec for Delfa and a dating-app-strengths brief covering reusable mechanics from current apps
- Added profiler schema, data model, scoring, and user-flow drafts to move the profiler toward implementation
- Expanded the app-strengths brief with additional reusable mechanics around safety, voice, accessibility, and explainable matching
- Expanded research brief with Topic C: What Works Well in Current Dating Apps — evidence-backed safety features, UX/UI patterns, and matching algorithms from Tinder, Hinge, Bumble, CMB, OkCupid, and others
- Added the canonical profiler question bank with exact wording and answer inventory
- Added the first shared profiler implementation module with types, question definitions, and API contracts
- Added the first match-experience direction doc covering Delfa's strongest differentiators beyond the profiler
- Added the canonical match lifecycle spec for Delfa's active-match state machine
- Added an explainer deck source summarizing Delfa's product, profiler, match experience, and architecture
- Added a Pages-ready HTML explainer deck plus README hero preview/link

## Working Conventions

- Keep scope tightly aligned to requested product work
- Prefer data-backed compatibility over surface-level matching
- Avoid dark patterns that monetize volume or user frustration
- Treat sensitive identity and preference data with extra care
- Do not treat blog-level dating-app claims as product facts without a stronger verification pass

## Known Product Rules

- No events or meetup feature set
- No swipe-first infinite browsing model
- No pay-to-win boosts or visibility sales
- Matching should prioritize long-term compatibility signals
- Product decisions should be validated against `docs/research/market-and-relationship-research.md`
- Intake profiling alone is insufficient; Delfa should capture interaction-stage relationship signals as well
- Borrow useful mechanics from current apps only when they improve trust, honesty, focus, or clarity without reintroducing swipe-economy incentives
- Profiler implementation should stay config-driven, versioned, privacy-tiered, and explainable
- The question bank is now the source of truth for profiler wording; schema and scoring should reference it instead of inventing new prompts in code
- Shared profiler code should stay config-driven from `packages/shared/src/profiler/question-bank.ts`
- Delfa should prefer compatibility confidence by dimension over a single match percentage
- Match-stage product design should prioritize guided discovery, slow reveal depth, mutual ready-to-meet, and graceful disconnect with growth
- Lifecycle design should default to soft commitment, anti-limbo timeouts, and always-available immediate exits for user agency

## Open Questions

- Exact mobile and backend framework choices
- Final profiler schema and question bank
- Sensitive-preference calibration rules and fairness constraints
