// 浏览器路由与静态入口共用身份信息，防止法语直达页被导出成英文标题或语言。
export const CHARTED_ROUTE_META = {
  home: {
    path: '/charted', lang: 'en',
    title: 'Charted — Chart how far you\'ve come.',
    description: 'Your photos already remember every place you\'ve been. Charted turns them into a beautiful 3D globe — automatically, privately, on your iPhone.',
  },
  privacy: {
    path: '/charted/privacy', lang: 'en', alternate: 'privacyFr',
    title: 'Privacy Policy — Charted',
    description: 'How Charted processes your photo library locally, uses Apple and other service providers, and lets you control diagnostics and optional analytics.',
  },
  privacyFr: {
    path: '/charted/privacy/fr', lang: 'fr-CA', alternate: 'privacy',
    title: 'Politique de confidentialité — Charted',
    description: 'Traitement local des photos, services Apple et autres fournisseurs, diagnostics et analyses facultatives : vos renseignements et vos choix dans Charted.',
  },
  terms: {
    path: '/charted/terms', lang: 'en', alternate: 'termsFr',
    title: 'Terms of Use — Charted',
    description: 'Charted Terms of Use. Subscription terms, your content, and how Charted Pro works.',
  },
  termsFr: {
    path: '/charted/terms/fr', lang: 'fr-CA', alternate: 'terms',
    title: 'Conditions d’utilisation — Charted',
    description: 'Conditions d’utilisation de Charted : abonnements, contenu personnel, Charted Pro et droits des consommateurs.',
  },
  support: {
    path: '/charted/support', lang: 'en',
    title: 'Support — Charted',
    description: 'Help, FAQs, and contact for Charted — the photo travel mapping app.',
  },
}

export function routeLanguageAlternates(meta) {
  return meta.alternate ? [meta, CHARTED_ROUTE_META[meta.alternate]] : []
}
