
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately on route change
    window.scrollTo(0, 0);
    
    // Small delay to ensure GSAP ScrollTriggers are properly refreshed
    setTimeout(() => {
      // Trigger ScrollTrigger refresh if GSAP is available
      if (window.ScrollTrigger) {
        window.ScrollTrigger.refresh();
      }
    }, 100);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
