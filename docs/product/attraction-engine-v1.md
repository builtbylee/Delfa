# Delfa Attraction Engine V1

- Version: `0.1.0`
- Date: `2026-03-09`
- Status: `Implementation-ready attraction policy`

## 1. Goal

Make attraction fit strong enough that the first surfaced match feels plausibly in range.

The attraction engine should:

- improve first-match plausibility
- stay private and non-stigmatizing
- learn from real choices and real outcomes
- avoid reducing attraction to a single photo or a public type label

## 2. Core Rules

1. `Attraction is a first-class input`
   Compatibility without plausible attraction is not a strong match.

2. `Learn from revealed choices`
   Delfa should infer attraction from pairwise selections and real match behavior, not from blunt public filters.

3. `Keep the model private`
   Attraction calibration is private matching infrastructure, not user-facing identity.

4. `Use cold-start signal and live signal together`
   Basics calibration should create a strong starting prior. Live behavior should refine it.

## 3. Cold-Start Inputs

Primary initial inputs:

- Basics pairwise calibration
- extended attraction calibration
- public media quality and style metadata
- practical date viability
- launch-cohort context

The Basics experience should be enough to prevent obvious attraction misses on day one.

## 4. Card System Design

The pairwise card system should be controlled, not random.

Each comparison should vary only `1-2` major dimensions at a time.

Primary dimensions:

- `presentation`
  - relaxed
  - polished
  - playful
  - understated

- `energy`
  - calm
  - warm
  - intense
  - social

- `setting`
  - homey
  - urban
  - outdoors
  - creative

- `style`
  - minimal
  - expressive
  - classic
  - trend-forward

- `grooming and polish`
  - softer
  - sharper
  - natural
  - curated

Rules:

- use synthetic or licensed assets, not real user media
- localize deck composition by market where helpful
- avoid comparing too many dimensions at once
- avoid making ethnicity or other protected-trait patterns the visible logic of the system

## 5. Cold-Start Candidate Fit

The engine should create a private attraction profile for each user based on:

- repeated pairwise selections
- attraction-related profiler answers
- what kinds of visual/social presentation the user tends to choose

For each candidate, Delfa should estimate:

- `attraction_in_range`
- `attraction_uncertain`
- `attraction_unlikely`

Only `in_range` or strong `uncertain` candidates should reach the first-match quality floor.

## 6. Live Learning Signals

The attraction model should refine from:

- whether the user opens the surfaced match quickly
- whether they reply after opening
- whether they complete round 1 voice
- whether they reach mutual ready-to-meet
- whether they indicate attraction or chemistry grew after a date
- whether they disconnect for `no chemistry` or `attraction did not grow`

Positive signals should raise confidence.
Repeated negative signals should narrow the user’s private attraction model.

## 7. Guardrails

- no public attraction score
- no public “your type is...” label
- no protected-trait exclusion UI
- no popularity loops
- no one-sided attractiveness ranking as the primary matching system

Attraction learning should improve fit without turning Delfa into a beauty marketplace.

## 8. Success Criteria

The attraction engine is working when:

- first-match rejection from obvious non-attraction is low
- open-to-reply conversion is healthy
- post-date attraction is `same or stronger than expected` at a useful rate
- users trust that surfaced matches are in the right range visually and socially
