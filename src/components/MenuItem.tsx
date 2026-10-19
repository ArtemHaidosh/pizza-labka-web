import type { MenuItem as MenuItemData } from '../data/menu';
import { allergenNames, tagLabels } from '../data/menu';
import { asset } from '../utils/asset';
import { formatPrice } from '../utils/format';
import './MenuItem.css';

type MenuItemProps = {
  item: MenuItemData;
  /** Heading level of the dish name, depending on whether a category title is shown above */
  headingLevel?: 'h3' | 'h4';
};

export function MenuItem({ item, headingLevel: Heading = 'h3' }: MenuItemProps) {
  const allergens = item.allergens ?? [];
  const tags = item.tags ?? [];

  return (
    <li className={`menu-item${item.image ? ' menu-item--with-image' : ''}`}>
      {item.image && (
        <img
          className="menu-item__image"
          src={asset(item.image)}
          alt={item.name}
          width={96}
          height={96}
          loading="lazy"
          decoding="async"
        />
      )}
      <div className="menu-item__body">
        <div className="menu-item__head">
          <Heading className="menu-item__name">{item.name}</Heading>
          {item.weight && <span className="menu-item__weight">{item.weight}</span>}
          <span className="menu-item__leader" aria-hidden="true" />
          <span className="menu-item__price">{formatPrice(item.price)}</span>
        </div>
        {item.description && <p className="menu-item__desc">{item.description}</p>}
        {(tags.length > 0 || allergens.length > 0) && (
          <div className="menu-item__meta">
            {tags.map((tag) => (
              <span key={tag} className={`menu-item__tag menu-item__tag--${tag}`}>
                {tagLabels[tag]}
              </span>
            ))}
            {allergens.length > 0 && (
              <span className="menu-item__allergens">
                Alergény:{' '}
                {allergens.map((a, i) => (
                  <span key={a}>
                    <abbr title={allergenNames[a] ?? a}>{a}</abbr>
                    {i < allergens.length - 1 && ', '}
                  </span>
                ))}
              </span>
            )}
          </div>
        )}
      </div>
    </li>
  );
}
