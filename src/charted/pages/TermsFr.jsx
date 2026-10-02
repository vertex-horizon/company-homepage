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
          <span><strong>Dernière mise à jour :</strong> 1er octobre 2026</span>
          <span><strong>Date d’entrée en vigueur :</strong> 1er octobre 2026</span>
        </div>
      </header>
      <p><NavLink to="/charted/terms" navigate={navigate} hrefLang="en" lang="en">English</NavLink></p>
      <p><strong>Langue de l’application :</strong> l’interface actuelle de Charted est en anglais. Cette page fournit les conditions en français.</p>
      <p>
        Charted est fournie par <strong>Vertex Horizon Inc.</strong> Ces conditions décrivent notre
        application et les modalités d’achat et d’assistance. Votre licence d’utilisation de
        l’Application est régie par le{' '}
        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noreferrer">contrat de licence standard d’Apple (Standard EULA)</a>.
        Cette page est un avis complémentaire, et non une licence logicielle distincte ni un contrat
        de licence personnalisé. Aucune disposition ne supprime les droits ou recours que la loi
        applicable nous interdit d’exclure.
      </p>
      <p>
        <strong>Note sur la version :</strong> les changements de l’Application décrits pour la
        version 1.1.1 sont préparés pour cette version, dont la disponibilité sur l’App Store est
        encore en attente. La version 1.1 reste la version actuellement publiée jusqu’à la
        disponibilité de la mise à jour. La publication de ces conditions ne modifie pas le
        fonctionnement d’une ancienne installation ni rétroactivement un achat existant.
      </p>

      <h2>1. Admissibilité et utilisation responsable</h2>
      <p>
        Charted est destinée aux personnes de 13 ans et plus. Si vous n’avez pas l’âge requis pour
        conclure un contrat ou effectuer un achat dans votre lieu de résidence, demandez
        l’autorisation et l’aide de votre parent ou tuteur. Cette déclaration d’âge ne constitue
        ni une vérification de l’âge ni un service de consentement parental. Charted n’est pas
        conçue comme un service pour enfants. Un parent ou tuteur peut nous contacter au sujet des
        renseignements d’un enfant, comme l’explique notre Politique de confidentialité.
      </p>
      <p>
        Utilisez Charted légalement et respectez les droits d’autrui lorsque vous importez,
        exportez ou partagez du contenu. L’utilisation du logiciel et les restrictions de licence
        sont prévues par le Standard EULA, sous réserve de la loi applicable et des licences des
        composants tiers inclus.
      </p>

      <h2>2. Votre contenu et les limites de l’Application</h2>
      <p>
        Vous conservez les droits que vous détenez sur vos photos et vos autres contenus. Nous
        n’acquérons pas la propriété de vos contenus locaux du seul fait de votre utilisation de
        Charted. Charted lit les dates et les lieux des photos, affiche les images et les analyse
        sur votre appareil pour organiser vos souvenirs de voyage. Elle ne modifie pas les
        originaux dans Photos d’Apple et ne téléverse pas votre photothèque ni votre base de
        données locale de voyages vers nos serveurs ou un service d’IA infonuagique. Photos
        d’Apple peut télécharger des images iCloud au besoin. Des services réseau prennent en
        charge les achats, les cartes et adresses demandées, la configuration et le partage de
        renseignements techniques, comme l’explique notre{' '}
        <NavLink to="/charted/privacy/fr" navigate={navigate}>Politique de confidentialité</NavLink>,
        y compris les choix et limites de la version installée. Vous contrôlez les exportations
        et les partages que vous lancez. Les demandes concernant les renseignements effectivement
        détenus par nous ou traités pour nous par des fournisseurs sont traitées selon cette politique.
      </p>
      <p>
        Les enregistrements, les lieux détectés, les estimations de distance en ligne droite, les
        frontières cartographiques et les textes générés peuvent être incomplets ou inexacts.
        Ils ne prouvent pas un itinéraire mesuré, l’entrée dans un lieu ni une frontière politique
        ou juridique. Vérifiez les contenus générés avant de les partager. Charted n’est pas
        destinée à la navigation, aux interventions d’urgence, au franchissement de frontières
        ni à la détermination de la compétence juridique.
      </p>
      <p>
        La génération de récits nécessite iOS 26 ou une version ultérieure et Apple Intelligence
        disponible sur votre appareil, notamment un appareil, une langue et une région compatibles
        ainsi que des modèles prêts. À défaut, Charted utilise des résumés basés sur des modèles
        locaux. L’achat de Pro n’active pas Apple Intelligence.
      </p>
      <p>
        Data Export produit des enregistrements sélectionnés en JSON, CSV ou GPX. Elle ne comprend
        pas les photos originales ni toutes les modifications ou préférences, et ses fichiers ne
        peuvent pas être importés pour restaurer Charted. La fonction distincte Backup &amp;
        Restore conserve les données personnelles qu’elle énumère dans un fichier JSON non
        chiffré et exige une bibliothèque Charted vide pour la restauration. Elle ne récupère
        pas les photos originales, toutes les préférences ni les achats. Conservez les fichiers
        exportés dans un lieu fiable. La suppression des données locales ou de l’Application ne
        supprime pas les exports ou sauvegardes enregistrés ailleurs, les originaux dans Photos
        d’Apple, les relevés d’achat ni les rapports déjà reçus par des fournisseurs.
      </p>

      <h2>3. Achats Charted Pro</h2>
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
        Dans la version 1.1.1, ouvrez Settings → Profile → Your Charted Pro → Manage or Cancel
        Subscription pour accéder directement au panneau de gestion d’Apple. Vous pouvez aussi
        ouvrir Réglages sur votre iPhone → votre nom → Abonnements → Charted et suivre les
        instructions d’Apple. Utilisez le compte Apple associé à l’achat. Apple indique la fin
        de l’accès, qui peut dépendre de l’offre et de votre région. Supprimer ou décharger
        Charted, supprimer les données locales ou utiliser un cadeau n’annule pas un abonnement
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
        <span><NavLink to="/charted/privacy/fr" navigate={navigate}>Confidentialité</NavLink>{' · '}<NavLink to="/charted/support" navigate={navigate}>Assistance (anglais)</NavLink></span>
      </div>
    </article>
  )
}
