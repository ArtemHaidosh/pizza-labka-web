import { useRef, useState } from 'react';
import {
  activeCategories,
  allergenNames,
  hasAllergens,
  isPlaceholderMenu,
  menuItems,
  type CategoryId,
} from '../data/menu';
import { MenuCategories } from './MenuCategories';
import { MenuItem } from './MenuItem';
import './MenuSection.css';

export function MenuSection() {
  const [activeId, setActiveId] = useState<CategoryId | undefined>(activeCategories[0]?.id);
  const tabsAnchorRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const select = (id: CategoryId) => {
    setActiveId(id);
    // If the visitor has scrolled deep into a long list, bring the start of the new list into view.
    const panelTop = panelRef.current?.getBoundingClientRect().top ?? 0;
    if (panelTop < 0) tabsAnchorRef.current?.scrollIntoView({ block: 'start' });
  };

  const active = activeCategories.find((c) => c.id === activeId);
  const items = menuItems.filter((item) => item.category === activeId);
  const hasTabs = activeCategories.length > 1;
  const counts = Object.fromEntries(
    activeCategories.map((c) => [c.id, menuItems.filter((item) => item.category === c.id).length]),
  );

  return (
    <section className="menu section" id="menu" aria-labelledby="menu-title">
      <div className="container menu__intro">
        <p className="eyebrow">Naša ponuka</p>
        <h2 className="section-title" id="menu-title">
          Menu
        </h2>
        {isPlaceholderMenu && (
          <p className="menu__notice" role="note">
            Ukážkové menu – položky a ceny sú orientačné. Aktuálnu ponuku čoskoro doplníme.
          </p>
        )}
      </div>

      {active ? (
        <>
          {hasTabs && (
            <>
              <div className="menu__tabs-anchor" ref={tabsAnchorRef} />
              <MenuCategories
                categories={activeCategories}
                counts={counts}
                activeId={active.id}
                onSelect={select}
              />
            </>
          )}
          <div className="container">
            <div
              ref={panelRef}
              className={`menu__panel${hasTabs ? '' : ' menu__panel--single'}`}
              {...(hasTabs && {
                role: 'tabpanel',
                id: `panel-${active.id}`,
                'aria-labelledby': `tab-${active.id}`,
                tabIndex: 0,
              })}
            >
              {hasTabs && <h3 className="menu__category-title">{active.label}</h3>}
              <ul className="menu__list">
                {items.map((item) => (
                  <MenuItem key={item.id} item={item} headingLevel={hasTabs ? 'h4' : 'h3'} />
                ))}
              </ul>
            </div>

            {hasAllergens && (
            <details className="menu__allergens">
              <summary>Zoznam alergénov</summary>
              <ol>
                {Object.entries(allergenNames).map(([num, name]) => (
                  <li key={num} value={Number(num)}>
                    {name}
                  </li>
                ))}
              </ol>
            </details>
            )}
          </div>
        </>
      ) : (
        <div className="container">
          <p className="menu__empty">Menu pripravujeme.</p>
        </div>
      )}
    </section>
  );
}
