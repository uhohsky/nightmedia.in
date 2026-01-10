
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'NIGHTMEDIA';

  useEffect(() => {
    gsap.fromTo('.hero-container', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );

    // Typewriter effect
    let currentIndex = 0;
    const typeWriter = () => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeWriter, 150);
      }
    };
    
    setTimeout(typeWriter, 1000);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('.projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Large decorative circle - inspired by Hornbill */}
      <div className="absolute top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2">
        <div className="w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-red-400 to-pink-400 rounded-full opacity-80"></div>
      </div>

      <div className="hero-container relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-black leading-tight">
              Be brand
              <br />
              <span className="block">
                with <span className="text-blue-600">{text}</span>
                <span className="animate-pulse text-blue-600">|</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-8 fade-in-up">
              For the love of marketing, we enable your brand to reach the best potential outcomes that can be tracked
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all magnetic"
              >
                Connect Now
              </Link>
              <button 
                onClick={scrollToProjects}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all magnetic"
              >
                View Our Work
              </button>
            </div>
          </div>

          {/* Right Content - Portfolio Preview */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-lg p-6 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-3"></div>
                  <p className="text-sm font-medium text-gray-700">Web Design</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-6 aspect-square flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg mx-auto mb-3"></div>
                  <p className="text-sm font-medium">CGI Ads</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-lg p-6 aspect-square flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg mx-auto mb-3"></div>
                  <p className="text-sm font-medium">Influencer Marketing</p>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg p-6 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-600 rounded-lg mx-auto mb-3"></div>
                  <p className="text-sm font-medium text-gray-700">Video Editing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
