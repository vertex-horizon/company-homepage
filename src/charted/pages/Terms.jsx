import { NavLink } from '../ChartedApp.jsx'
import { SUPPORT_EMAIL } from '../config.js'

/**
 * Terms of Use.
 *
 * Source: AppStore/04_privacy/terms_of_service_en.md
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
          <span><strong>Last Updated:</strong> April 27, 2026</span>
          <span><strong>Effective Date:</strong> April 27, 2026</span>
        </div>
      </header>

      <p>
        These Terms of Use ("<strong>Terms</strong>") govern your use of Charted ("the <strong>App</strong>"),
        provided by <strong>Vertex Horizon</strong> ("we", "us", "our"). By downloading or using Charted,
        you agree to these Terms.
      </p>

      <h2>1. Eligibility</h2>
      <p>
        You must be at least 13 years old to use Charted. If you are under 18, you must have parental permission.
      </p>

      <h2>2. Your Use of the App</h2>
      <p>You agree to use Charted only for lawful purposes. You will not:</p>
      <ul>
        <li>Reverse engineer, decompile, or disassemble the App</li>
        <li>Use the App to violate any law or third-party rights</li>
        <li>Resell, sublicense, or redistribute the App</li>
        <li>Use the App in any way that could damage, disable, or impair our services</li>
      </ul>

      <h2>3. Your Content</h2>
      <p>
        Charted operates entirely on your device. The App reads metadata from photos in your Photos library
        to generate maps, journeys, and stories. <strong>You retain all rights</strong> to your photos,
        journeys, narratives, and any content created through the App. We do not claim any ownership of your content.
      </p>

      <h2>4. In-App Purchases (Charted Pro)</h2>

      <h3>4.1 Subscription Description</h3>
      <p>
        Charted offers premium features through a subscription called <strong>Charted Pro</strong>,
        available in the following options:
      </p>
      <ul>
        <li><strong>Monthly subscription</strong> — $2.99/month, auto-renews monthly until canceled</li>
        <li><strong>Annual subscription</strong> — $29.99/year, with a 7-day free trial for new subscribers, auto-renews annually until canceled</li>
        <li><strong>Lifetime</strong> — $79.99 one-time purchase, no recurring billing</li>
      </ul>
      <p>Pricing is displayed inside the App at the time of purchase, in your local currency where supported.</p>

      <h3>4.2 Free Trial</h3>
      <p>
        A 7-day free trial is available to new subscribers of the Annual plan. If you do not cancel before
        the trial ends, your selected subscription will begin and you will be charged.
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
        Refund decisions are at Apple's discretion.
      </p>

      <h3>4.6 Price Changes</h3>
      <p>
        We may change subscription prices. If we do, we will notify you in advance and you will have the
        option to cancel before the new price takes effect.
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
        THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
        IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED OR ERROR-FREE.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL VERTEX HORIZON BE LIABLE FOR ANY INDIRECT,
        INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF YOUR USE OF THE APP. OUR TOTAL LIABILITY
        WILL NOT EXCEED THE AMOUNT YOU PAID FOR THE APP IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
      </p>

      <h2>10. Termination</h2>
      <p>
        We may suspend or terminate your access to the App if you violate these Terms. You may stop using
        the App at any time by uninstalling it.
      </p>

      <h2>11. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. The "Last Updated" date will reflect the most recent
        change. Continued use of the App after a change constitutes acceptance of the new Terms.
      </p>

      <h2>12. Governing Law</h2>
      <p>
        These Terms are governed by the laws of the State of California, USA, without regard to conflict
        of laws principles. Any dispute arising from these Terms will be resolved in the state and federal
        courts located in California.
      </p>

      <h2>13. Apple-Specific Terms</h2>
      <p>
        You acknowledge that these Terms are between you and Vertex Horizon, not Apple. Apple is not
        responsible for the App or its content. In the event of a conflict between these Terms and the
        Apple Standard EULA, the more restrictive terms apply.
      </p>
      <p>
        Apple is a third-party beneficiary of these Terms and may enforce them against you.
      </p>

      <h2>14. Contact</h2>
      <p>For questions about these Terms:</p>
      <p>
        <strong>Email:</strong> <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a><br />
        <strong>Mailing Address:</strong> Vertex Horizon Inc. — please contact us by email for postal correspondence.
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
