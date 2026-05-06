# VamiSec Compliance Module — Landing Page

Static landing page for the VamiSec Compliance Module product.

## Files

```
compliance-module-landing-page/
├── index.html    — Main landing page (all sections, full copy)
├── styles.css    — All styles (dark theme, responsive, animations)
├── script.js     — Scroll effects, nav, counter animations
└── README.md     — This file
```

## Running locally

No build step required. Open directly in a browser:

```
# Option 1 — just open the file
Open index.html in any modern browser

# Option 2 — local dev server (avoids CORS issues with Google Fonts)
npx serve .
# or
python -m http.server 8080
# then visit http://localhost:8080
```

## Deployment

Drop the three files (`index.html`, `styles.css`, `script.js`) on any static host:

- Netlify / Vercel: drag-and-drop the folder or connect a Git repo
- nginx / Apache: serve the directory as a static root
- GitHub Pages: push to a `gh-pages` branch

No server-side processing, no dependencies, no build tools.

## Customisation checklist

### Copy
- All copy is in `index.html`. Search for `<!-- ` comments that mark configurable sections.
- Hero headline: `<h1 id="hero-heading">`
- Stats bar numbers: `data-count` attributes on `.stat-item__value` elements
- Framework cards: the `<article class="framework-card">` blocks in the `#frameworks` section
- Footer legal entity and year: bottom of `<footer>`

### Links
Search for `href="#"` placeholders and replace with real URLs:
- Demo booking URL (appears 3× in nav and CTA)
- Sign-in / login URL (nav)
- Contact / sales URL (CTA section)
- Company pages (footer)

### Framework coverage status badges
Each framework card has a `<span class="badge">` at the bottom.
Values: `badge--teal` (Mapped), `badge--in-progress` (In progress), `badge--draft` (Planned).
Update the text and class as coverage evolves.

### Colours
All colours are CSS custom properties in `:root` at the top of `styles.css`.
Primary accent: `--teal: #00c4b4`. Change once to update across the entire page.

### Dashboard mock (hero)
The hero dashboard is pure HTML/CSS — no JavaScript-rendered chart library.
- Metric numbers: change `data-count` attribute values
- Progress bars: change `data-pct` attribute values (0–100)
- Finding rows: edit the `.dash-finding-row` blocks

### Fonts
Google Fonts (Inter + JetBrains Mono) are loaded via `<link>` in `<head>`.
For fully offline / air-gapped deployment, download the fonts and update the
`@import` or `<link>` references accordingly.

## Browser support

Targets modern evergreen browsers (Chrome, Firefox, Safari, Edge — last 2 versions).
`IntersectionObserver` and CSS custom properties are used; both are broadly supported.
No IE11 support.

## SEO

- `<title>` and `<meta name="description">` are in `<head>` — update per environment
- Open Graph tags are included for social sharing
- All interactive elements have ARIA labels
- Semantic HTML5 elements throughout (`<nav>`, `<section>`, `<article>`, `<footer>`)
