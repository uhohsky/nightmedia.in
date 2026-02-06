
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Sparkles, ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Delay animations until after first contentful paint
    const animationDelay = requestIdleCallback ? 0 : 100;
    
    const timeoutId = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Initial entrance timeline
        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
      
      // Badge animation
      tl.fromTo('.hero-badge', 
        { opacity: 0, y: 30, scale: 0.9 }, 
        { opacity: 1, y: 0, scale: 1, duration: 1 }
      )
      // Headline animation with split effect
      .fromTo('.hero-headline-line', 
        { opacity: 0, y: 80, rotateX: -30 }, 
        { opacity: 1, y: 0, rotateX: 0, duration: 1.2, stagger: 0.15 },
        '-=0.6'
      )
      // Gradient text reveal
      .fromTo('.hero-gradient-text', 
        { opacity: 0, scale: 0.95 }, 
        { opacity: 1, scale: 1, duration: 1 },
        '-=0.8'
      )
      // Subtitle
      .fromTo('.hero-subtitle', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 0.8 },
        '-=0.5'
      )
      // CTAs
      .fromTo('.hero-cta-primary', 
        { opacity: 0, x: -30 }, 
        { opacity: 1, x: 0, duration: 0.6 },
        '-=0.3'
      )
      .fromTo('.hero-cta-secondary', 
        { opacity: 0, x: 30 }, 
        { opacity: 1, x: 0, duration: 0.6 },
        '-=0.4'
      )
      // Stats
      .fromTo('.hero-stat', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
        '-=0.2'
      )
      // Scroll indicator
      .fromTo('.scroll-indicator-wrapper', 
        { opacity: 0 }, 
        { opacity: 1, duration: 0.6 },
        '-=0.2'
      );

      // Parallax orbs on scroll
      gsap.to('.orb-1', {
        y: -150,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        }
      });

      gsap.to('.orb-2', {
        y: -100,
        x: 50,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
        }
      });

      gsap.to('.orb-3', {
        y: -200,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        }
      });

      // Floating shapes animation
      gsap.to('.floating-shape', {
        y: 'random(-30, 30)',
        x: 'random(-20, 20)',
        rotation: 'random(-15, 15)',
        duration: 'random(4, 8)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: {
          each: 0.5,
          from: 'random'
        }
      });

      }, heroRef);

      return () => ctx.revert();
    }, animationDelay);

    return () => clearTimeout(timeoutId);
  }, []);

  const stats = [
    { value: '₹50Cr+', label: 'Revenue Generated' },
    { value: '150+', label: 'Systems Deployed' },
    { value: '3.2x', label: 'Avg. Client ROAS' },
  ];

  return (
    <section ref={heroRef} className="min-h-screen flex items-center relative overflow-hidden">
      {/* Ambient background */}
      <div className="ambient-bg" />
      
      {/* Animated gradient orbs */}
      <div ref={orbsRef} className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-1 gradient-orb gradient-orb-1 absolute top-[10%] left-[15%] w-[700px] h-[700px]" />
        <div className="orb-2 gradient-orb gradient-orb-2 absolute top-[40%] right-[10%] w-[600px] h-[600px]" />
        <div className="orb-3 gradient-orb gradient-orb-3 absolute bottom-[10%] left-[30%] w-[500px] h-[500px]" />
      </div>

      {/* Floating abstract shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shape absolute top-[20%] right-[20%] w-20 h-20 rounded-2xl glass-card-static rotate-12 opacity-20" />
        <div className="floating-shape absolute top-[60%] left-[10%] w-16 h-16 rounded-full glass-card-static opacity-15" />
        <div className="floating-shape absolute bottom-[30%] right-[15%] w-24 h-24 rounded-3xl glass-card-static -rotate-6 opacity-10" />
        <div className="floating-shape absolute top-[30%] left-[5%] w-12 h-12 rounded-xl glass-card-static rotate-45 opacity-20" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_10%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-5xl mx-auto text-center" style={{ perspective: '1000px' }}>
          {/* Badge */}
          <div className="hero-badge inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card mb-10">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-medium">Growth Systems for Ambitious Brands</span>
          </div>

          {/* Main Headline */}
          <div className="mb-8 overflow-hidden">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05]">
              <span className="hero-headline-line block text-foreground mb-2">Revenue Systems That Compound</span>
              <span className="hero-gradient-text block gradient-text-primary">
                Built Through High-Performance Websites & Growth Marketing
              </span>
            </h1>
          </div>
          
          {/* Subheadline */}
          <p className="hero-subtitle text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto mb-14 leading-relaxed">
            Night Media is a performance-driven website development and growth agency building conversion-focused websites, funnels, and paid media systems for startups and service businesses.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-20">
            <Link
              to="/contact"
              className="hero-cta-primary group relative inline-flex items-center gap-3 px-10 py-5 rounded-full text-base font-semibold btn-primary-glow"
            >
              <span className="relative z-10 text-primary-foreground">Get Free Growth Audit</span>
              <ArrowRight className="relative z-10 w-5 h-5 text-primary-foreground group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
            <Link
              to="/projects"
              className="hero-cta-secondary group inline-flex items-center gap-3 px-10 py-5 rounded-full text-base font-medium glass-card glow-border transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Play className="w-4 h-4 text-primary ml-0.5" fill="currentColor" />
              </div>
              <span className="text-foreground">View Our Work</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row gap-12 sm:gap-20 justify-center items-center">
            {stats.map((stat, index) => (
              <div key={index} className="hero-stat text-center group">
                <div className="text-4xl md:text-5xl font-bold text-foreground mb-2 group-hover:gradient-text-primary transition-all duration-500">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator-wrapper absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden lg:flex flex-col items-center gap-3">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="scroll-indicator">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
