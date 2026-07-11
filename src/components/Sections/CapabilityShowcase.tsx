import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import {
  GlassSlab,
  ContentWeave,
  ChromeMonolith,
  OrbitalCore,
  SignalWave,
  CinematicPrism,
} from '../Visuals/Sculptures';

type Capability = {
  index: string;
  eyebrow: string;
  title: string;
  body: string;
  proof: { k: string; v: string }[];
  href: string;
  env: 'env-light' | 'env-dark' | 'env-pearl' | 'env-graphite';
  Sculpture: React.FC<{ className?: string }>;
  reverse?: boolean;
};

const capabilities: Capability[] = [
  {
    index: '01',
    eyebrow: 'AI-Powered Websites',
    title: 'Sites engineered like products, not brochures.',
    body:
      'Design systems, personalisation and on-page AI wired into the ship pipeline — so every release compounds performance instead of resetting it.',
    proof: [
      { k: 'Median LCP', v: '1.1s' },
      { k: 'Ship cadence', v: 'Weekly' },
    ],
    href: '/services/web-design',
    env: 'env-dark',
    Sculpture: GlassSlab,
  },
  {
    index: '02',
    eyebrow: 'Content Systems',
    title: 'Editorial engines that compound over years.',
    body:
      'Positioning, briefs, drafts, distribution and measurement — wired as one pipeline your team can run without new headcount.',
    proof: [
      { k: 'Organic lift', v: '3.2×' },
      { k: 'Cycle time', v: '−62%' },
    ],
    href: '/services/seo',
    env: 'env-light',
    Sculpture: ContentWeave,
    reverse: true,
  },
  {
    index: '03',
    eyebrow: 'Brand Systems',
    title: 'A brand engineered to command premium.',
    body:
      'Positioning, identity and design language built as a system — legible across product, campaign and boardroom surfaces alike.',
    proof: [
      { k: 'Pricing lift', v: '+38%' },
      { k: 'Recognition', v: 'Global' },
    ],
    href: '/services/branding',
    env: 'env-graphite',
    Sculpture: ChromeMonolith,
  },
  {
    index: '04',
    eyebrow: 'AI Automation',
    title: 'Agents that remove the manual work.',
    body:
      'Custom agents, workflows and internal tools connected to your stack — so operations scale without linear headcount growth.',
    proof: [
      { k: 'Ops hours saved', v: '1,200+/mo' },
      { k: 'Payback', v: '< 90 days' },
    ],
    href: '/services/performance-marketing',
    env: 'env-pearl',
    Sculpture: OrbitalCore,
    reverse: true,
  },
  {
    index: '05',
    eyebrow: 'Growth Marketing',
    title: 'One attributable revenue engine.',
    body:
      'Paid, lifecycle and AI-driven experimentation deployed as a single system — with attribution the CFO signs off on.',
    proof: [
      { k: 'ROAS', v: '4.6×' },
      { k: 'CAC payback', v: '2.4 mo' },
    ],
    href: '/services/performance-marketing',
    env: 'env-dark',
    Sculpture: SignalWave,
  },
  {
    index: '06',
    eyebrow: 'CGI & Digital Experiences',
    title: 'Signature moments that travel farther than campaigns.',
    body:
      'Cinematic CGI, 3D and interactive experiences for launches and flagship sites — engineered to earn attention on merit.',
    proof: [
      { k: 'Earned reach', v: '48M+' },
      { k: 'Formats', v: 'CGI · 3D · WebGL' },
    ],
    href: '/services/cgi-ads',
    env: 'env-light',
    Sculpture: CinematicPrism,
    reverse: true,
  },
];

const CapabilityRow: React.FC<{ cap: Capability }> = ({ cap }) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.querySelectorAll<HTMLElement>('[data-anim]').forEach((n, i) => {
              n.style.transitionDelay = `${i * 90}ms`;
              n.classList.add('is-in');
            });
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.18 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const { Sculpture } = cap;

  return (
    <section
      ref={ref}
      className={`${cap.env} env-divide-top relative overflow-hidden`}
    >
      <div className="container-enterprise py-28 lg:py-40">
        <div
          className={`grid lg:grid-cols-12 gap-16 lg:gap-20 items-center ${cap.reverse ? 'lg:[&>.copy]:order-2' : ''}`}
        >
          {/* Copy */}
          <div className="copy lg:col-span-6 xl:col-span-5">
            <div
              data-anim
              className="cap-anim inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.28em] text-muted-foreground"
            >
              <span className="tabular-nums">{cap.index}</span>
              <span className="w-8 h-px bg-current opacity-40" />
              <span>{cap.eyebrow}</span>
            </div>

            <h3
              data-anim
              className="cap-anim mt-8 font-display text-[36px] sm:text-[46px] lg:text-[56px] leading-[1.02] tracking-[-0.028em] font-medium max-w-[18ch]"
            >
              {cap.title}
            </h3>

            <p
              data-anim
              className="cap-anim mt-8 text-[17px] leading-[1.6] text-muted-foreground max-w-[46ch]"
            >
              {cap.body}
            </p>

            <div data-anim className="cap-anim mt-12 grid grid-cols-2 gap-x-10 gap-y-6 max-w-md">
              {cap.proof.map((p) => (
                <div key={p.k} className="border-t border-border pt-4">
                  <div className="font-display text-[26px] leading-none tracking-[-0.02em]">
                    {p.v}
                  </div>
                  <div className="mt-2 text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                    {p.k}
                  </div>
                </div>
              ))}
            </div>

            <Link
              data-anim
              to={cap.href}
              className="cap-anim mt-12 inline-flex items-center gap-2 text-[14px] font-medium border-b border-current pb-1 hover:gap-3 transition-all"
            >
              Explore capability
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Sculpture */}
          <div className="lg:col-span-6 xl:col-span-7 relative">
            <div
              data-anim
              className="cap-anim relative aspect-square max-w-[640px] mx-auto"
            >
              <Sculpture className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cap-anim { opacity: 0; transform: translateY(24px); transition: opacity 1.1s cubic-bezier(.2,.7,.2,1), transform 1.1s cubic-bezier(.2,.7,.2,1); }
        .cap-anim.is-in { opacity: 1; transform: translateY(0); }
      `}</style>
    </section>
  );
};

const CapabilityShowcase: React.FC = () => (
  <>
    {capabilities.map((c) => (
      <CapabilityRow key={c.index} cap={c} />
    ))}
  </>
);

export default CapabilityShowcase;
