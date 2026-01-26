
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.fromTo('.hero-badge', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.6 }
    )
    .fromTo('.hero-headline', 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 0.8 },
      '-=0.3'
    )
    .fromTo('.hero-subtitle', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.7 },
      '-=0.4'
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
  }, []);

  const stats = [
    { value: '150+', label: 'Projects Delivered' },
    { value: '3x', label: 'Avg. Conversion Lift' },
    { value: '98%', label: 'Client Satisfaction' },
  ];

  return (
    <section className="min-h-screen flex items-center relative bg-background overflow-hidden">
      {/* Premium gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-primary/5 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-primary/3 via-transparent to-transparent rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">Conversion-Focused Agency</span>
          </div>

          {/* Main Headline */}
          <h1 className="hero-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-foreground mb-8 leading-[1.1]">
            We Build High-Converting Websites That{' '}
            <span className="bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent">
              Turn Visitors Into Paying Customers
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="hero-subtitle text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Conversion-focused website design, funnel development & growth systems for startups, creators and service businesses.
          </p>
          
          {/* CTAs */}
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-base font-semibold hover:bg-foreground/90 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-foreground/10"
            >
              Get Free Website Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-foreground px-8 py-4 rounded-full text-base font-medium border border-border hover:bg-card transition-all duration-300"
            >
              <Play className="w-4 h-4" />
              View Our Work
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 justify-center items-center">
            {stats.map((stat, index) => (
              <div key={index} className="hero-stats text-center">
                <div className="text-3xl md:text-4xl font-semibold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="w-6 h-10 border-2 border-muted rounded-full flex justify-center">
          <div className="w-1 h-2.5 bg-muted-foreground rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
