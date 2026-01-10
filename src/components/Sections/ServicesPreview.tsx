import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const ServicesPreview = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo('.services-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.services-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Staggered card reveal
      gsap.fromTo('.service-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: 'Web Design',
      description: 'Stunning, responsive websites that captivate and convert',
      slug: 'web-design',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Influencer Marketing',
      description: 'Strategic partnerships that amplify your brand reach',
      slug: 'influencer-marketing',
      gradient: 'from-pink-500 to-red-500',
      featured: true
    },
    {
      title: 'CGI Ads',
      description: 'Photorealistic 3D advertisements that stop the scroll',
      slug: 'cgi-ads',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Video Editing',
      description: 'Cinematic storytelling through expert post-production',
      slug: 'video-editing',
      gradient: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section ref={sectionRef} className="services-section py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="services-header text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-light text-foreground mb-8 tracking-tight">
            What We Do Best
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            We specialize in creating digital experiences that push boundaries and drive results
          </p>
          <div className="w-24 h-px bg-accent mx-auto"></div>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className={`service-card glass rounded-2xl p-6 card-hover ${
                service.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className={`w-full h-32 ${service.featured ? 'lg:h-64' : ''} bg-gradient-to-br ${service.gradient} rounded-xl mb-4 opacity-80 transition-opacity duration-300 group-hover:opacity-100`}></div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
              {service.featured && (
                <div className="mt-4">
                  <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded-full">Featured</span>
                </div>
              )}
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-block glass px-8 py-4 rounded-full text-lg font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 btn-lift"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
