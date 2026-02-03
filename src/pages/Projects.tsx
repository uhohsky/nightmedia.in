import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

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
        '.hero-badge',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.hero-title',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-background min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-orb gradient-orb-1 absolute top-[10%] left-[10%] w-[600px] h-[600px]" />
        <div className="gradient-orb gradient-orb-2 absolute bottom-[20%] right-[5%] w-[500px] h-[500px]" />
      </div>
      
      <div className="noise-overlay" />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="hero-badge inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-medium">Selected Work</span>
          </div>
          
          <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-6">
            Our{' '}
            <span className="gradient-text-primary">Work</span>
          </h1>
          
          <p className="hero-subtitle text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Selected projects where design, technology, and performance intersect
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative z-10 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="projects-grid grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project) => {
              const CardContent = (
                <div className="project-card group cursor-pointer glass-card glow-border rounded-2xl overflow-hidden">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-6 space-y-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium tracking-wide">
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

      {/* CTA Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center glass-card glow-border rounded-3xl p-12 md:p-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Have a project in mind?
          </h2>
          <p className="text-muted-foreground mb-10 text-lg max-w-xl mx-auto">
            Let&apos;s create something exceptional together. We&apos;d love to hear about your vision.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 btn-primary-glow px-8 py-4 rounded-full text-primary-foreground font-semibold group"
          >
            Get in Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
