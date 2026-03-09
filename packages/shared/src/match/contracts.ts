import type {
  GuidedResponseModality,
  MatchInteractionPlanDefinition,
  MatchInteractionPhaseId,
  MatchInteractionState,
  PromptResponseRecord,
} from "./types";

export interface GetActiveMatchExperienceResponse {
  schemaVersion: string;
  plan: MatchInteractionPlanDefinition;
  state: MatchInteractionState;
}

export interface SubmitGuidedPromptResponseRequest {
  matchId: string;
  promptId: string;
  modality: GuidedResponseModality;
  textResponse?: string;
  audioAssetId?: string;
  selectedOptionIds?: readonly string[];
}

export interface SubmitGuidedPromptResponseResponse {
  schemaVersion: string;
  state: MatchInteractionState;
  revealReady: boolean;
  unlockedPhaseId?: MatchInteractionPhaseId;
  readyToMeetBecameAvailable: boolean;
}

export interface GetPromptRevealResponse {
  schemaVersion: string;
  promptId: string;
  yourResponse: PromptResponseRecord;
  theirResponse: PromptResponseRecord;
  carryForwardPrompts: readonly string[];
}

export interface SetReadyToMeetIntentRequest {
  matchId: string;
  ready: boolean;
}

export interface SetReadyToMeetIntentResponse {
  schemaVersion: string;
  state: MatchInteractionState;
  mutualReadyRevealed: boolean;
}
