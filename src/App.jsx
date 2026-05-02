import { useEffect, useRef } from 'react'
import './App.css'

const REDUCED = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/* ── Scroll-reveal hook ────────────────────────────── */
function useScrollReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = ref.current?.querySelectorAll('.reveal')
    elements?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return ref
}

/* ── Word-stagger reveal (used in Hero title) ───────────────────────
 *   Splits a string into <span>s, each carrying its --i index. CSS
 *   animates opacity + translateY with a per-word delay, giving the
 *   title a "settling into place" feel.
 *   ─────────────────────────────────────────────── */
function WordReveal({ text, delay = 0, stagger = 60 }) {
  const words = text.split(' ')
  return (
    <span
      className="word-reveal"
      style={{ '--c-base-delay': `${delay}ms`, '--c-stagger': `${stagger}ms` }}
    >
      {words.map((w, i) => (
        <span key={i} className="word-reveal-word" style={{ '--i': i }}>
          {w}
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </span>
  )
}

/* ── Cursor-tracked card glow ──────────────────────────────────────
 *   Sets CSS variables --c-mx, --c-my on .cap-card during mousemove
 *   so a radial-gradient `::before` follows the cursor. Pure CSS for
 *   the actual glow; this hook only feeds it coordinates.
 *   ─────────────────────────────────────────────── */
function useCardGlow() {
  const ref = useRef(null)
  useEffect(() => {
    const root = ref.current
    if (!root) return
    if (REDUCED() || window.matchMedia('(hover: none)').matches) return
    const cards = root.querySelectorAll('.cap-card')

    const onMove = (e) => {
      const card = e.currentTarget
      const r = card.getBoundingClientRect()
      card.style.setProperty('--c-mx', `${e.clientX - r.left}px`)
      card.style.setProperty('--c-my', `${e.clientY - r.top}px`)
    }
    cards.forEach((c) => c.addEventListener('mousemove', onMove))
    return () => cards.forEach((c) => c.removeEventListener('mousemove', onMove))
  }, [])
  return ref
}

/* ── Magnetic hover (used on the big CTA button) ────────────────
 *   On hover, the button leans 25% toward the cursor, easing back
 *   on leave. Disabled on touch / reduced-motion.
 *   ─────────────────────────────────────────────── */
function useMagnetic(strength = 0.25) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (REDUCED() || window.matchMedia('(hover: none)').matches) return
    const onMove = (e) => {
      const r = el.getBoundingClientRect()
      const dx = (e.clientX - (r.left + r.width / 2)) * strength
      const dy = (e.clientY - (r.top + r.height / 2)) * strength
      el.style.transform = `translate(${dx}px, ${dy}px)`
    }
    const onLeave = () => { el.style.transform = '' }
    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, [strength])
  return ref
}

/* ── Data ──────────────────────────────────────────── */
const capabilities = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="6" y="6" width="16" height="16" rx="3" stroke="url(#g1)" strokeWidth="1.5" />
        <rect x="10" y="10" width="8" height="8" rx="1" fill="url(#g1)" opacity="0.4" />
        <path d="M3 11h3M3 17h3M22 11h3M22 17h3M11 3v3M17 3v3M11 22v3M17 22v3" stroke="url(#g1)" strokeWidth="1.4" strokeLinecap="round" />
        <defs>
          <linearGradient id="g1" x1="4" y1="4" x2="24" y2="24">
            <stop stopColor="#818cf8" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'On-Device Intelligence',
    desc: 'Apple Foundation Models, Vision, Core ML. We build AI that runs on the phone — never on someone else\'s server. Private by default, instant by nature.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="url(#g2)" strokeWidth="1.5" />
        <path d="M4 12 Q14 6 24 12 M4 16 Q14 22 24 16" stroke="url(#g2)" strokeWidth="1.2" fill="none" />
        <circle cx="20" cy="10" r="1.4" fill="#fcd34d" />
        <circle cx="9" cy="17" r="1.2" fill="#fcd34d" opacity="0.7" />
        <defs>
          <linearGradient id="g2" x1="4" y1="4" x2="24" y2="24">
            <stop stopColor="#a855f7" />
            <stop offset="1" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Real-Time 3D & Metal',
    desc: 'Custom Metal pipelines, particle systems, GPU-driven rendering. We treat shaders like UI: with care, polish, and obsession over the last 1%.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4 C9 4, 5 9, 5 14 C5 19, 9 24, 14 24 C19 24, 23 19, 23 14 C23 9, 19 4, 14 4 Z" stroke="url(#g3)" strokeWidth="1.5" fill="none" />
        <path d="M11 10 L11 18 M14 8 L14 20 M17 11 L17 17" stroke="url(#g3)" strokeWidth="1.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="g3" x1="5" y1="5" x2="23" y2="23">
            <stop stopColor="#22d3ee" />
            <stop offset="1" stopColor="#818cf8" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Native Apple Platforms',
    desc: 'Swift, SwiftUI, Liquid Glass design. We adopt new Apple frameworks the day they ship — and make them feel like they always belonged.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3 L23 7 V14 C23 19, 19 23.5, 14 25 C9 23.5, 5 19, 5 14 V7 Z" stroke="url(#g4)" strokeWidth="1.5" fill="none" />
        <path d="M10 14 L13 17 L18 11" stroke="url(#g4)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <defs>
          <linearGradient id="g4" x1="4" y1="4" x2="24" y2="24">
            <stop stopColor="#34d399" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Privacy by Design',
    desc: 'No accounts. No servers. No tracking. We build with what users already have, on the device they already trust. The kind of privacy that needs no policy to explain.',
  },
]

