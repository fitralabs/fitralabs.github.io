# Fitra Labs Website

Premium studio homepage and product microsites for the "Simply" line.

- Studio portal: `/`
- Simply Quran: `/quran/`
- Simply Qibla: `/qibla/`

## Run Locally

This site is plain HTML/CSS and uses root-relative paths (for example `/base.css`, `/quran/`), so run it behind a local HTTP server from the repo root.

### Option 1 (recommended): `serve` via `npx`

```powershell
cd "d:\Development\FitraLabs"
npx --yes serve -l 8080
```

Open:

- `http://localhost:8080/`
- `http://localhost:8080/quran/`
- `http://localhost:8080/qibla/`

Stop with `Ctrl+C`.

### Option 2: Python (if installed)

```powershell
cd "d:\Development\FitraLabs"
python -m http.server 8080
```

## Project Structure

```text
.
├─ index.html
├─ base.css
├─ studio.css
├─ quran.css
├─ qibla.css
├─ quran/
│  └─ index.html
├─ qibla/
│  └─ index.html
├─ simplyquran/
│  └─ index.html   (legacy redirect to /quran/)
├─ simplyqibla/
│  └─ index.html   (legacy redirect to /qibla/)
└─ assets/
   ├─ fitra_labs-mark.svg
   ├─ fitra-labs-mark.png
   └─ simply-quran/
      └─ screenshots/
         ├─ theme-light.png
         ├─ theme-sepia.png
         └─ theme-dark.png
```

## Deployment Notes (GitHub Pages + Cloudflare)

- Hosting: GitHub Pages
- DNS / domain: Cloudflare for `fitralabs.app`
- Keep `CNAME` in repo root for the custom domain.
- After deploy, sanity check:
  - `/`
  - `/quran/`
  - `/qibla/`
  - `/simplyquran/` and `/simplyqibla/` redirects
