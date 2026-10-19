import { navItems } from '../data/navigation';
import { addressLines, phoneHref, restaurant } from '../data/restaurant';
import { Logo } from './Logo';
import './Footer.css';

export function Footer() {
  const { phone, email, openingHours } = restaurant;
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo className="footer__logo" height={120} />
          <p>Pizzeria v {restaurant.city === 'Bojnice' ? 'Bojniciach' : restaurant.city}</p>
        </div>

        <nav aria-label="Navigácia v pätičke">
          <h2 className="footer__heading">Stránka</h2>
          <ul className="footer__links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer__heading">Kontakt</h2>
          <ul className="footer__links">
            <li>
              {addressLines().map((line) => (
                <span key={line} className="footer__address-line">
                  {line}
                </span>
              ))}
            </li>
            {phone && (
              <li>
                <a href={phoneHref(phone)}>{phone}</a>
              </li>
            )}
            {email && (
              <li>
                <a href={`mailto:${email}`}>{email}</a>
              </li>
            )}
          </ul>
        </div>

        {openingHours.length > 0 && (
          <div>
            <h2 className="footer__heading">Otváracie hodiny</h2>
            <ul className="footer__links">
              {openingHours.map((row) => (
                <li key={row.days}>
                  {row.days}: {row.hours}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="container footer__bottom">
        <p>
          © {year} {restaurant.name}
          {restaurant.company && <> · Prevádzkovateľ: {restaurant.company}</>}
        </p>
      </div>
    </footer>
  );
}
