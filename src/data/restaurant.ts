/**
 * Business details for Pizza Labka.
 *
 * Confirmed: name, city, address, phone, opening hours. Every field set to `null` (or an empty
 * list) is still missing and should be filled in by the owner. The website
 * shows only fields that have a value; nothing is invented.
 */

export type OpeningHours = {
  /** e.g. "Pondelok – Piatok" */
  days: string;
  /** e.g. "10:30 – 21:00" or "Zatvorené" */
  hours: string;
  /** Days covered by this row (0 = nedeľa … 6 = sobota), used to highlight today */
  weekdays?: number[];
};

export type Photo = { src: string; alt: string; width: number; height: number };

export type RestaurantInfo = {
  name: string;
  /** Legal operator shown in the footer */
  company: string | null;
  city: string;
  /** Street and number, e.g. "Hlavná 1" */
  street: string | null;
  postalCode: string | null;
  /** Phone as displayed, e.g. "0918 303 260" (converted to +421 for tel: links) */
  phone: string | null;
  email: string | null;
  openingHours: OpeningHours[];
  /** Terrace with a view of Bojnice Castle (confirmed by the owner). */
  terrace: {
    /** Photo of the terrace / view. When set, it replaces the pizza photo in the "O nás" section. */
    photo: Photo | null;
  };
};

export const restaurant: RestaurantInfo = {
  name: 'Pizza Labka',
  company: 'EMPAKA s. r. o.',
  city: 'Bojnice',
  street: 'Hurbanovo námestie 4/5',
  postalCode: '972 01',
  phone: '0918 303 260',
  email: null, // no e-mail – the site hides it
  openingHours: [
    { days: 'Pondelok – Štvrtok', hours: '10:00 – 20:00', weekdays: [1, 2, 3, 4] },
    { days: 'Piatok – Sobota', hours: '10:00 – 21:00', weekdays: [5, 6] },
    { days: 'Nedeľa', hours: '10:00 – 20:00', weekdays: [0] },
  ],
  terrace: {
    // TODO: add a photo, e.g.
    // photo: { src: '/images/terasa.webp', alt: 'Terasa Pizza Labky s výhľadom na Bojnický zámok', width: 1600, height: 1067 },
    photo: null,
  },
};

export const hasFullAddress = Boolean(restaurant.street);

export function formatAddress(info: RestaurantInfo = restaurant): string | null {
  if (!info.street) return null;
  const cityLine = [info.postalCode, info.city].filter(Boolean).join(' ');
  return `${info.street}, ${cityLine}`;
}

/** "0918 303 260" -> "tel:+421918303260" */
/** Address split for display: ["Hurbanovo námestie 4/5", "972 01 Bojnice"] (postal code never wraps) */
export function addressLines(info: RestaurantInfo = restaurant): string[] {
  if (!info.street) return [info.city];
  const postal = info.postalCode?.replace(/ /g, ' ');
  return [info.street, [postal, info.city].filter(Boolean).join(' ')];
}

export function phoneHref(phone: string): string {
  const digits = phone.replace(/[^\d+]/g, '');
  return `tel:${digits.startsWith('0') ? `+421${digits.slice(1)}` : digits}`;
}

export function mapUrl(info: RestaurantInfo = restaurant): string | null {
  const address = formatAddress(info);
  if (!address) return null;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${info.name}, ${address}`)}`;
}

export type OpenStatus = {
  open: boolean;
  /** e.g. "Otvorené · dnes do 20:00" or "Zatvorené · otvárame zajtra o 10:00" */
  label: string;
};

const DAY_NAMES = ['v nedeľu', 'v pondelok', 'v utorok', 'v stredu', 'vo štvrtok', 'v piatok', 'v sobotu'];

function hoursFor(weekday: number, info: RestaurantInfo): { from: number; to: number; fromText: string; toText: string } | null {
  const row = info.openingHours.find((r) => r.weekdays?.includes(weekday));
  const match = row?.hours.match(/(\d{1,2}):(\d{2})\D+(\d{1,2}):(\d{2})/);
  if (!match) return null;
  const [, fh, fm, th, tm] = match.map(Number);
  return { from: fh * 60 + fm, to: th * 60 + tm, fromText: `${fh}:${String(fm).padStart(2, '0')}`, toText: `${th}:${String(tm).padStart(2, '0')}` };
}

/** The restaurant's time zone – the status is always computed in local Slovak time. */
export const RESTAURANT_TIME_ZONE = 'Europe/Bratislava';

const WEEKDAY_INDEX: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

const restaurantClock = new Intl.DateTimeFormat('en-US', {
  timeZone: RESTAURANT_TIME_ZONE,
  weekday: 'short',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
});

/**
 * Weekday (0 = nedeľa) and minutes since midnight in Bojnice, regardless of the
 * visitor's own time zone. Daylight saving time is handled by the browser.
 */
export function getRestaurantTime(now: Date = new Date()): { weekday: number; minutes: number } {
  const parts = Object.fromEntries(restaurantClock.formatToParts(now).map((p) => [p.type, p.value]));
  return {
    weekday: WEEKDAY_INDEX[parts.weekday] ?? now.getDay(),
    minutes: Number(parts.hour) * 60 + Number(parts.minute),
  };
}

/** Open/closed status computed from `openingHours`; null when the hours are not machine-readable. */
export function getOpenStatus(now: Date = new Date(), info: RestaurantInfo = restaurant): OpenStatus | null {
  const { weekday: today, minutes } = getRestaurantTime(now);
  const todayHours = hoursFor(today, info);

  if (todayHours && minutes >= todayHours.from && minutes < todayHours.to) {
    return { open: true, label: `Otvorené · dnes do ${todayHours.toText}` };
  }
  if (todayHours && minutes < todayHours.from) {
    return { open: false, label: `Zatvorené · otvárame dnes o ${todayHours.fromText}` };
  }
  for (let offset = 1; offset <= 7; offset++) {
    const day = (today + offset) % 7;
    const next = hoursFor(day, info);
    if (next) {
      const when = offset === 1 ? 'zajtra' : DAY_NAMES[day];
      return { open: false, label: `Zatvorené · otvárame ${when} o ${next.fromText}` };
    }
  }
  return null;
}
