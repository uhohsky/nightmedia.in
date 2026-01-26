
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Zap, Smartphone, Lightbulb, TrendingUp } from 'lucide-react';

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
      title: 'Conversion-Driven Design',
      description: 'Every pixel is designed with one goal: turning visitors into customers.',
    },
    {
      icon: Zap,
      title: 'Performance-Focused Development',
      description: 'Lightning-fast websites that score 90+ on Core Web Vitals.',
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Approach',
      description: 'Responsive designs that convert beautifully on every device.',
    },
    {
      icon: Lightbulb,
      title: 'Strategy-Led Execution',
      description: 'Data-informed decisions, not guesswork.',
    },
    {
      icon: TrendingUp,
      title: 'Built for Lead Generation',
      description: 'Optimized funnels that capture and convert qualified leads.',
    },
  ];

  return (
    <section className="trust-section py-24 lg:py-32 px-6 bg-card/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="trust-header text-center mb-16 lg:mb-20">
          <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4 font-medium">Why Choose Us</p>
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
              className="trust-item group p-6 rounded-2xl bg-card border border-border hover:border-muted transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-muted transition-colors">
                <point.icon className="w-6 h-6 text-foreground" />
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
