# Hallmark preview

This directory is an independent visual preview of XWD Engineering Academy. The root website remains the production version. Open compare.html for an interactive before/after comparison.

## Design

Hallmark 2.0.0, app-screen redesign workflow, using the existing locked XWD blue palette and Chinese system fonts. No theme catalog or external image service is used. The course worklist replaces repeated rounded cards; reading uses a restrained white article surface. Keep all three lessons, questions, case prompts, roadmap, and local backup behavior.

## Isolation

Preview-only keys: xwd_academy_hallmark_preview_progress_v1 and xwd_academy_hallmark_preview_notes_v3. The preview does not read or write production progress. Course content and all original learning scripts are unchanged except for the two storage-key substitutions. Added presentation code only reorders category labels below headings.

## Verification — 2026-11-01

- Existing production smoke checks passed from the repository root.
- Script syntax and source equivalence checks passed: lesson data and learning logic match production after normalizing the intentional storage-key differences.
- Hallmark static scan: 0 FAIL, 0 REFLEX, 0 WARN. Static preservation record retained 1/1 links, 1/1 fields, 6/6 inline handlers and 7/7 script hooks from the original shell. Dynamic content is covered by the source equivalence and browser checks, not these counts.
- Hallmark automatic render tier did not run because puppeteer-core is unavailable. Visual review used the supported cloud browser instead; no automatic eight-width render pass is claimed. Review was performed in-thread using the Codex fallback.
- Inspected desktop and framed 360px/768px layouts; measured 360px frame's root content width equal to its client width. Tested lesson completion and local progress, narrow-screen case draft save, and backup-page controls.
- No new claims, company files, external data requests, analytics, remote fonts, or invented metrics.

Shell changes: the original AIDC audience subtitle becomes the main heading; the English site name stays in the wordmark. Added an explicit preview label and links to the production website. Course wording is preserved verbatim, including its metadata punctuation.

This is a preview, not a global Hallmark skill installation.
