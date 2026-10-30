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
- `src/charted/launch-assets.json` records exact source nodes, export hashes and web derivative hashes.
- `public/mapvoy/media/` contains complete 660/1320px WebP compositions and the dedicated 1200×630 Open Graph card. Illustrations preserve their original aspect ratio and sample travel data; they do not establish release or runtime acceptance.
- The stamp icon is exported from `life-footprints/Charted/AppIcon.icon` using Icon Composer. Current favicon URLs use `/mapvoy/icon/`; old `/charted/icon/` URLs serve the new icon for compatibility.
- Public artwork credits are at `/mapvoy/credits.html`.
- Product messaging follows `life-footprints/docs/growth/01-BRAND_AND_MESSAGING.md`. Prices and introductory offers are shown by the app at purchase time; the website does not hardcode them.
- `mapvoy.app` is a separate domain rollout. This repository continues to publish at `www.vertex-horizon.com` until that hosting and redirect setup is verified.

Build output contains real static entries for `/charted/`, `/charted/support/`, `/charted/privacy/`, `/charted/privacy/fr/`, `/charted/terms/`, and `/charted/terms/fr/`, each with its own canonical URL, language, title and social metadata. Use a plain static HTTP server for direct-link verification; do not rely on a preview server’s SPA fallback.
