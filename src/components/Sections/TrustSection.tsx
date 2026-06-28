import React from 'react';
import { Target, Zap, User, TrendingUp, Server } from 'lucide-react';

const trustPoints = [
  { icon: Target, title: 'Outcome-obsessed', description: 'We measure in revenue generated, not deliverables shipped.' },
  { icon: Zap, title: 'Speed to scale', description: 'Strategy to live system in weeks, not quarters.' },
  { icon: User, title: 'Operator-led', description: 'Work directly with builders who understand unit economics.' },
  { icon: TrendingUp, title: 'Compounding growth', description: 'Systems that improve with data, not campaigns that decay.' },
  { icon: Server, title: 'Full-stack execution', description: 'Web, ads, funnels, automation — one team, one system.' },
];

const TrustSection = () => {
  return (
    <section className="py-24 lg:py-36 border-t border-border bg-card/40">
      <div className="container-enterprise">
        <div className="max-w-3xl mb-16">
          <p className="eyebrow mb-4">Built for operators</p>
          <h2 className="text-section-title text-foreground">
            Enterprise discipline. Startup velocity.
          </h2>
          <p className="text-body-lg text-muted-foreground mt-6 max-w-[58ch]">
            We partner with founders who want infrastructure, not campaigns — revenue systems
            that compound, not vanity metrics that decay.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="surface-card p-6 rounded-2xl"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <point.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-1.5">{point.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
