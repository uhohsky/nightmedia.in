
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowUpRight, TrendingUp, Clock, Users, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo('.projects-header',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-section',
            start: 'top 75%',
          }
        }
      );

      // Project cards animation with scale and fade
      gsap.fromTo('.project-card',
        { opacity: 0, y: 100, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%',
          }
        }
      );

      // Parallax for images on scroll
      gsap.utils.toArray('.project-image').forEach((image: any) => {
        gsap.to(image, {
          y: -30,
          scrollTrigger: {
            trigger: image,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.5,
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform Redesign',
      category: 'Web Design',
      slug: 'ecommerce-platform',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      metrics: [
        { icon: TrendingUp, label: 'Revenue', value: '+240%' },
        { icon: Zap, label: 'Speed', value: '0.8s' },
      ],
      gradient: 'from-blue-500/30 via-purple-500/20 to-transparent',
    },
    {
      title: 'SaaS Lead Generation',
      category: 'Performance Marketing',
      slug: 'saas-lead-gen',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop',
      metrics: [
        { icon: Users, label: 'Leads', value: '+450%' },
        { icon: TrendingUp, label: 'ROAS', value: '8.2x' },
      ],
      gradient: 'from-purple-500/30 via-pink-500/20 to-transparent',
    },
    {
      title: 'D2C Brand Launch',
      category: 'Full Stack Growth',
      slug: 'd2c-brand',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop',
      metrics: [
        { icon: TrendingUp, label: 'Growth', value: '+320%' },
        { icon: Clock, label: 'Time', value: '45 days' },
      ],
      gradient: 'from-cyan-500/30 via-blue-500/20 to-transparent',
    },
  ];

  return (
    <section ref={sectionRef} className="projects-section py-32 lg:py-48 px-6 relative overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-primary/10 via-transparent to-transparent blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-accent/10 via-transparent to-transparent blur-[100px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="projects-header text-center mb-20">
          <p className="text-xs text-primary uppercase tracking-[0.3em] mb-5 font-medium">Case Studies</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
            Built for Performance
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real projects. See how we've helped businesses scale.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={`/projects/${project.slug}`}
              className="project-card group glass-card rounded-3xl overflow-hidden hover-lift"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="project-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                
                {/* Category badge */}
                <div className="absolute top-5 left-5">
                  <span className="px-4 py-1.5 text-xs font-medium glass rounded-full text-foreground">
                    {project.category}
                  </span>
                </div>

                {/* Arrow on hover */}
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <ArrowUpRight className="w-5 h-5 text-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-semibold text-foreground mb-5">
                  {project.title}
                </h3>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="glass-card-static rounded-xl p-4 group-hover:bg-white/5 transition-colors">
                      <div className="flex items-center gap-2 mb-2">
                        <metric.icon className="w-4 h-4 text-primary" />
                        <span className="text-xs text-muted-foreground">{metric.label}</span>
                      </div>
                      <span className="text-2xl font-bold gradient-text-primary">{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-16">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full glass-card glow-border text-foreground font-medium hover:bg-white/5 transition-all duration-300"
          >
            View All Case Studies
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
