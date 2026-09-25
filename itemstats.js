// Statistiques données par les objets, lues dans les descriptions officielles (bloc <stats> de item.json, Data Dragon
// fr_FR — mécanisme « refs » de data/sources.js) : "+60 dégâts d'attaque", "20% vitesse d'attaque"… Un même nom
// d'objet existe parfois sous deux identifiants (variante de mode, étape d'évolution) : un seul est gardé, le plus
// petit identifiant, celui des builds réels. Partagé par la page Effets et statistiques des objets et par la sous-page
// Objets (filtres). Expose ItemStats = { srItems, canonItem, isCanonItem, stats, itemStats, statList, CATEGORIES, catOf, statLine }.
(function(){
  const norm = s => s.toLowerCase().replace(/\s+/g, ' ').trim();
  const CANON_BY_NAME = {};
  Object.keys(ITEMS).map(Number).filter(id => ITEMS[id].sr && ITEMS[id].inStore !== false).forEach(id => { const n = ITEMS[id].name; if(CANON_BY_NAME[n] === undefined || id < CANON_BY_NAME[n]) CANON_BY_NAME[n] = id; });
  const canonItem = id => CANON_BY_NAME[ITEMS[id] ? ITEMS[id].name : ''] ?? id;
  const isCanonItem = id => canonItem(id) === id;
  const srItems = Object.keys(ITEMS).map(Number).filter(id => ITEMS[id].sr && ITEMS[id].inStore !== false && ITEMS[id].gold > 0 && isCanonItem(id));
  const stats = {}, itemStats = {};   // stats[terme] = { term, items:Set, pct, flat } ; itemStats[id] = Set des termes
  for(const id of srItems){
    const m = ITEMS[id].description.match(/<stats>([\s\S]*?)<\/stats>/i); if(!m) continue;
    for(const raw of m[1].split(/<br\s*\/?>/i)){
      const line = raw.replace(/<[^>]+>/g, '').trim(); if(!line) continue;
      const mm = line.match(/^\+?\s*[\d.,]+\s*(%)?\s*(.+)$/); if(!mm) continue;
      const term = norm(mm[2]).replace(/^(de |d'|des )/, '');
      const e = stats[term] || (stats[term] = { term, items: new Set(), pct: 0, flat: 0 });
      e.items.add(id); if(mm[1]) e.pct++; else e.flat++;
      (itemStats[id] || (itemStats[id] = new Set())).add(term);
    }
  }
  const statList = Object.values(stats).sort((a, b) => b.items.size - a.items.size);
  // Familles de statistiques — table fixe, un terme non listé va dans « Autres ».
  const CATEGORIES = [
    ['degats', 'Dégâts', ["dégâts d'attaque", 'puissance', 'force adaptative', "vitesse d'attaque", 'chances de coup critique', 'dégâts de coup critique']],
    ['penetration', 'Pénétration (contre les résistances)', ['létalité', "pénétration d'armure", 'pénétration magique']],
    ['durabilite', 'Résistance et durabilité', ['pv', 'armure', 'résistance magique', 'régénération de base des pv', 'ténacité', 'résistance aux ralentissements']],
    ['soins', 'Soins et vol de vie', ['vol de vie', 'omnivampirisme', 'efficacité des soins et boucliers']],
    ['ressources', 'Ressources et récupération', ['mana', 'régénération de base du mana', 'accélération de compétence', 'po toutes les 10 sec']],
    ['mobilite', 'Mobilité et portée', ['vitesse de déplacement', "portée d'attaque"]],
  ];
  const catOf = term => (CATEGORIES.find(c => c[2].includes(term)) || ['autres', 'Autres'])[0];
  const statLine = id => { const m = ITEMS[id].description.match(/<stats>([\s\S]*?)<\/stats>/i); return m ? m[1].replace(/<br\s*\/?>/gi, ' · ').replace(/<[^>]+>/g, '').trim() : ''; };
  window.ItemStats = { srItems, canonItem, isCanonItem, stats, itemStats, statList, CATEGORIES, catOf, statLine };
})();
