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

  // Enhanced service data mapping with Lusion-inspired structure
  const serviceData = {
    'influencer-marketing': {
      title: 'INFLUENCER',
      subtitle: 'MARKETING',
      description: 'Strategic partnerships that amplify your brand through authentic connections and measurable impact.',
      gradient: 'from-pink-500 to-red-500',
      hero: {
        video: 'https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1920&h=1080&fit=crop'
      },
      sections: [
        {
          type: 'narrative',
          title: 'THE POWER OF AUTHENTIC INFLUENCE',
          content: 'In a world oversaturated with advertisements, consumers crave authenticity. Influencer marketing bridges the gap between brands and audiences through trusted voices that speak directly to your target market.',
          visual: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop'
        },
        {
          type: 'stats',
          title: 'PROVEN IMPACT',
          stats: [
            { number: '11X', label: 'Higher ROI than traditional advertising' },
            { number: '89%', label: 'Of marketers say ROI is comparable or better than other channels' },
            { number: '49%', label: 'Of consumers depend on influencer recommendations' }
          ]
        },
        {
          type: 'process',
          title: 'OUR APPROACH',
          steps: [
            {
              number: '01',
              title: 'DISCOVERY',
              description: 'Deep dive into your brand, audience, and objectives to craft the perfect influencer strategy.'
            },
            {
              number: '02',
              title: 'MATCHING',
              description: 'Identify and vet influencers who align with your brand values and speak to your target audience.'
            },
            {
              number: '03',
              title: 'CREATION',
              description: 'Collaborate on authentic content that resonates with audiences while meeting brand guidelines.'
            },
            {
              number: '04',
              title: 'OPTIMIZATION',
              description: 'Monitor performance and optimize campaigns in real-time for maximum impact and ROI.'
            }
          ]
        },
        {
          type: 'showcase',
          title: 'FEATURED WORK',
          projects: [
            {
              title: 'Fashion Forward',
              description: 'Luxury fashion brand campaign across 50+ micro-influencers',
              image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&h=400&fit=crop',
              metrics: { reach: '2.5M', engagement: '12.5%', conversions: '8.3%' }
            },
            {
              title: 'Tech Launch',
              description: 'Product launch campaign with tech reviewers and lifestyle creators',
              image: 'https://images.unsplash.com/photo-1556742400-b3aea7c8b20d?w=600&h=400&fit=crop',
              metrics: { reach: '1.8M', engagement: '15.2%', conversions: '11.7%' }
            }
          ]
        }
      ]
    },
    'web-design': {
      title: 'WEB',
      subtitle: 'DESIGN',
      description: 'Beautiful websites that convert visitors into customers through exceptional user experience.',
      gradient: 'from-blue-500 to-purple-600',
      hero: {
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1920&h=1080&fit=crop'
      },
      sections: [
        {
          type: 'narrative',
          title: 'DESIGN THAT CONVERTS',
          content: 'Every pixel serves a purpose. Our web designs combine aesthetic beauty with conversion-focused functionality.',
          visual: 'https://images.unsplash.com/photo-1545670723-196ed0954986?w=800&h=600&fit=crop'
        }
      ]
    },
    'cgi-ads': {
      title: 'CGI',
      subtitle: 'ADVERTISING',
      description: 'Photorealistic 3D advertisements that capture attention and drive engagement.',
      gradient: 'from-green-500 to-teal-500',
      hero: {
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&h=1080&fit=crop'
      },
      sections: [
        {
          type: 'narrative',
          title: 'BEYOND REALITY',
          content: 'CGI technology allows us to create impossible visuals that capture imagination and drive results.',
          visual: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=600&fit=crop'
        }
      ]
    },
    'video-editing': {
      title: 'VIDEO',
      subtitle: 'EDITING',
      description: 'Cinematic storytelling through professional video editing and post-production.',
      gradient: 'from-yellow-500 to-orange-500',
      hero: {
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1920&h=1080&fit=crop'
      },
      sections: [
        {
          type: 'narrative',
          title: 'STORIES THAT MOVE',
          content: 'Transform raw footage into compelling narratives that engage audiences and drive action.',
          visual: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop'
        }
      ]
    }
  };

  const service = serviceData[slug as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="pt-24 pb-20 text-center">
        <h1 className="text-4xl font-mono font-bold mb-4">Service Not Found</h1>
        <Link to="/services" className="text-blue-400 hover:underline">
          Back to Services
        </Link>
      </div>
    );
  }

  // Special handling for Influencer Marketing page
  if (slug === 'influencer-marketing') {
    return (
      <div className="pt-16 bg-black text-white">
        {/* Hero Section - Fullscreen */}
        <section className="service-hero min-h-screen relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={service.hero.image}
              alt="Influencer Marketing"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          <div className="relative z-10 text-center px-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-mono font-bold mb-6">
              <div className="gradient-text">{service.title}</div>
              <div className="gradient-text">{service.subtitle}</div>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {service.description}
            </p>
          </div>
        </section>

        {/* Scroll-triggered sections */}
        <div className="service-content">
          {service.sections.map((section, index) => (
            <section key={index} className="service-section">
              {section.type === 'narrative' && (
                <div className="min-h-screen flex items-center py-20 px-6">
                  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                      <h2 className="text-4xl md:text-6xl font-mono font-bold">
                        {section.title}
                      </h2>
                      <p className="text-xl text-gray-400 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                    <div className="relative">
                      <img
                        src={section.visual}
                        alt={section.title}
                        className="w-full h-96 object-cover rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              )}

              {section.type === 'stats' && (
                <div className="py-20 px-6 bg-gray-900/20">
                  <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-mono font-bold mb-16">
                      {section.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                      {section.stats?.map((stat, i) => (
                        <div key={i} className="glass rounded-2xl p-8">
                          <div className="text-5xl font-bold mb-4">{stat.number}</div>
                          <div className="text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {section.type === 'process' && (
                <div className="py-20 px-6">
                  <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-mono font-bold text-center mb-16">
                      {section.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {section.steps?.map((step, i) => (
                        <div key={i} className="glass rounded-2xl p-8 magnetic">
                          <div className="text-6xl font-mono font-bold text-gray-600 mb-4">
                            {step.number}
                          </div>
                          <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                          <p className="text-gray-400">{step.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {section.type === 'showcase' && (
                <div className="py-20 px-6 bg-gray-900/20">
                  <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-mono font-bold text-center mb-16">
                      {section.title}
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      {section.projects?.map((project, i) => (
                        <div key={i} className="glass rounded-2xl overflow-hidden magnetic">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover"
                          />
                          <div className="p-8">
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-6">{project.description}</p>
                            <div className="grid grid-cols-3 gap-4 text-center">
                              {Object.entries(project.metrics).map(([key, value]) => (
                                <div key={key}>
                                  <div className="text-xl font-bold">{value}</div>
                                  <div className="text-sm text-gray-500 capitalize">{key}</div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <section className="service-section py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-mono font-bold mb-8">
              READY TO AMPLIFY YOUR BRAND?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Let's create an influencer marketing strategy that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="glass px-12 py-6 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all magnetic"
              >
                Start Your Campaign
              </Link>
              <Link
                to="/services"
                className="border border-white px-12 py-6 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all magnetic"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Standard service page layout for other services
  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="service-hero px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`w-32 h-32 bg-gradient-to-br ${service.gradient} rounded-full mx-auto mb-8 opacity-80`}></div>
          <h1 className="text-4xl md:text-6xl font-mono font-bold mb-6 gradient-text">
            {service.title} {service.subtitle}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content sections */}
      <div className="service-content">
        {service.sections.map((section, index) => (
          <section key={index} className="service-section px-6 py-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-mono font-bold text-center mb-12 gradient-text">
                {section.title}
              </h2>
              {section.content && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-lg text-gray-400">{section.content}</p>
                  </div>
                  {section.visual && (
                    <div>
                      <img
                        src={section.visual}
                        alt={section.title}
                        className="w-full h-64 object-cover rounded-xl"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="service-section px-6 py-16 bg-gray-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-mono font-bold mb-6 gradient-text">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's discuss how we can help you achieve your goals.
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
