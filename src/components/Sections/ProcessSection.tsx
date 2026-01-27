
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Lightbulb, Map, Code, TestTube, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProcessSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo('.process-header',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.process-section',
            start: 'top 75%',
          }
        }
      );

      // Timeline line draw animation
      gsap.fromTo('.process-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.process-timeline',
            start: 'top 70%',
          }
        }
      );

      // Process steps animation
      gsap.fromTo('.process-step',
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.process-timeline',
            start: 'top 70%',
          }
        }
      );

      // Parallax for orbs
      gsap.to('.process-orb', {
        y: -100,
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

  const steps = [
    {
      number: '01',
      icon: Lightbulb,
      title: 'Strategy',
      description: 'Deep dive into your business, market, and goals to craft a winning approach.',
    },
    {
      number: '02',
      icon: Map,
      title: 'Build',
      description: 'Design and develop your high-converting digital assets with precision.',
    },
    {
      number: '03',
      icon: Code,
      title: 'Launch',
      description: 'Deploy your systems with comprehensive testing and quality assurance.',
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Scale',
      description: 'Optimize, iterate, and scale your growth systems for maximum impact.',
    },
  ];

  return (
    <section ref={sectionRef} className="process-section py-32 lg:py-48 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent" />
      <div className="process-orb absolute top-1/3 right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-primary/10 via-transparent to-transparent blur-[100px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="process-header text-center mb-20">
          <p className="text-xs text-primary uppercase tracking-[0.3em] mb-5 font-medium">Our Process</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
            How We Deliver Results
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven 4-step framework that transforms your digital presence.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="process-timeline relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px md:-ml-px">
            <div className="process-line h-full w-full bg-gradient-to-b from-primary via-accent to-primary origin-top" />
          </div>

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`process-step relative flex items-start gap-8 md:gap-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Number circle */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-20">
                  <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-2xl font-bold gradient-text-primary">{step.number}</span>
                    {/* Glow ring */}
                    <div className="absolute inset-0 rounded-full border border-primary/30 animate-pulse" />
                  </div>
                </div>

                {/* Content card */}
                <div className={`flex-1 pl-28 md:pl-0 ${index % 2 === 0 ? 'md:pr-[calc(50%+3rem)]' : 'md:pl-[calc(50%+3rem)]'}`}>
                  <div className="glass-card glow-border rounded-2xl p-8 group hover-lift">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
