import React, { useEffect, useRef, useState } from 'react';
import { Lightbulb, Map, Code, Rocket } from 'lucide-react';

const steps = [
  { number: '01', icon: Lightbulb, title: 'Diagnose', description: 'Audit your funnel, identify revenue leaks, map the fastest path to scale.' },
  { number: '02', icon: Map, title: 'Architect', description: 'Design the system — web, ads, funnels — with every component tuned for conversion.' },
  { number: '03', icon: Code, title: 'Deploy', description: 'Build and launch in weeks, not months. Speed matters when revenue is on the line.' },
  { number: '04', icon: Rocket, title: 'Compound', description: 'Continuous optimization. Your system gets smarter with every dollar spent.' },
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setActive(true),
      { threshold: 0.25 }
    );
    obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-24 lg:py-36 border-t border-border">
      <div className="container-enterprise">
        <div className="max-w-3xl mb-20">
          <p className="eyebrow mb-4">How we work</p>
          <h2 className="text-section-title text-foreground">
            From diagnosis to scale, in four phases.
          </h2>
          <p className="text-body-lg text-muted-foreground mt-6 max-w-[58ch]">
            We don't pitch. We diagnose, architect, and execute against measurable outcomes.
          </p>
        </div>

        <div ref={sectionRef} className="relative">
          {/* Horizontal progress rail (desktop) */}
          <div className="hidden md:block absolute left-0 right-0 top-7 h-px bg-border">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent origin-left transition-transform duration-[1400ms] ease-out"
              style={{ transform: active ? 'scaleX(1)' : 'scaleX(0)' }}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="relative"
                style={{
                  opacity: active ? 1 : 0,
                  transform: active ? 'translateY(0)' : 'translateY(16px)',
                  transition: `opacity 0.6s ease ${i * 120}ms, transform 0.6s ease ${i * 120}ms`,
                }}
              >
                <div className="relative z-10 w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center mb-6">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-accent mb-2">
                  Phase {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
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
