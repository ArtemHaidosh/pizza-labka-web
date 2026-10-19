const priceFormatter = new Intl.NumberFormat('sk-SK', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2,
});

/** 8.6 -> "8,60 €" */
export function formatPrice(value: number): string {
  // Intl uses a non-breaking space before € – keep it so the price never wraps.
  return priceFormatter.format(value);
}
