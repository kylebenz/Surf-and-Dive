// Scroll-triggered reveals. Content is visible without JavaScript and when
// reduced motion is requested; this only adds a gentle fade-up.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const items = document.querySelectorAll<HTMLElement>('.reveal');
if (reduce || !('IntersectionObserver' in window)) {
  items.forEach((el) => el.classList.add('is-visible'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.05 },
  );
  items.forEach((el) => io.observe(el));
}

// Highlight the current month in seasonal selectors (static pages can't know "now").
const now = new Date().toLocaleString('en-GB', { month: 'long' }).toLowerCase();
document.querySelectorAll<HTMLElement>(`[data-month="${now}"]`).forEach((el) => el.classList.add('is-now'));
