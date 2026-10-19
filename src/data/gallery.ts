/**
 * Gallery photos.
 *
 * ⚠ PLACEHOLDER: the photos below are free stock photos from Unsplash
 * (https://unsplash.com/license), NOT photos of Pizza Labka's own pizzas.
 * Replace them with real photos: put the files in /public/images/gallery/
 * (a large version ~1600 px and a thumbnail ~800 px) and update this list.
 * Use each photo only once.
 *
 * The gallery section (and its navigation link) is shown only once at least
 * `MIN_GALLERY_IMAGES` photos are listed, so a half-empty gallery never appears.
 */

export type GalleryImage = {
  /** Large version, opened in the lightbox */
  src: string;
  /** Smaller version used in the grid */
  thumb: string;
  alt: string;
  width: number;
  height: number;
  /** Where the photo comes from – for the owner's reference, not shown on the site */
  source?: string;
};

export const MIN_GALLERY_IMAGES = 3;

export const galleryImages: GalleryImage[] = [
  {
    src: '/images/gallery/pizza-1.webp',
    thumb: '/images/gallery/pizza-1-sm.webp',
    alt: 'Nakrájaná syrová pizza na drevenej doske s cherry paradajkami a rozmarínom',
    width: 1600,
    height: 1067,
    source: 'https://unsplash.com/photos/1513104890138-7c749659a591',
  },
  {
    src: '/images/gallery/pizza-2.webp',
    thumb: '/images/gallery/pizza-2-sm.webp',
    alt: 'Kúsok pizze s ťahajúcim sa roztaveným syrom',
    width: 1068,
    height: 1600,
    source: 'https://unsplash.com/photos/1541745537411-b8046dc6d66c',
  },
  {
    src: '/images/gallery/pizza-3.webp',
    thumb: '/images/gallery/pizza-3-sm.webp',
    alt: 'Pizza Margherita s lístkami bazalky na tanieri',
    width: 1600,
    height: 1068,
    source: 'https://unsplash.com/photos/1574071318508-1cdbab80d002',
  },
  {
    src: '/images/gallery/pizza-4.webp',
    thumb: '/images/gallery/pizza-4-sm.webp',
    alt: 'Pizza so šampiňónmi a cibuľou na papieri, vedľa cherry paradajky',
    width: 1600,
    height: 1067,
    source: 'https://unsplash.com/photos/1588315029754-2dd089d39a1a',
  },
  {
    src: '/images/gallery/pizza-5.webp',
    thumb: '/images/gallery/pizza-5-sm.webp',
    alt: 'Pizza s rukolou a čerstvým syrom',
    width: 1200,
    height: 1600,
    source: 'https://unsplash.com/photos/1593560708920-61dd98c46a4e',
  },
  {
    src: '/images/gallery/pizza-6.webp',
    thumb: '/images/gallery/pizza-6-sm.webp',
    alt: 'Pizza s paradajkami a bazalkou na tmavom pozadí posypanom múkou',
    width: 1600,
    height: 1067,
    source: 'https://unsplash.com/photos/1595854341625-f33ee10dbf94',
  },
];

export const showGallery = galleryImages.length >= MIN_GALLERY_IMAGES;
