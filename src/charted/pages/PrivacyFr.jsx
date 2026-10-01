import { NavLink } from '../ChartedApp.jsx'
import { SUPPORT_EMAIL } from '../config.js'

// 英文 Privacy.jsx 是事实与义务的权威来源；法语保留版本边界及尚未确认的事实边界。
const PROVIDERS = [
  ['Apple App Store', 'Distribution et achats intégrés', 'https://www.apple.com/legal/privacy/', 'Confidentialité Apple'],
  ['Google Firebase Crashlytics', 'Rapports de plantage (§2.1)', 'https://firebase.google.com/support/privacy', 'Confidentialité Firebase'],
  ['Google Firebase Analytics', 'Analyses d’utilisation et d’achat (§2.3)', 'https://firebase.google.com/support/privacy', 'Confidentialité Firebase'],
  ['Google Firebase Performance et Remote Config', 'Diagnostics de performance et configuration (§2.2 et §2.5)', 'https://firebase.google.com/support/privacy', 'Confidentialité Firebase'],
  ['Sentry', 'Diagnostics de plantage, d’erreur et de performance', 'https://sentry.io/privacy/', 'Confidentialité Sentry'],
  ['RevenueCat', 'Gestion et analyse des achats et abonnements', 'https://www.revenuecat.com/privacy/', 'Confidentialité RevenueCat'],
  ['Cartes d’Apple et géocodage', 'Requêtes de carte et d’adresse', 'https://www.apple.com/legal/privacy/', 'Confidentialité Apple'],
  ['Apple MetricKit', 'Mesures de performance (§2.2)', 'https://www.apple.com/legal/privacy/', 'Confidentialité Apple'],
]

