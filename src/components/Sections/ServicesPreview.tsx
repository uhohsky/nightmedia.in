
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const ServicesPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation with typewriter effect
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Staggered card animations with enhanced easing
      gsap.fromTo('.service-card',
        { 
          opacity: 0, 
          y: 120,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.4,
          stagger: {
            amount: 0.8,
            from: "start"
          },
          ease: "power4.out",
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 75%',
            end: 'bottom 25%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Parallax effect for service cards
      gsap.to('.service-card', {
        y: (i, target) => -50 * (i + 1),
        ease: "none",
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      });

      // Featured card special animation
      gsap.fromTo('.featured-card',
        { rotateY: 15, transformPerspective: 1000 },
        {
          rotateY: 0,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.featured-card',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: 'Web Design',
      description: 'Stunning, responsive websites that captivate and convert with cutting-edge technology',
      slug: 'web-design',
      gradient: 'from-blue-600 via-blue-500 to-purple-600',
      icon: '🎨'
    },
    {
      title: 'Influencer Marketing',
      description: 'Strategic partnerships that amplify your brand reach across all digital platforms',
      slug: 'influencer-marketing',
      gradient: 'from-pink-600 via-pink-500 to-red-500',
      featured: true,
      icon: '🚀'
    },
    {
      title: 'CGI Ads',
      description: 'Photorealistic 3D advertisements that stop the scroll and drive engagement',
      slug: 'cgi-ads',
      gradient: 'from-green-600 via-green-500 to-teal-500',
      icon: '🎬'
    },
    {
      title: 'Video Editing',
      description: 'Cinematic storytelling through expert post-production and visual effects',
      slug: 'video-editing',
      gradient: 'from-yellow-600 via-yellow-500 to-orange-500',
      icon: '✂️'
    }
  ];

  return (
    <section ref={containerRef} className="py-32 px-6 relative overflow-hidden bg-black">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-pink-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-8xl mx-auto relative z-10">
        {/* Enhanced header */}
        <div className="text-center mb-24">
          <h2 
            ref={titleRef}
            className="text-6xl md:text-8xl lg:text-9xl font-mono font-bold mb-8 leading-none"
          >
            <span className="gradient-text bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
              What We Do Best
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
          <p className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            We specialize in creating digital experiences that push boundaries and drive results
          </p>
        </div>

        {/* Enhanced services grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className={`service-card ${service.featured ? 'featured-card lg:col-span-2 lg:row-span-2' : ''} 
                group relative overflow-hidden rounded-3xl transition-all duration-700 hover:scale-105`}
            >
              {/* Glassmorphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20"></div>
              
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-700`}></div>
              
              {/* Content */}
              <div className={`relative z-10 p-8 ${service.featured ? 'lg:p-12' : ''} h-full flex flex-col justify-between`}>
                <div>
                  {/* Icon */}
                  <div className={`text-4xl ${service.featured ? 'lg:text-6xl' : ''} mb-6 transform group-hover:scale-110 transition-transform duration-500`}>
                    {service.icon}
                  </div>
                  
                  {/* Service info */}
                  <h3 className={`font-mono font-bold mb-4 text-white ${service.featured ? 'text-3xl lg:text-4xl' : 'text-2xl'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-gray-300 leading-relaxed ${service.featured ? 'text-lg lg:text-xl' : 'text-base'}`}>
                    {service.description}
                  </p>
                </div>
                
                {/* Featured badge */}
                {service.featured && (
                  <div className="mt-8">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-white/20 text-white backdrop-blur-sm border border-white/30">
                      ⭐ Featured Service
                    </span>
                  </div>
                )}

                {/* Hover arrow */}
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center px-12 py-6 rounded-full text-xl font-medium bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 text-white hover:from-white hover:to-gray-100 hover:text-black transition-all duration-700 group"
          >
            <span>Explore All Services</span>
            <svg className="w-5 h-5 ml-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
