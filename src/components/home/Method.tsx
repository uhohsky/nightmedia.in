import React, { useEffect, useRef, useState } from 'react';
import { useReveal } from './useReveal';
import NSignal from './NSignal';

const stages = [
  { i: '01', title: 'Diagnose', desc: 'Map the full revenue system. Find the leaks — positioning, funnel, content, automation, attribution.' },
  { i: '02', title: 'Architect', desc: 'Design the growth system as one engineered pipeline. Every component serves a leverage point.' },
  { i: '03', title: 'Build', desc: 'Ship websites, content engines, agents and brand systems as production software with CI guardrails.' },
  { i: '04', title: 'Deploy', desc: 'Roll out with measurement wired in. Attribution the CFO signs off on from day one.' },
  { i: '05', title: 'Optimize', desc: 'Run experiments on a single system. Every release compounds instead of resetting.' },
];

const Method: React.FC = () => {
  const ref = useReveal<HTMLDivElement>(0.1);
  const [progress, setProgress] = useState(0);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height - vh * 0.5;
      const passed = Math.min(Math.max(vh * 0.5 - rect.top, 0), total);
      setProgress(total > 0 ? passed / total : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section ref={ref} className="room-softwhite bg-room py-28 lg:py-40">
      <div ref={wrap} className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div data-r className="max-w-2xl mb-16 lg:mb-24">
          <span className="mono t-muted text-[11px] flex items-center gap-2">
            <NSignal size={12} /> The Night Media method
          </span>
          <h2 className="font-h mt-6 text-[40px] sm:text-[56px] lg:text-[68px] leading-[1.0] tracking-[-0.03em] font-medium">
            An engineered system, not a checklist.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* progress rail */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <div className="method-rail h-1 rounded-full" style={{ position: 'relative' }}>
                <div className="fill h-full rounded-full" style={{ width: `${progress * 100}%` }} />
              </div>
              <div className="mt-4 mono text-[10px] t-muted">
                Stage {Math.min(stages.length, Math.floor(progress * stages.length) + 1)} / {stages.length}
              </div>
            </div>
          </div>

          {/* stages */}
          <div className="lg:col-span-9 space-y-16 lg:space-y-24">
            {stages.map((s) => (
              <div key={s.i} data-r className="flex gap-6 lg:gap-10">
                <div className="shrink-0">
                  <span className="font-h text-[48px] lg:text-[64px] leading-none t-blue font-medium tabular-nums">{s.i}</span>
                </div>
                <div className="pt-2">
                  <h3 className="font-h text-[26px] lg:text-[34px] leading-tight tracking-[-0.02em] font-medium">{s.title}</h3>
                  <p className="t-muted mt-3 text-[16px] lg:text-[17px] leading-[1.6] max-w-[52ch]">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
