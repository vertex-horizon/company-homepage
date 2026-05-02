import { useState } from 'react'
import { APP_STORE_URL, SUPPORT_EMAIL } from '../config.js'
import {
  TextReveal,
  PhoneTilt,
  Magnetic,
  ScrollHero,
  useReveal,
} from '../effects.jsx'

/* Screenshot imports — copied from AppStore/02_screenshots/final/7.0.2/ */
import shot01 from '../assets/01.png'
import shot02 from '../assets/02.png'
import shot03 from '../assets/03.png'
import shot04 from '../assets/04.png'
import shot05 from '../assets/05.png'

/**
 * Charted marketing landing page (v2 — visually upgraded).
 *
 * Visual upgrades over v1:
 *   • Hero: Canvas-rendered rotating Globe (replaces static phone shot)
 *   • Hero: scroll-driven settle (Globe + content fade as you scroll)
 *   • Title: char-by-char reveal with stagger
 *   • Five Moments: 3D PhoneTilt on hover + accent glow pulse + float
 *   • Buttons: shimmer pass on hover + magnetic primary CTA
 *   • Quiet Truth: light-beam scan animation
 *   • Pricing: best-value shimmer
 *   • CTA: tagline reveal + radial glow backdrop
 *   • Global: starfield + cursor glow (mounted in ChartedApp.jsx)
 *
 * All animations honor `prefers-reduced-motion`.
 */
export default function Home({ navigate }) {
  return (
    <>
      <Hero />
      <QuietTruth />
      <FiveMoments />
      <GlobeStyles />
      <PrivacyManifesto />
      <Pricing />
      <FAQ />
      <CTA navigate={navigate} />
    </>
  )
}

/* ────────────────────────────────────────────────────────────
 * 1. HERO
 *
 * Layout (≥880px): two columns, content left, Globe right.
 * Globe is real Canvas — rotates, has arcs and glowing pins.
 * On scroll, both content + globe gracefully settle/fade.
 * ──────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <ScrollHero>
      <div className="c-hero-inner">
        <div className="c-hero-content">
          <span className="c-eyebrow c-hero-eyebrow c-reveal is-revealed">
            For iPhone · iOS 26+
          </span>

          <h1 className="c-hero-title">
            <span className="c-hero-title-line">
              <TextReveal text="Chart how far" stagger={26} />
            </span>
            <span className="c-hero-title-line c-gradient-text">
              <TextReveal text="you've come." stagger={26} delay={420} />
            </span>
          </h1>

          <p className="c-hero-sub c-reveal is-revealed">
            Your photos already remember every place you've been.
            Charted turns them into a 3D globe — privately, on your iPhone.
          </p>

          <div className="c-hero-actions c-reveal is-revealed">
            <Magnetic>
              <a
                className="c-btn c-btn--appstore"
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Download Charted on the App Store"
              >
                <AppleIcon />
                <span>
                  <span className="c-as-eyebrow">Download on the</span>
                  <span className="c-as-main">App Store</span>
                </span>
              </a>
            </Magnetic>
            <a className="c-btn c-btn--ghost" href="#five-moments">
              See how it works
            </a>
          </div>

          <div className="c-hero-trust c-reveal is-revealed">
            <span className="c-hero-trust-dot" aria-hidden="true" />
            <span>100% on-device · No accounts · No uploads</span>
          </div>
        </div>

        <div className="c-hero-phone-stage c-reveal is-revealed">
          {/* Two slow-rotating orbital rings — give the phone a "satellite" feel */}
          <div className="c-hero-orbit" aria-hidden="true" />
          <div className="c-hero-orbit c-hero-orbit--2" aria-hidden="true" />
          {/* Memory-Gold radial glow behind the phone */}
          <div className="c-hero-phone-glow" aria-hidden="true" />
          {/* Phone with 3D cursor-tracking tilt */}
          <PhoneTilt max={11}>
            <div className="c-hero-phone">
              <img src={shot01} alt="Charted home — your travels on a 3D globe" />
            </div>
          </PhoneTilt>
        </div>
      </div>
    </ScrollHero>
  )
}

function AppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  )
}

/* ────────────────────────────────────────────────────────────
 * 2. QUIET TRUTH
 *
 * One italic sentence. Big. Slow char reveal.
 * Light-beam scan in background (CSS @keyframes).
 * ──────────────────────────────────────────────────────────── */
function QuietTruth() {
  return (
    <section className="c-section c-quiet">
      <p className="c-quiet-text">
        <TextReveal text="Your camera roll already knows where you've been." stagger={18} />
        <br />
        <TextReveal text="You just haven't " stagger={18} delay={1200} />
        <strong>
          <TextReveal text="seen it as a map." stagger={18} delay={1500} />
        </strong>
      </p>
      <div className="c-quiet-divider c-reveal" />
    </section>
  )
}

/* ────────────────────────────────────────────────────────────
 * 3. FIVE MOMENTS
 *
 * 5 sections, alternating L/R. Phone mockups have:
 *   • 3D tilt on cursor
 *   • subtle vertical float
 *   • accent radial glow that pulses (different color each)
 * ──────────────────────────────────────────────────────────── */
const MOMENTS = [
  {
    n: '01',
    title: 'Your photos already drew this map.',
    desc:
      'Charted reads the GPS quietly tucked into every photo and lights up your globe — every city, every coastline, every mountain pass you\'ve been to.',
    img: shot01,
    glow: 'blue',
  },
  {
    n: '02',
    title: "Trips you'd forgotten. Charted found them all.",
    desc:
      'Photo timestamps and locations are enough. Charted detects your journeys automatically — from a long weekend in Kyoto to a six-month sabbatical across Europe.',
    img: shot02,
    glow: 'gold',
  },
  {
    n: '03',
    title: 'Tap a place. Find a memory.',
    desc:
      'Memory Pins reveal the photos you took there — without scrolling, without searching. Spain becomes Barcelona. Barcelona becomes that summer.',
    img: shot03,
    glow: 'cyan',
  },
  {
    n: '04',
    title: 'Charted sees the explorer in you.',
    desc:
      "Your travel personality, drawn from real journeys — not a quiz. Coastal Nomad. City Wanderer. Culture Sponge. A mirror, made of where you've actually been.",
    img: shot04,
    glow: 'purple',
  },
  {
    n: '05',
    title: 'Made for sharing. Not for posting.',
    desc:
      'Animated globe videos, journey maps, stamp collages — beautiful enough to keep, generous enough to give. Your story, made shareable, on your terms.',
    img: shot05,
    glow: 'pink',
  },
]

