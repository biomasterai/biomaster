# Publication and visual sources

Verified September 7, 2026.

## BioMaster 1.0 publication

- Article: *BioMaster: Multi-agent system for automated bioinformatics analysis workflow*, Su, Feng, Lu et al., Patterns 7(8), 101611 (2026).
- DOI: https://doi.org/10.1016/j.patter.2026.101611
- Bibliographic record: https://pubmed.ncbi.nlm.nih.gov/42630761/
- Official issue: https://www.cell.com/issue/S2666-3899(25)X0009-X#closeFullCover
- Publisher's announcement: https://www.linkedin.com/posts/patterns-cellpress_patterns-august-2026-activity-7495447684447805441-X5O6

The official issue page identifies BioMaster in its “On the cover” description. The issue date and cover are August 14, 2026, Volume 7, Issue 8. The issue's PII contains 25; use the date displayed by the publisher, not a date inferred from its URL.

The owner identifies the published system as BioMaster 1.0 and the current workbench as BioMaster 2.0. The website preserves that distinction. It makes no claim that the paper evaluates 2.0 or that the journal endorses the current software.

The on-page APA 7, Vancouver and BibTeX citations were checked against the [PubMed record](https://pubmed.ncbi.nlm.nih.gov/42630761/) and [Crossref DOI metadata](https://api.crossref.org/works/10.1016/j.patter.2026.101611) on September 24, 2026. Both list 14 authors in the same order, title, *Patterns* 7(8), article 101611, year 2026 and DOI 10.1016/j.patter.2026.101611. PubMed distinguishes the July 7 electronic posting from the August 14 issue date; the reference uses the publication year 2026.

## Official cover image

- Display mode: local copy at `assets/patterns-august-2026-biomaster-cover.jpg`, so the cover remains visible when Cell Press blocks external image requests.
- Source: the official [Patterns by Cell Press August 2026 issue post](https://www.linkedin.com/posts/patterns-cellpress_patterns-august-issue-is-live-httpslnkdin-activity-7495447684447805441-F8I9), first page of its `Patterns-August-2026` document. The publisher's direct image URL returned HTTP 403 during verification: https://www.cell.com/cms/asset/atypon:cms:attachment:img:d234e6:rev:1786605528981-11279:pii:S2666389925X0009X/cover.tif.jpg
- Local image dimensions: 1440 × 1920 pixels.
- Artist/image credit: Qing Zhang, as named on the official issue page.
- No recoloring, cropping, overlays on the artwork, or reconstruction are applied. If the local image cannot load, the page retains a link to the official issue.
- The image remains credited to its original artist/publisher; no ownership or open-license claim is made. The displayed cover links to the official issue and its caption links to the official Patterns post.
- Local cover proposals and mockups were not used.

## Current product and brand

BioMaster 2.0 product descriptions are based on the current repository's `README.BIOMASTER.zh-CN.md` and the owner's version and release-distribution instructions. Product examples are labelled illustrations. The approved Loop B images are retained unchanged.

The biology-workbench section follows `biomaster2/packages/app/src/pages/extensions-model.ts` for the four workbench names and capabilities (Motif, JBrowse 2, Gosling, SmartFlow) and the listed scientific connectors. The Chat-project selection behavior is implemented in `biomaster2/packages/app/src/pages/extensions.tsx` and `extensions-chat-project-picker.ts`. The workbench images are cropped, JPEG-compressed captures of the actual bundled BioMaster workbench UIs, opened in English in isolated browser acceptance fixtures with demo data. They are not illustrations, scientific results, or screenshots of a production installer:

- `assets/workbenches/motif.jpg`: English capture of the bundled Motif app in `packages/app/e2e/website-workbench-capture.spec.ts`, showing the pUC19 demo vector and sequence map.
- `assets/workbenches/jbrowse.jpg`: English capture from the same test file, showing an inline demo chromosome and gene annotations.
- `assets/workbenches/gosling.jpg`: English capture from the same test file, showing Gosling's bundled `features` demo preset.
- `assets/workbenches/smartflow.jpg`: English capture from a local `mcp-app-smartflow-live.spec.ts` run on September 24, 2026, after a controlled, test-only Nextflow run completed. It shows a functioning completed-run view, not a biological workflow. A temporary language-switch and capture step was removed from the test after the screenshot was produced; the original test was left unchanged.

The setup guide follows the checked desktop data paths in `packages/desktop/src/main/server.ts`, JSONC loading in `packages/opencode/src/config/config.ts`, provider creation in `packages/app/src/components/dialog-custom-provider-form.ts`, credentials in `packages/opencode/src/auth/index.ts`, and the packaged WebUI `README.txt`. The website links directly to the 2.0.0-beta.1 assets in the public GitHub prerelease.

## Contributor credits and membership

The owner supplied the version-specific roles, current/former membership, and current academic titles on September 7, 2026. The BioMaster 1.0 paper's author list, verified against PubMed and Crossref, supplies the complete author names. The website's role descriptions are owner-supplied credits, not a transcription of the paper's author-contribution statement.

- BioMaster 1.0 methodology and system design: Yanlin Zhang and Houcheng Su. Experimental design: Yanlin Zhang, Houcheng Su, and Junning Feng. Experimental implementation: the other 13 paper authors, including Houcheng Su and Junning Feng.
- BioMaster 2.0 methodology and system design: Yanlin Zhang. Skills management: Yucheng Xu and Yawen Lu. Some agentic flows in Chat mode: Houcheng Su.
- Current members: Yanlin Zhang (Assistant Professor), Houcheng Su, Junning Feng, Yucheng Xu, Yawen Lu, and Yusen Hou (the other five are PhD students). All remaining BioMaster 1.0 authors are former members; no former academic titles are inferred.
- English names consistently use given name followed by surname. Display order groups membership and contribution roles; it does not replace the paper's author order.
