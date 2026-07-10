import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Globe, FileText, Palette, Cpu, LineChart, Film,
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'AI-Powered Websites',
    description: 'Sites engineered with AI at the core — personalised, conversion-tuned, always shipping.',
    outcome: 'Higher conversion, faster ship cycles',
    href: '/services/web-design',
  },
  {
    icon: FileText,
    title: 'Content Systems',
    description: 'Editorial pipelines that scale — briefs, drafts, distribution, measurement, on repeat.',
    outcome: 'Compounding organic reach',
    href: '/services/seo',
  },
  {
    icon: Palette,
    title: 'Brand Systems',
    description: 'Positioning, identity and design language built to command premium — across every surface.',
    outcome: 'Premium pricing power',
    href: '/services/branding',
  },
  {
    icon: Cpu,
    title: 'AI Automation',
    description: 'Agents, workflows and internal tools that remove manual work from your growth stack.',
    outcome: 'Lower ops cost, faster loops',
    href: '/services/performance-marketing',
  },
  {
    icon: LineChart,
    title: 'Growth Marketing',
    description: 'Paid, lifecycle and lifecycle-AI — deployed as one attributable revenue engine.',
    outcome: 'Predictable, attributable revenue',
    href: '/services/performance-marketing',
  },
  {
    icon: Film,
    title: 'CGI & Digital Experiences',
    description: 'Cinematic CGI, 3D and interactive experiences for launches, campaigns and flagship sites.',
    outcome: 'Signature-grade brand moments',
    href: '/services/cgi-ads',
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24 lg:py-36 border-t border-border bg-card/40">
      <div className="container-enterprise">
        <div className="max-w-3xl mb-16">
          <p className="eyebrow mb-4">What we do</p>
          <h2 className="text-section-title text-foreground">
            One operating system for modern brand growth.
          </h2>
          <p className="text-body-lg text-muted-foreground mt-6 max-w-[58ch]">
            Six disciplines, engineered to compound. Deployed AI-first, wired
            together as a single growth infrastructure.
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

