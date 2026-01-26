
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
  useEffect(() => {
    gsap.fromTo('.process-header',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.process-section',
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo('.process-step',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.process-grid',
          start: 'top 80%',
        }
      }
    );

    // Animate the connecting line
    gsap.fromTo('.process-line',
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.process-grid',
          start: 'top 75%',
        }
      }
    );
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Strategy & Research',
      description: 'Deep dive into your business, audience, and goals to craft the perfect approach.',
    },
    {
      number: '02',
      title: 'Funnel Mapping',
      description: 'Map out the complete user journey from first touch to conversion.',
    },
    {
      number: '03',
      title: 'Design & Development',
      description: 'Build your high-converting website with pixel-perfect precision.',
    },
    {
      number: '04',
      title: 'Optimization',
      description: 'Continuous testing and refinement to maximize performance.',
    },
    {
      number: '05',
      title: 'Launch & Scale',
      description: 'Go live and implement systems for sustainable growth.',
    },
  ];

  return (
    <section className="process-section py-32 lg:py-40 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="process-header text-center mb-20">
          <p className="text-xs text-primary uppercase tracking-[0.3em] mb-4 font-medium">Our Process</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
            Our Growth Framework
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven 5-step process to transform your digital presence.
          </p>
        </div>

        {/* Process Steps */}
        <div className="process-grid relative">
          {/* Connecting line - Desktop only */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px]">
            <div className="process-line h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-left" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="process-step text-center relative">
                {/* Step number */}
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-24 h-24 rounded-full glass-card flex items-center justify-center relative z-10">
                    <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {step.number}
                    </span>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px] mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
