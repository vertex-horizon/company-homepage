import { NavLink } from '../ChartedApp.jsx'
import { SUPPORT_EMAIL, APP_STORE_URL } from '../config.js'

/**
 * Support page.
 *
 * App Store hard requirement: Support URL must be reachable.
 * Reviewers will click it and verify there's a way for users to get help.
 *
 * Structure:
 *   - Direct contact (most important)
 *   - FAQ grouped by topic
 *   - Quick links to legal docs
 */
export default function Support({ navigate }) {
  return (
    <article className="c-doc">
      <header>
        <h1>Charted Support</h1>
        <p className="c-doc-summary">
          Need help, have feedback, or found a bug?{' '}
          Email <a href={`mailto:${SUPPORT_EMAIL}`}><strong>{SUPPORT_EMAIL}</strong></a>{' '}
          — we respond within 48 hours, usually faster.
        </p>
      </header>

      <h2>Getting Started</h2>

      <h3>How does Charted know where I've been?</h3>
      <p>
        When location services are turned on for the Camera app, every photo you take saves a small piece
        of GPS metadata (latitude, longitude, timestamp). Charted reads that metadata — never the photo
        content itself — and turns it into a map of your travels. None of this leaves your iPhone.
      </p>

      <h3>What happens during the first import?</h3>
      <p>
        Charted scans your Photos library for photos with embedded GPS. The first scan can take a minute
        or two if you have tens of thousands of photos. After that, new photos are imported automatically
        and incrementally — no waiting.
      </p>

      <h3>Why do some of my photos not show up?</h3>
      <p>
        Charted only imports photos that include GPS metadata. Photos without GPS are skipped. Common reasons
        photos don't have GPS:
      </p>
      <ul>
        <li>Location services were off in the Camera app when the photo was taken</li>
        <li>The photo came from another device or app that stripped its location</li>
        <li>The photo was a screenshot or downloaded image</li>
      </ul>
      <p>
        For trips you want to keep but the photos don't have GPS, you can add places manually inside the app.
      </p>

      <h2>Privacy &amp; Data</h2>

      <h3>Is Charted really 100% on-device?</h3>
      <p>
        Yes. Photo metadata, locations, journey detection, and AI narratives all run on your iPhone.
        The only network calls Charted makes are anonymized crash reports (which you can disable in Settings)
        and StoreKit checks for your subscription status. No photos, no locations, no journeys leave your device.
      </p>

      <h3>Will Charted track my live location?</h3>
      <p>
        No. Charted does not request always-on location tracking. If you tap a feature like "show me on the map,"
        the app uses your current location once — and that's processed on-device too.
      </p>

      <h3>How do I delete my data?</h3>
      <p>
        Uninstall Charted from your iPhone. All journey data, AI narratives, and settings are stored inside
        Charted's app sandbox, which iOS deletes when you remove the app. Your photos in the Photos app are
        not affected.
      </p>

      <h3>Can I export my data?</h3>
      <p>
        Yes. Inside Charted: <strong>Settings → Export → Export all data as JSON</strong>. You'll get a file
        with all your journeys, places, and metadata in a portable format.
      </p>

      <h2>Subscriptions &amp; Charted Pro</h2>

      <h3>What does Charted Pro include?</h3>
      <ul>
        <li>Unlimited journey storage (Free is capped at 50)</li>
        <li>Lumina globe style — the particle Earth, Pro-only</li>
        <li>Advanced AI insights and longer narratives</li>
        <li>Exclusive share templates</li>
        <li>5 alternate app icons</li>
      </ul>

      <h3>How much does Pro cost?</h3>
      <ul>
        <li><strong>Monthly:</strong> $2.99/month</li>
        <li><strong>Yearly:</strong> $29.99/year, with a 7-day free trial for new subscribers</li>
        <li><strong>Lifetime:</strong> $79.99 one-time, no recurring billing</li>
      </ul>

      <h3>How do I cancel my subscription?</h3>
      <ol>
        <li>Open the <strong>Settings</strong> app on your iPhone</li>
        <li>Tap your <strong>name</strong> at the top</li>
        <li>Tap <strong>Subscriptions</strong></li>
        <li>Select <strong>Charted</strong></li>
        <li>Tap <strong>Cancel Subscription</strong></li>
      </ol>
      <p>
        You'll keep Pro features until the end of your current billing period.
      </p>

      <h3>How do I get a refund?</h3>
      <p>
        Refunds are handled by Apple. Visit{' '}
        <a href="https://reportaproblem.apple.com" target="_blank" rel="noreferrer">reportaproblem.apple.com</a>{' '}
        and find the Charted purchase. Refund decisions are at Apple's discretion.
      </p>

      <h3>How do I restore a previous purchase?</h3>
      <p>
        In the app: <strong>Settings → Charted Pro → Restore Purchases</strong>. As long as you're signed into
        the same Apple ID you originally purchased with, your subscription or lifetime unlock will return.
      </p>

      <h2>Troubleshooting</h2>

      <h3>The app crashed or feels slow.</h3>
      <p>
        Try restarting the app first. If the problem persists, please email{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> and include:
      </p>
      <ul>
        <li>Your iPhone model and iOS version</li>
        <li>Charted version (Settings → About)</li>
        <li>What you were doing when it happened</li>
        <li>Approximately how many photos you have in your library</li>
      </ul>
      <p>
        We use anonymized crash reports to find and fix crashes — your individual data is never sent.
      </p>

      <h3>The globe looks blank after import.</h3>
      <p>
        Charted needs at least one photo with GPS metadata to show points on the globe. If your library is
        small or has photos without location data, the globe may start sparse. Take a few new photos with
        location services on, and they'll appear automatically.
      </p>

      <h3>I'm seeing the wrong city / country for some photos.</h3>
      <p>
        Photo GPS coordinates can occasionally land on the wrong side of a border (e.g., a photo taken near
        the US-Canada border). You can edit a photo's place manually in the journey detail view.
      </p>

      <h2>Requirements</h2>
      <ul>
        <li>iPhone running <strong>iOS 26 or later</strong></li>
        <li>A photo library with location metadata (most modern iPhone photos include this automatically)</li>
        <li>iPhone 12 or newer is recommended for the best 3D globe performance</li>
      </ul>

      <h2>Contact</h2>
      <p>
        For anything we haven't covered, email{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`}><strong>{SUPPORT_EMAIL}</strong></a>.
        We're a small team — usually you'll hear back within 48 hours, often the same day.
      </p>
      <p>
        Press inquiries: same email, please put <strong>"Press"</strong> in the subject.
      </p>

      <h2>Quick Links</h2>
      <ul>
        <li><a href={APP_STORE_URL} target="_blank" rel="noreferrer">Charted on the App Store</a></li>
        <li><NavLink to="/charted/privacy" navigate={navigate}>Privacy Policy</NavLink></li>
        <li><NavLink to="/charted/terms" navigate={navigate}>Terms of Use</NavLink></li>
        <li><a href="/">Vertex Horizon (parent company)</a></li>
      </ul>

      <div className="c-doc-footer">
        <span>© {new Date().getFullYear()} Vertex Horizon Inc.</span>
        <span>Made with care, on device.</span>
      </div>
    </article>
  )
}
