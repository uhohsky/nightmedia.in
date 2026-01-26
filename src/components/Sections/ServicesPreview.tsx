
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Layout, Layers, BarChart3 } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesPreview = () => {
  const services = [
    {
      icon: Layout,
      title: 'High-Converting Website Design',
      description: 'UX, UI, responsive design, and brand positioning that drives action.',
      features: ['User Experience Design', 'Conversion-Optimized UI', 'Brand Positioning', 'Mobile-First Design'],
      slug: 'web-design',
    },
    {
      icon: Layers,
      title: 'Funnel & Landing Page Development',
      description: 'Lead generation, sales funnels, and conversion flows that capture customers.',
      features: ['Landing Pages', 'Lead Capture Funnels', 'Sales Sequences', 'A/B Testing Ready'],
      slug: 'performance-marketing',
    },
    {
      icon: BarChart3,
      title: 'Growth & Performance Systems',
      description: 'Tracking, optimization, automation & CRO that scales your business.',
      features: ['Analytics Setup', 'Conversion Tracking', 'Marketing Automation', 'Performance Optimization'],
      slug: 'digital-marketing',
    },
  ];

  useEffect(() => {
    gsap.fromTo('.services-header',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top 75%',
        }
      }
    );

    gsap.fromTo('.service-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section className="services-section py-24 lg:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="services-header text-center mb-16 lg:mb-20">
          <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4 font-medium">What We Do</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
            Our Core Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Focused solutions designed to grow your business online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="service-card group relative p-8 rounded-2xl bg-card border border-border hover:border-muted transition-all duration-500 flex flex-col"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-muted transition-colors">
                <service.icon className="w-7 h-7 text-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 tracking-tight group-hover:text-muted-foreground transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/50" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Arrow */}
              <div className="flex items-center gap-2 text-foreground font-medium">
                <span className="text-sm">Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
