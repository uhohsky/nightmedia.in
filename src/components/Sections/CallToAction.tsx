
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const CallToAction = () => {
  useEffect(() => {
    gsap.fromTo('.cta-content',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <section className="cta-section py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="cta-content glass rounded-3xl p-12 lg:p-16">
          <h2 className="text-4xl md:text-6xl font-mono font-bold mb-6 gradient-text">
            Let's Build Something Iconic
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Ready to push the boundaries of digital creativity? Let's create something extraordinary together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="glass px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all magnetic"
            >
              Start Your Project
            </Link>
            <Link
              to="/projects"
              className="border border-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all magnetic"
            >
              View Our Work
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold">100+</div>
              <div className="text-sm text-gray-400">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
