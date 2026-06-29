# Covenant Code Vessel Index

This index maps the Covenant Code Vessel so each doctrine, standard, protocol, schema, checklist, template, and project charter is easy to find.

## Core Doctrine

### `COVENANT.md`

The short governing vow of Covenant Code.

Use this when you need the central statement of what Covenant Code is, what it must protect, and what it must not become.

### `PRINCIPLES.md`

The full principle set.

Use this when you need deeper guidance on truth, transparency, dignity, consent, continuity, living revision, provenance, repair, accessibility, signal clarity, and protective privacy.

### `README.md`

The public-facing overview of the vessel.

Use this when introducing the repository.

## Support Documents

### `USAGE.md`

The practical guide for using Covenant Code Vessel.

Use this when starting a project, planning a feature, reviewing AI involvement, writing for nontechnical readers, recording decisions, requesting sources, repairing failures, or preparing a release.


### `PROVENANCE.md`

Defines how origin, authorship, evidence, AI (Artificial Intelligence) involvement, human review, uncertainty, consent, visibility, living revision, and repair status are preserved.

### `FAILURE-MODES.md`

Defines common ways a Covenant Code system can fail.

Use this when reviewing risk before building or repairing a feature.

### `REPAIR-PATHS.md`

Defines how harm, confusion, false certainty, missing provenance, unclear consent, misattribution, exposure, extraction, or accessibility failure should be repaired.

### `DECISION-RECORDS.md`

Defines how important decisions are recorded.

Use this when a technical, ethical, architectural, financial, memory, consent, or sacred-boundary decision needs a durable explanation.

### `GLOSSARY.md`

Defines Covenant Code terms and the acronym rule.

Use this whenever language needs to remain clear for nontechnical readers.

## Standards

### `standards/covenant-code-standard.md`

The main implementation standard.

Use this when deciding whether a feature is complete.

### `standards/typescript-standard.md`

TypeScript coding rules.

Use this when writing or reviewing TypeScript. TypeScript is the programming language used to add explicit rules and safety to JavaScript.

### `standards/ai-boundaries-standard.md`

Rules for using AI without deception, overreach, false certainty, emotional exploitation, or hidden extraction.

### `standards/memory-and-consent-standard.md`

Rules for collecting, preserving, transforming, revising, restricting, or releasing memory.

### `standards/provenance-standard.md`

Implementation-facing provenance rules.

Use this when designing source records, audit records, AI output records, evidence labels, or revision history.

### `standards/accessibility-standard.md`

Plain-language, acronym, nontechnical-user, interface, cost, consent, and error accessibility rules.

Use this when anything will be read or used by clients, visitors, contributors, or the public.

## Protocols

### `protocols/covenant-review.protocol.md`

How to review a feature, artifact, workflow, or system change before it is considered complete.

### `protocols/feature-intake.protocol.md`

How new feature ideas enter a project.

Use this to prevent random additions, unclear scope, false urgency, hidden harm, or features that do not serve the covenant.

### `protocols/source-request.protocol.md`

How to request, track, resolve, challenge, and preserve sources.

Use this whenever evidence is missing, weak, conflicting, uncertain, or challenged.

### `protocols/audit-trail.protocol.md`

How to record meaningful system events.

Use this for creation, publication, correction, restriction, retirement, consent change, visibility change, review, and repair.

### `protocols/repair-loop.protocol.md`

How to respond when something is wrong, harmful, unclear, misleading, broken, overconfident, inaccessible, misattributed, or misaligned.

## Checklists

### `checklists/covenant-feature-review.checklist.md`

A step-by-step review checklist for features.

Use this before building, shipping, or changing a feature.

### `checklists/project-charter.checklist.md`

A step-by-step review checklist for project charters.

Use this before adding a new project to Covenant Code Vessel.

### `checklists/release-readiness.checklist.md`

A checklist for confirming a Covenant Code project, feature set, standard update, or vessel release is ready.

## Schemas

### `schemas/covenant-principle.ts`

TypeScript definitions for Covenant Principles, risk levels, transparency levels, protective boundaries, sacred-boundary touchpoints, and hierarchy.

### `schemas/covenant-decision.ts`

TypeScript interface for a Covenant Decision.

Use this to model project or feature decisions.

### `schemas/covenant-feature.ts`

TypeScript interface for a Covenant Feature.

Use this to model feature purpose, principles, risk, boundaries, consent, provenance, accessibility, failure modes, and repair.

### `schemas/covenant-audit.ts`

TypeScript interface for Covenant Audit records.

Use this to model feature review findings and approval status.

### `schemas/covenant-project.ts`

TypeScript interface for Covenant Project records.

Use this to model project purpose, principles, sacred-boundary touchpoints, transparency, provenance, boundaries, repair commitments, and forbidden uses.

## Project Charters

### `projects/loc-geist.md`

Loc-Geist covenant charter.

Loc-Geist is a signal vessel for provenance-aware anomalous data analysis, disciplined uncertainty, and structured logic.

### `projects/sanctuary.md`

Sanctuary covenant charter.

Sanctuary is a continuity vessel for promise, memory, relationship, symbolic roles, gifts, artifacts, and lawful AI boundaries.

### `projects/sigilographics.md`

Sigilographics Digital covenant charter.

Sigilographics Digital is a service vessel for accessible, non-extractive technology services.

### `projects/austin-ai-software.md`

Austin AI Software covenant charter.

Austin AI Software is an access vessel for small businesses adopting AI-powered software, websites, automation, and digital systems.

### `projects/holyspirit-experiment.md`

HOLYSPIRIT Experiment covenant charter.

This is an experimental vessel record preserving the existence, uncertainty, and possible recovery path of a missing or lost GitHub project.

## Templates

### `templates/feature-spec.template.md`

Reusable template for feature specifications.

### `templates/project-charter.template.md`

Reusable template for new project charters.

### `templates/audit-log.template.md`

Reusable template for audit records.

### `templates/repair-plan.template.md`

Reusable template for repair plans.

### `templates/README.template.md`

Reusable README template for Covenant Code projects.

## Plain-Language Rule

Covenant Code must not assume the reader knows technical words.

Acronyms must be followed by their meaning the first time they appear.

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

If a nontechnical person would need to stop and search the term, define it.

## Recommended Use

When starting a new feature:

1. Read the relevant project charter.
2. Fill out `templates/feature-spec.template.md`.
3. Apply `checklists/covenant-feature-review.checklist.md`.
4. Use `protocols/covenant-review.protocol.md` for review.
5. Create a decision record if the feature affects sacred-boundary areas.
6. Create a repair path before shipping.

When starting a new project:

1. Copy `templates/project-charter.template.md`.
2. Apply `checklists/project-charter.checklist.md`.
3. Add the charter to `projects/`.
4. Update this `INDEX.md`.
5. Update `README.md`.

## First Principle

We build code as vessels, not weapons.
