
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
    <section className="cta-section py-24 lg:py-32 px-6 bg-card/50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="cta-content relative rounded-3xl bg-gradient-to-br from-secondary via-card to-secondary p-12 lg:p-20 text-center border border-border overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-primary/5 via-transparent to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gradient-to-tr from-primary/3 via-transparent to-transparent rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight mb-6 leading-[1.1]">
              Let's Build a Website That
              <br />
              <span className="text-muted-foreground">Actually Grows Your Business</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Book a free strategy session to audit your current website or discuss your project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 rounded-full text-base font-semibold hover:bg-foreground/90 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-foreground/10"
              >
                <Calendar className="w-5 h-5" />
                Book Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="text-foreground px-8 py-4 rounded-full text-base font-medium border border-border hover:bg-card transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
