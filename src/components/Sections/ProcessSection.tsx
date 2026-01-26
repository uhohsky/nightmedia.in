
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Search, Map, Code, TestTube, Rocket } from 'lucide-react';

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
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.process-grid',
          start: 'top 85%',
        }
      }
    );

    gsap.fromTo('.process-line',
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.process-grid',
          start: 'top 80%',
        }
      }
    );
  }, []);

  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Strategy & Research',
      description: 'We analyze your business, competitors, and target audience to build a winning strategy.',
    },
    {
      icon: Map,
      number: '02',
      title: 'UX & Funnel Mapping',
      description: 'Map user journeys and conversion paths that guide visitors to take action.',
    },
    {
      icon: Code,
      number: '03',
      title: 'Design & Development',
      description: 'Craft pixel-perfect designs and develop lightning-fast, responsive websites.',
    },
    {
      icon: TestTube,
      number: '04',
      title: 'Optimization & Testing',
      description: 'Test, refine, and optimize every element for maximum conversion.',
    },
    {
      icon: Rocket,
      number: '05',
      title: 'Launch & Scale',
      description: 'Deploy your site and implement growth systems to scale your success.',
    },
  ];

  return (
    <section className="process-section py-24 lg:py-32 px-6 bg-card/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="process-header text-center mb-16 lg:mb-20">
          <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4 font-medium">Our Process</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
            Our 5-Step Growth Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that delivers measurable results.
          </p>
        </div>

        {/* Process Steps */}
        <div className="process-grid relative">
          {/* Connection Line */}
          <div className="process-line hidden lg:block absolute top-16 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent origin-left" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div key={index} className="process-step relative text-center lg:text-left">
                {/* Number & Icon */}
                <div className="relative inline-flex flex-col items-center lg:items-start mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center mb-3 relative z-10">
                    <step.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <span className="text-xs font-mono text-muted-foreground tracking-wider">{step.number}</span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
