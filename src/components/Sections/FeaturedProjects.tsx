
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowUpRight, TrendingUp, Clock, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjects = () => {
  useEffect(() => {
    gsap.fromTo('.projects-header',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-section',
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo('.project-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%',
        }
      }
    );
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Conversion Website',
      slug: 'luxe-fashion',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      metrics: [
        { icon: TrendingUp, label: 'Conversion Rate', value: '+156%' },
        { icon: Clock, label: 'Load Time', value: '1.2s' },
      ],
    },
    {
      title: 'SaaS Landing Page',
      category: 'Sales Funnel',
      slug: 'techcorp',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      metrics: [
        { icon: Users, label: 'Lead Capture', value: '+340%' },
        { icon: TrendingUp, label: 'Sign-ups', value: '+89%' },
      ],
    },
    {
      title: 'Growth Infrastructure',
      category: 'Full Stack',
      slug: 'artisan-collective',
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop',
      metrics: [
        { icon: TrendingUp, label: 'Revenue', value: '+210%' },
        { icon: Clock, label: 'Time to Market', value: '-40%' },
      ],
    },
  ];

  return (
    <section className="projects-section py-32 lg:py-40 px-6 relative overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-primary/10 via-transparent to-transparent blur-[100px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-accent/10 via-transparent to-transparent blur-[80px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="projects-header text-center mb-20">
          <p className="text-xs text-primary uppercase tracking-[0.3em] mb-4 font-medium">Case Studies</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
            Built for Performance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real projects. See how we've helped businesses grow.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={`/projects/${project.slug}`}
              className="project-card group glass-card glow-border rounded-3xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium glass rounded-full text-foreground">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </h3>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="glass rounded-xl p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <metric.icon className="w-4 h-4 text-primary" />
                        <span className="text-xs text-muted-foreground">{metric.label}</span>
                      </div>
                      <span className="text-lg font-semibold text-foreground">{metric.value}</span>
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
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
