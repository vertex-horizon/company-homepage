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

The published URL typically follows this format:

`https://<your-github-username>.github.io/<repository-name>/`

## Notes

- Vite's `base` path is automatically generated from the repository name during production builds (reads `GITHUB_REPOSITORY` from GitHub Actions environment).
- To deploy locally to a custom path, manually adjust `base` in `vite.config.js`.
