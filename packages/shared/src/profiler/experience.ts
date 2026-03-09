import type { CompatibilityDimension, ProfilerSectionId } from "./types";

export const PROFILER_EXPERIENCE_VERSION = "0.1.0";

export type ProfilerJourneyTone =
  | "grounding"
  | "reflective"
  | "practical"
  | "playful"
  | "intimate";

export interface ProfilerSectionJourneyFrame {
  sectionId: ProfilerSectionId;
  introEyebrow: string;
  introHeadline: string;
  introBody: string;
  completionHeadline: string;
  completionBody: string;
  tone: ProfilerJourneyTone;
}

export interface MirrorMomentDefinition {
  id: string;
  sectionId: ProfilerSectionId;
  title: string;
  body: string;
  strengthenedDimensions: readonly CompatibilityDimension[];
  triggerQuestionIds: readonly string[];
}

export interface MirrorMomentPayload {
  id: string;
  title: string;
  body: string;
  strengthenedDimensions: readonly CompatibilityDimension[];
  confidence: "emerging" | "solid";
}

export interface CompatibilityPreviewDimension {
  dimension: CompatibilityDimension;
  label: string;
  status: "strong_signal" | "needs_more_depth";
  summary: string;
  recommendedSectionId?: ProfilerSectionId;
}

export interface CompatibilityPreview {
  surface: "after_basics" | "section_completion" | "summary";
  summary: string;
  strongSignals: readonly CompatibilityPreviewDimension[];
  growthSignals: readonly CompatibilityPreviewDimension[];
}

export type AttractionCalibrationSurface = "basics" | "extended";

export type AttractionCalibrationFacet =
  | "style"
  | "grooming"
  | "energy"
  | "body_presentation"
  | "age_presentation"
  | "setting"
  | "warmth"
  | "intensity";

export interface AttractionCalibrationCardDefinition {
  id: string;
  surface: AttractionCalibrationSurface;
  assetKey: string;
  promptLine: string;
  facets: Readonly<Record<AttractionCalibrationFacet, string>>;
}

export interface AttractionCalibrationDeckDefinition {
  id: AttractionCalibrationSurface;
  questionId: string;
  minPairs: number;
  maxPairs: number;
  selectionStrategy: "adaptive_pairwise";
  designRules: readonly string[];
  cards: readonly AttractionCalibrationCardDefinition[];
}

export interface AttractionCalibrationInsightTemplate {
  id: string;
  title: string;
  body: string;
  facetFocus: readonly AttractionCalibrationFacet[];
}

export const profilerSectionJourneyFrames: readonly ProfilerSectionJourneyFrame[] =
  [
    {
      sectionId: "basics",
      introEyebrow: "Start here",
      introHeadline: "Let’s begin with what you already know about yourself.",
      introBody:
        "This first pass is short. Delfa uses it to find your first high-quality matches and decide what it still needs to learn.",
      completionHeadline: "Delfa has enough signal to begin matching.",
      completionBody:
        "You can start now. Completing more sections sharpens the quality and confidence of future matches.",
      tone: "grounding",
    },
    {
      sectionId: "life_direction",
      introEyebrow: "Life Direction",
      introHeadline: "Fast-forward a few years. What kind of life are you actually building?",
      introBody:
        "This section is about the shape of the life you want, not what sounds admirable on paper.",
      completionHeadline: "Your longer-term fit is clearer now.",
      completionBody:
        "Delfa can now match you with more confidence on future plans, values pressure points, and commitment style.",
      tone: "practical",
    },
    {
      sectionId: "communication_repair",
      introEyebrow: "Communication and Repair",
      introHeadline:
        "Imagine things are going well with someone, and then real life happens.",
      introBody:
        "These questions focus on what you actually do when there is friction, stress, or a bid for connection.",
      completionHeadline: "Your repair style is taking shape.",
      completionBody:
        "Delfa now understands more about how you respond to stress, misattunement, and emotional timing.",
      tone: "reflective",
    },
    {
      sectionId: "emotional_security",
      introEyebrow: "Emotional Style",
      introHeadline:
        "When a connection starts to matter, something shifts inside. This section looks at that shift.",
      introBody:
        "Delfa is not trying to label you. It is trying to understand how you react to closeness, ambiguity, and disappointment.",
      completionHeadline: "Your attachment and steadiness signals are stronger now.",
      completionBody:
        "Delfa can now calibrate trust pace, reassurance needs, and disappointment reactivity more accurately.",
      tone: "reflective",
    },
    {
      sectionId: "lifestyle_intimacy_chemistry",
      introEyebrow: "Chemistry and Lifestyle",
      introHeadline:
        "Attraction is not one thing. It is the mix of vibe, closeness, rhythm, and physical pull.",
      introBody:
        "This section helps Delfa understand what kind of chemistry actually grows for you and how it fits into daily life.",
      completionHeadline: "Your chemistry model has more texture now.",
      completionBody:
        "Delfa can now rank for attraction and intimacy fit with more precision, not just broad compatibility.",
      tone: "intimate",
    },
  ] as const;

