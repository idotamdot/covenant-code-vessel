import {
    type CovenantFeatureRisk,
    type CovenantPrinciple,
    type ProtectiveBoundary,
    type SacredBoundaryTouchpoint,
    type SignalClarityImpact,
    type TransparencyLevel,
} from "./covenant-principle";

export interface CovenantFeature {
    readonly id: string;
    readonly projectId: string;
    readonly name: string;
    readonly description: string;
    readonly purpose: string;
    readonly governingPrinciples: readonly CovenantPrinciple[];
    readonly riskLevel: CovenantFeatureRisk;
    readonly sacredBoundaryTouchpoints: readonly SacredBoundaryTouchpoint[];
    readonly affectedGroups: readonly string[];
    readonly transparencyLevel: TransparencyLevel;
    readonly protectiveBoundaries: readonly ProtectiveBoundary[];
    readonly consentRequired: boolean;
    readonly changedConsentSupported: boolean;
    readonly provenanceRequired: boolean;
    readonly repairPathRequired: boolean;
    readonly lawfulBoundary: string;
    readonly knownFailureModes: readonly string[];
    readonly livingRevisionImpact: string;
    readonly signalClarityImpact: SignalClarityImpact;
    readonly accessibilityRequirements: readonly string[];
    readonly forbiddenUses: readonly string[];
    readonly createdAt: string;
    readonly updatedAt: string;
}