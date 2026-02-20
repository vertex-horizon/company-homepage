import { useEffect, useRef } from 'react'
import './App.css'

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

/* ── Data ──────────────────────────────────────────── */
const capabilities = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="url(#g1)" strokeWidth="1.5" />
        <circle cx="14" cy="14" r="4" fill="url(#g1)" opacity="0.6" />
        <defs>
          <linearGradient id="g1" x1="4" y1="4" x2="24" y2="24">
            <stop stopColor="#818cf8" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Intelligent Interfaces',
    desc: 'AI-native interfaces that adapt, learn, and respond to human behavior in real time.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L24.5 10v8L14 24 3.5 18v-8z" stroke="url(#g2)" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M14 12L19 15v4l-5 3-5-3v-4z" fill="url(#g2)" opacity="0.3" />
        <defs>
          <linearGradient id="g2" x1="4" y1="4" x2="24" y2="24">
            <stop stopColor="#a855f7" />
            <stop offset="1" stopColor="#6366f1" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Conversational Systems',
    desc: 'Natural dialogue systems that make complex AI accessible through intuitive conversation.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="5" width="18" height="18" rx="3" stroke="url(#g3)" strokeWidth="1.5" />
        <path d="M10 14h8M14 10v8" stroke="url(#g3)" strokeWidth="1.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="g3" x1="5" y1="5" x2="23" y2="23">
            <stop stopColor="#22d3ee" />
            <stop offset="1" stopColor="#818cf8" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Spatial Computing',
    desc: 'Immersive experiences at the intersection of physical space and digital intelligence.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20l6-8 4 5 4-6 6 9" stroke="url(#g4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="22" cy="8" r="3" stroke="url(#g4)" strokeWidth="1.5" />
        <defs>
          <linearGradient id="g4" x1="4" y1="4" x2="24" y2="24">
            <stop stopColor="#6366f1" />
            <stop offset="1" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Cognitive Analytics',
    desc: 'Transforming raw intelligence into actionable insights through human-centered visualization.',
  },
]

const principles = [
  {
    num: '01',
    title: 'Intelligence Should Be Invisible',
    desc: 'The best AI disappears into the experience, amplifying human capability without friction.',
  },
  {
    num: '02',
    title: 'Design for the Dialogue',
    desc: 'Every interaction is a conversation. We design systems that listen as much as they speak.',
  },
  {
    num: '03',
    title: 'Elevate, Don\'t Replace',
    desc: 'Technology exists to extend human potential. We build tools that make people more, not less.',
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
              AI + Human Interaction Studio
            </div>
            <h1 className="hero-title">
              Where Intelligence
              <br />
              <span className="gradient-text">Meets Intuition</span>
            </h1>
            <p className="hero-desc">
              We design the future of human-AI interaction — creating
              systems that think, adapt, and communicate with unprecedented
              clarity.
            </p>
            <div className="hero-actions">
              <a className="btn btn--primary" href="mailto:contact@vertex-horizon.com">
                <span>Start a Project</span>
                <ArrowRight />
              </a>
              <a className="btn btn--ghost" href="#capabilities">
                Explore Our Work
              </a>
            </div>
          </div>

          <div className="hero-visual reveal" aria-hidden="true">
            <div className="hero-ring hero-ring--1" />
            <div className="hero-ring hero-ring--2" />
            <div className="hero-ring hero-ring--3" />
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
          <div className="cap-grid">
            {capabilities.map((cap, i) => (
              <article
                className="cap-card reveal"
                key={i}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="cap-icon">{cap.icon}</span>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
                <div className="cap-card-shine" />
              </article>
            ))}
          </div>
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
              Vertex Horizon Inc. is a research-driven studio at the frontier
              of AI and human-computer interaction. We build the tools,
              interfaces, and systems that define how humans and intelligent
              machines collaborate — today and tomorrow.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-value">AI-Native</span>
                <span className="stat-label">Design Approach</span>
              </div>
              <div className="stat">
                <span className="stat-value">Research-Led</span>
                <span className="stat-label">Methodology</span>
              </div>
              <div className="stat">
                <span className="stat-value">Human-First</span>
                <span className="stat-label">Philosophy</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ─── */}
        <section className="section cta-section">
          <div className="cta reveal">
            <h2>
              Ready to reimagine
              <br />
              <span className="gradient-text">what's possible?</span>
            </h2>
            <p>Let's build the next generation of human-AI interaction together.</p>
            <a className="btn btn--primary btn--lg" href="mailto:contact@vertex-horizon.com">
              <span>contact@vertex-horizon.com</span>
              <ArrowRight />
            </a>
          </div>
        </section>
      </main>

      {/* ── Footer ─── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="nav-logo">VH</span>
            <span>Vertex Horizon Inc.</span>
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
