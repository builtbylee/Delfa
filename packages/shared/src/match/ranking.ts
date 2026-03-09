import type { CompatibilityDimension } from "../profiler/types";

export const RANKING_ENGINE_SCHEMA_VERSION = "0.1.0";

export const rankingStageIds = [
  "eligibility_filter",
  "quality_floor",
  "cold_start_rank",
  "population_prior_adjustment",
  "behavioral_refinement",
  "launch_review",
  "surface_or_hold",
] as const;

export type RankingStageId = (typeof rankingStageIds)[number];

export interface RankingStageDefinition {
  id: RankingStageId;
  title: string;
  purpose: string;
}

export interface RankingWeightDefinition {
  dimension: CompatibilityDimension;
  weight: number;
}

export interface BehavioralOverrideRuleDefinition {
  id: string;
  trigger: string;
  effect: string;
}

export interface RankingEnginePolicyDefinition {
  id: string;
  title: string;
  stages: readonly RankingStageDefinition[];
  coldStartWeights: readonly RankingWeightDefinition[];
  deepProfileWeights: readonly RankingWeightDefinition[];
  behavioralOverrideRules: readonly BehavioralOverrideRuleDefinition[];
  queueRules: readonly string[];
}

export const defaultRankingEnginePolicy: RankingEnginePolicyDefinition = {
  id: "delfa_v1_live_ranking",
  title: "Delfa live ranking engine",
  stages: [
    {
      id: "eligibility_filter",
      title: "Eligibility filter",
      purpose: "Remove candidates that are clearly incompatible.",
    },
    {
      id: "quality_floor",
      title: "Quality floor",
      purpose: "Block weak first matches before ranking continues.",
    },
    {
      id: "cold_start_rank",
      title: "Cold-start rank",
      purpose: "Score candidates from profiler, attraction, and local cohort quality.",
    },
    {
      id: "population_prior_adjustment",
      title: "Population prior",
      purpose:
        "Use similar successful pairings as a prior without creating popularity loops.",
    },
    {
      id: "behavioral_refinement",
      title: "Behavioral refinement",
      purpose: "Use live user-specific outcomes once enough signal exists.",
    },
    {
      id: "launch_review",
      title: "Launch review",
      purpose: "Allow founder or ops review before first-match surfacing in launch mode.",
    },
    {
      id: "surface_or_hold",
      title: "Surface or hold",
      purpose: "Surface one match or keep the user in quality hold.",
    },
  ],
  coldStartWeights: [
    { dimension: "intent", weight: 24 },
    { dimension: "life_direction", weight: 22 },
    { dimension: "chemistry", weight: 20 },
    { dimension: "lifestyle", weight: 12 },
    { dimension: "responsiveness", weight: 8 },
    { dimension: "pace", weight: 8 },
    { dimension: "attachment", weight: 6 },
  ],
  deepProfileWeights: [
    { dimension: "intent", weight: 18 },
    { dimension: "life_direction", weight: 18 },
    { dimension: "chemistry", weight: 18 },
    { dimension: "values", weight: 12 },
    { dimension: "stress_finance", weight: 10 },
    { dimension: "conflict_repair", weight: 10 },
    { dimension: "intimacy", weight: 8 },
    { dimension: "responsiveness", weight: 4 },
    { dimension: "attachment", weight: 2 },
  ],
  behavioralOverrideRules: [
    {
      id: "mutual_ready_boost",
      trigger: "mutual ready-to-meet",
      effect: "Increase confidence in chemistry, pace, and attraction fit.",
    },
    {
      id: "post_date_yes_boost",
      trigger: "post-date yes to seeing them again",
      effect: "Strengthen the pairing logic that produced the match.",
    },
    {
      id: "post_date_weaker_attraction_penalty",
      trigger: "post-date attraction weaker than expected",
      effect: "Reduce attraction confidence for similar candidate profiles.",
    },
    {
      id: "repeat_no_chemistry_penalty",
      trigger: "repeated graceful disconnects for no chemistry",
      effect: "Tighten attraction and chemistry assumptions before future surfacing.",
    },
  ],
  queueRules: [
    "Never surface more than one active match at a time.",
    "Prefer 24-72 hour quality holds over obviously weak first matches.",
    "Do not widen filters aggressively just to keep the queue moving.",
  ],
};
