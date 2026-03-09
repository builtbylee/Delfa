export const MEASUREMENT_SCHEMA_VERSION = "0.1.0";

export const measurementEventIds = [
  "basics_completed",
  "quality_hold_shown",
  "first_match_surfaced",
  "first_match_opened",
  "round_1_completed",
  "round_2_completed",
  "round_3_completed",
  "mutual_ready_to_meet",
  "date_planning_started",
  "post_date_reflection_submitted",
  "second_date_yes",
  "graceful_disconnect_submitted",
  "safety_report_submitted",
] as const;

export const measurementMetricIds = [
  "quality_hold_rate",
  "first_match_open_rate",
  "first_match_reply_rate",
  "round_1_completion_rate",
  "round_2_completion_rate",
  "round_3_completion_rate",
  "mutual_ready_to_meet_rate",
  "date_planning_rate",
  "date_happened_rate",
  "second_date_yes_rate",
  "graceful_disconnect_rate",
  "verification_completion_rate",
  "report_rate_per_100_matches",
  "hard_side_retention",
] as const;

export type MeasurementEventId = (typeof measurementEventIds)[number];
export type MeasurementMetricId = (typeof measurementMetricIds)[number];

export interface MeasurementEventDefinition {
  id: MeasurementEventId;
  title: string;
  description: string;
}

export interface MeasurementMetricDefinition {
  id: MeasurementMetricId;
  title: string;
  description: string;
  objective: "activation" | "quality" | "trust" | "growth";
}

export interface MeasurementSystemDefinition {
  id: string;
  title: string;
  northStarDirection: readonly string[];
  activationMetricCandidates: readonly string[];
  events: readonly MeasurementEventDefinition[];
  metrics: readonly MeasurementMetricDefinition[];
}

export const defaultMeasurementSystem: MeasurementSystemDefinition = {
  id: "delfa_v1_measurement_system",
  title: "Delfa measurement system",
  northStarDirection: [
    "first-match plausibility",
    "guided interaction completion",
    "mutual ready-to-meet",
    "date conversion",
    "second-date continuation",
  ],
  activationMetricCandidates: [
    "Basics completed",
    "first high-quality match surfaced",
    "round 1 completed",
    "mutual ready-to-meet or date planning started",
  ],
  events: [
    {
      id: "basics_completed",
      title: "Basics completed",
      description: "The user finished the minimum profiler needed to start matching.",
    },
    {
      id: "quality_hold_shown",
      title: "Quality hold shown",
      description: "The user was told Delfa is waiting for a stronger first match.",
    },
    {
      id: "first_match_surfaced",
      title: "First match surfaced",
      description: "A first active match was surfaced after clearing the quality floor.",
    },
    {
      id: "first_match_opened",
      title: "First match opened",
      description: "The user opened the surfaced match.",
    },
    {
      id: "round_1_completed",
      title: "Round 1 completed",
      description: "The first guided interaction round was completed.",
    },
    {
      id: "round_2_completed",
      title: "Round 2 completed",
      description: "The shared micro-experience round was completed.",
    },
    {
      id: "round_3_completed",
      title: "Round 3 completed",
      description: "The deeper-disclosure round was completed.",
    },
    {
      id: "mutual_ready_to_meet",
      title: "Mutual ready-to-meet",
      description: "Both users privately signaled readiness to meet.",
    },
    {
      id: "date_planning_started",
      title: "Date planning started",
      description: "The match entered the before-we-meet flow.",
    },
    {
      id: "post_date_reflection_submitted",
      title: "Post-date reflection submitted",
      description: "A user submitted private post-date learning data.",
    },
    {
      id: "second_date_yes",
      title: "Second date yes",
      description: "A user indicated they wanted to see the match again.",
    },
    {
      id: "graceful_disconnect_submitted",
      title: "Graceful disconnect submitted",
      description: "A user ended the match through structured closure.",
    },
    {
      id: "safety_report_submitted",
      title: "Safety report submitted",
      description: "A user submitted a trust or safety report.",
    },
  ],
  metrics: [
    {
      id: "quality_hold_rate",
      title: "Quality-hold rate",
      description: "How often users wait for a stronger first match.",
      objective: "quality",
    },
    {
      id: "first_match_open_rate",
      title: "First-match open rate",
      description: "How often surfaced first matches are opened.",
      objective: "quality",
    },
    {
      id: "first_match_reply_rate",
      title: "First-match reply rate",
      description: "How often surfaced first matches lead to an actual reply.",
      objective: "quality",
    },
    {
      id: "round_1_completion_rate",
      title: "Round 1 completion rate",
      description: "How often first matches complete the initial guided interaction.",
      objective: "activation",
    },
    {
      id: "round_2_completion_rate",
      title: "Round 2 completion rate",
      description: "How often matches complete the shared micro-experience.",
      objective: "quality",
    },
    {
      id: "round_3_completion_rate",
      title: "Round 3 completion rate",
      description: "How often matches complete the deeper-disclosure round.",
      objective: "quality",
    },
    {
      id: "mutual_ready_to_meet_rate",
      title: "Mutual ready-to-meet rate",
      description: "How often promising matches reach mutual readiness.",
      objective: "quality",
    },
    {
      id: "date_planning_rate",
      title: "Date-planning rate",
      description: "How often matches move into planning a real date.",
      objective: "quality",
    },
    {
      id: "date_happened_rate",
      title: "Date-happened rate",
      description: "How often planned matches actually meet in person.",
      objective: "quality",
    },
    {
      id: "second_date_yes_rate",
      title: "Second-date yes rate",
      description: "How often users want to see the person again after meeting.",
      objective: "quality",
    },
    {
      id: "graceful_disconnect_rate",
      title: "Graceful-disconnect rate",
      description: "How often matches end through respectful structured closure.",
      objective: "quality",
    },
    {
      id: "verification_completion_rate",
      title: "Verification completion rate",
      description: "How often users complete trust-building verification.",
      objective: "trust",
    },
    {
      id: "report_rate_per_100_matches",
      title: "Report rate per 100 matches",
      description: "Trust and safety incident volume normalized by match count.",
      objective: "trust",
    },
    {
      id: "hard_side_retention",
      title: "Hard-side retention",
      description: "Retention of the side of the market that determines trust and density.",
      objective: "growth",
    },
  ],
};
