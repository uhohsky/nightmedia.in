import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'NIGHTMEDIA';

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      gsap.fromTo('.hero-container', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.3 }
      );

      // Staggered animation for service cards
      gsap.fromTo('.service-card-item',
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          ease: 'power2.out',
          stagger: 0.1,
          delay: 0.6
        }
      );
    }

    // Typewriter effect
    let currentIndex = 0;
    const typeWriter = () => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeWriter, 150);
      }
    };
    
    setTimeout(typeWriter, 800);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('.projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Large decorative gradient circle */}
      <div className="absolute top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2">
        <div className="w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-accent via-accent/60 to-accent/20 rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>

      <div className="hero-container relative z-10 container-wide py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-left">
            <p className="text-accent font-display font-medium mb-4 tracking-wide uppercase text-sm">
              Digital Agency
            </p>
            <h1 className="font-display text-display-md lg:text-display-lg mb-6">
              Be brand
              <br />
              <span className="block">
                with <span className="text-accent">{text}</span>
                <span className="animate-pulse text-accent">|</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
              For the love of marketing, we enable your brand to reach the best potential outcomes that can be tracked
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-lift">
                <Link to="/contact">
                  Connect Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" onClick={scrollToProjects} className="btn-lift">
                View Our Work
              </Button>
            </div>
          </div>

          {/* Right Content - Service Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="service-card-item bg-card border border-border rounded-xl p-6 aspect-square flex items-center justify-center card-hover hover:border-accent/50">
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <div className="w-6 h-6 bg-accent rounded"></div>
                  </div>
                  <p className="text-sm font-medium text-foreground">Web Design</p>
                </div>
              </div>
              <div className="service-card-item bg-gradient-to-br from-accent to-accent/60 rounded-xl p-6 aspect-square flex items-center justify-center card-hover">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg mx-auto mb-3"></div>
                  <p className="text-sm font-medium text-accent-foreground">CGI Ads</p>
                </div>
              </div>
              <div className="service-card-item bg-secondary rounded-xl p-6 aspect-square flex items-center justify-center card-hover hover:bg-secondary/80">
                <div className="text-center">
                  <div className="w-12 h-12 bg-foreground/10 rounded-lg mx-auto mb-3"></div>
                  <p className="text-sm font-medium text-foreground">Influencer Marketing</p>
                </div>
              </div>
              <div className="service-card-item bg-card border border-border rounded-xl p-6 aspect-square flex items-center justify-center card-hover hover:border-accent/50">
                <div className="text-center">
                  <div className="w-12 h-12 bg-muted rounded-lg mx-auto mb-3"></div>
                  <p className="text-sm font-medium text-foreground">Video Editing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-subtle-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
