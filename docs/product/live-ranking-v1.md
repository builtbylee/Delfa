# Delfa Live Ranking V1

- Version: `0.1.0`
- Date: `2026-03-09`
- Status: `Implementation-ready ranking policy`

## 1. Goal

Turn profiler, attraction, readiness, and outcome data into one high-quality surfaced match at a time.

The ranking system should optimize for:

- plausibility of first match
- mutual interest likelihood
- real date viability
- respectful progression

## 2. Ranking Pipeline

Every candidate should pass through these stages in order:

1. `Eligibility filter`
   Remove obvious incompatibilities.

2. `Quality-floor gates`
   Enforce the first-match floor before ranking.

3. `Cold-start rank`
   Score based on profiler, attraction calibration, and cohort quality.

4. `Population-pattern prior`
   Adjust ranking using similar successful pairings, without popularity bias.

5. `Behavioral refinement`
   Apply user-specific live learning once it exists.

6. `Launch review`
   Human-assisted approval during launch mode.

7. `Surface or hold`
   Surface one match or keep the user in quality hold.

## 3. Hard Gates

Candidates must pass:

- mutual gender openness
- age overlap
- date viability
- relationship structure compatibility
- readiness/activity

Optional hard stops:

- children non-negotiables
- religion non-negotiables
- sobriety non-negotiables

## 4. Cold-Start Weight Profile

Before personal behavioral history exists, the rank should emphasize:

- `intent`: `24`
- `life_direction`: `22`
- `chemistry`: `20`
- `lifestyle`: `12`
- `responsiveness`: `8`
- `pace`: `8`
- `attachment`: `6`

Total: `100`

This weight profile should be used only after the candidate clears the quality floor.

## 5. Deep-Profile Weight Profile

Once both users have deeper signal, reweight toward:

- `intent`: `18`
- `life_direction`: `18`
- `chemistry`: `18`
- `values`: `12`
- `stress_finance`: `10`
- `conflict_repair`: `10`
- `intimacy`: `8`
- `responsiveness`: `4`
- `attachment`: `2`

Total: `100`

## 6. Behavioral Override Rules

Behavior should refine ranking only after meaningful signal exists.

Strong positive signals:

- quick open + reply
- round 1 completion
- mutual ready-to-meet
- post-date `yes` or `maybe` to seeing them again
- post-date attraction equal to or stronger than expected

Strong negative signals:

- repeated `no chemistry`
- repeated early exits before engagement
- no-shows
- safety reports

Behavior should sharpen the model. It should not instantly erase clearly stated non-negotiables.

## 7. Hold Logic

If no candidate passes the quality floor:

- keep the user in `quality_hold`
- do not widen filters aggressively
- do not surface a filler match

Default hold window:

- `24-72` hours

## 8. Surface Rules

When a candidate is surfaced:

- only one active match per user
- include `2-4` plain-language reasons
- ensure the match can realistically progress to a real date

## 9. Guardrails

- no pay-to-win ranking power
- no popularity leaderboard effects
- no collaborative filtering that concentrates attention on a tiny subset
- no hidden suppression without explanation in internal tooling

## 10. Success Criteria

The ranking system is working when:

- first-match open and reply rates are strong
- quality-hold users still trust the product
- ready-to-meet and date conversion are healthy
- second-date rate improves over time
