
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const ServicesPreview = () => {
  useEffect(() => {
    gsap.fromTo('.service-card',
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
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
    <section className="services-section py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-light text-black mb-8 tracking-tight">
            What We Do Best
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We specialize in creating digital experiences that push boundaries and drive results
          </p>
          <div className="w-24 h-px bg-cyan-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className={`service-card glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 magnetic ${
                service.featured ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <div className={`w-full h-32 ${service.featured ? 'lg:h-64' : ''} bg-gradient-to-br ${service.gradient} rounded-xl mb-4 opacity-80`}></div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
              {service.featured && (
                <div className="mt-4">
                  <span className="text-xs bg-white text-black px-2 py-1 rounded-full">Featured</span>
                </div>
              )}
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-block glass px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all magnetic"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
