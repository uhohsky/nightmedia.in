import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useReveal } from './useReveal';

const capabilities = [
  { i: '01', title: 'Growth Systems', href: '/services', desc: 'Diagnosis, architecture and compounding revenue infrastructure.' },
  { i: '02', title: 'Website Engineering', href: '/services/web-design', desc: 'Sites engineered like products — design systems, CI, AI personalisation.' },
  { i: '03', title: 'Content & Creative', href: '/services/seo', desc: 'Editorial engines that compound organic reach over years.' },
  { i: '04', title: 'AI + Automation', href: '/services/performance-marketing', desc: 'Agents and workflows that scale operations without linear headcount.' },
  { i: '05', title: 'Performance Marketing', href: '/services/performance-marketing', desc: 'One attributable revenue engine — paid, lifecycle, experimentation.' },
  { i: '06', title: 'Brand Building', href: '/services/branding', desc: 'Identity and design language engineered to command premium.' },
];

const WhatWeDo: React.FC = () => {
  const ref = useReveal<HTMLDivElement>(0.12);
  return (
    <section ref={ref} className="room-softwhite bg-room py-28 lg:py-40">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div data-r className="max-w-2xl mb-16 lg:mb-24">
          <span className="mono t-muted text-[11px]">What we do</span>
          <h2 className="font-h mt-6 text-[40px] sm:text-[56px] lg:text-[68px] leading-[1.0] tracking-[-0.03em] font-medium">
            Six systems, one growth engine.
          </h2>
        </div>

        <div className="divide-y b-rule" style={{ borderColor: 'var(--h-rule)' }}>
          {capabilities.map((c) => (
            <Link
              key={c.i}
              to={c.href}
              data-r
              className="cap-row group flex items-center gap-6 lg:gap-12 py-7 lg:py-9"
            >
              <span className="mono t-blue text-[12px] w-10 shrink-0">{c.i}</span>
              <div className="flex-1 min-w-0">
                <h3 className="font-h text-[24px] sm:text-[30px] lg:text-[38px] leading-tight tracking-[-0.02em] font-medium">
                  {c.title}
                </h3>
                <p className="t-muted mt-1 text-[15px] lg:text-[16px] max-w-[60ch]">{c.desc}</p>
              </div>
              <ArrowUpRight className="cap-arrow t-blue w-6 h-6 shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
