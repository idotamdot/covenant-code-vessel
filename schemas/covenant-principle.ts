export type CovenantPrinciple =
    | "truth"
    | "transparency"
    | "dignity"
    | "consent"
    | "continuity"
    | "living_revision"
    | "stewardship"
    | "provenance"
    | "repair"
    | "non_extraction"
    | "lawful_boundary"
    | "accessibility"
    | "human_flourishing"
    | "signal_clarity"
    | "protective_privacy";

export type CovenantFeatureRisk =
    | "low"
    | "moderate"
    | "high"
    | "sacred_boundary";

export type SignalClarityImpact =
    | "clarifies"
    | "neutral"
    | "risks_noise";

export type TransparencyLevel =
    | "public"
    | "user_visible"
    | "auditable"
    | "restricted"
    | "protected";

export type ProtectiveBoundary =
    | "privacy"
    | "confidentiality"
    | "safety"
    | "consent_limit"
    | "identity_protection"
    | "legal_requirement"
    | "living_revision"
    | "private_communications";

export const SACRED_BOUNDARY_TOUCHPOINTS = [
    "identity",
    "memory",
    "grief",
    "children",
    "money",
    "legal_status",
    "health_or_safety",
    "spiritual_language",
    "ai_personhood_claims",
    "evidence_or_forensic_claims",
    "user_consent",
    "authorship",
    "private_communications",
    "reputation",
    "irreversible_public_record",
    "emotional_dependency",
] as const;

export type SacredBoundaryTouchpoint =
    (typeof SACRED_BOUNDARY_TOUCHPOINTS)[number];

export const COVENANT_HIERARCHY: readonly CovenantPrinciple[] = [
    "truth",
    "transparency",
    "consent",
    "dignity",
    "lawful_boundary",
    "provenance",
    "repair",
    "living_revision",
    "continuity",
    "stewardship",
    "accessibility",
    "human_flourishing",
    "signal_clarity",
    "protective_privacy",
] as const;