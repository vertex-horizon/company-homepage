import { NavLink } from '../ChartedApp.jsx'
import { SUPPORT_EMAIL } from '../config.js'

/**
 * Privacy Policy.
 *
 * Source: AppStore/04_privacy/privacy_policy_en.md
 * Must stay in sync with PrivacyInfo.xcprivacy and ASC App Privacy questionnaire.
 *
 * App Store hard requirements:
 *   - HTTPS, public, HTML (not PDF)
 *   - Mobile-friendly
 *   - Mirrors what the app actually does
 */
export default function Privacy({ navigate }) {
  return (
    <article className="c-doc">
      <header>
        <h1>Privacy Policy</h1>
        <div className="c-doc-meta">
          <span><strong>Last Updated:</strong> September 18, 2026</span>
          <span><strong>Effective Date:</strong> September 18, 2026</span>
        </div>
      </header>

      <p>
        Charted is built by <strong>Vertex Horizon</strong> ("we", "us", "our").
        This Privacy Policy explains what data Charted collects, how it is used,
        and the choices you have.
      </p>

      <div className="c-doc-summary">
        <strong>The short version:</strong> Charted is a privacy-first app.
        Your photo library and local trip database are not uploaded to our servers. Apple services
        process map and address requests. We use Apple and RevenueCat for purchases, Firebase and
        Sentry for diagnostics, and optional usage analytics. These services receive technical
        identifiers and the information described below. We do not receive your Apple ID or payment details.
      </div>

      <h2>1. Information We Process On-Device</h2>
      <p>
        When you use Charted, the app reads the following data from your device.{' '}
        <strong>Your photo library and trip database are stored locally</strong>:
      </p>

      <h3>1.1 Photo Library Metadata</h3>
      <ul>
        <li><strong>What:</strong> GPS coordinates (latitude/longitude), timestamps, and camera information embedded in your photos (EXIF metadata).</li>
        <li><strong>Why:</strong> To plot your photos on the globe and detect your trips automatically.</li>
        <li><strong>Storage and requests:</strong> Photo metadata is stored in Charted's local database. When you request place details or maps, Apple geocoding and map services may receive the coordinates or map region needed to answer the request.</li>
        <li><strong>How long:</strong> As long as the app is installed. Uninstalling Charted deletes all of this data.</li>
        <li><strong>Image data:</strong> Charted accesses photos through Apple's PhotoKit for browsing and local features. We do not upload your photo library to our servers. You control any export or sharing you initiate.</li>
      </ul>

      <h3>1.2 Approximate Device Location</h3>
      <ul>
        <li><strong>What:</strong> Your current location, only when you choose features like "show me on the map" or check-in.</li>
        <li><strong>Why:</strong> To display your current position on the globe.</li>
        <li><strong>Processing:</strong> The app uses location locally; Apple map and geocoding services may process a location or map-region request when you use those features.</li>
        <li><strong>Permission:</strong> Charted requests "When In Use" permission only. We do not request "Always" or background location.</li>
      </ul>

      <h3>1.3 Microphone &amp; Speech Recognition (Optional)</h3>
      <ul>
        <li><strong>What:</strong> Voice input for journey search.</li>
        <li><strong>Why:</strong> To convert your spoken queries into search.</li>
        <li><strong>Where it stays:</strong> Apple's on-device speech recognition is used. Audio is processed locally and discarded after recognition.</li>
        <li><strong>Permission:</strong> Only requested if you tap the microphone button.</li>
      </ul>

      <h3>1.4 AI-Generated Content (Apple Foundation Models)</h3>
      <ul>
        <li><strong>What:</strong> Charted uses Apple's on-device large language models (Apple Foundation Models) to generate journey narratives.</li>
        <li><strong>Why:</strong> To write a poetic summary of each trip.</li>
        <li><strong>Where it stays:</strong> Prompts and outputs are processed entirely on your device. They are never sent to OpenAI, Anthropic, Google, or any server, including ours.</li>
      </ul>

      <h2>2. Information Sent Off-Device (Limited)</h2>

      <h3>2.1 Crash and Error Diagnostics (Firebase Crashlytics and Sentry)</h3>
      <ul>
        <li><strong>What:</strong> Crash traces, non-fatal errors, app hangs, app and operating-system versions, device information, installation identifiers, and technical context such as the current screen and network-request diagnostics.</li>
        <li><strong>Why:</strong> To diagnose failures and improve reliability. Reports can be associated with an installation or device.</li>
        <li><strong>Control:</strong> Crash reporting is on by default. You can turn off Share Crash Reports in Settings → Privacy &amp; Security.</li>
        <li><strong>Images:</strong> Session Replay is disabled in the App Store version. Charted does not attach photo-library images to these reports.</li>
        <li><strong>Providers:</strong> <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noreferrer">Firebase</a> and <a href="https://sentry.io/privacy/" target="_blank" rel="noreferrer">Sentry</a>.</li>
      </ul>

      <h3>2.2 Performance Diagnostics</h3>
      <ul>
        <li><strong>What:</strong> Launch and operation timings, network latency, resource use, and device/app information. Firebase Performance may use the connection IP address for approximate geographic segmentation.</li>
        <li><strong>Providers:</strong> Firebase Performance and, when crash reporting is also enabled, sampled Sentry performance traces. Apple MetricKit diagnostics are also processed on device.</li>
        <li><strong>Control:</strong> In version 1.1, usage analytics and performance sharing are off by default in the App Store version, subject to your saved preferences. You can change Share Usage Analytics in Settings → Privacy &amp; Security.</li>
      </ul>

      <h3>2.3 Usage Analytics (Firebase Analytics)</h3>
      <ul>
        <li><strong>What:</strong> Feature interactions, onboarding and subscription events, purchase events, app preferences, app-instance and device identifiers, and approximate location derived from the network connection. These events do not include photo-library images or the precise GPS fields used to build your trip database.</li>
        <li><strong>Why:</strong> To understand feature use and improve the app. Events can be associated with the same app installation or device.</li>
        <li><strong>Control:</strong> Off by default in the App Store version; change Share Usage Analytics in Settings → Privacy &amp; Security.</li>
      </ul>

      <h3>2.4 Purchases (Apple and RevenueCat)</h3>
      <ul>
        <li><strong>What:</strong> Apple processes payments. RevenueCat receives purchase/transaction history and subscription status, a randomly generated persistent app user ID also used as the StoreKit app account token, and build variant, broad user region, and diagnostic cohort attributes.</li>
        <li><strong>Why:</strong> Purchase validation, purchase restoration, subscription management, and subscription analytics.</li>
        <li><strong>Control:</strong> Purchase services operate separately from the optional usage-analytics switch. We do not receive your Apple ID, payment-card details, or billing address.</li>
      </ul>

      <h3>2.5 App Configuration (Firebase Remote Config)</h3>
      <p>
        Firebase Remote Config receives app, operating-system, language, country/region and installation
        information to deliver feature settings. Configuration requests can occur even when optional
        analytics is off. No photo library or trip database is included in these requests.
      </p>

      <h2>3. Information We Do Not Collect</h2>
      <p>We do not collect:</p>
      <ul>
        <li>Your name, email address, or phone number for app use; if you contact support by email, we receive the address and information you choose to send</li>
        <li>A user account (Charted does not require sign-in)</li>
        <li>Your contacts or social network data</li>
        <li>Your browsing history or other apps you use</li>
        <li>Your full-resolution photos</li>
        <li>Cross-app or cross-website tracking identifiers (IDFA)</li>
        <li>Your precise location continuously in the background</li>
      </ul>

      <h2>4. Third-Party Services</h2>
      <p>Charted uses the following third-party services. Their privacy policies govern their data handling:</p>

      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Purpose</th>
            <th>Privacy Policy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Apple App Store</strong></td>
            <td>Distribution, In-App Purchase</td>
            <td><a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noreferrer">Apple Privacy</a></td>
          </tr>
          <tr>
            <td><strong>Google Firebase Crashlytics</strong></td>
            <td>Crash reports (see §2.1)</td>
            <td><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noreferrer">Firebase Privacy</a></td>
          </tr>
          <tr>
            <td><strong>Google Firebase Analytics</strong></td>
            <td>Usage and purchase analytics (see §2.3)</td>
            <td><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noreferrer">Firebase Privacy</a></td>
          </tr>
          <tr>
            <td><strong>Google Firebase Performance and Remote Config</strong></td>
            <td>Performance diagnostics and app configuration (see §2.2 and §2.5)</td>
            <td><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noreferrer">Firebase Privacy</a></td>
          </tr>
          <tr>
            <td><strong>Sentry</strong></td>
            <td>Crash, error and performance diagnostics</td>
            <td><a href="https://sentry.io/privacy/" target="_blank" rel="noreferrer">Sentry Privacy</a></td>
          </tr>
          <tr>
            <td><strong>RevenueCat</strong></td>
            <td>Purchase and subscription management and analytics</td>
            <td><a href="https://www.revenuecat.com/privacy/" target="_blank" rel="noreferrer">RevenueCat Privacy</a></td>
          </tr>
          <tr>
            <td><strong>Apple Maps and Geocoding</strong></td>
            <td>Map and address requests</td>
            <td><a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noreferrer">Apple Privacy</a></td>
          </tr>
          <tr>
            <td><strong>Apple MetricKit</strong></td>
            <td>Performance metrics (see §2.2)</td>
            <td><a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noreferrer">Apple Privacy</a></td>
          </tr>
        </tbody>
      </table>

      <h2>5. In-App Purchases (Charted Pro)</h2>
      <p>
        Charted offers subscription products ("Charted Pro"). Subscription transactions are handled by Apple.
        RevenueCat processes the transaction history, subscription status, and app identifiers described in §2.4.
        We do not see your Apple ID, payment method, or billing address.
      </p>
      <p>To manage or cancel your subscription:</p>
      <ol>
        <li>Open the Settings app on your iPhone</li>
        <li>Tap your name at the top</li>
        <li>Tap <strong>Subscriptions</strong></li>
        <li>Select Charted</li>
      </ol>
      <p>
        Apple's refund policy applies. See <a href="https://support.apple.com/HT202039" target="_blank" rel="noreferrer">Apple Subscriptions</a>.
      </p>

      <h2>6. Children's Privacy</h2>
      <p>
        Charted is not directed to children under 13. If you believe a child has provided personal
        information to us, please contact us so we can investigate and address the request.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        You can manage local app data and sharing preferences on your device. For questions or requests
        about information processed by our service providers, contact us at the address below.
      </p>
      <ul>
        <li><strong>Local data:</strong> Your saved trips are available inside Charted.</li>
        <li><strong>Deletion:</strong> Removing Charted deletes its local app data. It does not automatically delete purchase records or diagnostics already held by Apple or other service providers. Contact us about those records.</li>
        <li><strong>Right to portability:</strong> Settings → Export → "Export all data as JSON".</li>
        <li><strong>Sharing controls:</strong> Settings → Privacy &amp; Security → Share Usage Analytics / Share Crash Reports. Turning these off stops the corresponding sharing; it does not erase reports previously received.</li>
      </ul>
      <p>
        For questions: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      </p>

      <h2>8. Data Security</h2>
      <ul>
        <li>Your photos, locations, and journey data are stored on your device, protected by iOS sandbox isolation.</li>
        <li>Any network traffic Charted does make uses HTTPS/TLS.</li>
        <li>Because the content you create in Charted (journeys, narratives, archetypes) is stored on your device and not on our servers, a breach of our infrastructure cannot expose that content.</li>
      </ul>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy. The "Last Updated" date at the top will reflect the most recent change.
        Material changes will be communicated via in-app notice.
      </p>

      <h2>10. Contact</h2>
      <p>
        <strong>Email:</strong> <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a><br />
        <strong>Mailing Address:</strong> Vertex Horizon Inc. — please contact us by email for postal correspondence.
      </p>

      <div className="c-doc-footer">
        <span>© {new Date().getFullYear()} Vertex Horizon Inc.</span>
        <span>
          <NavLink to="/charted/terms" navigate={navigate}>Terms of Use</NavLink>
          {' · '}
          <NavLink to="/charted/support" navigate={navigate}>Support</NavLink>
        </span>
      </div>
    </article>
  )
}
