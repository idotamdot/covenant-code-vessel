import {
    type CovenantFeatureRisk,
    type CovenantPrinciple,
    type ProtectiveBoundary,
    type SacredBoundaryTouchpoint,
    type SignalClarityImpact,
    type TransparencyLevel,
} from "./covenant-principle";

export interface CovenantDecision {
    readonly id: string;
    readonly projectId: string;
    readonly featureName: string;
    readonly intendedPurpose: CovenantPrinciple;
    readonly affectedGroups: readonly string[];
    readonly riskLevel: CovenantFeatureRisk;
    readonly sacredBoundaryTouchpoints: readonly SacredBoundaryTouchpoint[];
    readonly transparencyLevel: TransparencyLevel;
    readonly protectiveBoundaries: readonly ProtectiveBoundary[];
    readonly preservesDignity: boolean;
    readonly preservesConsent: boolean;
    readonly supportsChangedConsent: boolean;
    readonly preservesContinuity: boolean;
    readonly supportsLivingRevision: boolean;
    readonly recordsProvenance: boolean;
    readonly avoidsExtraction: boolean;
    readonly hasLawfulBoundary: boolean;
    readonly accessibilityConsidered: boolean;
    readonly signalClarityImpact: SignalClarityImpact;
    readonly knownFailureMode: string;
    readonly repairPath: string;
    readonly reviewedAt: string;
    readonly reviewer: string;
}