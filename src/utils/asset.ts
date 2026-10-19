/**
 * Resolves a path under /public ("/images/logo.png") against the site's base URL,
 * so the site works both at a domain root and in a sub-folder (e.g. GitHub Pages).
 */
export function asset(path: string): string {
  if (/^(https?:)?\/\//.test(path)) return path;
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}
