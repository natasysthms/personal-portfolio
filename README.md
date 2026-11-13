# Natasya — Personal Portfolio

Single-page portfolio reproducing the Google Stitch design (Syne / Epilogue / Space Mono, lavender-ink palette, hard-shadow cards, marquee ticker).

## Structure
```
index.html        page markup (hero, about, contact are static)
css/style.css     design tokens + all styles (no build step, no Tailwind needed)
js/script.js      content data + rendering + interactions
images/           my photo.png, Bingo.png, Magangin.png, UBAccess.png, unboxed.png
assets/CV.pdf     your CV (used by "Download CV")
```

## Images
Each image loads from `images/` first. If a file is missing it falls back to the original Stitch-hosted URL (temporary), then hides. Add the five files and the fallbacks are never used. Keep the portrait as a transparent PNG.

## Updating content
Open `js/script.js` — everything editable is at the top:
- `EMAIL` – shown and copied by the contact button
- `PROJECTS` – set `url` to a real case-study link to activate "View Project" (empty shows "Case study coming soon")
- `SKILLS`, `EXPERIENCE`, `COURSES` – plain arrays

Static text (hero headline, about paragraph, GPA, TOEFL, semester) lives in `index.html`. LinkedIn/GitHub buttons point to the site roots; replace with your profile URLs in the contact section.

## Notes
- The original Stitch file displayed one email but copied a different placeholder; now both use `EMAIL`.
- A mobile menu button was added below 1280px (the Stitch nav had none).
- Fonts and icons load from Google Fonts, so the first view needs internet.
- Run locally: open `index.html`, or `python3 -m http.server` in this folder.
- Deploy: upload the folder to GitHub Pages, Netlify or Vercel.
