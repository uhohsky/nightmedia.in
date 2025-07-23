
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-400 opacity-3 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="hero-container relative z-10 text-center px-6">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-mono font-bold mb-4">
            <span className="gradient-text">{text}</span>
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 fade-in-up">
            Cinematic digital experiences that blur the line between reality and imagination
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up">
          <button 
            onClick={scrollToProjects}
            className="glass px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all magnetic"
          >
            Explore Our Work
          </button>
          <Link
            to="/contact"
            className="border border-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all magnetic"
          >
            Start Your Project
          </Link>
        </div>

        <div className="mt-16 fade-in-up">
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-400">
            <span>Web Design</span>
            <span>•</span>
            <span>Influencer Marketing</span>
            <span>•</span>
            <span>CGI Ads</span>
            <span>•</span>
            <span>Video Editing</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
