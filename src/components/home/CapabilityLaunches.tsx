import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useReveal } from './useReveal';
import NSignal from './NSignal';
import { GlassSlab, OrbitalCore, SignalWave } from '../Visuals/Sculptures';

type Launch = {
  index: string;
  eyebrow: string;
  title: string;
  body: string;
  tags: string[];
  href: string;
  room: string;
  Visual: React.FC<{ className?: string }>;
  reverse?: boolean;
};

const launches: Launch[] = [
  {
    index: '01',
    eyebrow: 'Growth Systems',
    title: 'Diagnose. Architect. Compound.',
    body: 'We map the entire revenue system — positioning, funnel, content, automation and analytics — then rebuild it as one engineered pipeline where every release adds leverage instead of resetting it.',
    tags: ['Diagnostic', 'Revenue architecture', 'Attribution', 'AI roadmap'],
    href: '/ai-audit',
    room: 'room-dark',
    Visual: SignalWave,
  },
  {
    index: '02',
    eyebrow: 'Website Engineering',
    title: 'Sites engineered like products, not brochures.',
    body: 'Design systems, component libraries, CI-driven shipping and on-page AI wired into the build pipeline — so performance, conversion and personalisation compound with every release.',
    tags: ['Design system', 'CI pipeline', 'AI personalisation', 'Core Web Vitals'],
    href: '/services/web-design',
    room: 'room-pearl',
    Visual: GlassSlab,
    reverse: true,
  },
  {
    index: '03',
    eyebrow: 'AI + Automation',
    title: 'Agents that remove the manual work.',
    body: 'Custom agents, internal tools and workflows connected to your stack — so operations scale without linear headcount growth. Built, governed and measured like production software.',
    tags: ['Custom agents', 'Workflow automation', 'Internal tools', 'Guardrails'],
    href: '/services/performance-marketing',
    room: 'room-midnight',
    Visual: OrbitalCore,
  },
];

const CapabilityLaunches: React.FC = () => {
  return (
    <>
      {launches.map((l) => (
        <LaunchRow key={l.index} launch={l} />
      ))}
    </>
  );
};

const LaunchRow: React.FC<{ launch: Launch }> = ({ launch }) => {
  const ref = useReveal<HTMLElement>(0.18);
  const { Visual } = launch;
  return (
    <section ref={ref} className={`${launch.room} bg-room relative overflow-hidden`}>
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10 py-28 lg:py-40">
        <div className={`grid lg:grid-cols-12 gap-12 lg:gap-20 items-center ${launch.reverse ? 'lg:[&>.copy]:order-2' : ''}`}>
          <div className="copy lg:col-span-6 xl:col-span-5">
            <div data-r className="mono t-muted text-[11px] flex items-center gap-3">
              <span className="t-blue tabular-nums">{launch.index}</span>
              <span className="w-8 h-px rule" />
              <span>{launch.eyebrow}</span>
            </div>
            <h3 data-r className="font-h mt-8 text-[34px] sm:text-[44px] lg:text-[54px] leading-[1.04] tracking-[-0.028em] font-medium max-w-[16ch]">
              {launch.title}
            </h3>
            <p data-r className="mt-8 text-[16px] lg:text-[18px] leading-[1.6] t-muted max-w-[46ch]">
              {launch.body}
            </p>
            <div data-r className="mt-8 flex flex-wrap gap-2">
              {launch.tags.map((t) => (
                <span key={t} className="mono text-[10px] px-3 py-1.5 rounded-full b-rule border">
                  {t}
                </span>
              ))}
            </div>
            <Link
              data-r
              to={launch.href}
              className="mt-10 inline-flex items-center gap-2 text-[14px] font-medium border-b border-current pb-1 hover:gap-3 transition-all"
            >
              Explore <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-6 xl:col-span-7 relative">
            <div data-r className="relative aspect-square max-w-[600px] mx-auto">
              <Visual className="w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilityLaunches;
