import type {
  FirstMatchQualityPolicyDefinition,
  HumanAssistedReviewPolicyDefinition,
  LaunchCohortPolicyDefinition,
} from "./types.js";

export const defaultFirstMatchQualityPolicy: FirstMatchQualityPolicyDefinition =
  {
    id: "delfa_v1_first_match_quality_floor",
    title: "First match quality floor",
    summary:
      "Do not surface a first match unless attraction, intent, life fit, date viability, and readiness all clear Delfa's minimum bar.",
    preferDelayOverWeakFirstMatch: true,
    minimumWaitHours: 24,
    maximumWaitHours: 72,
    requiredGates: [
      {
        id: "attraction_likelihood",
        title: "Attraction likelihood",
        passRule: "minimum_medium_confidence",
        rationale:
          "The user should not feel that the surfaced match is visibly outside their likely attraction range.",
      },
      {
        id: "intent_alignment",
        title: "Intent alignment",
        passRule: "hard_pass",
        rationale:
          "The match should agree on seriousness and basic relationship direction from the start.",
      },
      {
        id: "life_goal_compatibility",
        title: "Life-goal compatibility",
        passRule: "minimum_medium_confidence",
        rationale:
          "Children, location, life anchors, and relationship shape should look plausibly compatible before a first match is surfaced.",
      },
      {
        id: "date_viability",
        title: "Date viability",
        passRule: "hard_pass",
        rationale:
          "Users should be realistically able to meet without distance or logistics making the match pointless.",
      },
      {
        id: "activity_readiness",
        title: "Activity and readiness",
        passRule: "hard_pass",
        rationale:
          "The first match should involve two active, ready users rather than paused or low-intent inventory.",
      },
    ],
    priorSources: [
      {
        id: "profiler",
        label: "Profiler signal",
        role: "Cold-start compatibility prior built from Basics and deeper sections.",
        usedAtColdStart: true,
      },
      {
        id: "hard_filters",
        label: "Hard incompatibility filters",
        role: "Remove candidates that are clearly wrong before ranking begins.",
        usedAtColdStart: true,
      },
      {
        id: "attraction_calibration",
        label: "Attraction calibration",
        role: "Learn likely presentation and chemistry fit from revealed choices rather than stated type language.",
        usedAtColdStart: true,
      },
      {
        id: "local_cohort",
        label: "Local cohort quality",
        role: "Prefer candidates from the same dense, relationship-minded launch cohort.",
        usedAtColdStart: true,
      },
      {
        id: "population_patterns",
        label: "Population-level pattern matching",
        role: "Use outcomes from similar users and pairings to strengthen ranking before personal history exists.",
        usedAtColdStart: true,
      },
      {
        id: "behavioral_learning",
        label: "Behavioral learning",
        role: "Refine ranking later from opens, replies, prompt completion, meetings, and date outcomes.",
        usedAtColdStart: false,
      },
    ],
  };

export const defaultHumanAssistedReviewPolicy: HumanAssistedReviewPolicyDefinition =
  {
    enabled: true,
    appliesDuring: "launch_mode",
    reviewerRole: "founder_or_ops",
    requiredBeforeSurface: true,
  };

export const defaultLaunchCohortPolicy: LaunchCohortPolicyDefinition = {
  launchModeEnabled: true,
  sameCityRequired: true,
  compatibleAgeBandRequired: true,
  relationshipIntentRequired: true,
  readinessRequired: true,
  profileScreeningRequired: true,
  rationale:
    "Early match quality depends on a dense, serious, active cohort rather than an open marketplace full of weak inventory.",
};
