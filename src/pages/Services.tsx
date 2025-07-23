
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import PageHeader from '../components/Layout/PageHeader';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    gsap.fromTo('.service-portfolio-item',
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.services-portfolio',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Floating elements animation
    gsap.to('.floating-element', {
      y: -30,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
      stagger: 0.5
    });
  }, []);

  const services = [
    {
      title: 'Influencer Marketing',
      category: 'STRATEGY • SOCIAL • CONTENT',
      description: 'Strategic partnerships that amplify your brand reach',
      slug: 'influencer-marketing',
      visual: 'collaboration',
      color: 'from-pink-500 to-red-500',
      featured: true
    },
    {
      title: 'Web Design',
      category: 'DESIGN • DEVELOPMENT • UX',
      description: 'Crafting digital experiences that captivate and convert',
      slug: 'web-design',
      visual: 'laptop-mockup',
      color: 'from-blue-600 to-purple-600'
    },
    {
      title: 'CGI Advertising',
      category: 'CONCEPT • 3D • ANIMATION',
      description: 'Photorealistic 3D advertisements that stop the scroll',
      slug: 'cgi-ads',
      visual: 'abstract-3d',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Video Production',
      category: 'PRODUCTION • EDITING • MOTION',
      description: 'Cinematic storytelling through expert post-production',
      slug: 'video-editing',
      visual: 'video-setup',
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Brand Identity',
      category: 'BRAND • DESIGN • STRATEGY',
      description: 'Creating memorable brands that resonate with audiences',
      slug: 'branding-identity',
      visual: 'brand-elements',
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Digital Marketing',
      category: 'MARKETING • ANALYTICS • GROWTH',
      description: 'Data-driven strategies that deliver measurable results',
      slug: 'paid-ads',
      visual: 'analytics-dashboard',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'UI/UX Design',
      category: 'DESIGN • RESEARCH • PROTOTYPING',
      description: 'User-centered design that drives engagement',
      slug: 'ui-ux-design',
      visual: 'interface-design',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'SEO Optimization',
      category: 'SEO • CONTENT • ANALYTICS',
      description: 'Boosting visibility and organic growth',
      slug: 'seo',
      visual: 'growth-chart',
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const getVisualElement = (visual: string, color: string) => {
    switch (visual) {
      case 'laptop-mockup':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative transform rotate-12 scale-90">
              <div className="w-64 h-40 bg-gray-900 rounded-lg shadow-2xl border border-gray-700">
                <div className="w-full h-6 bg-gray-800 rounded-t-lg flex items-center px-3 space-x-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="p-4 h-32">
                  <div className={`w-full h-full bg-gradient-to-br ${color} rounded opacity-80`}></div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'collaboration':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={`w-12 h-12 bg-gradient-to-br ${color} rounded-full opacity-70 floating-element`} style={{animationDelay: `${i * 0.2}s`}}></div>
              ))}
            </div>
          </div>
        );
      case 'abstract-3d':
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="relative">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i} 
                  className={`absolute w-3 h-3 bg-gradient-to-br ${color} transform rotate-45 floating-element`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.1}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        );
      case 'video-setup':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative">
              <div className="w-32 h-20 bg-gray-900 rounded-lg border border-gray-700 shadow-xl">
                <div className={`w-full h-full bg-gradient-to-br ${color} rounded-lg opacity-60`}></div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        );
      case 'brand-elements':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="grid grid-cols-2 gap-6">
              <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-lg`}></div>
              <div className="w-16 h-4 bg-gray-300 rounded"></div>
              <div className="w-16 h-4 bg-gray-300 rounded"></div>
              <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-full`}></div>
            </div>
          </div>
        );
      case 'analytics-dashboard':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="space-y-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className={`w-${8 + i * 4} h-2 bg-gradient-to-r ${color} rounded`}></div>
                  <div className="w-8 h-2 bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'interface-design':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="w-40 h-32 bg-white rounded-lg shadow-xl border border-gray-200 p-4">
              <div className="space-y-2">
                <div className={`w-full h-4 bg-gradient-to-r ${color} rounded opacity-60`}></div>
                <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
                <div className="w-1/2 h-2 bg-gray-200 rounded"></div>
                <div className={`w-16 h-6 bg-gradient-to-r ${color} rounded mt-4`}></div>
              </div>
            </div>
          </div>
        );
      case 'growth-chart':
        return (
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="flex items-end space-x-1">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-4 bg-gradient-to-t ${color} rounded-t`}
                  style={{ height: `${(i + 1) * 8}px` }}
                ></div>
              ))}
            </div>
          </div>
        );
      default:
        return <div className={`w-full h-full bg-gradient-to-br ${color} rounded-lg opacity-60`}></div>;
    }
  };

  return (
    <div className="pt-24 pb-20 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <PageHeader
          badge="SERVICES"
          title="Connecting Ideas to Uniquely Crafted Solutions"
        />

        {/* Services Portfolio Grid */}
        <div className="services-portfolio">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className={`service-portfolio-item group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-700 ${
                  service.featured ? 'lg:col-span-2' : ''
                }`}
              >
                {/* Visual Area */}
                <div className={`relative overflow-hidden ${service.featured ? 'h-80' : 'h-64'} bg-gray-100`}>
                  {getVisualElement(service.visual, service.color)}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-gray-500 tracking-wider">
                      {service.category}
                    </span>
                    <div className="w-8 h-8 flex items-center justify-center">
                      <div className="w-4 h-4 border-t-2 border-r-2 border-black transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-light text-black mb-3 group-hover:text-gray-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <Link
            to="/contact"
            className="inline-flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition-colors duration-300 group"
          >
            <span>Start Your Project</span>
            <div className="w-2 h-2 bg-white rounded-full group-hover:translate-x-1 transition-transform duration-300"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
