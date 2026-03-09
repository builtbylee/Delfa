# Delfa Measurement System V1

- Version: `0.1.0`
- Date: `2026-03-09`
- Status: `Implementation-ready metrics and instrumentation spec`

## 1. Goal

Measure whether Delfa is actually improving real relationship outcomes.

## 2. Measurement Principles

1. `Optimize for outcomes, not time-on-app`
2. `Track trust as a first-class metric`
3. `Use launch-city metrics before growth metrics`

## 3. North-Star Direction

Primary outcome family:

- first-match plausibility
- guided interaction completion
- mutual ready-to-meet
- date conversion
- second-date intent and continuation

## 4. Activation Metric Candidates

Candidate activation sequence:

1. Basics completed
2. first high-quality match surfaced
3. round 1 completed
4. mutual ready-to-meet or date planning started

The product should discover which of these most strongly predicts retention and continuation.

## 5. Core Product Metrics

- `quality_hold_rate`
- `first_match_open_rate`
- `first_match_reply_rate`
- `round_1_completion_rate`
- `round_2_completion_rate`
- `round_3_completion_rate`
- `mutual_ready_to_meet_rate`
- `date_planning_rate`
- `date_happened_rate`
- `second_date_yes_rate`
- `graceful_disconnect_rate`

## 6. Trust Metrics

- `verification_completion_rate`
- `report_rate_per_100_matches`
- `repeat_offender_rate`
- `date_safety_tool_usage_rate`
- `hard_side_retention`

## 7. Launch-City Metrics

- time to first high-quality match
- density of eligible candidates in city
- quality-hold resolution time
- organic signup share
- referral share

## 8. Event Instrumentation

Minimum events:

- basics_completed
- quality_hold_shown
- first_match_surfaced
- first_match_opened
- round_1_completed
- round_2_completed
- round_3_completed
- mutual_ready_to_meet
- date_planning_started
- post_date_reflection_submitted
- second_date_yes
- graceful_disconnect_submitted
- safety_report_submitted

## 9. Guardrails

- do not use DAU as a proxy for product success
- do not celebrate longer chat duration if it reduces date conversion
- do not optimize growth before first-match quality and trust are stable

## 10. Success Criteria

The measurement system is working when:

- Delfa can identify its real activation metric
- launch decisions are based on outcome data
- product changes can be evaluated against date and continuation outcomes
