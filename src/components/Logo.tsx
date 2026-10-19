import { asset } from '../utils/asset';
type LogoProps = {
  className?: string;
  /** Rendered height in px; width follows the original aspect ratio. */
  height: number;
  priority?: boolean;
};

// Intrinsic size of /images/pizza-labka-logo.png
const LOGO_WIDTH = 480;
const LOGO_HEIGHT = 535;

export function Logo({ className, height, priority = false }: LogoProps) {
  return (
    <picture>
      <source srcSet={asset('/images/pizza-labka-logo.webp')} type="image/webp" />
      <img
        className={className}
        src={asset('/images/pizza-labka-logo.png')}
        alt="Pizza Labka"
        width={Math.round((height * LOGO_WIDTH) / LOGO_HEIGHT)}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </picture>
  );
}
