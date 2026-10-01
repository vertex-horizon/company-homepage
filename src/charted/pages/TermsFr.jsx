import { NavLink } from '../ChartedApp.jsx'
import { SUPPORT_EMAIL } from '../config.js'

// 英文 Terms.jsx 是事实与义务的权威来源；法语逐项保留其范围，不新增免责或承诺。
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
        Les présentes conditions d’utilisation (« <strong>Conditions</strong> ») régissent votre utilisation
        de Charted (« l’<strong>Application</strong> »), fournie par <strong>Vertex Horizon Inc.</strong>
        (« nous », « notre », « nos »). En téléchargeant ou en utilisant Charted, vous acceptez ces Conditions.
      </p>

      <h2>1. Admissibilité</h2>
      <p>Vous devez avoir au moins 13 ans pour utiliser Charted. Si vous avez moins de 18 ans, vous devez avoir l’autorisation d’un parent.</p>

      <h2>2. Votre utilisation de l’Application</h2>
      <p>Vous acceptez d’utiliser Charted uniquement à des fins légales. Vous ne devez pas :</p>
      <ul>
        <li>Faire de l’ingénierie inverse, décompiler ou désassembler l’Application, sauf si la loi applicable le permet</li>
        <li>Utiliser l’Application pour enfreindre une loi ou les droits d’un tiers</li>
        <li>Revendre l’Application, accorder des sous-licences ou la redistribuer</li>
        <li>Utiliser l’Application d’une manière susceptible d’endommager, de désactiver ou de compromettre nos services</li>
      </ul>

      <h2>3. Votre contenu</h2>
      <p>
        Charted traite sur votre appareil les dates des photos, leurs métadonnées GPS et leur contenu visuel
        pour créer des cartes, des voyages, des moments marquants et des récits. Photos d’Apple peut télécharger
        des photos iCloud au besoin. Cartes d’Apple et la recherche d’adresses peuvent envoyer des coordonnées
        ou des régions cartographiques à Apple. Les achats, la configuration, les diagnostics, les analyses
        facultatives et la reconnaissance vocale d’Apple utilisent les services décrits dans notre
        Politique de confidentialité, y compris les limites du traitement vocal selon la version. Charted ne
        téléverse pas votre photothèque ni votre base de données locale de voyages vers nos serveurs ou un
        service d’IA infonuagique. Nous n’exploitons pas de serveur qui les conserve et n’en détenons
        pas de copie distante; vous gérez ces données sur votre appareil et nous ne pouvons pas les
        supprimer depuis un serveur. Les demandes concernant les documents effectivement détenus par
        nous ou traités pour nous par des fournisseurs sont traitées selon notre Politique de
        confidentialité. <strong>Vous conservez tous les droits</strong> sur vos photos, voyages,
        récits et contenus créés avec l’Application. Nous n’en revendiquons pas la propriété.
      </p>
      <p>
        La génération de récits nécessite iOS 26 ou une version ultérieure et Apple Intelligence disponible
        sur un appareil compatible, dans une langue et une région prises en charge, avec des modèles prêts
        à fonctionner. Sinon, Charted utilise des résumés basés sur des modèles locaux. L’achat de Pro
        n’active pas Apple Intelligence. Les textes générés et les voyages déduits peuvent contenir des
        erreurs; vérifiez-les avant de vous y fier ou de les partager. Les cartes et les frontières servent
        à représenter des souvenirs de voyage, et non à la navigation, à délimiter des frontières juridiques
        ou à formuler des revendications de souveraineté.
      </p>
      <p>
        Le partage ou l’exportation envoie le contenu choisi à l’application ou au service de destination.
        Les exports JSON, CSV et GPX contiennent des données sélectionnées et peuvent comprendre un historique
        de localisation sensible. Ils ne comprennent pas les fichiers photo ni un relevé complet de toutes
        les modifications et préférences, et ne peuvent pas être importés comme sauvegarde complète de Charted.
        Toute fonction distincte de sauvegarde et de restauration a son propre périmètre et ne peut pas
        restaurer des photos originales manquantes. Conservez vos exports et sauvegardes en lieu sûr.
      </p>

      <h2>4. Achats intégrés (Charted Pro)</h2>
      <h3>4.1 Description des abonnements</h3>
      <p>Charted propose des fonctions premium au moyen d’un abonnement appelé <strong>Charted Pro</strong>, selon les options suivantes :</p>
      <ul>
        <li><strong>Abonnement mensuel</strong> — renouvelé automatiquement chaque mois jusqu’à son annulation</li>
        <li><strong>Abonnement annuel</strong> — renouvelé automatiquement chaque année jusqu’à son annulation; une offre de lancement admissible peut être proposée</li>
      </ul>
      <p>
        Apple affiche le prix, la devise, la période de facturation, les taxes et l’offre applicable dans
        votre boutique App Store lors de la confirmation de l’achat. Le prix actuel du catalogue peut
        différer du prix de renouvellement d’un abonnement existant; consultez l’écran de gestion des
        abonnements d’Apple pour connaître le prochain prélèvement. L’accès à vie est offert uniquement
        au moyen d’un code d’offre cadeau valide, là où il est proposé, et ne constitue pas une formule
        publique d’achat direct. L’accès à vie n’est pas renouvelé, mais tout abonnement mensuel ou annuel
        distinct doit être géré séparément. L’utilisation d’une offre d’abonnement gratuite ou réduite
        ne désactive pas nécessairement son renouvellement automatique.
      </p>
      <h3>4.2 Essai gratuit</h3>
      <p>
        Apple détermine l’admissibilité, la durée et la disponibilité des essais et les affiche avant
        l’achat. Un essai n’est pas garanti pour chaque nouvelle installation ou chaque abonné. Si votre
        offre admissible comprend un essai gratuit, annulez-le avant l’échéance indiquée par Apple pour
        éviter le prochain prélèvement. Après l’essai, l’abonnement est renouvelé selon les conditions
        affichées par Apple, sauf annulation.
      </p>
      <h3>4.3 Paiement et facturation</h3>
      <ul>
        <li>Le paiement est débité de votre compte Apple lors de la confirmation de l’achat.</li>
        <li>Les abonnements sont renouvelés automatiquement, sauf annulation au moins 24 heures avant la fin de la période en cours.</li>
        <li>Le renouvellement est débité de votre compte dans les 24 heures précédant la fin de la période en cours.</li>
        <li>Après l’achat, vous pouvez gérer et annuler votre abonnement dans les <strong>réglages de votre compte Apple</strong>.</li>
      </ul>
      <h3>4.4 Comment annuler</h3>
      <p>Pour annuler :</p>
      <ol>
        <li>Ouvrez l’application <strong>Réglages</strong> sur votre iPhone</li>
        <li>Touchez votre <strong>nom</strong> en haut de l’écran</li>
        <li>Touchez <strong>Abonnements</strong></li>
        <li>Sélectionnez <strong>Charted</strong></li>
        <li>Touchez <strong>Annuler l’abonnement</strong></li>
      </ol>
      <p>Vous conservez les fonctions Pro jusqu’à la fin de la période de facturation en cours.</p>
      <h3>4.5 Remboursements</h3>
      <p>
        Les remboursements sont traités par Apple, et non par nous. Pour demander un remboursement,
        consultez <a href="https://reportaproblem.apple.com" target="_blank" rel="noreferrer">reportaproblem.apple.com</a>.
        La procédure d’Apple ne limite aucun droit au remboursement, à l’annulation ou à une autre
        mesure de réparation prévu par le droit de la consommation applicable. Contactez-nous si
        vous avez besoin d’aide pour un problème avec l’Application.
      </p>
      <h3>4.6 Changements de prix</h3>
      <p>
        Nous pouvons modifier les prix des abonnements. Apple fournit les avis et recueille tout
        consentement requis pour votre abonnement et votre boutique. Vous pouvez examiner le changement
        et annuler avant son entrée en vigueur. Vos droits impératifs de consommateur restent inchangés.
      </p>

      <h2>5. Propriété intellectuelle</h2>
      <p>
        L’Application, y compris sa conception, son code, ses contenus et ses marques, appartient à
        Vertex Horizon et est protégée par les lois sur la propriété intellectuelle. Nous vous accordons
        une licence limitée, non exclusive et non transférable pour utiliser l’Application à des fins
        personnelles et non commerciales.
      </p>
      <h2>6. Contenus de tiers</h2>
      <p>Charted utilise des images et des données provenant de tiers :</p>
      <ul>
        <li><strong>NASA Visible Earth</strong> — images de la Terre (domaine public)</li>
        <li><strong>Solar System Scope</strong> — textures de la Terre (CC BY 4.0)</li>
        <li><strong>Natural Earth</strong> — frontières des pays (domaine public)</li>
      </ul>
      <p>Ces ressources n’impliquent aucune approbation de leurs créateurs. Les attributions complètes se trouvent dans l’Application : <strong>Settings → About → Third-Party Notices</strong>.</p>
      <h2>7. Confidentialité</h2>
      <p>Votre utilisation de Charted est également régie par notre <NavLink to="/charted/privacy/fr" navigate={navigate}>Politique de confidentialité</NavLink>, qui décrit le traitement de vos données.</p>
      <h2>8. Exclusion de garanties</h2>
      <p>
        Aucune disposition des présentes Conditions n’exclut ni ne restreint les droits ou recours
        que la loi applicable nous interdit d’exclure. Cela comprend les garanties de l’Australian
        Consumer Law et du Consumer Guarantees Act de la Nouvelle-Zélande, ainsi que les droits légaux
        relatifs aux contenus numériques et aux services au Royaume-Uni et en Irlande. Si l’Application
        ne respecte pas une garantie impérative, vous conservez les recours prévus par la loi applicable,
        notamment la réparation, le remplacement, le remboursement ou l’annulation, selon le cas.
      </p>
      <p>
        SOUS RÉSERVE DE CES DROITS IMPÉRATIFS, L’APPLICATION EST FOURNIE « EN L’ÉTAT » ET « SELON SA
        DISPONIBILITÉ », SANS GARANTIES SUPPLÉMENTAIRES, EXPRESSES OU IMPLICITES, NOTAMMENT DE QUALITÉ
        MARCHANDE, D’ADAPTATION À UN USAGE PARTICULIER OU D’ABSENCE DE CONTREFAÇON. NOUS NE GARANTISSONS
        PAS UN FONCTIONNEMENT ININTERROMPU OU EXEMPT D’ERREURS.
      </p>
      <h2>9. Limitation de responsabilité</h2>
      <p>
        DANS TOUTE LA MESURE PERMISE PAR LA LOI, VERTEX HORIZON NE SERA PAS RESPONSABLE DES DOMMAGES
        INDIRECTS, ACCESSOIRES, CONSÉCUTIFS OU PUNITIFS LIÉS À VOTRE UTILISATION DE L’APPLICATION.
        NOTRE RESPONSABILITÉ TOTALE NE DÉPASSERA PAS LE MONTANT PAYÉ POUR L’APPLICATION AU COURS DES
        DOUZE (12) MOIS PRÉCÉDANT LA RÉCLAMATION. CES LIMITES NE S’APPLIQUENT PAS À UNE RESPONSABILITÉ
        QUI NE PEUT ÊTRE LÉGALEMENT EXCLUE OU LIMITÉE, NOTAMMENT AUX GARANTIES DE CONSOMMATION
        APPLICABLES, À LA FRAUDE OU AU DÉCÈS OU PRÉJUDICE CORPOREL CAUSÉ PAR NÉGLIGENCE.
      </p>
      <h2>10. Résiliation</h2>
      <p>
        Nous pouvons suspendre ou résilier votre accès à l’Application si vous enfreignez les présentes
        Conditions. Vous pouvez cesser de l’utiliser en la supprimant. La suppression de l’Application
        n’annule pas un abonnement Apple; annulez-le séparément auprès d’Apple. La résiliation ne
        supprime pas les recours légaux impératifs.
      </p>
      <h2>11. Modification des Conditions</h2>
      <p>
        Nous pouvons mettre à jour les présentes Conditions. La date de dernière mise à jour indiquera
        le changement le plus récent. Nous vous informerons des changements importants et recueillerons
        votre accord lorsque la loi l’exige. Les changements ne suppriment pas rétroactivement les droits
        acquis ni les protections impératives des consommateurs.
      </p>
      <h2>12. Droit applicable</h2>
      <p>
        Les présentes Conditions sont régies par les lois de l’État de Californie, aux États-Unis,
        sans tenir compte des règles de conflit de lois, sous réserve des protections impératives
        du droit de votre pays de résidence. Vous conservez tout droit prévu par la loi applicable
        de saisir vos tribunaux locaux ou d’utiliser une procédure légale de règlement des différends.
        Les tribunaux californiens restent disponibles lorsque cela est juridiquement approprié;
        cette clause ne vous oblige pas à renoncer à un tribunal local ou à un recours impératif.
      </p>
      <h2>13. Conditions propres à Apple</h2>
      <p>
        Vous reconnaissez que les présentes Conditions lient Vertex Horizon et vous, et non Apple.
        Apple n’est pas responsable de l’Application ou de son contenu, sauf pour les responsabilités
        qui lui incombent selon ses propres conditions ou la loi applicable. Les conditions applicables
        d’Apple relatives aux applications sous licence et à l’App Store s’appliquent également. Un
        conflit ne prévaut pas sur les droits impératifs des consommateurs ni sur nos responsabilités
        en tant que fournisseur de l’Application.
      </p>
      <p>Apple est un tiers bénéficiaire des présentes Conditions et peut les faire appliquer à votre égard.</p>
      <h2>14. Contact</h2>
      <p>Pour toute question concernant ces Conditions :</p>
      <p>
        <strong>Courriel :</strong> <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a><br />
        <strong>Adresse postale :</strong> Vertex Horizon Inc., 3405 Montgomery Dr Apt 255, Santa Clara, CA 95054-3080, United States<br />
        <strong>Téléphone professionnel :</strong> <a href="tel:+16088951157">+1 608-895-1157</a>
      </p>
      <div className="c-doc-footer">
        <span>© {new Date().getFullYear()} Vertex Horizon Inc.</span>
        <span><NavLink to="/charted/privacy/fr" navigate={navigate}>Confidentialité</NavLink>{' · '}<NavLink to="/charted/support" navigate={navigate}>Assistance (anglais)</NavLink></span>
      </div>
    </article>
  )
}
