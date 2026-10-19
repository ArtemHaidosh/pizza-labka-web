import { useRef, type KeyboardEvent } from 'react';
import type { CategoryId, MenuCategory } from '../data/menu';
import './MenuCategories.css';

type MenuCategoriesProps = {
  categories: MenuCategory[];
  /** Number of items per category, shown next to the label */
  counts?: Partial<Record<CategoryId, number>>;
  activeId: CategoryId;
  onSelect: (id: CategoryId) => void;
};

export function MenuCategories({ categories, counts, activeId, onSelect }: MenuCategoriesProps) {
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const focusTab = (index: number) => {
    const cat = categories[(index + categories.length) % categories.length];
    onSelect(cat.id);
    const el = tabRefs.current[cat.id];
    el?.focus();
    el?.scrollIntoView({ block: 'nearest', inline: 'center' });
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const keys: Record<string, number> = {
      ArrowRight: index + 1,
      ArrowLeft: index - 1,
      Home: 0,
      End: categories.length - 1,
    };
    if (e.key in keys) {
      e.preventDefault();
      focusTab(keys[e.key]);
    }
  };

  return (
    <div className="menu-tabs">
      <div className="container">
        <div className="menu-tabs__scroller" role="tablist" aria-label="Kategórie menu">
          {categories.map((cat, index) => {
            const selected = cat.id === activeId;
            return (
              <button
                key={cat.id}
                ref={(el) => {
                  tabRefs.current[cat.id] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${cat.id}`}
                aria-selected={selected}
                aria-controls={`panel-${cat.id}`}
                tabIndex={selected ? 0 : -1}
                className={`menu-tabs__tab${selected ? ' is-active' : ''}`}
                onClick={() => onSelect(cat.id)}
                onKeyDown={(e) => onKeyDown(e, index)}
              >
                {cat.label}
                {counts?.[cat.id] !== undefined && (
                  <span className="menu-tabs__count" aria-hidden="true">
                    {counts[cat.id]}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
