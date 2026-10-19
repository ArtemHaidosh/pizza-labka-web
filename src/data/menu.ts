/**
 * Pizza Labka menu.
 *
 * Source: pizza_labka_kompletne_menu.txt (transcribed from the online menu at
 * https://www.bistro.sk/restauracia/pizza-labka), prices verified by the owner
 * on 2026-10-19. Keep this file up to date.
 *
 * Allergens are not listed in the source, so they are not filled in. Add them
 * per item as `allergens: ['1', '7']` (EU numbering, see `allergenNames`) –
 * the allergen list below the menu appears automatically once any item has them.
 *
 * Categories without any items are hidden; tabs appear with 2+ categories.
 */

export type MenuTag = 'vegetarian' | 'spicy';

export type MenuItem = {
  id: string;
  name: string;
  category: CategoryId;
  /** Weight or volume, e.g. "480 g" or "0,5 l" */
  weight?: string;
  description?: string;
  tags?: MenuTag[];
  /** Allergen numbers according to the EU list (see `allergenNames`). */
  allergens?: string[];
  /** Price in EUR */
  price: number;
  /** Path under /public, e.g. "/images/menu/margherita.webp" */
  image?: string;
};

export type CategoryId = 'pizza' | 'stangle' | 'detska-pizza' | 'napoje';

export type MenuCategory = { id: CategoryId; label: string };

/** Set to true to show the "sample menu" notice above the menu. */
export const isPlaceholderMenu = false;

export const categories: MenuCategory[] = [
  { id: 'pizza', label: 'Pizza' },
  { id: 'stangle', label: 'Pizza štangle' },
  { id: 'detska-pizza', label: 'Detská pizza' },
  { id: 'napoje', label: 'Nápoje' },
];

export const tagLabels: Record<MenuTag, string> = {
  vegetarian: 'Vegetariánska',
  spicy: 'Pikantná',
};