const principles = [
  {
    num: '01',
    title: 'Quiet over loud.',
    desc: 'Software shouldn\'t shout. The best products disappear into use, then surprise you with what they remembered. We design for the moments after the wow — when polish becomes habit.',
  },
  {
    num: '02',
    title: 'Polish over feature creep.',
    desc: 'We\'d rather ship one beautifully crafted feature than ten half-finished ones. Every transition, every word, every haptic — measured, considered, shipped only when it earns its place.',
  },
  {
    num: '03',
    title: 'Made for humans, by humans.',
    desc: 'Small team. Strong opinions. Long view. We ship the kind of apps we want to use ourselves — and we use what we ship, every day.',
  },
]

/* ── Arrow Icon ────────────────────────────────────── */
function ArrowRight() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="btn-arrow">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ── App ───────────────────────────────────────────── */
function App() {
  const mainRef = useScrollReveal()
  const capGridRef = useCardGlow()
  const magneticRef = useMagnetic(0.22)

  return (
    <div className="app" ref={mainRef}>
      {/* ── Ambient Background ─── */}
      <div className="ambient" aria-hidden="true">
        <div className="ambient-orb ambient-orb--1" />
        <div className="ambient-orb ambient-orb--2" />
        <div className="ambient-orb ambient-orb--3" />
        <div className="grid-overlay" />
        <div className="noise-overlay" />
      </div>

      {/* ── Navigation ─── */}
      <nav className="nav">
        <div className="nav-inner">
          <a className="nav-brand" href="#home">
            <span className="nav-logo">VH</span>
            <span className="nav-brand-text">Vertex Horizon</span>
          </a>
          <div className="nav-links">
            <a href="#capabilities">Capabilities</a>
            <a href="#work">Work</a>
            <a href="#philosophy">Philosophy</a>
            <a href="#about">About</a>
          </div>
          <a className="nav-cta" href="mailto:contact@vertex-horizon.com">
            Get in Touch
          </a>
        </div>
      </nav>

      <main>
        {/* ── Hero ─── */}
        <section className="hero" id="home">
          <div className="hero-content reveal">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              Independent Product Studio
            </div>
            <h1 className="hero-title">
              <WordReveal text="Where intelligence" delay={0} />
              <br />
              <span className="gradient-text">
                <WordReveal text="meets intuition." delay={420} />
              </span>
            </h1>
            <p className="hero-desc">
              We build consumer apps where AI runs on the device, design feels
              considered, and privacy is the foundation — not a footnote. Quietly,
              one careful pixel at a time.
            </p>
            <div className="hero-actions">
              <a className="btn btn--primary" href="mailto:contact@vertex-horizon.com">
                <span>Start a Project</span>
                <ArrowRight />
              </a>
              <a className="btn btn--ghost" href="#work">
                Explore Our Work
              </a>
            </div>

            {/* Subtle teaser for our shipped product — clickable */}
            <a className="hero-product-teaser" href="/charted">
              <span className="hero-product-teaser-dot" aria-hidden="true" />
              <span className="hero-product-teaser-label">Now shipping</span>
              <span className="hero-product-teaser-name">Charted</span>
              <span className="hero-product-teaser-tag">— Chart how far you've come.</span>
              <ArrowRight />
            </a>
          </div>

          <div className="hero-visual reveal" aria-hidden="true">
            {/* Outermost ring with travelling node + 4 idle data points */}
            <div className="hero-ring hero-ring--1">
              <span className="hero-ring-node hero-ring-node--idle" style={{ top: '12%', left: '18%' }} />
              <span className="hero-ring-node hero-ring-node--idle" style={{ top: '30%', right: '8%' }} />
              <span className="hero-ring-node hero-ring-node--idle" style={{ bottom: '10%', right: '32%' }} />
              <span className="hero-ring-node hero-ring-node--idle" style={{ bottom: '28%', left: '6%' }} />
            </div>
            <div className="hero-ring hero-ring--2" />
            <div className="hero-ring hero-ring--3" />
            <div className="hero-core">
              <div className="hero-core-pulse" />
            </div>
            <div className="hero-glow" />
          </div>
        </section>

        {/* ── Capabilities ─── */}
        <section className="section" id="capabilities">
          <div className="section-header reveal">
            <span className="section-label">What We Do</span>
            <h2>
              Bridging the gap between
              <br />
              human intent and machine intelligence
            </h2>
          </div>
          <div className="cap-grid" ref={capGridRef}>
            {capabilities.map((cap, i) => (
              <article
                className="cap-card reveal"
                key={i}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="cap-card-glow" aria-hidden="true" />
                <span className="cap-icon">{cap.icon}</span>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
                <div className="cap-card-shine" />
              </article>
            ))}
          </div>
        </section>

        {/* ── Our Work — featured product (Charted) ─── */}
        <section className="section work-section" id="work">
          <div className="section-header reveal">
            <span className="section-label">Our Work</span>
            <h2>
              Built where intelligence
              <br />
              meets intuition.
            </h2>
          </div>

          <article className="product-card reveal">
            <div className="product-card-glow product-card-glow--blue" aria-hidden="true" />
            <div className="product-card-glow product-card-glow--gold" aria-hidden="true" />

            <div className="product-card-meta">
              <header className="product-card-header">
                <a href="/charted" className="product-card-icon" aria-label="Visit Charted">
                  <img src="/charted/icon/icon-180.png" alt="" width="64" height="64" />
                </a>
                <div>
                  <h3>
                    <a href="/charted">Charted</a>
                  </h3>
                  <p className="product-card-tagline">Chart how far you've come.</p>
                </div>
              </header>

              <p className="product-card-desc">
                A privacy-first travel memory app for iPhone. Charted reads the GPS
                in photos already on your device and turns them into a 3D globe of
                every place you've been — with on-device AI narratives, automatic
                journey detection, and a digital passport that fills as you travel.
                Nothing leaves your iPhone.
              </p>

              <ul className="product-card-tags">
                <li>iPhone · iOS 26+</li>
                <li>On-device AI</li>
                <li>Privacy-first</li>
                <li>Apple Foundation Models</li>
              </ul>

              <div className="product-card-actions">
                <a href="/charted" className="btn btn--primary">
                  <span>Visit Charted</span>
                  <ArrowRight />
                </a>
                <a
                  href="https://apps.apple.com/app/id6761878521"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--ghost"
                >
                  <span>App Store</span>
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M5 5h6v6M11 5L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="product-card-visual">
              <a href="/charted" className="product-card-phone" aria-label="Visit Charted">
                <img src="/charted/screenshots/01.png" alt="Charted on iPhone" loading="lazy" />
              </a>
            </div>
          </article>

          <p className="work-future reveal">
            More work in the lab. <a href="mailto:contact@vertex-horizon.com">Get in touch</a> if
            you'd like an early look.
          </p>
        </section>

        {/* ── Philosophy ─── */}
        <section className="section" id="philosophy">
          <div className="section-header reveal">
            <span className="section-label">Our Philosophy</span>
            <h2>
              Principles that guide
              <br />
              every interaction we craft
            </h2>
          </div>
          <div className="principles">
            {principles.map((p, i) => (
              <div
                className="principle reveal"
                key={i}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="principle-num">{p.num}</span>
                <div className="principle-body">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── About ─── */}
        <section className="section" id="about">
          <div className="about reveal">
            <span className="section-label">About Vertex Horizon</span>
            <p className="about-text">
              Vertex Horizon is an independent product studio. We build consumer
              apps where intelligence lives on the device, design earns the user's
              attention, and privacy isn't a footnote — it's the foundation.
              <br />
              <br />
              <strong>Charted</strong> is our first product. There are more on the way.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-value">Independent</span>
                <span className="stat-label">Self-funded studio</span>
              </div>
              <div className="stat">
                <span className="stat-value">On-Device</span>
                <span className="stat-label">AI by default</span>
              </div>
              <div className="stat">
                <span className="stat-value">Apple-Native</span>
                <span className="stat-label">Swift · Metal · Foundation Models</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="section cta-section">
          <div className="cta reveal">
            <h2>
              Have an idea
              <br />
              <span className="gradient-text">worth building?</span>
            </h2>
            <p>
              Small team. Strong opinions. We pick our work carefully.
              If yours feels like a fit — say hi.
            </p>
            <a
              className="btn btn--primary btn--lg btn--magnetic"
              href="mailto:contact@vertex-horizon.com"
              ref={magneticRef}
            >
              <span>contact@vertex-horizon.com</span>
              <ArrowRight />
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer ─── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="nav-logo">VH</span>
              <span>Vertex Horizon Inc.</span>
            </div>

            <div className="footer-cols">
              <div className="footer-col">
                <h4>Products</h4>
                <a href="/charted">Charted</a>
                <a
                  href="https://apps.apple.com/app/id6761878521"
                  target="_blank"
                  rel="noreferrer"
                >
                  App Store ↗
                </a>
              </div>
              <div className="footer-col">
                <h4>Company</h4>
                <a href="#about">About</a>
                <a href="mailto:contact@vertex-horizon.com">Contact</a>
              </div>
              <div className="footer-col">
                <h4>Legal</h4>
                <a href="/charted/privacy">Privacy</a>
                <a href="/charted/terms">Terms</a>
              </div>
            </div>
          </div>

          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Vertex Horizon Inc.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
