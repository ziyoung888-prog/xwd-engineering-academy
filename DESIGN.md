# XWD Academy interface

The approved Hallmark learning-workbench layout is now the production interface.

- Light blue-gray canvas, blue primary actions and navy XWD wordmark; existing Chinese system fonts.
- Course worklist with aligned actions; calm article reading surface; responsive navigation and buttons.
- Uses the original production storage keys `xwd_academy_progress_v1` and `xwd_academy_notes_v3`. No migration or reset.
- Original v2.js, v3.js and interface.js are unchanged. Inline lesson content and learning logic are unchanged.
- The separate hallmark-preview directory retains its isolated storage.

Validation: existing smoke checks and source-equivalence checks pass. The preview was reviewed at desktop and 360px/768px framed widths and tested for lesson completion and case saving. Hallmark static checks passed; its automatic render tier was unavailable, so visual inspection used the supported browser.

Approved for promotion on 2026-11-01. See hallmark-preview/DESIGN.md for trial provenance and verification limits.
