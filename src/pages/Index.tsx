
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Page load animation
    const tl = gsap.timeline();
    
    tl.set('body', { overflow: 'hidden' })
      .fromTo('.page-container', 
        { opacity: 0, scale: 1.05 }, 
        { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
      )
      .set('body', { overflow: 'auto' });

    // Project cards animation
    gsap.fromTo('.project-card',
      { 
        opacity: 0, 
        y: 100,
        scale: 0.9
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        stagger: {
          amount: 0.6,
          from: "start"
        },
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Parallax effects
    gsap.to('.project-card', {
      y: (i, target) => -30 * (i + 1),
      ease: "none",
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const projects = [
    {
      title: 'Synthetic Human',
      categories: 'WEB • DESIGN • DEVELOPMENT • 3D',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop',
      color: 'from-blue-400 to-purple-500',
      slug: 'synthetic-human'
    },
    {
      title: 'Meta: Spatial Fusion',
      categories: 'WEB • DESIGN • DEVELOPMENT • 3D',
      image: 'https://images.unsplash.com/photo-1617802690992-15d93263d3a9?w=800&h=600&fit=crop',
      color: 'from-purple-500 to-pink-500',
      slug: 'meta-spatial-fusion'
    },
    {
      title: 'Space',
      categories: 'WEB • DESIGN • DEVELOPMENT • 3D',
      image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&h=600&fit=crop',
      color: 'from-orange-400 to-red-500',
      slug: 'space'
    },
    {
      title: 'Digital Design Days',
      categories: 'WEB • DESIGN • DEVELOPMENT • 3D',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop',
      color: 'from-cyan-400 to-blue-500',
      slug: 'digital-design-days'
    }
  ];

  return (
    <div className="page-container min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-8xl md:text-9xl font-light text-black mb-8 tracking-tight leading-none">
              NIGHTMEDIA
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Digital experiences that push creative boundaries
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="project-card group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-700"
              >
                {/* Image */}
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  
                  {/* Overlay content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                    <div className="flex justify-between items-start">
                      <span className="text-sm font-medium tracking-wider opacity-90">
                        {project.categories}
                      </span>
                      <div className="w-8 h-8 flex items-center justify-center">
                        <div className="w-4 h-4 border-t-2 border-r-2 border-white transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></div>
                      </div>
                    </div>
                    
                    <div>
                      <h2 className="text-4xl md:text-5xl font-light leading-tight">
                        {project.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-light text-black mb-8">
            Ready to create something extraordinary?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center space-x-4 bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition-colors duration-300 group"
          >
            <span>Let's talk</span>
            <div className="w-2 h-2 bg-white rounded-full group-hover:translate-x-1 transition-transform duration-300"></div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
