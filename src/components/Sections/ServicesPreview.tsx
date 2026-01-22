
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServicesPreview = () => {
  const services = [
    {
      title: 'CGI Ads',
      description: 'Stunning 3D visuals and CGI content that captivates audiences and elevates your brand presence',
      slug: 'cgi-ads',
    },
    {
      title: 'Influencer Marketing',
      description: 'Strategic partnerships with creators who authentically connect with your target audience',
      slug: 'influencer-marketing',
    },
    {
      title: 'Performance Marketing',
      description: 'Data-driven campaigns that maximize ROI across all digital advertising platforms',
      slug: 'performance-marketing',
    },
    {
      title: 'Video Editing',
      description: 'Professional post-production services that transform raw footage into compelling stories',
      slug: 'video-editing',
    },
  ];

  useEffect(() => {
    gsap.fromTo('.service-header',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo('.service-card',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section className="services-section py-32 lg:py-40 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="service-header text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 tracking-tight mb-6">
            What We Do Best
          </h2>
          <p className="text-xl text-gray-500 max-w-xl mx-auto leading-relaxed">
            We specialize in creating digital experiences that push boundaries and drive results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="service-card group p-8 lg:p-10 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-all duration-500"
            >
              <div className="flex justify-between items-start mb-6">
                <span className="text-sm text-gray-400 font-mono">0{index + 1}</span>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 mb-4 tracking-tight group-hover:text-gray-700 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-lg">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-gray-900 text-lg font-medium hover:text-gray-600 transition-colors duration-300 group"
          >
            Explore All Services
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