export default function PrivacyFr({ navigate }) {
  return (
    <article className="c-doc" lang="fr-CA">
      <header>
        <h1>Politique de confidentialité</h1>
        <div className="c-doc-meta">
          <span><strong>Dernière mise à jour :</strong> 1er octobre 2026</span>
          <span><strong>Date d’entrée en vigueur :</strong> 1er octobre 2026</span>
        </div>
      </header>
      <p><NavLink to="/charted/privacy" navigate={navigate} hrefLang="en" lang="en">English</NavLink></p>
      <p><strong>Langue de l’application :</strong> l’interface actuelle de Charted est en anglais. Cette page fournit les renseignements de confidentialité en français.</p>
      <p>
        Charted est créée par <strong>Vertex Horizon Inc.</strong> (« nous », « notre », « nos »).
        Cette Politique de confidentialité explique quelles données Charted traite, comment elles
        sont utilisées et quels choix vous avez.
      </p>
      <p>
        <strong>Note sur les versions :</strong> les changements indiqués ci-dessous pour la version
        1.1.1 sont préparés pour cette version et leur disponibilité dans l’App Store est en attente.
        La version 1.1 reste la version publiée jusqu’à la disponibilité de la mise à jour. Vérifiez
        votre version installée et vos réglages de partage; une mise à jour de cette politique ne
        change pas le comportement d’une ancienne version de l’application.
      </p>
      <div className="c-doc-summary">
        <strong>En bref :</strong> Charted est conçue pour respecter votre vie privée. Nous ne conservons pas
        votre photothèque ni votre base de données locale de voyages sur nos serveurs et n’en détenons
        pas de copies distantes. Les
        services Apple traitent les requêtes de carte et d’adresse. Nous utilisons Apple et RevenueCat
        pour les achats, Firebase et Sentry pour les diagnostics et les analyses d’utilisation
        facultatives. Ces services reçoivent des identifiants techniques et les renseignements décrits
        ci-dessous. Nous ne recevons pas votre identifiant Apple ni vos renseignements de paiement.
      </div>

      <h2>1. Renseignements traités sur votre appareil</h2>
      <p>Lorsque vous utilisez Charted, l’application lit les données suivantes sur votre appareil. <strong>Votre photothèque et votre base de données de voyages sont conservées localement</strong> :</p>
      <h3>1.1 Métadonnées de la photothèque</h3>
      <ul>
        <li><strong>Données :</strong> coordonnées GPS (latitude et longitude), horodatages et renseignements sur l’appareil photo intégrés aux photos (métadonnées EXIF).</li>
        <li><strong>Finalité :</strong> placer vos photos sur le globe et détecter automatiquement vos voyages.</li>
        <li><strong>Stockage et requêtes :</strong> les métadonnées sont conservées dans la base de données locale de Charted. Lorsque vous demandez des détails sur un lieu ou une carte, les services Apple de géocodage et de cartographie peuvent recevoir les coordonnées ou la région nécessaires pour répondre.</li>
        <li><strong>Durée :</strong> jusqu’à la suppression des données locales concernées ou de l’Application. Décharger l’Application conserve ses documents et données. La supprimer n’efface pas les photos originales d’Apple Photos, les exports enregistrés ailleurs ni les copies dans les sauvegardes de l’appareil ou du système; gérez-les séparément auprès d’Apple ou du fournisseur de stockage choisi.</li>
        <li><strong>Images :</strong> Charted accède aux photos avec PhotoKit d’Apple pour les consulter, analyser localement les scènes et la qualité, et trouver des moments marquants. Photos d’Apple peut télécharger des photos iCloud au besoin. L’accès limité restreint les photos disponibles pour l’Application. Nous ne téléversons pas votre photothèque vers nos serveurs. Vous choisissez les exports et partages que vous lancez.</li>
      </ul>
      <h3>1.2 Localisation de l’appareil</h3>
      <ul>
        <li><strong>Données :</strong> votre position actuelle lorsque vous utilisez une fonction de localisation, par exemple afficher votre position sur la carte. Elle peut être précise si vous activez Position exacte dans iOS; sinon iOS fournit une position approximative.</li>
        <li><strong>Finalité :</strong> afficher votre position actuelle sur le globe.</li>
        <li><strong>Traitement :</strong> l’application utilise la localisation localement; les services Apple de cartographie et de géocodage peuvent traiter une requête de position ou de région cartographique lorsque vous utilisez ces fonctions.</li>
        <li><strong>Autorisation :</strong> Charted demande uniquement l’accès pendant l’utilisation. Nous ne demandons pas l’accès permanent ni la localisation en arrière-plan. Vous pouvez modifier l’autorisation et la précision dans les Réglages iOS.</li>
      </ul>
      <h3>1.3 Microphone et reconnaissance vocale (facultatifs)</h3>
      <ul>
        <li><strong>Données :</strong> saisie vocale pour rechercher des voyages.</li>
        <li><strong>Finalité :</strong> convertir vos demandes vocales en recherches.</li>
        <li><strong>Traitement et limite selon la version :</strong> la version 1.1 actuellement publiée utilise la reconnaissance vocale d’Apple sans exiger un traitement sur l’appareil; Apple peut traiter le son sur ses serveurs. Dans la version 1.1.1 en attente, la recherche vocale nécessite la prise en charge de la reconnaissance sur l’appareil d’Apple pour la langue actuelle et traite le son localement. Si elle est indisponible, utilisez la saisie au clavier; l’Application ne passe pas à une reconnaissance sur serveur. Les conditions de confidentialité d’Apple s’appliquent à son service vocal.</li>
        <li><strong>Autorisation :</strong> demandée uniquement si vous touchez le bouton du microphone.</li>
      </ul>
      <h3>1.4 Contenu généré par IA (Apple Foundation Models)</h3>
      <ul>
        <li><strong>Données :</strong> lorsque cette fonction est disponible, Charted utilise Foundation Models d’Apple sur l’appareil pour créer des récits à partir des renseignements locaux sur les voyages.</li>
        <li><strong>Finalité :</strong> rédiger un résumé poétique de chaque voyage.</li>
        <li><strong>Lieu du traitement :</strong> cette génération s’exécute sur votre appareil. Charted n’envoie pas vos instructions, photos ni votre base de données de voyages à un service d’IA infonuagique. Vous pouvez choisir de partager les textes générés ou le contenu exporté avec d’autres applications.</li>
        <li><strong>Disponibilité :</strong> les textes génératifs nécessitent iOS 26 ou une version ultérieure, un appareil compatible et Apple Intelligence disponible pour votre langue et votre région, avec des modèles prêts à fonctionner. Sinon, Charted utilise des résumés basés sur des modèles locaux. Pro n’active pas Apple Intelligence.</li>
      </ul>

      <h2>2. Renseignements envoyés hors de l’appareil (limités)</h2>
      <h3>2.1 Diagnostics de plantage et d’erreur (Firebase Crashlytics et Sentry)</h3>
      <ul>
        <li><strong>Données :</strong> traces de plantage, erreurs non fatales, blocages, versions de l’application et du système, renseignements sur l’appareil, identifiants d’installation et contexte technique, comme l’écran actuel et les diagnostics des requêtes réseau.</li>
        <li><strong>Finalité :</strong> diagnostiquer les défaillances et améliorer la fiabilité. Les rapports peuvent être associés à une installation ou à un appareil.</li>
        <li><strong>Contrôle :</strong> dans la version 1.1 actuellement publiée, les rapports de plantage sont activés par défaut, sous réserve de votre préférence enregistrée. Dans la version 1.1.1 en attente, ils sont désactivés par défaut pour les installations App Store et le partage nécessite votre consentement explicite. Vous pouvez modifier Share Crash Reports dans Settings → Privacy &amp; Security. La désactivation arrête les futurs partages correspondants, mais ne supprime pas les rapports déjà reçus.</li>
        <li><strong>Comportement prévu pour 1.1.1 :</strong> un ancien réglage activé par défaut n’est pas considéré comme un consentement. Les services Firebase démarrent uniquement si le partage des plantages a été explicitement activé, au prochain lancement de l’Application. Activer uniquement les analyses d’utilisation ne démarre pas Firebase. Les diagnostics locaux ne sont pas téléversés automatiquement simplement parce qu’ils existent sur votre appareil.</li>
        <li><strong>Images :</strong> Session Replay est désactivé dans la version App Store. Charted ne joint pas d’images de la photothèque à ces rapports.</li>
        <li><strong>Fournisseurs :</strong> <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noreferrer">Firebase</a> et <a href="https://sentry.io/privacy/" target="_blank" rel="noreferrer">Sentry</a>.</li>
      </ul>
      <h3>2.2 Diagnostics de performance</h3>
      <ul>
        <li><strong>Données :</strong> temps de lancement et d’exécution, latence réseau, utilisation des ressources et renseignements sur l’appareil et l’application. Firebase Performance peut utiliser l’adresse IP de connexion pour une segmentation géographique approximative.</li>
        <li><strong>Fournisseurs :</strong> Firebase Performance et, lorsque le partage des plantages est aussi activé, des traces de performance échantillonnées de Sentry. Les diagnostics Apple MetricKit sont également traités sur l’appareil.</li>
        <li><strong>Contrôle :</strong> les analyses d’utilisation et le partage des performances sont désactivés par défaut dans les versions App Store 1.1 et 1.1.1 en attente, sous réserve des préférences explicites enregistrées. Vous pouvez modifier Share Usage Analytics dans Settings → Privacy &amp; Security. Dans 1.1.1 en attente, le partage Firebase nécessite aussi son démarrage décrit au §2.1; les traces Sentry nécessitent également le partage des plantages.</li>
      </ul>
      <h3>2.3 Analyses d’utilisation (Firebase Analytics)</h3>
      <ul>
        <li><strong>Données :</strong> interactions avec les fonctions, événements d’accueil et d’abonnement, achats, préférences, identifiants de l’instance et de l’appareil, et position approximative déduite de la connexion réseau. Ces événements ne comprennent pas les images de la photothèque ni les champs GPS précis utilisés pour créer la base de données de voyages.</li>
        <li><strong>Finalité :</strong> comprendre l’utilisation et améliorer l’application. Les événements peuvent être associés à la même installation ou au même appareil.</li>
        <li><strong>Contrôle :</strong> désactivées par défaut dans la version App Store; modifiez Share Usage Analytics dans Settings → Privacy &amp; Security.</li>
      </ul>
      <h3>2.4 Achats (Apple et RevenueCat)</h3>
      <ul>
        <li><strong>Données :</strong> Apple traite les paiements. RevenueCat reçoit l’historique d’achats et de transactions, l’état de l’abonnement et un identifiant utilisateur persistant aléatoire également utilisé comme jeton de compte StoreKit. La version 1.1 transmet aussi des attributs d’abonné sur la variante de distribution, la région générale et la cohorte de diagnostic; la version 1.1.1 en attente supprime ces attributs définis par Charted. Les trousses logicielles de RevenueCat et d’Apple peuvent toujours recevoir les renseignements usuels sur l’application, l’appareil, la boutique ou le pays et la connexion nécessaires à leurs services.</li>
        <li><strong>Finalité :</strong> validation et restauration des achats, gestion des abonnements et analyses des abonnements.</li>
        <li><strong>Contrôle :</strong> les services d’achat fonctionnent séparément du réglage des analyses d’utilisation facultatives. Nous ne recevons pas votre identifiant Apple, vos détails de carte ni votre adresse de facturation.</li>
      </ul>
      <h3>2.5 Configuration (Firebase Remote Config)</h3>
      <p>
        Firebase Remote Config reçoit des renseignements sur l’application, le système, la langue,
        le pays ou la région et l’installation pour fournir des réglages et des expériences de fonctions.
        Dans la version 1.1 actuellement publiée, ces requêtes peuvent se produire même si les analyses
        facultatives sont désactivées. Dans 1.1.1 en attente, la récupération distante et les mises à jour
        en direct nécessitent le consentement aux analyses d’utilisation et le démarrage de Firebase
        décrit au §2.1. Lorsque le consentement aux analyses d’utilisation est désactivé ou retiré, l’Application utilise ses réglages
        locaux ou par défaut et arrête ces requêtes. Ni la photothèque ni la base de données de voyages
        ne sont incluses.
      </p>

      <h2>3. Renseignements que nous ne recueillons pas</h2>
      <p>Nous ne recueillons pas :</p>
      <ul>
        <li>Votre nom, adresse courriel ou numéro de téléphone pour utiliser l’application; si vous écrivez à l’assistance, nous recevons votre adresse et les renseignements que vous choisissez d’envoyer</li>
        <li>Un compte utilisateur (Charted n’exige aucune connexion)</li>
        <li>Vos contacts ou vos données de réseaux sociaux</li>
        <li>Votre historique de navigation ou les autres applications utilisées</li>
        <li>Votre photothèque sur nos serveurs (les photos sont consultées et traitées localement)</li>
        <li>Des identifiants de suivi entre applications ou sites Web (IDFA)</li>
        <li>Votre position précise en continu en arrière-plan</li>
      </ul>
      <h2>4. Services de tiers</h2>
      <p>
        Charted utilise les services ci-dessous. Nous restons responsables des finalités et du traitement
        des données personnelles que nous déterminons, y compris des demandes concernant nos sous-traitants.
        Certains fournisseurs, comme Apple pour les paiements et ses services de compte, déterminent aussi
        leurs propres finalités; leurs politiques décrivent ces traitements. Nommer un fournisseur ne
        transfère pas nos responsabilités et ne limite pas vos droits.
      </p>
      <table>
        <thead><tr><th>Service</th><th>Finalité</th><th>Politique de confidentialité</th></tr></thead>
        <tbody>{PROVIDERS.map(([name, purpose, url, label]) => (
          <tr key={name}><td><strong>{name}</strong></td><td>{purpose}</td><td><a href={url} target="_blank" rel="noreferrer">{label}</a></td></tr>
        ))}</tbody>
      </table>
      <h3>4.1 Finalités et bases juridiques</h3>
      <p>
        Lorsque le droit de la protection des données de l’Union européenne ou du Royaume-Uni s’applique,
        les bases suivantes correspondent aux finalités que nous déterminons. Une autorisation iOS
        contrôle l’accès à l’appareil; elle ne remplace pas en elle-même la base juridique ni les choix
        distincts de partage décrits ci-dessus.
      </p>
      <ul>
        <li><strong>Fonctions demandées :</strong> le traitement local des photos et voyages, les cartes demandées et les exports sélectionnés sont nécessaires à la fourniture des fonctions que vous demandez dans le cadre de notre contrat avec vous.</li>
        <li><strong>Achats et restauration :</strong> les identifiants de transaction et les renseignements sur les droits d’accès servent à exécuter notre contrat et à fournir ou restaurer Pro. Les documents exigés par le droit comptable ou d’autres lois sont traités pour respecter ces obligations. Apple détermine ses propres bases pour les paiements et les comptes.</li>
        <li><strong>Analyses, performances et expériences de configuration facultatives dans 1.1.1 en attente :</strong> votre consentement. Vous pouvez le retirer dans Settings sans perdre les fonctions locales essentielles; le retrait ne modifie pas la licéité du traitement antérieur.</li>
        <li><strong>Partage des plantages et erreurs :</strong> la version 1.1.1 en attente utilise votre consentement explicite. La version 1.1 utilise un réglage activé par défaut avec possibilité de refus, pour notre intérêt légitime à diagnostiquer les défaillances et maintenir la fiabilité; vous pouvez vous y opposer et le désactiver. Cet ancien réglage par défaut n’est pas présenté comme un consentement.</li>
        <li><strong>Ancienne configuration et sécurité :</strong> la configuration de 1.1 repose sur notre intérêt légitime à fournir des réglages de fonctions. La protection de l’application et la lutte contre les abus reposent sur nos intérêts légitimes, mis en balance avec vos droits. Dans 1.1.1 en attente, la configuration distante et les expériences sont facultatives et fondées sur le consentement; nous ne les qualifions pas de nécessaires à l’utilisation.</li>
        <li><strong>Assistance :</strong> répondre à votre demande concernant l’application ou un abonnement est nécessaire pour vous assister dans le cadre du contrat; les autres échanges reposent sur notre intérêt légitime à répondre aux questions. Nous conservons des documents si nécessaire pour respecter des obligations légales ou traiter des réclamations.</li>
      </ul>
      <h3>4.2 Lieux de traitement</h3>
      <p>
        Les fournisseurs décrits ci-dessus peuvent traiter des renseignements hors de votre pays,
        notamment aux États-Unis. Le traitement local des photos et voyages n’est pas une promesse
        que tous les renseignements de service restent dans votre pays. Les politiques des fournisseurs
        décrivent leurs lieux de traitement et leurs mécanismes de transfert. Vous pouvez nous demander
        des renseignements sur les fournisseurs et les garanties applicables aux traitements effectués
        pour nous; cette politique ne prétend pas à un hébergement exclusivement dans l’UE ou au Royaume-Uni.
      </p>
      <h3>4.3 Conservation</h3>
      <ul>
        <li><strong>Contenu local :</strong> conservé jusqu’à la suppression des données concernées ou de l’Application, sous réserve des exports, sauvegardes et du déchargement décrits au §1.1. Les images en cache peuvent être supprimées plus tôt.</li>
        <li><strong>Diagnostics et analyses :</strong> la conservation dépend des réglages déployés chez les fournisseurs et du temps nécessaire pour enquêter sur les défaillances ou évaluer l’utilisation des fonctions concernées. Nous supprimons ou anonymisons les documents lorsqu’ils ne sont plus nécessaires à ces fins, sauf obligation légale ou réclamation en cours. Désactiver le partage arrête les futurs partages concernés; ce n’est pas une demande de suppression des documents antérieurs.</li>
        <li><strong>Documents d’achat :</strong> conservés selon les besoins de fourniture et de restauration des droits, de traitement des remboursements ou litiges, ainsi que pour toute durée légale de conservation applicable. Apple détermine la conservation de ses propres documents de paiement.</li>
        <li><strong>Assistance :</strong> conservée pendant le traitement de la demande et tout suivi nécessaire, puis supprimée lorsqu’elle n’est plus nécessaire, sauf documents requis pour des obligations légales ou des réclamations.</li>
      </ul>
      <p>
        Nous ne promettons pas une durée unique pour tous les systèmes des fournisseurs. Contactez-nous
        pour connaître les réglages actuels ou demander la suppression de documents vous concernant.
        Des copies dans les sauvegardes des fournisseurs peuvent subsister jusqu’à la fin de leurs cycles
        normaux de suppression; les exceptions légales de conservation seront expliquées si elles s’appliquent.
      </p>

      <h2>5. Achats intégrés (Charted Pro)</h2>
      <p>
        Charted propose des abonnements (« Charted Pro »). Apple traite les transactions. RevenueCat
        traite l’historique des transactions, l’état de l’abonnement et les identifiants décrits au §2.4.
        Nous ne voyons pas votre identifiant Apple, votre moyen de paiement ni votre adresse de facturation.
      </p>
      <p>Pour gérer ou annuler votre abonnement :</p>
      <ol>
        <li>Ouvrez Réglages sur votre iPhone</li><li>Touchez votre nom en haut de l’écran</li>
        <li>Touchez <strong>Abonnements</strong></li><li>Sélectionnez Charted</li>
      </ol>
      <p>La procédure de remboursement d’Apple s’applique sans limiter les droits impératifs des consommateurs. Consultez <a href="https://support.apple.com/HT202039" target="_blank" rel="noreferrer">Abonnements Apple</a>.</p>
      <h2>6. Confidentialité des enfants</h2>
      <p>Charted ne s’adresse pas aux enfants de moins de 13 ans. Si vous pensez qu’un enfant nous a transmis des renseignements personnels, contactez-nous pour que nous puissions examiner et traiter la demande.</p>
      <h2>7. Vos droits</h2>
      <p>
        Vous pouvez gérer vos données locales et préférences de partage sur votre appareil. Pour toute
        question ou demande sur des renseignements que nous traitons ou qui sont traités pour nous,
        contactez-nous ci-dessous. Selon la loi applicable, vous pouvez demander l’accès, la rectification,
        la suppression, la limitation ou la portabilité, vous opposer au traitement fondé sur l’intérêt
        légitime et retirer votre consentement sans modifier la licéité du traitement antérieur. Ces
        droits ont des limites légales, que nous expliquerons si elles s’appliquent. Nous ne prenons
        pas de décisions vous concernant produisant des effets juridiques ou similaires significatifs
        sur la seule base d’un traitement automatisé.
      </p>
      <ul>
        <li><strong>Données locales :</strong> vos voyages enregistrés sont accessibles dans Charted. Nous ne détenons pas de copie distante de votre photothèque ou de votre base de données de voyages et ne pouvons pas supprimer ces données locales depuis un serveur. Gérez-les sur votre appareil à l’aide des contrôles ci-dessous.</li>
        <li><strong>Suppression :</strong> utilisez Settings → Data Controls pour les contrôles locaux, ou supprimez l’Application. Le déchargement conserve les données. Aucune de ces actions ne supprime les photos, exports ou sauvegardes externes, abonnements Apple, documents d’achat ou diagnostics déjà reçus par les fournisseurs. Les demandes qui nous sont adressées concernent uniquement les documents que nous détenons effectivement ou que des fournisseurs traitent pour nous, comme les échanges avec l’assistance, les documents d’achat ou les diagnostics. Nous les traitons selon les droits et obligations de conservation applicables; nous expliquerons si aucun document correspondant n’est détenu ou si une obligation légale de conservation s’applique. Les demandes sur les comptes ou paiements Apple peuvent aussi être adressées à Apple.</li>
        <li><strong>Exportation :</strong> Settings → Data Controls → Export Data propose des données sélectionnées en JSON, CSV ou GPX. Ces fichiers ne sont pas une sauvegarde complète restaurable et ne comprennent pas les photos originales ni toutes les modifications et préférences. Dans 1.1.1 en attente, la fonction distincte Backup &amp; Restore conserve les documents personnels qu’elle prend en charge; elle ne copie pas les originaux de Photos ni toutes les préférences.</li>
        <li><strong>Contrôles du partage :</strong> Settings → Privacy &amp; Security → Share Usage Analytics / Share Crash Reports. Les désactiver arrête les partages correspondants, mais n’efface pas les rapports déjà reçus.</li>
      </ul>
      <p>
        Pour les demandes de droits UE/Royaume-Uni, nous répondons sans retard injustifié et normalement
        dans un délai d’un mois civil. Lorsque la loi permet une prolongation pour complexité ou demandes
        multiples, nous pouvons prolonger de deux mois supplémentaires et expliquerons la raison pendant
        le premier mois. Nous pouvons demander des renseignements proportionnés pour vérifier votre
        identité ou identifier les documents d’installation concernés. N’envoyez pas votre photothèque
        ni votre historique complet de localisation par courriel simplement pour faire une demande.
      </p>
      <p>
        Vous pouvez porter plainte auprès de votre autorité locale de protection des données ou demander
        un recours judiciaire. Au Royaume-Uni, contactez l’<a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noreferrer">Information Commissioner’s Office</a>;
        en Irlande, contactez la <a href="https://www.dataprotection.ie/en/individuals/exercising-your-rights/complaints-handling-investigations-and-enforcement-individuals" target="_blank" rel="noreferrer">Data Protection Commission</a>.
        Vous n’avez pas à renoncer à ces droits pour nous contacter d’abord.
      </p>
      <p>Pour toute question : <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></p>
      <h2>8. Sécurité des données</h2>
      <ul>
        <li>Vos photos, positions et données de voyages sont conservées sur votre appareil, protégées par l’isolation des applications d’iOS.</li>
        <li>Le trafic réseau de Charted utilise HTTPS/TLS.</li>
        <li>Nous limitons le partage hors de l’appareil aux finalités décrites ci-dessus. Aucun stockage ou mode de transmission n’est sans risque. Protégez votre appareil, vos sauvegardes et vos exports de localisation, et vérifiez la destination avant de partager.</li>
      </ul>
      <h2>9. Modification de cette politique</h2>
      <p>Nous pouvons mettre à jour cette Politique de confidentialité. La date de dernière mise à jour indiquera le changement le plus récent. Les changements importants seront communiqués par un avis dans l’application.</p>
      <h2>10. Contact</h2>
      <p>
        <strong>Courriel :</strong> <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a><br />
        <strong>Responsable du traitement :</strong> Vertex Horizon Inc.<br />
        <strong>Adresse postale :</strong> 3405 Montgomery Dr Apt 255, Santa Clara, CA 95054-3080, United States<br />
        <strong>Téléphone professionnel :</strong> <a href="tel:+16088951157">+1 608-895-1157</a>
      </p>
      <div className="c-doc-footer">
        <span>© {new Date().getFullYear()} Vertex Horizon Inc.</span>
        <span><NavLink to="/charted/terms/fr" navigate={navigate}>Conditions d’utilisation</NavLink>{' · '}<NavLink to="/charted/support" navigate={navigate}>Assistance (anglais)</NavLink></span>
      </div>
    </article>
  )
}
