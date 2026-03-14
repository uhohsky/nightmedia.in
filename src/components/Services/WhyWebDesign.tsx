import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, Target, Zap, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhyWebDesign = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.why-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );

      document.querySelectorAll('.why-card').forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
            scrollTrigger: { trigger: card, start: 'top 90%' }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const reasons = [
    {
      icon: TrendingUp,
      title: 'Your #1 Sales Asset',
      description: 'Your website works 24/7 converting visitors into leads and customers while you sleep.',
      stat: '24/7',
      statLabel: 'Always selling'
    },
    {
      icon: Target,
      title: 'First Impressions Matter',
      description: '94% of first impressions are design-related. A premium website builds instant trust.',
      stat: '94%',
      statLabel: 'Design-driven'
    },
    {
      icon: Zap,
      title: 'Speed = Revenue',
      description: 'Every 1 second delay reduces conversions by 7%. We build lightning-fast websites.',
      stat: '-7%',
      statLabel: 'Per second delay'
    },
    {
      icon: Shield,
      title: 'Foundation for Growth',
      description: 'Every marketing channel drives traffic to your website. Make it convert.',
      stat: '∞',
      statLabel: 'Channels converge'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 px-6 relative overflow-hidden">
      <div className="gradient-orb w-[500px] h-[500px] top-1/2 right-0 opacity-15" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - left aligned */}
        <div className="why-header grid lg:grid-cols-2 gap-8 lg:gap-16 mb-20 lg:mb-24">
          <div>
            <p className="text-xs text-primary uppercase tracking-[0.4em] mb-5 font-medium">
              Why Web Design Matters
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground tracking-tight">
              Your Website Is Your Most Important Business Asset
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              In the digital age, your website isn't just a brochure—it's your primary growth engine. 
              A strategically designed website attracts, engages, and converts your ideal customers.
            </p>
          </div>
        </div>

        {/* Cards - 2x2 grid with generous spacing */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="why-card group glass-card rounded-2xl lg:rounded-3xl p-8 lg:p-10 relative overflow-hidden hover:border-primary/20 transition-all duration-500">
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <reason.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-right">
                    <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                      {reason.stat}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">{reason.statLabel}</div>
                  </div>
                </div>
                
                <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWebDesign;
