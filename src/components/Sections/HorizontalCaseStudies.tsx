import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import NightMediaIcon from '../Logo/NightMediaIcon';

const cases = [
  {
    slug: 'ecommerce-platform',
    tag: 'E-Commerce · Web Systems',
    title: 'Rebuilt a D2C storefront into a 24/7 revenue engine.',
    metric: '+240%',
    metricLabel: 'Revenue lift',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=900&fit=crop',
  },
  {
    slug: 'saas-lead-gen',
    tag: 'SaaS · Performance',
    title: 'Turned a cold SaaS funnel into a predictable pipeline.',
    metric: '8.2×',
    metricLabel: 'ROAS achieved',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&h=900&fit=crop',
  },
  {
    slug: 'd2c-brand',
    tag: 'D2C · Full-Stack Growth',
    title: 'Launched a challenger brand in 45 days.',
    metric: '+320%',
    metricLabel: 'MoM growth',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1400&h=900&fit=crop',
  },
  {
    slug: 'ai-workflow',
    tag: 'AI · Automation',
    title: 'Compressed a 20-hour ops workflow into 12 minutes.',
    metric: '99×',
    metricLabel: 'Faster ops',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1400&h=900&fit=crop',
  },
];

const HorizontalCaseStudies: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 border-t border-border">
      <div className="container-enterprise mb-12 flex items-end justify-between gap-6">
        <div>
          <p className="eyebrow mb-4">Case Studies</p>
          <h2 className="text-section-title text-foreground max-w-[20ch]">
            Systems in production. Numbers you can defend.
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground">
          <NightMediaIcon variant="metallic" size={16} />
          scroll →
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-8 px-6 lg:px-[max(1.5rem,calc((100vw-1200px)/2))] scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {cases.map((c) => (
            <Link
              key={c.slug}
              to={`/projects/${c.slug}`}
              className="group snap-start shrink-0 w-[86vw] sm:w-[520px] lg:w-[640px] surface-card overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute top-5 left-5 px-3 py-1 rounded-full border border-white/15 bg-white/5 backdrop-blur text-[11px] font-mono uppercase tracking-[0.18em] text-foreground/90">
                  {c.tag}
                </div>
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-background/80 backdrop-blur border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4 text-foreground" />
                </div>
              </div>
              <div className="p-7 flex-1 flex flex-col justify-between gap-6">
                <h3 className="text-xl lg:text-2xl font-display font-semibold text-foreground leading-tight">
                  {c.title}
                </h3>
                <div className="flex items-end justify-between border-t border-border pt-5">
                  <div>
                    <div className="text-3xl lg:text-4xl font-display font-semibold text-metallic tracking-tight">
                      {c.metric}
                    </div>
                    <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mt-1">
                      {c.metricLabel}
                    </div>
                  </div>
                  <span className="text-xs font-medium text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read case <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
          <div className="shrink-0 w-6" />
        </div>
      </div>
    </section>
  );
};

export default HorizontalCaseStudies;
