
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'NIGHTMEDIA';

  const services = [
    { title: 'Web Design', slug: 'web-design' },
    { title: 'CGI Ads', slug: 'cgi-ads' },
    { title: 'Influencer Marketing', slug: 'influencer-marketing' },
    { title: 'Video Editing', slug: 'video-editing' },
    { title: 'Performance Marketing', slug: 'performance-marketing' },
    { title: 'Digital Marketing', slug: 'digital-marketing' },
    { title: 'SEO Optimization', slug: 'seo-optimization' },
    { title: 'UI/UX Design', slug: 'ui-ux-design' },
  ];

  useEffect(() => {
    gsap.fromTo('.hero-headline', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
    );
    
    gsap.fromTo('.hero-subtitle', 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.6 }
    );
    
    gsap.fromTo('.hero-cta', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.9 }
    );

    gsap.fromTo('.hero-services', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 1.1 }
    );

    gsap.fromTo('.hero-image', 
      { opacity: 0, scale: 0.95 }, 
      { opacity: 1, scale: 1, duration: 1.4, ease: 'power3.out', delay: 0.5 }
    );

    let currentIndex = 0;
    const typeWriter = () => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeWriter, 100);
      }
    };
    
    setTimeout(typeWriter, 600);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('.projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative bg-white overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-left order-2 lg:order-1">
            <h1 className="hero-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 mb-6 leading-[1.08]">
              Be brand with
              <br />
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">{text}</span>
              <span className="inline-block w-[3px] h-[0.8em] bg-gray-900 ml-1 animate-pulse" />
            </h1>
            
            <p className="hero-subtitle text-lg md:text-xl text-gray-500 max-w-lg mb-10 font-normal leading-relaxed">
              For the love of marketing, we enable your brand to reach the best potential outcomes that can be tracked.
            </p>
            
            <div className="hero-cta flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-gray-900/20"
              >
                Connect Now
              </Link>
              <button 
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center text-gray-700 px-8 py-4 rounded-full text-base font-medium hover:bg-gray-100 transition-all duration-300"
              >
                View Our Work
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div className="hero-services">
              <p className="text-xs text-gray-400 uppercase tracking-[0.2em] mb-4 font-medium">Our Services</p>
              <div className="flex flex-wrap gap-2">
                {services.slice(0, 4).map((service) => (
                  <Link
                    key={service.slug}
                    to={`/services/${service.slug}`}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm font-medium rounded-full transition-all duration-300"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Premium Image */}
          <div className="hero-image relative order-1 lg:order-2">
            <div className="relative aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/10">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=1000&fit=crop&q=80"
                alt="Creative digital art"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating accent */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-2.5 bg-gray-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
