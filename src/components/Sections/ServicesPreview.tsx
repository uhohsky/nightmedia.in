
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Globe, Layers, BarChart3 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServicesPreview = () => {
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
          start: 'top 80%',
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

  const services = [
    {
      icon: Globe,
      title: 'Conversion Website Systems',
      description: 'High-converting websites engineered to capture leads and drive revenue.',
      features: ['Custom UX/UI Design', 'Responsive Development', 'Performance Optimization', 'Analytics Integration'],
      href: '/services/web-design',
      gradient: 'from-primary/20 to-primary/5',
    },
    {
      icon: Layers,
      title: 'Sales Funnels & Landing Pages',
      description: 'Strategic funnels designed to guide visitors through your conversion journey.',
      features: ['Landing Page Design', 'Lead Capture Systems', 'A/B Testing Setup', 'Conversion Tracking'],
      href: '/services/performance-marketing',
      gradient: 'from-accent/20 to-accent/5',
    },
    {
      icon: BarChart3,
      title: 'Growth Infrastructure Setup',
      description: 'Complete growth stack to scale your digital presence systematically.',
      features: ['CRM Integration', 'Marketing Automation', 'Analytics Dashboards', 'Scalable Architecture'],
      href: '/services/digital-marketing',
      gradient: 'from-primary/15 via-accent/10 to-primary/5',
    },
  ];

  return (
    <section className="services-section py-32 lg:py-40 px-6 relative overflow-hidden">
      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/5 via-transparent to-accent/5 blur-[100px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="services-header text-center mb-20">
          <p className="text-xs text-primary uppercase tracking-[0.3em] mb-4 font-medium">Our Services</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
            What We Do Best
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Focused expertise in building conversion-driven digital experiences.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="service-card group glass-card glow-border rounded-3xl p-8 relative overflow-hidden"
            >
              {/* Card gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
