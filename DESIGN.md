# XWD Academy interface

## Scope and visual system

This is a scoped refinement of the existing blue learning interface, not a rebrand. Keep the public teaching boundary in ACADEMY_POLICY.md. Home is an Operate surface; lesson content is Read.

- Navy header, pale blue-gray page, white reading surfaces, blue primary actions.
- Chinese system fonts without remote font dependencies; 16px lesson body, generous line height, restrained headings.
- 1080px page container; 900px article container. Under 700px, navigation uses three columns and lesson actions stack.
- Preserve lesson copy, assessments, cases, backup format, and existing localStorage keys.
- Visible keyboard focus, skip link, current navigation state, 44px minimum button height, reduced-motion support.

## Impeccable trial — 2026-11-01

Applied the context and polish workflow from [pbakaus/impeccable](https://github.com/pbakaus/impeccable), version 4.8.0, source commit `4f956490f0056ae1ff5ea80372cf56e83c001d3c`. Read the polish and craft-floor playbooks. Engine context explicitly allowed scoped refinement of the incumbent interface without a product-context interview. This trial uses the external skill as a development aid; it does not install a runtime dependency, global skill, or automatic edit hook.

Validation: existing Node smoke checks and interface.js syntax pass. Browser checks cover lesson completion and persisted progress, three-question assessment (3/3), and case draft saving with rubric disclosure. Inspected desktop home and 390px/768px framed layouts, including narrow lesson reading.

The one manual source detector pass reported two cramped-padding warnings on `card` markup in index.html. External CSS explicitly gives content cards 24px padding (lesson cards 24px/28px, 22px on mobile). The stat strip intentionally resets the old metric cards to borderless cells. Rendered inspection shows spacing; no blanket suppressions were added. Browser extension metadata errors were unrelated to application code.
