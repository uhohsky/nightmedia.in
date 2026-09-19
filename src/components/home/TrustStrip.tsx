import React from 'react';
import NSignal from './NSignal';
import { useReveal } from './useReveal';

const TrustStrip: React.FC = () => {
  const ref = useReveal<HTMLDivElement>(0.25);
  const pillars = [
    'AI-Powered Websites',
    'Content Systems',
    'Brand Systems',
    'AI Automation',
    'Growth Marketing',
    'CGI & Digital Experiences',
  ];
  return (
    <section ref={ref} className="room-pearl bg-room py-16 lg:py-20">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div data-r className="flex items-center gap-3 justify-center flex-wrap">
          <NSignal size={12} />
          <span className="mono t-muted text-[11px]">In production across</span>
          <span className="w-6 h-px rule" />
          {pillars.map((p, i) => (
            <React.Fragment key={p}>
              <span className="text-[13px] t-fg font-medium">{p}</span>
              {i < pillars.length - 1 && <span className="t-muted opacity-40">·</span>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
