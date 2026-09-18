import { copyFileSync, mkdirSync, readFileSync } from 'node:fs'
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
 * Static entry points and SPA fallback for GitHub Pages.
 *
 * Why we need this:
 *   GitHub Pages is static. It can't rewrite all unknown paths to /index.html
 *   (the way Netlify/Vercel can). Public Charted routes need real index.html
 *   files so direct requests and hard reloads return HTTP 200.
 *
 * Trick:
 *   Copy the built shell into each route directory. The existing router
 *   strips trailing slashes and base '/' keeps assets rooted at the domain.
 *   Retain 404.html for unknown paths; it must not substitute for the public
 *   support or legal entry points.
 */
function spaFallback() {
  return {
    name: 'charted:spa-fallback-404',
    apply: 'build',
    closeBundle() {
      const dist = path.resolve('dist')
      copyFileSync(path.join(dist, 'index.html'), path.join(dist, '404.html'))
      for (const route of ['charted', 'charted/support', 'charted/privacy', 'charted/terms']) {
        const directory = path.join(dist, route)
        mkdirSync(directory, { recursive: true })
        copyFileSync(path.join(dist, 'index.html'), path.join(directory, 'index.html'))
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), spaFallback()],
  base: '/',
})
