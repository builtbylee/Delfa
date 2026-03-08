# Delfa Explainer Deck V1

- Version: `0.1.0`
- Date: `2026-03-08`
- Format: `Markdown slide source`
- Status: `Investor / product explainer draft`

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
- guided compatibility discovery
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
4. Match enters a guided discovery phase
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

## Compatibility Discovery Journey

Each active match moves through a shared discovery path instead of unstructured chat alone.

Design rules:

- `3-5` early discovery prompts
- asynchronous completion
- `15-30 seconds` per prompt
- up to `24 hours` to respond
- both answers revealed only after both users respond

Goal:

Compatibility should be experienced, not declared by a score.

---

# Slow Reveal Profile

## Discovery in layers

The match experience should reveal depth progressively.

Layer 1:

- photos
- relationship intent
- high-level lifestyle
- voice or written prompts

Layer 2:

- deeper profile signal after discovery participation

Layer 3:

- richer compatibility explanations after sustained mutual effort

Constraint:

This should feel like discovery, not withholding.

---

# Match Guidance

## Helping users date better without gamifying it

Key mechanisms:

- private conversation nudges
- compatibility confidence by dimension
- mutual ready-to-meet signal
- optional readiness check-ins

Important:

- no visible conversation score
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
- one final in-person conversation seed

This is where current apps largely stop helping.  
Delfa should keep helping.

---

# Ending Matches Well

## Graceful Disconnect with Growth

Instead of ghosting, users can close a match respectfully and safely.

The system should capture:

- curated shared closure reasons
- private calibration signals
- private longitudinal pattern summaries

Examples:

- `Your strongest matches progress when the pace is steady`
- `Communication energy has been a repeated mismatch`

This becomes one of Delfa's signature systems.

---

# Relationship Operating Manual

## Premium long-term value

As profiler and interaction data improve, Delfa can generate a private relationship operating manual.

Examples:

- what helps me feel safe
- what I need after tension
- what strengthens chemistry for me
- what pace works best for me

Later, a match-safe shareable version can be unlocked.

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

# Technical Architecture

## Current repo direction

Monorepo structure:

- `apps/mobile`
- `apps/api`
- `packages/shared`

Current shared implementation foundation:

- profiler types
- question bank
- API contracts

Primary architecture docs:

- `TECHNICAL_MANUAL.md`
- `docs/product/profiler-*.md`
- `docs/product/match-experience-v1.md`

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

1. Match lifecycle spec
2. Discovery journey schema
3. Confidence model contract
4. Graceful disconnect taxonomy
5. Ready-to-meet and before-we-meet contracts
6. API and mobile implementation

## Bottom line

Delfa's advantage is not just better matching.  
It is a better structure for how real relationships begin.
