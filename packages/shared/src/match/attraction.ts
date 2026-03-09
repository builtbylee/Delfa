export const ATTRACTION_ENGINE_SCHEMA_VERSION = "0.1.0";

export const attractionAxisIds = [
  "presentation",
  "style",
  "energy",
  "setting",
  "grooming",
] as const;

export const attractionSignalTypeIds = [
  "basics_pairwise_choice",
  "extended_pairwise_choice",
  "match_opened",
  "reply_started",
  "round_1_completed",
  "mutual_ready_to_meet",
  "post_date_attraction_stronger",
  "post_date_attraction_same",
  "post_date_attraction_weaker",
  "graceful_disconnect_no_chemistry",
] as const;

export type AttractionAxisId = (typeof attractionAxisIds)[number];
export type AttractionSignalTypeId = (typeof attractionSignalTypeIds)[number];

export interface AttractionDeckDefinition {
  id: string;
  title: string;
  phase: "basics" | "extended";
  minPairs: number;
  maxPairs: number;
  axesVariedPerComparisonMax: number;
  targetAxes: readonly AttractionAxisId[];
  assetRules: readonly string[];
}

export interface AttractionSignalWeightDefinition {
  signalTypeId: AttractionSignalTypeId;
  direction: "positive" | "negative";
  weight: number;
  rationale: string;
}

export interface AttractionCandidateFitRule {
  id: string;
  title: string;
  description: string;
}

export interface AttractionEnginePolicyDefinition {
  id: string;
  title: string;
  summary: string;
  coldStartRules: readonly string[];
  decks: readonly AttractionDeckDefinition[];
  liveSignals: readonly AttractionSignalWeightDefinition[];
  candidateFitRules: readonly AttractionCandidateFitRule[];
  privateOnly: boolean;
}

export const defaultAttractionEnginePolicy: AttractionEnginePolicyDefinition = {
  id: "delfa_v1_attraction_engine",
  title: "Delfa attraction engine",
  summary:
    "A private attraction model built from controlled pairwise choices and real match outcomes so the first surfaced match feels plausibly in range.",
  coldStartRules: [
    "Use Basics pairwise choices to create the initial attraction prior.",
    "Do not surface a first match if attraction likelihood is below medium confidence.",
    "Treat attraction as a private calibration layer, not a public label.",
  ],
  decks: [
    {
      id: "basics_attraction_deck",
      title: "Basics attraction deck",
      phase: "basics",
      minPairs: 6,
      maxPairs: 8,
      axesVariedPerComparisonMax: 2,
      targetAxes: ["presentation", "style", "energy", "setting", "grooming"],
      assetRules: [
        "Use synthetic or licensed assets only.",
        "Each pair should vary on one or two major axes.",
        "Avoid making protected traits the visible comparison logic.",
      ],
    },
    {
      id: "extended_attraction_deck",
      title: "Extended attraction deck",
      phase: "extended",
      minPairs: 8,
      maxPairs: 12,
      axesVariedPerComparisonMax: 2,
      targetAxes: ["presentation", "style", "energy", "setting", "grooming"],
      assetRules: [
        "Use later rounds to sharpen uncertainty, not restart from zero.",
        "Prioritize dimensions that still have weak confidence.",
      ],
    },
  ],
  liveSignals: [
    {
      signalTypeId: "match_opened",
      direction: "positive",
      weight: 1,
      rationale: "Opening a surfaced match quickly is a weak positive attraction signal.",
    },
    {
      signalTypeId: "reply_started",
      direction: "positive",
      weight: 2,
      rationale: "Replying after open is stronger than open alone.",
    },
    {
      signalTypeId: "round_1_completed",
      direction: "positive",
      weight: 2,
      rationale: "Completing the first guided interaction suggests the match is plausibly in range.",
    },
    {
      signalTypeId: "mutual_ready_to_meet",
      direction: "positive",
      weight: 3,
      rationale: "Mutual readiness is a strong confirmation of early chemistry and comfort.",
    },
    {
      signalTypeId: "post_date_attraction_stronger",
      direction: "positive",
      weight: 4,
      rationale: "In-person attraction stronger than expected is one of the strongest learning signals.",
    },
    {
      signalTypeId: "post_date_attraction_same",
      direction: "positive",
      weight: 2,
      rationale: "Attraction matching the expectation confirms the engine is in range.",
    },
    {
      signalTypeId: "post_date_attraction_weaker",
      direction: "negative",
      weight: 4,
      rationale: "Weaker-than-expected chemistry should tighten attraction predictions.",
    },
    {
      signalTypeId: "graceful_disconnect_no_chemistry",
      direction: "negative",
      weight: 3,
      rationale: "No-chemistry outcomes are useful negative calibration data.",
    },
  ],
  candidateFitRules: [
    {
      id: "in_range",
      title: "Attraction in range",
      description:
        "The candidate looks plausibly inside the user's current attraction range and should be eligible for surfacing.",
    },
    {
      id: "uncertain_but_plausible",
      title: "Uncertain but plausible",
      description:
        "The candidate may still be surfaced if the broader quality floor is strong and attraction is not clearly weak.",
    },
    {
      id: "unlikely",
      title: "Attraction unlikely",
      description:
        "The candidate should not be used for a first surfaced match because trust would be damaged if the fit feels obviously wrong.",
    },
  ],
  privateOnly: true,
};
