import type {
  FirstMatchQualityPolicyDefinition,
  GuidedResponseModality,
  HumanAssistedReviewPolicyDefinition,
  HumanAssistedReviewState,
  LaunchCohortPolicyDefinition,
  MatchDeliveryDecisionState,
  MatchInteractionPlanDefinition,
  MatchInteractionPhaseId,
  MatchInteractionState,
  MatchQualityGateEvaluation,
  MatchSurfaceReason,
  MatchPriorSourceDefinition,
  PromptResponseRecord,
} from "./types.js";
import type {
  PostDateLearningPolicyDefinition,
  PostDateReflectionPayload,
} from "./outcomes.js";
import type {
  ReportCategoryId,
  TrustSafetyPolicyDefinition,
} from "./trust-safety.js";

export interface GetActiveMatchExperienceResponse {
  schemaVersion: string;
  plan: MatchInteractionPlanDefinition;
  state: MatchInteractionState;
  surfaceReasons: readonly MatchSurfaceReason[];
  qualityEvaluation?: readonly MatchQualityGateEvaluation[];
  humanReview?: HumanAssistedReviewState;
}

export interface GetMatchDeliveryStatusResponse {
  schemaVersion: string;
  qualityPolicy: FirstMatchQualityPolicyDefinition;
  launchCohortPolicy: LaunchCohortPolicyDefinition;
  humanReviewPolicy: HumanAssistedReviewPolicyDefinition;
  activePriorSources: readonly MatchPriorSourceDefinition[];
  status: MatchDeliveryDecisionState;
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

export interface GetPostDateReflectionConfigResponse {
  schemaVersion: string;
  policy: PostDateLearningPolicyDefinition;
}

export interface SubmitPostDateReflectionRequest {
  matchId: string;
  payload: PostDateReflectionPayload;
}

export interface SubmitPostDateReflectionResponse {
  schemaVersion: string;
  nextState: "continuing" | "closed_gracefully" | "post_date_reflection";
  learningApplied: readonly string[];
}

export interface GetTrustSafetyOverviewResponse {
  schemaVersion: string;
  policy: TrustSafetyPolicyDefinition;
}

export interface SubmitSafetyReportRequest {
  matchId: string;
  categoryId: ReportCategoryId;
  details?: string;
  blockUser: boolean;
}

export interface SubmitSafetyReportResponse {
  schemaVersion: string;
  reportQueued: boolean;
  matchClosed: boolean;
  reviewPath: "human_review" | "auto_limit_and_review";
}
