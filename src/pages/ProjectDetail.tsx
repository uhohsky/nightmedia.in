
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetail = () => {
  const { slug } = useParams();

  useEffect(() => {
    gsap.fromTo('.project-hero',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    gsap.fromTo('.project-section',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.project-content',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const projectData = {
    'luxe-fashion-campaign': {
      title: 'Luxe Fashion Campaign',
      category: 'Influencer Marketing',
      overview: 'A comprehensive influencer marketing campaign for a luxury fashion brand targeting millennials and Gen Z consumers across Instagram, TikTok, and YouTube.',
      challenge: 'The brand needed to increase awareness among younger demographics while maintaining their luxury positioning and achieving measurable ROI.',
      solution: 'We curated a diverse group of micro and macro influencers, creating authentic content that showcased the brand\'s products in lifestyle contexts.',
      results: [
        '300% increase in brand awareness',
        '2.5M total reach across platforms',
        '15% average engagement rate',
        '400% return on investment'
      ],
      images: [
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop'
      ]
    },
    'techcorp-webgl-experience': {
      title: 'TechCorp WebGL Experience',
      category: 'Web Design & Development',
      overview: 'An immersive 3D web experience showcasing cutting-edge technology products with interactive WebGL elements and smooth animations.',
      challenge: 'Create a memorable digital experience that effectively demonstrates complex technology products while maintaining fast loading times.',
      solution: 'We developed a custom WebGL application with optimized 3D models, progressive loading, and responsive design for all devices.',
      results: [
        '95+ PageSpeed Insights score',
        '180% increase in conversion rate',
        '45% longer session duration',
        '90% user satisfaction rating'
      ],
      images: [
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop'
      ]
    },
    'product-launch-cgi': {
      title: 'Product Launch CGI',
      category: 'CGI & 3D Animation',
      overview: 'Photorealistic 3D product visualization and animation for a major consumer electronics brand launch campaign.',
      challenge: 'Create compelling product visuals before physical prototypes were available, while ensuring photorealistic quality for premium brand positioning.',
      solution: 'We developed detailed 3D models with accurate materials and lighting, creating a series of product animations for various marketing channels.',
      results: [
        '5M+ total video views',
        '100K+ social media shares',
        '25% click-through rate',
        'Viral success across platforms'
      ],
      images: [
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=600&fit=crop'
      ]
    }
  };

  const project = projectData[slug as keyof typeof projectData];

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="project-hero px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gray-400 font-medium">{project.category}</span>
            <h1 className="text-4xl md:text-6xl font-mono font-bold my-6 gradient-text">
              {project.title}
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {project.overview}
            </p>
          </div>
          
          <div className="glass rounded-3xl overflow-hidden">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </section>

      <div className="project-content">
        {/* Challenge & Solution */}
        <section className="project-section px-6 py-16 bg-gray-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="glass rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-red-400">The Challenge</h2>
                <p className="text-gray-400 text-lg">{project.challenge}</p>
              </div>
              <div className="glass rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-green-400">Our Solution</h2>
                <p className="text-gray-400 text-lg">{project.solution}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="project-section px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-mono font-bold text-center mb-12 gradient-text">
              Results & Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {project.results.map((result, index) => (
                <div key={index} className="glass rounded-xl p-6 text-center magnetic">
                  <div className="text-2xl font-bold mb-2 gradient-text">
                    {result.split(' ')[0]}
                  </div>
                  <div className="text-gray-400">
                    {result.split(' ').slice(1).join(' ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="project-section px-6 py-16 bg-gray-900/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-mono font-bold text-center mb-12 gradient-text">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((image, index) => (
                <div key={index} className="glass rounded-xl overflow-hidden magnetic">
                  <img
                    src={image}
                    alt={`${project.title} ${index + 1}`}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="project-section px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-mono font-bold mb-6 gradient-text">
              Want Similar Results?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's discuss how we can help you achieve your goals with a similar approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="glass px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all magnetic"
              >
                Start Your Project
              </Link>
              <Link
                to="/projects"
                className="border border-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all magnetic"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
