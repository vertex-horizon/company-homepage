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
      return productSite ? html.replace('</head>', '<link rel="manifest" href="/manifest.webmanifest" /></head>').replaceAll('https://www.vertex-horizon.com/mapvoy/', 'https://mapvoy.app/mapvoy/') : html
    },
    closeBundle() {
      const dist = path.resolve(productSite ? 'dist-mapvoy' : 'dist')
      const routes = createRouteMetadata()
      const origin = productSite ? 'https://mapvoy.app' : PARENT_SITE
      const shell = readFileSync(path.join(dist, 'index.html'), 'utf-8')
        .replace(/^\s*<(?:link rel="canonical"|meta (?:property="og:(?:title|description|url|site_name)"|name="twitter:(?:title|description)"))[^>]*\/>\s*$/gm, '')
      for (const meta of productSite ? Object.values(routes) : []) {
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
        const manifest = JSON.parse(readFileSync('public/mapvoy/manifest.webmanifest', 'utf-8'))
        manifest.start_url = '/'
        manifest.scope = '/'
        writeFileSync(path.join(dist, 'manifest.webmanifest'), JSON.stringify(manifest, null, 2))
      }
      // Pages 不支持自定义 HTTP 301；静态入口提供 meta refresh、replace 与可点击降级，
      // 并以 canonical 指向新域名。仅覆盖已知页面，绝不覆盖 /mapvoy 下的图片等资产。
      for (const prefix of ['/charted', '/mapvoy']) {
        for (const meta of Object.values(routes)) {
          const suffix = meta.path === '/' ? '' : meta.path
          const target = `https://mapvoy.app${suffix || '/'}`
          const directory = path.join(dist, `${prefix}${suffix}`.slice(1))
          mkdirSync(directory, { recursive: true })
          writeFileSync(path.join(directory, 'index.html'), `<!doctype html>
<html lang="${meta.lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Mapvoy has moved</title><link rel="canonical" href="${target}"><meta http-equiv="refresh" content="0;url=${target}"><script>location.replace(${JSON.stringify(target)}+location.search+location.hash)</script></head><body><p>Mapvoy has moved to <a href="${target}">${target}</a>.</p></body></html>`)
        }
      }
      const urls = productSite ? Object.values(routes).map(meta => `https://mapvoy.app${meta.path}`) : [PARENT_SITE + '/']
      writeFileSync(path.join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(url => `<url><loc>${url}</loc></url>`).join('')}</urlset>`)
      writeFileSync(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`)
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