export const mirrorMomentCatalog: readonly MirrorMomentDefinition[] = [
  {
    id: "basics_steady_over_intense",
    sectionId: "basics",
    title: "You seem to prefer steadiness over intensity.",
    body: "Your answers point toward consistency, clarity, and follow-through as stronger signals than early spark alone.",
    strengthenedDimensions: ["intent", "pace", "attachment"],
    triggerQuestionIds: [
      "basics_pace_availability",
      "basics_partner_priorities",
      "basics_uncertainty_response",
    ],
  },
  {
    id: "basics_empathy_under_vulnerability",
    sectionId: "basics",
    title: "You appear to orient toward emotional safety quickly.",
    body: "When someone is excited or vulnerable, your answers suggest you naturally move toward understanding rather than distance.",
    strengthenedDimensions: ["responsiveness", "attachment"],
    triggerQuestionIds: [
      "basics_vulnerability_response",
      "basics_uncertainty_response",
    ],
  },
  {
    id: "life_direction_clear_non_negotiables",
    sectionId: "life_direction",
    title: "You have a clear picture of what alignment actually means for you.",
    body: "Your answers suggest that future fit is not abstract for you. Certain values and lifestyle foundations matter early.",
    strengthenedDimensions: ["life_direction", "values", "intent"],
    triggerQuestionIds: [
      "life_direction_future_mismatch",
      "life_direction_religion_salience",
      "life_direction_investment_style",
    ],
  },
  {
    id: "communication_space_then_repair",
    sectionId: "communication_repair",
    title: "You seem to value timing almost as much as honesty.",
    body: "Your responses suggest that how repair happens matters just as much as whether it happens at all.",
    strengthenedDimensions: ["conflict_repair", "stress_finance"],
    triggerQuestionIds: [
      "comm_repair_after_tension",
      "comm_repair_worse_mismatch",
      "comm_repair_stress_communication",
    ],
  },
  {
    id: "emotional_security_watchful_but_engaged",
    sectionId: "emotional_security",
    title: "You do not shut down from uncertainty, but you do track it closely.",
    body: "Your answers suggest a style that stays engaged while still watching for consistency, reassurance, and emotional steadiness.",
    strengthenedDimensions: ["attachment", "stress_finance"],
    triggerQuestionIds: [
      "emo_security_when_it_gets_real",
      "emo_security_ambiguity",
      "emo_security_disappointment_reactivity",
    ],
  },
  {
    id: "chemistry_grows_through_ease",
    sectionId: "lifestyle_intimacy_chemistry",
    title: "Chemistry seems to grow for you through feel, not just visuals.",
    body: "Your answers suggest that attraction gets stronger when warmth, rhythm, and physical style fit together.",
    strengthenedDimensions: ["chemistry", "intimacy", "lifestyle"],
    triggerQuestionIds: [
      "life_intimacy_chemistry_growth",
      "life_intimacy_touch_style",
      "life_intimacy_novelty_vs_routine",
    ],
  },
] as const;

