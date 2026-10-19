import { useEffect, useState } from 'react';
import { navItems } from '../data/navigation';
import { phoneHref, restaurant } from '../data/restaurant';
import { Logo } from './Logo';
import './Header.css';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('uvod');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the navigation link of the section currently in the middle of the screen.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && setActiveId(entry.target.id));
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth >= 900 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const close = () => setOpen(false);
  // "Menu" is the red button, so it is not repeated as a text link.
  const links = navItems.filter((item) => item.id !== 'menu');

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}${open ? ' header--open' : ''}`}>
      <div className="container header__inner">
        <a href="#uvod" className="header__brand" onClick={close} aria-label="Pizza Labka – na úvod">
          <Logo className="header__logo" height={88} priority />
        </a>
        <p className="header__tagline" aria-hidden="true">
          Pizzeria <span>·</span> {restaurant.city}
        </p>

        <nav className="header__nav" id="hlavna-navigacia" aria-label="Hlavná navigácia">
          <ul className="header__links">
            {links.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={close}
                  className={activeId === item.id ? 'is-active' : undefined}
                  aria-current={activeId === item.id ? 'location' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="header__actions">
            {restaurant.phone && (
              <a className="btn btn--outline" href={phoneHref(restaurant.phone)} onClick={close}>
                Zavolať
              </a>
            )}
            <a
              className={`btn btn--primary header__cta${activeId === 'menu' ? ' is-active' : ''}`}
              href="#menu"
              onClick={close}
            >
              Pozrieť menu
            </a>
          </div>
        </nav>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="hlavna-navigacia"
          aria-label={open ? 'Zavrieť menu' : 'Otvoriť menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="header__toggle-bar" />
          <span className="header__toggle-bar" />
          <span className="header__toggle-bar" />
        </button>
      </div>
    </header>
  );
}
