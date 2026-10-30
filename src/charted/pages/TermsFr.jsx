import { productPath } from '../config.js'
import { NavLink } from '../ChartedApp.jsx'
import { SUPPORT_EMAIL } from '../config.js'

// 与英文补充条款逐项对齐，软件许可继续由 Apple Standard EULA 规定。
// 不新增 personal/non-commercial 限制、全面免责、12 个月责任上限或 Apple 受益人条款。
// 保留各地强制权利及 1.1.1 待上架边界；法语页面不表示 App 已完成法语本地化或魁北克准入。
export default function TermsFr({ navigate }) {
  return (
    <article className="c-doc" lang="fr-CA">
      <header>
        <h1>Conditions d’utilisation</h1>
        <div className="c-doc-meta">
          <span><strong>Dernière mise à jour :</strong> 30 octobre 2026</span>
          <span><strong>Date d’entrée en vigueur :</strong> 1er octobre 2026</span>
        </div>
      </header>
      <p><strong>Nom de l’application :</strong> Charted devient Mapvoy. Le fournisseur reste Vertex Horizon Inc.</p>
      <p><NavLink to={productPath('/terms')} navigate={navigate} hrefLang="en" lang="en">English</NavLink></p>
      <p><strong>Langue de l’application :</strong> les textes disponibles dépendent de la version installée et de la langue choisie dans iOS. Cette page fournit les conditions en français.</p>
      <p>
        Mapvoy est fournie par <strong>Vertex Horizon Inc.</strong> Ces conditions décrivent notre
        application et les modalités d’achat et d’assistance. Votre licence d’utilisation de
        l’Application est régie par le{' '}
        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noreferrer">contrat de licence standard d’Apple (Standard EULA)</a>.
        Cette page est un avis complémentaire, et non une licence logicielle distincte ni un contrat
        de licence personnalisé. Aucune disposition ne supprime les droits ou recours que la loi
        applicable nous interdit d’exclure.
      </p>
      <p>
        <strong>Note sur la version :</strong> les fonctions et les contrôles de confidentialité peuvent varier selon la version
        installée. Consultez les renseignements relatifs à votre version et la Politique de confidentialité.
        La publication de ces conditions ne modifie pas le comportement d’une ancienne version de
        l’Application ni rétroactivement les conditions d’un achat existant.
      </p>

      <p>
        Les versions française et anglaise de cet avis et de notre Politique de confidentialité
        sont accessibles sans frais supplémentaires. Vous pouvez consulter la version française
        avant un achat. Le montant, la période de facturation, l’offre et les conditions de la
        transaction Apple sont présentés par l’App Store lors de l’achat. Le choix de l’anglais
        ne constitue pas une renonciation à un droit linguistique impératif.
      </p>

      <h2>1. Admissibilité et utilisation responsable</h2>
      <p>
        Mapvoy est destinée aux personnes de 13 ans et plus. Si vous n’avez pas l’âge requis pour
        conclure un contrat ou effectuer un achat dans votre lieu de résidence, demandez
        l’autorisation et l’aide de votre parent ou tuteur. Cette déclaration d’âge ne constitue
        ni une vérification de l’âge ni un service de consentement parental. Mapvoy n’est pas
        conçue comme un service pour enfants. Un parent ou tuteur peut nous contacter au sujet des
        renseignements d’un enfant, comme l’explique notre Politique de confidentialité.
      </p>
      <p>
        Utilisez Mapvoy légalement et respectez les droits d’autrui lorsque vous importez,
        exportez ou partagez du contenu. L’utilisation du logiciel et les restrictions de licence
        sont prévues par le Standard EULA, sous réserve de la loi applicable et des licences des
        composants tiers inclus.
      </p>

      <h2>2. Votre contenu et les limites de l’Application</h2>
      <p>
        Vous conservez les droits que vous détenez sur vos photos et vos autres contenus. Nous
        n’acquérons pas la propriété de vos contenus locaux du seul fait de votre utilisation de
        Mapvoy. Mapvoy lit les dates et les lieux des photos, affiche les images et les analyse
        sur votre appareil pour organiser vos souvenirs de voyage. Elle ne modifie pas les
        originaux dans Photos d’Apple et ne téléverse pas votre photothèque ni votre base de
        données locale de voyages vers nos serveurs ou un service d’IA infonuagique. Photos
        d’Apple peut télécharger des images iCloud au besoin. Des services réseau prennent en
        charge les achats, les cartes et adresses demandées, la configuration et le partage de
        renseignements techniques, comme l’explique notre{' '}
        <NavLink to={productPath('/privacy/fr')} navigate={navigate}>Politique de confidentialité</NavLink>,
        y compris les choix et limites de la version installée. Vous contrôlez les exportations
        et les partages que vous lancez. Les demandes concernant les renseignements effectivement
        détenus par nous ou traités pour nous par des fournisseurs sont traitées selon cette politique.
      </p>
      <p>
        Les enregistrements, les lieux détectés, les estimations de distance en ligne droite, les
        frontières cartographiques et les textes générés peuvent être incomplets ou inexacts.
        Ils ne prouvent pas un itinéraire mesuré, l’entrée dans un lieu ni une frontière politique
        ou juridique. Vérifiez les contenus générés avant de les partager. Mapvoy n’est pas
        destinée à la navigation, aux interventions d’urgence, au franchissement de frontières
        ni à la détermination de la compétence juridique.
      </p>
      <p>
        La génération de récits nécessite iOS 26 ou une version ultérieure et Apple Intelligence
        disponible sur votre appareil, notamment un appareil, une langue et une région compatibles
        ainsi que des modèles prêts. À défaut, Mapvoy utilise des résumés basés sur des modèles
        locaux. L’achat de Pro n’active pas Apple Intelligence.
      </p>
      <p>
        Data Export produit des enregistrements sélectionnés en JSON, CSV ou GPX. Elle ne comprend
        pas les photos originales ni toutes les modifications ou préférences, et ses fichiers ne
        peuvent pas être importés pour restaurer Mapvoy. Lorsqu’elle est disponible dans votre version installée, la fonction distincte Backup &amp;
        Restore conserve les données personnelles qu’elle énumère dans un fichier JSON non
        chiffré et exige une bibliothèque Mapvoy vide pour la restauration. Elle ne récupère
        pas les photos originales, toutes les préférences ni les achats. Conservez les fichiers
        exportés dans un lieu fiable. La suppression des données locales ou de l’Application ne
        supprime pas les exports ou sauvegardes enregistrés ailleurs, les originaux dans Photos
        d’Apple, les relevés d’achat ni les rapports déjà reçus par des fournisseurs.
      </p>

      <h2>3. Achats Mapvoy Pro</h2>
      <p>
        Les formules mensuelle et annuelle sont des abonnements renouvelés automatiquement.
        La version 1.1.1 affiche les prix renvoyés par l’App Store dans la devise de votre boutique,
        sans leur substituer un prix fixe en dollars américains lorsque le prix est indisponible.
        La confirmation d’achat d’Apple indique le montant, la période de facturation et l’offre
        applicables. Un montant annuel divisé par douze sert uniquement de comparaison :
        l’abonnement annuel est facturé annuellement.
      </p>
      <p>
        Les prix actuels du catalogue et les comparaisons d’économies peuvent différer des
        conditions réelles de renouvellement d’un abonné existant. Consultez les réglages des
        abonnements d’Apple pour connaître votre prochain prélèvement. Les changements de prix
        suivent les exigences d’Apple en matière d’avis et de consentement pour votre abonnement
        et votre boutique.
      </p>
      <p>
        Un essai gratuit de lancement n’est disponible que si StoreKit vous identifie comme
        admissible à l’offre affichée. Un essai n’est pas promis à chaque nouvel utilisateur.
        Examinez la confirmation et la date limite d’annulation indiquées par Apple. Apple
        recommande d’annuler un essai au moins 24 heures avant sa fin si vous ne souhaitez pas
        son renouvellement. Après une offre, l’abonnement est renouvelé selon les conditions
        affichées par Apple, sauf annulation. Les règles d’annulation propres à chaque pays et
        les droits impératifs restent applicables.
      </p>
      <p>
        L’accès à vie n’est pas proposé comme formule publique d’achat direct. Des codes d’offre
        cadeau valides peuvent accorder un accès à vie ou un autre accès Pro là où ils sont
        proposés. La confirmation d’utilisation du code détermine l’offre, les frais éventuels
        et sa durée. L’accès à vie n’est pas renouvelé. Son activation n’annule pas un abonnement
        mensuel ou annuel distinct déjà existant.
      </p>

      <h2>4. Gestion, annulation, restauration et remboursement</h2>
      <p>
        Dans la version 1.1.1, ouvrez Settings → Profile → Your Mapvoy Pro → Manage or Cancel
        Subscription pour accéder directement au panneau de gestion d’Apple. Vous pouvez aussi
        ouvrir Réglages sur votre iPhone → votre nom → Abonnements → Mapvoy et suivre les
        instructions d’Apple. Utilisez le compte Apple associé à l’achat. Apple indique la fin
        de l’accès, qui peut dépendre de l’offre et de votre région. Supprimer ou décharger
        Mapvoy, supprimer les données locales ou utiliser un cadeau n’annule pas un abonnement
        existant. Consultez les{' '}
        <a href="https://support.apple.com/fr-ca/118428" target="_blank" rel="noreferrer">instructions d’annulation d’Apple</a>.
      </p>
      <p>
        Utilisez Restore Purchases dans l’Application pour récupérer les droits disponibles
        associés à votre achat Apple. La restauration des achats ne restaure pas votre base
        de données locale de voyages ni vos fichiers de sauvegarde externes.
      </p>
      <p>
        Pour un achat facturé par Apple, demandez un remboursement sur{' '}
        <a href="https://reportaproblem.apple.com" target="_blank" rel="noreferrer">reportaproblem.apple.com</a>.
        La procédure de remboursement d’Apple ne remplace ni ne limite aucun droit légal de
        rétractation, d’annulation, de remboursement ou autre recours. Contactez-nous si vous
        avez besoin d’aide concernant l’Application ou une demande liée à vos droits de
        consommateur. Nous ne garantissons pas que toute demande donne droit à un remboursement.
        Consultez les{' '}
        <a href="https://support.apple.com/fr-ca/118223" target="_blank" rel="noreferrer">renseignements d’Apple sur les remboursements</a>.
      </p>

      <p>
        <strong>Allemagne et Autriche — droit de rétractation :</strong> pour les achats facturés
        par Apple, les conditions actuelles d’Apple décrivent une option de rétractation dans
        l’historique d’achats de votre compte Apple. Lorsqu’un droit de rétractation s’applique,
        sélectionnez la commande, choisissez cette option et suivez les étapes de confirmation;
        Apple indique envoyer un accusé de réception par courriel. Cette démarche est distincte
        de l’arrêt du renouvellement d’un abonnement. Les délais et conditions applicables,
        notamment la perte éventuelle du droit lors d’une livraison numérique immédiate avec
        consentement valable, figurent dans les{' '}
        <a href="https://www.apple.com/legal/internet-services/itunes/de/terms.html" target="_blank" rel="noreferrer">conditions allemandes</a>{' '}
        et les{' '}
        <a href="https://www.apple.com/legal/internet-services/itunes/at/terms.html" target="_blank" rel="noreferrer">conditions autrichiennes d’Apple</a>.
        Contactez-nous pour l’assistance ou toute question sur vos droits impératifs.
      </p>
      <h2>5. Droits impératifs et modifications</h2>
      <p>
        Les protections, garanties et recours impératifs des consommateurs s’appliquent. Cela
        comprend les droits prévus par les lois applicables de l’UE et du Royaume-Uni et les
        lois de protection des consommateurs de l’Australie et de la Nouvelle-Zélande lorsqu’elles
        sont pertinentes, ainsi que les droits qui ne peuvent être légalement exclus ailleurs.
        Aucune disposition n’impose un tribunal californien exclusif, ne renonce à ces droits ni
        ne supprime le droit de saisir les tribunaux locaux compétents ou d’utiliser une
        procédure légale de règlement des différends.
      </p>
      <p>
        Nous visons à maintenir l’Application, sans pouvoir promettre que les textes générés,
        les données cartographiques de tiers ou toutes les fonctions seront toujours disponibles
        ou exempts d’erreurs. Les garanties et obligations applicables restent en vigueur.
        Les dispositions de licence du Standard EULA restent soumises à ses conditions et au
        droit local impératif. Cet avis complémentaire ne crée aucune exclusion générale
        supplémentaire de garantie ni aucun plafond de responsabilité.
      </p>
      <p>
        Si les conditions ou les fonctions payantes changent de manière importante, nous
        fournirons un avis approprié et obtiendrons un accord lorsque cela est requis.
        Une date de publication ne modifie pas à elle seule les conditions d’achat existantes
        et ne constitue pas un consentement à un traitement supplémentaire de données personnelles.
      </p>

      <h3 id="fr-guarantee">5.1 Garantie légale de conformité — abonnements mensuels et annuels</h3>
      <p>
        Cet encadré concerne les abonnements mensuels et annuels Mapvoy Pro lorsque le droit
        français de la consommation s’applique. Les durées indiquées s’appliquent à chaque période
        initiale ou renouvelée de fourniture de l’abonnement. Cet encadré ne détermine ni ne réduit
        la durée d’accès accordée au titre d’un code cadeau. Les droits impératifs applicables aux
        autres offres restent préservés. Pour une demande concernant l’Application, contactez
        Vertex Horizon Inc. aux coordonnées de la section 6.
      </p>
      {/* 按 D211-4 官方持续提供模板保留法定全文，仅将两处 X 填为实际月/年期间。
          一次兑换不证明 Gift 属于一次性供应；本框不缩短赠送权益或承诺新的永久服务。 */}
      <div className="c-doc-summary">
        <p>
          Le consommateur a droit à la mise en œuvre de la garantie légale de conformité en cas
          d’apparition d’un défaut de conformité durant un délai de 1 mois pour un abonnement
          mensuel ou de 1 an pour un abonnement annuel à compter de la fourniture du contenu
          numérique ou du service numérique. Durant ce délai, le consommateur n’est tenu d’établir
          que l’existence du défaut de conformité et non la date d’apparition de celui-ci.
        </p>
        <p>
          La garantie légale de conformité emporte obligation de fournir toutes les mises à jour
          nécessaires au maintien de la conformité du contenu numérique ou du service numérique
          durant 1 mois pour un abonnement mensuel ou 1 an pour un abonnement annuel.
        </p>
        <p>
          La garantie légale de conformité donne au consommateur droit à la mise en conformité du
          contenu numérique ou du service numérique sans retard injustifié suivant sa demande,
          sans frais et sans inconvénient majeur pour lui.
        </p>
        <p>
          Le consommateur peut obtenir une réduction du prix en conservant le contenu numérique
          ou le service numérique, ou il peut mettre fin au contrat en se faisant rembourser
          intégralement contre renoncement au contenu numérique ou au service numérique, si :
        </p>
        <ol>
          <li>Le professionnel refuse de mettre le contenu numérique ou le service numérique en conformité ;</li>
          <li>La mise en conformité du contenu numérique ou du service numérique est retardée de manière injustifiée ;</li>
          <li>La mise en conformité du contenu numérique ou du service numérique ne peut intervenir sans frais imposés au consommateur ;</li>
          <li>La mise en conformité du contenu numérique ou du service numérique occasionne un inconvénient majeur pour le consommateur ;</li>
          <li>La non-conformité du contenu numérique ou du service numérique persiste en dépit de la tentative de mise en conformité du professionnel restée infructueuse.</li>
        </ol>
        <p>
          Le consommateur a également droit à une réduction du prix ou à la résolution du contrat
          lorsque le défaut de conformité est si grave qu’il justifie que la réduction du prix
          ou la résolution du contrat soit immédiate. Le consommateur n’est alors pas tenu de
          demander la mise en conformité du contenu numérique ou du service numérique au préalable.
        </p>
        <p>
          Dans les cas où le défaut de conformité est mineur, le consommateur n’a droit à
          l’annulation du contrat que si le contrat ne prévoit pas le paiement d’un prix.
        </p>
        <p>
          Toute période d’indisponibilité du contenu numérique ou du service numérique en vue de
          sa remise en conformité suspend la garantie qui restait à courir jusqu’à la fourniture
          du contenu numérique ou du service numérique de nouveau conforme.
        </p>
        <p>
          Ces droits résultent de l’application des articles L. 224-25-1 à L. 224-25-31 du code
          de la consommation.
        </p>
        <p>
          Le professionnel qui fait obstacle de mauvaise foi à la mise en œuvre de la garantie
          légale de conformité encourt une amende civile d’un montant maximal de 300 000 euros,
          qui peut être porté jusqu’à 10 % du chiffre d’affaires moyen annuel (article L. 242-18-1
          du code de la consommation).
        </p>
        <p>
          Le consommateur bénéficie également de la garantie légale des vices cachés en application
          des articles 1641 à 1649 du code civil, pendant une durée de deux ans à compter de la
          découverte du défaut. Cette garantie donne droit à une réduction de prix si le contenu
          numérique ou le service numérique est conservé, ou à un remboursement intégral contre
          renonciation au contenu numérique ou au service numérique.
        </p>
      </div>
      <p>
        Modèle prévu par l’{' '}
        <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000045981322" target="_blank" rel="noreferrer">annexe à l’article D. 211-4 du code de la consommation</a>.
        Les achats, annulations et remboursements facturés par Apple continuent d’utiliser les
        procédures décrites à la section 4, sans limiter ces garanties.
      </p>

      <h2>6. Contact et avis relatifs aux tiers</h2>
      <p><strong>Vertex Horizon Inc.</strong></p>
      <p>
        <strong>Courriel :</strong> <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a><br />
        <strong>Adresse postale :</strong> 3405 Montgomery Dr Apt 255, Santa Clara, CA 95054-3080, United States<br />
        <strong>Téléphone professionnel :</strong> <a href="tel:+16088951157">+1 608-895-1157</a>
      </p>
      <p>
        Consultez Settings → About → Third-Party Notices dans l’Application pour les licences
        et attributions des composants et ressources inclus. L’utilisation de ces ressources
        n’implique aucune approbation de leurs créateurs.
      </p>
      <div className="c-doc-footer">
        <span>© {new Date().getFullYear()} Vertex Horizon Inc.</span>
        <span><NavLink to={productPath('/privacy/fr')} navigate={navigate}>Confidentialité</NavLink>{' · '}<NavLink to={productPath('/support')} navigate={navigate}>Assistance (anglais)</NavLink></span>
      </div>
    </article>
  )
}
