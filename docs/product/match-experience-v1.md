# Delfa Match Experience V1

- Version: `0.2.0`
- Date: `2026-03-09`
- Status: `Revised V1 direction`

## 1. Purpose

This document defines Delfa's simplified V1 match-stage experience.

The goal is to keep Delfa meaningfully different from swipe-first apps without making the product feel complicated to use.

## 2. V1 Match Features To Keep

These are the match-stage features that remain in V1:

- one active match at a time
- guided getting-to-know-you prompts
- graceful disconnect
- simple compatibility confidence by dimension
- private readiness check-in
- mutual ready-to-meet
- basic before-we-meet flow

## 3. Guided Getting-To-Know-You Prompts

This is the main post-match feature that helps two people get to know each other more naturally than an empty chat box.

User-facing idea:

- a small number of lightweight shared prompts appear after matching
- each person answers privately
- both responses are revealed after both have answered
- the prompt then becomes a natural conversation starter

Design rules for V1:

- `2-3` prompts only
- asynchronous completion
- each prompt should take roughly `15-30 seconds`
- users get up to `24 hours` to answer a prompt
- no compatibility score is shown
- no game-like progression language

Purpose:

- break the ice
- reveal real signal
- create a more natural conversation starting point

Constraint:

- this should feel like support for conversation, not homework

## 4. Compatibility Confidence By Dimension

Delfa should show confidence by dimension rather than a single headline match score.

The confidence view should stay simple.

It should:

- show what Delfa already knows with reasonable confidence
- show where confidence is still low
- suggest which profiler section would improve low-confidence areas

Example:

- `Life direction: high confidence`
- `Communication and repair: low confidence`
- `Improve this by completing Communication and Repair`

Constraint:

- no dense analytics
- no radar chart
- no fake precision

## 5. Graceful Disconnect

Graceful disconnect remains a signature Delfa feature.

Users should always have:

- `Leave now`
- `Graceful disconnect`
- `Block / report`

Rules:

- immediate exit is always available
- full graceful disconnect unlocks after minimum meaningful interaction
- block/report bypasses everything

Purpose:

- reduce ghosting
- preserve user agency
- create better closure without trapping people

## 6. Relationship Readiness Check-In

Readiness check-in should remain in V1, but stay lightweight and private.

It should:

- help users reflect on whether they are genuinely available to date right now
- allow users to slow down or pause without losing their profile
- optionally inform Delfa's private matching logic

It should not be:

- a visible score
- a diagnostic test
- a judgment shown to matches

## 7. Mutual Ready-To-Meet

Each user can privately indicate:

- `I'm open to meeting`

If only one person signals this, the other person is not told.

If both signal it, Delfa reveals:

- `You're both ready to meet`

Purpose:

- remove the awkwardness of one person having to go first
- create a clean transition from in-app interaction to a real date

## 8. Basic Before-We-Meet Flow

The before-we-meet flow should stay intentionally small.

V1 should include only:

1. `Expectations check`
   - what each person wants the first date to be

2. `Safety option`
   - check-in reminder and simple safety tools

3. `Date planning assist`
   - lightweight support in choosing format, area, and logistics

Constraint:

- this should feel helpful, not process-heavy

## 9. Features Removed From V1

These are intentionally removed or deferred:

- slow reveal profile
- conversation nudges / conversation compass
- private growth summaries / pattern engine
- relationship operating manual
- heavy confidence UI

Reason:

- they add complexity faster than they add product clarity
- Delfa's first version should prove the core behavior model before layering in more intelligence

## 10. V1 Product Rules

- no single headline match percentage
- no desirability score
- no visible readiness score
- no conversation scoring
- no profile withholding mechanics
- no pay-to-unlock better humans
- no feature that rewards users for keeping matches in limbo

## 11. Revised V1 Priority Order

1. one active match at a time
2. progressive profiler
3. guided getting-to-know-you prompts
4. graceful disconnect
5. compatibility confidence by dimension
6. private readiness check-in
7. mutual ready-to-meet
8. basic before-we-meet flow
