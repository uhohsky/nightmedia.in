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
          scrollTrigger: { trigger: '.why-section', start: 'top 80%' }
        }
      );

      gsap.fromTo('.why-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.15,
          scrollTrigger: { trigger: '.why-grid', start: 'top 80%' }
        }
      );

      gsap.fromTo('.why-image',
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1, scale: 1, duration: 1,
          scrollTrigger: { trigger: '.why-image', start: 'top 80%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const reasons = [
    {
      icon: TrendingUp,
      title: 'Your #1 Sales Asset',
      description: 'Your website works 24/7 converting visitors into leads and customers while you sleep.'
    },
    {
      icon: Target,
      title: 'First Impressions Matter',
      description: '94% of first impressions are design-related. A premium website builds instant trust.'
    },
    {
      icon: Zap,
      title: 'Speed = Revenue',
      description: 'Every 1 second delay reduces conversions by 7%. We build lightning-fast websites.'
    },
    {
      icon: Shield,
      title: 'Foundation for Growth',
      description: 'Every marketing channel drives traffic to your website. Make it convert.'
    }
  ];

  return (
    <section ref={sectionRef} className="why-section py-24 lg:py-32 px-6 relative overflow-hidden">
      <div className="gradient-orb w-[500px] h-[500px] top-1/2 right-0 opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <div className="why-header">
              <p className="text-xs text-primary uppercase tracking-[0.3em] mb-4 font-medium">
                Why Web Design Matters
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
                Your Website Is Your Most Important Business Asset
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                In the digital age, your website isn't just a brochure—it's your primary growth engine. 
                A strategically designed website attracts, engages, and converts your ideal customers.
              </p>
            </div>

            <div className="why-grid grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="why-card glass-card glow-border p-6 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="why-image relative hidden lg:block">
            <div className="relative">
              <div className="glass-card glow-border rounded-3xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80" 
                  alt="Web design team collaborating on UX"
                  className="w-full aspect-[4/5] object-cover"
                  loading="lazy"
                />
              </div>
              
              {/* Floating stat */}
              <div className="absolute -top-6 -left-6 glass-card rounded-xl p-4 glow-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">94%</div>
                    <div className="text-xs text-muted-foreground">Design-First Impressions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWebDesign;
