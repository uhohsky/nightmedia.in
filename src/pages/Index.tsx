
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowDown, Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.hero-title', 
        { opacity: 0, y: 100 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.5,
          ease: "power3.out",
          delay: 0.5
        }
      );

      gsap.fromTo('.hero-subtitle', 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1.2,
          ease: "power3.out",
          delay: 1
        }
      );

      // About section animation
      gsap.fromTo('.about-content',
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.about-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Featured work grid
      gsap.fromTo('.work-item',
        { opacity: 0, scale: 0.8, y: 80 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.work-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Services stagger animation
      gsap.fromTo('.service-item',
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Quote section
      gsap.fromTo('.quote-text',
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.quote-section',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const featuredWork = [
    {
      title: 'LUXE FASHION',
      category: 'Influencer Campaign',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      slug: 'luxe-fashion-campaign'
    },
    {
      title: 'TECH CORP',
      category: 'Web Experience',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop',
      slug: 'techcorp-webgl-experience'
    },
    {
      title: 'PRODUCT LAUNCH',
      category: 'CGI Campaign',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
      slug: 'product-launch-cgi'
    },
    {
      title: 'BRAND STORY',
      category: 'Video Production',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
      slug: 'brand-story-cinematic'
    }
  ];

  const services = [
    { title: 'Brand Strategy', description: 'Strategic positioning that cuts through noise' },
    { title: 'Web Design', description: 'Digital experiences that captivate and convert' },
    { title: 'Digital Marketing', description: 'Data-driven campaigns that deliver results' },
    { title: 'Influencer Marketing', description: 'Authentic partnerships that amplify reach' },
    { title: 'CGI & 3D', description: 'Photorealistic visuals that stop the scroll' },
    { title: 'Video Production', description: 'Cinematic storytelling through motion' },
    { title: 'UI/UX Design', description: 'User-centered design that drives engagement' },
    { title: 'Mobile Apps', description: 'Native experiences for iOS and Android' },
    { title: 'SEO Optimization', description: 'Organic growth through strategic optimization' },
    { title: 'Creative Direction', description: 'Bold ideas that break creative boundaries' }
  ];

  return (
    <div ref={containerRef} className="bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center">
        {/* Background Video/Animation Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500 opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl font-light leading-tight mb-8">
            Welcome to
            <br />
            <span className="font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Night Media Group
            </span>
          </h1>
          
          <p className="hero-subtitle text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join us on this rollercoaster of creative madness.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-white opacity-60" />
        </div>
      </section>

      {/* About Section */}
      <section className="about-section py-32 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="about-content">
            <h2 className="text-4xl md:text-6xl font-light mb-12 leading-tight">
              We craft digital experiences that 
              <span className="font-bold text-pink-400"> defy expectations</span>.
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Night Media Group is where creativity meets technology, 
              where bold ideas transform into unforgettable digital realities.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-20">
            Featured Work
          </h2>
          
          <div className="work-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuredWork.map((work, index) => (
              <div 
                key={work.slug}
                className="work-item group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer"
              >
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent group-hover:from-black/60 transition-all duration-500"></div>
                
                <div className="absolute bottom-8 left-8 right-8">
                  <span className="text-sm text-purple-400 font-medium uppercase tracking-wider">
                    {work.category}
                  </span>
                  <h3 className="text-3xl font-bold mt-2 group-hover:text-pink-400 transition-colors duration-300">
                    {work.title}
                  </h3>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-6 bg-gray-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-20">
            Our Services
          </h2>
          
          <div className="services-grid space-y-8">
            {services.map((service, index) => (
              <div 
                key={service.title}
                className="service-item flex flex-col md:flex-row items-start md:items-center justify-between py-8 border-b border-gray-800 group hover:border-purple-500 transition-colors duration-300"
              >
                <div className="flex items-center mb-4 md:mb-0">
                  <span className="text-lg text-gray-500 font-mono mr-8 w-8">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light group-hover:text-purple-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-400 md:text-right md:max-w-md">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <blockquote className="quote-text text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
            "We don't chase trends —
            <br />
            <span className="font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              we build them."
            </span>
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <h3 className="text-3xl font-bold mb-4">NIGHT MEDIA</h3>
              <p className="text-gray-400">Creating digital magic since today.</p>
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12">
              <nav className="flex space-x-8">
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link>
                <Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Work</Link>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
              </nav>
              
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform duration-300"
              >
                Start Project
              </Link>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© 2024 Night Media Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
