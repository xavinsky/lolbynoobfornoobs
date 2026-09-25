// Points forts / Contre extraits des vidéos de présentation (mécanisme « analysisVideo » de data/sources.js) — pour les
// champions sans conseils officiels Riot. TIPS_VIDEO[id] = { strengths, counters, mechanics, caveat?, retrieved } ;
// strengths / counters : { text, video, t } (identifiant YouTube, cf. champions.js videos[].url, et minute du passage) ;
// mechanics : { key (passive|q|w|e|r), text, video, t } = précision sur un sort dite dans la vidéo et absente de sa
// description officielle, affichée sous les mécaniques du sort (jamais dans Points forts). Sources privilégiées : les
// guides « 3 Minute » (forces et faiblesses explicites), puis les Focus Riot.
const TIPS_VIDEO = {
  ambessa: {
  "retrieved": "2026-09-13",
  "strengths": [
    {
      "text": "Mobilité exceptionnelle (une ruée après chaque compétence), gros dégâts de zone, pas de mana : elle choisit quand se battre.",
      "video": "9kwT0VdVuS4",
      "t": "0:00"
    },
    {
      "text": "Puissante en début et milieu de partie, surtout en 1 contre 1 ; après le niveau 6, son all-in est mortel.",
      "video": "im8p40eoRyY",
      "t": "0:28"
    },
    {
      "text": "Excellente contre les champions autour desquels elle peut ruer sans cesse ; en fin de partie, une fois sur la ligne arrière, elle y reste collée et la détruit.",
      "video": "9kwT0VdVuS4",
      "t": "1:36"
    },
    {
      "text": "Bon split-pusher : elle s'échappe avec ses ruées ; en lane, elle gèle la vague sous sa tourelle et punit qui s'approche.",
      "video": "9kwT0VdVuS4",
      "t": "2:35"
    }
  ],
  "counters": [
    {
      "text": "Tout ce qui arrête ou punit les ruées la contre : les champions qui interrompent son combo (Poppy, Gragas) et les duellistes (Camille, Fiora, Yone).",
      "video": "9kwT0VdVuS4",
      "t": "0:09"
    },
    {
      "text": "Toutes ses compétences se ratent, son ultime surtout ; sans mana, elle joue autour des longs délais de son W et de son E — l'attaquer quand ils sont dépensés.",
      "video": "9kwT0VdVuS4",
      "t": "0:10"
    },
    {
      "text": "En retard, elle a du mal à revenir ; elle attend l'occasion parfaite et apporte peu d'utilité ou de contrôle à son équipe en attendant.",
      "video": "im8p40eoRyY",
      "t": "2:46"
    }
  ],
  "mechanics": [
    {
      "key": "passive",
      "text": "Chaque compétence donne une charge (trois au plus) : l'attaque suivante gagne portée, vitesse d'attaque, dégâts et rend de l'énergie.",
      "video": "9kwT0VdVuS4",
      "t": "0:23"
    },
    {
      "key": "q",
      "text": "Le second coup fait le double de dégâts sur le premier ennemi touché.",
      "video": "9kwT0VdVuS4",
      "t": "0:49"
    },
    {
      "key": "e",
      "text": "Ruer avec le passif juste après le E relance le E : un second ralentissement.",
      "video": "9kwT0VdVuS4",
      "t": "1:05"
    }
  ]
},
  aurora: {
  "retrieved": "2026-09-13",
  "strengths": [
    {
      "text": "Très mobile, burst énorme, excellent nettoyage de vague, forte à toutes les phases.",
      "video": "0EGHogP67kA",
      "t": "0:00"
    },
    {
      "text": "Domine tôt les champions à portée courte ou à montée lente : dès le niveau 1, une attaque suivie du Q rappelé fait très mal, et tout traverse les sbires — l'adversaire n'est jamais en sécurité.",
      "video": "0EGHogP67kA",
      "t": "1:32"
    },
    {
      "text": "En combat d'équipe, engagement secondaire : elle saute sur la ligne arrière après le début du combat et détruit le carry le plus nourri.",
      "video": "0EGHogP67kA",
      "t": "2:38"
    }
  ],
  "counters": [
    {
      "text": "Dépend de ses compétences à viser et a moins de portée que les autres mages : les mages à longue portée la dominent.",
      "video": "0EGHogP67kA",
      "t": "0:09"
    },
    {
      "text": "Assassins et combattants collants la tuent quand ses outils de fuite sont en récupération.",
      "video": "_nvwi4wRsvU",
      "t": "3:50"
    },
    {
      "text": "Si elle engage la première, un contrôle de foule la fait exploser aussitôt ; dans son ultime, les téléportations sortent de la zone et on peut la pousser sur le bord.",
      "video": "0EGHogP67kA",
      "t": "2:46"
    }
  ],
  "mechanics": [
    {
      "key": "passive",
      "text": "Trois coups sur une cible déclenchent des dégâts selon les PV max et libèrent un esprit qui la soigne et la fait passer en mode Esprit (jusqu'à quatre esprits).",
      "video": "0EGHogP67kA",
      "t": "0:20"
    },
    {
      "key": "w",
      "text": "Une élimination réinitialise sa récupération.",
      "video": "0EGHogP67kA",
      "t": "0:41"
    },
    {
      "key": "r",
      "text": "Toucher le bord depuis l'intérieur la renvoie de l'autre côté ; un ennemi qui touche le bord subit un énorme ralentissement ; la zone se ferme si elle meurt ou en sort.",
      "video": "0EGHogP67kA",
      "t": "1:05"
    }
  ]
},
  fiddlesticks: {
  "retrieved": "2026-09-13",
  "strengths": [
    {
      "text": "Nettoie la jungle vite et sans perdre de PV (double W sur deux camps), fini avant 3 min 10 avec une fenêtre de gank avant les carapateurs.",
      "video": "PZU8FbAFu8E",
      "t": "2:23"
    },
    {
      "text": "Monstrueux en combat d'équipe : un ultime depuis le brouillard de guerre effraie toute l'équipe ennemie ; ses effigies nettoient la vision.",
      "video": "PZU8FbAFu8E",
      "t": "0:02"
    },
    {
      "text": "Excellent contre les junglers à gros dégâts, qu'il effraie et dépasse en combat d'équipe.",
      "video": "PZU8FbAFu8E",
      "t": "1:24"
    }
  ],
  "counters": [
    {
      "text": "Fragile pour un champion qui doit sauter dans le combat, et sans aucune fuite s'il est attrapé.",
      "video": "PZU8FbAFu8E",
      "t": "0:11"
    },
    {
      "text": "Les purs duellistes qui lui sautent dessus et restent sur lui le battent.",
      "video": "PZU8FbAFu8E",
      "t": "1:30"
    },
    {
      "text": "Son ultime se canalise une seconde et demie depuis un endroit non vu : garder de la vision autour des objectifs enlève son moment.",
      "video": "PZU8FbAFu8E",
      "t": "1:09"
    }
  ],
  "mechanics": [
    {
      "key": "passive",
      "text": "Ses effigies remplacent les balises et se font passer pour lui ; immobile deux secondes, il se fait passer pour une effigie ; dès le niveau 6 elles balaient la vision.",
      "video": "PZU8FbAFu8E",
      "t": "0:26"
    },
    {
      "key": "q",
      "text": "Hors combat et hors de vue, sa prochaine compétence effraie ; une cible effrayée récemment ne l'est plus mais subit le double de dégâts.",
      "video": "PZU8FbAFu8E",
      "t": "0:42"
    },
    {
      "key": "w",
      "text": "Canalisation non interrompue : 60 % du délai remboursé.",
      "video": "PZU8FbAFu8E",
      "t": "0:57"
    }
  ]
},
  ksante: {
  "retrieved": "2026-09-13",
  "strengths": [
    {
      "text": "Très résistant, contrôles très perturbants, excellent duelliste, et une forme offensive à dégâts énormes.",
      "video": "G13eOUoZZPg",
      "t": "0:00"
    },
    {
      "text": "Bon contre les top-laners à gros dégâts, qu'il encaisse avant de retourner le combat ; à partir du niveau 6, son enchaînement Q-W-R éloigne la cible de toute sécurité.",
      "video": "G13eOUoZZPg",
      "t": "1:47"
    },
    {
      "text": "Split-pusher solide (tue à travers les tourelles), et en combat d'équipe une première ligne qui protège ses alliés avant d'arracher un carry arrière à travers un mur.",
      "video": "G13eOUoZZPg",
      "t": "2:37"
    }
  ],
  "counters": [
    {
      "text": "Début de partie pas le plus fort, et un kit exigeant : beaucoup de valeur dépend de la maîtrise.",
      "video": "G13eOUoZZPg",
      "t": "0:09"
    },
    {
      "text": "Les tueurs de tanks lui posent problème.",
      "video": "G13eOUoZZPg",
      "t": "1:46"
    },
    {
      "text": "Sa forme offensive plafonne ses PV et réduit fortement ses résistances : transformé au mauvais moment, le chasseur devient une proie.",
      "video": "G13eOUoZZPg",
      "t": "1:22"
    }
  ],
  "mechanics": [
    {
      "key": "q",
      "text": "Deux Q touchés donnent un troisième Q en onde de choc qui attire et étourdit ; c'est aussi une réinitialisation d'attaque.",
      "video": "G13eOUoZZPg",
      "t": "0:40"
    },
    {
      "key": "w",
      "text": "Imblocable et réduction de dégâts pendant la charge ; plus la charge est longue, plus la ruée et l'étourdissement sont longs ; en forme offensive, dégâts sans repoussement.",
      "video": "G13eOUoZZPg",
      "t": "0:45"
    },
    {
      "key": "e",
      "text": "Ne traverse pas le terrain ; lancé sur un allié, plus long et bouclier partagé.",
      "video": "G13eOUoZZPg",
      "t": "1:03"
    }
  ]
},
  lillia: {
  "retrieved": "2026-09-13",
  "strengths": [
    {
      "text": "Très mobile, gros dégâts de zone, kite facilement la plupart des champions ; monte bien en milieu et fin de partie.",
      "video": "_CM9dL3x-4A",
      "t": "0:00"
    },
    {
      "text": "Nettoie la jungle vite et sans perdre de PV grâce au soin de son passif ; presque toujours première au carapateur.",
      "video": "_CM9dL3x-4A",
      "t": "2:02"
    },
    {
      "text": "Après le 6, toute compétence touchée garantit un sommeil puis le W à triple dégâts : des kills faciles ; en combat d'équipe, Q et E sur un maximum de cibles puis tout le monde dort.",
      "video": "_CM9dL3x-4A",
      "t": "2:30"
    }
  ],
  "counters": [
    {
      "text": "Ganks faibles avant le niveau 6 (aucun contrôle propre) et fragile en début de partie : vulnérable aux invasions.",
      "video": "_CM9dL3x-4A",
      "t": "0:08"
    },
    {
      "text": "Les champions à burst qui l'envahissent et l'explosent la battent.",
      "video": "_CM9dL3x-4A",
      "t": "1:33"
    },
    {
      "text": "Sa ruée ne franchit pas les murs, et une bonne part de ses dégâts dépend du centre de son W : ne pas rester où elle atterrit.",
      "video": "_CM9dL3x-4A",
      "t": "0:47"
    }
  ],
  "mechanics": [
    {
      "key": "q",
      "text": "Chaque compétence qui touche donne une charge de vitesse (quatre au plus) ; la bordure du Q fait des dégâts bruts.",
      "video": "_CM9dL3x-4A",
      "t": "0:39"
    },
    {
      "key": "e",
      "text": "Roule sans limite jusqu'à toucher un ennemi ou un mur, puis blesse, ralentit et révèle.",
      "video": "_CM9dL3x-4A",
      "t": "0:53"
    },
    {
      "key": "r",
      "text": "Utilisable seulement si un champion subit son passif ; somnolence 1,5 s puis sommeil 2 s ; réveillé par un champion, un grand monstre ou une tourelle, il subit des dégâts bonus.",
      "video": "_CM9dL3x-4A",
      "t": "1:08"
    }
  ]
},
  locke: {
  "retrieved": "2026-09-13",
  "strengths": [
    {
      "text": "Assassin AP : beaucoup de burst, une grande exécution de zone, très mobile, forte menace de kill tôt — il doit se battre tôt et souvent.",
      "video": "Gr4WRos_qiQ",
      "t": "0:00"
    },
    {
      "text": "Trois Q touchés = ralentissement massif, puis E sur la cible ; poussé sous sa tourelle, sa vitesse et ses deux ruées lui permettent de courir après n'importe qui.",
      "video": "Gr4WRos_qiQ",
      "t": "2:31"
    },
    {
      "text": "Très bon contre les mages immobiles ; en combat d'équipe, il saute sur la ligne arrière, souvent par-dessus un mur, et chaque élimination réinitialise son E.",
      "video": "Gr4WRos_qiQ",
      "t": "1:49"
    }
  ],
  "counters": [
    {
      "text": "Fragile pour un champion qui doit entrer, et dépendant de ses Q à viser.",
      "video": "Gr4WRos_qiQ",
      "t": "0:09"
    },
    {
      "text": "Les champions qui l'immobilisent ou le zonent lui posent problème ; il craint beaucoup les contrôles de foule.",
      "video": "Gr4WRos_qiQ",
      "t": "1:53"
    },
    {
      "text": "Ses dégâts ne montent pas avec les PV max : en milieu et fin de partie il peine contre les tanks ; les ganks sous plusieurs angles punissent son agressivité.",
      "video": "YFgeOkndw_8",
      "t": "3:33"
    }
  ],
  "mechanics": [
    {
      "key": "w",
      "text": "Réactivable même sous contrôle de foule ; il subit des dégâts bruts selon ses PV actuels tant que l'effet dure.",
      "video": "YFgeOkndw_8",
      "t": "1:15"
    },
    {
      "key": "e",
      "text": "La distance de la ruée est fixe ; une élimination réinitialise le délai.",
      "video": "YFgeOkndw_8",
      "t": "1:57"
    },
    {
      "key": "r",
      "text": "La malédiction n'est pas liée au totem : courir n'empêche pas l'exécution sous le seuil ; Mur de vent ne bloque pas le totem, seulement ses projectiles.",
      "video": "YFgeOkndw_8",
      "t": "2:46"
    }
  ]
},
  naafiri: {
  "retrieved": "2026-09-13",
  "strengths": [
    {
      "text": "Mobilité et burst énormes, roams très forts ; sa meute encaisse les compétences à viser à sa place.",
      "video": "4sTSHYntuDY",
      "t": "0:00"
    },
    {
      "text": "Excellente contre les mages à longue portée, qu'elle rejoint facilement ; deux Q sur l'adversaire l'entament fort tout en la soignant.",
      "video": "4sTSHYntuDY",
      "t": "1:45"
    },
    {
      "text": "En combat d'équipe, assassin : ultime sur la ligne arrière après le début du combat, W avant pour les dégâts ou après pour la sécurité ; la première élimination réinitialise l'ultime.",
      "video": "4sTSHYntuDY",
      "t": "2:56"
    }
  ],
  "counters": [
    {
      "text": "Dépend de ses Q à viser, et n'a aucun contrôle dur ; les verrouillages à cible unique la contrent.",
      "video": "4sTSHYntuDY",
      "t": "1:49"
    },
    {
      "text": "Son ultime se canalise et demande de l'espace pour courir après sa cible ; W et E dépensés, elle n'a plus d'échappatoire.",
      "video": "qL76URvo2ks",
      "t": "2:57"
    },
    {
      "text": "Elle doit prendre de l'avance tôt pour forcer une partie rapide : ne pas la laisser prendre cette avance.",
      "video": "qL76URvo2ks",
      "t": "3:48"
    }
  ],
  "mechanics": [
    {
      "key": "passive",
      "text": "Deux à cinq chiens selon le niveau ; toucher un champion ou tuer réduit le délai d'apparition ; ils attaquent deux secondes ce qu'elle blesse et peuvent être tués.",
      "video": "4sTSHYntuDY",
      "t": "0:31"
    },
    {
      "key": "q",
      "text": "Le saignement exécute les sbires bas ; la relance consomme tout le saignement en dégâts bonus et la soigne contre un champion ou un grand monstre.",
      "video": "4sTSHYntuDY",
      "t": "0:36"
    },
    {
      "key": "w",
      "text": "Brièvement impossible à cibler, deux chiens de plus, dégâts d'attaque et vitesse pendant cinq secondes.",
      "video": "4sTSHYntuDY",
      "t": "0:54"
    },
    {
      "key": "r",
      "text": "Une élimination donne la vision alentour, un bouclier et une relance de l'ultime.",
      "video": "4sTSHYntuDY",
      "t": "1:22"
    }
  ]
},
  samira: {
  "retrieved": "2026-09-13",
  "strengths": [
    {
      "text": "Machine à pentakill et excellente en combat d'équipe ; forte tôt, au milieu et tard, elle fait boule de neige très fort.",
      "video": "PhBWp3jNHAk",
      "t": "0:02"
    },
    {
      "text": "Excellente contre les champions à courte portée qui ne peuvent pas la harceler ; avec un support à engagement, elle prend les gros échanges plutôt que le poke et colle à sa cible.",
      "video": "PhBWp3jNHAk",
      "t": "1:43"
    },
    {
      "text": "En combat d'équipe, une hyper-carry qui joue comme un assassin : le but est un ultime massif, et chaque élimination réinitialise son E.",
      "video": "PhBWp3jNHAk",
      "t": "2:46"
    }
  ],
  "counters": [
    {
      "text": "Portée courte pour une tireuse : les champions qui restent en arrière et la harcèlent sans cesse la battent.",
      "video": "PhBWp3jNHAk",
      "t": "1:48"
    },
    {
      "text": "Un contrôle dur arrête instantanément son ultime : garder un contrôle pour le moment où elle a le rang S.",
      "video": "PhBWp3jNHAk",
      "t": "0:10"
    },
    {
      "text": "Charger au mauvais moment ou sur la mauvaise cible se paie cher : une seule ruée pour suivre.",
      "video": "KisUH8zrOjQ",
      "t": "3:44"
    }
  ],
  "mechanics": [
    {
      "key": "passive",
      "text": "Une charge de Style par attaque ou compétence différente de la précédente ; au corps à corps, ses attaques ne sont plus des projectiles ; contre une cible sous contrôle dur, attaque renforcée qui la rue à portée.",
      "video": "PhBWp3jNHAk",
      "t": "0:38"
    },
    {
      "key": "q",
      "text": "Pendant une ruée, Q explose derrière elle.",
      "video": "PhBWp3jNHAk",
      "t": "0:56"
    },
    {
      "key": "w",
      "text": "Détruit tous les projectiles hostiles ; dégâts au début et à la fin.",
      "video": "PhBWp3jNHAk",
      "t": "1:00"
    }
  ]
},
  seraphine: {
  "retrieved": "2026-09-13",
  "strengths": [
    {
      "text": "Très longue portée, harcèlement à travers les sbires, plusieurs verrouillages de zone, monstrueuse en combat d'équipe.",
      "video": "fDmG_Q6d9Yc",
      "t": "0:00"
    },
    {
      "text": "Excellente contre les supports à engagement, dont elle se désengage ; avec un allié qui ralentit, son E immobilise à coup sûr.",
      "video": "fDmG_Q6d9Yc",
      "t": "1:30"
    },
    {
      "text": "En fin de partie, mage-enchanteresse de l'arrière : un ultime en travers de l'équipe adverse puis E, gros contrôle de zone en spammant dégâts, soins et boucliers.",
      "video": "fDmG_Q6d9Yc",
      "t": "2:49"
    }
  ],
  "counters": [
    {
      "text": "Très fragile, peu mobile et très gourmande en mana ; les brutes de lane la dominent.",
      "video": "fDmG_Q6d9Yc",
      "t": "1:33"
    },
    {
      "text": "Son Q s'esquive facilement si on a le temps d'en sortir : rester mobile, et ne s'arrêter pour farmer que hors de sa portée.",
      "video": "fDmG_Q6d9Yc",
      "t": "2:08"
    }
  ],
  "mechanics": [
    {
      "key": "passive",
      "text": "Deux compétences de base lancées, la suivante est doublée ; chaque compétence donne une note à elle et aux alliés proches (quatre au plus), l'attaque suivante les consomme avec portée et dégâts bonus.",
      "video": "fDmG_Q6d9Yc",
      "t": "0:18"
    },
    {
      "key": "w",
      "text": "Si elle avait déjà un bouclier au lancement, les alliés sont aussi soignés après un court délai.",
      "video": "fDmG_Q6d9Yc",
      "t": "0:54"
    },
    {
      "key": "e",
      "text": "Ralentit ; immobilise une cible déjà ralentie ; étourdit une cible déjà immobilisée.",
      "video": "fDmG_Q6d9Yc",
      "t": "1:06"
    },
    {
      "key": "r",
      "text": "Chaque champion traversé, allié ou ennemi, relance sa portée.",
      "video": "fDmG_Q6d9Yc",
      "t": "1:18"
    }
  ]
},
  vex: {
  "retrieved": "2026-09-13",
  "strengths": [
    {
      "text": "Très longue portée, nettoyage de vague excellent, burst massif, et elle contre les champions mobiles : chaque ruée près d'elle est punie.",
      "video": "sL_p_NyCYWE",
      "t": "0:05"
    },
    {
      "text": "Une peur touchée garantit tout son combo ; après le 6, un adversaire à 70 % de PV qui prend une peur est mort.",
      "video": "sL_p_NyCYWE",
      "t": "2:19"
    },
    {
      "text": "Pousse vite et roame avec son ultime ; en combat d'équipe, mage de l'arrière qui attend le bon moment pour sauter sur un carry avec R et l'exploser.",
      "video": "sL_p_NyCYWE",
      "t": "2:48"
    }
  ],
  "counters": [
    {
      "text": "Coûts de mana élevés tôt, et très dépendante de ses compétences à viser.",
      "video": "sL_p_NyCYWE",
      "t": "0:07"
    },
    {
      "text": "Les mages à gros burst la battent.",
      "video": "sL_p_NyCYWE",
      "t": "1:35"
    },
    {
      "text": "Sa peur a un délai : lancée sur un sort inutile, elle laisse une fenêtre où les ruées ne sont plus punies.",
      "video": "xY_MLTwwRqw",
      "t": "2:07"
    }
  ],
  "mechanics": [
    {
      "key": "passive",
      "text": "La peur fait fuir loin d'elle, ou loin du centre du E s'il l'a portée ; les ennemis qui ruent ou clignent près d'elle sont marqués, et la détonation de la marque recharge la peur.",
      "video": "sL_p_NyCYWE",
      "t": "0:21"
    },
    {
      "key": "e",
      "text": "La zone grandit avec la distance de lancer ; toucher marque comme une ruée ; une élimination par le E recharge la peur.",
      "video": "sL_p_NyCYWE",
      "t": "0:51"
    },
    {
      "key": "r",
      "text": "S'arrête sur le premier champion touché ; si un ennemi meurt dans les six secondes, relance gratuite.",
      "video": "sL_p_NyCYWE",
      "t": "1:13"
    }
  ]
},
  viego: {
  "retrieved": "2026-09-13",
  "strengths": [
    {
      "text": "Grand duelliste, hyper-carry à réinitialisations, monstrueux en combat d'équipe, il fait boule de neige très fort.",
      "video": "yXR1Pa2-Wwg",
      "t": "0:00"
    },
    {
      "text": "Bon contre les champions qu'il peut enchaîner dès que son étourdissement touche ; en combat, chercher la première élimination donne toutes les compétences de la victime, un nouvel ultime, et l'exécution suivante.",
      "video": "yXR1Pa2-Wwg",
      "t": "1:38"
    },
    {
      "text": "Jungler qui monte en puissance : nettoyage complet tôt, puis dès Trinité il devient mortel dans les escarmouches.",
      "video": "yXR1Pa2-Wwg",
      "t": "2:26"
    }
  ],
  "counters": [
    {
      "text": "Début de partie plus faible ; les champions à bon contrôle de foule le verrouillent.",
      "video": "yXR1Pa2-Wwg",
      "t": "0:09"
    },
    {
      "text": "Il ne peut fuir qu'avec son ultime, et une brume sur un mur révèle sa position.",
      "video": "IYKRq67wctY",
      "t": "4:49"
    },
    {
      "text": "Jouer contre lui demande de connaître les autres champions : possédé, il joue leur kit.",
      "video": "yXR1Pa2-Wwg",
      "t": "0:10"
    }
  ],
  "mechanics": [
    {
      "key": "passive",
      "text": "Consommer le spectre d'un champion éliminé le soigne, lui donne dix secondes le kit de la victime, un ultime gratuit qui met fin à la possession, et de la vitesse vers les ennemis.",
      "video": "yXR1Pa2-Wwg",
      "t": "0:14"
    },
    {
      "key": "q",
      "text": "Passif : dégâts à l'impact, et après une compétence l'attaque suivante frappe deux fois et soigne.",
      "video": "yXR1Pa2-Wwg",
      "t": "0:39"
    },
    {
      "key": "w",
      "text": "Charge qui le ralentit, augmente portée et durée d'étourdissement ; réinitialisation d'attaque ; ne franchit pas les murs.",
      "video": "yXR1Pa2-Wwg",
      "t": "0:57"
    }
  ]
},
  yunara: {
  "retrieved": "2026-09-13",
  "strengths": [
    {
      "text": "Facile à prendre en main ; énormes dégâts de zone, poussées de mobilité, dégâts hybrides.",
      "video": "BEojwfgQ4rU",
      "t": "0:00"
    },
    {
      "text": "Sa portée d'attaque est très longue et ses attaques font mal : harceler et échanger en lane ; à huit charges, W et E lui laissent choisir quand engager.",
      "video": "BEojwfgQ4rU",
      "t": "2:16"
    },
    {
      "text": "Excellente contre les champions peu mobiles qu'elle ralentit et rattrape ; en fin de partie, carry de l'arrière aux dégâts de zone énormes tant qu'elle attaque.",
      "video": "BEojwfgQ4rU",
      "t": "1:40"
    }
  ],
  "counters": [
    {
      "text": "Très fragile si elle est attrapée ; hors ultime, sa mobilité se limite à une accélération.",
      "video": "BEojwfgQ4rU",
      "t": "0:08"
    },
    {
      "text": "Il lui faut du temps pour empiler son Q : hors de ses fenêtres, elle est nettement plus faible.",
      "video": "BEojwfgQ4rU",
      "t": "0:13"
    },
    {
      "text": "Les tireurs à fort désengagement ou qui la brutalisent tôt la battent.",
      "video": "BEojwfgQ4rU",
      "t": "1:46"
    }
  ],
  "mechanics": [
    {
      "key": "q",
      "text": "Deux charges par attaque sur un champion, huit au plus ; l'actif est une réinitialisation d'attaque : cinq secondes de vitesse d'attaque, dégâts à l'impact et attaques en zone.",
      "video": "BEojwfgQ4rU",
      "t": "0:24"
    },
    {
      "key": "r",
      "text": "Quinze secondes ; en entrant et en sortant, E remboursé et W à 80 %.",
      "video": "BEojwfgQ4rU",
      "t": "1:18"
    }
  ]
},
  yuumi: {
  "retrieved": "2026-09-13",
  "strengths": [
    {
      "text": "Très facile à prendre en main, impossible à cibler en lane, elle transforme son carry en dieu et aime les combats d'équipe.",
      "video": "Ww10Dbrmq0o",
      "t": "0:02"
    },
    {
      "text": "Excellente contre les supports brutaux, dont elle absorbe les dégâts avec ses boucliers avant de les dépasser.",
      "video": "Ww10Dbrmq0o",
      "t": "1:28"
    },
    {
      "text": "Sa santé est une ressource : se détacher, frapper le carry adverse, se rattacher — même en perdant l'avantage de PV, l'adversaire plus bas vaut mieux.",
      "video": "Ww10Dbrmq0o",
      "t": "2:17"
    }
  ],
  "counters": [
    {
      "text": "Dépend de ses Q à viser, et n'existe pas sans un allié à côté.",
      "video": "Ww10Dbrmq0o",
      "t": "0:10"
    },
    {
      "text": "Les engagements durs la battent : un verrouillage prend deux champions pour le prix d'un.",
      "video": "Ww10Dbrmq0o",
      "t": "1:33"
    },
    {
      "text": "Attachée, elle ne peut rien faire seule ; si le porteur meurt, elle est une cible facile.",
      "video": "Ww10Dbrmq0o",
      "t": "2:14"
    }
  ],
  "mechanics": [
    {
      "key": "passive",
      "text": "Le carry qui tue le plus de champions et de sbires avec elle attachée devient son meilleur ami (charges permanentes) ; sur lui, Q donne des dégâts à l'impact, W de la puissance de soin et un soin à l'impact.",
      "video": "Ww10Dbrmq0o",
      "t": "0:29"
    },
    {
      "key": "w",
      "text": "Un contrôle de foule reçu détachée met W en récupération cinq secondes.",
      "video": "Ww10Dbrmq0o",
      "t": "0:53"
    },
    {
      "key": "r",
      "text": "Cinq vagues orientables ; surplus de soin converti en bouclier ; ralentissement cumulable par vague ; +30 % de soin sur le meilleur ami.",
      "video": "Ww10Dbrmq0o",
      "t": "1:08"
    }
  ]
},
  zeri: {
  "retrieved": "2026-09-13",
  "strengths": [
    {
      "text": "Énormes dégâts de zone, devient une déesse en fin de partie, bonne portée et très mobile pour une tireuse.",
      "video": "gr8DNcGo0ck",
      "t": "0:02"
    },
    {
      "text": "Excellente contre les champions à compétences à viser, qu'elle esquive en dansant ; après le niveau 6, son all-in devient très fort.",
      "video": "gr8DNcGo0ck",
      "t": "1:40"
    },
    {
      "text": "En combat d'équipe, hyper-carry de l'arrière : ultime dès que possible pour empiler les charges, E pour les dégâts de zone ou pour se mettre à l'abri.",
      "video": "gr8DNcGo0ck",
      "t": "2:43"
    }
  ],
  "counters": [
    {
      "text": "Faible en début de partie, surtout avant le niveau 6 : les brutes de lane l'abusent, et son Q ne traverse pas les sbires alors qu'on peut l'attaquer à travers eux.",
      "video": "gr8DNcGo0ck",
      "t": "2:15"
    },
    {
      "text": "Tout repose sur sa vitesse de déplacement : les verrouillages la tuent.",
      "video": "gr8DNcGo0ck",
      "t": "0:11"
    },
    {
      "text": "Trop d'attaques épuisent sa charge : la forcer à tirer à vide retarde ses gros coups.",
      "video": "sT1aJGGGv-M",
      "t": "2:40"
    }
  ],
  "mechanics": [
    {
      "key": "passive",
      "text": "Q compte comme attaque de base, l'attaque de base comme sort ; la charge (100 au plus) monte en bougeant ; attaque chargée = dégâts selon les PV max, sinon faible mais exécute sous un seuil.",
      "video": "gr8DNcGo0ck",
      "t": "0:28"
    },
    {
      "key": "w",
      "text": "Devient un laser critique s'il touche le terrain.",
      "video": "gr8DNcGo0ck",
      "t": "0:56"
    },
    {
      "key": "e",
      "text": "Traverse tout le mur touché ; ensuite le Q perce pendant cinq secondes.",
      "video": "gr8DNcGo0ck",
      "t": "1:05"
    },
    {
      "key": "r",
      "text": "Surcharge : vitesse d'attaque au-delà du plafond, Q à trois projectiles en chaîne d'éclairs, vitesse de déplacement par compétence touchée.",
      "video": "gr8DNcGo0ck",
      "t": "1:22"
    }
  ]
},
  belveth: {
  "retrieved": "2026-09-13",
  "strengths": [
    {
      "text": "Elle monte toute la partie : chaque champion ou grand monstre éliminé lui donne de la vitesse d'attaque permanente, sans limite.",
      "video": "-0TQrqflWdw",
      "t": "0:56"
    },
    {
      "text": "Excelle en split-push et en escarmouche à 1 contre 1 ; Héraut et Baron prolongent sa vraie forme et lui donnent des sbires du Néant.",
      "video": "-0TQrqflWdw",
      "t": "5:25"
    },
    {
      "text": "Sa vraie forme (après un corail) la rend bien plus solide : PV, portée, vitesse d'attaque, traversée des murs.",
      "video": "-0TQrqflWdw",
      "t": "4:48"
    }
  ],
  "counters": [
    {
      "text": "Faible en début de partie : elle farme jusqu'au niveau 6 — la punir tôt dans sa jungle.",
      "video": "-0TQrqflWdw",
      "t": "4:33"
    },
    {
      "text": "Pas à l'aise en combat d'équipe, surtout sans Banquet infini actif : ne pas lui laisser de cibles isolées.",
      "video": "-0TQrqflWdw",
      "t": "5:22"
    }
  ],
  "mechanics": [
    {
      "key": "q",
      "text": "Un délai par direction, réduit par la vitesse d'attaque ; ne traverse les murs qu'en vraie forme.",
      "video": "-0TQrqflWdw",
      "t": "1:20"
    },
    {
      "key": "w",
      "text": "Toucher un champion réinitialise Q vers lui.",
      "video": "-0TQrqflWdw",
      "t": "1:53"
    },
    {
      "key": "e",
      "text": "Cible l'ennemi le moins vivant, sbires compris ; réduction de dégâts et vol de vie ; dégâts selon les PV manquants.",
      "video": "-0TQrqflWdw",
      "t": "2:06"
    },
    {
      "key": "r",
      "text": "Le passif fait des dégâts bruts toutes les deux attaques sur la même cible, cumulable sans limite ; changer de cible rompt le cumul.",
      "video": "-0TQrqflWdw",
      "t": "3:04"
    }
  ]
},
  briar: {
  "retrieved": "2026-09-13",
  "strengths": [
    {
      "text": "Se soigne en frappant, d'autant plus qu'elle a peu de PV : mieux vaut se battre que fuir, et elle est dure à tuer à bas PV — un appât idéal.",
      "video": "ublhdcnt4kk",
      "t": "0:48"
    },
    {
      "text": "À son apogée pendant Folie sanguinaire : vide les camps et ne fait qu'une bouchée des ennemis ; son ultime traverse la carte et en fait une menace permanente, surtout avec les contrôles des alliés.",
      "video": "ublhdcnt4kk",
      "t": "3:39"
    },
    {
      "text": "Faite pour les petites escarmouches et les cibles qu'elle peut avaler d'un coup.",
      "video": "ublhdcnt4kk",
      "t": "4:22"
    }
  ],
  "counters": [
    {
      "text": "Ne récupère pas de PV passivement et ses compétences lui en coûtent : la harceler sans lui offrir de cible à mordre.",
      "video": "ublhdcnt4kk",
      "t": "0:26"
    },
    {
      "text": "Sensible aux contrôles de foule pendant sa frénésie : l'éloigner de sa cible en combat d'équipe.",
      "video": "ublhdcnt4kk",
      "t": "4:19"
    },
    {
      "text": "Les cibles mobiles gâchent sa frénésie et l'attirent au mauvais endroit ; les clones et les tanks lui font perdre la bonne cible ; une Briar qui gaspille ses délais est une cible facile.",
      "video": "ublhdcnt4kk",
      "t": "4:26"
    }
  ],
  "mechanics": [
    {
      "key": "w",
      "text": "Pendant la frénésie elle perd le contrôle de ses déplacements et attaques mais garde compétences, sorts et objets ; un Q sur un sbire ou un monstre lui fait perdre la priorité aux champions ; seul le E l'arrête plus tôt.",
      "video": "ublhdcnt4kk",
      "t": "2:36"
    },
    {
      "key": "e",
      "text": "Canalisation immobile avec réduction de dégâts et soin ; chargé à bloc, repousse et étourdit contre un mur.",
      "video": "ublhdcnt4kk",
      "t": "2:32"
    },
    {
      "key": "r",
      "text": "Frénésie renforcée avec résistances, vol de vie et vitesse ; elle ne s'arrête qu'à la mort de la proie ou la sienne ; Q, W et E restent utilisables.",
      "video": "ublhdcnt4kk",
      "t": "3:22"
    }
  ]
},
  nilah: {
  "retrieved": "2026-09-13",
  "strengths": [
    {
      "text": "Sa vraie puissance est en combat d'équipe de milieu et fin de partie, groupée : Apothéose sur un maximum d'ennemis, soins convertis en bouclier et partagés.",
      "video": "sNbXOVIB0ZI",
      "t": "3:49"
    },
    {
      "text": "Ses soins et sa pénétration d'armure grandissent avec les chances de coup critique : quelques objets et elle submerge.",
      "video": "sNbXOVIB0ZI",
      "t": "2:39"
    },
    {
      "text": "Elle esquive toutes les attaques de base avec son W, partageable avec un allié, et gagne plus d'expérience en tuant les sbires, partagée avec l'allié le plus proche.",
      "video": "sNbXOVIB0ZI",
      "t": "1:49"
    }
  ],
  "counters": [
    {
      "text": "En voie, les ennemis à distance l'attaquent facilement : corps à corps, elle a besoin d'objets et de son soutien.",
      "video": "sNbXOVIB0ZI",
      "t": "2:47"
    },
    {
      "text": "Vigilante contre les tanks et les combattants qu'elle doit affronter au contact ; sans alliés pour la garder en vie au centre du combat, elle meurt.",
      "video": "sNbXOVIB0ZI",
      "t": "3:11"
    }
  ],
  "mechanics": [
    {
      "key": "passive",
      "text": "Les soins et boucliers reçus des alliés sont renforcés ; achever un sbire donne de l'expérience bonus, partagée avec l'allié le plus proche.",
      "video": "sNbXOVIB0ZI",
      "t": "0:57"
    },
    {
      "key": "e",
      "text": "Deux charges, distance fixe, à travers un allié ou un ennemi ; Q pendant la ruée lève une vague.",
      "video": "sNbXOVIB0ZI",
      "t": "2:10"
    }
  ]
},
  qiyana: {
  "retrieved": "2026-09-13",
  "strengths": [
    {
      "text": "Assassine à burst qui joue avec le terrain : eau qui immobilise, pierre qui frappe fort les cibles affaiblies, herbe qui la rend invisible.",
      "video": "6WzADGSfCug",
      "t": "0:45"
    },
    {
      "text": "Grande mobilité (le E se réinitialise à chaque nouvel élément) pour aider ses alliés ou abattre une cible fragile ; son ultime contre un mur, un buisson ou la rivière étourdit toute une ligne.",
      "video": "6WzADGSfCug",
      "t": "1:39"
    }
  ],
  "counters": [
    {
      "text": "Loin des murs, des buissons et de la rivière, son ultime ne fait que repousser, sans dégâts ni étourdissement.",
      "video": "6WzADGSfCug",
      "t": "1:26"
    },
    {
      "text": "Après son enchaînement, l'élément est consommé et elle doit recharger : le moment pour la punir.",
      "video": "6WzADGSfCug",
      "t": "1:03"
    }
  ],
  "mechanics": [
    {
      "key": "q",
      "text": "En chargeant un élément elle rue et se renforce ; seule la première attaque sur chaque unité fait des dégâts bonus.",
      "video": "6WzADGSfCug",
      "t": "1:05"
    }
  ]
},
  rell: {
  "retrieved": "2026-09-13",
  "caveat": "Focus Riot de 2020, antérieur au changement de kit du 20 novembre 2024 : les principes restent, les compétences ont changé.",
  "strengths": [
    {
      "text": "Le fer de lance d'une botlane à engagement : elle vole des résistances à chaque cible touchée, projette en l'air en descendant de cheval et attire tout vers elle avec son ultime.",
      "video": "JKcvLZu9tzU",
      "t": "4:04"
    },
    {
      "text": "Liée à un allié qui retient les ennemis, ses étourdissements et son Q deviennent faciles à placer ; le rayon de son E tient les assassins loin du carry.",
      "video": "JKcvLZu9tzU",
      "t": "3:41"
    }
  ],
  "counters": [
    {
      "text": "Peu mobile sans sa monture : descendue de cheval, elle est lente et prend cher si l'échange tourne mal.",
      "video": "JKcvLZu9tzU",
      "t": "3:26"
    },
    {
      "text": "Son ultime n'interrompt pas les canalisations et n'empêche ni attaques ni sorts : on peut agir dedans et en sortir.",
      "video": "JKcvLZu9tzU",
      "t": "3:00"
    }
  ],
  "mechanics": [
    {
      "key": "q",
      "text": "Brise les boucliers ; toucher soigne l'allié lié d'un pourcentage de ses PV manquants, d'autant plus qu'il y a d'ennemis touchés.",
      "video": "JKcvLZu9tzU",
      "t": "1:25"
    }
  ]
},
  renata: {
  "retrieved": "2026-09-13",
  "strengths": [
    {
      "text": "Enchanteresse proactive qui gagne le combat avant qu'il commence : enchaîner Q (immobilisation puis projection), ralentissements et boucliers.",
      "video": "s-mIkra2wUI",
      "t": "3:23"
    },
    {
      "text": "Mécénat ressuscite un allié quelques secondes avec vitesse d'attaque et de déplacement : une élimination pendant ce sursis le soigne — ses alliés peuvent tout risquer.",
      "video": "s-mIkra2wUI",
      "t": "1:56"
    },
    {
      "text": "Son ultime retourne l'équipe ennemie contre elle-même : les berserk attaquent d'abord leurs coéquipiers.",
      "video": "s-mIkra2wUI",
      "t": "2:49"
    }
  ],
  "counters": [
    {
      "text": "Mobilité faible et peu de moyens de fuir : engagée au mauvais moment, elle ne se sort pas d'un mauvais investissement.",
      "video": "s-mIkra2wUI",
      "t": "3:43"
    },
    {
      "text": "Son ultime se contourne en s'écartant les uns des autres : un berserk sans coéquipier à portée remonte la chaîne jusqu'à ses propres alliés.",
      "video": "s-mIkra2wUI",
      "t": "2:53"
    }
  ],
  "mechanics": [
    {
      "key": "passive",
      "text": "Une seule cible marquée à la fois ; un allié fait exploser la marque.",
      "video": "s-mIkra2wUI",
      "t": "1:05"
    },
    {
      "key": "q",
      "text": "La cible jetée blesse les ennemis percutés ; un champion jeté les étourdit aussi.",
      "video": "s-mIkra2wUI",
      "t": "1:26"
    }
  ]
},
  senna: {
  "retrieved": "2026-09-13",
  "strengths": [
    {
      "text": "Première tireuse-soutien : sa puissance monte toute la partie avec la Brume noire récoltée (dégâts, portée, critique).",
      "video": "2WanNkQohUw",
      "t": "0:30"
    },
    {
      "text": "Elle soutient de loin en sécurité : rayon qui blesse et soigne, camouflage de zone pour surprendre ou fuir, ultime à travers toute la carte qui protège les alliés et finit un combat depuis n'importe où.",
      "video": "2WanNkQohUw",
      "t": "2:25"
    },
    {
      "text": "Préfère se cacher et frapper par surprise : jouer à cache-cache avec son camouflage.",
      "video": "2WanNkQohUw",
      "t": "2:52"
    }
  ],
  "counters": [
    {
      "text": "Elle doit rester derrière ses alliés : à l'avant, personne à soigner et pas de suite possible.",
      "video": "2WanNkQohUw",
      "t": "2:50"
    },
    {
      "text": "Sa puissance dépend de la Brume récoltée : la priver de récolte tôt retarde toute sa partie.",
      "video": "2WanNkQohUw",
      "t": "0:47"
    },
    {
      "text": "Attaquer brise son camouflage ; les compétences à viser la touchent dans le voile même sans la révéler.",
      "video": "2WanNkQohUw",
      "t": "1:50"
    }
  ],
  "mechanics": [
    {
      "key": "passive",
      "text": "Toucher un adversaire deux fois pose une Brume ; les ennemis vaincus laissent une âme à attaquer pour la récolter.",
      "video": "2WanNkQohUw",
      "t": "0:47"
    },
    {
      "key": "q",
      "text": "Lançable sur n'importe quelle cible, y compris une balise, pour toucher hors de portée ou l'invisible ; le délai est réduit par ses attaques.",
      "video": "2WanNkQohUw",
      "t": "1:11"
    },
    {
      "key": "e",
      "text": "Les alliés qui sortent du voile deviennent des spectres impossibles à cibler jusqu'à leur prochaine action.",
      "video": "2WanNkQohUw",
      "t": "1:46"
    }
  ]
},
  sett: {
  "retrieved": "2026-09-13",
  "strengths": [
    {
      "text": "Régénère d'autant plus qu'il subit des dégâts, et convertit les dégâts encaissés en un W à dégâts bruts avec bouclier : plus on le frappe, plus il rend.",
      "video": "929kWOKnILY",
      "t": "0:36"
    },
    {
      "text": "Q réinitialise l'attaque et enchaîne des volées de coups ; E étourdit en cognant deux ennemis l'un contre l'autre ; R écrase un champion, d'autant plus fort qu'il a de PV bonus — viser les costauds.",
      "video": "929kWOKnILY",
      "t": "2:48"
    },
    {
      "text": "Son combo de patron : ultime sur le tank en le jetant sur le carry, E pour les concasser ensemble, puis un énorme W.",
      "video": "929kWOKnILY",
      "t": "3:37"
    }
  ],
  "counters": [
    {
      "text": "Tout tient à son jeu de jambes : il doit être au contact pour Q et près des sbires pour ses combos — le tenir à distance le désarme.",
      "video": "929kWOKnILY",
      "t": "3:02"
    },
    {
      "text": "Son W a un temps d'incantation et s'annonce (agressivité au-dessus de 90 %) : s'écarter du centre pour ne prendre que les dégâts des côtés.",
      "video": "929kWOKnILY",
      "t": "1:20"
    },
    {
      "text": "Son E n'étourdit que s'il attrape des ennemis des deux côtés ; d'un seul côté, il ralentit seulement.",
      "video": "929kWOKnILY",
      "t": "2:19"
    }
  ],
  "mechanics": [
    {
      "key": "passive",
      "text": "Les poings alternent : le droit est plus rapide et plus fort.",
      "video": "929kWOKnILY",
      "t": "0:47"
    },
    {
      "key": "e",
      "text": "Fonctionne sur champions, sbires et monstres : un sbire suffit pour étourdir un champion contre lui.",
      "video": "929kWOKnILY",
      "t": "2:24"
    }
  ]
},
  yone: {
  "retrieved": "2026-09-13",
  "strengths": [
    {
      "text": "Deux types de dégâts (physique et magique une attaque sur deux) : difficile à contrer par un seul type de résistance ; la vitesse d'attaque réduit ses délais de Q et de W.",
      "video": "JRXJsAy4vtc",
      "t": "0:27"
    },
    {
      "text": "Il prend l'avantage en lane en préparant la projection du Q puis en échangeant sous forme d'esprit avant de revenir en sûreté ; en milieu et fin de partie, E puis R pour atteindre les tireurs à travers les murs.",
      "video": "JRXJsAy4vtc",
      "t": "1:04"
    },
    {
      "text": "Son ultime attire tous les ennemis d'une ligne derrière lui : parfait pour les combos d'équipe.",
      "video": "JRXJsAy4vtc",
      "t": "2:07"
    }
  ],
  "counters": [
    {
      "text": "Son corps reste là où il l'a laissé : le punir au retour, quand il revient au milieu de ce qu'il a quitté.",
      "video": "JRXJsAy4vtc",
      "t": "1:49"
    },
    {
      "text": "Son ultime s'arrête au dernier champion touché ; sans champion touché, il traverse toute la distance et se retrouve exposé.",
      "video": "JRXJsAy4vtc",
      "t": "2:18"
    },
    {
      "text": "Son W donne un bouclier plus fort s'il touche plusieurs champions : ne pas se regrouper devant lui.",
      "video": "JRXJsAy4vtc",
      "t": "1:21"
    }
  ],
  "mechanics": [
    {
      "key": "passive",
      "text": "Chances de coup critique doublées mais dégâts critiques réduits.",
      "video": "JRXJsAy4vtc",
      "t": "0:37"
    },
    {
      "key": "w",
      "text": "Dégâts en pourcentage des PV max ; bouclier plus fort par champion touché.",
      "video": "JRXJsAy4vtc",
      "t": "1:11"
    },
    {
      "key": "e",
      "text": "Le corps laissé derrière est impossible à cibler ; au retour, une part des dégâts infligés sous forme d'esprit est répétée.",
      "video": "JRXJsAy4vtc",
      "t": "1:34"
    }
  ]
},
  zaahen: {
  "retrieved": "2026-09-13",
  "strengths": [
    {
      "text": "Combattant qui plonge dans n'importe quelle mêlée et devient plus fort tant que le combat dure : chaque coup sur un champion monte sa Détermination.",
      "video": "RmOIWTl3spM",
      "t": "0:11"
    },
    {
      "text": "À pleine Détermination, son bonus double et la prochaine mort le ramène à la vie : il défie la mort et la défaite dans les combats prolongés.",
      "video": "RmOIWTl3spM",
      "t": "2:05"
    },
    {
      "text": "Son ultime le fait retomber dans la mêlée et gagne de la Détermination par champion touché : lancé au bon moment, il renverse un combat.",
      "video": "RmOIWTl3spM",
      "t": "1:49"
    }
  ],
  "counters": [
    {
      "text": "Une menace sur la durée : se dégager vite d'un combat prolongé, ou le tuer avant qu'il atteigne sa pleine Détermination.",
      "video": "RmOIWTl3spM",
      "t": "2:15"
    },
    {
      "text": "Très dépendant de ses attaques de base, plus encore que les autres combattants : aveuglement, parade et réduction de vitesse d'attaque le désarment.",
      "video": "RmOIWTl3spM",
      "t": "0:57"
    },
    {
      "text": "Ses cumuls demandent de toucher des champions : ne pas lui offrir d'échanges gratuits en lane.",
      "video": "RmOIWTl3spM",
      "t": "0:26"
    }
  ],
  "mechanics": [
    {
      "key": "q",
      "text": "Relancé dans les quatre secondes, l'attaque suivante projette en l'air ; le premier coup soigne en pourcentage des PV max.",
      "video": "RmOIWTl3spM",
      "t": "0:50"
    },
    {
      "key": "w",
      "text": "Cumule le passif deux fois par cible (coup puis attraction) et frappe plusieurs ennemis.",
      "video": "RmOIWTl3spM",
      "t": "1:12"
    },
    {
      "key": "e",
      "text": "Les ennemis en bordure de portée subissent plus de dégâts.",
      "video": "RmOIWTl3spM",
      "t": "1:26"
    }
  ]
},
};
