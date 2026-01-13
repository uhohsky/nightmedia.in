
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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

  return (
    <section className="services-section py-20 px-6 bg-white">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="group p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-sm text-gray-400 font-mono">0{index + 1}</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="text-2xl font-semibold text-black mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
