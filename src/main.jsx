import { Component, StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { IS_PRODUCT_SITE } from './charted/config.js'

/**
 * Top-level Error Boundary.
 *
 * Without this, any uncaught error in a child component (or in lazy-loaded
 * module evaluation) results in a totally blank page — no signal to the
 * user that something went wrong, no way to recover.
 *
 * In dev: also dumps the stack to console for easy debugging.
 * In prod: shows a minimalist fallback. Stack still goes to console for
 * users who open DevTools, but stays out of the visible UI.
 */
class ErrorBoundary extends Component {
  state = { error: null }
  static getDerivedStateFromError(error) { return { error } }
  componentDidCatch(error, info) {
    console.error('[Charted ErrorBoundary]', error, info?.componentStack)
  }
  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0a0a0f',
            color: '#f5f7fb',
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
            padding: '2rem',
            textAlign: 'center',
          }}
        >
          <h1 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '0.75rem' }}>
            Something went wrong.
          </h1>
          <p style={{ color: 'rgba(245, 247, 251, 0.6)', maxWidth: 420, lineHeight: 1.6 }}>
            Try refreshing the page. If it keeps happening, please email{' '}
            <a href="mailto:contact@vertex-horizon.com" style={{ color: '#38BDF8' }}>
              contact@vertex-horizon.com
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            style={{
              marginTop: '1.5rem',
              padding: '0.75rem 1.5rem',
              background: '#f5f7fb',
              color: '#0a0a0f',
              border: 'none',
              borderRadius: 999,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Reload
          </button>
        </div>
      )
    }
    return this.props.children
  }
}

// 产品官网只在 mapvoy.app 根路径运行。公司站保留品牌别名与旧链接的跳转，
// query / hash 原样带走，避免已发布 App 的政策入口及推广链接失效。
const path = window.location.pathname

const VHApp = lazy(() => import('./App.jsx'))
const ChartedApp = lazy(() => import('./charted/ChartedApp.jsx'))

const alias = path.match(/^\/(?:charted|mapvoy)(?=\/|$)(.*)/)
if (alias) {
  window.location.replace(`https://mapvoy.app${alias[1] || '/'}${window.location.search}${window.location.hash}`)
}
const isCharted = IS_PRODUCT_SITE

if (!alias) createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <Suspense fallback={null}>
        {isCharted ? <ChartedApp /> : <VHApp />}
      </Suspense>
    </ErrorBoundary>
  </StrictMode>,
)
