# Audit Trail Protocol

## Purpose

The Audit Trail Protocol defines what must be recorded when a Covenant Code system creates, changes, interprets, publishes, corrects, restricts, or retires meaningful information.

An audit trail is the memory of accountability.

It should preserve enough truth to support repair without turning memory into surveillance or punishment.

## Audit Trail Rule

Record what is necessary for truth, provenance, consent, accountability, and repair.

Do not record what creates unnecessary exposure, identity imprisonment, or risk without a lawful purpose.

## Events That Require Audit Records

Audit records are required when a system:

* creates a public or persistent artifact
* changes a source-linked claim
* publishes AI-generated analysis
* changes visibility
* changes consent status
* changes ownership or authorship
* changes billing or scope
* corrects a record
* retires a record
* deletes or restricts a record
* escalates a feature for review
* approves or blocks a sacred-boundary feature
* receives a source challenge
* resolves a repair path

## Required Audit Fields

An audit record should include:

* audit id
* project id
* related feature id
* related artifact id where applicable
* event type
* actor or actor role
* timestamp
* previous state
* new state
* reason for change
* provenance reference
* consent status
* visibility status
* repair status
* reviewer where applicable
* notes

## Actor Labels

Actor labels should distinguish:

* user
* admin
* contributor
* client
* system
* AI model
* human reviewer
* external source
* unknown

Do not imply a human actor where the action was automated.

Do not imply AI autonomy where the action came from system logic.

## AI Audit Requirements

When AI is involved, record:

* model or provider where appropriate
* prompt or prompt category where appropriate
* source inputs used
* output type
* human review status
* uncertainty label
* publication status
* correction status

## Living Revision and Audit

Living revision must not erase accountability.

When a record is corrected, restricted, retracted, or updated, the audit trail should preserve:

* that the change occurred
* why it occurred
* who or what requested it
* what public-facing record changed
* whether old content remains visible, restricted, or archived

The audit trail should not expose outdated personal details publicly unless there is a lawful reason.

## Protective Privacy and Audit

Privacy is a protective boundary, not an excuse to erase accountability.

Protected audit records may be restricted, but they should remain available to authorized review where required for repair, governance, or lawful stewardship.

## Forbidden Audit Patterns

Do not use audit trails to:

* secretly surveil users
* preserve private memory without purpose
* punish people for old versions of themselves
* hide system failures
* conceal ownership changes
* launder AI output as human-authored
* erase correction history
* expose protected people unnecessarily

## Completion Rule

An audit trail is complete when it records enough to support truth, transparency, provenance, consent, living revision, and repair without unnecessary exposure.
