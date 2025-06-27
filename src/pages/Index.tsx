
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Star, Users, Award, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.hero-content', 
        { opacity: 0, y: 80 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3
        }
      );

      // Stats animation
      gsap.fromTo('.stat-item',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Services animation
      gsap.fromTo('.service-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.services-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Work animation
      gsap.fromTo('.work-card',
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.work-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { number: '200+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '3+', label: 'Years Experience' },
    { number: '15M+', label: 'Total Reach' }
  ];

  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Brand Strategy',
      description: 'Strategic positioning and brand development that cuts through the noise and connects with your audience.',
      features: ['Brand Identity', 'Market Research', 'Competitive Analysis']
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Web Design',
      description: 'Stunning, responsive websites that captivate visitors and convert them into loyal customers.',
      features: ['UI/UX Design', 'Responsive Development', 'Performance Optimization']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Influencer Marketing',
      description: 'Strategic partnerships with top-tier influencers to amplify your brand reach and engagement.',
      features: ['Influencer Selection', 'Campaign Management', 'Performance Analytics']
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'CGI & 3D',
      description: 'Photorealistic 3D visualizations and CGI content that stops the scroll and drives engagement.',
      features: ['3D Modeling', 'Product Visualization', 'Motion Graphics']
    }
  ];

  const featuredWork = [
    {
      title: 'Luxe Fashion Campaign',
      category: 'Influencer Marketing',
      description: 'A high-end fashion campaign featuring top-tier influencers across multiple platforms.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      results: '2M+ Reach, 15% Engagement'
    },
    {
      title: 'TechCorp Experience',
      category: 'Web Design',
      description: 'An immersive 3D web experience showcasing cutting-edge technology.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      results: '500K+ Visitors, 4.5min Session'
    },
    {
      title: 'Product Launch CGI',
      category: 'CGI & 3D',
      description: 'Photorealistic 3D product visualization that revolutionized brand marketing.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop',
      results: '5M+ Views, 8.5% CTR'
    }
  ];

  return (
    <div ref={containerRef} className="bg-white text-black">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="hero-content">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight mb-8">
              We create
              <br />
              <span className="font-bold text-purple-600">digital magic</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Night Media Group is a creative digital agency specializing in brand strategy, 
              web design, influencer marketing, and cutting-edge CGI content.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/projects"
                className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition-all duration-300 flex items-center gap-2"
              >
                View Our Work
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-black text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-black hover:text-white transition-all duration-300"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-20 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
            We're a team of creative minds who believe in the power of 
            <span className="font-bold text-purple-600"> digital storytelling</span>.
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Our mission is to help brands cut through the digital noise with authentic, 
            engaging content that drives real results. From strategy to execution, 
            we're your partners in creating unforgettable digital experiences.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive digital solutions tailored to your brand's unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="text-purple-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-500 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="work-section py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Featured Work</h2>
            <p className="text-xl text-gray-600">
              A selection of our most impactful campaigns and projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWork.map((work, index) => (
              <div key={index} className="work-card group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <Play className="w-6 h-6 text-black" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <span className="text-sm text-purple-600 font-medium uppercase tracking-wider">
                    {work.category}
                  </span>
                  <h3 className="text-xl font-semibold group-hover:text-purple-600 transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {work.description}
                  </p>
                  <div className="text-sm font-medium text-black">
                    {work.results}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-purple-600 font-medium hover:text-purple-700 transition-colors"
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <blockquote className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            "We don't chase trends —
            <br />
            <span className="font-bold text-purple-400">
              we build them."
            </span>
          </blockquote>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Ready to create something 
            <span className="font-bold text-purple-600"> extraordinary</span>?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Let's discuss your project and explore how we can bring your vision to life 
            with our creative expertise and digital innovation.
          </p>
          <Link
            to="/contact"
            className="bg-black text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition-all duration-300 inline-flex items-center gap-2"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
