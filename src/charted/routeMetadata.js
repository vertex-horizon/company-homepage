import { IS_PRODUCT_SITE } from './config.js'

// 浏览器和静态构建共用路由表；产品独立域名不再带内部项目名。
export function createRouteMetadata(productSite = false) {
  const base = productSite ? '' : '/charted'
  return {
    home: {
      path: base || '/', lang: 'en',
      title: 'Mapvoy — You\'ve been further than you think.',
      description: 'Every place in your photos, on a 3D globe. Mapvoy builds a travel map from the photos already on your iPhone, with your trips found and your countries counted.',
    },
    privacy: {
      path: `${base}/privacy`, lang: 'en', alternate: 'privacyFr',
      title: 'Privacy Policy — Mapvoy',
      description: 'How Mapvoy processes your photo library locally, uses Apple and other service providers, and lets you control diagnostics and optional analytics.',
    },
    privacyFr: {
      path: `${base}/privacy/fr`, lang: 'fr-CA', alternate: 'privacy',
      title: 'Politique de confidentialité — Mapvoy',
      description: 'Traitement local des photos, services Apple et autres fournisseurs, diagnostics et analyses facultatives : vos renseignements et vos choix dans Mapvoy.',
    },
    terms: {
      path: `${base}/terms`, lang: 'en', alternate: 'termsFr',
      title: 'Terms of Use — Mapvoy',
      description: 'Mapvoy Terms of Use. Subscription terms, your content, and how Mapvoy Pro works.',
    },
    termsFr: {
      path: `${base}/terms/fr`, lang: 'fr-CA', alternate: 'terms',
      title: 'Conditions d’utilisation — Mapvoy',
      description: 'Conditions d’utilisation de Mapvoy : abonnements, contenu personnel, Mapvoy Pro et droits des consommateurs.',
    },
    infoDe: {
      path: `${base}/info/de`, lang: 'de', languageGroup: 'essentialInfo',
      title: 'Verbraucher-, Datenschutz- und Nutzungshinweise — Mapvoy',
      description: 'Deutschsprachige Informationen zu Mapvoy, Bedienung, Abonnements, Widerruf und Datenschutz. Die App-Oberfläche bleibt Englisch und Französisch.',
    },
    infoNl: {
      path: `${base}/info/nl`, lang: 'nl', languageGroup: 'essentialInfo',
      title: 'Informatie over gebruik, aankopen en privacy — Mapvoy',
      description: 'Nederlandstalige informatie over gebruik, abonnementen, herroeping en privacy bij Mapvoy. De app-interface is Engels en Frans.',
    },
    infoEt: {
      path: `${base}/info/et`, lang: 'et', languageGroup: 'essentialInfo',
      title: 'Teave kasutamise, ostude ja isikuandmete kohta — Mapvoy',
      description: 'Eestikeelne teave Mapvoy kasutamise, tellimuste, taganemise ja andmekaitse kohta. Rakenduse kasutajaliides on inglise ja prantsuse keeles.',
    },
    infoIt: {
      path: `${base}/info/it`, lang: 'it', languageGroup: 'essentialInfo',
      title: 'Informazioni su utilizzo, acquisti e privacy — Mapvoy',
      description: 'Informazioni in italiano su funzioni, utilizzo, abbonamenti, recesso e privacy. L’interfaccia di Mapvoy resta in inglese e francese.',
    },
    infoCs: {
      path: `${base}/info/cs`, lang: 'cs', languageGroup: 'essentialInfo',
      title: 'Informace o používání, nákupech a soukromí — Mapvoy',
      description: 'České informace o funkcích, používání, předplatném, odstoupení a soukromí. Rozhraní Mapvoy zůstává v angličtině a francouzštině.',
    },
    infoPt: {
      path: `${base}/info/pt`, lang: 'pt-PT', languageGroup: 'essentialInfo',
      title: 'Informações de utilização, compras e privacidade — Mapvoy',
      description: 'Informações em português sobre funções, utilização, assinaturas, livre resolução e privacidade. A interface mantém-se em inglês e francês.',
    },
    support: {
      path: `${base}/support`, lang: 'en',
      title: 'Support — Mapvoy',
      description: 'Help, FAQs, and contact for Mapvoy — the photo travel mapping app.',
    },
    infoHu: {
      path: `${base}/info/hu`, lang: 'hu', languageGroup: 'essentialInfo',
      title: 'Használat, vásárlások és adatvédelem — Mapvoy',
      description: 'Magyar tájékoztató a Mapvoy funkcióiról, használatáról, előfizetéseiről, elállásról és adatvédelemről. A kezelőfelület angol és francia.',
    },
    infoPl: {
      path: `${base}/info/pl`, lang: "pl", languageGroup: 'essentialInfo',
      title: "Informacje o użytkowaniu, zakupach i prywatności — Mapvoy",
      description: "Informacje po polsku o funkcjach, zakupach, subskrypcjach, reklamacjach i prywatności Mapvoy. Interfejs pozostaje angielski i francuski.",
    },
    infoHr: {
      path: `${base}/info/hr`, lang: "hr", languageGroup: 'essentialInfo',
      title: "Informacije o uporabi, kupnji i privatnosti — Mapvoy",
      description: "Bitne informacije na hrvatskom o uporabi, kupnji, pretplatama, prigovorima i privatnosti. Sučelje je englesko i francusko.",
    },
    infoLt: {
      path: `${base}/info/lt`, lang: "lt", languageGroup: 'essentialInfo',
      title: "Informacija apie naudojimą, pirkimą ir privatumą — Mapvoy",
      description: "Esminė informacija lietuviškai apie naudojimą, pirkimą, prenumeratas, skundus ir privatumą. Sąsaja anglų ir prancūzų kalbomis.",
    },
    information: {
      path: `${base}/info`, lang: 'en',
      title: 'Product information · Informations produit — Mapvoy',
      description: 'Choose a language for essential Mapvoy use, purchase and privacy information. App interface: English and French.',
    },
    infoBg: {
      path: `${base}/info/bg`, lang: "bg", languageGroup: 'essentialInfo',
      title: "Информация за използване, покупки и поверителност — Mapvoy",
      description: "Основна информация за използване, покупки, абонаменти и поверителност. Интерфейсът остава английски и френски.",
    },
    infoEl: {
      path: `${base}/info/el`, lang: "el", languageGroup: 'essentialInfo',
      title: "Πληροφορίες χρήσης, αγορών και απορρήτου — Mapvoy",
      description: "Βασικές πληροφορίες για χρήση, αγορές, συνδρομές και απόρρητο. Το περιβάλλον παραμένει αγγλικό και γαλλικό.",
    },
    infoRo: {
      path: `${base}/info/ro`, lang: "ro", languageGroup: 'essentialInfo',
      title: "Informații despre utilizare, cumpărături și confidențialitate — Mapvoy",
      description: "Informații esențiale despre utilizare, cumpărături, abonamente și confidențialitate. Interfața rămâne engleză și franceză.",
    },
    infoCy: {
      path: `${base}/info/cy`, lang: 'el-CY', languageGroup: 'essentialInfo',
      title: 'Πληροφορίες χρήσης, αγορών και απορρήτου — Κύπρος — Mapvoy',
      description: 'Πληροφορίες στα ελληνικά για χρήση, αγορές και δεδομένα στην Κύπρο. Περιβάλλον εφαρμογής αγγλικά και γαλλικά.',
    },
    infoIs: {
      path: `${base}/info/is`, lang: 'is', languageGroup: 'essentialInfo',
      title: 'Upplýsingar um notkun, kaup og persónuvernd — Mapvoy',
      description: 'Nauðsynlegar upplýsingar á íslensku um notkun, kaup, áskriftir og persónuvernd. Viðmót appsins er á ensku og frönsku.',
    },
    infoEs: {
      path: `${base}/info/es`, lang: 'es', languageGroup: 'essentialInfo',
      title: 'Información de uso, compras y privacidad — Mapvoy',
      description: 'Información necesaria en castellano sobre uso, compras, suscripciones y privacidad. La interfaz sigue en inglés y francés.',
    },
    infoCa: {
      path: `${base}/info/ca`, lang: 'ca', languageGroup: 'essentialInfo',
      title: 'Informació d’ús, compres i privacitat — Mapvoy',
      description: 'Informació necessària en català sobre ús, compres, subscripcions i privacitat. La interfície continua en anglès i francès.',
    },
    infoLv: {
      path: `${base}/info/lv`, lang: 'lv', languageGroup: 'essentialInfo',
      title: 'Informācija par lietošanu, pirkumiem un privātumu — Mapvoy',
      description: 'Būtiskā informācija latviski par Mapvoy lietošanu, pirkumiem, abonementiem un privātumu. Saskarne ir angļu un franču valodā.',
    },
    infoKo: {
      path: `${base}/info/ko`, lang: 'ko', languageGroup: 'essentialInfo',
      title: 'Mapvoy 이용·구매 및 개인정보 처리 안내',
      description: 'Mapvoy 이용 조건, 자동 갱신, 환불과 개인정보 처리에 관한 한국어 안내. 앱 화면은 영어와 프랑스어입니다.',
    },
    infoSl: {
      path: `${base}/info/sl`, lang: 'sl', languageGroup: 'essentialInfo',
      title: 'Pomembne informacije o uporabi, nakupih in zasebnosti — Mapvoy',
      description: 'Potrebne informacije v slovenščini o Mapvoy, nakupih, naročninah, odstopu in zasebnosti. Vmesnik je angleški in francoski.',
    },
    infoJa: {
      path: `${base}/info/ja`, lang: 'ja', languageGroup: 'essentialInfo',
      title: '利用・購入・個人情報に関する重要事項 — Mapvoy',
      description: 'Mapvoyの日本語による必要な利用・取引・個人情報の説明。画面と通常のサポートは英語・フランス語です。',
    },
    infoNb: {
      path: `${base}/info/nb`, lang: 'nb', languageGroup: 'essentialInfo',
      title: 'Informasjon om bruk, kjøp og personvern — Mapvoy',
      description: 'Nødvendig informasjon på norsk bokmål om Mapvoy, bruk, abonnement, angrerett og personvern. Appens grensesnitt er engelsk og fransk.',
    },
    infoSk: {
      path: `${base}/info/sk`, lang: 'sk', languageGroup: 'essentialInfo',
      title: 'Používanie, nákupy a ochrana údajov — Mapvoy',
      description: 'Slovenské informácie o funkciách, používaní, predplatnom, odstúpení a osobných údajoch. Rozhranie Mapvoy je v angličtine a francúzštine.',
    },
  }
}

export const CHARTED_ROUTE_META = createRouteMetadata(IS_PRODUCT_SITE)

export function routeLanguageAlternates(meta, routes = CHARTED_ROUTE_META) {
  // 必要告知互为译本；不将精简告知伪标为完整 Privacy/Terms 的语言替代。
  if (meta.languageGroup) return Object.values(routes).filter((route) => route.languageGroup === meta.languageGroup)
  return meta.alternate ? [meta, routes[meta.alternate]] : []
}
