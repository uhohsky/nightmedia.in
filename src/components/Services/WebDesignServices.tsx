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
      // Header
      gsap.fromTo('.wds-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );

      // Each service block
      document.querySelectorAll('.wds-block').forEach((block) => {
        gsap.fromTo(block.querySelector('.wds-block-content'),
          { opacity: 0, x: -40 },
          {
            opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: block, start: 'top 80%' }
          }
        );
        gsap.fromTo(block.querySelector('.wds-block-visual'),
          { opacity: 0, x: 40 },
          {
            opacity: 1, x: 0, duration: 0.8, ease: 'power3.out',
            scrollTrigger: { trigger: block, start: 'top 80%' }
          }
        );
      });
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
      accent: 'from-purple-500 to-pink-500',
      href: '/services/ui-ux-design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=75&fm=webp'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Clean code that performs. Built for speed, SEO, and the scale youre planning for.',
      features: ['React/Next.js', 'Headless CMS', 'API-First', 'Performance-Tuned'],
      color: 'from-blue-500/20 to-cyan-500/10',
      accent: 'from-blue-500 to-cyan-500',
      href: '/services/web-design',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=75&fm=webp'
    },
    {
      icon: Smartphone,
      title: 'Responsive Systems',
      description: '60%+ of your traffic is mobile. We build for the device your customers actually use.',
      features: ['Mobile-First', 'Touch-Optimized', 'Fast Load', 'Cross-Browser'],
      color: 'from-emerald-500/20 to-teal-500/10',
      accent: 'from-emerald-500 to-teal-500',
      href: '/services/web-design',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=75&fm=webp'
    },
    {
      icon: Gauge,
      title: 'Performance Engineering',
      description: 'Speed is revenue. Sub-2-second loads, 95+ Core Web Vitals. No exceptions.',
      features: ['Core Web Vitals', 'CDN Setup', 'Image Optimization', 'Code Splitting'],
      color: 'from-orange-500/20 to-amber-500/10',
      accent: 'from-orange-500 to-amber-500',
      href: '/services/web-design',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=75&fm=webp'
    },
    {
      icon: Search,
      title: 'SEO Architecture',
      description: 'Built for Google from day one. Technical foundation that makes ranking inevitable.',
      features: ['Semantic HTML', 'Schema Markup', 'Site Structure', 'Speed Optimized'],
      color: 'from-green-500/20 to-lime-500/10',
      accent: 'from-green-500 to-lime-500',
      href: '/services/seo',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=75&fm=webp'
    },
    {
      icon: Shield,
      title: 'Maintenance & Security',
      description: 'Your system stays secure, updated, and performing. No surprises, no downtime.',
      features: ['24/7 Monitoring', 'Security Audits', 'Regular Updates', 'Backup Systems'],
      color: 'from-red-500/20 to-rose-500/10',
      accent: 'from-red-500 to-rose-500',
      href: '/services/web-design',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=75&fm=webp'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 px-6 relative overflow-hidden">
      <div className="gradient-orb w-[600px] h-[600px] -left-40 top-1/3 opacity-15" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="wds-header mb-20 lg:mb-28">
          <p className="text-xs text-primary uppercase tracking-[0.4em] mb-5 font-medium">
            Web as Revenue Infrastructure
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground tracking-tight mb-6 max-w-3xl">
            Every Component Optimized for Conversion
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl">
            Your website is not a brochure—its a conversion system. Each layer is engineered to move visitors toward action.
          </p>
        </div>

        {/* Service Blocks */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="wds-block group block border-t border-border/50 last:border-b"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 py-12 lg:py-16 items-center">
                {/* Left: Content */}
                <div className="wds-block-content">
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground/40 font-mono">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4 flex items-center gap-3">
                    {service.title}
                    <ArrowUpRight className="w-6 h-6 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-6 max-w-lg">
                    {service.description}
                  </p>

                  {/* Features as checklist */}
                  <div className="flex flex-wrap gap-3">
                    {service.features.map((feature, i) => (
                      <span 
                        key={i}
                        className="text-sm px-4 py-1.5 rounded-full bg-muted/40 text-muted-foreground border border-border/30 group-hover:border-primary/20 group-hover:text-foreground transition-all duration-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Image Visual */}
                <div className="wds-block-visual relative hidden lg:flex items-center justify-center">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-all duration-700" />
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-40 group-hover:opacity-60 transition-opacity duration-700 mix-blend-multiply`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
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
