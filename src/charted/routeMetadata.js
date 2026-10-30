// 浏览器路由与静态入口共用身份信息，防止法语直达页被导出成英文标题或语言。
export const CHARTED_ROUTE_META = {
  home: {
    path: '/charted', lang: 'en',
    title: 'Mapvoy — You\'ve been further than you think.',
    description: 'Every place in your photos, on a 3D globe. Mapvoy builds a travel map from the photos already on your iPhone, with your trips found and your countries counted.',
  },
  privacy: {
    path: '/charted/privacy', lang: 'en', alternate: 'privacyFr',
    title: 'Privacy Policy — Mapvoy',
    description: 'How Mapvoy processes your photo library locally, uses Apple and other service providers, and lets you control diagnostics and optional analytics.',
  },
  privacyFr: {
    path: '/charted/privacy/fr', lang: 'fr-CA', alternate: 'privacy',
    title: 'Politique de confidentialité — Mapvoy',
    description: 'Traitement local des photos, services Apple et autres fournisseurs, diagnostics et analyses facultatives : vos renseignements et vos choix dans Mapvoy.',
  },
  terms: {
    path: '/charted/terms', lang: 'en', alternate: 'termsFr',
    title: 'Terms of Use — Mapvoy',
    description: 'Mapvoy Terms of Use. Subscription terms, your content, and how Mapvoy Pro works.',
  },
  termsFr: {
    path: '/charted/terms/fr', lang: 'fr-CA', alternate: 'terms',
    title: 'Conditions d’utilisation — Mapvoy',
    description: 'Conditions d’utilisation de Mapvoy : abonnements, contenu personnel, Mapvoy Pro et droits des consommateurs.',
  },
  support: {
    path: '/charted/support', lang: 'en',
    title: 'Support — Mapvoy',
    description: 'Help, FAQs, and contact for Mapvoy — the photo travel mapping app.',
  },
}

export function routeLanguageAlternates(meta) {
  return meta.alternate ? [meta, CHARTED_ROUTE_META[meta.alternate]] : []
}
