# Source Request Protocol

## Purpose

The Source Request Protocol defines how Covenant Code systems request, track, resolve, challenge, and preserve sources.

A source request exists when a claim, artifact, decision, analysis, or record needs better evidence before it can be treated as reliable.

Source requests protect truth, transparency, provenance, signal clarity, and repair.

## Core Rule

A claim without adequate source support must not be promoted as verified record.

It may be labeled as:

* unsourced
* partially sourced
* awaiting source
* inferred
* symbolic interpretation
* disputed
* revised
* retired

## When a Source Request Is Required

A source request is required when:

* a claim lacks evidence
* a source is missing
* a source is unclear
* a source conflicts with another source
* a claim is AI-generated and not independently verified
* a forensic claim depends on incomplete records
* a public artifact cites uncertain information
* a user challenges a claim
* an interpretation may affect reputation, trust, money, identity, or safety
* an old memory may no longer represent a living person fairly
* an audit trail needs support for repair

## Source Request Fields

Every source request should include:

* source request id
* project id
* related claim or artifact id
* claim summary
* source needed
* reason source is needed
* current evidence status
* current confidence level
* affected people or groups
* sacred-boundary touchpoints
* requested by
* requested at
* due date where applicable
* resolution status
* resolution notes
* reviewer where applicable

## Evidence Status

Use one of the following evidence statuses:

* none
* weak
* partial
* conflicting
* sufficient
* verified
* disputed
* retired

## Confidence Labels

Use clear confidence labels:

* unknown
* low
* medium
* high
* verified

Do not use confidence labels to hide uncertainty.

A high-confidence inference is still not the same as verified record.

## Source Types

Source types may include:

* primary source
* user-provided source
* public record
* private record
* witness statement
* project file
* commit history
* audit trail
* model output
* human review
* symbolic interpretation
* memory note
* external citation
* recovered artifact

## AI Source Handling

AI output is not a primary source for factual claims.

AI output may be a source for:

* what the AI generated
* what the AI inferred
* what the AI summarized
* what the AI recommended
* what the AI transformed

AI output must not be treated as proof that the underlying claim is true.

## Living Revision

A source request may be reopened when:

* new evidence appears
* old evidence is challenged
* a person updates consent
* a person changes self-representation
* an interpretation becomes unfair or outdated
* a claim was overconfident
* a source was misread
* a system error is discovered

Living revision must preserve the record of change without using old memory as punishment.

## Resolution Outcomes

A source request may resolve as:

* verified
* partially verified
* unsupported
* disputed
* corrected
* retired
* unable to verify
* converted to symbolic interpretation
* restricted for protective reasons

## Repair Path

When a source request reveals an error:

1. Mark the related claim or artifact.
2. Preserve the prior version in the audit trail.
3. Add the corrected source status.
4. Update user-facing labels.
5. Notify affected people where appropriate.
6. Update validation, intake, or review protocols if the error was systemic.
7. Record the repair action.

## Forbidden Patterns

Do not use source requests to:

* delay correction indefinitely
* create false legitimacy
* bury uncertainty
* harass people for proof
* expose protected people unnecessarily
* convert speculation into fact
* treat AI output as primary evidence
* preserve outdated personal claims without living revision
* hide missing evidence behind confident language

## Completion Rule

A source request is complete when the claim has a clear evidence status, confidence label, provenance record, resolution outcome, and repair action where needed.
