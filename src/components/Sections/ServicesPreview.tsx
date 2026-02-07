
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { 
  ArrowUpRight, 
  Globe, 
  Rocket, 
  Target, 
  Megaphone, 
  Search, 
  Share2, 
  Palette, 
  Film, 
  Users 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServicesPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo('.services-header',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
          }
        }
      );

      // Service cards stagger animation
      gsap.fromTo('.service-card',
        { opacity: 0, y: 80, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: {
            amount: 0.8,
            from: 'start'
          },
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section.querySelector('.services-grid'),
            start: 'top 80%',
          }
        }
      );

      // Parallax for background elements
      gsap.to('.services-orb-1', {
        y: -80,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        }
      });

      gsap.to('.services-orb-2', {
        y: 60,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Globe,
      title: 'Web Design & Development',
      description: 'Your website is your 24/7 sales system. We build ones that actually close.',
      href: '/services/web-design',
      color: 'from-blue-500/20 to-cyan-500/10',
    },
    {
      icon: Rocket,
      title: 'Performance Marketing',
      description: 'Profitable acquisition at scale. We optimize for ROAS, not impressions.',
      href: '/services/performance-marketing',
      color: 'from-purple-500/20 to-pink-500/10',
    },
    {
      icon: Target,
      title: 'Lead Generation',
      description: 'Predictable pipeline, not random inquiries. Systems that compound.',
      href: '/services/lead-generation',
      color: 'from-emerald-500/20 to-teal-500/10',
    },
    {
      icon: Megaphone,
      title: 'Paid Advertising',
      description: 'Google, Meta, LinkedIn—deployed as a unified revenue engine.',
      href: '/services/paid-advertising',
      color: 'from-orange-500/20 to-amber-500/10',
    },
    {
      icon: Search,
      title: 'SEO',
      description: 'Own your category in search. Long-term traffic you dont pay for.',
      href: '/services/seo',
      color: 'from-green-500/20 to-lime-500/10',
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build authority, not just followers. Content that drives decisions.',
      href: '/services/social-media',
      color: 'from-pink-500/20 to-rose-500/10',
    },
    {
      icon: Palette,
      title: 'Branding',
      description: 'Positioning that commands premium. Identity that scales with you.',
      href: '/services/branding',
      color: 'from-violet-500/20 to-purple-500/10',
    },
    {
      icon: Film,
      title: 'Video Editing',
      description: 'Stop the scroll. Move the needle. Video that performs.',
      href: '/services/video-editing',
      color: 'from-red-500/20 to-orange-500/10',
    },
    {
      icon: Users,
      title: 'Influencer Marketing',
      description: 'Strategic creator partnerships. Measured by revenue, not reach.',
      href: '/services/influencer-marketing',
      color: 'from-cyan-500/20 to-blue-500/10',
    },
  ];

  return (
    <section ref={sectionRef} className="services-section py-32 lg:py-48 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="services-orb-1 absolute top-1/4 left-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-primary/10 via-transparent to-transparent blur-[120px]" />
      <div className="services-orb-2 absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-accent/10 via-transparent to-transparent blur-[100px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="services-header text-center mb-20">
          <p className="text-xs text-primary uppercase tracking-[0.3em] mb-5 font-medium">Growth Systems</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
            The Problem → System → Outcome
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Each service is a module in your growth infrastructure. Together, they compound.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="service-card group glass-card glow-border rounded-3xl p-8 relative overflow-hidden hover-lift"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-primary/30 group-hover:to-accent/20 transition-all duration-500">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
