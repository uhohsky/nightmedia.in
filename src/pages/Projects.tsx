import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 'synfiction-ai',
    title: 'SYNFICTION.AI',
    category: 'AI Product, Web Design, Development',
    image: '/images/projects/sfai.jpg',
    slug: 'synfiction-ai',
    externalLink: 'https://synfiction.ai',
  },
  {
    id: 'aidrum-fashion',
    title: 'Aidrum Fashion',
    category: 'eCommerce, Web Design, Branding',
    image: '/images/projects/ecommerce-fashion.jpg',
    slug: 'aidrum-fashion',
  },
  {
    id: 'saas-analytics',
    title: 'SaaS Analytics Platform',
    category: 'Product Design, UI/UX, Development',
    image: '/images/projects/saas-dashboard.jpg',
    slug: 'saas-analytics',
  },
  {
    id: 'blamy-kuby',
    title: 'Blamy Kuby Cosmetics',
    category: 'Brand Identity, Packaging, Strategy',
    image: '/images/projects/brand-identity.jpg',
    slug: 'blamy-kuby',
  },
  {
    id: 'realestate-platform',
    title: 'Luxury Real Estate',
    category: 'Web Design, Development, SEO',
    image: '/images/projects/real-estate.jpg',
    slug: 'luxury-realestate',
  },
  {
    id: 'fitness-wellness',
    title: 'Fitness & Wellness App',
    category: 'Mobile App, UI/UX, Product',
    image: '/images/projects/fitness-app.jpg',
    slug: 'fitness-wellness',
  },
];

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 85%',
          },
        }
      );

      gsap.fromTo(
        '.hero-title',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        }
      );

      gsap.fromTo(
        '.hero-subtitle',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-white text-black min-h-screen">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="hero-title text-5xl md:text-6xl lg:text-7xl font-light text-black tracking-tight mb-8">
            Our Work
          </h1>
          <p className="hero-subtitle text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Selected projects where design, technology, and performance intersect
          </p>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project) => {
              const CardContent = (
                <div className="project-card group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>
                  <div className="mt-6 space-y-2">
                    <h3 className="text-xl md:text-2xl font-medium text-black group-hover:text-gray-700 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-light tracking-wide">
                      {project.category}
                    </p>
                  </div>
                </div>
              );

              if (project.externalLink) {
                return (
                  <a
                    key={project.id}
                    href={project.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {CardContent}
                  </a>
                );
              }

              return (
                <Link key={project.id} to={`/projects/${project.slug}`}>
                  {CardContent}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
            Have a project in mind?
          </h2>
          <p className="text-gray-600 mb-10 text-lg font-light max-w-xl mx-auto">
            Let's create something exceptional together. We'd love to hear about your vision.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
