import { NavLink } from '../ChartedApp.jsx'
import { SUPPORT_EMAIL } from '../config.js'

/**
 * Terms of Use.
 *
 * 本网页是公开条款的完整正文；AppStore/04_privacy/terms_of_service_en.md 记录发布对应口径，
 * 不是本网页的完整正文来源。
 *
 * Required by Apple for any app with In-App Purchases (subscriptions).
 * Must be reachable from:
 *   - In-app paywall
 *   - Settings → About / Subscription
 *   - The app's marketing site (this page)
 */
export default function Terms({ navigate }) {
  return (
    <article className="c-doc">
      <header>
        <h1>Terms of Use</h1>
        <div className="c-doc-meta">
          <span><strong>Last Updated:</strong> October 1, 2026</span>
          <span><strong>Effective Date:</strong> October 1, 2026</span>
        </div>
      </header>

      <p><NavLink to="/charted/terms/fr" navigate={navigate} hrefLang="fr-CA" lang="fr-CA">Français (Canada)</NavLink></p>

      <p>
        These Terms of Use ("<strong>Terms</strong>") govern your use of Charted ("the <strong>App</strong>"),
        provided by <strong>Vertex Horizon Inc.</strong> ("we", "us", "our"). By downloading or using Charted,
        you agree to these Terms.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 13 years old to use Charted. If you are under 18, you must have parental permission.
      </p>

      <h2>2. Your Use of the App</h2>
      <p>You agree to use Charted only for lawful purposes. You will not:</p>
      <ul>
        <li>Reverse engineer, decompile, or disassemble the App except where applicable law permits it</li>
        <li>Use the App to violate any law or third-party rights</li>
        <li>Resell, sublicense, or redistribute the App</li>
        <li>Use the App in any way that could damage, disable, or impair our services</li>
      </ul>

      <h2>3. Your Content</h2>
      <p>
        Charted processes photo dates, GPS metadata, and image content on your device to generate maps,
        journeys, highlights, and stories. Apple Photos may download iCloud photos when needed.
        Apple Maps and address lookup may send coordinates or map regions to Apple. Purchases, app
        configuration, diagnostics, optional analytics, and Apple speech recognition use the services
        described in our Privacy Policy, including the version-specific speech-processing limits.
        Charted does not upload your photo library or local trip database to our servers or a cloud AI service.
        We do not operate a backend that stores them or hold a remote copy; you manage these records
        on your device, and we cannot delete local records from a server. Requests about records
        actually held by us or processed for us by providers are handled as described in our Privacy Policy.
        <strong>You retain all rights</strong> to your photos,
        journeys, narratives, and any content created through the App. We do not claim any ownership of your content.
      </p>
      <p>
        Generative journey text requires iOS 26 or later and Apple Intelligence available on a supported
        device, language, and region with its models ready. Otherwise, Charted uses local template summaries.
        Buying Pro does not enable Apple Intelligence. Generated text and inferred trips may contain errors;
        review them before relying on or sharing them. Maps and boundaries are for travel memories, not
        navigation, legal boundaries, or claims of sovereignty.
      </p>
      <p>
        Sharing or exporting sends the content you choose to the destination app or service.
        JSON, CSV, and GPX exports contain selected data and may include sensitive location history;
        they do not include photo files or a complete record of all edits and settings, and cannot be
        imported as a full Charted backup. Any separate Backup &amp; Restore feature has its own scope
        and cannot restore missing original photos. Keep exports and backups secure.
      </p>

      <h2>4. In-App Purchases (Charted Pro)</h2>

      <h3>4.1 Subscription Description</h3>
      <p>
        Charted offers premium features through a subscription called <strong>Charted Pro</strong>,
        available in the following options:
      </p>
      <ul>
        <li><strong>Monthly subscription</strong> — auto-renews monthly until canceled</li>
        <li><strong>Annual subscription</strong> — auto-renews annually until canceled; an eligible introductory offer may be available</li>
      </ul>
      <p>
        Apple displays the price, currency, billing period, taxes, and applicable offer in your App Store
        storefront at purchase confirmation. Current catalog prices may differ from an existing subscriber's
        renewal price; use Apple's subscription management screen to check your next charge.
        Lifetime access is available only through a valid gift offer code where offered, and is not a public
        direct-purchase plan. Lifetime membership does not renew, but any separate monthly or annual
        subscription must be managed separately. Redeeming a discounted or free subscription offer does
        not necessarily disable its automatic renewal.
      </p>

      <h3>4.2 Free Trial</h3>
      <p>
        Trial eligibility, duration, and availability are determined by Apple and shown before purchase.
        A trial is not guaranteed to every new installation or subscriber. If your eligible offer includes
        a free trial, cancel within the deadline Apple shows to avoid the next charge. After the trial,
        the subscription renews at the terms shown by Apple unless canceled.
      </p>

      <h3>4.3 Payment &amp; Billing</h3>
      <ul>
        <li>Payment is charged to your Apple ID account at confirmation of purchase.</li>
        <li>Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period.</li>
        <li>Your account will be charged for renewal within 24 hours prior to the end of the current period.</li>
        <li>You can manage and cancel your subscription in your <strong>Apple ID account settings</strong> after purchase.</li>
      </ul>

      <h3>4.4 How to Cancel</h3>
      <p>To cancel:</p>
      <ol>
        <li>Open the <strong>Settings</strong> app on your iPhone</li>
        <li>Tap your <strong>name</strong> at the top</li>
        <li>Tap <strong>Subscriptions</strong></li>
        <li>Select <strong>Charted</strong></li>
        <li>Tap <strong>Cancel Subscription</strong></li>
      </ol>
      <p>You will retain Pro features until the end of your current billing period.</p>

      <h3>4.5 Refunds</h3>
      <p>
        Refunds are handled by Apple, not by us. To request a refund, visit{' '}
        <a href="https://reportaproblem.apple.com" target="_blank" rel="noreferrer">reportaproblem.apple.com</a>.
        Apple's process does not limit any refund, cancellation, or other remedy you have under applicable
        consumer law. Contact us if you need help with an issue with the App.
      </p>

      <h3>4.6 Price Changes</h3>
      <p>
        We may change subscription prices. Apple provides the notices and obtains any consent required
        for your subscription and storefront. You can review the change and cancel before it takes effect.
        Your mandatory consumer rights remain unaffected.
      </p>

      <h2>5. Intellectual Property</h2>
      <p>
        The App, including its design, code, content, and trademarks, is owned by Vertex Horizon and is
        protected by intellectual property laws. We grant you a limited, non-exclusive, non-transferable
        license to use the App for personal, non-commercial purposes.
      </p>

      <h2>6. Third-Party Content</h2>
      <p>Charted uses imagery and data from third parties:</p>
      <ul>
        <li><strong>NASA Visible Earth</strong> — Earth imagery (Public Domain)</li>
        <li><strong>Solar System Scope</strong> — Earth textures (CC BY 4.0)</li>
        <li><strong>Natural Earth</strong> — Country boundaries (Public Domain)</li>
      </ul>
      <p>
        Use of these resources does not imply endorsement by their creators. Full attribution is available
        in the App at: <strong>Settings → About → Third-Party Notices</strong>.
      </p>

      <h2>7. Privacy</h2>
      <p>
        Your use of Charted is also governed by our{' '}
        <NavLink to="/charted/privacy" navigate={navigate}>Privacy Policy</NavLink>,
        which describes how we handle your data.
      </p>

      <h2>8. Disclaimer of Warranties</h2>
      <p>
        Nothing in these Terms excludes or restricts rights or remedies that applicable law does not
        permit us to exclude. This includes guarantees under the Australian Consumer Law and New
        Zealand Consumer Guarantees Act, and statutory digital-content and service rights in the UK
        and Ireland. Where the App fails to meet a mandatory guarantee, you retain the remedies the
        applicable law provides, including repair, replacement, refund, or cancellation where available.
      </p>
      <p>
        SUBJECT TO THOSE MANDATORY RIGHTS, THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
        ADDITIONAL WARRANTIES OF ANY KIND, EITHER EXPRESS OR
        IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED OR ERROR-FREE.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL VERTEX HORIZON BE LIABLE FOR ANY INDIRECT,
        INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE APP. OUR TOTAL LIABILITY
        WILL NOT EXCEED THE AMOUNT YOU PAID FOR THE APP IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
        THESE LIMITS DO NOT APPLY TO LIABILITY THAT CANNOT LAWFULLY BE EXCLUDED OR LIMITED,
        INCLUDING APPLICABLE CONSUMER GUARANTEES, FRAUD, OR DEATH OR PERSONAL INJURY CAUSED BY NEGLIGENCE.
      </p>

      <h2>10. Termination</h2>
      <p>
        We may suspend or terminate your access to the App if you violate these Terms. You may stop using
        the App at any time by removing it. Removing the App does not cancel an Apple subscription;
        cancel through Apple separately. Termination does not remove mandatory statutory remedies.
      </p>

      <h2>11. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. The "Last Updated" date will reflect the most recent
        change. We will give notice of material changes and obtain agreement where required by law.
        Changes do not retrospectively remove accrued rights or mandatory consumer protection.
      </p>

      <h2>12. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the State of California, USA, without regard to conflict
        of laws principles, subject to mandatory protections under the law of your country of residence.
        You retain any right applicable law gives you to bring proceedings in your local courts or use
        a statutory dispute-resolution process. California courts are available where legally appropriate;
        this clause does not require a consumer to waive a mandatory local forum or remedy.
      </p>

      <h2>13. Apple-Specific Terms</h2>
      <p>
        You acknowledge that these Terms are between you and Vertex Horizon, not Apple. Apple is not
        responsible for the App or its content except for responsibilities Apple has under its own terms
        or applicable law. Apple's applicable licensed-application terms and App Store terms also apply.
        A conflict does not override mandatory consumer rights, or responsibilities we have as the App provider.
      </p>
      <p>
        Apple is a third-party beneficiary of these Terms and may enforce them against you.
      </p>

      <h2>14. Contact</h2>
      <p>For questions about these Terms:</p>
      <p>
        <strong>Email:</strong> <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a><br />
        <strong>Mailing Address:</strong> 3405 Montgomery Dr Apt 255, Santa Clara, CA 95054-3080, United States<br />
        <strong>Business Phone:</strong> <a href="tel:+16088951157">+1 608-895-1157</a>
      </p>

      <div className="c-doc-footer">
        <span>© {new Date().getFullYear()} Vertex Horizon Inc.</span>
        <span>
          <NavLink to="/charted/privacy" navigate={navigate}>Privacy Policy</NavLink>
          {' · '}
          <NavLink to="/charted/support" navigate={navigate}>Support</NavLink>
        </span>
      </div>
    </article>
  )
}
