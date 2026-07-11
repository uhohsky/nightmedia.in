import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import NightMediaIcon from '../Logo/NightMediaIcon';

/**
 * Closing statement — light environment, editorial register.
 * Sits after all capability sections as the final call.
 */
const ClosingCTA: React.FC = () => {
  return (
    <section className="env-light env-divide-top">
      <div className="container-enterprise py-32 lg:py-48">
        <div className="grid lg:grid-cols-12 gap-16 items-end">
          <div className="lg:col-span-8">
            <p className="text-[11px] font-mono uppercase tracking-[0.28em] text-muted-foreground">
              Start a project
            </p>
            <h2 className="mt-8 font-display text-[44px] sm:text-[64px] lg:text-[88px] leading-[0.98] tracking-[-0.035em] font-medium max-w-[16ch]">
              Let's engineer the next
              <br />
              <span className="text-metallic">defining chapter</span> of your brand.
            </h2>
            <p className="mt-10 text-[18px] leading-[1.6] text-muted-foreground max-w-[52ch]">
              A short call. A clear read on your growth engine. A proposal only
              if the fit is right — and if we can move the number that matters.
            </p>
            <div className="mt-14 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="btn-primary-glow inline-flex items-center gap-2 px-7 py-4 rounded-full text-[14px] font-medium tracking-tight"
              >
                Book a strategy call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/ai-audit"
                className="btn-secondary-enterprise inline-flex items-center gap-1.5 px-7 py-4 rounded-full text-[14px] font-medium tracking-tight"
              >
                Request an AI audit
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 -m-12 rounded-full bg-primary/10 blur-3xl" />
              <NightMediaIcon variant="metallic" size={180} animated className="relative" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;
