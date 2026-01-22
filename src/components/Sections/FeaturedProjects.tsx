
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjects = () => {
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
    gsap.fromTo('.projects-header',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-section',
          start: 'top 80%',
        }
      }
    );

    projects.forEach((_, index) => {
      gsap.fromTo(`.project-card-${index}`,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.project-card-${index}`,
            start: 'top 85%',
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [projects.length]);

  return (
    <section className="projects-section py-32 lg:py-40 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="projects-header text-center mb-20">
          <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">Showcase</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 tracking-tight mb-6">
            Our Work
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Discover our most impactful work — where creativity meets technology to create unforgettable digital experiences.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects-showcase space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`project-card-${index} grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <span className="text-sm text-gray-400 font-medium tracking-widest uppercase">
                  {project.category}
                </span>
                
                <div>
                  <h3 className="text-3xl lg:text-4xl font-semibold text-gray-900 tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <h4 className="text-xl lg:text-2xl font-normal text-gray-400">
                    {project.subtitle}
                  </h4>
                </div>

                <p className="text-lg text-gray-500 leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6 py-6 border-t border-gray-200">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-2xl font-semibold text-gray-900">{value}</div>
                      <div className="text-sm text-gray-400 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-gray-600 transition-colors duration-300 group"
                >
                  Explore Case Study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-24">
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 bg-gray-900 text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-[1.02]"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
