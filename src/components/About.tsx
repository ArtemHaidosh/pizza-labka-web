import { restaurant } from '../data/restaurant';
import { asset } from '../utils/asset';
import './About.css';

function CastleIcon() {
  return (
    <svg className="about__terrace-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2.5 21h19" />
      <path d="M4.5 21V11l1.75-4.5L8 11v10" />
      <path d="M16 21V11l1.75-4.5L19.5 11v10" />
      <path d="M8 21v-7h8v7" />
      <path d="M10.5 14V9.5L12 3.5l1.5 6V14" />
      <path d="M11 21v-2.5a1 1 0 0 1 2 0V21" />
    </svg>
  );
}

export function About() {
  const terracePhoto = restaurant.terrace.photo;

  return (
    <section className="about section" id="o-nas" aria-labelledby="about-title">
      <div className="container about__grid">
        <div className="about__media">
          {terracePhoto ? (
            <img
              src={asset(terracePhoto.src)}
              alt={terracePhoto.alt}
              width={terracePhoto.width}
              height={terracePhoto.height}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <picture>
              <source
                type="image/webp"
                srcSet={`${asset('/images/pizza-background-sm.webp')} 1100w, ${asset('/images/pizza-background.webp')} 2000w`}
                sizes="(min-width: 900px) 50vw, 100vw"
              />
              <img
                className="about__pizza"
                src={asset('/images/pizza-background.jpg')}
                alt="Pizza s roztavenou mozzarellou, paradajkovou omáčkou a lístkami bazalky"
                width={2000}
                height={669}
                loading="lazy"
                decoding="async"
              />
            </picture>
          )}
        </div>
        <div className="about__text">
          <p className="eyebrow">O nás</p>
          <h2 className="section-title" id="about-title">
            Chuť, ku ktorej sa radi vrátite.
          </h2>
          {/* Generic copy – replace with the restaurant's own story. */}
          <p>
            Pizza Labka je pizzeria v Bojniciach. Pripravujeme pizzu, pri ktorej si radi
            posedíte s rodinou aj priateľmi – alebo si ju vychutnáte len tak, keď dostanete chuť.
          </p>

          <div className="about__terrace">
            <span className="about__terrace-badge">
              <CastleIcon />
            </span>
            <div>
              <h3 className="about__terrace-title">Terasa s výhľadom na Bojnický zámok</h3>
              <p className="about__terrace-text">
                Sadnite si s pizzou na našu terasu – výhľad z nej smeruje priamo na Bojnický zámok.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
