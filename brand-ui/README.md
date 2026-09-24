# BioMaster Visual System 1.0.0
2026-09-11 · Based on the approved Loop B identity

## Start here
Open **index.html** to browse the visual handbook. It includes light/dark themes, Chat/Notebook/Team specimens, reusable components, typography, color, layout, motion, and campaign templates. All assets are local; no installation, build step, or backend is required.

The handbook is Chinese; public-facing product and campaign examples are English. This is a design reference, not a running BioMaster application.

## For development
1. Read **GUIDELINES.zh-CN.md** for implementation rules and existing-repository token mapping.
2. Import **tokens.css**, followed by **components.css**, and use the bm-scope class.
3. Apply data-theme="light" or data-theme="dark" on the document or a containing element.
4. Keep logo assets unchanged. Components and campaigns share the same semantic tokens.
5. Use **responsive-check.html** for fixed 320, 390, 768 and 1280 CSS-pixel previews.

**build.py** owns palette, dimensions, motion and campaign composition. Run python3 build.py after editing it to regenerate tokens.json, tokens.css, tokens-data.js, TOKEN-REFERENCE.md, contrast-report.json and the three SVG templates. The script is offline and uses Python's standard library only.

## Deliverables
- index.html + handbook.css + handbook.js — interactive handbook.
- GUIDELINES.zh-CN.md — visual and product development specification.
- tokens.css + tokens.json + TOKEN-REFERENCE.md — design variables.
- components.css — framework-neutral reference components.
- assets/loop-b-light.png + assets/loop-b-app.png — byte-identical approved PNG originals.
- assets/Inter.ttf + Inter-LICENSE.txt — existing Inter font and official OFL license.
- templates/social-1200x630.svg — editable horizontal share graphic.
- templates/slide-1600x900.svg — editable 16:9 presentation cover.
- templates/square-1080x1080.svg — editable square campaign graphic.
- responsive-check.html — responsive preview utility.
- contrast-report.json + asset-checks.json + QA.md — scoped validation results.

SVG template text and shapes are editable; logos are embedded unchanged PNGs. This package does not contain a traced vector logo or a Figma component library. tokens.json uses the package's documented grouping, not a claimed universal import format.

The prior website and application source have not been migrated. Font copyright and license remain in the included license file.

## Optional local server
Run python3 -m http.server 8080 from this folder, then open http://localhost:8080.