export const basicsCompatibilityPreview: CompatibilityPreview = {
  surface: "after_basics",
  summary:
    "Delfa now has enough information to begin matching, but some parts of your compatibility model are already clearer than others.",
  strongSignals: [
    {
      dimension: "intent",
      label: "Relationship direction",
      status: "strong_signal",
      summary:
        "Delfa has a usable read on what you want dating to become and how seriously you are approaching it.",
    },
    {
      dimension: "pace",
      label: "Dating rhythm",
      status: "strong_signal",
      summary:
        "Your Basics answers already give Delfa a meaningful signal on early pace and communication rhythm.",
    },
    {
      dimension: "chemistry",
      label: "Initial attraction",
      status: "strong_signal",
      summary:
        "Your first pairwise choices give Delfa an early sense of presentation and vibe preferences.",
    },
  ],
  growthSignals: [
    {
      dimension: "conflict_repair",
      label: "Conflict and repair",
      status: "needs_more_depth",
      summary:
        "Delfa still needs more direct signal on how you repair tension and respond under stress.",
      recommendedSectionId: "communication_repair",
    },
    {
      dimension: "attachment",
      label: "Emotional security",
      status: "needs_more_depth",
      summary:
        "Delfa has an early read on uncertainty, but not enough yet on trust pace, reassurance, and disappointment reactivity.",
      recommendedSectionId: "emotional_security",
    },
    {
      dimension: "intimacy",
      label: "Intimacy fit",
      status: "needs_more_depth",
      summary:
        "Delfa still needs more signal on touch style, exclusivity timing, and the kind of chemistry that grows for you.",
      recommendedSectionId: "lifestyle_intimacy_chemistry",
    },
  ],
} as const;

