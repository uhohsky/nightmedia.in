import { useEffect, useRef } from 'react';

/** IntersectionObserver-driven staggered reveal for homepage sections. */
export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.querySelectorAll<HTMLElement>('[data-r]').forEach((n, i) => {
              n.style.transitionDelay = `${i * 90}ms`;
              n.classList.add('r-in');
            });
            io.unobserve(el);
          }
        });
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return ref;
}
