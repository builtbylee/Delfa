# Delfa Profiler Question Bank V1

- Version: `0.1.0`
- Date: `2026-03-08`
- Status: `Canonical content draft`
- Depends on:
  - `docs/product/profiler-v1.md`
  - `docs/product/profiler-schema-v1.md`

## 1. Purpose

This document finalizes the first implementation-ready question inventory for the Delfa profiler.

It defines:

- exact question wording
- question ids
- answer options
- privacy tier
- response type
- conditional display rules

## 2. Basics

## B1 `basics_match_scope`

- Type: `compound`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "Who are you open to dating right now?"
  - "What age range feels right?"
  - "How far are you realistically open to dating?"
- Fields:
  - `open_to_genders`
  - `age_min`
  - `age_max`
  - `distance_radius_km`
  - `location_flexibility`
- `location_flexibility` options:
  - `staying_local`
  - `open_within_region`
  - `open_to_relocation`

## B2 `basics_relationship_direction`

- Type: `single_select`
- Privacy: `PUBLIC_PROFILE`
- Prompt:
  - "If dating goes well, what are you hoping it becomes?"
- Options:
  - `life_partner_marriage`: "A life partner or marriage"
  - `serious_long_term`: "A serious long-term relationship"
  - `committed_open_to_where_it_leads`: "A committed relationship, open to where it leads"
  - `still_figuring_it_out`: "I'm still figuring it out"

## B3 `basics_core_life_anchors`

- Type: `multi_select`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "Which of these need to align early for you to take someone seriously?"
- Rule:
  - choose up to `3`
- Options:
  - `children`: "Children"
  - `religion_spirituality`: "Religion or spirituality"
  - `relationship_structure`: "Monogamy or relationship structure"
  - `politics_worldview`: "Politics or worldview"
  - `sobriety_substances`: "Sobriety or substance habits"
  - `geography_relocation`: "Geography or relocation"
  - `ambition_work_pace`: "Ambition or work pace"
  - `finances_spending`: "Finances or spending style"
  - `physical_affection`: "Physical affection"

## B4 `basics_family_structure`

- Type: `compound`
- Privacy: `PUBLIC_PROFILE`
- Prompt:
  - "Do you want children?"
  - "What relationship structure are you looking for?"
- `children_preference` options:
  - `definitely_want`: "Definitely want children"
  - `open_to_it`: "Open to children"
  - `unsure`: "Not sure"
  - `do_not_want`: "Do not want children"
  - `have_and_want_more`: "Already have children and want more"
  - `have_and_do_not_want_more`: "Already have children and do not want more"
- `relationship_structure` options:
  - `monogamous`: "Monogamous"
  - `open_to_enm`: "Open to ethical non-monogamy"
  - `non_monogamous`: "Non-monogamous"
  - `unsure`: "Still figuring that out"

## B5 `basics_pace_availability`

- Type: `scenario_select`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "When you are genuinely excited about someone, what pace feels most natural in the first 6 weeks?"
- Options:
  - `fast_contact_fast_meeting`: "Frequent texting and meeting quickly"
  - `steady_contact_weekly_dates`: "Steady messaging with one date a week"
  - `slow_build_room_to_think`: "A slower build with room to think"
  - `chemistry_first_commitment_later`: "Strong chemistry first, commitment later"

## B6 `basics_partner_priorities`

- Type: `ranked_select`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "What matters most once attraction is there?"
- Rule:
  - rank your top `4`
- Options:
  - `emotional_steadiness`: "Emotional steadiness"
  - `communication`: "Communication"
  - `humor`: "Humor"
  - `kindness`: "Kindness"
  - `shared_values`: "Shared values"
  - `ambition`: "Ambition"
  - `curiosity`: "Curiosity"
  - `reliability`: "Reliability"
  - `physical_chemistry`: "Physical chemistry"

## B7 `basics_positive_event_response`

- Type: `scenario_select`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "Someone you are dating shares exciting news. What do you naturally do first?"
- Options:
  - `ask_questions_and_lean_in`: "Ask questions and lean in"
  - `celebrate_and_move_on`: "Celebrate quickly and move on"
  - `compare_to_own_experience`: "Compare it to my own experience"
  - `hold_back_until_context_clear`: "Hold back until I know how big it is to them"

## B8 `basics_uncertainty_response`

- Type: `scenario_select`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "You are excited about someone and they go quiet for two days. What is your default move?"
- Options:
  - `check_in_directly`: "Check in directly"
  - `wait_and_give_space`: "Wait and give them space"
  - `pull_back_and_assume_interest_dropped`: "Pull back and assume interest dropped"
  - `seek_reassurance`: "Look for reassurance"

## B9 `basics_lifestyle_snapshot`

