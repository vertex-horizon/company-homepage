import { NavLink } from '../ChartedApp.jsx'
import { SUPPORT_EMAIL } from '../config.js'

/**
 * Privacy Policy.
 *
 * 本网页是公开政策的完整正文；AppStore/04_privacy/privacy_policy_en.md 记录发布对应口径，
 * 不是本网页的完整正文来源。事实需与源码、PrivacyInfo.xcprivacy 和 ASC 隐私问卷一致。
 *
 * 本候选稿对应 life-footprints 的合规整改分支，须与最终发行包一起验收后发布。
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
          <span><strong>Last Updated:</strong> October 1, 2026</span>
          <span><strong>Effective Date:</strong> October 1, 2026</span>
        </div>
      </header>

      <p><NavLink to="/charted/privacy/fr" navigate={navigate} hrefLang="fr-CA" lang="fr-CA">Français (Canada)</NavLink></p>

      <p>
        Charted is built by <strong>Vertex Horizon Inc.</strong> ("we", "us", "our").
        This Privacy Policy explains what data Charted collects, how it is used,
        and the choices you have.
      </p>
      <p>
        <strong>Version note:</strong> The changes identified below as a pending compliance update are being prepared
        and are not all included in version 1.1.1 submitted for App Store review. Version 1.1 remains the currently released
        version until the update is available. Review your installed version and sharing settings;
        a policy update does not change the behavior of an older installed app.
      </p>

      <div className="c-doc-summary">
        <strong>The short version:</strong> Charted is a privacy-first app.
        We do not operate a backend that stores your photo library or local trip database, and do not
        hold remote copies of them. Apple services
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
        <li><strong>How long:</strong> Until you delete local records or remove the App. Offloading the App preserves its documents and data. Removing it does not erase Apple Photos originals, exports you saved elsewhere, or copies in device/system backups; manage those separately through Apple or your chosen storage provider.</li>
        <li><strong>Image data:</strong> Charted accesses photos through Apple's PhotoKit for browsing, local scene/quality analysis, and highlights. Apple Photos may download iCloud photos when needed. Limited Access restricts the photos available to the App. We do not upload your photo library to our servers. You control any export or sharing you initiate.</li>
      </ul>

      <h3>1.2 Device Location</h3>
      <ul>
        <li><strong>What:</strong> Your current location when you use location features such as showing your position on the map. It may be precise if you enable Precise Location in iOS; otherwise iOS provides an approximate location.</li>
        <li><strong>Why:</strong> To display your current position on the globe.</li>
        <li><strong>Processing:</strong> The app uses location locally; Apple map and geocoding services may process a location or map-region request when you use those features.</li>
        <li><strong>Permission:</strong> Charted requests "When In Use" permission only. We do not request "Always" or background location. You can change location permission and precision in iOS Settings.</li>
      </ul>

      <h3>1.3 Microphone &amp; Speech Recognition (Optional)</h3>
      <ul>
        <li><strong>What:</strong> Voice input for journey search.</li>
        <li><strong>Why:</strong> To convert your spoken queries into search.</li>
        <li><strong>Processing and version boundary:</strong> The currently released version 1.1 uses Apple speech recognition without requiring on-device recognition; Apple may process your audio on its servers. In the pending compliance update, voice search requires Apple's on-device recognition support for the current language and processes audio locally. If it is unavailable, use keyboard search; the App does not fall back to server recognition. Apple's privacy terms apply to its speech service.</li>
        <li><strong>Permission:</strong> Only requested if you tap the microphone button.</li>
      </ul>

      <h3>1.4 AI-Generated Content (Apple Foundation Models)</h3>
      <ul>
        <li><strong>What:</strong> Where available, Charted uses Apple's on-device Foundation Models to generate journey narratives from local trip information.</li>
        <li><strong>Why:</strong> To write a poetic summary of each trip.</li>
        <li><strong>Where it stays:</strong> This generation runs on your device. Charted does not send your prompts, photos, or trip database to a cloud AI service. You can choose to share generated text or exported content with other apps.</li>
        <li><strong>Availability:</strong> Generative text requires iOS 26 or later, a supported device, and Apple Intelligence available for your language and region with models ready. Otherwise Charted uses local template summaries. Pro does not enable Apple Intelligence.</li>
      </ul>

      <h2>2. Information Sent Off-Device (Limited)</h2>

      <h3>2.1 Crash and Error Diagnostics (Firebase Crashlytics and Sentry)</h3>
      <ul>
        <li><strong>What:</strong> Crash traces, non-fatal errors, app hangs, app and operating-system versions, device information, installation identifiers, and technical context such as the current screen and network-request diagnostics.</li>
        <li><strong>Why:</strong> To diagnose failures and improve reliability. Reports can be associated with an installation or device.</li>
        <li><strong>Control:</strong> In the currently released version 1.1, crash reporting is on by default, subject to your saved preference. In the pending compliance update, App Store crash reporting defaults to off and sharing requires your explicit opt-in. You can change Share Crash Reports in Settings → Privacy &amp; Security. Turning it off stops future corresponding sharing; it does not delete reports already received.</li>
        <li><strong>Pending compliance update behavior:</strong> An older default-on setting is not treated as consent. Firebase initializes with analytics and crash collection disabled; the respective explicit sharing choice and pending-data cleanup control collection. SDK initialization is not a promise of zero service traffic. Local diagnostic records are not automatically uploaded merely because they exist on your device.</li>
        <li><strong>Images:</strong> Session Replay is disabled in the App Store version. Charted does not attach photo-library images to these reports.</li>
        <li><strong>Providers:</strong> <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noreferrer">Firebase</a> and <a href="https://sentry.io/privacy/" target="_blank" rel="noreferrer">Sentry</a>.</li>
      </ul>

      <h3>2.2 Performance Diagnostics</h3>
      <ul>
        <li><strong>What:</strong> Launch and operation timings, network latency, resource use, and device/app information. Version 1.1 may use Firebase Performance, including connection-IP-based approximate geographic segmentation. In the pending compliance update, Firebase Performance automatic collection and instrumentation are permanently disabled.</li>
        <li><strong>Providers:</strong> Version 1.1 may use Firebase Performance and sampled Sentry performance traces. In the pending compliance update, Sentry automatic and app-created performance tracing and Session Replay are disabled. Apple MetricKit diagnostics and local performance records are processed on device; selected technical performance summaries use the optional analytics channel.</li>
        <li><strong>Control:</strong> Usage analytics and performance sharing are off by default in App Store versions 1.1 and the pending compliance update, subject to explicit saved preferences. You can change Share Usage Analytics in Settings → Privacy &amp; Security. Turning it off stops the corresponding future sharing and discards pending app events; it does not delete data already received by a provider or recall requests already delivered.</li>
      </ul>

      <h3>2.3 Usage Analytics (Firebase Analytics)</h3>
      <ul>
        <li><strong>What:</strong> Feature interactions, onboarding and subscription events, purchase events, app preferences, app-instance and device identifiers, and approximate location derived from the network connection. These events do not include photo-library images or the precise GPS fields used to build your trip database.</li>
        <li><strong>Why:</strong> To understand feature use and improve the app. Events can be associated with the same app installation or device.</li>
        <li><strong>Control:</strong> Off by default in the App Store version; change Share Usage Analytics in Settings → Privacy &amp; Security.</li>
      </ul>

      <h3>2.4 Purchases (Apple and RevenueCat)</h3>
      <ul>
        <li><strong>What:</strong> Apple processes payments. RevenueCat receives purchase/transaction history and subscription status, and a randomly generated persistent app user ID also used as the StoreKit app account token. Version 1.1 also sends build-variant, broad-region, and diagnostic-cohort subscriber attributes; the pending compliance update removes these Charted-defined subscriber attributes. RevenueCat and Apple's SDKs may still receive ordinary app, device, storefront/country, and connection information needed to operate their services.</li>
        <li><strong>Why:</strong> Purchase validation, purchase restoration, subscription management, and subscription analytics.</li>
        <li><strong>Control:</strong> Purchase services operate separately from the optional usage-analytics switch. We do not receive your Apple ID, payment-card details, or billing address.</li>
      </ul>

      <h3>2.5 App Configuration (Firebase Remote Config)</h3>
      <p>
        Firebase Remote Config receives app, operating-system, language, country/region and installation
        information to deliver feature settings and experiments. In the currently released version 1.1,
        configuration requests can occur even when optional analytics is off. In the pending compliance update, remote
        fetching and live configuration updates require usage-analytics consent. Pending-data cleanup and current consent control collection;
        initialization itself is not a promise of zero SDK service traffic. With usage analytics disabled or withdrawn, the App uses local/default
        feature settings and stops new fetches and live updates. Requests already in flight may still reach the provider; results received after withdrawal are ignored. No photo library or trip database is included.
      </p>

      <h2>3. Information We Do Not Collect</h2>
      <p>We do not collect:</p>
      <ul>
        <li>Your name, email address, or phone number for app use; if you contact support by email, we receive the address and information you choose to send</li>
        <li>A user account (Charted does not require sign-in)</li>
        <li>Your contacts or social network data</li>
        <li>Your browsing history or other apps you use</li>
        <li>Your photo library on our servers (photos are accessed and processed locally)</li>
        <li>Cross-app or cross-website tracking identifiers (IDFA)</li>
        <li>Your precise location continuously in the background</li>
      </ul>

      <h2>4. Third-Party Services</h2>
      <p>
        Charted uses the services below. We remain responsible for the purposes and handling of personal
        data we determine, including requests relating to processors acting for us. Some providers, such
        as Apple for payments and its account services, also determine their own processing purposes;
        their policies explain that processing. Listing a provider does not transfer our responsibilities
        or limit your rights.
      </p>

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

      <h3>4.1 Purposes and Legal Bases</h3>
      <p>
        Where EU or UK data-protection law applies, the following bases apply to the purposes we
        determine. An iOS permission controls device access; it does not itself replace the legal
        basis or the separate sharing choices described above.
      </p>
      <ul>
        <li><strong>Requested app features:</strong> Processing local photo/trip data, requested maps, and selected exports is necessary to provide the features you ask for under our contract with you.</li>
        <li><strong>Purchases and restoration:</strong> Transaction identifiers and entitlement information are processed to perform our contract and deliver or restore Pro. Records required by applicable accounting or other laws are processed to meet those legal obligations. Apple determines its own payment and account-processing bases.</li>
        <li><strong>Optional analytics, performance sharing, and configuration experiments in the pending compliance update:</strong> Your consent. You can withdraw it in Settings without losing local core features; withdrawal does not affect processing that was lawful before withdrawal.</li>
        <li><strong>Crash/error sharing:</strong> The pending compliance update uses your explicit consent. Version 1.1 uses a default-on, opt-out setting for our legitimate interest in diagnosing failures and maintaining app reliability; you may object and turn it off. This older default is not described as consent.</li>
        <li><strong>Older configuration and security:</strong> Version 1.1 configuration uses our legitimate interest in delivering feature settings. Protecting the App and addressing abuse relies on our legitimate interests, balanced against your rights. Pending compliance update remote configuration and experiments are optional and use consent as stated above; we do not classify them as necessary to use the App.</li>
        <li><strong>Support:</strong> Responding to your app or subscription request is necessary to assist you under our contract; other correspondence uses our legitimate interest in responding to questions. We retain records where needed to comply with legal obligations or handle legal claims.</li>
      </ul>

      <h3>4.2 Processing Locations</h3>
      <p>
        The providers described above may process information outside your country, including in the
        United States. Local photo and trip processing is not a promise that all service information
        stays in your country. Provider policies describe their processing locations and transfer
        arrangements. You can contact us for information about the providers and applicable safeguards
        for processing on our behalf; this policy does not assert EU/UK-only hosting.
      </p>

      <h3>4.3 Retention</h3>
      <ul>
        <li><strong>Local content:</strong> Stored until you delete the relevant local data or remove the App, subject to separate exports, device backups, and offloading as described in §1.1. Cached images may be evicted earlier.</li>
        <li><strong>Diagnostics and analytics:</strong> Retention depends on the deployed provider settings and the time needed to investigate failures or evaluate the relevant feature use. We delete or anonymize records when no longer needed for those purposes, unless a legal obligation or active claim requires retention. Turning off sharing stops future corresponding sharing; it is not a deletion request for earlier records.</li>
        <li><strong>Google Analytics settings:</strong> As verified on October 1, 2026, user and event data retention is set to 14 months. The user-data timer resets on new activity, so data associated with an active user identifier may remain longer. This setting does not limit most standard aggregate reports or independent copies in other services. <a href="https://support.google.com/analytics/answer/7667196?hl=en" target="_blank" rel="noreferrer">Google explains these limits</a>. Changing a sharing preference does not itself delete these earlier records.</li>
        <li><strong>Purchase records:</strong> Kept as necessary to provide and restore entitlements and handle refunds or disputes, and for any applicable statutory recordkeeping period. Apple's own payment-record retention is determined by Apple.</li>
        <li><strong>Support:</strong> Kept while resolving your request and any necessary follow-up, then deleted when no longer needed, except records required for legal obligations or claims.</li>
      </ul>
      <p>
        We do not promise a single retention period for all provider systems. Contact us for the
        current settings or to request deletion of records relating to you. Copies in provider backup
        systems may remain until those systems' normal deletion cycles complete; legal retention
        exceptions will be explained when they apply to your request.
      </p>

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
        Apple's refund process applies without limiting mandatory consumer rights.
        See <a href="https://support.apple.com/HT202039" target="_blank" rel="noreferrer">Apple Subscriptions</a>.
      </p>

      <h2>6. Children's Privacy</h2>
      <p>
        Charted is not directed to children under 13. If you believe a child has provided personal
        information to us, please contact us so we can investigate and address the request.
      </p>

      <h2>7. Your Rights</h2>
      <p>
        You can manage local app data and sharing preferences on your device. For questions or requests
        about information we process or providers process for us, contact us at the address below.
        Depending on applicable law, you may request access, correction, deletion, restriction, or
        portability, object to legitimate-interest processing, and withdraw consent without affecting
        the lawfulness of earlier processing. These rights have legal limits, which we will explain
        if they apply. We do not make decisions about you with legal or similarly significant effects
        solely through automated processing.
      </p>
      <ul>
        <li><strong>Local data:</strong> Your saved trips are available inside Charted. We do not hold a remote copy of your photo library or trip database and cannot delete these local records from a server. Manage them on your device using the controls below.</li>
        <li><strong>Deletion:</strong> Use Settings → Data Controls for local controls, or remove the App. Offloading preserves data. Neither action deletes photos, external exports/backups, Apple subscriptions, purchase records, or diagnostics already received by providers. Requests to us concern only records we actually hold or providers process for us, such as support correspondence, purchase records, or diagnostics. We address them according to applicable rights and retention duties; we will explain if no matching record is held or a legal retention requirement applies. Apple account/payment requests can also be directed to Apple.</li>
        <li><strong>Export:</strong> Settings → Data Controls → Export Data offers selected JSON, CSV, or GPX data. These files are not a complete restorable backup and do not include original photo files or all edits/settings. In the pending compliance update, the separate Backup &amp; Restore feature preserves its supported personal records; it does not copy original Photos files or every preference.</li>
        <li><strong>Sharing controls:</strong> Settings → Privacy &amp; Security → Share Usage Analytics / Share Crash Reports. Turning these off stops the corresponding sharing; it does not erase reports previously received.</li>
      </ul>
      <p>
        For EU/UK rights requests, we respond without undue delay and ordinarily within one calendar
        month. Where the law permits an extension for complexity or multiple requests, we may extend
        by up to two further months and will explain the reason within the initial month. We may ask
        for proportionate information to verify your identity or identify the relevant installation
        records. Please do not email your photo library or full location history just to make a request.
      </p>
      <p>
        You may complain to your local data-protection authority or seek a judicial remedy. In the UK,
        contact the <a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noreferrer">Information Commissioner's Office</a>;
        in Ireland, contact the <a href="https://www.dataprotection.ie/en/individuals/exercising-your-rights/complaints-handling-investigations-and-enforcement-individuals" target="_blank" rel="noreferrer">Data Protection Commission</a>.
        You do not have to waive those rights to contact us first.
      </p>
      <p>
        For questions: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
      </p>

      <h2>8. Data Security</h2>
      <ul>
        <li>Your photos, locations, and journey data are stored on your device, protected by iOS sandbox isolation.</li>
        <li>Any network traffic Charted does make uses HTTPS/TLS.</li>
        <li>We limit off-device sharing to the purposes described above. No storage or transmission method is risk-free. Keep your device, backups, and exported location records secure, and review the destination before sharing.</li>
      </ul>

      <h2>9. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy. The "Last Updated" date at the top will reflect the most recent change.
        Material changes will be communicated via in-app notice.
      </p>

      <h2>10. Contact</h2>
      <p>
        <strong>Email:</strong> <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a><br />
        <strong>Controller:</strong> Vertex Horizon Inc.<br />
        <strong>Mailing Address:</strong> 3405 Montgomery Dr Apt 255, Santa Clara, CA 95054-3080, United States<br />
        <strong>Business Phone:</strong> <a href="tel:+16088951157">+1 608-895-1157</a>
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
