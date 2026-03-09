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
- Strengthened the profiler to better capture stress communication, commitment behavior, values salience, disappointment reactivity, and touch-style intimacy fit
- Added implementation-ready profiler-experience and match-interaction specs covering mirror moments, compatibility preview, richer attraction calibration, voice-first prompts, shared micro-experiences, reciprocal disclosure rounds, and faster ready-to-meet gating
- Added first-match delivery policy, launch-mode human review, and a recommended launch strategy centered on density, cohort quality, and outcome-driven growth
- Added implementation-ready attraction-engine, live-ranking, post-date learning, trust/safety, and measurement-system specs plus shared matching contracts
- Added the backend architecture pack covering service boundaries, PostgreSQL schema design, API surface, async jobs/events, and infrastructure/deployment
- Locked the concrete backend stack and scaffolded the initial `apps/api` Fastify workspace with separate API, worker, and realtime entrypoints
- Updated the explainer deck so its architecture slides match the current backend stack and module boundaries

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
- Revised V1 should stay simple: guided getting-to-know-you prompts, graceful disconnect, readiness check-in, mutual ready-to-meet, and a lightweight before-we-meet flow
- Slow reveal profile, conversation nudges, private pattern engines, and operating-manual features are deferred
- Lifecycle design should default to soft commitment, anti-limbo timeouts, and always-available immediate exits for user agency
- Profiler questions should favor stress behavior, real investment style, and concrete values salience over vague self-improvement language
- The profiler should feel like a short self-discovery experience: section framing in, mirror moment out
- Attraction should be learned through private pairwise calibration plus real match behavior, not only stated type language
- The active-match experience should move through three lightweight rounds before users drift into endless chat
- Delfa should prefer waiting for a strong first match over surfacing a weak one quickly
- Launch mode should use a tightly controlled cohort plus human-assisted first-match review
- Attraction should be treated as a first-class private engine, not a cosmetic afterthought
- Post-date reflections should stay private and should be the strongest learning signal in the system
- Delfa should optimize for first-match plausibility, date conversion, second-date intent, and trust, not time-on-app
- Backend should launch as a modular monolith with separate API, worker, and realtime runtimes, not microservices
- Use a transactional outbox plus worker model before introducing a dedicated event bus
- Concrete backend stack is now Fastify + TypeBox + Drizzle + pg-boss + Clerk + Fly.io + Cloudflare + OneSignal

## Open Questions

- Exact mobile framework choices
- Final profiler schema and question bank
- Sensitive-preference calibration rules and fairness constraints
