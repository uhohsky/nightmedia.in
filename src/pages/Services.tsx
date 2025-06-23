
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Code, 
  TrendingUp, 
  Users, 
  MousePointer, 
  Palette, 
  Smartphone, 
  Box, 
  Play, 
  Image,
  Camera,
  Mail
} from 'lucide-react';

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

    // Animated backgrounds
    gsap.to('.floating-orb', {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
      stagger: 0.3
    });

    gsap.to('.rotating-element', {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: 'none'
    });

    // Neon glow animation
    gsap.to('.neon-glow', {
      opacity: 0.3,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut'
    });
  }, []);

  const services = [
    {
      title: 'Web Design',
      description: 'Beautiful, responsive websites that convert visitors into customers',
      features: ['Responsive Design', 'User Experience', 'Brand Integration', 'Performance Optimization'],
      slug: 'web-design',
      icon: Monitor,
      accentColor: 'from-cyan-400 to-blue-500',
      glowColor: 'shadow-cyan-500/20'
    },
    {
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technology',
      features: ['React/Vue.js', 'Node.js Backend', 'API Integration', 'Database Design'],
      slug: 'web-development',
      icon: Code,
      accentColor: 'from-emerald-400 to-teal-500',
      glowColor: 'shadow-emerald-500/20'
    },
    {
      title: 'Influencer Marketing',
      description: 'Strategic partnerships that amplify your brand reach and engagement',
      features: ['Influencer Matching', 'Campaign Strategy', 'Content Creation', 'Analytics & ROI'],
      slug: 'influencer-marketing',
      icon: Users,
      accentColor: 'from-pink-400 to-rose-500',
      glowColor: 'shadow-pink-500/20'
    },
    {
      title: 'SEO',
      description: 'Boost your search rankings and organic traffic',
      features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building'],
      slug: 'seo',
      icon: TrendingUp,
      accentColor: 'from-yellow-400 to-orange-500',
      glowColor: 'shadow-yellow-500/20'
    },
    {
      title: 'Social Media Marketing',
      description: 'Build and engage your community across all platforms',
      features: ['Content Strategy', 'Community Management', 'Paid Advertising', 'Analytics'],
      slug: 'social-media-marketing',
      icon: Users,
      accentColor: 'from-purple-400 to-indigo-500',
      glowColor: 'shadow-purple-500/20'
    },
    {
      title: 'Paid Ads',
      description: 'Maximize ROI with targeted Meta and Google advertising',
      features: ['Meta Ads', 'Google Ads', 'Campaign Optimization', 'A/B Testing'],
      slug: 'paid-ads',
      icon: MousePointer,
      accentColor: 'from-blue-400 to-indigo-500',
      glowColor: 'shadow-blue-500/20'
    },
    {
      title: 'Branding & Identity',
      description: 'Create a memorable brand that stands out in the market',
      features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy'],
      slug: 'branding-identity',
      icon: Palette,
      accentColor: 'from-red-400 to-pink-500',
      glowColor: 'shadow-red-500/20'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that drives engagement and conversions',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing'],
      slug: 'ui-ux-design',
      icon: Smartphone,
      accentColor: 'from-teal-400 to-cyan-500',
      glowColor: 'shadow-teal-500/20'
    },
    {
      title: '3D Design & Animation',
      description: 'Stunning 3D visuals and animations that captivate audiences',
      features: ['3D Modeling', 'Animation', 'Rendering', 'Motion Graphics'],
      slug: '3d-design-animation',
      icon: Box,
      accentColor: 'from-orange-400 to-red-500',
      glowColor: 'shadow-orange-500/20'
    },
    {
      title: 'Video Editing',
      description: 'Professional video production and post-production services',
      features: ['Color Grading', 'Motion Graphics', 'Sound Design', 'Visual Effects'],
      slug: 'video-editing',
      icon: Play,
      accentColor: 'from-blue-400 to-cyan-500',
      glowColor: 'shadow-blue-500/20'
    },
    {
      title: 'Graphic Design',
      description: 'Eye-catching graphics for all your marketing needs',
      features: ['Print Design', 'Digital Graphics', 'Packaging', 'Marketing Materials'],
      slug: 'graphic-design',
      icon: Image,
      accentColor: 'from-green-400 to-emerald-500',
      glowColor: 'shadow-green-500/20'
    },
    {
      title: 'CGI Ads',
      description: 'Photorealistic 3D advertisements that stop the scroll',
      features: ['Product Visualization', 'CGI Animation', 'Compositing', 'Retouching'],
      slug: 'cgi-ads',
      icon: Camera,
      accentColor: 'from-violet-400 to-purple-500',
      glowColor: 'shadow-violet-500/20'
    }
  ];

  return (
    <div className="pt-24 pb-20 px-6 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-orb absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-xl"></div>
        <div className="floating-orb absolute top-40 right-20 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-xl"></div>
        <div className="floating-orb absolute bottom-40 left-1/4 w-24 h-24 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-xl"></div>
        <div className="rotating-element absolute top-1/2 right-10 w-16 h-16 border border-cyan-500/20 rounded-lg transform rotate-45"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-mono font-bold mb-6 gradient-text">
            Our Services
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From concept to execution, we provide end-to-end digital solutions that drive results and exceed expectations
          </p>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className={`service-grid-item group relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-6 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl hover:${service.glowColor} transition-all duration-500 magnetic`}
              >
                {/* Neon accent border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.accentColor} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl`}></div>
                
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute top-4 right-4 w-8 h-8 border border-current rounded transform rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 border border-current rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon with neon glow */}
                  <div className="relative mb-6">
                    <div className={`neon-glow absolute inset-0 bg-gradient-to-r ${service.accentColor} blur-lg opacity-20 rounded-full`}></div>
                    <div className="relative w-16 h-16 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white group-hover:text-cyan-400 transition-colors duration-300" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-500 flex items-center group-hover:text-gray-400 transition-colors duration-300">
                        <div className={`w-1 h-1 bg-gradient-to-r ${service.accentColor} rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <div className="w-6 h-6 border-t-2 border-r-2 border-cyan-400 transform rotate-45"></div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-block relative overflow-hidden rounded-full px-8 py-4 text-lg font-medium bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white hover:text-black transition-all duration-500 magnetic group"
          >
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10">Start Your Project</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
