# CHANGELOG

All notable changes to Delfa will be documented in this file.

## [0.1.0] - 2026-03-08

### Added

- Initial repository scaffold
- Core project documentation
- Technical architecture blueprint
- Product backlog and release manifest
- GitHub issue and pull request templates
- Research brief documenting dating app pain points and long-term relationship predictors

### Changed

- Expanded the research brief with a second-pass verification of external dating-app market claims
- Added verified findings on monetization, privacy, AI deception, accessibility, regulation, and market trust decline
- Excluded weakly sourced or unverified market claims from Delfa's evidence base
- Added verified relationship findings on positive-event responsiveness, shared humor/playfulness, and interaction-stage signal capture for profiler design
- Added the first structured profiler spec with Basics plus four deeper sections
- Added research on current dating apps' strongest mechanics and mapped which should be adapted or rejected for Delfa
- Added implementation-ready profiler schema, data model, scoring, and user-flow drafts
- Expanded the dating-app-strengths brief with additional mechanics including voice, nudges, safety infrastructure, accessibility, and ethical success metrics
- Added the canonical profiler question bank with exact question wording, answer options, and conditional display rules
- Added the first shared TypeScript profiler implementation layer with question definitions, domain types, and API contracts
- Added core match-stage differentiator docs covering discovery journeys, confidence by dimension, slow reveal profile depth, readiness check-ins, mutual ready-to-meet, pre-date protocol, and graceful disconnect with growth
- Added the canonical match lifecycle spec covering states, transitions, thresholds, timeouts, exit rules, and next-match unlock logic
- Added an explainer deck source summarizing Delfa's agreed product direction, feature set, and architecture
- Added a GitHub Pages-ready HTML explainer deck and README hero preview
- Simplified V1 by removing slow reveal, conversation nudges, operating-manual concepts, and private pattern-engine features from the core product direction
- Strengthened the profiler with new questions on vulnerability response, stress communication, commitment behavior, religion/spirituality salience, disappointment reactivity, and touch-style intimacy fit
- Added detailed profiler-experience specs for scenario journey framing, mirror moments, compatibility preview, and richer attraction calibration
- Added shared contracts for a three-round match interaction system with voice-first prompts, shared micro-experiences, reciprocal disclosure, and faster ready-to-meet gating
- Added a first-match delivery policy covering quality floors, cold-start priors, and launch-mode human review
- Added a recommended launch strategy centered on one-city density, founding cohorts, insight-led waitlists, and activation-driven expansion
- Added implementation-ready specs for the attraction engine, live ranking, post-date learning, trust and safety operations, and the measurement system
- Added implementation-ready backend architecture docs for service boundaries, database schema, API surface, async jobs/events, and infrastructure/deployment
- Added the concrete backend stack decision and initial `apps/api` scaffold for Fastify, Drizzle, pg-boss, Clerk, Fly.io, managed object storage, and OneSignal
- Corrected the explainer deck architecture slides to match the concrete backend stack and modular backend layout
- Implemented the first persisted backend slice in `apps/api`, including Clerk-backed auth, PostgreSQL/Drizzle access, identity-user provisioning, and database-backed profiler endpoints
- Added an implementation-status matrix so the docs explicitly distinguish implemented systems from scaffolded and spec-only systems
