import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { env } from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { CHARTED_ROUTE_META, routeLanguageAlternates } from './src/charted/routeMetadata.js'
import { PARENT_SITE } from './src/charted/config.js'

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
 *   Export the built shell with route-specific metadata into each directory. The existing router
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
      const shell = readFileSync(path.join(dist, 'index.html'), 'utf-8')
      const escapeHTML = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
      for (const meta of Object.values(CHARTED_ROUTE_META)) {
        const directory = path.join(dist, meta.path.slice(1))
        mkdirSync(directory, { recursive: true })
        // 静态托管没有服务端重写；真实入口与客户端共享元数据，直接打开法语页也提供正确语言及搜索摘要。
        const headTags = [
          `<link rel="canonical" href="${escapeHTML(`${PARENT_SITE}${meta.path}`)}" />`,
          ...routeLanguageAlternates(meta).map((alternate) => `<link rel="alternate" hreflang="${alternate.lang}" href="${escapeHTML(`${PARENT_SITE}${alternate.path}`)}" data-charted-language />`),
          `<meta property="og:title" content="${escapeHTML(meta.title)}" />`,
          `<meta property="og:description" content="${escapeHTML(meta.description)}" />`,
          `<meta property="og:url" content="${escapeHTML(`${PARENT_SITE}${meta.path}`)}" />`,
          `<meta name="twitter:title" content="${escapeHTML(meta.title)}" />`,
          `<meta name="twitter:description" content="${escapeHTML(meta.description)}" />`,
        ].join('\n    ')
        const html = shell
          .replace(/<html lang="[^"]*">/, `<html lang="${meta.lang}">`)
          .replace(/<title>[^<]*<\/title>/, `<title>${escapeHTML(meta.title)}</title>`)
          .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeHTML(meta.description)}" />`)
          .replace('</head>', `    ${headTags}\n  </head>`)
        writeFileSync(path.join(directory, 'index.html'), html)
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), spaFallback()],
  base: '/',
})
