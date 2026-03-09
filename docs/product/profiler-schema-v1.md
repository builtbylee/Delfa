# Delfa Profiler Schema V1

- Version: `0.2.0`
- Date: `2026-03-09`
- Status: `Implementation-ready draft`
- Depends on:
  - `docs/product/profiler-v1.md`
  - `docs/research/market-and-relationship-research.md`

## 1. Purpose

This document converts `profiler-v1.md` into a canonical content schema that engineering can implement.

It defines:

- sections
- question ids
- field types
- response shapes
- privacy rules
- scoring hooks
- completion and versioning rules

The canonical wording and answer inventory live in `docs/product/profiler-question-bank-v1.md`.

## 2. Core Schema Rules

### 2.1 Versioning

- Every question must have a stable `question_id`.
- Every answer option must have a stable `option_id`.
- Schema version must be stored on every response record.
- If question meaning changes materially, create a new `question_id` instead of mutating the old one.

### 2.2 Privacy

Each question must declare one of:

- `PUBLIC_PROFILE`
- `MATCHING_PRIVATE`
- `SENSITIVE_PRIVATE`

Default should be `MATCHING_PRIVATE`.

### 2.3 Input types

Allowed types for V1:

- `single_select`
- `multi_select`
- `ranked_select`
- `range_select`
- `pairwise_choice`
- `scenario_select`
- `tile_select`
- `compound`
- `forced_tradeoff`

### 2.4 Scoring hooks

Each question may map to one or more of these dimensions:

- `eligibility`
- `intent`
- `life_direction`
- `pace`
- `responsiveness`
- `attachment`
- `lifestyle`
- `chemistry`
- `conflict_repair`
- `values`
- `intimacy`
- `stress_finance`

## 3. Section Definitions

## 3.1 Basics

- `section_id`: `basics`
- `required_for_matching`: `true`
- `min_completion_for_matching`: `100%`
- `target_time_minutes`: `3-5`

## 3.2 Life Direction

- `section_id`: `life_direction`
- `required_for_matching`: `false`
- `target_time_minutes`: `4-5`

## 3.3 Communication and Repair

- `section_id`: `communication_repair`
- `required_for_matching`: `false`
- `target_time_minutes`: `4-6`

## 3.4 Emotional Style and Security

- `section_id`: `emotional_security`
- `required_for_matching`: `false`
- `target_time_minutes`: `4-6`

## 3.5 Lifestyle, Intimacy and Chemistry

- `section_id`: `lifestyle_intimacy_chemistry`
- `required_for_matching`: `false`
- `target_time_minutes`: `4-6`

## 4. Basics Question Inventory

## 4.1 `basics_match_scope`

- `question_id`: `basics_match_scope`
- `type`: `compound`
- `privacy`: `MATCHING_PRIVATE`
- `required`: `true`
- `captures`:
  - `eligibility`
  - `lifestyle`
- `fields`:
  - `open_to_genders`: `string[]`
  - `age_min`: `integer`
  - `age_max`: `integer`
  - `distance_radius_km`: `integer`
  - `location_flexibility`: `enum`

## 4.2 `basics_relationship_direction`

- `question_id`: `basics_relationship_direction`
- `type`: `single_select`
- `privacy`: `PUBLIC_PROFILE`
- `required`: `true`
- `dimension`:
  - `intent`
- `options`:
  - `life_partner_marriage`
  - `serious_long_term`
  - `committed_open_to_where_it_leads`
  - `still_figuring_it_out`

## 4.3 `basics_core_life_anchors`

- `question_id`: `basics_core_life_anchors`
- `type`: `multi_select`
- `selection_rules`:
  - `min`: `1`
  - `max`: `3`
- `privacy`: `MATCHING_PRIVATE`
- `required`: `true`
- `dimension`:
  - `life_direction`
  - `values`
- `options`:
  - `children`
  - `religion_spirituality`
  - `relationship_structure`
  - `politics_worldview`
  - `sobriety_substances`
  - `geography_relocation`
  - `ambition_work_pace`
  - `finances_spending`
  - `physical_affection`

## 4.4 `basics_family_structure`

- `question_id`: `basics_family_structure`
- `type`: `compound`
- `privacy`: `PUBLIC_PROFILE`
- `required`: `true`
- `dimension`:
  - `life_direction`
- `fields`:
  - `children_preference`
  - `relationship_structure`
- `children_preference_options`:
  - `definitely_want`
  - `open_to_it`
  - `unsure`
  - `do_not_want`
  - `have_and_want_more`
  - `have_and_do_not_want_more`
- `relationship_structure_options`:
  - `monogamous`
  - `open_to_enm`
  - `non_monogamous`
  - `unsure`

## 4.5 `basics_pace_availability`

- `question_id`: `basics_pace_availability`
- `type`: `scenario_select`
- `privacy`: `MATCHING_PRIVATE`
- `required`: `true`
- `dimension`:
  - `pace`
  - `attachment`
- `options`:
  - `fast_contact_fast_meeting`
  - `steady_contact_weekly_dates`
  - `slow_build_room_to_think`
  - `chemistry_first_commitment_later`

## 4.6 `basics_partner_priorities`

- `question_id`: `basics_partner_priorities`
- `type`: `ranked_select`
- `selection_rules`:
  - `min`: `4`
  - `max`: `4`
