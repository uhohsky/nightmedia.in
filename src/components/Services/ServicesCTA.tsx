import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const ServicesCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.cta-content',
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: '.services-cta-section', start: 'top 80%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="services-cta-section py-24 lg:py-32 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="gradient-orb w-[600px] h-[600px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="cta-content glass-card glow-border rounded-3xl p-10 lg:p-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8">
            <Calendar className="w-4 h-4" />
            Free Strategy Session
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
            Ready to Build a Website That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
              Actually Grows Your Business?
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Book a free 30-minute strategy call. We'll audit your current website, 
            discuss your goals, and create a roadmap for growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300"
            >
              Book Free Strategy Call
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground rounded-full font-semibold hover:bg-muted/50 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-10 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">Trusted by startups & businesses across India</p>
            <div className="flex items-center justify-center gap-8 opacity-50">
              <div className="text-lg font-semibold text-foreground">50+ Happy Clients</div>
              <div className="w-px h-6 bg-border" />
              <div className="text-lg font-semibold text-foreground">100+ Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
