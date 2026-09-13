#!/usr/bin/env python3
"""Mise à jour des taux de victoire, de pick et de ban par palier.

Écrit un seul fichier : data/roles_tiers.js.

Source : les pages « tier list » de lolalytics (Ranked Solo/Duo, toutes régions,
patch courant), une page par palier et par rôle :
https://lolalytics.com/lol/tierlist/?lane=<top|jungle|middle|bottom|support>&tier=<iron|bronze|…>

Chaque page embarque ses données dans un bloc <script type="qwik/json"> (format Qwik :
tableau `objs`, chaque valeur est un index en base 36 vers ce tableau). Le bloc est
décodé sans exécuter de JavaScript. Repris tels quels, par champion et rôle : taux de
victoire, de pick et de ban, nombre de parties, note de tier ; et par palier et rôle
le nombre de parties analysées (poids d'un palier quand plusieurs sont combinés).

Usage, depuis la racine du site (le dossier qui contient index.html) :

    python3 script/update_tiers.py
    python3 script/update_tiers.py --tiers iron bronze silver gold emerald_plus --sleep 1.5

Durée : environ une minute (25 pages, 1,5 s entre deux pages, sans clé ni compte).
Python 3 seul, aucune dépendance.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
import urllib.request
from pathlib import Path
from typing import Any

LANES = {"top": "top", "jungle": "jgl", "middle": "mid", "bottom": "adc", "support": "sup"}
TIER_LABEL = {
    "iron": "Fer",
    "bronze": "Bronze",
    "silver": "Argent",
    "gold": "Or",
    "platinum": "Platine",
    "emerald": "Émeraude",
    "diamond": "Diamant",
    "master": "Master",
    "emerald_plus": "Émeraude+",
    "diamond_plus": "Diamant+",
    "master_plus": "Master+",
    "all": "Tous",
}
DEFAULT_TIERS = ["iron", "bronze", "silver", "gold", "emerald_plus"]
USER_AGENT = "Mozilla/5.0 (LoL by Noob for Noobs, script/update_tiers.py)"
# Caractères de contrôle qui marquent, dans le format Qwik, une référence interne (pas une donnée).
QWIK_SPECIAL = frozenset(chr(c) for c in range(1, 32) if c not in (9, 10, 11, 12, 13))
MAX_DEPTH = 40


def fetch(url: str) -> str:
    """Télécharge une page et renvoie son HTML."""
    if not url.startswith("https://"):
        raise ValueError(f"URL inattendue : {url}")
    request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    with urllib.request.urlopen(request, timeout=60) as response:
        return response.read().decode("utf-8", "replace")


class Qwik:
    """Décodeur du bloc qwik/json d'une page lolalytics."""

    def __init__(self, html: str) -> None:
        match = re.search(r'<script type="qwik/json">(.*?)</script>', html, re.DOTALL)
        if not match:
            raise RuntimeError("bloc qwik/json introuvable")
        self.objs: list[Any] = json.loads(match.group(1))["objs"]

    def _deref(self, ref: Any, depth: int) -> Any:
        """Valeur désignée par une référence Qwik ; les marqueurs internes deviennent None."""
        if not isinstance(ref, str) or ref == "":
            return ref
        if ref[0] in QWIK_SPECIAL:
            return None
        index = self._index(ref)
        if index is None:
            return ref
        target = self.objs[index]
        if isinstance(target, (dict, list)):
            return self.resolve(target, depth + 1)
        if isinstance(target, str) and target and target[0] in QWIK_SPECIAL:
            return None
        return target

    def _index(self, ref: str) -> int | None:
        """Index base 36 valide dans objs, sinon None (la chaîne est alors une donnée)."""
        try:
            index = int(ref, 36)
        except ValueError:
            return None
        return index if index < len(self.objs) else None

    def resolve(self, value: Any, depth: int = 0) -> Any:
        """Remplace, dans un dict ou une liste, chaque référence par sa valeur."""
        if depth > MAX_DEPTH:
            return None
        if isinstance(value, list):
            return [self._deref(item, depth) for item in value]
        if isinstance(value, dict):
            return {key: self._deref(item, depth) for key, item in value.items()}
        return value


