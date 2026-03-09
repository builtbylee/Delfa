import type { CompatibilityDimension } from "../profiler/types";

export const MATCH_INTERACTION_SCHEMA_VERSION = "0.2.0";

export const matchInteractionPhaseIds = [
  "round_1_warmth",
  "round_2_shared_experience",
  "round_3_deeper_disclosure",
] as const;

export const guidedResponseModalities = [
  "text",
  "voice",
  "choice_only",
] as const;

export const guidedPromptKinds = [
  "disclosure_prompt",
  "shared_micro_experience",
] as const;

export const sharedMicroExperienceTypes = [
  "shared_reaction",
  "collaborative_choice",
  "values_tradeoff",
] as const;

export const matchQualityGateIds = [
  "attraction_likelihood",
  "intent_alignment",
  "life_goal_compatibility",
  "date_viability",
  "activity_readiness",
] as const;

export const matchPriorSourceIds = [
  "profiler",
  "hard_filters",
  "attraction_calibration",
  "local_cohort",
  "population_patterns",
  "behavioral_learning",
] as const;

export const humanAssistedReviewStatuses = [
  "not_required",
  "pending_review",
  "approved",
  "rejected",
  "hold_for_better_candidate",
] as const;

export const matchDeliveryStatuses = [
  "searching",
  "quality_hold",
  "ready_for_review",
  "ready_to_surface",
  "surfaced",
] as const;

export type MatchInteractionPhaseId = (typeof matchInteractionPhaseIds)[number];
export type GuidedResponseModality = (typeof guidedResponseModalities)[number];
export type GuidedPromptKind = (typeof guidedPromptKinds)[number];
export type SharedMicroExperienceType =
  (typeof sharedMicroExperienceTypes)[number];
export type MatchQualityGateId = (typeof matchQualityGateIds)[number];
export type MatchPriorSourceId = (typeof matchPriorSourceIds)[number];
export type HumanAssistedReviewStatus =
  (typeof humanAssistedReviewStatuses)[number];
export type MatchDeliveryStatus = (typeof matchDeliveryStatuses)[number];

export type MatchExplanationCategory =
  | "intent"
  | "life_direction"
  | "attraction"
  | "lifestyle"
  | "communication"
  | "readiness";

export interface MatchInteractionOptionDefinition {
  id: string;
  label: string;
  description?: string;
}

export interface MatchQualityGateDefinition {
  id: MatchQualityGateId;
  title: string;
  passRule: "hard_pass" | "minimum_medium_confidence";
  rationale: string;
}

export interface MatchQualityGateEvaluation {
  gateId: MatchQualityGateId;
  passed: boolean;
  confidence: "low" | "medium" | "high";
  note: string;
}

export interface MatchPriorSourceDefinition {
  id: MatchPriorSourceId;
  label: string;
  role: string;
  usedAtColdStart: boolean;
}

export interface FirstMatchQualityPolicyDefinition {
  id: string;
  title: string;
  summary: string;
  preferDelayOverWeakFirstMatch: boolean;
  minimumWaitHours: number;
  maximumWaitHours: number;
  requiredGates: readonly MatchQualityGateDefinition[];
  priorSources: readonly MatchPriorSourceDefinition[];
}

export interface HumanAssistedReviewPolicyDefinition {
  enabled: boolean;
  appliesDuring: "launch_mode" | "low_density_mode" | "disabled";
  reviewerRole: "founder_or_ops";
  requiredBeforeSurface: boolean;
}

export interface HumanAssistedReviewState {
  required: boolean;
  status: HumanAssistedReviewStatus;
  reviewerRole?: "founder_or_ops";
  decisionReason?: string;
}

export interface LaunchCohortPolicyDefinition {
  launchModeEnabled: boolean;
  sameCityRequired: boolean;
  compatibleAgeBandRequired: boolean;
  relationshipIntentRequired: boolean;
  readinessRequired: boolean;
  profileScreeningRequired: boolean;
  rationale: string;
}

export interface MatchSurfaceReason {
  category: MatchExplanationCategory;
  title: string;
  detail: string;
}

export interface MatchDeliveryDecisionState {
  status: MatchDeliveryStatus;
  missingGateIds: readonly MatchQualityGateId[];
  explanation: string;
  holdWindowHours?: {
    min: number;
    max: number;
  };
}

export interface VoiceResponseRules {
  minSeconds: number;
  maxSeconds: number;
  textFallbackAllowed: boolean;
}

export interface BaseGuidedPromptDefinition {
  id: string;
  phaseId: MatchInteractionPhaseId;
  title: string;
  kind: GuidedPromptKind;
  prompt: string;
  whyItMatters: string;
  recommendedModality: "voice_preferred_text_fallback" | "text_only";
  estimatedResponseSeconds: number;
  revealMode: "after_both_respond";
  scoringDimensions: readonly CompatibilityDimension[];
  conversationCarryForwardPrompts: readonly string[];
  responseMaxChars?: number;
  voiceRules?: VoiceResponseRules;
}

export interface DisclosurePromptDefinition extends BaseGuidedPromptDefinition {
  kind: "disclosure_prompt";
}

export interface SharedMicroExperienceDefinition
  extends BaseGuidedPromptDefinition {
  kind: "shared_micro_experience";
  experienceType: SharedMicroExperienceType;
  options: readonly MatchInteractionOptionDefinition[];
  stimulusAssetKey?: string;
}

export type GuidedPromptDefinition =
  | DisclosurePromptDefinition
  | SharedMicroExperienceDefinition;

export interface MatchInteractionPhaseDefinition {
  id: MatchInteractionPhaseId;
  title: string;
  description: string;
  sequenceOrder: number;
  completionRule: "both_users_submit_one_response";
  unlocksReadyToMeet?: boolean;
  prompts: readonly GuidedPromptDefinition[];
}

export interface ReadyToMeetGateDefinition {
  controlBecomesVisibleAfterPhaseIds: readonly MatchInteractionPhaseId[];
  acceleratedVisibilityRule?: {
    requiresPhaseIds: readonly MatchInteractionPhaseId[];
    minimumConfidenceDimensions: readonly CompatibilityDimension[];
    requiresPassedQualityGateIds?: readonly MatchQualityGateId[];
  };
  nudgeAfterPhaseIds: readonly MatchInteractionPhaseId[];
  rationale: string;
}

export interface MatchInteractionPlanDefinition {
  id: string;
  title: string;
  summary: string;
  phases: readonly MatchInteractionPhaseDefinition[];
  readyToMeetGate: ReadyToMeetGateDefinition;
}

export interface PromptResponseRecord {
  promptId: string;
  userId: string;
  modality: GuidedResponseModality;
  submittedAtIso: string;
  textResponse?: string;
  audioAssetId?: string;
  selectedOptionIds?: readonly string[];
}

export interface MatchPromptState {
  promptId: string;
  phaseId: MatchInteractionPhaseId;
  yourResponseSubmitted: boolean;
  theirResponseSubmitted: boolean;
  revealedAtIso?: string;
}

export interface MatchInteractionState {
  matchId: string;
  schemaVersion: string;
  currentPhaseId: MatchInteractionPhaseId;
  completedPhaseIds: readonly MatchInteractionPhaseId[];
  promptStates: readonly MatchPromptState[];
  readyToMeetStatus:
    | "locked"
    | "available_private"
    | "one_sided_signaled"
    | "mutual";
}
