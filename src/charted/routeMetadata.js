// 浏览器和静态构建共用路由表；产品独立域名不再带内部项目名。
export function createRouteMetadata() {
  return {
    home: {
      path: '/', lang: 'en',
      title: 'Mapvoy — You\'ve been further than you think.',
      description: 'Every place in your photos, on a 3D globe. Mapvoy builds a travel map from the photos already on your iPhone, with your trips found and your countries counted.',
    },
    privacy: {
      path: '/privacy', lang: 'en', alternate: 'privacyFr',
      title: 'Privacy Policy — Mapvoy',
      description: 'How Mapvoy processes your photo library locally, uses Apple and other service providers, and lets you control diagnostics and optional analytics.',
    },
    privacyFr: {
      path: '/privacy/fr', lang: 'fr-CA', alternate: 'privacy',
      title: 'Politique de confidentialité — Mapvoy',
      description: 'Traitement local des photos, services Apple et autres fournisseurs, diagnostics et analyses facultatives : vos renseignements et vos choix dans Mapvoy.',
    },
    terms: {
      path: '/terms', lang: 'en', alternate: 'termsFr',
      title: 'Terms of Use — Mapvoy',
      description: 'Mapvoy Terms of Use. Subscription terms, your content, and how Mapvoy Pro works.',
    },
    termsFr: {
      path: '/terms/fr', lang: 'fr-CA', alternate: 'terms',
      title: 'Conditions d’utilisation — Mapvoy',
      description: 'Conditions d’utilisation de Mapvoy : abonnements, contenu personnel, Mapvoy Pro et droits des consommateurs.',
    },
    support: {
      path: '/support', lang: 'en',
      title: 'Support — Mapvoy',
      description: 'Help, FAQs, and contact for Mapvoy — the photo travel mapping app.',
    },
  }
}

export const CHARTED_ROUTE_META = createRouteMetadata()

export function routeLanguageAlternates(meta, routes = CHARTED_ROUTE_META) {
  return meta.alternate ? [meta, routes[meta.alternate]] : []
}
