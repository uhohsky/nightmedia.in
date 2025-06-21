
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    gsap.fromTo('.service-grid-item',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.services-grid',
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
      description: 'Beautiful, responsive websites that convert visitors into customers',
      features: ['Responsive Design', 'User Experience', 'Brand Integration', 'Performance Optimization'],
      slug: 'web-design',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technology',
      features: ['React/Vue.js', 'Node.js Backend', 'API Integration', 'Database Design'],
      slug: 'web-development',
      gradient: 'from-green-500 to-blue-500'
    },
    {
      title: 'Influencer Marketing',
      description: 'Strategic partnerships that amplify your brand reach and engagement',
      features: ['Influencer Matching', 'Campaign Strategy', 'Content Creation', 'Analytics & ROI'],
      slug: 'influencer-marketing',
      gradient: 'from-pink-500 to-red-500'
    },
    {
      title: 'SEO',
      description: 'Boost your search rankings and organic traffic',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building'],
      slug: 'seo',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Social Media Marketing',
      description: 'Build and engage your community across all platforms',
      features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics'],
      slug: 'social-media-marketing',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Paid Ads',
      description: 'Maximize ROI with targeted Meta and Google advertising',
      features: ['Meta Ads', 'Google Ads', 'Campaign Optimization', 'A/B Testing'],
      slug: 'paid-ads',
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Branding & Identity',
      description: 'Create a memorable brand that stands out in the market',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy'],
      slug: 'branding-identity',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that drives engagement and conversions',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
      slug: 'ui-ux-design',
      gradient: 'from-teal-500 to-green-500'
    },
    {
      title: '3D Design & Animation',
      description: 'Stunning 3D visuals and animations that captivate audiences',
      features: ['3D Modeling', 'Animation', 'Rendering', 'Motion Graphics'],
      slug: '3d-design-animation',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Video Editing',
      description: 'Professional video production and post-production services',
      features: ['Color Grading', 'Motion Graphics', 'Sound Design', 'Visual Effects'],
      slug: 'video-editing',
      gradient: 'from-blue-500 to-teal-500'
    },
    {
      title: 'Graphic Design',
      description: 'Eye-catching graphics for all your marketing needs',
      features: ['Print Design', 'Digital Graphics', 'Packaging', 'Marketing Materials'],
      slug: 'graphic-design',
      gradient: 'from-green-500 to-yellow-500'
    },
    {
      title: 'CGI Ads',
      description: 'Photorealistic 3D advertisements that stop the scroll',
      features: ['Product Visualization', 'CGI Animation', 'Compositing', 'Retouching'],
      slug: 'cgi-ads',
      gradient: 'from-purple-500 to-blue-500'
    }
  ];

  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-mono font-bold mb-6 gradient-text">
            Our Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From concept to execution, we provide end-to-end digital solutions that drive results and exceed expectations
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className="service-grid-item glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 magnetic"
            >
              <div className={`w-full h-32 bg-gradient-to-br ${service.gradient} rounded-xl mb-4 opacity-80`}></div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{service.description}</p>
              <ul className="space-y-1">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-xs text-gray-500 flex items-center">
                    <span className="w-1 h-1 bg-white rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-block glass px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all magnetic"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
