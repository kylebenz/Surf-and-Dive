// Field (real-user) Core Web Vitals, collected only with analytics consent.
// Each metric is pushed to the dataLayer as { event: 'web_vitals', metric_name, metric_value,
// metric_rating, metric_id }, ready for a GTM "Custom Event" trigger and a GA4 event tag.
// The web-vitals library (~2 KB) is loaded on demand, after consent, and reports buffered
// entries, so loading it late still captures LCP, CLS, FCP and TTFB from the start.
type Metric = { name: string; value: number; rating: string; id: string; navigationType: string };

let started = false;
function start() {
  if (started) return;
  started = true;
  import('web-vitals').then(({ onLCP, onINP, onCLS, onFCP, onTTFB }) => {
    const send = (m: Metric) => {
      const w = window as unknown as { dataLayer?: unknown[] };
      (w.dataLayer ||= []).push({
        event: 'web_vitals',
        metric_name: m.name,
        // GA4 values are integers: milliseconds, or CLS × 1000.
        metric_value: Math.round(m.name === 'CLS' ? m.value * 1000 : m.value),
        metric_rating: m.rating,
        metric_id: m.id,
        metric_navigation_type: m.navigationType,
      });
    };
    onLCP(send);
    onINP(send);
    onCLS(send);
    onFCP(send);
    onTTFB(send);
  });
}

export function startVitals() {
  let consent: string | null = null;
  try {
    consent = localStorage.getItem('sd-analytics-consent');
  } catch {}
  if (consent === 'granted') start();
  document.addEventListener('sd:consent', (e) => {
    if ((e as CustomEvent).detail === 'granted') start();
  });
}