- `privacy`: `MATCHING_PRIVATE`
- `required`: `true`
- `dimension`:
  - `values`
  - `chemistry`
  - `responsiveness`
- `options`:
  - `emotional_steadiness`
  - `communication`
  - `humor`
  - `kindness`
  - `shared_values`
  - `ambition`
  - `curiosity`
  - `reliability`
  - `physical_chemistry`

## 4.7 `basics_vulnerability_response`

- `question_id`: `basics_vulnerability_response`
- `type`: `scenario_select`
- `privacy`: `MATCHING_PRIVATE`
- `required`: `true`
- `dimension`:
  - `responsiveness`
- `options`:
  - `listen_and_help_them_feel_understood`
  - `reframe_or_try_to_make_it_better`
  - `share_a_similar_story`
  - `feel_unsure_and_shift_the_conversation`

## 4.8 `basics_uncertainty_response`

- `question_id`: `basics_uncertainty_response`
- `type`: `scenario_select`
- `privacy`: `MATCHING_PRIVATE`
- `required`: `true`
- `dimension`:
  - `attachment`
  - `communication`
- `options`:
  - `check_in_directly`
  - `wait_and_give_space`
  - `pull_back_and_assume_interest_dropped`
  - `seek_reassurance`

## 4.9 `basics_lifestyle_snapshot`

- `question_id`: `basics_lifestyle_snapshot`
- `type`: `tile_select`
- `privacy`: `PUBLIC_PROFILE`
- `required`: `true`
- `dimension`:
  - `lifestyle`
- `options`:
  - `dinner_party_slow_morning`
  - `outdoors_early_nights`
  - `spontaneous_city_plans`
  - `gym_errands_reset`
  - `culture_travel_activity`
  - `homebody_recharge`

## 4.10 `basics_attraction_calibration`

- `question_id`: `basics_attraction_calibration`
- `type`: `pairwise_choice`
- `privacy`: `SENSITIVE_PRIVATE`
- `required`: `true`
- `dimension`:
  - `chemistry`
- `rules`:
  - `min_pairs`: `6`
  - `max_pairs`: `10`
  - `publicly_visible`: `false`

## 5. Deeper Section Question Groups

These groups are implementation scope for V1. Exact wording and answer options are finalized in `docs/product/profiler-question-bank-v1.md`.

## 5.1 Life Direction question groups

- `life_direction_non_negotiables`
- `life_direction_commitment_behavior`
- `life_direction_money_style`
- `life_direction_work_ambition`
- `life_direction_children_parenting`
- `life_direction_religion_worldview`
- `life_direction_geography_homebase`

## 5.2 Communication and Repair question groups

- `comm_repair_conflict_first_move`
- `comm_repair_space_vs_reassurance`
- `comm_repair_apology_style`
- `comm_repair_bids_for_connection`
- `comm_repair_stress_response`
- `comm_repair_positive_event_response_under_stress`
- `comm_repair_humor_playfulness`

## 5.3 Emotional Style and Security question groups

- `emo_security_reassurance_needs`
- `emo_security_trust_speed`
- `emo_security_reactivity`
- `emo_security_recovery_time`
- `emo_security_closeness_independence`
- `emo_security_ambiguity_tolerance`

## 5.4 Lifestyle, Intimacy and Chemistry question groups

- `life_intimacy_affection_style`
- `life_intimacy_touch_language`
- `life_intimacy_exclusivity_norms`
- `life_intimacy_libido_range`
- `life_intimacy_boundaries`
- `life_intimacy_novelty_vs_routine`
- `life_intimacy_extended_attraction_calibration`

## 6. Response Shapes

## 6.1 Single select

```json
{
  "question_id": "basics_relationship_direction",
  "schema_version": "0.1.0",
  "response_type": "single_select",
  "selected_option_id": "serious_long_term"
}
```

## 6.2 Ranked select

```json
{
  "question_id": "basics_partner_priorities",
  "schema_version": "0.1.0",
  "response_type": "ranked_select",
  "ranked_option_ids": [
    "shared_values",
    "communication",
    "emotional_steadiness",
    "physical_chemistry"
  ]
}
```

## 6.3 Pairwise choice

```json
{
  "question_id": "basics_attraction_calibration",
  "schema_version": "0.1.0",
  "response_type": "pairwise_choice",
  "comparisons": [
    {
      "pair_id": "pair_01",
      "selected_card_id": "card_b"
    }
  ]
}
```

## 7. Validation Rules

- Basics must be complete before first match generation.
- Users may save partial progress for deeper sections.
- Pairwise attraction calibration must avoid repeating materially identical comparisons.
- Public-facing answer changes should trigger compatibility recalculation.
- Sensitive-private answers must never be exposed through public profile payloads.

## 8. Output To Matching

Profiler responses should not feed matching as raw answers.

They should be transformed into:

- `eligibility_filters`
- `hard_incompatibilities`
- `dimension_scores`
- `dimension_confidence`
- `private_calibration_signals`

## 9. Open Implementation Questions

- Should pairwise attraction cards be global or personalized by market?
- Should some Basics answers become editable only between active matches?
- How often should stale answers be re-confirmed?
- Which deeper-section questions should become visible compatibility explanations versus ranking-only inputs?