export const menuItems: MenuItem[] = [
  // --- Pizza ---
  {
    id: 'pizza-margherita',
    name: 'Pizza Margherita',
    category: 'pizza',
    weight: '480 g',
    description: 'pomodoro, syr, oregano, bazalka',
    tags: ['vegetarian'],
    price: 8.6,
  },
  {
    id: 'pizza-classic',
    name: 'Pizza Classic',
    category: 'pizza',
    weight: '620 g',
    description: 'pomodoro, syr, šunka, šampiňóny, kukurica, oregano',
    price: 9.6,
  },
  {
    id: 'pizza-hawai',
    name: 'Pizza Hawai',
    category: 'pizza',
    weight: '580 g',
    description: 'pomodoro, syr, šunka, ananás, oregano',
    price: 9.6,
  },
  {
    id: 'pizza-sedliacka',
    name: 'Pizza Sedliacka',
    category: 'pizza',
    weight: '550 g',
    description: 'pomodoro, syr, klobása, oravská slanina, červená cibuľa, oregano',
    price: 9.6,
  },
  {
    id: 'pizza-cardinale',
    name: 'Pizza Cardinale',
    category: 'pizza',
    weight: '530 g',
    description: 'pomodoro, syr, šunka, oregano',
    price: 9.3,
  },
  {
    id: 'pizza-kukuricova',
    name: 'Pizza Kukuricová',
    category: 'pizza',
    weight: '570 g',
    description: 'pomodoro, syr, šunka, kukurica, oregano',
    price: 9.3,
  },
  {
    id: 'pizza-quattro-formaggi',
    name: 'Pizza Quattro Formaggi',
    category: 'pizza',
    weight: '660 g',
    description: 'pomodoro, syr, syr Encián, syr Niva, syr Mozzarella, oregano',
    tags: ['vegetarian'],
    price: 10.9,
  },
  {
    id: 'pizza-provinciale',
    name: 'Pizza Provinciale',
    category: 'pizza',
    weight: '650 g',
    description: 'pomodoro, syr, šunka, oravská slanina, kukurica, feferóny, oregano',
    tags: ['spicy'],
    price: 10.1,
  },
  {
    id: 'pizza-diavola',
    name: 'Pizza Diavola',
    category: 'pizza',
    weight: '610 g',
    description: 'pomodoro, syr, šunka, šampiňóny, feferóny, oregano',
    tags: ['spicy'],
    price: 9.6,
  },
  {
    id: 'pizza-italiana',
    name: 'Pizza Italiana',
    category: 'pizza',
    weight: '590 g',
    description: 'pomodoro, syr, šunka, syr Mozzarella, oregano',
    price: 9.6,
  },
  {
    id: 'pizza-chilli-hawai',
    name: 'Pizza Chilli Hawai',
    category: 'pizza',
    weight: '670 g',
    description: 'pomodoro, syr, šunka, ananás, syr Niva, feferóny, oregano',
    tags: ['spicy'],
    price: 10.3,
  },
  {
    id: 'pizza-sunkova-s-olivami',
    name: 'Pizza šunková s olivami',
    category: 'pizza',
    weight: '570 g',
    description: 'pomodoro, syr, šunka, olivy, oregano',
    price: 9.6,
  },
  {
    id: 'pizza-chilli',
    name: 'Pizza Chilli',
    category: 'pizza',
    weight: '590 g',
    description: 'pomodoro, syr, šunka, saláma, chilli papričky, oregano',
    tags: ['spicy'],
    price: 9.6,
  },
  {
    id: 'pizza-labka',
    name: 'Pizza Labka',
    category: 'pizza',
    weight: '690 g',
    description: 'pomodoro, syr, šunka, saláma, oravská slanina, klobása, feferóny, oregano',
    tags: ['spicy'],
    price: 10.9,
  },
  {
    id: 'pizza-bojnice',
    name: 'Pizza Bojnice',
    category: 'pizza',
    weight: '690 g',
    description: 'pomodoro, syr, šunka, saláma, oravská slanina, kukurica, feferóny, oregano',
    tags: ['spicy'],
    price: 10.9,
  },
  {
    id: 'pizza-alla-bryndzova',
    name: 'Pizza alla Bryndzová',
    category: 'pizza',
    weight: '660 g',
    description: 'smotanový základ, syr, šunka, saláma, bryndza, pažítka',
    price: 10.3,
  },
  {
    id: 'pizza-smotanova-4-druhy-syra',
    name: 'Pizza Smotanová 4 druhy syra',
    category: 'pizza',
    weight: '660 g',
    description: 'smotanový základ, syr Eidam, syr Encián, syr Niva, syr Mozzarella, oregano',
    tags: ['vegetarian'],
    price: 10.9,
  },
  {
    id: 'pizza-smotanovo-sunkova',
    name: 'Pizza Smotanovo-šunková',
    category: 'pizza',
    weight: '580 g',
    description: 'smotanový základ, syr, šunka, čerstvé paradajky, kukurica, oregano',
    price: 9.6,
  },
  {
    id: 'pizza-vegetariana',
    name: 'Pizza Vegetariana',
    category: 'pizza',
    weight: '700 g',
    description: 'pomodoro, syr, čerstvé paradajky, brokolica, kukurica, šampiňóny, rukola',
    tags: ['vegetarian'],
    price: 10.3,
  },
  {
    id: 'pizza-al-tonno',
    name: 'Pizza Al tonno',
    category: 'pizza',
    weight: '550 g',
    description: 'pomodoro, syr, oregano, tuniak, olivy, červená cibuľa',
    price: 10.5,
  },
  {
    id: 'pizza-salamova',
    name: 'Pizza Salámová',
    category: 'pizza',
    weight: '570 g',
    description: 'pomodoro, syr, saláma, baranie rohy',
    price: 9.6,
  },
  {
    id: 'pizza-prosciutto',
    name: 'Pizza Prosciutto',
    category: 'pizza',
    weight: '540 g',
    description: 'pomodoro, syr, prosciutto, rukola',
    price: 10.5,
  },
  {
    id: 'pizza-mexicka',
    name: 'Pizza Mexická',
    category: 'pizza',
    weight: '660 g',
    description: 'pomodoro, syr, klobása, kukurica, fazuľa, chilli papričky, oregano',
    tags: ['spicy'],
    price: 10.5,
  },
  {
    id: 'pizza-podla-vlastneho-vyberu',
    name: 'Pizza podľa vlastného výberu',
    category: 'pizza',
    description: 'pomodoro, syr + 3 prísady podľa vlastného výberu',
    price: 10.5,
  },
  // --- Pizza štangle ---
  {
    id: 'pizza-stangle-plnene-syrom',
    name: 'Pizza štangle plnené syrom',
    category: 'stangle',
    weight: '340 g',
    description: '4 kusy, syr Eidam',
    price: 8.3,
  },
  {
    id: 'pizza-stangle-plnene-syrom-niva',
    name: 'Pizza štangle plnené syrom Niva',
    category: 'stangle',
    weight: '340 g',
    description: '4 kusy, syr Niva',
    price: 8.3,
  },
  {
    id: 'pizza-stangle-plnene-slaninou-a-syrom',
    name: 'Pizza štangle plnené slaninou a syrom',
    category: 'stangle',
    weight: '380 g',
    description: '4 kusy, slanina, syr Eidam',
    price: 8.3,
  },
  {
    id: 'pizza-stangle-plnene-sunkou-a-syrom',
    name: 'Pizza štangle plnené šunkou a syrom',
    category: 'stangle',
    weight: '380 g',
    description: '4 kusy, šunka, syr Eidam',
    price: 8.3,
  },
  {
    id: 'pizza-stangle-plnene-bryndzou-a-slaninou',
    name: 'Pizza štangle plnené bryndzou a slaninou',
    category: 'stangle',
    weight: '380 g',
    description: '4 kusy, bryndza, slanina',
    price: 8.3,
  },
  {
    id: 'pizza-stangle',
    name: 'Pizza štangle',
    category: 'stangle',
    weight: '275 g',
    description: '4 kusy',
    price: 6.3,
  },
  {
    id: 'pizza-posuch-s-cesnakom',
    name: 'Pizza posuch s cesnakom',
    category: 'stangle',
    weight: '370 g',
    description: 'čisté pizza cesto potreté cesnakom',
    price: 6.8,
  },
  {
    id: 'pizza-posuch-so-syrom-eidam',
    name: 'Pizza posuch so syrom Eidam',
    category: 'stangle',
    weight: '370 g',
    description: 'syr Eidam',
    price: 7.9,
  },
  {
    id: 'pizza-posuch-so-syrom-niva',
    name: 'Pizza posuch so syrom Niva',
    category: 'stangle',
    weight: '340 g',
    description: 'syr Niva',
    price: 7.9,
  },
  // --- Detská pizza ---
  {
    id: 'pizza-zlte-slniecko',
    name: 'Pizza Žlté slniečko',
    category: 'detska-pizza',
    weight: '250 g',
    description: 'pomodoro, syr, šunka, kukurica, oregano',
    price: 7.5,
  },
  {
    id: 'pizza-hawai-detska-pizza',
    name: 'Pizza Hawai',
    category: 'detska-pizza',
    weight: '300 g',
    description: 'pomodoro, syr, šunka, ananás, oregano',
    price: 7.5,
  },
  // --- Nápoje ---
  {
    id: 'coca-cola',
    name: 'Coca-Cola',
    category: 'napoje',
    weight: '0,5 l',
    price: 2.5,
  },
  {
    id: 'fanta',
    name: 'Fanta',
    category: 'napoje',
    weight: '0,5 l',
    price: 2.5,
  },
  {
    id: 'sprite',
    name: 'Sprite',
    category: 'napoje',
    weight: '0,5 l',
    price: 2.5,
  },
  {
    id: 'gemerka-pro-ochutena',
    name: 'Gemerka Pro – ochutená',
    category: 'napoje',
    weight: '0,75 l',
    price: 3.5,
  },
  {
    id: 'fatra',
    name: 'Fatra',
    category: 'napoje',
    weight: '1 l',
    price: 3.5,
  },
  {
    id: 'ladovy-caj',
    name: 'Ľadový čaj',
    category: 'napoje',
    weight: '0,5 l',
    price: 2.5,
  },
  {
    id: 'red-bull',
    name: 'Red Bull',
    category: 'napoje',
    weight: '250 ml',
    price: 2.5,
  },
];

/** EU allergen list (Regulation (EU) No 1169/2011), Slovak names. */
export const allergenNames: Record<string, string> = {
  '1': 'Obilniny obsahujúce lepok',
  '2': 'Kôrovce',
  '3': 'Vajcia',
  '4': 'Ryby',
  '5': 'Arašidy',
  '6': 'Sója',
  '7': 'Mlieko',
  '8': 'Orechy',
  '9': 'Zeler',
  '10': 'Horčica',
  '11': 'Sezam',
  '12': 'Oxid siričitý a siričitany',
  '13': 'Vlčí bôb',
  '14': 'Mäkkýše',
};

export const hasAllergens = menuItems.some((item) => item.allergens?.length);

/** Categories that actually contain items, in display order. */
export const activeCategories = categories.filter((c) =>
  menuItems.some((item) => item.category === c.id),
);
