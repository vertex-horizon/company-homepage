import { productPath } from '../config.js'
import { NavLink } from '../ChartedApp.jsx'
import { regionalInformation, informationLinks } from './regionalInformation.js'

export function RegionalLinks({ navigate }) {
  return (
    <p className="c-regional-links">
      <NavLink to={productPath('/info/de')} navigate={navigate} lang="de" hrefLang="de">Deutsch</NavLink>
      {' · '}
      <NavLink to={productPath('/info/nl')} navigate={navigate} lang="nl" hrefLang="nl">Nederlands</NavLink>
      {' · '}
      <NavLink to={productPath('/info/et')} navigate={navigate} lang="et" hrefLang="et">Eesti</NavLink>
    </p>
  )
}

export default function RegionalInfo({ language, navigate }) {
  const content = regionalInformation[language]
  return (
    <article className="c-doc" lang={language}>
      <header>
        <h1>{content.title}</h1>
        <p className="c-doc-meta">{content.updated}</p>
      </header>
      <RegionalLinks navigate={navigate} />
      <p className="c-doc-summary">{content.intro}</p>
      <nav aria-label={content.title}>
        <ul>{content.sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}</ul>
      </nav>
      {content.sections.map((section) => (
        <section key={section.id} id={section.id}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.links && <ul>{section.links.map((key) => (
            <li key={key}><a href={informationLinks[key][1]}>{informationLinks[key][0]}</a></li>
          ))}</ul>}
          {section.id === 'provider' && <p><a href="mailto:contact@vertex-horizon.com">contact@vertex-horizon.com</a>{' · '}<a href="tel:+16088951157">+1 608-895-1157</a>{' · '}<a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Apple Standard EULA</a></p>}
        </section>
      ))}
      <div className="c-doc-footer">
        <p>{content.full}</p>
        <p lang="en"><NavLink to={productPath('/privacy')} navigate={navigate}>Privacy Policy (English)</NavLink>{' · '}<NavLink to={productPath('/terms')} navigate={navigate}>Terms of Use (English)</NavLink></p>
        <p lang="fr-CA"><NavLink to={productPath('/privacy/fr')} navigate={navigate}>Politique de confidentialité (français)</NavLink>{' · '}<NavLink to={productPath('/terms/fr')} navigate={navigate}>Conditions d’utilisation (français)</NavLink></p>
      </div>
    </article>
  )
}
