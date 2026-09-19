import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import MetallicN from './MetallicN';
import NSignal from './NSignal';
import { useReveal } from './useReveal';

const HeroHome: React.FC = () => {
  const ref = useReveal<HTMLElement>(0.05);

  return (
    <section ref={ref} className="room-dark bg-room relative overflow-hidden pt-36 pb-28 lg:pt-48 lg:pb-40">
      {/* whisper radial */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 78% 35%, rgba(59,158,255,.10), transparent 70%), radial-gradient(45% 40% at 12% 88%, rgba(56,201,192,.06), transparent 70%)',
        }}
      />
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7">
            <div data-r className="mono t-muted text-[11px] flex items-center gap-3">
              <NSignal size={13} /> Night Media / Growth Systems
            </div>

            <h1 data-r className="font-h mt-10 text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.96] tracking-[-0.036em] font-medium max-w-[14ch]">
              Growth systems,{' '}
              <span className="t-metallic">engineered</span>
              <br />
              for what&rsquo;s next.
            </h1>

            <p data-r className="mt-10 text-[17px] lg:text-[19px] leading-[1.6] t-muted max-w-[48ch]">
              Night Media designs the websites, automations, content engines and
              brand systems that turn ambitious brands into compounding growth
              machines &mdash; built AI-first, tuned for performance, engineered to scale.
            </p>

            <div data-r className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-2 px-7 py-4 rounded-full text-[14px] font-medium"
              >
                Start a project <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/projects"
                className="btn-ghost inline-flex items-center gap-2 px-7 py-4 rounded-full text-[14px] font-medium"
              >
                Explore our work
              </Link>
            </div>
          </div>

          <div data-r className="lg:col-span-5">
            <div className="relative aspect-square max-w-[460px] mx-auto">
              <MetallicN />
            </div>
          </div>
        </div>
      </div>

      <div data-r className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 t-muted opacity-70">
        <span className="mono text-[10px]">Scroll</span>
        <span className="w-px h-9 bg-gradient-to-b from-current to-transparent" />
      </div>
    </section>
  );
};

export default HeroHome;
