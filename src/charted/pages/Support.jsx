import helpTopics from '../content/help-topics.json'
import { RegionalLinks } from './RegionalInfo.jsx'
import { productPath } from '../config.js'
import { NavLink } from '../ChartedApp.jsx'
import { SUPPORT_EMAIL, APP_STORE_URL, PARENT_SITE } from '../config.js'

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
      <p><a href="#faq-en">English FAQ</a> · <a href="#faq-fr">FAQ en français</a></p>
      {/* 保留原支持入口；英法FAQ共用已审阅编辑源，不改变路由、联系或地区告知。 */}
      {['en', 'fr'].map((language) => (
        <section key={language} lang={language} aria-labelledby={`faq-${language}`}>
          <h2 id={`faq-${language}`} style={{ scrollMarginTop: '6rem' }}>
            {language === 'en' ? 'Frequently Asked Questions' : 'Questions fréquentes'}
          </h2>
          {helpTopics.map((topic) => (
            <section key={topic.id} aria-labelledby={`faq-${language}-${topic.id}`}>
              <h3 id={`faq-${language}-${topic.id}`}>{topic.question[language]}</h3>
              {topic.answer[language].map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </section>
          ))}
        </section>
      ))}

      <h2>Data deletion / Suppression des données</h2>
      <p>
        Use Mapvoy&apos;s local data controls or remove the app to delete its local records.
        Offloading preserves app data. This does not delete Apple Photos originals, exports or backups
        saved elsewhere, purchase records, or reports already received by providers, and it does not
        cancel a subscription. Contact us about information we or providers acting for us actually hold;
        see our <NavLink to={productPath('/privacy')} navigate={navigate}>Privacy Policy</NavLink> for details.
      </p>

      <p lang="fr">
        Utilisez les commandes de données locales de Mapvoy ou supprimez l’app pour effacer ses données locales.
        Décharger l’app conserve ses données. Cette action ne supprime pas les originaux dans Photos d’Apple,
        les exports ou sauvegardes ailleurs, les achats ou les rapports déjà reçus par les prestataires,
        et ne résilie pas un abonnement. Pour les données que nous ou nos prestataires détenons,
        contactez-nous et consultez la{' '}
        <NavLink to={productPath('/privacy/fr')} navigate={navigate}>Politique de confidentialité</NavLink>.
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
        <li><a href={PARENT_SITE}>Vertex Horizon (parent company)</a></li>
      </ul>

      <div className="c-doc-footer">
        <span>© {new Date().getFullYear()} Vertex Horizon Inc.</span>
        <span>Made with care, on device.</span>
      </div>
    </article>
  )
}
