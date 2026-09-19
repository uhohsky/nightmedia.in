import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useReveal } from './useReveal';
import NSignal from './NSignal';

const FinalCTA: React.FC = () => {
  const ref = useReveal<HTMLDivElement>(0.2);
  return (
    <section ref={ref} className="room-dark bg-room relative overflow-hidden py-32 lg:py-48">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(50% 60% at 50% 40%, rgba(59,158,255,.12), transparent 70%)' }}
      />
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 relative z-10 text-center">
        <div data-r className="flex justify-center mb-8">
          <NSignal size={28} pulse />
        </div>
        <h2 data-r className="font-h text-[40px] sm:text-[56px] lg:text-[76px] leading-[1.02] tracking-[-0.034em] font-medium max-w-[20ch] mx-auto">
          Build the growth system your brand deserves.
        </h2>
        <p data-r className="t-muted mt-8 text-[17px] lg:text-[19px] leading-[1.6] max-w-[50ch] mx-auto">
          Start with a diagnostic, or jump straight to a strategy call. Either way, you leave with a system, not a deck.
        </p>
        <div data-r className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact" className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-[15px] font-medium">
            Start a project <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/ai-audit" className="btn-ghost inline-flex items-center gap-2 px-8 py-4 rounded-full text-[15px] font-medium">
            Get your free AI audit
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
