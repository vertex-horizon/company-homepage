# Vertex Horizon Inc. Company Homepage

Vertex Horizon’s company homepage and Mapvoy product website, built with React + Vite. The public product name is Mapvoy; the existing `/charted/…` routes remain available for installed apps and shared links.

## Local Development

```bash
npm install
npm run dev
```

Default address: `http://localhost:5173`

## Production Build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

A GitHub Actions workflow is included at `/.github/workflows/deploy.yml`.

1. Push your code to the `main` branch of your GitHub repository.
2. Open repository settings: `Settings -> Pages`.
3. Under `Build and deployment`, select `Source: GitHub Actions`.
4. Every subsequent push to `main` will trigger an automatic deployment.

The production site uses the custom domain in `public/CNAME`:

`https://www.vertex-horizon.com/`

## Notes

- Vite uses `base: '/'` for the production custom domain.
- The build generates directory `index.html` entries for `/charted`, `/charted/support`, `/charted/privacy`, and `/charted/terms`. GitHub Pages can redirect to the trailing-slash URL and serve HTTP 200 while the existing client router selects the page.
- `404.html` remains the SPA fallback for unknown paths; public support and legal links use the generated entries.
- Verify direct requests after deployment, including refreshes of the support, privacy, and terms pages. `vite preview` alone is insufficient for this check because its SPA fallback can hide missing static files.

## Mapvoy brand and launch artwork

Current artwork comes from **Charted Product V2 → 10 · 商店与上线物料**, page `1041:2` in file `ir3wSrI7a6lgSj6I48afVD`. The website uses the October 29, 2026 launch compositions, not the older AppStore pipeline drafts.

- [Figma source page](https://www.figma.com/design/ir3wSrI7a6lgSj6I48afVD?node-id=1041-2)
- `src/charted/showcase-assets.json` records the independent scene, phone and share-card layers used by the current homepage. `launch-assets.json` retains the original launch-export provenance and Open Graph card hash.
- `HomeShowcase.jsx` / `HomeShowcase.css` compose a viewport-filling Earth hero, a three-style scene viewer with native-dialog expansion, three complete phone views, and a wide share-card gallery. The company page also uses the independent landscape scene.
- `public/mapvoy/scenes/` serves proportionally encoded scene, phone and card images. The Earth background has 1280/1920/3840px variants from the original 3840×1646 source. Scene artwork can bleed at the viewport edge; phone UI and share cards remain complete with their original aspect ratios.
- `public/mapvoy/media/` retains launch-export URLs and the dedicated 1200×630 Open Graph card. All imagery uses sample travel data and does not establish release or runtime acceptance.
- The stamp icon is exported from `life-footprints/Charted/AppIcon.icon` using Icon Composer. Current favicon URLs use `/mapvoy/icon/`; old `/charted/icon/` URLs serve the new icon for compatibility.
- Public artwork credits are at `/mapvoy/credits.html`.
- Product messaging follows `life-footprints/docs/growth/01-BRAND_AND_MESSAGING.md`. Prices and introductory offers are shown by the app at purchase time; the website does not hardcode them.
- `mapvoy.app` is a separate domain rollout. This repository continues to publish at `www.vertex-horizon.com` until that hosting and redirect setup is verified.

Build output contains real static entries for `/charted/`, `/charted/support/`, `/charted/privacy/`, `/charted/privacy/fr/`, `/charted/terms/`, and `/charted/terms/fr/`, each with its own canonical URL, language, title and social metadata. Use a plain static HTTP server for direct-link verification; do not rely on a preview server’s SPA fallback.

## Product domain deployment

`npm run build:mapvoy` exports the same product UI at `/`, with direct `/support/`, `/privacy/`, `/privacy/fr/`, `/terms/`, and `/terms/fr/` entries and `https://mapvoy.app` canonical metadata. Output is isolated in ignored `dist-mapvoy/`; the normal company build remains in `dist/`.

The deployment-only repository [mapvoy-homepage](https://github.com/vertex-horizon/mapvoy-homepage) builds this source from a verified mainline commit and hosts the product domain. After merging source changes, run:

```sh
gh workflow run deploy.yml --repo vertex-horizon/mapvoy-homepage -f source_ref=<full-main-SHA>
```

No copied product source or cross-repository deployment token is required.
