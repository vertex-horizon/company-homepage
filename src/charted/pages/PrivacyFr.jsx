import { RegionalLinks } from './RegionalInfo.jsx'
import { productPath } from '../config.js'
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
  ['Backblaze B2', 'Téléchargements publics de terrain et d’imagerie (§2.6)', 'https://www.backblaze.com/company/policy/privacy', 'Confidentialité Backblaze'],
  ['GitHub Pages', 'Hébergement web et journaux de sécurité (§2.6)', 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement', 'Confidentialité GitHub'],
  ['Messagerie Google', 'Acheminement des échanges avec l’assistance (§2.6)', 'https://policies.google.com/privacy', 'Confidentialité Google'],
  ['Apple MetricKit', 'Mesures de performance (§2.2)', 'https://www.apple.com/legal/privacy/', 'Confidentialité Apple'],
]

export default function PrivacyFr({ navigate }) {
  return (
    <article className="c-doc" lang="fr-CA">
      <header>
        <h1>Politique de confidentialité</h1>
        <div className="c-doc-meta">
          <span><strong>Dernière mise à jour :</strong> 30 octobre 2026</span>
          <span><strong>Date d’entrée en vigueur :</strong> 1er octobre 2026</span>
        </div>
      </header>
      <RegionalLinks navigate={navigate} />
      <p><strong>Nom de l’application :</strong> Charted devient Mapvoy. Le fournisseur reste Vertex Horizon Inc.</p>
      <p><NavLink to={productPath('/privacy')} navigate={navigate} hrefLang="en" lang="en">English</NavLink></p>
      <p><strong>Langue de l’application :</strong> les textes disponibles dépendent de la version installée et de la langue choisie dans iOS. Cette page fournit les renseignements de confidentialité en français.</p>
      <p>
        Mapvoy est créée par <strong>Vertex Horizon Inc.</strong> (« nous », « notre », « nos »).
        Cette Politique de confidentialité explique quelles données Mapvoy traite, comment elles
        sont utilisées et quels choix vous avez.
      </p>
      <p>
        <strong>Note sur les versions :</strong> les contrôles de confidentialité et les réglages de partage par défaut peuvent
        varier selon la version installée. Les indications ci-dessous distinguent le comportement de
        l’ancienne version 1.1 de celui des versions comprenant la mise à jour de confidentialité.
        Vérifiez votre version installée et vos réglages de partage. La publication de cet avis ne
        modifie pas le comportement d’une ancienne version de l’application.
      </p>
      <div className="c-doc-summary">
        <strong>En bref :</strong> Mapvoy est conçue pour respecter votre vie privée. Nous ne conservons pas
        votre photothèque ni votre base de données locale de voyages sur nos serveurs et n’en détenons
        pas de copies distantes. Les
        services Apple traitent les requêtes de carte et d’adresse. Nous utilisons Apple et RevenueCat
        pour les achats, Firebase et Sentry pour les diagnostics et les analyses d’utilisation
        facultatives. Ces services reçoivent des identifiants techniques et les renseignements décrits
        ci-dessous. Nous ne recevons pas votre identifiant Apple ni vos renseignements de paiement.
      </div>

      <h2>1. Renseignements traités sur votre appareil</h2>
      <p>Lorsque vous utilisez Mapvoy, l’application lit les données suivantes sur votre appareil. <strong>Votre photothèque et votre base de données de voyages sont conservées localement</strong> :</p>
      <h3>1.1 Métadonnées de la photothèque</h3>
      <ul>
        <li><strong>Données :</strong> coordonnées GPS (latitude et longitude), horodatages et renseignements sur l’appareil photo intégrés aux photos (métadonnées EXIF).</li>
        <li><strong>Finalité :</strong> placer vos photos sur le globe et détecter automatiquement vos voyages.</li>
        <li><strong>Stockage et requêtes :</strong> les métadonnées sont conservées dans la base de données locale de Mapvoy. Lorsque vous demandez des détails sur un lieu ou une carte, les services Apple de géocodage et de cartographie peuvent recevoir les coordonnées ou la région nécessaires pour répondre.</li>
        <li><strong>Durée :</strong> jusqu’à la suppression des données locales concernées ou de l’Application. Décharger l’Application conserve ses documents et données. La supprimer n’efface pas les photos originales d’Apple Photos, les exports enregistrés ailleurs ni les copies dans les sauvegardes de l’appareil ou du système; gérez-les séparément auprès d’Apple ou du fournisseur de stockage choisi.</li>
        <li><strong>Images :</strong> Mapvoy accède aux photos avec PhotoKit d’Apple pour les consulter, analyser localement les scènes et la qualité, et trouver des moments marquants. Photos d’Apple peut télécharger des photos iCloud au besoin. L’accès limité restreint les photos disponibles pour l’Application. Nous ne téléversons pas votre photothèque vers nos serveurs. Vous choisissez les exports et partages que vous lancez.</li>
      </ul>
      <h3>1.2 Localisation de l’appareil</h3>
      <ul>
        <li><strong>Données :</strong> votre position actuelle lorsque vous utilisez une fonction de localisation, par exemple afficher votre position sur la carte. Elle peut être précise si vous activez Position exacte dans iOS; sinon iOS fournit une position approximative.</li>
        <li><strong>Finalité :</strong> afficher votre position actuelle sur le globe.</li>
        <li><strong>Traitement :</strong> l’application utilise la localisation localement; les services Apple de cartographie et de géocodage peuvent traiter une requête de position ou de région cartographique lorsque vous utilisez ces fonctions.</li>
        <li><strong>Autorisation :</strong> Mapvoy demande uniquement l’accès pendant l’utilisation. Nous ne demandons pas l’accès permanent ni la localisation en arrière-plan. Vous pouvez modifier l’autorisation et la précision dans les Réglages iOS.</li>
      </ul>
      <h3>1.3 Microphone et reconnaissance vocale (facultatifs)</h3>
      <ul>
        <li><strong>Données :</strong> saisie vocale pour rechercher des voyages.</li>
        <li><strong>Finalité :</strong> convertir vos demandes vocales en recherches.</li>
        <li><strong>Traitement et limite selon la version :</strong> l’ancienne version 1.1 utilise la reconnaissance vocale d’Apple sans exiger un traitement sur l’appareil; Apple peut traiter le son sur ses serveurs. Dans les versions comprenant la mise à jour de confidentialité, la recherche vocale nécessite la prise en charge de la reconnaissance sur l’appareil d’Apple pour la langue actuelle et traite le son localement. Si elle est indisponible, utilisez la saisie au clavier; l’Application ne passe pas à une reconnaissance sur serveur. Les conditions de confidentialité d’Apple s’appliquent à son service vocal.</li>
        <li><strong>Autorisation :</strong> demandée uniquement si vous touchez le bouton du microphone.</li>
      </ul>
      <h3>1.4 Contenu généré par IA (Apple Foundation Models)</h3>
      <ul>
        <li><strong>Données :</strong> lorsque cette fonction est disponible, Mapvoy utilise Foundation Models d’Apple sur l’appareil pour créer des récits à partir des renseignements locaux sur les voyages.</li>
        <li><strong>Finalité :</strong> rédiger un résumé poétique de chaque voyage.</li>
        <li><strong>Lieu du traitement :</strong> cette génération s’exécute sur votre appareil. Mapvoy n’envoie pas vos instructions, photos ni votre base de données de voyages à un service d’IA infonuagique. Vous pouvez choisir de partager les textes générés ou le contenu exporté avec d’autres applications.</li>
        <li><strong>Disponibilité :</strong> les textes génératifs nécessitent iOS 26 ou une version ultérieure, un appareil compatible et Apple Intelligence disponible pour votre langue et votre région, avec des modèles prêts à fonctionner. Sinon, Mapvoy utilise des résumés basés sur des modèles locaux. Pro n’active pas Apple Intelligence.</li>
      </ul>

      <h2>2. Renseignements envoyés hors de l’appareil (limités)</h2>
      <h3>2.1 Diagnostics de plantage et d’erreur (Firebase Crashlytics et Sentry)</h3>
      <ul>
        <li><strong>Données :</strong> traces de plantage, erreurs non fatales, blocages, versions de l’application et du système, renseignements sur l’appareil, identifiants d’installation et contexte technique, comme l’écran actuel et les diagnostics des requêtes réseau.</li>
        <li><strong>Finalité :</strong> diagnostiquer les défaillances et améliorer la fiabilité. Les rapports peuvent être associés à une installation ou à un appareil.</li>
        <li><strong>Contrôle :</strong> dans l’ancienne version 1.1, les rapports de plantage sont activés par défaut, sous réserve de votre préférence enregistrée. Dans les versions comprenant la mise à jour de confidentialité, ils sont désactivés par défaut pour les installations App Store et le partage nécessite votre consentement explicite. Vous pouvez modifier Share Crash Reports dans Settings → Privacy &amp; Security. La désactivation arrête les futurs partages correspondants, mais ne supprime pas les rapports déjà reçus.</li>
        <li><strong>Comportement après la mise à jour de confidentialité :</strong> un ancien réglage activé par défaut n’est pas considéré comme un consentement. Firebase s’initialise avec les collectes d’analyses et de plantages désactivées; le choix explicite correspondant et le nettoyage des données en attente contrôlent la collecte. L’initialisation du SDK ne garantit pas l’absence de trafic avec le service. Les diagnostics locaux ne sont pas téléversés automatiquement simplement parce qu’ils existent sur votre appareil.</li>
        <li><strong>Images :</strong> Session Replay est désactivé dans la version App Store. Mapvoy ne joint pas d’images de la photothèque à ces rapports.</li>
        <li><strong>Fournisseurs :</strong> <a href="https://firebase.google.com/support/privacy" target="_blank" rel="noreferrer">Firebase</a> et <a href="https://sentry.io/privacy/" target="_blank" rel="noreferrer">Sentry</a>.</li>
      </ul>
      <h3>2.2 Diagnostics de performance</h3>
      <ul>
        <li><strong>Données :</strong> temps de lancement et d’exécution, latence réseau, utilisation des ressources et renseignements sur l’appareil et l’application. La version 1.1 peut utiliser Firebase Performance, y compris une segmentation géographique approximative fondée sur l’adresse IP de connexion. Dans les versions comprenant la mise à jour de confidentialité, la collecte et l’instrumentation automatiques de Firebase Performance sont désactivées de façon permanente.</li>
        <li><strong>Fournisseurs :</strong> la version 1.1 peut utiliser Firebase Performance et des traces de performance échantillonnées de Sentry. Dans les versions comprenant la mise à jour de confidentialité, les traces de performance automatiques et créées par l’application ainsi que Session Replay de Sentry sont désactivés. Les diagnostics Apple MetricKit et les mesures locales sont traités sur l’appareil; certains résumés techniques de performance utilisent le canal facultatif d’analyses.</li>
        <li><strong>Contrôle :</strong> les analyses d’utilisation et le partage des performances sont désactivés par défaut dans l’ancienne version App Store 1.1 et les versions comprenant la mise à jour de confidentialité, sous réserve des préférences explicites enregistrées. Vous pouvez modifier Share Usage Analytics dans Settings → Privacy &amp; Security. La désactivation arrête les futurs partages correspondants et supprime les événements locaux en attente; elle ne supprime pas les données déjà reçues par un fournisseur et ne rappelle pas les requêtes déjà livrées.</li>
      </ul>
      <h3>2.3 Analyses d’utilisation (Firebase Analytics)</h3>
      <ul>
        <li><strong>Données :</strong> interactions avec les fonctions, événements d’accueil et d’abonnement, achats, préférences, identifiants de l’instance et de l’appareil, et position approximative déduite de la connexion réseau. Ces événements ne comprennent pas les images de la photothèque ni les champs GPS précis utilisés pour créer la base de données de voyages.</li>
        <li><strong>Finalité :</strong> comprendre l’utilisation et améliorer l’application. Les événements peuvent être associés à la même installation ou au même appareil.</li>
        <li><strong>Contrôle :</strong> désactivées par défaut dans la version App Store; modifiez Share Usage Analytics dans Settings → Privacy &amp; Security.</li>
      </ul>
      <h3>2.4 Achats (Apple et RevenueCat)</h3>
      <ul>
        <li><strong>Données :</strong> Apple traite les paiements. RevenueCat reçoit l’historique d’achats et de transactions, l’état de l’abonnement et un identifiant utilisateur persistant aléatoire également utilisé comme jeton de compte StoreKit. La version 1.1 transmet aussi des attributs d’abonné sur la variante de distribution, la région générale et la cohorte de diagnostic; les versions comprenant la mise à jour de confidentialité suppriment ces attributs définis par Mapvoy. Les trousses logicielles de RevenueCat et d’Apple peuvent toujours recevoir les renseignements usuels sur l’application, l’appareil, la boutique ou le pays et la connexion nécessaires à leurs services.</li>
        <li><strong>Finalité :</strong> validation et restauration des achats, gestion des abonnements et analyses des abonnements.</li>
        <li><strong>Contrôle :</strong> les services d’achat fonctionnent séparément du réglage des analyses d’utilisation facultatives. Nous ne recevons pas votre identifiant Apple, vos détails de carte ni votre adresse de facturation.</li>
      </ul>
      <p>
        Dans les versions antérieures à la mise à jour de synchronisation des achats à la demande,
        les services d’achat sont initialisés au démarrage de Mapvoy. RevenueCat peut alors recevoir
        l’identifiant utilisateur persistant et des renseignements techniques sur l’application,
        l’appareil et la connexion, même si vous n’avez pas acheté Mapvoy Pro. Dans les versions comprenant
        cette mise à jour, StoreKit vérifie les droits locaux et RevenueCat s’initialise lorsqu’une
        transaction vérifiée est enregistrée ou que vous restaurez explicitement vos achats. Cela peut
        aussi se produire au démarrage lors de la remise d’une transaction vérifiée non terminée.
        Ces services sont distincts des analyses d’utilisation facultatives et ne transmettent ni
        votre photothèque ni votre base de données locale de voyages à RevenueCat.
      </p>

      <h3>2.5 Configuration (Firebase Remote Config)</h3>
      <p>
        Firebase Remote Config reçoit des renseignements sur l’application, le système, la langue,
        le pays ou la région et l’installation pour fournir des réglages et des expériences de fonctions.
        Dans l’ancienne version 1.1, ces requêtes peuvent se produire même si les analyses
        facultatives sont désactivées. Dans les versions comprenant la mise à jour de confidentialité, la récupération distante et les mises à jour
        en direct nécessitent le consentement aux analyses d’utilisation. Le nettoyage des données en attente
        et le consentement actuel contrôlent la collecte; l’initialisation ne garantit pas l’absence de trafic avec le SDK. Lorsque le consentement aux analyses d’utilisation est désactivé ou retiré, l’Application utilise ses réglages
        locaux ou par défaut et arrête les nouvelles requêtes et mises à jour en direct. Une requête déjà
        en cours peut encore parvenir au fournisseur; les résultats reçus après le retrait sont ignorés.
        Ni la photothèque ni la base de données de voyages ne sont incluses.
      </p>

      <h3>2.6 Ressources cartographiques publiques et assistance</h3>
      <p>
        Mapvoy télécharge des fichiers publics de terrain et d’imagerie depuis le stockage Backblaze B2
        aux États-Unis (région US East).
        Ces requêtes communiquent au fournisseur d’hébergement votre adresse IP, la ressource demandée
        et des renseignements ordinaires de connexion. Le téléchargement d’un fichier cartographique
        ne téléverse ni votre photothèque ni votre base de données locale de voyages. Si vous nous
        écrivez, nous recevons votre adresse courriel, votre message et les pièces jointes que vous
        choisissez d’envoyer; transmettez uniquement ce qui est nécessaire à votre demande.
      </p>
      <p>
        Les sites web de notre société et de notre produit sont hébergés sur GitHub Pages, qui consigne
        les adresses IP des visiteurs à des fins de sécurité. Les messages envoyés à notre adresse
        d’assistance sont acheminés par la messagerie Google. Ces fournisseurs peuvent traiter les
        renseignements de service aux États-Unis et dans leurs autres pays d’activité; le lieu de
        notre personne de contact ne détermine pas tous les lieux de traitement.
      </p>

      <h2>3. Renseignements que nous ne recueillons pas</h2>
      <p>Nous ne recueillons pas :</p>
      <ul>
        <li>Votre nom, adresse courriel ou numéro de téléphone pour utiliser l’application; si vous écrivez à l’assistance, nous recevons votre adresse et les renseignements que vous choisissez d’envoyer</li>
        <li>Un compte utilisateur (Mapvoy n’exige aucune connexion)</li>
        <li>Vos contacts ou vos données de réseaux sociaux</li>
        <li>Votre historique de navigation ou les autres applications utilisées</li>
        <li>Votre photothèque sur nos serveurs (les photos sont consultées et traitées localement)</li>
        <li>Des identifiants de suivi entre applications ou sites Web (IDFA)</li>
        <li>Votre position précise en continu en arrière-plan</li>
      </ul>
      <h2>4. Services de tiers</h2>
      <p>
        Mapvoy utilise les services ci-dessous. Nous restons responsables des finalités et du traitement
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
        <li><strong>Analyses, performances et expériences de configuration facultatives dans les versions comprenant la mise à jour de confidentialité :</strong> votre consentement. Vous pouvez le retirer dans Settings sans perdre les fonctions locales essentielles; le retrait ne modifie pas la licéité du traitement antérieur.</li>
        <li><strong>Partage des plantages et erreurs :</strong> les versions comprenant la mise à jour de confidentialité utilisent votre consentement explicite. La version 1.1 utilise un réglage activé par défaut avec possibilité de refus, pour notre intérêt légitime à diagnostiquer les défaillances et maintenir la fiabilité; vous pouvez vous y opposer et le désactiver. Cet ancien réglage par défaut n’est pas présenté comme un consentement.</li>
        <li><strong>Ancienne configuration et sécurité :</strong> la configuration de 1.1 repose sur notre intérêt légitime à fournir des réglages de fonctions. La protection de l’application et la lutte contre les abus reposent sur nos intérêts légitimes, mis en balance avec vos droits. Dans les versions comprenant la mise à jour de confidentialité, la configuration distante et les expériences sont facultatives et fondées sur le consentement; nous ne les qualifions pas de nécessaires à l’utilisation.</li>
        <li><strong>Assistance :</strong> répondre à votre demande concernant l’application ou un abonnement est nécessaire pour vous assister dans le cadre du contrat; les autres échanges reposent sur notre intérêt légitime à répondre aux questions. Nous conservons des documents si nécessaire pour respecter des obligations légales ou traiter des réclamations.</li>
      </ul>
      <h3>4.2 Lieux de traitement et garanties de transfert</h3>
      <p>
        Vertex Horizon Inc. est établie aux États-Unis. Notre contact pour l’assistance et la
        protection des données se trouve aux États-Unis; les prestataires de courrier peuvent traiter
        les messages dans d’autres pays. RevenueCat, Inc. fournit nos services
        d’achat et de gestion des droits d’accès aux États-Unis. Votre photothèque et votre base
        locale de voyages ne nous sont pas transmises, ni à RevenueCat, dans le cadre de ces services.
      </p>
      <p>
        Lorsque les diagnostics Sentry sont activés, les rapports sont stockés aux États-Unis.
        Les sociétés affiliées de Sentry peuvent également traiter les informations nécessaires au
        service et à l’assistance technique en Autriche, au Canada et aux Pays-Bas. Functional Software,
        Inc., qui exerce sous le nom de Sentry, participe actuellement au{' '}
        <a href="https://www.dataprivacyframework.gov/participant/5869" target="_blank" rel="noreferrer">cadre de protection des données Suisse–États-Unis</a> pour les traitements couverts aux États-Unis.
        Notre accord de traitement Sentry comprend des clauses contractuelles types adaptées au
        droit suisse, à titre subsidiaire lorsque ce cadre ne couvre pas un transfert.
      </p>
      <p>
        Les transferts couverts depuis la Suisse vers{' '}
        <a href="https://www.dataprivacyframework.gov/participant/5780" target="_blank" rel="noreferrer">Google LLC</a> et{' '}
        <a href="https://www.dataprivacyframework.gov/participant/6408" target="_blank" rel="noreferrer">Backblaze, Inc.</a> aux États-Unis reposent sur le cadre de protection des données Suisse–États-Unis.
        Les transferts restreints suisses vers RevenueCat, Inc. sont soumis aux clauses contractuelles
        types de la Commission européenne, adaptées au droit suisse et intégrées à{' '}
        <a href="https://www.revenuecat.com/dpa" target="_blank" rel="noreferrer">l’avenant de RevenueCat relatif au traitement des données</a>.
        Ces dispositifs ne signifient pas que tous les lieux de traitement sont couverts par le cadre
        américain ni que Vertex Horizon Inc. est elle-même certifiée.
      </p>
      <p>
        Les services Google font intervenir Google LLC aux États-Unis et peuvent entraîner des
        traitements dans d’autres pays ou territoires. Google publie des informations propres à chaque
        service sur{' '}
        <a href="https://business.safety.google/adssubprocessors/" target="_blank" rel="noreferrer">les lieux d’établissement des prestataires Analytics</a>,{' '}
        <a href="https://firebase.google.com/support/privacy#data_storage_and_processing_locations" target="_blank" rel="noreferrer">les lieux de traitement mondiaux de Firebase</a> et{' '}
        <a href="https://firebase.google.com/terms/subprocessors" target="_blank" rel="noreferrer">ses prestataires d’assistance</a>, ainsi que{' '}
        <a href="https://workspace.google.com/terms/subprocessors/" target="_blank" rel="noreferrer">les pays de traitement et d’assistance de Workspace</a>.
        Ces listes décrivent des lieux potentiels; vos données ne sont pas nécessairement traitées
        dans chacun d’eux. Les lieux d’établissement des prestataires Analytics ne sont pas des lieux
        fixes de stockage des données. Les autres fournisseurs de ressources et d’hébergement web
        décrits dans cette politique peuvent aussi traiter des informations de connexion hors de votre pays.
        Vous pouvez nous demander
        les lieux de traitement et les garanties propres aux services concernant vos informations,
        ainsi qu’une copie des garanties applicables lorsqu’elle est disponible, sous réserve des
        occultations nécessaires pour protéger les informations d’autrui et les clauses confidentielles.
      </p>

      <h3>4.3 Conservation</h3>
      <ul>
        <li><strong>Contenu local :</strong> conservé jusqu’à la suppression des données concernées ou de l’Application, sous réserve des exports, sauvegardes et du déchargement décrits au §1.1. Les images en cache peuvent être supprimées plus tôt.</li>
        <li><strong>Diagnostics et analyses :</strong> la conservation dépend des réglages déployés chez les fournisseurs et du temps nécessaire pour enquêter sur les défaillances ou évaluer l’utilisation des fonctions concernées. Nous supprimons ou anonymisons les documents lorsqu’ils ne sont plus nécessaires à ces fins, sauf obligation légale ou réclamation en cours. Désactiver le partage arrête les futurs partages concernés; ce n’est pas une demande de suppression des documents antérieurs.</li>
        <li><strong>Réglages de Google Analytics :</strong> au 1er octobre 2026, la conservation des données d’utilisateur et d’événement est réglée à 14 mois. Le délai des données d’utilisateur est réinitialisé lors d’une nouvelle activité; les données associées à un identifiant actif peuvent donc être conservées plus longtemps. Ce réglage ne limite pas la plupart des rapports agrégés standards ni les copies indépendantes dans d’autres services. <a href="https://support.google.com/analytics/answer/7667196?hl=fr" target="_blank" rel="noreferrer">Google explique ces limites</a>. Modifier un choix de partage ne supprime pas en soi les documents antérieurs.</li>
        <li><strong>Documents d’achat :</strong> conservés selon les besoins de fourniture et de restauration des droits, de traitement des remboursements ou litiges, ainsi que pour toute durée légale de conservation applicable. Apple détermine la conservation de ses propres documents de paiement.</li>
        <li><strong>Assistance :</strong> conservée pendant le traitement de la demande et tout suivi nécessaire, puis supprimée lorsqu’elle n’est plus nécessaire, sauf documents requis pour des obligations légales ou des réclamations.</li>
      </ul>
      <p>
        Nous ne promettons pas une durée unique pour tous les systèmes des fournisseurs. Contactez-nous
        pour connaître les réglages actuels ou demander la suppression de documents vous concernant.
        Des copies dans les sauvegardes des fournisseurs peuvent subsister jusqu’à la fin de leurs cycles
        normaux de suppression; les exceptions légales de conservation seront expliquées si elles s’appliquent.
      </p>

      <h2>5. Achats intégrés (Mapvoy Pro)</h2>
      <p>
        Mapvoy propose des abonnements (« Mapvoy Pro »). Apple traite les transactions. RevenueCat
        traite l’historique des transactions, l’état de l’abonnement et les identifiants décrits au §2.4.
        Nous ne voyons pas votre identifiant Apple, votre moyen de paiement ni votre adresse de facturation.
      </p>
      <p>Pour gérer ou annuler votre abonnement :</p>
      <ol>
        <li>Ouvrez Réglages sur votre iPhone</li><li>Touchez votre nom en haut de l’écran</li>
        <li>Touchez <strong>Abonnements</strong></li><li>Sélectionnez Mapvoy</li>
      </ol>
      <p>La procédure de remboursement d’Apple s’applique sans limiter les droits impératifs des consommateurs. Consultez <a href="https://support.apple.com/HT202039" target="_blank" rel="noreferrer">Abonnements Apple</a>.</p>
      <h2>6. Confidentialité des enfants</h2>
      <p>Mapvoy ne s’adresse pas aux enfants de moins de 13 ans. Si vous pensez qu’un enfant nous a transmis des renseignements personnels, contactez-nous pour que nous puissions examiner et traiter la demande.</p>
      <p>
        Les règles locales peuvent fixer un âge plus élevé pour consentir seul au partage facultatif
        de données. Dans les versions comprenant la confirmation régionale du partage, l’activation
        des analyses d’utilisation ou des rapports de plantage vous demande de confirmer que vous
        pouvez consentir vous-même selon les règles de votre lieu de résidence. Sinon, laissez ce
        partage désactivé; les fonctions locales essentielles restent disponibles. La déclaration
        enregistre uniquement la version de l’avis et l’heure sur votre appareil. Elle ne recueille
        ni votre date de naissance ni votre pays et n’est pas envoyée à un service d’analyses. Elle ne
        constitue pas une preuve vérifiée de l’âge ou d’une autorisation parentale. Un ancien réglage
        de partage n’est pas considéré comme une nouvelle déclaration.
      </p>
      <p>
        Pour ce partage facultatif, l’âge permettant de consentir seul est de 13 ans en Suède,
        en Finlande et au Portugal, de 14 ans en Autriche et en Italie, de 15 ans au Danemark et en Tchéquie et de 16 ans en Allemagne et aux Pays-Bas. En dessous de cet âge,
        laissez le partage facultatif désactivé. Ces seuils ne relèvent pas l’âge d’utilisation
        des fonctions locales de Mapvoy. Vous pouvez toujours désactiver le partage; ces seuils
        ne vous empêchent pas de nous contacter pour retirer votre consentement ou vous renseigner
        sur vos droits en matière de confidentialité.
      </p>
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
        <li><strong>Données locales :</strong> vos voyages enregistrés sont accessibles dans Mapvoy. Nous ne détenons pas de copie distante de votre photothèque ou de votre base de données de voyages et ne pouvons pas supprimer ces données locales depuis un serveur. Gérez-les sur votre appareil à l’aide des contrôles ci-dessous.</li>
        <li><strong>Suppression :</strong> utilisez Settings → Data Controls pour les contrôles locaux, ou supprimez l’Application. Le déchargement conserve les données. Aucune de ces actions ne supprime les photos, exports ou sauvegardes externes, abonnements Apple, documents d’achat ou diagnostics déjà reçus par les fournisseurs. Les demandes qui nous sont adressées concernent uniquement les documents que nous détenons effectivement ou que des fournisseurs traitent pour nous, comme les échanges avec l’assistance, les documents d’achat ou les diagnostics. Nous les traitons selon les droits et obligations de conservation applicables; nous expliquerons si aucun document correspondant n’est détenu ou si une obligation légale de conservation s’applique. Les demandes sur les comptes ou paiements Apple peuvent aussi être adressées à Apple.</li>
        <li><strong>Exportation :</strong> Settings → Data Controls → Export Data propose des données sélectionnées en JSON, CSV ou GPX. Ces fichiers ne sont pas une sauvegarde complète restaurable et ne comprennent pas les photos originales ni toutes les modifications et préférences. Dans les versions comprenant la mise à jour de confidentialité, la fonction distincte Backup &amp; Restore conserve les documents personnels qu’elle prend en charge; elle ne copie pas les originaux de Photos ni toutes les préférences.</li>
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
        Pour les demandes d’accès et de rectification au Canada, nous répondons dans le délai prévu
        par la loi fédérale ou provinciale applicable, normalement 30 jours. Pour les demandes d’accès
        et de rectification au Québec, nous répondons par écrit dans les 30 jours. Nous expliquons
        tout refus et les recours disponibles. Une prolongation ne s’applique que si la loi concernée
        l’autorise et si nous donnons l’avis requis. Vous pouvez nous écrire en français ou en anglais.
      </p>
      <p>
        Pour toute plainte relative à la protection des renseignements personnels, notamment au
        Québec, écrivez à notre responsable à l’adresse ci-dessous et décrivez votre préoccupation.
        Nous effectuons les vérifications appropriées, vous tenons au courant et communiquons le
        résultat sans retard injustifié. Pour les plaintes relevant du Royaume-Uni, nous accusons
        réception dans les 30 jours. Aucun formulaire particulier ni service payant n’est requis.
      </p>
      <p>
        Vous pouvez porter plainte auprès de votre autorité locale de protection des données ou demander
        un recours judiciaire. Au Royaume-Uni, contactez l’<a href="https://ico.org.uk/make-a-complaint/" target="_blank" rel="noreferrer">Information Commissioner’s Office</a>;
        en Irlande, contactez la <a href="https://www.dataprotection.ie/en/individuals/exercising-your-rights/complaints-handling-investigations-and-enforcement-individuals" target="_blank" rel="noreferrer">Data Protection Commission</a>.
        Vous pouvez aussi contacter la <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noreferrer">CNIL (France)</a>,{' '}
        la <a href="https://cnpd.public.lu/fr/particuliers/faire-valoir/formulaire-plainte.html" target="_blank" rel="noreferrer">CNPD (Luxembourg)</a>,{' '}
        l’<a href="https://idpc.org.mt/for-individuals/" target="_blank" rel="noreferrer">IDPC (Malte)</a>,{' '}
        le <a href="https://www.edoeb.admin.ch/fr" target="_blank" rel="noreferrer">PFPDT (Suisse)</a> ou l’autorité canadienne fédérale ou provinciale compétente.
        Vous n’avez pas à renoncer à ces droits pour nous contacter d’abord.
      </p>
      <p>Pour toute question : <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a></p>
      <p>
        Pour les demandes d’accès ou de rectification relevant de la loi néo-zélandaise sur la
        protection de la vie privée, nous prendrons une décision et vous en informerons dès que
        raisonnablement possible, dans un délai de 20 jours ouvrables, sauf prolongation autorisée
        par la loi. En cas de prolongation, nous vous en informerons dans ce délai de 20 jours ouvrables,
        en précisant le motif, le nouveau délai et la façon de porter plainte auprès du{' '}
        <a href="https://www.privacy.org.nz/your-rights/making-a-complaint/" target="_blank" rel="noreferrer">Commissaire à la protection de la vie privée de la Nouvelle-Zélande</a>.
      </p>
      <h2>8. Sécurité des données</h2>
      <ul>
        <li>Vos photos, positions et données de voyages sont conservées sur votre appareil, protégées par l’isolation des applications d’iOS.</li>
        <li>Le trafic réseau de Mapvoy utilise HTTPS/TLS.</li>
        <li>Nous limitons le partage hors de l’appareil aux finalités décrites ci-dessus. Aucun stockage ou mode de transmission n’est sans risque. Protégez votre appareil, vos sauvegardes et vos exports de localisation, et vérifiez la destination avant de partager.</li>
      </ul>
      <h2>9. Modification de cette politique</h2>
      <p>Nous pouvons mettre à jour cette Politique de confidentialité. La date de dernière mise à jour indiquera le changement le plus récent. Les changements importants seront communiqués par un avis dans l’application.</p>
      <h2>10. Contact</h2>
      <p>
        Notre responsable de la protection des renseignements personnels traite les questions et
        les demandes relatives à la protection des données, y compris celles provenant de Singapour.
        Vous pouvez le contacter à <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
      </p>

      <p>
        <strong>Courriel :</strong> <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a><br />
        <strong>Responsable du traitement :</strong> Vertex Horizon Inc.<br />
        <strong>Adresse postale :</strong> 3405 Montgomery Dr Apt 255, Santa Clara, CA 95054-3080, United States<br />
        <strong>Téléphone professionnel :</strong> <a href="tel:+16088951157">+1 608-895-1157</a>
      </p>
      <div className="c-doc-footer">
        <span>© {new Date().getFullYear()} Vertex Horizon Inc.</span>
        <span><NavLink to={productPath('/terms/fr')} navigate={navigate}>Conditions d’utilisation</NavLink>{' · '}<NavLink to={productPath('/support')} navigate={navigate}>Assistance (anglais)</NavLink></span>
      </div>
    </article>
  )
}
