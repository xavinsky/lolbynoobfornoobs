// En-tête commun à toutes les pages : titre, menu principal (Champion / Bases / Sources) et sous-menu de la
// section courante. Chaque page porte <header class="masthead" data-section="…" data-page="…"> ; ce script
// remplit l'en-tête au chargement, et les pages à plusieurs vues (index.html, bases.html) rappellent
// AppNav.render(section, page) à chaque changement de vue.
//
// Dernier champion consulté : mémorisé par index.html dans localStorage (docLastChamp) et transmis aux autres
// pages dans l'URL (`?last=<id>`), localStorage étant isolé fichier par fichier sur file:// dans certains
// navigateurs. Le sous-menu « Détail » mène toujours quelque part : la fiche du dernier champion, sinon la
// vue Champion vide avec la recherche prête.
//
// Zoom (taille du texte) : boutons A− / A+ dans l'en-tête, facteur 0,8 → 1,6 appliqué à la taille de police du
// corps (variable CSS --zoom). Préférence du navigateur (localStorage docZoom), transmise aussi dans l'URL
// (`?zoom=`) pour tenir de page en page sur file://.
(function(){
  const ZOOM_MIN = 0.8, ZOOM_MAX = 1.6, ZOOM_STEP = 0.1;
  function readZoom(){
    const m = window.location.search.match(/[?&]zoom=([\d.]+)/);
    let z = m ? parseFloat(m[1]) : NaN;
    if(isNaN(z)){ try{ z = parseFloat(localStorage.getItem('docZoom')); }catch(e){} }
    return isNaN(z) ? 1 : Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, z));
  }
  let zoom = readZoom();
  function applyZoom(){
    document.documentElement.style.setProperty('--zoom', zoom);
    try{ localStorage.setItem('docZoom', zoom); }catch(e){}
  }
  function setZoom(z){
    zoom = Math.round(Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, z)) * 10) / 10;
    applyZoom();
    // Les liens de l'en-tête portent le zoom dans l'URL : on les régénère.
    const h = document.querySelector('header.masthead');
    if(h && h.dataset.section) render(h.dataset.section, h.dataset.page);
  }
  applyZoom();
  const SECTIONS = [
    { id:'champion', label:'Champion', href:'index.html#/list', subs:[
      { id:'list', label:'Liste', href:'index.html#/list' },
      { id:'detail', label:'Détail', href:'index.html#/champ' },
      { id:'roster', label:'Mon roster', href:'index.html#/roster' },
    ]},
    { id:'bases', label:'Bases', href:'bases.html#/cartes', subs:[
      { id:'cartes', label:'Cartes', href:'bases.html#/cartes' },
      { id:'vision', label:'Vision', href:'bases.html#/vision' },
      { id:'sbires', label:'Sbires et monstres', href:'bases.html#/sbires' },
      { id:'champion', label:'Champion', href:'bases.html#/champion' },
      { id:'competences', label:'Compétences', href:'competences.html' },
      { id:'objets', label:'Objets', href:'bases.html#/objets' },
      { id:'objets-effets', label:'Effets et statistiques des objets', href:'objets-effets.html' },
      { id:'runes', label:'Runes', href:'bases.html#/runes' },
      { id:'sorts', label:"Sorts d'invocateur", href:'bases.html#/sorts' },
      { id:'degats', label:'Calcul des dégâts', href:'degats.html' },
      { id:'matchmaking', label:'Matchmaking', href:'matchmaking.html' },
    ]},
    { id:'sources', label:'📎 Sources', href:'sources.html', subs:[
      { id:'fiche', label:'Fiche-type', href:'sources.html#fiche' },
      { id:'valeurs', label:'Valeurs', href:'sources.html#valeurs' },
      { id:'origine', label:'Origine des données', href:'sources.html#origine' },
      { id:'specifiques', label:'Sources spécifiques', href:'sources.html#specifiques' },
    ]},
  ];
  // Édition publique (edition.js) : seules les sous-pages publiées restent dans le menu.
  const PUBLIC_SUBS = { champion: ['list', 'detail'], bases: ['competences', 'objets', 'objets-effets'], sources: ['fiche', 'valeurs', 'origine', 'specifiques'] };
  if(window.isPublicEdition && window.isPublicEdition()){
    for(const s of SECTIONS){
      s.subs = s.subs.filter(x => (PUBLIC_SUBS[s.id] || []).includes(x.id));
      if(s.id === 'bases') s.href = 'competences.html';
    }
  }
  function lastChamp(){
    const m = window.location.search.match(/[?&]last=([^&]+)/);
    if(m) return decodeURIComponent(m[1]);
    try{ return localStorage.getItem('docLastChamp'); }catch(e){ return null; }
  }
  // Paramètres transmis de page en page dans l'URL : dernier champion (pages hors index) et zoom.
  function params(forIndex){
    const id = lastChamp(), q = [];
    if(id && !forIndex) q.push('last=' + encodeURIComponent(id));
    if(zoom !== 1) q.push('zoom=' + zoom);
    return q.length ? '?' + q.join('&') : '';
  }
  function withLast(href, id){
    const isIndex = href.startsWith('index.html');
    let [file, hash] = href.split('#');
    if(isIndex && id && href === 'index.html#/champ') hash = '/champ/' + encodeURIComponent(id);
    return file + params(isIndex) + (hash ? '#' + hash : '');
  }
  function render(section, page){
    const header = document.querySelector('header.masthead');
    if(!header) return;
    const id = lastChamp();
    const cur = SECTIONS.find(s => s.id === section) || SECTIONS[0];
    const main = SECTIONS.map(s => `<a href="${withLast(s.href, id)}"${s.id === cur.id ? ' class="on"' : ''}>${s.label}</a>`).join('');
    const subs = cur.subs.map(s => `<a href="${withLast(s.href, id)}" data-sub="${s.id}"${s.id === page ? ' class="on"' : ''}>${s.label}</a>`).join('');
    const zoomCtl = `<div class="zoom-ctl" title="Taille du texte (mémorisée, suivie de page en page)"><button type="button" data-zoom="-" aria-label="Réduire le texte">A−</button><button type="button" data-zoom="0" title="Taille normale">${Math.round(zoom * 100)} %</button><button type="button" data-zoom="+" aria-label="Agrandir le texte">A+</button></div>`;
    header.innerHTML = `<div class="mast-row"><h1>LoL <span class="tagline">by Noob for Noobs</span></h1><nav class="app-nav">${main}</nav>${zoomCtl}</div><nav class="sub-menu">${subs}</nav>`;
    header.querySelectorAll('button[data-zoom]').forEach(b => b.addEventListener('click', () => {
      const k = b.dataset.zoom; setZoom(k === '+' ? zoom + ZOOM_STEP : k === '-' ? zoom - ZOOM_STEP : 1);
    }));
  }
  window.AppNav = { render, lastChamp, params };
  const h = document.querySelector('header.masthead');
  if(h && h.dataset.section) render(h.dataset.section, h.dataset.page);
})();
