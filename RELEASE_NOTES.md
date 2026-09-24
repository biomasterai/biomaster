# BioMaster 2.0.0 Beta 1

BioMaster 2.0.0-beta.1 is the first public beta distribution of the current desktop and local WebUI workbench. The application source code is not published in this repository or attached to this release.

| System | Desktop | Local WebUI |
| --- | --- | --- |
| macOS Apple silicon | `biomaster-2.0.0-beta.1-mac-arm64.dmg` | `biomaster-web-2.0.0-beta.1-macos-arm64.zip` |
| macOS Intel | `biomaster-2.0.0-beta.1-mac-x64.dmg` | `biomaster-web-2.0.0-beta.1-macos-x64.zip` |
| Ubuntu x64 | `biomaster-2.0.0-beta.1-linux-amd64.deb` | `biomaster-web-2.0.0-beta.1-linux-x64.tar.gz` |

An Ubuntu AppImage is also provided. The macOS ZIPs and blockmaps, and the `beta-mac.yml` / `beta-linux.yml` files, support desktop updates. Use `SHA256SUMS.txt` to verify downloaded assets.

## First run

Desktop: install the package for your architecture and open BioMaster. WebUI: extract the archive, keep its included files together, and run `./biomaster web` from the extracted directory. For a remote host, keep the WebUI private and use an SSH tunnel. See the [installation and model configuration guide](https://biomasterai.github.io/biomaster/guide.html).

Bring your own LLM provider API key. BioMaster provides Chat, Notebook, Team, and biology workbenches. Notebook Python packages and SmartFlow's Java/Nextflow runtime may require separate setup when those features are used.

## Beta limitations

- Windows is not included.
- The macOS Intel desktop build is unsigned; macOS may block its first launch. After verifying that the DMG came from this release, use Finder's Control-click → Open flow if needed. Automatic replacement of that unsigned build is not guaranteed.
- macOS notarization has not been confirmed for these beta packages. Gatekeeper may prompt on first launch.
- This is beta software; keep backups of important project data and review scientific results before relying on them.

Questions or feedback: [biomaster@hkust-gz.edu.cn](mailto:biomaster@hkust-gz.edu.cn).
