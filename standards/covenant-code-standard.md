# Covenant Code Standard

## Definition

Covenant Code is software architecture aligned to truth, transparency, dignity, consent, continuity, living revision, provenance, stewardship, repair, accessibility, lawful boundaries, human flourishing, signal clarity, and protective privacy.

Covenant Code treats software as a vessel.

The vessel must not merely function. It must remain faithful to the purpose it serves.

## Completion Standard

A feature is not complete when it merely runs.

A feature is complete when it:

* serves a declared purpose
* protects affected people
* makes relevant system behavior transparent
* records required provenance
* respects consent
* supports changed consent where possible
* preserves necessary continuity
* allows living revision where people or beliefs may change
* has a lawful boundary
* has a known failure mode
* has a repair path
* avoids extraction
* supports accessibility
* improves or preserves signal clarity
* uses privacy only as a protective boundary where needed

## Required Review Questions

For every feature, answer:

1. What does this serve?
2. Which Covenant Principle governs it?
3. Who could be affected?
4. What data, memory, identity, evidence, money, or belief does it touch?
5. What must be transparent to the user?
6. What consent does it require?
7. Can consent change later?
8. What provenance does it create?
9. What boundary prevents misuse?
10. What happens if it fails?
11. How is harm repaired?
12. What must be logged?
13. What must never be logged?
14. Does this clarify signal or create noise?
15. Could this unfairly freeze someone inside an outdated version of themselves?

## Sacred Boundary Classification

A feature is a sacred-boundary feature if it touches:

* identity
* memory
* grief
* children
* money
* legal status
* health or safety
* spiritual language
* AI personhood claims
* evidence or forensic claims
* user consent
* authorship
* private communications
* reputation
* irreversible public record
* emotional dependency

Sacred-boundary features require stricter review.

## Transparency Standard

Transparency is the default.

A user should be able to understand:

* what the system is doing
* why it is doing it
* what data or memory it uses
* what AI involvement exists
* what is automated
* what is human-reviewed
* what is inferred
* what is uncertain
* what can be changed
* what cannot be changed
* what happens when something goes wrong

Transparency does not require exposing protected people unnecessarily.

Transparency means the system is understandable, accountable, and auditable.

## Protective Privacy Standard

Privacy is not the ruling principle of Covenant Code.

Privacy is a protective boundary.

Privacy is appropriate when disclosure would:

* violate consent
* expose someone to harm
* reveal protected information
* compromise safety
* break lawful confidentiality
* create identity imprisonment
* expose private communications without legitimate reason
* prevent fair living revision

Privacy must not be used to hide extraction, deception, corruption, unclear ownership, or avoidable harm.

The rule is:

Transparent by default.
Private where protection is required.
Auditable always.
Merciful with living people.

## Living Revision Standard

People change.

Projects change.

Beliefs change.

Relationships change.

Systems must not pretend that a past record is always the whole truth of a living person.

Where appropriate, Covenant Code should support:

* correction
* annotation
* retraction
* expiration
* changed consent
* updated self-representation
* contextualization
* forgiveness
* restricted future use
* preservation of audit history without public punishment

Living revision must not erase accountability.

It must preserve enough record truth to support repair while giving living people room to become new.

## Provenance Standard

Provenance is required wherever a system creates, transforms, interprets, publishes, or relies on meaningful claims.

A provenance record should answer:

* where the information came from
* who or what created it
* when it was created
* what changed
* why it changed
* what evidence supports it
* what uncertainty remains
* who reviewed it, if review occurred

Provenance must distinguish between:

* source material
* user-provided content
* AI-generated content
* human-authored content
* inferred claims
* symbolic interpretation
* verified record
* revised record

A system without provenance cannot reliably support correction, accountability, or repair.

## Consent Standard

Consent must be specific enough to be meaningful.

A system should make clear:

* what is collected
* what is remembered
* what is transformed
* what is published
* what is shared
* what is automated
* what is used for AI processing
* what can be withdrawn or revised
* what cannot reasonably be undone

Consent is weakened when the system is confusing, bundled, hidden, punitive, or difficult to understand.

Where possible, consent should support future revision, restriction, or withdrawal.

## Lawful Boundary Standard

A lawful boundary defines what a feature must not claim, must not do, must not store, must not expose, or must not automate.

Every sacred-boundary feature must define:

* allowed use
* forbidden use
* required consent
* required transparency
* required provenance
* protected data or memory
* failure mode
* repair path
* escalation path

Boundary is what allows trust to exist.

## Repair Standard

Every meaningful feature needs a repair path.

Repair may include:

* correction
* rollback
* annotation
* revocation
* restriction
* user notification
* source correction
* audit update
* public correction
* private correction
* escalation to human review
* compensation or restitution where appropriate
* future prevention

Repair must be designed before harm occurs, not improvised afterward.

A feature with no repair path is not complete.

## Signal Clarity Standard

Covenant Code should clarify signal rather than amplify noise.

A feature preserves signal clarity when it:

* labels uncertainty
* preserves source context
* avoids exaggeration
* separates evidence from interpretation
* separates memory from current truth
* avoids false certainty
* avoids spectacle-driven design
* supports review
* supports correction
* reduces confusion

A feature risks noise when it rewards volume, speed, drama, outrage, ambiguity, dependency, or unsupported claims.

## Accessibility Standard

Covenant Code must reduce unnecessary gatekeeping.

Accessibility includes:

* plain language
* readable interfaces
* recoverable errors
* clear next steps
* disability access
* understandable ownership terms
* economic fairness
* respectful onboarding
* support for people with limited technical experience

A system is not truly powerful if only experts can safely use it.

## Forbidden Patterns

Covenant Code must not ship features that depend on:

* deceptive simulation of personhood
* hidden data extraction
* unclear ownership
* unreviewed AI claims
* source-free certainty
* dark patterns
* forced dependency
* memory without purpose
* irreversible destructive actions without confirmation
* features with no repair path
* spiritual manipulation
* emotional dependency as a business model
* public permanence where living revision is required
* privacy language used to hide exploitation
* truth used to imprison living people
* automation without accountability

## Approval Rule

If a feature cannot state its purpose, transparency requirement, consent model, boundary, failure mode, living revision impact, and repair path, it is not ready to ship.

## Operating Sentence

Covenant Code does not ask only, “Does it run?”

It asks, “Does it remain faithful while it runs?”

## First Principle

We build code as vessels, not weapons.
