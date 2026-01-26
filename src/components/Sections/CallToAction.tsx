
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
  useEffect(() => {
    gsap.fromTo('.cta-content',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 75%',
        }
      }
    );
  }, []);

  return (
    <section className="cta-section py-32 lg:py-40 px-6 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-gradient-to-r from-primary/20 via-accent/15 to-primary/10 blur-[120px] animate-pulse" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="cta-content glass-card rounded-[2.5rem] p-12 lg:p-20 text-center relative overflow-hidden">
          {/* Inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-b from-primary/10 to-transparent blur-3xl" />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] rounded-[2.5rem]" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight mb-6 leading-[1.1]">
              Let's Build a Website That
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Grows Your Business
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Book a free strategy session to audit your current website or discuss your next project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full text-base font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                <Calendar className="relative z-10 w-5 h-5 text-primary-foreground" />
                <span className="relative z-10 text-primary-foreground">Book Free Strategy Call</span>
                <ArrowRight className="relative z-10 w-5 h-5 text-primary-foreground group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 px-8 py-5 rounded-full text-base font-medium glass glow-border transition-all duration-300"
              >
                <span className="text-foreground">Explore Our Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
