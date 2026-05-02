import { copyFileSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { env } from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const packageJson = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url), 'utf-8'),
)

// Reserved for future per-repo deploys (e.g., gh-pages mode without CNAME).
// eslint-disable-next-line no-unused-vars
const repositoryName =
  env.GITHUB_REPOSITORY?.split('/')[1] ?? packageJson.name

/**
 * SPA fallback for GitHub Pages.
 *
 * Why we need this:
 *   GitHub Pages is static. It can't rewrite all unknown paths to /index.html
 *   (the way Netlify/Vercel can). Without this, /charted/privacy on a hard
 *   reload would 404.
 *
 * Trick:
 *   After build, duplicate dist/index.html → dist/404.html.
 *   GitHub Pages serves 404.html for any unmatched path, so the SPA still
 *   loads and our path-based router renders the correct page.
 *
 * Cost: a 404 HTTP status on deep-link reloads (browsers don't care, App
 * Store reviewers don't care — the page renders correctly).
 */
function spaFallback() {
  return {
    name: 'charted:spa-fallback-404',
    apply: 'build',
    closeBundle() {
      const dist = path.resolve('dist')
      copyFileSync(path.join(dist, 'index.html'), path.join(dist, '404.html'))
    },
  }
}

export default defineConfig({
  plugins: [react(), spaFallback()],
  base: '/',
})
