# How to Use Covenant Code Vessel

Covenant Code Vessel is a reference system for building, reviewing, repairing, and governing projects under Covenant Code.

Use it when starting a new project, planning a feature, reviewing an AI-assisted system, writing client-facing language, documenting a decision, or repairing a failure.

## First Use

Start with these files:

1. `COVENANT.md`
2. `PRINCIPLES.md`
3. `INDEX.md`
4. `README.md`

These explain the purpose, doctrine, navigation, and structure of the vessel.

## When Starting a New Project

Use:

* `templates/project-charter.template.md`
* `checklists/project-charter.checklist.md`
* `protocols/covenant-review.protocol.md`

Steps:

1. Copy the project charter template.
2. Give the project a clear plain-language purpose.
3. Define the vessel type.
4. List the sacred-boundary touchpoints.
5. Define transparency requirements.
6. Define provenance requirements.
7. Define living revision support.
8. Define repair paths.
9. List forbidden uses.
10. Add the completed charter to `projects/`.
11. Update `INDEX.md`.
12. Update `README.md`.

## When Planning a Feature

Use:

* `templates/feature-spec.template.md`
* `checklists/covenant-feature-review.checklist.md`
* `protocols/feature-intake.protocol.md`
* `protocols/covenant-review.protocol.md`

Steps:

1. Name the feature.
2. Explain the purpose in plain language.
3. Identify who the feature affects.
4. Identify what the feature touches.
5. Define AI (Artificial Intelligence) involvement.
6. Define human review boundaries.
7. Define consent requirements.
8. Define provenance requirements.
9. Define accessibility requirements.
10. Identify known failure modes.
11. Define repair paths before release.

## When Using AI

Use:

* `standards/ai-boundaries-standard.md`
* `standards/provenance-standard.md`
* `standards/memory-and-consent-standard.md`
* `protocols/audit-trail.protocol.md`

Rules:

* Label AI involvement.
* Do not treat AI output as verified truth.
* Do not let AI make sacred-boundary decisions without review.
* Do not let AI imply lived experience it does not have.
* Do not hide AI involvement from users, clients, visitors, or contributors.
* Preserve source context.
* Preserve uncertainty.
* Provide repair paths.

## When Writing for Nontechnical Readers

Use:

* `GLOSSARY.md`
* `standards/accessibility-standard.md`
* `templates/README.template.md`

Rules:

* Define acronyms the first time they appear.
* Define technical words in plain language.
* Do not use jargon as gatekeeping.
* Do not use complexity as pressure.
* Do not hide cost, ownership, consent, AI involvement, or risk inside technical language.

Examples:

* AI (Artificial Intelligence)
* API (Application Programming Interface)
* URL (Uniform Resource Locator)
* UI (User Interface)
* UX (User Experience)
* CMS (Content Management System)
* CRM (Customer Relationship Management)
* SEO (Search Engine Optimization)
* DNS (Domain Name System)
* SSL (Secure Sockets Layer)
* MFA (Multi-Factor Authentication)
* RLS (Row-Level Security)

## When Recording a Decision

Use:

* `DECISION-RECORDS.md`
* `schemas/covenant-decision.ts`
* `protocols/audit-trail.protocol.md`

Record:

* what was decided
* why it was decided
* who or what it affects
* what alternatives were considered
* what risks were accepted
* what boundaries apply
* what repair path exists
* when it should be reviewed again

## When Sources Are Missing

Use:

* `protocols/source-request.protocol.md`
* `PROVENANCE.md`
* `standards/provenance-standard.md`

Rules:

* Do not treat missing evidence as proof.
* Label unsupported claims.
* Track requested sources.
* Preserve source status.
* Record uncertainty.
* Allow correction when better evidence arrives.

## When Something Goes Wrong

Use:

* `REPAIR-PATHS.md`
* `FAILURE-MODES.md`
* `protocols/repair-loop.protocol.md`
* `templates/repair-plan.template.md`

Steps:

1. Name the failure plainly.
2. Pause or restrict the harmful feature if needed.
3. Identify who or what was affected.
4. Identify the source of the failure.
5. Correct the record, interface, decision, or system behavior.
6. Preserve the repair record.
7. Update the standard, protocol, checklist, or template if the issue was systemic.

## When Preparing a Release

Use:

* `checklists/release-readiness.checklist.md`

Before release, confirm:

* repository status is clean
* navigation is updated
* plain-language review is complete
* Covenant alignment is complete
* sacred-boundary review is complete
* relevant documentation is updated
* repair readiness exists

## Working Rule

Covenant Code does not ask only:

> Does it run?

It asks:

> Does it remain faithful while it runs?

## First Principle

We build code as vessels, not weapons.

