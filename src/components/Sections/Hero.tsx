
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.fromTo('.hero-badge', 
      { opacity: 0, y: 20, scale: 0.9 }, 
      { opacity: 1, y: 0, scale: 1, duration: 0.8 }
    )
    .fromTo('.hero-headline', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1 },
      '-=0.4'
    )
    .fromTo('.hero-subtitle', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.5'
    )
    .fromTo('.hero-cta', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.6 },
      '-=0.3'
    )
    .fromTo('.hero-stats', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
      '-=0.2'
    );

    // Animate gradient orbs
    gsap.to('.orb-1', {
      x: 50,
      y: -30,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
    
    gsap.to('.orb-2', {
      x: -40,
      y: 40,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to('.orb-3', {
      x: 30,
      y: 20,
      duration: 12,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, []);

  const stats = [
    { value: '150+', label: 'Projects Delivered' },
    { value: '3x', label: 'Avg. Conversion Lift' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="orb-1 absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-[100px]" />
        <div className="orb-2 absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-accent/15 via-primary/10 to-transparent blur-[100px]" />
        <div className="orb-3 absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-primary/10 via-transparent to-transparent blur-[80px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_20%,transparent_100%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-10">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-medium">Conversion-Focused Agency</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-8 leading-[1.1]">
            We Build High-Converting Websites That{' '}
            <span className="relative">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[size:200%] animate-[gradient_3s_ease_infinite]">
                Turn Visitors Into Paying Customers
              </span>
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="hero-subtitle text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            We design, build and optimize conversion-focused websites & funnels that consistently generate leads and sales.
          </p>
          
          {/* CTAs */}
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold overflow-hidden transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-100 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
              <span className="relative z-10 text-primary-foreground">Get Free Website Audit</span>
              <ArrowRight className="relative z-10 w-5 h-5 text-primary-foreground group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium glass-card glow-border transition-all duration-300"
            >
              <Play className="w-4 h-4 text-primary" />
              <span className="text-foreground">View Our Work</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 justify-center items-center">
            {stats.map((stat, index) => (
              <div key={index} className="hero-stats text-center">
                <div className="text-3xl md:text-4xl font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-2.5 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
