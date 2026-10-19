import { useEffect, useRef, useState } from 'react';
import { galleryImages, showGallery } from '../data/gallery';
import { asset } from '../utils/asset';
import './Gallery.css';

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const count = galleryImages.length;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (openIndex !== null && !dialog.open) dialog.showModal();
    if (openIndex === null && dialog.open) dialog.close();
  }, [openIndex]);

  if (!showGallery) return null;

  const step = (delta: number) =>
    setOpenIndex((i) => (i === null ? i : (i + delta + count) % count));

  const current = openIndex !== null ? galleryImages[openIndex] : null;

  return (
    <section className="gallery section" id="galeria" aria-labelledby="gallery-title">
      <div className="container">
        <p className="eyebrow">Galéria</p>
        <h2 className="section-title" id="gallery-title">
          Pizza, ktorá chutí už na pohľad
        </h2>
        <ul className="gallery__grid">
          {galleryImages.map((img, index) => (
            <li key={img.src} className="gallery__item">
              <button
                type="button"
                className="gallery__button"
                onClick={() => setOpenIndex(index)}
                aria-label={`Zväčšiť fotografiu: ${img.alt}`}
              >
                <img src={asset(img.thumb)} alt={img.alt} width={img.width} height={img.height} loading="lazy" decoding="async" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Galéria – zväčšená fotografia"
        onClose={() => setOpenIndex(null)}
        onClick={(e) => e.target === e.currentTarget && setOpenIndex(null)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') step(1);
          if (e.key === 'ArrowLeft') step(-1);
        }}
      >
        {current && (
          <figure className="lightbox__figure">
            <img src={asset(current.src)} alt={current.alt} width={current.width} height={current.height} />
            <figcaption>
              {current.alt}
              <span className="lightbox__count">
                {openIndex! + 1} / {count}
              </span>
            </figcaption>
          </figure>
        )}
        <button type="button" className="lightbox__btn lightbox__close" onClick={() => setOpenIndex(null)} aria-label="Zavrieť">
          ×
        </button>
        <button type="button" className="lightbox__btn lightbox__prev" onClick={() => step(-1)} aria-label="Predchádzajúca fotografia">
          ‹
        </button>
        <button type="button" className="lightbox__btn lightbox__next" onClick={() => step(1)} aria-label="Nasledujúca fotografia">
          ›
        </button>
      </dialog>
    </section>
  );
}
