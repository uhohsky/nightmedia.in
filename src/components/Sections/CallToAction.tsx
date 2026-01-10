import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-content',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Staggered stats animation
      gsap.fromTo('.stat-item',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.stats-grid',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="cta-section py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="cta-content glass rounded-3xl p-12 lg:p-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 gradient-text">
            Let's Build Something Iconic
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to push the boundaries of digital creativity? Let's create something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="glass px-8 py-4 rounded-full text-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 btn-lift"
            >
              Start Your Project
            </Link>
            <Link
              to="/projects"
              className="border border-border px-8 py-4 rounded-full text-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 btn-lift"
            >
              View Our Work
            </Link>
          </div>

          <div className="stats-grid mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="stat-item">
              <div className="text-3xl font-bold text-foreground">100+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="stat-item">
              <div className="text-3xl font-bold text-foreground">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="text-3xl font-bold text-foreground">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="text-3xl font-bold text-foreground">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