def parse_page(html: str) -> tuple[dict, dict, list[tuple[int, dict]]]:
    """Renvoie (navigation, tableau, lignes) : patch et palier, parties analysées, une ligne par champion."""
    qwik = Qwik(html)
    nav: dict | None = None
    table: dict | None = None
    rows: list[tuple[int, dict]] = []
    for obj in qwik.objs:
        if not isinstance(obj, dict):
            continue
        if nav is None and {"tier", "lane", "patch", "cid"} <= obj.keys():
            nav = qwik.resolve(obj)
        elif table is None and {"avgWr", "analysed", "queue"} <= obj.keys():
            table = qwik.resolve(obj)
        elif {"row", "cid", "$$nav"} <= obj.keys():
            resolved = qwik.resolve(obj)
            if isinstance(resolved.get("row"), dict):
                rows.append((resolved["cid"], resolved["row"]))
    if nav is None or table is None or not rows:
        raise RuntimeError("structure de page inattendue")
    return nav, table, rows


def collect(tiers: list[str], pause: float) -> tuple[dict, int]:
    """Lit une page par palier et par rôle ; renvoie les données et le nombre de pages lues."""
    data: dict[str, Any] = {
        "source": "lolalytics",
        "queue": 420,
        "retrieved": time.strftime("%Y-%m-%d"),
        "patch": None,
        "tiers": {tier: {"label": TIER_LABEL.get(tier, tier), "lanes": {}} for tier in tiers},
        "champions": {},
    }
    pages = 0
    for tier in tiers:
        for lane, key in LANES.items():
            url = f"https://lolalytics.com/lol/tierlist/?lane={lane}&tier={tier}"
            try:
                nav, table, rows = parse_page(fetch(url))
            except (OSError, RuntimeError, ValueError, KeyError) as error:
                print(f"  {tier} {lane} : échec ({error})", file=sys.stderr)
                time.sleep(pause)
                continue
            data["patch"] = data["patch"] or nav.get("patch")
            data["tiers"][tier]["lanes"][key] = {"analysed": table["analysed"], "avgWr": table["avgWr"]}
            for cid, row in rows:
                if row.get("wr") is None or not row.get("games"):
                    continue
                champion = data["champions"].setdefault(str(cid), {})
                champion.setdefault(key, {})[tier] = {
                    "wr": row["wr"],
                    "pr": row["pr"],
                    "br": row["br"],
                    "games": row["games"],
                    "grade": row.get("tier"),
                }
            pages += 1
            print(f"  {tier} {lane} : {len(rows)} champions, {table['analysed']} parties analysées", file=sys.stderr)
            time.sleep(pause)
    return data, pages


def write_js(data: dict, out: Path) -> None:
    """Écrit data/roles_tiers.js : un en-tête de commentaire puis la constante ROLES_TIERS."""
    header = (
        "// GÉNÉRÉ par script/update_tiers.py — ne pas éditer à la main.\n"
        "// Taux de victoire (wr), de pick (pr) et de ban (br) par champion (clé numérique Riot),\n"
        "// par rôle et par palier,\n"
        "// avec le nombre de parties du champion (games) et sa note de tier (grade) ;\n"
        "// tiers[<palier>].lanes[<rôle>].analysed = parties analysées du palier au rôle (poids pour combiner).\n"
        f"// Source lolalytics, Ranked Solo/Duo, toutes régions, patch {data['patch']}, "
        f"récupéré le {data['retrieved']} — mécanisme « rolesTiers » de data/sources.js.\n"
    )
    body = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    out.write_text(f"{header}const ROLES_TIERS = {body};\n", encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--tiers", nargs="+", default=DEFAULT_TIERS, help="paliers lolalytics à lire")
    parser.add_argument("--sleep", type=float, default=1.5, help="pause entre deux pages, en secondes")
    parser.add_argument(
        "--out",
        type=Path,
        default=Path(__file__).resolve().parent.parent / "data" / "roles_tiers.js",
        help="fichier écrit (défaut : data/roles_tiers.js à côté de index.html)",
    )
    args = parser.parse_args()
    data, pages = collect(args.tiers, args.sleep)
    write_js(data, args.out)
    print(
        f"{pages} pages lues, {len(data['champions'])} champions, patch {data['patch']} → {args.out}",
        file=sys.stderr,
    )


if __name__ == "__main__":
    main()
