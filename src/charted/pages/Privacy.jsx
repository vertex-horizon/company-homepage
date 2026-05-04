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
          <span><strong>Last Updated:</strong> April 27, 2026</span>
          <span><strong>Effective Date:</strong> April 27, 2026</span>
        </div>
      </header>

      <p>
        Charted is built by <strong>Vertex Horizon</strong> ("we", "us", "our").
        This Privacy Policy explains what data Charted collects, how it is used,
        and the choices you have.
      </p>

      <div className="c-doc-summary">
        <strong>The short version:</strong> Charted is a privacy-first app.
        Your photos, locations, and journey data stay on your iPhone, and we don't store them
        on our servers. The only data leaving your device is anonymized crash and performance
        reports — and you can disable those in Settings. Subscriptions, if any, are processed
        by Apple — we don't see your Apple ID or payment details.
      </div>

      <h2>1. Information We Process On-Device</h2>
      <p>
        When you use Charted, the app reads the following data from your device.{' '}
        <strong>None of this is uploaded to our servers</strong>:
      </p>

      <h3>1.1 Photo Library Metadata</h3>
      <ul>
        <li><strong>What:</strong> GPS coordinates (latitude/longitude), timestamps, and camera information embedded in your photos (EXIF metadata).</li>
        <li><strong>Why:</strong> To plot your photos on the globe and detect your trips automatically.</li>
        <li><strong>Where it stays:</strong> On your device, in Charted's local database.</li>
        <li><strong>How long:</strong> As long as the app is installed. Uninstalling Charted deletes all of this data.</li>
        <li><strong>Image data:</strong> Charted reads thumbnails of your photos via Apple's PhotoKit framework. We do not copy, modify, upload, or share your full-resolution photos.</li>
      </ul>

      <h3>1.2 Approximate Device Location</h3>
      <ul>
        <li><strong>What:</strong> Your current location, only when you choose features like "show me on the map" or check-in.</li>
        <li><strong>Why:</strong> To display your current position on the globe.</li>
        <li><strong>Where it stays:</strong> On your device.</li>
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

      <h3>2.1 Anonymized Crash Reports (via Firebase Crashlytics)</h3>
      <ul>
        <li>
          <strong>What:</strong> When Charted crashes, technical information is sent to Google Firebase Crashlytics:
          <ul>
            <li>Crash stack trace</li>
            <li>Device model (e.g., "iPhone 17 Pro Max")</li>
            <li>iOS version</li>
            <li>App version</li>
            <li>A randomly-generated installation ID (Firebase Installation ID)</li>
            <li>Device IP address (collected by Firebase, not by us)</li>
          </ul>
        </li>
        <li><strong>What we do not send:</strong> Your name, email, photos, location, journey data, or any content you create.</li>
        <li><strong>Why:</strong> To identify and fix crashes that affect users.</li>
        <li><strong>Retention:</strong> Firebase deletes crash data after 90 days.</li>
        <li><strong>Provider:</strong> Google Firebase. See <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noreferrer">Firebase Privacy</a>.</li>
        <li><strong>Opt-out:</strong> Settings → Privacy → "Share crash reports" → Off.</li>
      </ul>

      <h3>2.2 Anonymized Performance Reports (via Apple MetricKit)</h3>
      <ul>
        <li><strong>What:</strong> Aggregated performance metrics (launch time, hangs, energy use) collected by Apple's MetricKit framework.</li>
        <li><strong>Why:</strong> To understand and improve app performance.</li>
        <li><strong>Where it goes:</strong> Apple's analytics infrastructure (subject to your iOS Privacy settings).</li>
        <li><strong>Opt-out:</strong> iOS Settings → Privacy &amp; Security → Analytics &amp; Improvements → Share With App Developers → Off.</li>
      </ul>

      <h3>2.3 Anonymized Usage Analytics (via Firebase Analytics)</h3>
      <ul>
        <li><strong>What:</strong> Anonymized event counts (e.g., "user opened Globe tab", "user completed onboarding"). No personal data, no precise location, no photo content.</li>
        <li><strong>Why:</strong> To understand which features are used and prioritize development.</li>
        <li><strong>Provider:</strong> Google Firebase Analytics.</li>
        <li><strong>Opt-out:</strong> Settings → Privacy → "Share usage analytics" → Off.</li>
      </ul>

      <h2>3. Information We Do Not Collect</h2>
      <p>We do not collect:</p>
      <ul>
        <li>Your name, email address, or phone number</li>
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
            <td>Anonymous usage (see §2.3)</td>
            <td><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noreferrer">Firebase Privacy</a></td>
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
        We receive only an anonymized indicator that you have an active subscription. We do not see your Apple ID,
        payment method, or billing address.
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
        Charted is rated 4+ and does not knowingly collect data from children. Because we do not collect personal
        information from any user, our app is compliant with the Children's Online Privacy Protection Act (COPPA)
        and similar regulations.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        Because Charted does not collect personal data on our servers, the data subject rights under GDPR, CCPA,
        and similar laws are exercised on your device:
      </p>
      <ul>
        <li><strong>Right to access:</strong> All your data is visible inside the Charted app.</li>
        <li><strong>Right to delete:</strong> Uninstall Charted from your device. All data is permanently deleted.</li>
        <li><strong>Right to portability:</strong> Settings → Export → "Export all data as JSON".</li>
        <li><strong>Right to opt-out of analytics/crash reports:</strong> Settings → Privacy → toggle off.</li>
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
