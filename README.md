# LoL by Noob for Noobs

Un guide de League of Legends fait par un noob, pour les noobs.

Quand on débute, on trouve partout des chiffres, des tier lists et des builds, mais presque rien qui explique *pourquoi* : pourquoi ce champion gagne contre celui-là, ce que fait vraiment un sort, à quoi sert cet objet, ce que veut dire un pourcentage de victoire. Les guides s'adressent à des joueurs qui savent déjà. Faute de trouver cette documentation, je la fais moi-même, comme je peux, au fil de ce que j'apprends, et je la partage : si elle m'aide, elle peut aider d'autres débutants.

Le site est publié sur GitHub Pages : **https://xavinsky.github.io/lolbynoobfornoobs/**

## Ce qu'on y trouve

- **Champions** : la liste avec ce qui compte pour choisir (type de dégâts, phase de force, rôles, popularité), et pour chacun sa fiche : points forts et contre, compétences avec leur animation et leurs mécaniques expliquées, vidéos de présentation, mises à jour du personnage, courbe de puissance selon la durée de partie.
- **Bases** : les compétences classées par ce qu'elles font (comment on vise, qui est touché, quel type de dégâts, quelle portée, quel effet), les objets, leurs effets et leurs statistiques expliqués un par un.
- **Sources** : d'où vient chaque information, à quelle date, avec quelle règle de calcul, et ce que veut dire chaque valeur affichée. Rien n'est affiché sans sa source.

## Comment c'est fait

Des pages statiques, sans serveur : le site s'ouvre aussi bien en local qu'en ligne. Ce dépôt est généré depuis un brouillon de travail privé, où j'avance sur d'autres sujets (statistiques par palier, counters, matchmaking) avant de les publier ; il n'est pas édité à la main.

Les données viennent de Data Dragon (Riot Games), du wiki League of Legends, d'op.gg et de lolalytics ; le détail et les dates de récupération sont sur la page Sources.

## Mettre à jour les statistiques

Les taux de victoire, de pick et de ban par palier (Fer, Bronze, Argent, Or, et la référence Émeraude+) se périment à chaque patch. Le script livré avec le site les rafraîchit :

```
python3 script/update_tiers.py
```

À lancer depuis la racine du site (le dossier qui contient `index.html`). Il lit 25 pages « tier list » de lolalytics, une par palier et par rôle, sans clé ni compte, en une minute environ (Python 3 seul, aucune dépendance), et modifie **un seul fichier : `data/roles_tiers.js`**, qui porte la date et le patch de la mise à jour. Le sélecteur de paliers du site lit ce fichier ; le reste des données (compétences, objets, stats par rôle de référence) est régénéré depuis le brouillon privé.

## Licences

Code et textes du site : [licence MIT](LICENSE). Les textes traduits ou résumés du wiki League of Legends restent sous [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/), page d'origine citée. Les données de jeu, noms, icônes et vidéos appartiennent à Riot Games.

LoL by Noob for Noobs isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties. Riot Games, and all associated properties are trademarks or registered trademarks of Riot Games, Inc.
