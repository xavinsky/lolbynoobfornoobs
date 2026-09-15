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
  // Paliers pris en compte pour les taux (Fer, Bronze, Argent, Or) : réglage de tout le site, dans l'en-tête.
  // Mémorisé (localStorage docTiers) et transmis dans l'URL (`?tiers=`) comme le zoom ; tout décocher = les quatre.
  const TIERS = [['iron', 'Fer'], ['bronze', 'Bronze'], ['silver', 'Argent'], ['gold', 'Or']];
  const ALL_TIERS = TIERS.map(t => t[0]);
  const tierIconUrl = k => `https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-static-assets/global/default/images/ranked-mini-crests/${k}.png`;
  function readTiers(){
    const m = window.location.search.match(/[?&]tiers=([a-z,]+)/);
    let t = m ? m[1].split(',') : null;
    if(!t){ try{ t = JSON.parse(localStorage.getItem('docTiers')); }catch(e){} }
    t = Array.isArray(t) ? ALL_TIERS.filter(k => t.includes(k)) : [];
    return t.length ? t : ALL_TIERS.slice();
  }
  let tiers = readTiers();
  function saveTiers(){ try{ localStorage.setItem('docTiers', JSON.stringify(tiers)); }catch(e){} }
  saveTiers();
  function tiersLabel(){ return TIERS.filter(t => tiers.includes(t[0])).map(t => t[1]).join(' + '); }
  function tierSelHtml(){
    return `<div class="tier-sel" title="Paliers pris en compte pour les taux de victoire, de pick et de ban, sur tout le site ; tout décocher = les quatre">${TIERS.map(([k, l]) => `<button type="button" data-tier="${k}"${tiers.includes(k) ? ' class="on"' : ''} title="${l}${tiers.includes(k) ? ' — pris en compte' : ' — désactivé'}" aria-label="${l}"><img class="tier-icon" src="${tierIconUrl(k)}" alt="${l}"></button>`).join('')}</div>`;
  }
  function toggleTier(k){
    tiers = tiers.includes(k) ? tiers.filter(x => x !== k) : ALL_TIERS.filter(x => tiers.includes(x) || x === k);
    if(!tiers.length) tiers = ALL_TIERS.slice();
    saveTiers();
    const h = document.querySelector('header.masthead');
    if(h && h.dataset.section) render(h.dataset.section, h.dataset.page);
    window.dispatchEvent(new CustomEvent('tierschange', { detail: tiers.slice() }));
  }
  const SECTIONS = [
    { id:'champion', label:'Champion', href:'index.html#/list', subs:[
      { id:'list', label:'Liste', href:'index.html#/list' },
      { id:'detail', label:'Détail', href:'index.html#/champ' },
      { id:'roster', label:'Mon roster', href:'index.html#/roster' },
      { id:'counters', label:'Counters', href:'counters.html' },
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
      { id:'merci', label:'Remerciements', href:'sources.html#merci' },
      { id:'contribuer', label:'Contribuer', href:'sources.html#contribuer' },
      { id:'apropos', label:'À propos', href:'sources.html#apropos' },
    ]},
  ];
  // Édition publique (edition.js) : seules les sous-pages publiées restent dans le menu.
  const PUBLIC_SUBS = { champion: ['list', 'detail', 'counters'], bases: ['competences', 'objets', 'objets-effets'], sources: ['fiche', 'valeurs', 'origine', 'specifiques', 'merci', 'contribuer', 'apropos'] };
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
    if(tiers.length !== ALL_TIERS.length) q.push('tiers=' + tiers.join(','));
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
    header.innerHTML = `<div class="mast-row"><h1>LoL <span class="tagline">by Noob for Noobs</span></h1><nav class="app-nav">${main}</nav>${tierSelHtml()}${zoomCtl}</div><nav class="sub-menu">${subs}</nav>`;
    header.querySelectorAll('button[data-tier]').forEach(b => b.addEventListener('click', () => toggleTier(b.dataset.tier)));
    header.querySelectorAll('button[data-zoom]').forEach(b => b.addEventListener('click', () => {
      const k = b.dataset.zoom; setZoom(k === '+' ? zoom + ZOOM_STEP : k === '-' ? zoom - ZOOM_STEP : 1);
    }));
  }
  // ---------- Footer commun : une ligne, remerciements à gauche (45 %), qui fait le site à droite (55 %) ----------
  // À gauche, « GRAND MERCI à » et le lien vers l'origine des données restent fixes ; seule la liste des sites entre
  // les deux défile lentement quand elle dépasse (licences et détails : page Sources). À droite, sans défilement,
  // l'avertissement « fait par un noob, erreurs possibles », puis l'indépendance vis-à-vis de Riot Games Inc. quand la
  // place le permet (mention Riot complète : section « À propos » de la page Sources, liée depuis chaque page).
  const YT_ICON = '<svg viewBox="0 0 28 20" aria-hidden="true"><rect width="28" height="20" rx="5" fill="#FF0000"/><path d="M11 5.5 L20 10 L11 14.5 Z" fill="#fff"/></svg>';
  const ext = (href, label, cls) => `<a${cls ? ` class="${cls}"` : ''} href="${href}" target="_blank" rel="noopener">${label}</a>`;
  // Sites remerciés, rangés par contribution : moyenne de la part de chaque source dans le volume de données repris (ko :
  // Ko de texte dans data/, images et vidéos de Riot non comptées) et dans le nombre de références (refs : pages lues,
  // vidéos, entrées de données) ; valeurs estimées par tools/credits_volume.py.
  const CREDITS = [
    { ko: 2139, refs: 1311, label: 'wiki League of Legends', url: 'https://wiki.leagueoflegends.com', what: "mécaniques des sorts, effets des objets, définitions des statistiques, historique des refontes" },
    { ko: 1525, refs: 5185, label: 'lolalytics', url: 'https://lolalytics.com', what: "statistiques par rôle et par palier, mesures des counters" },
    { ko: 915, refs: 2002, label: 'Data Dragon', url: 'https://developer.riotgames.com/docs/lol#data-dragon', what: "noms, descriptions et icônes des champions, sorts, objets et runes ; conseils officiels" },
    { ko: 698, refs: 152, label: 'Namu Wiki', url: 'https://namu.wiki', what: "explications des matchups par les joueurs coréens (page Counters)" },
    { ko: 63, refs: 173, label: '3 Minute LoL', url: 'https://www.youtube.com/channel/UCbqpZInu-pjnBIy5sbh7Eag', yt: true, what: "vidéos de présentation et conseils tirés de ces vidéos" },
    { ko: 39, refs: 85, label: 'LoL France', url: 'https://www.youtube.com/channel/UCU-l1ajszDLFd6lWyCs1_GA', yt: true, what: "vidéos de présentation et conseils tirés de ces vidéos" },
    { ko: 38, refs: 160, label: 'League of Legends', url: 'https://www.youtube.com/channel/UC2t5bjwHdUX4vM2g8TRDq5g', yt: true, what: "vidéos de présentation des champions" },
    { ko: 15, refs: 173, label: 'op.gg', url: 'https://op.gg', what: "rôles des champions" },
  ];
  {
    const totKo = CREDITS.reduce((t, c) => t + c.ko, 0), totRefs = CREDITS.reduce((t, c) => t + c.refs, 0);
    CREDITS.forEach(c => { c.share = (c.ko / totKo + c.refs / totRefs) / 2; });
    CREDITS.sort((x, y) => y.share - x.share);
  }
  const creditLink = c => ext(c.url, (c.yt ? YT_ICON : '') + c.label, c.yt ? 'yt-link' : '');
  const HEART = '<span class="ft-heart" aria-hidden="true">❤️</span>';
  const LABELS = {
    left: { full: `${HEART} <b>GRAND MERCI</b> ${HEART} à :`, short: `${HEART} <b>MERCI</b> :` },
    more: { full: '<a href="sources.html#origine">et les autres</a>', short: '<a href="sources.html#origine" title="et les autres : origine des données">+ autres</a>' },
    // du plus complet au plus court : la première version qui tient sur la ligne est gardée
    right: [
      '<span class="ft-warn">⚠️ Fait par un noob de LoL : <span class="ft-err">erreurs possibles</span></span> · projet indépendant, sans lien avec Riot Games Inc. · <a href="sources.html#contribuer" data-contrib>Contribuer</a> · <a href="sources.html#apropos">À&nbsp;propos</a>',
      '<span class="ft-warn">⚠️ Fait par un noob de LoL : <span class="ft-err">erreurs possibles</span></span> · sans lien avec Riot Games Inc. · <a href="sources.html#contribuer" data-contrib>Contribuer</a> · <a href="sources.html#apropos">À&nbsp;propos</a>',
      '<span class="ft-warn">⚠️ Fait par un noob : <span class="ft-err">erreurs possibles</span></span> · <a href="sources.html#contribuer" data-contrib>Contribuer</a> · <a href="sources.html#apropos">À&nbsp;propos</a>',
      '<span class="ft-warn">⚠️ <span class="ft-err">Erreurs possibles</span></span> · <a href="sources.html#contribuer" data-contrib>Contribuer</a>',
    ],
  };
  function footerHtml(){
    const credits = CREDITS.map(creditLink);
    return `<div class="ft-half ft-left">
        <span class="ft-fixed ft-label">${LABELS.left.full}</span>
        <div class="ft-viewport"><div class="ft-track"><span class="ft-text">${credits.join(' · ')}<span class="ft-sep"> · </span></span></div></div>
        <span class="ft-fixed ft-more">${LABELS.more.full}</span>
      </div>
      <div class="ft-half ft-right"><span class="ft-static">${LABELS.right[0]}</span></div>`;
  }
  const FOOTER_SPEED = 35;   // pixels par seconde : lent, lisible sans effort
  const MIN_VIEWPORT = 90;   // largeur minimale de la zone qui défile avant d'abréger les parties fixes
  function fitFooter(footer){
    const still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    // droite : la version la plus complète qui tient ; sinon la plus courte en police réduite (jusqu'à 65 %) ; en dernier
    // recours, retour à la ligne
    const right = footer.querySelector('.ft-right'), rtext = right.querySelector('.ft-static');
    right.classList.remove('ft-wrap');
    rtext.style.removeProperty('font-size');
    const room = () => right.clientWidth - parseFloat(getComputedStyle(right).paddingLeft) - parseFloat(getComputedStyle(right).paddingRight);
    for(const version of LABELS.right){ rtext.innerHTML = version; if(rtext.offsetWidth <= room()) break; }
    for(let f = 95; rtext.offsetWidth > room() && f >= 65; f -= 5) rtext.style.fontSize = f + '%';
    if(rtext.offsetWidth > room()) right.classList.add('ft-wrap');
    // gauche : parties fixes complètes, abrégées si la zone qui défile devient trop étroite
    const left = footer.querySelector('.ft-left');
    const label = left.querySelector('.ft-label'), more = left.querySelector('.ft-more'), viewport = left.querySelector('.ft-viewport');
    label.innerHTML = LABELS.left.full;
    more.innerHTML = LABELS.more.full;
    if(viewport.clientWidth < MIN_VIEWPORT){ label.innerHTML = LABELS.left.short; more.innerHTML = LABELS.more.short; }
    const track = viewport.querySelector('.ft-track');
    track.querySelectorAll('.ft-clone').forEach(c => c.remove());
    track.classList.remove('ft-scroll');
    track.style.removeProperty('--ft-shift');
    track.style.removeProperty('animation-duration');
    const text = track.querySelector('.ft-text');
    // le séparateur de fin (même « · » qu'entre deux sites) ne sert qu'à raccorder la boucle
    if(still || text.scrollWidth - text.querySelector('.ft-sep').offsetWidth <= viewport.clientWidth) return;
    // liste trop longue pour sa zone : copie à la suite et défilement en boucle d'une longueur de liste
    const clone = text.cloneNode(true);
    clone.classList.add('ft-clone');
    clone.setAttribute('aria-hidden', 'true');
    clone.querySelectorAll('a').forEach(a => a.setAttribute('tabindex', '-1'));
    track.appendChild(clone);
    const shift = clone.offsetLeft - text.offsetLeft;
    track.style.setProperty('--ft-shift', `-${shift}px`);
    track.style.animationDuration = `${Math.max(8, shift / FOOTER_SPEED)}s`;
    track.classList.add('ft-scroll');
  }
  function renderFooter(){
    const footer = document.querySelector('footer');
    if(!footer) return;
    footer.classList.add('site-footer');
    footer.innerHTML = footerHtml();
    // « Contribuer » du footer : la section Contribuer reçoit la page d'où l'on vient (paramètres depuis / depuisPage),
    // qu'elle transmet au formulaire ; calculé au clic, l'adresse pouvant changer sans recharger (#/champ/…)
    footer.addEventListener('click', e => {
      const a = e.target.closest('a[data-contrib]');
      if(!a) return;
      const h = document.querySelector('header.masthead');
      const from = new URLSearchParams(location.search).get('depuis');
      const q = new URLSearchParams({ depuis: from || location.href, depuisPage: new URLSearchParams(location.search).get('depuisPage') || [h && h.dataset.section, h && h.dataset.page].filter(Boolean).join('/') });
      a.href = `sources.html?${q}#contribuer`;
    });
    fitFooter(footer);
    let t;
    const refit = () => { clearTimeout(t); t = setTimeout(() => fitFooter(footer), 150); };
    window.addEventListener('resize', refit);
    if(window.ResizeObserver) new ResizeObserver(refit).observe(footer);
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', renderFooter);
  else renderFooter();

  // ---------- Contribuer : formulaire Tally sans compte (champs cachés = contexte) et issues GitHub ----------
  // TALLY : lien de partage du formulaire (https://tally.so/r/<id>) ; vide = seuls les liens GitHub sont proposés.
  // Champs cachés du formulaire : site, page, url, champion, duel.
  const CONTRIBUTE = {
    site: 'lolbynoobfornoobs',
    tally: 'https://tally.so/r/pbQNoZ',
    issues: 'https://github.com/xavinsky/lolbynoobfornoobs/issues/new',
  };
  // ctx : { page, champion, duel, url } — contexte de la remarque ; url par défaut : adresse de la page courante
  function contributeUrl(ctx){
    const c = ctx || {};
    const url = c.url !== undefined ? c.url : (location.protocol.startsWith('http') ? location.href : '');
    if(CONTRIBUTE.tally){
      const q = new URLSearchParams({ site: CONTRIBUTE.site, page: c.page || '', url, champion: c.champion || '', duel: c.duel || '' });
      [...q.keys()].forEach(k => { if(!q.get(k)) q.delete(k); });
      return `${CONTRIBUTE.tally}?${q}`;
    }
    const title = c.champion ? `[${c.page || 'page'}] ${c.champion}${c.duel ? ' contre ' + c.duel : ''} : ` : '';
    const body = `Page : ${c.page || ''}${url ? '\nAdresse : ' + url : ''}\n\nMa remarque :\n`;
    return `${CONTRIBUTE.issues}?${new URLSearchParams({ title, body })}`;
  }
  function reportLink(ctx, label){
    return `<a class="report-link" href="${contributeUrl(ctx).replace(/&/g, '&amp;').replace(/"/g, '&quot;')}" target="_blank" rel="noopener">✍️ ${label || 'Signaler une erreur ou proposer mieux'}</a>`;
  }

  window.AppNav = { render, lastChamp, params, tiers: () => tiers.slice(), tiersLabel, TIERS, CREDITS, creditLink, CONTRIBUTE, contributeUrl, reportLink };
  const h = document.querySelector('header.masthead');
  if(h && h.dataset.section) render(h.dataset.section, h.dataset.page);
})();
