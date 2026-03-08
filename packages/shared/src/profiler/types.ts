export const PROFILER_SCHEMA_VERSION = "0.1.0";

export const profilerSectionIds = [
  "basics",
  "life_direction",
  "communication_repair",
  "emotional_security",
  "lifestyle_intimacy_chemistry",
] as const;

export const profilerQuestionTypes = [
  "single_select",
  "multi_select",
  "ranked_select",
  "range_select",
  "pairwise_choice",
  "scenario_select",
  "tile_select",
  "compound",
  "forced_tradeoff",
] as const;

export const profilerPrivacyLevels = [
  "PUBLIC_PROFILE",
  "MATCHING_PRIVATE",
  "SENSITIVE_PRIVATE",
] as const;

export const compatibilityDimensions = [
  "eligibility",
  "intent",
  "life_direction",
  "pace",
  "responsiveness",
  "attachment",
  "lifestyle",
  "chemistry",
  "conflict_repair",
  "values",
  "intimacy",
  "stress_finance",
] as const;

export type ProfilerSectionId = (typeof profilerSectionIds)[number];
export type ProfilerQuestionType = (typeof profilerQuestionTypes)[number];
export type ProfilerPrivacyLevel = (typeof profilerPrivacyLevels)[number];
export type CompatibilityDimension = (typeof compatibilityDimensions)[number];

export interface DurationRange {
  minMinutes: number;
  maxMinutes: number;
}

export interface ProfilerSectionDefinition {
  id: ProfilerSectionId;
  title: string;
  description: string;
  requiredForMatching: boolean;
  minCompletionForMatching?: number;
  sortOrder: number;
  estimatedDuration: DurationRange;
}

export interface ProfilerOptionDefinition {
  id: string;
  label: string;
  description?: string;
}

export type CompoundFieldType = "number" | "single_select" | "multi_select";

interface BaseCompoundFieldDefinition {
  id: string;
  label: string;
  type: CompoundFieldType;
  required: boolean;
}

export interface NumberCompoundFieldDefinition
  extends BaseCompoundFieldDefinition {
  type: "number";
  min: number;
  max: number;
}

export interface SingleSelectCompoundFieldDefinition
  extends BaseCompoundFieldDefinition {
  type: "single_select";
  options: readonly ProfilerOptionDefinition[];
}

export interface MultiSelectCompoundFieldDefinition
  extends BaseCompoundFieldDefinition {
  type: "multi_select";
  options: readonly ProfilerOptionDefinition[];
  minSelections?: number;
  maxSelections?: number;
}

export type CompoundFieldDefinition =
  | NumberCompoundFieldDefinition
  | SingleSelectCompoundFieldDefinition
  | MultiSelectCompoundFieldDefinition;

export interface DisplayRule {
  kind: "after_section_completed" | "answer_equals" | "answer_includes";
  sourceId: string;
  value?: string;
  optionalWhenMatched?: boolean;
}

export type RecomputeBehavior =
  | "none"
  | "ranking_only"
  | "full_match_recompute";

interface BaseQuestionDefinition {
  id: string;
  sectionId: ProfilerSectionId;
  title: string;
  type: ProfilerQuestionType;
  privacy: ProfilerPrivacyLevel;
  required: boolean;
  prompt: readonly string[];
  scoringDimensions: readonly CompatibilityDimension[];
  displayRules?: readonly DisplayRule[];
  recomputeBehavior?: RecomputeBehavior;
}

interface BaseOptionQuestionDefinition extends BaseQuestionDefinition {
  options: readonly ProfilerOptionDefinition[];
}

export interface SingleSelectQuestionDefinition
  extends BaseOptionQuestionDefinition {
  type: "single_select" | "scenario_select" | "tile_select" | "forced_tradeoff";
}

export interface MultiSelectQuestionDefinition
  extends BaseOptionQuestionDefinition {
  type: "multi_select";
  minSelections: number;
  maxSelections: number;
}

export interface RankedSelectQuestionDefinition
  extends BaseOptionQuestionDefinition {
  type: "ranked_select";
  minSelections: number;
  maxSelections: number;
}

export interface RangeSelectQuestionDefinition extends BaseQuestionDefinition {
  type: "range_select";
  min: number;
  max: number;
  step: number;
}

export interface PairwiseChoiceQuestionDefinition
  extends BaseQuestionDefinition {
  type: "pairwise_choice";
  minPairs: number;
  maxPairs: number;
}

export interface CompoundQuestionDefinition extends BaseQuestionDefinition {
  type: "compound";
  fields: readonly CompoundFieldDefinition[];
}

export type ProfilerQuestionDefinition =
  | SingleSelectQuestionDefinition
  | MultiSelectQuestionDefinition
  | RankedSelectQuestionDefinition
  | RangeSelectQuestionDefinition
  | PairwiseChoiceQuestionDefinition
  | CompoundQuestionDefinition;

export type CompoundFieldValue = number | string | readonly string[];

export interface SingleSelectResponsePayload {
  type: "single_select" | "scenario_select" | "tile_select" | "forced_tradeoff";
  selectedOptionId: string;
}

export interface MultiSelectResponsePayload {
  type: "multi_select";
  selectedOptionIds: readonly string[];
}

export interface RankedSelectResponsePayload {
  type: "ranked_select";
  rankedOptionIds: readonly string[];
}

export interface RangeSelectResponsePayload {
  type: "range_select";
  value: number;
}

export interface PairwiseChoiceEntry {
  leftOptionId: string;
  rightOptionId: string;
  selectedOptionId: string;
}

export interface PairwiseChoiceResponsePayload {
  type: "pairwise_choice";
  choices: readonly PairwiseChoiceEntry[];
}

export interface CompoundResponsePayload {
  type: "compound";
  values: Readonly<Record<string, CompoundFieldValue>>;
}

export type ProfilerResponsePayload =
  | SingleSelectResponsePayload
  | MultiSelectResponsePayload
  | RankedSelectResponsePayload
  | RangeSelectResponsePayload
  | PairwiseChoiceResponsePayload
  | CompoundResponsePayload;

export interface UserProfilerResponse {
  questionId: string;
  schemaVersion: string;
  privacy: ProfilerPrivacyLevel;
  payload: ProfilerResponsePayload;
  answeredAtIso: string;
}

export interface ProfilerSectionProgress {
  sectionId: ProfilerSectionId;
  status: "not_started" | "in_progress" | "completed";
  completionPercent: number;
  startedAtIso?: string;
  completedAtIso?: string;
  updatedAtIso: string;
}

export interface CompatibilityDimensionScore {
  dimension: CompatibilityDimension;
  score: number;
  confidence: "low_confidence" | "medium_confidence" | "high_confidence";
  sourceMix: readonly ("stated" | "behavioral" | "derived")[];
}

export interface CompatibilityExplanation {
  reasonCodes: readonly string[];
  userFacingSummary: readonly string[];
}

export interface UserCompatibilityProfile {
  schemaVersion: string;
  publicProfilePayload: Readonly<Record<string, unknown>>;
  privateCalibrationPayload: Readonly<Record<string, unknown>>;
  dimensionScores: readonly CompatibilityDimensionScore[];
  explanationPreview: readonly string[];
  computedAtIso: string;
}
