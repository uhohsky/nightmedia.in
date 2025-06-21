
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServiceDetail = () => {
  const { slug } = useParams();

  useEffect(() => {
    gsap.fromTo('.service-hero',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    gsap.fromTo('.service-section',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.service-content',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  // Service data mapping
  const serviceData = {
    'influencer-marketing': {
      title: 'Influencer Marketing',
      subtitle: 'Strategic Partnerships That Drive Results',
      description: 'Connect with your audience through authentic influencer partnerships that build trust and drive conversions.',
      gradient: 'from-pink-500 to-red-500',
      problem: 'Traditional advertising is losing effectiveness as consumers increasingly trust peer recommendations over brand messages.',
      solution: 'We leverage the power of authentic influencer partnerships to create genuine connections between your brand and your target audience.',
      features: [
        'Influencer Discovery & Vetting',
        'Campaign Strategy Development',
        'Content Creation & Approval',
        'Performance Tracking & Analytics',
        'ROI Optimization',
        'Long-term Partnership Management'
      ],
      process: [
        'Discovery & Strategy',
        'Influencer Matching',
        'Campaign Development',
        'Content Creation',
        'Launch & Monitoring',
        'Analysis & Optimization'
      ],
      project: {
        title: 'Fashion Brand Campaign',
        description: 'Increased brand awareness by 300% through strategic micro-influencer partnerships',
        metrics: ['500K+ Reach', '15% Engagement Rate', '200% ROI']
      }
    },
    'web-design': {
      title: 'Web Design',
      subtitle: 'Beautiful Websites That Convert',
      description: 'Create stunning, user-friendly websites that captivate visitors and drive business growth.',
      gradient: 'from-blue-500 to-purple-600',
      problem: 'Many websites fail to engage visitors and convert them into customers due to poor design and user experience.',
      solution: 'We create visually stunning, user-centered websites that not only look amazing but also drive measurable business results.',
      features: [
        'Responsive Design',
        'User Experience Optimization',
        'Brand Integration',
        'Performance Optimization',
        'SEO Foundation',
        'Conversion Rate Optimization'
      ],
      process: [
        'Discovery & Research',
        'Strategy & Planning',
        'Design & Prototyping',
        'Development',
        'Testing & Launch',
        'Ongoing Optimization'
      ],
      project: {
        title: 'E-commerce Platform',
        description: 'Redesigned online store resulting in 150% increase in conversions',
        metrics: ['95 Page Speed', '150% Conversion Increase', '40% Bounce Rate Reduction']
      }
    },
    'cgi-ads': {
      title: 'CGI Ads',
      subtitle: 'Photorealistic 3D Advertising',
      description: 'Create stunning CGI advertisements that capture attention and drive engagement across all platforms.',
      gradient: 'from-green-500 to-teal-500',
      problem: 'Traditional product photography is expensive, time-consuming, and limits creative possibilities.',
      solution: 'Our CGI technology creates photorealistic product visuals that are cost-effective, infinitely customizable, and visually stunning.',
      features: [
        'Photorealistic 3D Modeling',
        'Product Visualization',
        'Dynamic Animations',
        'Virtual Photography',
        'Multi-platform Optimization',
        'Unlimited Variations'
      ],
      process: [
        '3D Modeling',
        'Texturing & Materials',
        'Lighting Setup',
        'Rendering',
        'Post-production',
        'Final Delivery'
      ],
      project: {
        title: 'Luxury Watch Campaign',
        description: 'CGI product visualization that achieved 500% higher engagement than traditional photography',
        metrics: ['500% Higher Engagement', '2M+ Views', '25% CTR']
      }
    },
    'video-editing': {
      title: 'Video Editing',
      subtitle: 'Cinematic Storytelling',
      description: 'Professional video editing and post-production that brings your stories to life with cinematic quality.',
      gradient: 'from-yellow-500 to-orange-500',
      problem: 'Raw footage lacks the polish and storytelling structure needed to engage modern audiences.',
      solution: 'Our expert video editors transform raw content into compelling narratives using advanced techniques and cinematic principles.',
      features: [
        'Professional Color Grading',
        'Motion Graphics',
        'Sound Design & Mixing',
        'Visual Effects',
        'Multi-platform Optimization',
        'Fast Turnaround'
      ],
      process: [
        'Footage Review',
        'Story Structure',
        'Rough Cut',
        'Fine Editing',
        'Color & Sound',
        'Final Delivery'
      ],
      project: {
        title: 'Brand Documentary',
        description: 'Award-winning corporate documentary that increased brand trust by 200%',
        metrics: ['1M+ Views', '90% Completion Rate', '200% Brand Trust Increase']
      }
    }
  };

  const service = serviceData[slug as keyof typeof serviceData];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="service-hero px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full mx-auto mb-8 opacity-80`}></div>
          <h1 className="text-4xl md:text-6xl font-mono font-bold mb-6 gradient-text">
            {service.title}
          </h1>
          <p className="text-2xl text-gray-300 mb-8">{service.subtitle}</p>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {service.description}
          </p>
        </div>
      </section>

      <div className="service-content">
        {/* Problem/Solution Section */}
        <section className="service-section px-6 py-16 bg-gray-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="glass rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-red-400">The Problem</h2>
                <p className="text-gray-400 text-lg">{service.problem}</p>
              </div>
              <div className="glass rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-green-400">Our Solution</h2>
                <p className="text-gray-400 text-lg">{service.solution}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="service-section px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-mono font-bold text-center mb-12 gradient-text">
              What's Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature, index) => (
                <div key={index} className="glass rounded-xl p-6 magnetic">
                  <div className="w-2 h-2 bg-white rounded-full mb-4"></div>
                  <h3 className="font-semibold">{feature}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="service-section px-6 py-16 bg-gray-900/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-mono font-bold text-center mb-12 gradient-text">
              Our Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.process.map((step, index) => (
                <div key={index} className="glass rounded-xl p-6 text-center magnetic">
                  <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Project */}
        <section className="service-section px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-mono font-bold text-center mb-12 gradient-text">
              Featured Work
            </h2>
            <div className="glass rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">{service.project.title}</h3>
              <p className="text-gray-400 mb-8">{service.project.description}</p>
              <div className="flex justify-center space-x-8">
                {service.project.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl font-bold">{metric}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="service-section px-6 py-16 bg-gray-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-mono font-bold mb-6 gradient-text">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's discuss how we can help you achieve your goals with {service.title.toLowerCase()}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="glass px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all magnetic"
              >
                Start Your Project
              </Link>
              <Link
                to="/services"
                className="border border-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all magnetic"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetail;
