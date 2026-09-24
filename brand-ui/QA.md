# BioMaster Visual System — validation record

Date: 2026-09-11. Scope: this standalone visual handbook and asset package.

## Browser checks

Verified in the Codex in-app browser over a local HTTP server:

- Light/dark theme switch updates the page, semantic palette and button state.
- Chat, Notebook and Team tabs update the selected panel and project labels. Arrow keys, Home and End support keyboard selection.
- Chat Pause/Continue updates execution state and explains that the interaction is a simulation.
- Notebook context toggle highlights eligible preceding cells, excluding the prompt itself.
- Team issue selection updates the owner, work record and review state.
- Compact density toggles; empty form validation preserves focus and displays a field error; a valid name produces a clearly labelled demo result.
- Color-copy interaction displays success after the Clipboard API resolves.
- All handbook images loaded; no browser error logs were reported during the checked session.
- Desktop light Chat and dark Notebook, the mobile hero and Chat view, and campaign previews were visually inspected.

Fixed CSS-width iframe checks (using responsive-check.html):

| Width | Observed document width | Horizontal page overflow |
| --- | --- | --- |
| 320 px | 320 px | None |
| 390 px | 390 px | None |
| 768 px | 768 px | None |
| 1280 px | 1280 px | None |

Mobile checks covered Chat, Notebook and Team, including a dark-theme Team view. The Chat run-control and Notebook context buttons measured 44 px tall on narrow screens. Tables retain a local scrolling container.

## Assets and generation

- Approved light and app PNGs are byte-identical to the finalized originals. SHA-256 values are recorded in asset-checks.json.
- All three SVG templates parse as XML and embed one of those original PNGs unchanged.
- Both HTML pages have unique IDs, valid local/fragment links, and existing label/ARIA targets.
- Referenced local CSS/font/image/script files exist. No unresolved --bm-* references were found in the CSS.
- Regenerating the eight generated files produces identical content.
- All 62 defined color-pair checks pass their stated 4.5:1 text or 3:1 non-text thresholds. See contrast-report.json for exact pairs and ratios.
- The final ZIP is checked for archive integrity and exact agreement with package files before delivery.

## Scope and limits

The handbook is designed for offline use: fonts, scripts, styles, logos and template images are local, with no package installation or network fetch required. Direct file:// preview was blocked by the automation browser's URL policy; it was not tested through another browser or workaround. Local HTTP rendering and local asset resolution were verified. README.md includes an optional local-server command.

These checks are not a full WCAG conformance assessment, a production application test, or a Figma-library validation. The existing BioMaster application and website have not been migrated. Dialog and drawer behavior is specified for future implementation, while the delivered interactions are visual examples. No scientific result or benchmark is asserted by the sample data.
