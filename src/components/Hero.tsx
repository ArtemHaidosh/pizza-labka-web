import { phoneHref, restaurant } from '../data/restaurant';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero" id="uvod" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />
      <div className="container hero__content">
        <p className="hero__eyebrow">Vitajte v Pizza Labke</p>
        <h1 className="hero__title" id="hero-title">
          Poctivá <span className="hero__accent">pizza</span>, na&nbsp;ktorú máte chuť.
        </h1>
        <p className="hero__text">
          Vyberte si svoju obľúbenú pizzu a vychutnajte si ju na našej terase s výhľadom
          priamo na Bojnický zámok.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary btn--lg" href="#menu">
            Pozrieť menu
          </a>
          {restaurant.phone ? (
            <a className="btn btn--light btn--lg" href={phoneHref(restaurant.phone)}>
              Zavolať {restaurant.phone}
            </a>
          ) : (
            <a className="btn btn--light btn--lg" href="#kontakt">
              Kontakt
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
