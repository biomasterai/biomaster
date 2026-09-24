# BioMaster

BioMaster is an AI-assisted workbench for bioinformatics research. It brings project files, conversations, computational notebooks, team work, and specialist biology tools into one application. You bring your own LLM provider and remain responsible for checking the data, methods, and scientific conclusions.

[Website](https://biomasterai.github.io/biomaster/) · [Download BioMaster 2.0.0 Beta 1](https://github.com/biomasterai/biomaster/releases/tag/v2.0.0-beta.1) · [Installation and first-run guide](https://biomasterai.github.io/biomaster/guide.html)

## What you can do

- **Chat:** Give an agent a research goal, inspect its plan and tool use, and continue the task in a project directory.
- **Notebook:** Combine Markdown, Python, Bash, and Prompt cells while keeping files and experiment history close to the analysis.
- **Team:** Organize work as issues, delegate independent tasks, and review results and evidence.
- **Biology workbenches:** Open Motif for sequences and molecular designs, JBrowse 2 for genome browsing, Gosling for genomic visualization, and SmartFlow for registered workflows. Workbenches open from Chat projects.

BioMaster 2.0 uses separate Chat, Notebook, and Team project types. Choose the type when creating a project; a Notebook or Team project is not interchangeable with a Chat project.

## Download

The current public version is **2.0.0-beta.1**. Choose the package for the computer that will *run* BioMaster:

| System | Desktop application | WebUI archive |
| --- | --- | --- |
| macOS Apple silicon | [Download DMG](https://github.com/biomasterai/biomaster/releases/download/v2.0.0-beta.1/biomaster-2.0.0-beta.1-mac-arm64.dmg) | [Download ZIP](https://github.com/biomasterai/biomaster/releases/download/v2.0.0-beta.1/biomaster-web-2.0.0-beta.1-macos-arm64.zip) |
| macOS Intel | [Download DMG](https://github.com/biomasterai/biomaster/releases/download/v2.0.0-beta.1/biomaster-2.0.0-beta.1-mac-x64.dmg) | [Download ZIP](https://github.com/biomasterai/biomaster/releases/download/v2.0.0-beta.1/biomaster-web-2.0.0-beta.1-macos-x64.zip) |
| Ubuntu x64 | [Download DEB](https://github.com/biomasterai/biomaster/releases/download/v2.0.0-beta.1/biomaster-2.0.0-beta.1-linux-amd64.deb) | [Download TAR.GZ](https://github.com/biomasterai/biomaster/releases/download/v2.0.0-beta.1/biomaster-web-2.0.0-beta.1-linux-x64.tar.gz) |

The [release page](https://github.com/biomasterai/biomaster/releases/tag/v2.0.0-beta.1) also provides an Ubuntu AppImage, update files, release notes, and [SHA-256 checksums](https://github.com/biomasterai/biomaster/releases/download/v2.0.0-beta.1/SHA256SUMS.txt). Windows is not included in this release.

**Desktop or WebUI?** The desktop package opens BioMaster as an application. The WebUI package runs a BioMaster service on your computer or server and opens its interface in a browser; it is not a stand-alone webpage or a BioMaster-hosted cloud account. For remote use, keep the service private and connect through an SSH tunnel. See the [WebUI setup guide](https://biomasterai.github.io/biomaster/guide.html#launch).

## First run

1. On macOS, open the DMG and drag BioMaster to Applications. On Ubuntu, install the DEB with your package installer. For WebUI, extract the archive and run `./biomaster web` from its directory.
2. Complete the on-screen installation registration. If BioMaster finds earlier local data, choose whether to import it.
3. Open **Settings → Providers** and connect your LLM provider. You can use a listed provider or add an OpenAI-compatible or Anthropic-compatible endpoint with its base URL, API key, and exact model ID. BioMaster also supports editing its JSONC configuration directly; see the [configuration guide](https://biomasterai.github.io/biomaster/guide.html#connect-file).
4. Check **Settings → Models**, create a **Chat project**, select your model, and try a small request such as: “List the files in this project and tell me which one you would inspect first. Do not change them.”

Your LLM API key is for the provider you choose; BioMaster does not require you to send it to a BioMaster cloud service. In a remote WebUI setup, the project files and credentials live on the remote host, so use a host you trust.

Notebook execution may need a configured Python environment and packages. SmartFlow execution requires a suitable Java and Nextflow runtime. Those are feature-specific requirements, not prerequisites for opening the desktop app or WebUI.

## Beta notes and support

- The macOS Intel desktop build is **unsigned**. macOS may block its first launch; after verifying the download and checksum, use Finder’s Control-click → Open flow if needed. Automatic replacement of this unsigned build is not guaranteed.
- Neither macOS package is advertised as notarized. Keep backups of important project data and verify scientific outputs before relying on them.
- For installation details, model setup, and remote access, read the [getting-started guide](https://biomasterai.github.io/biomaster/guide.html).
- For questions or feedback, contact [biomaster@hkust-gz.edu.cn](mailto:biomaster@hkust-gz.edu.cn).

The [BioMaster 1.0 paper in *Patterns*](https://doi.org/10.1016/j.patter.2026.101611) describes the original research system; this release is the subsequent BioMaster 2.0 workbench. The [website](https://biomasterai.github.io/biomaster/#research) provides the citation and makes the version distinction clear.

This is BioMaster’s **public website and compiled-software distribution repository**. The BioMaster application source code is not published here. GitHub’s automatically generated “Source code” archives contain this website repository, not the private application source.
