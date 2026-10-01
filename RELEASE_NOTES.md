# BioMaster 2.0.0 Beta 2

This beta updates the macOS desktop and local WebUI builds from the latest `dev` source checked on October 2, 2026 (`b57e50c358c5332050506344b16c2a83d97f99a5`). The verified release build uses source commit `aa1df7e17ac43f5a8bab47f1b637ef091eac1a2c`.

| macOS system | Desktop installer | Local WebUI |
| --- | --- | --- |
| Apple Silicon | `biomaster-2.0.0-beta.2-mac-arm64.dmg` | `biomaster-web-2.0.0-beta.2-macos-arm64.zip` |
| Intel | `biomaster-2.0.0-beta.2-mac-x64.dmg` | `biomaster-web-2.0.0-beta.2-macos-x64.zip` |

The desktop ZIPs, blockmaps, and `beta-mac.yml` support beta updates. Verify downloads with `SHA256SUMS.txt`. This release contains macOS builds only.

## Install

Download the DMG for your Mac's processor, open it, and move BioMaster to Applications. To use the local WebUI, extract the matching archive and run `./biomaster web` from its directory. See the [installation and model configuration guide](https://biomasterai.github.io/biomaster/guide.html).

## Beta limitations

These beta packages are not Developer ID notarized. The Intel app is unsigned; the Apple Silicon app has a development signature. Gatekeeper may prompt on first launch; after verifying the download, use Finder's Control-click → Open flow if needed. Bring your own LLM provider API key and keep backups of important project data.

Questions or feedback: [biomaster@hkust-gz.edu.cn](mailto:biomaster@hkust-gz.edu.cn).
