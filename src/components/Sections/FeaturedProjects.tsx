
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FeaturedProjects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Luxe Fashion Campaign',
      category: 'Influencer Marketing',
      description: 'A high-end fashion campaign featuring top-tier influencers across multiple platforms',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      slug: 'luxe-fashion-campaign'
    },
    {
      id: 2,
      title: 'TechCorp WebGL Experience',
      category: 'Web Design',
      description: 'An immersive 3D web experience showcasing cutting-edge technology',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      slug: 'techcorp-webgl-experience'
    },
    {
      id: 3,
      title: 'Product Launch CGI',
      category: 'CGI Ads',
      description: 'Photorealistic 3D product visualization for a major brand launch',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
      slug: 'product-launch-cgi'
    }
  ];

  useEffect(() => {
    gsap.fromTo('.project-carousel',
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.projects-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="projects-section py-20 px-6 bg-gray-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-mono font-bold mb-6 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover some of our most impactful work across different industries and mediums
          </p>
        </div>

        <div className="project-carousel relative">
          <div className="glass rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-96">
                <img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="text-sm text-gray-400 font-medium">
                    {projects[currentProject].category}
                  </span>
                </div>
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                  {projects[currentProject].title}
                </h3>
                <p className="text-gray-400 mb-8 text-lg">
                  {projects[currentProject].description}
                </p>
                <Link
                  to={`/projects/${projects[currentProject].slug}`}
                  className="inline-block border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all magnetic w-fit"
                >
                  View Project
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevProject}
              className="glass p-3 rounded-full hover:bg-white hover:text-black transition-all magnetic"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentProject ? 'bg-white' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextProject}
              className="glass p-3 rounded-full hover:bg-white hover:text-black transition-all magnetic"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            to="/projects"
            className="inline-block glass px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all magnetic"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
