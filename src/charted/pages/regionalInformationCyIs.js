import { bgRoGrRegionalInformation } from './regionalInformationBgRoGr.js'

// CY复用希语事实正文，只替换当地交易/监管/同意年龄；不复制第二份希语通用数据说明。
const greek = bgRoGrRegionalInformation.el
const cyAge = 'Το Mapvoy προορίζεται για άτομα από 13 ετών, δεν είναι υπηρεσία σχεδιασμένη για παιδιά. Σύμβαση/αγορά μπορεί να απαιτεί βοήθεια γονέα/κηδεμόνα κατά τον νόμο. Στην Κύπρο ανεξάρτητη συγκατάθεση για τη σχετική διαδικτυακή επεξεργασία δίνεται από 14 ετών. Δεν αυξάνεται το όριο όλων των βασικών τοπικών λειτουργιών: αν δεν πληροίτε τον όρο συγκατάθεσης, κρατήστε προαιρετική ανάλυση και αναφορές σφαλμάτων κλειστές.'
const cyComplaint = 'Για παράπονο ή έλλειψη συμμόρφωσης Mapvoy γράψτε στο παραπάνω e-mail ή ταχυδρομείο. Κατά τον εφαρμοστέο κυπριακό Ν.155(Ι)/2021 παρέχεται δωρεάν αποκατάσταση εντός εύλογου χρόνου από την ενημέρωση, χωρίς σημαντική ενόχληση, ή άλλη εφαρμοστέα μείωση τιμής/τερματισμός. Όπου οφείλεται επιστροφή λόγω μείωσης ή τερματισμού κατά τον νόμο αυτό, ισχύει χωρίς αδικαιολόγητη καθυστέρηση και πάντως εντός 14 ημερών από την ενημέρωση για την απόφαση του καταναλωτή. Αυτό δεν είναι γενική προθεσμία απάντησης σε κάθε e-mail. Η Apple διεκπεραιώνει τη δική της χρέωση, αλλά οι δικές μας υποχρεώσεις δεν καταργούνται. Για άλυτο θέμα δίνουμε αιτιολογία και τον πραγματικά αρμόδιο δρόμο επίλυσης· υπάρχει και η Υπηρεσία Προστασίας Καταναλωτή Κύπρου, χωρίς υπόσχεση ότι επιλύει κάθε ιδιωτική διαφορά ή ότι είμαστε μέλος τοπικού φορέα. Μη στέλνετε όλη τη βιβλιοθήκη φωτογραφιών ή ιστορικό τοποθεσιών.'
const cyWithdrawal = 'Η υπαναχώρηση διαφέρει από διακοπή ανανέωσης. Οι όροι Apple για την Κύπρο περιγράφουν 14 ημέρες από παραλαβή απόδειξης και τους κανόνες αρχικής συνδρομής· για ψηφιακό περιεχόμενο μπορεί να ισχύει εξαίρεση μετά από ρητό αίτημα εκτέλεσης και αναγνώριση απώλειας δικαιώματος. Στον λογαριασμό Apple → Purchase History επιλέξτε τη συναλλαγή και Withdraw Transaction· η Apple επιβεβαιώνει με e-mail. Οι όροι της Κύπρου εμφανίζονται στα αγγλικά και περιέχουν υπόδειγμα και επαφές. Για επιστροφή υπάρχει και reportaproblem.apple.com· δεν περιορίζει νόμιμα δικαιώματα έναντι του υπεύθυνου μέρους.'
const cyRights = greek.sections.find(s => s.id === 'rights').paragraphs[1].replace('στην ΑΠΔΠΧ', 'στον Επίτροπο Προστασίας Δεδομένων Προσωπικού Χαρακτήρα Κύπρου')
const cy = {
  ...greek,
  title: 'Πληροφορίες χρήσης, αγορών και απορρήτου — Κύπρος',
  intro: 'Το περιβάλλον Mapvoy και η συνήθης υποστήριξη είναι αγγλικά και γαλλικά. Εδώ παρέχονται στα ελληνικά οι αναγκαίες πληροφορίες για χρήση, αγορές και δεδομένα στην Κύπρο, χωρίς νέα ελληνική διεπαφή ή απαίτηση συμφωνίας για χρήση άλλης γλώσσας. Δεχόμαστε τα αναγκαία γραπτά αιτήματα καταναλωτών και δεδομένων και στα ελληνικά. Διατηρούνται τα υποχρεωτικά καταναλωτικά και γλωσσικά δικαιώματα.',
  sections: greek.sections.map(s => {
    if (s.id === 'use') return {...s, paragraphs: [...s.paragraphs, 'Περιορισμός κάλυψης Κύπρου: τα τρέχοντα εκτός σύνδεσης πολύγωνα δεν καλύπτουν πλήρως βόρειες περιοχές και τη νεκρή ζώνη. Μια θέση μπορεί να μείνει χωρίς ταξινόμηση χώρας/περιοχής ή χωρίς χρωματισμό. Η απουσία κάλυψης δεν είναι δήλωση κυριαρχίας ή νομικού καθεστώτος. Τα αρχικά GPS δεν αλλάζουν για την πολιτική παρουσίαση. Οι χάρτες δεν προορίζονται για πλοήγηση ή νόμιμο καθορισμό συνόρων. Δεν παρέχουμε πλήρη διοικητική κάλυψη ή ανεξάρτητο κρατικό κατάλογο για τη βόρεια Κύπρο.']}
    if (s.id === 'withdrawal') return {...s, paragraphs: [s.paragraphs[0], cyWithdrawal, cyComplaint, s.paragraphs[3]], links: ['cancel', 'refund', 'appleCy', 'cyprusConsumer']}
    if (s.id === 'rights') return {...s, paragraphs: [s.paragraphs[0], cyRights], links: ['cyprusAuthority']}
    if (s.id === 'age') return {...s, paragraphs: [cyAge, s.paragraphs[1]]}
    return s
  }),
}
// el商店语言跨GR/CY共用；原希语隐私入口同时列CY14，不能让CY套GR15，也不覆盖前批冻结文字源。
const sharedGreek = {
  ...greek,
  intro: greek.intro + ' Για την Κύπρο υπάρχουν ειδικές τοπικές πληροφορίες στον σύνδεσμο «Ελληνικά (Κύπρος)» παραπάνω.',
  sections: greek.sections.map(s => {
    if (s.id === 'withdrawal') return {...s, paragraphs: [...s.paragraphs, 'Οι παραπάνω τοπικές πληροφορίες αφορούν την Ελλάδα. Για αγορές/δικαιώματα στην Κύπρο δείτε τον σύνδεσμο «Ελληνικά (Κύπρος)» και τους όρους Apple Κύπρου.'], links: [...s.links, 'appleCy']}
    if (s.id === 'age') return {...s, paragraphs: [s.paragraphs[0] + ' Στην Κύπρο το αντίστοιχο όριο ανεξάρτητης συγκατάθεσης είναι 14 έτη, όχι 15. Τα βασικά τοπικά χαρακτηριστικά παραμένουν από 13 ετών.', s.paragraphs[1]]}
    if (s.id === 'rights') return {...s, paragraphs: [...s.paragraphs, 'Για την Κύπρο αρμόδιος είναι ο Επίτροπος Προστασίας Δεδομένων Προσωπικού Χαρακτήρα Κύπρου ή άλλη αρμόδια αρχή.'], links: [...s.links, 'cyprusAuthority']}
    return s
  }),
}
export const cyIsRegionalInformation = {
  'el-CY': cy,
  el: sharedGreek,
  is: {
  "title": "Upplýsingar um notkun, kaup og persónuvernd",
  "updated": "Uppfært: 2. nóvember 2026",
  "intro": "Viðmót Mapvoy og almenn aðstoð eru á ensku og frönsku. Hér eru nauðsynlegar upplýsingar á íslensku um notkun, kaup og persónuupplýsingar; síðan bætir ekki íslensku viðmóti við appið. Við tökum einnig við nauðsynlegum skriflegum neytendaerindum og beiðnum um persónuverndarréttindi á íslensku. Ófrávíkjanleg neytenda- og tungumálaréttindi haldast.",
  "full": "Frekari tæknilegar upplýsingar eru í enskum og frönskum upplýsingum um persónuvernd og notkun. Nauðsynlegar upplýsingar á íslensku eru hér að ofan.",
  "sections": [
    {
      "id": "provider",
      "title": "1. Þjónustuveitandi, samband og samningsgerð",
      "paragraphs": [
        "Þjónustuveitandi og ábyrgðaraðili persónuupplýsinga: Vertex Horizon Inc., 3405 Montgomery Dr Apt 255, Santa Clara, CA 95054-3080, Bandaríkjunum. Aðstoð, kvartanir og persónuvernd: contact@vertex-horizon.com; fyrirtækjasími +1 608-895-1157. Félagið var stofnað 17. febrúar 2026 í Delaware, Bandaríkjunum. Skráningaryfirvald: Delaware Secretary of State, Division of Corporations; skráningarnúmer 10514361. Fyrirsvarsmaður: Guikai Huang, President and Chief Executive Officer.",
        "Charted heitir nú Mapvoy; þjónustuveitandi breytist ekki. Apple Standard EULA gildir um hugbúnaðarleyfið. Þessi síða bætir við upplýsingum um vöruna, kaupin og gögn, en er ekki nýr sérsaminn hugbúnaðarleyfissamningur. Almennar upplýsingar Mapvoy eru á ensku og frönsku, nauðsynlegar staðbundnar upplýsingar hér á íslensku. Notkun ensku felur ekki í sér afsal ófrávíkjanlegra tungumálaréttinda.",
        "Veldu áskriftarleið, skoðaðu verð, tímabil og skilmála sem Apple sýnir og staðfestu aðeins ef þú samþykkir þá. Fyrir staðfestingu geturðu breytt valinu eða hætt. Ekki þarf sérstakan Mapvoy-reikning. Apple heldur kaupferil og sendir staðfestingu; Mapvoy heldur ekki sérstakan vefreikning fyrir pantanir. Þú getur vistað eða prentað þessa síðu úr vafranum."
      ]
    },
    {
      "id": "use",
      "title": "2. Eiginleikar, kröfur og grunnnotkun",
      "paragraphs": [
        "Mapvoy býr til kort og ferðir á iPhone úr GPS-gögnum ljósmynda. iPhone 12 eða nýrri og iOS 17 eða nýrra þarf; App Store sýnir gildandi samhæfi. Veittu aðgang að þeim myndum sem þú vilt í iOS. Takmarkaður aðgangur nær aðeins til valinna mynda; myndir án GPS eru ekki fluttar inn sem GPS-punktar. Við breytum ekki frumritum í Apple Photos; Apple getur sótt nauðsynleg frumrit úr iCloud. Fyrsta vinnsla fer eftir stærð safnsins.",
        "Hnattstílarnir Earth, Paint og Ink eru ókeypis. Mapvoy býður ferðir, Passport, Atlas-tölfræði og myndir/myndskeið til deilingar. Kort og niðurstöður geta verið ónákvæm: mynd í nágrenni sannar ekki heimsókn eða fjallgöngu og lína milli myndstaða er ekki mæld ferðaleið. Þetta er ekki leiðsögn, neyðarþjónusta eða opinber afmörkun landamæra. Skoðaðu staði, texta og mynd áður en þú deilir; vernd fer eftir útgáfu og útflutningi.",
        "Myndaðir ferðatextar þurfa studdan Apple Intelligence-síma, iOS 26 eða nýrra, stutt tungumál/svæði og tiltæk líkön. Annars eru staðbundin textasnið notuð. Pro virkjar ekki Apple Intelligence. Þessi upplýsingasíða uppfærir ekki gamla uppsetningu."
      ]
    },
    {
      "id": "purchase",
      "title": "3. Pro, verð og sjálfvirk endurnýjun",
      "paragraphs": [
        "Mapvoy Pro veitir viðbætur sem sýndar eru fyrir kaup: Deep Review, allt Discoveries og fleiri söfn, árstíðaverkefni og öll stig verðlaunapeninga, úrvalssnið fyrir deilingu, tvöfalda myndupplausn og 4K-myndskeið á studdum iPhone. Mánaðar- og ársleið veita sömu Pro-réttindi. Apple sýnir raunverulegt verð, gjaldmiðil, reikningstímabil og skatta fyrir staðfestingu. Mánaðargildi ársverðs er aðeins samanburður; ársgjaldið er innheimt árlega.",
        "Mánaðar- og ársáskrift endurnýjast sjálfkrafa þar til henni er sagt upp. Kynningartilboð eða prufa fer eftir hæfi sem Apple staðfestir og skilmálunum við kaup; ekki er öllum lofað ákveðnum fjölda ókeypis daga. Síðan tekur við sýnd endurnýjun gegn gjaldi. Apple mælir með að hætta við prufu minnst 24 klukkustundum fyrir lok. Verðbreytingar lúta tilkynningum Apple, nauðsynlegu samþykki og ófrávíkjanlegum lögum.",
        "Ævilangur Gift-aðgangur fæst aðeins með sérstökum gjafa-/tilboðskóða, ekki almennri leið fyrir bein kaup. Staðfestingin sýnir lengd og skilmála. Gift endurnýjast ekki og segir ekki upp fyrirliggjandi áskrift. Kaup, kort og opinberar skrár geta þurft nettengingu og gagnagjöld símafyrirtækis."
      ]
    },
    {
      "id": "withdrawal",
      "title": "4. Uppsögn, réttur til að falla frá og kvartanir",
      "paragraphs": [
        "Til að stöðva næstu endurnýjun: Stillingar iPhone → nafnið þitt → Áskriftir → Mapvoy; fylgdu Apple. Í studdri útgáfu leiðir einnig Settings → Profile → Your Mapvoy Pro → Manage or Cancel Subscription þangað. Apple sýnir lok aðgangs. Að eyða appinu eða gögnum segir ekki upp áskrift. Restore Purchases endurheimtir tiltæk kaupréttindi hjá Apple, ekki ferðagagnagrunninn.",
        "Að falla frá samningi er annað en að stöðva endurnýjun. Samkvæmt viðeigandi íslenskum neytendasamningalögum er almennt 14 daga réttur til að falla frá fjarsölusamningi, fyrir þjónustu eða stafrænt efni talið frá samningsgerð. Lögbundnar undantekningar geta átt við, meðal annars við afhendingu stafræns efnis eftir ótvírætt fyrirframsamþykki og viðurkenningu á missi réttar með nauðsynlegri staðfestingu. Við lýsum ekki öllum kaupum sem óafturkræfum.",
        "Apple annast innheimtu; fyrir endurgreiðslu eða að nýta gildandi rétt vegna Apple-kaupa skaltu nota reportaproblem.apple.com eða hafa samband við Apple Support og tilgreina skýrt að þú fallir frá viðkomandi kaupum. Ótvíræð yfirlýsing getur verið: „Ég tilkynni hér með að ég falli frá samningi um [Mapvoy-kaup/pöntunarnúmer], gerðum [dagsetning], nafn [nafn], netfang [netfang], sent [dagsetning].“ Notaðu raunverulegan seljanda og samskiptaleið á kvittuninni/Apple-skilmálum. Þú getur einnig skrifað okkur um lögbundin réttindi og fengið aðstoð; við afgreiðum skyldur sem hvíla á okkur og sendum ekki öll vandamál einfaldlega til Apple. Lögbundin tímamörk gilda um tilkynningu og viðeigandi endurgreiðslu.",
        "Sendu kvörtun eða upplýsingar um galla Mapvoy á netfangið eða póstfangið hér að ofan. Við veitum efnislegt svar, ástæður og viðeigandi úrbætur, svo sem ókeypis lagfæringu innan hæfilegs tíma eða aðra lögbundna lækkun/verðendurgreiðslu/uppsögn eftir atvikum. Við varðveitum ófrávíkjanleg réttindi vegna galla og nauðsynlegra uppfærslna; ekki er sett almenn ábyrgðarundanþága, ábyrgðarþak eða einkalögsaga Kaliforníu. Fyrir óleyst mál gefum við upplýsingar um viðeigandi úrlausnarleið eftir lögsögu; Neytendastofa veitir upplýsingar/eftirlit en úrskurðarnefnd þarf að eiga lögsögu í tilteknu máli. Ekki senda allt myndasafnið eða staðasöguna.",
        "Þú heldur réttindum yfir eigin efni og þarft að virða réttindi annarra við deilingu. Verulegar breytingar á skilmálum eða greiddum eiginleikum fá nauðsynlega tilkynningu og samþykki. Almennar lagalegar leiðir til réttarverndar haldast."
      ],
      "links": [
        "cancel",
        "refund",
        "appleIs",
        "appleSupport",
        "icelandConsumer",
        "icelandContracts"
      ]
    },
    {
      "id": "local-data",
      "title": "5. Staðbundin gögn og heimildir",
      "paragraphs": [
        "Appið notar GPS, dagsetningar, myndavélagögn og staðbundin PhotoKit-auðkenni mynda. Birting, greining myndefnis/gæða og skipulag ferða fer fram á tækinu. Við sendum ekki myndasafn, staðbundinn ferðagagnagrunn eða staðbundin AI-inntök á okkar þjóna eða skýja-AI. Apple getur fengið nauðsynlega hnitstöðu, kortsvæði eða heimilisfangsleit. Þú stjórnar myndaheimild og nákvæmni núverandi staðsetningar í iOS; ekki er beðið um stöðuga staðsetningarvöktun í bakgrunni.",
        "Raddleit er valfrjáls. Útgáfur með persónuverndaruppfærslunni þurfa staðbundna Apple-talgreiningu fyrir tungumálið; ef hún er ekki tiltæk er hægt að slá inn texta, án yfirfærslu á þjóngreiningu. Í gömlu 1.1 gat Apple unnið hljóð á þjóni. iOS-heimild ein og sér er ekki samþykki fyrir valfrjálsri greiningu."
      ]
    },
    {
      "id": "network-data",
      "title": "6. Tæknigögn og þjónustuaðilar",
      "paragraphs": [
        "Í persónuverndaruppfærslunni eru notkunargreining og villuskýrslur hvor um sig upphaflega slökktar. Eftir vali geta Firebase/Google og Sentry unnið atburði eða hrun-/villugreiningu, app-/kerfisútgáfu, tækis-/uppsetningarauðkenni og tæknilegt samhengi skjás/nets; gögnin eru ekki alveg nafnlaus. Við hengjum ekki myndir eða GPS-reiti ferðagagnagrunnsins við greiningu. Ekkert IDFA eða rakning milli appa; uppfærslan slekkur á Sentry Replay, sjálfvirku og app-mynduðu tracing og Firebase Performance instrumentation.",
        "Eftir samþykki fyrir greiningu getur Firebase Remote Config fengið tungumál, land og kerfis-/app-/uppsetningargögn fyrir stillingar/tilraunir. Án samþykkis gilda staðbundin sjálfgefin gildi. Afturköllun stöðvar nýjar beiðnir og lifandi uppfærslur; þegar send beiðni getur enn borist aðila og niðurstaða sem kemur of seint er hunsuð. Gömul 1.1 gat sent hrunskýrslur sjálfgefið og sótt stillingar án greiningarsamþykkis. Að SDK sé frumstillt sannar ekki að engin netumferð sé.",
        "Apple annast greiðslur eftir eigin skilmálum. RevenueCat vinnur slembið varanlegt App User ID, líka notað sem StoreKit appAccountToken, færsluferil, áskriftarréttindi og tæknigögn svo sem IP, tæki og verslunarland. Uppfærslan virkjar það við staðfesta færslu eða skýrt val um endurheimt; fyrri ólokin staðfest færsla getur verið afgreidd við ræsingu. Eldri útgáfur frumstilltu það líka án kaupa; uppfærslan fjarlægir viðbótar 1.1 gögn um build, almennt svæði og greiningu. Við fáum ekki Apple ID, kortaupplýsingar eða reikningsfang. Kaup eru óháð valfrjálsri greiningu.",
        "Backblaze B2 US East afhendir opinber mynd-/landhæðargögn og getur fengið IP, umbeðna skrá og tengigögn. GitHub Pages heldur tæknilega/öryggisvefloga og Google-póstur vinnur sendanda, skilaboð og valfrjáls viðhengi. Viðtakendur eru þessir aðilar og nauðsynlegir undirvinnsluaðilar; stjórnvöld geta fengið gögn vegna laga/réttarkrafna. Þínir valdir útflutnings-/deilistaðir og sjálfstæðar Apple-þjónustur hafa eigin reglur."
      ]
    },
    {
      "id": "bases",
      "title": "7. Tilgangur, heimildir og flutningur milli landa",
      "paragraphs": [
        "Umbeðnar staðbundnar aðgerðir, kort, útflutningur, kaup/endurheimt og tengd hjálp eru til að efna samning. Valfrjáls greining, villuskýrslur og tengdar stillingar uppfærslunnar byggjast á samþykki. Skylduskjöl eru lagaskylda; öryggi, varnir gegn misnotkun, opinber skráaafhending og önnur samskipti byggjast á metnum lögmætum hagsmunum. Eldri sjálfgefnar hrunskýrslur 1.1 byggðust á lögmætum hagsmunum með andmælarétti, ekki ætluðu samþykki.",
        "Myndir og heimildir eru valfrjálsar, en án nauðsynlegs inntaks virkar viðkomandi eiginleiki ekki. Kaupgögn þarf fyrir réttindi, samskiptagögn fyrir svar. Að hafna greiningu lokar ekki grunnvirkni á tækinu. Við tökum ekki eingöngu sjálfvirkar ákvarðanir með réttaráhrifum eða sambærilegum verulegum áhrifum.",
        "Félagið og RevenueCat eru í Bandaríkjunum. Sentry geymir skýrslur þar, með tengdri aðstoð einnig í Austurríki, Kanada og Hollandi. Google notar alþjóðlegar þjónustu-/stuðningsstöðvar; Backblaze er US East. Fyrir viðtakendur sem falla undir viðeigandi fullnægjandi verndarákvörðun notum við hana, annars viðeigandi samningsvernd, svo sem stöðluð ESB-samningsákvæði og nauðsynleg viðbótarráðstöfun. DPF-staða þjónustuaðila vottar ekki Vertex Horizon. Þú getur beðið um upplýsingar og afrit viðeigandi verndarráðstafana."
      ],
      "links": [
        "googleLocations",
        "firebaseProcessors",
        "workspaceProcessors",
        "revenuecatDpa",
        "sentryDpa"
      ]
    },
    {
      "id": "retention",
      "title": "8. Varðveisla og eyðing",
      "paragraphs": [
        "Staðbundin gögn haldast þar til færslum eða appi er eytt; afhleðsla apps í iOS varðveitir gögn. Apple Photos-frumrit, ytri útflutningur og tækjaafrit eru aðskilin. Greiningargögn haldast eins lengi og tilgangur/stillingar aðila krefjast, síðan er þeim eytt eða þau gerð ópersónugreinanleg, með laga-/kröfuundantekningum. GA-stilling sem var skoðuð 1. október 2026 er 14 mánuðir fyrir notanda-/atburðagögn með endurstillingu við nýja virkni; það takmarkar ekki allar safnskýrslur eða ytri afrit.",
        "Kaupfærslur þarf fyrir virkan aðgang, endurheimt, endurgreiðslu, ágreining og lagaskyldur. Póstur/kvartanir haldast vegna málsins og nauðsynlegrar eftirfylgni/réttarkrafna og laga, ekki einn fastur tími fyrir öll gögn. Afrit aðila fylgja venjulegum eyðingarferlum þeirra. Að slökkva stöðvar framtíðar valfrjálsar sendingar og fellir niður biðatburði appsins, en eyðir ekki mótteknum gögnum eða kallar beiðni til baka; óska má sérstaklega eftir eyðingu."
      ]
    },
    {
      "id": "rights",
      "title": "9. Persónuverndarréttindi og kvörtun",
      "paragraphs": [
        "Samkvæmt viðeigandi persónuverndarreglum geturðu beðið um aðgang, afrit, leiðréttingu, eyðingu, takmörkun og flutning gagna og andmælt lögmætum hagsmunum vegna eigin aðstæðna. Afturkallaðu samþykki í deilistillingum án áhrifa á fyrri lögmæti. Skrifaðu contact@vertex-horizon.com, án sérstaks eyðublaðs. Við getum staðfest auðkenni með hóflegum hætti, ekki með öllu myndasafninu. Yfirleitt er svarað innan eins almanaksmánaðar; heimil lenging um allt að tvo viðbótarmánuði og ástæður eru tilkynntar í fyrsta mánuði. Lögmæt takmörkun beiðni er útskýrð.",
        "Við eigum ekki þjónafrit af staðbundnum myndum/ferðagagnagrunni og getum ekki fjar-eytt því; notaðu stillingar á tækinu. JSON/CSV/GPX-útflutningur er ekki heildarafrit til endurheimtar. Ef útgáfan hefur Backup & Restore vistar það tilgreindar persónulegar færslur í ódulkóðað JSON og endurheimt þarf tóman app-gagnagrunn; verndaðu skrána. Þú getur kvartað til Persónuverndar eða viðeigandi eftirlitsaðila; réttur til dómstóla og annarra ófrávíkjanlegra úrræða haldast."
      ],
      "links": [
        "icelandAuthority"
      ]
    },
    {
      "id": "age",
      "title": "10. Yngri notendur og valfrjáls gögn",
      "paragraphs": [
        "Mapvoy er fyrir 13 ára og eldri, ekki þjónusta hönnuð sérstaklega fyrir börn. Samningsgerð/kaup geta þurft aðstoð foreldris/forráðamanns eftir lögum. Á Íslandi er sjálfstætt samþykki fyrir viðeigandi netvinnslu frá 13 ára aldri. Það hækkar ekki aldursmark grunnnotkunar appsins. Ef skilyrði fyrir samþykki eru ekki uppfyllt skal hafa valfrjálsa greiningu og villuskýrslur slökktar.",
        "Útgáfur með svæðisbundinni staðfestingu geyma staðbundna yfirlýsingu fyrir valda deilingu, útgáfu upplýsinga og tíma, ekki fæðingardag eða land. Það er ekki sönnun um sannreyndan aldur eða samþykki foreldris; eldri stilling er ekki nýtt samþykki. Foreldri getur haft samband um gögn barns. Síðar má slökkva á deilingu."
      ]
    }
  ]
}
}
