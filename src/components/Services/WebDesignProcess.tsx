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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.process-header-new',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );

      document.querySelectorAll('.process-step-new').forEach((step) => {
        gsap.fromTo(step,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
            scrollTrigger: { trigger: step, start: 'top 88%' }
          }
        );
      });

      // Line animation
      gsap.fromTo('.process-line-new',
        { scaleY: 0 },
        {
          scaleY: 1, ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current?.querySelector('.process-steps-wrapper'),
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: 1
          }
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
    <section ref={sectionRef} className="py-24 lg:py-32 px-6 bg-muted/10 relative overflow-hidden">
      <div className="gradient-orb w-[500px] h-[500px] right-0 top-0 opacity-10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="process-header-new grid lg:grid-cols-2 gap-8 lg:gap-16 mb-20 lg:mb-28">
          <div>
            <p className="text-xs text-primary uppercase tracking-[0.4em] mb-5 font-medium">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground tracking-tight">
              How We Build Winning Websites
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              A proven 5-step process refined over hundreds of projects to deliver 
              websites that convert.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="process-steps-wrapper relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-border/40">
            <div className="process-line-new absolute inset-0 bg-gradient-to-b from-primary via-accent to-primary/30 origin-top" />
          </div>

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <div key={index} className="process-step-new relative flex gap-8 lg:gap-14 pl-3">
                {/* Dot on line */}
                <div className="absolute left-6 lg:left-8 -translate-x-1/2 top-2 w-3 h-3 rounded-full bg-primary ring-4 ring-background z-10" />
                
                {/* Content */}
                <div className="flex-1 ml-10 lg:ml-14">
                  <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-12">
                    {/* Left: Number + Title */}
                    <div>
                      <span className="text-5xl lg:text-6xl font-bold text-muted-foreground/15 block mb-2">
                        {step.number}
                      </span>
                      <h3 className="text-xl lg:text-2xl font-semibold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    
                    {/* Right: Description + Deliverables */}
                    <div>
                      <p className="text-muted-foreground leading-relaxed text-base lg:text-lg mb-5">
                        {step.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {step.deliverables.map((item, i) => (
                          <span 
                            key={i}
                            className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/10"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default WebDesignProcess;
