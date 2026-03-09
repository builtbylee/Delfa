import {
  PROFILER_SCHEMA_VERSION,
  type CompoundQuestionDefinition,
  type PairwiseChoiceQuestionDefinition,
  type ProfilerOptionDefinition,
  type ProfilerQuestionDefinition,
  type ProfilerSectionDefinition,
  type RangeSelectQuestionDefinition,
  type RankedSelectQuestionDefinition,
  type SingleSelectQuestionDefinition,
  type MultiSelectQuestionDefinition,
} from "./types";

const option = (id: string, label: string): ProfilerOptionDefinition => ({
  id,
  label,
});

const singleSelectQuestion = (
  definition: Omit<SingleSelectQuestionDefinition, "type"> & {
    type?: SingleSelectQuestionDefinition["type"];
  },
): SingleSelectQuestionDefinition => ({
  type: definition.type ?? "single_select",
  ...definition,
});

const multiSelectQuestion = (
  definition: MultiSelectQuestionDefinition,
): MultiSelectQuestionDefinition => definition;

const rankedSelectQuestion = (
  definition: RankedSelectQuestionDefinition,
): RankedSelectQuestionDefinition => definition;

const rangeSelectQuestion = (
  definition: RangeSelectQuestionDefinition,
): RangeSelectQuestionDefinition => definition;

const pairwiseChoiceQuestion = (
  definition: PairwiseChoiceQuestionDefinition,
): PairwiseChoiceQuestionDefinition => definition;

const compoundQuestion = (
  definition: CompoundQuestionDefinition,
): CompoundQuestionDefinition => definition;

export const profilerSections: readonly ProfilerSectionDefinition[] = [
  {
    id: "basics",
    title: "Basics",
    description: "Minimum signal needed to surface targeted matches quickly.",
    requiredForMatching: true,
    minCompletionForMatching: 100,
    sortOrder: 1,
    estimatedDuration: { minMinutes: 3, maxMinutes: 5 },
  },
  {
    id: "life_direction",
    title: "Life Direction",
    description: "Longer-horizon alignment on goals, money, and daily life.",
    requiredForMatching: false,
    sortOrder: 2,
    estimatedDuration: { minMinutes: 4, maxMinutes: 5 },
  },
  {
    id: "communication_repair",
    title: "Communication and Repair",
    description: "How connection, repair, and day-to-day interaction actually feel.",
    requiredForMatching: false,
    sortOrder: 3,
    estimatedDuration: { minMinutes: 4, maxMinutes: 6 },
  },
  {
    id: "emotional_security",
    title: "Emotional Style and Security",
    description: "Trust pace, ambiguity tolerance, and emotional regulation.",
    requiredForMatching: false,
    sortOrder: 4,
    estimatedDuration: { minMinutes: 4, maxMinutes: 6 },
  },
  {
    id: "lifestyle_intimacy_chemistry",
    title: "Lifestyle, Intimacy and Chemistry",
    description: "How attraction, affection, and shared rhythm fit together.",
    requiredForMatching: false,
    sortOrder: 5,
    estimatedDuration: { minMinutes: 4, maxMinutes: 6 },
  },
] as const;

