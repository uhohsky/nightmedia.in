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
      description: 'Beautiful, intuitive interfaces designed with conversion psychology. We create designs that look stunning and perform.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
      color: 'from-purple-500/20 to-pink-500/10',
      href: '/services/ui-ux-design'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Clean, performant code that brings designs to life. Built with modern technologies for speed and scalability.',
      features: ['React/Next.js', 'Custom CMS', 'E-commerce', 'API Integration'],
      color: 'from-blue-500/20 to-cyan-500/10',
      href: '/services/web-design'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring perfect experience across all devices. 60%+ of traffic is mobile—we optimize for it.',
      features: ['Mobile-First', 'Tablet Optimized', 'Cross-Browser', 'Touch-Friendly'],
      color: 'from-emerald-500/20 to-teal-500/10',
      href: '/services/web-design'
    },
    {
      icon: Gauge,
      title: 'Performance Optimization',
      description: 'Lightning-fast load times that improve conversions and SEO rankings. Sub-2 second loads guaranteed.',
      features: ['Core Web Vitals', 'Image Optimization', 'Code Splitting', 'CDN Setup'],
      color: 'from-orange-500/20 to-amber-500/10',
      href: '/services/web-design'
    },
    {
      icon: Search,
      title: 'SEO-Ready Builds',
      description: 'Built with search engines in mind from day one. Technical SEO foundation for organic growth.',
      features: ['Semantic HTML', 'Schema Markup', 'Meta Optimization', 'Site Speed'],
      color: 'from-green-500/20 to-lime-500/10',
      href: '/services/seo'
    },
    {
      icon: Shield,
      title: 'Security & Maintenance',
      description: 'Enterprise-grade security and ongoing maintenance to keep your site safe and updated.',
      features: ['SSL Setup', 'Security Audits', 'Regular Updates', '24/7 Monitoring'],
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
            Our Core Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
            Web Design & Development Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            End-to-end web solutions from concept to launch. We handle design, development, 
            optimization, and everything in between.
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
