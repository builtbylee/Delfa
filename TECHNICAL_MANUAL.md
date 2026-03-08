# TECHNICAL_MANUAL

- Version: `0.1.0`
- Date: `2026-03-08`
- Status: `Foundational blueprint`

## 1. Product Definition

### 1.1 Product Name

`Delfa`

### 1.2 Product Thesis

Delfa is a dating app for people seeking a healthy long-term relationship. It differentiates itself by prioritizing intentionality, compatibility, and follow-through rather than endless browsing and low-effort interactions.

### 1.3 Core Differentiators

- One meaningful match at a time
- Progressive profiler that grows over time
- Graceful disconnects with structured feedback
- Compatibility modeled on data-backed relationship factors
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

## 3. Product Architecture

### 3.1 Primary User Flows

1. User signs up and completes lightweight onboarding.
2. User completes initial profiler modules.
3. Matching engine produces one active match.
4. Users enter a guided exploration period.
5. Match resolves in one of three ways:
   - mutual progression
   - graceful disconnect
   - timeout/inactivity resolution
6. Feedback updates future ranking and profiler calibration.

### 3.2 Core Product Modules

- Auth and account management
- User profile and media
- Progressive profiler
- Matching engine
- Match lifecycle management
- Chat and guided prompts
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

### 5.2 Progressive Profiling

The profiler should be modular:

- Phase 1: core identity, intent, non-negotiables
- Phase 2: values, lifestyle, and communication patterns
- Phase 3: attachment, conflict, stress, and intimacy
- Phase 4: ongoing calibration through behavior and reflection

Current working profiler structure and question design live in `docs/product/profiler-v1.md`.

### 5.3 Sensitive Preference Handling

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

### 6.2 Match Delivery Model

- One active match at a time by default
- Match unlock cadence controlled by lifecycle completion
- No infinite feed or swipe stack in the core experience
- Premium should improve insight quality, not volume

### 6.3 Feedback Loop

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

## 8. Technical Stack Direction

This section is directional and may be refined once implementation begins.

### 8.1 App Surfaces

- `apps/mobile`: primary client application
- `apps/api`: backend API and matching services
- `packages/shared`: shared types, validation, and domain models

### 8.2 Recommended Initial Stack

- Mobile: React Native with TypeScript
- Backend: TypeScript service layer
- Database: PostgreSQL
- Auth: managed auth provider or secure first-party auth
- File storage: cloud object storage for media
- Payments: Stripe or equivalent

## 9. Initial Data Model Domains

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

## 10. Security and Privacy Requirements

- Minimize collection of sensitive data
- Treat identity-related data as high-sensitivity
- Separate public profile data from ranking-only data
- Never expose internal scoring logic directly
- Avoid storing unnecessary free-text sensitive explanations
- Provide auditable controls for moderation and abuse handling

## 11. Build Sequence

### Phase 1

- Finalize product requirements
- Finalize profiler schema
- Finalize match lifecycle rules
- Stand up repo, tooling, and design system foundations

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
