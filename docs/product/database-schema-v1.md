# Delfa Database Schema V1

- Version: `0.1.0`
- Date: `2026-03-09`
- Status: `Implementation-ready schema plan`

## 1. Goal

Define the initial Postgres schema so Delfa can support matching, attraction, trust, and outcomes cleanly from launch.

## 2. Schema Strategy

Use one PostgreSQL database with multiple logical schemas:

- `identity`
- `profile`
- `profiler`
- `matching`
- `interaction`
- `outcomes`
- `trust`
- `billing`
- `measurement`
- `ops`

This keeps ownership explicit without operationally splitting databases too early.

## 3. Core Tables

### 3.1 `identity`

- `users`
  - id
  - account_state
  - created_at
  - deleted_at

- `user_sessions`
  - id
  - user_id
  - device_id
  - refresh_token_hash
  - expires_at

- `devices`
  - id
  - user_id
  - platform
  - push_token
  - last_seen_at

- `verification_state`
  - user_id
  - stage
  - trust_tier
  - verified_at
  - review_status

### 3.2 `profile`

- `public_profiles`
  - user_id
  - first_name
  - age
  - city_id
  - bio
  - public_visibility_state

- `private_profile_facts`
  - user_id
  - gender_identity
  - gender_openness
  - age_range
  - distance_radius
  - relationship_structure
  - launch_cohort_id

- `profile_media`
  - id
  - user_id
  - storage_key
  - media_type
  - position
  - moderation_state

- `locations`
  - id
  - city_slug
  - lat
  - lng
  - active_launch_market

### 3.3 `profiler`

- `profiler_sections`
- `profiler_questions`
- `profiler_responses`
- `profiler_progress`
- `mirror_moments`
- `compatibility_confidence_snapshots`

### 3.4 `matching`

- `candidate_sets`
  - id
  - user_id
  - generated_at
  - quality_floor_state

- `candidate_scores`
  - candidate_set_id
  - candidate_user_id
  - intent_score
  - life_direction_score
  - chemistry_score
  - attraction_fit_score
  - readiness_score
  - final_rank

- `quality_holds`
  - user_id
  - hold_reason
  - review_after_at
  - release_state

- `surfaced_matches`
  - id
  - user_a_id
  - user_b_id
  - delivered_at
  - explanation_payload
  - delivery_mode

### 3.5 `interaction`

- `matches`
  - id
  - user_a_id
  - user_b_id
  - state
  - state_updated_at

- `guided_rounds`
  - id
  - match_id
  - round_number
  - round_type
  - open_at
  - close_at
  - reveal_at

- `guided_responses`
  - id
  - round_id
  - user_id
  - payload
  - submitted_at

- `messages`
  - id
  - match_id
  - sender_user_id
  - message_type
  - body
  - created_at

- `message_receipts`
  - message_id
  - user_id
  - delivered_at
  - read_at

- `ready_to_meet_intents`
  - match_id
  - user_id
  - status
  - updated_at

- `before_we_meet`
  - match_id
  - expectations_payload
  - safety_payload
  - planning_payload

### 3.6 `outcomes`

- `post_date_reflections`
  - id
  - match_id
  - user_id
  - did_meet
  - see_again_intent
  - attraction_outcome
  - conversation_outcome
  - issue_tags
  - submitted_at

- `relationship_outcomes`
  - id
  - match_id
  - outcome_state
  - confirmed_at

### 3.7 `trust`

- `reports`
  - id
  - reporter_user_id
  - reported_user_id
  - match_id
  - category
  - severity
  - payload
  - status

- `trust_signals`
  - id
  - user_id
  - signal_type
  - signal_value
  - created_at

- `enforcement_actions`
  - id
  - user_id
  - action_type
  - reason_code
  - expires_at

- `case_notes`
  - id
  - report_id
  - author_user_id
  - note_type
  - body

### 3.8 `billing`

- `subscriptions`
- `entitlements`
- `payment_events`

### 3.9 `measurement`

- `event_log`
  - id
  - user_id
  - session_id
  - event_name
  - occurred_at
  - payload

- `metric_rollups`
  - metric_name
  - bucket_start
  - dimensions
  - metric_value

### 3.10 `ops`

- `launch_match_reviews`
  - surfaced_match_id
  - reviewer_user_id
  - decision
  - notes

- `ops_tasks`
  - id
  - task_type
  - entity_type
  - entity_id
  - due_at
  - status

## 4. Partitioning Policy

Do not partition every table.

Partition only large append-heavy tables from the outset:

- `measurement.event_log` by month
- `trust.case_notes` by month if review volume grows quickly
- `interaction.messages` by month only once volume justifies it

Keep high-transaction, relationship-centric tables unpartitioned until volume proves the need:

- `matches`
- `guided_rounds`
- `post_date_reflections`
- `candidate_scores`

## 5. Indexing Policy

Use:

- `btree` for ids, unique keys, dates, and common filters
- `GIN` for structured JSONB filters and tags where needed
- `pgvector` indexes for attraction/presentation vectors

Attraction search rules:

- start with exact search while row counts are modest
- move to `HNSW` when attraction vectors and candidate volume justify approximate nearest-neighbor search
- use filtered search by launch city and eligibility before vector ranking

## 6. Row-Level Security Policy

Use row-level security on tables containing highly sensitive user-owned data:

- `profiler.profiler_responses`
- `profile.private_profile_facts`
- `matching.candidate_scores`
- `outcomes.post_date_reflections`
- `trust.reports`
- `trust.case_notes`

RLS is defense in depth, not a replacement for application authorization.

## 7. Audit and Retention Rules

- never hard-delete trust actions immediately
- retain measurement raw events for short operational windows, then roll up
- keep post-date reflections private and durable
- keep moderation audit trails immutable

## 8. Success Criteria

The schema is correct when it:

- keeps module ownership obvious
- supports the first-match quality floor efficiently
- keeps sensitive data isolated
- avoids premature partitioning complexity
- supports future extraction of analytics and realtime without rewriting core data
