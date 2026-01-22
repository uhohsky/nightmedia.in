
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
  useEffect(() => {
    gsap.fromTo('.cta-content',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 75%',
        }
      }
    );

    gsap.fromTo('.cta-image',
      { opacity: 0, scale: 0.95 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 70%',
        }
      }
    );

    gsap.fromTo('.cta-stats',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cta-stats',
          start: 'top 85%',
        }
      }
    );
  }, []);

  const stats = [
    { value: '100+', label: 'Projects Delivered' },
    { value: '50+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <section className="cta-section py-28 lg:py-40 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Featured Image */}
        <div className="cta-image relative mb-16 lg:mb-24">
          <div className="aspect-[21/9] rounded-2xl lg:rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=700&fit=crop&q=80"
              alt="Modern creative workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>
        </div>

        {/* Main Content */}
        <div className="cta-content text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-gray-900 tracking-tight mb-6 leading-[1.1]">
            Let's Build Something
            <br />
            <span className="text-gray-400">Iconic</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Ready to push the boundaries of digital creativity? Let's create something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-gray-900/20"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/projects"
              className="text-gray-700 px-8 py-4 rounded-full text-base font-medium hover:bg-white transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="cta-stats grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
