import type { MatchInteractionPlanDefinition } from "./types";

export const defaultMatchInteractionPlan: MatchInteractionPlanDefinition = {
  id: "delfa_v1_interaction_plan",
  title: "Three-round chemistry path",
  summary:
    "A lightweight interaction sequence designed to surface warmth, shared feeling, and early chemistry faster than unstructured chat alone.",
  phases: [
    {
      id: "round_1_warmth",
      title: "Round 1: Warmth and voice",
      description:
        "A low-pressure opener designed to reveal tone, warmth, humor, and basic conversational ease.",
      sequenceOrder: 1,
      completionRule: "both_users_submit_one_response",
      prompts: [
        {
          id: "voice_warmth_week_highlight",
          phaseId: "round_1_warmth",
          title: "What lifted your energy this week?",
          kind: "disclosure_prompt",
          prompt:
            "What happened in the last week that lifted your mood, made you laugh, or reminded you that life felt good?",
          whyItMatters:
            "This prompt is meant to surface tone, warmth, positivity, and how naturally someone shares good moments.",
          recommendedModality: "voice_preferred_text_fallback",
          estimatedResponseSeconds: 35,
          revealMode: "after_both_respond",
          scoringDimensions: ["responsiveness", "chemistry", "lifestyle"],
          conversationCarryForwardPrompts: [
            "What detail in their answer would you want to ask about next?",
            "Did their energy feel closer to playful, calm, or intense?",
          ],
          responseMaxChars: 280,
          voiceRules: {
            minSeconds: 15,
            maxSeconds: 60,
            textFallbackAllowed: true,
          },
        },
      ],
    },
    {
      id: "round_2_shared_experience",
      title: "Round 2: Shared moment",
      description:
        "A same-stimulus or collaborative choice prompt that gives both people a small shared experience instead of another static Q&A.",
      sequenceOrder: 2,
      completionRule: "both_users_submit_one_response",
      unlocksReadyToMeet: true,
      prompts: [
        {
          id: "shared_scene_reaction_evening_vibe",
          phaseId: "round_2_shared_experience",
          title: "Shared scene reaction",
          kind: "shared_micro_experience",
          experienceType: "shared_reaction",
          prompt:
            "You both see the same scene: a first free evening with no plans. Which version of it pulls you in more?",
          whyItMatters:
            "Shared reactions surface vibe, lifestyle rhythm, and attraction to the same moment in a way chat alone usually does not.",
          recommendedModality: "text_only",
          estimatedResponseSeconds: 20,
          revealMode: "after_both_respond",
          scoringDimensions: ["lifestyle", "chemistry", "pace"],
          conversationCarryForwardPrompts: [
            "What about their choice feels close to your real life?",
            "Does the difference between your choices feel exciting or distancing?",
          ],
          options: [
            {
              id: "quiet_corner_dinner",
              label: "Quiet corner table and a long conversation",
            },
            {
              id: "walk_and_spontaneous_stop",
              label: "A walk that turns into spontaneous stops",
            },
            {
              id: "crowded_social_energy",
              label: "A busier social spot with more energy",
            },
            {
              id: "stay_in_and_make_it_cozy",
              label: "Stay in and make the evening feel cozy",
            },
          ],
          stimulusAssetKey: "shared-scene-evening-vibe-01",
        },
      ],
    },
    {
      id: "round_3_deeper_disclosure",
      title: "Round 3: Deeper disclosure",
      description:
        "A slightly more personal round that surfaces self-awareness, perception, and the feel of real closeness.",
      sequenceOrder: 3,
      completionRule: "both_users_submit_one_response",
      unlocksReadyToMeet: true,
      prompts: [
        {
          id: "voice_people_assume_wrong",
          phaseId: "round_3_deeper_disclosure",
          title: "What do people often get wrong about you?",
          kind: "disclosure_prompt",
          prompt:
            "What is something people often assume about you too quickly that is not really true once they know you better?",
          whyItMatters:
            "This prompt creates reciprocal disclosure and reveals self-perception, vulnerability, and how a person wants to be understood.",
          recommendedModality: "voice_preferred_text_fallback",
          estimatedResponseSeconds: 45,
          revealMode: "after_both_respond",
          scoringDimensions: ["attachment", "responsiveness", "chemistry"],
          conversationCarryForwardPrompts: [
            "What part of their answer surprised you?",
            "What follow-up would make them feel more understood rather than just interesting?",
          ],
          responseMaxChars: 320,
          voiceRules: {
            minSeconds: 20,
            maxSeconds: 75,
            textFallbackAllowed: true,
          },
        },
      ],
    },
  ],
  readyToMeetGate: {
    controlBecomesVisibleAfterPhaseIds: ["round_2_shared_experience"],
    acceleratedVisibilityRule: {
      requiresPhaseIds: ["round_1_warmth"],
      minimumConfidenceDimensions: ["intent", "life_direction", "lifestyle"],
    },
    nudgeAfterPhaseIds: ["round_3_deeper_disclosure"],
    rationale:
      "Delfa should help people move toward meeting as soon as there is enough real interaction signal, not after endless messaging.",
  },
} as const;
