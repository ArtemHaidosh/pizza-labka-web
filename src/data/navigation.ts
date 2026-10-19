import { showGallery } from './gallery';

export type NavItem = { id: string; label: string };

export const navItems: NavItem[] = [
  { id: 'uvod', label: 'Úvod' },
  { id: 'menu', label: 'Menu' },
  { id: 'o-nas', label: 'O nás' },
  ...(showGallery ? [{ id: 'galeria', label: 'Galéria' }] : []),
  { id: 'kontakt', label: 'Kontakt' },
];
