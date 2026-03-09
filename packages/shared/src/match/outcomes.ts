import type { CompatibilityDimension } from "../profiler/types.js";

export const POST_DATE_SCHEMA_VERSION = "0.1.0";

export const postDateMeetingStatuses = [
  "met",
  "not_yet",
  "did_not_meet",
  "no_show",
] as const;

export const postDateSeeAgainIntents = ["yes", "maybe", "no"] as const;

export const postDateChemistryComparisons = [
  "weaker_than_expected",
  "about_as_expected",
  "stronger_than_expected",
] as const;

export const postDateConversationRatings = [
  "easy_and_natural",
  "mixed",
  "effortful",
] as const;

export const postDateIssueTags = [
  "attraction",
  "conversation",
  "values",
  "lifestyle",
  "timing",
  "logistics",
  "safety",
] as const;

export type PostDateMeetingStatus = (typeof postDateMeetingStatuses)[number];
export type PostDateSeeAgainIntent = (typeof postDateSeeAgainIntents)[number];
export type PostDateChemistryComparison =
  (typeof postDateChemistryComparisons)[number];
export type PostDateConversationRating =
  (typeof postDateConversationRatings)[number];
export type PostDateIssueTag = (typeof postDateIssueTags)[number];

export interface PostDateReflectionPayload {
  meetingStatus: PostDateMeetingStatus;
  seeAgainIntent: PostDateSeeAgainIntent;
  chemistryComparison?: PostDateChemistryComparison;
  conversationRating?: PostDateConversationRating;
  mainIssueTag?: PostDateIssueTag;
}

export interface PostDateLearningRule {
  id: string;
  trigger: string;
  affectedDimensions: readonly CompatibilityDimension[];
  effect: string;
}

export interface PostDateLearningPolicyDefinition {
  id: string;
  title: string;
  promptWindowHours: {
    min: number;
    max: number;
  };
  privateOnly: boolean;
  requiredQuestions: readonly string[];
  learningRules: readonly PostDateLearningRule[];
}

export const defaultPostDateLearningPolicy: PostDateLearningPolicyDefinition = {
  id: "delfa_v1_post_date_learning",
  title: "Post-date learning policy",
  promptWindowHours: {
    min: 18,
    max: 36,
  },
  privateOnly: true,
  requiredQuestions: [
    "Did you meet?",
    "Would you want to see them again?",
    "How did in-person chemistry feel compared with the app impression?",
    "How easy did conversation feel in person?",
    "If not continuing, what was the main reason?",
  ],
  learningRules: [
    {
      id: "see_again_yes",
      trigger: "seeAgainIntent=yes",
      affectedDimensions: ["chemistry", "life_direction", "lifestyle"],
      effect:
        "Strengthen confidence in the pairing logic that produced the match.",
    },
    {
      id: "attraction_weaker",
      trigger: "chemistryComparison=weaker_than_expected",
      affectedDimensions: ["chemistry", "intimacy"],
      effect:
        "Reduce attraction confidence for similar candidate profiles and interaction patterns.",
    },
    {
      id: "conversation_effortful",
      trigger: "conversationRating=effortful",
      affectedDimensions: ["responsiveness", "pace", "conflict_repair"],
      effect:
        "Lower confidence in communication and conversational ease for similar pairings.",
    },
    {
      id: "main_issue_values",
      trigger: "mainIssueTag=values",
      affectedDimensions: ["values", "life_direction"],
      effect:
        "Refine values and life-direction weighting rather than blaming attraction alone.",
    },
  ],
};
