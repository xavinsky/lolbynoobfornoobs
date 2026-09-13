const DDRAGON_VERSION = "16.17.1";
const CHAMPIONS = [
  {
    "id": "aatrox",
    "key": "0266",
    "ddid": "Aatrox",
    "name": "Aatrox",
    "title": "Épée des Darkin",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 49.43,
        "pr": 5.9,
        "ban": 7.12
      },
      "jgl": {
        "tier": "A",
        "wr": 50.29,
        "pr": 1.14,
        "ban": 6.98
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 3
    },
    "class": "Combattant",
    "strengths": [
      "Utilisez Ruée obscure tout en lançant Épée des Darkin pour augmenter vos chances de toucher l'ennemi.",
      "Facilitez Épée des Darkin avec des compétences de contrôle de foule, telles que Chaînes infernales, ou avec les effets immobilisants de vos alliés.",
      "Lancez Fossoyeur des mondes quand vous êtes certain de pouvoir forcer le combat."
    ],
    "counters": [
      "Les attaques d'Aatrox sont prévisibles. Profitez-en pour esquiver ses zones d'impact.",
      "Il est plus facile de fuir les Chaînes infernales d'Aatrox en courant vers un côté ou vers Aatrox.",
      "Quand Aatrox utilise son ultime, gardez vos distances pour l'empêcher de revenir à la vie."
    ],
    "abilities": {
      "passive": {
        "name": "Posture du massacreur",
        "description": "Régulièrement, la prochaine attaque de base d'Aatrox inflige des <magicDamage>dégâts magiques</magicDamage> bonus et le soigne, selon un pourcentage des PV max de la cible.",
        "icon": "Aatrox_Passive.png"
      },
      "q": {
        "name": "Épée des Darkin",
        "description": "Aatrox abat son épée devant lui, infligeant des dégâts physiques. Il peut frapper jusqu'à 3 fois et chaque coup a une zone d'effet différente.",
        "icon": "AatroxQ.png"
      },
      "w": {
        "name": "Chaînes infernales",
        "description": "Aatrox frappe le sol, blessant le premier ennemi touché. Les champions et les grands monstres doivent vite quitter la zone d'effet sous peine d'être ramenés de force au point d'impact et de subir à nouveau les dégâts.",
        "icon": "AatroxW.png"
      },
      "e": {
        "name": "Ruée obscure",
        "description": "Passivement, Aatrox se soigne quand il blesse des champions ennemis. À l'activation, il se rue dans une direction.",
        "icon": "AatroxE.png"
      },
      "r": {
        "name": "Fossoyeur des mondes",
        "description": "Aatrox libère sa forme démoniaque, effrayant les sbires ennemis proches et augmentant ses dégâts d'attaque, ses soins et sa vitesse de déplacement. La durée est prolongée s'il participe à l'élimination d'un champion ennemi.",
        "icon": "AatroxR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2018-06-27",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/en/featured/champion-reveal-aatrox",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2018-06-27",
      "source": {
        "url": "https://na.leagueoflegends.com/en/featured/champion-reveal-aatrox",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Aatrox | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=Z_CPB6f79Bw",
        "published": "2018-06-26",
        "duration": 276
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Aatrox Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=0iiGWVhUqLA",
        "published": "2018-06-26",
        "duration": 276
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Aatrox Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=JLvgNzRpm6I",
        "published": "2024-10-18",
        "duration": 180
      }
    ],
    "releaseDate": "2013-06-13"
  },
  {
    "id": "ahri",
    "key": "0103",
    "ddid": "Ahri",
    "name": "Ahri",
    "title": "Renarde à neuf queues",
    "roles": {
      "mid": {
        "tier": "S",
        "wr": 50.88,
        "pr": 9.45,
        "ban": 3.1
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 3,
      "magic": 8
    },
    "class": "Mage / Assassin",
    "strengths": [
      "Utilisez Charme pour préparer vos combos, cela facilitera grandement l'utilisation d'Orbe d'illusion et de Lucioles.",
      "Initiez les combats d'équipe avec Charme et poursuivez les retardataires avec Assaut spirituel.",
      "Assaut spirituel ouvre la voie aux compétences d'Ahri, permet d'activer Charme, aide à frapper deux fois avec Orbe d'illusion et permet d'approcher pour utiliser Lucioles."
    ],
    "counters": [
      "Les capacités de survie d'Ahri sont considérablement réduites quand sa compétence ultime, Assaut spirituel, n'est pas disponible.",
      "Restez derrière les sbires pour éviter que Charme ne vous touche facilement. Cela réduit grandement le potentiel offensif d'Ahri."
    ],
    "abilities": {
      "passive": {
        "name": "Vol essentiel",
        "description": "Après avoir tué 9 sbires ou monstres, Ahri récupère des PV.<br>Après avoir participé à l'élimination d'un champion ennemi, Ahri récupère encore plus de PV.",
        "icon": "Ahri_SoulEater2.png"
      },
      "q": {
        "name": "Orbe d'illusion",
        "description": "Ahri lance son orbe et le ramène vers elle, infligeant des dégâts magiques à l'aller et des dégâts bruts au retour.",
        "icon": "AhriQ.png"
      },
      "w": {
        "name": "Lucioles",
        "description": "Ahri gagne un bref bonus en vitesse de déplacement et libère trois lucioles qui verrouillent et attaquent les ennemis proches.",
        "icon": "AhriW.png"
      },
      "e": {
        "name": "Charme",
        "description": "Ahri envoie un baiser qui blesse et charme le premier ennemi qu'il touche, interrompant immédiatement ses compétences de déplacement et le faisant marcher docilement vers elle.",
        "icon": "AhriE.png"
      },
      "r": {
        "name": "Assaut spirituel",
        "description": "Ahri se rue vers l'avant et tire des traits spirituels, infligeant des dégâts aux ennemis proches. Assaut spirituel peut être lancé jusqu'à 3 fois avant d'entrer en phase de récupération et Ahri gagne des réactivations en participant à l'élimination de champions ennemis.",
        "icon": "AhriR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Art and Sustainability Update",
        "date": "2023-02-09",
        "kitAffecting": false,
        "source": {
          "url": "https://www.leagueoflegends.com/en-pl/news/dev/dev-ahri-s-asu/",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2022-02-02",
        "kitAffecting": true,
        "source": {
          "url": "https://twitter.com/RiotAugust/status/1483922914625740802",
          "label": null
        }
      },
      {
        "type": "Visual (VFX) Update",
        "date": "2020-07-22",
        "kitAffecting": false,
        "source": {
          "url": "https://www.reddit.com/r/LeaguePBE/comments/hn0vih/ahri_and_udyr_vfx_updates/",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-09-25",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://oce.leagueoflegends.com/en/news/game-updates/patch/patch-417-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2022-02-02",
      "source": {
        "url": "https://twitter.com/RiotAugust/status/1483922914625740802",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Ahri: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=hlalkAUkwqE",
        "published": "2011-12-14",
        "duration": 394
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Ahri Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=dEN2HWhqwyY",
        "published": "2025-04-12",
        "duration": 180
      }
    ],
    "releaseDate": "2011-12-14"
  },
  {
    "id": "akali",
    "key": "0084",
    "ddid": "Akali",
    "name": "Akali",
    "title": "Assassine rebelle",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 49.22,
        "pr": 2.6,
        "ban": 15.84
      },
      "mid": {
        "tier": "B",
        "wr": 48.98,
        "pr": 5.68,
        "ban": 15.92
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 5,
      "magic": 8
    },
    "class": "Assassin",
    "strengths": [
      "Akali peut facilement tuer les champions fragiles. Laissez votre équipe engager le combat, puis frappez les adversaires en retrait.",
      "Linceul nébuleux vous protège même dans les situations les plus dangereuses. Profitez-en pour refaire le plein d'énergie avant de lancer un nouvel assaut."
    ],
    "counters": [
      "Quand Akali est occultée par Linceul nébuleux, elle peut toujours être touchée par les effets de zone. Cela révèle momentanément sa position.",
      "La Vague de kunais d'Akali est puissante quand elle est utilisée à portée maximale et avec le maximum d'énergie. Attaquez-la quand il lui reste peu d'énergie pour accroître vos chances de gagner vos échanges de coups.",
      "Rentrez à la base si vos PV sont bas et si Akali dispose de son ultime."
    ],
    "abilities": {
      "passive": {
        "name": "Marque d'assassin",
        "description": "Blesser un champion avec une compétence crée un cercle d'énergie autour de lui. Quitter ce cercle renforce la prochaine attaque d'Akali en augmentant sa portée et ses dégâts.",
        "icon": "Akali_P.png"
      },
      "q": {
        "name": "Vague de kunais",
        "description": "Akali lance cinq kunais, infligeant des dégâts selon ses dégâts d'attaque supplémentaires et sa puissance et ralentissant les ennemis.",
        "icon": "AkaliQ.png"
      },
      "w": {
        "name": "Linceul nébuleux",
        "description": "Akali crée un nuage de fumée et augmente brièvement sa vitesse de déplacement. Dans ce nuage, Akali est invisible et impossible à cibler. Si elle attaque ou utilise des compétences, elle est temporairement révélée.",
        "icon": "AkaliW.png"
      },
      "e": {
        "name": "Lancer acrobatique",
        "description": "Fait un salto arrière et lance un shuriken vers l'avant, infligeant des dégâts magiques. Le premier ennemi ou nuage de fumée touché est marqué. Réactivez la compétence pour vous ruer sur la cible marquée et infliger des dégâts supplémentaires.",
        "icon": "AkaliE.png"
      },
      "r": {
        "name": "Maîtrise absolue",
        "description": "Akali bondit dans une direction, blessant les ennemis qu'elle frappe. Réactivation : Akali se rue dans une direction, exécutant tous les ennemis qu'elle frappe.",
        "icon": "AkaliR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2018-07-31",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/en/featured/champion-reveal-akali",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2016-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/preseason-2017/assassins",
          "label": "Slayers: Assassins"
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-09-25",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://oce.leagueoflegends.com/en/news/game-updates/patch/patch-417-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2018-07-31",
      "source": {
        "url": "https://na.leagueoflegends.com/en/featured/champion-reveal-akali",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Akali | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=xJNGq6wAqe4",
        "published": "2018-07-31",
        "duration": 286
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Akali Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=b-s2YVbRP8I",
        "published": "2018-07-30",
        "duration": 286
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Akali Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=1wxi_Tg7cpA",
        "published": "2025-08-12",
        "duration": 180
      }
    ],
    "releaseDate": "2010-05-11"
  },
  {
    "id": "akshan",
    "key": "0166",
    "ddid": "Akshan",
    "name": "Akshan",
    "title": "Sentinelle rebelle",
    "roles": {
      "mid": {
        "tier": "B",
        "wr": 49.93,
        "pr": 2.21,
        "ban": 2.07
      }
    },
    "damageType": "Mixte",
    "dmgRating": {
      "attack": 0,
      "magic": 0
    },
    "class": "Tireur / Assassin",
    "strengths": [
      "Se jouant du danger, Akshan combat le mal sans jamais se départir de son charisme (il ne faut jamais sous-estimer l'importance de la cape) et de sa droiture. Il est passé maître dans l'art du combat furtif, ce qui lui permet d'échapper au regard de ses ennemis et de réapparaître lorsqu'ils s'y attendent le moins. À l'aide de son sens aigu de la justice et d'une arme légendaire défiant la mort elle-même, il redresse les torts des nombreux vauriens de Runeterra. Sa règle d'or : « ne sois pas crapuleux. »"
    ],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "Fourberie",
        "description": "Tous les trois coups venant de ses attaques ou de ses compétences, Akshan inflige des dégâts supplémentaires. Il gagne aussi un bouclier si la cible est un champion.<br><br>Quand Akshan attaque, il effectue une attaque supplémentaire qui inflige moins de dégâts. S'il annule l'attaque supplémentaire, il gagne à la place de la vitesse de déplacement.",
        "icon": "akshan_p.png"
      },
      "q": {
        "name": "Vengerang",
        "description": "Akshan lance un boomerang qui inflige des dégâts à l'aller et au retour. Sa portée augmente chaque fois qu'il touche un ennemi.",
        "icon": "AkshanQ.png"
      },
      "w": {
        "name": "Cavalier seul",
        "description": "Passivement, Akshan applique une marque Crapule sur les champions ennemis quand ils tuent des champions alliés. Si Akshan tue une Crapule, il ressuscite les alliés qu'elle a tués, gagne des PO supplémentaires et dissipe toutes les marques.<br><br>À l'activation, Akshan se camoufle. Il gagne aussi de la vitesse de déplacement et de la régénération du mana quand il se dirige vers des Crapules. Akshan perd rapidement son camouflage quand il est hors des hautes herbes ou loin des éléments de terrain.",
        "icon": "AkshanW.png"
      },
      "e": {
        "name": "Envolée héroïque",
        "description": "Akshan tire un grappin sur un élément de terrain et se balance autour. Pendant ce balancement, il tire à répétition sur l'ennemi le plus proche. Percuter un champion ou un élément de terrain le fait tomber de la corde, mais il peut aussi sauter de la corde prématurément.",
        "icon": "AkshanE.png"
      },
      "r": {
        "name": "Bien mérité !",
        "description": "Akshan se verrouille sur un champion ennemi et commence à stocker des balles. Quand il relâche la compétence, il tire toutes les balles stockées et inflige des dégâts selon les PV manquants du premier champion, sbire ou bâtiment touché.",
        "icon": "AkshanR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Akshan | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=G073xsqGu8A",
        "published": "2021-07-22",
        "duration": 256
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Akshan Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=Yrzk-24ZnPA",
        "published": "2021-07-22",
        "duration": 256
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Akshan Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=xvEICNdWA90",
        "published": "2026-05-27",
        "duration": 180
      }
    ],
    "releaseDate": "2021-07-22"
  },
  {
    "id": "alistar",
    "key": "0012",
    "ddid": "Alistar",
    "name": "Alistar",
    "title": "Minotaure",
    "roles": {
      "sup": {
        "tier": "A",
        "wr": 51.27,
        "pr": 4.95,
        "ban": 1.77
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 6,
      "magic": 5
    },
    "class": "Tank / Soutien",
    "strengths": [
      "Atomisation peut vous aider à mieux vous placer pour un Coup de tête.",
      "La vitesse de déplacement est très importante pour Alistar. Achetez les bonnes bottes.",
      "Saut éclair vous permet de surprendre votre cible ; repoussez-la ensuite vers vos alliés avec Atomisation et Coup de tête."
    ],
    "counters": [
      "Alistar peut être dangereux, mais il est solide et il est préférable de l'ignorer au profit de cibles plus fragiles.",
      "Attention à la combinaison Atomisation-Coup de tête à proximité des tourelles.",
      "Quand Alistar utilise son ultime, il est préférable de s'éloigner et d'attendre que l'effet se dissipe avant de l'attaquer."
    ],
    "abilities": {
      "passive": {
        "name": "Cri triomphant",
        "description": "Alistar charge son cri en étourdissant ou en déplaçant des champions ennemis ou quand des ennemis proches meurent. Quand le cri est pleinement chargé, Alistar se soigne et soigne tous les champions alliés proches.",
        "icon": "Alistar_E.png"
      },
      "q": {
        "name": "Atomisation",
        "description": "Alistar frappe le sol, infligeant des dégâts magiques aux ennemis proches et les projetant dans les airs.",
        "icon": "Pulverize.png"
      },
      "w": {
        "name": "Coup de tête",
        "description": "Alistar charge une cible, lui inflige des dégâts et la fait tomber à la renverse.",
        "icon": "Headbutt.png"
      },
      "e": {
        "name": "Piétinement",
        "description": "Alistar piétine les unités ennemies proches, ignorant les collisions avec les unités et gagnant un effet s'il blesse un champion ennemi. Au maximum d'effets cumulés, la prochaine attaque de base d'Alistar contre un champion ennemi infligera des dégâts magiques supplémentaires et étourdira la cible.",
        "icon": "AlistarE.png"
      },
      "r": {
        "name": "Volonté de fer",
        "description": "Alistar lâche un puissant rugissement, dissipant tous les effets de contrôle de foule qui l'affectent et réduisant les dégâts physiques et magiques subis pendant la durée d'effet.",
        "icon": "FerociousHowl.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual Update",
        "date": "2015-01-14",
        "kitAffecting": false,
        "source": {
          "url": "http://na.leagueoflegends.com/en/news/champions-skins/champion-update/champion-update-alistar",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2011-04-25",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://forums.na.leagueoflegends.com/board/showthread.php?t=692602",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2011-04-25",
      "source": {
        "url": "https://web.archive.org/web/0/http://forums.na.leagueoflegends.com/board/showthread.php?t=692602",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Rell | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=JKcvLZu9tzU",
        "published": "2020-12-10",
        "duration": 281
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Alistar Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=6tHx6vlqWNs",
        "published": "2026-03-13",
        "duration": 180
      }
    ],
    "releaseDate": "2009-02-21"
  },
  {
    "id": "ambessa",
    "key": "0799",
    "ddid": "Ambessa",
    "name": "Ambessa",
    "title": "Matriarche de guerre",
    "roles": {
      "top": {
        "tier": "B",
        "wr": 48.95,
        "pr": 4.03,
        "ban": 4.88
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 9,
      "magic": 0
    },
    "class": "Combattant / Assassin",
    "strengths": [],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "Ruée des chiens-dragons",
        "description": "Déclencher un déplacement ou une attaque lorsqu'elle lance une compétence permet à Ambessa de se ruer sur une courte distance une fois la compétence lancée. Cela octroie à sa prochaine attaque de la portée bonus, des dégâts bonus, de la vitesse d'attaque bonus, et lui rend de l'énergie.",
        "icon": "Icon_Ambessa_Passive.png"
      },
      "q": {
        "name": "Frappe fourbe / Frappe fracassante",
        "description": "Ambessa fait tourner ses doubles chiens-dragons en demi-cercle devant elle, infligeant des dégâts bonus aux ennemis touchés par les lames. Si elle touche un ennemi, elle transforme le prochain lancement de cette compétence pendant une courte période, ce qui lui permet de projeter ses doubles chiens-dragons en ligne droite devant elle, infligeant des dégâts bonus au premier ennemi touché.",
        "icon": "AmbessaQ.png"
      },
      "w": {
        "name": "Égide dévastatrice",
        "description": "Ambessa gagne un bouclier, se protège brièvement puis frappe le sol pour infliger des dégâts aux ennemis proches. Pendant qu'elle se protège, si elle bloque les dégâts d'unités autres qu'un sbire, cette compétence inflige des dégâts bonus.",
        "icon": "AmbessaW.png"
      },
      "e": {
        "name": "Lacération",
        "description": "Ambessa fait tourner ses doubles chiens-dragons autour d'elle, blessant et ralentissant les ennemis proches. Utiliser Ruée des chiens-dragons à partir de cette compétence déclenche une frappe supplémentaire à la fin de la ruée.",
        "icon": "AmbessaE.png"
      },
      "r": {
        "name": "Exécution publique",
        "description": "Ambessa se téléporte sur l'ennemi le plus éloigné sur une ligne droite de son choix, ce qui le neutralise à son arrivée. Elle le projette ensuite au sol pour lui infliger des dégâts et l'étourdir.",
        "icon": "AmbessaR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Ambessa (avec Mylon) | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=im8p40eoRyY",
        "published": "2024-11-07",
        "duration": 234
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Ambessa Champion Spotlight (feat. Mylon) | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=3dAb0HADFYU",
        "published": "2024-11-07",
        "duration": 234
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Ambessa Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=9kwT0VdVuS4",
        "published": "2024-11-05",
        "duration": 180
      }
    ],
    "releaseDate": "2024-11-06"
  },
  {
    "id": "amumu",
    "key": "0032",
    "ddid": "Amumu",
    "name": "Amumu",
    "title": "Momie mélancolique",
    "roles": {
      "jgl": {
        "tier": "A",
        "wr": 50.11,
        "pr": 2,
        "ban": 0.89
      },
      "sup": {
        "tier": "S",
        "wr": 51.81,
        "pr": 0.58,
        "ban": 0.83
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 2,
      "magic": 8
    },
    "class": "Tank / Soutien",
    "strengths": [
      "Amumu dépend beaucoup de ses équipiers ; essayez de rester à proximité de vos amis pour plus d'efficacité.",
      "Réduire les délais de récupération est une stratégie gagnante, mais difficile à mettre en œuvre. Profitez de l'enchantement de la sentinelle bleue autant que possible pour réduire les délais de récupération sans sacrifier d'autres stats.",
      "Désespoir est très efficace contre d'autres tanks, si vous êtes à portée des champions adverses ayant beaucoup de PV."
    ],
    "counters": [
      "N'approchez pas de vos alliés quand l'ultime d'Amumu est disponible.",
      "Il est difficile pour Amumu d'attaquer avec Jet de bandelette si vous vous déplacez erratiquement ou si vous vous cachez derrière des vagues de sbires.",
      "Désespoir rend dangereux l'achat d'objets augmentant les PV."
    ],
    "abilities": {
      "passive": {
        "name": "Toucher maudit",
        "description": "Les attaques de base d'Amumu <font color='#9b0f5f'>maudissent</font> ses ennemis, leur faisant subir des dégâts bruts supplémentaires chaque fois qu'ils subissent des dégâts magiques.",
        "icon": "Amumu_Passive.png"
      },
      "q": {
        "name": "Jet de bandelette",
        "description": "Amumu jette une bandelette collante qui étourdit et blesse l'ennemi touché tandis qu'Amumu s'approche de lui.",
        "icon": "BandageToss.png"
      },
      "w": {
        "name": "Désespoir",
        "description": "Saisis par l'angoisse, les ennemis proches perdent chaque seconde un pourcentage de leurs PV max et leurs <font color='#9b0f5f'>Malédictions</font> sont actualisées.",
        "icon": "AuraofDespair.png"
      },
      "e": {
        "name": "Colère",
        "description": "Les dégâts physiques subis par Amumu sont réduits. Amumu peut libérer sa rage pour infliger des dégâts aux ennemis proches. Chaque fois qu'Amumu est touché, le délai de récupération de Colère est réduit.",
        "icon": "Tantrum.png"
      },
      "r": {
        "name": "Malédiction d'Amumu",
        "description": "Amumu emmêle les ennemis proches dans des bandelettes, appliquant sa <keywordMajor>Malédiction</keywordMajor>, leur infligeant des dégâts et les étourdissant.",
        "icon": "CurseoftheSadMummy.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2019-06-12",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://boards.na.leagueoflegends.com/en/c/developer-corner/cRIFiyaO-vfx-updates-for-amumu-lulu-tryndamere-and-ziggs",
          "label": null
        }
      }
    ],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Milio | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=BYg-4ZtitqM",
        "published": "2023-03-22",
        "duration": 293
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Rammus: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=aeU2b9s-ZVw",
        "published": "2011-12-20",
        "duration": 432
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Amumu Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=X8oVKppC-Pc",
        "published": "2025-09-20",
        "duration": 180
      }
    ],
    "releaseDate": "2009-06-26"
  },
  {
    "id": "anivia",
    "key": "0034",
    "ddid": "Anivia",
    "name": "Anivia",
    "title": "Cryophénix",
    "roles": {
      "top": {
        "tier": "S",
        "wr": 51.34,
        "pr": 0.75,
        "ban": 2.45
      },
      "mid": {
        "tier": "B",
        "wr": 49.98,
        "pr": 2.32,
        "ban": 2.53
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 1,
      "magic": 10
    },
    "class": "Mage",
    "strengths": [
      "Coordonner Lance de glace avec Gelure peut mener à des combinaisons dévastatrices.",
      "En début de partie, l'œuf peut être très difficile à tuer pour les champions adverses. Profitez-en en jouant très agressivement."
    ],
    "counters": [
      "Essayez de faire un gank sur Anivia sur une voie. Avec plusieurs personnes, il est plus facile de s'assurer que son œuf meure.",
      "Si vous jouez un champion à distance, rester assez loin d'Anivia vous permet d'esquiver Lance de glace plus facilement.",
      "Essayez de combattre Anivia dans les voies. Dans la jungle, elle peut bloquer les chemins avec Cristallisation."
    ],
    "abilities": {
      "passive": {
        "name": "Renaissance",
        "description": "Quand elle subit des dégâts mortels, Anivia se transforme en œuf et revient à la vie avec tous ses PV.",
        "icon": "Anivia_P.png"
      },
      "q": {
        "name": "Lance de glace",
        "description": "Anivia invoque une sphère de glace qui fonce vers ses adversaires, gelant et blessant tout le monde sur son passage. Quand la sphère explose, quiconque est à proximité est blessé et étourdi.",
        "icon": "FlashFrost.png"
      },
      "w": {
        "name": "Cristallisation",
        "description": "En utilisant l'humidité de l'air, Anivia invoque un mur de glace impénétrable pour bloquer le passage. Le mur ne dure qu'un court moment avant de fondre.",
        "icon": "Crystallize.png"
      },
      "e": {
        "name": "Gelure",
        "description": "D'un mouvement d'ailes, Anivia lance une rafale de vent glacé vers sa cible, infligeant des dégâts. Si la cible a récemment été touchée par Lance de glace ou une Tempête glaciale à taille maximale, les dégâts sont doublés.",
        "icon": "Frostbite.png"
      },
      "r": {
        "name": "Tempête glaciale",
        "description": "Anivia invoque une pluie de glace et de grêle qui blesse ses ennemis et les ralentit.",
        "icon": "GlacialStorm.png"
      }
    },
    "sourceNotes": [
      {
        "field": "strengths",
        "note": "Conseil officiel « Anivia a besoin de beaucoup de mana pour Tempête glaciale, achetez donc des objets augmentant le mana ou (dans la Faille de l'invocateur) obtenez l'enchantement Cimier de la sentinelle bleue. » — nomme « Cimier de la sentinelle bleue », absent du kit actuel (noms et descriptions des sorts, Data Dragon 16.17.1) et des objets actuels (item.json) : conseil non affiché.",
        "url": "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
        "retrieved": "2026-09-08"
      }
    ],
    "reworkHistory": [
      {
        "type": "Visual (VFX and SFX) Update",
        "date": "2018-12-05",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://boards.na.leagueoflegends.com/en/c/developer-corner/c4vYafPh-visual-and-sound-effects-update-anivia",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2016-05-04",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/mid-season-magic",
          "label": "Mages: Battlemages"
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2013-12-13",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://www.surrenderat20.net/2013/12/anivia-texture-update-in-315.html",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2016-05-04",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/mid-season-magic",
        "label": "Mages: Battlemages"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Anivia: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=8Syose1O568",
        "published": "2010-04-23",
        "duration": 444
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Anivia Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=SZwNzKCmXxQ",
        "published": "2025-10-10",
        "duration": 180
      }
    ],
    "releaseDate": "2009-07-10"
  },
  {
    "id": "annie",
    "key": "0001",
    "ddid": "Annie",
    "name": "Annie",
    "title": "Enfant des ténèbres",
    "roles": {
      "mid": {
        "tier": "A",
        "wr": 50.85,
        "pr": 1.8,
        "ban": 0.48
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 2,
      "magic": 10
    },
    "class": "Mage / Soutien",
    "strengths": [
      "Conserver un effet d'étourdissement pour son ultime peut permettre un retournement de situation.",
      "Achever des sbires avec Désintégration permet à Annie de farmer facilement en début de partie.",
      "Bouclier en fusion est pratique pour préparer un sort étourdissant ; il est souvent profitable d'y consacrer au moins 1 point en début de partie."
    ],
    "counters": [
      "L'ours d'Annie, Tibbers, brûle les ennemis autour de lui. Gardez vos distances quand il est invoqué.",
      "Le sort d'invocateur Châtiment peut aider à abattre Tibbers.",
      "Prudence quand un petit tourbillon blanc entoure Annie : cela signifie qu'elle peut vous étourdir."
    ],
    "abilities": {
      "passive": {
        "name": "Pyromanie",
        "description": "Après qu'Annie a utilisé 4 compétences, sa prochaine compétence offensive étourdit sa cible.<br><br>Annie commence la partie et réapparaît avec Pyromanie disponible.",
        "icon": "Annie_Passive.png"
      },
      "q": {
        "name": "Désintégration",
        "description": "Annie projette une boule d'énergie magique qui inflige des dégâts ; le coût en mana lui est rendu si l'attaque détruit la cible.",
        "icon": "AnnieQ.png"
      },
      "w": {
        "name": "Incinération",
        "description": "Annie projette un cône de flammes, infligeant des dégâts à tous les ennemis dans la zone.",
        "icon": "AnnieW.png"
      },
      "e": {
        "name": "Bouclier en fusion",
        "description": "Octroie à Annie ou à un allié un bonus en vitesse de déplacement et un bouclier, lequel blesse les ennemis qui lui lancent des attaques ou des compétences.",
        "icon": "AnnieE.png"
      },
      "r": {
        "name": "Invocation : Tibbers",
        "description": "Annie insuffle la vie à son ours Tibbers et inflige des dégâts aux unités dans la zone d'effet. Tibbers peut attaquer et brûle les ennemis proches de lui.",
        "icon": "AnnieR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2020-02-05",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://boards.na.leagueoflegends.com/en/c/developer-corner/cZEXMEPE-vfx-updates-for-annie-and-nautilus",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2016-05-04",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/mid-season-magic",
          "label": "Mages: Battlemages"
        }
      },
      {
        "type": "Visual Update",
        "date": "2013-01-31",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/board/showthread.php?t=3007268",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2016-05-04",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/mid-season-magic",
        "label": "Mages: Battlemages"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Annie Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=QbdDfKcHNVA",
        "published": "2026-03-26",
        "duration": 180
      }
    ],
    "releaseDate": "2009-02-21"
  },
  {
    "id": "aphelios",
    "key": "0523",
    "ddid": "Aphelios",
    "name": "Aphelios",
    "title": "Arme des Lunaris",
    "roles": {
      "adc": {
        "tier": "A",
        "wr": 49.3,
        "pr": 4.78,
        "ban": 1.41
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 6,
      "magic": 1
    },
    "class": "Tireur",
    "strengths": [
      "Chacune des armes d'Aphelios a ses propres forces. Essayez de trouver la situation parfaite pour vos armes actuelles."
    ],
    "counters": [
      "Chacune des armes d'Aphelios a ses propres faiblesses. Essayez d'exploiter celles qui bénéficieront le plus à votre champion. Attention à l'arme gravitationnelle violette ! Elle peut vous immobiliser."
    ],
    "abilities": {
      "passive": {
        "name": "Le Tueur et l'Oracle",
        "description": "Aphelios manie 5 armes de Lunari forgées par sa sœur Alune. Il peut en porter deux à la fois : une principale et une secondaire. Chaque arme possède une attaque de base et une compétence uniques. Les attaques et les compétences consomment les munitions de son arme. Lorsqu'il n'a plus de munitions, Aphelios jette son arme et Alune invoque la suivante (parmi les 5).",
        "icon": "ApheliosP.png"
      },
      "q": {
        "name": "Compétences d'arme",
        "description": "Aphelios a 5 compétences actives différentes, chacune liée à son arme principale :<br><br>Calibrum (fusil) : tire une balle à longue portée qui marque la cible et permet une seconde attaque à très longue portée.<br>Severum (pistolet-faux) : court rapidement en attaquant les ennemis proches avec les deux armes.<br>Gravitum (canon) : immobilise tous les ennemis ralentis par cette arme.<br>Infernum (lance-flammes) : frappe les ennemis dans un cône et les attaque avec l'arme secondaire.<br>Crescendum (chakram) : déploie une vigie qui attaque avec l'arme secondaire.<br>",
        "icon": "ApheliosQ_ClientTooltipWrapper.png"
      },
      "w": {
        "name": "Phase",
        "description": "Aphelios échange son arme principale avec son arme secondaire, ce qui remplace ses attaques de base ainsi que sa compétence active.",
        "icon": "ApheliosW.png"
      },
      "e": {
        "name": "Système de file d'armes",
        "description": "Aphelios n'a pas de troisième compétence. Cet emplacement lui indique la prochaine arme qu'Alune lui donnera. L'ordre des armes est toujours le même en début de partie, mais peut évoluer au fil de la partie. Lorsqu'une arme est à court de munitions, elle se place tout en bas de la rotation.",
        "icon": "ApheliosE_ClientTooltipWrapper.png"
      },
      "r": {
        "name": "Veille au clair de lune",
        "description": "Envoie un rayon de lune concentré qui explose au contact d'un champion ennemi. Applique l'effet unique de l'arme principale d'Aphelios.",
        "icon": "ApheliosR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Aphelios | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=SGhrIY_rqnA",
        "published": "2019-12-11",
        "duration": 356
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Aphelios Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=lDoeuuBRUFg",
        "published": "2019-12-11",
        "duration": 356
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Aphelios Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=ap1bnKh2Qf8",
        "published": "2025-02-06",
        "duration": 180
      }
    ],
    "releaseDate": "2019-12-11"
  },
  {
    "id": "ashe",
    "key": "0022",
    "ddid": "Ashe",
    "name": "Ashe",
    "title": "Archère de givre",
    "roles": {
      "adc": {
        "tier": "A",
        "wr": 50.37,
        "pr": 6.44,
        "ban": 1.8
      },
      "sup": {
        "tier": "D",
        "wr": 43.82,
        "pr": 0.75,
        "ban": 1.73
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 7,
      "magic": 2
    },
    "class": "Tireur / Soutien",
    "strengths": [
      "Lancez Flèche de cristal enchantée dans la direction vers laquelle vont les ennemis pour avoir plus de chances de toucher.",
      "Les flèches de Salve sont bloquées par le premier ennemi touché, alors gardez vos distances pour que vos flèches ne soient pas toutes interceptées par la première ligne ennemie.",
      "Rapace dévoile les unités dans les herbes hautes. Si un combat important se déroule dans la jungle, Rapace peut vous donner l'avantage."
    ],
    "counters": [
      "Ashe a peu d'options défensives, et c'est une cible idéale pour les ganks.",
      "Si Ashe n'a pas récemment utilisé Flèche de cristal enchantée, soyez prudent lorsque vous vous déplacez en solitaire sur la carte."
    ],
    "abilities": {
      "passive": {
        "name": "Tir givrant",
        "description": "Les attaques d'Ashe ralentissent ses cibles et infligent des dégâts supplémentaires aux cibles affectées.<br><br>Les coups critiques d'Ashe n'infligent pas de dégâts supplémentaires, mais ils appliquent un ralentissement renforcé.",
        "icon": "Ashe_P.png"
      },
      "q": {
        "name": "Concentration du ranger",
        "description": "Ashe génère des effets Concentration quand elle attaque. Une fois le maximum d'effets Concentration atteint, Ashe peut lancer Concentration du ranger pour consommer tous les effets, ce qui augmente temporairement sa vitesse d'attaque et transforme son attaque de base en une puissante volée de flèches pendant la durée de la compétence.",
        "icon": "AsheQ.png"
      },
      "w": {
        "name": "Salve",
        "description": "Ashe tire des flèches dans une zone conique pour infliger plus de dégâts. Elle applique aussi Tir givrant.",
        "icon": "Volley.png"
      },
      "e": {
        "name": "Rapace",
        "description": "Ashe envoie son faucon en reconnaissance à n'importe quel endroit de la carte.",
        "icon": "AsheSpiritOfTheHawk.png"
      },
      "r": {
        "name": "Flèche de cristal enchantée",
        "description": "Ashe tire un trait de glace en ligne droite. Si la flèche touche un champion ennemi, elle le blesse et l'étourdit, la durée de l'étourdissement augmentant avec la distance parcourue par la flèche. De plus, les unités ennemies proches subissent des dégâts et sont ralenties.",
        "icon": "EnchantedCrystalArrow.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2024-05-15",
        "kitAffecting": false,
        "source": {
          "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-14-10-notes/",
          "label": null
        }
      },
      {
        "type": "Visual (VFX) Update",
        "date": "2019-05-01",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://boards.na.leagueoflegends.com/en/c/developer-corner/F4ZuqAZ7-vfx-updates-for-ashe-blitzcrank-caitlyn-and-jax-plus-an-sfx-update-for-renekton",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2015-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
          "label": "Marksmen"
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2015-05-14",
        "kitAffecting": true,
        "source": {
          "url": "http://na.leagueoflegends.com/en/news/champions-skins/champion-update/champion-update-ashe-takes-aim-pbe",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-09-25",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://oce.leagueoflegends.com/en/news/game-updates/patch/patch-417-notes",
          "label": null
        }
      },
      {
        "type": "Visual Update",
        "date": "2012-05-22",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/board/showthread.php?p=24524743",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2015-11-10",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
        "label": "Marksmen"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Ashe: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=mSbMQ5xDnEg",
        "published": "2013-05-14",
        "duration": 398
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Ashe Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=hzKI5-YmUMs",
        "published": "2025-03-24",
        "duration": 180
      }
    ],
    "releaseDate": "2009-02-21"
  },
  {
    "id": "aurelionsol",
    "key": "0136",
    "ddid": "AurelionSol",
    "name": "Aurelion Sol",
    "title": "Forgeur d'étoiles",
    "roles": {
      "mid": {
        "tier": "A",
        "wr": 50.65,
        "pr": 1.84,
        "ban": 0.65
      },
      "adc": {
        "tier": "A",
        "wr": 51.94,
        "pr": 0.75,
        "ban": 0.63
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 2,
      "magic": 8
    },
    "class": "Mage",
    "strengths": [],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "Créateur cosmique",
        "description": "Les compétences d'Aurelion Sol qui blessent des ennemis lui octroient de la <font color='#3458eb'>poussière d'étoile</font>, laquelle améliore définitivement chacune de ses compétences.",
        "icon": "AurelionSolP.png"
      },
      "q": {
        "name": "Souffle de lumière",
        "description": "Aurelion Sol canalise son souffle de dragon pendant quelques secondes, ce qui blesse le premier ennemi touché et inflige des dégâts secondaires réduits aux ennemis proches. Pour chaque seconde de canalisation dirigée directement sur un ennemi, la compétence inflige des dégâts supplémentaires augmentés par la quantité de poussière d'étoile collectée. Si la cible est un champion, cette compétence collecte aussi de la poussière d'étoile.",
        "icon": "AurelionSolQ.png"
      },
      "w": {
        "name": "Vol astral",
        "description": "Aurelion Sol survole le terrain dans la direction ciblée. Pendant ce temps, il peut lancer d'autres compétences. Souffle de lumière n'a plus de délai de récupération ou de durée maximale de canalisation et inflige plus de dégâts pendant le vol.<br><br>Le délai de récupération restant de Vol astral est réduit chaque fois qu'un champion ennemi meurt peu après avoir été blessé par Aurelion Sol.<br><br>La poussière d'étoile augmente la portée maximale de Vol astral.",
        "icon": "AurelionSolW.png"
      },
      "e": {
        "name": "Trou noir",
        "description": "Aurelion Sol invoque un trou noir qui blesse les ennemis et les attire lentement vers son centre. Cette compétence octroie de la poussière d'étoile chaque fois qu'un ennemi meurt dans le trou noir et à chaque seconde qu'un champion ennemi passe dans le trou noir. Le centre du trou noir exécute les ennemis qui ont moins d'un certain pourcentage de leurs PV max. La poussière d'étoile augmente la taille du trou noir et le seuil d'exécution.",
        "icon": "AurelionSolE.png"
      },
      "r": {
        "name": "Étoile finale/Apocalypse",
        "description": "Étoile finale : Aurelion Sol fait s'abattre une étoile au sol. L'impact inflige des dégâts magiques et étourdit les ennemis tout en octroyant à Aurelion Sol de la poussière d'étoile pour chaque champion ennemi touché. Collecter suffisamment de poussière d'étoile transforme la prochaine Étoile finale d'Aurelion Sol en Apocalypse.<br><br>Apocalypse : Aurelion Sol fait s'abattre au sol une étoile géante, ce qui augmente considérablement la taille de la zone d'impact, augmente les dégâts infligés et projette les ennemis dans les airs au lieu de les étourdir. Une onde de choc s'étend ensuite à partir de la bordure de la zone d'impact, ce qui blesse et ralentit les ennemis touchés. La poussière d'étoile augmente la taille de la zone d'impact d'Étoile finale et d'Apocalypse.",
        "icon": "AurelionSolR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Comprehensive Gameplay Update",
        "date": "2023-02-09",
        "kitAffecting": true,
        "source": {
          "url": "https://www.leagueoflegends.com/en-us/news/dev/champion-roadmap-april-2022/",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Comprehensive Gameplay Update",
      "date": "2023-02-09",
      "source": {
        "url": "https://www.leagueoflegends.com/en-us/news/dev/champion-roadmap-april-2022/",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Aurelion Sol",
        "url": "https://www.youtube.com/watch?v=BucRKQIGi7Y",
        "published": "2016-03-23",
        "duration": 496
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Aurelion Sol: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=HM520graePQ",
        "published": "2016-03-23",
        "duration": 495
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Aurelion Sol Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=10mkuaBFngA",
        "published": "2025-11-13",
        "duration": 180
      }
    ],
    "releaseDate": "2016-03-24"
  },
  {
    "id": "aurora",
    "key": "0893",
    "ddid": "Aurora",
    "name": "Aurora",
    "title": "Sorcière d'entre les mondes",
    "roles": {
      "mid": {
        "tier": "B",
        "wr": 49.5,
        "pr": 1.91,
        "ban": 1.11
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 3,
      "magic": 8
    },
    "class": "Mage / Assassin",
    "strengths": [],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "Abjuration spirituelle",
        "description": "Aurora exorcise les esprits des ennemis qu'elle blesse avec ses compétences et ses attaques. Les esprits exorcisés la suivent et la soignent.",
        "icon": "AuroraPassive.png"
      },
      "q": {
        "name": "Maléfice",
        "description": "Aurora envoie un projectile qui maudit les ennemis touchés. Elle peut ensuite relancer la compétence pour attirer les maléfices actifs vers elle, ce qui blesse les ennemis touchés au passage.",
        "icon": "AuroraQ.png"
      },
      "w": {
        "name": "Derrière le voile",
        "description": "Aurora bondit dans la direction de son choix, entre dans le royaume spirituel en retombant, devient invisible et gagne de la vitesse de déplacement pendant un bref instant.",
        "icon": "AuroraW.png"
      },
      "e": {
        "name": "Sortilège",
        "description": "Aurora fait converger les royaumes, envoyant une boule de magie spirituelle qui inflige des dégâts magiques aux ennemis touchés et les ralentit. Après quoi, Aurora bondit en arrière pour se mettre à l'abri.",
        "icon": "AuroraE.png"
      },
      "r": {
        "name": "Entre les mondes",
        "description": "Aurora bondit dans la direction de son choix, ce qui libère une onde de choc qui blesse et ralentit tous les ennemis touchés. Elle crée ensuite une zone qui ralentit les ennemis à l'intérieur et permet à Aurora de se téléporter d'un bord à l'autre de la zone.",
        "icon": "AuroraR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Gameplay Update",
        "date": "2024-11-20",
        "kitAffecting": true,
        "source": {
          "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-14-23-notes/",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2024-11-20",
      "source": {
        "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-14-23-notes/",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Aurora | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=_nvwi4wRsvU",
        "published": "2024-07-18",
        "duration": 298
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Aurora Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=L8Za9xjMg84",
        "published": "2024-07-18",
        "duration": 298
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Aurora Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=0EGHogP67kA",
        "published": "2025-02-26",
        "duration": 180
      }
    ],
    "releaseDate": "2024-07-17"
  },
  {
    "id": "azir",
    "key": "0268",
    "ddid": "Azir",
    "name": "Azir",
    "title": "Empereur des sables",
    "roles": {
      "mid": {
        "tier": "C",
        "wr": 47.58,
        "pr": 1.77,
        "ban": 0.29
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 6,
      "magic": 8
    },
    "class": "Mage / Tireur",
    "strengths": [
      "Pensez à garder en réserve l'un des deux soldats stockés par Dresse-toi ! À moins d'attaquer en force, économisez toujours un soldat au cas où vous devriez vous échapper par un mur ou si vous avez mal placé un soldat et avez besoin de dégâts immédiatement.",
      "Sur votre voie, essayez de positionner vos soldats entre les sbires ennemis et le champion adverse. Ainsi, vous pourrez les utiliser pour donner le coup de grâce et pour projeter la menace vers votre adversaire direct.",
      "Partition impériale est avant tout une compétence défensive. Utilisez-la quand l'ennemi vous attaque, vous ou vos alliés. Souvenez-vous que votre équipe peut traverser la ligne de soldats de Partition impériale. Utilisez cet avantage quand les champions de mêlée ennemis vous prennent pour cible.",
      "Prenez votre envol !"
    ],
    "counters": [
      "Azir s'appuie sur ses soldats pour infliger des dégâts mais ne peut pas les déplacer à sa guise. Essayez de profiter des fenêtres pendant lesquelles ses soldats sont stationnaires.",
      "Azir fait d'énormes dégâts sur de longues périodes de temps mais ne dispose pas du puissant burst des autres mages. Essayez de l'écraser vite, avant qu'il ne puisse inverser le cours du combat.",
      "Les soldats de sable sont comme le feu : il ne faut pas rester au milieu."
    ],
    "abilities": {
      "passive": {
        "name": "Héritage de Shurima",
        "description": "Azir peut invoquer le Disque solaire depuis les ruines des tourelles ennemies ou alliées.",
        "icon": "Azir_Passive.png"
      },
      "q": {
        "name": "Sables conquérants",
        "description": "Azir envoie tous les soldats de sable vers une zone. Les soldats infligent des dégâts magiques aux ennemis qu'ils traversent et appliquent un ralentissement pendant 1 seconde.",
        "icon": "AzirQWrapper.png"
      },
      "w": {
        "name": "Dresse-toi !",
        "description": "Azir invoque un soldat de sable qui attaque les cibles proches à sa place, remplaçant son attaque de base contre les cibles situées à portée du soldat. Les attaques du soldat infligent des dégâts magiques aux ennemis sur une même ligne.",
        "icon": "AzirW.png"
      },
      "e": {
        "name": "Sables mouvants",
        "description": "Azir s'entoure brièvement d'un bouclier et fonce vers un de ses soldats de sable, blessant les ennemis touchés. S'il touche un champion ennemi, il prépare instantanément un nouveau soldat de sable et la ruée s'arrête.",
        "icon": "AzirEWrapper.png"
      },
      "r": {
        "name": "Partition impériale",
        "description": "Azir invoque un mur de soldats qui chargent vers l'avant, repoussant et blessant les ennemis.",
        "icon": "AzirR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Gameplay Update",
        "date": "2023-03-08",
        "kitAffecting": true,
        "source": {
          "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-13-5-notes/",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2023-03-08",
      "source": {
        "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-13-5-notes/",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur : Azir",
        "url": "https://www.youtube.com/watch?v=PonNjgKZzbw",
        "published": "2014-09-15",
        "duration": 552
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Azir: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=zqH4AA-KEgQ",
        "published": "2014-09-15",
        "duration": 550
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Azir Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=tBTmbzMGelU",
        "published": "2025-05-21",
        "duration": 180
      }
    ],
    "releaseDate": "2014-09-16"
  },
  {
    "id": "bard",
    "key": "0432",
    "ddid": "Bard",
    "name": "Bard",
    "title": "Gardien errant",
    "roles": {
      "sup": {
        "tier": "B",
        "wr": 49.19,
        "pr": 5.06,
        "ban": 2.56
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 4,
      "magic": 5
    },
    "class": "Soutien / Mage",
    "strengths": [
      "Il est important de collecter des carillons pour améliorer les attaques des Meeps, mais ne négligez pas votre partenaire de voie ! Tentez de faire une irruption fracassante sur votre voie en emmenant un allié sur votre Route magique.",
      "Laissez vos Dons du gardien se charger : ils rendent beaucoup plus de PV une fois leur potentiel max atteint.",
      "N'oubliez pas que les ennemis peuvent eux aussi emprunter vos Routes magiques et que votre ultime peut toucher vos alliés !"
    ],
    "counters": [
      "Les adversaires de Bard peuvent eux aussi emprunter la Route magique. Si vous croyez que c'est prudent, vous pouvez suivre Bard.",
      "Vous pouvez détruire les Dons du gardien de Bard en marchant dessus. Ne laissez pas ses alliés s'en emparer facilement.",
      "L'ultime de Bard, Destin tempéré, affecte les alliés, les ennemis, les monstres et les tourelles. Il peut parfois être avantageux de vous laisser toucher !"
    ],
    "abilities": {
      "passive": {
        "name": "Instinct du voyageur",
        "description": "<font color='#FF9900'>Meeps :</font> Bard attire des esprits inférieurs qui soutiennent ses attaques de base en infligeant des dégâts magiques supplémentaires. Quand Bard a collecté suffisamment de <font color='#cccc00'>carillons</font>, ses Meeps infligeront en plus des dégâts dans une zone et ralentiront les ennemis touchés.<br><br><font color='#FF9900'>Carillons :</font> d'antiques <font color='#cccc00'>carillons</font> que peut collecter Bard apparaissent aléatoirement. Ils lui font gagner de l'expérience, lui rendent du mana et lui octroient un bonus en vitesse de déplacement en dehors des combats.",
        "icon": "Bard_Passive.png"
      },
      "q": {
        "name": "Lien cosmique",
        "description": "Bard tire un projectile qui ralentit le premier ennemi touché et qui continue sur sa lancée. S'il touche un mur, il étourdit la cible initiale ; s'il touche un deuxième ennemi, il étourdit les deux cibles.",
        "icon": "BardQ.png"
      },
      "w": {
        "name": "Don du gardien",
        "description": "Révèle un sanctuaire de soin qui gagne en puissance pendant quelques secondes. Il disparaît après avoir soigné et accéléré le premier allié qui le touche.",
        "icon": "BardW.png"
      },
      "e": {
        "name": "Route magique",
        "description": "Bard ouvre un portail dans un élément du décor proche. Les alliés et les ennemis peuvent emprunter la route à sens unique ainsi créée en passant par le portail.",
        "icon": "BardE.png"
      },
      "r": {
        "name": "Destin tempéré",
        "description": "Bard envoie de l'énergie spirituelle dans une zone, ce qui met brièvement en stase toutes les unités et toutes les tourelles.",
        "icon": "BardR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Bard",
        "url": "https://www.youtube.com/watch?v=pK9Yqo1EL4s",
        "published": "2015-03-11",
        "duration": 623
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Bard: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=-tNDoXIYptk",
        "published": "2015-03-11",
        "duration": 617
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Bard Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=qdKbYVR-N2Y",
        "published": "2025-02-28",
        "duration": 180
      }
    ],
    "releaseDate": "2015-03-12"
  },
  {
    "id": "belveth",
    "key": "0200",
    "ddid": "Belveth",
    "name": "Bel'Veth",
    "title": "Impératrice du Néant",
    "roles": {
      "jgl": {
        "tier": "A",
        "wr": 50.28,
        "pr": 3.23,
        "ban": 6.47
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 4,
      "magic": 7
    },
    "class": "Combattant",
    "strengths": [],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "Mer de lavande ",
        "description": "Bel'Veth gagne définitivement des bonus cumulables en vitesse d'attaque après avoir tué des grands monstres, des grands sbires et des champions. Elle gagne aussi un bonus temporaire en vitesse d'attaque après avoir utilisé une compétence.",
        "icon": "Belveth_Passive.png"
      },
      "q": {
        "name": "Charge du Néant",
        "description": "Bel'Veth se rue dans la direction choisie et blesse tous les ennemis qu'elle traverse.",
        "icon": "BelvethQ.png"
      },
      "w": {
        "name": "Projection cinglante",
        "description": "Bel'Veth donne un coup de queue au sol, ce qui blesse, projette dans les airs et ralentit les ennemis.",
        "icon": "BelvethW.png"
      },
      "e": {
        "name": "Maelström impérial",
        "description": "Bel'Veth s'immobilise et canalise une tempête de coups autour d'elle qui cible l'ennemi ayant le moins de PV. De plus, elle gagne du vol de vie et de la réduction des dégâts.",
        "icon": "BelvethE.png"
      },
      "r": {
        "name": "Banquet infini",
        "description": "Bel'Veth consomme du corail du Néant. Elle prend alors sa véritable forme, ce qui augmente ses PV max, sa portée d'attaque et sa vitesse d'attaque. Consommer du corail du Néant généré par un monstre épique du Néant lui donne le pouvoir d'invoquer des rémoras du Néant.",
        "icon": "BelvethR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Bel'Veth | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=-0TQrqflWdw",
        "published": "2022-06-09",
        "duration": 401
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Bel’Veth Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=lZC0QV4N3OU",
        "published": "2022-06-09",
        "duration": 401
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Bel'Veth Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=_4143cxJIxI",
        "published": "2026-05-04",
        "duration": 180
      }
    ],
    "releaseDate": "2022-06-09"
  },
  {
    "id": "blitzcrank",
    "key": "0053",
    "ddid": "Blitzcrank",
    "name": "Blitzcrank",
    "title": "Golem de vapeur",
    "roles": {
      "sup": {
        "tier": "A",
        "wr": 51.36,
        "pr": 6.35,
        "ban": 11.8
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 4,
      "magic": 5
    },
    "class": "Tank / Soutien",
    "strengths": [
      "Une combo 1-2-3 avec Grappin propulsé, Poing d'acier et Champ de stase peut mettre à genoux n'importe quel adversaire isolé.",
      "Amenez un ennemi à portée de tir de votre tourelle avec le grappin de Blitzcrank, puis lancez Poing d'acier pour que la tourelle puisse l'attaquer plusieurs fois."
    ],
    "counters": [
      "La Barrière de mana de Blitzcrank lui octroie un bouclier quand il lui reste peu de PV.",
      "Restez derrière des sbires pour ne pas être saisi par le grappin de Blitzcrank. Son Grappin propulsé n'attrape que le premier ennemi rencontré."
    ],
    "abilities": {
      "passive": {
        "name": "Barrière de mana",
        "description": "Lorsqu'il lui reste peu de PV, Blitzcrank obtient un bouclier dont les PV dépendent de son mana.",
        "icon": "Blitzcrank_ManaBarrier.png"
      },
      "q": {
        "name": "Grappin propulsé",
        "description": "Blitzcrank tire sa main droite pour attraper un adversaire, lui infliger des dégâts et l'attirer vers lui.",
        "icon": "RocketGrab.png"
      },
      "w": {
        "name": "Surcharge",
        "description": "Blitzcrank entre en surcharge pour augmenter considérablement ses vitesses d'attaque et de déplacement. Il est temporairement ralenti à la fin de l'effet.",
        "icon": "Overdrive.png"
      },
      "e": {
        "name": "Poing d'acier",
        "description": "Blitzcrank charge son poing pour que sa prochaine attaque inflige le double de dégâts et projette la cible dans les airs.",
        "icon": "PowerFist.png"
      },
      "r": {
        "name": "Champ de stase",
        "description": "Les ennemis attaqués par Blitzcrank sont marqués et, après 1 sec, sont frappés par des éclairs. De plus, Blitzcrank peut activer cette compétence pour détruire les boucliers des ennemis proches, blessant ces ennemis et les réduisant brièvement au silence.",
        "icon": "StaticField.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2019-05-01",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://boards.na.leagueoflegends.com/en/c/developer-corner/F4ZuqAZ7-vfx-updates-for-ashe-blitzcrank-caitlyn-and-jax-plus-an-sfx-update-for-renekton",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-10-23",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-418-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Blitzcrank: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=WtmMC23DdT0",
        "published": "2011-08-15",
        "duration": 401
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Blitzcrank Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=G9q_spQoYBo",
        "published": "2025-06-10",
        "duration": 180
      }
    ],
    "releaseDate": "2009-09-02"
  },
  {
    "id": "brand",
    "key": "0063",
    "ddid": "Brand",
    "name": "Brand",
    "title": "Vengeur flamboyant",
    "roles": {
      "mid": {
        "tier": "B",
        "wr": 49.19,
        "pr": 0.65,
        "ban": 2.94
      },
      "adc": {
        "tier": "A",
        "wr": 51.66,
        "pr": 0.67,
        "ban": 2.9
      },
      "sup": {
        "tier": "B",
        "wr": 49.58,
        "pr": 2.48,
        "ban": 3.05
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 2,
      "magic": 9
    },
    "class": "Mage / Soutien",
    "strengths": [
      "Vous pouvez empêcher vos ennemis de rester à proximité de leurs sbires en enflammant ces derniers avec Conflagration.",
      "Les compétences de Brand peuvent servir à effectuer différentes combos pour maximiser les dégâts selon la situation.",
      "Pyrolyse rebondit aléatoirement sur les ennemis : utilisez-le de préférence sur de petits groupes pour que le sort rebondisse plusieurs fois sur la même cible."
    ],
    "counters": [
      "Brand doit utiliser une compétence pour initier son combo. Si vous esquivez Brûlure ou Colonne de flammes, vous interromprez sa routine.",
      "Pensez à vous éloigner de vos alliés lorsque vous le voyez incanter Pyrolyse. La vitesse du projectile est assez lente au début, ce qui laisse le temps de réagir.",
      "La compétence passive de Brand lui permet d'exceller contre les équipes regroupées. Ne restez pas tous au même endroit."
    ],
    "abilities": {
      "passive": {
        "name": "Flammes",
        "description": "Les compétences de Brand enflamment ses cibles, leur infligeant des dégâts en 4 sec (cumulable 3 fois). Si Brand tue un ennemi en flammes, il récupère du mana. Quand Flammes atteint son maximum d'effets cumulés sur un champion ou un grand monstre, Flammes devient instable et explose au bout de 2 sec, infligeant les effets de sort et d'énormes dégâts autour de la victime.",
        "icon": "BrandP.png"
      },
      "q": {
        "name": "Brûlure",
        "description": "Brand lance une boule de feu devant lui, infligeant des dégâts magiques. Si la cible est en flammes, Brûlure l'étourdit.",
        "icon": "BrandQ.png"
      },
      "w": {
        "name": "Colonne de flammes",
        "description": "Après un court délai, Brand crée une colonne de flammes dans la zone ciblée, infligeant des dégâts magiques aux unités ennemies qui s'y trouvent. Les unités qui sont en flammes subissent 25% de dégâts supplémentaires.",
        "icon": "BrandW.png"
      },
      "e": {
        "name": "Conflagration",
        "description": "Brand provoque sur sa cible une puissante explosion qui se propage vers les ennemis proches, infligeant des dégâts magiques. Si la cible est en flammes, la portée de la dispersion de Conflagration est doublée.",
        "icon": "BrandE.png"
      },
      "r": {
        "name": "Pyrolyse",
        "description": "Brand libère un torrent de flammes qui rebondit jusqu'à 5 fois sur lui et les ennemis proches, infligeant des dégâts magiques aux ennemis touchés. Les rebonds visent en priorité les champions affectés par Flammes mais qui n'ont pas atteint le nombre d'effets max. Si une cible est en flammes, Pyrolyse la ralentit brièvement.",
        "icon": "BrandR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2024-01-24",
        "kitAffecting": false,
        "source": {
          "url": "https://www.youtube.com/watch?v=3JohCbr3efk",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2016-05-04",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/mid-season-magic",
          "label": "Mages: Battlemages"
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2016-05-04",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/en/featured/mid-season-magic",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-10-23",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-418-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2016-05-04",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/mid-season-magic",
        "label": "Mages: Battlemages"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Brand: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=vvuAw6KNn2E",
        "published": "2011-04-12",
        "duration": 400
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Brand Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=akyq_TCfbkk",
        "published": "2025-10-14",
        "duration": 180
      }
    ],
    "releaseDate": "2011-04-12"
  },
  {
    "id": "braum",
    "key": "0201",
    "ddid": "Braum",
    "name": "Braum",
    "title": "Cœur de Freljord",
    "roles": {
      "sup": {
        "tier": "A",
        "wr": 52.07,
        "pr": 4.91,
        "ban": 4.95
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 3,
      "magic": 4
    },
    "class": "Tank / Soutien",
    "strengths": [
      "Collaborez avec vos alliés pour cumuler des effets Coups étourdissants. Encouragez-les à lancer des attaques de base contre les cibles marquées.",
      "Bondissez devant les alliés fragiles et protégez-les contre les projectiles avec Incassable.",
      "Fissure glaciale laisse une puissante zone de ralentissement. Placez-la de manière à couper les combats d'équipes et à ralentir l'approche ennemie."
    ],
    "counters": [
      "Braum doit infliger Morsure de l'hiver ou une attaque de base pour commencer à appliquer Coups étourdissants. S'il vous marque, éloignez-vous du combat avant d'être touché 3 fois de plus et d'être étourdi.",
      "L'ultime de Braum a un long délai d'incantation. Profitez de ce délai pour esquiver. Marcher sur la zone gelée vous ralentira, alors positionnez-vous de façon à ne pas devoir la traverser.",
      "Incassable offre une défense extrêmement puissante à Braum. Attendez la fin de son effet ou contournez cette défense."
    ],
    "abilities": {
      "passive": {
        "name": "Coups étourdissants",
        "description": "Les attaques de base de Braum appliquent Coups étourdissants. Une fois le premier effet appliqué, les attaques de base des <font color='#FFF673'>alliés</font> appliquent aussi l'effet Coups étourdissants. <br><br>À 4 effets cumulés, la cible est étourdie et elle subit des dégâts magiques. Pendant quelques secondes, la cible ne peut plus recevoir cet effet mais les attaques de Braum lui infligent des dégâts magiques supplémentaires.",
        "icon": "Braum_Passive.png"
      },
      "q": {
        "name": "Morsure de l'hiver",
        "description": "Braum projette des éclats de glace depuis son bouclier, ralentissant l'ennemi touché et lui infligeant des dégâts magiques.<br><br>Applique un effet <font color='#FFF673'>Coups étourdissants</font>.",
        "icon": "BraumQ.png"
      },
      "w": {
        "name": "Bouclier humain",
        "description": "Braum bondit vers le champion ou le sbire allié ciblé. À l'arrivée, Braum et l'allié gagnent de l'armure et de la résistance magique pendant quelques secondes.",
        "icon": "BraumW.png"
      },
      "e": {
        "name": "Incassable",
        "description": "Braum lève son bouclier dans une direction pendant plusieurs secondes, interceptant tous les projectiles et les détruisant quand ils le touchent. Il bloque complètement les dégâts de la première attaque et réduit les dégâts de toutes les attaques suivantes provenant de cette direction.",
        "icon": "BraumE.png"
      },
      "r": {
        "name": "Fissure glaciale",
        "description": "Braum frappe le sol, projetant en l'air les ennemis proches et ceux sur une ligne devant lui. Une fissure se crée sur cette ligne et ralentit les ennemis.",
        "icon": "BraumRWrapper.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur : Braum - Cœur de Freljord",
        "url": "https://www.youtube.com/watch?v=wYot-V8whvQ",
        "published": "2014-05-12",
        "duration": 585
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Braum: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=ajUghBnxZQA",
        "published": "2014-05-12",
        "duration": 568
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Braum Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=7KSY6Uv-q3A",
        "published": "2025-09-28",
        "duration": 180
      }
    ],
    "releaseDate": "2014-05-12"
  },
  {
    "id": "briar",
    "key": "0233",
    "ddid": "Briar",
    "name": "Briar",
    "title": "Faim insatiable",
    "roles": {
      "jgl": {
        "tier": "A",
        "wr": 50.87,
        "pr": 4.62,
        "ban": 8.8
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 9,
      "magic": 3
    },
    "class": "Combattant / Assassin",
    "strengths": [],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "Malédiction écarlate",
        "description": "Les attaques et compétences de Briar infligent un saignement cumulable qui la soigne d'une partie des dégâts qu'il inflige. Du fait de sa faim permanente, Briar manque de régénération naturelle des PV, mais moins elle a de PV, plus ses soins sont renforcés.",
        "icon": "BriarP.png"
      },
      "q": {
        "name": "À table !",
        "description": "Briar bondit sur une unité, et frappe les ennemis avec un méchant coup de pied, les étourdissant et brisant leur armure.",
        "icon": "BriarQ.png"
      },
      "w": {
        "name": "Folie sanguinaire / Juste un croc",
        "description": "Briar bondit en avant et fait éclater son pilori. Elle succombe à la Folie sanguinaire et poursuit sans relâche l'ennemi le plus proche (en priorisant les champions). Sous l'effet de la frénésie, ses vitesses de déplacement et d'attaque augmentent et ses attaques infligent des dégâts de zone autour de sa cible.<br><br>Briar peut réactiver la compétence pour prendre un CROC sur sa cible à sa prochaine attaque, ce qui inflige des dégâts supplémentaires en fonction des PV manquants et soigne Briar proportionnellement aux dégâts qu'elle inflige.",
        "icon": "BriarW.png"
      },
      "e": {
        "name": "Cri sanglant",
        "description": "Briar récupère ses esprits, se libère de la Folie sanguinaire et canalise son énergie dans un puissant cri qui inflige des dégâts et ralentit les ennemis. Lorsqu'elle charge son cri, les dégâts qu'elle subit sont réduits et elle se soigne d'une partie de ses PV max. Un cri entièrement chargé repousse les ennemis, inflige des dégâts supplémentaires et étourdit ceux qui touchent un mur.",
        "icon": "BriarE.png"
      },
      "r": {
        "name": "Vol mortel",
        "description": "Briar lance l'hémolithe de son pilori à travers la carte, marquant le premier champion ennemi touché comme sa proie. Briar vole jusqu'à lui, effrayant les autres ennemis proches à son arrivée, et entre dans un état d'hémomanie complète. Elle pourchasse sa proie jusqu'à la mort. Elle gagne les avantages de Folie sanguinaire ainsi que de l'armure, de la résistance magique, du vol de vie et de la vitesse de déplacement supplémentaires.",
        "icon": "BriarR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Briar | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=ublhdcnt4kk",
        "published": "2023-09-13",
        "duration": 335
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Briar Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=2QI2pfum47U",
        "published": "2023-09-13",
        "duration": 335
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Briar Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=x1Ig_RW5ntc",
        "published": "2025-05-23",
        "duration": 180
      }
    ],
    "releaseDate": "2023-09-14"
  },
  {
    "id": "caitlyn",
    "key": "0051",
    "ddid": "Caitlyn",
    "name": "Caitlyn",
    "title": "Shérif de Piltover",
    "roles": {
      "adc": {
        "tier": "A",
        "wr": 48.99,
        "pr": 15.2,
        "ban": 20.65
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 2
    },
    "class": "Tireur",
    "strengths": [
      "Utilisez les Piège-yordle en les déployant préventivement et en vous assurant d'en avoir un disponible pendant les combats.",
      "Évitez d'utiliser Tir chirurgical dans les grandes mêlées en équipe car il risque d'être bloqué par la mauvaise cible.",
      "Tirez Filet de calibre 90 loin de l'adversaire pour combler l'écart ou passer par-dessus des murs."
    ],
    "counters": [
      "Restez derrière les sbires alliés si Caitlyn vous harcèle avec Pacificateur de Piltover (les dégâts diminuent pour chaque cible subséquente).",
      "Vous pouvez intercepter le projectile de Tir chirurgical qui va frapper un allié en vous plaçant sur la trajectoire."
    ],
    "abilities": {
      "passive": {
        "name": "Tir dans la tête",
        "description": "Toutes les quelques attaques de base ou quand elle vise une cible prise dans un de ses pièges ou dans son filet, Caitlyn tire dans la tête de sa cible, infligeant des dégâts supplémentaires qui augmentent avec ses chances de coup critique. Contre les cibles prises au piège ou dans un filet, la portée du Tir dans la tête est doublée.",
        "icon": "Caitlyn_Headshot.png"
      },
      "q": {
        "name": "Pacificateur de Piltover",
        "description": "Caitlyn fait monter son fusil en puissance pendant 1 seconde pour effectuer un tir perforant qui inflige des dégâts physiques (les cibles consécutives subissent moins de dégâts).",
        "icon": "CaitlynQ.png"
      },
      "w": {
        "name": "Piège-yordle",
        "description": "Caitlyn pose un piège. Quand il est déclenché, il révèle et immobilise le champion ennemi pendant 1.5 sec, et il octroie un Tir dans la tête renforcé à Caitlyn.",
        "icon": "CaitlynW.png"
      },
      "e": {
        "name": "Filet de calibre 90",
        "description": "Caitlyn lance un filet lourd qui ralentit sa cible. Le recul projette Caitlyn en arrière.",
        "icon": "CaitlynE.png"
      },
      "r": {
        "name": "Tir chirurgical",
        "description": "Caitlyn prend son temps pour réaliser le tir parfait, infligeant d'importants dégâts à une cible unique et à très longue portée. Les champions ennemis peuvent intercepter la balle à la place de leur allié.",
        "icon": "CaitlynR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Art and Sustainability Update",
        "date": "2021-11-17",
        "kitAffecting": false,
        "source": {
          "url": "https://www.reddit.com/r/LeaguePBE/comments/qleb0v/pbe_bugs_feedback_thread_arcane_caitlyn_caitlyn/",
          "label": null
        }
      },
      {
        "type": "Visual (VFX) Update",
        "date": "2019-05-01",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://boards.na.leagueoflegends.com/en/c/developer-corner/F4ZuqAZ7-vfx-updates-for-ashe-blitzcrank-caitlyn-and-jax-plus-an-sfx-update-for-renekton",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2015-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
          "label": "Marksmen"
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2015-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-11-20",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-420-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2015-11-10",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
        "label": "Marksmen"
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Kalista",
        "url": "https://www.youtube.com/watch?v=9j8B37V4Z7E",
        "published": "2014-11-19",
        "duration": 574
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Caitlyn: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=KFNFY6-gaDA",
        "published": "2011-01-04",
        "duration": 359
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Caitlyn Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=LvSZoA_eQuE",
        "published": "2026-02-03",
        "duration": 180
      }
    ],
    "releaseDate": "2011-01-04"
  },
  {
    "id": "camille",
    "key": "0164",
    "ddid": "Camille",
    "name": "Camille",
    "title": "Ombre d'acier",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 50.93,
        "pr": 4.32,
        "ban": 5.63
      },
      "sup": {
        "tier": "C",
        "wr": 46.06,
        "pr": 2.44,
        "ban": 5.62
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 3
    },
    "class": "Combattant / Assassin",
    "strengths": [
      "Attendez que l'équipe adverse soit occupée à combattre vos équipiers, puis utilisez Grappin pour éliminer les cibles vulnérables.",
      "Utilisez les contrôles de foule de vos compétences pour frapper les ennemis avec les deux attaques de votre Protocole de précision."
    ],
    "counters": [
      "Le bouclier de Camille ne fonctionne que contre un type de dégâts à la fois, alors attaquez-la quand elle est vulnérable à vos dégâts.",
      "La portée d'incantation de l'Ultimatum Hextech est très courte. Essayez donc de faire un Saut éclair pour vous éloigner avant que Camille ne soit suffisamment proche."
    ],
    "abilities": {
      "passive": {
        "name": "Protection modulable",
        "description": "Les attaques de base contre les champions octroient à Camille un bouclier équivalent à un pourcentage de ses PV max contre le type de dégâts de l'ennemi (physique ou magique) pendant un court moment.",
        "icon": "Camille_Passive.png"
      },
      "q": {
        "name": "Protocole de précision",
        "description": "La prochaine attaque de Camille infligera des dégâts supplémentaires et lui octroiera un bonus en vitesse de déplacement. Cette compétence peut être relancée pendant un court instant, et Camille inflige des dégâts beaucoup plus importants si elle attend entre les deux attaques.",
        "icon": "CamilleQ.png"
      },
      "w": {
        "name": "Balayage tactique",
        "description": "Après un délai, Camille frappe dans une zone conique, infligeant des dégâts. Les ennemis pris dans la moitié extérieure du cône sont ralentis, subissent des dégâts supplémentaires et rendent des PV à Camille.",
        "icon": "CamilleW.png"
      },
      "e": {
        "name": "Grappin",
        "description": "Camille se propulse vers un mur et bondit, projetant en l'air tous les champions ennemis à l'atterrissage.",
        "icon": "CamilleE.png"
      },
      "r": {
        "name": "Ultimatum Hextech",
        "description": "Camille fonce vers le champion ciblé et l'emprisonne dans une zone. Ses attaques de base infligent aussi des dégâts magiques supplémentaires à la cible.",
        "icon": "CamilleR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Camille | Gameplay – League of Legends",
        "url": "https://www.youtube.com/watch?v=-nq7CFEgw4U",
        "published": "2016-12-11",
        "duration": 350
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Camille Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=YaNANTQH0zc",
        "published": "2016-12-11",
        "duration": 350
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Camille Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=YD348cJRnGc",
        "published": "2026-05-25",
        "duration": 180
      }
    ],
    "releaseDate": "2016-12-07"
  },
  {
    "id": "cassiopeia",
    "key": "0069",
    "ddid": "Cassiopeia",
    "name": "Cassiopeia",
    "title": "Étreinte du serpent",
    "roles": {
      "top": {
        "tier": "S",
        "wr": 51.03,
        "pr": 0.57,
        "ban": 1.84
      },
      "mid": {
        "tier": "B",
        "wr": 48.5,
        "pr": 1.77,
        "ban": 1.91
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 2,
      "magic": 9
    },
    "class": "Mage",
    "strengths": [
      "Utilisez Morsure fatale sur les cibles immobiles empoisonnées (comme les monstres et les unités étourdies par Regard de la Méduse) pour faire un maximum de dégâts.",
      "Attirez vos ennemis quand vous utilisez Bombe nocive pour ne pas rater votre coup."
    ],
    "counters": [
      "Si vous êtes empoisonné, attention aux dégâts potentiels qu'inflige Cassiopeia avec Morsure fatale.",
      "Tournez le dos à Cassiopeia quand elle lance Regard de la Méduse, afin d'être ralenti plutôt qu'étourdi."
    ],
    "abilities": {
      "passive": {
        "name": "Grâce serpentine",
        "description": "Tous les bonus en vitesse de déplacement sont plus efficaces sur Cassiopeia.",
        "icon": "Cassiopeia_Passive.png"
      },
      "q": {
        "name": "Bombe nocive",
        "description": "Cassiopeia projette du poison dans une zone après un court délai, augmentant sa vitesse de déplacement si elle touche un champion ennemi.",
        "icon": "CassiopeiaQ.png"
      },
      "w": {
        "name": "Miasmes",
        "description": "Cassiopeia génère plusieurs nuages de poison, ralentissant, rendant inertes et blessant légèrement les ennemis qui les traversent. Les ennemis inertes ne peuvent pas utiliser de compétence de déplacement.",
        "icon": "CassiopeiaW.png"
      },
      "e": {
        "name": "Morsure fatale",
        "description": "Cassiopeia lance une attaque qui inflige plus de dégâts aux cibles empoisonnées et qui lui rend des PV équivalents à un pourcentage des dégâts infligés. Si cette attaque tue sa cible, Cassiopeia regagne du mana.",
        "icon": "CassiopeiaE.png"
      },
      "r": {
        "name": "Regard de la Méduse",
        "description": "Les yeux de Cassiopeia déchaînent un tourbillon d'énergie magique qui étourdit les ennemis qui lui font face et ralentit ceux qui lui tournent le dos.",
        "icon": "CassiopeiaR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2020-05-28",
        "kitAffecting": false,
        "source": {
          "url": "https://twitter.com/Beardilocks/status/1258568789303586817",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2016-05-04",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/mid-season-magic",
          "label": "Mages: Battlemages"
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2016-05-04",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/en/featured/mid-season-magic",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) and Gameplay Update",
        "date": "2014-08-26",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-416-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2016-05-04",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/mid-season-magic",
        "label": "Mages: Battlemages"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Cassiopeia: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=neQNvEyuhPU",
        "published": "2010-12-14",
        "duration": 346
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Cassiopeia Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=pGMSEl6PTks",
        "published": "2026-08-29",
        "duration": 180
      }
    ],
    "releaseDate": "2010-12-14"
  },
  {
    "id": "chogath",
    "key": "0031",
    "ddid": "Chogath",
    "name": "Cho'Gath",
    "title": "Terreur noire",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 50.5,
        "pr": 2.98,
        "ban": 1.29
      },
      "jgl": {
        "tier": "A",
        "wr": 51.59,
        "pr": 2.98,
        "ban": 1.29
      },
      "mid": {
        "tier": "B",
        "wr": 49.95,
        "pr": 0.58,
        "ban": 1.24
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 3,
      "magic": 7
    },
    "class": "Tank / Mage",
    "strengths": [
      "Positionnez-vous de façon à tuer des sbires tout en harcelant les champions ennemis avec vos Piques vorpales.",
      "Si vous n'arrivez pas à dévorer les champions, mangez d'abord des sbires pour grossir un peu.",
      "Combiner Rupture et Carnivore contre les sbires est efficace pour récupérer des PV et du mana."
    ],
    "counters": [
      "Acheter quelques objets de PV réduit les chances que Cho'Gath ne vous tue rapidement.",
      "Empêchez Cho'Gath d'atteindre sa taille max.",
      "Un nuage de fumée indique la zone que va frapper Rupture. Restez à l'affût pour empêcher Cho'Gath de combiner ses compétences."
    ],
    "abilities": {
      "passive": {
        "name": "Carnivore",
        "description": "Lorsque Cho'Gath élimine une unité, il regagne des PV et du mana. Le nombre de PV et points de mana restaurés augmente avec le niveau de Cho'Gath.",
        "icon": "GreenTerror_TailSpike.png"
      },
      "q": {
        "name": "Rupture",
        "description": "Fracasse le sol de la zone ciblée et envoie les ennemis dans les airs, leur infligeant des dégâts et les ralentissant.",
        "icon": "Rupture.png"
      },
      "w": {
        "name": "Cri sauvage",
        "description": "Cho'Gath pousse un cri terrible dans une zone conique, infligeant des dégâts magiques et réduisant les ennemis au silence pendant quelques secondes.",
        "icon": "FeralScream.png"
      },
      "e": {
        "name": "Piques vorpales",
        "description": "Les attaques de Cho'Gath lancent des piques mortelles qui blessent et ralentissent tous les ennemis devant lui.",
        "icon": "VorpalSpikes.png"
      },
      "r": {
        "name": "Festin",
        "description": "Dévore une unité ennemie, infligeant d'importants dégâts bruts. Si la cible est tuée, Cho'Gath grandit et voit ses PV max augmenter.",
        "icon": "Feast.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2018-02-07",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/game-updates/patch/patch-83-notes#chogath-ability-vfx-updates",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2015-03-12",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://euw.leagueoflegends.com/en/news/game-updates/patch/patch-55-notes/",
          "label": null
        }
      }
    ],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Bel'Veth | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=-0TQrqflWdw",
        "published": "2022-06-09",
        "duration": 401
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Cho'Gath: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=GJ8QI_7puvU",
        "published": "2011-12-03",
        "duration": 475
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Cho'Gath Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=vZ3bsTH8_Zc",
        "published": "2024-09-21",
        "duration": 180
      }
    ],
    "releaseDate": "2009-06-26"
  },
  {
    "id": "corki",
    "key": "0042",
    "ddid": "Corki",
    "name": "Corki",
    "title": "Artilleur téméraire",
    "roles": {
      "adc": {
        "tier": "A",
        "wr": 49.57,
        "pr": 1.8,
        "ban": 0.28
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 6
    },
    "class": "Tireur / Mage",
    "strengths": [
      "Bombe au phosphore permet de révéler les ennemis qui se cachent dans des herbes hautes.",
      "Valkyrie peut aussi servir défensivement : essayez de l'utiliser pour fuir rapidement.",
      "Corki peut continuer d'attaquer pendant qu'il utilise Gatling. Maximiser Gatling est la clé pour maîtriser Corki."
    ],
    "counters": [
      "Gare au Barrage de projectiles de Corki. Les missiles infligent des dégâts de zone, ils peuvent donc vous toucher même si vous êtes derrière des sbires."
    ],
    "abilities": {
      "passive": {
        "name": "Munitions Hextech",
        "description": "Corki inflige des <trueDamage>dégâts bruts</trueDamage> bonus équivalents à un pourcentage des dégâts de ses attaques de base.",
        "icon": "Corki_RapidReload.png"
      },
      "q": {
        "name": "Bombe au phosphore",
        "description": "Corki tire une bombe éclairante à l'endroit visé, infligeant des dégâts magiques aux ennemis dans la zone. Cette attaque révèle pendant un temps les unités dans la zone.",
        "icon": "PhosphorusBomb.png"
      },
      "w": {
        "name": "Valkyrie",
        "description": "Corki franchit une courte distance, lâchant des bombes et créant une traînée de feu qui inflige des dégâts aux ennemis.",
        "icon": "CarpetBomb.png"
      },
      "e": {
        "name": "Gatling",
        "description": "La mitrailleuse de Corki tire rapidement dans une zone conique face à lui, infligeant des dégâts et réduisant l'armure et la résistance magique de l'ennemi.",
        "icon": "GGun.png"
      },
      "r": {
        "name": "Barrage de projectiles",
        "description": "Corki tire un projectile dans une direction. Il explose à l'impact et inflige des dégâts aux ennemis dans la zone. Corki stocke des projectiles sur la durée, jusqu'à un maximum donné. Un projectile sur 3 est une grosse Bertha qui inflige plus de dégâts.",
        "icon": "MissileBarrage.png"
      }
    },
    "sourceNotes": [
      {
        "field": "counters",
        "note": "Conseil officiel « Corki est vulnérable après l'utilisation de Valkyrie ou de Livraison spéciale, concentrez-vous sur lui s'il s'en sert en début de combat. » — nomme « Livraison spéciale », absent du kit actuel (noms et descriptions des sorts, Data Dragon 16.17.1) et des objets actuels (item.json) : conseil non affiché.",
        "url": "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
        "retrieved": "2026-09-08"
      }
    ],
    "reworkHistory": [
      {
        "type": "Gameplay Update",
        "date": "2024-05-15",
        "kitAffecting": true,
        "source": {
          "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-14-10-notes/",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2015-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
          "label": "Marksmen"
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2015-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-09-25",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://oce.leagueoflegends.com/en/news/game-updates/patch/patch-417-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2024-05-15",
      "source": {
        "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-14-10-notes/",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Corki: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=ABYix52iBj0",
        "published": "2011-09-07",
        "duration": 398
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Corki Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=UfMvxPeY48Y",
        "published": "2025-01-03",
        "duration": 180
      }
    ],
    "releaseDate": "2009-09-19"
  },
  {
    "id": "darius",
    "key": "0122",
    "ddid": "Darius",
    "name": "Darius",
    "title": "Main de Noxus",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 49.85,
        "pr": 7.17,
        "ban": 12.88
      },
      "jgl": {
        "tier": "A",
        "wr": 50.54,
        "pr": 0.77,
        "ban": 12.48
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 9,
      "magic": 1
    },
    "class": "Combattant / Tank",
    "strengths": [
      "Décimation est une puissante compétence pour harceler. Frappez un ennemi à la limite de votre portée pour en profiter au maximum.",
      "Les dégâts de Guillotine noxienne augmentent selon le nombre d'attaques que vous avez infligées auparavant. Utilisez Force de Noxus pour infliger un maximum de dégâts.",
      "Darius bénéficie grandement d'une survivabilité accrue. Plus vous prolongez un combat, plus il devient puissant."
    ],
    "counters": [
      "Lors du délai de récupération de Crampon, Darius est vulnérable au harcèlement.",
      "La capacité de Darius à s'échapper d'un combat est limitée. Si vous avez un avantage contre lui, profitez-en."
    ],
    "abilities": {
      "passive": {
        "name": "Plaie béante",
        "description": "Les attaques de Darius et ses compétences infligeant des dégâts font saigner les ennemis, ce qui leur inflige des dégâts physiques en 5 sec (cumulable 5 fois). Darius enrage et gagne un énorme bonus en dégâts d'attaque quand sa cible atteint le nombre max d'effets cumulés.",
        "icon": "Darius_Icon_Hemorrhage.png"
      },
      "q": {
        "name": "Décimation",
        "description": "Darius tend tous ses muscles et donne un coup circulaire avec sa hache. Les ennemis touchés par la lame subissent plus de dégâts que ceux touchés par la hampe. Darius récupère des PV en fonction du nombre de champions ennemis et de grands monstres touchés par la lame.",
        "icon": "DariusCleave.png"
      },
      "w": {
        "name": "Estropiaison",
        "description": "La prochaine attaque de Darius tranche une artère vitale de l'ennemi. Le saignement réduit la vitesse de déplacement de la cible.",
        "icon": "DariusNoxianTacticsONH.png"
      },
      "e": {
        "name": "Crampon",
        "description": "Darius aiguise sa hache, ce qui permet à ses dégâts physiques d'ignorer passivement un pourcentage de l'armure de la cible. À l'activation, Darius attire ses ennemis avec sa hache.",
        "icon": "DariusAxeGrabCone.png"
      },
      "r": {
        "name": "Guillotine noxienne",
        "description": "Darius saute sur un champion ennemi et donne un coup fatal, infligeant des dégâts bruts. Plus vous cumulez de Plaies béantes sur la cible, plus les dégâts augmentent. Si Guillotine noxienne tue la cible, son délai de récupération est annulé pendant un court moment.",
        "icon": "DariusExecute.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Class-scale Update",
        "date": "2015-08-26",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/page/gameplay-update-juggernauts",
          "label": "Fighters: Juggernauts"
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2015-08-26",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/page/gameplay-update-juggernauts",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2015-08-26",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/page/gameplay-update-juggernauts",
        "label": "Fighters: Juggernauts"
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur la mi-saison 2017",
        "url": "https://www.youtube.com/watch?v=gaquAGFcqkw",
        "published": "2017-05-01",
        "duration": 393
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Darius: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=0M15wr-5O18",
        "published": "2012-05-23",
        "duration": 394
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Darius Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=muYyKH-oUiY",
        "published": "2026-01-30",
        "duration": 180
      }
    ],
    "releaseDate": "2012-05-23"
  },
  {
    "id": "diana",
    "key": "0131",
    "ddid": "Diana",
    "name": "Diana",
    "title": "Mépris de la lune",
    "roles": {
      "jgl": {
        "tier": "B",
        "wr": 48.92,
        "pr": 2.81,
        "ban": 3.19
      },
      "mid": {
        "tier": "A",
        "wr": 50.51,
        "pr": 3.05,
        "ban": 3.19
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 7,
      "magic": 8
    },
    "class": "Combattant / Assassin",
    "strengths": [
      "Placer Croissant lunaire est très important, mais n'ayez pas peur de rater votre cible. Le délai de récupération est court et le coût en mana est faible.",
      "Pesez le pour et le contre : lancer Rush lunaire sans Clair de lune ou attendre de lancer un autre Croissant lunaire.",
      "Utilisez Attraction lunaire et Rush lunaire pour coller à vos cibles, et activez Lame sélène pour infliger plus de dégâts."
    ],
    "counters": [
      "Esquivez Croissant lunaire ou mettez-vous à l'abri si vous êtes affecté par Clair de lune.",
      "Les sphères de Corps célestes ne durent que quelques secondes. Évitez Diana et ne l'attaquez qu'une fois son bouclier dissipé.",
      "Diana peut être très agressive et utiliser Rush lunaire sans Clair de lune, mais vous pouvez la punir en la ralentissant ou en l'étourdissant si elle ne peut pas se repositionner."
    ],
    "abilities": {
      "passive": {
        "name": "Lame sélène",
        "description": "Tous les trois coups, Diana frappe les ennemis proches et leur inflige des dégâts magiques bonus. Après avoir lancé une compétence, Diana augmente sa vitesse d'attaque pendant 5 sec.",
        "icon": "Diana_Passive_LunarBlade.png"
      },
      "q": {
        "name": "Croissant lunaire",
        "description": "Libère une vague incurvée d'énergie lunaire, infligeant des dégâts magiques.<br><br>Inflige Clair de lune aux ennemis touchés, les révélant pendant 3 sec s'ils ne sont pas furtifs.",
        "icon": "DianaQ.png"
      },
      "w": {
        "name": "Corps célestes",
        "description": "Diana crée trois sphères qui explosent au contact des ennemis et infligent des dégâts dans une zone. Elle obtient aussi un bouclier temporaire qui absorbe les dégâts. Si les trois sphères explosent, le bouclier est renforcé.",
        "icon": "DianaOrbs.png"
      },
      "e": {
        "name": "Rush lunaire",
        "description": "Devient l'incarnation de la lune vengeresse et se rue sur un ennemi, infligeant des dégâts magiques.<br><br>Rush lunaire n'a pas de délai de récupération s'il permet de se ruer sur un ennemi affecté par Clair de lune. Tous les autres ennemis perdent l'effet Clair de lune, même s'ils n'ont pas été la cible de Rush lunaire.",
        "icon": "DianaTeleport.png"
      },
      "r": {
        "name": "Attraction lunaire",
        "description": "Diana révèle et attire tous les ennemis proches, puis les ralentit.<br><br>Si Diana attire au moins un champion ennemi, la lumière de la lune s'abat sur elle après un court délai, infligeant des dégâts magiques dans une zone autour d'elle. Les dégâts sont augmentés à chaque cible secondaire attirée.",
        "icon": "DianaR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) and Gameplay Update",
        "date": "2019-12-11",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/https://boards.na.leagueoflegends.com/en/c/developer-corner/V9wBw3nx-diana-changes-on-pbe",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual (VFX) and Gameplay Update",
      "date": "2019-12-11",
      "source": {
        "url": "https://web.archive.org/web/0/https://boards.na.leagueoflegends.com/en/c/developer-corner/V9wBw3nx-diana-changes-on-pbe",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Diana: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=H7WSLWcACiw",
        "published": "2012-08-07",
        "duration": 356
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Diana Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=OoVRtNJakO4",
        "published": "2025-10-30",
        "duration": 180
      }
    ],
    "releaseDate": "2012-08-07"
  },
  {
    "id": "drmundo",
    "key": "0036",
    "ddid": "DrMundo",
    "name": "Dr. Mundo",
    "title": "Dément de Zaun",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 49.81,
        "pr": 3.63,
        "ban": 2.7
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 5,
      "magic": 6
    },
    "class": "Tank / Combattant",
    "strengths": [
      "Visage spirituel améliore les soins prodigués par votre ultime et réduit le délai de récupération des capacités."
    ],
    "counters": [
      "Essayez de coordonner vos attaques les plus puissantes avec celles de vos alliés juste après que Dr. Mundo utilise son ultime ; si vous ne parvenez pas à le tuer assez vite, il soignera tous les dégâts qu'il a subis."
    ],
    "abilities": {
      "passive": {
        "name": "Il va où il veut",
        "description": "Dr. Mundo résiste au premier effet immobilisant qui l'affecte. En revanche, il perd des PV et laisse tomber une bonbonne chimique. Dr. Mundo peut la ramasser en marchant dessus, ce qui lui rend des PV et réduit le délai de récupération de cette compétence.<br><br>Dr. Mundo dispose aussi d'une régénération de PV considérablement accrue.<br>",
        "icon": "DrMundo_P.png"
      },
      "q": {
        "name": "Scie souillée",
        "description": "Dr. Mundo lance une scie à os souillée, ralentissant le premier ennemi touché et lui infligeant des dégâts selon ses PV actuels.",
        "icon": "DrMundoQ.png"
      },
      "w": {
        "name": "Défibrillateur",
        "description": "Dr. Mundo s'électrocute, infligeant des dégâts continus aux ennemis proches et stockant une partie des dégâts subis. À la fin de la durée ou à la réactivation, Dr. Mundo inflige une vague de dégâts aux ennemis proches. Si la vague touche un ennemi, Dr. Mundo récupère des PV équivalents à un pourcentage des dégâts stockés.",
        "icon": "DrMundoW.png"
      },
      "e": {
        "name": "Contusion",
        "description": "Passive - Dr. Mundo gagne des dégâts d'attaque bonus selon ses PV max.<br><br>Active - Dr. Mundo donne un violent coup avec sa sacoche « médicale », infligeant des dégâts supplémentaires selon ses PV manquants. Si la cible meurt sur le coup, elle est repoussée et elle inflige des dégâts aux ennemis qu'elle traverse.",
        "icon": "DrMundoE.png"
      },
      "r": {
        "name": "Dosage maximal",
        "description": "Dr. Mundo s'injecte des produits chimiques et récupère instantanément un pourcentage de ses PV manquants. Il gagne ensuite de la vitesse de déplacement et régénère une partie de ses PV max sur une longue durée.",
        "icon": "DrMundoR.png"
      }
    },
    "sourceNotes": [
      {
        "field": "strengths",
        "note": "Conseil officiel « Utiliser Sadisme au bon moment peut pousser les champions ennemis à vous attaquer, même quand ils ne sont pas assez forts pour vous éliminer. » — nomme « Sadisme », absent du kit actuel (noms et descriptions des sorts, Data Dragon 16.17.1) et des objets actuels (item.json) : conseil non affiché.",
        "url": "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
        "retrieved": "2026-09-08"
      },
      {
        "field": "counters",
        "note": "Conseil officiel « Essayez de lancer Embrasement quand Dr. Mundo utilise Sadisme pour annuler une bonne partie de ses soins. » — nomme « Sadisme », absent du kit actuel (noms et descriptions des sorts, Data Dragon 16.17.1) et des objets actuels (item.json) : conseil non affiché.",
        "url": "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
        "retrieved": "2026-09-08"
      },
      {
        "field": "strengths",
        "note": "Conseil officiel « Couperet souillé est très utile pour tuer les monstres neutres. Au lieu de rentrer à la base, éliminez-les en boucle jusqu'à pouvoir vous soigner avec votre ultime. » — nomme « Couperet souillé », absent du kit actuel (noms et descriptions des sorts, Data Dragon 16.17.1) et des objets actuels (item.json) : conseil non affiché.",
        "url": "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
        "retrieved": "2026-09-08"
      }
    ],
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2021-06-09",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/en-us/news/dev/dev-kicking-off-dr-mundo-s-vgu/",
          "label": null
        }
      },
      {
        "type": "Visual (VFX and SFX) Update",
        "date": "2018-12-05",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://boards.na.leagueoflegends.com/en/c/developer-corner/7cFYsLUT-visual-and-sound-effect-updates-anivia-dr-mundo-renekton-gragas-teemo",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2015-01-28",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://euw.leagueoflegends.com/en/news/game-updates/patch/patch-52-notes/",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2021-06-09",
      "source": {
        "url": "https://na.leagueoflegends.com/en-us/news/dev/dev-kicking-off-dr-mundo-s-vgu/",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Dr Mundo Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=2GUvw_ML_0M",
        "published": "2025-07-03",
        "duration": 180
      }
    ],
    "releaseDate": "2009-09-02"
  },
  {
    "id": "draven",
    "key": "0119",
    "ddid": "Draven",
    "name": "Draven",
    "title": "Glorieux exécuteur",
    "roles": {
      "adc": {
        "tier": "A",
        "wr": 49.52,
        "pr": 3.61,
        "ban": 10.75
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 9,
      "magic": 1
    },
    "class": "Tireur",
    "strengths": [
      "Si Draven ne bouge pas, Hache tournoyante tombe près de lui. La hache peut tomber sur lui, à sa gauche ou à sa droite.",
      "Si Draven bouge après avoir attaqué, Hache tournoyante va dans la direction de son déplacement. Profitez-en pour contrôler la direction de Hache tournoyante."
    ],
    "counters": [
      "Lancez vos compétences de tir vers l'endroit où atterrissent les Haches tournoyantes de Draven.",
      "Perturbez Draven pour qu'il fasse tomber ses haches. Si vous y parvenez, sa force diminue grandement."
    ],
    "abilities": {
      "passive": {
        "name": "League of Draven",
        "description": "Draven obtient l'Adoration de ses fans quand il rattrape une Hache tournoyante, quand il tue un sbire ou un monstre et quand il détruit une tourelle. Quand il tue des champions ennemis, Draven gagne des PO supplémentaires en fonction de l'Adoration cumulée.",
        "icon": "Draven_passive.png"
      },
      "q": {
        "name": "Hache tournoyante",
        "description": "La prochaine attaque de Draven infligera des dégâts physiques supplémentaires. Cette hache ricochera sur la cible et sera propulsée dans les airs. Si Draven l'attrape, il prépare automatiquement une autre Hache tournoyante. Draven peut avoir deux Haches tournoyantes simultanément.",
        "icon": "DravenSpinning.png"
      },
      "w": {
        "name": "Pulsion sanguinaire",
        "description": "Draven gagne des bonus en vitesse de déplacement et en vitesse d'attaque. Le bonus en vitesse de déplacement diminue rapidement sur la durée. Attraper une Hache tournoyante met fin au délai de récupération de Pulsion sanguinaire.",
        "icon": "DravenFury.png"
      },
      "e": {
        "name": "Division",
        "description": "Draven lance ses haches, infligeant des dégâts physiques aux cibles touchées et les repoussant sur le côté. Les cibles touchées sont ralenties.",
        "icon": "DravenDoubleShot.png"
      },
      "r": {
        "name": "Volée mortelle",
        "description": "Draven lance deux énormes haches pour infliger des dégâts physiques aux unités touchées. Volée mortelle fait demi-tour et revient vers Draven après avoir frappé un champion ennemi. Draven peut aussi réactiver cette compétence quand les haches sont en vol pour les faire revenir plus tôt. La compétence inflige moins de dégâts par unité touchée et est réinitialisée quand les haches font demi-tour. De plus, elle exécute les ennemis dont les PV sont inférieurs au nombre d'effets Adoration cumulés par Draven.",
        "icon": "DravenRCast.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Class-scale Update",
        "date": "2015-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
          "label": "Marksmen"
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2015-11-10",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
        "label": "Marksmen"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Draven: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=h5zyGj4Z0Sg",
        "published": "2012-06-05",
        "duration": 390
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Draven Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=yGrX94FBGtE",
        "published": "2025-09-02",
        "duration": 180
      }
    ],
    "releaseDate": "2012-06-06"
  },
  {
    "id": "ekko",
    "key": "0245",
    "ddid": "Ekko",
    "name": "Ekko",
    "title": "Fractureur du temps",
    "roles": {
      "jgl": {
        "tier": "A",
        "wr": 50.22,
        "pr": 4.06,
        "ban": 1.55
      },
      "mid": {
        "tier": "A",
        "wr": 50.16,
        "pr": 3.13,
        "ban": 1.55
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 5,
      "magic": 7
    },
    "class": "Assassin / Mage",
    "strengths": [
      "Chronofracture est un excellent outil de fuite, mais il peut également être redoutable en attaque. Ne sous-estimez pas les dégâts qu'il peut infliger.",
      "Si vous arrivez à déclencher RéZonance sur un champion ennemi, c'est un risque qui peut payer. Le bonus en vitesse de déplacement permet ensuite de s'échapper facilement.",
      "La ruée du Rush déphasé est très efficace pour profiter des autres compétences d'Ekko. Servez-vous-en pour frapper deux fois avec Rétrobang ou pour faire exploser Convergence parallèle."
    ],
    "counters": [
      "Ekko est nettement plus vulnérable quand son ultime n'est pas disponible. Pour savoir s'il peut lancer Chronofracture, regardez bien s'il laisse une traînée derrière lui.",
      "La zone d'étourdissement d'Ekko met 3 secondes à s'enclencher. Surveillez l'image qu'il produit au moment du lancer et essayez de deviner où la zone est placée.",
      "Le deuxième coup de Rétrobang inflige plus de dégâts que le premier, alors essayez de l'éviter."
    ],
    "abilities": {
      "passive": {
        "name": "RéZonance",
        "description": "Toutes les trois attaques ou compétences infligeant des dégâts sur une même cible, Ekko inflige des dégâts magiques supplémentaires. Si la cible est un champion, il gagne en plus un bref bonus en vitesse de déplacement.<br><br>",
        "icon": "Ekko_P.png"
      },
      "q": {
        "name": "Rétrobang",
        "description": "Ekko lance une grenade temporelle qui crée un champ de distorsion quand elle touche un champion ennemi, ralentissant toutes les unités prises à l'intérieur et leur infligeant des dégâts. Ensuite, la grenade se contracte et revient vers Ekko, infligeant des dégâts sur sa route.",
        "icon": "EkkoQ.png"
      },
      "w": {
        "name": "Convergence parallèle",
        "description": "Les attaques de base d'Ekko infligent des dégâts magiques supplémentaires aux champions dont les PV sont bas. Ekko peut lancer Convergence parallèle pour fracturer la ligne temporelle, créant après quelques secondes une anomalie qui ralentit les ennemis pris à l'intérieur. Si Ekko entre dans l'anomalie, il obtient un bouclier et étourdit les ennemis en suspendant dans le temps leur existence.",
        "icon": "EkkoW.png"
      },
      "e": {
        "name": "Rush déphasé",
        "description": "Ekko esquive tout en chargeant sa clepsydre-zéro. Sa prochaine attaque infligera des dégâts supplémentaires et le téléportera près de sa cible en distordant la réalité.",
        "icon": "EkkoE.png"
      },
      "r": {
        "name": "Chronofracture",
        "description": "Ekko fracture sa ligne du temps, ce qui le rend impossible à cibler et lui permet de retourner à un moment qui lui est plus favorable. Il retourne là où il était quelques secondes plus tôt et récupère un pourcentage des PV qu'il a perdus pendant ces quelques secondes. Les ennemis proches de sa zone d'arrivée subissent d'importants dégâts.",
        "icon": "EkkoR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Class-scale Update",
        "date": "2016-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/preseason-2017/assassins",
          "label": "Slayers: Assassins"
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2016-11-10",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/preseason-2017/assassins",
        "label": "Slayers: Assassins"
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur : Ekko",
        "url": "https://www.youtube.com/watch?v=mRyLUZid_0c",
        "published": "2015-05-27",
        "duration": 574
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Ekko: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=Cx-9Oi2xstA",
        "published": "2015-06-10",
        "duration": 574
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Ekko Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=ohZefuAqpuI",
        "published": "2025-08-26",
        "duration": 180
      }
    ],
    "releaseDate": "2015-05-29"
  },
  {
    "id": "elise",
    "key": "0060",
    "ddid": "Elise",
    "name": "Elise",
    "title": "Reine araignée",
    "roles": {
      "jgl": {
        "tier": "A",
        "wr": 50.43,
        "pr": 1.9,
        "ban": 1
      },
      "sup": {
        "tier": "A",
        "wr": 51.08,
        "pr": 0.65,
        "ban": 0.97
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 6,
      "magic": 7
    },
    "class": "Assassin / Mage",
    "strengths": [
      "La forme arachnéenne est efficace pour achever les ennemis affaiblis ; en forme humaine, Neurotoxine inflige plus de dégâts aux ennemis à qui il reste beaucoup de PV.",
      "En forme arachnéenne, les araignées attaquent la cible de la Morsure venimeuse d'Elise.",
      "La forme arachnéenne et ses compétences ne coûtent pas de mana ; servez-vous-en si vous voulez conserver votre mana."
    ],
    "counters": [
      "La forme arachnéenne d'Elise est plus dangereuse quand il vous manque beaucoup de PV ; sa forme humaine est plus puissante quand il vous reste beaucoup de PV.",
      "Suspension ne déplace Elise que vers le haut ou le bas, sauf si elle peut se laisser tomber sur une unité ennemie.",
      "Suspension a un long délai de récupération et Elise est donc vulnérable après son utilisation."
    ],
    "abilities": {
      "passive": {
        "name": "Reine araignée",
        "description": "Forme humaine : quand les compétences d'Elise touchent un ennemi, elle génère une araignée en sommeil.<br><br>Forme arachnéenne : les attaques de base infligent des dégâts magiques supplémentaires et rendent des PV à Elise.",
        "icon": "ElisePassive.png"
      },
      "q": {
        "name": "Neurotoxine/Morsure venimeuse",
        "description": "Forme humaine : inflige des dégâts en fonction des PV actuels de la cible.<br><br>Forme arachnéenne : fonce sur un ennemi et lui inflige des dégâts en fonction de ses PV manquants.",
        "icon": "EliseHumanQ.png"
      },
      "w": {
        "name": "Araignée explosive/Frénésie symbiotique",
        "description": "Forme humaine : libère une araignée gorgée de venin qui explose en approchant d'une cible.<br><br>Forme arachnéenne : Elise et ses araignées voient leur vitesse d'attaque augmentée.",
        "icon": "EliseHumanW.png"
      },
      "e": {
        "name": "Cocon/Suspension",
        "description": "Forme humaine : étourdit la première unité ennemie touchée et la révèle si elle n'est pas furtive.<br><br>Forme arachnéenne : Elise et ses araignées se suspendent dans les airs puis se laissent tomber sur l'ennemi ciblé. Après qu'Elise est retombée sur un ennemi, les dégâts supplémentaires et les soins de Reine araignée sont augmentés.",
        "icon": "EliseHumanE.png"
      },
      "r": {
        "name": "Forme arachnéenne",
        "description": "Se transforme en une terrifiante araignée, ce qui réduit sa portée d'attaque mais augmente sa vitesse de déplacement, la dote de nouvelles compétences et lui offre une horde d'araignées qui attaque ses ennemis.",
        "icon": "EliseR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2022-03-02",
        "kitAffecting": false,
        "source": {
          "url": "https://www.leagueoflegends.com/en-pl/news/game-updates/patch-12-5-notes/#patch-vfx-updates",
          "label": null
        }
      }
    ],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur la mi-saison 2017",
        "url": "https://www.youtube.com/watch?v=gaquAGFcqkw",
        "published": "2017-05-01",
        "duration": 393
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Elise: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=mOz4uDKs2dM",
        "published": "2012-10-26",
        "duration": 421
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Elise Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=BIMGAXXTpTk",
        "published": "2024-05-22",
        "duration": 180
      }
    ],
    "releaseDate": "2012-10-26"
  },
  {
    "id": "evelynn",
    "key": "0028",
    "ddid": "Evelynn",
    "name": "Evelynn",
    "title": "Démon sadique",
    "roles": {
      "jgl": {
        "tier": "A",
        "wr": 51.38,
        "pr": 2.38,
        "ban": 2.03
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 4,
      "magic": 7
    },
    "class": "Assassin / Mage",
    "strengths": [
      "Le délai d'amorçage de Séduction peut paraître long, mais le charme et la réduction de résistance magique donnent un avantage considérable à Evelynn.",
      "Quand vous êtes furtif, surveillez l'œil qui surplombe les champions ennemis. S'il est jaune, vous êtes sur le point d'être détecté. S'il est rouge, vous êtes détecté.",
      "Quand il vous reste peu de PV, vous pouvez profiter des soins et du camouflage d'Ombre démoniaque pour retourner au combat et surprendre vos adversaires."
    ],
    "counters": [
      "Acheter des Balises de vision peut vous aider à détecter Evelynn afin de prévoir ses embuscades.",
      "Le charme de Séduction représente une grande partie de la menace d'Evelynn. Protégez vos alliés marqués par Séduction ou, si vous êtes marqué, laissez des alliés entre vous et l'endroit d'où Evelynn risque d'attaquer.",
      "Si vous pensez qu'Evelynn risque de tendre une embuscade à vos équipiers, avertissez-les avec un signal sur la carte ou en l'écrivant."
    ],
    "abilities": {
      "passive": {
        "name": "Ombre démoniaque",
        "description": "En dehors des combats, Evelynn se plonge dans une Ombre démoniaque. Ombre démoniaque soigne Evelynn quand ses PV sont bas et lui octroie un camouflage à partir du niveau 6.",
        "icon": "Evelynn_Passive.png"
      },
      "q": {
        "name": "Piques de haine",
        "description": "Evelynn frappe avec son cirre et inflige des dégâts à la première unité touchée. Elle peut ensuite tirer une ligne de piques vers les ennemis proches à plusieurs reprises.",
        "icon": "EvelynnQ.png"
      },
      "w": {
        "name": "Séduction",
        "description": "Evelynn maudit une cible, ce qui permet à sa prochaine attaque ou à son prochain sort de charmer sa cible et de réduire sa résistance magique.",
        "icon": "EvelynnW.png"
      },
      "e": {
        "name": "Coup de fouet",
        "description": "Evelynn donne un coup de fouet à sa cible avec son cirre et lui inflige des dégâts. Elle augmente ensuite sa vitesse de déplacement pendant un court instant.",
        "icon": "EvelynnE.png"
      },
      "r": {
        "name": "Faiseuse de veuves",
        "description": "Evelynn devient brièvement impossible à cibler et ravage la zone devant elle avant de se téléporter loin en arrière.",
        "icon": "EvelynnR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2017-10-10",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/us/featured/champion-reveal-evelynn",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-10-23",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-418-notes",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2012-07-18",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://forums.eune.leagueoflegends.com/board/showthread.php?t=466019&page=1#post4624459",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2017-10-10",
      "source": {
        "url": "https://na.leagueoflegends.com/us/featured/champion-reveal-evelynn",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Evelynn Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=ep_U4U6YW4E",
        "published": "2017-10-09",
        "duration": 308
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Evelynn Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=P9-J09SHPqQ",
        "published": "2026-04-05",
        "duration": 180
      }
    ],
    "releaseDate": "2009-05-01"
  },
  {
    "id": "ezreal",
    "key": "0081",
    "ddid": "Ezreal",
    "name": "Ezreal",
    "title": "Explorateur prodigue",
    "roles": {
      "adc": {
        "tier": "C",
        "wr": 46.09,
        "pr": 12.6,
        "ban": 4.55
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 7,
      "magic": 6
    },
    "class": "Tireur / Mage",
    "strengths": [
      "Utilisez Transfert arcanique pour lancer plus facilement vos autres compétences de tir.",
      "Vous pouvez jouer Ezreal comme un carry orienté vers les dégâts d'attaque ou vers la puissance."
    ],
    "counters": [
      "Ezreal est un champion très fragile, affrontez-le directement.",
      "Ezreal repose sur ses compétences de tir, alors gardez bien des sbires entre lui et vous."
    ],
    "abilities": {
      "passive": {
        "name": "Force grandissante",
        "description": "Ezreal augmente sa vitesse d'attaque chaque fois qu'il touche un ennemi avec une compétence (cumulable jusqu'à 5 fois).",
        "icon": "Ezreal_RisingSpellForce.png"
      },
      "q": {
        "name": "Tir mystique",
        "description": "Ezreal tire un trait d'énergie blessant qui, s'il touche un ennemi, réduit légèrement tous les délais de récupération d'Ezreal.",
        "icon": "EzrealQ.png"
      },
      "w": {
        "name": "Flux essentiel",
        "description": "Ezreal tire un orbe qui se colle au premier champion ou objectif touché. Si Ezreal frappe un ennemi affecté par un orbe, ce dernier explose et inflige des dégâts.",
        "icon": "EzrealW.png"
      },
      "e": {
        "name": "Transfert arcanique",
        "description": "Ezreal se téléporte dans une zone ciblée et tire un projectile autoguidé qui frappe l'ennemi le plus proche. Le tir vise en priorité les ennemis affectés par Flux essentiel.",
        "icon": "EzrealE.png"
      },
      "r": {
        "name": "Arc térébrant",
        "description": "Ezreal se concentre avant de tirer une puissante vague d'énergie qui inflige d'importants dégâts à chaque unité traversée (les dégâts sont réduits pour les sbires et les monstres non épiques).",
        "icon": "EzrealR.png"
      }
    },
    "sourceNotes": [
      {
        "field": "strengths",
        "note": "Conseil officiel « Barrage térébrant permet de toucher plusieurs vagues de sbires et même les monstres. » — nomme « Barrage térébrant », absent du kit actuel (noms et descriptions des sorts, Data Dragon 16.17.1) et des objets actuels (item.json) : conseil non affiché.",
        "url": "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
        "retrieved": "2026-09-08"
      },
      {
        "field": "counters",
        "note": "Conseil officiel « Tir mystique applique des effets à l'impact, y compris celui de Cimier de cendres. » — nomme « Cimier de cendres », absent du kit actuel (noms et descriptions des sorts, Data Dragon 16.17.1) et des objets actuels (item.json) : conseil non affiché.",
        "url": "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
        "retrieved": "2026-09-08"
      }
    ],
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2018-10-09",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/champions-skins/champion-update/ezreal-coming-soon",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2015-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
          "label": "Marksmen"
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-11-20",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-420-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2018-10-09",
      "source": {
        "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/champions-skins/champion-update/ezreal-coming-soon",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Ezreal: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=0dGYt0Ibw94",
        "published": "2012-06-29",
        "duration": 394
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Ezreal Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=eOi5RYgQoP8",
        "published": "2025-10-26",
        "duration": 180
      }
    ],
    "releaseDate": "2010-03-16"
  },
  {
    "id": "fiddlesticks",
    "key": "0009",
    "ddid": "Fiddlesticks",
    "name": "Fiddlesticks",
    "title": "Effroi nocturne",
    "roles": {
      "jgl": {
        "tier": "A",
        "wr": 51.52,
        "pr": 2.4,
        "ban": 1.39
      },
      "sup": {
        "tier": "B",
        "wr": 49.51,
        "pr": 0.51,
        "ban": 1.3
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 2,
      "magic": 9
    },
    "class": "Mage / Soutien",
    "strengths": [],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "Épouvantable épouvantail",
        "description": "La relique de Fiddlesticks est remplacée par des Effigies d'épouvantail.",
        "icon": "FiddlesticksP.png"
      },
      "q": {
        "name": "Terreur",
        "description": "Si Fiddlesticks blesse un ennemi avec un sort en n'étant pas visible ou s'il cible un ennemi avec la propriété active de Terreur, il terrifie cet ennemi et le fait fuir aussi longtemps que dure l'effet.",
        "icon": "FiddleSticksQ.png"
      },
      "w": {
        "name": "Moisson fructueuse",
        "description": "Fiddlesticks draine l'essence vitale des ennemis proches, infligeant des dégâts d'exécution supplémentaires à la fin de l'effet.",
        "icon": "FiddleSticksW.png"
      },
      "e": {
        "name": "Fauchaison",
        "description": "Fiddlesticks donne un coup de faux dans une zone, ralentissant tous les ennemis touchés et réduisant au silence ceux touchés au centre de la zone.",
        "icon": "FiddleSticksE.png"
      },
      "r": {
        "name": "Rafale de corbeaux",
        "description": "Une nuée de corbeaux tourbillonne sauvagement autour de Fiddlesticks, infligeant des dégâts par seconde à toutes les unités ennemies dans la zone.",
        "icon": "FiddleSticksR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2020-04-01",
        "kitAffecting": true,
        "source": {
          "url": "https://nexus.leagueoflegends.com/en-us/2020/01/dev-the-latest-on-fiddlesticks-vgu/",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2016-05-04",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/mid-season-magic",
          "label": "Mages: Battlemages"
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2015-02-11",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-53-notes/",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2011-04-25",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://forums.na.leagueoflegends.com/board/showthread.php?t=692602",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2020-04-01",
      "source": {
        "url": "https://nexus.leagueoflegends.com/en-us/2020/01/dev-the-latest-on-fiddlesticks-vgu/",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Fiddlesticks: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=uc_-ms5ADhk",
        "published": "2011-10-27",
        "duration": 431
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Fiddlesticks Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=PZU8FbAFu8E",
        "published": "2024-12-20",
        "duration": 180
      }
    ],
    "releaseDate": "2009-02-21"
  },
  {
    "id": "fiora",
    "key": "0114",
    "ddid": "Fiora",
    "name": "Fiora",
    "title": "Sublime bretteuse",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 49.66,
        "pr": 3.6,
        "ban": 4.49
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 10,
      "magic": 2
    },
    "class": "Combattant / Assassin",
    "strengths": [
      "Grâce à Danse de la duelliste, Fiora excelle lors des rapides échanges de coups. Utilisez le bonus de vitesse de déplacement octroyé en frappant un point faible pour vous replier ou pour préparer le coup suivant.",
      "Défi suprême permet à Fiora d'abattre même les adversaires les plus solides et de se soigner en cas de réussite, alors n'hésitez pas à attaquer la première ligne ennemie."
    ],
    "counters": [
      "Danse de la duelliste vous montre depuis quelle direction Fiora essaiera d'attaquer, alors soyez prêt à punir sa tentative.",
      "Soyez prudent avec vos entraves immobilisantes. Si vous en lancez une sur Fiora quand sa Riposte est disponible, elle pourrait retourner votre entrave contre vous."
    ],
    "abilities": {
      "passive": {
        "name": "Danse de la duelliste",
        "description": "Fiora a révélé un des <keywordMajor>points faibles</keywordMajor> de ce champion. Si elle frappe ce <keywordMajor>point faible</keywordMajor>, elle <healing>récupère des PV</healing> et gagne de la <speed>vitesse de déplacement</speed>.",
        "icon": "Fiora_P.png"
      },
      "q": {
        "name": "Fente",
        "description": "Fiora se fend dans une direction et frappe un ennemi proche, infligeant des dégâts physiques et appliquant ses effets à l'impact.",
        "icon": "FioraQ.png"
      },
      "w": {
        "name": "Riposte",
        "description": "Fiora pare tous les dégâts et toutes les entraves qui la ciblent pendant un court instant, après quoi elle donne un coup d'estoc dans une direction. Ce coup d'estoc ralentit le premier champion ennemi touché. Si Fiora a paré un effet immobilisant, elle étourdit le premier champion ennemi touché.",
        "icon": "FioraW.png"
      },
      "e": {
        "name": "Botte secrète",
        "description": "Fiora augmente sa vitesse d'attaque pour ses deux prochaines attaques. La première attaque ralentit la cible et la seconde inflige un coup critique.",
        "icon": "FioraE.png"
      },
      "r": {
        "name": "Défi suprême",
        "description": "Fiora révèle les quatre points faibles d'un champion ennemi et augmente sa vitesse de déplacement à proximité de ce champion. Si Fiora frappe les quatre points faibles ou si l'adversaire meurt après qu'elle en a frappé au moins un, Fiora et ses alliés dans la zone sont soignés pendant quelques secondes.",
        "icon": "FioraR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2015-08-06",
        "kitAffecting": true,
        "source": {
          "url": "http://na.leagueoflegends.com/en/news/champions-skins/champion-update/champion-update-fiora",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-09-25",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://oce.leagueoflegends.com/en/news/game-updates/patch/patch-417-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2015-08-06",
      "source": {
        "url": "http://na.leagueoflegends.com/en/news/champions-skins/champion-update/champion-update-fiora",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Fiora: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=YRyGvsGbHnM",
        "published": "2012-02-29",
        "duration": 371
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Fiora Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=pVNm5nEsOdM",
        "published": "2026-05-29",
        "duration": 180
      }
    ],
    "releaseDate": "2012-02-29"
  },
  {
    "id": "fizz",
    "key": "0105",
    "ddid": "Fizz",
    "name": "Fizz",
    "title": "Filou des mers",
    "roles": {
      "jgl": {
        "tier": "B",
        "wr": 49.75,
        "pr": 0.78,
        "ban": 6.93
      },
      "mid": {
        "tier": "S",
        "wr": 51.29,
        "pr": 5.25,
        "ban": 7.31
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 6,
      "magic": 7
    },
    "class": "Assassin / Combattant",
    "strengths": [
      "Fizz pouvant traverser les unités, guettez chaque occasion d'appliquer le passif de Trident marin. Quelques secondes après, enchaînez avec la propriété active de cette compétence.",
      "L'ultime de Fizz, Pêche au gros, peut viser un ennemi ou la zone où vous pensez qu'il va se rendre.",
      "Fizz a essentiellement besoin de puissance : des objets comme Sablier de Zhonya ou Voile de la banshee sont très utiles contre des équipes disposant d'un burst important ; si vous pensez pouvoir survivre sans le surcroît de PV, le Fléau de liche ou la Coiffe de Rabadon sont d'excellents choix."
    ],
    "counters": [
      "Les attaques de Fizz deviennent mortelles pendant les secondes qui suivent son attaque renforcée. Gardez-le à distance lorsque son trident brille !",
      "Fizz est insaisissable quand ses compétences ne sont pas en récupération. Poussez-le à les utiliser rapidement, puis enchaînez avec du contrôle de foule ou des attaques puissantes !"
    ],
    "abilities": {
      "passive": {
        "name": "Combattant agile",
        "description": "Fizz peut traverser les unités et profite d'un montant fixe de réduction des dégâts contre toutes les sources de dégâts.",
        "icon": "Fizz_P.png"
      },
      "q": {
        "name": "Frappe de l'oursin",
        "description": "Fizz traverse sa cible, infligeant des dégâts magiques et des effets à l'impact.",
        "icon": "FizzQ.png"
      },
      "w": {
        "name": "Trident marin",
        "description": "Les attaques de Fizz font saigner ses ennemis, infligeant des dégâts magiques en plusieurs secondes. Fizz peut renforcer sa prochaine attaque pour infliger des dégâts supplémentaires, et renforcer ses attaques suivantes pour une courte durée.",
        "icon": "FizzW.png"
      },
      "e": {
        "name": "Joueur/Filou",
        "description": "Fizz saute et retombe avec grâce sur sa lance, devenant impossible à cibler. Depuis cette position, Fizz peut soit frapper le sol, soit sauter à nouveau avant de retomber.",
        "icon": "FizzE.png"
      },
      "r": {
        "name": "Pêche au gros",
        "description": "Fizz lance un poisson qui s'accroche à tout champion qui le touche, ralentissant la cible. Après un court instant, un requin surgit du sol, projetant la cible dans les airs et repoussant les ennemis proches. Tous les ennemis touchés subissent des dégâts magiques et sont ralentis.",
        "icon": "FizzR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2022-08-24",
        "kitAffecting": false,
        "source": {
          "url": "https://www.reddit.com/r/LeaguePBE/comments/wkajrp/fizz_vfx_update/",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2016-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/preseason-2017/assassins",
          "label": "Slayers: Assassins"
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-11-20",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-420-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2016-11-10",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/preseason-2017/assassins",
        "label": "Slayers: Assassins"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Fizz: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=ATbmKP9RoXI",
        "published": "2011-11-15",
        "duration": 480
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Fizz Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=iVOJPpn7uVs",
        "published": "2025-05-17",
        "duration": 180
      }
    ],
    "releaseDate": "2011-11-15"
  },
  {
    "id": "galio",
    "key": "0003",
    "ddid": "Galio",
    "name": "Galio",
    "title": "Colosse",
    "roles": {
      "mid": {
        "tier": "B",
        "wr": 49.3,
        "pr": 3.87,
        "ban": 1.76
      },
      "sup": {
        "tier": "B",
        "wr": 50.8,
        "pr": 1,
        "ban": 1.7
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 1,
      "magic": 6
    },
    "class": "Tank / Mage",
    "strengths": [
      "Vous pouvez relâcher Bouclier de Durand même en étant affecté par un contrôle de foule.",
      "Vous pouvez lancer Entrée héroïque en utilisant les icones de vos alliés sur la minicarte.",
      "Vous pouvez utiliser le pas en arrière de Horion de la justice pour esquiver les sorts ennemis."
    ],
    "counters": [
      "Galio se déplace plus lentement quand il charge Bouclier de Durand.",
      "Entrée héroïque peut être interrompue avant que Galio ne prenne son envol.",
      "Galio ne peut pas traverser les murs avec Horion de la justice."
    ],
    "abilities": {
      "passive": {
        "name": "Frappe colossale",
        "description": "Toutes les quelques secondes, la prochaine attaque de base de Galio inflige des dégâts magiques supplémentaires dans une zone.",
        "icon": "Galio_Passive.png"
      },
      "q": {
        "name": "Vents de guerre",
        "description": "Galio tire deux rafales de vent qui convergent pour créer une grande tornade infligeant des dégâts sur la durée.",
        "icon": "GalioQ.png"
      },
      "w": {
        "name": "Bouclier de Durand",
        "description": "Galio canalise une posture défensive, ce qui ralentit ses déplacements. Au relâchement de la canalisation, Galio provoque et blesse les ennemis proches.",
        "icon": "GalioW.png"
      },
      "e": {
        "name": "Horion de la justice",
        "description": "Galio fait un pas en arrière et charge, projetant en l'air le premier champion ennemi qu'il touche.",
        "icon": "GalioE.png"
      },
      "r": {
        "name": "Entrée héroïque",
        "description": "Galio désigne la position d'un allié comme zone d'atterrissage, octroyant un bouclier anti-dégâts magiques à tous les alliés dans la zone. Après un délai, Galio s'abat sur cet emplacement, projetant en l'air les ennemis proches.",
        "icon": "GalioR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2017-03-21",
        "kitAffecting": true,
        "source": {
          "url": "http://na.leagueoflegends.com/en/featured/champion-galio-the-colossus",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-09-25",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://oce.leagueoflegends.com/en/news/game-updates/patch/patch-417-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2017-03-21",
      "source": {
        "url": "http://na.leagueoflegends.com/en/featured/champion-galio-the-colossus",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Galio - Colosse",
        "url": "https://www.youtube.com/watch?v=cVqJ1eC4p7k",
        "published": "2017-03-21",
        "duration": 340
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Galio Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=t3BFQMW2Lfw",
        "published": "2017-03-20",
        "duration": 336
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Galio Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=JlHlUeORlUk",
        "published": "2025-09-10",
        "duration": 180
      }
    ],
    "releaseDate": "2010-08-10"
  },
  {
    "id": "gangplank",
    "key": "0041",
    "ddid": "Gangplank",
    "name": "Gangplank",
    "title": "Fléau des mers",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 50.85,
        "pr": 5.47,
        "ban": 7.4
      },
      "mid": {
        "tier": "B",
        "wr": 49.18,
        "pr": 0.55,
        "ban": 7.19
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 7,
      "magic": 4
    },
    "class": "Combattant",
    "strengths": [
      "Pourparlers applique des effets à l'impact, comme ceux de Maillet gelé ou de Couperet noir.",
      "Sur la carte, guettez les ennemis gravement blessés pour les tuer avec un Tir de barrage surprise.",
      "Placez Tir de barrage de façon à couper la retraite des ennemis."
    ],
    "counters": [
      "Pourparlers inflige de lourds dégâts physiques. Les objets améliorant l'armure sont très utiles si un Gangplank ennemi joue bien.",
      "Quand Gangplank atteint le niveau 6, méfiez-vous de son ultime à portée globale, Tir de barrage !"
    ],
    "abilities": {
      "passive": {
        "name": "Épreuve du feu",
        "description": "Toutes les quelques secondes, les attaques de base de Gangplank mettent le feu à sa cible.",
        "icon": "Gangplank_Passive.png"
      },
      "q": {
        "name": "Pourparlers",
        "description": "Gangplank tire sur une cible. Il gagne des PO supplémentaires si le tir tue la cible.",
        "icon": "GangplankQWrapper.png"
      },
      "w": {
        "name": "Guérison du scorbut",
        "description": "Gangplank mange des agrumes pour dissiper les effets de contrôle de foule qui l'affectent et récupérer des PV.",
        "icon": "GangplankW.png"
      },
      "e": {
        "name": "Baril de poudre",
        "description": "Gangplank place un baril de poudre à l'endroit ciblé. S'il l'attaque, le baril explose, étendant les dégâts de l'attaque dans la zone et ralentissant les ennemis.",
        "icon": "GangplankE.png"
      },
      "r": {
        "name": "Tir de barrage",
        "description": "Gangplank demande à son navire de bombarder une zone, ralentissant et blessant les ennemis.",
        "icon": "GangplankR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2015-07-21",
        "kitAffecting": true,
        "source": {
          "url": "http://na.leagueoflegends.com/en/page/champion-update/gangplank-sails-pbe",
          "label": null
        }
      },
      {
        "type": "Visual Update",
        "date": "2011-11-25",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/board/showthread.php?p=17646158",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2011-04-25",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://forums.na.leagueoflegends.com/board/showthread.php?t=692602",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2015-07-21",
      "source": {
        "url": "http://na.leagueoflegends.com/en/page/champion-update/gangplank-sails-pbe",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Gangplank",
        "url": "https://www.youtube.com/watch?v=F0DUad-aY3c",
        "published": "2015-07-20",
        "duration": 442
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Gangplank: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=3kysDbC-NTo",
        "published": "2015-07-20",
        "duration": 439
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Gangplank Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=v1x8NsCSKHU",
        "published": "2024-12-03",
        "duration": 180
      }
    ],
    "releaseDate": "2009-08-19"
  },
  {
    "id": "garen",
    "key": "0086",
    "ddid": "Garen",
    "name": "Garen",
    "title": "Force de Demacia",
    "roles": {
      "top": {
        "tier": "S",
        "wr": 51.14,
        "pr": 7.05,
        "ban": 5.16
      },
      "mid": {
        "tier": "A",
        "wr": 51.41,
        "pr": 0.55,
        "ban": 4.93
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 7,
      "magic": 1
    },
    "class": "Combattant / Tank",
    "strengths": [
      "La régénération de Garen augmente considérablement s'il ne subit aucun dégât pendant quelques secondes.",
      "Jugement inflige ses dégâts max quand une seule cible est touchée. Pour maximiser votre efficacité, essayez de vous positionner de manière à ne toucher que le champion ennemi.",
      "Garen n'est limité que par ses délais de récupération. Lui procurer des objets comme Couperet noir est très efficace."
    ],
    "counters": [
      "Accumulez les objets augmentant l'armure pour réduire les dégâts physiques colossaux infligés par Garen.",
      "Fuyez Garen quand vos PV sont bas, car il peut vous achever rapidement avec Justice de Demacia.",
      "Attention à ne pas attaquer Garen dans les herbes hautes. Vous risquez de prendre de plein fouet les dégâts de Jugement.",
      "Jugement inflige ses dégâts max quand une seule cible est touchée. Si éviter l'attaque n'est pas possible, mêlez-vous à vos sbires pour subir moins de dégâts."
    ],
    "abilities": {
      "passive": {
        "name": "Persévérance",
        "description": "Si Garen n'a pas subi de dégâts ou de compétences ennemies récemment, il régénère un pourcentage de ses PV totaux chaque seconde.",
        "icon": "Garen_Passive.png"
      },
      "q": {
        "name": "Coup décisif",
        "description": "Garen reçoit un bonus en vitesse de déplacement et purge tous les ralentissements qui l'affectent. Sa prochaine attaque frappe un point vital de son adversaire, infligeant des dégâts supplémentaires et le réduisant au silence.",
        "icon": "GarenQ.png"
      },
      "w": {
        "name": "Courage",
        "description": "Garen augmente passivement son armure et sa résistance magique quand il tue des ennemis. Il peut également activer cette compétence pour recevoir un bouclier et augmenter grandement sa Ténacité pendant un bref instant, avant de profiter d'un montant moindre de réduction des dégâts pendant une durée plus longue.",
        "icon": "GarenW.png"
      },
      "e": {
        "name": "Jugement",
        "description": "Garen donne des coups d'épée tourbillonnants, infligeant des dégâts physiques aux ennemis proches.",
        "icon": "GarenE.png"
      },
      "r": {
        "name": "Justice de Demacia",
        "description": "Garen en appelle à la puissance de Demacia pour tenter d'exécuter un champion ennemi.",
        "icon": "GarenR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Class-scale Update",
        "date": "2015-08-26",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/page/gameplay-update-juggernauts",
          "label": "Fighters: Juggernauts"
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2015-08-26",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/page/gameplay-update-juggernauts",
          "label": null
        }
      },
      {
        "type": "Visual Update",
        "date": "2013-10-01",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://beta.na.leagueoflegends.com/en/news/champions-skins/champion-spotlight/champion-spotlight-garen-might-demacia",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2012-08-14",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://forums.na.leagueoflegends.com/board/showthread.php?t=2475989",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2015-08-26",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/page/gameplay-update-juggernauts",
        "label": "Fighters: Juggernauts"
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur la présaison 2020 | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=mbUH2h4X1EE",
        "published": "2019-11-19",
        "duration": 135
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Garen: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=Q7oyW6LjxrA",
        "published": "2013-10-01",
        "duration": 381
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Garen Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=_06jxKmS_oA",
        "published": "2025-07-29",
        "duration": 180
      }
    ],
    "releaseDate": "2010-04-27"
  },
  {
    "id": "gnar",
    "key": "0150",
    "ddid": "Gnar",
    "name": "Gnar",
    "title": "Chaînon manquant",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 49.15,
        "pr": 3.6,
        "ban": 1.16
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 6,
      "magic": 5
    },
    "class": "Combattant / Tank",
    "strengths": [
      "La gestion de votre Rage est très importante. Effectuez vos transformations aux bons moments pour profiter au maximum de vos deux formes.",
      "Placez-vous près des murs et attirez vos ennemis pour les étourdir avec votre ultime.",
      "Connaissez vos forces ! Mini Gnar est rapide, fragile et il inflige de gros dégâts soutenus. Méga Gnar est lent, résistant et il a un gros burst."
    ],
    "counters": [
      "Après être passé de Méga à Mini, Gnar ne peut plus générer de Rage pendant 15 sec. Profitez-en pour attaquer son équipe.",
      "Les animations et la jauge de ressource de Gnar changent quand sa transformation approche.",
      "L'ultime de Gnar vous étourdit s'il vous projette contre un mur. Soyez prudent quand vous le combattez près d'un mur."
    ],
    "abilities": {
      "passive": {
        "name": "Rage génique",
        "description": "Gnar génère de la Rage quand il combat. Une fois sa jauge de Rage remplie, sa prochaine compétence le transforme en Méga Gnar, ce qui améliore ses défenses et lui octroie de nouvelles compétences.",
        "icon": "Gnar_Passive.png"
      },
      "q": {
        "name": "Jet de boomerang/Jet de rocher",
        "description": "Gnar lance un boomerang qui blesse et ralentit les cibles touchées avant de retourner vers lui. S'il rattrape le boomerang, le délai de récupération est réduit.<br><br>Méga Gnar lance un rocher qui s'arrête à la première unité touchée, blessant et ralentissant tous les ennemis proches. Gnar peut ensuite ramasser le rocher pour réduire le délai de récupération.",
        "icon": "GnarQ.png"
      },
      "w": {
        "name": "Agitation/Beigne",
        "description": "Gnar est agité à force d'attaquer et d'utiliser des compétences, ce qui lui permet d'infliger des dégâts supplémentaires et d'augmenter sa vitesse de déplacement.<br><br>Méga Gnar est enragé : il se dresse sur ses pattes arrière et frappe devant lui, étourdissant les ennemis dans la zone.",
        "icon": "GnarW.png"
      },
      "e": {
        "name": "Rebond/Aplatissement",
        "description": "Gnar bondit dans la direction ciblée et rebondit sur la tête de toute unité sur laquelle il atterrit, ce qui lui permet d'aller plus loin.<br><br>Méga Gnar est trop gros pour rebondir : il atterrit de façon fracassante et inflige des dégâts de zone.",
        "icon": "GnarE.png"
      },
      "r": {
        "name": "GNAR !",
        "description": "Méga Gnar projette tous les ennemis proches dans la direction ciblée, leur infligeant des dégâts et les ralentissant. Si un ennemi percute un mur, il est étourdi et il subit des dégâts supplémentaires.",
        "icon": "GnarR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur : Gnar",
        "url": "https://www.youtube.com/watch?v=D-jws6MJEfw",
        "published": "2014-08-12",
        "duration": 526
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Gnar: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=4Qu3rhWGq0s",
        "published": "2014-08-12",
        "duration": 526
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Gnar Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=BxGCOMMKKkY",
        "published": "2025-11-24",
        "duration": 180
      }
    ],
    "releaseDate": "2014-08-14"
  },
  {
    "id": "gragas",
    "key": "0079",
    "ddid": "Gragas",
    "name": "Gragas",
    "title": "Agitateur",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 50.2,
        "pr": 2.27,
        "ban": 0.63
      },
      "jgl": {
        "tier": "A",
        "wr": 50.68,
        "pr": 0.78,
        "ban": 0.61
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 4,
      "magic": 6
    },
    "class": "Combattant / Mage",
    "strengths": [
      "La réduction des dégâts conférée par Rage d'ivrogne s'applique dès que vous commencez à boire. Tentez de l'utiliser au moment où vous voyez que vous allez subir des dégâts.",
      "Essayez de repousser les ennemis vers vos tourelles avec Fût explosif.",
      "Combinez Coup de bidon et Fût explosif pour permettre à vos alliés de tuer des ennemis."
    ],
    "counters": [
      "Gragas peut repousser tout le monde avec sa compétence ultime. Attention à ne pas vous faire repousser vers lui ou, pire, vers une tourelle ennemie.",
      "Coup de bidon a un délai de récupération très bas, ce qui rend difficile la poursuite de Gragas. Ne perdez pas trop de temps à courir derrière."
    ],
    "abilities": {
      "passive": {
        "name": "Tournée",
        "description": "Gragas récupère des PV quand il utilise une compétence.",
        "icon": "GragasPassiveHeal.png"
      },
      "q": {
        "name": "Fût roulant",
        "description": "Gragas fait rouler son fût vers une zone ciblée ; le fût explose automatiquement au bout de 4 sec (vous pouvez activer l'explosion manuellement). La puissance de l'explosion augmente sur la durée. La vitesse de déplacement des ennemis touchés est réduite.",
        "icon": "GragasQ.png"
      },
      "w": {
        "name": "Rage d'ivrogne",
        "description": "Gragas boit pendant 1 sec. Il devient alors turbulent et querelleur, ce qui lui permet d'infliger des dégâts magiques à tous les ennemis proches avec sa prochaine attaque de base et de subir moins de dégâts.",
        "icon": "GragasW.png"
      },
      "e": {
        "name": "Coup de bidon",
        "description": "Gragas charge vers une zone ciblée et percute le premier ennemi rencontré, infligeant des dégâts à tous les ennemis proches et les étourdissant.",
        "icon": "GragasE.png"
      },
      "r": {
        "name": "Fût explosif",
        "description": "Gragas lance son fût, infligeant des dégâts et repoussant les ennemis touchés par l'explosion.",
        "icon": "GragasR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX and SFX) Update",
        "date": "2018-12-05",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://boards.na.leagueoflegends.com/en/c/developer-corner/pjKXqRsl-visual-and-sound-effect-updates-gragas",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-11-20",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-420-notes",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2014-04-02",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://euw.leagueoflegends.com/en/news/game-updates/patch/patch-45-notes#patch-gragas",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2014-04-02",
      "source": {
        "url": "https://web.archive.org/web/0/http://euw.leagueoflegends.com/en/news/game-updates/patch/patch-45-notes#patch-gragas",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Graves: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=BWzyB4xe7Y8",
        "published": "2011-10-19",
        "duration": 353
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Gragas Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=L4Xrf7dF76o",
        "published": "2026-05-02",
        "duration": 180
      }
    ],
    "releaseDate": "2010-02-02"
  },
  {
    "id": "graves",
    "key": "0104",
    "ddid": "Graves",
    "name": "Graves",
    "title": "Hors-la-loi",
    "roles": {
      "jgl": {
        "tier": "B",
        "wr": 49.26,
        "pr": 10.24,
        "ban": 14.64
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 3
    },
    "class": "Tireur",
    "strengths": [
      "Écran de fumée peut être utilisé en défense comme en attaque."
    ],
    "counters": [
      "Graves inflige essentiellement des dégâts physiques ; développer son armure est un bon moyen de le contrer.",
      "Il suffit de quitter la zone d'effet d'Écran de fumée pour dissiper son effet négatif."
    ],
    "abilities": {
      "passive": {
        "name": "Nouvelle destinée",
        "description": "Le fusil de Graves dispose de propriétés uniques. Graves doit recharger quand il n'a plus de munitions. Chaque attaque tire 4 balles qui ne traversent pas les unités. Les unités touchées par plusieurs balles sont repoussées (sauf les champions).",
        "icon": "GravesTrueGrit.png"
      },
      "q": {
        "name": "Terminus",
        "description": "Graves tire un projectile qui explose au bout de 1 sec, ou quand il entre en contact avec un obstacle.",
        "icon": "GravesQLineSpell.png"
      },
      "w": {
        "name": "Écran de fumée",
        "description": "Graves tire une grenade fumigène qui produit un nuage de fumée réduisant le champ de vision. Les ennemis touchés par l'impact initial subissent des dégâts magiques et sont brièvement ralentis.",
        "icon": "GravesSmokeGrenade.png"
      },
      "e": {
        "name": "Ruée vers l'or",
        "description": "Graves charge devant lui et profite d'un bonus en armure et en résistance magique pendant quelques secondes. Si Graves fonce vers un champion ennemi, il gagne deux effets Nerfs d'acier au lieu d'un. Lorsqu'il touche des ennemis avec ses attaques de base, le délai de récupération de cette compétence est réduit et le bonus est actualisé.",
        "icon": "GravesMove.png"
      },
      "r": {
        "name": "Dégâts collatéraux",
        "description": "Graves tire un obus explosif qui inflige de lourds dégâts au premier champion touché. Lorsque l'obus touche un champion ou arrive au bout de sa course, il explose et inflige des dégâts dans une zone en forme de cône.",
        "icon": "GravesChargeShot.png"
      }
    },
    "sourceNotes": [
      {
        "field": "strengths",
        "note": "Conseil officiel « Utilisez Ruée vers l'or pour vous mettre à portée et envoyez Chevrotine à bout portant pour infliger de lourds dégâts. » — nomme « Chevrotine », absent du kit actuel (noms et descriptions des sorts, Data Dragon 16.17.1) et des objets actuels (item.json) : conseil non affiché.",
        "url": "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
        "retrieved": "2026-09-08"
      }
    ],
    "reworkHistory": [
      {
        "type": "Class-scale Update",
        "date": "2015-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
          "label": "Marksmen"
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2015-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-09-25",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://oce.leagueoflegends.com/en/news/game-updates/patch/patch-417-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2015-11-10",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
        "label": "Marksmen"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Graves: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=BWzyB4xe7Y8",
        "published": "2011-10-19",
        "duration": 353
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Graves Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=49GTCE8Y1Ys",
        "published": "2026-07-06",
        "duration": 180
      }
    ],
    "releaseDate": "2011-10-19"
  },
  {
    "id": "gwen",
    "key": "0887",
    "ddid": "Gwen",
    "name": "Gwen",
    "title": "Couturière sacrée",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 50.2,
        "pr": 2.78,
        "ban": 4.1
      },
      "jgl": {
        "tier": "A",
        "wr": 50.05,
        "pr": 1.07,
        "ban": 4.05
      },
      "mid": {
        "tier": "A",
        "wr": 51.88,
        "pr": 0.84,
        "ban": 3.96
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 7,
      "magic": 5
    },
    "class": "Combattant",
    "strengths": [
      "Attaquez en continu : en plus d'infliger des dégâts supplémentaires, les attaques de Gwen renforcent ou réinitialisent plusieurs de ses compétences.",
      "Gwen peut blesser les ennemis hors de sa Brume sacrée, notamment avec son ultime.",
      "Certaines compétences de Gwen peuvent appliquer sa compétence passive sur des ennemis multiples, alors visez les groupes pour maximiser vos dégâts et vos soins."
    ],
    "counters": [
      "La Brume sacrée de Gwen ne la suivra qu'une seule fois. Ensuite, elle se dissipe si Gwen sort de la zone.",
      "Gwen doit frapper une cible pour pouvoir réactiver son ultime, alors éloignez-vous d'elle.",
      "Gwen doit enchaîner les attaques pour accroître ses dégâts. Essayez donc de la devancer."
    ],
    "abilities": {
      "passive": {
        "name": "Mille coupures",
        "description": "Les attaques de Gwen infligent des dégâts magiques supplémentaires selon les PV de la cible. Gwen récupère des PV équivalents à une partie des dégâts que cet effet inflige aux champions.",
        "icon": "Gwen_Passive.png"
      },
      "q": {
        "name": "Tchac, tchac !",
        "description": "Gwen coupe jusqu'à 6 fois avec ses ciseaux, infligeant des dégâts magiques dans une zone conique. Gwen inflige des dégâts bruts aux unités au centre de la zone et applique sa compétence passive sur eux à chaque coup de ciseaux.",
        "icon": "GwenQ.png"
      },
      "w": {
        "name": "Brume sacrée",
        "description": "Gwen invoque une brume qui la protège des ennemis hors de la zone. Elle ne peut être ciblée que par les ennemis qui entrent dans la brume.",
        "icon": "GwenW.png"
      },
      "e": {
        "name": "Élan incisif",
        "description": "Gwen effectue une courte ruée, puis gagne de la vitesse d'attaque, de la portée d'attaque et des dégâts magiques <OnHit>à l'impact</OnHit> pendant quelques secondes. Si elle frappe un ennemi pendant cette durée, le délai de récupération de cette compétence est réduit.",
        "icon": "GwenE.png"
      },
      "r": {
        "name": "Piqûre",
        "description": "Gwen lance une aiguille qui ralentit les ennemis touchés, inflige des dégâts magiques et applique Mille coupures sur les champions touchés. <br><br>Cette compétence peut être activée jusqu'à deux fois de plus. Chaque activation lance des aiguilles supplémentaires et inflige plus de dégâts.",
        "icon": "GwenR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Gwen | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=EpUtXMth9jw",
        "published": "2021-04-15",
        "duration": 250
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Gwen Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=pK4VLNk7uBc",
        "published": "2021-04-15",
        "duration": 250
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Gwen Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=g3MxaALRwHU",
        "published": "2025-12-20",
        "duration": 180
      }
    ],
    "releaseDate": "2021-04-15"
  },
  {
    "id": "hecarim",
    "key": "0120",
    "ddid": "Hecarim",
    "name": "Hecarim",
    "title": "Ombre de la guerre",
    "roles": {
      "jgl": {
        "tier": "B",
        "wr": 49.48,
        "pr": 5.4,
        "ban": 6.35
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 4
    },
    "class": "Combattant / Tank",
    "strengths": [
      "Essence de la peur vous rend des PV lorsque les ennemis proches subissent des dégâts, y compris ceux infligés par les alliés. Lancez-la au cours d'une grande bataille pour maximiser les chances de survie d'Hecarim.",
      "Charge dévastatrice inflige des dégâts proportionnels à la distance parcourue. Utilisez Légion des ombres ou un sort d'invocateur tel que Fantôme ou Saut éclair pour maximiser les dégâts."
    ],
    "counters": [
      "Essence de la peur permet à Hecarim de regagner des PV grâce aux ennemis proches, mais il manque de durabilité. Infligez-lui des dégâts en burst.",
      "L'ultime d'Hecarim effraie les ennemis et les fait fuir. En combat, dispersez-vous pour réduire sa puissance."
    ],
    "abilities": {
      "passive": {
        "name": "Galop",
        "description": "Les dégâts d'attaque d'Hecarim augmentent d'un montant égal à un pourcentage de sa vitesse de déplacement bonus.",
        "icon": "Hecarim_Passive.png"
      },
      "q": {
        "name": "Carnage",
        "description": "Hecarim tranche les ennemis proches et leur inflige des dégâts physiques. Si Hecarim blesse au moins un ennemi, il augmente les dégâts et réduit le délai de récupération des Carnages suivants.",
        "icon": "HecarimRapidSlash.png"
      },
      "w": {
        "name": "Essence de la peur",
        "description": "Hecarim gagne de l'armure et de la résistance magique. Hecarim inflige des dégâts magiques aux ennemis proches. Il regagne un nombre de PV équivalent à un pourcentage de tous les dégâts subis par ces ennemis.",
        "icon": "HecarimW.png"
      },
      "e": {
        "name": "Charge dévastatrice",
        "description": "La vitesse de déplacement d'Hecarim augmente et il peut traverser les unités pendant un court instant. Sa prochaine attaque repousse la cible et inflige des dégâts physiques supplémentaires en fonction de la distance parcourue depuis l'activation de la compétence.",
        "icon": "HecarimRamp.png"
      },
      "r": {
        "name": "Légion des ombres",
        "description": "Hecarim invoque des cavaliers fantomatiques et charge devant lui, infligeant des dégâts magiques sur une ligne. À la fin de sa charge, Hecarim crée une onde de choc qui effraie les ennemis proches.",
        "icon": "HecarimUlt.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2021-03-03",
        "kitAffecting": false,
        "source": {
          "url": "https://twitter.com/Lanky_Tree/status/1361853543427153920",
          "label": null
        }
      }
    ],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Hecarim: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=6DVGJm-u6To",
        "published": "2012-04-18",
        "duration": 416
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Hecarim Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=o67NaOu61eI",
        "published": "2025-02-10",
        "duration": 180
      }
    ],
    "releaseDate": "2012-04-18"
  },
  {
    "id": "heimerdinger",
    "key": "0074",
    "ddid": "Heimerdinger",
    "name": "Heimerdinger",
    "title": "Inventeur réputé",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 50.2,
        "pr": 1.25,
        "ban": 1.78
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 2,
      "magic": 8
    },
    "class": "Mage / Soutien",
    "strengths": [
      "Placer correctement les tourelles est très important pour le combat. Contre la plupart des ennemis, il est préférable de placer les tourelles de façon à ce qu'elles puissent se soutenir, mais si vos adversaires infligent de gros dégâts de zone, vos tourelles risquent d'être rapidement détruites. Placer des tourelles dans les herbes hautes permet de bénéficier d'un effet de surprise.",
      "La survie d'Heimerdinger repose grandement sur la Grenade électro-tempête. Le ralentissement et l'étourdissement peuvent bloquer les ennemis assez longtemps pour les punir, mais ils forment également la première ligne de défense contre une attaque-surprise.",
      "Disperser les Micro-roquettes Hextech permet d'infliger plus facilement des dégâts à des cibles multiples, mais les concentrer provoque un plus gros impact."
    ],
    "counters": [
      "Mieux vaut détruire toutes les tourelles d'Heimerdinger immédiatement avec l'aide des sbires, ne les combattez pas l'une après l'autre.",
      "Attention à AMÉLIORATION ! d'Heimerdinger, car cette compétence peut lui permettre de trouver la solution à tous ses problèmes. Une fois son ultime utilisé, éliminez-le !"
    ],
    "abilities": {
      "passive": {
        "name": "Affinité Hextech",
        "description": "Gagne de la vitesse de déplacement à proximité des tourelles alliées et des tourelles déployées par Heimerdinger.",
        "icon": "Heimerdinger_Passive.png"
      },
      "q": {
        "name": "Tourelle H-28G Évolution",
        "description": "Heimerdinger déploie une tourelle équipée d'un laser secondaire perforant (elle inflige 50% de dégâts aux tourelles ennemies).",
        "icon": "HeimerdingerQ.png"
      },
      "w": {
        "name": "Micro-roquettes Hextech",
        "description": "Heimerdinger lance des roquettes à longue portée qui convergent vers son curseur.",
        "icon": "HeimerdingerW.png"
      },
      "e": {
        "name": "Grenade électro-tempête CH-2",
        "description": "Heimerdinger lance une grenade vers l'endroit ciblé, infligeant des dégâts aux unités ennemies. Cela étourdit aussi les unités touchées directement et ralentit les unités proches.",
        "icon": "HeimerdingerE.png"
      },
      "r": {
        "name": "AMÉLIORATION !",
        "description": "Heimerdinger invente une amélioration, ce qui permet à son prochain sort d'avoir des effets augmentés.",
        "icon": "HeimerdingerR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual Update",
        "date": "2014-03-18",
        "kitAffecting": false,
        "source": {
          "url": "http://na.leagueoflegends.com/en/news/champions-skins/champion-relaunch/heimerdinger-visual-update-out-lab",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2013-10-01",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-313-notes#patch-heimerdinger",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2013-10-01",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-313-notes#patch-heimerdinger",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Heimerdinger: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=PY2q3aA1NYo",
        "published": "2010-06-28",
        "duration": 316
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Heimerdinger Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=tpVcxmPy3HE",
        "published": "2026-03-22",
        "duration": 180
      }
    ],
    "releaseDate": "2009-10-10"
  },
  {
    "id": "hwei",
    "key": "0910",
    "ddid": "Hwei",
    "name": "Hwei",
    "title": "Visionnaire",
    "roles": {
      "mid": {
        "tier": "S",
        "wr": 51.08,
        "pr": 4.07,
        "ban": 3.05
      },
      "adc": {
        "tier": "S",
        "wr": 52.45,
        "pr": 1.34,
        "ban": 3.02
      },
      "sup": {
        "tier": "B",
        "wr": 49.95,
        "pr": 0.66,
        "ban": 2.96
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 7,
      "magic": 8
    },
    "class": "Mage / Soutien",
    "strengths": [
      "Respirez un grand coup et concentrez-vous.",
      "Chaque coup de pinceau demande de la précision et de la réflexion."
    ],
    "counters": [
      "Hwei a besoin de prédire vos déplacements, et ses incantations sont longues, alors prenez-le par surprise.",
      "L'éclair de Hwei est puissant, mais lent ; il vous inflige plus de dégâts quand vous êtes isolé ou immobilisé.",
      "Après avoir peint un Tourment, Hwei est plus vulnérable."
    ],
    "abilities": {
      "passive": {
        "name": "Signature du Visionnaire",
        "description": "Hwei prépare les champions ennemis qu'il blesse à l'aide de ses compétences pour sa touche finale : sa signature.<br><br>Toucher un ennemi avec une deuxième compétence blessante termine sa signature, qui apparaît sous l'ennemi. La signature explose après un court délai, infligeant des dégâts magiques à tous les ennemis à portée.",
        "icon": "HweiPassive.png"
      },
      "q": {
        "name": "Sujet : Désastres",
        "description": "Hwei imagine une série de désastres, ce qui lui permet de peindre des coups dévastateurs.<br><br>Désastres remplace les compétences de Hwei par des compétences blessantes : Feu dévastateur, Éclair enflammé et Champ de lave.",
        "icon": "HweiQ.png"
      },
      "w": {
        "name": "Sujet : Sérénités",
        "description": "Hwei imagine une série de sérénités, ce qui lui permet de peindre des paysages revigorants.<br><br>Sérénités remplace les compétences de Hwei par des compétences utilitaires : Ruisseau, Étang et Nuit étoilée.",
        "icon": "HweiW.png"
      },
      "e": {
        "name": "Sujet : Tourments",
        "description": "Hwei imagine une série de tourments, ce qui lui permet de peindre des visages manipulateurs.<br><br>Tourments remplace les compétences de Hwei par des contrôles de foule : Visage effroyable, Œil des abysses et Mâchoires chatoyantes.",
        "icon": "HweiE.png"
      },
      "r": {
        "name": "Vision de désespoir",
        "description": "Hwei peint une vision de pur désespoir. Le premier champion ennemi touché devient le centre d'une peinture grandissante, qui ralentit et blesse les ennemis proches. Cette vision explose lorsqu'elle atteint sa limite de taille, ou lorsque le champion affecté meurt.",
        "icon": "HweiR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Hwei | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=LN-3zOjS9b0",
        "published": "2023-12-06",
        "duration": 411
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Hwei Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=1qGkmv80KD0",
        "published": "2023-12-06",
        "duration": 411
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Hwei Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=Rpa-rh8eIJ0",
        "published": "2025-12-08",
        "duration": 180
      }
    ],
    "releaseDate": "2023-12-05"
  },
  {
    "id": "illaoi",
    "key": "0420",
    "ddid": "Illaoi",
    "name": "Illaoi",
    "title": "Prêtresse du kraken",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 50.75,
        "pr": 2.74,
        "ban": 4.76
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 3
    },
    "class": "Combattant / Tank",
    "strengths": [
      "Les tentacules sont une immense source de puissance. Ne combattez pas sans leur aide.",
      "Les esprits héritent des PV actuels de leurs propriétaires. Si votre but est de créer un",
      "réceptacle",
      ", essayez d'affaiblir votre adversaire au préalable pour faciliter la destruction de son esprit.",
      "Acte de foi est plus efficace quand on s'en sert pour suivre l'engagement du combat par un allié ou contrer l'engagement du combat par l'équipe adverse. Veillez à ne pas engager les hostilités en premier."
    ],
    "counters": [
      "Détruisez les tentacules dès que possible pour faciliter le combat contre Illaoi.",
      "Quand votre esprit est arraché, ripostez si vous le pouvez. Infliger des dégâts à Illaoi réduit la durée de l'esprit.",
      "Évitez de rester en groupe afin de réduire le nombre de tentacules créés par Acte de foi."
    ],
    "abilities": {
      "passive": {
        "name": "Prophétesse d'un dieu ancestral",
        "description": "Illaoi et les <font color='#669900'>réceptacles</font> qu'elle crée font apparaître des tentacules sur les éléments de décor infranchissables à proximité. Les tentacules frappent les esprits, les <font color='#669900'>réceptacles</font> et les victimes de l'Âpre leçon d'Illaoi. Les tentacules infligent des dégâts physiques aux ennemis touchés, et ils soignent Illaoi s'ils blessent un champion.",
        "icon": "Illaoi_P.png"
      },
      "q": {
        "name": "Coup de tentacule",
        "description": "Augmente les dégâts infligés par les tentacules. À l'activation, Illaoi fait s'abattre un tentacule qui inflige des dégâts physiques.",
        "icon": "IllaoiQ.png"
      },
      "w": {
        "name": "Âpre leçon",
        "description": "Illaoi bondit sur sa cible, infligeant des dégâts physiques et poussant tous les tentacules proches à frapper la cible.",
        "icon": "IllaoiW.png"
      },
      "e": {
        "name": "Épreuve de l'esprit",
        "description": "Illaoi arrache l'esprit d'un ennemi et l'attire jusqu'à elle. L'esprit transmet un pourcentage des dégâts qu'il subit à la cible originale. S'il est détruit ou si la cible s'éloigne trop de son esprit, la cible devient un <font color='#669900'>réceptacle</font> et commence à faire apparaître des tentacules.",
        "icon": "IllaoiE.png"
      },
      "r": {
        "name": "Acte de foi",
        "description": "Illaoi écrase son idole au sol, infligeant des dégâts physiques aux ennemis proches. Un tentacule apparaît pour chaque champion ennemi touché.",
        "icon": "IllaoiR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Illaoi",
        "url": "https://www.youtube.com/watch?v=LD-vRsHt5jI",
        "published": "2015-11-23",
        "duration": 449
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Illaoi: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=UFkCDRlb9FA",
        "published": "2015-11-23",
        "duration": 449
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Illaoi Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=OSvEc-qtWfA",
        "published": "2025-11-19",
        "duration": 180
      }
    ],
    "releaseDate": "2015-11-24"
  },
  {
    "id": "irelia",
    "key": "0039",
    "ddid": "Irelia",
    "name": "Irelia",
    "title": "Danseuse des lames",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 50.33,
        "pr": 4.46,
        "ban": 12.84
      },
      "mid": {
        "tier": "B",
        "wr": 48.92,
        "pr": 2.86,
        "ban": 12.82
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 7,
      "magic": 5
    },
    "class": "Combattant / Assassin",
    "strengths": [
      "Utilisez Rush fatal sur des sbires proches de la mort pour parcourir une grande distance et approcher des champions ennemis.",
      "Danse de défi n'est pas interrompue par les contrôles de foule ; essayez de l'activer quand des entraves vous ciblent.",
      "Duo parfait n'a pas de limite de distance, alors n'hésitez pas à être créatif."
    ],
    "counters": [
      "Gardez un œil sur les effets Ferveur ionienne cumulés par Irelia et attaquez-la quand elle n'en a plus.",
      "Les vagues de sbires améliorent grandement la mobilité d'Irelia. Prudence quand vous l'affrontez au milieu des sbires.",
      "Attention à ne pas gaspiller vos sorts les plus puissants sur Danse de défi."
    ],
    "abilities": {
      "passive": {
        "name": "Ferveur ionienne",
        "description": "Quand Irelia frappe des ennemis avec ses compétences, elle gagne un bonus de vitesse d'attaque cumulable. Au maximum d'effets cumulés, elle gagne aussi des dégâts à l'impact supplémentaires.",
        "icon": "Irelia_Passive.png"
      },
      "q": {
        "name": "Rush fatal",
        "description": "Irelia fonce vers l'avant pour frapper sa cible tout en récupérant des PV. Si la cible était marquée ou si elle est tuée par Rush fatal, le délai de récupération de la compétence est annulé.",
        "icon": "IreliaQ.png"
      },
      "w": {
        "name": "Danse de défi",
        "description": "Irelia charge une attaque. Plus la charge dure longtemps, plus les dégâts augmentent. Irelia subit moins de dégâts physiques pendant la charge.",
        "icon": "IreliaW.png"
      },
      "e": {
        "name": "Duo parfait",
        "description": "Irelia envoie deux lames qui volent ensuite l'une vers l'autre. Les ennemis pris entre les lames sont blessés, étourdis et marqués.",
        "icon": "IreliaE.png"
      },
      "r": {
        "name": "Pointe de l'avant-garde",
        "description": "Irelia tire un grand nombre de lames qui se dispersent en touchant un champion ennemi. Les ennemis touchés par les lames sont blessés et marqués. Les lames forment ensuite un mur qui blesse et ralentit les ennemis qui le traversent.",
        "icon": "IreliaR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2018-04-04",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/en/featured/champion-reveal-irelia",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2015-01-28",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://euw.leagueoflegends.com/en/news/game-updates/patch/patch-52-notes/",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2018-04-04",
      "source": {
        "url": "https://na.leagueoflegends.com/en/featured/champion-reveal-irelia",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Irelia | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=IiPdJJ7T2QE",
        "published": "2018-04-03",
        "duration": 272
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Irelia Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=SGxQAs9ULWY",
        "published": "2018-04-03",
        "duration": 270
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Irelia Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=VW0CU6yGDQg",
        "published": "2026-04-27",
        "duration": 180
      }
    ],
    "releaseDate": "2010-11-16"
  },
  {
    "id": "ivern",
    "key": "0427",
    "ddid": "Ivern",
    "name": "Ivern",
    "title": "Aîné de la forêt",
    "roles": {
      "jgl": {
        "tier": "S",
        "wr": 51.99,
        "pr": 1.28,
        "ban": 0.41
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 3,
      "magic": 7
    },
    "class": "Soutien / Mage",
    "strengths": [
      "Après un bon Enracinement, aidez vos alliés à enchaîner avec Graine à retardement !",
      "Utilisez Main verte pour préparer le terrain de futures embuscades !",
      "Marguerite peut bloquer les compétences de tir et ralentir les ennemis. Servez-vous d'elle pour défendre vos équipiers !"
    ],
    "counters": [
      "Ivern peut être étonnamment insaisissable. Attention à ne pas le poursuivre trop loin.",
      "Les hautes herbes d'Ivern durent longtemps. Gare aux embuscades !",
      "Soyez prudent quand vous combattez Ivern seul, Marguerite pourrait être prête à l'aider !"
    ],
    "abilities": {
      "passive": {
        "name": "Ami de la forêt",
        "description": "Ivern ne peut pas attaquer ou être attaqué par les monstres non épiques. Ivern peut créer des bosquets magiques qui se développent progressivement sur les camps de monstres. Quand le bosquet est pleinement développé, Ivern peut libérer les monstres pour recevoir des PO et de l'expérience.",
        "icon": "IvernP.png"
      },
      "q": {
        "name": "Enracinement",
        "description": "Ivern projette une racine, infligeant des dégâts et immobilisant les cibles ennemies touchées. Les alliés d'Ivern peuvent foncer vers la cible immobilisée.",
        "icon": "IvernQ.png"
      },
      "w": {
        "name": "Main verte",
        "description": "Dans les hautes herbes, les attaques d'Ivern et de ses alliés proches infligent des dégâts magiques supplémentaires. Ivern peut activer cette compétence pour créer une parcelle d'herbes hautes.",
        "icon": "IvernW.png"
      },
      "e": {
        "name": "Graine à retardement",
        "description": "Ivern offre à un allié un bouclier qui explose après un court instant, ralentissant et blessant les ennemis. Le bouclier se réinitialise s'il ne touche aucun ennemi.",
        "icon": "IvernE.png"
      },
      "r": {
        "name": "Marguerite !",
        "description": "Ivern invoque son amie Marguerite, une sentinelle, pour qu'elle combatte à ses côtés. Relancez la compétence pour ordonner à Marguerite d'attaquer ou de se déplacer.",
        "icon": "IvernR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Gameplay Update",
        "date": "2023-06-01",
        "kitAffecting": true,
        "source": {
          "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-13-11-notes/",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2023-06-01",
      "source": {
        "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-13-11-notes/",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Ivern | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=C8fUpMWGBcs",
        "published": "2016-10-03",
        "duration": 397
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Ivern: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=Y-gsY5oAsL0",
        "published": "2016-10-03",
        "duration": 397
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Ivern Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=9-f-QkldYyA",
        "published": "2025-09-22",
        "duration": 180
      }
    ],
    "releaseDate": "2016-10-05"
  },
  {
    "id": "janna",
    "key": "0040",
    "ddid": "Janna",
    "name": "Janna",
    "title": "Avatar de l'air",
    "roles": {
      "sup": {
        "tier": "A",
        "wr": 51.61,
        "pr": 3.97,
        "ban": 0.85
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 3,
      "magic": 7
    },
    "class": "Soutien / Mage",
    "strengths": [
      "Œil du cyclone peut être utilisé sur les tourelles alliées.",
      "Vite lancer Vent hurlant sans le charger peut surprendre toute l'équipe adverse.",
      "Lancer l'ultime de Janna au bon moment peut sauver un allié blessé ou même séparer des ennemis."
    ],
    "counters": [
      "Conservez une compétence qui vous permettra d'interrompre Janna lorsqu'elle utilise son ultime.",
      "Guettez le son du chargement de Vent hurlant : Janna peut vous le lancer en étant hors écran ou dans des herbes hautes.",
      "Janna est à son apogée quand elle enchante un autre allié. Si vous pouvez harceler son allié, cela affaiblit sa capacité à vous combattre."
    ],
    "abilities": {
      "passive": {
        "name": "Zéphyr",
        "description": "Les alliés de Janna gagnent de la vitesse de déplacement quand ils se dirigent vers elle.<br><br>Les dégâts à l'impact de Janna et Alizé infligent des dégâts magiques supplémentaires équivalents à une partie de sa vitesse de déplacement bonus.",
        "icon": "JannaP.png"
      },
      "q": {
        "name": "Vent hurlant",
        "description": "En modifiant localement la pression et la température, Janna peut créer une petite tornade qui croît en taille avec le temps. Elle peut activer une nouvelle fois le sort pour libérer la tornade. Elle fonce alors dans la direction de l'invocation, projetant en l'air les ennemis sur son passage et leur infligeant des dégâts.",
        "icon": "HowlingGale.png"
      },
      "w": {
        "name": "Alizé",
        "description": "Janna invoque un élémentaire d'air qui, passivement, augmente sa vitesse de déplacement et lui permet de traverser les unités. Elle peut aussi activer cette compétence pour infliger des dégâts et réduire la vitesse de déplacement d'un ennemi.",
        "icon": "SowTheWind.png"
      },
      "e": {
        "name": "Œil du cyclone",
        "description": "Janna invoque une tempête défensive qui protège un champion allié ou une tourelle alliée contre les dégâts et qui augmente ses dégâts d'attaque.",
        "icon": "EyeOfTheStorm.png"
      },
      "r": {
        "name": "Mousson",
        "description": "Janna s'entoure d'une puissante tempête magique, repoussant au loin les ennemis. Quand la tempête est terminée, les dernières brises soignent les alliés proches tant que la compétence est active.",
        "icon": "ReapTheWhirlwind.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2022-10-05",
        "kitAffecting": false,
        "source": {
          "url": "https://www.reddit.com/r/LeaguePBE/comments/xiiwda/janna_vfx_update/",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2022-01-20",
        "kitAffecting": true,
        "source": {
          "url": "https://twitter.com/RiotAugust/status/1469062516370071552",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2015-03-12",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://euw.leagueoflegends.com/en/news/game-updates/patch/patch-55-notes/",
          "label": null
        }
      },
      {
        "type": "Visual Update",
        "date": "2011-07-25",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/board/showthread.php?t=1016177",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2022-01-20",
      "source": {
        "url": "https://twitter.com/RiotAugust/status/1469062516370071552",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Yunara Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=gG09J6Vxbgo",
        "published": "2025-06-24",
        "duration": 190
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Janna Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=R9snajqYYYg",
        "published": "2025-07-23",
        "duration": 180
      }
    ],
    "releaseDate": "2009-09-02"
  },
  {
    "id": "jarvaniv",
    "key": "0059",
    "ddid": "JarvanIV",
    "name": "Jarvan IV",
    "title": "Exemple demacien",
    "roles": {
      "jgl": {
        "tier": "B",
        "wr": 49.49,
        "pr": 5.85,
        "ban": 1.22
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 6,
      "magic": 3
    },
    "class": "Combattant / Tank",
    "strengths": [
      "Vous pouvez combiner Frappe du dragon et Étendard demacien pour sortir de vos arènes de Cataclysme.",
      "Au début des combats, frappez différents champions ennemis pour maximiser les dégâts.",
      "Utilisez Étendard demacien comme un outil de reconnaissance si vous avez peur d'être pris par surprise."
    ],
    "counters": [
      "Ne restez pas entre Jarvan IV et son Étendard demacien, afin de ne pas être projeté dans les airs.",
      "L'arène de Cataclysme est plutôt effrayante, mais les compétences de mouvement peuvent permettre de la traverser."
    ],
    "abilities": {
      "passive": {
        "name": "Cadence martiale",
        "description": "La première attaque de base de Jarvan IV sur un ennemi inflige des dégâts physiques supplémentaires selon un pourcentage des PV actuels de la cible. Cet effet ne peut ensuite plus être infligé au même ennemi pendant quelques secondes.",
        "icon": "JarvanIVP.png"
      },
      "q": {
        "name": "Frappe du dragon",
        "description": "Jarvan IV allonge sa lance, infligeant des dégâts physiques et réduisant l'armure des ennemis sur son chemin. En outre, cela peut ramener Jarvan à son Étendard demacien, projetant les ennemis dans les airs au passage.",
        "icon": "JarvanIVDragonStrike.png"
      },
      "w": {
        "name": "Égide dorée",
        "description": "Jarvan IV implore les anciens rois de Demacia de le protéger et de ralentir les ennemis proches.",
        "icon": "JarvanIVGoldenAegis.png"
      },
      "e": {
        "name": "Étendard demacien",
        "description": "Jarvan IV porte la fierté de Demacia, ce qui lui octroie passivement un bonus en vitesse d'attaque. Activer Étendard demacien permet à Jarvan IV de planter un drapeau demacien, infligeant des dégâts magiques à l'impact et augmentant la vitesse d'attaque des champions alliés proches.",
        "icon": "JarvanIVDemacianStandard.png"
      },
      "r": {
        "name": "Cataclysme",
        "description": "Jarvan IV bondit héroïquement sur une cible avec une telle force qu'il transforme la zone autour de lui en une arène. Les ennemis proches sont blessés lors de l'impact.",
        "icon": "JarvanIVCataclysm.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2018-09-26",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/game-updates/patch/patch-819-notes",
          "label": null
        }
      },
      {
        "type": "Sound (SFX) Update",
        "date": "2018-07-18",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/game-updates/patch/patch-814-notes#patch-sfx-updates",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2015-01-28",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://euw.leagueoflegends.com/en/news/game-updates/patch/patch-52-notes/",
          "label": null
        }
      }
    ],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Jarvan IV: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=RgOdf3x24qA",
        "published": "2011-03-01",
        "duration": 379
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Jarvan IV Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=w0EFBR2hVdY",
        "published": "2024-10-14",
        "duration": 180
      }
    ],
    "releaseDate": "2011-03-01"
  },
  {
    "id": "jax",
    "key": "0024",
    "ddid": "Jax",
    "name": "Jax",
    "title": "Maître d'armes",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 49.35,
        "pr": 5.89,
        "ban": 10.02
      },
      "jgl": {
        "tier": "B",
        "wr": 49.19,
        "pr": 1.79,
        "ban": 9.97
      }
    },
    "damageType": "Mixte",
    "dmgRating": {
      "attack": 7,
      "magic": 7
    },
    "class": "Combattant",
    "strengths": [
      "Jax peut utiliser Frappe bondissante pour rejoindre des alliés, y compris des balises. Vous pouvez l'utiliser pour fuir.",
      "Jax profite grandement des objets augmentant à la fois les dégâts d'attaque et la puissance, tels que Lame enragée de Guinsoo et Pistolame Hextech."
    ],
    "counters": [
      "Essayez d'engager le combat avec de courtes attaques au lieu de l'affronter en force. L'empêcher de cumuler les attaques successives réduit le montant de dégâts qu'il inflige.",
      "Jax peut esquiver toutes les attaques pendant un très bref instant et, tout de suite après, étourdir les ennemis au contact. Attendez la fin de ses esquives pour attaquer."
    ],
    "abilities": {
      "passive": {
        "name": "Acharnement",
        "description": "Les attaques de base successives de Jax augmentent continuellement sa vitesse d'attaque.",
        "icon": "Armsmaster_MasterOfArms.png"
      },
      "q": {
        "name": "Frappe bondissante",
        "description": "Jax bondit sur une unité. S'il s'agit d'un ennemi, il le frappe avec son arme.",
        "icon": "JaxQ.png"
      },
      "w": {
        "name": "Élargissement",
        "description": "Jax charge son arme en énergie pour infliger des dégâts supplémentaires avec sa prochaine attaque.",
        "icon": "JaxW.png"
      },
      "e": {
        "name": "Contre-attaque",
        "description": "Jax est capable d'esquiver toutes les attaques pendant un bref instant puis d'étourdir tous les ennemis proches en contre-attaquant.",
        "icon": "JaxE.png"
      },
      "r": {
        "name": "Maître d'armes",
        "description": "Toutes les trois attaques consécutives, Jax inflige des dégâts magiques supplémentaires. De plus, Jax peut activer cette compétence pour infliger des dégâts autour de lui et renforcer sa détermination, ce qui augmente son armure et sa résistance magique pendant un court instant.",
        "icon": "JaxR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual Update",
        "date": "2023-10-11",
        "kitAffecting": false,
        "source": {
          "url": "https://www.leagueoflegends.com/en-us/news/dev/champion-roadmap-april-2023/",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2023-01-10",
        "kitAffecting": true,
        "source": {
          "url": "https://twitter.com/RiotAugust/status/1598484034853953538",
          "label": null
        }
      },
      {
        "type": "Visual (VFX) Update",
        "date": "2019-05-01",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://boards.na.leagueoflegends.com/en/c/developer-corner/F4ZuqAZ7-vfx-updates-for-ashe-blitzcrank-caitlyn-and-jax-plus-an-sfx-update-for-renekton",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-11-20",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-420-notes",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2012-01-16",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://forums.na.leagueoflegends.com/board/showthread.php?t=1534325&page=1#post17779011",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2023-01-10",
      "source": {
        "url": "https://twitter.com/RiotAugust/status/1598484034853953538",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Jax: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=B18qApcVCRg",
        "published": "2012-01-12",
        "duration": 427
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Jax Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=M-8rBiR-yiw",
        "published": "2025-10-24",
        "duration": 180
      }
    ],
    "releaseDate": "2009-02-21"
  },
  {
    "id": "jayce",
    "key": "0126",
    "ddid": "Jayce",
    "name": "Jayce",
    "title": "Protecteur du futur",
    "roles": {
      "top": {
        "tier": "B",
        "wr": 47.59,
        "pr": 5.51,
        "ban": 5.94
      },
      "jgl": {
        "tier": "C",
        "wr": 48.19,
        "pr": 1.83,
        "ban": 5.89
      },
      "mid": {
        "tier": "C",
        "wr": 47.35,
        "pr": 0.81,
        "ban": 5.82
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 3
    },
    "class": "Combattant / Tireur",
    "strengths": [
      "Changez souvent de posture ; cela renforcera vos attaques et vous gagnerez temporairement de la vitesse.",
      "Si vous subissez beaucoup de dégâts, utilisez le marteau de Jayce, car il améliore vos défenses.",
      "Lancez votre Orbe électrique à travers le Portail d'accélération pour qu'il aille plus loin et fasse plus de dégâts."
    ],
    "counters": [
      "Jayce peut attaquer au corps à corps ou à distance. Observez sa posture et la couleur de son arme pour savoir comment il va attaquer.",
      "Si vous voyez Jayce poser un Portail d'accélération, faites attention : il va sûrement lancer Orbe électrique.",
      "Jayce est fort en début de partie. S'il prend l'avantage, soyez défensif."
    ],
    "abilities": {
      "passive": {
        "name": "Capaciteur Hextech",
        "description": "Quand Jayce change d'arme, il gagne un bonus en vitesse de déplacement pendant un court instant.",
        "icon": "Jayce_Passive.png"
      },
      "q": {
        "name": "Direction le ciel ! / Orbe électrique",
        "description": "Marteau : bondit sur un ennemi, infligeant des dégâts physiques et ralentissant les ennemis.<br><br>Canon : tire un orbe qui explose en touchant un ennemi ou en arrivant au bout de sa course, infligeant des dégâts physiques à tous les ennemis touchés.",
        "icon": "JayceToTheSkies.png"
      },
      "w": {
        "name": "Champ électrique / Hypercharge",
        "description": "Marteau - Passive : rend du mana à chaque attaque.<br>Active : crée un champ d'électricité qui blesse les ennemis proches pendant plusieurs secondes.<br><br>Canon : provoque une poussée d'énergie, augmentant la vitesse d'attaque au maximum pour plusieurs attaques.",
        "icon": "JayceStaticField.png"
      },
      "e": {
        "name": "Coup foudroyant / Portail d'accélération",
        "description": "Marteau : inflige des dégâts magiques à un ennemi et le repousse sur une courte distance.<br><br>Canon : déploie un Portail d'accélération qui augmente la vitesse de déplacement de tous les champions alliés le traversant. Si Orbe électrique passe le portail, la vitesse, la portée et les dégâts du projectile augmentent.",
        "icon": "JayceThunderingBlow.png"
      },
      "r": {
        "name": "Canon Mercury / Marteau Mercury",
        "description": "Marteau : transforme le Marteau Mercury en Canon Mercury, offrant à Jayce de nouvelles compétences et augmentant sa portée. La première attaque avec le canon réduit l'armure et la résistance magique de l'ennemi.<br>Canon : transforme le Canon Mercury en Marteau Mercury, offrant à Jayce de nouvelles compétences et augmentant ses résistances aux dégâts. La première attaque avec le marteau infligera des dégâts magiques supplémentaires.",
        "icon": "JayceStanceHtG.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX and SFX) Update",
        "date": "2021-11-03",
        "kitAffecting": false,
        "source": {
          "url": "https://www.reddit.com/r/LeaguePBE/comments/qcm467/jinx_jayce_vfx_and_sfx_update/",
          "label": null
        }
      }
    ],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Jayce: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=p2YuyBZ_zMU",
        "published": "2012-07-07",
        "duration": 346
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Jayce Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=118-xouINQs",
        "published": "2025-12-24",
        "duration": 180
      }
    ],
    "releaseDate": "2012-07-07"
  },
  {
    "id": "jhin",
    "key": "0202",
    "ddid": "Jhin",
    "name": "Jhin",
    "title": "Virtuose",
    "roles": {
      "adc": {
        "tier": "A",
        "wr": 49.55,
        "pr": 16.29,
        "ban": 1.36
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 10,
      "magic": 6
    },
    "class": "Tireur / Mage",
    "strengths": [
      "Floraison mortelle profite d'une portée incroyable. Lorsque vous vous rapprochez d'un combat, pensez à chercher à l'avance des ennemis qui pourraient être immobilisés.",
      "Votre ultime inflige beaucoup moins de dégâts aux ennemis dont la jauge de PV est pleine. Essayez d'éliminer les cibles affaiblies lorsqu'elles tentent de fuir.",
      "Vous pouvez toujours utiliser vos sorts, même quand vous rechargez. Profitez-en pour ne pas rester à ne rien faire."
    ],
    "counters": [
      "Floraison mortelle n'immobilise que des cibles qui ont été touchées par une attaque de base, un piège ou un allié de Jhin au cours des 4 dernières secondes.",
      "Jhin place des pièges invisibles sur la carte. Attention où vous mettez les pieds !",
      "Les attaques de Jhin sont assez puissantes, mais il doit recharger tous les 4 tirs. Profitez de cette fenêtre d'opportunité pour lui sauter dessus et l'éliminer."
    ],
    "abilities": {
      "passive": {
        "name": "Murmure",
        "description": "Le pistolet de Jhin, Murmure, est un instrument de précision capable d'infliger de lourds dégâts. Sa cadence de tir est fixe et il ne peut tirer que quatre balles avant de devoir être rechargé. Jhin insuffle à la dernière balle un soupçon de magie noire qui lui permet de toujours infliger un coup critique et des dégâts supplémentaires. Quand Murmure inflige un coup critique, Jhin reçoit un bonus en vitesse de déplacement.",
        "icon": "Jhin_P.png"
      },
      "q": {
        "name": "Grenade dansante",
        "description": "Jhin lance une bombe magique sur un ennemi. Elle peut toucher jusqu'à quatre cibles et ses dégâts augmentent après chaque coup fatal.",
        "icon": "JhinQ.png"
      },
      "w": {
        "name": "Floraison mortelle",
        "description": "Jhin brandit sa canne et tire une unique balle à très longue portée. Elle transperce les sbires et les monstres, mais s'arrête au premier champion touché. Si la cible avait récemment été blessée par Jhin ou touchée par les alliés de Jhin ou un piège-lotus, elle est immobilisée.",
        "icon": "JhinW.png"
      },
      "e": {
        "name": "Public captif",
        "description": "Jhin pose un piège-lotus invisible qui fleurit quand un ennemi marche dessus. Il ralentit les ennemis proches avant de leur infliger des dégâts dans une explosion de pétales lacérants. <br><br><font color='#FFFFFF'>Beauté dans la mort :</font> quand Jhin tue un champion ennemi, un piège-lotus fleurit près de son cadavre.",
        "icon": "JhinE.png"
      },
      "r": {
        "name": "Rappel de rideau",
        "description": "Après une canalisation, Jhin transforme Murmure en méga-canon d'épaule. Il peut alors tirer 4 super balles à très longue portée qui transpercent les sbires et les monstres, mais s'arrêtent au premier champion touché. Murmure estropie les ennemis touchés, ce qui les ralentit et leur inflige des dégâts supplémentaires. Le 4e tir est parfaitement calibré et puissant, et il inflige toujours un coup critique.",
        "icon": "JhinR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Jhin",
        "url": "https://www.youtube.com/watch?v=mJ44ugbhDb4",
        "published": "2016-01-31",
        "duration": 509
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Jhin: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=QvNw0A-D0T0",
        "published": "2016-01-31",
        "duration": 508
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Jhin Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=iB7ZpC9ZKTI",
        "published": "2025-06-27",
        "duration": 180
      }
    ],
    "releaseDate": "2016-02-01"
  },
  {
    "id": "jinx",
    "key": "0222",
    "ddid": "Jinx",
    "name": "Jinx",
    "title": "Gâchette folle",
    "roles": {
      "adc": {
        "tier": "S",
        "wr": 52.31,
        "pr": 17.33,
        "ban": 6.42
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 9,
      "magic": 4
    },
    "class": "Tireur",
    "strengths": [
      "Les roquettes ne sont pas toujours la meilleure solution ! Le minigun de Jinx est incroyablement puissant quand il tourne au maximum. Passez au minigun quand un champion ennemi approche un peu trop.",
      "Les roquettes de Jinx infligent la totalité des dégâts à tous les ennemis touchés par l'explosion. Lancez-les sur des sbires pour frapper les champions ennemis proches sans attirer l'attention des sbires.",
      "Quand un combat éclate, restez en périphérie du combat et utilisez vos roquettes et Zap !. N'approchez et ne sortez votre minigun que si c'est sans danger."
    ],
    "counters": [
      "Le minigun de Jinx met du temps à s'activer. Si elle enchaîne les roquettes, essayez de lui bondir dessus et de la tuer rapidement.",
      "Plus vous êtes proche de Jinx, moins son ultime vous inflige de dégâts.",
      "Les grenades immobilisantes de Jinx ont un long délai de récupération et sont sa principale défense. Si elle rate sa cible avec ses grenades, elle aura du mal à s'en sortir si on l'attaque."
    ],
    "abilities": {
      "passive": {
        "name": "Enthousiasme !",
        "description": "Jinx reçoit un énorme bonus en vitesse de déplacement et en vitesse d'attaque quand elle participe à l'élimination/destruction d'un champion, d'un monstre épique de la jungle ou d'un bâtiment.",
        "icon": "Jinx_Passive.png"
      },
      "q": {
        "name": "Flip flap !",
        "description": "Jinx modifie ses attaques de base en optant pour Bang-Bang, son minigun, ou Poiscaille, son lance-roquettes. Les attaques avec Bang-Bang augmentent la vitesse d'attaque, tandis que les attaques avec Poiscaille infligent des dégâts de zone et ont une plus grande portée, mais drainent du mana et sont plus lentes.",
        "icon": "JinxQ.png"
      },
      "w": {
        "name": "Zap !",
        "description": "Jinx utilise Zapper, son pistolet, pour tirer un rayon qui inflige des dégâts au premier ennemi touché, le ralentit et le révèle.",
        "icon": "JinxW.png"
      },
      "e": {
        "name": "Pyromâcheurs !",
        "description": "Jinx lance des grenades immobilisantes qui explosent au bout de 5 sec et mettent le feu aux ennemis. Les Pyromâcheurs mordent les champions ennemis qui leur marchent dessus, les immobilisant.",
        "icon": "JinxE.png"
      },
      "r": {
        "name": "Super roquette de la mort !",
        "description": "Jinx tire une super roquette qui traverse la carte et dont les dégâts augmentent pendant le trajet. La roquette explose au contact d'un champion ennemi, infligeant des dégâts à ce champion et aux ennemis proches en fonction de leurs PV manquants.",
        "icon": "JinxR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2021-11-03",
        "kitAffecting": false,
        "source": {
          "url": "https://www.reddit.com/r/LeaguePBE/comments/qcm467/jinx_jayce_vfx_and_sfx_update/",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2015-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
          "label": "Marksmen"
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2015-11-10",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
        "label": "Marksmen"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Jinx: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=KN3OYwP8nHE",
        "published": "2013-10-09",
        "duration": 499
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Jinx Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=WEhN1It471w",
        "published": "2026-02-07",
        "duration": 180
      }
    ],
    "releaseDate": "2013-10-10"
  },
  {
    "id": "ksante",
    "key": "0897",
    "ddid": "KSante",
    "name": "K'Sante",
    "title": "Fierté de Nazumah",
    "roles": {
      "top": {
        "tier": "B",
        "wr": 46.99,
        "pr": 3.73,
        "ban": 2.49
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 7
    },
    "class": "Tank / Combattant",
    "strengths": [],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "Instinct intrépide",
        "description": "Les compétences de K'Santé marquent ses cibles pour que sa prochaine attaque leur inflige plus de dégâts.<br><br>Dans sa forme Grand jeu, les attaques et les compétences de K'Santé infligent plus de dégâts.",
        "icon": "Icons_KSante_P.png"
      },
      "q": {
        "name": "Coups de ntofo",
        "description": "K'Santé frappe le sol, blessant et ralentissant tous les ennemis sur une courte ligne.<br><br>À l'impact, cela lui octroie un effet Coups de ntofo. À 2 effets cumulés, K'Santé lance une onde de choc qui attire les ennemis à lui.<br><br>Dans sa forme Grand jeu, le délai de récupération est réduit.",
        "icon": "KSanteQ.png"
      },
      "w": {
        "name": "Pour Nazumah !",
        "description": "K'Santé charge son attaque, subissant moins de dégâts avant de se ruer en avant, ce qui repousse et étourdit les ennemis.<br><br>En forme Grand jeu, K'Santé inflige des dégâts bonus et ne repousse ni n'étourdit plus.",
        "icon": "KSanteW.png"
      },
      "e": {
        "name": "Jeu de jambes",
        "description": "K'Santé se rue vers sa cible et gagne un bouclier. S'il cible un allié, la ruée de K'Santé a une plus grande portée et son allié gagne également un bouclier.<br><br>Dans sa forme Grand jeu, le délai de récupération est réduit et la vitesse de la ruée est augmentée.",
        "icon": "KSanteE.png"
      },
      "r": {
        "name": "Grand jeu",
        "description": "K'Santé repousse un ennemi, le forçant à traverser tout mur sur sa trajectoire. Puis, K'Santé sort le Grand jeu et se rue sur l'ennemi, renforce ses dégâts et ses soins, et transforme ses compétences, au détriment de ses défenses.",
        "icon": "KSanteR.png"
      }
    },
    "sourceNotes": [
      {
        "field": "strengths",
        "note": "Conseils officiels non affichés : ceux fournis par Data Dragon pour K'Santé sont, mot pour mot, ceux de Lee Sin (Onde sonore, Rage du dragon…) — erreur de la source, identique dans les données en_US.",
        "url": "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
        "retrieved": "2026-09-08"
      },
      {
        "field": "counters",
        "note": "Idem « strengths » : conseils « en jouant contre » de Data Dragon = ceux de Lee Sin, non affichés.",
        "url": "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
        "retrieved": "2026-09-08"
      }
    ],
    "reworkHistory": [
      {
        "type": "Gameplay Update",
        "date": "2024-09-25",
        "kitAffecting": true,
        "source": {
          "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-14-19-notes/",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2024-09-25",
      "source": {
        "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-14-19-notes/",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur K'Santé | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=bxjn9MLfxKw",
        "published": "2022-11-03",
        "duration": 312
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "K’Sante Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=sJupa3WcN88",
        "published": "2022-11-03",
        "duration": 312
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute K'Sante Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=G13eOUoZZPg",
        "published": "2024-10-08",
        "duration": 180
      }
    ],
    "releaseDate": "2022-11-02"
  },
  {
    "id": "kaisa",
    "key": "0145",
    "ddid": "Kaisa",
    "name": "Kai'Sa",
    "title": "Fille du Néant",
    "roles": {
      "adc": {
        "tier": "A",
        "wr": 49.34,
        "pr": 20.06,
        "ban": 4.96
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 3
    },
    "class": "Tireur / Mage",
    "strengths": [
      "Surprenez les carrys ennemis quand ils sont seuls pour les abattre avec Pluie d'Icathia.",
      "Collaborez avec vos équipiers pour placer votre ultime, et optimisez vos dégâts avec votre compétence passive.",
      "Pensez à acheter des objets qui feront évoluer au moins 1 ou 2 de vos sorts."
    ],
    "counters": [
      "Kai'Sa est redoutable contre les ennemis isolés, alors restez près de vos alliés.",
      "Kai'Sa peut être contrée par la grande portée des mages et de certains carrys.",
      "Pensez à placer des balises dans vos angles morts pour voir arriver Kai'Sa."
    ],
    "abilities": {
      "passive": {
        "name": "Seconde peau",
        "description": "Les attaques de base de Kai'Sa appliquent des effets Plasma, infligeant de plus en plus de dégâts magiques supplémentaires. Les effets immobilisants des alliés appliquent aussi des effets Plasma. De plus, les objets achetés par Kai'Sa améliorent ses sorts de base en leur offrant des propriétés plus puissantes.",
        "icon": "Kaisa_Passive.png"
      },
      "q": {
        "name": "Pluie d'Icathia",
        "description": "Kai'Sa tire une volée de projectiles qui traquent les cibles proches.<br><br>Arme vivante : Pluie d'Icathia est améliorée pour tirer davantage de projectiles.",
        "icon": "KaisaQ.png"
      },
      "w": {
        "name": "Rayon du Néant",
        "description": "Kai'Sa tire un projectile à longue portée, marquant les ennemis avec sa compétence passive.<br><br>Arme vivante : Rayon du Néant est amélioré pour appliquer davantage de marques passives et pour réduire son délai de récupération contre les champions.",
        "icon": "KaisaW.png"
      },
      "e": {
        "name": "Surpresseur",
        "description": "Kai'Sa augmente brièvement sa vitesse de déplacement, puis augmente sa vitesse d'attaque.<br><br>Arme vivante : Surpresseur est amélioré pour octroyer une brève invisibilité.",
        "icon": "KaisaE.png"
      },
      "r": {
        "name": "Instinct meurtrier",
        "description": "Kai'Sa effectue une ruée jusqu'à un champion ennemi.",
        "icon": "KaisaR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Kai'Sa | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=F7KwfPgbg5Y",
        "published": "2018-03-06",
        "duration": 273
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Kai’Sa Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=yLNMZt3FvFo",
        "published": "2018-03-05",
        "duration": 273
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Kai'sa Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=-guM_2kESCo",
        "published": "2025-09-06",
        "duration": 180
      }
    ],
    "releaseDate": "2018-03-07"
  },
  {
    "id": "kalista",
    "key": "0429",
    "ddid": "Kalista",
    "name": "Kalista",
    "title": "Lance de la vengeance",
    "roles": {
      "adc": {
        "tier": "A",
        "wr": 49.06,
        "pr": 2.96,
        "ban": 0.66
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 4
    },
    "class": "Tireur",
    "strengths": [
      "Extirpation aide à achever des unités, car son délai de récupération prend fin si la cible meurt sur le coup.",
      "Donner un ordre de déplacement pour déclencher Maintien martial ne vous fait pas perdre la cible de votre attaque de base.",
      "Compte tenu de sa compétence passive, la mobilité de Kalista augmente avec sa vitesse d'attaque."
    ],
    "counters": [
      "La mobilité de Kalista dépend de son attaque, ce qui signifie qu'elle est faible quand Kalista est trop loin pour attaquer et que les ralentissements de vitesse d'attaque réduisent la distance qu'elle peut parcourir lors d'un engagement.",
      "Kalista ne peut pas annuler l'animation de son attaque de base. Elle est très mobile, mais cela vous offre l'occasion d'utiliser vos sorts contre elle si vous anticipez le début de son attaque.",
      "Si vous quittez le champ de vision de Kalista (en entrant par exemple dans des hautes herbes), ses attaques de base vous rateront."
    ],
    "abilities": {
      "passive": {
        "name": "Maintien martial",
        "description": "Donnez un ordre de déplacement pendant l'animation de l'attaque de base ou de la Perforation de Kalista pour bondir sur une petite distance dans cette direction après avoir lancé l'attaque.",
        "icon": "Kalista_Passive.png"
      },
      "q": {
        "name": "Perforation",
        "description": "Kalista projette une lance rapide qui traverse les ennemis ainsi tués.",
        "icon": "KalistaMysticShot.png"
      },
      "w": {
        "name": "Sentinelle",
        "description": "Inflige des dégâts supplémentaires quand Kalista et son pactisant frappent la même cible. <br><br>Activez pour envoyer une âme patrouiller le long d'une route, révélant la zone devant elle.",
        "icon": "KalistaW.png"
      },
      "e": {
        "name": "Extirpation",
        "description": "Les attaques plantent des lances dans leurs cibles. Activez pour extirper les lances, ralentissant les ennemis et leur infligeant des dégâts augmentés.",
        "icon": "KalistaExpungeWrapper.png"
      },
      "r": {
        "name": "Appel du destin",
        "description": "Kalista téléporte le pactisant allié auprès d'elle. Le pactisant peut ensuite charger vers une position pour repousser tous les champions ennemis proches.",
        "icon": "KalistaRx.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Class-scale Update",
        "date": "2015-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
          "label": "Marksmen"
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2015-11-10",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
        "label": "Marksmen"
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Kalista",
        "url": "https://www.youtube.com/watch?v=9j8B37V4Z7E",
        "published": "2014-11-19",
        "duration": 574
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Kalista: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=XCR-tMpKtt8",
        "published": "2014-11-19",
        "duration": 572
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Kalista Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=evIZoBLphRY",
        "published": "2025-10-22",
        "duration": 180
      }
    ],
    "releaseDate": "2014-11-20"
  },
  {
    "id": "karma",
    "key": "0043",
    "ddid": "Karma",
    "name": "Karma",
    "title": "Sagesse incarnée",
    "roles": {
      "sup": {
        "tier": "B",
        "wr": 48.88,
        "pr": 7.01,
        "ban": 3.1
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 1,
      "magic": 8
    },
    "class": "Mage / Soutien",
    "strengths": [
      "Concentration ardente favorise l'agressivité. Lancez des compétences et des attaques de base pour réduire le délai de récupération de Mantra et ainsi continuer l'offensive.",
      "Quand vous utilisez Volonté concentrée, ralentissez vos ennemis avec Flamme intérieure ou accélérez avec Exaltation si vous avez du mal à suivre votre cible.",
      "Ne cherchez pas à conserver Mantra. Concentration ardente est plus puissante en combat d'équipes, ce qui permet de facilement recharger Mantra plusieurs fois."
    ],
    "counters": [
      "La compétence passive de Karma réduit le délai de récupération de Mantra quand elle frappe un champion ennemi avec une compétence ou une attaque de base. Empêchez-la de vous attaquer.",
      "La Flamme persistante de Karma explose pour infliger des dégâts supplémentaires dans sa zone d'effet. Réagissez vite et sortez du cercle pour ne pas subir d'importants dégâts.",
      "Volonté concentrée est un puissant outil de fuite. Éloignez-vous pour ne pas être immobilisé, puis repartez à l'assaut."
    ],
    "abilities": {
      "passive": {
        "name": "Concentration ardente",
        "description": "Les compétences de Karma qui infligent des dégâts réduisent le délai de récupération de Mantra.",
        "icon": "Karma_Passive.png"
      },
      "q": {
        "name": "Flamme intérieure",
        "description": "Karma envoie une boule d'énergie spirituelle qui explose et inflige des dégâts au contact d'une unité ennemie.<br><br>Bonus Mantra : en plus de l'explosion, Mantra augmente la puissance destructrice de Flamme intérieure, créant un cataclysme qui inflige des dégâts après un court délai.",
        "icon": "KarmaQ.png"
      },
      "w": {
        "name": "Volonté concentrée",
        "description": "Karma se lie à un ennemi, lui infligeant des dégâts et le révélant. Si le lien n'est pas brisé, l'ennemi sera immobilisé et subira de nouveau des dégâts.<br><br>Bonus Mantra : Karma renforce le lien, ce qui la soigne et prolonge la durée de l'immobilisation.",
        "icon": "KarmaSpiritBind.png"
      },
      "e": {
        "name": "Exaltation",
        "description": "Karma invoque un bouclier qui absorbe les dégâts et qui augmente la vitesse de déplacement de l'allié protégé.<br><br>Bonus Mantra : de l'énergie se diffuse depuis la cible, renforçant le bouclier initial et octroyant Exaltation aux champions alliés proches.",
        "icon": "KarmaSolKimShield.png"
      },
      "r": {
        "name": "Mantra",
        "description": "Karma renforce sa prochaine compétence pour qu'elle ait un effet supplémentaire. Mantra est disponible au niveau 1 sans nécessiter de point de compétence.",
        "icon": "KarmaMantra.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2013-03-27",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/board/showthread.php?t=3224791",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2013-03-27",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/board/showthread.php?t=3224791",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Karma: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=lWIj3IRz8DI",
        "published": "2013-03-29",
        "duration": 383
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Karma Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=1z93d3-C2X4",
        "published": "2026-06-12",
        "duration": 180
      }
    ],
    "releaseDate": "2011-02-01"
  },
  {
    "id": "karthus",
    "key": "0030",
    "ddid": "Karthus",
    "name": "Karthus",
    "title": "Liche",
    "roles": {
      "jgl": {
        "tier": "B",
        "wr": 49.39,
        "pr": 1.37,
        "ban": 0.86
      },
      "adc": {
        "tier": "S",
        "wr": 53.15,
        "pr": 0.55,
        "ban": 0.81
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 2,
      "magic": 10
    },
    "class": "Mage",
    "strengths": [
      "Demandez à vos alliés de vous signaler quand utiliser Requiem pour des effets optimisés sur plusieurs voies.",
      "Dévastation est très pratique pour éliminer rapidement les sbires et harceler les champions ennemis."
    ],
    "counters": [
      "Karthus peut lancer des sorts un court moment après sa mort. Partez loin de lui quand il décède.",
      "Assurez-vous d'avoir toujours assez de PV pour survivre à Requiem, même si vous devez revenir plus souvent à la base pour vous soigner."
    ],
    "abilities": {
      "passive": {
        "name": "Déni de mort",
        "description": "Lorsqu'il meurt, Karthus prend une forme spirituelle qui lui permet de continuer à lancer des sorts.",
        "icon": "Karthus_Passive.png"
      },
      "q": {
        "name": "Dévastation",
        "description": "Karthus crée une explosion à retardement, infligeant des dégâts aux ennemis proches. Les ennemis isolés subissent plus de dégâts.",
        "icon": "KarthusLayWasteA1.png"
      },
      "w": {
        "name": "Mur de douleur",
        "description": "Karthus crée un mur d'énergie. Les ennemis franchissant le mur voient leur vitesse de déplacement et leur résistance magique temporairement réduites.",
        "icon": "KarthusWallOfPain.png"
      },
      "e": {
        "name": "Souillure",
        "description": "Karthus vole passivement l'énergie de ses victimes, gagnant du mana à chaque élimination. Karthus peut aussi s'immerger dans les âmes de ses proies, infligeant des dégâts aux ennemis proches mais au prix d'une grande perte de mana.",
        "icon": "KarthusDefile.png"
      },
      "r": {
        "name": "Requiem",
        "description": "Après une canalisation de 3 secondes, Karthus inflige des dégâts à tous les champions ennemis.",
        "icon": "KarthusFallenOne.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual Update",
        "date": "2014-06-04",
        "kitAffecting": false,
        "source": {
          "url": "http://na.leagueoflegends.com/en/news/champions-skins/champion-relaunch/karthus-visual-update-brings-death-march-masses",
          "label": null
        }
      }
    ],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur : Karthus, Liche",
        "url": "https://www.youtube.com/watch?v=4QnTNU6uILw",
        "published": "2014-06-18",
        "duration": 448
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Karthus: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=zSKw3m7JGvg",
        "published": "2014-06-14",
        "duration": 448
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Karthus Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=NOThbb_1NbI",
        "published": "2024-01-03",
        "duration": 180
      }
    ],
    "releaseDate": "2009-06-12"
  },
  {
    "id": "kassadin",
    "key": "0038",
    "ddid": "Kassadin",
    "name": "Kassadin",
    "title": "Chasseur du Néant",
    "roles": {
      "mid": {
        "tier": "B",
        "wr": 49.71,
        "pr": 2.74,
        "ban": 2.32
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 3,
      "magic": 8
    },
    "class": "Assassin / Mage",
    "strengths": [
      "Plusieurs arbres de développement d'objets sont possibles avec Kassadin : il peut devenir mage en développant son mana et sa puissance ou contrer les mages en développant sa résistance magique et la réduction de ses délais de récupération.",
      "L'ultime de Kassadin est très polyvalent et a un délai de récupération court, servez-vous-en souvent.",
      "Essayez d'obtenir l'enchantement de la sentinelle bleue pour atténuer le coût en mana de Fissure."
    ],
    "counters": [
      "Kassadin inflige principalement des dégâts magiques. En cas de difficulté, achetez des objets améliorant la résistance magique, comme Sandales de Mercure ou Voile de la banshee.",
      "Il ne faut que 6 lancers de sort pour que Kassadin puisse utiliser Pulsation. S'il améliore cette compétence, méfiez-vous quand vous utilisez des sorts près de lui."
    ],
    "abilities": {
      "passive": {
        "name": "Pierre du Néant",
        "description": "Kassadin subit moins de dégâts magiques et peut traverser les unités.",
        "icon": "Kassadin_Passive.png"
      },
      "q": {
        "name": "Orbe du Néant",
        "description": "Kassadin tire un orbe d'énergie du Néant sur sa cible, infligeant des dégâts et interrompant les canalisations. Le surplus d'énergie lui confère un bouclier temporaire qui absorbe les dégâts magiques.",
        "icon": "NullLance.png"
      },
      "w": {
        "name": "Lame éthérée",
        "description": "Passive : les attaques de base de Kassadin infligent des dégâts magiques supplémentaires. Active : la prochaine attaque de base de Kassadin inflige d'importants dégâts magiques supplémentaires et lui rend du mana.",
        "icon": "NetherBlade.png"
      },
      "e": {
        "name": "Pulsation",
        "description": "Kassadin tire de l'énergie des sorts lancés près de lui. Après avoir tiré assez d'énergie, Kassadin peut utiliser Pulsation pour blesser et ralentir les ennemis dans une zone en forme de cône devant lui.",
        "icon": "ForcePulse.png"
      },
      "r": {
        "name": "Fissure",
        "description": "Kassadin se téléporte vers une destination proche, blessant les ennemis se trouvant à proximité. Chaque utilisation de Fissure dans une courte période augmente le coût en mana et les dégâts de la Fissure suivante.",
        "icon": "RiftWalk.png"
      }
    },
    "sourceNotes": [
      {
        "field": "counters",
        "note": "Conseil officiel « Lorsque Kassadin lance des Fissures consécutives, il utilise de plus en plus de mana. Pensez-y quand vous le pourchassez. » — nomme « Fissures », absent du kit actuel (noms et descriptions des sorts, Data Dragon 16.17.1) et des objets actuels (item.json) : conseil non affiché.",
        "url": "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
        "retrieved": "2026-09-08"
      }
    ],
    "reworkHistory": [
      {
        "type": "Visual Update",
        "date": "2015-03-12",
        "kitAffecting": false,
        "source": {
          "url": "http://na.leagueoflegends.com/en/news/champions-skins/champion-update/champion-update-kassadin",
          "label": null
        }
      },
      {
        "type": "Visual (VFX) and Gameplay Update",
        "date": "2014-03-18",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-44-notes#patch-kassadin",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual (VFX) and Gameplay Update",
      "date": "2014-03-18",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-44-notes#patch-kassadin",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Kassadin Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=CedXMWfNWM4",
        "published": "2025-09-30",
        "duration": 180
      }
    ],
    "releaseDate": "2009-08-07"
  },
  {
    "id": "katarina",
    "key": "0055",
    "ddid": "Katarina",
    "name": "Katarina",
    "title": "Lame sinistre",
    "roles": {
      "mid": {
        "tier": "A",
        "wr": 50.33,
        "pr": 7.09,
        "ban": 11.97
      },
      "adc": {
        "tier": "S",
        "wr": 51.45,
        "pr": 0.95,
        "ban": 11.66
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 4,
      "magic": 9
    },
    "class": "Assassin / Mage",
    "strengths": [
      "Ramasser des dagues réduira grandement le délai de récupération de Shunpo.",
      "Attendez que l'équipe adverse soit occupée à combattre vos équipiers, puis utilisez Shunpo pour vous téléporter au cœur de la mêlée et faire un massacre avec Lotus mortel.",
      "Utiliser Shunpo sur un champion allié, une dague ou un sbire peut être utile pour fuir."
    ],
    "counters": [
      "Les compétences de Katarina infligent des dégâts magiques. Même si elle achète des objets qui augmentent ses dégâts d'attaque, augmentez votre résistance magique pour la contrer.",
      "Essayez de garder un effet entravant pour quand Katarina utilisera Lotus mortel."
    ],
    "abilities": {
      "passive": {
        "name": "Voracité",
        "description": "Les délais de récupération des compétences de Katarina sont grandement réduits quand un champion qu'elle a blessé récemment meurt.<br><br>Si Katarina ramasse une <font color='#FFF673'>dague</font>, elle s'en sert pour frapper tous les ennemis proches, infligeant des dégâts magiques.",
        "icon": "Katarina_Passive.png"
      },
      "q": {
        "name": "Lame rebondissante",
        "description": "Katarina lance une <font color='#FFF673'>dague</font> sur une cible. La dague rebondit ensuite sur les ennemis proches avant de tomber au sol.",
        "icon": "KatarinaQ.png"
      },
      "w": {
        "name": "Préparation",
        "description": "Katarina augmente sa vitesse de déplacement et lance une <font color='#FFF673'>dague</font> dans les airs.",
        "icon": "KatarinaW.png"
      },
      "e": {
        "name": "Shunpo",
        "description": "Katarina se téléporte près de sa cible. S'il s'agit d'un ennemi, elle le frappe. Sinon, elle frappe l'ennemi le plus proche.",
        "icon": "KatarinaEWrapper.png"
      },
      "r": {
        "name": "Lotus mortel",
        "description": "Katarina tournoie et projette rapidement des couteaux sur les trois champions ennemis les plus proches, infligeant d'énormes dégâts sur la durée de la canalisation.",
        "icon": "KatarinaR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Class-scale Update",
        "date": "2016-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/preseason-2017/assassins",
          "label": "Slayers: Assassins"
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2016-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/game-updates/patch/patch-622-notes",
          "label": null
        }
      },
      {
        "type": "Visual and Gameplay Update",
        "date": "2012-08-14",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/board/showthread.php?t=2457097",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2016-11-10",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/preseason-2017/assassins",
        "label": "Slayers: Assassins"
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus de la présaison sur Katarina | Gameplay – League of Legends",
        "url": "https://www.youtube.com/watch?v=_raxJmGfDzw",
        "published": "2016-11-01",
        "duration": 133
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Katarina: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=soCg5RbgYIA",
        "published": "2012-08-15",
        "duration": 410
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Katarina Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=M1B31BC5VJ4",
        "published": "2025-09-12",
        "duration": 180
      }
    ],
    "releaseDate": "2009-09-19"
  },
  {
    "id": "kayle",
    "key": "0010",
    "ddid": "Kayle",
    "name": "Kayle",
    "title": "Vertueuse",
    "roles": {
      "top": {
        "tier": "S",
        "wr": 51.07,
        "pr": 2.2,
        "ban": 1.37
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 6,
      "magic": 7
    },
    "class": "Tireur / Mage",
    "strengths": [
      "Utiliser Jugement divin sur un allié aux DPS élevés peut renverser le cours du combat en permettant à votre allié d'attaquer sans crainte.",
      "Les attaques de Kayle deviennent extrêmement puissantes quand elle obtient la portée d'attaque d'Ascension divine. En attendant, ne prenez pas de risque.",
      "Kayle profite beaucoup des dégâts d'attaque et de la puissance ; les objets hybrides comme la Dent de Nashor ou la Pistolame Hextech sont donc très efficaces sur elle."
    ],
    "counters": [
      "Jugement divin ne protège Kayle ou ses alliés que contre les dégâts. Vous pouvez toujours les ralentir ou les étourdir s'ils se croient trop en sécurité.",
      "Kayle est généralement une cible fragile. Si elle lance son ultime sur un de ses alliés, attaquez-la.",
      "Kayle commence la partie comme champion de mêlée assez faible. Essayez de prendre de l'avance sur elle avant qu'elle n'accède à sa forme à distance."
    ],
    "abilities": {
      "passive": {
        "name": "Ascension divine",
        "description": "Les attaques de Kayle sont renforcées par les cieux au fur et à mesure qu'elle gagne des niveaux et dépense des points de compétence. Ses ailes s'enflamment tandis qu'elle gagne progressivement de la vitesse d'attaque, de la vitesse de déplacement, de la portée d'attaque et des vagues de feu sur ses attaques.",
        "icon": "Kayle_P.png"
      },
      "q": {
        "name": "Incandescence",
        "description": "Kayle fait apparaître un portail pour tirer une épée céleste qui traverse les ennemis touchés, les ralentissant, les blessant et réduisant leurs résistances.",
        "icon": "KayleQ.png"
      },
      "w": {
        "name": "Bénédiction céleste",
        "description": "Kayle se soigne et soigne l'allié le plus proche, et tous les deux reçoivent un bonus en vitesse de déplacement.",
        "icon": "KayleW.png"
      },
      "e": {
        "name": "Lame de feu stellaire",
        "description": "Passive : l'épée céleste de Kayle, Vertu, inflige des dégâts magiques supplémentaires aux ennemis qu'elle attaque.<br><br>Active : la prochaine attaque de Kayle déchaîne le feu céleste sur sa cible, infligeant des dégâts supplémentaires en fonction des PV manquants de la cible.",
        "icon": "KayleE.png"
      },
      "r": {
        "name": "Jugement divin",
        "description": "Kayle rend un allié invulnérable et fait appel aux anciennes Manifestations de la Justice pour faire tomber une pluie d'épées purificatrices autour de sa cible.",
        "icon": "KayleR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2019-03-06",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/en/featured/champion-kayle-morgana",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2015-03-25",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/game-updates/patch/patch-56-notes/",
          "label": null
        }
      },
      {
        "type": "Visual and Gameplay Update",
        "date": "2011-07-25",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/board/showthread.php?t=1016177",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2010-07-06",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://forums.na.leagueoflegends.com/board/showthread.php?t=130837",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2019-03-06",
      "source": {
        "url": "https://na.leagueoflegends.com/en/featured/champion-kayle-morgana",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Kayle | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=A54ikDHLPQQ",
        "published": "2019-03-04",
        "duration": 255
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Kayle Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=GV074SIfNhA",
        "published": "2019-03-04",
        "duration": 254
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Kayle Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=d5LfG6utnEE",
        "published": "2024-05-03",
        "duration": 180
      }
    ],
    "releaseDate": "2009-02-21"
  },
  {
    "id": "kayn",
    "key": "0141",
    "ddid": "Kayn",
    "name": "Kayn",
    "title": "Faucheur de l'ombre",
    "roles": {
      "jgl": {
        "tier": "A",
        "wr": 50.02,
        "pr": 6.93,
        "ban": 5.24
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 10,
      "magic": 1
    },
    "class": "Combattant / Assassin",
    "strengths": [
      "Observez bien la composition de votre équipe et celle de l'équipe adverse avant de choisir une forme.",
      "N'oubliez pas que les ennemis proches peuvent voir dans quel mur vous vous trouvez."
    ],
    "counters": [
      "Intrusion obscure nécessite que Kayn blesse d'abord une cible. Esquivez Entaille sombre pour l'empêcher de lancer une Intrusion obscure à longue portée.",
      "Quand Kayn est dans un élément du décor proche de vous, un avertissement visuel apparaît au bord de cet élément.",
      "Blessez Kayn pendant Passe-muraille pour réduire la durée du sort, ou infligez-lui un contrôle de foule puissant (étourdissement, charme, projection en l'air, etc.) pour mettre immédiatement un terme au sort."
    ],
    "abilities": {
      "passive": {
        "name": "Faux des Darkin",
        "description": "Kayn manie une arme antique et combat Rhaast, le Darkin qu'elle renferme, pour en prendre le contrôle. Soit le <font color='#fe5c50'>Darkin</font> triomphera, soit Kayn maîtrisera Rhaast et deviendra l'<font color='#8484fb'>Assassin de l'ombre</font>.<br><br><font color='#fe5c50'>Darkin :</font> soin équivalent à un pourcentage des dégâts de compétence infligés aux champions.<br><br><font color='#8484fb'>Assassin de l'ombre :</font> inflige des dégâts supplémentaires pendant les premières secondes d'un combat contre des champions ennemis.",
        "icon": "Kayn_Passive_Primary.png"
      },
      "q": {
        "name": "Moisson cruelle",
        "description": "Kayn se rue vers l'avant puis frappe. La ruée et l'attaque infligent toutes deux des dégâts.",
        "icon": "KaynQ.png"
      },
      "w": {
        "name": "Entaille sombre",
        "description": "Kayn blesse et ralentit les cibles sur une ligne.",
        "icon": "KaynW.png"
      },
      "e": {
        "name": "Passe-muraille",
        "description": "Kayn peut traverser le terrain.",
        "icon": "KaynE.png"
      },
      "r": {
        "name": "Intrusion obscure",
        "description": "Kayn se cache dans le corps d'un ennemi, infligeant d'énormes dégâts quand il ressort.",
        "icon": "KaynR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Kayn | Gameplay – League of Legends",
        "url": "https://www.youtube.com/watch?v=jeA8cTdNy6o",
        "published": "2017-07-11",
        "duration": 334
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Kayn Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=pPaauwI6G5s",
        "published": "2017-07-11",
        "duration": 334
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Kayn Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=f_GjJOQ1VcM",
        "published": "2025-07-21",
        "duration": 180
      }
    ],
    "releaseDate": "2017-07-12"
  },
  {
    "id": "kennen",
    "key": "0085",
    "ddid": "Kennen",
    "name": "Kennen",
    "title": "Cœur de la tempête",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 50.72,
        "pr": 2.08,
        "ban": 1.18
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 6,
      "magic": 7
    },
    "class": "Mage",
    "strengths": [
      "Vous pouvez étourdir un ennemi en lui appliquant 3 Marques de tempête.",
      "Rush foudroyant peut servir à lancer un combat, et grâce à l'énergie qu'il rend, vous pouvez enchaîner avec d'autres compétences.",
      "Vous pouvez appliquer une Marque de tempête initiale à un adversaire avec Shuriken foudroyant, puis en ajouter avec Surtension."
    ],
    "counters": [
      "Si vous avez reçu une Marque de tempête, soyez prudent avec Kennen dans les parages. S'il vous applique 3 Marques de tempête, il vous étourdit.",
      "Kennen est frêle de nature. S'il devient imprudent avec Rush foudroyant, allez l'attaquer."
    ],
    "abilities": {
      "passive": {
        "name": "Marque de tempête",
        "description": "Kennen étourdit les ennemis qu'il touche 3 fois avec ses compétences.",
        "icon": "Kennen_Passive.png"
      },
      "q": {
        "name": "Shuriken foudroyant",
        "description": "Kennen lance un shuriken rapide dans une direction, infligeant des dégâts et ajoutant une Marque de tempête à tout adversaire touché.",
        "icon": "KennenShurikenHurlMissile1.png"
      },
      "w": {
        "name": "Surtension",
        "description": "Kennen inflige, de façon passive, des dégâts supplémentaires et ajoute une Marque de tempête à sa cible toutes les quelques attaques. Il peut activer cette compétence pour infliger des dégâts et ajouter une autre Marque de tempête aux cibles déjà marquées.",
        "icon": "KennenBringTheLight.png"
      },
      "e": {
        "name": "Rush foudroyant",
        "description": "Kennen se transforme en boule d'électricité et peut traverser les unités et leur appliquer une Marque de tempête. En prenant cette forme, Kennen augmente sa vitesse de déplacement. En quittant cette forme, il augmente sa vitesse d'attaque.",
        "icon": "KennenLightningRush.png"
      },
      "r": {
        "name": "Maelström",
        "description": "Kennen invoque une tempête qui frappe les champions ennemis proches et leur inflige des dégâts magiques.",
        "icon": "KennenShurikenStorm.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2019-02-21",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://boards.na.leagueoflegends.com/en/c/developer-corner/6r5PBr2Y-visual-effect-updates-kennen-olaf-wukong-and-riven",
          "label": null
        }
      },
      {
        "type": "Sound (SFX) Update",
        "date": "2018-07-18",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/game-updates/patch/patch-814-notes#patch-sfx-updates",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2015-02-11",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-53-notes/",
          "label": null
        }
      }
    ],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Kennen: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=ZmYVifYPFsY",
        "published": "2010-04-16",
        "duration": 354
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Kennen Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=phXbNq7NgC4",
        "published": "2026-05-06",
        "duration": 180
      }
    ],
    "releaseDate": "2010-04-08"
  },
  {
    "id": "khazix",
    "key": "0121",
    "ddid": "Khazix",
    "name": "Kha'Zix",
    "title": "Faucheur du Néant",
    "roles": {
      "jgl": {
        "tier": "B",
        "wr": 49.42,
        "pr": 5.59,
        "ban": 3.16
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 9,
      "magic": 3
    },
    "class": "Assassin",
    "strengths": [
      "Les ennemis sont considérés isolés s'ils n'ont pas d'alliés à proximité. Les dégâts infligés par Goût de la peur sont grandement augmentés contre ces cibles.",
      "Menace invisible s'active lorsque Kha'Zix ne peut pas être vu par l'équipe ennemie. Réactivez cet effet en utilisant les hautes herbes ou Assaut du Néant. Pensez à profiter de Menace invisible en attaquant les champions ennemis.",
      "Kha'Zix a le plus souvent la possibilité de choisir quand et où combattre. Choisissez bien vos combats pour l'emporter."
    ],
    "counters": [
      "Goût de la peur inflige des dégâts supplémentaires aux cibles isolées. Prenez l'avantage en combattant à proximité des sbires, champions et tourelles alliés.",
      "Bond et Assaut du Néant ont des délais de récupération assez longs. Kha'Zix est très vulnérable lorsque ces deux compétences ne sont pas disponibles."
    ],
    "abilities": {
      "passive": {
        "name": "Menace invisible",
        "description": "Les ennemis proches qui sont <font color='#FFF673'>isolés</font> sont marqués. Les compétences de Kha'Zix profitent d'interactions avec les cibles <font color='#FFF673'>isolées</font>.<br><br>Lorsque Kha'Zix n'est pas visible par l'équipe ennemie, il gagne Menace invisible, qui permet à sa prochaine attaque de base contre un champion ennemi d'infliger des dégâts magiques supplémentaires et de le ralentir pendant quelques secondes.",
        "icon": "Khazix_P.png"
      },
      "q": {
        "name": "Goût de la peur",
        "description": "Kha'Zix inflige des dégâts physiques à sa cible. Les dégâts sont augmentés contre les cibles <font color='#FFF673'>isolées</font>. S'il choisit l'<font color='#00DD33'>évolution Griffes de faucheur</font>, Goût de la peur a un délai de récupération réduit s'il est utilisé contre une cible <font color='#FFF673'>isolée</font>. Kha'Zix augmente aussi la portée de ses attaques de base et de Goût de la peur.",
        "icon": "KhazixQ.png"
      },
      "w": {
        "name": "Pique du Néant",
        "description": "Kha'Zix projette des piques qui infligent des dégâts physiques aux ennemis touchés. Kha'Zix est soigné s'il se trouve dans le rayon de l'explosion. S'il choisit l'<font color='#00DD33'>évolution Batterie de piques</font>, 3 piques sont projetées dans une zone conique, les ennemis touchés sont ralentis et les champions ennemis touchés sont révélés pendant 2 sec. Les cibles <font color='#FFF673'>isolées</font> sont ralenties davantage.",
        "icon": "KhazixW.png"
      },
      "e": {
        "name": "Bond",
        "description": "Kha'Zix bondit sur une zone, infligeant des dégâts physiques aux ennemis autour de son point de chute. S'il choisit l'<font color='#00DD33'>évolution Ailes</font>, la portée de Bond augmente de 200 et le délai de récupération est annulé quand il tue un champion ou réussit une assistance.",
        "icon": "KhazixE.png"
      },
      "r": {
        "name": "Assaut du Néant",
        "description": "Chaque rang permet à Kha'Zix de faire évoluer l'une de ses compétences, ce qui lui confère un effet supplémentaire unique. Quand Assaut du Néant est activé, Kha'Zix devient <font color='#91d7ee'>invisible</font>, ce qui déclenche Menace invisible et augmente sa vitesse de déplacement. S'il choisit l'<font color='#00DD33'>évolution Occultation adaptative</font>, Assaut du Néant augmente la durée de son <font color='#91d7ee'>invisibilité</font> et peut être utilisé une fois de plus.",
        "icon": "KhazixR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2020-11-24",
        "kitAffecting": false,
        "source": {
          "url": "https://www.reddit.com/r/LeaguePBE/comments/jpisoh/khazix_base_visual_effects_update/",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2016-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/preseason-2017/assassins",
          "label": "Slayers: Assassins"
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2016-11-10",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/preseason-2017/assassins",
        "label": "Slayers: Assassins"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Kha'Zix: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=jKLK9zFiVII",
        "published": "2012-09-27",
        "duration": 419
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Kha'Zix Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=mkJd0vcPBX4",
        "published": "2025-08-02",
        "duration": 180
      }
    ],
    "releaseDate": "2012-09-27"
  },
  {
    "id": "kindred",
    "key": "0203",
    "ddid": "Kindred",
    "name": "Kindred",
    "title": "Chasseurs éternels",
    "roles": {
      "jgl": {
        "tier": "B",
        "wr": 49.1,
        "pr": 2.18,
        "ban": 1.62
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 2
    },
    "class": "Tireur",
    "strengths": [
      "Quand vous junglez, vous déplacer entre chaque attaque vous aidera à éviter des dégâts et à générer plus souvent les soins de Frénésie de Loup.",
      "Choisissez soigneusement les cibles que vous voulez chasser. En tuer un maximum tout au long de la partie est la clé du succès.",
      "N'attaquez pas le premier lors des gros combats d'équipes. Laissez vos équipiers engager le combat."
    ],
    "counters": [
      "Kindred est fragile : mettez-lui la pression pour l'obliger à jouer prudemment.",
      "Tuez les cibles chassées par Loup dans la jungle pour ralentir la progression des dégâts de Kindred.",
      "Quand Kindred utilise Repos d'Agneau, entrez dans la zone, car elle empêche tous les champions de mourir."
    ],
    "abilities": {
      "passive": {
        "name": "Marque de Kindred",
        "description": "Kindred peut marquer des cibles à chasser. Chaque chasse fructueuse renforce définitivement les compétences de base de Kindred. Toutes les 4 chasses menées à bien, la portée des attaques de base de Kindred augmente également.",
        "icon": "Kindred_Passive.png"
      },
      "q": {
        "name": "Danse des flèches",
        "description": "Kindred fait une cabriole et tire sur un maximum de trois cibles proches.",
        "icon": "KindredQ.png"
      },
      "w": {
        "name": "Frénésie de Loup",
        "description": "Loup enrage et attaque les ennemis proches de lui.  Agneau cumule passivement des effets en se déplaçant et en attaquant. Au maximum d'effets cumulés, la prochaine attaque d'Agneau lui rend des PV.",
        "icon": "KindredW.png"
      },
      "e": {
        "name": "Terreur mortelle",
        "description": "Agneau effectue un tir précis, ralentissant la cible. Si Agneau attaque la cible deux fois de plus, sa troisième attaque envoie Loup sur la cible pour lui infliger d'énormes dégâts.",
        "icon": "KindredEWrapper.png"
      },
      "r": {
        "name": "Repos d'Agneau",
        "description": "Agneau offre à toutes les créatures vivantes dans une zone un refuge contre la mort. Jusqu'à la fin de l'effet, personne ne peut y mourir. Les unités sont ensuite soignées.",
        "icon": "KindredR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Kindred",
        "url": "https://www.youtube.com/watch?v=-Wf9_zXXOZY",
        "published": "2015-10-05",
        "duration": 525
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Kindred: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=h0Pwn7G-eLE",
        "published": "2015-10-05",
        "duration": 522
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Kindred Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=F4S6FUMy9aM",
        "published": "2025-12-02",
        "duration": 180
      }
    ],
    "releaseDate": "2015-10-14"
  },
  {
    "id": "kled",
    "key": "0240",
    "ddid": "Kled",
    "name": "Kled",
    "title": "Cavalier colérique",
    "roles": {
      "top": {
        "tier": "S",
        "wr": 51.21,
        "pr": 1.8,
        "ban": 0.93
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 2
    },
    "class": "Combattant",
    "strengths": [
      "Kled génère un peu de courage en tuant des sbires, mais beaucoup plus en combattant des champions.",
      "Le dernier coup de Penchant pour la violence inflige plus de dégâts que les trois premiers. Assurez-vous de donner ce coup !",
      "Chaaaaaaaargez !!! peut être lancé à grande portée. Essayez de prédire où sera l'équipe ennemie quand vous arriverez."
    ],
    "counters": [
      "Kled génère du courage en blessant des ennemis avec Pistolet de poche et ses attaques de base, en tuant des sbires et en attaquant des bâtiments ou des monstres épiques.",
      "Surveillez la jauge de courage de Kled quand il est à pied. Lorsque cette jauge est pleine, il retrouve sa monture et récupère un grand nombre de PV.",
      "Kled est bien plus dangereux quand Penchant pour la violence est disponible."
    ],
    "abilities": {
      "passive": {
        "name": "Skaarl, le Lézard froussard",
        "description": "Kled chevauche sa fidèle monture, Skaarl, qui subit les dégâts à sa place. Quand les PV de Skaarl tombent à zéro, Kled est désarçonné.<br><br>Sans monture, les compétences de Kled changent et il inflige moins de dégâts aux champions. Kled peut restaurer le courage de Skaarl en combattant des ennemis. Quand le courage atteint son maximum, Kled se remet en selle avec une partie des PV de Skaarl.",
        "icon": "Kled_P.png"
      },
      "q": {
        "name": "Piège à ours en laisse",
        "description": "Kled lance un piège à ours qui inflige des dégâts et s'accroche à un champion ennemi. Si la cible reste accrochée pendant un court instant, elle subit des dégâts physiques supplémentaires et est tirée vers Kled.<br><br>Si Kled est désarçonné, la compétence devient Pistolet de poche, un tir à distance qui projette Kled en arrière et restaure du courage.",
        "icon": "KledQ.png"
      },
      "w": {
        "name": "Penchant pour la violence",
        "description": "Kled augmente grandement sa vitesse d'attaque le temps de quatre attaques. La quatrième attaque inflige plus de dégâts.",
        "icon": "KledW.png"
      },
      "e": {
        "name": "Joute",
        "description": "Kled fonce dans une direction, infligeant des dégâts physiques et bénéficiant d'un bref bonus en vitesse de déplacement. Kled peut réactiver cette compétence pour foncer en sens inverse à travers sa cible initiale, infligeant les mêmes dégâts.",
        "icon": "KledE.png"
      },
      "r": {
        "name": "Chaaaaaaaargez !!!",
        "description": "Kled et Skaarl chargent vers la zone ciblée en s'entourant d'un bouclier et en laissant derrière eux une traînée qui augmente la vitesse des alliés. Skaarl fonce sur le premier champion ennemi qu'il rencontre.",
        "icon": "KledR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Gameplay Update",
        "date": "2025-07-16",
        "kitAffecting": true,
        "source": {
          "url": "https://www.youtube.com/watch?v=Wbvamgq6fog",
          "label": "Kled Fighter Reshape Patch 25.14 Dev Preview"
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2025-07-16",
      "source": {
        "url": "https://www.youtube.com/watch?v=Wbvamgq6fog",
        "label": "Kled Fighter Reshape Patch 25.14 Dev Preview"
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Kled",
        "url": "https://www.youtube.com/watch?v=pzCV0SyQTjs",
        "published": "2016-08-08",
        "duration": 548
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Kled: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=Pz145kVa-4w",
        "published": "2016-08-08",
        "duration": 548
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Kled Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=yCRM2kvQezY",
        "published": "2025-08-08",
        "duration": 180
      }
    ],
    "releaseDate": "2016-08-10"
  },
  {
    "id": "kogmaw",
    "key": "0096",
    "ddid": "KogMaw",
    "name": "Kog'Maw",
    "title": "Gueule des abysses",
    "roles": {
      "adc": {
        "tier": "S",
        "wr": 52.36,
        "pr": 1.89,
        "ban": 0.36
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 5
    },
    "class": "Tireur / Mage",
    "strengths": [
      "Kog'Maw dispose d'une meilleure portée que la plupart des autres champions, grâce à Barrage bio-arcanique.",
      "Utilisez Limon du Néant pour préparer une Artillerie vivante parfaite.",
      "Profitez au maximum de Surprise d'Icathia."
    ],
    "counters": [
      "Kog'Maw n'a aucun moyen de s'enfuir facilement, ce qui le rend particulièrement fragile face à des attaques concertées.",
      "Filez loin de Kog'Maw quand il a été tué !",
      "La portée d'Artillerie vivante augmente à chaque niveau.",
      "Barrage bio-arcanique permet à Kog'Maw d'éliminer le baron Nashor très rapidement. Il peut être intéressant de placer une balise à côté de Nashor quand Kog'Maw se procure Lame du roi déchu."
    ],
    "abilities": {
      "passive": {
        "name": "Surprise d'Icathia",
        "description": "4 sec après sa mort, Kog'Maw explose, infligeant des dégâts bruts aux ennemis proches.",
        "icon": "KogMaw_IcathianSurprise.png"
      },
      "q": {
        "name": "Bave caustique",
        "description": "Kog'Maw lance un projectile corrosif qui inflige des dégâts magiques et ronge l'armure et la résistance magique de la cible pendant un court instant. Kog'Maw gagne aussi de la vitesse d'attaque.",
        "icon": "KogMawQ.png"
      },
      "w": {
        "name": "Barrage bio-arcanique",
        "description": "Kog'Maw dispose d'une portée d'attaque augmentée et ses attaques infligent des dégâts magiques %i:OnHit% <OnHit>à l'impact</OnHit> équivalents à un pourcentage des PV max de la cible.",
        "icon": "KogMawBioArcaneBarrage.png"
      },
      "e": {
        "name": "Limon du Néant",
        "description": "Kog'Maw projette un limon particulier qui blesse tous les ennemis touchés. Le limon laisse derrière lui une traînée qui ralentit les ennemis le traversant.",
        "icon": "KogMawVoidOoze.png"
      },
      "r": {
        "name": "Artillerie vivante",
        "description": "Kog'Maw tire un projectile d'artillerie à longue portée, infligeant des dégâts magiques (grandement augmentés contre les ennemis à qui il reste peu de PV) et révélant les cibles non-camouflées. Utiliser plusieurs fois Artillerie vivante en peu de temps augmente progressivement le coût en mana des tirs supplémentaires.",
        "icon": "KogMawLivingArtillery.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX and Texture) Update",
        "date": "2021-05-12",
        "kitAffecting": false,
        "source": {
          "url": "https://www.reddit.com/r/LeaguePBE/comments/n50fs2/kogmaw_visual_sound_effects_update/",
          "label": null
        }
      },
      {
        "type": "Sound (SFX) Update",
        "date": "2018-07-18",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/game-updates/patch/patch-814-notes#patch-sfx-updates",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2015-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
          "label": "Marksmen"
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2015-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-11-20",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-420-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2015-11-10",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
        "label": "Marksmen"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Kog'Maw: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=_uZ1ltl-qPM",
        "published": "2010-06-24",
        "duration": 409
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Kog'Maw Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=1k0oahxNZmU",
        "published": "2025-09-16",
        "duration": 180
      }
    ],
    "releaseDate": "2010-06-24"
  },
  {
    "id": "leblanc",
    "key": "0007",
    "ddid": "Leblanc",
    "name": "LeBlanc",
    "title": "Manipulatrice",
    "roles": {
      "mid": {
        "tier": "S",
        "wr": 50.61,
        "pr": 5.56,
        "ban": 15.66
      },
      "sup": {
        "tier": "B",
        "wr": 49.12,
        "pr": 0.82,
        "ban": 15.2
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 1,
      "magic": 10
    },
    "class": "Assassin / Mage",
    "strengths": [
      "Distorsion permet d'utiliser vos autres sorts agressivement et de vous replier.",
      "Utiliser Distorsion peut vous aider à vous placer pour mieux lancer Chaînes éthérées.",
      "Vous pouvez enchaîner Sceau de malveillance et Chaînes éthérées pour empêcher les ennemis de fuir pendant 4 secondes."
    ],
    "counters": [
      "L'ultime de LeBlanc peut créer des copies de LeBlanc quand elle lance des sorts ou, plus rarement, à un endroit éloigné.",
      "La copie de LeBlanc créée à distance court toujours vers le champion le plus proche, lance un sort inoffensif, puis disparaît.",
      "Attaquer LeBlanc d'abord permet d'éviter la plupart de ses tours, surtout si elle vient d'utiliser sa Distorsion.",
      "Étourdir LeBlanc ou la réduire au silence l'empêche d'activer Retour de distorsion."
    ],
    "abilities": {
      "passive": {
        "name": "Image miroir",
        "description": "Quand LeBlanc tombe à moins de 40% de ses PV max, elle devient invisible pendant 1 sec et crée une Image miroir qui n'inflige aucun dégât et dure jusqu'à 8 sec.",
        "icon": "LeblancP.png"
      },
      "q": {
        "name": "Sceau de malveillance",
        "description": "LeBlanc lance un sceau qui inflige des dégâts et qui marque la cible pendant 3.5 sec. Blesser la cible marquée avec une compétence fait exploser le sceau, infligeant des dégâts supplémentaires. Si le sceau ou son explosion tue la cible, LeBlanc récupère le coût en mana et réduit le délai de récupération restant de cette compétence.",
        "icon": "LeblancQ.png"
      },
      "w": {
        "name": "Distorsion",
        "description": "LeBlanc fonce jusqu'à l'endroit visé, infligeant des dégâts aux ennemis proches de son point d'arrivée. Dans les 4 sec qui suivent, LeBlanc peut réactiver Distorsion pour retourner à son point de départ.",
        "icon": "LeblancW.png"
      },
      "e": {
        "name": "Chaînes éthérées",
        "description": "LeBlanc lance une chaîne qui s'attache au premier ennemi touché. Si la cible reste enchaînée pendant 1.5 sec, LeBlanc l'immobilise et lui inflige des dégâts supplémentaires.",
        "icon": "LeblancE.png"
      },
      "r": {
        "name": "Imitation",
        "description": "LeBlanc imite l'une de ses compétences de base.",
        "icon": "LeblancR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual Update",
        "date": "2025-04-02",
        "kitAffecting": false,
        "source": {
          "url": "https://www.youtube.com/watch?v=z76xgEYgjt0&t=320s",
          "label": "Dev Update: Welcome to Noxus"
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2016-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/preseason-2017/assassins",
          "label": "Slayers: Assassins"
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2016-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/game-updates/patch/patch-622-notes",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-09-25",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://oce.leagueoflegends.com/en/news/game-updates/patch/patch-417-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2016-11-10",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/preseason-2017/assassins",
        "label": "Slayers: Assassins"
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus de la présaison sur LeBlanc | Gameplay – League of Legends",
        "url": "https://www.youtube.com/watch?v=tJvA-yqlpEY",
        "published": "2016-11-03",
        "duration": 166
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "LeBlanc: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=we5LawDUcCM",
        "published": "2010-11-02",
        "duration": 348
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute LeBlanc Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=-Y3Bb0wBGD4",
        "published": "2025-06-21",
        "duration": 180
      }
    ],
    "releaseDate": "2010-11-02"
  },
  {
    "id": "leesin",
    "key": "0064",
    "ddid": "LeeSin",
    "name": "Lee Sin",
    "title": "Moine aveugle",
    "roles": {
      "jgl": {
        "tier": "A",
        "wr": 49.28,
        "pr": 13.46,
        "ban": 16.85
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 3
    },
    "class": "Combattant / Assassin",
    "strengths": [
      "Utilisez Onde sonore avant Rage du dragon pour poursuivre l'ennemi avec Coup résonant.",
      "Essayez de lancer des attaques automatiques entre deux compétences pour profiter pleinement de Rafale et ne pas consommer trop vite votre énergie.",
      "Rempart et Force d'âme sont très efficaces pour jungler."
    ],
    "counters": [
      "Dispersez-vous pour minimiser l'impact de la compétence ultime de Lee Sin, Rage du dragon.",
      "Avec Force d'âme et Fracture, Lee Sin a de puissants atouts pour se défendre contre les dégâts physiques, mais il est vulnérable aux dégâts magiques.",
      "Lee Sin est particulièrement puissant lorsqu'il peut combiner plusieurs compétences. L'entraver après sa première attaque peut l'empêcher de lancer la deuxième partie de sa compétence."
    ],
    "abilities": {
      "passive": {
        "name": "Rafale",
        "description": "Après avoir utilisé une compétence, Lee Sin voit sa vitesse d'attaque augmenter pour ses 2 prochaines attaques de base. Ces attaques accélérées lui rendent de l'énergie.",
        "icon": "LeeSinPassive.png"
      },
      "q": {
        "name": "Onde sonore/Coup résonant",
        "description": "Onde sonore : Lee Sin émet une onde sonore pour localiser ses ennemis, infligeant des dégâts physiques au premier ennemi touché. Si Onde sonore touche un ennemi, Lee Sin peut lancer Coup résonant dans les 3 sec qui suivent.<br>Coup résonant : Lee Sin fonce vers l'ennemi touché par Onde sonore, infligeant des dégâts physiques en fonction des PV manquants de l'ennemi.",
        "icon": "LeeSinQOne.png"
      },
      "w": {
        "name": "Rempart/Force d'âme",
        "description": "Rempart : Lee Sin fonce vers un allié, se protégeant contre les dégâts. Si l'allié est un champion, il est également protégé. Après avoir lancé Rempart, Lee Sin peut lancer Force d'âme.<br>Force d'âme : l'entraînement intense de Lee Sin lui permet de décupler ses forces pendant un combat. Lee Sin gagne de l'omnivampirisme.",
        "icon": "LeeSinWOne.png"
      },
      "e": {
        "name": "Trombe/Fracture",
        "description": "Trombe : Lee Sin frappe le sol, envoyant une onde de choc qui inflige des dégâts magiques et révèle les unités ennemies touchées. Si Trombe touche un ennemi, Lee Sin peut lancer Fracture.<br>Fracture : Lee Sin estropie les ennemis proches blessés par Trombe, réduisant leur vitesse de déplacement. La vitesse de déplacement revient peu à peu à la normale pendant la durée de la compétence.",
        "icon": "LeeSinEOne.png"
      },
      "r": {
        "name": "Rage du dragon",
        "description": "Lee Sin donne un puissant coup de pied qui projette sa cible en arrière, infligeant des dégâts physiques à la cible et à tous les ennemis qu'elle percute. Les ennemis ainsi percutés sont également projetés en l'air un court instant. Cette technique lui a été enseignée par Jesse Perring, mais Lee Sin ne sait pas encore éjecter les joueurs de la carte.",
        "icon": "LeeSinR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Art and Sustainability Update",
        "date": "2024-05-01",
        "kitAffecting": false,
        "source": {
          "url": "https://www.leagueoflegends.com/en-gb/news/dev/dev-modernizing-the-monk/",
          "label": null
        }
      },
      {
        "type": "Visual (VFX) Update",
        "date": "2018-09-26",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/game-updates/patch/patch-819-notes",
          "label": null
        }
      },
      {
        "type": "Sound (SFX) Update",
        "date": "2018-07-18",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/game-updates/patch/patch-814-notes#patch-sfx-updates",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2015-03-25",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/game-updates/patch/patch-56-notes/",
          "label": null
        }
      }
    ],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur la présaison 2015",
        "url": "https://www.youtube.com/watch?v=W74VpyUymwM",
        "published": "2014-11-21",
        "duration": 308
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Lee Sin: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=e6SleHuJjLo",
        "published": "2011-04-01",
        "duration": 381
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Lee Sin Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=9UhBQuAF-XA",
        "published": "2025-06-19",
        "duration": 180
      }
    ],
    "releaseDate": "2011-04-01"
  },
  {
    "id": "leona",
    "key": "0089",
    "ddid": "Leona",
    "name": "Leona",
    "title": "Aube radieuse",
    "roles": {
      "sup": {
        "tier": "S",
        "wr": 51.59,
        "pr": 7.78,
        "ban": 8.31
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 4,
      "magic": 3
    },
    "class": "Tank / Soutien",
    "strengths": [
      "Menez la charge et marquez vos ennemis avec Rayon de soleil avant que vos alliés n'infligent des dégâts.",
      "Bouclier de l'aube et Lame du zénith composent une puissante combinaison d'attaque.",
      "Vous pouvez absorber de lourds dégâts avec Éclipse, mais vous devez rester à proximité des ennemis pour profiter du bonus de durée."
    ],
    "counters": [
      "Lorsque Leona utilise Éclipse, vous avez trois secondes pour vous éloigner avant qu'elle inflige des dégâts.",
      "Seuls les adversaires qui sont au centre de l'Éruption solaire sont étourdis, vous pouvez donc l'éviter si vous êtes rapide."
    ],
    "abilities": {
      "passive": {
        "name": "Rayon de soleil",
        "description": "Les sorts marquent les ennemis d'un Rayon de soleil pendant 1.5 sec. Si des champions alliés blessent ces ennemis, ils dissipent Rayon de soleil et infligent des dégâts magiques supplémentaires.",
        "icon": "LeonaSunlight.png"
      },
      "q": {
        "name": "Bouclier de l'aube",
        "description": "Leona utilise son bouclier pour sa prochaine attaque de base, infligeant des dégâts magiques supplémentaires et étourdissant la cible.",
        "icon": "LeonaShieldOfDaybreak.png"
      },
      "w": {
        "name": "Éclipse",
        "description": "Leona lève son bouclier et profite d'une amélioration de son armure et de sa résistance magique ainsi que d'une réduction des dégâts. Lorsque l'effet prend fin pour la première fois, s'il y a des ennemis proches, elle leur inflige des dégâts magiques et l'effet de protection est prolongé.",
        "icon": "LeonaSolarBarrier.png"
      },
      "e": {
        "name": "Lame du zénith",
        "description": "Leona projette une image solaire de son épée, infligeant des dégâts magiques à tous les ennemis sur une ligne. Lorsque l'image se dissipe, le dernier champion ennemi touché est brièvement immobilisé et Leona fonce vers lui.",
        "icon": "LeonaZenithBlade.png"
      },
      "r": {
        "name": "Éruption solaire",
        "description": "Leona invoque un rayon d'énergie solaire qui inflige des dégâts à tous les ennemis dans une zone. Les ennemis au centre de la zone sont étourdis et ceux qui sont en bordure sont ralentis.",
        "icon": "LeonaSolarFlare.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2022-04-13",
        "kitAffecting": false,
        "source": {
          "url": "https://www.reddit.com/r/LeaguePBE/comments/tsdq5o/leona_vfx_update/",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-09-25",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://oce.leagueoflegends.com/en/news/game-updates/patch/patch-417-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Vex | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=xY_MLTwwRqw",
        "published": "2021-09-24",
        "duration": 193
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Leona: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=oViu5Pv_wwY",
        "published": "2011-07-08",
        "duration": 368
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Leona Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=7AYfMFLdBxU",
        "published": "2026-07-31",
        "duration": 180
      }
    ],
    "releaseDate": "2011-07-13"
  },
  {
    "id": "lillia",
    "key": "0876",
    "ddid": "Lillia",
    "name": "Lillia",
    "title": "Fleur timide",
    "roles": {
      "jgl": {
        "tier": "A",
        "wr": 50.79,
        "pr": 3.17,
        "ban": 1.85
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 0,
      "magic": 10
    },
    "class": "Combattant / Mage",
    "strengths": [],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "Bâton chargé de rêves",
        "description": "Toucher un champion ou un monstre avec une compétence lui inflige des dégâts supplémentaires sur la durée équivalents à un pourcentage de ses PV max.",
        "icon": "Lillia_Icon_Passive.png"
      },
      "q": {
        "name": "Frappe fleurie",
        "description": "Passivement, Lillia gagne des bonus cumulables en vitesse de déplacement quand elle touche des ennemis avec ses compétences. Elle peut activer cette compétence pour infliger des dégâts magiques aux ennemis proches, ainsi que des dégâts bruts supplémentaires en bordure de la zone.",
        "icon": "LilliaQ.png"
      },
      "w": {
        "name": "Attention, désolée !",
        "description": "Lillia lance une attaque dans une zone proche, infligeant d'importants dégâts au centre de la zone.",
        "icon": "LilliaW.png"
      },
      "e": {
        "name": "Graine tournoyante",
        "description": "Lillia lance une graine qui blesse et ralentit ceux qu'elle touche. Si la graine ne touche rien, elle continue de rouler jusqu'à toucher un mur ou une cible.",
        "icon": "LilliaE.png"
      },
      "r": {
        "name": "Douce berceuse",
        "description": "Lillia provoque un effet de somnolence chez tous les ennemis affectés par Poussière de rêve, qui finissent par s'endormir. Ces ennemis subiront des dégâts supplémentaires s'ils sont réveillés de force.",
        "icon": "LilliaR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Lillia | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=B3tLuGzxjFo",
        "published": "2020-07-22",
        "duration": 201
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Lillia Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=lJqGoqNXuGo",
        "published": "2020-07-22",
        "duration": 201
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Lillia Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=_CM9dL3x-4A",
        "published": "2025-08-06",
        "duration": 180
      }
    ],
    "releaseDate": "2020-07-22"
  },
  {
    "id": "lissandra",
    "key": "0127",
    "ddid": "Lissandra",
    "name": "Lissandra",
    "title": "Sorcière de glace",
    "roles": {
      "mid": {
        "tier": "A",
        "wr": 50.92,
        "pr": 5.53,
        "ban": 3.78
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 2,
      "magic": 8
    },
    "class": "Mage",
    "strengths": [
      "Vous pouvez lancer votre ultime sur vous-même en appuyant en même temps sur la touche de sort perso et sur celle de l'ultime (Alt+R par défaut).",
      "Lancer Chemin glacial puis courir dans la direction opposée laisse vos ennemis dans le doute car ils ne savent pas par où vous allez.",
      "Les compétences de Lissandra ont une portée plus courte que celles d'autres mages. De ce fait, acheter des objets offrant à la fois de la puissance et de la défense, comme Sablier de Zhonya et Voile de la banshee, est un bon moyen de survivre tout en infligeant des dégâts."
    ],
    "counters": [
      "Le meilleur moyen d'empêcher Lissandra d'avancer avec son Chemin glacial est de l'immobiliser avant qu'elle ne le réactive.",
      "Le Cercle de givre de Lissandra a un long délai de récupération au départ. Attaquez-la quand il est en cours de récupération.",
      "L'Éclat de glace de Lissandra ne ralentit que la première unité touchée. Approchez-vous d'elle en restant derrière vos sbires pour éviter d'être ralenti."
    ],
    "abilities": {
      "passive": {
        "name": "Emprise de la Sublimée",
        "description": "Lorsqu'un champion ennemi meurt à proximité de Lissandra, il se transforme en Serviteur de glace. Les Serviteurs de glace ralentissent les ennemis proches et, après un délai, le froid les fait exploser, infligeant des dégâts magiques aux cibles proches.",
        "icon": "Lissandra_Passive.png"
      },
      "q": {
        "name": "Éclat de glace",
        "description": "Projette une lance de glace qui se brise au contact du premier ennemi touché, lui infligeant des dégâts magiques et réduisant sa vitesse de déplacement. Des éclats traversent la cible, infligeant les mêmes dégâts aux autres ennemis touchés.",
        "icon": "LissandraQ.png"
      },
      "w": {
        "name": "Cercle de givre",
        "description": "Congèle les ennemis proches, leur infligeant des dégâts magiques et les immobilisant.",
        "icon": "LissandraW.png"
      },
      "e": {
        "name": "Chemin glacial",
        "description": "Lissandra lance une griffe de glace qui inflige des dégâts magiques. Si vous réactivez la compétence, Lissandra est transportée à l'endroit où se situe sa griffe.",
        "icon": "LissandraE.png"
      },
      "r": {
        "name": "Tombeau polaire",
        "description": "Si le sort est lancé sur un champion ennemi, la cible est congelée, ce qui l'étourdit. Si le sort est lancé sur Lissandra, elle s'immobilise dans la glace, ce qui la soigne en plus de la rendre impossible à cibler et insensible aux dégâts. De la glace obscure émane de la cible, infligeant des dégâts magiques aux ennemis et réduisant leur vitesse de déplacement.",
        "icon": "LissandraR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Lissandra: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=xsCp5lBceTA",
        "published": "2013-04-30",
        "duration": 336
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Lissandra Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=FVwgdDLf1GU",
        "published": "2025-12-28",
        "duration": 180
      }
    ],
    "releaseDate": "2013-04-30"
  },
  {
    "id": "locke",
    "key": "0805",
    "ddid": "Locke",
    "name": "Locke",
    "title": "Exorciste cendré",
    "roles": {
      "mid": {
        "tier": "A",
        "wr": 49.79,
        "pr": 6.46,
        "ban": 32.48
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 6,
      "magic": 2
    },
    "class": "Assassin / Mage",
    "strengths": [],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "Pieu argenté",
        "description": "Les attaques de Locke infligent des dégâts magiques bonus à l'impact, augmentés en fonction des PV manquants de l'ennemi.",
        "icon": "Locke_Passive.png"
      },
      "q": {
        "name": "Clous rituels",
        "description": "Locke lance des clous spirituels vers l'avant, infligeant des dégâts et marquant les ennemis touchés. Locke peut consommer ces marques pour infliger des dégâts bonus avec ses attaques.",
        "icon": "LockeQ.png"
      },
      "w": {
        "name": "Brûlure d'âme",
        "description": "Locke embrase son âme. Il gagne en vitesse d'attaque et en vitesse de déplacement, mais s'inflige des dégâts. À la fin de la durée, Locke se soigne d'une portion des dégâts subis pendant l'effet.",
        "icon": "LockeW.png"
      },
      "e": {
        "name": "Traque cendrée",
        "description": "Locke se téléporte à un emplacement avant d'effectuer une ruée pour attaquer sa prochaine cible, infligeant des dégâts aux ennemis traversés.",
        "icon": "LockeE.png"
      },
      "r": {
        "name": "Purgatoire",
        "description": "Locke lance un artefact qui inflige des dégâts et peut exécuter les ennemis touchés. Locke gagne de la puissance supplémentaire en scellant des champions ennemis.",
        "icon": "LockeR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Locke | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=YFgeOkndw_8",
        "published": "2026-06-09",
        "duration": 297
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Locke Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=ynG4T9yLKFs",
        "published": "2026-06-09",
        "duration": 297
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Locke Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=Gr4WRos_qiQ",
        "published": "2026-06-23",
        "duration": 180
      }
    ],
    "releaseDate": "2026-06-24"
  },
  {
    "id": "lucian",
    "key": "0236",
    "ddid": "Lucian",
    "name": "Lucian",
    "title": "Purificateur",
    "roles": {
      "adc": {
        "tier": "B",
        "wr": 48.51,
        "pr": 8.41,
        "ban": 2.46
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 3
    },
    "class": "Tireur / Assassin",
    "strengths": [
      "Pour un burst optimal, combinez Poursuite inlassable et Lumière perforante.",
      "Flamboiement provoque une explosion en forme d'étoile. Faites en sorte que les rayons frappent les champions ennemis.",
      "Une fois que vous avez choisi un angle pour Déluge de balles, vous ne pouvez plus en changer. Attendez le bon moment !",
      "Grâce à Pistolero, Lucian profite davantage des dégâts d'attaque que de la vitesse d'attaque."
    ],
    "counters": [
      "Lucian a un puissant burst, mais peu de dégâts soutenus.",
      "Lucian ne peut pas déplacer la visée de Déluge de balles. Profitez-en pour éviter les balles.",
      "Lumière perforante n'augmente pas la portée d'attaque de Lucian ; il lui faut toujours une cible à portée pour tirer. Évitez Lumière perforante en anticipant l'angle d'attaque de Lucian."
    ],
    "abilities": {
      "passive": {
        "name": "Pistolero",
        "description": "Quand Lucian utilise une compétence, sa prochaine attaque devient un double-tir. Quand Lucian est soigné par un allié, quand il reçoit un bouclier de la part d'un allié ou quand un champion ennemi proche est immobilisé, ses 2 prochaines attaques de base infligeront des dégâts magiques supplémentaires.",
        "icon": "Lucian_Passive.png"
      },
      "q": {
        "name": "Lumière perforante",
        "description": "Lucian tire un rayon lumineux qui transperce une cible.",
        "icon": "LucianQ.png"
      },
      "w": {
        "name": "Flamboiement",
        "description": "Lucian tire un projectile qui provoque une explosion en forme d'étoile, marquant et révélant brièvement les ennemis. Lucian augmente sa vitesse de déplacement quand il attaque les ennemis marqués.",
        "icon": "LucianW.png"
      },
      "e": {
        "name": "Poursuite inlassable",
        "description": "Lucian fonce sur une courte distance. Pistolero réduit le délai de récupération de Poursuite inlassable.",
        "icon": "LucianE.png"
      },
      "r": {
        "name": "Déluge de balles",
        "description": "Lucian tire un déluge de balles avec ses armes.",
        "icon": "LucianR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2021-07-08",
        "kitAffecting": false,
        "source": {
          "url": "https://twitter.com/Sirhaian/status/1410035567551680514",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2015-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
          "label": "Marksmen"
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2015-11-10",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
        "label": "Marksmen"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Lucian: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=2rIiuLXXGEg",
        "published": "2013-08-21",
        "duration": 386
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Lucian Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=SlZfsLfGxnM",
        "published": "2025-06-12",
        "duration": 180
      }
    ],
    "releaseDate": "2013-08-22"
  },
  {
    "id": "lulu",
    "key": "0117",
    "ddid": "Lulu",
    "name": "Lulu",
    "title": "Sorcière féérique",
    "roles": {
      "sup": {
        "tier": "A",
        "wr": 50.43,
        "pr": 11.34,
        "ban": 8.91
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 4,
      "magic": 7
    },
    "class": "Soutien / Mage",
    "strengths": [
      "Duo éclatant peut être tiré en formant des angles inattendus selon la position de votre curseur. Placer votre curseur près de Pix et Lulu changera considérablement votre zone d'effet.",
      "Lancez plutôt Pix à la rescousse ! sur les attaquants à distance pour qu'ils bénéficient de l'aide de Pix et Croissance prodigieuse sur les tanks ou les combattants pour qu'ils engagent plus facilement le combat."
    ],
    "counters": [
      "Les tirs de la pixie de Lulu peuvent être interceptés, alors cachez-vous derrière vos sbires pour éviter les attaques de la pixie.",
      "Lulu excelle quand les adversaires s'engagent trop dans le combat. Ne lui laissez pas le temps d'en profiter ! Harcelez plutôt vos ennemis pour éloigner Lulu et son partenaire de sa voie."
    ],
    "abilities": {
      "passive": {
        "name": "Pix, le Compagnon féérique",
        "description": "Pix tire des projectiles magiques quand le champion qu'il suit attaque une autre unité ennemie. Ces tirs sont guidés, mais ils peuvent être interceptés par d'autres unités.",
        "icon": "Lulu_PixFaerieCompanion.png"
      },
      "q": {
        "name": "Duo éclatant",
        "description": "Pix et Lulu tirent chacun un projectile magique qui blesse et ralentit grandement les ennemis touchés.",
        "icon": "LuluQ.png"
      },
      "w": {
        "name": "Fantaisie",
        "description": "Si le sort est lancé sur un allié, il augmente temporairement ses vitesses de déplacement et d'attaque. S'il est lancé sur un ennemi, il le transforme en une petite bête adorable qui ne peut ni attaquer, ni lancer de sorts.",
        "icon": "LuluW.png"
      },
      "e": {
        "name": "Pix à la rescousse !",
        "description": "Sort lancé sur un allié : ordonne à Pix de rejoindre un allié et de le protéger, après quoi Pix le suit et l'aide à attaquer. Sort lancé sur un ennemi : ordonne à Pix de foncer sur un ennemi et de le blesser, après quoi Pix le suit et vous confère la vision de cet ennemi.",
        "icon": "LuluE.png"
      },
      "r": {
        "name": "Croissance prodigieuse",
        "description": "Lulu fait grandir un allié, projetant en l'air les ennemis proches et lui conférant de nombreux PV supplémentaires. Pendant les quelques secondes qui suivent, cet allié bénéficie d'un halo qui ralentit les ennemis proches.",
        "icon": "LuluR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2019-06-12",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://boards.na.leagueoflegends.com/en/c/developer-corner/cRIFiyaO-vfx-updates-for-amumu-lulu-tryndamere-and-ziggs",
          "label": null
        }
      }
    ],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Rakan | Gameplay – League of Legends",
        "url": "https://www.youtube.com/watch?v=enEAGJA1WxE",
        "published": "2017-04-17",
        "duration": 338
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Lulu: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=R1Gs1D2rUIM",
        "published": "2012-03-20",
        "duration": 408
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Lulu Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=igM-pbr_LAc",
        "published": "2026-04-15",
        "duration": 180
      }
    ],
    "releaseDate": "2012-03-20"
  },
  {
    "id": "lux",
    "key": "0099",
    "ddid": "Lux",
    "name": "Lux",
    "title": "Dame de lumière",
    "roles": {
      "mid": {
        "tier": "A",
        "wr": 50.73,
        "pr": 3.95,
        "ban": 3.45
      },
      "adc": {
        "tier": "S",
        "wr": 52.73,
        "pr": 0.99,
        "ban": 3.36
      },
      "sup": {
        "tier": "B",
        "wr": 48.96,
        "pr": 6.5,
        "ban": 3.45
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 2,
      "magic": 9
    },
    "class": "Mage / Soutien",
    "strengths": [
      "Lux a de grandes compétences de contrôle de zone. Lancez Anomalie radieuse pour empêcher l'ennemi d'avancer ou de fuir.",
      "Si vous avez des difficultés avec Barrière prismatique, n'oubliez pas qu'elle revient vers vous après avoir atteint sa portée max : placez-vous pour qu'elle touche vos alliés à son retour.",
      "Anomalie radieuse est idéale pour la reconnaissance. Utilisez-la sur les herbes hautes pour éviter les embuscades."
    ],
    "counters": [
      "Lux a de puissantes compétences de contrôle de zone. Dispersez-vous et attaquez de différentes directions pour qu'elle ne puisse pas cibler une zone précise.",
      "Quand vous vous repliez avec peu de PV, préparez-vous à esquiver Éclat final de Lux : un laser de visée rouge précède le rayon principal, alors esquivez sur le côté."
    ],
    "abilities": {
      "passive": {
        "name": "Illumination",
        "description": "Les compétences de Lux infligeant des dégâts chargent la cible en énergie pendant quelques secondes. La prochaine attaque de Lux embrase l'énergie, infligeant des dégâts magiques supplémentaires à la cible (en fonction du niveau de Lux).",
        "icon": "LuxIlluminatingFraulein.png"
      },
      "q": {
        "name": "Entrave de lumière",
        "description": "Lux projette une sphère de lumière qui immobilise et blesse jusqu'à deux unités ennemies.",
        "icon": "LuxLightBinding.png"
      },
      "w": {
        "name": "Barrière prismatique",
        "description": "Lux lance son bâton et courbe la lumière autour des cibles alliées touchées, les protégeant contre les dégâts.",
        "icon": "LuxPrismaticWave.png"
      },
      "e": {
        "name": "Anomalie radieuse",
        "description": "Crée une anomalie composée de lumière dans une zone, ralentissant les ennemis proches. Lux peut la faire exploser pour blesser les ennemis dans la zone d'effet.",
        "icon": "LuxLightStrikeKugel.png"
      },
      "r": {
        "name": "Éclat final",
        "description": "Après avoir chargé de l'énergie, Lux tire un rayon lumineux qui inflige des dégâts à toutes les cibles dans la zone. En outre, Éclat final déclenche la compétence passive de Lux et rafraîchit la durée du sortilège d'Illumination.",
        "icon": "LuxR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2019-12-11",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://boards.na.leagueoflegends.com/en/c/developer-corner/Ia7L3yAv-lux-vfx-update",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2015-04-08",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-58-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Lux: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=pJB6JWDESWU",
        "published": "2010-10-19",
        "duration": 375
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Lux Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=nl0xuXZDT7g",
        "published": "2026-01-26",
        "duration": 180
      }
    ],
    "releaseDate": "2010-10-19"
  },
  {
    "id": "malphite",
    "key": "0054",
    "ddid": "Malphite",
    "name": "Malphite",
    "title": "Éclat du monolithe",
    "roles": {
      "top": {
        "tier": "S",
        "wr": 51.44,
        "pr": 6.7,
        "ban": 15.04
      },
      "mid": {
        "tier": "A",
        "wr": 50.57,
        "pr": 0.84,
        "ban": 14.72
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 5,
      "magic": 7
    },
    "class": "Tank / Mage",
    "strengths": [
      "Bien que ses capacités dépendent principalement de son armure, dans certaines parties, Malphite a besoin d'améliorer sa résistance magique. Dans ce cas, essayez d'utiliser Égide de la légion, Sandales de Mercure et Ange gardien."
    ],
    "counters": [
      "Si vous êtes spécialisé dans les dégâts physiques, restez derrière vos alliés quand vous combattez Malphite. Choc au sol peut réduire significativement les dégâts que vous infligez.",
      "Malphite est un des rares tanks junglers. Méfiez-vous s'il a Châtiment."
    ],
    "abilities": {
      "passive": {
        "name": "Bouclier de granit",
        "description": "Malphite est protégé par un bouclier de roche qui absorbe des dégâts équivalents à 10% de ses PV max. Si Malphite n'est pas touché pendant quelques secondes, l'effet se recharge.",
        "icon": "Malphite_GraniteShield.png"
      },
      "q": {
        "name": "Éclat sismique",
        "description": "Malphite envoie un éclat de terre à son ennemi à travers le sol, infligeant des dégâts à l'impact et lui dérobant sa vitesse de déplacement pendant 3 sec.",
        "icon": "SeismicShard.png"
      },
      "w": {
        "name": "Coup de tonnerre",
        "description": "Malphite attaque avec tant de force qu'il crée des bangs supersoniques. Pendant quelques secondes, ses attaques produisent des ondes de choc devant lui.",
        "icon": "Obduracy.png"
      },
      "e": {
        "name": "Choc au sol",
        "description": "Malphite frappe le sol, provoquant une onde de choc qui inflige des dégâts magiques en fonction de son armure et qui réduit brièvement la vitesse d'attaque des ennemis.",
        "icon": "Landslide.png"
      },
      "r": {
        "name": "Force indomptable",
        "description": "Malphite fonce vers une position à grande vitesse, blessant les ennemis et les projetant dans les airs.",
        "icon": "UFSlash.png"
      }
    },
    "sourceNotes": [
      {
        "field": "strengths",
        "note": "Conseil officiel « L'armure réduit les dégâts qui frappent Bouclier de granit, c'est pourquoi activer Frappes brutales renforce le bouclier contre les dégâts physiques. » — nomme « Frappes brutales », absent du kit actuel (noms et descriptions des sorts, Data Dragon 16.17.1) et des objets actuels (item.json) : conseil non affiché.",
        "url": "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
        "retrieved": "2026-09-08"
      }
    ],
    "reworkHistory": [
      {
        "type": "Sound (SFX) Update",
        "date": "2020-02-05",
        "kitAffecting": false,
        "source": {
          "url": "https://na.leagueoflegends.com/en-us/news/game-updates/patch-10-3-notes/",
          "label": null
        }
      },
      {
        "type": "Visual (VFX) and Gameplay Update",
        "date": "2019-07-17",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/game-updates/patch/patch-914-notes#patch-malphite",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-12-10",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-421-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual (VFX) and Gameplay Update",
      "date": "2019-07-17",
      "source": {
        "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/game-updates/patch/patch-914-notes#patch-malphite",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Nautilus: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=IyOeyjwZT28",
        "published": "2012-02-14",
        "duration": 425
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Malphite Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=x0Dtfu6kXEs",
        "published": "2025-11-11",
        "duration": 180
      }
    ],
    "releaseDate": "2009-09-02"
  },
  {
    "id": "malzahar",
    "key": "0090",
    "ddid": "Malzahar",
    "name": "Malzahar",
    "title": "Prophète du Néant",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 49.62,
        "pr": 0.51,
        "ban": 8.79
      },
      "mid": {
        "tier": "B",
        "wr": 49.92,
        "pr": 5.36,
        "ban": 9.33
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 2,
      "magic": 9
    },
    "class": "Mage",
    "strengths": [
      "Avant de lancer Nuée du Néant, attendez qu'il y ait des ennemis à proximité afin que l'être du Néant puisse attaquer ou tuer quelqu'un.",
      "Utilisez Appel du Néant et Poigne du Néant pour renouveler la durée des Visions maléfiques affectant les ennemis.",
      "Sur votre voie, évitez les dégâts pour profiter un maximum de Plan du Néant et ainsi grandement augmenter la sécurité de Malzahar."
    ],
    "counters": [
      "Quand Malzahar lance un sort sur des ennemis affectés par Visions maléfiques, les visions sont renouvelées.",
      "Restez loin des sbires touchés par Visions maléfiques, car s'ils meurent, ils risquent de vous transmettre leurs visions.",
      "Malzahar est particulièrement dangereux s'il a le temps de former une Nuée du Néant."
    ],
    "abilities": {
      "passive": {
        "name": "Plan du Néant",
        "description": "Quand il ne subit pas de dégâts ou de contrôle de foule pendant un temps, Malzahar gagne une énorme réduction des dégâts et devient insensible aux contrôles de foule. Cet effet perdure pendant un court instant après avoir subi des dégâts.",
        "icon": "Malzahar_Passive.png"
      },
      "q": {
        "name": "Appel du Néant",
        "description": "Malzahar ouvre deux portails vers le Néant. Après un court délai, ils tirent des projectiles qui infligent des dégâts magiques et réduisent les champions ennemis au silence.",
        "icon": "MalzaharQ.png"
      },
      "w": {
        "name": "Nuée du Néant",
        "description": "Malzahar invoque des êtres du Néant qui attaquent les ennemis proches.",
        "icon": "MalzaharW.png"
      },
      "e": {
        "name": "Visions maléfiques",
        "description": "Malzahar tourmente sa cible avec des visions de sa mort, infligeant des dégâts sur la durée. Utiliser les autres sorts de Malzahar sur la cible renouvelle les visions.<br><br>Si la cible meurt en étant affectée par cet effet, les visions sont transmises à une unité ennemie proche et Malzahar regagne du mana. Les êtres du Néant de Malzahar sont attirés par les cibles ainsi affectées.",
        "icon": "MalzaharE.png"
      },
      "r": {
        "name": "Poigne du Néant",
        "description": "Malzahar canalise l'essence du Néant pour neutraliser un champion ennemi dans une zone d'énergie négative infligeant des dégâts.",
        "icon": "MalzaharR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2020-09-02",
        "kitAffecting": false,
        "source": {
          "url": "https://www.reddit.com/r/LeaguePBE/comments/idnmuv/nocturne_viktor_malzahar_and_ignite_visual/",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2016-05-04",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/mid-season-magic",
          "label": "Mages: Battlemages"
        }
      },
      {
        "type": "Visual (Texture) and Gameplay Update",
        "date": "2016-05-04",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/en/featured/mid-season-magic",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-12-10",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-421-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2016-05-04",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/mid-season-magic",
        "label": "Mages: Battlemages"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Malzahar: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=PC5ScnEH-Rc",
        "published": "2010-05-31",
        "duration": 430
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Malzahar Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=Ngk59CDuxc4",
        "published": "2025-12-16",
        "duration": 180
      }
    ],
    "releaseDate": "2010-06-01"
  },
  {
    "id": "maokai",
    "key": "0057",
    "ddid": "Maokai",
    "name": "Maokai",
    "title": "Tréant torturé",
    "roles": {
      "jgl": {
        "tier": "A",
        "wr": 50.98,
        "pr": 0.66,
        "ban": 0.16
      },
      "sup": {
        "tier": "B",
        "wr": 50.51,
        "pr": 1.69,
        "ban": 0.17
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 3,
      "magic": 6
    },
    "class": "Tank / Soutien",
    "strengths": [
      "Les arbrisseaux peuvent être lancés dans les hautes herbes pour renforcer leur effet, mais ils ne s'empilent pas.",
      "Essayez d'attaquer par le flanc ou de manière à ce qu'Emprise de la nature soit impossible à esquiver, ou prenez les ennemis par surprise.",
      "La compétence passive de Maokai le rend extrêmement endurant contre les barrages de sorts, mais seulement s'il peut placer des attaques de base."
    ],
    "counters": [
      "Les arbrisseaux pourchassent le premier ennemi qui approche, mais explosent au bout de quelques secondes ou s'ils touchent des ennemis. Méfiez-vous des arbrisseaux déployés dans les hautes herbes, car ils sont beaucoup plus dangereux.",
      "Le délai de récupération des soins de Maokai dépend du nombre de sorts que vous lancez sur lui. Attention à ne pas utiliser vos sorts pour rien.",
      "Maokai ne subit pas de dégâts pendant Croissance torturée, alors ne gâchez pas vos sorts."
    ],
    "abilities": {
      "passive": {
        "name": "Sève magique",
        "description": "L'attaque de base de Maokai a un effet qui lui rend des PV et qui inflige des dégâts supplémentaires, avec un délai de récupération modéré. Chaque fois que Maokai lance une compétence ou est touché par une compétence ennemie, ce délai de récupération est réduit.",
        "icon": "Maokai_Passive.png"
      },
      "q": {
        "name": "Coup de ronces",
        "description": "Maokai projette les ennemis proches en arrière avec une onde de choc, leur infligeant des dégâts magiques et les ralentissant.",
        "icon": "MaokaiQ.png"
      },
      "w": {
        "name": "Croissance torturée",
        "description": "Maokai se transforme en une masse de racines mouvantes, devenant impossible à cibler et fonçant sur la cible. À l'arrivée, il immobilise la cible.",
        "icon": "MaokaiW.png"
      },
      "e": {
        "name": "Jet d'arbrisseau",
        "description": "Maokai envoie un arbrisseau qui surveille une zone. Plus efficace dans les hautes herbes.",
        "icon": "MaokaiE.png"
      },
      "r": {
        "name": "Emprise de la nature",
        "description": "Maokai invoque un colossal mur de ronces et d'épines qui avance lentement, blessant et immobilisant les ennemis sur son chemin.",
        "icon": "MaokaiR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Class-scale Update",
        "date": "2017-05-03",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/midseason-2017",
          "label": "Tanks: Vanguards"
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2017-05-03",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/en/featured/midseason-2017",
          "label": null
        }
      },
      {
        "type": "Visual Update",
        "date": "2014-11-20",
        "kitAffecting": false,
        "source": {
          "url": "http://na.leagueoflegends.com/en/news/champions-skins/champion-update/champion-update-maokai",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2017-05-03",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/midseason-2017",
        "label": "Tanks: Vanguards"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Maokai: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=Gw8f-VqAcQo",
        "published": "2011-02-16",
        "duration": 442
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Maokai Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=QTBcU4F_EBM",
        "published": "2023-10-12",
        "duration": 180
      }
    ],
    "releaseDate": "2011-02-16"
  },
  {
    "id": "masteryi",
    "key": "0011",
    "ddid": "MasterYi",
    "name": "Master Yi",
    "title": "Fine lame Wuju",
    "roles": {
      "jgl": {
        "tier": "B",
        "wr": 49.01,
        "pr": 5.07,
        "ban": 11.38
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 10,
      "magic": 2
    },
    "class": "Combattant / Assassin",
    "strengths": [
      "Si vous affrontez des champions spécialistes de l'attaque à distance sur votre voie, développez Méditation pour rester plus longtemps sur votre voie et gagner des niveaux plus rapidement qu'eux.",
      "Style Wuju est très puissant en début de partie pour porter le coup fatal aux sbires.",
      "Essayez d'utiliser Assaut éclair sur un sbire devant un champion ennemi pour être en sécurité à la fin du sort."
    ],
    "counters": [
      "Méditation est efficace pour soigner les dégâts sur la durée, mais Maître Yi est vulnérable aux ganks coordonnés en début de partie.",
      "Si Maître Yi essaie de farmer avec Assaut éclair, frappez-le plusieurs fois pour qu'il gaspille son mana en Méditation.",
      "Bien que Maître Yi ne puisse pas être ralenti quand il utilise Highlander, d'autres entraves peuvent l'arrêter."
    ],
    "abilities": {
      "passive": {
        "name": "Coup double",
        "description": "Après plusieurs attaques consécutives, Maître Yi frappe deux fois.",
        "icon": "MasterYi_Passive1.png"
      },
      "q": {
        "name": "Assaut éclair",
        "description": "Maître Yi se téléporte sur le champ de bataille à la vitesse de l'éclair, infligeant des dégâts physiques à plusieurs unités sur son chemin tout en étant impossible à cibler. Assaut éclair peut infliger des coups critiques et inflige des dégâts physiques supplémentaires aux monstres. Les attaques de base réduisent le délai de récupération d'Assaut éclair.",
        "icon": "AlphaStrike.png"
      },
      "w": {
        "name": "Méditation",
        "description": "Maître Yi médite, régénérant ses PV chaque seconde et subissant moins de dégâts un court moment. De plus, Maître Yi cumule des effets Coup double et met en pause la durée restante de Style Wuju et de Highlander pour chaque seconde de canalisation.",
        "icon": "Meditate.png"
      },
      "e": {
        "name": "Style Wuju",
        "description": "Permet aux attaques de base d'infliger des dégâts bruts supplémentaires.",
        "icon": "WujuStyle.png"
      },
      "r": {
        "name": "Highlander",
        "description": "Maître Yi se déplace avec une agilité sans pareille, ce qui augmente ses vitesses de déplacement et d'attaque et le rend temporairement insensible aux effets qui ralentissent. Pendant la durée de l'effet, tuer un champion ou effectuer une assistance prolonge la durée de Highlander. Passivement, tuer un champion ou effectuer une assistance réduit le délai de récupération des autres compétences.",
        "icon": "Highlander.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2013-07-30",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/board/showthread.php?t=3719335",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2013-07-30",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/board/showthread.php?t=3719335",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Master Yi: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=RJo0YzTyvXw",
        "published": "2013-07-31",
        "duration": 406
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Master Yi Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=d3miLrI8SdQ",
        "published": "2025-09-26",
        "duration": 180
      }
    ],
    "releaseDate": "2009-02-21"
  },
  {
    "id": "mel",
    "key": "0800",
    "ddid": "Mel",
    "name": "Mel",
    "title": "Reflet de l'âme",
    "roles": {
      "adc": {
        "tier": "C",
        "wr": 46.38,
        "pr": 1.57,
        "ban": 19.87
      },
      "sup": {
        "tier": "D",
        "wr": 42.62,
        "pr": 0.77,
        "ban": 19.43
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 2,
      "magic": 9
    },
    "class": "Mage / Soutien",
    "strengths": [],
    "counters": [
      "Mel peut renvoyer les projectiles ennemis, même les compétences les plus puissantes. Attendez qu'elle lance Réfutation avant d'envoyer vos puissants projectiles dans sa direction.",
      "Plus Mel vous touche, plus elle vous applique d'effets Accablement. Si vos PV tombent trop bas, elle vous exécutera la prochaine fois qu'elle vous touchera. N'hésitez pas à reculer quelques secondes pour laisser expirer les effets Accablement."
    ],
    "abilities": {
      "passive": {
        "name": "Luminescence incandescente",
        "description": "Chaque fois que Mel utilise une compétence, elle gagne trois projectiles bonus (neuf max) pour sa prochaine attaque.<br><br>Lorsque Mel inflige des dégâts grâce à une compétence ou une attaque, elle applique Accablement (cumulable à l'infini). S'il y a suffisamment d'effets cumulés sur un ennemi quand Mel le touche, les effets sont consommés pour exécuter la cible.",
        "icon": "Mel_Passive.png"
      },
      "q": {
        "name": "Salve radieuse",
        "description": "Mel tire une rafale de projectiles qui explosent sur une zone et infligent des dégâts répétés aux ennemis qui s'y trouvent.",
        "icon": "MelQ.png"
      },
      "w": {
        "name": "Réfutation",
        "description": "Mel crée une barrière autour d'elle qui renvoie les projectiles ennemis à l'envoyeur. Cela la protège des dégâts et augmente sa vitesse de déplacement.",
        "icon": "MelW.png"
      },
      "e": {
        "name": "Piège solaire",
        "description": "Mel lance un orbe brillant qui immobilise les ennemis touchés par le centre du projectile et qui ralentit ceux qui se trouvent en périphérie tout en leur infligeant des dégâts sur la durée.",
        "icon": "MelE.png"
      },
      "r": {
        "name": "Éclipse dorée",
        "description": "Mel frappe tous les ennemis marqués par Accablement sans tenir compte de la distance qui les sépare d'elle. Cela leur inflige des dégâts bonus pour chaque effet d'Accablement cumulé.<br><br>Plus la compétence Éclipse dorée a un niveau élevé, plus les dégâts d'Accablement sont importants.",
        "icon": "MelR.png"
      }
    },
    "sourceNotes": [
      {
        "field": "strengths",
        "note": "Conseils « en jouant avec » non affichés : Data Dragon y fournit exactement les mêmes textes que les conseils « en jouant contre » (formulés pour l'adversaire : « Attendez qu'elle lance Réfutation… »), gardés uniquement côté Contre.",
        "url": "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
        "retrieved": "2026-09-08"
      }
    ],
    "reworkHistory": [
      {
        "type": "Gameplay Update",
        "date": "2026-02-04",
        "kitAffecting": true,
        "source": {
          "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-26-03-notes/",
          "label": "Patch 26.3 Notes"
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2026-02-04",
      "source": {
        "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-26-03-notes/",
        "label": "Patch 26.3 Notes"
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Mel | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=ti0doE04wAE",
        "published": "2025-01-09",
        "duration": 211
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Mel Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=hECQiybsrsM",
        "published": "2025-01-09",
        "duration": 211
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Mel Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=QKyEhKMyQgg",
        "published": "2026-02-23",
        "duration": 180
      }
    ],
    "releaseDate": "2025-01-23"
  },
  {
    "id": "milio",
    "key": "0902",
    "ddid": "Milio",
    "name": "Milio",
    "title": "Douce flamme",
    "roles": {
      "sup": {
        "tier": "A",
        "wr": 50.75,
        "pr": 6.87,
        "ban": 4.32
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 2,
      "magic": 8
    },
    "class": "Soutien / Mage",
    "strengths": [
      "Milio a besoin d'alliés proches pour profiter au maximum de ses capacités.",
      "La vitesse des ruées de Milio augmente avec sa vitesse de déplacement. Profitez de ce surcroît de vitesse pour surprendre vos ennemis !",
      "Le danger est amusant si on le veut bien."
    ],
    "counters": [
      "Les compétences de déplacement de Milio annoncent leur destination. Essayez de tirer parti de ces informations.",
      "Les champions pouvant rapidement appliquer des contrôles de foule excellent contre Milio.",
      "Surprendre Milio quand il est loin de ses alliés entrave grandement sa mobilité. Attaquez-vous à lui quand il est isolé."
    ],
    "abilities": {
      "passive": {
        "name": "Tout feu tout flamme",
        "description": "Les compétences de Milio enchantent les alliés touchés, ce qui permet aux prochains dégâts de ces alliés d'infliger des dégâts supplémentaires et de brûler leur cible.",
        "icon": "Milio_P.png"
      },
      "q": {
        "name": "Ultra méga boule de feu",
        "description": "Milio tire une boule de feu qui repousse un ennemi. À l'impact, la boule part en cloche et retombe sur l'ennemi, ce qui blesse et ralentit les ennemis dans la zone.",
        "icon": "MilioQ.png"
      },
      "w": {
        "name": "Feu de camp",
        "description": "Milio crée une zone de renforcement qui soigne les alliés qui y entrent tout en augmentant leur portée d'attaque. La zone suit l'allié le plus proche du point de départ.",
        "icon": "MilioW.png"
      },
      "e": {
        "name": "Chaud devant !",
        "description": "Milio lance un bouclier sur un allié, ce qui augmente temporairement la vitesse de déplacement de cet allié. Cette compétence a 2 charges.",
        "icon": "MilioE.png"
      },
      "r": {
        "name": "Flammes vitales",
        "description": "Milio libère une vague de flammes guérisseuses qui soignent les alliés à portée tout en supprimant les effets de contrôle de foule qui les affectent.",
        "icon": "MilioR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Milio | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=BYg-4ZtitqM",
        "published": "2023-03-22",
        "duration": 293
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Milio Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=_FudDdGOdsE",
        "published": "2023-03-22",
        "duration": 290
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Milio Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=Rbbhzgqe28k",
        "published": "2024-05-09",
        "duration": 180
      }
    ],
    "releaseDate": "2023-03-23"
  },
  {
    "id": "missfortune",
    "key": "0021",
    "ddid": "MissFortune",
    "name": "Miss Fortune",
    "title": "Chasseuse de primes",
    "roles": {
      "adc": {
        "tier": "A",
        "wr": 49.27,
        "pr": 5.79,
        "ban": 0.66
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 5
    },
    "class": "Tireur / Mage",
    "strengths": [
      "Miss Fortune gagne en vitesse si elle ne subit pas de dégâts pendant un moment. Pour avancer très vite, évitez de vous faire toucher.",
      "Utilisez Doublé sur le sbire ennemi le plus éloigné si les champions restent à l'arrière, pour les toucher par la même occasion.",
      "Pensez à utiliser Cœur volage quand Fanfaronne est en récupération pour que cette compétence redevienne vite disponible."
    ],
    "counters": [
      "Le bonus en vitesse de Miss Fortune est perdu lorsqu'elle est blessée par un ennemi.",
      "Miss Fortune est facile à tuer si vous parvenez à l'approcher : visez-la en premier lors des combats d'équipes."
    ],
    "abilities": {
      "passive": {
        "name": "Cœur volage",
        "description": "Miss Fortune inflige des dégâts physiques supplémentaires quand elle attaque une nouvelle cible.",
        "icon": "MissFortune_W.png"
      },
      "q": {
        "name": "Doublé",
        "description": "Miss Fortune tire une balle sur une cible, blessant cette cible et celle qui se trouve derrière. Les deux coups peuvent aussi appliquer Cœur volage.",
        "icon": "MissFortuneRicochetShot.png"
      },
      "w": {
        "name": "Fanfaronne",
        "description": "Miss Fortune augmente passivement sa vitesse de déplacement quand elle n'est pas attaquée. Cette compétence peut être activée pour recevoir un bonus en vitesse d'attaque pendant un court instant. Quand cette compétence est en récupération, Cœur volage réduit le délai de récupération restant de Fanfaronne.",
        "icon": "MissFortuneViciousStrikes.png"
      },
      "e": {
        "name": "Pluie de balles",
        "description": "Miss Fortune révèle une zone avec une pluie de balles, infligeant des vagues de dégâts aux ennemis et les ralentissant.",
        "icon": "MissFortuneScattershot.png"
      },
      "r": {
        "name": "Barrage de plomb",
        "description": "Miss Fortune déchaîne un déluge de balles dans un cône devant elle, infligeant d'importants dégâts aux ennemis. Chaque vague de Barrage de plomb peut infliger des coups critiques.",
        "icon": "MissFortuneBulletTime.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2024-08-28",
        "kitAffecting": false,
        "source": {
          "url": "https://www.youtube.com/watch?v=FadGchJsABA",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2015-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
          "label": "Marksmen"
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2015-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
          "label": null
        }
      },
      {
        "type": "Visual and Gameplay Update",
        "date": "2015-07-21",
        "kitAffecting": true,
        "source": {
          "url": "http://na.leagueoflegends.com/en/page/champion-update/miss-fortune-struts-pbe",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2015-11-10",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
        "label": "Marksmen"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Miss Fortune: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=vZh_hN-62YA",
        "published": "2010-09-08",
        "duration": 341
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Miss Fortune Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=YDzowDDKQP0",
        "published": "2025-07-27",
        "duration": 180
      }
    ],
    "releaseDate": "2010-09-08"
  },
  {
    "id": "mordekaiser",
    "key": "0082",
    "ddid": "Mordekaiser",
    "name": "Mordekaiser",
    "title": "Revenant de fer",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 49.54,
        "pr": 5.12,
        "ban": 8.32
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 4,
      "magic": 7
    },
    "class": "Combattant / Mage",
    "strengths": [
      "Votre meilleure défense, c'est l'attaque. Continuez le combat pour générer de solides boucliers avec Indestructible.",
      "Toucher plusieurs champions avec la même compétence permet de rapidement activer Vortex de ténèbres.",
      "Utilisez Royaume des morts sur un ennemi à qui il reste peu de PV afin de garantir son élimination et vous approprier ses stats pour le reste du combat."
    ],
    "counters": [
      "Mordekaiser génère un important halo de dégâts lorsqu'il combat des champions, donc gardez vos distances.",
      "Les dégâts qu'il inflige peuvent être convertis en un bouclier massif, qu'il peut ensuite consommer pour récupérer des PV.",
      "Royaume des morts vous coupe intégralement du reste de votre équipe. Conservez vos sorts de mobilité pour échapper à Mordekaiser une fois dans son royaume."
    ],
    "abilities": {
      "passive": {
        "name": "Vortex de ténèbres",
        "description": "Après 3 attaques ou compétences contre des champions ou des monstres, Mordekaiser gagne un puissant halo de dégâts et augmente sa vitesse de déplacement.",
        "icon": "MordekaiserPassive.png"
      },
      "q": {
        "name": "Oblitération",
        "description": "Mordekaiser frappe le sol avec sa massue, infligeant des dégâts à tous les ennemis touchés. Les dégâts sont augmentés si un seul ennemi est touché.",
        "icon": "MordekaiserQ.png"
      },
      "w": {
        "name": "Indestructible",
        "description": "Mordekaiser stocke une partie des dégâts qu'il inflige et qu'il subit pour créer un bouclier. Il peut consommer ce bouclier pour récupérer des PV.",
        "icon": "MordekaiserW.png"
      },
      "e": {
        "name": "Emprise funeste",
        "description": "Mordekaiser attire tous les ennemis qui se trouvent dans une zone.",
        "icon": "MordekaiserE.png"
      },
      "r": {
        "name": "Royaume des morts",
        "description": "Mordekaiser entraîne sa victime avec lui dans une autre dimension et lui vole une partie de ses stats. S'il la tue, il garde ces stats jusqu'à la réapparition de sa victime.",
        "icon": "MordekaiserR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2019-06-11",
        "kitAffecting": true,
        "source": {
          "url": "https://nexus.leagueoflegends.com/en-us/2019/04/champion-roadmap-april-2019/",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2015-08-26",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/page/gameplay-update-juggernauts",
          "label": "Fighters: Juggernauts"
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2015-08-26",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/page/gameplay-update-juggernauts",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-11-20",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-420-notes",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2010-11-01",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/board/showthread.php?t=1016177",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2019-06-11",
      "source": {
        "url": "https://nexus.leagueoflegends.com/en-us/2019/04/champion-roadmap-april-2019/",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur la mi-saison 2016",
        "url": "https://www.youtube.com/watch?v=RxqBldX9nRI",
        "published": "2016-05-03",
        "duration": 382
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Mordekaiser Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=yloV7cPpxCQ",
        "published": "2026-05-08",
        "duration": 180
      }
    ],
    "releaseDate": "2010-02-24"
  },
  {
    "id": "morgana",
    "key": "0025",
    "ddid": "Morgana",
    "name": "Morgana",
    "title": "Déchue",
    "roles": {
      "sup": {
        "tier": "B",
        "wr": 49.99,
        "pr": 4.43,
        "ban": 16.64
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 1,
      "magic": 8
    },
    "class": "Soutien / Mage",
    "strengths": [
      "Bien utiliser Bouclier noir peut souvent décider de l'issue des combats d'équipes.",
      "Les objets qui améliorent les capacités de survie, associés à Bouclier noir et à Chaînes spirituelles, font de Morgana un champion très difficile à tuer.",
      "Tourment ténébreux est un excellent outil pour farmer si vous êtes seul sur une voie."
    ],
    "counters": [
      "Tourment ténébreux inflige des tonnes de dégâts aux unités auxquelles il manque beaucoup de PV. Quand vos PV sont bas, attention à ne pas vous faire immobiliser dans la zone de ce sort.",
      "Morgana a souvent besoin de toucher une cible avec Entrave sombre pour pouvoir placer ses autres attaques. Utilisez vos sbires comme bouclier contre Entrave sombre.",
      "Bouclier noir immunise Morgana contre les entraves, mais peut être brisé avec des dégâts magiques."
    ],
    "abilities": {
      "passive": {
        "name": "Siphon d'âme",
        "description": "Morgana peut drainer l'esprit de ses ennemis. Elle récupère des PV quand elle blesse des champions, des grands sbires et des monstres grands ou moyens de la jungle.",
        "icon": "FallenAngel_Empathize.png"
      },
      "q": {
        "name": "Entrave sombre",
        "description": "Morgana utilise la magie noire pour immobiliser un ennemi, l'obligeant à ressentir la douleur qu'il a causée et lui infligeant des dégâts magiques.",
        "icon": "MorganaQ.png"
      },
      "w": {
        "name": "Tourment ténébreux",
        "description": "Morgana déploie une ombre maudite sur une zone, blessant les ennemis qui osent y mettre les pieds. Ces ennemis subissent des dégâts magiques sur la durée qui augmentent avec leurs PV manquants.",
        "icon": "MorganaW.png"
      },
      "e": {
        "name": "Bouclier noir",
        "description": "Morgana offre à un allié une barrière de feu stellaire qui absorbe les dégâts magiques et les entraves jusqu'à ce que celle-ci soit brisée.",
        "icon": "MorganaE.png"
      },
      "r": {
        "name": "Chaînes spirituelles",
        "description": "Morgana détache ses ailes, libérant toute sa puissance céleste et se mettant à survoler le sol. Elle lance des chaînes sombres sur les champions ennemis proches, gagnant de la vitesse de déplacement. Les chaînes ralentissent ces ennemis et leur infligent des dégâts ; après un délai, les ennemis qui n'ont pas brisé les chaînes sont étourdis.",
        "icon": "MorganaR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual Update",
        "date": "2019-03-06",
        "kitAffecting": false,
        "source": {
          "url": "https://na.leagueoflegends.com/en/featured/champion-kayle-morgana",
          "label": null
        }
      },
      {
        "type": "Visual (VFX) Update",
        "date": "2015-04-08",
        "kitAffecting": false,
        "source": {
          "url": "http://na.leagueoflegends.com/en/news/champions-skins/champion-update/champion-update-morgana",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2015-01-14",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://euw.leagueoflegends.com/en/news/game-updates/patch/patch-51-notes/",
          "label": null
        }
      }
    ],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Kayle | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=A54ikDHLPQQ",
        "published": "2019-03-04",
        "duration": 255
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Kayle Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=GV074SIfNhA",
        "published": "2019-03-04",
        "duration": 254
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Morgana Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=kVgzWRLIoS8",
        "published": "2025-08-18",
        "duration": 180
      }
    ],
    "releaseDate": "2009-02-21"
  },
  {
    "id": "naafiri",
    "key": "0950",
    "ddid": "Naafiri",
    "name": "Naafiri",
    "title": "la meute de fer",
    "roles": {
      "jgl": {
        "tier": "B",
        "wr": 49.5,
        "pr": 3.78,
        "ban": 13.56
      },
      "mid": {
        "tier": "B",
        "wr": 48.44,
        "pr": 0.84,
        "ban": 13.27
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 9,
      "magic": 0
    },
    "class": "Assassin / Combattant",
    "strengths": [],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "La meute s'agrandit",
        "description": "Naafiri fait apparaître des membres de meute qui attaquent les cibles de ses attaques et de ses compétences.",
        "icon": "Icons_Naafiri_P.png"
      },
      "q": {
        "name": "Dagues des Darkin",
        "description": "Naafiri lance jusqu'à deux dagues qui appliquent chacune un saignement, ou qui infligent des dégâts supplémentaires si la cible saigne déjà.<br><br>Les membres de meute bondissent pour attaquer le premier champion ou monstre touché par cette compétence.<br>",
        "icon": "NaafiriQ.png"
      },
      "w": {
        "name": "Appel de la meute",
        "description": "Naafiri devient impossible à cibler et renforce sa meute, invoquant des membres de meute supplémentaires et gagnant de la vitesse de déplacement et des dégâts d'attaque.<br>",
        "icon": "NaafiriR.png"
      },
      "e": {
        "name": "Éviscération",
        "description": "Naafiri se rue dans une direction et inflige des dégâts aux ennemis dans une zone autour d'elle. Les membres de meute sont rappelés et entièrement soignés.",
        "icon": "NaafiriE.png"
      },
      "r": {
        "name": "Hallali",
        "description": "Naafiri et ses membres de meute se ruent sur un champion, lui infligeant des dégâts. Naafiri révèle les ennemis proches et peut relancer sa compétence une fois si elle réalise une élimination. La deuxième activation de la compétence n'octroie pas de bouclier.",
        "icon": "NaafiriW.png"
      }
    },
    "sourceNotes": [
      {
        "field": "strengths",
        "note": "Conseil officiel non affiché : le seul « conseil » fourni par Data Dragon pour Naafiri est un paragraphe d'histoire du personnage (« À travers le désert de Shurima, un concert de hurlements ret… »), pas un conseil de jeu.",
        "url": "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
        "retrieved": "2026-09-08"
      }
    ],
    "reworkHistory": [
      {
        "type": "Gameplay Update",
        "date": "2025-03-19",
        "kitAffecting": true,
        "source": {
          "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-25-06-notes/",
          "label": "Patch 25.6 Notes"
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2025-03-19",
      "source": {
        "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-25-06-notes/",
        "label": "Patch 25.6 Notes"
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Naafiri | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=qL76URvo2ks",
        "published": "2023-07-21",
        "duration": 293
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Naafiri Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=rtfS6PQEot0",
        "published": "2023-07-21",
        "duration": 293
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Naafiri Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=4sTSHYntuDY",
        "published": "2026-02-25",
        "duration": 180
      }
    ],
    "releaseDate": "2023-07-19"
  },
  {
    "id": "nami",
    "key": "0267",
    "ddid": "Nami",
    "name": "Nami",
    "title": "Aquamancienne",
    "roles": {
      "sup": {
        "tier": "A",
        "wr": 50.69,
        "pr": 9.25,
        "ban": 1.13
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 4,
      "magic": 7
    },
    "class": "Soutien / Mage",
    "strengths": [
      "Prison aqueuse a un long délai de récupération, alors utilisez-la au bon moment.",
      "Utiliser Flux et reflux lors d'un combat contre des champions vous aidera à prendre l'avantage.",
      "L'ultime de Nami est très pratique pour engager le combat de loin."
    ],
    "counters": [
      "La compétence Prison aqueuse est puissante mais a un long délai de récupération. Profitez de la situation si Nami rate sa cible.",
      "Raz-de-marée a une très longue portée mais va lentement. Restez sur vos gardes pour pouvoir l'esquiver.",
      "Évitez de combattre un adversaire affecté par Bénédiction de l'Aquamancienne. Cet effet ne dure pas longtemps, alors mieux vaut attendre qu'il se dissipe."
    ],
    "abilities": {
      "passive": {
        "name": "Déferlantes",
        "description": "Quand les compétences de Nami touchent des champions alliés, la vitesse de déplacement de ces champions augmente un court instant.",
        "icon": "NamiPassive.png"
      },
      "q": {
        "name": "Prison aqueuse",
        "description": "Envoie une bulle sur la zone ciblée, infligeant des dégâts et étourdissant tous les ennemis à l'impact.",
        "icon": "NamiQ.png"
      },
      "w": {
        "name": "Flux et reflux",
        "description": "Projette un flux d'eau qui rebondit sur les champions alliés et ennemis, soignant les alliés et blessant les ennemis.",
        "icon": "NamiW.png"
      },
      "e": {
        "name": "Bénédiction de l'Aquamancienne",
        "description": "Renforce un champion allié pendant un court instant, permettant à ses attaques de base et à ses compétences d'infliger des dégâts magiques supplémentaires et de ralentir sa cible.",
        "icon": "NamiE.png"
      },
      "r": {
        "name": "Raz-de-marée",
        "description": "Invoque un énorme raz-de-marée qui projette tous les ennemis touchés en l'air, les ralentit et les blesse. Les alliés touchés gagnent le double de l'effet de Déferlantes.",
        "icon": "NamiR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2022-05-25",
        "kitAffecting": false,
        "source": {
          "url": "https://www.reddit.com/r/LeaguePBE/comments/umrfr4/nami_vfx_update/",
          "label": null
        }
      }
    ],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Nami: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=wd_Sz59QTVk",
        "published": "2012-12-07",
        "duration": 300
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Nami Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=HoqwZsKQSMM",
        "published": "2025-07-01",
        "duration": 180
      }
    ],
    "releaseDate": "2012-12-07"
  },
  {
    "id": "nasus",
    "key": "0075",
    "ddid": "Nasus",
    "name": "Nasus",
    "title": "Gardien des sables",
    "roles": {
      "top": {
        "tier": "S",
        "wr": 51.08,
        "pr": 8.32,
        "ban": 45.7
      },
      "mid": {
        "tier": "S",
        "wr": 51.16,
        "pr": 2.15,
        "ban": 45.41
      },
      "jgl": {
        "tier": "D-",
        "wr": 49.71,
        "pr": 0.75,
        "ban": 45.64
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 7,
      "magic": 6
    },
    "class": "Combattant / Tank",
    "strengths": [
      "Savoir utiliser Buveuse d'âmes pour infliger des coups fatals peut avoir un impact majeur en fin de partie.",
      "En solo, Esprit enflammé est un bon moyen de farmer sur une voie. Si vous êtes deux sur la voie, cela peut mal se finir. Trouvez le bon équilibre entre donner le dernier coup avec Buveuse d'âmes et le farming à effet de zone.",
      "Si vos défenses sont faibles, les autres se concentrent sur vous, même pendant votre ultime. Achetez des objets de survie, même en jouant DPS."
    ],
    "counters": [
      "Lorsqu'il est transformé par son ultime, Nasus est plus puissant que la plupart des autres champions. Évitez de l'attaquer si vous n'avez pas un avantage certain.",
      "Au niveau max, Flétrissement est très efficace pour contrer les ennemis orientés vers les dégâts d'attaque. Évitez de vous retrouver isolé.",
      "Nasus a tendance à pourchasser ses cibles. Évitez de l'attaquer s'il a tous ses PV."
    ],
    "abilities": {
      "passive": {
        "name": "Mangeur d'âmes",
        "description": "Nasus draine l'énergie spirituelle de son adversaire et profite d'un bonus de Vol de vie.",
        "icon": "Nasus_Passive.png"
      },
      "q": {
        "name": "Buveuse d'âmes",
        "description": "Nasus frappe son ennemi, infligeant des dégâts et augmentant la puissance des prochaines Buveuses d'âmes s'il tue sa cible.",
        "icon": "NasusQ.png"
      },
      "w": {
        "name": "Flétrissement",
        "description": "Nasus fait vieillir un champion ennemi et réduit ses vitesses d'attaque et de déplacement sur la durée.",
        "icon": "NasusW.png"
      },
      "e": {
        "name": "Esprit enflammé",
        "description": "Nasus libère un esprit enflammé sur une zone, infligeant des dégâts aux ennemis qui s'y trouvent et réduisant leur armure.",
        "icon": "NasusE.png"
      },
      "r": {
        "name": "Fureur des sables",
        "description": "Nasus libère une puissante tempête de sable. Tant que la tempête fait rage, il a plus de PV, sa portée d'attaque est augmentée, il blesse les ennemis proches, il augmente son armure et sa résistance magique et le délai de récupération de Buveuse d'âmes est réduit.",
        "icon": "NasusR.png"
      }
    },
    "sourceNotes": [
      {
        "field": "roles.jgl",
        "note": "Absent des tableaux tier-list jungle d'op.gg ET de lolalytics (sous leur seuil d'affichage — trop peu joué à ce rôle pour y figurer) alors que le rôle existe réellement : retrouvé via la fiche individuelle de lolalytics.",
        "url": "https://lolalytics.com/lol/nasus/build/?lane=jungle",
        "retrieved": "2026-09-08"
      }
    ],
    "reworkHistory": [
      {
        "type": "Class-scale Update",
        "date": "2015-08-26",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/page/gameplay-update-juggernauts",
          "label": "Fighters: Juggernauts"
        }
      },
      {
        "type": "Visual Update",
        "date": "2013-11-21",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://forums.na.leagueoflegends.com/board/showthread.php?p=42634480#post42634480",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2015-08-26",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/page/gameplay-update-juggernauts",
        "label": "Fighters: Juggernauts"
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Kayle | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=A54ikDHLPQQ",
        "published": "2019-03-04",
        "duration": 255
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Nasus Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=WcxB-X1izPQ",
        "published": "2026-07-10",
        "duration": 180
      }
    ],
    "releaseDate": "2009-10-01"
  },
  {
    "id": "nautilus",
    "key": "0111",
    "ddid": "Nautilus",
    "name": "Nautilus",
    "title": "Titan des profondeurs",
    "roles": {
      "sup": {
        "tier": "A",
        "wr": 49.98,
        "pr": 10.92,
        "ban": 14.38
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 4,
      "magic": 6
    },
    "class": "Tank / Soutien",
    "strengths": [
      "Pour ganker, pensez à lancer Abordage sur le décor proche et enchaînez avec Répliques pour augmenter le nombre de coups donnés.",
      "Répliques déclenche une explosion à retardement après son activation. Utilisez-la quand vous fuyez ou pour décourager les ennemis qui approchent."
    ],
    "counters": [
      "Si Nautilus utilise Répliques à côté de vous, restez sur place jusqu'à ce que l'effet s'arrête. Si vous partez en courant trop tôt, vous subirez les explosions secondaires et serez en plus ralenti.",
      "Tant que Nautilus a son bouclier, il est capable d'infliger de puissants dégâts de zone avec ses attaques de base. Si vous le pouvez, essayez de dissiper son bouclier."
    ],
    "abilities": {
      "passive": {
        "name": "Coup écrasant",
        "description": "La première attaque de Nautilus contre une cible inflige des dégâts physiques supplémentaires et l'immobilise brièvement.",
        "icon": "Nautilus_StaggeringBlow.png"
      },
      "q": {
        "name": "Abordage",
        "description": "Nautilus lance son ancre devant lui.  S'il touche un ennemi, Nautilus et la cible sont tirés l'un vers l'autre et Nautilus lui inflige des dégâts magiques.  S'il touche un élément de terrain, Nautilus est tiré vers lui.",
        "icon": "NautilusAnchorDrag.png"
      },
      "w": {
        "name": "Colère du titan",
        "description": "Nautilus profite d'un bouclier temporaire.  Tant que le bouclier persiste, les attaques de Nautilus infligent des dégâts sur la durée à ses cibles et aux ennemis proches.",
        "icon": "NautilusPiercingGaze.png"
      },
      "e": {
        "name": "Répliques",
        "description": "Nautilus crée trois vagues explosives autour de lui. Chaque explosion blesse et ralentit les ennemis.",
        "icon": "NautilusSplashZone.png"
      },
      "r": {
        "name": "Grenade ASM",
        "description": "Nautilus lance une onde de choc qui poursuit un ennemi. L'onde de choc transperce le sol et projette les ennemis en l'air. Quand elle atteint l'ennemi, l'onde de choc éclate, projetant la cible en l'air en l'étourdissant.",
        "icon": "NautilusGrandLine.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2020-02-05",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://boards.na.leagueoflegends.com/en/c/developer-corner/cZEXMEPE-vfx-updates-for-annie-and-nautilus",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-09-25",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://oce.leagueoflegends.com/en/news/game-updates/patch/patch-417-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Nautilus: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=IyOeyjwZT28",
        "published": "2012-02-14",
        "duration": 425
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Nautilus Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=R0gh8jKKIc4",
        "published": "2025-07-31",
        "duration": 180
      }
    ],
    "releaseDate": "2012-02-14"
  },
  {
    "id": "neeko",
    "key": "0518",
    "ddid": "Neeko",
    "name": "Neeko",
    "title": "Caméléon curieux",
    "roles": {
      "sup": {
        "tier": "B",
        "wr": 48.7,
        "pr": 1.54,
        "ban": 0.56
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 1,
      "magic": 9
    },
    "class": "Mage / Soutien",
    "strengths": [
      "Vous pouvez changer les raccourcis de la compétence passive de Neeko dans le menu des options (par défaut : Maj+F1~F5).",
      "Essayez d'utiliser Mirage inné avec parcimonie pour que les ennemis ne soient pas continuellement sur leurs gardes."
    ],
    "counters": [
      "Contre Neeko, rester derrière vos sbires est très dangereux, car Spirale épineuse peut se renforcer en les traversant.",
      "Les avertissements visuels de Floraison renversante sont invisibles si Neeko est déguisée."
    ],
    "abilities": {
      "passive": {
        "name": "Mirage inné",
        "description": "Neeko peut prendre l'apparence d'un champion allié ou d'autres unités sur la carte. Votre déguisement prend fin si vous subissez une immobilisation, lancez des compétences offensives, infligez des dégâts aux tourelles ennemies (uniquement si vous avez pris la forme d'un non-champion) ou si vous subissez des dégâts équivalents aux PV de votre déguisement.",
        "icon": "Neeko_P.png"
      },
      "q": {
        "name": "Explosion florale",
        "description": "Neeko lance une graine qui inflige des dégâts magiques. La graine éclot une nouvelle fois si elle touche des champions ou si elle tue des ennemis.",
        "icon": "NeekoQ.png"
      },
      "w": {
        "name": "Métaclonage",
        "description": "Passivement, Neeko inflige des dégâts magiques supplémentaires toutes les 3 attaques, augmentant brièvement sa vitesse de déplacement. Elle peut activer la compétence pour envoyer un clone dans une direction et la réactiver pour modifier la direction du clone.",
        "icon": "NeekoW.png"
      },
      "e": {
        "name": "Spirale épineuse",
        "description": "Neeko tire un projectile qui blesse et qui immobilise tous les ennemis traversés. Si le projectile tue un ennemi ou traverse un champion, il augmente sa taille, sa vitesse et la durée de son immobilisation.",
        "icon": "NeekoE.png"
      },
      "r": {
        "name": "Floraison renversante",
        "description": "Après une courte préparation, Neeko bondit dans les airs, projetant en l'air tous les ennemis proches. Quand elle atterrit, les ennemis proches sont blessés et étourdis. La préparation ne se voit pas si Neeko est déguisée.",
        "icon": "NeekoR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Gameplay Update",
        "date": "2023-05-03",
        "kitAffecting": true,
        "source": {
          "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-13-9-notes/",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2023-05-03",
      "source": {
        "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-13-9-notes/",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Neeko | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=EWAUxv24BSM",
        "published": "2018-12-04",
        "duration": 201
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Neeko Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=bPj48lmrynU",
        "published": "2018-12-04",
        "duration": 201
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Neeko Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=zNOGMRnL56o",
        "published": "2025-09-04",
        "duration": 180
      }
    ],
    "releaseDate": "2018-12-05"
  },
  {
    "id": "nidalee",
    "key": "0076",
    "ddid": "Nidalee",
    "name": "Nidalee",
    "title": "Chasseresse bestiale",
    "roles": {
      "jgl": {
        "tier": "A",
        "wr": 50.72,
        "pr": 3.13,
        "ban": 2.09
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 5,
      "magic": 7
    },
    "class": "Assassin / Mage",
    "strengths": [
      "Utilisez les herbes hautes à votre avantage ! Entrer et sortir de ces herbes peut vous rendre bien plus efficace au combat.",
      "Lors des combats d'équipes, utilisez d'abord Javelot pour harceler l'ennemi, puis passez à la forme du Couguar pour poursuivre les cibles chassées.",
      "Les pièges de Guérilla infligent des dégâts en fonction des PV actuels de leurs victimes. Lors des sièges, posez-en près de votre seconde ligne avant le début du combat pour aider votre équipe à blesser la première ligne ennemie."
    ],
    "counters": [
      "Le debuff de chasse n'est appliqué qu'avec Javelot et Guérilla. Éviter ces compétences empêchera Nidalee d'enchaîner avec plus de dégâts.",
      "Les dégâts du Javelot augmentent avec la distance. S'il vient de loin, esquivez-le à tout prix.",
      "La Mise à terre inflige d'énormes dégâts aux cibles chassées, mais Nidalee doit s'approcher pour l'utiliser. Utilisez vos compétences défensives ou contrôles de foule si elle vient pour vous tuer."
    ],
    "abilities": {
      "passive": {
        "name": "Prédateur",
        "description": "Dans les herbes hautes, la vitesse de déplacement de Nidalee augmente de 10% pendant 2 sec. Le bonus passe à 30% si Nidalee va vers des champions ennemis visibles à moins de 1400 unités de distance.<br><br>Quand elle touche des champions ou des monstres avec Javelot ou Guérilla, Nidalee se met à les <font color='#FFF673'>chasser</font> et obtient une <font color='#ee91d7'>vision pure</font> de ces cibles pendant 4 sec. Pendant ce temps, la vitesse de déplacement de Nidalee augmente de 10% (30% vers les cibles <font color='#FFF673'>chassées</font>) et, contre ces cibles, Mise à terre et Bond sont renforcés.",
        "icon": "Nidalee_Passive.png"
      },
      "q": {
        "name": "Javelot / Mise à terre",
        "description": "Dans sa forme humaine, Nidalee lance un javelot qui inflige de plus en plus de dégâts selon la distance parcourue. Sous la forme d'un Couguar, sa prochaine attaque tente d'égorger sa cible, et plus celle-ci a déjà perdu de PV, plus les dégâts sont importants.",
        "icon": "JavelinToss.png"
      },
      "w": {
        "name": "Guérilla / Bond",
        "description": "Dans sa forme humaine, Nidalee place un piège qui blesse et révèle la cible qui le déclenche. Sous la forme d'un Couguar, elle bondit dans une direction et inflige des dégâts de zone en atterrissant.",
        "icon": "Bushwhack.png"
      },
      "e": {
        "name": "Charge primale / Taillade",
        "description": "Dans sa forme humaine, Nidalee canalise l'esprit du Couguar pour soigner ses alliés et leur conférer temporairement un bonus en vitesse d'attaque. Sous la forme d'un Couguar, elle donne un coup de griffes aux ennemis devant elle.",
        "icon": "PrimalSurge.png"
      },
      "r": {
        "name": "Aspect du Couguar",
        "description": "Nidalee prend la forme d'un Couguar, ce qui lui confère de nouvelles compétences.",
        "icon": "AspectOfTheCougar.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2024-05-15",
        "kitAffecting": false,
        "source": {
          "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-14-10-notes/",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2014-06-18",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://eune.leagueoflegends.com/en/news/game-updates/patch/patch-410-notes#patch-nidalee",
          "label": null
        }
      },
      {
        "type": "Visual Update",
        "date": "2012-12-13",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/board/showthread.php?p=31414244",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2014-06-18",
      "source": {
        "url": "https://web.archive.org/web/0/http://eune.leagueoflegends.com/en/news/game-updates/patch/patch-410-notes#patch-nidalee",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Nidalee: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=KZjRgm4mF_U",
        "published": "2012-12-12",
        "duration": 413
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Nidalee Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=EeIODDvggmQ",
        "published": "2025-11-09",
        "duration": 180
      }
    ],
    "releaseDate": "2009-12-17"
  },
  {
    "id": "nilah",
    "key": "0895",
    "ddid": "Nilah",
    "name": "Nilah",
    "title": "Joie incarnée",
    "roles": {
      "adc": {
        "tier": "A",
        "wr": 51.42,
        "pr": 1.11,
        "ban": 1.62
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 4
    },
    "class": "Combattant / Assassin",
    "strengths": [],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "Joie éternelle",
        "description": "Nilah gagne plus d'expérience quand elle tue des sbires. De plus, elle renforce et partage les soins et boucliers des alliés proches.",
        "icon": "NIlahP.png"
      },
      "q": {
        "name": "Lame fluide",
        "description": "Nilah donne un coup de lame-fouet dans la direction choisie, infligeant des dégâts aux ennemis sur une ligne droite. Cela augmente sa portée d'attaque pendant un court instant.",
        "icon": "NilahQ.png"
      },
      "w": {
        "name": "Voile de liesse",
        "description": "Nilah s'enveloppe de brume, ce qui augmente sa vitesse de déplacement et lui permet d'esquiver avec grâce toutes les attaques. Tout allié qu'elle touche pendant la durée de la brume gagne aussi cet effet.",
        "icon": "NilahW.png"
      },
      "e": {
        "name": "Torrent",
        "description": "Nilah se rue avec enthousiasme vers sa cible, infligeant des dégâts aux ennemis sur son chemin.",
        "icon": "NilahE.png"
      },
      "r": {
        "name": "Apothéose",
        "description": "Faisant gaiement tournoyer sa lame-fouet, Nilah inflige des dégâts aux ennemis qui l'entourent avant de les attirer vers elle.",
        "icon": "NilahR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Nilah | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=sNbXOVIB0ZI",
        "published": "2022-07-13",
        "duration": 273
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Nilah Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=6OBgIHyPAJ8",
        "published": "2022-07-13",
        "duration": 273
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Nilah Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=Zk6qTk71K5Q",
        "published": "2024-12-01",
        "duration": 180
      }
    ],
    "releaseDate": "2022-07-13"
  },
  {
    "id": "nocturne",
    "key": "0056",
    "ddid": "Nocturne",
    "name": "Nocturne",
    "title": "Éternel cauchemar",
    "roles": {
      "jgl": {
        "tier": "S",
        "wr": 50.78,
        "pr": 6.19,
        "ban": 13.12
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 9,
      "magic": 2
    },
    "class": "Combattant / Assassin",
    "strengths": [
      "Lancer Paranoïa au moment critique est très efficace même si le rush est inutilisable.",
      "Crépuscule n'est pas juste une attaque, il permet aussi de se rapprocher du combat ou d'échapper à une mort certaine.",
      "Lancez Linceul des ténèbres en même temps que le rush de Paranoïa pour que les adversaires paniquent et gaspillent un sort entravant sur votre bouclier antisorts."
    ],
    "counters": [
      "Restez près de vos alliés quand Nocturne lance Paranoïa !",
      "Le lien d'Horreur indicible se brise avec la distance, alors gardez vos compétences de mouvement pour quand Nocturne s'en sert."
    ],
    "abilities": {
      "passive": {
        "name": "Lames d'ombre",
        "description": "Toutes les quelques secondes, la prochaine attaque de Nocturne frappe les ennemis proches, infligeant des dégâts physiques supplémentaires et lui rendant des PV. <br><br>Les attaques de base de Nocturne réduisent ce délai.",
        "icon": "Nocturne_UmbraBlades.png"
      },
      "q": {
        "name": "Crépuscule",
        "description": "Nocturne projette une lame noire qui inflige des dégâts et laisse une Lueur crépusculaire derrière elle. Les champions ennemis touchés émettent également une Lueur crépusculaire. Quand il est dans la lueur, Nocturne peut traverser les unités et profite d'un bonus en vitesse de déplacement et en dégâts d'attaque.",
        "icon": "NocturneDuskbringer.png"
      },
      "w": {
        "name": "Linceul des ténèbres",
        "description": "Nocturne renforce ses lames, ce qui augmente passivement sa vitesse d'attaque. En lançant Linceul des ténèbres, Nocturne se fond dans l'obscurité, ce qui crée une barrière magique capable de bloquer une compétence ennemie et de doubler le bonus passif en vitesse d'attaque en cas de blocage.",
        "icon": "NocturneShroudofDarkness.png"
      },
      "e": {
        "name": "Horreur indicible",
        "description": "Nocturne implante un cauchemar dans l'esprit de sa cible, infligeant des dégâts chaque seconde et terrifiant la cible si elle reste à portée pendant toute la durée du sort.",
        "icon": "NocturneUnspeakableHorror.png"
      },
      "r": {
        "name": "Paranoïa",
        "description": "Nocturne réduit le champ de vision de tous les champions ennemis et supprime la vision qu'ils ont de leurs alliés. Il peut ensuite se projeter vers un champion ennemi proche.",
        "icon": "NocturneParanoia.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2020-09-02",
        "kitAffecting": false,
        "source": {
          "url": "https://www.reddit.com/r/LeaguePBE/comments/idnmuv/nocturne_viktor_malzahar_and_ignite_visual/",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-10-23",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-418-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Nocturne: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=owrwt97AH54",
        "published": "2011-03-15",
        "duration": 340
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Nocturne Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=_p1EyJv_5ZY",
        "published": "2024-10-16",
        "duration": 180
      }
    ],
    "releaseDate": "2011-03-15"
  },
  {
    "id": "nunu",
    "key": "0020",
    "ddid": "Nunu",
    "name": "Nunu & Willump",
    "title": "Le Garçon et son yéti",
    "roles": {
      "jgl": {
        "tier": "A",
        "wr": 50.76,
        "pr": 1.97,
        "ban": 0.45
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 4,
      "magic": 7
    },
    "class": "Tank / Mage",
    "strengths": [
      "Voracité permet à Nunu de rester dans une voie face à des adversaires spécialistes du combat à distance.",
      "Vous pouvez interrompre Zéro absolu assez tôt pour infliger au moins quelques dégâts avant que la cible ne soit hors de portée.",
      "Il est souvent préférable d'attendre que la série d'effets néfastes initiale ait été lancée avant de lancer Zéro absolu. Retenez-vous avant de vous jeter dans un combat d'équipe."
    ],
    "counters": [
      "Interrompre la charge de Zéro absolu diminue les dégâts subis par votre équipe.",
      "Le sort d'invocateur Saut éclair est idéal pour échapper à Zéro absolu.",
      "La Boule de neige géante avance très vite, mais ne tourne pas aussi vite. Pour lui échapper, évitez donc de courir en ligne droite,  changez de direction de façon abrupte."
    ],
    "abilities": {
      "passive": {
        "name": "Appel de Freljord",
        "description": "Nunu augmente les vitesses d'attaque et de déplacement de Willump et d'un allié proche, et les attaques de base de Willump infligent des dégâts aux ennemis proches de la cible.",
        "icon": "NunuPassive.png"
      },
      "q": {
        "name": "Voracité",
        "description": "Willump mord un sbire, un monstre ou un champion ennemi, lui infligeant d'importants dégâts et récupérant des PV.",
        "icon": "NunuQ.png"
      },
      "w": {
        "name": "Boule de neige géante !",
        "description": "Willump crée une boule de neige qui grossit et accélère à mesure qu'il la fait rouler.  La boule de neige blesse et projette en l'air les ennemis.",
        "icon": "NunuW.png"
      },
      "e": {
        "name": "Rafale de boules de neige",
        "description": "Nunu lance plusieurs boules de neige qui blessent les ennemis.  Ensuite, Willump immobilise les champions et les grands monstres qui ont été touchés par une boule de neige.",
        "icon": "NunuE.png"
      },
      "r": {
        "name": "Zéro absolu",
        "description": "Nunu et Willump créent un puissant blizzard dans une zone, ce qui ralentit les ennemis et inflige d'importants dégâts à la fin du sort.",
        "icon": "NunuR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2018-08-28",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/en/featured/champion-reveal-nunu-willump",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2018-08-28",
      "source": {
        "url": "https://na.leagueoflegends.com/en/featured/champion-reveal-nunu-willump",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Nunu et Willump | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=i6edi3A-3ak",
        "published": "2018-08-27",
        "duration": 312
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Nunu & Willump Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=udTIlmIa-R4",
        "published": "2018-08-27",
        "duration": 312
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Nunu Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=CNlzJWoKKZI",
        "published": "2025-12-04",
        "duration": 180
      }
    ],
    "releaseDate": "2009-02-21"
  },
  {
    "id": "olaf",
    "key": "0002",
    "ddid": "Olaf",
    "name": "Olaf",
    "title": "Berzerker",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 50.48,
        "pr": 3.32,
        "ban": 3.6
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 9,
      "magic": 3
    },
    "class": "Combattant / Tank",
    "strengths": [],
    "counters": [
      "Olaf devient de plus en plus dangereux au fur et à mesure que ses PV chutent. Conservez vos entraves pour l'achever.",
      "Empêcher Olaf de récupérer sa hache permet de limiter sa capacité à vous harceler sur une voie.",
      "Pendant Ragnarok, les défenses d'Olaf sont amoindries mais il devient insensible aux entraves. Si vous ne pouvez pas fuir Olaf pendant Ragnarok, concentrez vos attaques sur lui avec vos alliés."
    ],
    "abilities": {
      "passive": {
        "name": "Rage du berzerker",
        "description": "Olaf gagne de la vitesse d'attaque et du vol de vie selon ses PV manquants.",
        "icon": "Olaf_Passive.png"
      },
      "q": {
        "name": "Déchireuse",
        "description": "Olaf lance sa hache à l'endroit ciblé, infligeant des dégâts aux ennemis traversés et réduisant leur armure et leur vitesse de déplacement. Si Olaf ramasse la hache, le délai de récupération de cette compétence est réduit.",
        "icon": "OlafAxeThrowCast.png"
      },
      "w": {
        "name": "Force décuplée",
        "description": "Olaf augmente sa vitesse d'attaque et gagne un bouclier.",
        "icon": "OlafFrenziedStrikes.png"
      },
      "e": {
        "name": "Frappe sauvage",
        "description": "Olaf attaque avec tant de force qu'il inflige des dégâts physiques bruts non seulement à sa cible, mais aussi à lui-même. Il récupère le coût en PV s'il tue sa cible.",
        "icon": "OlafRecklessStrike.png"
      },
      "r": {
        "name": "Ragnarok",
        "description": "Olaf gagne passivement de l'armure et de la résistance magique. Il peut activer cette compétence pour devenir immunisé contre les entraves aussi longtemps qu'il attaque.",
        "icon": "OlafRagnarok.png"
      }
    },
    "sourceNotes": [
      {
        "field": "strengths",
        "note": "Conseil officiel « Olaf peut combiner Rage du berzerker, Frappes vicieuses et Ragnarok quand il n'a presque plus de PV pour devenir terriblement puissant. » / « L'amélioration des soins par Frappes vicieuses concerne votre Vol de vie et les soins venant de vos alliés. » — nomme « Frappes vicieuses », absent du kit actuel (noms et descriptions des sorts, Data Dragon 16.17.1) et des objets actuels (item.json) : conseil non affiché.",
        "url": "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
        "retrieved": "2026-09-08"
      }
    ],
    "reworkHistory": [
      {
        "type": "Gameplay Update",
        "date": "2022-05-11",
        "kitAffecting": true,
        "source": {
          "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-12-9-notes/#patch-champions",
          "label": null
        }
      },
      {
        "type": "Visual (VFX) Update",
        "date": "2019-02-21",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://boards.na.leagueoflegends.com/en/c/developer-corner/6r5PBr2Y-visual-effect-updates-kennen-olaf-wukong-and-riven",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-10-23",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-418-notes",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2013-10-01",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-312-notes-0#patch-olaf",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2022-05-11",
      "source": {
        "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-12-9-notes/#patch-champions",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Olaf: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=YuC3ZUY88d8",
        "published": "2010-06-07",
        "duration": 340
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Olaf Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=EK2ElT-KJoA",
        "published": "2024-07-16",
        "duration": 180
      }
    ],
    "releaseDate": "2010-06-09"
  },
  {
    "id": "orianna",
    "key": "0061",
    "ddid": "Orianna",
    "name": "Orianna",
    "title": "Demoiselle mécanique",
    "roles": {
      "mid": {
        "tier": "C",
        "wr": 46.75,
        "pr": 3.04,
        "ban": 0.4
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 4,
      "magic": 9
    },
    "class": "Mage / Soutien",
    "strengths": [
      "Ordre : Protection peut être lancé sur vous-même pour vite faire revenir la sphère vers vous. Combinez cela avec Ordre : Attaque pour harceler rapidement l'ennemi.",
      "Ordre : Dissonance est idéal pour fuir si Orianna a la sphère avec elle. Le bonus de vitesse et l'obstacle ralentissant peuvent être très efficaces.",
      "Ordre : Onde de choc peut vous permettre de repousser les ennemis ou de les attirer vers vous, selon la position de la sphère."
    ],
    "counters": [
      "Orianna ne peut agir que sur la zone dans laquelle se trouve sa sphère. Utilisez cette information à votre avantage.",
      "Attention à la sphère quand elle retourne auprès d'Orianna. Cela peut provoquer des situations inattendues."
    ],
    "abilities": {
      "passive": {
        "name": "Remontoir",
        "description": "Les attaques d'Orianna infligent des dégâts magiques supplémentaires. Plus Orianna attaque la même cible, plus les dégâts sont importants.",
        "icon": "OriannaPassive.png"
      },
      "q": {
        "name": "Ordre : Attaque",
        "description": "Orianna ordonne à sa sphère de voler vers une zone cible, infligeant des dégâts magiques aux cibles sur son passage (les dégâts diminuent à chaque cible supplémentaire). La sphère reste ensuite dans la zone cible.",
        "icon": "OrianaIzunaCommand.png"
      },
      "w": {
        "name": "Ordre : Dissonance",
        "description": "Orianna ordonne à sa sphère d'émettre une impulsion énergétique, infligeant des dégâts magiques autour de la sphère. Cela crée une zone qui accélère les alliés et ralentit les ennemis.",
        "icon": "OrianaDissonanceCommand.png"
      },
      "e": {
        "name": "Ordre : Protection",
        "description": "Orianna ordonne à sa sphère d'aller se fixer sur un champion allié pour lui octroyer un bouclier, infligeant des dégâts magiques aux ennemis sur son passage. La sphère augmente aussi l'armure et la résistance magique du champion sur lequel elle est fixée.",
        "icon": "OrianaRedactCommand.png"
      },
      "r": {
        "name": "Ordre : Onde de choc",
        "description": "Orianna ordonne à sa sphère d'émettre une onde de choc, infligeant des dégâts magiques et projetant les ennemis proches vers la sphère après un bref délai.",
        "icon": "OrianaDetonateCommand.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2022-04-13",
        "kitAffecting": false,
        "source": {
          "url": "https://www.reddit.com/r/LeaguePBE/comments/tsipdb/orianna_vfx_update/",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-09-25",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://oce.leagueoflegends.com/en/news/game-updates/patch/patch-417-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Orianna: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=EUpTRoSQEX4",
        "published": "2011-06-01",
        "duration": 377
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Orianna Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=QXaf8FP2E6w",
        "published": "2026-08-06",
        "duration": 180
      }
    ],
    "releaseDate": "2011-06-01"
  },
  {
    "id": "ornn",
    "key": "0516",
    "ddid": "Ornn",
    "name": "Ornn",
    "title": "Dieu de la forge volcanique",
    "roles": {
      "top": {
        "tier": "S",
        "wr": 51.65,
        "pr": 3.33,
        "ban": 0.46
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 5,
      "magic": 3
    },
    "class": "Tank",
    "strengths": [
      "Apprendre les recettes des objets peut vous aider à vite sélectionner les bonnes améliorations sur votre voie.",
      "Fracture magmatique peut servir à créer des zones à risques pour les ennemis.",
      "L'ordre de vos compétences est important ! Essayez d'optimiser l'utilisation de Fragilité."
    ],
    "counters": [
      "Essayez de ne pas rester près des murs. Ornn est beaucoup moins fort s'il ne peut pas vous étourdir.",
      "Attaquez Ornn pour l'empêcher de créer des objets sur la voie."
    ],
    "abilities": {
      "passive": {
        "name": "Forgeron ambulant",
        "description": "Ornn augmente tous ses bonus d'armure et de résistance magique.<br><br>Ornn peut dépenser des PO pour forger des objets non consommables n'importe où sur la carte.<br><br>De plus, il peut créer des chefs-d'œuvre pour ses alliés ou lui-même.",
        "icon": "OrnnP.png"
      },
      "q": {
        "name": "Fracture magmatique",
        "description": "Ornn frappe le sol, créant une fissure qui blesse et ralentit les ennemis touchés. Après un court délai, une colonne de lave se forme au bout de la fissure.",
        "icon": "OrnnQ.png"
      },
      "w": {
        "name": "Fournaise",
        "description": "Ornn avance en crachant des flammes. Les ennemis touchés par la dernière flamme deviennent fragiles.",
        "icon": "OrnnW.png"
      },
      "e": {
        "name": "Ruée ardente",
        "description": "Ornn fonce dans une direction en infligeant des dégâts aux ennemis qu'il traverse. Si Ornn percute un terrain pendant la ruée, l'impact crée une onde de choc autour de lui qui blesse et projette en l'air les ennemis.",
        "icon": "OrnnE.png"
      },
      "r": {
        "name": "Appel du dieu de la forge",
        "description": "Ornn invoque un énorme élémentaire à l'endroit ciblé. Cet élémentaire se déplace ensuite vers Ornn, de plus en plus vite. Les ennemis écrasés par l'élémentaire subissent des dégâts, sont ralentis et deviennent fragiles. Ornn peut relancer cette compétence pour se ruer vers l'élémentaire, le réorientant selon la direction de la collision. L'élémentaire redirigé projette en l'air les ennemis qu'il touche, en infligeant les mêmes dégâts qu'avant et en appliquant de nouveau l'effet Fragilité.",
        "icon": "OrnnR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Ornn | Gameplay – League of Legends",
        "url": "https://www.youtube.com/watch?v=mjh5pHRreFo",
        "published": "2017-08-22",
        "duration": 342
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Ornn Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=WaJbuSNlVMU",
        "published": "2017-08-22",
        "duration": 338
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Ornn Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=hj0f0UpxxD4",
        "published": "2024-12-24",
        "duration": 180
      }
    ],
    "releaseDate": "2017-08-23"
  },
  {
    "id": "pantheon",
    "key": "0080",
    "ddid": "Pantheon",
    "name": "Pantheon",
    "title": "Lance éternelle",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 50.33,
        "pr": 2.84,
        "ban": 2.41
      },
      "mid": {
        "tier": "A",
        "wr": 51.37,
        "pr": 0.78,
        "ban": 2.34
      },
      "sup": {
        "tier": "B",
        "wr": 48.25,
        "pr": 3.66,
        "ban": 2.42
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 9,
      "magic": 3
    },
    "class": "Combattant / Assassin",
    "strengths": [
      "Ardeur mortelle s'active après 5 sorts ou attaques de base. Organisez vos combats de manière à l'activer plus d'une fois.",
      "Affaiblissez votre ennemi avec des Lances astrales avant de vous ruer sur lui.",
      "Si un ennemi s'éloigne trop de votre Égide impénétrable, réactivez le sort pour donner immédiatement votre coup de bouclier."
    ],
    "counters": [
      "L'Égide impénétrable de Pantheon le rend invulnérable aux dégâts auxquels il fait face. Contournez-le ou patientez.",
      "Soyez prudent s'il vous reste peu de PV et si Pantheon n'est pas loin : son jet de Lance astrale peut vous exécuter.",
      "Météore laisse un peu de temps aux ennemis pour réagir avant l'arrivée de Pantheon. Profitez-en pour vous écarter de la zone d'impact, ou pour vous organiser avec votre équipe afin de l'accueillir comme il se doit."
    ],
    "abilities": {
      "passive": {
        "name": "Ardeur mortelle",
        "description": "Après un certain nombre de compétences ou d'attaques, la prochaine compétence de Pantheon est renforcée.",
        "icon": "Pantheon_Passive.png"
      },
      "q": {
        "name": "Lance astrale",
        "description": "Pantheon donne un coup de lance ou jette sa lance dans la direction choisie.",
        "icon": "PantheonQ.png"
      },
      "w": {
        "name": "Assaut martial",
        "description": "Pantheon se rue sur une cible, l'étourdissant et lui infligeant des dégâts.",
        "icon": "PantheonW.png"
      },
      "e": {
        "name": "Égide impénétrable",
        "description": "Pantheon lève son bouclier, devenant invulnérable aux attaques auxquelles il fait face, et donne des coups de lance en succession rapide.",
        "icon": "PantheonE.png"
      },
      "r": {
        "name": "Météore",
        "description": "Pantheon rassemble ses forces pour sauter dans les airs, puis il atterrit tel un météore à l'endroit choisi.",
        "icon": "PantheonR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2019-08-16",
        "kitAffecting": true,
        "source": {
          "url": "https://nexus.leagueoflegends.com/en-us/2019/04/champion-roadmap-april-2019/",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2015-03-25",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/game-updates/patch/patch-56-notes/",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2019-08-16",
      "source": {
        "url": "https://nexus.leagueoflegends.com/en-us/2019/04/champion-roadmap-april-2019/",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Pantheon: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=h2yjpxzTNvs",
        "published": "2010-04-07",
        "duration": 404
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Pantheon Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=FShvQclQ4gI",
        "published": "2026-05-19",
        "duration": 180
      }
    ],
    "releaseDate": "2010-02-02"
  },
  {
    "id": "poppy",
    "key": "0078",
    "ddid": "Poppy",
    "name": "Poppy",
    "title": "Gardienne du marteau",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 49.83,
        "pr": 0.98,
        "ban": 4.74
      },
      "jgl": {
        "tier": "A",
        "wr": 50.03,
        "pr": 0.51,
        "ban": 4.62
      },
      "sup": {
        "tier": "B",
        "wr": 50.74,
        "pr": 2.06,
        "ban": 4.79
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 6,
      "magic": 2
    },
    "class": "Tank / Combattant",
    "strengths": [
      "Ambassadrice de fer a tendance à atterrir près des murs, alors essayez d'en profiter avec Charge héroïque.",
      "Verdict de la gardienne peut être relâché immédiatement pour projeter l'ennemi en l'air. Tirez-en profit lors des duels."
    ],
    "counters": [
      "Avec Présence immuable, Poppy peut arrêter les ennemis proches qui effectuent des charges.",
      "Quand Poppy commence à faire tourner son marteau, c'est qu'elle prépare Verdict de la gardienne.",
      "Vous pouvez marcher sur l'écu de Poppy pour l'empêcher de le ramasser."
    ],
    "abilities": {
      "passive": {
        "name": "Ambassadrice de fer",
        "description": "Poppy lance son écu et le fait rebondir sur sa cible. Poppy peut le ramasser pour obtenir un bouclier temporaire.",
        "icon": "Poppy_Passive.png"
      },
      "q": {
        "name": "Commotion",
        "description": "Poppy balance son marteau, infligeant des dégâts et créant une zone qui ralentira les ennemis et explosera après un délai.",
        "icon": "PoppyQ.png"
      },
      "w": {
        "name": "Présence immuable",
        "description": "Poppy obtient passivement de l'armure et de la résistance magique. Ce bonus augmente quand il lui reste peu de PV. Poppy peut activer Présence immuable pour augmenter sa vitesse de déplacement et arrêter les ruées ennemies autour d'elle. Si elle arrête une ruée, l'ennemi est ralenti et inerte.",
        "icon": "PoppyW.png"
      },
      "e": {
        "name": "Charge héroïque",
        "description": "Poppy charge la cible et la repousse. Si la cible est repoussée contre un mur, elle est étourdie.",
        "icon": "PoppyE.png"
      },
      "r": {
        "name": "Verdict de la gardienne",
        "description": "Poppy canalise un coup de marteau qui projette les ennemis très loin.",
        "icon": "PoppyR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2015-12-10",
        "kitAffecting": true,
        "source": {
          "url": "http://na.leagueoflegends.com/en/page/champion-update-poppy-keeper-hammer",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2015-04-08",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-58-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2015-12-10",
      "source": {
        "url": "http://na.leagueoflegends.com/en/page/champion-update-poppy-keeper-hammer",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Poppy, Gardienne du marteau",
        "url": "https://www.youtube.com/watch?v=5n3ae7QtVYw",
        "published": "2015-12-07",
        "duration": 413
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Poppy: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=Oe-NJKTgz7c",
        "published": "2015-12-07",
        "duration": 413
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Poppy Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=90S_p7k4whs",
        "published": "2025-12-18",
        "duration": 180
      }
    ],
    "releaseDate": "2010-01-13"
  },
  {
    "id": "pyke",
    "key": "0555",
    "ddid": "Pyke",
    "name": "Pyke",
    "title": "Éventreur des abysses",
    "roles": {
      "sup": {
        "tier": "B",
        "wr": 49.02,
        "pr": 6.38,
        "ban": 24.99
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 9,
      "magic": 1
    },
    "class": "Soutien / Assassin",
    "strengths": [
      "Pyke est très fragile, alors n'hésitez pas à vous replier temporairement. Vous pouvez régénérer beaucoup de PV avec Don des noyés quand les ennemis ne vous voient pas.",
      "L'attaque maintenue de Harponnage attire toujours l'ennemi touché sur la même distance. Utilisez-la à bout portant pour projeter votre cible derrière vous.",
      "L'attaque non maintenue de Harponnage est beaucoup plus rapide et inflige des dégâts supplémentaires.",
      "Un bon nombre de vos sorts offensifs vous permettent aussi de fuir. Prévoyez toujours un moyen de vous éloigner d'un combat."
    ],
    "counters": [
      "Pyke régénère une grosse partie des dégâts infligés par les champions ennemis, mais seulement quand vous ne le voyez pas !",
      "Quand Pyke se cache près de vous avec Plongée spectrale, des requins apparaissent sous vos pieds.",
      "Évitez de rester près de vos alliés qui ont peu de PV. Si Pyke les achève avec Exécution abyssale, vous risquez d'être le prochain sur sa liste."
    ],
    "abilities": {
      "passive": {
        "name": "Don des noyés",
        "description": "Quand Pyke n'est pas vu par les ennemis, il régénère les dégâts que les champions lui ont récemment infligés. Par ailleurs, Pyke ne peut pas augmenter ses PV max ; tous ses PV supplémentaires sont convertis en dégâts d'attaque.",
        "icon": "PykePassive.png"
      },
      "q": {
        "name": "Harponnage",
        "description": "Pyke poignarde un ennemi devant lui ou attire un ennemi vers lui.",
        "icon": "PykeQ.png"
      },
      "w": {
        "name": "Plongée spectrale",
        "description": "Pyke se camoufle et obtient un important bonus en vitesse de déplacement qui diminue sur la durée.",
        "icon": "PykeW.png"
      },
      "e": {
        "name": "Ressac fantôme",
        "description": "Pyke fonce dans une direction et laisse derrière lui un fantôme de noyé qui reviendra vers lui en étourdissant les champions ennemis sur son passage.",
        "icon": "PykeE.png"
      },
      "r": {
        "name": "Exécution abyssale",
        "description": "Pyke fonce sur les ennemis qui ont peu de PV et les exécute, ce qui lui permet de relancer ce sort et d'octroyer des PO supplémentaires à un allié qui l'assiste.",
        "icon": "PykeR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Pyke | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=fGwLSC7mJxw",
        "published": "2018-05-30",
        "duration": 284
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Pyke Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=g2mara8nFVE",
        "published": "2018-05-30",
        "duration": 284
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Pyke Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=Mg4UoAXrEUE",
        "published": "2026-06-10",
        "duration": 180
      }
    ],
    "releaseDate": "2018-05-31"
  },
  {
    "id": "qiyana",
    "key": "0246",
    "ddid": "Qiyana",
    "name": "Qiyana",
    "title": "Impératrice des éléments",
    "roles": {
      "jgl": {
        "tier": "C",
        "wr": 48.71,
        "pr": 4.84,
        "ban": 6.51
      },
      "mid": {
        "tier": "A",
        "wr": 50.24,
        "pr": 3.07,
        "ban": 6.51
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 0,
      "magic": 4
    },
    "class": "Assassin",
    "strengths": [],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "Privilège royal",
        "description": "La première compétence ou attaque de base de Qiyana contre un ennemi inflige des dégâts supplémentaires.",
        "icon": "Qiyana_Passive.png"
      },
      "q": {
        "name": "Courroux élémentaire/Lame d'Ixtal",
        "description": "Qiyana frappe avec son arme, infligeant des dégâts et un effet supplémentaire selon son élément.",
        "icon": "QiyanaQ.png"
      },
      "w": {
        "name": "Terraforce",
        "description": "Qiyana se rue vers la zone ciblée et enchante son arme avec un élément. Ses attaques et ses compétences infligent des dégâts supplémentaires quand son arme est enchantée.",
        "icon": "QiyanaW.png"
      },
      "e": {
        "name": "Audace",
        "description": "Qiyana se rue sur un ennemi et lui inflige des dégâts.",
        "icon": "QiyanaE.png"
      },
      "r": {
        "name": "Tour de force suprême",
        "description": "Qiyana envoie une onde de choc qui provoque une explosion en touchant un élément, ce qui étourdit et blesse les ennemis proches.",
        "icon": "QiyanaR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Qiyana | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=6WzADGSfCug",
        "published": "2019-06-28",
        "duration": 136
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Qiyana Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=3ECXeoLlR3I",
        "published": "2019-06-28",
        "duration": 136
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Qiyana Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=6Bsix_tMdmk",
        "published": "2025-01-29",
        "duration": 180
      }
    ],
    "releaseDate": "2019-06-28"
  },
  {
    "id": "quinn",
    "key": "0133",
    "ddid": "Quinn",
    "name": "Quinn",
    "title": "Ailes de Demacia",
    "roles": {
      "top": {
        "tier": "S",
        "wr": 52.09,
        "pr": 0.87,
        "ban": 0.94
      },
      "jgl": {
        "tier": "A",
        "wr": 50.29,
        "pr": 1.35,
        "ban": 0.94
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 9,
      "magic": 2
    },
    "class": "Tireur / Assassin",
    "strengths": [
      "Attaquer une cible",
      "vulnérable",
      "marquée par Valor mettra Busard en récupération. Frappez vite les marques de Busard pour en générer d'autres plus rapidement.",
      "Salto est une puissante compétence, mais elle doit être utilisée avec prudence, car les ennemis peuvent attaquer Quinn quand elle les frappe. Salto peut vous faire franchir un mur si vous êtes dos à ce mur.",
      "Utilisez En territoire ennemi pour vite parcourir de très longues distances, pour aller farmer des sbires éloignés ou pour rattraper des cibles blessées."
    ],
    "counters": [
      "Après avoir été marqué, éloignez-vous de Quinn pour qu'elle ne puisse pas en profiter.",
      "Surveillez les déplacements de Quinn. En territoire ennemi peut permettre à Valor de traverser la carte très vite pour venir vous attaquer par surprise.",
      "Quand Quinn utilise En territoire ennemi, blessez-la pour lui faire perdre temporairement son bonus en vitesse de déplacement."
    ],
    "abilities": {
      "passive": {
        "name": "Busard",
        "description": "Valor, l'aigle demacien de Quinn, marque périodiquement des ennemis avec <keywordMajor>Busard</keywordMajor>. La première attaque de base de Quinn contre une cible marquée par le <keywordMajor>Busard</keywordMajor> inflige des dégâts physiques bonus.",
        "icon": "Quinn_Passive.png"
      },
      "q": {
        "name": "Assaut aveuglant",
        "description": "Quinn fait appel à Valor pour marquer un ennemi et limiter sa vision avant de blesser tous les ennemis proches.",
        "icon": "QuinnQ.png"
      },
      "w": {
        "name": "Œil d'aigle",
        "description": "Confère passivement à Quinn de la vitesse d'attaque et de la vitesse de déplacement après qu'elle a attaqué une cible marquée par <keywordMajor>Busard</keywordMajor>. Activez pour que Valor révèle une grande zone à proximité.",
        "icon": "QuinnW.png"
      },
      "e": {
        "name": "Salto",
        "description": "Quinn charge un ennemi, lui infligeant des dégâts physiques et réduisant sa vitesse de déplacement. Après avoir atteint sa cible, elle prend appui sur celle-ci, l'interrompt brièvement et se projette en arrière sur une distance équivalente à sa portée d'attaque max.",
        "icon": "QuinnE.png"
      },
      "r": {
        "name": "En territoire ennemi",
        "description": "Quinn et Valor s'unissent pour voler à grande vitesse.  Mettre fin à la compétence lance Volée fatale, qui inflige des dégâts aux ennemis proches et marque les champions avec Busard.",
        "icon": "QuinnR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2024-09-25",
        "kitAffecting": false,
        "source": {
          "url": "https://www.youtube.com/watch?v=a3pRLIk1Oo8",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2015-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
          "label": "Marksmen"
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2015-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2015-11-10",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
        "label": "Marksmen"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Quinn and Valor: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=O9eVLrcih9s",
        "published": "2013-03-01",
        "duration": 333
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Quinn Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=rXSmA6bo4X4",
        "published": "2025-08-24",
        "duration": 180
      }
    ],
    "releaseDate": "2013-03-01"
  },
  {
    "id": "rakan",
    "key": "0497",
    "ddid": "Rakan",
    "name": "Rakan",
    "title": "Charmeur",
    "roles": {
      "sup": {
        "tier": "A",
        "wr": 50.92,
        "pr": 3.46,
        "ban": 0.32
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 2,
      "magic": 8
    },
    "class": "Soutien",
    "strengths": [
      "Rakan a besoin d'alliés proches pour profiter au maximum de ses capacités.",
      "La vitesse des ruées de Rakan augmente avec sa vitesse de déplacement. Profitez de ce surcroît de vitesse pour surprendre vos ennemis !",
      "Le danger est amusant si on le veut bien."
    ],
    "counters": [
      "Les compétences de déplacement de Rakan annoncent leur destination. Essayez de tirer parti de ces informations.",
      "Les champions pouvant rapidement appliquer des contrôles de foule excellent contre Rakan.",
      "Surprendre Rakan quand il est loin de ses alliés entrave grandement sa mobilité. Attaquez-vous à lui quand il est isolé."
    ],
    "abilities": {
      "passive": {
        "name": "Plumes enchantées",
        "description": "Rakan gagne périodiquement un bouclier.",
        "icon": "Rakan_P.png"
      },
      "q": {
        "name": "Rémige rayonnante",
        "description": "Rakan tire une plume magique qui inflige des dégâts magiques. Frapper un champion ou un monstre épique permet à Rakan de soigner ses alliés.",
        "icon": "RakanQ.png"
      },
      "w": {
        "name": "Entrée triomphale",
        "description": "Rakan fonce vers l'endroit ciblé, projetant en l'air les ennemis proches de son point d'arrivée.",
        "icon": "RakanW.png"
      },
      "e": {
        "name": "Valse guerrière",
        "description": "Rakan s'envole vers un champion allié en lui octroyant un bouclier. La compétence peut être relancée sans coût pendant un court instant.",
        "icon": "RakanE.png"
      },
      "r": {
        "name": "Danse ultime",
        "description": "Rakan augmente sa vitesse de déplacement, charme les ennemis touchés et leur inflige des dégâts magiques.",
        "icon": "RakanR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Rakan | Gameplay – League of Legends",
        "url": "https://www.youtube.com/watch?v=enEAGJA1WxE",
        "published": "2017-04-17",
        "duration": 338
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Rakan Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=HYWNOHM1fSk",
        "published": "2017-04-17",
        "duration": 334
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Rakan Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=ir6t-LOkPU0",
        "published": "2026-04-19",
        "duration": 180
      }
    ],
    "releaseDate": "2017-04-19"
  },
  {
    "id": "rammus",
    "key": "0033",
    "ddid": "Rammus",
    "name": "Rammus",
    "title": "Tatou blindé",
    "roles": {
      "jgl": {
        "tier": "S",
        "wr": 52.75,
        "pr": 2.03,
        "ban": 3.68
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 4,
      "magic": 5
    },
    "class": "Tank",
    "strengths": [
      "Démolisseur peut être efficacement utilisé pour fuir.",
      "Provoquer un champion à proximité d'une tour peut forcer la tour à l'attaquer."
    ],
    "counters": [
      "Faites attention quand Boule défensive est inactive. Dans ce cas, ses statistiques sont un peu inférieures à celles d'un tank normal.",
      "Rammus accumule souvent les points d'armure, ce qui le rend vulnérable aux dégâts des invocateurs quand il ne dispose pas de Boule défensive."
    ],
    "abilities": {
      "passive": {
        "name": "Carapace cloutée",
        "description": "Rammus gagne des dégâts d'attaque bonus en fonction de son armure et de sa résistance magique.",
        "icon": "Armordillo_ScavengeArmor.png"
      },
      "q": {
        "name": "Démolisseur",
        "description": "Rammus fonce comme une balle vers les ennemis, infligeant des dégâts et ralentissant les cibles touchées.",
        "icon": "PowerBall.png"
      },
      "w": {
        "name": "Boule défensive",
        "description": "Rammus prend une posture défensive. Son armure et sa résistance magique sont grandement augmentées et il renvoie des dégâts aux ennemis qui l'attaquent.",
        "icon": "DefensiveBallCurl.png"
      },
      "e": {
        "name": "Provocation frénétique",
        "description": "Rammus provoque un champion ennemi ou un monstre, l'obligeant à s'acharner contre lui.",
        "icon": "PuncturingTaunt.png"
      },
      "r": {
        "name": "Frappe ascendante",
        "description": "Rammus bondit dans les airs et retombe violemment à l'endroit ciblé, ce qui inflige des dégâts magiques et ralentit les ennemis. Si Frappe ascendante est lancée alors que Démolisseur est actif, les ennemis près du centre de la zone sont également projetés dans les airs.",
        "icon": "Tremors2.png"
      }
    },
    "sourceNotes": [
      {
        "field": "strengths",
        "note": "Conseil officiel « Secousses et Boule défensive peuvent servir à détruire les tours. Si vous êtes pris dans un combat de groupe, il peut être préférable de prendre du recul pour attaquer les bâtiments. » — nomme « Secousses », absent du kit actuel (noms et descriptions des sorts, Data Dragon 16.17.1) et des objets actuels (item.json) : conseil non affiché.",
        "url": "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
        "retrieved": "2026-09-08"
      }
    ],
    "reworkHistory": [
      {
        "type": "Visual (VFX) and Gameplay Update",
        "date": "2021-04-14",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/en-us/news/dev/quick-gameplay-thoughts-jan-15/",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2013-10-01",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://www.surrenderat20.net/2013/10/rammus-texture-update-in-313.html",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual (VFX) and Gameplay Update",
      "date": "2021-04-14",
      "source": {
        "url": "https://na.leagueoflegends.com/en-us/news/dev/quick-gameplay-thoughts-jan-15/",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Rammus: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=aeU2b9s-ZVw",
        "published": "2011-12-20",
        "duration": 432
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Rammus Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=7YEEYh-frng",
        "published": "2026-01-01",
        "duration": 180
      }
    ],
    "releaseDate": "2009-07-10"
  },
  {
    "id": "reksai",
    "key": "0421",
    "ddid": "RekSai",
    "name": "Rek'Sai",
    "title": "Traqueuse du Néant",
    "roles": {
      "jgl": {
        "tier": "S",
        "wr": 51.92,
        "pr": 1.49,
        "ban": 0.68
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 2
    },
    "class": "Combattant / Tank",
    "strengths": [
      "Garder des tunnels un peu partout sur la carte vous permettra d'avoir le choix au moment de lancer Rush du Néant."
    ],
    "counters": [
      "Si vous voyez un tunnel de Rek'Sai, restez brièvement sur l'une de ses entrées pour le détruire.",
      "Plus Rek'Sai a de Fureur, plus sa Morsure féroce fait de dégâts. Faites preuve de prudence quand sa jauge de Fureur est pleine.",
      "Quand Rek'Sai est proche, elle peut voir votre position et celle de vos alliés, mais seulement si vous vous déplacez."
    ],
    "abilities": {
      "passive": {
        "name": "Fureur des Xer'Sai",
        "description": "Rek'Sai génère de la Fureur avec ses attaques et quand elle frappe un ennemi avec une compétence de base. Quand elle est enfouie, elle consomme sa Fureur pour récupérer ses PV.",
        "icon": "RekSai_Passive.png"
      },
      "q": {
        "name": "Courroux de la reine/Sondeur explosif",
        "description": "Les 3 prochaines attaques de base de Rek'Sai infligent des dégâts physiques bonus aux ennemis proches.<br><br>Enfouie, Rek'Sai tire un projectile chargé en énergie du Néant qui inflige des dégâts aux ennemis touchés, en plus de les révéler.",
        "icon": "RekSaiQ.png"
      },
      "w": {
        "name": "Enfouissement/Jaillissement",
        "description": "Rek'Sai plonge sous terre, gagnant de nouvelles compétences et augmentant sa vitesse de déplacement. La portée de sa vision est réduite et elle ne peut plus lancer d'attaque de base.<br><br>Enfouie, Rek'Sai peut utiliser Jaillissement pour projeter en l'air et blesser les ennemis proches.",
        "icon": "RekSaiW.png"
      },
      "e": {
        "name": "Morsure féroce/Tunnel",
        "description": "Rek'Sai mord sa cible, infligeant des dégâts physiques, ou des dégâts bruts bonus si sa jauge de Fureur est pleine.<br><br>Enfouie, Rek'Sai crée un tunnel durable et réutilisable. Les ennemis peuvent le détruire en se tenant sur l'une des entrées.",
        "icon": "RekSaiE.png"
      },
      "r": {
        "name": "Rush du Néant",
        "description": "Rek'Sai marque passivement ses cibles en leur infligeant des dégâts. Elle peut activer cette compétence pour devenir brièvement impossible à cibler et bondir sur une cible marquée, infligeant d'importants dégâts selon les PV max de cette cible.",
        "icon": "RekSaiR.png"
      }
    },
    "sourceNotes": [
      {
        "field": "strengths",
        "note": "Conseil officiel « Lancez Enfouissement avant de parcourir la carte pour profiter de son gain de vitesse de déplacement et de la sécurité offerte par Sens tellurique. » / « Sens tellurique peut vous avertir que des ennemis approchent, ce qui est très utile en territoire ennemi. » — nomme « Sens tellurique », absent du kit actuel (noms et descriptions des sorts, Data Dragon 16.17.1) et des objets actuels (item.json) : conseil non affiché.",
        "url": "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
        "retrieved": "2026-09-08"
      }
    ],
    "reworkHistory": [
      {
        "type": "Gameplay Update",
        "date": "2024-02-22",
        "kitAffecting": true,
        "source": {
          "url": "https://www.youtube.com/watch?v=9ojTE9-loNc&t=614",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2024-02-22",
      "source": {
        "url": "https://www.youtube.com/watch?v=9ojTE9-loNc&t=614",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Rek’Sai",
        "url": "https://www.youtube.com/watch?v=Za2AAAsGocY",
        "published": "2014-12-10",
        "duration": 610
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Rek'Sai: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=bmurGIqiPgg",
        "published": "2014-12-10",
        "duration": 608
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Rek'Sai Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=lpxgmShkce4",
        "published": "2025-09-18",
        "duration": 180
      }
    ],
    "releaseDate": "2014-12-11"
  },
  {
    "id": "rell",
    "key": "0526",
    "ddid": "Rell",
    "name": "Rell",
    "title": "Cavalière de fer",
    "roles": {
      "sup": {
        "tier": "S",
        "wr": 51.77,
        "pr": 3.87,
        "ban": 1.42
      }
    },
    "damageType": "Mixte",
    "dmgRating": {
      "attack": 0,
      "magic": 0
    },
    "class": "Tank / Soutien",
    "strengths": [],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "Mise en pièces",
        "description": "Les attaques et les compétences de Rell infligent des dégâts magiques bonus et volent de l'armure et de la résistance magique à l'impact.",
        "icon": "RellP.png"
      },
      "q": {
        "name": "Frappe dislocatrice",
        "description": "Rell inflige des dégâts magiques aux unités sur une ligne, brisant leurs boucliers et les étourdissant.",
        "icon": "RellQ.png"
      },
      "w": {
        "name": "Ferromancie : Descendre en piqué",
        "description": "À cheval : Rell descend de cheval et s'abat au sol dans son armure, projetant dans les airs les ennemis et gagnant un solide bouclier. À pied, elle gagne de l'armure, de la résistance magique, de la vitesse d'attaque et de la portée d'attaque, mais elle est ralentie.<br><br>À pied : Rell recrée son destrier, gagnant un bref bonus de vitesse et projetant dans les airs le prochain ennemi qu'elle attaque.<br><br>",
        "icon": "RellW_Dismount.png"
      },
      "e": {
        "name": "Joute endiablée",
        "description": "Passive : Rell gagne de la vitesse de déplacement en dehors des combats.<br><br>Active : Rell et un allié gagnent de la vitesse de déplacement croissante. Ce bonus est doublé en direction des ennemis et quand Rell et son allié se dirigent l'un vers l'autre. La prochaine attaque de Rell provoquera une explosion, infligeant des dégâts magiques.<br>",
        "icon": "RellE.png"
      },
      "r": {
        "name": "Tempête magnétique",
        "description": "Rell explose en une fureur magnétique, attirant violemment les ennemis proches. Elle attire ensuite continuellement les ennemis proches pendant un bref instant, leur infligeant des dégâts magiques sur la durée.",
        "icon": "RellR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Gameplay Update",
        "date": "2024-11-20",
        "kitAffecting": true,
        "source": {
          "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-14-23-notes/",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2023-06-01",
        "kitAffecting": true,
        "source": {
          "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-13-11-notes/",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2024-11-20",
      "source": {
        "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-14-23-notes/",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Rell | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=JKcvLZu9tzU",
        "published": "2020-12-10",
        "duration": 281
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Rell Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=7QSaMYFxm84",
        "published": "2020-12-10",
        "duration": 281
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Rell Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=8ye9n-XW-CQ",
        "published": "2026-06-30",
        "duration": 180
      }
    ],
    "releaseDate": "2020-12-10"
  },
  {
    "id": "renata",
    "key": "0888",
    "ddid": "Renata",
    "name": "Renata Glasc",
    "title": "Baronne de la chimie",
    "roles": {
      "sup": {
        "tier": "B",
        "wr": 50.12,
        "pr": 1.42,
        "ban": 0.2
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 2,
      "magic": 9
    },
    "class": "Soutien / Mage",
    "strengths": [],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "Pression",
        "description": "Les attaques de Renata infligent des dégâts supplémentaires et marquent les ennemis. Les alliés de Renata peuvent infliger des dégâts supplémentaires aux ennemis marqués.",
        "icon": "Renata_P.png"
      },
      "q": {
        "name": "Poignée de main",
        "description": "Renata tire un projectile qui immobilise le premier ennemi touché. Elle peut réactiver cette compétence pour lancer cet ennemi dans une direction.",
        "icon": "RenataQ.png"
      },
      "w": {
        "name": "Patronage",
        "description": "Renata renforce un champion allié ; elle retarde sa mort et lui permet même de survivre s'il participe à l'élimination d'un champion.",
        "icon": "RenataW.png"
      },
      "e": {
        "name": "Programme de fidélité",
        "description": "Renata tire deux projectiles techno-chimiques, octroyant un bouclier à ses alliés et infligeant des dégâts ainsi qu'un ralentissement aux ennemis touchés.",
        "icon": "RenataE.png"
      },
      "r": {
        "name": "Prise de contrôle hostile",
        "description": "Renata envoie un nuage de produits chimiques, rendant fous furieux tous les ennemis touchés.",
        "icon": "RenataR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Renata Glasc | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=s-mIkra2wUI",
        "published": "2022-02-17",
        "duration": 267
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Renata Glasc Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=yahJE5tLxHg",
        "published": "2022-02-17",
        "duration": 267
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Renata Glasc Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=KzI_nHNZhiY",
        "published": "2025-11-03",
        "duration": 180
      }
    ],
    "releaseDate": "2022-02-17"
  },
  {
    "id": "renekton",
    "key": "0058",
    "ddid": "Renekton",
    "name": "Renekton",
    "title": "Dévoreur des sables",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 49.73,
        "pr": 5.53,
        "ban": 3.79
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 2
    },
    "class": "Combattant / Tank",
    "strengths": [
      "Tranche et coupe est une excellente attaque de harcèlement. Utilisez Tranche, enchaînez avec une autre compétence, puis lancez Coupe pour retourner vous mettre à l'abri.",
      "Destruction des faibles draine beaucoup de vie lorsque vous l'utilisez au milieu de la mêlée. Profitez-en pour appâter des ennemis qui penseront que vous êtes plus faible que vous ne l'êtes vraiment.",
      "Les réductions des délais de récupération sont particulièrement utiles à Renekton, en lui permettant d'accumuler rapidement de la Fureur et de l'utiliser."
    ],
    "counters": [
      "Surveillez attentivement la jauge de Fureur de Renekton, car elle vous permet de savoir quand il va lancer une attaque dévastatrice.",
      "Empêcher Renekton de combattre et de gagner de la Fureur en le harcelant est un excellent moyen de limiter l'efficacité de ses compétences."
    ],
    "abilities": {
      "passive": {
        "name": "Règne de la colère",
        "description": "Les attaques de Renekton génèrent de la Fureur, et encore plus quand il lui reste peu de PV. Cette Fureur peut renforcer ses compétences en leur conférant des effets supplémentaires.",
        "icon": "Renekton_Passive.png"
      },
      "q": {
        "name": "Destruction des faibles",
        "description": "Renekton lance une attaque circulaire, infligeant des dégâts physiques modérés à tous les ennemis qui l'entourent et se soignant d'un montant égal à une petite portion des dégâts infligés. S'il a plus de 50 pts de Fureur, les dégâts et les soins augmentent.",
        "icon": "RenektonCleave.png"
      },
      "w": {
        "name": "Prédateur impitoyable",
        "description": "Renekton frappe deux fois la cible en infligeant des dégâts physiques modérés et en l'étourdissant pendant 0.75 sec. Si Renekton a plus de 50 pts de Fureur, il frappe la cible trois fois, détruisant instantanément tout bouclier anti-dégâts se trouvant sur elle, lui infligeant de lourds dégâts physiques et l'étourdissant pendant 1.5 sec.",
        "icon": "RenektonPreExecute.png"
      },
      "e": {
        "name": "Tranche et coupe",
        "description": "Renekton charge et inflige des dégâts à toutes les unités sur son chemin. S'il a plus de 50 pts de Fureur, Renekton inflige des dégâts supplémentaires et réduit l'armure des unités touchées.",
        "icon": "RenektonSliceAndDice.png"
      },
      "r": {
        "name": "Dominus",
        "description": "Renekton prend sa Forme de tyran et profite de PV supplémentaires ; il inflige également des dégâts à tous les ennemis qui l'entourent. Tant qu'il est en Forme de tyran, Renekton gagne périodiquement de la Fureur.",
        "icon": "RenektonReignOfTheTyrant.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Sound (SFX) Update",
        "date": "2019-05-01",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://boards.na.leagueoflegends.com/en/c/developer-corner/F4ZuqAZ7-vfx-updates-for-ashe-blitzcrank-caitlyn-and-jax-plus-an-sfx-update-for-renekton",
          "label": null
        }
      },
      {
        "type": "Visual (VFX and SFX) Update",
        "date": "2018-12-05",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://boards.na.leagueoflegends.com/en/c/developer-corner/qIvkQl9a-visual-effects-update-renekton",
          "label": null
        }
      },
      {
        "type": "Visual Update",
        "date": "2014-08-26",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-416-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Renekton: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=IDXEHgsLfeM",
        "published": "2011-01-18",
        "duration": 350
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Renekton Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=oOrmPXoXkiU",
        "published": "2025-08-22",
        "duration": 180
      }
    ],
    "releaseDate": "2011-01-18"
  },
  {
    "id": "rengar",
    "key": "0107",
    "ddid": "Rengar",
    "name": "Rengar",
    "title": "Fier traqueur",
    "roles": {
      "jgl": {
        "tier": "C",
        "wr": 48.35,
        "pr": 3.8,
        "ban": 6.61
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 7,
      "magic": 2
    },
    "class": "Assassin / Combattant",
    "strengths": [
      "Utilisez l'ultime de Rengar pour trouver et assassiner les cibles prioritaires lors des combats d'équipes et des escarmouches.",
      "La force de Rengar vient surtout de l'utilisation judicieuse de ses compétences renforcées.",
      "Passez bien dans les hautes herbes quand vous poursuivez une cible afin de bénéficier de la compétence passive de Rengar."
    ],
    "counters": [
      "Rengar peut renforcer l'une de ses compétences quand sa jauge de ressource est pleine. Affrontez-le quand elle est basse.",
      "La compétence passive de Rengar lui permet de bondir des hautes herbes, alors évitez de le combattre quand il y en a à proximité.",
      "Un indicateur apparaît au-dessus du champion ennemi le plus proche lorsque Rengar est camouflé pendant son ultime."
    ],
    "abilities": {
      "passive": {
        "name": "Prédateur invisible",
        "description": "Quand Rengar est dans les hautes herbes, son attaque de base le fait bondir sur un ennemi.<br><br>Rengar génère de la Férocité chaque fois qu'il lance une compétence. Au maximum de Férocité, sa prochaine compétence est renforcée.<br><br>Tuer des champions ennemis ajoute des trophées au <font color='#BBFFFF'>Collier de dents</font> de Rengar, ce qui augmente ses dégâts d'attaque.",
        "icon": "Rengar_P.png"
      },
      "q": {
        "name": "Esprit sauvage",
        "description": "La prochaine attaque de Rengar poignarde brutalement sa cible pour lui infliger des dégâts bonus.<br><br>Férocité : inflige encore plus de dégâts et augmente la vitesse d'attaque de Rengar.",
        "icon": "RengarQ.png"
      },
      "w": {
        "name": "Rugissement",
        "description": "Rengar émet un rugissement qui inflige des dégâts aux ennemis et lui permet de récupérer des PV équivalents à une partie des dégâts qu'il a subis récemment.<br><br>Férocité : brise également les effets de contrôle de foule.",
        "icon": "RengarW.png"
      },
      "e": {
        "name": "Bolas",
        "description": "Rengar lance des bolas, ralentissant la première cible touchée pendant un court instant.<br><br>Férocité : immobilise la cible.",
        "icon": "RengarE.png"
      },
      "r": {
        "name": "Chasseur-né",
        "description": "Rengar fait appel à tous ses sens de prédateur. Il <font color='#cd90ee'>se camoufle</font> et révèle le champion ennemi le plus proche à une très longue distance. Pendant Chasseur-né, Rengar gagne de la vitesse de déplacement, peut bondir sur l'ennemi traqué sans avoir à être dans les hautes herbes et réduit l'armure de sa cible.",
        "icon": "RengarR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Class-scale Update",
        "date": "2016-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/preseason-2017/assassins",
          "label": "Slayers: Assassins"
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2016-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/game-updates/patch/patch-622-notes",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2014-04-02",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-45-notes#patch-rengar",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2016-11-10",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/preseason-2017/assassins",
        "label": "Slayers: Assassins"
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus de la présaison sur Rengar | Gameplay – League of Legends",
        "url": "https://www.youtube.com/watch?v=NfpGdvlLf1s",
        "published": "2016-11-04",
        "duration": 164
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Rengar: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=gbHGFazlpCA",
        "published": "2012-08-23",
        "duration": 433
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Rengar Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=A7mRTL2fN7M",
        "published": "2025-06-03",
        "duration": 180
      }
    ],
    "releaseDate": "2012-08-21"
  },
  {
    "id": "riven",
    "key": "0092",
    "ddid": "Riven",
    "name": "Riven",
    "title": "Exilée brisée",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 49.62,
        "pr": 2.26,
        "ban": 1.81
      },
      "mid": {
        "tier": "A",
        "wr": 51.25,
        "pr": 0.51,
        "ban": 1.76
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 1
    },
    "class": "Combattant / Assassin",
    "strengths": [
      "La compétence Ailes brisées verrouille le champion sur lequel est votre curseur au moment du lancer. Si vous voulez dépasser votre adversaire, faites en sorte que le curseur se trouve de l'autre côté de celui-ci.",
      "Riven n'est pas capable de se soigner et sa défense est moyenne, alors elle doit compenser avec de puissantes combos. Lancez l'assaut avec Ailes brisées et Décharge de ki, en utilisant Bravoure pour éviter et absorber les contres."
    ],
    "counters": [
      "Riven est très mobile mais sa mobilité repose essentiellement sur ses compétences. L'immobiliser ou la réduire au silence pendant ses combos réduit grandement son efficacité.",
      "Tous les dégâts de Riven sont physiques, alors si une Riven adverse attaque très fort, achetez surtout de l'armure.",
      "Riven est excellente pour attaquer plusieurs attaquants en mêlée en même temps car elle peut quasiment être à un pied d'égalité avec eux en termes de dégâts. N'allez pas l'attaquer à plusieurs tant qu'elle n'a pas utilisé tout son combo."
    ],
    "abilities": {
      "passive": {
        "name": "Lame runique",
        "description": "Les compétences de Riven chargent sa lame, ce qui permet à ses attaques de base d'infliger des dégâts supplémentaires en consommant des charges.",
        "icon": "RivenRunicBlades.png"
      },
      "q": {
        "name": "Ailes brisées",
        "description": "Riven se déchaîne et lance une série de coups. Cette compétence peut être réactivée trois fois pendant une courte période et le troisième coup repousse les ennemis proches.",
        "icon": "RivenTriCleave.png"
      },
      "w": {
        "name": "Décharge de ki",
        "description": "Riven lance une décharge de ki, blessant et étourdissant les ennemis proches.",
        "icon": "RivenMartyr.png"
      },
      "e": {
        "name": "Bravoure",
        "description": "Riven avance sur une courte distance et bloque des dégâts.",
        "icon": "RivenFeint.png"
      },
      "r": {
        "name": "Lame de l'exilée",
        "description": "Riven renforce son arme avec de l'énergie, augmentant ses dégâts d'attaque et sa portée. Pendant la durée de cet effet, Riven peut utiliser une fois Taillade du vent, une puissante attaque à distance.",
        "icon": "RivenFengShuiEngine.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2019-02-21",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://boards.na.leagueoflegends.com/en/c/developer-corner/6r5PBr2Y-visual-effect-updates-kennen-olaf-wukong-and-riven",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-11-20",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-420-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Zoé | Gameplay – League of Legends",
        "url": "https://www.youtube.com/watch?v=xpPTSdDejqo",
        "published": "2017-11-20",
        "duration": 313
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Riven: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=V_ERvayBr3M",
        "published": "2011-09-14",
        "duration": 404
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Riven Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=iUNs86pabfM",
        "published": "2025-11-15",
        "duration": 180
      }
    ],
    "releaseDate": "2011-09-14"
  },
  {
    "id": "rumble",
    "key": "0068",
    "ddid": "Rumble",
    "name": "Rumble",
    "title": "Menace mécanisée",
    "roles": {
      "top": {
        "tier": "B",
        "wr": 48.37,
        "pr": 1.64,
        "ban": 0.69
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 3,
      "magic": 8
    },
    "class": "Combattant / Mage",
    "strengths": [
      "Essayez de rester dans la Zone rouge pour maximiser votre efficacité. Vous pouvez vite surchauffer si vous utilisez rapidement vos compétences.",
      "Gardez les cibles à portée de votre Lance-flammes. Ce dernier peut faire de lourds dégâts sur la durée.",
      "Si vous gagnez un combat, vous pouvez utiliser votre ultime pour barrer la fuite de l'ennemi."
    ],
    "counters": [
      "Surveillez la jauge de Vapeur de Rumble. Si vous le voyez surchauffer, foncez lui donner le coup de grâce pendant que ses compétences sont désactivées.",
      "L'ultime de Rumble peut infliger beaucoup de dégâts si vous restez dans la zone d'effet. Quand vous voyez tomber les missiles, sortez de là aussi vite que possible.",
      "Rumble inflige essentiellement des dégâts magiques. Augmentez votre résistance magique pour vous protéger contre lui."
    ],
    "abilities": {
      "passive": {
        "name": "Titan de bric-à-brac",
        "description": "Chaque compétence lancée par Rumble augmente sa Vapeur. Quand Rumble atteint 50% de Vapeur, il entre dans la Zone rouge, ce qui confère des effets bonus à ses compétences de base. Quand il atteint 100% de Vapeur, il entre en Surchauffe, ce qui lui octroie de la vitesse d'attaque bonus et lui permet d'infliger des dégâts supplémentaires avec ses attaques de base, mais l'empêche d'utiliser ses compétences pendant quelques secondes.",
        "icon": "Rumble_JunkyardTitan1.png"
      },
      "q": {
        "name": "Lance-flammes",
        "description": "Rumble enflamme les adversaires devant lui, infligeant des dégâts magiques dans une zone conique pendant 3 sec. Dans la Zone rouge, les dégâts augmentent.",
        "icon": "RumbleFlameThrower.png"
      },
      "w": {
        "name": "Bouclier recyclé",
        "description": "Rumble crée un bouclier qui le protège des dégâts et lui donne un bonus de rapidité. Dans la Zone rouge, les PV du bouclier et le bonus de vitesse sont augmentés.",
        "icon": "RumbleShield.png"
      },
      "e": {
        "name": "Harpon électrique",
        "description": "Rumble tire un harpon qui électrocute sa cible, lui infligeant des dégâts magiques et réduisant sa vitesse de déplacement et sa résistance magique. Rumble peut porter 2 harpons en même temps. Dans la Zone rouge, les dégâts et le pourcentage de ralentissement sont augmentés.",
        "icon": "RumbleGrenade.png"
      },
      "r": {
        "name": "Éradication",
        "description": "Rumble tire une bordée de roquettes, créant un mur de flammes qui blesse et ralentit les ennemis.",
        "icon": "RumbleCarpetBomb.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (Texture) Update",
        "date": "2015-03-25",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/game-updates/patch/patch-56-notes/",
          "label": null
        }
      }
    ],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Rumble: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=Dghwqj_Qddc",
        "published": "2011-04-26",
        "duration": 417
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Rumble Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=nZGcoXPpRnU",
        "published": "2025-09-24",
        "duration": 180
      }
    ],
    "releaseDate": "2011-04-26"
  },
  {
    "id": "ryze",
    "key": "0013",
    "ddid": "Ryze",
    "name": "Ryze",
    "title": "Mage runique",
    "roles": {
      "mid": {
        "tier": "C",
        "wr": 46.78,
        "pr": 3.13,
        "ban": 0.5
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 2,
      "magic": 10
    },
    "class": "Mage",
    "strengths": [
      "Utilisez la propriété passive de Court-circuit pour optimiser vos dégâts ou votre vitesse.",
      "Le court délai de récupération de Flux envoûtant permet d'appliquer Flux sur de nombreux ennemis.",
      "Pendant l'activation de Portail transdimensionnel, Ryze peut se déplacer et lancer d'autres sorts sans annuler le portail."
    ],
    "counters": [
      "Ryze est particulièrement dangereux face à des adversaires marqués par Flux.",
      "Profitez du délai d'activation de Portail transdimensionnel pour décider comment vous occuper de ce qui risque d'en sortir.",
      "Infliger un contrôle de foule à Ryze pendant l'activation de Portail transdimensionnel annulera le portail."
    ],
    "abilities": {
      "passive": {
        "name": "Maîtrise des arcanes",
        "description": "<mainText>Les compétences de Ryze infligent des dégâts supplémentaires en fonction de son mana supplémentaire, et son mana max est augmenté d'un pourcentage en fonction de sa puissance.</mainText>",
        "icon": "Ryze_P.png"
      },
      "q": {
        "name": "Court-circuit",
        "description": "Passivement, les autres compétences de base de Ryze réinitialisent le délai de récupération de Court-circuit et chargent une rune. Lorsque Ryze lance Court-circuit avec deux runes chargées, il gagne un bref bonus en vitesse de déplacement.<br><br>À l'activation, Ryze tire une décharge de pure énergie en ligne droite, infligeant des dégâts au premier ennemi touché. Si la cible est marquée par Flux, Court-circuit inflige des dégâts supplémentaires et rebondit vers les ennemis proches marqués par Flux.",
        "icon": "RyzeQWrapper.png"
      },
      "w": {
        "name": "Prison runique",
        "description": "Ryze piège une cible dans une prison de runes, lui infligeant des dégâts et ralentissant ses déplacements. Si la cible est marquée par Flux, elle est immobilisée au lieu d'être ralentie.",
        "icon": "RyzeW.png"
      },
      "e": {
        "name": "Flux envoûtant",
        "description": "Ryze projette un orbe de pure énergie magique qui blesse une cible et marque les ennemis proches de sa cible. Les compétences de Ryze ont des effets supplémentaires sur les ennemis marqués.",
        "icon": "RyzeE.png"
      },
      "r": {
        "name": "Portail transdimensionnel",
        "description": "Passivement, Court-circuit inflige des dégâts supplémentaires aux cibles marquées par Flux.<br><br>À l'incantation, Ryze ouvre un portail menant à un endroit proche. Quelques secondes plus tard, tous les alliés près du portail sont transportés à l'endroit ciblé.",
        "icon": "RyzeR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2016-07-13",
        "kitAffecting": true,
        "source": {
          "url": "http://na.leagueoflegends.com/en/page/champion-update-ryze-rune-mage",
          "label": null
        }
      },
      {
        "type": "Visual (VFX) and Gameplay Update",
        "date": "2015-04-08",
        "kitAffecting": true,
        "source": {
          "url": "http://na.leagueoflegends.com/en/news/champions-skins/champion-update/champion-update-ryze-heads-pbe",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2015-03-25",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/game-updates/patch/patch-56-notes/",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2011-02-15",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://forums.na.leagueoflegends.com/board/showthread.php?t=516526",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2016-07-13",
      "source": {
        "url": "http://na.leagueoflegends.com/en/page/champion-update-ryze-rune-mage",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Ryze",
        "url": "https://www.youtube.com/watch?v=b1mEFUoYG9o",
        "published": "2016-07-12",
        "duration": 464
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Ryze: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=qNk6uNCLuDo",
        "published": "2016-07-12",
        "duration": 466
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Ryze Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=FGec0dbRdbA",
        "published": "2024-09-03",
        "duration": 180
      }
    ],
    "releaseDate": "2009-02-21"
  },
  {
    "id": "samira",
    "key": "0360",
    "ddid": "Samira",
    "name": "Samira",
    "title": "Rose du désert",
    "roles": {
      "adc": {
        "tier": "A",
        "wr": 50.03,
        "pr": 3.95,
        "ban": 5.1
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 3
    },
    "class": "Tireur / Assassin",
    "strengths": [],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "Élan téméraire",
        "description": "Samira fait des combos en enchaînant des attaques ou compétences différentes de la précédente. En mêlée, les attaques de Samira infligent des dégâts magiques supplémentaires. Les attaques de Samira contre les ennemis affectés par des effets <status>immobilisants</status> la font se ruer à portée d'attaque. Si l'ennemi est <status>projeté dans les airs</status>, elle le maintient brièvement <status>dans les airs</status>.",
        "icon": "SamiraP.png"
      },
      "q": {
        "name": "Panache",
        "description": "Samira tire une balle ou donne un coup d'épée, infligeant des dégâts. Si cette compétence est lancée pendant Charge sauvage, Samira frappe tous les ennemis sur son chemin à la fin de la ruée.",
        "icon": "SamiraQ.png"
      },
      "w": {
        "name": "Tourbillon de lame",
        "description": "Samira donne un coup d'épée tourbillonnant, ce qui blesse les ennemis et détruit les projectiles ennemis.",
        "icon": "SamiraW.png"
      },
      "e": {
        "name": "Charge sauvage",
        "description": "Samira se rue à travers un ennemi (bâtiments inclus), tailladant les ennemis qu'elle traverse et gagnant de la vitesse d'attaque. Tuer un champion ennemi réinitialise le délai de récupération de cette compétence.",
        "icon": "SamiraE.png"
      },
      "r": {
        "name": "Gâchette infernale",
        "description": "Samira tire une pluie de balles sur tous les ennemis qui l'entourent.",
        "icon": "SamiraR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Samira | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=KisUH8zrOjQ",
        "published": "2020-09-21",
        "duration": 251
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Samira Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=NtUU7U9X5zk",
        "published": "2020-09-21",
        "duration": 251
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Samira Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=PhBWp3jNHAk",
        "published": "2026-02-21",
        "duration": 180
      }
    ],
    "releaseDate": "2020-09-21"
  },
  {
    "id": "sejuani",
    "key": "0113",
    "ddid": "Sejuani",
    "name": "Sejuani",
    "title": "Fureur du nord",
    "roles": {
      "jgl": {
        "tier": "A",
        "wr": 51.36,
        "pr": 2,
        "ban": 0.19
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 5,
      "magic": 6
    },
    "class": "Tank",
    "strengths": [
      "Utilisez Assaut arctique pour fuir les menaces, interrompre les sorts canalisés ou poursuivre vos cibles.",
      "Vos alliés de mêlée peuvent appliquer des effets Givre pour votre Permafrost. Gardez un œil sur leurs cibles.",
      "Gardez Prison de glace pour les combats où vos alliés peuvent en tirer un avantage."
    ],
    "counters": [
      "Esquiver Assaut arctique et Prison de glace peut vous conférer un avantage important.",
      "Tâchez d'éviter le second coup de Colère de l'hiver, qui inflige le plus gros des dégâts.",
      "Soyez prudent près des ennemis de mêlée, car ils peuvent aussi appliquer des effets Givre pour Sejuani."
    ],
    "abilities": {
      "passive": {
        "name": "Fureur du nord",
        "description": "En dehors des combats, Sejuani gagne Armure de glace, qui augmente son armure et sa résistance magique et l'immunise contre les ralentissements. Armure de glace persiste un court instant après que Sejuani a subi des dégâts.  Sejuani peut blesser un ennemi étourdi pour le fracasser, infligeant d'énormes dégâts magiques.",
        "icon": "Sejuani_passive.png"
      },
      "q": {
        "name": "Assaut arctique",
        "description": "Sejuani charge droit devant elle, projetant les ennemis dans les airs. La charge s'arrête si elle touche un champion ennemi.",
        "icon": "SejuaniQ.png"
      },
      "w": {
        "name": "Colère de l'hiver",
        "description": "Sejuani donne deux coups de masse, infligeant des dégâts, ralentissant les ennemis et appliquant des effets Givre.",
        "icon": "SejuaniW.png"
      },
      "e": {
        "name": "Permafrost",
        "description": "Sejuani gèle et étourdit un champion ennemi qui porte le nombre max d'effets Givre.",
        "icon": "SejuaniE.png"
      },
      "r": {
        "name": "Prison de glace",
        "description": "Sejuani projette des bolas qui gèlent et étourdissent le premier champion touché, en plus de créer une tempête de glace qui ralentit les autres ennemis.",
        "icon": "SejuaniR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Class-scale Update",
        "date": "2017-05-03",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/midseason-2017",
          "label": "Tanks: Vanguards"
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2017-05-03",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/en/featured/midseason-2017",
          "label": null
        }
      },
      {
        "type": "Visual and Gameplay Update",
        "date": "2013-04-29",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/board/showthread.php?t=3297182",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2017-05-03",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/midseason-2017",
        "label": "Tanks: Vanguards"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Sejuani: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=bOWoAktkGQg",
        "published": "2013-04-29",
        "duration": 336
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Sejuani Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=wqHW5QJ_bdU",
        "published": "2025-07-19",
        "duration": 180
      }
    ],
    "releaseDate": "2012-01-17"
  },
  {
    "id": "senna",
    "key": "0235",
    "ddid": "Senna",
    "name": "Senna",
    "title": "Rédemptrice",
    "roles": {
      "adc": {
        "tier": "A",
        "wr": 50.12,
        "pr": 0.59,
        "ban": 1.85
      },
      "sup": {
        "tier": "A",
        "wr": 51.14,
        "pr": 5.64,
        "ban": 1.9
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 7,
      "magic": 6
    },
    "class": "Soutien / Tireur",
    "strengths": [],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "Absolution",
        "description": "Lorsque des unités meurent près de Senna, leurs âmes sont parfois prises au piège dans la Brume noire. Senna peut attaquer ces âmes pour les libérer et absorber la Brume qui les retenait. La Brume renforce son canon en pierre-relique en augmentant ses dégâts d'attaque, sa portée d'attaque et ses chances de coup critique. <br><br>Les attaques du canon en pierre-relique de Senna tirent plus lentement, infligent des dégâts supplémentaires et lui confèrent brièvement une partie de la vitesse de déplacement de sa cible.",
        "icon": "Senna_Passive.png"
      },
      "q": {
        "name": "Ombre perforante",
        "description": "Le canon en pierre-relique de Senna tire un rayon de lumière et d'ombre à travers sa cible. Ce rayon soigne les alliés et blesse les ennemis.",
        "icon": "SennaQ.png"
      },
      "w": {
        "name": "Dernière étreinte",
        "description": "Senna projette une vague de Brume noire. Si elle touche un ennemi, la Brume s'accroche à lui. La cible ainsi que tous les ennemis proches sont immobilisés après un court délai.",
        "icon": "SennaW.png"
      },
      "e": {
        "name": "Malédiction de la Brume noire",
        "description": "Senna relâche la Brume accumulée dans son arme pour créer une tempête autour d'elle, ce qui la transforme en spectre. Les alliés qui entrent dans cette zone sont camouflés et prennent l'apparence d'un spectre. Les spectres ne peuvent pas être identifiés, ne peuvent pas être sélectionnés et profitent d'un bonus en vitesse de déplacement.",
        "icon": "SennaE.png"
      },
      "r": {
        "name": "Ténèbres aveuglantes",
        "description": "Senna invoque les pierres-reliques de Sentinelles déchues, ouvrant son canon en pierre-relique pour former un éventail sacré d'ombre et de lumière. Elle tire alors un rayon à portée illimitée qui octroie un bouclier aux alliés touchés et inflige des dégâts aux ennemis pris dans son centre.",
        "icon": "SennaR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Senna | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=2WanNkQohUw",
        "published": "2019-11-10",
        "duration": 227
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Senna Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=9n97hMnjhbA",
        "published": "2019-11-10",
        "duration": 227
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Senna Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=dsJgIA45K6g",
        "published": "2026-07-02",
        "duration": 180
      }
    ],
    "releaseDate": "2019-11-10"
  },
  {
    "id": "seraphine",
    "key": "0147",
    "ddid": "Seraphine",
    "name": "Seraphine",
    "title": "Chanteuse rêveuse",
    "roles": {
      "adc": {
        "tier": "S",
        "wr": 52.37,
        "pr": 1.95,
        "ban": 10.13
      },
      "sup": {
        "tier": "A",
        "wr": 50.89,
        "pr": 8.8,
        "ban": 10.18
      }
    },
    "damageType": "Mixte",
    "dmgRating": {
      "attack": 0,
      "magic": 0
    },
    "class": "Soutien / Mage",
    "strengths": [],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "Présence sur scène",
        "description": "Toutes les trois compétences de base, Séraphine lance deux fois la compétence de base choisie. De plus, lancer des compétences près d'alliés permet à sa prochaine attaque de base d'avoir une plus grande portée et d'infliger des dégâts magiques supplémentaires.",
        "icon": "Seraphine_Passive.png"
      },
      "q": {
        "name": "Note aiguë",
        "description": "Séraphine inflige des dégâts dans une zone.",
        "icon": "SeraphineQ.png"
      },
      "w": {
        "name": "Son ambiophonique",
        "description": "Séraphine octroie un effet de hâte et un bouclier aux alliés proches. Si elle dispose déjà d'un bouclier, elle soigne également les alliés proches.",
        "icon": "SeraphineW.png"
      },
      "e": {
        "name": "Battement",
        "description": "Séraphine inflige des dégâts aux ennemis placés sur une ligne et restreint leurs déplacements.",
        "icon": "SeraphineE.png"
      },
      "r": {
        "name": "Bis",
        "description": "Séraphine inflige des dégâts et charme les ennemis touchés. La portée est étendue à chaque champion allié ou ennemi touché.",
        "icon": "SeraphineR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Gameplay Update",
        "date": "2024-03-06",
        "kitAffecting": true,
        "source": {
          "url": "https://www.youtube.com/watch?v=IBNQzRM7Ui4",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2024-03-06",
      "source": {
        "url": "https://www.youtube.com/watch?v=IBNQzRM7Ui4",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Séraphine | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=bG2l5sDczD8",
        "published": "2020-10-29",
        "duration": 235
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Seraphine Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=hiNN2WKkR3Q",
        "published": "2020-10-29",
        "duration": 235
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Seraphine Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=fDmG_Q6d9Yc",
        "published": "2025-11-26",
        "duration": 180
      }
    ],
    "releaseDate": "2020-10-29"
  },
  {
    "id": "sett",
    "key": "0875",
    "ddid": "Sett",
    "name": "Sett",
    "title": "Patron",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 50.57,
        "pr": 5.62,
        "ban": 2.34
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 1
    },
    "class": "Combattant / Tank",
    "strengths": [],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "Roi de l'arène",
        "description": "Lors de ses attaques de base, Sett alterne son direct du gauche et son direct du droit. Le direct du droit est un peu plus puissant et rapide. De plus, Sett déteste perdre, ce qui augmente la régénération de ses PV selon ses PV manquants.",
        "icon": "Sett_P.png"
      },
      "q": {
        "name": "Rogne",
        "description": "Les deux prochaines attaques de Sett infligent des dégâts supplémentaires en fonction des PV max de la cible. De plus, Sett augmente sa vitesse de déplacement quand il se dirige vers des champions ennemis.",
        "icon": "SettQ.png"
      },
      "w": {
        "name": "Coup cathartique",
        "description": "Passivement, Sett stocke une partie des dégâts qu'il subit sous forme d'agressivité. À l'activation, Sett dépense toute l'agressivité stockée pour gagner un bouclier et donner un coup de poing à effet de zone qui inflige des dégâts bruts au centre et des dégâts physiques sur les côtés.",
        "icon": "SettW.png"
      },
      "e": {
        "name": "Casse-tête",
        "description": "Sett attire les ennemis venant de deux directions opposées pour leur infliger des dégâts et les étourdir. S'il n'y avait des ennemis que dans une direction, ces ennemis sont ralentis au lieu d'être étourdis.",
        "icon": "SettE.png"
      },
      "r": {
        "name": "Le Clou du spectacle",
        "description": "Sett saisit un champion ennemi et l'emporte dans les airs avant de l'écraser au sol, infligeant des dégâts et ralentissant tous les ennemis près de son point d'atterrissage.",
        "icon": "SettR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Sett | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=929kWOKnILY",
        "published": "2020-01-14",
        "duration": 263
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Sett Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=n-KWeg-9GVU",
        "published": "2020-01-14",
        "duration": 263
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Sett Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=nw9GwHpL6Oc",
        "published": "2025-08-10",
        "duration": 180
      }
    ],
    "releaseDate": "2020-01-14"
  },
  {
    "id": "shaco",
    "key": "0035",
    "ddid": "Shaco",
    "name": "Shaco",
    "title": "Bouffon des ténèbres",
    "roles": {
      "jgl": {
        "tier": "A",
        "wr": 50.55,
        "pr": 4.52,
        "ban": 16.79
      },
      "sup": {
        "tier": "C",
        "wr": 47.43,
        "pr": 1.27,
        "ban": 16.57
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 6
    },
    "class": "Assassin",
    "strengths": [
      "Utiliser Tromperie par-dessus le terrain peut vous aider à fuir.",
      "Essayez d'acheter des objets infligeant des effets à l'impact. Votre clone d'Hallucination en profitera aussi.",
      "Les dégâts de Traîtrise peuvent profiter des bonus aux coups critiques, comme celui de la Lame d'infini."
    ],
    "counters": [
      "Si Shaco s'en sort bien en début de partie, vous devriez envisager de poser des Balises camouflées près de ses camps dans la jungle.",
      "Si Shaco utilise Tromperie pour engager le combat, il ne pourra pas s'en servir pour fuir. Agissez en équipe pour vous concentrer sur lui et le battre rapidement."
    ],
    "abilities": {
      "passive": {
        "name": "Traîtrise",
        "description": "Les attaques de base et la compétence Poison double de Shaco infligent des dégâts supplémentaires lorsqu'elles frappent dans le dos d'un ennemi.",
        "icon": "Jester_CarefulStrikes.png"
      },
      "q": {
        "name": "Tromperie",
        "description": "Shaco devient invisible et se téléporte vers la position ciblée.<br><br>Sa première attaque en étant invisible est renforcée : elle inflige des dégâts supplémentaires et, si Shaco frappe dans le dos d'un ennemi, un coup critique.",
        "icon": "Deceive.png"
      },
      "w": {
        "name": "Boîte surprise",
        "description": "Shaco pose une boîte cachée. Quand elle est déclenchée, elle effraie puis attaque les ennemis proches.",
        "icon": "JackInTheBox.png"
      },
      "e": {
        "name": "Poison double",
        "description": "Passivement, Shaco empoisonne les cibles qu'il touche, réduisant leur vitesse de déplacement. Shaco peut lancer son arme pour infliger des dégâts et empoisonner sa cible. Le poignard lancé inflige des dégâts supplémentaires si la cible a moins de 30% de ses PV.",
        "icon": "TwoShivPoison.png"
      },
      "r": {
        "name": "Hallucination",
        "description": "Shaco crée un double de lui-même à ses côtés qui peut attaquer les ennemis proches (inflige des dégâts réduits aux tourelles). En mourant, il explose, faisant apparaître trois mini-boîtes surprises et blessant les ennemis à portée.",
        "icon": "HallucinateFull.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2022-04-13",
        "kitAffecting": false,
        "source": {
          "url": "https://www.reddit.com/r/LeaguePBE/comments/tsdq0o/shaco_vfx_update/",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2016-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/preseason-2017/assassins",
          "label": "Slayers: Assassins"
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2015-04-08",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-58-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2016-11-10",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/preseason-2017/assassins",
        "label": "Slayers: Assassins"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Shaco: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=Q9m48jiVWL4",
        "published": "2011-11-08",
        "duration": 453
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Shaco Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=ratNrI4gn64",
        "published": "2024-09-10",
        "duration": 180
      }
    ],
    "releaseDate": "2009-10-10"
  },
  {
    "id": "shen",
    "key": "0098",
    "ddid": "Shen",
    "name": "Shen",
    "title": "Œil du crépuscule",
    "roles": {
      "top": {
        "tier": "S",
        "wr": 51.19,
        "pr": 3.59,
        "ban": 0.78
      },
      "sup": {
        "tier": "B",
        "wr": 49.06,
        "pr": 1.18,
        "ban": 0.76
      }
    },
    "damageType": "Mixte",
    "dmgRating": {
      "attack": 3,
      "magic": 3
    },
    "class": "Tank",
    "strengths": [
      "Gardez un œil sur vos alliés et soyez prêt à aller les sauver grâce à votre téléportation.",
      "Tirez profit de votre énergie pour prendre petit à petit l'avantage sur les utilisateurs de mana."
    ],
    "counters": [
      "Assurez-vous d'esquiver les provocations de Shen et punissez-le quand il échoue.",
      "Quand Shen atteint le niveau 6, méfiez-vous de son ultime à portée globale qui peut vite renverser le cours d'un combat."
    ],
    "abilities": {
      "passive": {
        "name": "Barrière de ki",
        "description": "Après avoir lancé une compétence, Shen gagne un bouclier. Affecter d'autres champions réduit le délai de récupération de cet effet.",
        "icon": "Shen_Passive.png"
      },
      "q": {
        "name": "Assaut crépusculaire",
        "description": "Shen rappelle sa lame spirituelle pour attaquer avec elle, infligeant des dégâts basés sur les PV max de sa cible. Les attaques sont grandement renforcées si la lame touche un champion ennemi. Tous les ennemis touchés par la lame sont ralentis quand ils s'éloignent de Shen.",
        "icon": "ShenQ.png"
      },
      "w": {
        "name": "Refuge spirituel",
        "description": "Les attaques qui ciblent Shen ou ses alliés sont bloquées quand ils sont près de la lame spirituelle.",
        "icon": "ShenW.png"
      },
      "e": {
        "name": "Rush des ombres",
        "description": "Shen fonce dans une direction en provoquant les ennemis sur son passage.",
        "icon": "ShenE.png"
      },
      "r": {
        "name": "Soutien indéfectible",
        "description": "Shen offre un bouclier absorbant les dégâts à un champion allié, puis se téléporte jusqu'à lui.",
        "icon": "ShenR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2016-01-28",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/20170926181606/http://na.leagueoflegends.com/en/page/champion-update-shen",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-12-10",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-421-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2016-01-28",
      "source": {
        "url": "https://web.archive.org/web/20170926181606/http://na.leagueoflegends.com/en/page/champion-update-shen",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Shen",
        "url": "https://www.youtube.com/watch?v=Avugpm9i6_E",
        "published": "2016-01-25",
        "duration": 467
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Shen: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=JIIE0LCvGpo",
        "published": "2016-01-25",
        "duration": 466
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Shen Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=2AinwRxl_ZA",
        "published": "2025-11-05",
        "duration": 180
      }
    ],
    "releaseDate": "2010-03-24"
  },
  {
    "id": "shyvana",
    "key": "0102",
    "ddid": "Shyvana",
    "name": "Shyvana",
    "title": "Demi-dragon",
    "roles": {
      "jgl": {
        "tier": "S",
        "wr": 51.04,
        "pr": 5.37,
        "ban": 5.28
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 3
    },
    "class": "Combattant / Tank",
    "strengths": [
      "Toutes les compétences de Shyvana profitent des attaques contre des unités. Les objets améliorant la vitesse d'attaque sont très précieux pour elle."
    ],
    "counters": [
      "La force de Shyvana réside surtout dans son agressivité, ce qui la rend faible face aux adversaires capables de garder leurs distances.",
      "Toutes ses compétences de base frappent plusieurs ennemis sous la forme de dragon. Les champions qui l'affrontent ne doivent pas se regrouper.",
      "La jauge de fureur de Shyvana indique quand son ultime peut être activé. Attaquez-la quand elle n'a pas beaucoup de fureur."
    ],
    "abilities": {
      "passive": {
        "name": "Armure d'écailles",
        "description": "Les éliminations de champions ennemis, de grands sbires et de grands monstres confèrent à Shyvana des effets Armure d'écailles, améliorant ses résistances.",
        "icon": "Shyvana_Passive.png"
      },
      "q": {
        "name": "Frappe enflammée",
        "description": "La prochaine attaque de Shyvana frappe à la fois la cible et la zone environnante. Cette compétence peut être réactivée. Lorsque Shyvana est en forme de dragon, la compétence bénéficie d'une réactivation supplémentaire, infligeant d'énormes dégâts à une cible unique.",
        "icon": "ShyvanaQ.png"
      },
      "w": {
        "name": "Égide de feu",
        "description": "Shyvana gagne un bouclier, de la vitesse de déplacement et, après un court délai, la zone autour d'elle explose.  Lorsqu'elle est en forme de dragon, l'explosion lui octroie des soins si elle touche un champion ennemi.",
        "icon": "ShyvanaW.png"
      },
      "e": {
        "name": "Éruption",
        "description": "Shyvana lance une boule de feu qui explose en touchant un grand ennemi et le ralentit. En forme de dragon, la boule de feu traverse et explose au contact des grands ennemis, laissant derrière elle une traînée de feu.",
        "icon": "ShyvanaE.png"
      },
      "r": {
        "name": "Vol du dragon",
        "description": "Shyvana se transforme en dragon et bondit en avant, faisant fuir les ennemis sur son passage. Sous forme de dragon, elle devient plus grande et ses compétences de base sont renforcées.",
        "icon": "ShyvanaR.png"
      }
    },
    "sourceNotes": [
      {
        "field": "strengths",
        "note": "Conseil officiel « Souffle de flammes est idéal pour gagner des niveaux contre les adversaires difficiles dans les voies. » — nomme « Souffle de flammes », absent du kit actuel (noms et descriptions des sorts, Data Dragon 16.17.1) et des objets actuels (item.json) : conseil non affiché.",
        "url": "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
        "retrieved": "2026-09-08"
      },
      {
        "field": "strengths",
        "note": "Conseil officiel « Combustion est idéale pour jungler. Les monstres sont affectés pendant toute sa durée et le gain de vitesse facilite les ganks. » — nomme « Combustion », absent du kit actuel (noms et descriptions des sorts, Data Dragon 16.17.1) et des objets actuels (item.json) : conseil non affiché.",
        "url": "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
        "retrieved": "2026-09-08"
      },
      {
        "field": "strengths",
        "note": "Conseil officiel « Il peut être intéressant d'acheter un objet pouvant ralentir les ennemis : Maillet gelé, Plaque du mort ou Entropie. » — nomme « Entropie », absent du kit actuel (noms et descriptions des sorts, Data Dragon 16.17.1) et des objets actuels (item.json) : conseil non affiché.",
        "url": "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
        "retrieved": "2026-09-08"
      }
    ],
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2026-03-18",
        "kitAffecting": true,
        "source": {
          "url": "https://www.youtube.com/watch?v=9U_jEzKf0_0",
          "label": "Season 2024 Look Ahead: Champions, Modes, Arcane & More"
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2016-11-19",
        "kitAffecting": true,
        "source": {
          "url": "http://na.leagueoflegends.com/en/news/champions-skins/champion-update/ability-update-shyvana",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2015-04-08",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-58-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2026-03-18",
      "source": {
        "url": "https://www.youtube.com/watch?v=9U_jEzKf0_0",
        "label": "Season 2024 Look Ahead: Champions, Modes, Arcane & More"
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Shyvana | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=mniG0cKcEL4",
        "published": "2026-03-03",
        "duration": 218
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Shyvana Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=BHSkpeoy2Q8",
        "published": "2026-03-03",
        "duration": 218
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Shyvana Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=CjXp0cXoZuc",
        "published": "2026-05-15",
        "duration": 180
      }
    ],
    "releaseDate": "2011-11-01"
  },
  {
    "id": "singed",
    "key": "0027",
    "ddid": "Singed",
    "name": "Singed",
    "title": "Chimiste fou",
    "roles": {
      "top": {
        "tier": "S",
        "wr": 51.67,
        "pr": 2.62,
        "ban": 0.89
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 4,
      "magic": 7
    },
    "class": "Tank / Mage",
    "strengths": [
      "Piste empoisonnée est très utile pour farmer et harceler, en permettant à Singed de limiter le flux d'ennemi dans la voie où il se trouve.",
      "Utilisez la Potion de démence pour forcer l'ennemi à vous pourchasser dans la Piste empoisonnée.",
      "Projeter les ennemis vers votre tourelle permet de leur infliger d'importants dégâts."
    ],
    "counters": [
      "Restez à distance pour éviter d'être projeté vers les alliés de Singed.",
      "Singed doit être proche de votre équipe pour être efficace. Profitez-en pour utiliser sur lui du contrôle de foule tout en attaquant ses alliés.",
      "Attention quand vous pourchassez Singed. Il est difficile à abattre et peut laisser une piste empoisonnée dans son sillage."
    ],
    "abilities": {
      "passive": {
        "name": "Sillage toxique",
        "description": "Singed bénéficie de l'aspiration des champions proches, gagnant un bref bonus en vitesse de déplacement quand il les dépasse.",
        "icon": "Singed_Passive.png"
      },
      "q": {
        "name": "Piste empoisonnée",
        "description": "Singed laisse une piste empoisonnée derrière lui, infligeant des dégâts aux ennemis sur la route.",
        "icon": "PoisonTrail.png"
      },
      "w": {
        "name": "Attrape-mouche",
        "description": "Lance au sol une fiole contenant un puissant adhésif qui ralentit et rend inertes tous les ennemis passant dans la zone d'effet.",
        "icon": "MegaAdhesive.png"
      },
      "e": {
        "name": "Projection",
        "description": "Blesse l'ennemi et le projette derrière Singed. Si la cible projetée par Singed atterrit dans Attrape-mouche, elle est aussi immobilisée.",
        "icon": "Fling.png"
      },
      "r": {
        "name": "Potion de démence",
        "description": "Singed voit plusieurs de ses statistiques largement améliorées grâce à des produits chimiques, et Piste empoisonnée se met à appliquer un effet Hémorragie.",
        "icon": "InsanityPotion.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2020-06-24",
        "kitAffecting": false,
        "source": {
          "url": "https://www.surrenderat20.net/2020/06/616-pbe-update-skin-tweaks-singed-vfx.html",
          "label": null
        }
      },
      {
        "type": "Visual Update",
        "date": "2014-11-05",
        "kitAffecting": false,
        "source": {
          "url": "http://na.leagueoflegends.com/en/news/champions-skins/champion-update/champion-update-singed",
          "label": null
        }
      }
    ],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Singed: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=ZOpT__qwjdQ",
        "published": "2011-09-24",
        "duration": 427
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Singed Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=-No0P0ZvHF4",
        "published": "2025-07-17",
        "duration": 180
      }
    ],
    "releaseDate": "2009-04-18"
  },
  {
    "id": "sion",
    "key": "0014",
    "ddid": "Sion",
    "name": "Sion",
    "title": "Colosse mort-vivant",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 49.27,
        "pr": 2.85,
        "ban": 0.5
      },
      "mid": {
        "tier": "B",
        "wr": 49.34,
        "pr": 0.54,
        "ban": 0.48
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 5,
      "magic": 3
    },
    "class": "Tank / Combattant",
    "strengths": [
      "Votre capacité à tourner est très limitée pendant Assaut inarrêtable, alors pensez à l'utiliser dans des passages étroits.",
      "Cri du tueur est idéal pour préparer un puissant Fracas meurtrier.",
      "L'icone de Feu intérieur indique combien de PV il reste au bouclier. Utilisez cette information pour provoquer l'explosion au bon moment."
    ],
    "counters": [
      "Même si Fracas meurtrier touche sa cible, forcer Sion à frapper plus tôt que prévu réduit l'impact de l'attaque.",
      "Quand Sion meurt, profitez-en vite pour vous repositionner et vous préparer à son retour."
    ],
    "abilities": {
      "passive": {
        "name": "Gloire posthume",
        "description": "Après avoir été tué, Sion revient temporairement à la vie, mais ses PV diminuent rapidement. Ses attaques deviennent très rapides, soignent Sion et infligent des dégâts supplémentaires en fonction des PV max de la cible.",
        "icon": "Sion_Passive1.png"
      },
      "q": {
        "name": "Fracas meurtrier",
        "description": "Sion charge un coup puissant qui s'abattra dans une zone devant lui, infligeant des dégâts aux ennemis quand il relâche l'attaque. S'il charge assez longtemps, il projettera en l'air et étourdira les ennemis touchés.",
        "icon": "SionQ.png"
      },
      "w": {
        "name": "Feu intérieur",
        "description": "Sion s'entoure d'un bouclier et peut réactiver la compétence au bout de 3 sec pour infliger des dégâts magiques aux ennemis proches. Quand Sion tue des ennemis, ses PV max sont passivement augmentés.",
        "icon": "SionW.png"
      },
      "e": {
        "name": "Cri du tueur",
        "description": "Sion envoie une courte onde de choc qui blesse et ralentit le premier ennemi touché tout en réduisant son armure. Si l'onde de choc atteint un sbire ou un monstre, celui-ci est projeté vers l'arrière : tous les ennemis qu'il touche subissent des dégâts, sont ralentis et perdent de l'armure.",
        "icon": "SionE.png"
      },
      "r": {
        "name": "Assaut inarrêtable",
        "description": "Sion charge dans une direction, accélérant peu à peu. Il peut légèrement changer de trajectoire en déplaçant le curseur de la souris. Quand il percute un ennemi, il lui inflige des dégâts et le projette en l'air en fonction de la distance parcourue par sa charge.",
        "icon": "SionR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2014-10-23",
        "kitAffecting": true,
        "source": {
          "url": "http://na.leagueoflegends.com/en/news/champions-skins/champion-release/sion-has-come-end-us-all",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2014-10-23",
      "source": {
        "url": "http://na.leagueoflegends.com/en/news/champions-skins/champion-release/sion-has-come-end-us-all",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Sion",
        "url": "https://www.youtube.com/watch?v=AN_lXER1y5w",
        "published": "2014-10-06",
        "duration": 530
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Sion: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=4mWWFC9SRfA",
        "published": "2014-10-06",
        "duration": 530
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Sion Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=NhrSAOeoUGk",
        "published": "2025-11-17",
        "duration": 180
      }
    ],
    "releaseDate": "2009-02-21"
  },
  {
    "id": "sivir",
    "key": "0015",
    "ddid": "Sivir",
    "name": "Sivir",
    "title": "Mercenaire du désert",
    "roles": {
      "adc": {
        "tier": "A",
        "wr": 50.33,
        "pr": 4.32,
        "ban": 1.49
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 9,
      "magic": 1
    },
    "class": "Tireur",
    "strengths": [
      "La lame de Sivir revient vers elle comme un boomerang, ce qui permet de changer de position et de toucher ainsi des ennemis qui auraient pu l'éviter.",
      "Activer Ricochet réinitialise le délai d'attaque de base de Sivir. Activez cette compétence immédiatement après une attaque de base pour maximiser vos dégâts.",
      "Essayez de garder Bouclier magique pour les compétences ennemies capables de vous étourdir ou de vous immobiliser."
    ],
    "counters": [
      "Il faut beaucoup de mana pour lancer Lame boomerang ; esquivez pour prendre l'avantage sur Sivir. Si vous êtes touché, évitez la lame au retour.",
      "Sivir est puissante sur sa voie. Si vous la laissez seule trop longtemps, vos tourelles seront rapidement détruites.",
      "Vous pouvez forcer Sivir à gaspiller son Bouclier magique en faisant semblant d'avancer vers elle."
    ],
    "abilities": {
      "passive": {
        "name": "Mille-pattes",
        "description": "Sivir gagne un bref bonus en vitesse de déplacement quand elle attaque un champion ennemi.",
        "icon": "Sivir_Passive.png"
      },
      "q": {
        "name": "Lame boomerang",
        "description": "Sivir lance sa lame comme un boomerang, infligeant des dégâts à l'aller comme au retour.",
        "icon": "SivirQ.png"
      },
      "w": {
        "name": "Ricochet",
        "description": "Les prochaines attaques de base de Sivir gagneront de la vitesse d'attaque bonus et rebondiront sur des cibles proches. Les rebonds infligent des dégâts réduits.",
        "icon": "SivirW.png"
      },
      "e": {
        "name": "Bouclier magique",
        "description": "Sivir crée une barrière magique capable de bloquer une compétence ennemie. Elle récupère des PV et gagne un bref bonus en vitesse de déplacement si une compétence est bloquée.",
        "icon": "SivirE.png"
      },
      "r": {
        "name": "En chasse",
        "description": "Sivir mène ses alliés au combat, augmentant temporairement leur vitesse de déplacement. De plus, les attaques de Sivir réduisent les délais de récupération de ses compétences.",
        "icon": "SivirR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Gameplay Update",
        "date": "2022-07-13",
        "kitAffecting": true,
        "source": {
          "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-12-13-notes/#patch-champions",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2015-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
          "label": "Marksmen"
        }
      },
      {
        "type": "Visual and Gameplay Update",
        "date": "2013-10-01",
        "kitAffecting": true,
        "source": {
          "url": "http://na.leagueoflegends.com/en/news/champions-skins/champion-relaunch/sivir-battle-mistress-relaunch-available-now",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2011-11-28",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://forums.na.leagueoflegends.com/board/showthread.php?t=1534325&page=1#post17779011",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2022-07-13",
      "source": {
        "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-12-13-notes/#patch-champions",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Sivir: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=6NkXkpHnf30",
        "published": "2012-01-24",
        "duration": 374
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Sivir Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=wmyK7qeOclk",
        "published": "2025-07-11",
        "duration": 180
      }
    ],
    "releaseDate": "2009-02-21"
  },
  {
    "id": "skarner",
    "key": "0072",
    "ddid": "Skarner",
    "name": "Skarner",
    "title": "Souverain originel",
    "roles": {
      "jgl": {
        "tier": "A",
        "wr": 50.24,
        "pr": 1.19,
        "ban": 0.24
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 7,
      "magic": 5
    },
    "class": "Tank / Combattant",
    "strengths": [
      "Les attaques de base de Skarner appliquent Tectonique. Restez au contact de votre cible et réappliquez cet effet pour maximiser vos dégâts.",
      "Empalement est extrêmement puissant si vous l'utilisez de manière à placer un ennemi où vos alliés peuvent l'attaquer."
    ],
    "counters": [
      "Impact d'Ixtal peut être interrompu par un étourdissement, une immobilisation ou une projection dans les airs. Gardez une compétence dotée d'un de ces effets au cas où il viendrait vous ganker !",
      "Empalement peut être esquivé. Utilisez Saut éclair ou une compétence similaire pour vous mettre hors de portée.",
      "Les dégâts continus de Skarner peuvent vite avoir raison de vous. Attention à ne pas l'ignorer."
    ],
    "abilities": {
      "passive": {
        "name": "Échos des vibrations",
        "description": "Les attaques de Skarner, Terre brisée, Soulèvement et Empalement appliquent Tectonique. Au maximum d'effets Tectonique cumulés, les ennemis subissent des dégâts magiques selon leurs PV max sur la durée.",
        "icon": "Skarner_Passive.png"
      },
      "q": {
        "name": "Terre brisée/Soulèvement",
        "description": "Skarner arrache du sol un rocher qui renforce ses attaques et peut être lancé comme un puissant projectile.",
        "icon": "SkarnerQ.png"
      },
      "w": {
        "name": "Bastion sismique",
        "description": "Skarner gagne un bouclier et provoque un séisme dont l'onde de choc blesse et ralentit les ennemis.",
        "icon": "SkarnerW.png"
      },
      "e": {
        "name": "Impact d'Ixtal",
        "description": "Skarner charge vers l'avant en traversant les obstacles. S'il percute un champion ou un grand monstre, il l'écrase contre le prochain mur rencontré pour lui infliger des dégâts et l'étourdir.",
        "icon": "SkarnerE.png"
      },
      "r": {
        "name": "Empalement",
        "description": "Skarner frappe avec ses queues devant lui pour neutraliser des champions ennemis. Il peut ensuite se déplacer librement en traînant les ennemis ainsi neutralisés.",
        "icon": "SkarnerR.png"
      }
    },
    "sourceNotes": [
      {
        "field": "strengths",
        "note": "Conseil officiel « Capturer des Flèches cristallines avant d'essayer de prendre un objectif ou de provoquer un combat d'équipes à proximité améliore les performances de Skarner durant ces combats. » — nomme « Flèches cristallines », absent du kit actuel (noms et descriptions des sorts, Data Dragon 16.17.1) et des objets actuels (item.json) : conseil non affiché.",
        "url": "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
        "retrieved": "2026-09-08"
      }
    ],
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2024-04-03",
        "kitAffecting": true,
        "source": {
          "url": "https://www.leagueoflegends.com/en-us/news/dev/dev-searching-for-skarner-s-sting/",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2015-08-26",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/page/gameplay-update-juggernauts",
          "label": "Fighters: Juggernauts"
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2015-08-26",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/page/gameplay-update-juggernauts",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) and Gameplay Update",
        "date": "2014-06-18",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://eune.leagueoflegends.com/en/news/game-updates/patch/patch-410-notes#patch-nidalee",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2014-02-11",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/game-updates/patch/patch-42-notes#patch-skarner",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2024-04-03",
      "source": {
        "url": "https://www.leagueoflegends.com/en-us/news/dev/dev-searching-for-skarner-s-sting/",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Skarner: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=vLxbEDJykcI",
        "published": "2011-08-09",
        "duration": 398
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Skarner Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=yFg4pTUk2ns",
        "published": "2026-04-17",
        "duration": 180
      }
    ],
    "releaseDate": "2011-08-09"
  },
  {
    "id": "smolder",
    "key": "0901",
    "ddid": "Smolder",
    "name": "Smolder",
    "title": "Dragonnet flamboyant",
    "roles": {
      "adc": {
        "tier": "A",
        "wr": 49.74,
        "pr": 3.56,
        "ban": 1.55
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 5
    },
    "class": "Tireur / Mage",
    "strengths": [
      "Smolder est très vulnérable en début de partie. Faites en sorte d'accumuler des effets de votre compétence passive et de rester en vie pour devenir un puissant dragon par la suite !",
      "Smolder compte sur son équipe pour le protéger. Essayez de trouver des alliés qui pourront vous aider contre les menaces ennemies.",
      "Smolder peut infliger d'énormes dégâts aux groupes d'ennemis. Attendez que les ennemis soient bien groupés pour les attaquer !"
    ],
    "counters": [
      "Smolder compte sur son équipe pour le protéger. Attaquez-le quand son équipe ne peut pas le sauver.",
      "Ne restez pas groupés face à Smolder !",
      "Smolder est très vulnérable en début de partie. Essayez de tirer avantage de sa faiblesse avant qu'il n'apprenne à être un véritable dragon !",
      "Le vol de Smolder peut être interrompu par les contrôles de foule puissants, et il est affecté par les ralentissements."
    ],
    "abilities": {
      "passive": {
        "name": "Dragon en herbe",
        "description": "Toucher des champions avec une compétence et éliminer des ennemis avec Boule de feu draconique octroie à Smolder un effet de Dragon en herbe. Les effets ainsi cumulés augmentent les dégâts des compétences de base de Smolder.",
        "icon": "Icons_Smolder_Passive.png"
      },
      "q": {
        "name": "Boule de feu draconique",
        "description": "Smolder crache du feu sur un ennemi. Au fil des effets cumulés, cette compétence devient plus puissante.",
        "icon": "SmolderQ.png"
      },
      "w": {
        "name": "Atchoum !",
        "description": "Smolder laisse échapper un adorable éternuement enflammé qui explose s'il touche des champions ennemis.",
        "icon": "SmolderW.png"
      },
      "e": {
        "name": "Flap, flap, flap !",
        "description": "Smolder s'envole, ignorant les obstacles et bombardant l'ennemi qui a le moins de PV.",
        "icon": "SmolderE.png"
      },
      "r": {
        "name": "MAMAAAN !",
        "description": "Smolder fait appel à sa mère pour qu'elle crache du feu depuis les airs, infligeant des dégâts supplémentaires et ralentissant les ennemis au centre de son feu.",
        "icon": "SmolderR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Gameplay Update",
        "date": "2024-11-20",
        "kitAffecting": true,
        "source": {
          "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-14-23-notes/",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2024-11-20",
      "source": {
        "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-14-23-notes/",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Smolder | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=OQT7UTIslYU",
        "published": "2024-01-31",
        "duration": 311
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Smolder Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=qmpFt9sY72s",
        "published": "2024-01-31",
        "duration": 311
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Smolder Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=i9165bkSmxQ",
        "published": "2025-07-25",
        "duration": 180
      }
    ],
    "releaseDate": "2024-01-31"
  },
  {
    "id": "sona",
    "key": "0037",
    "ddid": "Sona",
    "name": "Sona",
    "title": "Virtuose de la harpe",
    "roles": {
      "sup": {
        "tier": "A",
        "wr": 51.34,
        "pr": 3,
        "ban": 0.24
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 5,
      "magic": 8
    },
    "class": "Soutien / Mage",
    "strengths": [
      "N'oubliez pas de toucher vos alliés quand les halos de Sona sont actifs, mais évitez de vous faire surprendre par l'ennemi.",
      "Gardez Crescendo pour les moments importants.",
      "Une utilisation au bon moment d'Aria de persévérance accroît vos chances de survie."
    ],
    "counters": [
      "Quand vous voyez Sona, dispersez-vous pour qu'elle ne force pas toute votre équipe à danser.",
      "Tuez d'abord Sona, car elle peut soigner son équipe si on lui en laisse le temps."
    ],
    "abilities": {
      "passive": {
        "name": "Accord de puissance",
        "description": "<passive>Accelerando</passive> : les compétences de base de Sona octroient une accélération de compétence (hors ultime) lorsqu'elles sont correctement utilisées, jusqu'à un maximum. Au-delà de celui-ci, bien utiliser une compétence réduit le délai de récupération de l'ultime de Sona.<br><br><passive>Accord de puissance</passive> : après avoir lancé quelques compétences, la prochaine attaque de Sona inflige des dégâts magiques bonus et applique un effet supplémentaire selon la dernière compétence de base lancée.",
        "icon": "Sona_Passive_Charged.png"
      },
      "q": {
        "name": "Hymne à la bravoure",
        "description": "Sona joue l'Hymne à la bravoure, dont les ondes sonores infligent des dégâts magiques à deux ennemis proches (priorité aux champions et aux monstres). Sona reçoit un halo temporaire qui confère aux alliés touchés par la zone un bonus aux dégâts de leur prochaine attaque contre un ennemi.",
        "icon": "SonaQ.png"
      },
      "w": {
        "name": "Aria de persévérance",
        "description": "Sona joue l'Aria de persévérance. Sa mélodie protectrice la soigne, ainsi qu'un allié blessé proche. Sona reçoit un halo temporaire qui confère aux alliés touchés par la zone un bouclier temporaire.",
        "icon": "SonaW.png"
      },
      "e": {
        "name": "Mélodie de vélocité",
        "description": "Sona joue la Mélodie de vélocité, ce qui confère aux alliés proches un bonus en vitesse de déplacement. Sona reçoit un halo temporaire qui permet aux champions alliés touchés par la zone d'augmenter leur vitesse de déplacement.",
        "icon": "SonaE.png"
      },
      "r": {
        "name": "Crescendo",
        "description": "Sona joue son accord ultime, étourdissant les champions ennemis, les forçant à danser et leur infligeant des dégâts magiques.",
        "icon": "SonaR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2022-01-20",
        "kitAffecting": false,
        "source": {
          "url": "https://old.reddit.com/r/LeaguePBE/comments/ryl2ct/sona_vfx_update/",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2021-08-11",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/en-us/news/dev/quick-gameplay-thoughts-7-9/",
          "label": null
        }
      },
      {
        "type": "Visual and Gameplay Update",
        "date": "2014-07-30",
        "kitAffecting": true,
        "source": {
          "url": "http://na.leagueoflegends.com/en/champion-update/sona-maven-of-the-strings",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2011-03-14",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://forums.na.leagueoflegends.com/board/showthread.php?t=581422",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2021-08-11",
      "source": {
        "url": "https://na.leagueoflegends.com/en-us/news/dev/quick-gameplay-thoughts-7-9/",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Sona: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=JP0A3wLfFBg",
        "published": "2010-09-20",
        "duration": 330
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Sona Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=iwdSIlrw5Q4",
        "published": "2025-03-27",
        "duration": 180
      }
    ],
    "releaseDate": "2010-09-21"
  },
  {
    "id": "soraka",
    "key": "0016",
    "ddid": "Soraka",
    "name": "Soraka",
    "title": "Enfant des étoiles",
    "roles": {
      "sup": {
        "tier": "A",
        "wr": 50.68,
        "pr": 5.15,
        "ban": 2.15
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 2,
      "magic": 7
    },
    "class": "Soutien / Mage",
    "strengths": [
      "Soraka est une alliée puissante en combat, grâce à ses soins considérables qui soutiennent l'équipe.",
      "Utilisez Souhait pour sauver vos alliés d'une mort imminente, où qu'ils soient sur la carte.",
      "Équinoxe peut être utilisé pour efficacement garder vos ennemis à distance."
    ],
    "counters": [
      "Attaquez Soraka si elle vient sur la ligne de front pour soigner ses alliés.",
      "Profitez du long délai de récupération d'Équinoxe si Soraka s'en sert pour vous harceler.",
      "Il est plus utile de concentrer vos attaques sur Soraka que sur l'allié qu'elle soigne."
    ],
    "abilities": {
      "passive": {
        "name": "Salut",
        "description": "Soraka court plus vite en direction des alliés affaiblis à proximité.",
        "icon": "Soraka_Passive.png"
      },
      "q": {
        "name": "Appel de l'étoile",
        "description": "Une étoile s'abat à l'endroit ciblé, infligeant des dégâts magiques et ralentissant les ennemis. Si un champion ennemi est touché par Appel de l'étoile, Soraka récupère des PV.",
        "icon": "SorakaQ.png"
      },
      "w": {
        "name": "Infusion astrale",
        "description": "Soraka sacrifie une partie de ses PV pour soigner un autre champion allié.",
        "icon": "SorakaW.png"
      },
      "e": {
        "name": "Équinoxe",
        "description": "Crée une zone qui réduit au silence tous les ennemis s'y trouvant. Quand la zone disparaît, tous les ennemis qui s'y trouvent encore sont immobilisés.",
        "icon": "SorakaE.png"
      },
      "r": {
        "name": "Souhait",
        "description": "Soraka remplit ses alliés d'espoir, ce qui rend immédiatement des PV à tous les champions alliés et à elle-même.",
        "icon": "SorakaR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2024-09-25",
        "kitAffecting": false,
        "source": {
          "url": "https://www.youtube.com/watch?v=WEH1Mvv9aT4",
          "label": null
        }
      },
      {
        "type": "Visual and Gameplay Update",
        "date": "2014-09-25",
        "kitAffecting": true,
        "source": {
          "url": "http://na.leagueoflegends.com/en/champion-update/soraka-starchild",
          "label": null
        }
      },
      {
        "type": "Visual Update",
        "date": "2012-09-24",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/board/showthread.php?p=29436147",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2014-09-25",
      "source": {
        "url": "http://na.leagueoflegends.com/en/champion-update/soraka-starchild",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Soraka: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=KJ6f1nsoUTs",
        "published": "2012-09-26",
        "duration": 455
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Soraka Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=RUO4YuxWJaY",
        "published": "2025-11-07",
        "duration": 180
      }
    ],
    "releaseDate": "2009-02-21"
  },
  {
    "id": "swain",
    "key": "0050",
    "ddid": "Swain",
    "name": "Swain",
    "title": "Grand général noxien",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 49.69,
        "pr": 0.55,
        "ban": 1.57
      },
      "mid": {
        "tier": "A",
        "wr": 51.21,
        "pr": 0.64,
        "ban": 1.6
      },
      "adc": {
        "tier": "S",
        "wr": 52.56,
        "pr": 0.85,
        "ban": 1.61
      },
      "sup": {
        "tier": "C",
        "wr": 47.75,
        "pr": 2.6,
        "ban": 1.68
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 2,
      "magic": 9
    },
    "class": "Mage / Soutien",
    "strengths": [
      "Si vous avez du mal à immobiliser un adversaire avec Capture, essayez de la lancer sur vos ennemis quand ils sont près de leurs sbires, pour que l'explosion les surprenne.",
      "Sur votre voie, utilisez la perforation de Poigne mortifère pour blesser les adversaires sans risque.",
      "Œil de l'empire est difficile à utiliser. Attendez qu'une escarmouche éclate à un endroit de la carte, puis lancez Œil de l'empire pendant que les ennemis sont distraits ou entravés.",
      "Incarnation démoniaque rend Swain très difficile à tuer, mais les ennemis peuvent facilement s'en éloigner. Achetez des objets pouvant les ralentir si leur mobilité est trop importante."
    ],
    "counters": [
      "La compétence passive de Swain est très puissante si vous êtes immobilisé. Soyez prudent à proximité des ennemis capables de vous immobiliser.",
      "Une grande mobilité permet de contrer toutes les compétences de base de Swain : Poigne mortifère inflige plus de dégâts aux cibles les plus proches, Œil de l'empire a un très long délai et Capture n'est dangereuse qu'au retour.",
      "Acheter un objet doté de l'effet Hémorragie facilitera grandement l'élimination de Swain pendant son Incarnation démoniaque."
    ],
    "abilities": {
      "passive": {
        "name": "Nuée de corbeaux",
        "description": "Les corbeaux de Swain collectent des <i>fragments d'âme</i> qui lui rendent des PV et augmentent définitivement ses PV max.",
        "icon": "Swain_P.png"
      },
      "q": {
        "name": "Poigne mortifère",
        "description": "Swain tire plusieurs projectiles surnaturels qui traversent les ennemis. Les dégâts que subissent les ennemis augmentent avec le nombre de projectiles qui les touchent.",
        "icon": "SwainQ.png"
      },
      "w": {
        "name": "Œil de l'empire",
        "description": "Swain ouvre un œil démoniaque qui blesse et ralentit les ennemis. Les champions touchés sont révélés et octroient un Fragment d'âme à Swain.",
        "icon": "SwainW.png"
      },
      "e": {
        "name": "Capture",
        "description": "Swain tire une vague d'énergie démoniaque. Celle-ci revient ensuite vers lui et immobilise les ennemis touchés. Swain peut ensuite choisir d'attirer vers lui tous les champions immobilisés. Cette compétence a un délai de récupération plus court pendant Incarnation démoniaque.",
        "icon": "SwainE.png"
      },
      "r": {
        "name": "Incarnation démoniaque",
        "description": "Swain se transforme en démon et draine les PV des champions ennemis, sbires ennemis et monstres neutres proches. Swain peut lancer Éruption démoniaque pour provoquer une explosion de feu spirituel qui décime et ralentit les ennemis proches. Cette forme perdure tant que Swain draine les PV de champions ennemis.",
        "icon": "SwainR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Gameplay Update",
        "date": "2024-10-23",
        "kitAffecting": true,
        "source": {
          "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-14-21-notes/",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2022-04-27",
        "kitAffecting": true,
        "source": {
          "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-12-8-notes/#patch-champions",
          "label": null
        }
      },
      {
        "type": "Visual and Gameplay Update",
        "date": "2018-02-07",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/en/featured/champion-reveal-swain",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2016-05-04",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/mid-season-magic",
          "label": "Mages: Battlemages"
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2015-01-28",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://euw.leagueoflegends.com/en/news/game-updates/patch/patch-52-notes/",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2024-10-23",
      "source": {
        "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-14-21-notes/",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Swain | Gameplay – League of Legends",
        "url": "https://www.youtube.com/watch?v=ubmQywLGC3U",
        "published": "2018-02-06",
        "duration": 264
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Swain Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=Utt-sd2FJNY",
        "published": "2018-02-06",
        "duration": 264
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Swain Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=IMvc6cRIIkY",
        "published": "2025-06-14",
        "duration": 180
      }
    ],
    "releaseDate": "2010-10-05"
  },
  {
    "id": "sylas",
    "key": "0517",
    "ddid": "Sylas",
    "name": "Sylas",
    "title": "Révolutionnaire déchaîné",
    "roles": {
      "jgl": {
        "tier": "S",
        "wr": 50.56,
        "pr": 7.69,
        "ban": 17.47
      },
      "mid": {
        "tier": "B",
        "wr": 49.32,
        "pr": 6.85,
        "ban": 17.47
      },
      "sup": {
        "tier": "C",
        "wr": 47.41,
        "pr": 1.36,
        "ban": 17.14
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 3,
      "magic": 8
    },
    "class": "Mage / Assassin",
    "strengths": [
      "Attendez qu'il reste peu de PV à Sylas ou à votre ennemi pour profiter au maximum de Régicide.",
      "Intercalez une attaque de base entre chacune de vos compétences pour maximiser l'efficacité de Volée de pétricite.",
      "Les ultimes ennemis vous offrent de nouvelles options pour engager le combat ; utilisez-les intelligemment."
    ],
    "counters": [
      "La jauge de PV de Sylas peut être trompeuse ; méfiez-vous de son Régicide !",
      "Essayez de combattre Sylas lorsqu'il ne peut pas copier votre ultime."
    ],
    "abilities": {
      "passive": {
        "name": "Volée de pétricite",
        "description": "Après avoir lancé une compétence, Sylas stocke une charge de Volée de pétricite. Les attaques de base de Sylas dépensent une charge pour donner un coup de chaînes énergisé autour de lui, infligeant des dégâts magiques supplémentaires aux ennemis touchés. Tant que Sylas possède une charge de Volée de pétricite, sa vitesse d'attaque est augmentée.",
        "icon": "SylasP.png"
      },
      "q": {
        "name": "Croix du forçat",
        "description": "Sylas donne un coup en croisant ses chaînes, infligeant des dégâts magiques à l'endroit ciblé et ralentissant les ennemis. <br><br>Après un délai, une explosion d'énergie magique se produit à l'intersection des chaînes, infligeant des dégâts.",
        "icon": "SylasQ.png"
      },
      "w": {
        "name": "Régicide",
        "description": "Sylas se jette sur un ennemi pour infliger des dégâts et, contre des champions, récupérer des PV.",
        "icon": "SylasW.png"
      },
      "e": {
        "name": "Évasion / Enlèvement",
        "description": "Sylas se rue dans une direction. Sylas peut réactiver cette compétence pour lancer ses chaînes et se rapprocher de l'ennemi touché.",
        "icon": "SylasE.png"
      },
      "r": {
        "name": "Détournement",
        "description": "Sylas vole la compétence ultime de l'ennemi et peut la lancer librement.",
        "icon": "SylasR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Sylas | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=goa3km2kZk0",
        "published": "2019-01-24",
        "duration": 236
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Sylas Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=3U4WdutoYbI",
        "published": "2019-01-24",
        "duration": 236
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Sylas Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=Cbp2cCiCREU",
        "published": "2026-02-05",
        "duration": 180
      }
    ],
    "releaseDate": "2019-01-25"
  },
  {
    "id": "syndra",
    "key": "0134",
    "ddid": "Syndra",
    "name": "Syndra",
    "title": "Souveraine obscure",
    "roles": {
      "mid": {
        "tier": "A",
        "wr": 50.5,
        "pr": 8.53,
        "ban": 12.82
      },
      "adc": {
        "tier": "A",
        "wr": 50.12,
        "pr": 2.26,
        "ban": 12.78
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 2,
      "magic": 9
    },
    "class": "Mage",
    "strengths": [
      "Pour maximiser les dégâts de votre ultime, utilisez-le quand il y a de nombreuses sphères sur le champ de bataille.",
      "Après avoir touché un champion ennemi avec Force de la volonté, enchaînez avec Sphère noire. Il sera ralenti et aura du mal à l'éviter.",
      "Obtenez le rang 5 pour un de vos sorts aussi vite que possible pour gagner de puissants effets bonus."
    ],
    "counters": [
      "Prenez rapidement des bottes quand vous jouez contre Syndra, elles vous aideront à éviter nombre de ses sorts.",
      "Attaquez Syndra après qu'elle a utilisé Dispersion des faibles. Son délai de récupération est long et elle sera vulnérable.",
      "Au rang max, les sorts de Syndra gagnent des effets bonus et changent d'apparence."
    ],
    "abilities": {
      "passive": {
        "name": "Transcendance",
        "description": "Syndra collecte des éclats de courroux quand elle gagne des niveaux et quand elle blesse des ennemis, ce qui améliore ses compétences.<br><br><font color='#FF9900'>Sphère noire</font> : Syndra peut stocker une charge supplémentaire.<br><font color='#FF9900'>Force de la volonté</font> : dégâts bruts supplémentaires.<br><font color='#FF9900'>Dispersion des faibles</font> : largeur augmentée et ralentit toutes les cibles.<br><font color='#FF9900'>Déchaînement de puissance</font> : exécute les cibles dont les PV sont bas.",
        "icon": "SyndraPassive.png"
      },
      "q": {
        "name": "Sphère noire",
        "description": "Syndra invoque une sphère noire, infligeant des dégâts magiques. La sphère dure quelques secondes et peut être manipulée grâce aux autres compétences de Syndra.",
        "icon": "SyndraQ.png"
      },
      "w": {
        "name": "Force de la volonté",
        "description": "Syndra saisit et lance une sphère noire ou un sbire ennemi, infligeant des dégâts magiques et réduisant la vitesse de déplacement des ennemis.",
        "icon": "SyndraW.png"
      },
      "e": {
        "name": "Dispersion des faibles",
        "description": "Syndra repousse les ennemis et les sphères noires, infligeant des dégâts magiques. Les ennemis frappés par les sphères noires sont étourdis.",
        "icon": "SyndraE.png"
      },
      "r": {
        "name": "Déchaînement de puissance",
        "description": "Syndra bombarde un champion ennemi avec toutes ses sphères noires.",
        "icon": "SyndraR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Gameplay Update",
        "date": "2022-10-05",
        "kitAffecting": true,
        "source": {
          "url": "https://twitter.com/TheTruexy/status/1572245447573262336",
          "label": null
        }
      },
      {
        "type": "Visual (VFX) Update",
        "date": "2021-10-20",
        "kitAffecting": false,
        "source": {
          "url": "https://www.reddit.com/r/LeaguePBE/comments/q1fbfw/syndra_vfx_update/",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2016-05-04",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/mid-season-magic",
          "label": "Mages: Battlemages"
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2022-10-05",
      "source": {
        "url": "https://twitter.com/TheTruexy/status/1572245447573262336",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Syndra: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=YqI7N2R8tx4",
        "published": "2012-09-13",
        "duration": 353
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Syndra Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=bwtG9BcPSCI",
        "published": "2024-05-15",
        "duration": 180
      }
    ],
    "releaseDate": "2012-09-13"
  },
  {
    "id": "tahmkench",
    "key": "0223",
    "ddid": "TahmKench",
    "name": "Tahm Kench",
    "title": "Roi des rivières",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 49.53,
        "pr": 1.66,
        "ban": 1.94
      },
      "sup": {
        "tier": "B",
        "wr": 49.23,
        "pr": 2.16,
        "ban": 1.95
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 3,
      "magic": 6
    },
    "class": "Tank / Soutien",
    "strengths": [
      "Votre fonction la plus importante en tant que support est de protéger les alliés fragiles. Ne perdez pas de vue la portée et le délai de récupération de Dévoration et placez-vous en conséquence !",
      "Réfléchissez bien avant d'activer Peau épaisse. Il est bon de se servir du bouclier pour encaisser des dégâts, mais les soins peuvent parfois être bien plus utiles."
    ],
    "counters": [
      "Quand Tahm Kench utilise le bouclier de Peau épaisse, il renonce à des soins assez importants. N'oubliez pas qu'il ne cumulera plus de PV gris tant que Peau épaisse est en récupération. Sachez profiter de cette situation !",
      "Guettez la Plongée abyssale de Tahm Kench ; vous pouvez annuler sa canalisation avec des immobilisations."
    ],
    "abilities": {
      "passive": {
        "name": "Goût acquis",
        "description": "Tahm Kench met tout son poids dans ses attaques, permettant à ses PV totaux d'augmenter ses dégâts. Blesser des champions ennemis leur applique des effets <spellName>Goût acquis</spellName>. À 3 effets cumulés, Tahm Kench peut utiliser <spellName>Dévoration</spellName> sur un champion ennemi.",
        "icon": "TahmKenchP.png"
      },
      "q": {
        "name": "Coup de langue",
        "description": "Tahm Kench donne un coup de fouet avec sa langue, blessant et ralentissant la première unité touchée et récupérant des PV s'il touche un champion ennemi.<br><br>Cette compétence applique un effet <spellName>Goût acquis</spellName> sur les champions ennemis. Si le champion portait déjà 3 effets <spellName>Goût acquis</spellName>, il est étourdi et les effets sont consommés.",
        "icon": "TahmKenchQ.png"
      },
      "w": {
        "name": "Plongée abyssale",
        "description": "Tahm Kench plonge, puis réapparaît à l'endroit ciblé, blessant et projetant dans les airs tous les ennemis dans la zone.",
        "icon": "TahmKenchW.png"
      },
      "e": {
        "name": "Peau épaisse",
        "description": "<passive>Passive :</passive> Tahm Kench stocke un pourcentage des dégâts qu'il subit. En dehors des combats, il récupère des PV équivalents à une partie des dégâts stockés.<br><br><active>Active :</active> Tahm Kench convertit tous les dégâts stockés en bouclier temporaire.",
        "icon": "TahmKenchE.png"
      },
      "r": {
        "name": "Dévoration",
        "description": "Tahm Kench dévore un champion pendant quelques secondes, lui infligeant des dégâts magiques s'il s'agit d'un ennemi ou lui octroyant un bouclier s'il s'agit d'un allié.",
        "icon": "TahmKenchRWrapper.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Gameplay Update",
        "date": "2021-06-23",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/en-us/news/dev/quick-gameplay-thoughts-jan-15/",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2021-06-23",
      "source": {
        "url": "https://na.leagueoflegends.com/en-us/news/dev/quick-gameplay-thoughts-jan-15/",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Tahm Kench",
        "url": "https://www.youtube.com/watch?v=t8ujc3wMPIY",
        "published": "2015-07-08",
        "duration": 493
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Tahm Kench: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=VYlOFKLmiHA",
        "published": "2015-07-08",
        "duration": 493
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Tahm Kench Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=KkdXe56-KlQ",
        "published": "2026-03-09",
        "duration": 180
      }
    ],
    "releaseDate": "2015-07-09"
  },
  {
    "id": "taliyah",
    "key": "0163",
    "ddid": "Taliyah",
    "name": "Taliyah",
    "title": "Tisseuse de pierres",
    "roles": {
      "jgl": {
        "tier": "S",
        "wr": 51.2,
        "pr": 0.88,
        "ban": 0.35
      },
      "mid": {
        "tier": "B",
        "wr": 48.63,
        "pr": 1.38,
        "ban": 0.36
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 1,
      "magic": 8
    },
    "class": "Mage / Soutien",
    "strengths": [
      "Essayez de projeter les ennemis en direction de Défilage tellurique grâce à Poussée sismique.",
      "N'oubliez pas que rien ne vous oblige à passer votre temps sur le Mur de la tisseuse.",
      "Une fois que vous avez un Sceptre de Rylai, lancer Rafale filée sur les ennemis qui vous pourchassent est un excellent moyen de leur faire regretter leurs actes."
    ],
    "counters": [
      "Quand Taliyah lance Défilage tellurique sur sa voie, méfiez-vous de sa Poussée sismique. Si elle vous projette dans son champ de mines, vous risquez de subir de gros dégâts.",
      "La Rafale filée de Taliyah se lance dans une direction fixe. Si elle vous jette des pierres, esquivez latéralement !"
    ],
    "abilities": {
      "passive": {
        "name": "Surf tellurique",
        "description": "Taliyah augmente sa vitesse de déplacement lorsqu'elle est près des murs.",
        "icon": "Taliyah_Passive.png"
      },
      "q": {
        "name": "Rafale filée",
        "description": "Taliyah lance une rafale de pierres dans une direction ciblée tout en se déplaçant librement. Cela crée un sol ouvragé sous ses pieds. Si Taliyah lance Rafale filée en se trouvant sur un sol ouvragé, elle consomme ce sol et lance un rocher plus puissant qui ralentit les ennemis.",
        "icon": "TaliyahQ.png"
      },
      "w": {
        "name": "Poussée sismique",
        "description": "Taliyah provoque l'éruption d'une zone du sol, ce qui projette les ennemis dans la direction de son choix.",
        "icon": "TaliyahWVC.png"
      },
      "e": {
        "name": "Défilage tellurique",
        "description": "Taliyah crée un champ de mines ralentissant. Si des ennemis effectuent une ruée ou sont projetés par-dessus, les mines explosent et les étourdissent.",
        "icon": "TaliyahE.png"
      },
      "r": {
        "name": "Mur de la tisseuse",
        "description": "Taliyah crée un très long mur et surfe ensuite dessus.",
        "icon": "TaliyahR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Gameplay Update",
        "date": "2022-05-11",
        "kitAffecting": true,
        "source": {
          "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-12-9-notes/#patch-champions",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2022-05-11",
      "source": {
        "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-12-9-notes/#patch-champions",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Taliyah",
        "url": "https://www.youtube.com/watch?v=NSiY9b00gh0",
        "published": "2016-05-17",
        "duration": 406
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Taliyah: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=3-XQ0Jb2MRs",
        "published": "2016-05-17",
        "duration": 406
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Taliyah Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=t2LUfa66t9w",
        "published": "2026-02-27",
        "duration": 180
      }
    ],
    "releaseDate": "2016-05-18"
  },
  {
    "id": "talon",
    "key": "0091",
    "ddid": "Talon",
    "name": "Talon",
    "title": "Lame des ténèbres",
    "roles": {
      "jgl": {
        "tier": "S",
        "wr": 50.94,
        "pr": 6.29,
        "ban": 9.64
      },
      "mid": {
        "tier": "B",
        "wr": 49.37,
        "pr": 1.71,
        "ban": 9.55
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 9,
      "magic": 1
    },
    "class": "Assassin",
    "strengths": [
      "Servez-vous de Voie de l'assassin pour passer derrière l'ennemi et pouvoir utiliser Diplomatie noxienne en mêlée.",
      "Assaut ténébreux est un puissant moyen de fuite, mais vous pouvez également l'utiliser pour attaquer un groupe.",
      "N'oubliez pas de choisir votre cible avant le combat. Concentrer toutes les compétences de Talon sur une cible est très efficace, alors que les diviser entre plusieurs ennemis vous affaiblit grandement."
    ],
    "counters": [
      "Les attaques de Talon font toutes des dégâts physiques. Augmentez rapidement votre armure pour contrer ses dégâts.",
      "Talon s'appuie beaucoup sur Assaut ténébreux pour échapper à un combat. Quand il n'en bénéficie plus, il est beaucoup plus vulnérable.",
      "Talon peut changer de voie comme personne. Ne le perdez pas de vue ou poussez agressivement pour le forcer à rester sur sa voie."
    ],
    "abilities": {
      "passive": {
        "name": "Saignée fatale",
        "description": "Les compétences de Talon blessent les champions et les grands monstres (cumulable 3 fois). Quand Talon lance une attaque de base sur un champion portant 3 effets Blessure, ce champion se met à saigner et subit d'importants dégâts sur la durée.",
        "icon": "TalonP.png"
      },
      "q": {
        "name": "Diplomatie noxienne",
        "description": "Talon poignarde l'unité ciblée. S'il est en mêlée, cette attaque inflige des dégâts critiques. S'il est à distance, Talon saute sur la cible avant de la poignarder. Talon regagne des PV et le délai de récupération est réduit si la compétence tue la cible.",
        "icon": "TalonQ.png"
      },
      "w": {
        "name": "Ratissage",
        "description": "Talon projette une volée de lames qui reviennent ensuite vers lui, infligeant des dégâts physiques à chaque fois qu'elles transpercent un ennemi. En revenant, les lames infligent des dégâts supplémentaires et ralentissent les unités touchées.",
        "icon": "TalonW.png"
      },
      "e": {
        "name": "Voie de l'assassin",
        "description": "Talon saute par-dessus n'importe quel terrain ou bâtiment, jusqu'à une distance maximale. Cette compétence a un court délai de récupération, mais le terrain franchi a un long délai de récupération.",
        "icon": "TalonE.png"
      },
      "r": {
        "name": "Assaut ténébreux",
        "description": "Talon projette des lames autour de lui et devient invisible, augmentant sa vitesse de déplacement. Quand Talon redevient visible, les lames reviennent vers lui. Chaque fois que les lames se déplacent, Assaut ténébreux inflige des dégâts physiques aux ennemis touchés par au moins une lame.",
        "icon": "TalonR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Class-scale Update",
        "date": "2016-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/preseason-2017/assassins",
          "label": "Slayers: Assassins"
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2016-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/game-updates/patch/patch-622-notes",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-11-20",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-420-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2016-11-10",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/preseason-2017/assassins",
        "label": "Slayers: Assassins"
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus de la présaison sur Talon | Gameplay – League of Legends",
        "url": "https://www.youtube.com/watch?v=c6DmsJNA-94",
        "published": "2016-11-03",
        "duration": 163
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Talon: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=eKdX7aB3TRk",
        "published": "2011-08-24",
        "duration": 391
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Talon Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=PEVbcqQ1O4M",
        "published": "2026-06-08",
        "duration": 180
      }
    ],
    "releaseDate": "2011-08-24"
  },
  {
    "id": "taric",
    "key": "0044",
    "ddid": "Taric",
    "name": "Taric",
    "title": "Bouclier de Valoran",
    "roles": {
      "sup": {
        "tier": "S",
        "wr": 52.6,
        "pr": 1.4,
        "ban": 0.31
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 4,
      "magic": 5
    },
    "class": "Soutien / Tank",
    "strengths": [
      "La réduction des délais via Plastronneur rend les objets de réduction des délais, tels que Cœur gelé, Gantelet givrant et Visage spirituel, extrêmement puissants sur Taric.",
      "Utiliser Bénédiction stellaire avec peu de charges rend son coût en mana moins rentable, mais cela peut grandement augmenter les dégâts de Taric via Plastronneur.",
      "N'attendez pas toujours le dernier moment pour lancer Lumière cosmique, en risquant de perdre un allié pendant le délai du sort. Il peut être plus utile de le lancer dès que vous savez qu'un combat d'équipes va éclater."
    ],
    "counters": [
      "L'ultime de Taric, Lumière cosmique, a un long délai avant son application. Estimez vite s'il est préférable de désengager le combat ou de tuer les alliés de Taric avant l'application de ce sort.",
      "Grâce à Plastronneur, Taric réduit les délais de récupération de ses sorts en lançant des attaques de base sur les ennemis. Essayez de le kiter pendant les combats d'équipes et de le punir quand il approche d'une vague de sbires."
    ],
    "abilities": {
      "passive": {
        "name": "Plastronneur",
        "description": "Lancer des compétences renforce les 2 prochaines attaques de base de Taric, leur permettant d'infliger des dégâts magiques supplémentaires, de réduire les délais de récupération de ses compétences et de s'enchaîner rapidement.",
        "icon": "Taric_Passive.png"
      },
      "q": {
        "name": "Bénédiction stellaire",
        "description": "Rend des PV aux champions alliés proches en fonction du nombre de charges stockées. Les attaques renforcées par Plastronneur octroient une charge de Bénédiction stellaire.",
        "icon": "TaricQ.png"
      },
      "w": {
        "name": "Bastion",
        "description": "Augmente passivement l'armure de Taric et de tout champion allié affecté par Bastion.<br><br>À l'activation, offre un bouclier à un allié et ce dernier bénéficie de l'effet Bastion aussi longtemps qu'il reste près de Taric. Les compétences de Taric se lancent également depuis l'allié affecté par Bastion.",
        "icon": "TaricW.png"
      },
      "e": {
        "name": "Éblouissement",
        "description": "Taric prépare un rayon de lumière stellaire qui, après un bref délai, inflige des dégâts magiques et étourdit les ennemis.",
        "icon": "TaricE.png"
      },
      "r": {
        "name": "Lumière cosmique",
        "description": "Après un délai, nimbe les champions alliés proches d'énergie cosmique, les rendant invulnérables pendant un court instant.",
        "icon": "TaricR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2016-04-19",
        "kitAffecting": true,
        "source": {
          "url": "http://na.leagueoflegends.com/en/page/champion-update-taric-shield-valoran",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2015-03-12",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://euw.leagueoflegends.com/en/news/game-updates/patch/patch-55-notes/",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2016-04-19",
      "source": {
        "url": "http://na.leagueoflegends.com/en/page/champion-update-taric-shield-valoran",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Taric",
        "url": "https://www.youtube.com/watch?v=q0G5oNdGN0w",
        "published": "2016-04-18",
        "duration": 467
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Taric: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=Y91qo99osLI",
        "published": "2016-04-18",
        "duration": 467
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Taric Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=S4jlLS11ub8",
        "published": "2025-04-27",
        "duration": 180
      }
    ],
    "releaseDate": "2009-08-19"
  },
  {
    "id": "teemo",
    "key": "0017",
    "ddid": "Teemo",
    "name": "Teemo",
    "title": "Éclaireur de Bandle",
    "roles": {
      "top": {
        "tier": "S",
        "wr": 51.19,
        "pr": 4.12,
        "ban": 6.36
      },
      "sup": {
        "tier": "B",
        "wr": 48.51,
        "pr": 0.54,
        "ban": 5.99
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 5,
      "magic": 7
    },
    "class": "Tireur / Mage",
    "strengths": [
      "Les champignons de Teemo permettent de farmer les sbires très efficacement.",
      "Placez-les à des positions stratégiques de la carte, par exemple près du Dragon ou du baron Nashor, pour en profiter pleinement lorsque l'ennemi essaie de les tuer."
    ],
    "counters": [
      "Tir toxique de Teemo punit les joueurs qui reculent après avoir été touchés. Restez à distance jusqu'à ce que vous soyez prêt.",
      "Il peut être utile d'utiliser Brouilleur oraculaire pour détruire ses champignons autour des zones clés."
    ],
    "abilities": {
      "passive": {
        "name": "Guérilla",
        "description": "Si Teemo reste immobile et sans agir pendant un court instant, il devient invisible indéfiniment. Dans les herbes hautes, Teemo peut activer et maintenir son invisibilité tout en se déplaçant. Quand il quitte son invisibilité, Teemo profite de l'Effet de surprise, augmentant sa vitesse d'attaque pendant quelques secondes.",
        "icon": "TeemoPassive.png"
      },
      "q": {
        "name": "Fléchette aveuglante",
        "description": "Un puissant venin obscurcit la vue de l'ennemi, infligeant des dégâts à la cible et l'aveuglant pendant la durée de l'effet.",
        "icon": "TeemoQ.png"
      },
      "w": {
        "name": "Vélocité",
        "description": "La vitesse de déplacement de Teemo est passivement augmentée jusqu'à ce qu'il soit frappé par un champion ennemi ou une tourelle ennemie. Teemo peut sprinter pour gagner un bonus temporaire en vitesse de déplacement qui n'est pas annulé si Teemo est touché.",
        "icon": "TeemoW.png"
      },
      "e": {
        "name": "Tir toxique",
        "description": "Toutes les attaques de Teemo empoisonnent la cible, infligeant des dégâts %i:OnHit% <OnHit>à l'impact</OnHit> puis chaque seconde pendant 4 sec.",
        "icon": "TeemoE.png"
      },
      "r": {
        "name": "Piège nocif",
        "description": "Teemo se sert d'un des champignons stockés dans son sac à dos pour lancer un piège explosif. Si un ennemi marche sur le piège, un nuage empoisonné s'en échappe, ralentit les ennemis et leur inflige des dégâts sur la durée. Les champignons lancés sur d'autres champignons rebondissent et ont ainsi une plus grande portée.",
        "icon": "TeemoR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Art and Sustainability Update",
        "date": "2024-10-09",
        "kitAffecting": false,
        "source": {
          "url": "https://www.leagueoflegends.com/en-us/news/dev/dev-scouting-out-teemo/",
          "label": null
        }
      },
      {
        "type": "Visual (VFX and SFX) Update",
        "date": "2018-12-05",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://boards.na.leagueoflegends.com/en/c/developer-corner/UfFT2huQ-visual-effects-update-teemo",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2015-04-08",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-58-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Galio - Colosse",
        "url": "https://www.youtube.com/watch?v=cVqJ1eC4p7k",
        "published": "2017-03-21",
        "duration": 340
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Teemo: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=Qj48qHM1MXE",
        "published": "2011-10-11",
        "duration": 417
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Teemo Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=fXhL_uYHIs4",
        "published": "2025-02-12",
        "duration": 180
      }
    ],
    "releaseDate": "2009-02-21"
  },
  {
    "id": "thresh",
    "key": "0412",
    "ddid": "Thresh",
    "name": "Thresh",
    "title": "Garde aux chaînes",
    "roles": {
      "sup": {
        "tier": "S",
        "wr": 51.73,
        "pr": 14.9,
        "ban": 11.53
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 5,
      "magic": 6
    },
    "class": "Soutien / Tank",
    "strengths": [
      "La communication est essentielle quand vous utilisez la lanterne de Thresh. Informez vos alliés de votre manière de l'utiliser.",
      "Les compétences Peine capitale et Fauchage peuvent être combinées pour effectuer de puissantes actions.",
      "Thresh peut aussi collecter les âmes des unités qu'il n'a pas tuées. Positionnez-vous de façon à être près des morts pour maximiser votre collecte."
    ],
    "counters": [
      "La compétence Peine capitale de Thresh a un long délai d'incantation. Dès que vous voyez l'incantation commencer, esquivez.",
      "Briser volontairement un mur de La cage peut aider un allié vulnérable à s'échapper.",
      "La défense et les dégâts de Thresh reposent sur sa capacité à collecter les âmes. Tentez de le punir lorsqu'il tente de les récupérer."
    ],
    "abilities": {
      "passive": {
        "name": "Damnation",
        "description": "Thresh peut collecter les âmes des ennemis qui meurent près de lui, augmentant définitivement son armure et sa puissance.",
        "icon": "Thresh_Passive.png"
      },
      "q": {
        "name": "Peine capitale",
        "description": "Thresh ligote un ennemi dans ses chaînes et l'attire vers lui. Activer cette compétence une deuxième fois attire Thresh vers l'ennemi.",
        "icon": "ThreshQ.png"
      },
      "w": {
        "name": "Lien des ténèbres",
        "description": "Thresh lance une lanterne qui protège les champions alliés proches contre les dégâts. Les alliés peuvent cliquer sur la lanterne pour se ruer vers Thresh.",
        "icon": "ThreshW.png"
      },
      "e": {
        "name": "Fauchage",
        "description": "Les attaques de Thresh se chargent, infligeant davantage de dégâts s'il attend plus entre les attaques. À l'activation, Thresh effectue un fauchage avec sa chaîne, envoyant tous les ennemis touchés dans la direction du coup.",
        "icon": "ThreshE.png"
      },
      "r": {
        "name": "La cage",
        "description": "Une prison dont les murs ralentissent et blessent les ennemis qui les brisent.",
        "icon": "ThreshRPenta.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2020-01-08",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://boards.na.leagueoflegends.com/en/c/developer-corner/ZRt5Mu1t-thresh-vfx-update",
          "label": null
        }
      }
    ],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Thresh: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=Sv95nBi7ulQ",
        "published": "2013-01-23",
        "duration": 356
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Thresh Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=bBE3tEMaaq4",
        "published": "2025-05-11",
        "duration": 180
      }
    ],
    "releaseDate": "2013-01-23"
  },
  {
    "id": "tristana",
    "key": "0018",
    "ddid": "Tristana",
    "name": "Tristana",
    "title": "Canonnière yordle",
    "roles": {
      "mid": {
        "tier": "C",
        "wr": 47.94,
        "pr": 0.97,
        "ban": 5.83
      },
      "adc": {
        "tier": "S",
        "wr": 51.42,
        "pr": 9.28,
        "ban": 5.96
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 9,
      "magic": 5
    },
    "class": "Tireur / Assassin",
    "strengths": [
      "L'arme énorme de Tristana lui permet de tirer de très loin. Profitez-en pour garder les ennemis à distance et les empêcher de vous toucher.",
      "Utilisez Saut roquette après avoir accumulé les Charges explosives sur un ennemi pour l'achever avec une masse de dégâts.",
      "Utilisez Tir rapide pour accumuler plus facilement les Charges explosives sur les champions ennemis."
    ],
    "counters": [
      "Si vous voyez Tristana activer Tir rapide dans un combat, étourdissez-la et reculez jusqu'à la fin de son sort.",
      "Sur votre voie, restez à distance de vos sbires pour subir moins de dégâts collatéraux de Charge explosive."
    ],
    "abilities": {
      "passive": {
        "name": "Tir de précision",
        "description": "Augmente la portée d'attaque de Tristana quand elle gagne un niveau.",
        "icon": "Tristana_Passive.png"
      },
      "q": {
        "name": "Tir rapide",
        "description": "Tristana tire plus rapidement avec son arme ; sa vitesse d'attaque est augmentée temporairement.",
        "icon": "TristanaQ.png"
      },
      "w": {
        "name": "Saut roquette",
        "description": "Tristana pointe son arme vers le sol et tire pour se propulser jusqu'à une destination éloignée, infligeant des dégâts aux unités proches et les ralentissant pendant un court instant à l'atterrissage.",
        "icon": "TristanaW.png"
      },
      "e": {
        "name": "Charge explosive",
        "description": "Lorsque Tristana élimine une unité, ses projectiles explosent et infligent des dégâts aux ennemis proches. Peut être activé pour placer sur une cible ennemie une bombe qui explose après un court moment, infligeant des dégâts aux unités proches.",
        "icon": "TristanaE.png"
      },
      "r": {
        "name": "Tir à impact",
        "description": "Tristana charge un énorme boulet de canon dans son arme et tire sur une unité ennemie, ce qui inflige des dégâts magiques et repousse la cible. Si la cible porte une Charge explosive, le rayon de déflagration de la charge est doublé.",
        "icon": "TristanaR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Gameplay Update",
        "date": "2024-09-25",
        "kitAffecting": true,
        "source": {
          "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-14-19-notes/",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2015-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
          "label": "Marksmen"
        }
      },
      {
        "type": "Visual and Gameplay Update",
        "date": "2015-01-28",
        "kitAffecting": true,
        "source": {
          "url": "http://na.leagueoflegends.com/en/news/champions-skins/champion-update/champion-update-tristana",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2024-09-25",
      "source": {
        "url": "https://www.leagueoflegends.com/en-us/news/game-updates/patch-14-19-notes/",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur : Tristana",
        "url": "https://www.youtube.com/watch?v=5DQkB-3no7A",
        "published": "2015-01-30",
        "duration": 511
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Tristana: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=633CHC6TTYY",
        "published": "2015-01-30",
        "duration": 512
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Tristana Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=bitgH9BfsIk",
        "published": "2025-03-15",
        "duration": 180
      }
    ],
    "releaseDate": "2009-02-21"
  },
  {
    "id": "trundle",
    "key": "0048",
    "ddid": "Trundle",
    "name": "Trundle",
    "title": "Roi des trolls",
    "roles": {
      "top": {
        "tier": "B",
        "wr": 48.84,
        "pr": 1.8,
        "ban": 0.44
      },
      "jgl": {
        "tier": "A",
        "wr": 50.7,
        "pr": 1.06,
        "ban": 0.43
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 7,
      "magic": 2
    },
    "class": "Combattant / Tank",
    "strengths": [
      "Trundle excelle au combat dans son Royaume gelé. Attirez-y les ennemis.",
      "Utilisez Soumission pour affaiblir un tank ennemi puissant ou créer une cible sur laquelle votre équipe doit se concentrer.",
      "Morsure permet de réduire les dégâts physiques des ennemis, concentrez-la sur les ennemis qui en infligent."
    ],
    "counters": [
      "Trundle est très puissant en combat localisé. Essayez de le faire sortir de son Royaume gelé.",
      "Faites en sorte de quitter sa Montagne de glace dès que possible car elle vous ralentit beaucoup."
    ],
    "abilities": {
      "passive": {
        "name": "Tribut du roi",
        "description": "Quand une unité ennemie meurt près de Trundle, il récupère un pourcentage des PV max de celle-ci.",
        "icon": "Trundle_Passive.png"
      },
      "q": {
        "name": "Morsure",
        "description": "Trundle mord un ennemi, lui infligeant des dégâts, le ralentissant un court instant et drainant ses dégâts d'attaque.",
        "icon": "TrundleTrollSmash.png"
      },
      "w": {
        "name": "Royaume gelé",
        "description": "Trundle s'approprie la zone cible, augmentant sa vitesse d'attaque, sa vitesse de déplacement et les soins qu'il reçoit de toutes les sources.",
        "icon": "trundledesecrate.png"
      },
      "e": {
        "name": "Montagne de glace",
        "description": "Trundle crée une montagne de glace sur la zone cible, ce qui bloque le passage et ralentit les unités ennemies proches.",
        "icon": "TrundleCircle.png"
      },
      "r": {
        "name": "Soumission",
        "description": "Trundle vole immédiatement un pourcentage des PV, de l'armure et de la résistance magique de sa cible. Ensuite, le nombre de PV, de points d'armure et de résistance magique volés double en 4 sec.",
        "icon": "TrundlePain.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2013-04-29",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/board/showthread.php?t=3297186",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2013-04-29",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/board/showthread.php?t=3297186",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Trundle: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=cg0-Kw9Iozw",
        "published": "2013-04-29",
        "duration": 316
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Trundle Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=CzMjqFOXi6g",
        "published": "2024-12-30",
        "duration": 180
      }
    ],
    "releaseDate": "2010-12-01"
  },
  {
    "id": "tryndamere",
    "key": "0023",
    "ddid": "Tryndamere",
    "name": "Tryndamere",
    "title": "Roi barbare",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 50.39,
        "pr": 3.17,
        "ban": 2.49
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 10,
      "magic": 2
    },
    "class": "Combattant / Assassin",
    "strengths": [
      "Retarder l'utilisation de Rage inépuisable peut souvent pousser le champion ennemi à prendre des risques pour vous tuer.",
      "Soif de sang est très utile pour soigner Tryndamere ; utilisez ses charges avant qu'elles ne disparaissent.",
      "Si l'ennemi accumule les points d'armure, procurez-vous des objets comme Dernier souffle ou Lame spectre de Youmuu."
    ],
    "counters": [
      "Essayez de harceler rapidement Tryndamere pour qu'il ne puisse pas tuer de sbire et se soigner avec Soif de sang.",
      "N'oubliez pas que Tryndamere ne peut vous ralentir que si vous lui tournez le dos.",
      "Les dégâts de Tryndamere sont essentiellement physiques. S'il devient trop puissant, envisagez d'acheter une Cotte épineuse."
    ],
    "abilities": {
      "passive": {
        "name": "Vague de violence",
        "description": "Tryndamere gagne de la Fureur à chaque attaque, coup critique et coup de grâce qu'il inflige. La Fureur augmente passivement ses chances de coup critique et elle peut être utilisée par sa compétence Soif de sang.",
        "icon": "Tryndamere_Passive.png"
      },
      "q": {
        "name": "Soif de sang",
        "description": "Tryndamere s'épanouit lors des combats, ce qui accroît ses dégâts d'attaque au fur et à mesure qu'il subit des blessures. Il peut lancer Soif de sang pour consommer sa Fureur et se soigner.",
        "icon": "TryndamereQ.png"
      },
      "w": {
        "name": "Moquerie",
        "description": "Tryndamere lance un hurlement, réduisant les dégâts d'attaque des champions proches. De plus, les ennemis ayant le dos tourné voient leur vitesse de déplacement être réduite.",
        "icon": "TryndamereW.png"
      },
      "e": {
        "name": "Balafre",
        "description": "Tryndamere lance un coup de taille vers une unité ciblée, infligeant des dégâts aux ennemis sur son chemin.",
        "icon": "TryndamereE.png"
      },
      "r": {
        "name": "Rage inépuisable",
        "description": "La soif de combattre de Tryndamere devient si puissante qu'il ne peut pas mourir, quelles que soient les blessures qu'il subit.",
        "icon": "UndyingRage.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2019-06-12",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://boards.na.leagueoflegends.com/en/c/developer-corner/cRIFiyaO-vfx-updates-for-amumu-lulu-tryndamere-and-ziggs",
          "label": null
        }
      },
      {
        "type": "Visual and Gameplay Update",
        "date": "2011-07-25",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/board/showthread.php?t=1016177",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2011-07-25",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/board/showthread.php?t=1016177",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Tryndamere: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=VmXEnxyVcs0",
        "published": "2011-08-04",
        "duration": 432
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Tryndamere Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=VVpYj5ct-tQ",
        "published": "2025-03-17",
        "duration": 180
      }
    ],
    "releaseDate": "2009-05-01"
  },
  {
    "id": "twistedfate",
    "key": "0004",
    "ddid": "TwistedFate",
    "name": "Twisted Fate",
    "title": "Maître des cartes",
    "roles": {
      "mid": {
        "tier": "A",
        "wr": 51.3,
        "pr": 4.99,
        "ban": 1.05
      }
    },
    "damageType": "Mixte",
    "dmgRating": {
      "attack": 6,
      "magic": 6
    },
    "class": "Mage / Tireur",
    "strengths": [
      "Agissez en coordination avec vos alliés et utilisez Destinée au moment idéal pour piéger les ennemis.",
      "Les personnages furtifs peuvent souvent fuir le combat quand ils n'ont plus beaucoup de PV. Tirez avantage de Destinée pour les révéler et les éliminer.",
      "Twisted Fate peut être un bon DPS physique ou magique, ce qui lui permet d'avoir sa place dans bon nombre d'équipes."
    ],
    "counters": [
      "Veillez à échapper aux Atouts quand votre champion n'a pas assez de PV pour se permettre d'être touché.",
      "Si vos PV sont bas, mettez-vous à l'abri dès que la compétence Destinée est lancée. Ainsi, vous pourrez éviter d'éventuels ganks."
    ],
    "abilities": {
      "passive": {
        "name": "Dé pipé",
        "description": "Quand il tue une unité, Twisted Fate lance son dé « porte-bonheur » et reçoit entre 1 et 6 PO supplémentaires.",
        "icon": "Cardmaster_SealFate.png"
      },
      "q": {
        "name": "Atouts",
        "description": "Twisted Fate tire trois cartes qui infligent des dégâts à toutes les unités qu'elles transpercent.",
        "icon": "WildCards.png"
      },
      "w": {
        "name": "Bonne pioche",
        "description": "Twisted Fate choisit une carte dans son paquet et l'utilise pour l'attaque suivante, gagnant des effets supplémentaires.",
        "icon": "PickACard.png"
      },
      "e": {
        "name": "Paquet",
        "description": "Twisted Fate inflige des dégâts supplémentaires toutes les 4 attaques. En outre, sa vitesse d'attaque est augmentée.",
        "icon": "CardmasterStack.png"
      },
      "r": {
        "name": "Destinée",
        "description": "Twisted Fate prédit le destin de ses ennemis, révélant les champions ennemis et permettant d'utiliser Portail, ce qui téléporte Twisted Fate à un endroit de la carte en 1.5 sec.",
        "icon": "Destiny.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2022-05-25",
        "kitAffecting": false,
        "source": {
          "url": "https://www.reddit.com/r/LeaguePBE/comments/umrfgf/twisted_fate_vfx_update/",
          "label": null
        }
      },
      {
        "type": "Visual Update",
        "date": "2012-10-16",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/board/showthread.php?t=2634351",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2010-03-10",
        "kitAffecting": true,
        "source": {
          "url": "https://www.youtube.com/watch?v=B8Ai_Aw-5fc",
          "label": "Twisted Fate: Champion Spotlight"
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2010-03-10",
      "source": {
        "url": "https://www.youtube.com/watch?v=B8Ai_Aw-5fc",
        "label": "Twisted Fate: Champion Spotlight"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Twisted Fate: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=B8Ai_Aw-5fc",
        "published": "2010-06-14",
        "duration": 388
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Twisted Fate Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=w2Yvpi3Oyxg",
        "published": "2025-06-25",
        "duration": 180
      }
    ],
    "releaseDate": "2009-02-21"
  },
  {
    "id": "twitch",
    "key": "0029",
    "ddid": "Twitch",
    "name": "Twitch",
    "title": "Semeur de peste",
    "roles": {
      "adc": {
        "tier": "A",
        "wr": 51.19,
        "pr": 5.64,
        "ban": 6.75
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 9,
      "magic": 3
    },
    "class": "Tireur / Assassin",
    "strengths": [
      "La vitesse d'attaque de Twitch est une des plus élevées du jeu. Essayez des objets qui appliquent des effets, comme Couperet noir ou Au bout du rouleau.",
      "Contamination dispose d'une très longue portée ; appliquez autant d'effets Venin mortel que possible avant de l'utiliser.",
      "Vous pouvez rattraper un ennemi hors de portée d'attaque avec Dose de venin."
    ],
    "counters": [
      "Twitch est fragile. Travaillez avec des alliés pour vous concentrer sur lui quand il n'est plus camouflé.",
      "Les boucliers antisorts ne bloquent pas les dégâts de Venin mortel, mais parent les effets que Twitch peut déclencher grâce à ces dégâts.",
      "Si vous pensez que Twitch a quitté sa voie, prévenez vos équipiers qu'il a disparu."
    ],
    "abilities": {
      "passive": {
        "name": "Venin mortel",
        "description": "Les attaques de base de Twitch contaminent sa cible %i:OnHit% <OnHit>à l'impact</OnHit>, lui infligeant des dégâts bruts chaque seconde.",
        "icon": "Twitch_Passive.png"
      },
      "q": {
        "name": "Embuscade",
        "description": "Twitch se camoufle pendant un court instant et sa vitesse de déplacement est augmentée. Quand il quitte son camouflage, sa vitesse d'attaque est augmentée pendant un court instant.<br><br>Quand un champion ennemi affecté par Venin mortel meurt, le délai de récupération d'Embuscade prend fin.",
        "icon": "TwitchHideInShadows.png"
      },
      "w": {
        "name": "Dose de venin",
        "description": "Twitch projette une dose de venin qui explose sur une zone, ralentissant les cibles et leur infligeant Venin mortel.",
        "icon": "TwitchVenomCask.png"
      },
      "e": {
        "name": "Contamination",
        "description": "Twitch contamine encore plus les ennemis empoisonnés avec de terribles maladies.",
        "icon": "TwitchExpunge.png"
      },
      "r": {
        "name": "Panique",
        "description": "Twitch libère toute la puissance de son arbalète, tirant des carreaux à longue portée qui transpercent tous les ennemis touchés.",
        "icon": "TwitchFullAutomatic.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Class-scale Update",
        "date": "2015-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
          "label": "Marksmen"
        }
      },
      {
        "type": "Visual Update",
        "date": "2014-04-02",
        "kitAffecting": false,
        "source": {
          "url": "http://na.leagueoflegends.com/en/news/champions-skins/champion-relaunch/twitchs-update-skitters-view",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2012-07-18",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://forums.eune.leagueoflegends.com/board/showthread.php?t=466019&page=1#post4624459",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2015-11-10",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
        "label": "Marksmen"
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur la présaison 2022 | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=8mmODQ9LXXA",
        "published": "2021-11-16",
        "duration": 204
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Twitch: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=cFtH_wFJBLs",
        "published": "2012-07-18",
        "duration": 394
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Twitch Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=0iKNMn0ME3I",
        "published": "2025-07-06",
        "duration": 180
      }
    ],
    "releaseDate": "2009-05-01"
  },
  {
    "id": "udyr",
    "key": "0077",
    "ddid": "Udyr",
    "name": "Udyr",
    "title": "Gardien des esprits",
    "roles": {
      "jgl": {
        "tier": "A",
        "wr": 51.45,
        "pr": 2.24,
        "ban": 1.12
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 4
    },
    "class": "Combattant / Tank",
    "strengths": [
      "Udyr est l'un des meilleurs junglers du jeu. Profitez de cette situation pour donner un grand avantage en XP et contrôle de la carte."
    ],
    "counters": [
      "Les capacités d'Udyr à distance sont limitées ; essayez de garder vos distances.",
      "Quand Udyr éveille une compétence pour la rendre plus puissante, il ne peut pas en éveiller une autre pendant quelque temps."
    ],
    "abilities": {
      "passive": {
        "name": "Canalisation des esprits",
        "description": "Udyr possède quatre compétences de base qu'il peut utiliser pour changer de posture. Réactiver une compétence renouvelle ses effets et en ajoute d'autres. De plus, après avoir utilisé une compétence, les deux prochaines attaques d'Udyr gagnent de la vitesse d'attaque.",
        "icon": "Udyr_P.png"
      },
      "q": {
        "name": "Griffe sauvage",
        "description": "Udyr gagne de la vitesse d'attaque et ses deux prochaines attaques infligent des dégâts physiques supplémentaires. Réactivation : Udyr gagne encore plus de vitesse d'attaque et ses deux prochaines attaques font tomber la foudre sur la cible.",
        "icon": "UdyrQ.png"
      },
      "w": {
        "name": "Cape de fer",
        "description": "Udyr gagne un bouclier et ses deux prochaines attaques lui rendent des PV. Réactivation : Udyr gagne un bouclier encore plus puissant et récupère des PV selon ses PV max en quelques secondes.",
        "icon": "UdyrW.png"
      },
      "e": {
        "name": "Piétinement flamboyant",
        "description": "Udyr gagne de la vitesse de déplacement et sa première attaque contre chaque cible étourdit celle-ci. Réactivation : Udyr gagne encore plus de vitesse de déplacement et devient immunisé contre les effets immobilisants pendant quelques secondes.",
        "icon": "UdyrE.png"
      },
      "r": {
        "name": "Tempête spirituelle",
        "description": "Udyr s'entoure d'une tempête glaciale, blessant et ralentissant les ennemis proches. Réactivation : Udyr renforce et libère la tempête. Elle suit alors les ennemis et inflige des dégâts supplémentaires.",
        "icon": "UdyrR.png"
      }
    },
    "sourceNotes": [
      {
        "field": "strengths",
        "note": "Conseil officiel « Les dégâts sont infligés au bouclier de la tortue après calcul des réductions. Acheter des objets de défense peut grandement améliorer votre survie. » — nomme « tortue », absent du kit actuel (noms et descriptions des sorts, Data Dragon 16.17.1) et des objets actuels (item.json) : conseil non affiché.",
        "url": "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
        "retrieved": "2026-09-08"
      }
    ],
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2022-08-24",
        "kitAffecting": true,
        "source": {
          "url": "https://www.leagueoflegends.com/en-us/news/dev/dev-kicking-off-udyr-s-vgu/",
          "label": null
        }
      },
      {
        "type": "Visual (VFX) Update",
        "date": "2020-07-22",
        "kitAffecting": false,
        "source": {
          "url": "https://www.reddit.com/r/LeaguePBE/comments/hn0vih/ahri_and_udyr_vfx_updates/",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-11-20",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-420-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2022-08-24",
      "source": {
        "url": "https://www.leagueoflegends.com/en-us/news/dev/dev-kicking-off-udyr-s-vgu/",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Udyr: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=dK4PwnV59ik",
        "published": "2010-05-07",
        "duration": 378
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Udyr Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=OKI-yBdLo54",
        "published": "2026-06-16",
        "duration": 180
      }
    ],
    "releaseDate": "2009-12-02"
  },
  {
    "id": "urgot",
    "key": "0006",
    "ddid": "Urgot",
    "name": "Urgot",
    "title": "Broyeur",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 50.94,
        "pr": 2.43,
        "ban": 0.79
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 3
    },
    "class": "Combattant / Tank",
    "strengths": [
      "Prêtez attention aux délais de récupération de vos jambes, car celles-ci contribuent fortement à vos dégâts.",
      "Touchez une cible avec Torpille corrosive ou Mépris pour la verrouiller ensuite avec Géhenne, ce qui est idéal pour tirer avec plusieurs jambes.",
      "Gardez Règne de la terreur pour les ennemis qui sont sûrs de mourir. C'est particulièrement efficace contre les fuyards."
    ],
    "counters": [
      "Urgot compte beaucoup sur ses jambes pour abattre ses ennemis. Elles tirent quand il attaque dans leur direction et elles ont chacune un délai de récupération. Évitez de vous faire toucher par plusieurs tirs.",
      "Urgot peut infliger et absorber d'énormes dégâts avec Géhenne, mais il se déplace alors moins vite.",
      "Si vous êtes touché par Règne de la terreur, faites tout votre possible pour rester au-dessus du seuil d'exécution (25% de vos PV max) jusqu'à la fin de l'effet."
    ],
    "abilities": {
      "passive": {
        "name": "Flammes purificatrices",
        "description": "Les attaques de base et Géhenne d'Urgot font jaillir des jets de flammes de ses jambes, infligeant des dégâts physiques.",
        "icon": "Urgot_Passive.png"
      },
      "q": {
        "name": "Torpille corrosive",
        "description": "Tire une torpille dans la zone ciblée. L'explosion inflige des dégâts physiques aux ennemis et les ralentit.",
        "icon": "UrgotQ.png"
      },
      "w": {
        "name": "Géhenne",
        "description": "Urgot ralentit tout en déchargeant son arme sur les ennemis proches. Il vise en priorité les champions ennemis qu'il a récemment frappés avec d'autres compétences et il déclenche Flammes purificatrices.",
        "icon": "UrgotW.png"
      },
      "e": {
        "name": "Mépris",
        "description": "Urgot fonce dans une direction, s'entoure d'un bouclier et piétine les ennemis sur son passage (hors champions). S'il percute un champion ennemi, il s'arrête et le projette hors de son chemin.",
        "icon": "UrgotE.png"
      },
      "r": {
        "name": "Règne de la terreur",
        "description": "Urgot tire un trépan qui empale le premier champion ennemi touché. Si ce champion tombe sous un certain seuil de PV, Urgot considère qu'il est trop faible et peut l'exécuter.",
        "icon": "UrgotR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2017-07-26",
        "kitAffecting": true,
        "source": {
          "url": "http://na.leagueoflegends.com/en/featured/champion-urgot-the-dreadnought",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2015-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
          "label": "Marksmen"
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-11-20",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-420-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2017-07-26",
      "source": {
        "url": "http://na.leagueoflegends.com/en/featured/champion-urgot-the-dreadnought",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Urgot | Gameplay – League of Legends",
        "url": "https://www.youtube.com/watch?v=y27jfWniBvM",
        "published": "2017-07-24",
        "duration": 246
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Urgot Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=AEd1aq77tBo",
        "published": "2017-07-24",
        "duration": 245
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Urgot Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=8SdR7vwMK4w",
        "published": "2026-06-26",
        "duration": 180
      }
    ],
    "releaseDate": "2010-08-24"
  },
  {
    "id": "varus",
    "key": "0110",
    "ddid": "Varus",
    "name": "Varus",
    "title": "Flèche de la vengeance",
    "roles": {
      "adc": {
        "tier": "B",
        "wr": 47.29,
        "pr": 2.71,
        "ban": 0.71
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 7,
      "magic": 4
    },
    "class": "Tireur / Mage",
    "strengths": [
      "Mettre rapidement un point dans Carquois meurtri permet de harceler les champions ennemis et d'achever les sbires.",
      "À courte portée, il vaut parfois mieux tirer Flèche perforante sans attendre qu'elle soit complètement chargée.",
      "Profitez de la longue portée de Flèche perforante pour tirer sur les champions ennemis avant le combat ou lors de leur fuite."
    ],
    "counters": [
      "Si vous êtes touché par Meurtrissure, les compétences de Varus vous infligeront des dégâts supplémentaires.",
      "Quand il tue un ennemi ou quand il réussit une assistance, Varus augmente temporairement sa vitesse d'attaque et devient beaucoup plus dangereux.",
      "Vous serez immobilisé si l'une des vrilles de Chaîne corruptrice, l'ultime de Varus, vous atteint. Cependant, les vrilles meurent si vous vous éloignez assez vite."
    ],
    "abilities": {
      "passive": {
        "name": "Vengeance incarnée",
        "description": "Quand il tue un ennemi ou quand il réussit une assistance, Varus gagne temporairement des dégâts d'attaque et de la puissance. Ce bonus est plus important si l'ennemi tué est un champion.",
        "icon": "VarusPassive.png"
      },
      "q": {
        "name": "Flèche perforante",
        "description": "Varus effectue un tir puissant dont les dégâts et la portée augmentent avec la durée de la charge.",
        "icon": "VarusQ.png"
      },
      "w": {
        "name": "Carquois meurtri",
        "description": "Passive : les attaques de base de Varus infligent des dégâts magiques supplémentaires ainsi que Meurtrissure. Les autres compétences de Varus déclenchent Meurtrissure, infligeant des dégâts magiques en fonction des PV max de la cible. Active : Varus renforce sa prochaine Flèche perforante.",
        "icon": "VarusW.png"
      },
      "e": {
        "name": "Pluie de flèches",
        "description": "Varus tire une pluie de flèches qui inflige des dégâts physiques et souille le sol. Le sol souillé réduit la vitesse de déplacement des ennemis et réduit les soins qu'ils reçoivent et leur régénération.",
        "icon": "VarusE.png"
      },
      "r": {
        "name": "Chaîne corruptrice",
        "description": "Varus lance une vrille de corruption qui blesse et immobilise le premier champion ennemi touché et qui se propage ensuite vers les champions non infectés proches, les immobilisant eux aussi en les touchant.",
        "icon": "VarusR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2021-12-08",
        "kitAffecting": false,
        "source": {
          "url": "https://www.reddit.com/r/LeaguePBE/comments/qzxb54/varus_vfx_update/",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2015-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
          "label": "Marksmen"
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2015-11-10",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
        "label": "Marksmen"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Varus: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=twiHstUjNkY",
        "published": "2012-05-08",
        "duration": 374
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Varus Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=RkXHhX5WLwU",
        "published": "2025-03-30",
        "duration": 180
      }
    ],
    "releaseDate": "2012-05-08"
  },
  {
    "id": "vayne",
    "key": "0067",
    "ddid": "Vayne",
    "name": "Vayne",
    "title": "Chasseresse nocturne",
    "roles": {
      "adc": {
        "tier": "B",
        "wr": 47.57,
        "pr": 3.51,
        "ban": 7.21
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 10,
      "magic": 1
    },
    "class": "Tireur / Assassin",
    "strengths": [
      "Roulade a de nombreuses utilités mais ne permet pas de franchir les murs.",
      "Condamnation peut être utilisée pour clouer une cible à un mur afin de faciliter son élimination, ou pour échapper à un poursuivant.",
      "N'attaquez pas en premier durant les combats en équipe. Laissez vos équipiers initier le combat."
    ],
    "counters": [
      "Vayne est fragile : mettez-lui la pression et elle sera forcée de jouer plus prudemment.",
      "Ne laissez pas Vayne vous clouer à un mur."
    ],
    "abilities": {
      "passive": {
        "name": "Chasseresse nocturne",
        "description": "Vayne traque sans relâche les êtres malfaisants, gagnant de la vitesse de déplacement vers les champions ennemis proches.",
        "icon": "Vayne_NightHunter.png"
      },
      "q": {
        "name": "Roulade",
        "description": "Vayne fait une roulade et se positionne pour mieux viser. Sa prochaine attaque inflige des dégâts supplémentaires.",
        "icon": "VayneTumble.png"
      },
      "w": {
        "name": "Carreaux d'argent",
        "description": "Vayne trempe ses carreaux dans de l'argent, un métal nocif pour les êtres maléfiques. La troisième attaque ou compétence consécutive contre une même cible inflige un pourcentage des PV max de la cible sous forme de dégâts bruts supplémentaires.",
        "icon": "VayneSilveredBolts.png"
      },
      "e": {
        "name": "Condamnation",
        "description": "Vayne prend l'arbalète qu'elle porte sur le dos et tire un carreau gigantesque sur sa cible, lui infligeant des dégâts et la projetant en arrière. Si la cible percute le décor, elle est empalée, ce qui lui inflige des dégâts supplémentaires et l'étourdit.",
        "icon": "VayneCondemn.png"
      },
      "r": {
        "name": "Combat ultime",
        "description": "Vayne se prépare à un combat épique ; ses dégâts d'attaque augmentent, elle devient invisible pendant Roulade, le délai de récupération de Roulade est réduit et le bonus de vitesse de Chasseresse nocturne est augmenté.",
        "icon": "VayneInquisition.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2022-01-20",
        "kitAffecting": false,
        "source": {
          "url": "https://www.reddit.com/r/LeaguePBE/comments/ryhash/vayne_vfx_update/",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2015-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
          "label": "Marksmen"
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2015-01-28",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://euw.leagueoflegends.com/en/news/game-updates/patch/patch-52-notes/",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2015-11-10",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/na/site/2016-season-update/preseason.html",
        "label": "Marksmen"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Vayne: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=gZDJqpFspmg",
        "published": "2011-05-10",
        "duration": 400
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Vayne Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=-gywMLzMI8A",
        "published": "2025-01-10",
        "duration": 180
      }
    ],
    "releaseDate": "2011-05-10"
  },
  {
    "id": "veigar",
    "key": "0045",
    "ddid": "Veigar",
    "name": "Veigar",
    "title": "Seigneur des maléfices",
    "roles": {
      "mid": {
        "tier": "A",
        "wr": 50.21,
        "pr": 3.8,
        "ban": 1.83
      },
      "adc": {
        "tier": "A",
        "wr": 51.59,
        "pr": 1.97,
        "ban": 1.82
      },
      "sup": {
        "tier": "D",
        "wr": 44.6,
        "pr": 0.65,
        "ban": 1.75
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 2,
      "magic": 10
    },
    "class": "Mage",
    "strengths": [
      "Utilisez Profanation pour augmenter vos chances de toucher avec Matière noire.",
      "Veigar dépend énormément de son mana et de la réduction des délais de récupération. Achetez les objets adéquats pour améliorer l'efficacité de votre compétence passive et de Coup malin.",
      "Veigar est très fragile. Essayez d'avoir au moins un sort d'invocateur pouvant être utilisé défensivement."
    ],
    "counters": [
      "Matière noire inflige de très gros dégâts, mais vous pouvez l'éviter. Faites attention aux indicateurs sonores et visuels annonçant le sort.",
      "Seul le périmètre de la zone de Profanation étourdit les unités. Si vous êtes au centre de la zone, vous pouvez bouger et attaquer.",
      "L'ultime de Veigar inflige des dégâts qui augmentent en fonction de vos PV manquants."
    ],
    "abilities": {
      "passive": {
        "name": "Pouvoir maléfique phénoménal",
        "description": "Veigar est le plus grand mal qui ait jamais frappé Runeterra, et son pouvoir est encore en pleine croissance ! Frapper un champion ennemi avec une compétence, tuer un champion ou effectuer une assistance octroie à Veigar un bonus permanent en puissance.",
        "icon": "VeigarEntropy.png"
      },
      "q": {
        "name": "Coup malin",
        "description": "Veigar lance une boule d'énergie des ténèbres, infligeant des dégâts magiques aux deux premiers ennemis touchés. Les unités tuées par cette compétence confèrent à Veigar un gain de puissance permanent.",
        "icon": "VeigarBalefulStrike.png"
      },
      "w": {
        "name": "Matière noire",
        "description": "Veigar fait tomber de la matière noire pour infliger des dégâts magiques à ses adversaires. Les effets Pouvoir maléfique phénoménal cumulés réduisent le délai de récupération de Matière noire.",
        "icon": "VeigarDarkMatter.png"
      },
      "e": {
        "name": "Profanation",
        "description": "Veigar distord l'espace dans la zone ciblée, créant une cage qui étourdit les ennemis qui la traversent.",
        "icon": "VeigarEventHorizon.png"
      },
      "r": {
        "name": "Explosion primordiale",
        "description": "Lance de l'énergie explosive sur le champion ennemi ciblé, infligeant d'importants dégâts magiques qui augmentent avec les PV manquants de la cible.",
        "icon": "VeigarR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2018-09-26",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/game-updates/patch/patch-819-notes",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2016-05-04",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/mid-season-magic",
          "label": "Mages: Battlemages"
        }
      },
      {
        "type": "Visual (VFX) and Gameplay Update",
        "date": "2015-02-25",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/game-updates/patch/patch-54-notes",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2015-02-11",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-53-notes/",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2016-05-04",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/mid-season-magic",
        "label": "Mages: Battlemages"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Veigar Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=X96vlPZ001Q",
        "published": "2024-05-28",
        "duration": 180
      }
    ],
    "releaseDate": "2009-07-24"
  },
  {
    "id": "velkoz",
    "key": "0161",
    "ddid": "Velkoz",
    "name": "Vel'Koz",
    "title": "Œil du Néant",
    "roles": {
      "mid": {
        "tier": "A",
        "wr": 50.78,
        "pr": 0.89,
        "ban": 1.62
      },
      "adc": {
        "tier": "S",
        "wr": 52.68,
        "pr": 0.6,
        "ban": 1.57
      },
      "sup": {
        "tier": "B",
        "wr": 50.53,
        "pr": 2.76,
        "ban": 1.68
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 2,
      "magic": 10
    },
    "class": "Mage / Soutien",
    "strengths": [
      "Sur votre voie, utilisez Ouverture de faille pour tuer des sbires tout en cumulant les effets Décomposition organique sur votre adversaire. Vous pouvez ensuite enchaîner avec d'autres compétences.",
      "Tirer Fission du plasma en diagonale et diviser le projectile en bout de course vous permettent de toucher les ennemis qui sont normalement hors de portée, mais l'action est plus difficile.",
      "Réfléchissez bien avant d'utiliser Désintégrateur de formes de vie. De nombreux champions ont des compétences capables d'interrompre ce sort."
    ],
    "counters": [
      "Vel'Koz est très dangereux si on le laisse agir pendant un combat. Essayez de l'abattre rapidement.",
      "Vel'Koz étant assez peu mobile, il est vulnérable aux ganks.",
      "Désintégrateur de formes de vie peut être interrompu par un étourdissement, un silence ou une projection en l'air."
    ],
    "abilities": {
      "passive": {
        "name": "Décomposition organique",
        "description": "Les compétences de Vel'Koz appliquent des effets <keywordName>Décomposition organique</keywordName> aux ennemis touchés. À 3 effets cumulés, l'ennemi subit une explosion de dégâts bruts.",
        "icon": "VelKoz_Passive.png"
      },
      "q": {
        "name": "Fission du plasma",
        "description": "Vel'Koz tire un projectile de plasma qui se divise en deux quand il touche un ennemi ou quand la compétence est réactivée. Le projectile ralentit et blesse à l'impact.",
        "icon": "VelkozQ.png"
      },
      "w": {
        "name": "Ouverture de faille",
        "description": "Vel'Koz ouvre une faille vers le Néant, infligeant des dégâts initiaux. Après un court délai, la faille explose et inflige des dégâts secondaires.",
        "icon": "VelkozW.png"
      },
      "e": {
        "name": "Dislocation tectonique",
        "description": "Vel'Koz provoque une explosion dans une zone, projetant les ennemis dans les airs et repoussant légèrement les ennemis proches.",
        "icon": "VelkozE.png"
      },
      "r": {
        "name": "Désintégrateur de formes de vie",
        "description": "Vel'Koz tire un rayon canalisé qui suit le curseur pendant 2.5 sec et inflige des dégâts magiques. Les champions ennemis qui sont des sujets d'étude (affectés par Décomposition organique) subissent à la place des dégâts bruts.",
        "icon": "VelkozR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2022-02-02",
        "kitAffecting": false,
        "source": {
          "url": "https://www.reddit.com/r/LeaguePBE/comments/sco0ug/velkoz_vfx_update/",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2016-05-04",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/mid-season-magic",
          "label": "Mages: Battlemages"
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2016-05-04",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/en/featured/mid-season-magic",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2016-05-04",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/mid-season-magic",
        "label": "Mages: Battlemages"
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur : Vel'Koz",
        "url": "https://www.youtube.com/watch?v=SqNILu0cdfs",
        "published": "2014-02-26",
        "duration": 529
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Vel'Koz: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=IWA2C8tUG-g",
        "published": "2014-02-26",
        "duration": 529
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Vel'Koz Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=HoUNYXXw0FY",
        "published": "2026-04-11",
        "duration": 180
      }
    ],
    "releaseDate": "2014-02-27"
  },
  {
    "id": "vex",
    "key": "0711",
    "ddid": "Vex",
    "name": "Vex",
    "title": "Ombre du désespoir",
    "roles": {
      "mid": {
        "tier": "A",
        "wr": 51.96,
        "pr": 2.94,
        "ban": 3.6
      }
    },
    "damageType": "Mixte",
    "dmgRating": {
      "attack": 0,
      "magic": 0
    },
    "class": "Mage",
    "strengths": [],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "Malheur et Désespoir",
        "description": "Vex est régulièrement renforcée, ce qui permet à sa prochaine compétence de base d'effrayer les ennemis et d'interrompre les ruées. Chaque fois qu'un ennemi proche fait une ruée, Vex applique une marque qui, si elle est consommée, inflige des dégâts supplémentaires et réduit le délai de récupération du renforcement.",
        "icon": "Icons_Vex_Passive.png"
      },
      "q": {
        "name": "Mistral perdant",
        "description": "Vex lance un projectile qui inflige des dégâts et qui accélère pendant son vol.",
        "icon": "VexQ.png"
      },
      "w": {
        "name": "Lâchez-moi !",
        "description": "Vex gagne un bouclier et blesse les ennemis proches.",
        "icon": "VexW.png"
      },
      "e": {
        "name": "Ténèbres imminentes",
        "description": "Vex invoque une zone qui blesse et ralentit les ennemis en plus d'appliquer Désespoir sur eux.",
        "icon": "VexE.png"
      },
      "r": {
        "name": "Déferlement d'Ombre",
        "description": "Vex tire un projectile qui marque un champion ennemi. Elle peut réactiver cette compétence pour se ruer sur cet ennemi et lui infliger des dégâts.",
        "icon": "VexR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Vex | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=xY_MLTwwRqw",
        "published": "2021-09-24",
        "duration": 193
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Vex Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=-53Hat-vM-k",
        "published": "2021-09-23",
        "duration": 193
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Vex Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=sL_p_NyCYWE",
        "published": "2025-02-16",
        "duration": 180
      }
    ],
    "releaseDate": "2021-09-23"
  },
  {
    "id": "vi",
    "key": "0254",
    "ddid": "Vi",
    "name": "Vi",
    "title": "Pacifieuse de Piltover",
    "roles": {
      "jgl": {
        "tier": "B",
        "wr": 49.13,
        "pr": 5.19,
        "ban": 1.88
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 3
    },
    "class": "Combattant / Assassin",
    "strengths": [
      "Un Brise-coffre chargé à 100% inflige deux fois plus de dégâts. Cette compétence est idéale pour rattraper et achever les ennemis en fuite.",
      "Force implacable inflige 100% de ses dégâts à quiconque est touché par l'onde de choc. Utilisez-la sur les sbires pour frapper les ennemis derrière eux.",
      "Mise en demeure est un puissant outil d'initiation, mais pensez à ne pas trop vous éloigner de votre équipe."
    ],
    "counters": [
      "Un Brise-coffre chargé à 100% inflige deux fois plus de dégâts. Si vous voyez Vi commencer à charger son attaque, repliez-vous ou esquivez.",
      "Vi réduira votre armure et augmentera sa vitesse d'attaque si elle vous frappe trois fois d'affilée. Évitez les combats prolongés avec elle.",
      "Vi ne peut pas être arrêtée pendant son ultime. Pensez à conserver vos effets pouvant la déplacer pour après sa charge."
    ],
    "abilities": {
      "passive": {
        "name": "Bouclier antichoc",
        "description": "Vi charge un bouclier sur la durée. Le bouclier peut être activé en frappant un ennemi avec une compétence.",
        "icon": "ViPassive.png"
      },
      "q": {
        "name": "Brise-coffre",
        "description": "Vi charge ses gants et balance un coup de poing destructeur qui l'entraîne vers l'avant. Les ennemis touchés sont repoussés et subissent un effet Coups fracassants.",
        "icon": "ViQ.png"
      },
      "w": {
        "name": "Coups fracassants",
        "description": "Les coups de poing de Vi brisent l'armure de son adversaire, infligeant des dégâts supplémentaires et augmentant sa vitesse d'attaque.",
        "icon": "ViW.png"
      },
      "e": {
        "name": "Force implacable",
        "description": "La prochaine attaque de Vi traversera sa cible, infligeant des dégâts aux ennemis qui se trouvent derrière.",
        "icon": "ViE.png"
      },
      "r": {
        "name": "Mise en demeure",
        "description": "Vi fonce sur un ennemi, écartant ceux qui sont sur son passage. Quand elle atteint sa cible, elle la projette dans les airs, saute par-dessus et la renvoie au sol.",
        "icon": "ViR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2018-09-26",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/game-updates/patch/patch-819-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur la présaison 2022 | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=8mmODQ9LXXA",
        "published": "2021-11-16",
        "duration": 204
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Vi: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=vp3ZrRJz-ZY",
        "published": "2012-12-18",
        "duration": 324
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Vi Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=9XfrVjjMKYU",
        "published": "2024-09-25",
        "duration": 180
      }
    ],
    "releaseDate": "2012-12-19"
  },
  {
    "id": "viego",
    "key": "0234",
    "ddid": "Viego",
    "name": "Viego",
    "title": "Roi déchu",
    "roles": {
      "jgl": {
        "tier": "C",
        "wr": 48.29,
        "pr": 8.86,
        "ban": 7.68
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 6,
      "magic": 2
    },
    "class": "Combattant / Assassin",
    "strengths": [],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "Assujettissement",
        "description": "Les ennemis qui meurent devant Viego deviennent des spectres. Quand il attaque un spectre, Viego prend temporairement le contrôle du corps de l'ennemi mort, récupérant un pourcentage des PV max de la cible et gagnant l'accès à ses compétences de base et à ses objets. Viego ne gagne pas l'accès à l'ultime de la cible, mais peut lancer son propre ultime gratuitement.",
        "icon": "Viego_Passive.png"
      },
      "q": {
        "name": "Lame du roi déchu",
        "description": "La lame spectrale de Viego inflige passivement un pourcentage des PV actuels de la cible en dégâts supplémentaires <OnHit>à l'impact</OnHit> et frappe deux fois les ennemis qu'il a récemment touchés avec une compétence, leur volant au passage des PV.<br><br>Viego peut activer cette compétence pour donner un coup d'estoc, empalant ainsi les ennemis devant lui.",
        "icon": "ViegoQ.png"
      },
      "w": {
        "name": "Gueule spectrale",
        "description": "Viego charge son attaque avant de se ruer vers l'avant, projetant une boule de Brume noire concentrée qui étourdit le premier ennemi touché.",
        "icon": "ViegoW.png"
      },
      "e": {
        "name": "Chemin tourmenté",
        "description": "Viego ordonne à la Brume noire de hanter et entourer un élément de terrain. Viego peut se cacher dans la Brume sous forme de spectre, ce qui le camoufle et augmente ses vitesses de déplacement et d'attaque.",
        "icon": "ViegoE.png"
      },
      "r": {
        "name": "Cœur brisé",
        "description": "Viego se téléporte à un endroit proche et exécute un champion ennemi à l'arrivée, lui transperçant le cœur et provoquant une onde de choc destructrice qui repousse les alliés de cet ennemi.",
        "icon": "ViegoR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Viego | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=IYKRq67wctY",
        "published": "2021-01-21",
        "duration": 328
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Viego Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=98CIAkqX6ZU",
        "published": "2021-01-21",
        "duration": 328
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Viego Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=yXR1Pa2-Wwg",
        "published": "2025-04-19",
        "duration": 180
      }
    ],
    "releaseDate": "2021-01-21"
  },
  {
    "id": "viktor",
    "key": "0112",
    "ddid": "Viktor",
    "name": "Viktor",
    "title": "Héraut de l'arcane",
    "roles": {
      "mid": {
        "tier": "S",
        "wr": 50.34,
        "pr": 9.35,
        "ban": 16.18
      },
      "adc": {
        "tier": "A",
        "wr": 51.22,
        "pr": 3.42,
        "ban": 16.16
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 2,
      "magic": 10
    },
    "class": "Mage",
    "strengths": [
      "Rayon Hextech est un puissant outil pour zoner et poker les ennemis. Utilisez-le avec Champ gravitationnel pour contrôler la position de l'ennemi.",
      "Assurez-vous de choisir la bonne amélioration au bon moment."
    ],
    "counters": [
      "Soyez prudent si vous laissez Viktor vous approcher. Plus il est proche de son adversaire, plus son contrôle sur le champ de bataille augmente.",
      "Pour connaître le nombre d'améliorations obtenues par Viktor, regardez la couleur de la lumière sur son bâton (violet, jaune, bleu, rouge)."
    ],
    "abilities": {
      "passive": {
        "name": "Glorieuse évolution",
        "description": "Viktor gagne des fragments Hextech chaque fois qu'il tue un ennemi. Tous les 100 fragments Hextech, Viktor améliore définitivement une de ses compétences actives. Après avoir amélioré toutes ses compétences de base, il peut récupérer 100 fragments Hextech pour améliorer sa compétence ultime.",
        "icon": "Viktor_Passive.png"
      },
      "q": {
        "name": "Siphonnage",
        "description": "Viktor inflige des dégâts magiques à une unité ennemie, obtient un bouclier et renforce sa prochaine attaque de base.<br><br>Amélioration : le bouclier de Siphonnage est augmenté de 60% et Viktor gagne de la vitesse de déplacement bonus après le lancement.<br>",
        "icon": "ViktorQ.png"
      },
      "w": {
        "name": "Champ gravitationnel",
        "description": "Viktor crée un champ gravitationnel qui ralentit les ennemis dans son rayon d'action. Les ennemis qui restent trop longtemps dans le champ sont étourdis.<br><br>Amélioration : les compétences de Viktor ralentissent les ennemis touchés.<br>",
        "icon": "ViktorW.png"
      },
      "e": {
        "name": "Rayon Hextech",
        "description": "Viktor utilise son bras biomécanique pour tirer un rayon Hextech en ligne droite, infligeant des dégâts à tous les ennemis sur son passage.<br><br>Amélioration : le rayon Hextech provoque une explosion dans son sillage, infligeant des dégâts magiques.<br>",
        "icon": "ViktorE.png"
      },
      "r": {
        "name": "Tempête arcanique",
        "description": "Viktor crée une tempête arcanique dans une zone, infligeant des dégâts magiques et interrompant les canalisations ennemies. La tempête inflige périodiquement des dégâts magiques à tous les ennemis proches et peut être redirigée par Viktor.<br><br>Amélioration : la tempête arcanique se déplace 25% plus vite. Quand un champion meurt après qu'elle lui a infligé des dégâts, elle grandit et sa durée est augmentée.<br><br>",
        "icon": "ViktorR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2024-12-11",
        "kitAffecting": true,
        "source": {
          "url": "https://www.youtube.com/watch?v=3zx1PwFXFdQ&ab_channel=LeagueofLegends",
          "label": "Season 1 Reveal, Gameplay Preview & Ranked Resets"
        }
      },
      {
        "type": "Visual (VFX) Update",
        "date": "2020-09-02",
        "kitAffecting": false,
        "source": {
          "url": "https://www.reddit.com/r/LeaguePBE/comments/idnmuv/nocturne_viktor_malzahar_and_ignite_visual/",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) and Gameplay Update",
        "date": "2014-09-25",
        "kitAffecting": true,
        "source": {
          "url": "http://na.leagueoflegends.com/en/champion-update/viktor-machine-herald",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2024-12-11",
      "source": {
        "url": "https://www.youtube.com/watch?v=3zx1PwFXFdQ&ab_channel=LeagueofLegends",
        "label": "Season 1 Reveal, Gameplay Preview & Ranked Resets"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Viktor: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=cHD781_Je7Q",
        "published": "2011-12-29",
        "duration": 403
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Viktor Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=q2KjPlF23dA",
        "published": "2026-03-01",
        "duration": 180
      }
    ],
    "releaseDate": "2011-12-29"
  },
  {
    "id": "vladimir",
    "key": "0008",
    "ddid": "Vladimir",
    "name": "Vladimir",
    "title": "Saigneur pourpre",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 49.45,
        "pr": 1.26,
        "ban": 5.75
      },
      "mid": {
        "tier": "S",
        "wr": 51.21,
        "pr": 4.01,
        "ban": 5.83
      },
      "adc": {
        "tier": "A",
        "wr": 51.55,
        "pr": 0.62,
        "ban": 5.64
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 2,
      "magic": 8
    },
    "class": "Mage / Combattant",
    "strengths": [
      "Transfusion inflige directement des dégâts à l'ennemi avant de soigner Vladimir, ce qui en fait l'une des meilleures compétences pour donner le coup fatal aux sbires.",
      "Lancez Peste sanguine dans une zone où il y a beaucoup d'ennemis.",
      "Bain de sang arrête les projectiles, ce qui est efficace pour contrer les effets néfastes."
    ],
    "counters": [
      "Essayez de tuer Vladimir avant que Peste sanguine n'explose, car il récupérera des PV pour chaque champion ennemi affecté.",
      "Forcez Vladimir à utiliser Bain de sang au début d'un combat pour que cette compétence lui coûte le plus de PV possible.",
      "Les objets qui contrent l'accumulation de PV, comme Tourment de Liandry et Lame du roi déchu, sont très efficaces contre Vladimir."
    ],
    "abilities": {
      "passive": {
        "name": "Pacte de sang",
        "description": "Vladimir gagne 1 pt de puissance tous les 30 PV bonus, et 1.6 PV bonus tous les 1 pt de puissance (ces effets ne se cumulent pas entre eux).",
        "icon": "VladimirP.png"
      },
      "q": {
        "name": "Transfusion",
        "description": "Vladimir vole les PV de l'ennemi ciblé. Quand la jauge de ressource de Vladimir est pleine, Transfusion infligera beaucoup plus de dégâts et rendra beaucoup plus de PV pendant un court instant.",
        "icon": "VladimirQ.png"
      },
      "w": {
        "name": "Bain de sang",
        "description": "Vladimir plonge dans une flaque de sang, devenant impossible à cibler pendant 2 sec. Les ennemis dans la flaque sont ralentis et Vladimir peut aspirer leur vie.",
        "icon": "VladimirSanguinePool.png"
      },
      "e": {
        "name": "Vagues de sang",
        "description": "Vladimir dépense ses propres PV pour charger un orbe de sang qui, une fois lâché, infligera des dégâts de zone autour de lui. Les Vagues de sang peuvent être bloquées par les unités ennemies.",
        "icon": "VladimirE.png"
      },
      "r": {
        "name": "Peste sanguine",
        "description": "Vladimir contamine une zone avec une peste virulente. Les ennemis infectés subissent plus de dégâts pendant la durée de la compétence. Après quelques secondes, Peste sanguine inflige des dégâts magiques aux ennemis infectés et rend des PV à Vladimir pour chaque champion ennemi touché.",
        "icon": "VladimirHemoplague.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Class-scale Update",
        "date": "2016-05-04",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/mid-season-magic",
          "label": "Mages: Battlemages"
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2016-05-04",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/en/featured/mid-season-magic",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-11-20",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-420-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2016-05-04",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/mid-season-magic",
        "label": "Mages: Battlemages"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Vladimir: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=eiUgrEWRx6M",
        "published": "2010-07-27",
        "duration": 298
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Vladimir Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=tH0m-4PYvWk",
        "published": "2026-06-28",
        "duration": 180
      }
    ],
    "releaseDate": "2010-07-27"
  },
  {
    "id": "volibear",
    "key": "0106",
    "ddid": "Volibear",
    "name": "Volibear",
    "title": "Tempête impitoyable",
    "roles": {
      "top": {
        "tier": "B",
        "wr": 48.48,
        "pr": 3.16,
        "ban": 1.2
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 7,
      "magic": 4
    },
    "class": "Combattant / Tank",
    "strengths": [],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "Tempête impitoyable",
        "description": "Les attaques et les compétences de Volibear augmentent sa vitesse d'attaque. Au bout d'un moment, ses attaques infligent des dégâts magiques supplémentaires aux ennemis proches.",
        "icon": "Volibear_Icon_P.png"
      },
      "q": {
        "name": "Coup fulgurant",
        "description": "Volibear gagne de la vitesse en direction des ennemis, <status>étourdissant</status> et blessant le premier qu'il attaque.",
        "icon": "VolibearQ.png"
      },
      "w": {
        "name": "Folie mutilatrice",
        "description": "Volibear blesse grièvement un ennemi, appliquant ses effets à l'impact et le marquant.  Relancer cette compétence sur la même cible inflige des dégâts supplémentaires et soigne Volibear.",
        "icon": "VolibearW.png"
      },
      "e": {
        "name": "Foudroiement",
        "description": "Volibear fait tomber la foudre à l'endroit ciblé, blessant et ralentissant les ennemis tout en obtenant un bouclier s'il est dans le rayon de l'explosion.",
        "icon": "VolibearE.png"
      },
      "r": {
        "name": "Tempête incarnée",
        "description": "Volibear bondit vers l'endroit ciblé, ralentissant et blessant les ennemis sous lui tout en gagnant des PV supplémentaires.  Les tourelles ennemies proches de son point d'atterrissage sont temporairement désactivées.",
        "icon": "VolibearR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2020-05-28",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/en-us/news/dev/dev-a-storm-is-brewing/",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2015-01-14",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://euw.leagueoflegends.com/en/news/game-updates/patch/patch-51-notes/",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2020-05-28",
      "source": {
        "url": "https://na.leagueoflegends.com/en-us/news/dev/dev-a-storm-is-brewing/",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Volibear: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=pVrWNNnhSww",
        "published": "2011-11-29",
        "duration": 480
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Volibear Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=_R-7Y3zDkm8",
        "published": "2024-08-19",
        "duration": 180
      }
    ],
    "releaseDate": "2011-11-29"
  },
  {
    "id": "warwick",
    "key": "0019",
    "ddid": "Warwick",
    "name": "Warwick",
    "title": "Fureur déchaînée de Zaun",
    "roles": {
      "top": {
        "tier": "S",
        "wr": 51.6,
        "pr": 1.36,
        "ban": 1.62
      },
      "jgl": {
        "tier": "A",
        "wr": 51.47,
        "pr": 3.14,
        "ban": 1.64
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 9,
      "magic": 3
    },
    "class": "Combattant / Tank",
    "strengths": [
      "Suivez les pistes de Traque sanguinaire pour trouver les champions ennemis affaiblis.",
      "La distance de Contrainte infinie (R) augmente avec vos bonus en vitesse de déplacement, même ceux octroyés par les buffs de vos alliés ou par les sorts d'invocateur.",
      "Si vous maintenez la touche, Dents de la bête (A) suivra les ennemis qui courent, foncent dans une direction ou se téléportent."
    ],
    "counters": [
      "Les attaques de Warwick lui rendent des PV quand il a peu de PV. Gardez vos entraves pour l'achever.",
      "Warwick est renforcé contre les ennemis qui ont peu de PV. Gérez vos PV de manière à le garder à distance.",
      "La portée d'incantation de l'ultime de Warwick augmente avec sa vitesse de déplacement."
    ],
    "abilities": {
      "passive": {
        "name": "Soif inextinguible",
        "description": "Les attaques de base de Warwick infligent des dégâts magiques supplémentaires. Si Warwick a moins de 50% de ses PV, il récupère des PV équivalents à ces dégâts. Si Warwick a moins de 25% de ses PV, le montant rendu est triplé.",
        "icon": "WarwickP.png"
      },
      "q": {
        "name": "Dents de la bête",
        "description": "Warwick se jette en avant et mord sa cible, infligeant des dégâts en fonction des PV max de cette cible et récupérant des PV équivalents à une partie des dégâts infligés.",
        "icon": "WarwickQ.png"
      },
      "w": {
        "name": "Traque sanguinaire",
        "description": "Warwick repère les ennemis qui ont moins de 50% de leurs PV et obtient contre eux des bonus en vitesse de déplacement et en vitesse d'attaque. Contre les ennemis qui ont moins de 25% de leurs PV, ces bonus sont triplés.",
        "icon": "WarwickW.png"
      },
      "e": {
        "name": "Hurlement bestial",
        "description": "Warwick gagne de la réduction des dégâts pendant 2.5 sec. À la fin, ou si la compétence est réactivée, il hurle, ce qui fait fuir les ennemis proches pendant 1 sec.",
        "icon": "WarwickE.png"
      },
      "r": {
        "name": "Contrainte infinie",
        "description": "Warwick bondit dans une direction (la distance augmente avec sa vitesse de déplacement bonus), neutralisant le premier champion touché pendant 1.5 sec.",
        "icon": "WarwickR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual and Gameplay Update",
        "date": "2017-01-25",
        "kitAffecting": true,
        "source": {
          "url": "http://na.leagueoflegends.com/en/featured/champion-warwick-uncaged-wrath",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2015-03-12",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://euw.leagueoflegends.com/en/news/game-updates/patch/patch-55-notes/",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual and Gameplay Update",
      "date": "2017-01-25",
      "source": {
        "url": "http://na.leagueoflegends.com/en/featured/champion-warwick-uncaged-wrath",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Warwick | Gameplay – League of Legends",
        "url": "https://www.youtube.com/watch?v=EVLstSeGOK8",
        "published": "2017-01-23",
        "duration": 386
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Warwick Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=Rro20bR4jnQ",
        "published": "2017-01-23",
        "duration": 384
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Warwick Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=UK0oLDYqVFA",
        "published": "2024-12-16",
        "duration": 180
      }
    ],
    "releaseDate": "2009-02-21"
  },
  {
    "id": "monkeyking",
    "key": "0062",
    "ddid": "MonkeyKing",
    "name": "Wukong",
    "title": "Roi des singes",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 50.62,
        "pr": 0.96,
        "ban": 3.15
      },
      "jgl": {
        "tier": "S",
        "wr": 51.8,
        "pr": 6.17,
        "ban": 3.23
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 2
    },
    "class": "Combattant / Tank",
    "strengths": [],
    "counters": [
      "Wukong devient plus résistant quand il est entouré d'ennemis. Essayez de l'isoler pour prendre l'avantage."
    ],
    "abilities": {
      "passive": {
        "name": "Peau de pierre",
        "description": "Wukong augmente son armure et la régénération de ses PV lorsqu'il est en combat avec des champions ou des monstres (effet cumulable).",
        "icon": "MonkeyKingStoneSkin.png"
      },
      "q": {
        "name": "Écrasement",
        "description": "La prochaine attaque de Wukong a une plus longue portée, inflige des dégâts supplémentaires et réduit l'armure de la cible pendant quelques secondes.",
        "icon": "MonkeyKingDoubleAttack.png"
      },
      "w": {
        "name": "Guerrier espiègle",
        "description": "Wukong devient <font color='#91d7ee'>invisible</font> et se rue dans une direction, laissant derrière lui un clone qui attaquera les ennemis proches.",
        "icon": "MonkeyKingDecoy.png"
      },
      "e": {
        "name": "Nimbus",
        "description": "Wukong se rue sur l'ennemi ciblé et envoie des images qui attaquent les ennemis proches de sa cible, infligeant des dégâts à chaque ennemi frappé.",
        "icon": "MonkeyKingNimbus.png"
      },
      "r": {
        "name": "Cyclone",
        "description": "Wukong agrandit son bâton et le fait tournoyer, ce qui augmente sa vitesse de déplacement.<br><br>Les ennemis touchés subissent des dégâts et sont projetés en l'air.",
        "icon": "MonkeyKingSpinToWin.png"
      }
    },
    "sourceNotes": [
      {
        "field": "strengths",
        "note": "Conseil officiel « Leurre et Nimbus fonctionnent bien de concert en permettant de frapper l'ennemi et de vous éloigner avant qu'il ne puisse riposter. » / « Essayez d'utiliser Leurre près des herbes hautes pour qu'un ennemi surréagisse quand vous vous déplacez. » — nomme « Leurre », absent du kit actuel (noms et descriptions des sorts, Data Dragon 16.17.1) et des objets actuels (item.json) : conseil non affiché.",
        "url": "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
        "retrieved": "2026-09-08"
      },
      {
        "field": "counters",
        "note": "Conseil officiel « Wukong utilise souvent Leurre après Nimbus. Essayez de retarder l'utilisation de vos compétences pour être sûr de frapper le vrai Wukong. » — nomme « Leurre », absent du kit actuel (noms et descriptions des sorts, Data Dragon 16.17.1) et des objets actuels (item.json) : conseil non affiché.",
        "url": "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
        "retrieved": "2026-09-08"
      }
    ],
    "reworkHistory": [
      {
        "type": "Gameplay Update",
        "date": "2020-03-18",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/en-us/news/game-updates/patch-10-6-notes/",
          "label": null
        }
      },
      {
        "type": "Visual (VFX and SFX) Update",
        "date": "2019-02-21",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://boards.na.leagueoflegends.com/en/c/developer-corner/6r5PBr2Y-visual-effect-updates-kennen-olaf-wukong-and-riven",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-12-10",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-421-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2020-03-18",
      "source": {
        "url": "https://na.leagueoflegends.com/en-us/news/game-updates/patch-10-6-notes/",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Wukong: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=k1zAhC5aeQs",
        "published": "2011-07-26",
        "duration": 423
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Wukong Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=2k_Afn_F24Q",
        "published": "2026-02-01",
        "duration": 180
      }
    ],
    "releaseDate": "2011-07-26"
  },
  {
    "id": "xayah",
    "key": "0498",
    "ddid": "Xayah",
    "name": "Xayah",
    "title": "Rebelle",
    "roles": {
      "adc": {
        "tier": "A",
        "wr": 51.6,
        "pr": 4.6,
        "ban": 0.81
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 10,
      "magic": 1
    },
    "class": "Tireur",
    "strengths": [
      "Les attaques et compétences de Xayah laissent des plumes qu'elle peut rappeler pour infliger d'importants dégâts de zone et des effets de contrôle.",
      "Rafale de plumes peut esquiver presque toutes les compétences tout en créant de nombreuses plumes. Essayez de profiter des aspects offensifs et défensifs de cette compétence."
    ],
    "counters": [
      "L'Appel des lames de Xayah n'immobilise que les cibles touchées par au moins 3 plumes.",
      "Les combats prolongés dans une même zone permettent à Xayah de poser de nombreuses plumes. Restez en mouvement !",
      "Préparez-vous bien avant d'essayer de tuer Xayah. Rafale de plumes lui permet d'être impossible à cibler et peut rapidement renverser la situation à son avantage."
    ],
    "abilities": {
      "passive": {
        "name": "Plumes perçantes",
        "description": "Après avoir utilisé une compétence, les prochaines attaques de base de Xayah frapperont toutes les cibles sur leur passage et laisseront une <font color='#C200E1'>plume</font>.",
        "icon": "XayahPassive.png"
      },
      "q": {
        "name": "Dagues jumelles",
        "description": "Xayah jette deux dagues qui infligent des dégâts et qui laissent des plumes qu'elle peut rappeler.",
        "icon": "XayahQ.png"
      },
      "w": {
        "name": "Plumage mortel",
        "description": "Xayah crée une tempête de lames qui augmente sa vitesse d'attaque et ses dégâts, tout en augmentant sa vitesse de déplacement si elle attaque un champion.",
        "icon": "XayahW.png"
      },
      "e": {
        "name": "Appel des lames",
        "description": "Xayah rappelle toutes les plumes qu'elle a posées, infligeant des dégâts et immobilisant les ennemis.",
        "icon": "XayahE.png"
      },
      "r": {
        "name": "Rafale de plumes",
        "description": "Xayah bondit dans les airs, devenant impossible à cibler et lançant des dagues qui laissent des plumes qu'elle peut rappeler.",
        "icon": "XayahR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Xayah | Gameplay – League of Legends",
        "url": "https://www.youtube.com/watch?v=SbyJ9VcrZog",
        "published": "2017-04-17",
        "duration": 338
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Xayah Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=CgQfr8bMNN8",
        "published": "2017-04-17",
        "duration": 334
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Xayah Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=zkcGylAy4-0",
        "published": "2025-03-19",
        "duration": 180
      }
    ],
    "releaseDate": "2017-04-19"
  },
  {
    "id": "xerath",
    "key": "0101",
    "ddid": "Xerath",
    "name": "Xerath",
    "title": "Mage suprême",
    "roles": {
      "mid": {
        "tier": "A",
        "wr": 50.79,
        "pr": 4.41,
        "ban": 12.45
      },
      "adc": {
        "tier": "A",
        "wr": 51.35,
        "pr": 1.61,
        "ban": 12.39
      },
      "sup": {
        "tier": "C",
        "wr": 47.85,
        "pr": 2.97,
        "ban": 12.43
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 1,
      "magic": 10
    },
    "class": "Mage / Soutien",
    "strengths": [
      "Il est plus facile de lancer Rayon arcanique sur une cible se déplaçant vers ou loin de vous que sur une cible se déplaçant latéralement.",
      "Œil de la destruction vous aidera à placer Rayon arcanique en ralentissant votre cible.",
      "Si vous étourdissez un ennemi avec Orbe d'électrocution, vous pouvez enchaîner avec un Œil de la destruction bien centré."
    ],
    "counters": [
      "La portée de Xerath peut être intimidante, mais la plupart des champions capables d'aller au corps à corps peuvent compenser ce désavantage.",
      "Il faut beaucoup de temps à Xerath pour activer Rite arcanique. Guettez son animation d'incantation et esquivez.",
      "Voile de la banshee empêchera Xerath de placer trop facilement Orbe d'électrocution."
    ],
    "abilities": {
      "passive": {
        "name": "Afflux de mana",
        "description": "Les attaques de base de Xerath restaurent régulièrement du mana. À chaque fois que Xerath tue une unité, ce délai de récupération est réduit.",
        "icon": "Xerath_Passive1.png"
      },
      "q": {
        "name": "Rayon arcanique",
        "description": "Tire un rayon d'énergie à longue portée, infligeant des dégâts magiques à toutes les cibles touchées.",
        "icon": "XerathArcanopulseChargeUp.png"
      },
      "w": {
        "name": "Œil de la destruction",
        "description": "Fait tomber un barrage d'énergie arcanique, infligeant des dégâts magiques et ralentissant tous les ennemis dans la zone. Les cibles au centre de la zone d'effet subissent des dégâts supplémentaires et sont ralenties davantage.",
        "icon": "XerathArcaneBarrage2.png"
      },
      "e": {
        "name": "Orbe d'électrocution",
        "description": "Étourdit un ennemi et lui inflige des dégâts magiques.",
        "icon": "XerathMageSpear.png"
      },
      "r": {
        "name": "Rite arcanique",
        "description": "Xerath s'immobilise et obtient plusieurs tirs de barrage à longue portée.",
        "icon": "XerathLocusOfPower2.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Class-scale Update",
        "date": "2016-05-04",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/mid-season-magic",
          "label": "Mages: Battlemages"
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-09-25",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://oce.leagueoflegends.com/en/news/game-updates/patch/patch-417-notes",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2014-02-11",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-42-notes#patch-xerath",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2016-05-04",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/mid-season-magic",
        "label": "Mages: Battlemages"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Xerath: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=2v5MmuMJ2qU",
        "published": "2011-10-05",
        "duration": 402
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Xerath Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=xDY6ebtp3RQ",
        "published": "2025-07-09",
        "duration": 180
      }
    ],
    "releaseDate": "2011-10-05"
  },
  {
    "id": "xinzhao",
    "key": "0005",
    "ddid": "XinZhao",
    "name": "Xin Zhao",
    "title": "Sénéchal de Demacia",
    "roles": {
      "jgl": {
        "tier": "B",
        "wr": 48.94,
        "pr": 2.55,
        "ban": 0.65
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 3
    },
    "class": "Combattant / Tank",
    "strengths": [
      "Xin Zhao est idéal pour initier les combats. Lancez l'assaut et utilisez votre compétence ultime pour infliger un maximum de dégâts.",
      "Placez-vous de telle sorte que la projection de votre ultime soit la plus efficace."
    ],
    "counters": [
      "Xin Zhao est très puissant quand il initie le combat avec sa charge et son ultime qui infligent des dégâts à toutes les unités proches. Gardez votre équipe dispersée le temps qu'il utilise son ultime.",
      "Xin Zhao repose surtout sur sa Frappe des trois serres pour infliger des dégâts et réinitialiser ses délais de récupération. Il est donc utile de l'empêcher de mener à bien son combo."
    ],
    "abilities": {
      "passive": {
        "name": "Détermination",
        "description": "Toutes les 3 attaques, Xin Zhao inflige des dégâts supplémentaires et récupère des PV.",
        "icon": "XinZhaoReworkP.png"
      },
      "q": {
        "name": "Frappe des trois serres",
        "description": "Les 3 prochaines attaques de base de Xin Zhao infligeront plus de dégâts et la 3e attaque projettera la cible dans les airs.",
        "icon": "XinZhaoQ.png"
      },
      "w": {
        "name": "Vent et foudre",
        "description": "Xin Zhao donne un coup de taille devant lui avec sa lance, puis donne un coup d'estoc, ralentissant les ennemis affectés et les marquant comme défiés.",
        "icon": "XinZhaoW.png"
      },
      "e": {
        "name": "Charge audacieuse",
        "description": "Xin Zhao charge un ennemi, augmentant sa vitesse d'attaque, infligeant des dégâts à tous les ennemis dans la zone et les ralentissant brièvement. La portée de cette compétence est augmentée contre les ennemis défiés.",
        "icon": "XinZhaoE.png"
      },
      "r": {
        "name": "Garde circulaire",
        "description": "Xin Zhao défie passivement un ennemi qu'il a récemment blessé. Lorsque la compétence est activée, Xin Zhao inflige des dégâts aux ennemis proches en fonction de leurs PV actuels et repousse les cibles non défiées. Il est ensuite immunisé contre les dégâts infligés par les champions hors du cercle créé.",
        "icon": "XinZhaoR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual Update",
        "date": "2025-08-27",
        "kitAffecting": false,
        "source": {
          "url": "https://www.leagueoflegends.com/en-us/news/dev/tldw-wasd-smurfing-and-more-dev-update/",
          "label": "TL;DW: WASD, Smurfing & More Dev Update"
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2017-09-26",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/champions-skins/champion-update/ability-update-xin-zhao",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-12-10",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-421-notes",
          "label": null
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2012-07-18",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://forums.eune.leagueoflegends.com/board/showthread.php?t=466019&page=1#post4624459",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2017-09-26",
      "source": {
        "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/champions-skins/champion-update/ability-update-xin-zhao",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Xin Zhao: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=9l1lj_9Xg-E",
        "published": "2010-07-10",
        "duration": 369
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Xin Zhao Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=8qTVoGh4Q9M",
        "published": "2025-04-07",
        "duration": 180
      }
    ],
    "releaseDate": "2010-07-13"
  },
  {
    "id": "yasuo",
    "key": "0157",
    "ddid": "Yasuo",
    "name": "Yasuo",
    "title": "Disgracié",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 49.23,
        "pr": 3.48,
        "ban": 20.02
      },
      "mid": {
        "tier": "B",
        "wr": 48.96,
        "pr": 8.75,
        "ban": 20.08
      },
      "adc": {
        "tier": "A",
        "wr": 51.66,
        "pr": 2.39,
        "ban": 19.98
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 4
    },
    "class": "Combattant / Assassin",
    "strengths": [
      "Chargez à travers un sbire pour que Cercle tranchant soit disponible si jamais vous devez pourchasser un ennemi en fuite. Chargez directement votre adversaire et épargnez un sbire pour que ce dernier vous aide à fuir.",
      "Au niveau 18, la Tempête d'acier de Yasuo atteint sa vitesse d'attaque maximale à +55% (avec l'aide d'objets).",
      "Dernier soupir peut être lancé sur n'importe quelle cible projetée en l'air, même celles projetées par les alliés de Yasuo."
    ],
    "counters": [
      "Tempête d'acier n'est pas très large. Déplacez-vous latéralement pour tenter de l'esquiver.",
      "Quand Yasuo place deux Tempêtes d'acier d'affilée, la prochaine déclenchera une tornade. Guettez le son qui annonce cet effet et préparez-vous à esquiver.",
      "Yasuo est moins dangereux après avoir tiré une tornade. Attaquez à ce moment-là.",
      "Le bouclier de Détermination dure 2 sec. Infliger des dégâts à Yasuo déclenche le bouclier : attaquez quand il disparaît."
    ],
    "abilities": {
      "passive": {
        "name": "Voie du vagabond",
        "description": "Les chances de coup critique de Yasuo sont augmentées. De plus, Yasuo génère un bouclier quand il se déplace. Le bouclier se déclenche quand un champion ou un monstre lui inflige des dégâts.",
        "icon": "Yasuo_Passive.png"
      },
      "q": {
        "name": "Tempête d'acier",
        "description": "Donne un coup d'estoc, blessant tous les ennemis sur une ligne.<br><br>À l'impact, octroie un effet Tempête menaçante pendant quelques secondes. Après avoir cumulé 2 effets, Tempête d'acier crée une tornade qui projette <font color='#6655CC'>dans les airs</font>.<br><br>Tempête d'acier est considérée comme une attaque de base et est donc renforcée par les mêmes choses.",
        "icon": "YasuoQ1Wrapper.png"
      },
      "w": {
        "name": "Mur de vent",
        "description": "Crée un mur mobile qui bloque tous les projectiles ennemis pendant 4 sec.",
        "icon": "YasuoW.png"
      },
      "e": {
        "name": "Cercle tranchant",
        "description": "Yasuo se rue à travers l'ennemi ciblé, infligeant des dégâts magiques. Chaque utilisation augmente les dégâts de la ruée suivante jusqu'à un montant max.<br><br>Ne peut pas être réutilisé sur le même ennemi pendant quelques secondes.<br><br><font color='#99FF99'>Si Tempête d'acier est lancée pendant cette ruée, elle donne un coup circulaire.</font>",
        "icon": "YasuoE.png"
      },
      "r": {
        "name": "Dernier soupir",
        "description": "Bondit sur un champion ennemi <factionIonia1>projeté dans les airs</factionIonia1> et lui inflige des dégâts physiques. En outre, tous les ennemis qui étaient <factionIonia1>projetés dans les airs</factionIonia1> dans la zone sont maintenus en l'air. Remplit totalement l'Impulsion mais réinitialise tous les effets cumulés de Tempête menaçante.<br><br>Ensuite, pendant une durée modérée, les coups critiques de Yasuo ont une pénétration du bonus d'armure significativement augmentée.",
        "icon": "YasuoR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur : Yasuo - Disgracié",
        "url": "https://www.youtube.com/watch?v=6t-61PIubIA",
        "published": "2013-12-11",
        "duration": 510
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Yasuo: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=fkM20LgOdKQ",
        "published": "2013-12-11",
        "duration": 508
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Yasuo Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=QwqVNnUZWTw",
        "published": "2025-10-18",
        "duration": 180
      }
    ],
    "releaseDate": "2013-12-13"
  },
  {
    "id": "yone",
    "key": "0777",
    "ddid": "Yone",
    "name": "Yone",
    "title": "Inoublié",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 49.98,
        "pr": 8.12,
        "ban": 9.52
      },
      "mid": {
        "tier": "B",
        "wr": 49.33,
        "pr": 7.2,
        "ban": 9.52
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 4
    },
    "class": "Combattant / Assassin",
    "strengths": [],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "Voie du chasseur",
        "description": "Une attaque de Yone sur deux inflige des dégâts magiques. De plus, ses chances de coup critique sont augmentées.",
        "icon": "YonePassive.png"
      },
      "q": {
        "name": "Acier mortel",
        "description": "Yone donne un coup d'estoc devant lui, blessant tous les ennemis sur une ligne.<br><br>À l'impact, cela lui octroie un effet Tempête menaçante pendant quelques secondes. À 2 effets cumulés, Acier mortel permet à Yone de se ruer vers l'avant dans une rafale de vent qui <status>projette les ennemis dans les airs</status>.",
        "icon": "YoneQ.png"
      },
      "w": {
        "name": "Fendoir spirituel",
        "description": "Yone frappe devant lui en blessant tous les ennemis dans une zone conique. Yone obtient un bouclier dont les PV augmentent avec le nombre de champions touchés.<br><br>Les délais de récupération et d'incantation de Fendoir spirituel sont réduits par la vitesse d'attaque.",
        "icon": "YoneW.png"
      },
      "e": {
        "name": "Libération spirituelle",
        "description": "L'esprit de Yone quitte son corps et gagne en vitesse de déplacement. Quand cette compétence prend fin, Yone est renvoyé de force dans son corps et une partie des dégâts qu'il a infligés sous forme d'esprit est répétée.",
        "icon": "YoneE.png"
      },
      "r": {
        "name": "Destin scellé",
        "description": "Yone se téléporte derrière le dernier champion sur une ligne en donnant un coup si puissant qu'il attire vers lui tous les ennemis touchés.",
        "icon": "YoneR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Yone | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=JRXJsAy4vtc",
        "published": "2020-08-06",
        "duration": 241
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Yone Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=d15O3zSLA_Q",
        "published": "2020-08-06",
        "duration": 241
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Yone Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=GOUBKOPBDeY",
        "published": "2026-07-08",
        "duration": 180
      }
    ],
    "releaseDate": "2020-08-06"
  },
  {
    "id": "yorick",
    "key": "0083",
    "ddid": "Yorick",
    "name": "Yorick",
    "title": "Berger des âmes",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 49.15,
        "pr": 3.13,
        "ban": 5.98
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 6,
      "magic": 4
    },
    "class": "Combattant / Tank",
    "strengths": [
      "La Vierge essaiera de vous aider lors des combats ; choisissez bien vos cibles.",
      "Vous pouvez envoyer la Vierge sur une autre voie que la vôtre, mais prudence : elle représente une grande part de votre puissance d'attaque."
    ],
    "counters": [
      "Vous pouvez lancer Châtiment sur les Goules de Brume et sur la Vierge de la Brume pour les blesser, voire les tuer.",
      "Essayez de réduire le nombre de sbires de Yorick avant de l'attaquer. Une attaque de base ou un sort à cible unique suffit à tuer les Goules de Brume.",
      "Vous pouvez attaquer Sombre cortège pour briser le mur."
    ],
    "abilities": {
      "passive": {
        "name": "Berger des âmes",
        "description": "<font color='#FF9900'>Horde maudite :</font> Yorick peut invoquer des Goules de Brume pour attaquer les ennemis proches.",
        "icon": "Yorick_P.png"
      },
      "q": {
        "name": "Derniers sacrements",
        "description": "La prochaine attaque de Yorick infligera des dégâts supplémentaires et le soignera. Si la cible est un champion, un grand monstre ou si elle meurt, cela crée une tombe.",
        "icon": "YorickQ.png"
      },
      "w": {
        "name": "Sombre cortège",
        "description": "Yorick invoque à l'endroit ciblé un mur destructible qui bloque les déplacements des ennemis.",
        "icon": "YorickW.png"
      },
      "e": {
        "name": "Brume endeuillée",
        "description": "Yorick lance un globe de Brume noire qui réduit l'armure, blesse, ralentit et marque les ennemis. Les unités invoquées gagnent de la vitesse de déplacement lorsqu'elles avancent vers les cibles marquées.",
        "icon": "YorickE.png"
      },
      "r": {
        "name": "Élégie des Îles",
        "description": "Yorick invoque la Vierge de la Brume. Les attaques de Yorick contre la cible de la Vierge infligent des dégâts supplémentaires. La Vierge transforme automatiquement les ennemis morts en Goules de Brume.",
        "icon": "YorickR.png"
      }
    },
    "sourceNotes": [
      {
        "field": "strengths",
        "note": "Conseil officiel « Il n'est pas nécessaire de lancer Exhumation pour récupérer Derniers sacrements. » — nomme « Exhumation », absent du kit actuel (noms et descriptions des sorts, Data Dragon 16.17.1) et des objets actuels (item.json) : conseil non affiché.",
        "url": "https://ddragon.leagueoflegends.com/cdn/16.17.1/data/fr_FR/championFull.json",
        "retrieved": "2026-09-08"
      }
    ],
    "reworkHistory": [
      {
        "type": "Gameplay Update",
        "date": "2025-04-02",
        "kitAffecting": true,
        "source": {
          "url": "https://www.youtube.com/watch?v=iKTWwCzfYP4",
          "label": "Patch 25.07 Yorick Update Preview"
        }
      },
      {
        "type": "Visual and Gameplay Update",
        "date": "2016-09-08",
        "kitAffecting": true,
        "source": {
          "url": "http://na.leagueoflegends.com/en/featured/yorick-champion-update",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2015-01-28",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://euw.leagueoflegends.com/en/news/game-updates/patch/patch-52-notes/",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2025-04-02",
      "source": {
        "url": "https://www.youtube.com/watch?v=iKTWwCzfYP4",
        "label": "Patch 25.07 Yorick Update Preview"
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Yorick",
        "url": "https://www.youtube.com/watch?v=7SeQvMxje0s",
        "published": "2016-09-06",
        "duration": 481
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Yorick: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=RUVveKdiU_U",
        "published": "2016-09-06",
        "duration": 481
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Yorick Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=Frq5xcsmerk",
        "published": "2024-08-14",
        "duration": 180
      }
    ],
    "releaseDate": "2011-06-22"
  },
  {
    "id": "yunara",
    "key": "0804",
    "ddid": "Yunara",
    "name": "Yunara",
    "title": "Foi inébranlable",
    "roles": {
      "adc": {
        "tier": "A",
        "wr": 50.19,
        "pr": 9.09,
        "ban": 1.79
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 9,
      "magic": 0
    },
    "class": "Tireur",
    "strengths": [],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "Serment aux Terres premières",
        "description": "Les coups critiques de Yunara infligent des dégâts magiques bonus.",
        "icon": "Yunara_Passive.png"
      },
      "q": {
        "name": "Déchaînement spirituel",
        "description": "Yunara gagne de la vitesse d'attaque, des dégâts bonus à l'impact et ses attaques rebondissent sur les ennemis proches.",
        "icon": "YunaraQ.png"
      },
      "w": {
        "name": "Arc du jugement | Arc de la ruine",
        "description": "Yunara lance un grain de chapelet virevoltant qui inflige des dégâts et ralentit les ennemis. En transe, elle tire à la place un rayon qui inflige des dégâts et ralentit les ennemis.",
        "icon": "YunaraW.png"
      },
      "e": {
        "name": "Célérité des kanmei | Ombres ineffables",
        "description": "Yunara gagne de la vitesse de déplacement et devient fantomatique. Si elle est en état de transe, elle fait une ruée à la place.",
        "icon": "YunaraE.png"
      },
      "r": {
        "name": "Transe",
        "description": "Yunara entre dans une transe qui améliore ses compétences de base.",
        "icon": "YunaraR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Yunara | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=OgjxlUqbhm4",
        "published": "2025-06-24",
        "duration": 190
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Yunara Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=gG09J6Vxbgo",
        "published": "2025-06-24",
        "duration": 190
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Yunara Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=BEojwfgQ4rU",
        "published": "2025-07-15",
        "duration": 180
      }
    ],
    "releaseDate": "2025-07-16"
  },
  {
    "id": "yuumi",
    "key": "0350",
    "ddid": "Yuumi",
    "name": "Yuumi",
    "title": "Gardienne du Grimoire",
    "roles": {
      "sup": {
        "tier": "C",
        "wr": 47.78,
        "pr": 5.28,
        "ban": 6.75
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 5,
      "magic": 8
    },
    "class": "Soutien / Mage",
    "strengths": [],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "Chat-maraderie",
        "description": "Périodiquement, quand Yuumi frappe un champion avec une attaque ou une compétence, elle récupère des PV et soigne le prochain allié auquel elle s'attache.<br><br>Lorsque Yuumi est attachée à un allié, elle génère un lien spécial avec lui. L'allié avec lequel son lien est le plus fort renforce les compétences de Yuumi quand elle est attachée à lui.",
        "icon": "YuumiP2.png"
      },
      "q": {
        "name": "Tête chat-sseuse",
        "description": "Yuumi lance un projectile qui blesse et ralentit le premier ennemi touché. Si le projectile vole au moins 1.35 sec avant d'atteindre un ennemi, il inflige des dégâts supplémentaires et un ralentissement renforcé. Lorsque Yuumi est attachée à son meilleur ami, le ralentissement est toujours renforcé et elle octroie des dégâts à l'impact supplémentaires à son allié.<br><br>Lorsque Yuumi est attachée à un allié, le projectile peut être brièvement dirigé avec votre curseur.",
        "icon": "YuumiQ.png"
      },
      "w": {
        "name": "Félin pour l'autre !",
        "description": "Yuumi se rue vers l'allié ciblé. Dans cet état, seules les tourelles peuvent la cibler. Lorsqu'elle est attachée à son meilleur ami, elle gagne de l'efficacité des soins et boucliers et elle octroie des soins à l'impact à son allié.",
        "icon": "YuumiW.png"
      },
      "e": {
        "name": "Zouuu !",
        "description": "Yuumi gagne un bouclier et augmente ses vitesses de déplacement et d'attaque. Si elle est attachée à un allié, seul cet allié bénéficie des effets de la compétence.<br>",
        "icon": "YuumiE.png"
      },
      "r": {
        "name": "Chat-pitre final",
        "description": "Yuumi canalise cinq vagues qui blessent les ennemis et soignent les alliés. Pendant la canalisation, Yuumi peut se déplacer, s'attacher aux champions alliés et lancer Zouuu ! Lorsque Yuumi est attachée à son meilleur ami, cette compétence suit aussi le curseur de la souris.",
        "icon": "YuumiR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Gameplay Update",
        "date": "2023-03-08",
        "kitAffecting": true,
        "source": {
          "url": "https://www.leagueoflegends.com/en-us/news/dev/dev-yuumi-s-rework/",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Gameplay Update",
      "date": "2023-03-08",
      "source": {
        "url": "https://www.leagueoflegends.com/en-us/news/dev/dev-yuumi-s-rework/",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Yuumi | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=SWxOkJrTzWc",
        "published": "2019-05-14",
        "duration": 191
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Yuumi Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=TYkvBijQccA",
        "published": "2019-05-14",
        "duration": 191
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Yuumi Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=Ww10Dbrmq0o",
        "published": "2026-02-17",
        "duration": 180
      }
    ],
    "releaseDate": "2019-05-14"
  },
  {
    "id": "zaahen",
    "key": "0904",
    "ddid": "Zaahen",
    "name": "Zaahen",
    "title": "Incorruptible",
    "roles": {
      "top": {
        "tier": "A",
        "wr": 49.71,
        "pr": 2.61,
        "ban": 1.09
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 1
    },
    "class": "Combattant",
    "strengths": [],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "Guerrier immortel",
        "description": "Les attaques et compétences de Zaahen qui touchent un champion ennemi lui octroient des effets de Détermination. Chaque effet lui octroie des dégâts d'attaque bonus. Au maximum d'effets cumulés, Zaahen gagne des dégâts d'attaque et peut revenir à la vie.",
        "icon": "ZaahenP.png"
      },
      "q": {
        "name": "Glaive des Darkin",
        "description": "Lors de sa prochaine attaque, Zaahen taillade deux fois sa cible, infligeant des dégâts bonus et récupérant des PV. Zaahen peut relancer cette compétence pour que sa prochaine attaque inflige des dégâts bonus et projette sa cible dans les airs.<br>",
        "icon": "ZaahenQ.png"
      },
      "w": {
        "name": "Retour redoutable",
        "description": "Zaahen donne un coup d'estoc dans une direction, infligeant des dégâts aux ennemis touchés et les attirant vers lui.",
        "icon": "ZaahenW.png"
      },
      "e": {
        "name": "Incursion dorée",
        "description": "Zaahen se rue dans une direction et lance une taillade autour de lui.",
        "icon": "ZaahenE.png"
      },
      "r": {
        "name": "Libération inexorable",
        "description": "Zaahen s'élève dans les airs, puis redescend en piqué, infligeant des dégâts aux ennemis et se soignant d'une partie des dégâts infligés.",
        "icon": "ZaahenR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Zaahen | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=RmOIWTl3spM",
        "published": "2025-11-10",
        "duration": 193
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Zaahen Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=S3F9CpeiSNE",
        "published": "2025-11-10",
        "duration": 193
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Zaahen Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=wknI62PJOCo",
        "published": "2025-11-19",
        "duration": 180
      }
    ],
    "releaseDate": "2025-11-19"
  },
  {
    "id": "zac",
    "key": "0154",
    "ddid": "Zac",
    "name": "Zac",
    "title": "Arme secrète",
    "roles": {
      "top": {
        "tier": "S",
        "wr": 51.83,
        "pr": 0.52,
        "ban": 1.11
      },
      "jgl": {
        "tier": "A",
        "wr": 50.75,
        "pr": 3.04,
        "ban": 1.19
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 3,
      "magic": 7
    },
    "class": "Tank / Combattant",
    "strengths": [
      "Ramasser vos morceaux gluants est très important pour rester en vie.",
      "Quand Division cellulaire est prête, essayez de mourir là où les ennemis auront du mal à tuer vos blobs.",
      "Si vous chargez Fronde depuis le brouillard de guerre, l'ennemi aura moins de temps pour réagir."
    ],
    "counters": [
      "Zac récupère des PV grâce aux morceaux gluants qu'il fait tomber. Vous pouvez détruire ces morceaux en marchant dessus.",
      "Tuez tous les blobs de Zac quand il se décompose pour qu'il ne revienne pas à la vie.",
      "Les silences, étourdissements, immobilisations et projections interrompront Zac quand il charge sa Fronde."
    ],
    "abilities": {
      "passive": {
        "name": "Division cellulaire",
        "description": "À chaque fois que Zac frappe un ennemi avec une compétence, il perd un bout de lui-même qu'il peut absorber pour récupérer des PV. S'il subit des dégâts mortels, Zac se divise en 4 blobs qui tentent de se recombiner. S'il reste des blobs, Zac revient à la vie avec un nombre de PV qui dépend des PV des blobs survivants. Chaque blob a un pourcentage des PV max, de l'armure et de la résistance magique de Zac. Cette compétence a un délai de récupération de 5 minutes.",
        "icon": "ZacPassive.png"
      },
      "q": {
        "name": "Étirements",
        "description": "Zac étend un bras et attrape un ennemi. S'il attaque ensuite un ennemi différent, il envoie les deux cibles l'une contre l'autre.",
        "icon": "ZacQ.png"
      },
      "w": {
        "name": "Matière instable",
        "description": "Zac explose en direction des ennemis proches, leur infligeant des dégâts magiques équivalents à un pourcentage de leurs PV max.",
        "icon": "ZacW.png"
      },
      "e": {
        "name": "Fronde",
        "description": "Zac fixe ses bras au sol et prend de l'élan pour se projeter vers l'avant.",
        "icon": "ZacE.png"
      },
      "r": {
        "name": "Boing !",
        "description": "Zac rebondit quatre fois, projetant en l'air les ennemis touchés et les ralentissant.",
        "icon": "ZacR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Class-scale Update",
        "date": "2017-05-03",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/midseason-2017",
          "label": "Tanks: Vanguards"
        }
      },
      {
        "type": "Gameplay Update",
        "date": "2017-05-03",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/en/featured/midseason-2017",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2017-05-03",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/midseason-2017",
        "label": "Tanks: Vanguards"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Zac: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=lr8kHe4vqZQ",
        "published": "2013-03-29",
        "duration": 329
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Zac Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=fxOEsqONIS8",
        "published": "2026-04-25",
        "duration": 180
      }
    ],
    "releaseDate": "2013-03-29"
  },
  {
    "id": "zed",
    "key": "0238",
    "ddid": "Zed",
    "name": "Zed",
    "title": "Maître des ombres",
    "roles": {
      "jgl": {
        "tier": "D",
        "wr": 47.29,
        "pr": 2.63,
        "ban": 24.26
      },
      "mid": {
        "tier": "S",
        "wr": 50.08,
        "pr": 8.85,
        "ban": 24.4
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 9,
      "magic": 1
    },
    "class": "Assassin",
    "strengths": [
      "Conserver de l'énergie et vos sorts jusqu'à pouvoir utiliser votre ultime permet de maximiser les dégâts de Marque de la mort.",
      "Activez deux fois de suite Ombre vivante pour changer de place avec l'ombre et fuir rapidement.",
      "Placer Ombre vivante avant d'utiliser Marque de la mort laisse à Zed la possibilité de fuir le combat."
    ],
    "counters": [
      "Zed profite des objets de dégâts d'attaque qu'il achète ; l'armure est donc très efficace contre lui.",
      "Après avoir utilisé Ombre vivante, Zed est vulnérable car ses dégâts, ses ralentissements et sa mobilité reposent sur cette compétence.",
      "Taillade des ombres ne peut vous ralentir que si l'ombre de Zed vous touche avec cette compétence."
    ],
    "abilities": {
      "passive": {
        "name": "Mépris des faibles",
        "description": "Les attaques de base de Zed infligent des dégâts magiques supplémentaires aux cibles dont les PV sont faibles. Cet effet ne peut se déclencher sur un même champion ennemi qu'une fois toutes les quelques secondes.",
        "icon": "ZedP.png"
      },
      "q": {
        "name": "Shuriken-rasoir",
        "description": "Zed et ses ombres lancent leurs shurikens.<br><br>Chaque shuriken blesse tous les ennemis touchés.",
        "icon": "ZedQ.png"
      },
      "w": {
        "name": "Ombre vivante",
        "description": "<font color='#FF9900'>Passive :</font> Zed regagne de l'énergie quand ses ombres et lui frappent un ennemi avec la même compétence. L'énergie ne peut être récupérée qu'une fois par utilisation d'une compétence.<br><br><font color='#FF9900'>Active :</font> l'ombre de Zed fonce vers l'avant et reste sur place pendant quelques secondes. Réactiver Ombre vivante permet à Zed de changer de position avec cette ombre.",
        "icon": "ZedW.png"
      },
      "e": {
        "name": "Taillade des ombres",
        "description": "Zed et ses ombres donnent un coup de taille et blessent les ennemis proches. Les ennemis touchés par la taillade d'une ombre sont ralentis.",
        "icon": "ZedE.png"
      },
      "r": {
        "name": "Marque de la mort",
        "description": "Zed devient impossible à cibler et fonce sur un champion ennemi pour le marquer. Au bout de 3 sec, la marque explose, infligeant de nouveau un pourcentage de tous les dégâts infligés par Zed pendant la durée de la marque.",
        "icon": "ZedR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Class-scale Update",
        "date": "2016-11-10",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/preseason-2017/assassins",
          "label": "Slayers: Assassins"
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2016-11-10",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/preseason-2017/assassins",
        "label": "Slayers: Assassins"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Zed: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=2DFtlNGzMIA",
        "published": "2012-11-13",
        "duration": 360
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Zed Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=hUnOvpyL1us",
        "published": "2026-04-07",
        "duration": 180
      }
    ],
    "releaseDate": "2012-11-13"
  },
  {
    "id": "zeri",
    "key": "0221",
    "ddid": "Zeri",
    "name": "Zeri",
    "title": "Étincelle de Zaun",
    "roles": {
      "adc": {
        "tier": "A",
        "wr": 51.63,
        "pr": 4.9,
        "ban": 0.81
      }
    },
    "damageType": "AD",
    "dmgRating": {
      "attack": 8,
      "magic": 3
    },
    "class": "Tireur",
    "strengths": [],
    "counters": [],
    "abilities": {
      "passive": {
        "name": "Batterie vivante",
        "description": "Les attaques de Zeri infligent des dégâts magiques et sont traitées comme des compétences. Se déplacer et lancer Rafale stocke de l'énergie dans le Paquetage ionique de Zeri. Lorsqu'elle est chargée à bloc, sa prochaine attaque inflige des dégâts supplémentaires.",
        "icon": "ZeriP.png"
      },
      "q": {
        "name": "Rafale",
        "description": "Rafale tire 7 balles qui infligent les dégâts d'attaque de Zeri au premier ennemi touché. Cette compétence est traitée comme une attaque.",
        "icon": "ZeriQ.png"
      },
      "w": {
        "name": "Laser électrocuteur",
        "description": "Zeri lance une impulsion électrique qui ralentit et blesse le premier ennemi touché. Si l'impulsion touche un mur, elle se transforme en laser à longue portée.",
        "icon": "ZeriW.png"
      },
      "e": {
        "name": "Charge ionique",
        "description": "Zeri effectue une courte ruée et renforce Rafale, qui devient perforante. Elle bondit par-dessus tous les obstacles qu'elle touche.",
        "icon": "ZeriE.png"
      },
      "r": {
        "name": "Éruption électrique",
        "description": "Zeri provoque une nova d'électricité et se surcharge : elle inflige plus de dégâts et gagne un bonus cumulable en vitesse d'attaque qui s'actualise et augmente à chaque fois qu'elle touche un champion ennemi. Lorsque Zeri est surchargée, Rafale devient un triple tir plus rapide qui crée une chaîne d'éclairs entre les ennemis.",
        "icon": "ZeriR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Zeri | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=sT1aJGGGv-M",
        "published": "2022-01-20",
        "duration": 242
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Zeri Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=VcaUG8hV9SU",
        "published": "2022-01-20",
        "duration": 242
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Zeri Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=gr8DNcGo0ck",
        "published": "2025-12-22",
        "duration": 180
      }
    ],
    "releaseDate": "2022-01-20"
  },
  {
    "id": "ziggs",
    "key": "0115",
    "ddid": "Ziggs",
    "name": "Ziggs",
    "title": "Expert des Hexplosifs",
    "roles": {
      "mid": {
        "tier": "B",
        "wr": 49.85,
        "pr": 0.64,
        "ban": 1.51
      },
      "adc": {
        "tier": "A",
        "wr": 50.83,
        "pr": 2.07,
        "ban": 1.59
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 2,
      "magic": 9
    },
    "class": "Mage",
    "strengths": [
      "Même loin du combat, vous pouvez aider vos alliés avec Méga bombe infernale.",
      "Ralentir vos ennemis avec Mines Hexplosives facilite l'utilisation de vos autres compétences.",
      "Vous propulser par-dessus les murs avec Charge explosive peut être utile pour suivre ou fuir des ennemis."
    ],
    "counters": [
      "Ne marchez pas sur les mines de Ziggs ! Elles vous ralentissent et permettent à Ziggs de vous toucher plus facilement avec d'autres compétences.",
      "La plupart des compétences de Ziggs ont des délais de récupération importants. Attaquez après qu'il a utilisé ses compétences.",
      "L'ultime de Ziggs, Méga bombe infernale, inflige plus de dégâts au centre de l'explosion."
    ],
    "abilities": {
      "passive": {
        "name": "Mèche courte",
        "description": "Périodiquement, la prochaine attaque de base de Ziggs inflige des dégâts magiques supplémentaires. Ce délai est réduit quand Ziggs utilise une compétence.",
        "icon": "ZiggsPassiveReady.png"
      },
      "q": {
        "name": "Bombe rebondissante",
        "description": "Ziggs lance une bombe rebondissante qui inflige des dégâts magiques.",
        "icon": "ZiggsQ.png"
      },
      "w": {
        "name": "Charge explosive",
        "description": "Ziggs jette une charge explosive qui explose après un délai, ou quand vous réactivez cette compétence. L'explosion inflige des dégâts magiques aux ennemis et les repousse. Ziggs aussi est repoussé mais il ne subit aucun dégât. <br><br>Ziggs peut utiliser cette charge pour hexploser les tourelles ennemies vulnérables.",
        "icon": "ZiggsW.png"
      },
      "e": {
        "name": "Mines Hexplosives",
        "description": "Ziggs disperse des mines de proximité qui explosent au contact des ennemis, leur infligeant des dégâts magiques et les ralentissant. Quand un ennemi déclenche une mine, les mines supplémentaires lui infligent des dégâts réduits.",
        "icon": "ZiggsE.png"
      },
      "r": {
        "name": "Méga bombe infernale",
        "description": "Ziggs déploie sa création ultime, la Méga bombe infernale, et la lance de très loin. Les ennemis dans la zone d'impact principale subissent plus de dégâts que les ennemis plus éloignés.",
        "icon": "ZiggsR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2019-06-12",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/https://boards.na.leagueoflegends.com/en/c/developer-corner/cRIFiyaO-vfx-updates-for-amumu-lulu-tryndamere-and-ziggs",
          "label": null
        }
      },
      {
        "type": "Class-scale Update",
        "date": "2016-05-04",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/mid-season-magic",
          "label": "Mages: Battlemages"
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2016-05-04",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/mid-season-magic",
        "label": "Mages: Battlemages"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Ziggs: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=kNabvLyUXzI",
        "published": "2012-01-31",
        "duration": 378
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Ziggs Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=gThjcTzRP3M",
        "published": "2026-03-03",
        "duration": 180
      }
    ],
    "releaseDate": "2012-02-01"
  },
  {
    "id": "zilean",
    "key": "0026",
    "ddid": "Zilean",
    "name": "Zilean",
    "title": "Gardien du Temps",
    "roles": {
      "sup": {
        "tier": "A",
        "wr": 51.44,
        "pr": 3.3,
        "ban": 1.9
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 2,
      "magic": 8
    },
    "class": "Soutien / Mage",
    "strengths": [
      "Combinez Bombe à retardement et Retour rapide pour placer rapidement deux Bombes à retardement sur une cible. Placer la seconde bombe fera exploser la première et étourdira tous les ennemis proches.",
      "Distorsion temporelle est très utile pour permettre aux alliés d'achever les ennemis ou pour fuir un combat perdu.",
      "Retour temporel est un bon moyen d'éviter que vos carrys se fassent attaquer, mais si vous le lancez trop rapidement, l'ennemi peut changer de cible à temps et ainsi limiter son efficacité."
    ],
    "counters": [
      "Si vous arrivez à être aussi rapide que Zilean, il est parfois utile d'attendre que son ultime soit terminé pour porter le coup de grâce.",
      "Zilean est fragile si une équipe se concentre sur lui, mais il est sinon difficile à tuer. Occupez-vous de lui en équipe."
    ],
    "abilities": {
      "passive": {
        "name": "Temps dans une bouteille",
        "description": "Zilean stocke du temps sous forme d'expérience et peut l'offrir à ses alliés. Quand il a suffisamment d'expérience pour augmenter le niveau d'un allié, il peut la lui offrir en lui cliquant dessus avec le bouton droit. Zilean reçoit autant d'expérience qu'il en donne.",
        "icon": "Zilean_Passive.png"
      },
      "q": {
        "name": "Bombe à retardement",
        "description": "Lance une bombe dans une zone. La bombe se colle sur une unité qui s'en approche (en priorité les champions) et explose après 3 secondes, infligeant des dégâts de zone. Si une Bombe à retardement explose prématurément à cause d'une autre Bombe à retardement, les ennemis sont également étourdis.",
        "icon": "ZileanQ.png"
      },
      "w": {
        "name": "Retour rapide",
        "description": "Zilean se prépare à de futures confrontations, réduisant le délai de récupération de ses autres compétences.",
        "icon": "ZileanW.png"
      },
      "e": {
        "name": "Distorsion temporelle",
        "description": "Zilean distord le temps autour d'une unité, réduisant la vitesse de déplacement d'un ennemi ou augmentant celle d'un allié pendant un court moment.",
        "icon": "TimeWarp.png"
      },
      "r": {
        "name": "Retour temporel",
        "description": "Zilean place une rune temporelle sur un champion allié, le renvoyant dans le passé s'il subit des dégâts mortels.",
        "icon": "ChronoShift.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Visual (VFX) Update",
        "date": "2021-07-08",
        "kitAffecting": false,
        "source": {
          "url": "https://twitter.com/Sirhaian/status/1408121413328719875",
          "label": null
        }
      },
      {
        "type": "Visual (VFX) and Gameplay Update",
        "date": "2015-02-25",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/game-updates/patch/patch-54-notes",
          "label": null
        }
      },
      {
        "type": "Visual (Texture) Update",
        "date": "2014-11-20",
        "kitAffecting": false,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/news/game-updates/patch/patch-420-notes",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Visual (VFX) and Gameplay Update",
      "date": "2015-02-25",
      "source": {
        "url": "https://web.archive.org/web/0/https://na.leagueoflegends.com/en/news/game-updates/patch/patch-54-notes",
        "label": null
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Zaahen Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=S3F9CpeiSNE",
        "published": "2025-11-10",
        "duration": 193
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Zilean Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=9ZJ4mJ-CiHY",
        "published": "2025-04-01",
        "duration": 180
      }
    ],
    "releaseDate": "2009-04-18"
  },
  {
    "id": "zoe",
    "key": "0142",
    "ddid": "Zoe",
    "name": "Zoe",
    "title": "Manifestation du Crépuscule",
    "roles": {
      "mid": {
        "tier": "A",
        "wr": 50.38,
        "pr": 2.81,
        "ban": 3.31
      },
      "sup": {
        "tier": "B",
        "wr": 48.05,
        "pr": 0.93,
        "ban": 3.23
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 1,
      "magic": 8
    },
    "class": "Mage",
    "strengths": [
      "Les dégâts d'Astro-pong augmentent avec la distance parcourue. Lancez-le derrière vous avant de le rediriger pour infliger d'énormes dégâts.",
      "Réveillez vos cibles avec votre principale source de dégâts, car les ennemis endormis subissent deux fois plus de dégâts.",
      "Si Bulle soporifique est lancée par-dessus un mur, sa portée est augmentée. Trouvez un endroit où vous cacher pour préparer une élimination à longue distance."
    ],
    "counters": [
      "Les dégâts d'Astro-pong de Zoé augmentent avec la distance parcourue.",
      "Zoé doit revenir à son point de départ après avoir utilisé Bond dimensionnel, ce qui la rend vulnérable à une contre-attaque.",
      "Si Bulle soporifique est lancée par-dessus un mur, sa portée est augmentée. Empêchez Zoé de se cacher dans le brouillard de guerre pour éviter qu'elle ne puisse préparer son sort."
    ],
    "abilities": {
      "passive": {
        "name": "Plus d'étincelles !",
        "description": "Après avoir lancé une compétence, la prochaine attaque de base de Zoé inflige des dégâts magiques supplémentaires.",
        "icon": "Zoe_P.png"
      },
      "q": {
        "name": "Astro-pong !",
        "description": "Zoé lance un projectile qu'elle peut rediriger en vol. Les dégâts augmentent avec la distance parcourue en ligne droite.",
        "icon": "ZoeQ.png"
      },
      "w": {
        "name": "Voleuse de sorts",
        "description": "Zoé peut ramasser les vestiges des sorts d'invocateur et des propriétés actives d'objets utilisés par les ennemis, puis les utiliser elle-même. Quand Zoé utilise un sort d'invocateur, elle tire aussi trois projectiles sur l'ennemi le plus proche.",
        "icon": "ZoeW.png"
      },
      "e": {
        "name": "Bulle soporifique",
        "description": "La cible devient somnolente, puis s'endort. Tant que la cible dort, sa résistance magique est réduite. Les dégâts qui réveillent la cible sont doublés, jusqu'à un montant max.",
        "icon": "ZoeE.png"
      },
      "r": {
        "name": "Bond dimensionnel",
        "description": "Téléporte Zoé à un endroit proche pendant 1 sec, avant de la faire revenir à son point de départ.",
        "icon": "ZoeR.png"
      }
    },
    "reworkHistory": [],
    "lastKitRework": null,
    "videos": [
      {
        "lang": "fr",
        "kind": "official",
        "channel": "League of Legends - France",
        "label": "Focus sur Zoé | Gameplay – League of Legends",
        "url": "https://www.youtube.com/watch?v=xpPTSdDejqo",
        "published": "2017-11-20",
        "duration": 313
      },
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Zoe Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=HhwRz47Kk2Y",
        "published": "2017-11-20",
        "duration": 312
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Zoe Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=OCzk47EN-CQ",
        "published": "2025-09-08",
        "duration": 180
      }
    ],
    "releaseDate": "2017-11-21"
  },
  {
    "id": "zyra",
    "key": "0143",
    "ddid": "Zyra",
    "name": "Zyra",
    "title": "Dame aux ronces",
    "roles": {
      "jgl": {
        "tier": "A",
        "wr": 51.3,
        "pr": 1.37,
        "ban": 2.33
      },
      "sup": {
        "tier": "B",
        "wr": 49.92,
        "pr": 2.46,
        "ban": 2.37
      }
    },
    "damageType": "AP",
    "dmgRating": {
      "attack": 4,
      "magic": 8
    },
    "class": "Mage / Soutien",
    "strengths": [
      "Placer une graine sur le trajet de votre sort juste après l'avoir lancé vous donne plus de chances de déclencher l'effet.",
      "Les graines confèrent de la vision à votre équipe.",
      "Zyra est excellente pour les embuscades : essayez de placer des graines en guise de piège dans les hautes herbes et d'y attirer l'ennemi."
    ],
    "counters": [
      "Les graines de Zyra peuvent être détruites en marchant dessus. Si elle tente de faire pousser des plantes quand vous vous en approchez, reculez au dernier moment pour esquiver.",
      "S'approcher de Zyra peut être une bonne idée si elle place des plantes trop loin d'elle.",
      "Les plantes subissent des dégâts fixes, comme les balises. Leur durée de vie est aussi très courte.",
      "Déplacer le combat dans une zone différente privera Zyra des graines déjà plantées.",
      "Les graines plantées par le Z de Zyra sont plus grosses et d'une couleur différente, et elles confèrent un peu de vision à son équipe."
    ],
    "abilities": {
      "passive": {
        "name": "Jardin de ronces",
        "description": "Des graines apparaissent régulièrement autour de Zyra, de plus en plus souvent au fur et à mesure qu'elle gagne des niveaux. Zyra peut lancer Épines funestes ou Racines fixatrices près des graines pour faire pousser des plantes qui combattront pour elle.",
        "icon": "ZyraP.png"
      },
      "q": {
        "name": "Épines funestes",
        "description": "Des ronces se répandent dans le sol et provoquent une explosion d'épines, infligeant des dégâts magiques aux ennemis dans la zone. Si le sort est lancé près d'une graine, Épines funestes fait pousser une Cracheuse de ronces qui tire sur les ennemis de loin.",
        "icon": "ZyraQ.png"
      },
      "w": {
        "name": "Croissance incontrôlée",
        "description": "Zyra plante une graine qui dure jusqu'à 60 sec. Lancer Épines funestes ou Racines fixatrices près des graines les change en plantes qui combattront pour Zyra. Zyra peut stocker plusieurs graines. Tuer des ennemis réduit le délai de rechargement de Croissance incontrôlée.",
        "icon": "ZyraW.png"
      },
      "e": {
        "name": "Racines fixatrices",
        "description": "Zyra lance des racines à travers le sol pour capturer sa cible, infligeant des dégâts et immobilisant les ennemis qu'elles touchent. Si le sort est lancé près d'une graine, Racines fixatrices fait pousser une Plante flagellante dont les attaques à courte portée réduisent la vitesse de déplacement des ennemis.",
        "icon": "ZyraE.png"
      },
      "r": {
        "name": "Ronces étrangleuses",
        "description": "Zyra invoque des ronces malfaisantes dans la zone ciblée, infligeant des dégâts aux ennemis en s'étendant avant de les projeter en l'air. Les plantes dans les ronces deviennent enragées.",
        "icon": "ZyraR.png"
      }
    },
    "reworkHistory": [
      {
        "type": "Class-scale Update",
        "date": "2016-05-04",
        "kitAffecting": true,
        "source": {
          "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/mid-season-magic",
          "label": "Mages: Battlemages"
        }
      },
      {
        "type": "Visual (Texture) and Gameplay Update",
        "date": "2016-05-04",
        "kitAffecting": true,
        "source": {
          "url": "https://na.leagueoflegends.com/en/featured/mid-season-magic",
          "label": null
        }
      }
    ],
    "lastKitRework": {
      "type": "Class-scale Update",
      "date": "2016-05-04",
      "source": {
        "url": "https://web.archive.org/web/0/http://na.leagueoflegends.com/en/featured/mid-season-magic",
        "label": "Mages: Battlemages"
      }
    },
    "videos": [
      {
        "lang": "en",
        "kind": "official",
        "channel": "League of Legends",
        "label": "Zyra: Champion Spotlight | Gameplay - League of Legends",
        "url": "https://www.youtube.com/watch?v=v9DLY0Qrcm4",
        "published": "2012-07-24",
        "duration": 383
      },
      {
        "lang": "en",
        "kind": "community",
        "channel": "3 Minute League of Legends",
        "label": "3 Minute Zyra Guide - A Guide for League of Legends",
        "url": "https://www.youtube.com/watch?v=QLRQB4IAFCU",
        "published": "2026-03-28",
        "duration": 180
      }
    ],
    "releaseDate": "2012-07-24"
  }
];
