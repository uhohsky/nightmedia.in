import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Cpu, LineChart, Layers } from 'lucide-react';
import NightMediaIcon from '../Logo/NightMediaIcon';

/**
 * Flagship hero — bento composition anchored by the metallic "N".
 * Enterprise register: Apple / ServiceNow / Stripe / Vercel.
 * No neon, no gradients-on-white, restrained motion.
 */
const BentoHero: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const nodes = el.querySelectorAll<HTMLElement>('[data-reveal]');
    nodes.forEach((n, i) => {
      n.style.opacity = '0';
      n.style.transform = 'translateY(14px)';
      n.style.transition = `opacity 0.7s cubic-bezier(.2,.7,.2,1) ${i * 70}ms, transform 0.7s cubic-bezier(.2,.7,.2,1) ${i * 70}ms`;
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
      className="relative overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      {/* barely-there ambient */}
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" aria-hidden />
      <div className="gradient-orb gradient-orb-1 w-[720px] h-[720px] -top-60 -right-40" aria-hidden />

      <div className="container-enterprise relative z-10">
        {/* Top row: eyebrow + copy */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-8 lg:mb-12">
          <div className="lg:col-span-8">
            <div
              data-reveal
              className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-[11px] font-mono tracking-[0.18em] uppercase text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              AI Growth Infrastructure
            </div>

            <h1
              data-reveal
              className="mt-8 font-display text-[44px] sm:text-[60px] lg:text-[80px] leading-[0.96] tracking-[-0.03em] font-semibold text-foreground max-w-[16ch]"
            >
              Growth systems,
              <br />
              <span className="text-metallic">engineered like software.</span>
            </h1>
          </div>

          <div data-reveal className="lg:col-span-4">
            <p className="text-body-lg text-muted-foreground max-w-[42ch]">
              Night Media builds the websites, automations and content engines
              that turn ambitious brands into compounding revenue machines —
              deployed AI-first, tuned for performance.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/ai-audit"
                className="btn-primary-glow inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-semibold"
              >
                Get your AI Audit <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                to="/contact"
                className="btn-secondary-enterprise inline-flex items-center px-5 py-2.5 rounded-full text-[13px] font-semibold"
              >
                Talk to a strategist
              </Link>
            </div>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-3 lg:gap-4 auto-rows-[130px] sm:auto-rows-[150px] lg:auto-rows-[170px]">
          {/* METALLIC N — signature tile */}
          <div
            data-reveal
            className="col-span-12 lg:col-span-6 row-span-2 lg:row-span-3 surface-card relative overflow-hidden flex items-center justify-center p-8"
          >
            <div className="absolute inset-0 grid-pattern-dots opacity-30" />
            <div className="absolute top-6 left-6 text-[10px] font-mono uppercase tracking-[0.32em] text-muted-foreground">
              /the-n · signature mark
            </div>
            <NightMediaIcon variant="metallic" size={280} animated className="drop-shadow-[0_20px_60px_hsl(var(--primary)/0.25)]" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
              <span>nightmedia.in</span>
              <span className="text-accent">● system online</span>
            </div>
          </div>

          {/* Stat tile 1 */}
          <div
            data-reveal
            className="col-span-6 lg:col-span-3 row-span-1 lg:row-span-2 surface-card p-6 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <LineChart className="w-4 h-4 text-accent" />
              <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-muted-foreground">Revenue</span>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-display font-semibold tracking-tight text-foreground">
                ₹1M+
              </div>
              <div className="text-xs text-muted-foreground mt-1">Generated for clients</div>
            </div>
          </div>

          {/* Stat tile 2 */}
          <div
            data-reveal
            className="col-span-6 lg:col-span-3 row-span-1 lg:row-span-2 surface-card p-6 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <Layers className="w-4 h-4 text-primary" />
              <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-muted-foreground">Systems</span>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-display font-semibold tracking-tight text-foreground">
                150<span className="text-primary">+</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1">Growth systems deployed</div>
            </div>
          </div>

          {/* AI stack pill */}
          <div
            data-reveal
            className="col-span-12 lg:col-span-6 row-span-1 surface-card p-5 flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Cpu className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">AI-native stack</div>
                <div className="text-xs text-muted-foreground font-mono">GPT-5 · Gemini 3 · Claude · custom agents</div>
              </div>
            </div>
            <Link
              to="/services"
              className="text-[12px] font-medium text-primary inline-flex items-center gap-1 hover:gap-2 transition-all"
            >
              Explore stack <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BentoHero;
