# Delfa Profiler Scoring V1

- Version: `0.1.0`
- Date: `2026-03-08`
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

## 4. Confidence Model

Match confidence should depend on:

- how many sections both users completed
- whether key dimensions are directly answered or inferred
- whether behavioral calibration confirms or contradicts stated answers

### Suggested output bands

- `low_confidence`
- `medium_confidence`
- `high_confidence`

## 5. Behavioral Calibration Rules

Behavior should refine, not instantly override, stated preferences.

### Signals to ingest

- pairwise attraction choices
- like / skip patterns
- response speed consistency
- message effort
- voice note usage
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
- a graceful disconnect is submitted

## 8. Open Questions

- Should confidence be shown to users directly or only via explanation quality?
- At what threshold should a changed answer invalidate an active future match queue?
- How strongly should graceful disconnect reasons alter future ranking?

