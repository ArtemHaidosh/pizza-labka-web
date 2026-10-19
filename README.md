# Pizza Labka – web

Jednostránkový web pizzerie Pizza Labka (Bojnice). React + TypeScript + Vite, čisté CSS.

## Spustenie

```bash
npm install
npm run dev       # vývojový server na http://localhost:5173
npm run build     # produkčný build do dist/
npm run preview   # náhľad produkčného buildu
npm run lint
```

## Nasadenie (GitHub Pages)

Každý `git push` do vetvy `main` automaticky zostaví a zverejní web
(`.github/workflows/deploy.yml`). Priebeh je v záložke **Actions** na GitHube.

## Čo treba doplniť

| Súbor | Čo doplniť |
| --- | --- |
| `src/data/restaurant.ts` | Adresa, telefón, otváracie hodiny a prevádzkovateľ sú vyplnené. E-mail nie je (na webe sa nezobrazuje). Fotka terasy: `terrace.photo`. Stav „Otvorené / Zatvorené“ sa počíta podľa slovenského času; sviatky a dovolenky nepozná. |
| `src/data/menu.ts` | Aktuálne menu (zdroj: `pizza_labka_kompletne_menu.txt`). **Chýbajú alergény** – doplňte ich ku každej položke ako `allergens: ['1', '7']`; zoznam alergénov sa potom zobrazí automaticky. Fotky pízz: `image: '/images/menu/…'`. |
| `src/data/gallery.ts` | **Galéria zatiaľ obsahuje dočasné stockové fotky z Unsplash** (nie fotky Pizza Labky). Nahraďte ich vlastnými (`public/images/gallery/`, veľká verzia ~1600 px + náhľad ~800 px). Sekcia aj odkaz v navigácii sa zobrazujú od 3 fotiek. |
| `src/components/About.tsx` | Text „O nás“ je všeobecný – nahraďte vlastným. |

## Obrázky

- `assets-source/` – pôvodné súbory logo a pozadia (v plnom rozlíšení).
- `public/images/` – optimalizované verzie pre web (logo s priehľadným pozadím, hero pozadie vo WebP/JPG).
