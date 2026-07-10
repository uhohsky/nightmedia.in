import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import NightCoreVisualization from '../Visuals/NightCoreVisualization';

/**
 * Flagship hero — editorial headline on the left, Night Core
 * interactive visualization on the right. Enterprise register:
 * Apple / Vercel / Linear. Massive negative space. Slow reveals.
 */
const HeroPremium: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const nodes = el.querySelectorAll<HTMLElement>('[data-reveal]');
    nodes.forEach((n, i) => {
      n.style.opacity = '0';
      n.style.transform = 'translateY(20px)';
      n.style.transition = `opacity 1.1s cubic-bezier(.2,.7,.2,1) ${180 + i * 120}ms, transform 1.1s cubic-bezier(.2,.7,.2,1) ${180 + i * 120}ms`;
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
      className="relative overflow-hidden pt-32 pb-24 lg:pt-44 lg:pb-40"
    >
      {/* Layered depth — quiet radial wash */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden
        style={{
          background:
            'radial-gradient(60% 50% at 75% 30%, hsl(var(--primary) / 0.10), transparent 70%), radial-gradient(50% 40% at 15% 80%, hsl(var(--accent) / 0.06), transparent 70%)',
        }}
      />

      <div className="container-enterprise relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left — editorial copy */}
          <div className="lg:col-span-7">
            <div
              data-reveal
              className="inline-flex items-center gap-2.5 rounded-full border border-border/70 px-4 py-1.5 text-[11px] font-mono tracking-[0.22em] uppercase text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              AI-first · Digital experience
            </div>

            <h1
              data-reveal
              className="mt-10 font-display text-[52px] sm:text-[72px] lg:text-[104px] leading-[0.94] tracking-[-0.035em] font-medium text-foreground max-w-[14ch]"
            >
              Technology,
              <br />
              <span className="text-metallic">engineered</span> to
              <br />
              feel effortless.
            </h1>

            <p
              data-reveal
              className="mt-10 text-[17px] lg:text-[19px] leading-[1.55] text-muted-foreground max-w-[46ch]"
            >
              Night Media designs AI-powered websites, brand systems and
              interactive experiences for the world's most ambitious brands.
            </p>

            <div data-reveal className="mt-12 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="btn-primary-glow inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-[14px] font-medium tracking-tight"
              >
                Start a project
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/projects"
                className="btn-secondary-enterprise inline-flex items-center gap-1.5 px-6 py-3.5 rounded-full text-[14px] font-medium tracking-tight"
              >
                See selected work
              </Link>
            </div>
          </div>

          {/* Right — Night Core */}
          <div data-reveal className="lg:col-span-5 flex justify-center lg:justify-end">
            <NightCoreVisualization />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        data-reveal
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/60"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.32em]">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-muted-foreground/60 to-transparent scroll-indicator" />
      </div>
    </section>
  );
};

export default HeroPremium;
