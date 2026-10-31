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
  }
}

export const CHARTED_ROUTE_META = createRouteMetadata(IS_PRODUCT_SITE)

export function routeLanguageAlternates(meta, routes = CHARTED_ROUTE_META) {
  // 必要告知互为译本；不将精简告知伪标为完整 Privacy/Terms 的语言替代。
  if (meta.languageGroup) return Object.values(routes).filter((route) => route.languageGroup === meta.languageGroup)
  return meta.alternate ? [meta, routes[meta.alternate]] : []
}
