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
      {' · '}
      <NavLink to={productPath('/info/it')} navigate={navigate} lang="it" hrefLang="it">Italiano</NavLink>
      {' · '}
      <NavLink to={productPath('/info/cs')} navigate={navigate} lang="cs" hrefLang="cs">Čeština</NavLink>
      {' · '}
      <NavLink to={productPath('/info/pt')} navigate={navigate} lang="pt-PT" hrefLang="pt-PT">Português</NavLink>
      {' · '}
      <NavLink to={productPath('/info/hu')} navigate={navigate} lang="hu" hrefLang="hu">Magyar</NavLink>
      {' · '}
      <NavLink to={productPath('/info/sk')} navigate={navigate} lang="sk" hrefLang="sk">Slovenčina</NavLink>
      {' · '}
      <NavLink to={productPath('/info/pl')} navigate={navigate} lang="pl" hrefLang="pl">Polski</NavLink>
      {' · '}
      <NavLink to={productPath('/info/hr')} navigate={navigate} lang="hr" hrefLang="hr">Hrvatski</NavLink>
      {' · '}
      <NavLink to={productPath('/info/lt')} navigate={navigate} lang="lt" hrefLang="lt">Lietuvių</NavLink>
      {' · '}
      <NavLink to={productPath('/info/bg')} navigate={navigate} lang="bg" hrefLang="bg">Български</NavLink>
      {' · '}
      <NavLink to={productPath('/info/el')} navigate={navigate} lang="el" hrefLang="el">Ελληνικά</NavLink>
      {' · '}
      <NavLink to={productPath('/info/ro')} navigate={navigate} lang="ro" hrefLang="ro">Română</NavLink>
      {' · '}
      <NavLink to={productPath('/info/cy')} navigate={navigate} lang="el-CY" hrefLang="el-CY">Ελληνικά (Κύπρος)</NavLink>
      {' · '}
      <NavLink to={productPath('/info/is')} navigate={navigate} lang="is" hrefLang="is">Íslenska</NavLink>
      {' · '}
      <NavLink to={productPath('/info/es')} navigate={navigate} lang="es" hrefLang="es">Español</NavLink>
      {' · '}
      <NavLink to={productPath('/info/ca')} navigate={navigate} lang="ca" hrefLang="ca">Català</NavLink>
      {' · '}
      <NavLink to={productPath('/info/lv')} navigate={navigate} lang="lv" hrefLang="lv">Latviešu</NavLink>
      {' · '}
      <NavLink to={productPath('/info/nb')} navigate={navigate} lang="nb" hrefLang="nb">Norsk bokmål</NavLink>
      {' · '}
      <NavLink to={productPath('/info/ja')} navigate={navigate} lang="ja" hrefLang="ja">日本語</NavLink>
      {' · '}
      <NavLink to={productPath('/info/sl')} navigate={navigate} lang="sl" hrefLang="sl">Slovenščina</NavLink>
      {' · '}
      <NavLink to={productPath('/info/ko')} navigate={navigate} lang="ko" hrefLang="ko">한국어</NavLink>
    </p>
  )
}

// 累计语言链接已超过法语商店描述预算；单一索引只缩短入口，不删必要事实或伪称新增UI语言。
export function RegionalIndex({ navigate }) {
  return (
    <article className="c-doc">
      <header><h1>Product information · Informations produit</h1></header>
      <p lang="en">Choose your language for essential use, purchase and privacy information. The App interface remains English and French.</p>
      <p lang="fr">Choisissez votre langue pour les informations essentielles d’utilisation, d’achat et de confidentialité. L’interface de l’app reste en anglais et en français.</p>
      <RegionalLinks navigate={navigate} />
      <p lang="en"><NavLink to={productPath('/privacy')} navigate={navigate}>Privacy Policy (English)</NavLink>{' · '}<NavLink to={productPath('/terms')} navigate={navigate}>Terms of Use (English)</NavLink></p>
      <p lang="fr"><NavLink to={productPath('/privacy/fr')} navigate={navigate}>Politique de confidentialité (français)</NavLink>{' · '}<NavLink to={productPath('/terms/fr')} navigate={navigate}>Conditions d’utilisation (français)</NavLink></p>
    </article>
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
