import type { CompatibilityDimension } from "../profiler/types";

export const MATCH_INTERACTION_SCHEMA_VERSION = "0.1.0";

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

export type MatchInteractionPhaseId = (typeof matchInteractionPhaseIds)[number];
export type GuidedResponseModality = (typeof guidedResponseModalities)[number];
export type GuidedPromptKind = (typeof guidedPromptKinds)[number];
export type SharedMicroExperienceType =
  (typeof sharedMicroExperienceTypes)[number];

export interface MatchInteractionOptionDefinition {
  id: string;
  label: string;
  description?: string;
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
