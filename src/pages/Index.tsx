
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Sections/Hero';
import ServicesPreview from '../components/Sections/ServicesPreview';
import FeaturedProjects from '../components/Sections/FeaturedProjects';
import CallToAction from '../components/Sections/CallToAction';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Cinematic page load animation
    const tl = gsap.timeline();
    
    tl.set('body', { overflow: 'hidden' })
      .fromTo('.page-container', 
        { opacity: 0, scale: 1.1 }, 
        { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }
      )
      .set('body', { overflow: 'auto' });

    // Scroll-triggered section animations
    gsap.fromTo('.services-section', 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Parallax effect for background elements
    gsap.to('.parallax-bg', {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: '.services-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="page-container pt-16 relative overflow-hidden">
      {/* Background parallax elements */}
      <div className="parallax-bg fixed inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gray-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <Hero />
      <div className="services-section">
        <ServicesPreview />
      </div>
      <FeaturedProjects />
      <CallToAction />
    </div>
  );
};

export default Index;
