import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Lightbulb, 
  PenTool, 
  Code2, 
  TestTube2, 
  Rocket 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WebDesignProcess = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.process-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: '.process-section', start: 'top 80%' }
        }
      );

      // Timeline line animation
      gsap.fromTo('.process-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.process-timeline',
            start: 'top 70%',
            end: 'bottom 50%',
            scrub: 1
          }
        }
      );

      // Steps animation
      gsap.fromTo('.process-step',
        { opacity: 0, x: -50 },
        {
          opacity: 1, x: 0, duration: 0.6, stagger: 0.2,
          scrollTrigger: { trigger: '.process-timeline', start: 'top 75%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      icon: Lightbulb,
      number: '01',
      title: 'Discovery & Strategy',
      description: 'We dive deep into your business, audience, and goals. Research competitors, define user personas, and create a strategic roadmap.',
      deliverables: ['Business Analysis', 'User Research', 'Project Roadmap']
    },
    {
      icon: PenTool,
      number: '02',
      title: 'UX Design & Wireframes',
      description: 'Map out user flows, create wireframes, and design the information architecture that guides visitors to conversion.',
      deliverables: ['User Flows', 'Wireframes', 'Content Strategy']
    },
    {
      icon: PenTool,
      number: '03',
      title: 'Visual Design',
      description: 'Transform wireframes into stunning high-fidelity designs. Every pixel crafted for brand consistency and conversion.',
      deliverables: ['UI Design', 'Design System', 'Prototypes']
    },
    {
      icon: Code2,
      number: '04',
      title: 'Development',
      description: 'Clean, performant code using modern frameworks. Responsive, accessible, and optimized for speed.',
      deliverables: ['Frontend Dev', 'CMS Integration', 'Testing']
    },
    {
      icon: Rocket,
      number: '05',
      title: 'Launch & Optimize',
      description: 'Rigorous testing, smooth deployment, and ongoing optimization based on real user data.',
      deliverables: ['QA Testing', 'Launch', 'Analytics Setup']
    }
  ];

  return (
    <section ref={sectionRef} className="process-section py-24 lg:py-32 px-6 bg-muted/20 relative overflow-hidden">
      <div className="gradient-orb w-[500px] h-[500px] right-0 top-0 opacity-15" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="process-header text-center mb-20">
          <p className="text-xs text-primary uppercase tracking-[0.3em] mb-4 font-medium">
            Our Process
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
            How We Build Winning Websites
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven 5-step process refined over hundreds of projects to deliver 
            websites that convert.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="process-timeline relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-border">
            <div className="process-line absolute inset-0 bg-gradient-to-b from-primary to-accent origin-top" />
          </div>

          {/* Steps */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`process-step relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Circle marker */}
                <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10" />
                
                {/* Content */}
                <div className={`flex-1 ml-20 lg:ml-0 ${index % 2 === 0 ? 'lg:pr-20 lg:text-right' : 'lg:pl-20'}`}>
                  <div className="glass-card glow-border rounded-2xl p-6 lg:p-8">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-4xl font-bold text-muted-foreground/30">
                        {step.number}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {step.description}
                    </p>
                    
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                      {step.deliverables.map((item, i) => (
                        <span 
                          key={i}
                          className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDesignProcess;
