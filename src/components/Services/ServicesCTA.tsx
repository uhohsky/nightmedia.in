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
      gsap.fromTo('.cta-new',
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-40 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="gradient-orb w-[700px] h-[700px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="cta-new text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-10">
            <Calendar className="w-4 h-4" />
            Free Strategy Session
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground tracking-tight mb-8 leading-[1.1]">
            Ready to Build a Website That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
              Actually Grows Your Business?
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Book a free 30-minute strategy call. We'll audit your current website, 
            discuss your goals, and create a roadmap for growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 text-lg"
            >
              Book Free Strategy Call
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 border border-border text-foreground rounded-full font-semibold hover:bg-muted/50 transition-all duration-300 text-lg"
            >
              View Case Studies
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="pt-10 border-t border-border/30">
            <p className="text-sm text-muted-foreground mb-5">Trusted by startups & businesses across India</p>
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="text-lg font-semibold text-foreground/70">50+ Happy Clients</div>
              <div className="w-px h-6 bg-border hidden sm:block" />
              <div className="text-lg font-semibold text-foreground/70">100+ Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
