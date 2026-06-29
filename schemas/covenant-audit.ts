import {
    type CovenantFeatureRisk,
    type CovenantPrinciple,
    type ProtectiveBoundary,
    type SacredBoundaryTouchpoint,
    type SignalClarityImpact,
    type TransparencyLevel,
} from "./covenant-principle";

export type CovenantAuditStatus =
    | "draft"
    | "needs_revision"
    | "approved"
    | "approved_with_conditions"
    | "blocked"
    | "retired";

export interface CovenantAuditFinding {
    readonly id: string;
    readonly principle: CovenantPrinciple;
    readonly summary: string;
    readonly severity: CovenantFeatureRisk;
    readonly requiredAction: string;
    readonly resolved: boolean;
}

export interface CovenantAudit {
    readonly id: string;
    readonly projectId: string;
    readonly featureId: string;
    readonly featureName: string;
    readonly status: CovenantAuditStatus;
    readonly reviewedPrinciples: readonly CovenantPrinciple[];
    readonly riskLevel: CovenantFeatureRisk;
    readonly sacredBoundaryTouchpoints: readonly SacredBoundaryTouchpoint[];
    readonly transparencyLevel: TransparencyLevel;
    readonly protectiveBoundaries: readonly ProtectiveBoundary[];
    readonly signalClarityImpact: SignalClarityImpact;
    readonly findings: readonly CovenantAuditFinding[];
    readonly approvalConditions: readonly string[];
    readonly repairPath: string;
    readonly reviewer: string;
    readonly reviewedAt: string;
}