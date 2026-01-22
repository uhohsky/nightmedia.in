
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
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop&q=80',
    },
    {
      title: 'Influencer Marketing',
      description: 'Strategic partnerships with creators who authentically connect with your target audience',
      slug: 'influencer-marketing',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop&q=80',
    },
    {
      title: 'Performance Marketing',
      description: 'Data-driven campaigns that maximize ROI across all digital advertising platforms',
      slug: 'performance-marketing',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80',
    },
    {
      title: 'Video Editing',
      description: 'Professional post-production services that transform raw footage into compelling stories',
      slug: 'video-editing',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop&q=80',
    },
  ];

  useEffect(() => {
    gsap.fromTo('.service-header',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top 75%',
        }
      }
    );

    gsap.fromTo('.service-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section className="services-section py-28 lg:py-40 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="service-header text-center mb-16 lg:mb-20">
          <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-4 font-medium">What We Do</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 tracking-tight mb-6">
            What We Do Best
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            We specialize in creating digital experiences that push boundaries and drive results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="service-card group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Content */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs text-gray-400 font-mono tracking-wide">0{index + 1}</span>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight group-hover:text-gray-700 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-gray-900/20"
          >
            Explore All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
