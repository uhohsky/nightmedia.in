
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Zap, User, TrendingUp, Server } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TrustSection = () => {
  useEffect(() => {
    gsap.fromTo('.trust-header',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.trust-section',
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo('.trust-item',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.trust-grid',
          start: 'top 85%',
        }
      }
    );
  }, []);

  const trustPoints = [
    {
      icon: Target,
      title: 'Conversion-Driven Strategy',
      description: 'Every design decision backed by data and focused on turning visitors into customers.',
    },
    {
      icon: Zap,
      title: 'Performance-First Development',
      description: 'Lightning-fast websites that score 95+ on Core Web Vitals.',
    },
    {
      icon: User,
      title: 'Founder-Led Execution',
      description: 'Direct access to senior talent, not junior handoffs.',
    },
    {
      icon: TrendingUp,
      title: 'Growth-Focused Systems',
      description: 'Built-in optimization loops for continuous improvement.',
    },
    {
      icon: Server,
      title: 'Scalable Infrastructure',
      description: 'Architecture designed to grow with your business.',
    },
  ];

  return (
    <section className="trust-section py-32 lg:py-40 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="trust-header text-center mb-20">
          <p className="text-xs text-primary uppercase tracking-[0.3em] mb-4 font-medium">Why Choose Us</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
            Why Businesses Choose Night Media
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We don't just build websites. We build growth engines.
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="trust-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="trust-item group glass-card glow-border rounded-2xl p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-5 group-hover:from-primary/30 group-hover:to-accent/20 transition-all duration-300">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
