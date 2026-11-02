# XWD Engineering Academy — V4 interactive learning redesign

Status: design specification; not implemented or browser-tested.
Last updated: 2026-11-02.

## Product goal
Turn a reading-first AIDC electrical-engineering site into a **solve → observe → explain → transfer** learning experience. Keep public materials generic and fictional. Do not ingest or publish proprietary internal project files or parameters.

## Benchmark decisions
- Brilliant: one problem per screen, progressive reveal, manipulation-first concept discovery, hints before solution. Primary reference.
- Duolingo: 5–8 minute micro-lessons, visible progress, streaks and XP only as secondary motivation; no punishment for missed days.
- Codecademy: three-panel engineering lab (requirements, simulation/workspace, feedback), editable inputs, deterministic checks, downloadable non-sensitive exercise result.
- Quizlet: flashcards, retrieval practice, missed-question queue, spaced review.
- TED-Ed: short story-led lesson introductions and optional deeper explanations, not a required video dependency.
- Flexbox Froggy: single-mechanic puzzle levels and immediate visual consequences, not a cartoon aesthetic requirement.

## IA
1. Home: one prominent “continue learning” CTA; today's 5–8 minute mission; due reviews; capability summary.
2. Roadmap: 8 tracks, prerequisite graph, locked/unlocked nodes; distinguish planned from available lessons.
3. Lesson player: fullscreen-ish focused stepper, progress indicator, hint button, input, immediate feedback, retry; one learning objective per step.
4. Engineering Lab: requirements | interactive circuit/parameter workspace | evidence and feedback; responsive stacked layout on mobile.
5. Review: flashcards, calculation recall, scenario judgement; review queue prioritized by due date and error history.
6. Portfolio: generic case submissions, rubric outcomes, evidence checklist, local export/import.
7. Settings: accessibility, reduced motion, backups and privacy.

## First three playable learning missions
### M1 Contactor: distinguish current ratings
1. Identify continuous carrying vs short-time withstand vs interrupting.
2. Drag labels to circuit operating events.
3. Calculate P=I²R with editable current and resistance, show heating relationship.
4. Choose evidence for load breaking and short-circuit coordination.
5. Transfer: explain whether a supplier datasheet covers a fictional duty.
Pass: calculation tolerance and reasoning checkpoints; do not equate quiz pass to real-world qualification.

### M2 Thermal comparison
1. Observe two curves with different ambient baselines.
2. Normalize to delta-T; interactively move ambient temperature.
3. Align time origin and inspect sensor positions.
4. Choose controlled variables and acceptance criteria before results.
5. Transfer: draft a comparison plan.

### M3 Fuse coordination
1. Explore time-current behavior on simplified conceptual curves (explicitly NOT manufacturer curves).
2. Adjust steady current, transient current and duration.
3. Calculate simple I²t examples; label limitations.
4. Choose missing data for prospective fault currents and DC voltage.
5. Transfer: evaluate a fictional supplier proposal.

## Reusable interactive step schema
{ id, lessonId, objective, kind: "choice"|"number"|"drag"|"slider"|"diagram"|"short_text", prompt, inputs, hintLevels, validation, explanation, errorTags, sourceType, version }
All physics simulations must declare assumptions, units, validity limits, and whether results are illustrative.

## Learning and motivation
- Levels: Viewed / Practiced / Passed checks / Demonstrated transfer. No false “mastered” status from a single multiple-choice question.
- Streak: voluntary; do not penalize breaks; count only meaningful attempts.
- XP: award for effortful practice, corrections, and transfer tasks, not repeated button clicks.
- Adaptive reviews: wrong answer → next-day recall; correct with difficulty → 3 days; fluent correct → 7/30 days; preserve history.
- Minimum daily session: 1 micro-lesson (5–8 min) + 1 review (2–4 min); longer lab optional.
- Engineering quality rubric: assumptions, calculations, risk identification, evidence, decision boundary.

## Design system
- Distinct engineering aesthetic: ink/navy surfaces, warm off-white canvas, teal or amber accents, clear typography, diagram-first illustrations. Avoid cloning third-party branding or artwork.
- Desktop: left learning map/sidebar, centered lesson workspace, optional right hint/evidence rail.
- Mobile: single-column stepper and bottom primary CTA.
- 44px minimum touch targets; keyboard focus; semantic controls; WCAG AA contrast target; reduced-motion support.
- Progress feedback subtle and purposeful; no confetti on every action.

## Architecture and migration
- Preserve existing localStorage key `xwd_academy_progress_v1`; implement explicit versioned migration before replacing data.
- Keep current v2/v3 lessons and backups available during transition.
- Separate content JSON from rendering logic; define lesson schema and validation.
- Use dependency-light static HTML/CSS/JS suitable for GitHub Pages and restrictive corporate browsers.
- Never put secrets or internal engineering docs in public repository. No external analytics by default.
- Browser storage is local only; manual JSON backup/import until safe optional sync is designed.

## Delivery sequence and acceptance
P0: UX skeleton and progress-safe routing; content schema; 1 complete interactive mission.
P1: three missions, hints, feedback, responsive layout, keyboard access.
P2: flashcards, review scheduler, roadmap, streak/XP with anti-gaming safeguards.
P3: engineering lab, case rubrics, portfolio and learning analytics.
P4: automated unit and browser tests, Pages release verification, company-PC smoke test.

Acceptance: lesson flow complete without reload, numerical grading deterministic, wrong answers yield targeted hints, prior progress survives update, backups round-trip, mobile usable, keyboard operable, zero private data, GitHub Actions green. Code commit alone is not acceptance.
