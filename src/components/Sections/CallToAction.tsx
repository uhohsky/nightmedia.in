
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
  useEffect(() => {
    gsap.fromTo('.cta-content',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 80%',
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
    <section className="cta-section py-32 lg:py-40 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Content */}
        <div className="cta-content mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 tracking-tight mb-6 leading-tight">
            Let's Build Something
            <br />
            <span className="text-gray-400">Iconic</span>
          </h2>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Ready to push the boundaries of digital creativity? Let's create something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02]"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/projects"
              className="text-gray-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="cta-stats grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-gray-100">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-semibold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
