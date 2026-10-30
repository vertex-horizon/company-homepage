import { copyFileSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createRouteMetadata, routeLanguageAlternates } from './src/charted/routeMetadata.js'
import { PARENT_SITE } from './src/charted/config.js'

const escapeHTML = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')

// 公司站与产品站共用源码，但有独立的静态产物和域名，避免一个 Pages 站点抢占另一个域名。
function staticEntries(productSite) {
  return {
    name: 'mapvoy:static-entries',
    apply: 'build',
    transformIndexHtml(html) {
      return productSite ? html.replace('/charted/manifest.webmanifest', '/manifest.webmanifest').replaceAll('https://www.vertex-horizon.com/mapvoy/', 'https://mapvoy.app/mapvoy/') : html
    },
    closeBundle() {
      const dist = path.resolve(productSite ? 'dist-mapvoy' : 'dist')
      const routes = createRouteMetadata(productSite)
      const origin = productSite ? 'https://mapvoy.app' : PARENT_SITE
      const shell = readFileSync(path.join(dist, 'index.html'), 'utf-8')
        .replace(/^\s*<(?:link rel="canonical"|meta (?:property="og:(?:title|description|url|site_name)"|name="twitter:(?:title|description)"))[^>]*\/>\s*$/gm, '')
      for (const meta of Object.values(routes)) {
        const directory = path.join(dist, meta.path.slice(1))
        mkdirSync(directory, { recursive: true })
        const headTags = [
          `<link rel="canonical" href="${escapeHTML(`${origin}${meta.path}`)}" />`,
          ...routeLanguageAlternates(meta, routes).map((alternate) => `<link rel="alternate" hreflang="${alternate.lang}" href="${escapeHTML(`${origin}${alternate.path}`)}" data-charted-language />`),
          `<meta property="og:title" content="${escapeHTML(meta.title)}" />`,
          '<meta property="og:site_name" content="Mapvoy" />',
          `<meta property="og:description" content="${escapeHTML(meta.description)}" />`,
          `<meta property="og:url" content="${escapeHTML(`${origin}${meta.path}`)}" />`,
          `<meta name="twitter:title" content="${escapeHTML(meta.title)}" />`,
          `<meta name="twitter:description" content="${escapeHTML(meta.description)}" />`,
          '<meta name="apple-itunes-app" content="app-id=6761878521" />',
        ].join('\n    ')
        const html = shell
          .replace(/<html lang="[^"]*">/, `<html lang="${meta.lang}">`)
          .replace(/<title>[^<]*<\/title>/, `<title>${escapeHTML(meta.title)}</title>`)
          .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeHTML(meta.description)}" />`)
          .replace('</head>', `    ${headTags}\n  </head>`)
        writeFileSync(path.join(directory, 'index.html'), html)
      }
      if (productSite) {
        writeFileSync(path.join(dist, 'CNAME'), 'mapvoy.app\n')
        const manifest = JSON.parse(readFileSync('public/charted/manifest.webmanifest', 'utf-8'))
        manifest.start_url = '/'
        manifest.scope = '/'
        writeFileSync(path.join(dist, 'manifest.webmanifest'), JSON.stringify(manifest, null, 2))
      }
      copyFileSync(path.join(dist, 'index.html'), path.join(dist, '404.html'))
    },
  }
}

export default defineConfig(({ mode }) => {
  const productSite = mode === 'mapvoy'
  return {
    plugins: [react(), staticEntries(productSite)],
    define: { 'import.meta.env.VITE_SITE': JSON.stringify(productSite ? 'mapvoy' : 'company') },
    build: { outDir: productSite ? 'dist-mapvoy' : 'dist' },
    base: '/',
  }
})
