import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { 
  Megaphone, 
  TrendingUp, 
  Users, 
  Film, 
  Palette, 
  Search,
  ArrowUpRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SecondaryServices = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.sec-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );

      document.querySelectorAll('.sec-item').forEach((item) => {
        gsap.fromTo(item,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6, ease: 'power3.out',
            scrollTrigger: { trigger: item, start: 'top 90%' }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: TrendingUp,
      title: 'Performance Marketing',
      description: 'Paid acquisition that compounds. We optimize for profitable scale, not vanity metrics.',
      href: '/services/paid-ads'
    },
    {
      icon: Users,
      title: 'Influencer Marketing',
      description: 'Creator partnerships measured by revenue, not reach. Strategic placements that convert.',
      href: '/services/influencer-marketing'
    },
    {
      icon: Film,
      title: 'Video Production',
      description: 'Content that stops the scroll and moves the needle. From concept to conversion.',
      href: '/services/video-editing'
    },
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Positioning that commands premium. Systems that scale with your ambition.',
      href: '/services/branding-identity'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Own your category in search. Long-term traffic you dont have to pay for.',
      href: '/services/seo'
    },
    {
      icon: Megaphone,
      title: 'CGI Advertising',
      description: 'Photorealistic 3D that stops the scroll. Product visuals that outperform.',
      href: '/services/cgi-ads'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 px-6 relative overflow-hidden">
      <div className="gradient-orb w-[400px] h-[400px] left-0 bottom-0 opacity-15" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="sec-header mb-20 lg:mb-24">
          <p className="text-xs text-primary uppercase tracking-[0.4em] mb-5 font-medium">
            Complete Growth Stack
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground tracking-tight mb-6 max-w-3xl">
            The System Beyond Web
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl">
            Your website is the foundation. These services drive traffic to it, build trust around it, and multiply what it produces.
          </p>
        </div>

        {/* Services as rows */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="sec-item group block border-t border-border/50 last:border-b"
            >
              <div className="flex items-center gap-6 lg:gap-12 py-8 lg:py-10">
                {/* Number */}
                <span className="text-sm text-muted-foreground/30 font-mono hidden sm:block w-8 shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-muted/40 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-500">
                  <service.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-500" />
                </div>

                {/* Title + Description */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:gap-8">
                    <h3 className="text-xl lg:text-2xl font-semibold text-foreground shrink-0 lg:w-64">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mt-1 lg:mt-0">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Arrow */}
                <ArrowUpRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecondaryServices;
