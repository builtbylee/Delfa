import type {
  ProfilerQuestionDefinition,
  ProfilerSectionDefinition,
  ProfilerSectionId,
  ProfilerSectionProgress,
  ProfilerResponsePayload,
  UserCompatibilityProfile,
  UserProfilerResponse,
} from "./types.js";
import type {
  CompatibilityPreview,
  MirrorMomentPayload,
  ProfilerSectionJourneyFrame,
} from "./experience.js";

export interface GetProfilerSectionsResponse {
  schemaVersion: string;
  sections: readonly ProfilerSectionDefinition[];
  progress: readonly ProfilerSectionProgress[];
}

export interface GetProfilerSectionResponse {
  schemaVersion: string;
  section: ProfilerSectionDefinition;
  questions: readonly ProfilerQuestionDefinition[];
  progress: ProfilerSectionProgress;
  journeyFrame?: ProfilerSectionJourneyFrame;
}

export interface UpsertProfilerResponseRequest {
  questionId: string;
  payload: ProfilerResponsePayload;
}

export interface UpsertProfilerResponseResponse {
  savedResponse: UserProfilerResponse;
  sectionProgress: ProfilerSectionProgress;
  recomputeBehavior: "none" | "ranking_only" | "full_match_recompute";
}

export interface CompleteProfilerSectionRequest {
  sectionId: ProfilerSectionId;
}

export interface CompleteProfilerSectionResponse {
  sectionProgress: ProfilerSectionProgress;
  unlockedSectionIds: readonly ProfilerSectionId[];
  mirrorMoment?: MirrorMomentPayload;
  compatibilityPreview?: CompatibilityPreview;
  recommendedNextSectionIds?: readonly ProfilerSectionId[];
}

export interface GetProfilerProgressResponse {
  schemaVersion: string;
  progress: readonly ProfilerSectionProgress[];
}

export interface GetProfilerSummaryResponse {
  schemaVersion: string;
  completionPercent: number;
  compatibilityProfile?: UserCompatibilityProfile;
  compatibilityPreview?: CompatibilityPreview;
}

export interface PostProfilerRecomputeResponse {
  schemaVersion: string;
  compatibilityProfile: UserCompatibilityProfile;
}