- Type: `tile_select`
- Privacy: `PUBLIC_PROFILE`
- Prompt:
  - "Which weekend feels most like you?"
- Options:
  - `dinner_party_slow_morning`: "Dinner party and a slow morning"
  - `outdoors_early_nights`: "Outdoors and early nights"
  - `spontaneous_city_plans`: "Spontaneous city plans"
  - `gym_errands_reset`: "Gym, errands, and reset"
  - `culture_travel_activity`: "Culture, travel, or activity"
  - `homebody_recharge`: "Homebody recharge"

## B10 `basics_attraction_calibration`

- Type: `pairwise_choice`
- Privacy: `SENSITIVE_PRIVATE`
- Prompt:
  - "Which profile would you be more curious to explore?"
- Format:
  - `6-10` fast pairwise choices
- Rule:
  - private only
  - no public labels

## 3. Life Direction

## L1 `life_direction_future_mismatch`

- Type: `single_select`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "Which future mismatch would be hardest for you to compromise on?"
- Options:
  - `children`
  - `religion_spirituality`
  - `location_homebase`
  - `money_style`
  - `ambition_work_pace`
  - `relationship_structure`

## L2 `life_direction_marriage_meaning`

- Type: `single_select`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "Which comes closest to how you see marriage or long-term partnership?"
- Options:
  - `core_life_goal`: "It is a core life goal for me"
  - `important_but_not_required`: "Important, but not something I need"
  - `open_if_right_person`: "Open to it with the right person"
  - `not_for_me`: "Not something I want"

## L3 `life_direction_money_style`

- Type: `single_select`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "Which money style sounds most like you in a relationship?"
- Options:
  - `save_first`: "Save first, spend carefully"
  - `balance_save_and_enjoy`: "Balance saving and enjoying life"
  - `enjoy_now`: "Live well now, plan as I go"
  - `depends_on_context`: "It depends on the season of life"

## L4 `life_direction_work_pace`

- Type: `single_select`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "Which partnership rhythm fits you best?"
- Options:
  - `both_ambitious_high_intensity`: "Two ambitious, high-intensity lives"
  - `ambitious_with_protected_home_life`: "Ambition with strongly protected home life"
  - `steady_and_predictable`: "Steady and predictable over intense"
  - `flexible_and_case_by_case`: "Flexible, depending on the stage of life"

## L5 `life_direction_homebase`

- Type: `single_select`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "How rooted or mobile do you want your next chapter to be?"
- Options:
  - `firm_homebase`: "I want a firm home base"
  - `open_to_moves`: "I am open to moving for the right life"
  - `global_flexible`: "I want maximum location flexibility"
  - `unsure`: "I am not sure yet"

## L6 `life_direction_daily_life`

- Type: `forced_tradeoff`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "Which matters more in day-to-day partnership?"
- Options:
  - `shared_routine`
  - `shared_ambition`
  - `shared_values`
  - `shared_adventure`

## 4. Communication and Repair

## C1 `comm_repair_after_tension`

- Type: `single_select`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "After tension with someone you care about, what do you usually need first?"
- Options:
  - `space`
  - `reassurance`
  - `problem_solving`
  - `lightness_or_humor`

## C2 `comm_repair_worse_mismatch`

- Type: `forced_tradeoff`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "Which feels worse to you?"
- Options:
  - `pushed_to_talk_too_soon`
  - `left_in_silence_too_long`
  - `forced_to_keep_it_light`
  - `turned_into_a_big_talk_immediately`

## C3 `comm_repair_apology_style`

- Type: `single_select`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "When you realize you were wrong, what do you most often do next?"
- Options:
  - `apologize_directly_and_own_it`
  - `explain_my_intention_first`
  - `need_time_before_i_can_apologize`
  - `try_to_reset_the_mood_before_talking`

## C4 `comm_repair_bid_response`

- Type: `scenario_select`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "You are distracted and someone you are dating tries to connect in a small way. What do you most often do?"
- Options:
  - `pause_and_engage`
  - `acknowledge_then_finish_task`
  - `respond_briefly_without_really_shifting`
  - `miss_it_until_they_ask_again`

## C5 `comm_repair_positive_news_under_stress`

- Type: `scenario_select`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "Your partner shares good news on a day you are drained. What feels most like you?"
- Options:
  - `show_up_for_it_anyway`
  - `celebrate_briefly_then_return_to_my_headspace`
  - `need_a_minute_but_come_back_to_it`
  - `struggle_to_give_it_energy`

## C6 `comm_repair_humor_style`

- Type: `single_select`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "What kind of humor feels most connecting in a relationship?"
- Options:
  - `warm_and_playful`
  - `dry_and_observational`
  - `teasing_with_trust`
  - `less_humor_more_depth`

## C7 `comm_repair_message_energy`

