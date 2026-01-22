
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
    // Smooth fade-in animations
    gsap.fromTo('.hero-headline', 
      { opacity: 0, y: 40 }, 
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.2 }
    );
    
    gsap.fromTo('.hero-subtitle', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.5 }
    );
    
    gsap.fromTo('.hero-cta', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.8 }
    );

    gsap.fromTo('.hero-services', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 1 }
    );

    // Typewriter effect
    let currentIndex = 0;
    const typeWriter = () => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeWriter, 120);
      }
    };
    
    setTimeout(typeWriter, 800);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('.projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative bg-white overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-white" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 text-center">
        {/* Main Headline */}
        <h1 className="hero-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-gray-900 mb-6 leading-[1.1]">
          Be brand with
          <br />
          <span className="text-gray-900">{text}</span>
          <span className="inline-block w-[3px] h-[0.85em] bg-gray-900 ml-1 animate-pulse" />
        </h1>
        
        {/* Subtitle */}
        <p className="hero-subtitle text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
          For the love of marketing, we enable your brand to reach the best potential outcomes that can be tracked.
        </p>
        
        {/* CTA Buttons */}
        <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <Link
            to="/contact"
            className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02]"
          >
            Connect Now
          </Link>
          <button 
            onClick={scrollToProjects}
            className="text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300"
          >
            View Our Work →
          </button>
        </div>

        {/* Services Tags */}
        <div className="hero-services">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-6">Our Services</p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="px-5 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm font-medium rounded-full transition-all duration-300 hover:scale-[1.02] border border-gray-100"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-2.5 bg-gray-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
