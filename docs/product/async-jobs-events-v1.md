# Delfa Async Jobs and Events V1

- Version: `0.1.0`
- Date: `2026-03-09`
- Status: `Implementation-ready async plan`

## 1. Goal

Define background execution and event flow for Delfa's delayed, retried, and non-interactive work.

## 2. Architecture Decision

Use a `transactional outbox + worker` model at launch.

Why:

- Delfa needs durable background work, but not a full event-bus platform on day one
- product correctness depends on job execution staying consistent with database writes
- this keeps operational complexity lower than a multi-service broker setup

## 3. Outbox Model

Every domain transaction that creates async work should:

1. write the main row changes
2. write an outbox event in the same database transaction
3. commit once

Worker processes then claim pending outbox rows and execute downstream work.

## 4. Job Categories

### 4.1 Matching and lifecycle

- `quality_hold_recheck`
- `candidate_set_refresh`
- `launch_review_enqueue`
- `ready_to_meet_timeout`
- `guided_round_timeout`
- `inactive_match_check`
- `post_disconnect_recalibration`

### 4.2 Outcome learning

- `post_date_prompt_send`
- `post_date_prompt_expire`
- `outcome_model_refresh`

### 4.3 Trust and safety

- `verification_asset_review`
- `report_triage`
- `repeat_offender_check`
- `trust_tier_recompute`

### 4.4 Media and profile

- `media_derivative_generate`
- `media_moderation_enqueue`
- `profile_cache_refresh`

### 4.5 Measurement

- `event_rollup_hourly`
- `activation_metric_refresh`
- `launch_dashboard_refresh`

## 5. Event Families

Domain events should be explicit and stable.

### 5.1 Profiler events

- `profiler.basics_completed`
- `profiler.section_completed`
- `profiler.attraction_calibration_updated`

### 5.2 Matching events

- `matching.quality_hold_started`
- `matching.candidate_set_generated`
- `matching.first_match_ready`
- `matching.match_surfaced`

### 5.3 Interaction events

- `match.round_opened`
- `match.round_completed`
- `match.ready_to_meet_mutual`
- `match.graceful_disconnect_completed`

### 5.4 Outcome events

- `match.date_confirmed`
- `match.post_date_reflection_submitted`
- `match.second_date_intent_positive`

### 5.5 Trust events

- `trust.report_submitted`
- `trust.verification_state_changed`
- `trust.enforcement_applied`

## 6. Retry Rules

Workers should treat jobs differently by category.

### 6.1 Retryable jobs

- notifications
- analytics rollups
- candidate refresh
- derivative generation

### 6.2 Careful retry jobs

- payment sync
- verification sync
- trust escalation decisions

### 6.3 Non-repeatable without idempotency

- state transitions
- disconnect completion
- post-date reflection submission

All jobs must be idempotent by key.

## 7. Scheduling Rules

Use delayed jobs for:

- quality-hold reevaluation windows
- guided-round timeouts
- post-date reflection reminders
- trust follow-up review SLAs

## 8. Dead-letter policy

Failed jobs beyond retry budget should move to a dead-letter queue/table with:

- job payload
- failure reason
- retry history
- owning module
- ops recovery action

## 9. When to Evolve Beyond the Outbox

Keep the outbox+worker model until at least one of these is true:

- realtime fanout volume materially exceeds API traffic
- analytics ingest volume creates unacceptable write pressure
- multiple teams need independent deploy/replay semantics

Then evolve toward dedicated streaming or workflow infrastructure.

## 10. Success Criteria

The async design is correct when:

- lifecycle timers are durable
- background work never races ahead of committed state
- retries do not create duplicate user-visible actions
- ops can inspect and recover failed work quickly
