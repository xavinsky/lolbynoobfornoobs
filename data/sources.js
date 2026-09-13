// Déclaration des mécanismes de sourcing GLOBAUX (s'appliquent à tous les champions de la même
// façon). Consommé par sources.html (page d'explication) ET par index.html (bandeau "Sources" en
// bas de la fiche détail d'un champion) — une seule déclaration, jamais deux dates à tenir en sync.
//
// Règle : une information n'est affichée QUE si elle tombe dans un de ces mécanismes (avec sa
// méthode/lien/date) OU dans un `sourceNotes` spécifique sur le champion. Si une donnée est un
// raisonnement/dérivation (pas une valeur officielle copiée telle quelle), le `method` ci-dessous
// doit décrire EXACTEMENT la règle utilisée — jamais juste citer une source sans dire comment elle
// a été transformée. Une info dont on ne sait plus la retracer est vidée jusqu'à nouvelle source.
//
// Un champion peut en plus avoir des sources SPÉCIFIQUES (cas particulier, exception au mécanisme
// global) : voir le champ optionnel `sourceNotes` sur l'objet du champion dans champions.js.
const GLOBAL_SOURCES = [
  {
    id: "roles",
    label: "Tier / Winrate / Pickrate / Banrate par ligne — référence Émeraude+ (affichée quand aucun palier n'est coché)",
    fields: ["roles[*].tier", "roles[*].wr", "roles[*].pr", "roles[*].ban"],
    method: "Tableaux tier-list par rôle d'op.gg (Ranked Solo/Duo, bracket Émeraude+ uniquement), un tableau par ligne (Haut/Jungle/Mid/ADC/Support), lus et retranscrits manuellement.",
    url: "https://op.gg/lol/champions",
    retrieved: "2026-09-08",
    patch: "16.17 / 26.17",
    caveat: "Instantané figé à cette date — se périme au rythme des patchs (~2 semaines). Un champion absent du tableau d'une ligne n'y est pas forcément \"jamais joué\" : les tableaux n'affichent que les champions au-dessus d'un seuil de volume/pertinence pour cette ligne+bracket (voir le cas Nasus jungle, sourcé spécifiquement — champ `sourceNotes`)."
  },
  {
    id: "rolesCombined",
    label: "WR / PR / Ban affichés hors des pastilles de rôle (vue Liste, tous filtres)",
    fields: [],
    method: "Valeur calculée à l'affichage, pas stockée — dérivée du mécanisme \"roles\" ci-dessus, et affichée quel que soit le filtre de rôle actif (pas seulement \"Tous\"). PR = somme des PR de chaque rôle joué par le champion (même base de parties par bracket, donc la somme donne le pick rate toutes lignes confondues). WR = moyenne des rôles pondérée par leur PR respectif (poids = volume de parties de ce rôle). Ban = UNE seule valeur par champion (on bannit un champion, pas un rôle) : celle du rôle où le champion a le plus haut PR — la source la répète sur chaque rôle avec de petits écarts de moment de mesure (écart maximal constaté entre rôles : 0,54 point, médiane 0,08 ; la même statistique côté lolalytics diffère d'au plus 0,01 point entre lanes).",
    url: null,
    retrieved: null,
    caveat: "Le tri (menu \"Trier\") continue lui à utiliser la valeur du seul rôle actif quand un filtre de rôle précis est sélectionné (pas la somme) — sinon classer \"par PR\" sous l'onglet Jungle, par ex., ne classerait plus par popularité en jungle. Le même Ban unique est affiché sur la fiche champion."
  },
  {
    id: "rolesTiers",
    label: "WR / Pick / Ban par palier (Fer, Bronze, Argent, Or — sélecteur de paliers)",
    fields: ["data/roles_tiers.js : ROLES_TIERS.champions[clé][rôle][palier] (wr, pr, br, games, grade), ROLES_TIERS.tiers[palier].lanes[rôle].analysed"],
    method: "Généré par script/update_tiers.py (livré avec le site, Python seul) à partir des pages « tier list » de lolalytics, une page par palier et par rôle (Ranked Solo/Duo, toutes régions, patch courant), lues en une requête HTTP chacune et décodées sans exécuter de JavaScript : par champion et rôle, taux de victoire, de pick et de ban, nombre de parties ; par palier et rôle, nombre de parties analysées. Sur le site, les paliers cochés (Fer, Bronze, Argent, Or) sont combinés : WR = moyenne des WR pondérée par les parties du champion à chaque palier ; pick et ban = moyennes pondérées par les parties analysées de chaque palier. Aucun palier coché = référence Émeraude+ (mécanisme « roles »). La date et le patch sont ceux inscrits dans le fichier généré.",
    url: "https://lolalytics.com/lol/tierlist/?lane=top&tier=gold",
    retrieved: "2026-09-14",
    caveat: "Le WR moyen d'un palier n'est pas 50 % (les joueurs Fer gagnent ≈ 44 % de leurs parties classées, les Or ≈ 50 %) : un WR lu à un palier se compare aux autres champions du même palier, pas à 50. Un champion peu joué à un palier a peu de parties : le chiffre est alors instable (« — » s'il n'en a aucune). Pas de lettre de tier en mode paliers (les notes du site source ne se combinent pas)."
  },
  {
    id: "abilities",
    label: "Titre du champion, nom et description des compétences",
    fields: ["title", "abilities.*.name", "abilities.*.description"],
    method: "Data Dragon, le service de données statiques officiel de Riot Games — fichier championFull.json, langue fr_FR. Texte officiel, non reformulé.",
    url: "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
    retrieved: "2026-09-08",
    version: "16.17.1",
    caveat: "Fiable et à jour tant que DDRAGON_VERSION (dans champions.js) correspond au patch suivi — à remonter à la main après un gros patch."
  },
  {
    id: "icons",
    label: "Icônes des compétences (passif/Q/W/E/R)",
    fields: ["abilities.*.icon"],
    method: "CDN Data Dragon officiel. Le nom de fichier de chaque icône est copié tel quel depuis le champ image.full de championFull.json et stocké dans abilities.*.icon — jamais reconstruit à partir d'un motif \"ddid+lettre\", qui ne tient pas pour une bonne partie du roster (ex. le passif d'Ahri est Ahri_SoulEater2.png, pas Ahri_Passive.png). Les 865 URLs résultantes sont vérifiées une par une (200 OK).",
    url: "https://ddragon.leagueoflegends.com/cdn/{DDRAGON_VERSION}/img/spell|passive/{icon}",
    retrieved: "2026-09-08",
    caveat: "Le nom de fichier est figé à la date ci-dessus (issu du même championFull.json que les descriptions) ; l'image elle-même suit DDRAGON_VERSION."
  },
  {
    id: "championIcon",
    label: "Icône carrée du champion",
    fields: [],
    method: "CDN Data Dragon officiel. Lien calculé à l'affichage (pas stocké) à partir du champ ddid (identifiant interne du champion, ex. \"MonkeyKing\" pour Wukong) — motif stable pour ce type d'icône, contrairement aux icônes de compétences. Les 173 URLs résultantes sont vérifiées une par une (200 OK).",
    url: "https://ddragon.leagueoflegends.com/cdn/{DDRAGON_VERSION}/img/champion/{ddid}.png",
    retrieved: "2026-09-08",
    caveat: null
  },
  {
    id: "roleIcons",
    label: "Icônes de rôle/lane (Top, Jungle, Mid, Bot, Support)",
    fields: [],
    method: "Icônes officielles Riot hébergées sur wiki.leagueoflegends.com (catégorie \"Role icons\") — pas de version Data Dragon équivalente pour les rôles. Lien direct par nom de fichier, vérifié un par un (200 OK, taille de fichier conforme à celle listée par la catégorie).",
    url: "https://wiki.leagueoflegends.com/en-us/images/{Top|Jungle|Middle|Bottom|Support}_icon.png",
    retrieved: "2026-09-08",
    caveat: null
  },
  {
    id: "abilityVideos",
    label: "Animations vidéo des compétences",
    method: "CDN vidéo officiel de Riot Games (riotcdn.net) — lien calculé à l'affichage (pas stocké), motif d'URL déterministe à partir de l'identifiant numérique Riot du champion (clé sur 4 chiffres). Toujours l'animation actuelle du sort, y compris après une refonte.",
    url: "https://lol.dyn.riotcdn.net/x/videos/champion-abilities/{key}/ability_{key}_{P|Q|W|E|R}1.mp4",
    retrieved: null,
    caveat: "Lien live, pas une donnée datée : joue toujours l'animation actuellement en jeu pour ce sort. Motif vérifié sur 5 champions différents, pas les 173 un par un."
  },
  {
    id: "championVideos",
    label: "Vidéos de présentation du champion (field `videos`)",
    fields: ["videos"],
    method: "Recherche YouTube ciblée par champion (`yt-dlp`, sans clé d'API), trois motifs de titre distincts, chacun n'acceptant que les résultats d'un channel_id précis (jamais un nom de chaîne affiché, usurpable) : \"Focus sur {nom fr}\" → channel_id UCU-l1ajszDLFd6lWyCs1_GA (League of Legends - France, officiel), titre contenant \"focus\" ; \"{nom en} Champion Spotlight\" → channel_id UC2t5bjwHdUX4vM2g8TRDq5g (League of Legends, chaîne globale officielle), titre contenant \"spotlight\" ; \"3 Minute {nom en} Guide\" → channel_id UCbqpZInu-pjnBIy5sbh7Eag (3 Minute League of Legends — chaîne communautaire, PAS officielle Riot, étiquetée `kind: \"community\"` dans les données). Le premier résultat pertinent de chaque recherche est retenu ; sa date de publication réelle (`published`) et sa durée en secondes (`duration`) sont récupérées séparément (un appel `yt-dlp --print` par vidéo retenue, le mode recherche seul ne les fournit pas).",
    url: null,
    retrieved: "2026-09-08",
    caveat: "Un champion peut n'avoir aucune vidéo officielle si le format de contenu n'existait pas encore à sa sortie (les plus anciens champions du jeu) — traité comme \"rien trouvé\", pas une erreur. `published` sert à juger si le contenu peut être obsolète : à comparer avec `lastKitRework` (mécanisme \"reworks\") — une vidéo publiée avant la dernière refonte de kit décrit un kit qui n'existe plus."
  },
  {
    id: "class",
    label: "Classe du champion",
    fields: ["class"],
    method: "Traduction directe du champ officiel `tags` de Data Dragon (ex. [\"Fighter\",\"Tank\"] → \"Combattant / Tank\"). Table de traduction fixe : Fighter→Combattant, Tank→Tank, Mage→Mage, Assassin→Assassin, Marksman→Tireur, Support→Soutien. Aucune interprétation : c'est la classification officielle de Riot, seulement traduite.",
    url: "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
    retrieved: "2026-09-08",
    version: "16.17.1",
    caveat: "Un champion a parfois 2 tags (ex. \"Mage / Assassin\") — les deux sont affichés, sans ordre de priorité particulier autre que celui donné par Riot."
  },
  {
    id: "damageType",
    label: "Type de dégâts (AD / AP / Mixte)",
    fields: ["damageType", "dmgRating"],
    method: "Dérivé des notes officielles Riot info.attack et info.magic (0 à 10 chacune, Data Dragon) — stockées telles quelles dans dmgRating pour que le calcul reste vérifiable. Règle exacte : attack > magic → \"AD\" ; magic > attack → \"AP\" ; égalité → \"Mixte\". Pas de seuil de tolérance : un écart de 1 point suffit à trancher.",
    url: "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
    retrieved: "2026-09-08",
    version: "16.17.1",
    caveat: "C'est une dérivation, pas une donnée officielle directe — Riot ne publie pas de label \"AD/AP/Mixte\" par champion. La règle simplifie forcément les champions hybrides (ex. Yone, AD dominant selon la règle malgré une composante AP réelle dans son passif) : le détail exact reste dans les descriptions de sorts (mécanisme \"abilities\" ci-dessus), qui font foi en cas de doute. Survolez la pastille de dégâts dans l'outil pour voir les deux notes brutes utilisées."
  },
  {
    id: "analysis",
    label: "Points forts / Contre",
    fields: ["strengths", "counters"],
    method: "Conseils officiels Riot copiés tels quels depuis Data Dragon fr_FR (championFull.json) : `allytips` (conseils « en jouant avec » ce champion) → Points forts (`strengths`) — ce que Riot conseille de faire avec lui décrit ce qu'il cherche à faire, donc à quoi s'attendre en face ; `enemytips` (conseils « en jouant contre ») → Contre (`counters`). Aucune reformulation. Contrôle avant affichage : un conseil qui nomme un sort ou un objet absent à la fois du kit actuel (noms + descriptions des sorts du même championFull.json) et d'item.json (même version) n'est pas affiché — le script de fusion vérifie lui-même cette absence pour chaque terme listé et refuse un terme encore présent (ex. « Visage spirituel » ou « Tourment de Liandry », objets toujours existants, conseils gardés). Chaque conseil retiré est cité mot pour mot dans le `sourceNotes` du champion concerné, avec le terme en cause. Cas particuliers, également en `sourceNotes` : K'Santé (Data Dragon fournit les conseils de Lee Sin), Naafiri (un paragraphe d'histoire à la place d'un conseil), Mel (conseils « avec » identiques aux conseils « contre », gardés côté Contre seulement).",
    url: "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
    retrieved: "2026-09-08",
    version: "16.17.1",
    caveat: "Couverture : 147/173 champions ont au moins un conseil ; 26 n'en ont aucun (24 sans conseil dans Data Dragon — tous sortis ou retravaillés depuis 2019 — plus K'Santé et Naafiri, cf. ci-dessus). 33 conseils sur 814 retirés pour référence à un sort/objet disparu. Non différencié par rôle (la source ne l'est pas). Un conseil antérieur à une refonte qui ne nomme aucun sort/objet précis n'est pas détectable : comparer avec la date de dernière refonte de kit de la fiche (mécanisme « reworks ») avant de s'y fier. Un brouillon non sourcé (matière de départ pour une différenciation par rôle, pas une donnée publiée) est conservé dans data/_draft_analysis_unsourced.json, hors du chargement de l'outil."
  },
  {
    id: "analysisVideo",
    label: "Points forts / Contre d'après les vidéos de présentation (champions sans conseils officiels)",
    fields: ["data/tips_video.js : TIPS_VIDEO[id].strengths / .counters"],
    method: "Pour les champions dont Data Dragon ne fournit aucun conseil (sortis depuis 2020 environ), conseils extraits à la main des transcriptions des vidéos de présentation déjà listées sur la fiche (mécanisme « championVideos ») : « Focus sur … » de Riot France (sous-titres officiels en français), « Champion Spotlight » de Riot (sous-titres automatiques, anglais) et « 3 Minute … Guide » (chaîne communautaire, sous-titres automatiques, anglais — ces guides ouvrent sur les forces et faiblesses). Les guides « 3 Minute » sont lus en premier (ils ouvrent sur les forces et faiblesses), les Focus ensuite. Ne sont retenus comme Points forts / Contre que les passages qui disent quand et contre qui le champion est fort ou faible ; ce qui ne fait que décrire un sort est ignoré, et ce qui précise un sort au-delà de sa description officielle (réinitialisations, plafonds, ce qui traverse ou non les murs…) est rangé sous le sort concerné (champ `mechanics`, affiché sous ses mécaniques). Chaque entrée est une phrase courte reformulée d'un passage, avec l'identifiant de la vidéo et la minute ; rien n'est ajouté qui ne soit dit dans la vidéo. Affichés sous les mêmes étiquettes que les conseils Riot, avec la mention de leur origine et le lien vers la vidéo ; jamais mêlés à des conseils Riot sur un même champion.",
    url: "https://www.youtube.com/@LeagueofLegendsFR",
    retrieved: "2026-09-13",
    caveat: "Une vidéo de présentation date de la sortie du champion : à lire avec la date du dernier changement de kit (mécanisme « reworks »). Les sous-titres automatiques déforment les noms ; l'extraction est manuelle et relue, mais reste un résumé, pas une citation."
  },
  {
    id: "stats",
    label: "Stats par rôle : build, runes, sorts d'invocateur, ordre des sorts, durée de partie, matchups (champ `stats`)",
    fields: ["data/stats.js : CHAMPION_STATS[id].byLane[*]"],
    method: "Page de build lolalytics de chaque champion, une par rôle joué (rôles = ceux du mécanisme « roles »), lue en une requête HTTP : https://lolalytics.com/lol/{slug}/build/?lane={top|jungle|middle|bottom|support}&tier=emerald_plus — la page embarque toutes ses données dans un bloc <script type=\"qwik/json\"> (format Qwik : tableau `objs`, chaque valeur de propriété est un index base 36 vers ce tableau), décodé sans exécuter de JavaScript. Repris tels quels : n/WR/PR/Ban du rôle, rang lolalytics ; objets (départ, cœur le plus joué et cœur au meilleur WR, bottes, 4ᵉ/5ᵉ/6ᵉ objet, objets les plus achetés) ; page de runes la plus jouée et page au meilleur WR ; paires de sorts d'invocateur ; priorité et ordre des sorts ; parties/victoires par tranche de durée (0-15, 15-20, 20-25, 25-30, 30-35, 35-40, 40+ min — libellés lus dans le code de la page, chunk q-DzKKYTb-.js) ; matchups au même rôle (WR et nombre de parties contre chaque adversaire, gardés à partir de 30 parties). Identifiants d'objets/runes/sorts = ceux de Data Dragon (mécanisme « refs »), champion adverse = clé numérique Riot.",
    url: "https://lolalytics.com/lol/{slug}/build/?lane={lane}&tier=emerald_plus",
    retrieved: "2026-09-08",
    patch: "16.17",
    caveat: "Instantané figé (Ranked Solo/Duo, Émeraude+, toutes régions) — se périme au rythme des patchs. Un WR sur peu de parties ne prouve rien : la règle de significativité (mécanisme « matchups ») s'applique à tous ces chiffres, pas seulement aux matchups. « Cœur au meilleur WR » et « objets gagnants » sont biaisés par la sélection (un objet acheté surtout quand la partie va déjà bien affiche un WR élevé)."
  },
  {
    id: "powerCurve",
    label: "Courbe de puissance et étiquette Early / Mid / Late",
    fields: [],
    method: "Dérivée à l'affichage des tranches de durée du mécanisme « stats » (parties et victoires par tranche, pour le rôle affiché). Puissance relative d'une tranche = WR de la tranche ÷ WR moyen du champion (toutes tranches) — 1 = sa moyenne, tracé avec une ligne de référence à 1. Phases : Early = tranches 15-20 et 20-25 (la tranche 0-15 est ignorée : parties abandonnées/remakes, effectif faible), Mid = 25-30 et 30-35, Late = 35-40 et 40+. Une phase est étiquetée si son WR (victoires ÷ parties de ses deux tranches) dépasse le WR moyen du champion d'au moins 1 point ET compte au moins 500 parties ; l'étiquette combine les phases retenues (« Early-Mid »…), « Stable » si aucune.",
    url: null,
    retrieved: null,
    caveat: "Mesure « quand ce champion gagne le plus » à partir de la durée finale des parties — pas le moment précis d'un pic de puissance (niveau 6/11/16, objet clé) : cette source ne le mesure pas. Une partie longue n'est pas une partie « jouée en late » par ce seul champion : c'est un signal d'équipe, lissé sur beaucoup de parties."
  },
  {
    id: "matchups",
    label: "Matchups, contre-pick, roster : règle de significativité",
    fields: [],
    method: "WR d'un champion contre un adversaire au même rôle = mécanisme « stats » (matchups, n parties). Un écart est jugé significatif (≈95 %) si |WR − 50| > 98/√n ; sinon il est affiché grisé et exclu des « plus durs / plus faciles », du contre-pick et du roster. Contre-pick face à X : pour chaque champion C jouable au rôle, WR de C contre X lu dans les matchups de C. Roster (vue Liste, un rôle choisi) : adversaires du rôle avec PR ≥ 1 % ; « mal couvert » = le meilleur WR significatif de mes champions ★ contre lui est < 50 % ; « à apprendre » = champions non ★ classés par Σ (WR contre l'adversaire − 50) × PR de l'adversaire sur les adversaires mal couverts, écarts significatifs seulement.",
    url: null,
    retrieved: null,
    caveat: "Seuil ≈95 % sur une proportion (approximation normale) — ordres de grandeur : n=100 → ±9,8 pts, n=500 → ±4,4, n=1000 → ±3,1, n=5000 → ±1,4. Les matchups viennent de la fiche du champion joué (pas de celle de l'adversaire), les deux fiches peuvent différer légèrement (moments de mesure). La liste « mes champions ★ » est une saisie locale au navigateur (localStorage), pas une donnée."
  },
  {
    id: "mechanics",
    label: "Mécaniques des sorts (champ `abilities.*.mechanics`)",
    fields: ["data/mechanics.js : ABILITY_MECHANICS[id][passive|q|w|e|r]"],
    method: "Gabarits de données du wiki : Template:Data {Nom anglais}/{I|Q|W|E|R} (I = passif), lus en wikitext brut via l'API MediaWiki (action=parse, redirects=1 — le wiki redirige vers Template:Data {Nom}/{Nom du sort}). Champs repris : targeting, affects, damagetype, spellshield, spelleffects, cast time, cooldown, range (valeurs traduites par une table fixe à l'affichage : Direction, Unit→Unité ciblée, Location→Zone au sol, Physical→Physiques, True→Bloqué pour le bouclier de sort…), gabarit {{ct|…|interrupts=…}} (ce qui interrompt l'incantation/canalisation) et la liste « notes » (puces), débarrassée du balisage wiki mais laissée en anglais, sans reformulation.",
    url: "https://wiki.leagueoflegends.com/en-us/api.php?action=parse&page=Template:Data%20{Champion}/{Q}&redirects=1&prop=wikitext&format=json",
    retrieved: "2026-09-08",
    caveat: "Contenu communautaire (wiki), en anglais, 865/865 sorts couverts. Le nettoyage du balisage est automatique (best-effort) : une note peut rester tronquée ou perdre une valeur numérique issue d'un gabarit de calcul. Le wiki n'est pas daté par sort : une note peut décrire un comportement antérieur à une refonte — comparer avec la date de dernière refonte de la fiche."
  },
  {
    id: "mechanicsFr",
    label: "Notes de mécaniques en français (data/mechanics_fr.js)",
    fields: ["data/mechanics_fr.js : ABILITY_MECHANICS_FR[id][*].notes / .interrupts"],
    method: "Traduction automatique des notes anglaises du mécanisme « mechanics » par un modèle de traduction exécuté localement (translategemma:12b via Ollama, température 0,1), texte par texte, avec : 1) remplacement préalable des noms anglais des sorts (titre du gabarit wiki) par leurs noms officiels français (Data Dragon, data/champions.js) ; 2) un glossaire imposé dans le prompt (bouclier de sort, délai de récupération, canalisation, temps d'incantation, attaque de base, à l'impact, contrôle de foule, ténacité, dégâts bruts/magiques/physiques, sbire, tourelle, balise, intouchable, étourdissement, immobilisation, ralentissement, projeter en l'air, repousser, Châtiment, Faille de l'invocateur…). Script tools/translate_notes.py, cache par empreinte du texte anglais (data/notes_fr_cache.json) : une note dont l'anglais change est retraduite, les autres conservées. Contrôle automatique : une traduction qui ressemble à une dérive du modèle (préambule « Voici… », texte bien plus long que l'anglais, caractères étrangers) est retraduite avec un prompt strict à longueur plafonnée ; si elle reste suspecte, la note repasse en anglais. L'anglais d'origine reste affiché sous la traduction (repli « Texte d'origine ») et dans data/mechanics.js.",
    url: "https://ollama.com/library/translategemma",
    retrieved: "2026-09-12",
    caveat: "Traduction non relue par un humain : une phrase peut être maladroite ou un terme rare mal rendu — en cas de doute, le texte anglais fait foi. Licence : les notes sont un contenu du wiki League of Legends sous CC BY-SA 3.0 ; chaque bloc traduit cite sa page d'origine et la licence."
  },
  {
    id: "statDefs",
    label: "Définitions des statistiques d'objets (page Effets et statistiques des objets)",
    fields: ["data/stat_defs.js : STAT_DEFS[terme].desc"],
    method: "Une définition courte par statistique que les objets de la Faille donnent (terme = celui des descriptions officielles, lu par itemstats.js dans le bloc <stats> de item.json) : résumé traduit de la page du wiki League of Legends qui définit la statistique (page citée dans STAT_DEFS[terme].wiki), limité à ce qu'elle fait, sa formule quand elle est simple (armure, accélération) et ce qu'elle n'affecte pas. Rédigé à la main, pas par un modèle.",
    url: "https://wiki.leagueoflegends.com/en-us/Attack_damage",
    retrieved: "2026-09-13",
    caveat: "Résumés, pas des traductions intégrales : les cas particuliers (plafonds, rendements décroissants exacts) sont sur la page wiki liée. Licence CC BY-SA 3.0, page d'origine citée sur chaque définition."
  },
  {
    id: "itemEffects",
    label: "Effets des objets (icônes des cartes d'objets, page Effets des objets)",
    fields: ["data/item_effects.js : ITEM_EFFECTS[id].keys / .effects / .sr"],
    method: "Généré par tools/parse_wiki_items.py à partir du module de données des objets du wiki (Module:ItemData/data, table Lua lue en wikitext via l'API MediaWiki) joint à Data Dragon par identifiant : pour chaque objet de la Faille, ses effets nommés (passifs pass/pass2/pass3, actif act, consommable consume) avec leur texte anglais, leurs mots-clés liés {{tip|…}} et leur nom français (balises <passive>/<active> de la description Data Dragon, dans l'ordre). Classement en clés (vocabulaire taxonomy.js, axe itemEffects) par des règles fixes : un mot-clé lié du wiki (ex. grievous wounds, on-hit, slow, shield, heal, stasis, execute, energized), un motif sur le texte anglais de l'effet (ex. « armor reduction », « burn », « movement speed », « stacks … permanent »), ou un motif sur la description française hors bloc de statistiques (ex. « Lame enchantée », « Fendoir », « Hémorragie », « à l'impact », « ralenti », « alliés … soigne »). Une purge qui nomme les contrôles qu'elle retire ne reçoit pas ces contrôles. Cumuls : « stacking » (croissance permanente : permanent, infini, définitivement, ou charges gagnées sur les éliminations et sbires sans expiration), sinon « stacks » (charges temporaires) ; un objet à croissance permanente ne porte pas les deux. Disponibilité sur la Faille : modes du wiki (« classic sr 5v5 »), l'entrée wiki étant retrouvée par identifiant, sinon par nom anglais (Data Dragon en_US) — les objets d'Arena et de la partie rapide (objets Gardien, Jus chapi-chapo) que Data Dragon marque maps[11] sont écartés (17 objets).",
    url: "https://wiki.leagueoflegends.com/en-us/Module:ItemData/data",
    retrieved: "2026-09-12",
    caveat: "Classement par motifs de texte : un effet formulé autrement peut manquer une clé ou en recevoir une de trop (ex. « dégâts bonus » est large) ; les objets de la partie rapide (Swiftplay) ne sont pas listés : ce mode a ses objets de départ propres. Les valeurs chiffrées ne sont pas extraites : elles sont dans la description officielle de l'objet."
  },
  {
    id: "abilityTaxonomy",
    label: "Classification des compétences (icônes sous chaque sort, page Compétences)",
    fields: ["data/mechanics.js : ABILITY_MECHANICS[id][*].tax"],
    method: "Dérivé des gabarits wiki du mécanisme « mechanics » (mêmes 865 gabarits), par tools/parse_wiki.py, vocabulaire fixe déclaré dans taxonomy.js. Ciblage : champ `targeting` découpé sur « / », « , », « | », gardé s'il vaut auto, direction, passive, location, unit, proximity, vector ou varied. Cibles : champ `affects`, ramené à enemies / self / allies / structures (turrets, turret ruins, allied turrets compris) / terrain / wards / monsters / none. Type de dégâts : champ `damagetype`, jetons magic (magical compris), physical, true. Bouclier de sort, projectile, ancrage (grounded), knockdown, parade (parry), silence, appel à l'aide (callforhelp) : valeur true / false / special / unknown du champ correspondant, telle quelle. Portée : première valeur numérique de `target range` (sinon `range`), « Global » = globale, puis tranche : ≤ 150 sur soi, 151-450 mêlée, 451-700 courte, 701-1000 moyenne, 1001-1500 longue, 1501-5000 très longue, au-delà globale (seuils choisis d'après la distribution des 692 portées officielles Data Dragon, cf. 03-competences-inventaire.md §7). Effets : mots-clés liés {{tip|…}} présents dans les champs description*, leveling* et blurb* du gabarit — jamais dans les notes, où un mot-clé signale souvent une interaction ou une immunité, pas un effet du sort — ramenés à une clé par une table de synonymes (ex. stun/stuns → stun ; knock up, knock back, knock aside, pull → airborne ; heal/heals/healing → heal ; invisibility, camouflage, vanish → stealth ; dispel → cleanse ; lunge → dash) ; tout mot-clé hors table est ignoré. Cumuls : sur le même texte, « stacking » (croissance permanente) si le sort accumule des charges et que le texte dit permanent / infini / sans limite / pour le reste de la partie, ou si les charges viennent des éliminations, sbires ou monstres sans durée d'expiration ; sinon « stacks » (charges temporaires) dès qu'une accumulation est mentionnée ; deux listes tenues à la main dans tools/parse_wiki.py corrigent la règle là où le texte trompe (croissance permanente sans le mot « stack » : Sion W, Thresh, Senna, Bard, Shyvana, Rengar, Garen W, Swain, Sona, Draven, Kayle, Kai'Sa, Viktor, Kha'Zix R ; faux positifs retirés : Ahri, Alistar, Darius R, Irelia, Mordekaiser, Sejuani E, Talon, Tristana W, Yuumi, Zeri R, Bel'Veth), chaque entrée vérifiée sur la fiche wiki du sort. Définitions des contrôles de foule : page wiki « Crowd control », résumé traduit.",
    url: "https://wiki.leagueoflegends.com/en-us/Template:Ability_data",
    retrieved: "2026-09-12",
    caveat: "Un effet retenu est un effet que le texte du sort nomme — pas sa durée, ni sa cible exacte (un soin sur soi et un soin d'allié portent la même icône), ni sa condition. Les champs wiki sont du texte libre : une valeur absente ou mal orthographiée dans le gabarit donne un sort sans icône pour cet axe. Icônes des contrôles : fichiers image du wiki (icônes du jeu) ; les autres pictogrammes sont dessinés pour l'outil."
  },
  {
    id: "refs",
    label: "Objets, runes, fragments, sorts d'invocateur (data/refs.js)",
    fields: [],
    method: "Copie telle quelle, en français, de item.json, runesReforged.json et summoner.json de Data Dragon (noms, icônes, descriptions officielles, coût, tags), plus perks.json de Community Dragon (fr_fr) pour les fragments de runes (5001-5013), absents de Data Dragon. Sert aux pages Bases et aux builds/runes/sorts des fiches.",
    url: "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/item.json",
    retrieved: "2026-09-08",
    version: "16.17.1",
    caveat: "Descriptions = texte officiel brut (balises de mise en forme du client conservées puis simplifiées à l'affichage). item.json contient aussi des objets hors Faille de l'invocateur (Arena, ARAM…), filtrés à l'affichage sur le drapeau maps[11]. Doublons : 26 noms existent sous deux identifiants tous marqués maps[11] (identifiants 32xxxx / 66xxxx = variante de mode, parfois à un autre prix ; 1105-1107 = étape d'évolution des familiers de jungle 1101-1103, même description). Règle d'affichage (pages Objets, Vision, Stats des objets) : un seul par nom, le plus petit identifiant — celui que les builds lolalytics utilisent (ex. 2065 dans 40 builds, 322065 dans aucun) ; un renvoi vers l'autre identifiant est ramené sur celui affiché. Les deux restent dans les données."
  },
  {
    id: "fondamentaux",
    label: "Fondamentaux (page Bases) : carte, objectifs, voies — page officielle « Comment jouer »",
    fields: [],
    method: "Page officielle https://www.leagueoflegends.com/fr-fr/how-to-play/ : ses sections (« Détruire la base », « Se frayer un chemin », « À l'assaut de la jungle », « Choisissez votre voie », « Renforcez votre champion », « Déverrouillez vos compétences ») sont lues dans les données Next.js embarquées dans la page (__NEXT_DATA__) — titres, textes et vignettes repris tels quels dans data/fondamentaux.js. Carte : minimap officielle Data Dragon (img/map/map11.png). Icônes des structures, sbires et monstres : fichiers image du wiki (noms vérifiés un par un via l'API allimages), chaque icône renvoyant à la page wiki (en) de l'élément.",
    url: "https://www.leagueoflegends.com/fr-fr/how-to-play/",
    retrieved: "2026-09-08",
    caveat: "Textes officiels de présentation (niveau débutant), pas une documentation exhaustive : pour les détails (portées, PV des tourelles, timers des monstres…), suivre les liens wiki. La page officielle ne couvre pas la vision : la section Vision s'appuie sur les descriptions officielles des objets de vision (mécanisme « refs ») et renvoie à la page wiki « Sight »."
  },
  {
    id: "damageFormula",
    label: "Calcul des dégâts (page Calcul des dégâts) : mitigation, pénétration, critique, vitesse d'attaque, hâte",
    fields: [],
    method: "Résumé traduit des pages du wiki League of Legends « Armor », « Magic resistance », « Damage », « Armor penetration », « Magic penetration », « Critical strike », « Attack speed », « Haste » (wikitext via l'API MediaWiki), licence CC BY-SA 3.0, chaque bloc citant ses pages. Formules reprises telles quelles : dégâts subis = bruts × 100/(100 + R) (R ≥ 0) ou × (2 − 100/(100 − R)) (R < 0) ; ordre réduction fixe → réduction % → pénétration % → pénétration fixe, pénétration jamais sous 0 ; critique ×1,75 par défaut ; vitesse d'attaque = base × (1 + bonus), plafond 2,5 ; hâte : délai × 100/(100 + hâte). Vérification numérique sur des calculateurs tiers. Le calculateur de la page applique exactement cet ordre, sans critique ni bouclier.",
    url: "https://wiki.leagueoflegends.com/en-us/Armor_penetration",
    retrieved: "2026-09-09",
    caveat: "Règles générales : les exceptions propres à un sort ou un objet (dégâts qui ignorent une part de résistance, réductions conditionnelles) sont dans les descriptions officielles. Les dégâts d'un champion précis (base, ratios) ne sont pas calculés ici — voir BACKLOG 3.3."
  },
  {
    id: "matchmaking",
    label: "Matchmaking (page Matchmaking) : files, MMR, appariement, duo, classée",
    fields: [],
    method: "Page explicative rédigée à partir des pages d'aide officielles Riot (support.riotgames.com : « Matchmaking and Autofill », « MMR, Rank, and LP », « Swiftplay Game Mode », « Ranked Tiers, Divisions, and Queues », « Placements, Promotions, Series, Demotions, and Decay », « Master, Grandmaster, and Challenger ») et des billets de développement Riot (« /dev: Matchmaking in 2024 », « /dev: MMR-to-Rank Distribution », « The State of Competitive — Spring 2022 », notes de patch 26.15), complétées par le wiki (conditions d'accès des files, note de départ) et la distribution des rangs LeagueOfGraphs relayée par Esports Tales. Les citations sont traduites de l'anglais ; chaque bloc de la page renvoie à sa source datée (liste en bas de page). Les pages d'aide Riot sont rendues côté client : leur texte se lit dans un navigateur, pas par simple téléchargement.",
    url: "https://support.riotgames.com/en-us/league-of-legends/gameplay/matchmaking-and-autofill",
    retrieved: "2026-09-12",
    caveat: "Riot ne publie ni la formule du MMR ni la note de départ : la page décrit le mécanisme tel que Riot l'explique, pas ses paramètres. Les restrictions de duo et la distribution des rangs changent au fil des patchs et des saisons."
  },
  {
    id: "patchNotes",
    label: "Notes de patch Riot archivées (data/patchnotes/)",
    fields: [],
    method: "Index https://www.leagueoflegends.com/fr-fr/news/tags/patch-notes/ (données Next.js embarquées dans la page, __NEXT_DATA__) → liste des articles ; chaque article est lu de la même façon (titre, date de publication, corps HTML `richText`) et enregistré tel quel dans data/patchnotes/{slug}.json, avec un index.json (patch, titre, date, URL). Matière brute pour l'investigation (tâche 1.2), non chargée par les pages de l'outil.",
    url: "https://www.leagueoflegends.com/fr-fr/news/tags/patch-notes/",
    retrieved: "2026-09-08",
    caveat: "171 notes, du patch 9.1 (2019-01-08) au 26.17 (2026-08-25) : la page d'index ne remonte pas plus loin. Corps HTML brut de Riot (~14 Mo au total)."
  },
  {
    id: "reworks",
    label: "Historique de refontes (reworkHistory / lastKitRework)",
    fields: ["reworkHistory", "lastKitRework"],
    method: "Table \"List of champion updates\" + \"Class-scale updates\" de wiki.leagueoflegends.com, récupérée en wikitext brut via l'API MediaWiki (action=parse, pas de scraping HTML) puis parsée ligne par ligne — y compris la citation (`<ref>`) que le wiki attache à chaque ligne, extraite et gardée dans `source: {url, label}` sur chaque entrée (lien direct vers les patch notes ou l'annonce Riot d'origine, affiché en clair dans l'UI sous forme de lien `[source]`). Classification kitAffecting : un type de mise à jour compte comme affectant le kit (\"vraiment un sort qui change\", pas juste des ratios) si son libellé contient \"Gameplay Update\", \"Mid-Scope\" ou \"Comprehensive Gameplay\", OU s'il s'agit d'une \"Class-scale Update\" (2015-2017, mises à jour modérées par classe) — un \"Visual (Texture) Update\" seul (cosmétique) ne compte PAS. `lastKitRework` = l'entrée affectant le kit la plus récente (null si le champion n'a jamais eu ce type de changement, seulement des mises à jour cosmétiques ou aucune entrée du tout). `reworkHistory` garde tout l'historique trouvé, trié du plus récent au plus ancien, avec le type exact, `kitAffecting` et sa propre `source`.",
    url: "https://wiki.leagueoflegends.com/en-us/Champion_update",
    retrieved: "2026-09-08",
    caveat: "134 champions sur 173 ont au moins une entrée ; les 39 autres n'apparaissent pas sur cette page — plausiblement jamais retravaillés (sortis pour la plupart après l'arrêt des Class-scale Updates en 2017), non vérifié individuellement pour chacun. Wiki communautaire (pas Riot directement) mais chaque ligne cite sa source primaire individuellement. Un champion peut avoir plusieurs entrées dans le temps (ex. Ezreal : Class-scale Update puis VGU) — `lastKitRework` prend toujours la plus récente. Les citations les plus anciennes (souvent des liens web.archive.org vers d'anciens forums officiels) n'ont pas de libellé lisible dans le wiki — `source.label` est alors `null` et l'UI affiche l'URL brute à la place."
  },
  {
    id: "releaseDate",
    label: "Date de sortie du champion",
    fields: ["releaseDate"],
    method: "Table \"List of champions\" de wiki.leagueoflegends.com — les dates y sont générées par un module Lua du wiki (pas présentes dans le wikitext brut), donc récupérée via l'API MediaWiki en HTML rendu (action=parse, prop=text) puis extraite ligne par ligne (attribut data-champion de chaque ligne + première cellule au format YYYY-MM-DD).",
    url: "https://wiki.leagueoflegends.com/en-us/List_of_champions",
    retrieved: "2026-09-08",
    caveat: "173/173 champions matchés — aucun trou connu."
  }
];
