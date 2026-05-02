import { useEffect, useRef, useState, useCallback } from 'react'
import './ChartedApp.css'

import Home from './pages/Home.jsx'
import Privacy from './pages/Privacy.jsx'
import Terms from './pages/Terms.jsx'
import Support from './pages/Support.jsx'
import { Stars, CursorGlow } from './effects.jsx'
import { APP_STORE_URL, SUPPORT_EMAIL, PARENT_SITE } from './config.js'

/**
 * Charted sub-brand site.
 *
 * Internal routing without react-router (kept lightweight).
 * Listens to popstate for back/forward; pushes state for in-app links.
 *
 * Routes (relative to /charted prefix):
 *   /charted            → <Home />
 *   /charted/privacy    → <Privacy />
 *   /charted/terms      → <Terms />
 *   /charted/support    → <Support />
 */

function getRoute() {
  const path = window.location.pathname.replace(/\/+$/, '') // strip trailing slash
  if (path === '/charted') return 'home'
  if (path === '/charted/privacy') return 'privacy'
  if (path === '/charted/terms') return 'terms'
  if (path === '/charted/support') return 'support'
  return 'home' // unknown sub-route → home
}

export default function ChartedApp() {
  const [route, setRoute] = useState(getRoute)

  useEffect(() => {
    const handlePop = () => setRoute(getRoute())
    window.addEventListener('popstate', handlePop)
    return () => window.removeEventListener('popstate', handlePop)
  }, [])

  // Scroll to top on route change (better than browsers' restore for SPA-as-MPA UX)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [route])

  const navigate = useCallback((to) => {
    if (window.location.pathname === to) return
    window.history.pushState({}, '', to)
    setRoute(getRoute())
  }, [])

  // Update <title> + meta tags per page (SEO + social share previews)
  useEffect(() => {
    const meta = META[route]
    if (!meta) return
    document.title = meta.title

    // Set or create a meta tag, by either name= or property=
    const setMeta = (key, attr, value) => {
      let tag = document.querySelector(`meta[${attr}="${key}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attr, key)
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', value)
    }

    setMeta('description', 'name', meta.description)
    setMeta('og:title', 'property', meta.title)
    setMeta('og:description', 'property', meta.description)
    setMeta('twitter:title', 'name', meta.title)
    setMeta('twitter:description', 'name', meta.description)
  }, [route])

  // Global ambient effects — only on Home (legal pages stay distraction-free)
  const isHome = route === 'home'

  return (
    <div className="charted-app">
      {isHome && <Stars />}
      {isHome && <CursorGlow />}
      <Nav navigate={navigate} />
      <main className="charted-main">
        {route === 'home' && <Home navigate={navigate} />}
        {route === 'privacy' && <Privacy navigate={navigate} />}
        {route === 'terms' && <Terms navigate={navigate} />}
        {route === 'support' && <Support navigate={navigate} />}
      </main>
      <Footer navigate={navigate} />
    </div>
  )
}

/* ────────────────────────────────────────────────────────────
 * SEO meta per route
 * ──────────────────────────────────────────────────────────── */
const META = {
  home: {
    title: 'Charted — Chart how far you\'ve come.',
    description:
      'Your photos already remember every place you\'ve been. Charted turns them into a beautiful 3D globe — automatically, privately, on your iPhone.',
  },
  privacy: {
    title: 'Privacy Policy — Charted',
    description:
      'Charted is a privacy-first travel memory app. Your photos and locations stay on your device. We don\'t have a server.',
  },
  terms: {
    title: 'Terms of Use — Charted',
    description: 'Charted Terms of Use. Subscription terms, your content, and how Charted Pro works.',
  },
  support: {
    title: 'Support — Charted',
    description: 'Help, FAQs, and contact for Charted — the photo travel mapping app.',
  },
}

/* ────────────────────────────────────────────────────────────
 * Shared link helper (intercepts in-app navigation)
 * ──────────────────────────────────────────────────────────── */
export function NavLink({ to, navigate, children, className, ...rest }) {
  const handleClick = (e) => {
    // honor cmd/ctrl+click and middle-click for new tab
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return
    e.preventDefault()
    navigate(to)
  }
  return (
    <a href={to} className={className} onClick={handleClick} {...rest}>
      {children}
    </a>
  )
}

/* ────────────────────────────────────────────────────────────
 * Charted brand mark
 *
 * Source of truth: Charted/Assets.xcassets/AppIcon.appiconset/AppIcon-1024-light.png
 * Pre-resized to 180px in /public/charted/icon/icon-180.png so browsers
 * don't down-scale a 1024px PNG every render.
 *
 * The wrapping rounded square + ring matches Apple's icon presentation
 * shape (squircle) so the mark reads as a real app icon at small sizes.
 * ──────────────────────────────────────────────────────────── */
function ChartedMark({ size = 28 }) {
  return (
    <span
      className="c-mark"
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <img src="/charted/icon/icon-180.png" alt="" width={size} height={size} />
    </span>
  )
}

/* ────────────────────────────────────────────────────────────
 * Nav (sticky + blur)
 * ──────────────────────────────────────────────────────────── */
function Nav({ navigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Wrap navigate so mobile menu auto-closes on link click.
  // Avoids the React 19 anti-pattern of synchronous setState in an effect
  // listening to the route prop.
  const navigateAndClose = useCallback(
    (to) => {
      setOpen(false)
      navigate(to)
    },
    [navigate],
  )

  return (
    <nav className={`c-nav${scrolled ? ' is-scrolled' : ''}`} ref={navRef}>
      <div className="c-nav-inner">
        <NavLink to="/charted" navigate={navigateAndClose} className="c-nav-brand">
          <ChartedMark />
          <span>Charted</span>
        </NavLink>

        <div className={`c-nav-links${open ? ' is-open' : ''}`}>
          <NavLink to="/charted" navigate={navigateAndClose}>Overview</NavLink>
          <NavLink to="/charted/support" navigate={navigateAndClose}>Support</NavLink>
          <NavLink to="/charted/privacy" navigate={navigateAndClose}>Privacy</NavLink>
          <a href="/" className="c-nav-link-vh" title="Vertex Horizon">
            By Vertex Horizon →
          </a>
        </div>

        <a
          className="c-nav-cta"
          href={APP_STORE_URL}
          target="_blank"
          rel="noreferrer"
        >
          Download
        </a>

        <button
          type="button"
          className="c-nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}

/* ────────────────────────────────────────────────────────────
 * Footer (App Store-required link surfaces visible on every page)
 * ──────────────────────────────────────────────────────────── */
function Footer({ navigate }) {
  return (
    <footer className="c-footer">
      <div className="c-footer-inner">
        <div className="c-footer-brand">
          <ChartedMark size={24} />
          <span>Charted</span>
        </div>

        <div className="c-footer-cols">
          <div className="c-footer-col">
            <h4>Charted</h4>
            <NavLink to="/charted" navigate={navigate}>Overview</NavLink>
            <a href={APP_STORE_URL} target="_blank" rel="noreferrer">
              App Store
            </a>
            <NavLink to="/charted/support" navigate={navigate}>Support</NavLink>
          </div>

          <div className="c-footer-col">
            <h4>Legal</h4>
            <NavLink to="/charted/privacy" navigate={navigate}>Privacy Policy</NavLink>
            <NavLink to="/charted/terms" navigate={navigate}>Terms of Use</NavLink>
          </div>

          <div className="c-footer-col">
            <h4>Company</h4>
            <a href="/">Vertex Horizon</a>
            <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          </div>
        </div>

        <div className="c-footer-bottom">
          <p className="c-footer-copy">
            © {new Date().getFullYear()} Vertex Horizon Inc. — Made with care, on device.
          </p>
          <p className="c-footer-tagline">Chart how far you've come.</p>
        </div>

        <p className="c-footer-attribution">
          Earth imagery courtesy of NASA Visible Earth (Public Domain).
          Country boundaries from Natural Earth (Public Domain).
          Earth textures by Solar System Scope (CC BY 4.0).
        </p>
      </div>
    </footer>
  )
}

/* ────────────────────────────────────────────────────────────
 * Re-export shared config (canonical source: ./config.js).
 * Older files still import these from ChartedApp.jsx for back-compat.
 * ──────────────────────────────────────────────────────────── */
export { APP_STORE_URL, SUPPORT_EMAIL, PARENT_SITE }