export const profilerQuestions: readonly ProfilerQuestionDefinition[] = [
  compoundQuestion({
    id: "basics_match_scope",
    sectionId: "basics",
    title: "Match scope",
    type: "compound",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: [
      "Who are you open to dating right now?",
      "What age range feels right?",
      "How far are you realistically open to dating?",
    ],
    scoringDimensions: ["eligibility", "lifestyle"],
    recomputeBehavior: "full_match_recompute",
    fields: [
      {
        id: "open_to_genders",
        label: "Open to",
        type: "multi_select",
        required: true,
        minSelections: 1,
        options: [
          option("men", "Men"),
          option("women", "Women"),
          option("non_binary_people", "Non-binary people"),
        ],
      },
      {
        id: "age_min",
        label: "Minimum age",
        type: "number",
        required: true,
        min: 18,
        max: 100,
      },
      {
        id: "age_max",
        label: "Maximum age",
        type: "number",
        required: true,
        min: 18,
        max: 100,
      },
      {
        id: "distance_radius_km",
        label: "Distance radius (km)",
        type: "number",
        required: true,
        min: 1,
        max: 500,
      },
      {
        id: "location_flexibility",
        label: "Location flexibility",
        type: "single_select",
        required: true,
        options: [
          option("staying_local", "Staying local"),
          option("open_within_region", "Open within my region"),
          option("open_to_relocation", "Open to relocation"),
        ],
      },
    ],
  }),
  singleSelectQuestion({
    id: "basics_relationship_direction",
    sectionId: "basics",
    title: "Relationship direction",
    type: "single_select",
    privacy: "PUBLIC_PROFILE",
    required: true,
    prompt: ["If dating goes well, what are you hoping it becomes?"],
    scoringDimensions: ["intent"],
    recomputeBehavior: "full_match_recompute",
    options: [
      option("life_partner_marriage", "A life partner or marriage"),
      option("serious_long_term", "A serious long-term relationship"),
      option(
        "committed_open_to_where_it_leads",
        "A committed relationship, open to where it leads",
      ),
      option("still_figuring_it_out", "I'm still figuring it out"),
    ],
  }),
  multiSelectQuestion({
    id: "basics_core_life_anchors",
    sectionId: "basics",
    title: "Core life anchors",
    type: "multi_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: [
      "Which of these need to align early for you to take someone seriously?",
    ],
    scoringDimensions: ["life_direction", "values"],
    minSelections: 1,
    maxSelections: 3,
    options: [
      option("children", "Children"),
      option("religion_spirituality", "Religion or spirituality"),
      option("relationship_structure", "Monogamy or relationship structure"),
      option("politics_worldview", "Politics or worldview"),
      option("sobriety_substances", "Sobriety or substance habits"),
      option("geography_relocation", "Geography or relocation"),
      option("ambition_work_pace", "Ambition or work pace"),
      option("finances_spending", "Finances or spending style"),
      option("physical_affection", "Physical affection"),
    ],
  }),
  compoundQuestion({
    id: "basics_family_structure",
    sectionId: "basics",
    title: "Family and relationship structure",
    type: "compound",
    privacy: "PUBLIC_PROFILE",
    required: true,
    prompt: [
      "Do you want children?",
      "What relationship structure are you looking for?",
    ],
    scoringDimensions: ["life_direction"],
    recomputeBehavior: "full_match_recompute",
    fields: [
      {
        id: "children_preference",
        label: "Children",
        type: "single_select",
        required: true,
        options: [
          option("definitely_want", "Definitely want children"),
          option("open_to_it", "Open to children"),
          option("unsure", "Not sure"),
          option("do_not_want", "Do not want children"),
          option("have_and_want_more", "Already have children and want more"),
          option(
            "have_and_do_not_want_more",
            "Already have children and do not want more",
          ),
        ],
      },
      {
        id: "relationship_structure",
        label: "Relationship structure",
        type: "single_select",
        required: true,
        options: [
          option("monogamous", "Monogamous"),
          option("open_to_enm", "Open to ethical non-monogamy"),
          option("non_monogamous", "Non-monogamous"),
          option("unsure", "Still figuring that out"),
        ],
      },
    ],
  }),
  singleSelectQuestion({
    id: "basics_pace_availability",
    sectionId: "basics",
    title: "Pace and availability",
    type: "scenario_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: [
      "When you are genuinely excited about someone, what pace feels most natural in the first 6 weeks?",
    ],
    scoringDimensions: ["pace", "attachment"],
    options: [
      option("fast_contact_fast_meeting", "Frequent texting and meeting quickly"),
      option(
        "steady_contact_weekly_dates",
        "Steady messaging with one date a week",
      ),
      option("slow_build_room_to_think", "A slower build with room to think"),
      option(
        "chemistry_first_commitment_later",
        "Strong chemistry first, commitment later",
      ),
    ],
  }),
  rankedSelectQuestion({
    id: "basics_partner_priorities",
    sectionId: "basics",
    title: "Partner priorities",
    type: "ranked_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: ["What matters most once attraction is there?"],
    scoringDimensions: ["values", "chemistry", "responsiveness"],
    minSelections: 4,
    maxSelections: 4,
    options: [
      option("emotional_steadiness", "Emotional steadiness"),
      option("communication", "Communication"),
      option("humor", "Humor"),
      option("kindness", "Kindness"),
      option("shared_values", "Shared values"),
      option("ambition", "Ambition"),
      option("curiosity", "Curiosity"),
      option("reliability", "Reliability"),
      option("physical_chemistry", "Physical chemistry"),
    ],
  }),
  singleSelectQuestion({
    id: "basics_vulnerability_response",
    sectionId: "basics",
    title: "Vulnerability response",
    type: "scenario_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: [
      "Someone you are dating opens up about something they feel insecure about. What do you naturally do first?",
    ],
    scoringDimensions: ["responsiveness"],
    options: [
      option(
        "listen_and_help_them_feel_understood",
        "Listen closely and help them feel understood",
      ),
      option(
        "reframe_or_try_to_make_it_better",
        "Try to make it feel lighter or easier",
      ),
      option("share_a_similar_story", "Share something similar from my own life"),
      option(
        "feel_unsure_and_shift_the_conversation",
        "Feel unsure what to do and shift the conversation a bit",
      ),
    ],
  }),
  singleSelectQuestion({
    id: "basics_uncertainty_response",
    sectionId: "basics",
    title: "Uncertainty response",
    type: "scenario_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: [
      "You are excited about someone and they go quiet for two days. What is your default move?",
    ],
    scoringDimensions: ["attachment"],
    options: [
      option("check_in_directly", "Check in directly"),
      option("wait_and_give_space", "Wait and give them space"),
      option(
        "pull_back_and_assume_interest_dropped",
        "Pull back and assume interest dropped",
      ),
      option("seek_reassurance", "Look for reassurance"),
    ],
  }),
  singleSelectQuestion({
    id: "basics_lifestyle_snapshot",
    sectionId: "basics",
    title: "Lifestyle snapshot",
    type: "tile_select",
    privacy: "PUBLIC_PROFILE",
    required: true,
    prompt: ["Which weekend feels most like you?"],
    scoringDimensions: ["lifestyle"],
    options: [
      option("dinner_party_slow_morning", "Dinner party and a slow morning"),
      option("outdoors_early_nights", "Outdoors and early nights"),
      option("spontaneous_city_plans", "Spontaneous city plans"),
      option("gym_errands_reset", "Gym, errands, and reset"),
      option("culture_travel_activity", "Culture, travel, or activity"),
      option("homebody_recharge", "Homebody recharge"),
    ],
  }),
  pairwiseChoiceQuestion({
    id: "basics_attraction_calibration",
    sectionId: "basics",
    title: "Attraction calibration",
    type: "pairwise_choice",
    privacy: "SENSITIVE_PRIVATE",
    required: true,
    prompt: ["Which profile would you be more curious to explore?"],
    scoringDimensions: ["chemistry"],
    minPairs: 6,
    maxPairs: 10,
  }),
  singleSelectQuestion({
    id: "life_direction_future_mismatch",
    sectionId: "life_direction",
    title: "Hardest future mismatch",
    type: "single_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: ["Which future mismatch would be hardest for you to compromise on?"],
    scoringDimensions: ["life_direction", "values"],
    options: [
      option("children", "Children"),
      option("religion_spirituality", "Religion or spirituality"),
      option("location_homebase", "Location or home base"),
      option("money_style", "Money style"),
      option("ambition_work_pace", "Ambition or work pace"),
      option("relationship_structure", "Relationship structure"),
    ],
  }),
  singleSelectQuestion({
    id: "life_direction_marriage_meaning",
    sectionId: "life_direction",
    title: "Marriage meaning",
    type: "single_select",
    privacy: "MATCHING_PRIVATE",
    required: false,
    prompt: [
      "Which comes closest to how you see marriage or long-term partnership?",
    ],
    scoringDimensions: ["intent", "life_direction"],
    displayRules: [
      {
        kind: "answer_equals",
        sourceId: "basics_relationship_direction",
        value: "still_figuring_it_out",
        optionalWhenMatched: true,
      },
    ],
    options: [
      option("core_life_goal", "It is a core life goal for me"),
      option(
        "important_but_not_required",
        "Important, but not something I need",
      ),
      option("open_if_right_person", "Open to it with the right person"),
      option("not_for_me", "Not something I want"),
    ],
  }),
  singleSelectQuestion({
    id: "life_direction_money_style",
    sectionId: "life_direction",
    title: "Money style",
    type: "single_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: ["Which money style sounds most like you in a relationship?"],
    scoringDimensions: ["stress_finance", "life_direction"],
    options: [
      option("save_first", "Save first, spend carefully"),
      option(
        "balance_save_and_enjoy",
        "Balance saving and enjoying life",
      ),
      option("enjoy_now", "Live well now, plan as I go"),
      option("depends_on_context", "It depends on the season of life"),
    ],
  }),
  singleSelectQuestion({
    id: "life_direction_work_pace",
    sectionId: "life_direction",
    title: "Work pace",
    type: "single_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: ["Which partnership rhythm fits you best?"],
    scoringDimensions: ["life_direction", "lifestyle"],
    options: [
      option(
        "both_ambitious_high_intensity",
        "Two ambitious, high-intensity lives",
      ),
      option(
        "ambitious_with_protected_home_life",
        "Ambition with strongly protected home life",
      ),
      option("steady_and_predictable", "Steady and predictable over intense"),
      option(
        "flexible_and_case_by_case",
        "Flexible, depending on the stage of life",
      ),
    ],
  }),
  singleSelectQuestion({
    id: "life_direction_homebase",
    sectionId: "life_direction",
    title: "Home base",
    type: "single_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: ["How rooted or mobile do you want your next chapter to be?"],
    scoringDimensions: ["life_direction", "lifestyle"],
    options: [
      option("firm_homebase", "I want a firm home base"),
      option("open_to_moves", "I am open to moving for the right life"),
      option("global_flexible", "I want maximum location flexibility"),
      option("unsure", "I am not sure yet"),
    ],
  }),
  singleSelectQuestion({
    id: "life_direction_daily_life",
    sectionId: "life_direction",
    title: "Day-to-day priority",
    type: "forced_tradeoff",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: ["Which matters more in day-to-day partnership?"],
    scoringDimensions: ["values", "life_direction", "lifestyle"],
    options: [
      option("shared_routine", "Shared routine"),
      option("shared_ambition", "Shared ambition"),
      option("shared_values", "Shared values"),
      option("shared_adventure", "Shared adventure"),
    ],
  }),
  singleSelectQuestion({
    id: "life_direction_religion_salience",
    sectionId: "life_direction",
    title: "Religion or spirituality salience",
    type: "single_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: ["How much does religion or spirituality shape your day-to-day life?"],
    scoringDimensions: ["values", "life_direction"],
    options: [
      option("central_to_my_life", "It is central to my life"),
      option(
        "important_but_not_everything",
        "It matters, but it is not everything",
      ),
      option("private_but_meaningful", "It is private, but meaningful"),
      option(
        "not_a_big_part_of_my_life",
        "It is not a big part of my life",
      ),
      option("not_part_of_my_life", "It is not part of my life"),
    ],
  }),
  singleSelectQuestion({
    id: "life_direction_investment_style",
    sectionId: "life_direction",
    title: "Investment style",
    type: "scenario_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: ["When dating starts to feel real, what do you most naturally do?"],
    scoringDimensions: ["intent", "attachment", "life_direction"],
    options: [
      option("lean_in_and_make_time_for_it", "Lean in and make time for it"),
      option("stay_steady_and_let_it_build", "Stay steady and let it build"),
      option(
        "keep_some_distance_until_i_am_sure",
        "Keep some distance until I am sure",
      ),
      option(
        "pull_back_a_bit_to_protect_myself",
        "Pull back a bit to protect myself",
      ),
    ],
  }),
  singleSelectQuestion({
    id: "comm_repair_after_tension",
    sectionId: "communication_repair",
    title: "After tension",
    type: "single_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: [
      "After tension with someone you care about, what do you usually need first?",
    ],
    scoringDimensions: ["conflict_repair", "attachment"],
    options: [
      option("space", "Space"),
      option("reassurance", "Reassurance"),
      option("problem_solving", "Problem solving"),
      option("lightness_or_humor", "Lightness or humor"),
    ],
  }),
  singleSelectQuestion({
    id: "comm_repair_worse_mismatch",
    sectionId: "communication_repair",
    title: "Hardest mismatch in repair",
    type: "forced_tradeoff",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: ["Which feels worse to you?"],
    scoringDimensions: ["conflict_repair", "attachment"],
    options: [
      option("pushed_to_talk_too_soon", "Being pushed to talk too soon"),
      option("left_in_silence_too_long", "Being left in silence too long"),
      option("forced_to_keep_it_light", "Being forced to keep it light"),
      option(
        "turned_into_a_big_talk_immediately",
        "Having it turned into a big talk immediately",
      ),
    ],
  }),
  singleSelectQuestion({
    id: "comm_repair_apology_style",
    sectionId: "communication_repair",
    title: "Apology style",
    type: "single_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: ["When you realize you were wrong, what do you most often do next?"],
    scoringDimensions: ["conflict_repair"],
    options: [
      option("apologize_directly_and_own_it", "Apologize directly and own it"),
      option("explain_my_intention_first", "Explain my intention first"),
      option(
        "need_time_before_i_can_apologize",
        "Need time before I can apologize",
      ),
      option(
        "try_to_reset_the_mood_before_talking",
        "Try to reset the mood before talking",
      ),
    ],
  }),
  singleSelectQuestion({
    id: "comm_repair_bid_response",
    sectionId: "communication_repair",
    title: "Bid response",
    type: "scenario_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: [
      "You are distracted and someone you are dating tries to connect in a small way. What do you most often do?",
    ],
    scoringDimensions: ["responsiveness", "conflict_repair"],
    options: [
      option("pause_and_shift_fully", "Pause what I am doing and shift fully"),
      option(
        "acknowledge_warmly_then_finish_task",
        "Acknowledge them warmly, then finish my task",
      ),
      option(
        "respond_on_autopilot_then_reconnect_later",
        "Respond on autopilot and reconnect properly later",
      ),
      option(
        "often_notice_after_the_fact",
        "Often notice after the fact that I was too absorbed",
      ),
    ],
  }),
  singleSelectQuestion({
    id: "comm_repair_positive_news_under_stress",
    sectionId: "communication_repair",
    title: "Positive news under stress",
    type: "scenario_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: [
      "Your partner shares good news on a day you are drained. What feels most like you?",
    ],
    scoringDimensions: ["responsiveness", "conflict_repair"],
    options: [
      option("show_up_for_it_anyway", "Show up for it anyway"),
      option(
        "celebrate_briefly_then_return_to_my_headspace",
        "Celebrate briefly, then return to my headspace",
      ),
      option("need_a_minute_but_come_back_to_it", "Need a minute, but come back to it"),
      option("struggle_to_give_it_energy", "Struggle to give it energy"),
    ],
  }),
  singleSelectQuestion({
    id: "comm_repair_humor_style",
    sectionId: "communication_repair",
    title: "Humor style",
    type: "single_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: ["What kind of humor feels most connecting in a relationship?"],
    scoringDimensions: ["responsiveness", "chemistry"],
    options: [
      option("warm_and_playful", "Warm and playful"),
      option("dry_and_observational", "Dry and observational"),
      option("teasing_with_trust", "Teasing with trust"),
      option("less_humor_more_depth", "Less humor, more depth"),
    ],
  }),
  singleSelectQuestion({
    id: "comm_repair_message_energy",
    sectionId: "communication_repair",
    title: "Message energy",
    type: "single_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: ["What kind of chat energy keeps you engaged?"],
    scoringDimensions: ["pace", "lifestyle"],
    options: [
      option("fast_back_and_forth", "Fast back-and-forth"),
      option("steady_thoughtful_messages", "Steady thoughtful messages"),
      option("low_volume_but_high_substance", "Low volume but high substance"),
      option("voice_notes_or_calls_over_text", "Voice notes or calls over text"),
    ],
  }),
  singleSelectQuestion({
    id: "comm_repair_stress_communication",
    sectionId: "communication_repair",
    title: "Stress communication",
    type: "scenario_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: [
      "When money or work stress builds up, what usually happens to how you communicate with a partner?",
    ],
    scoringDimensions: ["stress_finance", "conflict_repair", "attachment"],
    options: [
      option(
        "i_get_quieter_and_more_withdrawn",
        "I get quieter and more withdrawn",
      ),
      option(
        "i_get_shorter_or_more_irritable",
        "I get shorter or more irritable",
      ),
      option(
        "i_lean_on_them_more_for_support",
        "I lean on them more for support",
      ),
      option(
        "i_try_to_compartmentalize_and_carry_on",
        "I try to compartmentalize and carry on",
      ),
    ],
  }),
  singleSelectQuestion({
    id: "emo_security_when_it_gets_real",
    sectionId: "emotional_security",
    title: "When it gets real",
    type: "single_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: [
      "When a connection starts becoming important, what tends to happen in you first?",
    ],
    scoringDimensions: ["attachment"],
    options: [
      option("i_move_closer", "I move closer"),
      option("i_slow_down_and_observe", "I slow down and observe"),
      option("i_need_more_reassurance", "I need more reassurance"),
      option("i_get_more_guarded", "I get more guarded"),
    ],
  }),
  singleSelectQuestion({
    id: "emo_security_trust_speed",
    sectionId: "emotional_security",
    title: "Trust speed",
    type: "single_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: ["What makes it easiest for you to trust someone?"],
    scoringDimensions: ["attachment", "values"],
    options: [
      option("consistent_actions", "Consistent actions"),
      option("emotional_openness", "Emotional openness"),
      option("shared_values", "Shared values"),
      option("time_and_proof", "Time and proof"),
    ],
  }),
  singleSelectQuestion({
    id: "emo_security_ambiguity",
    sectionId: "emotional_security",
    title: "Ambiguity interpretation",
    type: "scenario_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: [
      "If a person you like is warm one day and harder to read the next, what is your most natural interpretation?",
    ],
    scoringDimensions: ["attachment"],
    options: [
      option("they_are_probably_busy", "They are probably busy"),
      option("i_need_clarity_quickly", "I need clarity quickly"),
      option("i_assume_interest_has_changed", "I assume interest has changed"),
      option("i_wait_for_more_data", "I wait for more data"),
    ],
  }),
  singleSelectQuestion({
    id: "emo_security_recovery_time",
    sectionId: "emotional_security",
    title: "Recovery time",
    type: "single_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: ["After relationship tension, how long do you usually stay activated?"],
    scoringDimensions: ["attachment", "conflict_repair"],
    options: [
      option("minutes", "Minutes"),
      option("a_few_hours", "A few hours"),
      option("the_rest_of_the_day", "The rest of the day"),
      option("more_than_a_day", "More than a day"),
    ],
  }),
  singleSelectQuestion({
    id: "emo_security_reassurance_style",
    sectionId: "emotional_security",
    title: "Reassurance friction",
    type: "forced_tradeoff",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: ["Which is harder for you?"],
    scoringDimensions: ["attachment"],
    options: [
      option("too_little_reassurance", "Too little reassurance"),
      option("too_much_checking_in", "Too much checking in"),
      option("too_much_emotional_intensity", "Too much emotional intensity"),
      option("too_much_emotional_distance", "Too much emotional distance"),
    ],
  }),
  singleSelectQuestion({
    id: "emo_security_vulnerability_pace",
    sectionId: "emotional_security",
    title: "Vulnerability pace",
    type: "single_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: ["When do you usually become emotionally open in dating?"],
    scoringDimensions: ["attachment", "pace"],
    options: [
      option(
        "fairly_early_if_the_energy_is_right",
        "Fairly early if the energy is right",
      ),
      option("after_consistency_builds", "After consistency builds"),
      option("only_after_clear_commitment", "Only after clear commitment"),
      option("slowly_even_when_i_like_someone", "Slowly, even when I like someone"),
    ],
  }),
  singleSelectQuestion({
    id: "emo_security_disappointment_reactivity",
    sectionId: "emotional_security",
    title: "Disappointment reactivity",
    type: "scenario_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: [
      "When something disappointing happens in dating, what is your first internal reaction?",
    ],
    scoringDimensions: ["attachment", "stress_finance"],
    options: [
      option(
        "sharp_frustration_that_fades_quickly",
        "A sharp reaction that fades fairly quickly",
      ),
      option(
        "quiet_disappointment_i_sit_with",
        "Quiet disappointment that I sit with",
      ),
      option(
        "i_spiral_before_i_can_think_clearly",
        "I spiral a bit before I can think clearly",
      ),
      option(
        "i_move_past_it_without_much_reaction",
        "I move past it without much reaction",
      ),
    ],
  }),
  rangeSelectQuestion({
    id: "life_intimacy_affection_importance",
    sectionId: "lifestyle_intimacy_chemistry",
    title: "Affection importance",
    type: "range_select",
    privacy: "SENSITIVE_PRIVATE",
    required: true,
    prompt: ["How important is physical affection in feeling close to someone?"],
    scoringDimensions: ["intimacy"],
    min: 1,
    max: 5,
    step: 1,
  }),
  singleSelectQuestion({
    id: "life_intimacy_hardest_mismatch",
    sectionId: "lifestyle_intimacy_chemistry",
    title: "Hardest intimacy mismatch",
    type: "single_select",
    privacy: "SENSITIVE_PRIVATE",
    required: true,
    prompt: ["Which mismatch would be hardest for you to work around?"],
    scoringDimensions: ["intimacy"],
    displayRules: [
      {
        kind: "after_section_completed",
        sourceId: "basics",
      },
    ],
    options: [
      option("libido", "Libido"),
      option("affection_style", "Affection style"),
      option("exclusivity_expectations", "Exclusivity expectations"),
      option(
        "communication_about_sex",
        "Communication about sex",
      ),
    ],
  }),
  singleSelectQuestion({
    id: "life_intimacy_chemistry_growth",
    sectionId: "lifestyle_intimacy_chemistry",
    title: "Chemistry growth",
    type: "single_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: ["What usually makes chemistry grow for you?"],
    scoringDimensions: ["chemistry", "intimacy"],
    options: [
      option("safety_and_ease", "Safety and ease"),
      option("banter_and_playfulness", "Banter and playfulness"),
      option("admiration_and_respect", "Admiration and respect"),
      option("immediate_physical_pull", "Immediate physical pull"),
    ],
  }),
  singleSelectQuestion({
    id: "life_intimacy_exclusivity_norm",
    sectionId: "lifestyle_intimacy_chemistry",
    title: "Exclusivity norm",
    type: "single_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: ["When does exclusivity start to matter to you?"],
    scoringDimensions: ["intimacy", "intent"],
    recomputeBehavior: "full_match_recompute",
    options: [
      option("very_early_if_interest_is_mutual", "Very early if interest is mutual"),
      option("after_a_few_dates", "After a few dates"),
      option(
        "only_after_a_clear_conversation",
        "Only after a clear conversation",
      ),
      option("later_after_strong_connection", "Later, after a strong connection"),
    ],
  }),
  singleSelectQuestion({
    id: "life_intimacy_social_rhythm",
    sectionId: "lifestyle_intimacy_chemistry",
    title: "Social rhythm",
    type: "single_select",
    privacy: "PUBLIC_PROFILE",
    required: true,
    prompt: ["Which social rhythm feels best in a relationship?"],
    scoringDimensions: ["lifestyle"],
    options: [
      option("mostly_out_and_about", "Mostly out and about"),
      option("mostly_home_based", "Mostly home-based"),
      option("balanced_mix", "Balanced mix"),
      option("depends_on_the_week", "Depends on the week"),
    ],
  }),
  singleSelectQuestion({
    id: "life_intimacy_novelty_vs_routine",
    sectionId: "lifestyle_intimacy_chemistry",
    title: "Novelty versus routine",
    type: "single_select",
    privacy: "MATCHING_PRIVATE",
    required: true,
    prompt: ["What keeps a relationship feeling alive for you?"],
    scoringDimensions: ["chemistry", "lifestyle"],
    options: [
      option("shared_rituals", "Shared rituals"),
      option("new_experiences", "New experiences"),
      option("deep_conversation", "Deep conversation"),
      option("physical_affection_and_play", "Physical affection and play"),
    ],
  }),
  singleSelectQuestion({
    id: "life_intimacy_substance_style",
    sectionId: "lifestyle_intimacy_chemistry",
    title: "Substance style",
    type: "single_select",
    privacy: "MATCHING_PRIVATE",
    required: false,
    prompt: ["Which best fits your lifestyle?"],
    scoringDimensions: ["lifestyle", "values"],
    displayRules: [
      {
        kind: "answer_includes",
        sourceId: "basics_core_life_anchors",
        value: "sobriety_substances",
        optionalWhenMatched: true,
      },
    ],
    options: [
      option("fully_sober", "Fully sober"),
      option("light_social_use", "Light social use"),
      option("moderate_social_use", "Moderate social use"),
      option("it_varies_by_context", "It varies by context"),
    ],
  }),
  pairwiseChoiceQuestion({
    id: "life_intimacy_extended_attraction_calibration",
    sectionId: "lifestyle_intimacy_chemistry",
    title: "Extended attraction calibration",
    type: "pairwise_choice",
    privacy: "SENSITIVE_PRIVATE",
    required: true,
    prompt: ["Which connection style feels more naturally attractive?"],
    scoringDimensions: ["chemistry"],
    displayRules: [
      {
        kind: "after_section_completed",
        sourceId: "basics",
      },
    ],
    recomputeBehavior: "ranking_only",
    minPairs: 8,
    maxPairs: 12,
  }),
  singleSelectQuestion({
    id: "life_intimacy_touch_style",
    sectionId: "lifestyle_intimacy_chemistry",
    title: "Touch style",
    type: "single_select",
    privacy: "SENSITIVE_PRIVATE",
    required: true,
    prompt: ["What kind of physical affection feels most connecting to you?"],
    scoringDimensions: ["intimacy", "chemistry"],
    options: [
      option(
        "casual_touch_throughout_the_day",
        "Casual touch throughout the day",
      ),
      option(
        "longer_closeness_like_cuddling",
        "Longer closeness like cuddling",
      ),
      option(
        "stronger_sexual_chemistry_and_passion",
        "Stronger sexual chemistry and passion",
      ),
      option(
        "physical_affection_is_not_my_main_way_of_connecting",
        "Physical affection is not my main way of connecting",
      ),
    ],
  }),
] as const;

export const profilerSectionMap = Object.fromEntries(
  profilerSections.map((section) => [section.id, section]),
) as Readonly<Record<(typeof profilerSections)[number]["id"], ProfilerSectionDefinition>>;

export const profilerQuestionMap = Object.fromEntries(
  profilerQuestions.map((question) => [question.id, question]),
) as Readonly<Record<(typeof profilerQuestions)[number]["id"], ProfilerQuestionDefinition>>;

export const profilerQuestionsBySection = profilerSections.reduce<
  Record<string, readonly ProfilerQuestionDefinition[]>
>((accumulator, section) => {
  accumulator[section.id] = profilerQuestions.filter(
    (question) => question.sectionId === section.id,
  );
  return accumulator;
}, {});

export const profilerQuestionIds = profilerQuestions.map(
  (question) => question.id,
) as readonly string[];

export const profilerMetadata = {
  schemaVersion: PROFILER_SCHEMA_VERSION,
  sections: profilerSections,
  questions: profilerQuestions,
} as const;
