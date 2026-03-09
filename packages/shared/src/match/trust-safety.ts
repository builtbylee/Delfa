export const TRUST_SAFETY_SCHEMA_VERSION = "0.1.0";

export const verificationStageIds = [
  "account_integrity",
  "basic_authenticity",
  "strong_verification_optional",
] as const;

export const trustTierIds = [
  "baseline",
  "verified",
  "verified_plus",
  "restricted",
] as const;

export const reportCategoryIds = [
  "harassment_abuse",
  "scam_fake_profile",
  "hate_discrimination",
  "sexual_pressure",
  "coercive_off_platform_pressure",
  "underage_concern",
  "no_show_bad_faith",
  "date_safety_concern",
] as const;

export const enforcementActionIds = [
  "warning",
  "feature_limitation",
  "match_freeze",
  "suspension",
  "permanent_ban",
] as const;

export type VerificationStageId = (typeof verificationStageIds)[number];
export type TrustTierId = (typeof trustTierIds)[number];
export type ReportCategoryId = (typeof reportCategoryIds)[number];
export type EnforcementActionId = (typeof enforcementActionIds)[number];

export interface VerificationStageDefinition {
  id: VerificationStageId;
  title: string;
  required: boolean;
  description: string;
}

export interface TrustTierDefinition {
  id: TrustTierId;
  title: string;
  description: string;
}

export interface ReportCategoryDefinition {
  id: ReportCategoryId;
  title: string;
  description: string;
}

export interface EnforcementActionDefinition {
  id: EnforcementActionId;
  title: string;
  description: string;
}

export interface TrustSafetyPolicyDefinition {
  id: string;
  title: string;
  verificationStages: readonly VerificationStageDefinition[];
  trustTiers: readonly TrustTierDefinition[];
  reportCategories: readonly ReportCategoryDefinition[];
  enforcementActions: readonly EnforcementActionDefinition[];
  dateSafetyTools: readonly string[];
}

export const defaultTrustSafetyPolicy: TrustSafetyPolicyDefinition = {
  id: "delfa_v1_trust_safety",
  title: "Delfa trust and safety policy",
  verificationStages: [
    {
      id: "account_integrity",
      title: "Account integrity",
      required: true,
      description:
        "Unique phone or email, device abuse checks, and duplicate-account detection.",
    },
    {
      id: "basic_authenticity",
      title: "Basic authenticity",
      required: true,
      description:
        "Selfie or liveness plus photo consistency checks before stronger trust is granted.",
    },
    {
      id: "strong_verification_optional",
      title: "Stronger verification",
      required: false,
      description:
        "Optional government ID or equivalent for stronger trust signals where available.",
    },
  ],
  trustTiers: [
    {
      id: "baseline",
      title: "Baseline",
      description: "Account exists but trust is still limited.",
    },
    {
      id: "verified",
      title: "Verified",
      description: "Basic authenticity is complete.",
    },
    {
      id: "verified_plus",
      title: "Verified plus",
      description: "Stronger verification is complete.",
    },
    {
      id: "restricted",
      title: "Restricted",
      description: "Account is under trust or safety limitation.",
    },
  ],
  reportCategories: [
    {
      id: "harassment_abuse",
      title: "Harassment or abuse",
      description: "Hostile, threatening, or abusive conduct.",
    },
    {
      id: "scam_fake_profile",
      title: "Scam or fake profile",
      description: "Fraud, catfishing, or deceptive account behavior.",
    },
    {
      id: "hate_discrimination",
      title: "Hate or discrimination",
      description: "Bias, slurs, or demeaning conduct toward protected groups.",
    },
    {
      id: "sexual_pressure",
      title: "Sexual pressure",
      description: "Unwanted sexual pressure or coercive behavior.",
    },
    {
      id: "coercive_off_platform_pressure",
      title: "Off-platform pressure",
      description: "Aggressive pressure to move off-platform in a risky way.",
    },
    {
      id: "underage_concern",
      title: "Underage concern",
      description: "Possible underage use or misrepresented age.",
    },
    {
      id: "no_show_bad_faith",
      title: "Bad-faith date behavior",
      description: "Repeat no-shows or clearly bad-faith conduct.",
    },
    {
      id: "date_safety_concern",
      title: "Date safety concern",
      description: "A concern tied to an in-person meet-up or planning stage.",
    },
  ],
  enforcementActions: [
    {
      id: "warning",
      title: "Warning",
      description: "Warn the user and record the incident.",
    },
    {
      id: "feature_limitation",
      title: "Feature limitation",
      description: "Limit matching or communication abilities while reviewing.",
    },
    {
      id: "match_freeze",
      title: "Match freeze",
      description: "Freeze active matching while trust review occurs.",
    },
    {
      id: "suspension",
      title: "Suspension",
      description: "Temporarily suspend the account.",
    },
    {
      id: "permanent_ban",
      title: "Permanent ban",
      description: "Permanently remove the account and prevent easy re-entry.",
    },
  ],
  dateSafetyTools: [
    "trusted contact sharing",
    "check-in reminder",
    "clear date details",
    "safety guidance hub",
  ],
};
