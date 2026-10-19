import { useEffect, useState, type ReactNode } from 'react';
import {
  addressLines,
  formatAddress,
  getOpenStatus,
  getRestaurantTime,
  mapUrl,
  phoneHref,
  restaurant,
} from '../data/restaurant';
import './Contact.css';

const icons = {
  pin: (
    <path d="M12 21s-7-6.2-7-11.5a7 7 0 1 1 14 0C19 14.8 12 21 12 21Zm0-8.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
  ),
  phone: (
    <path d="M6.6 3.5h2.7l1.4 4.2-2 1.3a12 12 0 0 0 6.3 6.3l1.3-2 4.2 1.4v2.7a2 2 0 0 1-2.2 2A17 17 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z" />
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
};

function Icon({ name }: { name: keyof typeof icons }) {
  return (
    <svg className="contact__icon" viewBox="0 0 24 24" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

function InfoRow({ icon, label, children }: { icon: keyof typeof icons; label: string; children: ReactNode }) {
  return (
    <div className="contact__row">
      <span className="contact__icon-wrap">
        <Icon name={icon} />
      </span>
      <div className="contact__row-body">
        <h3 className="contact__label">{label}</h3>
        {children}
      </div>
    </div>
  );
}

/** Re-renders every minute so the open/closed badge stays correct while the page is open. */
function useNow(intervalMs = 60_000) {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), intervalMs);
    return () => window.clearInterval(id);
  }, [intervalMs]);
  return now;
}

export function Contact() {
  const now = useNow();
  const address = formatAddress();
  const directions = mapUrl();
  const status = getOpenStatus(now);
  const { phone, email, openingHours } = restaurant;
  const today = getRestaurantTime(now).weekday;

  return (
    <section className="contact section" id="kontakt" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact__intro">
          <p className="eyebrow">Kontakt</p>
          <h2 className="section-title" id="contact-title">
            Príďte sa najesť
          </h2>
          {address && (
            <p className="contact__lead">
              Nájdete nás na Hurbanovom námestí v Bojniciach. Zastavte sa, alebo nám zavolajte.
            </p>
          )}
        </div>

        <div className={`contact__layout${address ? '' : ' contact__layout--no-map'}`}>
          <div className="contact__card">
            {status && (
              <p className={`contact__status${status.open ? ' is-open' : ''}`}>
                <span className="contact__status-dot" aria-hidden="true" />
                {status.label}
              </p>
            )}

            <div className="contact__rows">
              <InfoRow icon="pin" label="Adresa">
                <p className="contact__value">
                  {addressLines().map((line) => (
                    <span key={line} className="contact__line">
                      {line}
                    </span>
                  ))}
                </p>
              </InfoRow>

              {phone && (
                <InfoRow icon="phone" label="Telefón">
                  <a className="contact__phone" href={phoneHref(phone)}>
                    {phone}
                  </a>
                </InfoRow>
              )}

              {email && (
                <InfoRow icon="mail" label="E-mail">
                  <a className="contact__value contact__link" href={`mailto:${email}`}>
                    {email}
                  </a>
                </InfoRow>
              )}

              <InfoRow icon="clock" label="Otváracie hodiny">
                {openingHours.length > 0 ? (
                  <table className="contact__hours">
                    <tbody>
                      {openingHours.map((row) => {
                        const isToday = row.weekdays?.includes(today);
                        return (
                          <tr key={row.days} className={isToday ? 'is-today' : undefined}>
                            <th scope="row">
                              {row.days}
                              {isToday && <span className="contact__today">Dnes</span>}
                            </th>
                            <td>{row.hours}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                ) : (
                  <p className="contact__value contact__muted">Otváracie hodiny čoskoro doplníme.</p>
                )}
              </InfoRow>
            </div>

            {(directions || phone) && (
              <div className="contact__actions">
                {directions && (
                  <a className="btn btn--primary btn--lg" href={directions} target="_blank" rel="noopener">
                    Navigovať
                  </a>
                )}
                {phone && (
                  <a className="btn btn--light btn--lg" href={phoneHref(phone)}>
                    Zavolať
                  </a>
                )}
              </div>
            )}
          </div>

          {address && (
            <div className="contact__map">
              <iframe
                title={`Mapa – ${restaurant.name}, ${address}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(`${restaurant.name}, ${address}`)}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
