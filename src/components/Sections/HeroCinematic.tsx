import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import NightCoreVisualization from '../Visuals/NightCoreVisualization';

/**
 * Cinematic hero — editorial left column, Night Core sculpture right.
 * Alternates into the light Trust section below via env-divide-top.
 */
const HeroCinematic: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.querySelectorAll<HTMLElement>('[data-hero-anim]').forEach((n, i) => {
      n.style.opacity = '0';
      n.style.transform = 'translateY(24px)';
      n.style.transition = `opacity 1.2s cubic-bezier(.2,.7,.2,1) ${240 + i * 140}ms, transform 1.2s cubic-bezier(.2,.7,.2,1) ${240 + i * 140}ms`;
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          n.style.opacity = '1';
          n.style.transform = 'translateY(0)';
        }),
      );
    });
  }, []);

  return (
    <section
      ref={ref}
      className="env-dark relative overflow-hidden pt-36 pb-32 lg:pt-52 lg:pb-48"
    >
      {/* whisper radial */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(55% 45% at 78% 32%, hsl(var(--primary) / 0.10), transparent 70%), radial-gradient(45% 40% at 10% 90%, hsl(var(--accent) / 0.06), transparent 70%)',
        }}
      />

      <div className="container-enterprise relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          <div className="lg:col-span-7">
            <div
              data-hero-anim
              className="inline-flex items-center gap-3 rounded-full border border-border px-4 py-1.5 text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              AI-first · Global digital experience
            </div>

            <h1
              data-hero-anim
              className="mt-12 font-display text-[54px] sm:text-[80px] lg:text-[112px] leading-[0.94] tracking-[-0.038em] font-medium max-w-[13ch]"
            >
              Technology,
              <br />
              <span className="text-metallic">engineered</span>
              <br />
              to feel effortless.
            </h1>

            <p
              data-hero-anim
              className="mt-12 text-[18px] lg:text-[20px] leading-[1.55] text-muted-foreground max-w-[48ch]"
            >
              Night Media designs AI-powered websites, brand systems and
              interactive experiences for the world's most ambitious brands.
            </p>

            <div data-hero-anim className="mt-14 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="btn-primary-glow inline-flex items-center gap-2 px-7 py-4 rounded-full text-[14px] font-medium tracking-tight"
              >
                Start a project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/projects"
                className="btn-secondary-enterprise inline-flex items-center gap-1.5 px-7 py-4 rounded-full text-[14px] font-medium tracking-tight"
              >
                See selected work
              </Link>
            </div>
          </div>

          <div
            data-hero-anim
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <NightCoreVisualization />
          </div>
        </div>
      </div>

      <div
        data-hero-anim
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/60"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.34em]">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-current to-transparent" />
      </div>
    </section>
  );
};

export default HeroCinematic;
