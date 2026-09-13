#!/usr/bin/env python3
"""Mise à jour des taux de victoire, de pick et de ban par palier — écrit data/roles_tiers.js (rien d'autre).

Source : les pages « tier list » de lolalytics (Ranked Solo/Duo, toutes régions, patch courant), une page par palier et
par rôle : https://lolalytics.com/lol/tierlist/?lane=<top|jungle|middle|bottom|support>&tier=<iron|bronze|silver|gold|…>
Chaque page embarque ses données dans un bloc <script type="qwik/json"> (format Qwik : tableau `objs`, chaque valeur est
un index base 36 vers ce tableau) ; le bloc est décodé sans exécuter de JavaScript. Repris tels quels, par champion et
rôle : WR, pick, ban, nombre de parties, note de tier (S+ … D), et par palier × rôle le nombre de parties analysées
(le poids d'un palier quand plusieurs sont combinés sur le site).

Usage, depuis la racine du site (le dossier qui contient index.html) :
    python3 script/update_tiers.py                 # paliers Fer, Bronze, Argent, Or + Émeraude+ (référence)
    python3 script/update_tiers.py --tiers iron bronze silver gold emerald_plus --sleep 1.5
Durée : ≈ 1 minute (25 pages, 1,5 s entre deux pages, sans clé ni compte). Python 3 seul, aucune dépendance.
"""
import json, re, sys, time, urllib.request, argparse, os

LANES = {'top': 'top', 'jungle': 'jgl', 'middle': 'mid', 'bottom': 'adc', 'support': 'sup'}
TIER_LABEL = {'iron': 'Fer', 'bronze': 'Bronze', 'silver': 'Argent', 'gold': 'Or', 'platinum': 'Platine', 'emerald': 'Émeraude',
              'diamond': 'Diamant', 'master': 'Master', 'emerald_plus': 'Émeraude+', 'diamond_plus': 'Diamant+', 'master_plus': 'Master+', 'all': 'Tous'}

def fetch(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (LoL by Noob for Noobs, script/update_tiers.py)'})
    return urllib.request.urlopen(req, timeout=60).read().decode('utf-8', 'replace')

def qwik(html):
    """Décode le bloc qwik/json : renvoie (objs, resolve) — resolve(dict|list) remplace les références par leurs valeurs."""
    m = re.search(r'<script type="qwik/json">(.*?)</script>', html, re.S)
    if not m: raise RuntimeError('bloc qwik/json introuvable')
    objs = json.loads(m.group(1))['objs']
    SPECIAL = set('\x01\x02\x03\x04\x05\x06\x07\x08\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f')
    def deref(ref, depth):
        if not isinstance(ref, str) or ref == '': return ref
        if ref[0] in SPECIAL: return None
        try: i = int(ref, 36)
        except ValueError: return ref
        if i >= len(objs): return ref
        t = objs[i]
        if isinstance(t, (dict, list)): return resolve(t, depth + 1)
        if isinstance(t, str) and t and t[0] in SPECIAL: return None
        return t
    def resolve(v, depth=0):
        if depth > 40: return None
        if isinstance(v, list): return [deref(x, depth) for x in v]
        if isinstance(v, dict): return {k: deref(x, depth) for k, x in v.items()}
        return v
    return objs, resolve

def parse_page(html):
    objs, resolve = qwik(html)
    nav = table = None; rows = []
    for o in objs:
        if not isinstance(o, dict): continue
        if nav is None and 'tier' in o and 'lane' in o and 'patch' in o and 'cid' in o: nav = resolve(o)
        elif table is None and 'avgWr' in o and 'analysed' in o and 'queue' in o: table = resolve(o)
        elif 'row' in o and 'cid' in o and '$$nav' in o:
            r = resolve(o)
            if isinstance(r.get('row'), dict): rows.append((r['cid'], r['row']))
    if not (nav and table and rows): raise RuntimeError('structure de page inattendue')
    return nav, table, rows

def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('--tiers', nargs='+', default=['iron', 'bronze', 'silver', 'gold', 'emerald_plus'])
    ap.add_argument('--sleep', type=float, default=1.5)
    ap.add_argument('--out', default=os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'data', 'roles_tiers.js'))
    a = ap.parse_args()
    out = {'source': 'lolalytics', 'queue': 420, 'retrieved': time.strftime('%Y-%m-%d'), 'patch': None,
           'tiers': {t: {'label': TIER_LABEL.get(t, t), 'lanes': {}} for t in a.tiers}, 'champions': {}}
    n = 0
    for tier in a.tiers:
        for lane, key in LANES.items():
            url = f'https://lolalytics.com/lol/tierlist/?lane={lane}&tier={tier}'
            try:
                nav, table, rows = parse_page(fetch(url))
            except Exception as e:
                print(f'  {tier} {lane} : échec ({e})', file=sys.stderr); time.sleep(a.sleep); continue
            out['patch'] = out['patch'] or nav.get('patch')
            out['tiers'][tier]['lanes'][key] = {'analysed': table['analysed'], 'avgWr': table['avgWr']}
            for cid, row in rows:
                if row.get('wr') is None or not row.get('games'): continue
                out['champions'].setdefault(str(cid), {}).setdefault(key, {})[tier] = {
                    'wr': row['wr'], 'pr': row['pr'], 'br': row['br'], 'games': row['games'], 'grade': row.get('tier')}
            n += 1; print(f'  {tier} {lane} : {len(rows)} champions, {table["analysed"]} parties analysées', file=sys.stderr)
            time.sleep(a.sleep)
    header = ('// GÉNÉRÉ par script/update_tiers.py — ne pas éditer à la main. Taux de victoire (wr), de pick (pr) et de ban (br) par\n'
              '// champion (clé numérique Riot) × rôle × palier, avec le nombre de parties du champion (games) et sa note de tier (grade) ;\n'
              '// tiers[<palier>].lanes[<rôle>].analysed = parties analysées du palier au rôle (poids pour combiner des paliers).\n'
              f'// Source lolalytics, Ranked Solo/Duo, toutes régions, patch {out["patch"]}, récupéré le {out["retrieved"]} — mécanisme « rolesTiers » de data/sources.js.\n')
    with open(a.out, 'w', encoding='utf-8') as f:
        f.write(header + 'const ROLES_TIERS = ' + json.dumps(out, ensure_ascii=False, separators=(',', ':')) + ';\n')
    print(f'{n} pages lues, {len(out["champions"])} champions, patch {out["patch"]} → {os.path.normpath(a.out)}', file=sys.stderr)

if __name__ == '__main__':
    main()
