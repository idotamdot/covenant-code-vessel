# TypeScript Standard

## Purpose

The TypeScript Standard defines how Covenant Code projects should write TypeScript so the code remains explicit, safe, readable, maintainable, and aligned with the project covenant.

TypeScript is not only a syntax choice.

It is a boundary system.

## Core Rule

Use explicit types.

Do not use `any`.

A type should clarify purpose, constrain invalid states, and make failure easier to detect before runtime.

## Required Practices

### Explicit Types

Prefer explicit interfaces, union types, readonly fields, and named domain types.

Good:

```ts
export interface CovenantFeature {
  readonly id: string;
  readonly projectId: string;
  readonly name: string;
}
```

Avoid vague shapes when a named type would preserve meaning.

### No `any`

Do not use `any`.

If a value is unknown, use `unknown` and narrow it safely.

Good:

```ts
function parseInput(value: unknown): string {
  if (typeof value !== "string") {
    throw new Error("Expected string input.");
  }

  return value;
}
```

Bad:

```ts
function parseInput(value: any): string {
  return value;
}
```

### Prefer Union Types for Known States

Use union types for controlled states.

Good:

```ts
export type CovenantAuditStatus =
  | "draft"
  | "needs_revision"
  | "approved"
  | "blocked"
  | "retired";
```

### Prefer Readonly Data

Use `readonly` for object fields and arrays unless mutation is required.

Good:

```ts
export interface CovenantProject {
  readonly id: string;
  readonly primaryPrinciples: readonly CovenantPrinciple[];
}
```

### Separate Domain Types From UI Types

Domain types should not depend on components, routes, or view state.

Keep domain language stable and reusable.

### Model Failure Explicitly

Do not hide failure in `null`, `undefined`, or vague strings where a union type is clearer.

Good:

```ts
export type EvidenceStatus =
  | "none"
  | "weak"
  | "partial"
  | "conflicting"
  | "sufficient"
  | "verified"
  | "disputed"
  | "retired";
```

### Validate Runtime Boundaries

TypeScript types do not validate external input at runtime.

Validate data from:

* users
* APIs
* databases
* files
* webhooks
* AI output
* environment variables
* third-party services

Use schema validation where appropriate.

### Label AI Output

AI-generated or AI-transformed content should be typed or labeled clearly.

Example:

```ts
export interface AiGeneratedDraft {
  readonly content: string;
  readonly modelProvider: string;
  readonly generatedAt: string;
  readonly humanReviewed: boolean;
  readonly uncertaintyLabel: "unknown" | "low" | "medium" | "high";
}
```

### Protect Sacred-Boundary Types

Features touching identity, memory, consent, evidence, money, grief, children, spiritual language, or AI personhood claims should use stricter types.

They should not rely on loose strings when a controlled union would prevent invalid states.

## Naming Rules

Use names that preserve meaning.

Prefer:

* `CovenantDecision`
* `ConsentStatus`
* `EvidenceStatus`
* `LivingRevisionStatus`
* `RepairOutcome`

Avoid:

* `Data`
* `Info`
* `Thing`
* `Stuff`
* `Result` without context

## Function Rules

Functions should have clear inputs, clear outputs, and visible failure behavior.

Prefer small functions with domain names.

Good:

```ts
export function requiresSacredBoundaryReview(
  riskLevel: CovenantFeatureRisk,
): boolean {
  return riskLevel === "sacred_boundary";
}
```

## Error Rules

Errors should be specific enough to support repair.

Avoid silent failure.

Avoid swallowing errors without logging or audit where the failure affects people, money, memory, evidence, consent, or visibility.

## Environment Variables

Environment variables should be validated at startup.

Do not assume required values exist.

Do not expose secrets to the client.

## Comments

Comments should explain why, not repeat what the code already says.

Good comments explain:

* covenant boundary
* failure mode
* consent requirement
* provenance rule
* repair reason
* unusual tradeoff

## Forbidden Patterns

Do not use:

* `any`
* untyped external input
* vague object blobs
* magic strings for important states
* silent catch blocks
* AI output without labels
* unchecked environment variables
* public exposure of protected data
* type casts to bypass real uncertainty
* mutation where readonly data is sufficient

## Completion Rule

A TypeScript change is not complete until important states are typed, external inputs are validated, failure modes are visible, and sacred-boundary data is protected by explicit types.
