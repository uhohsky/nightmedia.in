import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesHero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo('.services-hero-label',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
      .fromTo('.services-hero-title',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }, '-=0.3'
      )
      .fromTo('.services-hero-desc',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 }, '-=0.5'
      )
      .fromTo('.services-hero-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }, '-=0.3'
      )
      .fromTo('.services-hero-divider',
        { scaleX: 0 },
        { scaleX: 1, duration: 1.2, ease: 'power2.inOut' }, '-=0.4'
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[85vh] flex items-center py-32 lg:py-40 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="gradient-orb w-[900px] h-[900px] -top-60 right-[-20%] opacity-30" />
      <div className="gradient-orb w-[600px] h-[600px] bottom-[-20%] left-[-10%] opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="max-w-4xl">
          <p className="services-hero-label text-xs text-primary uppercase tracking-[0.4em] mb-8 font-medium">
            Services
          </p>
          
          <h1 className="services-hero-title text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground tracking-tight leading-[1.05] mb-10">
            Web Systems That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
              Generate Revenue
            </span>
          </h1>
          
          <p className="services-hero-desc text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-2xl">
            Your website should be your best salesperson. We build conversion-focused web systems that turn traffic into customers—not just pages that look good.
          </p>
          
          <div className="services-hero-cta flex flex-wrap gap-5">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground rounded-full font-semibold hover:bg-muted/50 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="services-hero-divider mt-24 h-px bg-gradient-to-r from-border via-border/50 to-transparent origin-left" />
      </div>
    </section>
  );
};

export default ServicesHero;
