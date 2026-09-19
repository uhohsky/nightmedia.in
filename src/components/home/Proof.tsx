import React from 'react';
import { useReveal } from './useReveal';
import NSignal from './NSignal';

const testimonials = [
  {
    quote: 'Night Media rebuilt our site like a product — design system, CI pipeline and AI personalisation. Every release now compounds instead of resetting.',
    name: 'Operator',
    role: 'DTC brand',
  },
  {
    quote: 'They treated our growth system like engineering, not marketing. Attribution finally maps to revenue the finance team trusts.',
    name: 'Founder',
    role: 'B2B SaaS',
  },
  {
    quote: 'The AI automation work removed manual ops we never thought could be automated. It scaled our output without scaling headcount.',
    name: 'Head of Ops',
    role: 'Marketplace',
  },
];

const Proof: React.FC = () => {
  const ref = useReveal<HTMLDivElement>(0.15);
  return (
    <section ref={ref} className="room-dark bg-room py-28 lg:py-40">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div data-r className="max-w-2xl mb-16 lg:mb-24">
          <span className="mono t-muted text-[11px] flex items-center gap-2">
            <NSignal size={12} /> Proof
          </span>
          <h2 className="font-h mt-6 text-[40px] sm:text-[56px] lg:text-[64px] leading-[1.0] tracking-[-0.03em] font-medium">
            Trusted by operators who build.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <figure key={i} data-r className="rounded-2xl p-7 lg:p-8 b-rule border" style={{ background: 'rgba(255,255,255,.02)' }}>
              <blockquote className="text-[16px] lg:text-[17px] leading-[1.6] t-fg">“{t.quote}”</blockquote>
              <figcaption className="mt-6 mono text-[11px] t-muted">
                {t.name} · {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proof;
