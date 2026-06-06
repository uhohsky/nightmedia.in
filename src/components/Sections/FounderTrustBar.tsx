import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { GraduationCap, Cpu, Radio, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

/**
 * Founder Trust Bar — appears directly under the Hero.
 * Purpose: instant authority (founder + UpGrad), AI-first stance,
 * and a "building in public" cue. CTA routes to /about.
 */
const FounderTrustBar = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.ftb-item',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 85%' },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  const pillars = [
    {
      icon: GraduationCap,
      title: 'UpGrad-trained operator',
      copy: 'Frameworks shaped by India\'s leading growth program.',
    },
    {
      icon: Cpu,
      title: 'AI-first by design',
      copy: 'Every website, funnel and content engine ships AI-native.',
    },
    {
      icon: Radio,
      title: 'Building in public',
      copy: 'Systems, wins and lessons published weekly — not gated.',
    },
  ];

  return (
    <section
      ref={ref}
      aria-label="Founder trust"
      className="relative z-10 px-4 sm:px-6 py-16 sm:py-20 border-t border-border/40"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Intro */}
          <div className="ftb-item lg:col-span-5">
            <p className="text-xs text-primary uppercase tracking-[0.3em] mb-4 font-medium">
              Founder-led · Operator-built
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-5 leading-tight">
              Built by Sky — an operator who treats AI as infrastructure, not a feature.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Six years inside growth teams. UpGrad-trained on the same playbooks
              used by India's fastest-scaling companies. Today, every system Night
              Media ships is AI-native by default — and the work is documented in
              public so you see the thinking before you buy.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Read the founder story
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="ftb-item glass-card glow-border rounded-2xl p-5 sm:p-6 hover-lift"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderTrustBar;