- Type: `single_select`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "What kind of chat energy keeps you engaged?"
- Options:
  - `fast_back_and_forth`
  - `steady_thoughtful_messages`
  - `low_volume_but_high_substance`
  - `voice_notes_or_calls_over_text`

## 5. Emotional Style and Security

## E1 `emo_security_when_it_gets_real`

- Type: `single_select`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "When a connection starts becoming important, what tends to happen in you first?"
- Options:
  - `i_move_closer`
  - `i_slow_down_and_observe`
  - `i_need_more_reassurance`
  - `i_get_more_guarded`

## E2 `emo_security_trust_speed`

- Type: `single_select`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "What makes it easiest for you to trust someone?"
- Options:
  - `consistent_actions`
  - `emotional_openness`
  - `shared_values`
  - `time_and_proof`

## E3 `emo_security_ambiguity`

- Type: `scenario_select`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "If a person you like is warm one day and harder to read the next, what is your most natural interpretation?"
- Options:
  - `they_are_probably_busy`
  - `i_need_clarity_quickly`
  - `i_assume_interest_has_changed`
  - `i_wait_for_more_data`

## E4 `emo_security_recovery_time`

- Type: `single_select`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "After relationship tension, how long do you usually stay activated?"
- Options:
  - `minutes`
  - `a_few_hours`
  - `the_rest_of_the_day`
  - `more_than_a_day`

## E5 `emo_security_reassurance_style`

- Type: `forced_tradeoff`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "Which is harder for you?"
- Options:
  - `too_little_reassurance`
  - `too_much_checking_in`
  - `too_much_emotional_intensity`
  - `too_much_emotional_distance`

## E6 `emo_security_vulnerability_pace`

- Type: `single_select`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "When do you usually become emotionally open in dating?"
- Options:
  - `fairly_early_if_the_energy_is_right`
  - `after_consistency_builds`
  - `only_after_clear_commitment`
  - `slowly_even_when_i_like_someone`

## 6. Lifestyle, Intimacy and Chemistry

## I1 `life_intimacy_affection_importance`

- Type: `range_select`
- Privacy: `SENSITIVE_PRIVATE`
- Prompt:
  - "How important is physical affection in feeling close to someone?"
- Range:
  - `1` to `5`

## I2 `life_intimacy_hardest_mismatch`

- Type: `single_select`
- Privacy: `SENSITIVE_PRIVATE`
- Prompt:
  - "Which mismatch would be hardest for you to work around?"
- Options:
  - `libido`
  - `affection_style`
  - `exclusivity_expectations`
  - `communication_about_sex`

## I3 `life_intimacy_chemistry_growth`

- Type: `single_select`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "What usually makes chemistry grow for you?"
- Options:
  - `safety_and_ease`
  - `banter_and_playfulness`
  - `admiration_and_respect`
  - `immediate_physical_pull`

## I4 `life_intimacy_exclusivity_norm`

- Type: `single_select`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "When does exclusivity start to matter to you?"
- Options:
  - `very_early_if_interest_is_mutual`
  - `after_a_few_dates`
  - `only_after_a_clear_conversation`
  - `later_after_strong_connection`

## I5 `life_intimacy_social_rhythm`

- Type: `single_select`
- Privacy: `PUBLIC_PROFILE`
- Prompt:
  - "Which social rhythm feels best in a relationship?"
- Options:
  - `mostly_out_and_about`
  - `mostly_home_based`
  - `balanced_mix`
  - `depends_on_the_week`

## I6 `life_intimacy_novelty_vs_routine`

- Type: `single_select`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "What keeps a relationship feeling alive for you?"
- Options:
  - `shared_rituals`
  - `new_experiences`
  - `deep_conversation`
  - `physical_affection_and_play`

## I7 `life_intimacy_substance_style`

- Type: `single_select`
- Privacy: `MATCHING_PRIVATE`
- Prompt:
  - "Which best fits your lifestyle?"
- Options:
  - `fully_sober`
  - `light_social_use`
  - `moderate_social_use`
  - `it_varies_by_context`

## I8 `life_intimacy_extended_attraction_calibration`

- Type: `pairwise_choice`
- Privacy: `SENSITIVE_PRIVATE`
- Prompt:
  - "Which connection style feels more naturally attractive?"
- Format:
  - `8-12` pairwise cards
- Rule:
  - private only

## 7. Conditional Display Rules

- `I2` and `I8` should only appear after the user has completed Basics.
- `L2` may be skipped if the user selected `still_figuring_it_out` in `B2`.
- `I7` should be skippable if the user selected `sobriety_substances` as not important and declines to answer.

## 8. Editing Rules

- All questions remain editable.
- Changes to `B1`, `B2`, `B4`, or `I4` should trigger immediate match recompute.
- Changes to sensitive-private questions should recompute ranking but not public profile data.

