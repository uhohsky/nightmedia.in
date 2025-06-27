
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.fromTo(heroRef.current, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2,
          ease: "power3.out"
        }
      );

      // Service cards stagger animation
      gsap.fromTo('.service-card',
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Parallax effect for hero
      gsap.to('.hero-bg', {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: 'Brand Strategy',
      description: 'Strategic brand positioning that cuts through the noise',
      slug: 'branding-identity',
      number: '01'
    },
    {
      title: 'Web Design',
      description: 'Digital experiences that captivate and convert',
      slug: 'web-design',
      number: '02'
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven campaigns that deliver results',
      slug: 'paid-ads',
      number: '03'
    },
    {
      title: 'Influencer Marketing',
      description: 'Authentic partnerships that amplify your reach',
      slug: 'influencer-marketing',
      number: '04'
    },
    {
      title: 'CGI & 3D',
      description: 'Photorealistic visuals that stop the scroll',
      slug: 'cgi-ads',
      number: '05'
    },
    {
      title: 'Video Production',
      description: 'Cinematic storytelling through motion',
      slug: 'video-editing',
      number: '06'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that drives engagement',
      slug: 'ui-ux-design',
      number: '07'
    },
    {
      title: 'Mobile Apps',
      description: 'Native experiences for iOS and Android',
      slug: 'mobile-apps',
      number: '08'
    },
    {
      title: 'SEO Optimization',
      description: 'Organic growth through strategic optimization',
      slug: 'seo',
      number: '09'
    },
    {
      title: 'Creative Direction',
      description: 'Bold ideas that break creative boundaries',
      slug: 'creative-strategy',
      number: '10'
    }
  ];

  return (
    <div ref={containerRef} className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="hero-bg absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8">
            We create
            <br />
            <span className="font-normal italic">digital magic</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transforming brands through strategic design, 
            compelling storytelling, and innovative technology.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-16 bg-black opacity-30 animate-pulse"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              We offer a comprehensive suite of creative and strategic services 
              designed to elevate your brand and drive meaningful results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="service-card group bg-white p-12 hover:bg-gray-50 transition-all duration-500 relative overflow-hidden"
              >
                {/* Service number */}
                <div className="text-6xl font-light text-gray-100 group-hover:text-gray-200 transition-colors duration-500 mb-4">
                  {service.number}
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-light mb-4 group-hover:translate-x-2 transition-transform duration-500">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:translate-x-2 transition-transform duration-500 delay-75">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center text-sm font-medium uppercase tracking-wider group-hover:translate-x-2 transition-transform duration-500 delay-100">
                    Learn More
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-light mb-8">
            Ready to start
            <br />
            <span className="italic">your project?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help bring your vision to life 
            and create something extraordinary together.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-black px-12 py-4 text-lg font-medium hover:bg-gray-100 transition-colors duration-300"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
