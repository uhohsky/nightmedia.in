import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Globe, Rocket, Target, Megaphone, Search, Share2, Palette, Film, Users,
} from 'lucide-react';

const services = [
  { icon: Globe, title: 'Web Design & Development', description: 'Your website as a 24/7 sales system, built to close.', outcome: 'Higher conversion, faster pages', href: '/services/web-design' },
  { icon: Rocket, title: 'Performance Marketing', description: 'Profitable acquisition at scale. Optimized for ROAS, not impressions.', outcome: 'Lower CAC, predictable spend', href: '/services/performance-marketing' },
  { icon: Target, title: 'Lead Generation', description: 'Predictable pipeline, not random inquiries. Systems that compound.', outcome: 'Qualified, sales-ready leads', href: '/services/lead-generation' },
  { icon: Megaphone, title: 'Paid Advertising', description: 'Google, Meta, LinkedIn — deployed as one revenue engine.', outcome: 'Unified attribution & ROAS', href: '/services/paid-advertising' },
  { icon: Search, title: 'SEO', description: 'Own your category in search. Long-term traffic you don\u2019t pay for.', outcome: 'Compounding organic traffic', href: '/services/seo' },
  { icon: Share2, title: 'Social Media Marketing', description: 'Build authority, not just followers. Content that drives decisions.', outcome: 'Brand pull & demand capture', href: '/services/social-media' },
  { icon: Palette, title: 'Branding', description: 'Positioning that commands premium. Identity that scales with you.', outcome: 'Premium pricing power', href: '/services/branding' },
  { icon: Film, title: 'Video Editing', description: 'Stop the scroll, move the needle. Video engineered to perform.', outcome: 'Higher VTR & engagement', href: '/services/video-editing' },
  { icon: Users, title: 'Influencer Marketing', description: 'Strategic creator partnerships measured by revenue, not reach.', outcome: 'Trackable revenue uplift', href: '/services/influencer-marketing' },
];

const ServicesPreview = () => {
  return (
    <section className="py-24 lg:py-36 border-t border-border bg-card/40">
      <div className="container-enterprise">
        <div className="max-w-3xl mb-16">
          <p className="eyebrow mb-4">Solutions</p>
          <h2 className="text-section-title text-foreground">
            Modular growth systems for ambitious brands.
          </h2>
          <p className="text-body-lg text-muted-foreground mt-6 max-w-[58ch]">
            Each solution is a module in your growth infrastructure. Together, they compound.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="group surface-card rounded-2xl p-7 flex flex-col"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {service.description}
              </p>
              <div className="mt-auto pt-5 border-t border-border flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.16em] text-accent font-medium">
                  {service.outcome}
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
