import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { useReveal } from './useReveal';

const work = [
  {
    client: 'E-Commerce Platform',
    category: 'Web Design · Engineering',
    challenge: 'A storefront rebuilt as a product — design system, CI shipping cadence and on-page AI personalisation.',
    image: '/images/projects/ecommerce-fashion.jpg',
    href: '/projects',
  },
  {
    client: 'SaaS Dashboard',
    category: 'Product · Growth',
    challenge: 'A data-heavy product experience re-architected for clarity, performance and conversion.',
    image: '/images/projects/saas-dashboard.jpg',
    href: '/projects',
  },
];

const FeaturedWork: React.FC = () => {
  const ref = useReveal<HTMLDivElement>(0.12);
  return (
    <section ref={ref} className="room-dark bg-room py-28 lg:py-40">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-10">
        <div data-r className="max-w-2xl mb-16 lg:mb-24">
          <span className="mono t-muted text-[11px]">Featured work</span>
          <h2 className="font-h mt-6 text-[40px] sm:text-[56px] lg:text-[68px] leading-[1.0] tracking-[-0.03em] font-medium">
            Built like product launches.
          </h2>
        </div>

        <div className="space-y-20 lg:space-y-28">
          {work.map((w, idx) => (
            <Link
              key={w.client}
              to={w.href}
              data-r
              className={`group grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${idx % 2 ? 'lg:[&>.visual]:order-2' : ''}`}
            >
              <div className="visual lg:col-span-7">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={w.image}
                    alt={w.client}
                    loading="lazy"
                    className="w-full aspect-[16/10] object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(7,24,39,0) 40%, rgba(7,24,39,.78) 100%)' }} />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <span className="mono text-[10px] t-fg/80" style={{ color: 'rgba(232,237,242,.8)' }}>{w.category}</span>
                    <span className="w-10 h-10 rounded-full border b-rule flex items-center justify-center bg-black/30 backdrop-blur-sm">
                      <ArrowUpRight className="w-5 h-5" style={{ color: '#3B9EFF' }} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5">
                <h3 className="font-h text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.05] tracking-[-0.02em] font-medium">
                  {w.client}
                </h3>
                <p className="t-muted mt-5 text-[16px] leading-[1.6] max-w-[42ch]">{w.challenge}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
