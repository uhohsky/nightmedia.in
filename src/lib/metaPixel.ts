// Meta Pixel loader. Only runs when VITE_META_PIXEL_ID is set AND the visitor accepted marketing cookies.
declare global { interface Window { fbq?: (...args: unknown[]) => void; _fbq?: unknown } }
const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID as string | undefined;
export const CONSENT_KEY = 'nm_marketing_consent';
export const hasConsent = () => typeof window !== 'undefined' && localStorage.getItem(CONSENT_KEY) === 'granted';
export const pixelConfigured = () => Boolean(PIXEL_ID);

export function initPixel() {
  if (!PIXEL_ID || !hasConsent() || window.fbq) return;
  /* eslint-disable */
  (function (f: any, b: Document, e: string, v: string) {
    const n: any = (f.fbq = function (...a: unknown[]) { n.callMethod ? n.callMethod(...a) : n.queue.push(a); });
    if (!f._fbq) f._fbq = n; n.push = n; n.loaded = true; n.version = '2.0'; n.queue = [];
    const t = b.createElement(e) as HTMLScriptElement; t.async = true; t.src = v;
    b.head.appendChild(t);
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
  window.fbq!('init', PIXEL_ID);
  window.fbq!('track', 'PageView');
}

export function track(event: string, params?: Record<string, unknown>, eventId?: string) {
  if (!window.fbq) return;
  window.fbq('track', event, params ?? {}, eventId ? { eventID: eventId } : undefined);
}
