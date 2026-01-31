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
  ArrowRight
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SecondaryServices = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.secondary-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: '.secondary-section', start: 'top 80%' }
        }
      );

      gsap.fromTo('.secondary-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.1,
          scrollTrigger: { trigger: '.secondary-grid', start: 'top 85%' }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: TrendingUp,
      title: 'Performance Marketing',
      description: 'Data-driven paid campaigns across Google, Meta & LinkedIn that maximize ROI.',
      href: '/services/paid-ads'
    },
    {
      icon: Users,
      title: 'Influencer Marketing',
      description: 'Strategic creator partnerships to amplify reach and build authentic connections.',
      href: '/services/influencer-marketing'
    },
    {
      icon: Film,
      title: 'Video Production',
      description: 'Cinematic video content from concept to final edit that captures attention.',
      href: '/services/video-editing'
    },
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Complete brand systems from logo to guidelines that differentiate and resonate.',
      href: '/services/branding-identity'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Technical and content SEO strategies for sustainable organic growth.',
      href: '/services/seo'
    },
    {
      icon: Megaphone,
      title: 'CGI Advertising',
      description: 'Photorealistic 3D product visuals and animations that stop the scroll.',
      href: '/services/cgi-ads'
    }
  ];

  return (
    <section ref={sectionRef} className="secondary-section py-24 lg:py-32 px-6 relative overflow-hidden">
      <div className="gradient-orb w-[400px] h-[400px] left-0 bottom-0 opacity-15" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="secondary-header text-center mb-16">
          <p className="text-xs text-primary uppercase tracking-[0.3em] mb-4 font-medium">
            Full-Service Growth
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
            Beyond Web Design
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your website is the foundation. We offer complementary services to drive traffic, 
            build brand, and scale your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="secondary-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              className="secondary-card group glass-card rounded-2xl p-6 hover:bg-muted/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    {service.title}
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors duration-300"
          >
            Explore all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SecondaryServices;
