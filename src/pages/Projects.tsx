
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import PageHeader from '../components/Layout/PageHeader';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  
  console.log('PROJECTS ARRAY:', projects);
  
  useEffect(() => {
    // Hero parallax effect
    gsap.to(heroRef.current, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Staggered project reveals with cinematic timing
    gsap.fromTo('.project-showcase',
      { 
        opacity: 0, 
        y: 100,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: '.projects-container',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Individual project image parallax
    gsap.utils.toArray('.project-image').forEach((img: any) => {
      gsap.to(img, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: img.parentElement,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // Floating elements animation
    gsap.to('.floating-bg', {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none"
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const projects = [
   
    {
      id: 1,
      title: 'LUXE FASHION',
      subtitle: 'INFLUENCER CAMPAIGN',
      category: 'Influencer Marketing',
      description: 'A high-end fashion campaign featuring top-tier influencers across multiple platforms, resulting in 300% brand awareness increase and viral social media success.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop',
      slug: 'luxe-fashion-campaign',
      tags: ['Fashion', 'Instagram', 'TikTok'],
      metrics: { reach: '2.5M', engagement: '15%', roi: '400%' },
      featured: true,
      size: 'large'
    },
     {
  id: 0,
  title: 'SYNFICTION.AI',
  subtitle: 'AI PRODUCT WEBSITE',
  category: 'Web Design & Development',
  description:
    'SYNFICTION.AI is an AI-first product website built to showcase advanced artificial intelligence capabilities with a clean, high-performance, conversion-focused interface. The project emphasizes speed, clarity, and modern AI storytelling.',
  image: '/images/projects/sfai.jpg',
  slug: 'synfiction-ai',
  tags: ['AI', 'Web Design', 'SaaS', 'Product Website'],
  metrics: {
    pageSpeed: '95+',
    engagement: 'High',
    conversion: 'Optimized',
  },
  featured: true,
  size: 'large',
  externalLink: 'https://synfiction.ai'
},

    {
      id: 2,
      title: 'TECHCORP',
      subtitle: 'WEBGL EXPERIENCE',
      category: 'Web Design',
      description: 'An immersive 3D web experience showcasing cutting-edge technology with interactive WebGL elements and smooth animations.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=800&fit=crop',
      slug: 'techcorp-webgl-experience',
      tags: ['WebGL', 'React', '3D'],
      metrics: { pageSpeed: '95', conversion: '180%', engagement: '45%' },
      size: 'medium'
    },
    {
      id: 3,
      title: 'PRODUCT LAUNCH',
      subtitle: 'CGI REVOLUTION',
      category: 'CGI Ads',
      description: 'Photorealistic 3D product visualization for a major brand launch, achieving viral social media success.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=800&fit=crop',
      slug: 'product-launch-cgi',
      tags: ['3D', 'CGI', 'Product'],
      metrics: { views: '5M+', shares: '100K', ctr: '25%' },
      size: 'medium'
    },
    {
      id: 4,
      title: 'DOCUMENTARY',
      subtitle: 'SERIES',
      category: 'Video Editing',
      description: 'Award-winning corporate documentary series showcasing company culture and values through cinematic storytelling.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=1200&h=800&fit=crop',
      slug: 'documentary-series',
      tags: ['Documentary', 'Corporate', 'Storytelling'],
      metrics: { views: '1M+', completion: '85%', awards: '3' },
      size: 'large'
    },
    {
      id: 5,
      title: 'E-COMMERCE',
      subtitle: 'PLATFORM',
      category: 'Web Development',
      description: 'Complete e-commerce solution with custom features and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop',
      slug: 'ecommerce-platform',
      tags: ['E-commerce', 'React', 'Node.js'],
      metrics: { conversion: '+150%', speed: '90+', revenue: '+200%' },
      size: 'medium'
    },
    {
      id: 6,
      title: 'BRAND IDENTITY',
      subtitle: 'REDESIGN',
      category: 'Branding',
      description: 'Complete brand transformation including logo, guidelines, and digital presence.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop',
      slug: 'brand-identity-redesign',
      tags: ['Branding', 'Logo', 'Guidelines'],
      metrics: { recognition: '+250%', engagement: '+180%', trust: '+300%' },
      size: 'medium'
    }
  ];

  return (
    <div className="bg-gray-50 text-black overflow-hidden">
      {/* Page Header Section */}
      <section className="relative bg-white pt-20">
        <PageHeader
          badge="PORTFOLIO"
          title="Creative Excellence"
          subtitle="Discover our most impactful work where creativity meets technology to create unforgettable digital experiences"
        />
      </section>

      {/* Projects Portfolio */}
      <section ref={containerRef} className="projects-container min-h-screen py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div key={project.id} className="project-showcase">
                <Link
                  to={`/projects/${project.slug}`}
                  className={`group block ${
                    project.size === 'large' 
                      ? 'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center' 
                      : 'max-w-4xl mx-auto'
                  }`}
                >
                  {/* Project Visual */}
                  <div className={`relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-700 ${
                    project.size === 'large' 
                      ? (index % 2 === 0 ? 'lg:order-1' : 'lg:order-2')
                      : 'mb-8'
                  }`}>
                    <div className={`relative ${
                      project.size === 'large' ? 'aspect-[4/3]' : 'aspect-[16/9]'
                    } overflow-hidden bg-gray-100`}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500"></div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-6 left-6">
                        <span className="px-4 py-2 bg-white/90 backdrop-blur-md border border-black/10 rounded-full text-sm font-medium text-black">
                          {project.category}
                        </span>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="px-8 py-4 bg-white/90 backdrop-blur-md border border-black/10 rounded-full font-medium text-black">
                          View Case Study
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className={`space-y-8 ${
                    project.size === 'large' 
                      ? (index % 2 === 0 ? 'lg:order-2' : 'lg:order-1')
                      : ''
                  }`}>
                    <div>
                      <h2 className="text-4xl md:text-6xl font-light tracking-tight mb-2 leading-none text-black">
                        {project.title}
                      </h2>
                      <h3 className="text-2xl md:text-3xl font-light text-gray-500 mb-6">
                        {project.subtitle}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                        {project.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-sm text-gray-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-6">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-light text-black mb-1">{value}</div>
                          <div className="text-sm text-gray-500 uppercase tracking-wide">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <div className="inline-flex items-center text-black group-hover:text-gray-600 transition-colors">
                        <span className="mr-3 font-medium">Explore Project</span>
                        <div className="w-8 h-px bg-current transform group-hover:translate-x-2 transition-transform duration-300"></div>
                        <div className="w-2 h-2 border-t border-r border-current transform rotate-45 ml-2 group-hover:translate-x-2 transition-transform duration-300"></div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-32">
            <Link
              to="/contact"
              className="inline-block px-12 py-6 bg-black text-white rounded-full text-xl font-medium hover:bg-gray-900 transition-all duration-300"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
