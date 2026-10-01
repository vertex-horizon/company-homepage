import { NavLink } from '../ChartedApp.jsx'
import { SUPPORT_EMAIL } from '../config.js'

/**
 * Terms of Use — 与 life-footprints/AppStore/04_privacy/terms_of_service_en.md 的候选口径对齐。
 *
 * ASC 当前使用 Apple Standard EULA；这里补充产品、购买和支持安排，不另授软件许可，
 * 不把网页冒充已提交的 Custom EULA，也不重复增加 AS IS 全面免责、责任上限或专属法院。
 * 强制消费者权利仍适用；候选功能说明不能追溯改变旧安装或旧购买的条款。
 * 本地稿需要与候选发行包共同验收，更新正文不等于网站已部署或版本已上架。
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
        Charted is provided by <strong>Vertex Horizon Inc.</strong> These terms describe our App and
        its purchasing and support arrangements. Your license to the App is governed by Apple&apos;s{' '}
        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noreferrer">Standard EULA</a>.
        This page is a supplementary notice, not a separate software license or a Custom EULA.
        Nothing here removes rights or remedies that applicable law does not allow us to exclude.
      </p>
      <p>
        <strong>Version note:</strong> The App changes described for version 1.1.1 are prepared for
        that release and are pending App Store availability. Version 1.1 remains the currently released
        version until the update is available. Publishing these terms does not change the behavior of
        an older installed App or retrospectively change an existing purchase.
      </p>

      <h2>1. Eligibility and Responsible Use</h2>
      <p>
        Charted is intended for people aged 13 and over. If you are under the age required to enter
        into a contract or make a purchase where you live, obtain your parent&apos;s or guardian&apos;s
        permission and assistance. This age statement is not age verification or a parental-consent
        service. Charted is not designed as a children&apos;s service. A parent or guardian can contact
        us about a child&apos;s information as explained in our Privacy Policy.
      </p>
      <p>
        Use Charted lawfully and respect the rights of others when importing, exporting, or sharing
        content. Use and restrictions on the software license are set out in the Standard EULA,
        subject to applicable law and the licenses of included third-party components.
      </p>

      <h2>2. Your Content and the App&apos;s Limits</h2>
      <p>
        You retain the rights you have in your photos and other content. We do not acquire ownership
        of your local content merely because you use Charted. Charted reads photo dates and locations,
        displays images, and analyzes them on your device to organize travel records. It does not
        modify your Apple Photos originals or upload your photo library or local trip database to
        our servers or a cloud AI service. Apple Photos may download iCloud images when needed.
        Network services support purchases, requested maps and addresses, App configuration, and
        technical sharing as described in our{' '}
        <NavLink to="/charted/privacy" navigate={navigate}>Privacy Policy</NavLink>,
        including the choices and limits of the installed version. You control exports and sharing
        you initiate. Requests about records actually held by us or processed for us by providers
        are handled as described in the Privacy Policy.
      </p>
      <p>
        Records, detected places, straight-line distance estimates, map boundaries, and generated
        text may be incomplete or inaccurate. They are not proof of a measured route, entry into a
        place, or a political or legal boundary. Review generated content before sharing it.
        Charted is not intended for navigation, emergency response, border crossing, or determining
        legal jurisdiction.
      </p>
      <p>
        Generative journey text requires iOS 26 or later and Apple Intelligence available on your
        device, including supported device, language, region, and ready models. When unavailable,
        Charted uses local template summaries. Buying Pro does not enable Apple Intelligence.
      </p>
      <p>
        Data Export produces selected JSON, CSV, or GPX records. It does not include photo originals
        or all edits/settings and cannot be imported to restore Charted. The separate Backup &amp;
        Restore feature preserves its listed personal records in an unencrypted JSON file and
        requires an empty Charted library for restoration; it does not recover photo originals,
        every preference, or purchases. Keep exported files in a trusted location. Removing local
        records or the App does not remove exports or backups saved elsewhere, Apple Photos
        originals, purchase records, or reports already received by providers.
      </p>

      <h2>3. Charted Pro Purchases</h2>
      <p>
        Monthly and yearly plans are auto-renewable subscriptions. Version 1.1.1 displays prices
        returned by the App Store in your storefront&apos;s currency, without substituting a fixed
        US dollar price when pricing is unavailable. Apple&apos;s purchase confirmation shows the
        applicable amount, billing period, and offer. A yearly amount divided by twelve is a
        comparison only: the yearly subscription is billed yearly.
      </p>
      <p>
        Current catalog prices and savings comparisons may differ from an existing subscriber&apos;s
        actual renewal terms. Check Apple subscription settings for your next charge. Price changes
        follow Apple&apos;s notice and consent requirements for your subscription and storefront.
      </p>
      <p>
        A free introductory trial is available only if StoreKit identifies you as eligible for the
        offer shown. A trial is not promised to every new user. Review Apple&apos;s confirmation and
        cancellation deadline. Apple recommends canceling a trial at least 24 hours before it ends
        if you do not want it to renew. After an offer, the subscription renews on the terms Apple
        shows unless canceled. Country-specific cancellation rules and mandatory rights continue
        to apply.
      </p>
      <p>
        Lifetime access is not offered as a public direct-purchase plan. Valid gift offer codes may
        grant lifetime or other Pro access where offered; the redemption confirmation determines
        the offer, any charge, and its duration. Lifetime membership does not itself renew.
        Redeeming it does not cancel a separate existing monthly or yearly subscription.
      </p>

      <h2>4. Manage, Cancel, Restore, or Request a Refund</h2>
      <p>
        In version 1.1.1, open Settings → Profile → Your Charted Pro → Manage or Cancel Subscription
        to open Apple&apos;s management panel directly. You can also open iPhone Settings → your
        name → Subscriptions → Charted and follow Apple&apos;s cancellation instructions. Use the
        Apple Account associated with the purchase. The end of access is shown by Apple and may
        depend on the offer and your region. Removing or offloading Charted, deleting local data,
        or redeeming a gift does not cancel an existing subscription. See Apple&apos;s{' '}
        <a href="https://support.apple.com/en-us/118428" target="_blank" rel="noreferrer">cancellation instructions</a>.
      </p>
      <p>
        Use Restore Purchases in the App to recover available entitlements linked to your Apple
        purchase. Restoring purchases does not restore your local travel database or external
        backup files.
      </p>
      <p>
        For an Apple-billed purchase, request a refund at{' '}
        <a href="https://reportaproblem.apple.com" target="_blank" rel="noreferrer">reportaproblem.apple.com</a>.
        Apple&apos;s refund process does not replace or limit any statutory withdrawal,
        cancellation, refund, or other remedy you may have. Contact us if you need assistance with
        the App or a consumer-rights request. We do not guarantee that every request qualifies for
        a refund. See Apple&apos;s{' '}
        <a href="https://support.apple.com/en-us/118223" target="_blank" rel="noreferrer">refund information</a>.
      </p>

      <h2>5. Mandatory Rights and Changes</h2>
      <p>
        Mandatory consumer protections, guarantees, and remedies apply. This includes rights under
        applicable EU/UK law and the Australian and New Zealand consumer laws where relevant, and
        rights elsewhere that cannot lawfully be excluded. Nothing here imposes an exclusive
        California forum, waives those rights, or removes the right to use competent local courts
        or a statutory dispute process.
      </p>
      <p>
        We aim to maintain the App, but cannot promise that generated text, third-party map data,
        or every feature will always be available or error-free. Applicable guarantees and duties
        still apply. Software license provisions in the Standard EULA remain subject to its terms
        and mandatory local law; this supplementary notice creates no additional blanket warranty
        exclusion or liability cap.
      </p>
      <p>
        If terms or paid features materially change, we will provide appropriate notice and obtain
        agreement where required. A published date alone does not change existing purchase terms
        or constitute consent to additional personal-data processing.
      </p>

      <h2>6. Contact and Third-Party Notices</h2>
      <p><strong>Vertex Horizon Inc.</strong></p>
      <p>
        <strong>Email:</strong> <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a><br />
        <strong>Mailing Address:</strong> 3405 Montgomery Dr Apt 255, Santa Clara, CA 95054-3080, United States<br />
        <strong>Business Phone:</strong> <a href="tel:+16088951157">+1 608-895-1157</a>
      </p>
      <p>
        See Settings → About → Third-Party Notices in the App for included component and resource
        licenses and attribution. Use of those resources does not imply endorsement by their
        creators.
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
