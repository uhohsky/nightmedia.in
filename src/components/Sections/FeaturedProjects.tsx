import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      id: 1,
      title: 'LUXE FASHION',
      subtitle: 'CAMPAIGN',
      category: 'Influencer Marketing',
      description: 'A high-end fashion campaign featuring top-tier influencers across multiple platforms, achieving unprecedented engagement rates and brand visibility.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop',
      metrics: {
        reach: '2M+',
        engagement: '15%',
        roi: '350%'
      },
      slug: 'luxe-fashion-campaign'
    },
    {
      id: 2,
      title: 'TECHCORP',
      subtitle: 'WEBGL EXPERIENCE',
      category: 'Web Design',
      description: 'An immersive 3D web experience showcasing cutting-edge technology through interactive WebGL animations and smooth scroll narratives.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=800&fit=crop',
      metrics: {
        visitors: '500K+',
        timeOnSite: '4.5min',
        conversion: '12%'
      },
      slug: 'techcorp-webgl-experience'
    },
    {
      id: 3,
      title: 'PRODUCT LAUNCH',
      subtitle: 'CGI REVOLUTION',
      category: 'CGI Ads',
      description: 'Photorealistic 3D product visualization that revolutionized brand marketing with cinematic quality renders and dynamic animations.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=800&fit=crop',
      metrics: {
        views: '5M+',
        shares: '25K',
        ctr: '8.5%'
      },
      slug: 'product-launch-cgi'
    },
    {
      id: 4,
      title: 'BRAND STORY',
      subtitle: 'CINEMATIC EDIT',
      category: 'Video Editing',
      description: 'Award-winning brand documentary that combines storytelling with cinematic production values to create emotional connections.',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=800&fit=crop',
      metrics: {
        awards: '3',
        views: '1.2M',
        completion: '85%'
      },
      slug: 'brand-story-cinematic'
    }
  ];

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo('.projects-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.projects-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Individual project animations with stagger
      projects.forEach((_, index) => {
        gsap.fromTo(`.project-card-${index}`,
          { 
            opacity: 0, 
            y: 50 
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: `.project-card-${index}`,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Progress tracking
      ScrollTrigger.create({
        trigger: '.projects-showcase',
        start: 'top center',
        end: 'bottom center',
        onUpdate: (self) => {
          const progress = self.progress;
          const newActiveProject = Math.min(
            Math.floor(progress * projects.length),
            projects.length - 1
          );
          setActiveProject(newActiveProject);
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [projects.length]);

  return (
    <section ref={sectionRef} className="projects-section min-h-screen py-20 px-6 bg-background relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-foreground opacity-[0.02] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-muted-foreground opacity-[0.03] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="projects-header text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
            <span className="gradient-text">SHOWCASE</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our most impactful work — where creativity meets technology to create unforgettable digital experiences
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-showcase space-y-32">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`project-card-${index} grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative group img-zoom ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-500"></div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    to={`/projects/${project.slug}`}
                    className="glass px-8 py-4 rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 btn-lift"
                  >
                    View Project
                  </Link>
                </div>
              </div>

              {/* Project Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <span className="text-sm text-muted-foreground font-medium tracking-widest uppercase">
                    {project.category}
                  </span>
                </div>
                
                <div>
                  <h3 className="text-4xl lg:text-5xl font-display font-bold mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <h4 className="text-2xl lg:text-3xl font-display font-light text-muted-foreground">
                    {project.subtitle}
                  </h4>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6 pt-6">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-foreground">{value}</div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wide">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center text-foreground hover:text-accent transition-colors duration-300 group mt-6 link-underline"
                >
                  <span className="mr-2">Explore Case Study</span>
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-32">
          <Link
            to="/projects"
            className="inline-block glass px-12 py-6 rounded-full text-xl font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 btn-lift"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
