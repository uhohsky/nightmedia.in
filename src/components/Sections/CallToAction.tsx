
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo('.cta-content',
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 70%',
          }
        }
      );

      // Background orb parallax
      gsap.to('.cta-orb', {
        y: -100,
        scale: 1.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="cta-section py-32 lg:py-48 px-6 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="cta-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px]">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-accent/20 to-primary/10 blur-[150px] animate-pulse" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-l from-accent/20 via-primary/15 to-transparent blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="cta-content animated-glow-border glass-card rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
          {/* Inner decorative elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-primary/15 to-transparent blur-[60px]" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 grid-pattern-dots opacity-30 rounded-[3rem]" />

          {/* Floating shapes */}
          <div className="absolute top-10 left-10 w-20 h-20 rounded-2xl glass-card-static rotate-12 opacity-20 float-element" />
          <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full glass-card-static opacity-15 float-element-delayed" />

          <div className="relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">For Operators Ready to Scale</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 leading-[1.1]">
              Stop Spending on Campaigns.
              <br />
              <span className="gradient-text-primary">
                Start Building Revenue Systems.
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              One call. We diagnose your funnel, identify the bottleneck, and show you the fastest path to scale. No pitch deck. Just strategy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-3 px-12 py-6 rounded-full text-lg font-semibold btn-primary-glow"
              >
                <Calendar className="relative z-10 w-5 h-5 text-primary-foreground" />
                <span className="relative z-10 text-primary-foreground">Book Free Strategy Call</span>
                <ArrowRight className="relative z-10 w-5 h-5 text-primary-foreground group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 px-10 py-6 rounded-full text-base font-medium glass-card glow-border transition-all duration-300"
              >
                <span className="text-foreground">Explore Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
