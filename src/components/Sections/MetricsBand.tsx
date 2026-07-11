import React, { useEffect, useRef, useState } from 'react';

const metrics = [
  { v: 3.2, suffix: '×', label: 'Average ROI lift', decimals: 1 },
  { v: 150, suffix: '+', label: 'Growth systems shipped', decimals: 0 },
  { v: 48, suffix: 'M+', label: 'Earned reach delivered', decimals: 0 },
  { v: 12, suffix: '', label: 'Countries served', decimals: 0 },
];

const useCount = (target: number, start: boolean, decimals: number) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const dur = 1600;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target]);
  return n.toFixed(decimals);
};

const Metric: React.FC<{ m: (typeof metrics)[number]; start: boolean; i: number }> = ({ m, start, i }) => {
  const n = useCount(m.v, start, m.decimals);
  return (
    <div
      className="border-t border-border pt-8 opacity-0 translate-y-4"
      style={{
        transition: 'opacity 1s cubic-bezier(.2,.7,.2,1), transform 1s cubic-bezier(.2,.7,.2,1)',
        transitionDelay: `${i * 120}ms`,
        ...(start ? { opacity: 1, transform: 'translateY(0)' } : {}),
      }}
    >
      <div className="font-display text-[56px] lg:text-[72px] leading-none tracking-[-0.03em] font-medium">
        {n}
        <span className="text-metallic">{m.suffix}</span>
      </div>
      <div className="mt-4 text-[12px] font-mono uppercase tracking-[0.22em] text-muted-foreground max-w-[22ch]">
        {m.label}
      </div>
    </div>
  );
};

const MetricsBand: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [start, setStart] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setStart(true)),
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="env-graphite env-divide-top">
      <div className="container-enterprise py-28 lg:py-40">
        <div className="max-w-3xl mb-20">
          <p className="text-[11px] font-mono uppercase tracking-[0.28em] text-muted-foreground">
            The record
          </p>
          <h2 className="mt-6 font-display text-[38px] lg:text-[56px] leading-[1.02] tracking-[-0.028em] font-medium max-w-[20ch]">
            Systems shipped. Numbers defended.
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
          {metrics.map((m, i) => (
            <Metric key={m.label} m={m} start={start} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsBand;
