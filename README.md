# BioMaster website and brand UI

Static website, download entry points, and brand UI reference for BioMaster. The public distribution repository hosts this site through GitHub Pages and publishes installers through GitHub Releases. BioMaster application source code is not included while it remains under review.

## Website

The English website lives at the repository root. Its current product illustrations use the blue-sidebar/white-workspace appearance of BioMaster 2.0; the historical brand reference remains in `brand-ui/`. It includes:

- BioMaster 2.0 project model and Chat / Notebook / Team interface illustrations.
- Biology-specific workbench showcase for Motif, JBrowse 2, Gosling, and SmartFlow, with a guide to opening them from Chat projects. These are English captures of bundled workbenches using demo data, not claims about biological results.
- BioMaster 1.0 Patterns cover article, publisher links and on-page APA, Vancouver and BibTeX citations with copy buttons.
- Version-specific contributors and a getting-started guide.

Open `index.html` directly, or preview locally:

```sh
python3 -m http.server 8080
```

Then open <http://localhost:8080/>. The site requires no package installation or build step. Logo, font, and Patterns cover assets are local. When the cover cannot load, a link to the publisher's issue page remains available. See [SOURCES.md](SOURCES.md) for attribution.

### Main files

| File | Purpose |
| --- | --- |
| `index.html` | Homepage, research and contributors |
| `guide.html` | Getting-started guide |
| `styles.css`, `design-tokens.css`, `brand.css`, `site-refresh.css` | Layout, colors, typography and current interface illustrations |
| `script.js` | Tabs, navigation, citation controls and release links |
| `site-config.js` | Installer and plugin destinations |
| `assets/` | Logos, Inter font, Patterns cover and font license |

`site-config.js` keeps repository, installer-release and plugin URLs separate. Installer links point to the BioMaster public distribution repository; optional destinations stay hidden until supplied.

BioMaster 2.0.0-beta.1 desktop and WebUI packages for macOS Apple silicon, macOS Intel, and Ubuntu x64 are available from the [public prerelease](https://github.com/biomasterai/biomaster/releases/tag/v2.0.0-beta.1). The application source code is not included in this repository or its release assets.

## Brand UI

[`brand-ui/`](brand-ui/) contains the original **BioMaster Visual System 1.0.0**, supplied from `biomaster-visual-system-20260911`. Its source files are preserved unchanged, excluding macOS metadata.

- [Interactive handbook](brand-ui/index.html)
- [Brand UI README](brand-ui/README.md)
- [Visual and development guidelines](brand-ui/GUIDELINES.zh-CN.md)
- [CSS tokens](brand-ui/tokens.css) and [JSON tokens](brand-ui/tokens.json)
- [Reference components](brand-ui/components.css)
- [Campaign templates](brand-ui/templates/)

With the local server above, open <http://localhost:8080/brand-ui/>. The handbook includes light/dark themes, Chat/Notebook/Team specimens and responsive previews. It is a visual reference; the examples do not execute research tasks.

The original logo PNGs are retained. Font licensing information is included alongside the Inter files. This sync does not include later unapproved palette proposals.
