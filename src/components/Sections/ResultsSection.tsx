import React, { useEffect, useRef, useState } from 'react';

const metrics = [
  { value: '3.2×', label: 'Average ROI uplift', detail: 'Across deployed growth systems.' },
  { value: '150+', label: 'Systems shipped', detail: 'Websites, funnels, automations.' },
  { value: '₹1M+', label: 'Revenue generated', detail: 'Attributable to client engagements.' },
  { value: '48h', label: 'Median time to first ship', detail: 'From kickoff to live surface.' },
];

const ResultsSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVisible(true),
      { threshold: 0.2 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-28 lg:py-40 border-t border-border/60">
      <div className="container-enterprise">
        <div className="max-w-3xl mb-20">
          <p className="eyebrow mb-5">Results</p>
          <h2 className="font-display text-[40px] lg:text-[64px] leading-[1.02] tracking-[-0.028em] font-medium text-foreground">
            Measured in outcomes,
            <br />
            <span className="text-muted-foreground">not deliverables.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 1s ease ${i * 140}ms, transform 1s ease ${i * 140}ms`,
              }}
              className="border-t border-border/70 pt-6"
            >
              <div className="font-display text-[56px] lg:text-[72px] leading-none tracking-[-0.04em] font-medium text-foreground">
                {m.value}
              </div>
              <div className="mt-6 text-[13px] font-medium text-foreground">{m.label}</div>
              <div className="mt-1.5 text-[13px] text-muted-foreground leading-relaxed">
                {m.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
