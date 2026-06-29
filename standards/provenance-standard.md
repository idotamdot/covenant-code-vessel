# Provenance Standard

## Purpose

The Provenance Standard defines how Covenant Code systems preserve the origin, authorship, evidence, AI involvement, human review, transformation history, uncertainty, consent, visibility, and repair status of meaningful information.

Provenance protects truth.

Provenance makes repair possible.

## Core Rule

A meaningful claim, artifact, memory, decision, source request, AI output, human review, or repair action should be traceable enough to support truth, transparency, consent, living revision, accountability, and repair.

## Required Provenance Questions

A provenance record should answer:

1. Where did this come from?
2. Who or what created it?
3. When was it created?
4. What changed?
5. Why did it change?
6. What evidence supports it?
7. What uncertainty remains?
8. Was AI involved?
9. Was a human reviewer involved?
10. What consent applies?
11. What visibility applies?
12. Can it be revised?
13. What repair path exists if it is wrong?

## Origin Types

Use clear origin labels:

* source_material
* user_provided
* client_provided
* contributor_provided
* public_record
* private_record
* repository_file
* commit_history
* audit_trail
* ai_generated
* ai_transformed
* human_authored
* human_reviewed
* inferred
* symbolic_interpretation
* verified_record
* recovered_artifact
* unknown

## Evidence Status

Use one of the following:

* none
* weak
* partial
* conflicting
* sufficient
* verified
* disputed
* retired

## Confidence Labels

Use one of the following:

* unknown
* low
* medium
* high
* verified

A high-confidence inference is still not the same as verified record.

## AI Provenance

When AI is involved, record where appropriate:

* model or provider
* prompt or prompt category
* input sources
* output type
* generated timestamp
* human review status
* uncertainty label
* publication status
* correction status

AI output may prove what the AI generated.

AI output does not prove that the underlying world-claim is true.

## Human Review Provenance

When human review occurs, record:

* reviewer role
* review date
* review status
* changes made
* unresolved issues
* approval conditions
* repair notes where applicable

## Consent Provenance

Record consent status where relevant:

* not_applicable
* granted
* changed
* withdrawn
* restricted
* unclear
* disputed

Consent provenance should make clear what was allowed at the time and whether future use has changed.

## Visibility Provenance

Record visibility status where relevant:

* public
* user_visible
* admin_only
* restricted
* protected
* retired

Visibility changes should be auditable.

## Living Revision Provenance

When a person, project, belief, relationship, interpretation, or record changes over time, provenance should preserve:

* what changed
* why it changed
* who requested it
* who reviewed it
* whether public visibility changed
* whether old content is restricted, protected, retired, or archived for accountability
* whether the old record should no longer be used as current representation

## Source Request Linkage

If evidence is incomplete, disputed, missing, or challenged, link the provenance record to a source request.

Do not promote unsupported claims as verified record.

## Repair Linkage

If a record is corrected, restricted, retired, or disputed, link the provenance record to the relevant repair path or audit entry.

## Forbidden Patterns

Do not use provenance to:

* create false legitimacy
* hide missing evidence
* treat AI output as primary evidence
* conceal ownership changes
* erase correction history
* expose protected people unnecessarily
* preserve outdated personal memory as current truth
* confuse symbolic interpretation with verified record
* bury uncertainty under confident language

## Completion Rule

A provenance standard is satisfied when meaningful information can be traced to origin, evidence, authorship, AI involvement, review, consent, visibility, living revision status, and repair path.
