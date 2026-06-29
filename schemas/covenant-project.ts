import {
    type CovenantPrinciple,
    type ProtectiveBoundary,
    type SacredBoundaryTouchpoint,
} from "./covenant-principle";

export interface CovenantProject {
    readonly id: string;
    readonly name: string;
    readonly purpose: string;
    readonly primaryPrinciples: readonly CovenantPrinciple[];
    readonly sacredBoundaryTouchpoints: readonly SacredBoundaryTouchpoint[];
    readonly protectiveBoundaries: readonly ProtectiveBoundary[];
    readonly requiredTransparency: readonly string[];
    readonly requiredProvenance: readonly string[];
    readonly protectedBoundaries: readonly string[];
    readonly repairCommitments: readonly string[];
    readonly forbiddenUses: readonly string[];
    readonly governedBy: "covenant_code";
    readonly createdAt: string;
    readonly updatedAt: string;
}