function FiveMoments() {
  const ref = useReveal()
  return (
    <section className="c-section c-moments-section" id="five-moments" ref={ref}>
      <div className="c-section-head c-reveal">
        <span className="c-eyebrow">Five things you'll do</span>
        <h2 className="c-h2">
          A travel app shouldn't ask you<br />
          to start over.
        </h2>
      </div>

      <div className="c-moments">
        {MOMENTS.map((m, i) => (
          <article
            key={m.n}
            className={`c-moment c-reveal${i % 2 === 1 ? ' is-reverse' : ''}`}
          >
            <div className="c-moment-text">
              <div className="c-moment-num">{m.n}</div>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </div>
            <div className="c-moment-visual">
              <div className={`c-moment-glow c-moment-glow--${m.glow}`} aria-hidden="true" />
              <PhoneTilt max={9}>
                <div className="c-moment-phone">
                  <img src={m.img} alt={m.title} loading="lazy" />
                </div>
              </PhoneTilt>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────
 * 4. GLOBE STYLES
 * Three cards. Each card has a small SVG icon that animates on hover.
 * Cards also have a cursor-following radial glow.
 * ──────────────────────────────────────────────────────────── */
const GLOBE_STYLES = [
  {
    name: 'Terra',
    tag: 'Free',
    style: 'terra',
    desc: 'A photoreal Earth, rendered with Apple Metal. Real continents, real coastlines, with your trips lighting up like cities at night.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8.5" stroke="#38BDF8" strokeWidth="1.5"/>
        <path d="M3 9 Q11 5 19 9 M3 13 Q11 17 19 13" stroke="#38BDF8" strokeWidth="1.2" fill="none"/>
      </svg>
    ),
  },
  {
    name: 'Tessera',
    tag: 'Free',
    style: 'tessera',
    desc: "A glass-edged region map. Watch every country and state you've touched fill in — like an honest, more beautiful version of a scratch-off map.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M5 4 L13 4 L17 10 L13 16 L5 16 L9 10 Z" stroke="#22D3EE" strokeWidth="1.5" fill="none"/>
      </svg>
    ),
  },
  {
    name: 'Lumina',
    tag: 'Pro',
    style: 'lumina',
    desc: 'A particle Earth, alive with light. Designed for sharing — stunning enough to print, intricate enough to lose yourself in.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="6" cy="11" r="1.5" fill="#A78BFA"/>
        <circle cx="11" cy="6" r="1.5" fill="#A78BFA"/>
        <circle cx="16" cy="11" r="1.5" fill="#A78BFA"/>
        <circle cx="11" cy="16" r="1.5" fill="#A78BFA"/>
        <circle cx="11" cy="11" r="1.2" fill="#A78BFA" opacity="0.6"/>
        <circle cx="8" cy="8" r="0.9" fill="#A78BFA" opacity="0.5"/>
        <circle cx="14" cy="14" r="0.9" fill="#A78BFA" opacity="0.5"/>
        <circle cx="8" cy="14" r="0.9" fill="#A78BFA" opacity="0.5"/>
        <circle cx="14" cy="8" r="0.9" fill="#A78BFA" opacity="0.5"/>
      </svg>
    ),
  },
]

function GlobeStyles() {
  const ref = useReveal()
  // Track cursor for the radial glow effect on cards
  const onMove = (e) => {
    const card = e.currentTarget
    const r = card.getBoundingClientRect()
    card.style.setProperty('--c-mx', `${e.clientX - r.left}px`)
    card.style.setProperty('--c-my', `${e.clientY - r.top}px`)
  }
  return (
    <section className="c-section" ref={ref}>
      <div className="c-section-head c-reveal" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
        <span className="c-eyebrow" style={{ justifyContent: 'center' }}>One world. Three ways to see yourself in it.</span>
        <h2 className="c-h2" style={{ marginTop: '1rem' }}>The globe, your way.</h2>
      </div>

      <div className="c-globes c-reveal">
        {GLOBE_STYLES.map((g) => (
          <div
            className="c-globe-card"
            key={g.name}
            data-style={g.style}
            onMouseMove={onMove}
          >
            <span className="c-globe-card-icon">{g.icon}</span>
            <h3>
              {g.name}
              <span className={`c-globe-card-tag${g.tag === 'Pro' ? ' is-pro' : ''}`}>
                {g.tag}
              </span>
            </h3>
            <p>{g.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────
 * 5. PRIVACY MANIFESTO
 * ──────────────────────────────────────────────────────────── */
function PrivacyManifesto() {
  const ref = useReveal()
  return (
    <section className="c-section c-privacy-section" ref={ref}>
      <div className="c-privacy c-reveal">
        <span className="c-eyebrow">Privacy, by design</span>
        <h2 className="c-privacy-headline" style={{ marginTop: '1.25rem' }}>
          We don't have a server. <em>That's not a slogan.</em>
        </h2>
        <p className="c-privacy-lede">
          Most travel apps want you tracked, all day. Charted does the opposite.
          We read GPS data <strong style={{ color: 'var(--c-text)' }}>already inside the photos you've already taken</strong> —
          no live tracking, no cloud uploads, no accounts. Your travels stay where they belong: in your hands.
        </p>

        <div className="c-privacy-grid">
          <div className="c-privacy-row">
            <span className="c-privacy-icon"><LockIcon /></span>
            <div>
              <h4>No account, ever.</h4>
              <p>Open the app and start. There's nothing to sign up for, nothing to forget.</p>
            </div>
          </div>
          <div className="c-privacy-row">
            <span className="c-privacy-icon"><DeviceIcon /></span>
            <div>
              <h4>Nothing leaves your iPhone.</h4>
              <p>Photos, locations, journeys, AI narratives — all processed on-device.</p>
            </div>
          </div>
          <div className="c-privacy-row">
            <span className="c-privacy-icon"><AIChipIcon /></span>
            <div>
              <h4>On-device intelligence.</h4>
              <p>Apple Foundation Models writes your trip stories without sending them anywhere.</p>
            </div>
          </div>
          <div className="c-privacy-row">
            <span className="c-privacy-icon"><EyeOffIcon /></span>
            <div>
              <h4>No tracking, no advertisers.</h4>
              <p>The only network calls are anonymized crash reports — and you can turn those off.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const LockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <rect x="5" y="9" width="12" height="9" rx="2" stroke="#34D399" strokeWidth="1.5"/>
    <path d="M8 9 V6 a3 3 0 0 1 6 0 V9" stroke="#34D399" strokeWidth="1.5" fill="none"/>
  </svg>
)
const DeviceIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <rect x="6" y="3" width="10" height="16" rx="2" stroke="#38BDF8" strokeWidth="1.5"/>
    <circle cx="11" cy="16" r="0.8" fill="#38BDF8"/>
  </svg>
)
const AIChipIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <rect x="5" y="5" width="12" height="12" rx="2" stroke="#A78BFA" strokeWidth="1.5"/>
    <rect x="8" y="8" width="6" height="6" rx="1" fill="#A78BFA" opacity="0.4"/>
    <path d="M3 8 H5 M3 14 H5 M17 8 H19 M17 14 H19 M8 3 V5 M14 3 V5 M8 17 V19 M14 17 V19" stroke="#A78BFA" strokeWidth="1.2"/>
  </svg>
)
const EyeOffIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
    <path d="M3 11 c2-3 5-5 8-5 s6 2 8 5" stroke="#F59E0B" strokeWidth="1.5" fill="none"/>
    <circle cx="11" cy="11" r="2.5" stroke="#F59E0B" strokeWidth="1.5"/>
    <line x1="4" y1="4" x2="18" y2="18" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

/* ────────────────────────────────────────────────────────────
 * 6. PRICING
 * ──────────────────────────────────────────────────────────── */
function Pricing() {
  const ref = useReveal()
  return (
    <section className="c-section" ref={ref} id="pricing">
      <div className="c-section-head c-reveal" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
        <span className="c-eyebrow" style={{ justifyContent: 'center' }}>Charted Pro</span>
        <h2 className="c-h2" style={{ marginTop: '1rem' }}>
          Pro adds more — when you're ready.
        </h2>
        <p className="c-lede" style={{ margin: '1rem auto 0' }}>
          The free version is a complete travel map. Pro adds Lumina (the particle globe),
          extra share templates, advanced AI insights, and unlimited journey storage.
          Cancel any time, in your Apple ID settings.
        </p>
      </div>

      <div className="c-pricing c-reveal">
        <div className="c-price-card">
          <div className="c-price-name">Monthly</div>
          <div className="c-price-amount">
            $2.99<span className="c-price-amount-sub">/mo</span>
          </div>
          <p className="c-price-meta">Try Pro by the month. Cancel anytime.</p>
        </div>

        <div className="c-price-card is-best">
          <span className="c-price-tag">Best Value</span>
          <div className="c-price-name">Yearly</div>
          <div className="c-price-amount">
            $29.99<span className="c-price-amount-sub">/yr</span>
          </div>
          <p className="c-price-meta">7-day free trial. Save ~16% vs monthly.</p>
        </div>

        <div className="c-price-card">
          <div className="c-price-name">Lifetime</div>
          <div className="c-price-amount">
            $79.99<span className="c-price-amount-sub"> once</span>
          </div>
          <p className="c-price-meta">One-time. Yours forever, no renewals.</p>
        </div>
      </div>

      <p className="c-pricing-foot">
        Subscriptions auto-renew unless canceled at least 24 hours before the end of the current period.
        Manage or cancel in your Apple ID settings. <a href="/charted/terms">Terms of Use</a>
        {' · '}
        <a href="/charted/privacy">Privacy Policy</a>
      </p>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────
 * 7. FAQ
 * ──────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: 'Is Charted really 100% on-device?',
    a: (
      <>
        Yes. Photo metadata, locations, trip detection, and AI narratives all run on your iPhone.
        The only network calls Charted makes are anonymized crash reports (which you can disable
        in Settings) and StoreKit checks for your subscription status. No photos, no locations,
        no journeys leave your device.
      </>
    ),
  },
  {
    q: 'Will Charted track my location?',
    a: (
      <>
        No. Charted does not request always-on location tracking. It reads GPS data already saved
        inside your photos (EXIF metadata). The only time it might use your live location is if you
        tap a feature like "show me on the map" — and that's processed on-device too.
      </>
    ),
  },
  {
    q: "What if my photos don't have GPS?",
    a: (
      <>
        Most modern iPhone photos include GPS metadata automatically when location services are on.
        For photos without GPS (older photos, or photos with location stripped), Charted will simply
        skip them — no error. You can also add places manually for trips you want to keep.
      </>
    ),
  },
  {
    q: 'Does Charted require iOS 26?',
    a: (
      <>
        Yes. Charted v1.0 is built for iOS 26+ to use the latest Liquid Glass design language and
        on-device AI (Apple Foundation Models). Older iOS versions aren't supported in this release.
      </>
    ),
  },
  {
    q: 'How do I cancel my subscription?',
    a: (
      <>
        Open the Settings app on your iPhone, tap your name at the top, then tap{' '}
        <strong>Subscriptions</strong>, find Charted, and tap <strong>Cancel Subscription</strong>.
        You'll keep Pro features until the end of your current billing period.
      </>
    ),
  },
  {
    q: "I have a question that's not here.",
    a: (
      <>
        Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> — we respond within 48 hours.
      </>
    ),
  },
]

function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)
  const ref = useReveal()
  return (
    <section className="c-section" ref={ref} id="faq">
      <div className="c-section-head c-reveal" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
        <span className="c-eyebrow" style={{ justifyContent: 'center' }}>Quiet questions</span>
        <h2 className="c-h2" style={{ marginTop: '1rem' }}>Before you download.</h2>
      </div>

      <div className="c-faq-list c-reveal" style={{ maxWidth: 760, margin: '0 auto' }}>
        {FAQS.map((item, i) => {
          const open = openIdx === i
          return (
            <div className={`c-faq-item${open ? ' is-open' : ''}`} key={i}>
              <button
                type="button"
                className="c-faq-q"
                aria-expanded={open}
                onClick={() => setOpenIdx(open ? -1 : i)}
              >
                <span>{item.q}</span>
                <span className="c-faq-q-icon" aria-hidden="true" />
              </button>
              <div className="c-faq-a">{item.a}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────
 * 8. CTA
 *
 * Big tagline (char reveal). Radial glow backdrop animated.
 * Magnetic CTA button.
 * ──────────────────────────────────────────────────────────── */
function CTA() {
  const ref = useReveal()
  return (
    <section className="c-section" ref={ref}>
      <div className="c-cta c-reveal">
        <h2 className="c-cta-tagline">
          <TextReveal text="Chart how far " stagger={26} />
          <span className="c-gradient-text">
            <TextReveal text="you've come." stagger={26} delay={500} />
          </span>
        </h2>
        <p className="c-cta-sub">
          Your photos already have the story. Let Charted draw the map.
        </p>
        <div className="c-cta-actions">
          <Magnetic strength={0.18}>
            <a
              className="c-btn c-btn--appstore"
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
            >
              <AppleIcon />
              <span>
                <span className="c-as-eyebrow">Download on the</span>
                <span className="c-as-main">App Store</span>
              </span>
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  )
}

