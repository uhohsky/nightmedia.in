import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Code2, Palette, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesHero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-badge',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );
      
      gsap.fromTo('.hero-title',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' }
      );
      
      gsap.fromTo('.hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power3.out' }
      );
      
      gsap.fromTo('.hero-cta',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.6, ease: 'power3.out' }
      );

      gsap.fromTo('.hero-visual',
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1, delay: 0.3, ease: 'power3.out' }
      );

      // Floating icons animation
      gsap.to('.floating-icon', {
        y: -15,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.3
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[90vh] flex items-center py-32 px-6 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-background" />
      <div className="gradient-orb w-[800px] h-[800px] -top-40 -right-40 opacity-40" />
      <div className="gradient-orb w-[600px] h-[600px] bottom-0 -left-40 opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              Digital Growth Infrastructure
            </div>
            
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
              Web Systems That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                Generate Revenue
              </span>
            </h1>
            
            <p className="hero-subtitle text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl">
              Your website should be your best salesperson. We build conversion-focused web systems that turn traffic into customers—not just pages that look good.
            </p>
            
            <div className="hero-cta flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:gap-4"
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

          {/* Right Visual */}
          <div className="hero-visual relative hidden lg:block">
            <div className="relative">
              {/* Main browser mockup */}
              <div className="glass-card glow-border rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-muted/30 px-4 py-3 flex items-center gap-2 border-b border-border/50">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <div className="flex-1 mx-4">
                    <div className="bg-background/50 rounded-full px-4 py-1 text-xs text-muted-foreground">
                      nightmedia.in
                    </div>
                  </div>
                </div>
                <div className="aspect-[4/3] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                    alt="Modern web design dashboard"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                </div>
              </div>

              {/* Floating elements */}
              <div className="floating-icon absolute -top-6 -right-6 w-16 h-16 glass-card rounded-xl flex items-center justify-center">
                <Code2 className="w-8 h-8 text-primary" />
              </div>
              <div className="floating-icon absolute -bottom-4 -left-4 w-14 h-14 glass-card rounded-xl flex items-center justify-center" style={{ animationDelay: '0.5s' }}>
                <Palette className="w-7 h-7 text-accent" />
              </div>

              {/* Stats card */}
              <div className="absolute -bottom-8 -right-8 glass-card glow-border rounded-xl p-4">
                <div className="text-xs text-muted-foreground mb-1">Avg. Conversion Rate</div>
                <div className="text-2xl font-bold text-primary">+156%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
