import { productPath } from '../config.js'
import { useState } from 'react'
import { APP_STORE_URL, SUPPORT_EMAIL } from '../config.js'
import { TextReveal, Magnetic, useReveal } from '../effects.jsx'
import { WorldHero, GlobeExperience, PhoneStories, ShareGallery } from '../HomeShowcase.jsx'

export default function Home() {
  return (
    <>
      <WorldHero />
      <GlobeExperience />
      <PhoneStories />
      <ShareGallery />
      <PrivacyManifesto />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  )
}

function AppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  )
}

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
          and diagnostic controls, read our <a href={productPath('/privacy')}>Privacy Policy</a>.
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
        Manage subscriptions in your Apple ID settings. <a href={productPath('/terms')}>Terms of Use</a>
        {' · '}<a href={productPath('/privacy')}>Privacy Policy</a>
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
        See our <a href={productPath('/privacy')}>Privacy Policy</a> for details and your choices.
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
