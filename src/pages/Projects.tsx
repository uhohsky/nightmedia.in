
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    gsap.fromTo('.project-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Luxe Fashion Campaign',
      category: 'Influencer Marketing',
      description: 'A high-end fashion campaign featuring top-tier influencers across multiple platforms, resulting in 300% brand awareness increase.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      slug: 'luxe-fashion-campaign',
      tags: ['Fashion', 'Instagram', 'TikTok'],
      metrics: {
        reach: '2.5M',
        engagement: '15%',
        roi: '400%'
      }
    },
    {
      id: 2,
      title: 'TechCorp WebGL Experience',
      category: 'Web Design',
      description: 'An immersive 3D web experience showcasing cutting-edge technology with interactive WebGL elements.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      slug: 'techcorp-webgl-experience',
      tags: ['WebGL', 'React', '3D'],
      metrics: {
        pageSpeed: '95',
        conversion: '180%',
        engagement: '45%'
      }
    },
    {
      id: 3,
      title: 'Product Launch CGI',
      category: 'CGI Ads',
      description: 'Photorealistic 3D product visualization for a major brand launch, achieving viral social media success.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
      slug: 'product-launch-cgi',
      tags: ['3D', 'CGI', 'Product'],
      metrics: {
        views: '5M+',
        shares: '100K',
        ctr: '25%'
      }
    },
    {
      id: 4,
      title: 'Documentary Series',
      category: 'Video Editing',
      description: 'Award-winning corporate documentary series showcasing company culture and values.',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop',
      slug: 'documentary-series',
      tags: ['Documentary', 'Corporate', 'Storytelling'],
      metrics: {
        views: '1M+',
        completion: '85%',
        awards: '3'
      }
    },
    {
      id: 5,
      title: 'E-commerce Platform',
      category: 'Web Development',
      description: 'Complete e-commerce solution with custom features and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      slug: 'ecommerce-platform',
      tags: ['E-commerce', 'React', 'Node.js'],
      metrics: {
        conversion: '+150%',
        speed: '90+',
        revenue: '+200%'
      }
    },
    {
      id: 6,
      title: 'Brand Identity Redesign',
      category: 'Branding',
      description: 'Complete brand transformation including logo, guidelines, and digital presence.',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
      slug: 'brand-identity-redesign',
      tags: ['Branding', 'Logo', 'Guidelines'],
      metrics: {
        recognition: '+250%',
        engagement: '+180%',
        trust: '+300%'
      }
    }
  ];

  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-mono font-bold mb-6 gradient-text">
            Our Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our portfolio of successful projects across various industries and digital mediums
          </p>
        </div>

        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.slug}`}
              className="project-card glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 magnetic"
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-800 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  {Object.entries(project.metrics).map(([key, value], index) => (
                    <div key={index}>
                      <div className="font-bold">{value}</div>
                      <div className="text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-block glass px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all magnetic"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
