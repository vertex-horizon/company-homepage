import { RegionalLinks } from './RegionalInfo.jsx'
import { productPath } from '../config.js'
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
        <h1>Mapvoy Support</h1>
        <p className="c-doc-summary">
          Need help, have feedback, or found a bug?{' '}
          Email <a href={`mailto:${SUPPORT_EMAIL}`}><strong>{SUPPORT_EMAIL}</strong></a>{' '}
          — we aim to reply promptly.
        </p>
        <p>
          App interface languages: English and French, depending on the installed version.
          You can write to us in either language.
        </p>
        <p lang="fr-CA">
          Langues de l’interface : anglais et français, selon la version installée.
          Vous pouvez nous écrire dans l’une ou l’autre de ces langues.
        </p>
      </header>

      <RegionalLinks navigate={navigate} />
      <h2>Getting Started</h2>

      <h3>How does Mapvoy know where I've been?</h3>
      <p>
        When location services are turned on for the Camera app, every photo you take saves a small piece
        of GPS metadata (latitude, longitude, timestamp). Mapvoy reads photo dates and locations
        and turns them into a map of your travels on your iPhone.
      </p>

      <h3>What happens during the first import?</h3>
      <p>
        Mapvoy scans your Photos library for photos with embedded GPS. The time needed depends on your library and device. After that, new photos are imported incrementally.
      </p>

      <h3>Why do some of my photos not show up?</h3>
      <p>
        Mapvoy only imports photos that include GPS metadata. Photos without GPS are skipped. Common reasons
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

      <h3>Does Mapvoy keep my data on my iPhone?</h3>
      <p>
        Yes. Photo metadata, locations, journey detection, and AI narratives all run on your iPhone.
        Apple and RevenueCat support purchases; Apple services process map and address requests. Firebase and Sentry support diagnostics, app configuration, and optional usage analytics. See our Privacy Policy for the data involved and sharing controls. We don't upload your photo library or local trip database to our servers.
      </p>

      <h3>Will Mapvoy track my live location?</h3>
      <p>
        No. Mapvoy does not request always-on location tracking. If you tap a feature like "show me on the map,"
        the app uses your current location once — and that's processed on-device too.
      </p>

      <h3>How do I delete my data?</h3>
      <p>
        Use Mapvoy&apos;s local data controls or remove the app to delete its local records.
        Offloading preserves app data. This does not delete Apple Photos originals, exports or backups
        saved elsewhere, purchase records, or reports already received by providers, and it does not
        cancel a subscription. Contact us about information we or providers acting for us actually hold;
        see our <NavLink to={productPath('/privacy')} navigate={navigate}>Privacy Policy</NavLink> for details.
      </p>

      <h3>Can I export my data?</h3>
      <p>
        Use Export Data in Mapvoy to save supported travel records in the available formats.
        Ordinary exports do not include photo originals and are not a complete restorable backup.
        See our <NavLink to={productPath('/privacy')} navigate={navigate}>Privacy Policy</NavLink> for details.
      </p>

      <h2>Subscriptions &amp; Mapvoy Pro</h2>

      <h3>What does Mapvoy Pro include?</h3>
      <p>
        Pro offers deeper trip reviews, more discoveries and collections, and additional sharing options.
        The app shows the features included in each available plan before you subscribe.
      </p>

      <h3>How much does Pro cost?</h3>
      <p>
        Open Mapvoy Pro in the app to see available plans, current prices in your region,
        and any eligible introductory offers. Apple displays the price and renewal terms before purchase.
        Existing subscribers can check their next charge in Apple’s subscription settings.
      </p>

      <h3>How do I cancel my subscription?</h3>
      <ol>
        <li>Open the <strong>Settings</strong> app on your iPhone</li>
        <li>Tap your <strong>name</strong> at the top</li>
        <li>Tap <strong>Subscriptions</strong></li>
        <li>Select <strong>Mapvoy</strong> (it may still appear as Charted on older receipts)</li>
        <li>Tap <strong>Cancel Subscription</strong></li>
      </ol>
      <p>
        You'll keep Pro features until the end of your current billing period.
      </p>

      <h3>How do I get a refund?</h3>
      <p>
        Apple handles billing and refund requests. Visit{' '}
        <a href="https://reportaproblem.apple.com" target="_blank" rel="noreferrer">reportaproblem.apple.com</a>{' '}
        and select your Mapvoy purchase; older receipts may say Charted. This process does not limit
        any consumer rights or remedies that applicable law does not allow us to exclude. Contact us
        if you need help with the App or a consumer-rights request.
      </p>

      <h3>How do I restore a previous purchase?</h3>
      <p>
        In the app: <strong>Settings → Mapvoy Pro → Restore Purchases</strong>. As long as you're signed into
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
        <li>Mapvoy version (Settings → About)</li>
        <li>What you were doing when it happened</li>
        <li>Approximately how many photos you have in your library</li>
      </ul>
      <p>
        Optional diagnostic reports help us investigate crashes. See the Privacy Policy for report contents and sharing controls.
      </p>

      <h3>The globe looks blank after import.</h3>
      <p>
        Mapvoy needs at least one photo with GPS metadata to show points on the globe. If your library is
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
        <li>iPhone 12 or newer running <strong>iOS 17 or later</strong></li>
        <li>A photo library with location metadata (most modern iPhone photos include this automatically)</li>
        <li>Trip writing with Apple Intelligence requires a compatible iPhone and iOS 26 or later</li>
      </ul>

      <h2>Contact</h2>
      <p>
        For anything we haven't covered, email{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`}><strong>{SUPPORT_EMAIL}</strong></a>.
        We're a small team and aim to reply promptly.
      </p>
      <p>
        Press inquiries: same email, please put <strong>"Press"</strong> in the subject.
      </p>

      <h2>Quick Links</h2>
      <ul>
        <li><a href={APP_STORE_URL} target="_blank" rel="noreferrer">Mapvoy on the App Store</a></li>
        <li><NavLink to={productPath('/privacy')} navigate={navigate}>Privacy Policy</NavLink></li>
        <li><NavLink to={productPath('/terms')} navigate={navigate}>Terms of Use</NavLink></li>
        <li><a href="/">Vertex Horizon (parent company)</a></li>
      </ul>

      <div className="c-doc-footer">
        <span>© {new Date().getFullYear()} Vertex Horizon Inc.</span>
        <span>Made with care, on device.</span>
      </div>
    </article>
  )
}