export const attractionCalibrationDecks: readonly AttractionCalibrationDeckDefinition[] = [
  {
    id: "basics",
    questionId: "basics_attraction_calibration",
    minPairs: 6,
    maxPairs: 8,
    selectionStrategy: "adaptive_pairwise",
    designRules: [
      "Each pair should vary on no more than two major presentation dimensions at once.",
      "Cards should use synthetic or licensed model imagery rather than real user media.",
      "The system should optimize for quick taps and private preference learning, not reflective self-description.",
    ],
    cards: [
      {
        id: "basics_card_01",
        surface: "basics",
        assetKey: "studio-warm-minimal-01",
        promptLine: "Relaxed, understated, and warm",
        facets: {
          style: "minimal",
          grooming: "polished",
          energy: "steady",
          body_presentation: "lean",
          age_presentation: "late_twenty_something",
          setting: "coffee_shop",
          warmth: "high",
          intensity: "low",
        },
      },
      {
        id: "basics_card_02",
        surface: "basics",
        assetKey: "studio-bold-night-02",
        promptLine: "Confident, dressy, and high-energy",
        facets: {
          style: "dressy",
          grooming: "sharp",
          energy: "high",
          body_presentation: "athletic",
          age_presentation: "early_thirty_something",
          setting: "city_evening",
          warmth: "medium",
          intensity: "high",
        },
      },
      {
        id: "basics_card_03",
        surface: "basics",
        assetKey: "studio-creative-bookish-03",
        promptLine: "Creative, thoughtful, and slightly quirky",
        facets: {
          style: "creative",
          grooming: "natural",
          energy: "medium",
          body_presentation: "average",
          age_presentation: "late_twenty_something",
          setting: "bookshop",
          warmth: "medium",
          intensity: "medium",
        },
      },
      {
        id: "basics_card_04",
        surface: "basics",
        assetKey: "studio-outdoors-grounded-04",
        promptLine: "Grounded, outdoorsy, and low-drama",
        facets: {
          style: "casual",
          grooming: "natural",
          energy: "steady",
          body_presentation: "broad",
          age_presentation: "mid_thirty_something",
          setting: "outdoors",
          warmth: "medium",
          intensity: "low",
        },
      },
      {
        id: "basics_card_05",
        surface: "basics",
        assetKey: "studio-soft-homebody-05",
        promptLine: "Soft, low-key, and comforting",
        facets: {
          style: "soft_casual",
          grooming: "relaxed",
          energy: "low",
          body_presentation: "curvy",
          age_presentation: "early_thirty_something",
          setting: "home_interior",
          warmth: "high",
          intensity: "low",
        },
      },
      {
        id: "basics_card_06",
        surface: "basics",
        assetKey: "studio-playful-social-06",
        promptLine: "Playful, social, and expressive",
        facets: {
          style: "social",
          grooming: "polished",
          energy: "high",
          body_presentation: "petite",
          age_presentation: "mid_twenty_something",
          setting: "dinner_party",
          warmth: "high",
          intensity: "medium",
        },
      },
      {
        id: "basics_card_07",
        surface: "basics",
        assetKey: "studio-reserved-clean-07",
        promptLine: "Reserved, clean-cut, and composed",
        facets: {
          style: "classic",
          grooming: "clean_cut",
          energy: "low",
          body_presentation: "lean",
          age_presentation: "late_thirty_something",
          setting: "daylight_street",
          warmth: "low",
          intensity: "medium",
        },
      },
      {
        id: "basics_card_08",
        surface: "basics",
        assetKey: "studio-artsy-intense-08",
        promptLine: "Artsy, intense, and magnetic",
        facets: {
          style: "artsy",
          grooming: "styled",
          energy: "medium",
          body_presentation: "athletic",
          age_presentation: "early_thirty_something",
          setting: "gallery",
          warmth: "low",
          intensity: "high",
        },
      },
    ],
  },
  {
    id: "extended",
    questionId: "life_intimacy_extended_attraction_calibration",
    minPairs: 8,
    maxPairs: 12,
    selectionStrategy: "adaptive_pairwise",
    designRules: [
      "Extended calibration should mix visual presentation with connection-style cues.",
      "Cards should vary warmth, playfulness, polish, intensity, and context to avoid reducing attraction to face alone.",
      "Deeper calibration should be informed by prior pairwise choices and actual match behavior where available.",
    ],
    cards: [
      {
        id: "extended_card_01",
        surface: "extended",
        assetKey: "extended-warm-playful-01",
        promptLine: "Warm, playful, and easy to talk to",
        facets: {
          style: "playful",
          grooming: "natural",
          energy: "medium",
          body_presentation: "average",
          age_presentation: "late_twenty_something",
          setting: "park",
          warmth: "high",
          intensity: "low",
        },
      },
      {
        id: "extended_card_02",
        surface: "extended",
        assetKey: "extended-polished-driven-02",
        promptLine: "Polished, driven, and composed",
        facets: {
          style: "polished",
          grooming: "sharp",
          energy: "medium",
          body_presentation: "lean",
          age_presentation: "mid_thirty_something",
          setting: "office_to_evening",
          warmth: "medium",
          intensity: "medium",
        },
      },
      {
        id: "extended_card_03",
        surface: "extended",
        assetKey: "extended-soft-intimate-03",
        promptLine: "Soft, intimate, and physically affectionate",
        facets: {
          style: "soft_casual",
          grooming: "relaxed",
          energy: "low",
          body_presentation: "curvy",
          age_presentation: "early_thirty_something",
          setting: "home_interior",
          warmth: "high",
          intensity: "medium",
        },
      },
      {
        id: "extended_card_04",
        surface: "extended",
        assetKey: "extended-high-energy-social-04",
        promptLine: "Outgoing, social, and chemistry-first",
        facets: {
          style: "social",
          grooming: "styled",
          energy: "high",
          body_presentation: "athletic",
          age_presentation: "late_twenty_something",
          setting: "rooftop_bar",
          warmth: "medium",
          intensity: "high",
        },
      },
    ],
  },
] as const;

export const attractionCalibrationInsightTemplates: readonly AttractionCalibrationInsightTemplate[] =
  [
    {
      id: "warmth_over_polish",
      title: "You tend to respond more to warmth than polish.",
      body: "Your choices suggest you are drawn to people who feel approachable, emotionally open, and easy to be around.",
      facetFocus: ["warmth", "style"],
    },
    {
      id: "intensity_over_ease",
      title: "You seem to notice intensity quickly.",
      body: "Your choices suggest strong presence and charge catch your attention early, even before steadiness does.",
      facetFocus: ["intensity", "energy"],
    },
    {
      id: "style_and_setting_matter",
      title: "Presentation seems to matter almost as much as features for you.",
      body: "Your choices suggest attraction is influenced by the way someone carries themselves, dresses, and situates their life visually.",
      facetFocus: ["style", "setting", "grooming"],
    },
  ] as const;
