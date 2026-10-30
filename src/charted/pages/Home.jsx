import { useState } from 'react'
import { APP_STORE_URL, SUPPORT_EMAIL } from '../config.js'
import {
  TextReveal,
  PhoneTilt,
  Magnetic,
  ScrollHero,
  useReveal,
} from '../effects.jsx'

import LaunchImage from '../LaunchImage.jsx'

/**
 * Mapvoy 官网：保留原有导航与渐入交互，文案和整幅宣传图来自 Product V2 上线物料。
 * 图像中的旅行数字是示例人物，不是当前用户数据或运行验收证据。
 * 动画沿用 prefers-reduced-motion 降级。
 */
export default function Home({ navigate }) {
  return (
    <>
      <Hero />
      <QuietTruth />
      <FiveMoments />
      <p className="c-artwork-note">Launch illustrations use sample travel data.</p>
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
 * The exported launch illustration preserves the source composition.
 * On scroll, both content + globe gracefully settle/fade.
 * ──────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <ScrollHero>
      <div className="c-hero-inner">
        <div className="c-hero-content">
          <span className="c-eyebrow c-hero-eyebrow c-reveal is-revealed">
            For iPhone · iOS 17+
          </span>

          <h1 className="c-hero-title">
            <span className="c-hero-title-line">
              <TextReveal text="You've been further" stagger={26} />
            </span>
            <span className="c-hero-title-line c-gradient-text">
              <TextReveal text="than you think." stagger={26} delay={420} />
            </span>
          </h1>

          <p className="c-hero-sub c-reveal is-revealed">
            Every place in your photos, on a 3D globe.
          </p>

          <div className="c-hero-actions c-reveal is-revealed">
            <Magnetic>
              <a
                className="c-btn c-btn--appstore"
                href={APP_STORE_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Download Mapvoy on the App Store"
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
            <span>Built on your iPhone · No account to create</span>
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
              <LaunchImage name="01-further" alt="Mapvoy launch illustration: a globe of sample travels across North America and Europe" priority />
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
// 文案与画面来自同一套 V2 上线物料；示例数字不作为用户或运行验收数据。
const MOMENTS = [
  {
    n: '01', title: 'It found the trip you forgot.',
    desc: 'Mapvoy reads when and where your photos were taken and groups them into trips, from a day out to a chapter of your life.',
    image: '02-trips', alt: 'Rome and Athens trip, with photo highlights and a San Francisco life chapter', glow: 'blue',
  },
  {
    n: '02', title: 'Your countries, stamped in.',
    desc: 'Countries and regions fill in your Passport from the places in your photos. See where you have been, one place at a time.',
    image: '03-countries', alt: 'Passport map and country stamps, with an enlarged Europe summary card', glow: 'cyan',
  },
  {
    n: '03', title: 'Your travel, in numbers.',
    desc: 'Atlas keeps your numbers year by year. Look back through the countries, regions and places that make up your travels.',
    image: '10-numbers', alt: 'Atlas Europe view with a map, visited countries and travel statistics', glow: 'blue',
  },
  {
    n: '04', title: 'Your Logbook. It wrote itself.',
    desc: 'A free Year in Review for each year’s travels. Look back through the places and photos that shaped your year.',
    image: '07-logbook', alt: 'Sample 2025 Year in Review, with a Rome cover and annual travel summary', glow: 'cyan',
  },
  {
    n: '05', title: 'Your year, ready to post.',
    desc: 'Cards and globe videos from your trips and your globe. Make a card to keep, or a video to share.',
    image: '08-share', alt: 'Mapvoy share cards featuring Europe, California, annual numbers and Greece', glow: 'blue',
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
                  <LaunchImage name={m.image} alt={m.alt} />
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
  { name: 'Earth', image: '04-sunlight', desc: "Real terrain. Real sunlight. Your places. See the planet under today's sunlight, with city lights on the night side and real stars beyond.", alt: 'Earth style: two views of Europe at twilight and at night' },
  { name: 'Ink', image: '05-ink', desc: 'Your places, in pen on paper. A paper globe with ink marks for the places you have visited.', alt: 'Ink style: a paper globe of Europe, with an enlarged map detail' },
  { name: 'Paint', image: '06-paint', desc: 'Color in where you have been. Paint fills in the countries and regions you have visited.', alt: 'Paint style: Paris and Rome, with a closer terrain view of Chamonix' },
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
            data-style={g.name.toLowerCase()}
            onMouseMove={onMove}
          >
            <LaunchImage name={g.image} alt={g.alt} className="c-style-poster" sizes="(max-width: 880px) 82vw, 320px" />
            <h3>
              {g.name}
              <span className="c-globe-card-tag">
                Free
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
        <span className="c-eyebrow">Built on your iPhone</span>
        <h2 className="c-privacy-headline" style={{ marginTop: '1.25rem' }}>There’s nothing to log.</h2>
        <p className="c-privacy-lede">
          Mapvoy starts with the photos already on your iPhone. It reads their dates and places
          and builds your travel map on the device. There’s no account to create.
        </p>
        <p className="c-lede">
          You choose what to export or share. For information about photo access, connected services
          and diagnostic controls, read our <a href="/charted/privacy">Privacy Policy</a>.
        </p>
      </div>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────
 * 6. PRICING
 * ──────────────────────────────────────────────────────────── */
function Pricing() {
  const ref = useReveal()
  return (
    <section className="c-section" ref={ref} id="pricing">
      <div className="c-section-head c-reveal" style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
        <span className="c-eyebrow" style={{ justifyContent: 'center' }}>Mapvoy Pro</span>
        <h2 className="c-h2" style={{ marginTop: '1rem' }}>Go deeper into your travels.</h2>
        <p className="c-lede" style={{ margin: '1rem auto 0' }}>
          Pro adds deeper trip reviews, more discoveries and collections, and more ways to share.
          Explore the available plans and included features in Mapvoy before you subscribe.
        </p>
      </div>
      <div className="c-pricing c-reveal">
        <div className="c-price-card">
          <div className="c-price-name">A closer look back</div>
          <h3 className="c-price-amount">More depth.</h3>
          <p className="c-price-meta">Deep Review, the full Discoveries, and more themed collections.</p>
        </div>
        <div className="c-price-card">
          <div className="c-price-name">Your work, ready to share</div>
          <h3 className="c-price-amount">More detail.</h3>
          <p className="c-price-meta">Premium share templates, 2× images and 4K video on supported iPhones.</p>
        </div>
      </div>
      <p className="c-pricing-foot">
        Current prices, eligibility and renewal terms are shown in the app before purchase.
        Manage subscriptions in your Apple ID settings. <a href="/charted/terms">Terms of Use</a>
        {' · '}<a href="/charted/privacy">Privacy Policy</a>
      </p>
    </section>
  )
}

/* ────────────────────────────────────────────────────────────
 * 7. FAQ
 * ──────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: 'How does Mapvoy use my photos?',
    a: (
      <>
        Mapvoy reads photo dates and locations and builds your map and trips on your iPhone.
        Services also support purchases, maps, app configuration and optional diagnostics.
        See our <a href="/charted/privacy">Privacy Policy</a> for details and your choices.
      </>
    ),
  },
  {
    q: 'Will Mapvoy track my location?',
    a: (
      <>
        No. Mapvoy does not request always-on location tracking. It reads GPS data already saved
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
        For photos without GPS (older photos, or photos with location stripped), Mapvoy will simply
        skip them — no error. You can also add places manually for trips you want to keep.
      </>
    ),
  },
  {
    q: 'Which iOS versions does Mapvoy support?',
    a: (
      <>
        Mapvoy supports iPhone 12 and newer with iOS 17 or later. Trip writing with Apple Intelligence
        requires a compatible iPhone and iOS 26 or later.
      </>
    ),
  },
  {
    q: 'How do I cancel my subscription?',
    a: (
      <>
        Open the Settings app on your iPhone, tap your name at the top, then tap{' '}
        <strong>Subscriptions</strong>, find Mapvoy, and tap <strong>Cancel Subscription</strong>.
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
          <TextReveal text="You've been further " stagger={26} />
          <span className="c-gradient-text">
            <TextReveal text="than you think." stagger={26} delay={500} />
          </span>
        </h2>
        <p className="c-cta-sub">
          Every place in your photos, on a 3D globe.
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
