# Vertex Horizon Inc. Company Homepage

A single-page company website built with React + Vite, featuring a premium, cutting-edge design centered on AI-driven human-computer interaction innovation.

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
