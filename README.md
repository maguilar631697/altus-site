# Altus Energy — Corporate Website

Static website for **Altus Energy**, a wire harness and cable assembly manufacturer based in El Salvador.

🌐 **Live site:** [www.altus.com.sv](https://www.altus.com.sv)

## Overview

- **Static HTML/CSS/JS** — no build step required
- **Bilingual** — English (default) and Spanish toggle
- **Responsive** — mobile, tablet, desktop
- **Hosted on GitHub Pages**
- **Custom domain:** `www.altus.com.sv`

## Structure

```
altus-site/
├── index.html          # Main landing page
├── assets/
│   ├── styles.css      # All styles
│   └── app.js          # Language toggle + mobile nav
├── CNAME               # Custom domain config for GitHub Pages
├── .nojekyll           # Disable Jekyll processing
└── README.md           # This file
```

## Local Development

Just open `index.html` in a browser, or serve with any static HTTP server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deployment

This repo is configured for **GitHub Pages** from the `main` branch. Any push to `main` triggers a redeploy automatically.

### DNS Setup for www.altus.com.sv

In your DNS provider, configure:

| Type  | Host | Value                       |
|-------|------|-----------------------------|
| CNAME | www  | `<github-user>.github.io`   |
| A     | @    | 185.199.108.153             |
| A     | @    | 185.199.109.153             |
| A     | @    | 185.199.110.153             |
| A     | @    | 185.199.111.153             |

Then in GitHub repo: **Settings → Pages → Custom domain:** `www.altus.com.sv`

## Updating Content

All translatable text is marked with `data-i18n="key"` attributes. English content lives in the HTML; Spanish translations are in `assets/app.js`.

To edit:
1. Update the English text in `index.html`
2. Update the Spanish equivalent in the `translations.es` object in `assets/app.js`
3. Commit and push — GitHub Pages redeploys in ~1 min

## Tech

- Vanilla HTML/CSS/JS — zero dependencies
- Google Fonts (Inter, Playfair Display)
- Font Awesome 6.5 (icons via CDN)

---

© 2026 Altus Energy
