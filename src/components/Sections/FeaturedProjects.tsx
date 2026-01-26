
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Zap, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjects = () => {
  useEffect(() => {
    gsap.fromTo('.proof-header',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.proof-section',
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo('.proof-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.proof-grid',
          start: 'top 85%',
        }
      }
    );
  }, []);

  const projects = [
    {
      title: 'E-commerce Redesign',
      category: 'Website + Funnel',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80',
      metrics: [
        { icon: TrendingUp, value: '+156%', label: 'Conversion Rate' },
        { icon: Zap, value: '0.8s', label: 'Load Time' },
      ],
      slug: 'luxe-fashion',
    },
    {
      title: 'SaaS Landing Page',
      category: 'Lead Generation',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
      metrics: [
        { icon: Users, value: '3x', label: 'More Leads' },
        { icon: TrendingUp, value: '+89%', label: 'Sign-up Rate' },
      ],
      slug: 'techcorp',
    },
    {
      title: 'Service Business Website',
      category: 'Brand + Website',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&q=80',
      metrics: [
        { icon: TrendingUp, value: '+210%', label: 'Inquiries' },
        { icon: Zap, value: '95+', label: 'PageSpeed Score' },
      ],
      slug: 'artisan-collective',
    },
  ];

  return (
    <section className="proof-section projects-section py-24 lg:py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="proof-header text-center mb-16 lg:mb-20">
          <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] mb-4 font-medium">Case Studies</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
            Built for Performance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real projects. See how we've helped businesses grow.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="proof-grid grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={`/projects/${project.slug}`}
              className="proof-card group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-muted transition-all duration-500"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{project.category}</span>
                <h3 className="text-xl font-semibold text-foreground mt-2 mb-4 group-hover:text-muted-foreground transition-colors">
                  {project.title}
                </h3>

                {/* Metrics */}
                <div className="flex gap-6">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <metric.icon className="w-4 h-4 text-green-500" />
                      <div>
                        <span className="text-lg font-semibold text-foreground">{metric.value}</span>
                        <span className="text-xs text-muted-foreground ml-1">{metric.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-muted-foreground transition-colors"
          >
            View All Case Studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
