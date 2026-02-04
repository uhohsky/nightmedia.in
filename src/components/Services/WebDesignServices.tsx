import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Paintbrush, 
  Code, 
  Smartphone, 
  Gauge, 
  Search, 
  Shield,
  ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const WebDesignServices = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.webdesign-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: '.webdesign-section', start: 'top 80%' }
        }
      );

      gsap.fromTo('.webdesign-card',
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.1,
          scrollTrigger: { trigger: '.webdesign-grid', start: 'top 85%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Paintbrush,
      title: 'UI/UX Design',
      description: 'Not just beautiful—strategically designed to guide users toward conversion. Every screen has a job.',
      features: ['Conversion Mapping', 'User Psychology', 'A/B Ready', 'Mobile-First'],
      color: 'from-purple-500/20 to-pink-500/10',
      href: '/services/ui-ux-design'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Clean code that performs. Built for speed, SEO, and the scale youre planning for.',
      features: ['React/Next.js', 'Headless CMS', 'API-First', 'Performance-Tuned'],
      color: 'from-blue-500/20 to-cyan-500/10',
      href: '/services/web-design'
    },
    {
      icon: Smartphone,
      title: 'Responsive Systems',
      description: '60%+ of your traffic is mobile. We build for the device your customers actually use.',
      features: ['Mobile-First', 'Touch-Optimized', 'Fast Load', 'Cross-Browser'],
      color: 'from-emerald-500/20 to-teal-500/10',
      href: '/services/web-design'
    },
    {
      icon: Gauge,
      title: 'Performance Engineering',
      description: 'Speed is revenue. Sub-2-second loads, 95+ Core Web Vitals. No exceptions.',
      features: ['Core Web Vitals', 'CDN Setup', 'Image Optimization', 'Code Splitting'],
      color: 'from-orange-500/20 to-amber-500/10',
      href: '/services/web-design'
    },
    {
      icon: Search,
      title: 'SEO Architecture',
      description: 'Built for Google from day one. Technical foundation that makes ranking inevitable.',
      features: ['Semantic HTML', 'Schema Markup', 'Site Structure', 'Speed Optimized'],
      color: 'from-green-500/20 to-lime-500/10',
      href: '/services/seo'
    },
    {
      icon: Shield,
      title: 'Maintenance & Security',
      description: 'Your system stays secure, updated, and performing. No surprises, no downtime.',
      features: ['24/7 Monitoring', 'Security Audits', 'Regular Updates', 'Backup Systems'],
      color: 'from-red-500/20 to-rose-500/10',
      href: '/services/web-design'
    }
  ];

  return (
    <section ref={sectionRef} className="webdesign-section py-24 lg:py-32 px-6 relative overflow-hidden">
      <div className="gradient-orb w-[600px] h-[600px] -left-40 top-1/3 opacity-20" />
      <div className="gradient-orb w-[400px] h-[400px] right-0 bottom-0 opacity-15" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="webdesign-header text-center mb-16">
          <p className="text-xs text-primary uppercase tracking-[0.3em] mb-4 font-medium">
            Web as Revenue Infrastructure
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
            Every Component Optimized for Conversion
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your website is not a brochure—its a conversion system. Each layer is engineered to move visitors toward action.
          </p>
        </div>

        {/* Services Grid */}
        <div className="webdesign-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="webdesign-card group glass-card glow-border rounded-3xl p-8 relative overflow-hidden hover-lift"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300" />
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, i) => (
                    <span 
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-muted/50 text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDesignServices;
