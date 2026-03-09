# Delfa Match Delivery Policy V1

- Version: `0.1.0`
- Date: `2026-03-09`
- Status: `Implementation-ready delivery policy`

## 1. Goal

Protect user trust by making the first surfaced match feel plausible immediately.

Delfa should never surface a first match just because one is available.

The first match should clear a quality bar on:

- attraction likelihood
- intent alignment
- life-goal compatibility
- geographic/date viability
- activity/readiness

## 2. Core Delivery Principles

1. `No match until confidence clears a bar`
   A weak first match is worse than a slower first match.

2. `Strong first-match prior before behavioral learning`
   Early match quality must come from the profiler, attraction calibration, hard filters, and cohort quality before post-match learning exists.

3. `Prefer wait over obvious mismatch`
   Delfa should hold a user in a quality-wait state for `24-72` hours rather than push an obviously weak first match.

4. `Explain why the match exists`
   Every surfaced match should include `2-4` concrete reasons in plain language.

5. `Human-assisted review during launch`
   Early cohorts should use founder or ops review before a first match is surfaced.

## 3. First-Match Quality Floor

## 3.1 Required gates

Every first match must pass all five gates below.

1. `Attraction likelihood`
   - minimum bar: `medium confidence`
   - source: pairwise attraction calibration, presentation-fit model, and early attraction priors

2. `Intent alignment`
   - minimum bar: `hard pass`
   - source: relationship intent, exclusivity direction, and readiness to invest

3. `Life-goal compatibility`
   - minimum bar: `medium confidence`
   - source: children/family direction, location openness, core life anchors, and religion/spirituality salience where relevant

4. `Geographic/date viability`
   - minimum bar: `hard pass`
   - source: same launch city, workable distance, and realistic date feasibility

5. `Activity/readiness`
   - minimum bar: `hard pass`
   - source: active account state, recent usage, readiness check-in, and no pause state

## 3.2 Fail rule

If any required gate fails:

- do not surface the match
- keep the user in `quality_hold`
- continue searching for a better candidate

## 3.3 Wait policy

Default first-match wait policy:

- preferred wait window: `24-72` hours
- shorter is allowed if a high-confidence candidate appears quickly
- longer is acceptable in low-density launch mode if the alternative is a visibly bad first match

## 4. Strong Priors Before Behavioral Learning

Before Delfa has post-match data, first-match quality should come from:

1. `Profiler signal`
   - serious relationship intent
   - children/family direction
   - life anchors and non-negotiables
   - stress/communication style
   - practical date viability

2. `Hard incompatibility filters`
   - gender openness
   - age range overlap
   - distance compatibility
   - relationship-structure compatibility
   - non-negotiable children/religion/sobriety rules when explicitly stated

3. `Attraction calibration`
   - Basics pairwise calibration
   - later extended calibration
   - internal presentation-preference model

4. `Local cohort quality`
   - same launch city
   - compatible age band
   - relationship-minded cohort
   - active and ready users only

5. `Population-level pattern matching`
   - use outcomes from similar users and similar pairings as a prior
   - this can inform ranking before the user has personal behavioral history
   - it must not create popularity loops or demographic bias concentration

Behavioral learning should then improve this prior over time. It should not be the thing that rescues a weak cold start.

## 5. User-Facing Match Search States

Before a match is surfaced, the user should be in one of three states:

1. `Searching`
   - Delfa is evaluating candidates against the quality floor

2. `Quality hold`
   - no candidate currently clears the first-match bar
   - the UI should say this clearly:
     - "We'd rather wait a little than send you someone who looks wrong on day one."

3. `Ready to surface`
   - a candidate has passed all required gates
   - launch-mode review is complete if required

The app should never imply that delay means a bug or a lack of activity. It should position delay as deliberate quality protection.

## 6. Match Explanation Rules

Every surfaced match should include `2-4` reasons.

Allowed explanation areas:

- aligned relationship direction
- compatible family/life goals
- promising attraction fit
- compatible lifestyle rhythm
- strong local/date viability
- strong communication or pace fit

Rules:

- explanations must be human-readable
- explanations must avoid protected-trait language
- explanations must not reveal private calibration details
- explanations must not overstate certainty

## 7. Launch Cohort Policy

During launch mode, the candidate pool should be controlled.

Required cohort rules:

- same city only
- compatible age bands only
- relationship-minded users only
- active and ready users only
- screened enough to avoid low-effort or fake inventory

This is not just a growth tactic. It is part of the quality system.

## 8. Human-Assisted Matching At Launch

During launch mode, first matches should be reviewed by a founder or ops layer before surfacing.

Reviewer inputs:

- gate-by-gate pass/fail summary
- attraction likelihood confidence
- `2-4` proposed match reasons
- obvious risk flags

Reviewer outputs:

- `approve`
- `hold for stronger candidate`
- `reject`

This manual layer should be temporary. Its purpose is to protect trust while Delfa has low density and limited live outcome data.

## 9. What Delfa Should Not Do

- do not surface filler matches to reduce wait time
- do not widen filters aggressively just to keep the queue moving
- do not show more than one weak candidate instead of one strong candidate
- do not rely on post-match learning to fix obviously poor first matches

## 10. Success Criteria

The delivery policy is working when:

- first matches feel plausible immediately
- users understand why the match was surfaced
- attraction is in range often enough that trust is preserved
- users move into guided interaction instead of bouncing on open
- first-match conversion to real conversation and meeting beats mainstream app baselines
