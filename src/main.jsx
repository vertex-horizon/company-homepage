import { Component, StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

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

/**
 * Path-based router.
 *
 * Why no react-router? — One dependency, one entry, one decision.
 * For a 2-app monorepo (VH parent + Charted sub-brand) plus a few static
 * pages (privacy/terms/support), pathname matching beats a 50KB lib.
 *
 * Routes:
 *   /                    → Vertex Horizon home
 *   /charted             → Charted marketing landing
 *   /charted/privacy     → Privacy Policy
 *   /charted/terms       → Terms of Use
 *   /charted/support     → Support
 *
 * Anything not matching falls back to VH home.
 */

const path = window.location.pathname

const VHApp = lazy(() => import('./App.jsx'))
const ChartedApp = lazy(() => import('./charted/ChartedApp.jsx'))

const isCharted = path === '/charted' || path.startsWith('/charted/')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <Suspense fallback={null}>
        {isCharted ? <ChartedApp /> : <VHApp />}
      </Suspense>
    </ErrorBoundary>
  </StrictMode>,
)
