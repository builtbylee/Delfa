# Delfa Profiler Scoring V1

- Version: `0.3.0`
- Date: `2026-03-09`
- Status: `Implementation-ready draft`

## 1. Goal

Translate profiler responses into:

- hard eligibility rules
- compatibility dimensions
- confidence scores
- user-facing explanations

## 2. Scoring Principles

1. `Hard incompatibilities` should be separated from `soft preferences`.
2. `Relationship process variables` should outweigh low-signal cosmetics.
3. `Behavioral signals` should gradually refine stated preferences.
4. Scoring must remain explainable to users and operators.
5. Attraction should be learned through revealed preferences and match behavior, not only stated type language.
6. A first match should not be surfaced unless it clears Delfa's quality floor.

## 3. Matching Layers

## 3.1 Layer 1: Eligibility

Required pass conditions:

- mutual gender openness
- age range overlap
- distance compatibility
- relationship-structure compatibility

Optional hard filters:

- children incompatibility
- explicit religion non-negotiables
- explicit sobriety non-negotiables

## 3.2 Layer 2: Basics compatibility

Initial weighted dimensions:

- `intent`: `20`
- `life_direction`: `20`
- `pace`: `15`
- `responsiveness`: `10`
- `attachment`: `10`
- `lifestyle`: `10`
- `chemistry`: `15`

Total: `100`

## 3.3 Layer 3: Deep profile refinement

Once deeper sections are completed, add or rebalance:

- `conflict_repair`
- `stress_finance`
- `values`
- `intimacy`

Deeper-section data should increase both:

- match precision
- scoring confidence

## 3.4 Attraction calibration model

Attraction should be treated as its own private calibration layer.

Primary inputs:

- Basics pairwise attraction calibration
- extended attraction calibration
- match open rate on surfaced profiles
- early engagement depth after matching
- graceful disconnect outcomes where users indicate `chemistry` or `attraction` did not grow

Rules:

- pairwise cards should vary by `presentation`, `energy`, `style`, and `setting`
- the model should learn from revealed choices, not ask users to describe a type in words
- attraction mismatch should down-rank matches even when broader compatibility is strong

## 3.5 First-match quality floor

Before a first match is surfaced, the candidate must clear all of these:

- `attraction_likelihood`: minimum `medium confidence`
- `intent_alignment`: hard pass
- `life_goal_compatibility`: minimum `medium confidence`
- `date_viability`: hard pass
- `activity_readiness`: hard pass

Product rule:

- if any gate fails, hold the user in match search rather than surface a weak first match
- prefer a `24-72` hour wait over an obviously wrong first match

Detailed delivery policy lives in `docs/product/match-delivery-policy-v1.md`.

## 3.6 Strong priors before behavioral learning

Cold-start ranking should rely on:

- profiler signal
- hard incompatibility filters
- richer attraction calibration
- local cohort quality
- population-level pattern matching from similar users

Behavioral learning should improve the prior later. It should not be required to make the first match feel credible.

## 4. Confidence Model

Match confidence should depend on:

- how many sections both users completed
- whether key dimensions are directly answered or inferred
- whether behavioral calibration confirms or contradicts stated answers
- whether interaction-stage data from the active match has been gathered

### Suggested output bands

- `low_confidence`
- `medium_confidence`
- `high_confidence`

### Product rule

Confidence should be shown by dimension, not as a single headline compatibility score.

The UI should also map low-confidence dimensions to the profiler section that would improve them.

The Basics completion experience should show:

- strong-signal dimensions
- low-confidence dimensions
- the next profiler section that would improve each weak area

Example:

- `communication_repair` confidence is low
- prompt user to complete `Communication and Repair`

## 5. Behavioral Calibration Rules

Behavior should refine, not instantly override, stated preferences.

### Signals to ingest

- pairwise attraction choices
- like / skip patterns
- response speed consistency
- message effort
- voice note usage
- guided prompt completion
- shared micro-experience choices
- mutual ready-to-meet
- post-date reflection outcomes
- graceful disconnect reasons

### Guardrails

- no protected-trait hard filters from behavioral data
- no popularity feedback loops
- no collaborative filtering that over-concentrates attention on a small user subset

## 6. User-Facing Match Explanation Rules

Each match explanation should include `2-4` concrete reasons.

Allowed categories:

- shared relationship direction
- aligned family plans
- similar communication pace
- strong lifestyle fit
- similar values priorities
- strong humor / playfulness fit
- promising attraction and chemistry indicators

Disallowed categories:

- sensitive private calibration details
- protected-trait rejection logic
- opaque algorithmic phrasing

## 7. Recompute Triggers

Recompute compatibility when:

- Basics is completed
- a public or matching-private answer changes
- a deeper section is completed
- a meaningful behavioral threshold is crossed
- a post-date reflection is submitted
- a graceful disconnect is submitted

## 8. Open Questions

- Should confidence be shown to users directly or only via explanation quality?
- At what threshold should a changed answer invalidate an active future match queue?
- How strongly should graceful disconnect reasons alter future ranking?
