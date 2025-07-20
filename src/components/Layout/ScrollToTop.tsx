
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately on route change - force instant scroll
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    
    // For service pages and any route with dynamic content
    const timeoutId = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      
      // Trigger ScrollTrigger refresh if GSAP is available
      if (ScrollTrigger) {
        ScrollTrigger.refresh();
      }
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
