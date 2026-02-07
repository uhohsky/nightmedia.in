
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Zap, User, TrendingUp, Server } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TrustSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo('.trust-header',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.trust-section',
            start: 'top 75%',
          }
        }
      );

      // Trust items stagger animation
      gsap.fromTo('.trust-item',
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: {
            amount: 0.6,
            from: 'start'
          },
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.trust-grid',
            start: 'top 80%',
          }
        }
      );

      // Parallax for background elements
      gsap.to('.trust-orb', {
        y: -80,
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

  const trustPoints = [
    {
      icon: Target,
      title: 'Outcome-Obsessed',
      description: 'We measure in revenue generated, not deliverables shipped.',
      gradient: 'from-blue-500/20 to-cyan-500/5',
    },
    {
      icon: Zap,
      title: 'Speed to Scale',
      description: 'From strategy to live system in weeks, not quarters.',
      gradient: 'from-purple-500/20 to-pink-500/5',
    },
    {
      icon: User,
      title: 'Operator-Led',
      description: 'Work directly with builders who understand unit economics.',
      gradient: 'from-emerald-500/20 to-teal-500/5',
    },
    {
      icon: TrendingUp,
      title: 'Compounding Growth',
      description: 'Systems that get better with data, not campaigns that decay.',
      gradient: 'from-orange-500/20 to-amber-500/5',
    },
    {
      icon: Server,
      title: 'Full-Stack Execution',
      description: 'Web, ads, funnels, automation—one team, one system.',
      gradient: 'from-cyan-500/20 to-blue-500/5',
    },
  ];

  return (
    <section ref={sectionRef} className="trust-section py-32 lg:py-48 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      <div className="trust-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5 blur-[100px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="trust-header text-center mb-20">
          <p className="text-xs text-primary uppercase tracking-[0.3em] mb-5 font-medium">Not For Everyone</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
            Built for Founders Who
            <br />
            <span className="gradient-text-primary">Think in Systems</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We partner with operators who want infrastructure, not just campaigns. Revenue systems, not vanity metrics.
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="trust-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="trust-item group glass-card glow-border rounded-2xl p-7 relative overflow-hidden hover-lift"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <point.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
