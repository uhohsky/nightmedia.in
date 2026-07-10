import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-24 lg:py-36 border-t border-border">
      <div className="container-enterprise">
        <div className="surface-card rounded-3xl p-10 sm:p-16 lg:p-20 relative overflow-hidden">
          {/* Soft accent glow corner */}
          <div className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full bg-primary/15 blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute -bottom-40 -left-32 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl pointer-events-none" aria-hidden="true" />

          <div className="relative max-w-3xl">
            <p className="eyebrow mb-5">For brands ready to operate at scale</p>
            <h2 className="text-section-title text-foreground">
              Stop shipping campaigns.{' '}
              <span className="text-gradient-brand">Start deploying growth systems.</span>
            </h2>
            <p className="text-body-lg text-muted-foreground mt-6 max-w-[58ch]">
              One call. We map the highest-leverage moves across your website,
              content, brand and automation — then architect the system to
              execute them. No pitch deck. Just strategy.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="btn-primary-glow inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[15px]"
              >
                <Calendar className="w-4 h-4" />
                Book a Strategy Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="btn-secondary-enterprise inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-[15px]"
              >
                Explore what we build
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
