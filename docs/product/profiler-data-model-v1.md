# Delfa Profiler Data Model V1

- Version: `0.1.0`
- Date: `2026-03-08`
- Status: `Implementation-ready draft`

## 1. Purpose

This document defines the initial domain model required to persist, score, and evolve the Delfa profiler.

## 2. Core Entities

## 2.1 `ProfilerSection`

Represents a logical section in the profiler.

### Fields

- `id`
- `section_id`
- `title`
- `description`
- `sort_order`
- `required_for_matching`
- `schema_version`
- `status`

## 2.2 `ProfilerQuestion`

Represents a single question definition.

### Fields

- `id`
- `question_id`
- `section_id`
- `prompt`
- `help_text`
- `response_type`
- `privacy_level`
- `required`
- `selection_min`
- `selection_max`
- `sort_order`
- `schema_version`
- `active`

## 2.3 `ProfilerOption`

Represents a selectable answer option.

### Fields

- `id`
- `question_id`
- `option_id`
- `label`
- `description`
- `sort_order`
- `active`

## 2.4 `UserProfilerProgress`

Tracks section-level completion.

### Fields

- `id`
- `user_id`
- `section_id`
- `schema_version`
- `status`
- `completion_percent`
- `started_at`
- `completed_at`
- `updated_at`

### Status values

- `not_started`
- `in_progress`
- `completed`

## 2.5 `UserProfilerResponse`

Stores canonical responses.

### Fields

- `id`
- `user_id`
- `question_id`
- `schema_version`
- `response_payload`
- `privacy_level`
- `is_current`
- `answered_at`
- `superseded_at`

## 2.6 `UserCompatibilityProfile`

Stores normalized outputs from profiler responses.

### Fields

- `id`
- `user_id`
- `schema_version`
- `eligibility_payload`
- `dimension_scores_payload`
- `dimension_confidence_payload`
- `public_profile_payload`
- `private_calibration_payload`
- `computed_at`

## 2.7 `UserCalibrationSignal`

Stores non-questionnaire signals used to refine matching.

### Sources

- likes
- skips
- pairwise attraction choices
- chat behavior
- graceful disconnect reasons
- profile edits

### Fields

- `id`
- `user_id`
- `signal_type`
- `signal_source`
- `signal_payload`
- `weight`
- `created_at`

## 2.8 `CompatibilityExplanation`

Stores user-facing reasons why a match was made.

### Fields

- `id`
- `match_id`
- `reason_codes`
- `user_facing_summary`
- `generated_at`

## 2.9 `GracefulDisconnectFeedback`

Stores structured outcome feedback from ended matches.

### Fields

- `id`
- `match_id`
- `from_user_id`
- `to_user_id`
- `shared_reason_codes`
- `private_reason_codes`
- `free_text_private`
- `created_at`

## 3. Privacy Boundaries

### Public profile data

May include:

- relationship direction
- children preference
- relationship structure
- high-level lifestyle markers
- selected prompts

### Matching-private data

May include:

- core anchors
- pace preferences
- conflict tendencies
- trust-speed indicators
- values priorities

### Sensitive-private data

Must remain private:

- attraction calibration raw comparisons
- intimacy boundaries
- attachment-style proxies
- rejection sensitivity proxies
- private dealbreakers

## 4. Storage Rules

- `response_payload` should be JSON to preserve flexibility by question type.
- `schema_version` must be stored on both question definition and user response.
- Only one `is_current=true` response per `user_id + question_id`.
- Older responses should be retained for auditing and recalibration.

## 5. Derived Compatibility Vector

Every user should have a derived vector with at least:

- `intent_score`
- `life_direction_score`
- `pace_score`
- `responsiveness_score`
- `attachment_score`
- `lifestyle_score`
- `chemistry_score`
- `conflict_repair_score`
- `intimacy_score`
- `stress_finance_score`

Each dimension should also have:

- `confidence`
- `source_mix`

## 6. API Surface Needed

Initial backend surface should support:

- `GET /profiler/sections`
- `GET /profiler/section/:sectionId`
- `PUT /profiler/responses/:questionId`
- `GET /profiler/progress`
- `POST /profiler/complete-section/:sectionId`
- `GET /profiler/summary`
- `POST /profiler/recompute`

## 7. Migration Rules

- Minor wording changes can stay within the same schema version if semantics do not change.
- New options that change scoring should bump schema version.
- Removed questions must stay resolvable for older responses.

## 8. Open Questions

- Should public profile payload be materialized or assembled dynamically?
- Should compatibility explanations be cached per match or generated on demand?
- Should pairwise attraction cards live in content tables or a separate ranking dataset?

