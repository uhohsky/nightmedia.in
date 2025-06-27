
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Monitor, Users, Camera, Palette, TrendingUp, Search, Smartphone, Globe, Video, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the central heading
      if (centerHeadingRef.current) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          pin: centerHeadingRef.current,
          pinSpacing: false,
        });
      }

      // Animate service cards with orbital motion
      gsap.utils.toArray('.service-orbital').forEach((element: any, index) => {
        const isEven = index % 2 === 0;
        const direction = isEven ? -100 : 100;
        const rotation = isEven ? -15 : 15;

        gsap.fromTo(element, 
          { 
            opacity: 0,
            x: direction,
            rotation: rotation,
            scale: 0.8
          },
          {
            opacity: 1,
            x: 0,
            rotation: 0,
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
              scrub: 0.5
            }
          }
        );

        // Add subtle floating animation
        gsap.to(element, {
          y: -10,
          duration: 2 + (index * 0.1),
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: index * 0.2
        });
      });

      // Scroll indicator animation
      gsap.to('.scroll-indicator', {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      title: 'Web Design',
      description: 'Stunning digital experiences that captivate and convert',
      icon: Monitor,
      slug: 'web-design',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      title: 'Influencer Marketing',
      description: 'Strategic partnerships amplifying your brand reach globally',
      icon: Users,
      slug: 'influencer-marketing',
      color: 'from-pink-400 to-purple-500'
    },
    {
      title: 'CGI Advertising',
      description: 'Photorealistic 3D ads that stop the scroll',
      icon: Camera,
      slug: 'cgi-ads',
      color: 'from-emerald-400 to-teal-500'
    },
    {
      title: 'Brand Identity',
      description: 'Memorable brands that resonate with audiences',
      icon: Palette,
      slug: 'branding-identity',
      color: 'from-orange-400 to-red-500'
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven strategies delivering measurable results',
      icon: TrendingUp,
      slug: 'paid-ads',
      color: 'from-indigo-400 to-purple-500'
    },
    {
      title: 'SEO Optimization',
      description: 'Boosting visibility and organic growth',
      icon: Search,
      slug: 'seo',
      color: 'from-green-400 to-emerald-500'
    },
    {
      title: 'Mobile Apps',
      description: 'Native and hybrid mobile experiences',
      icon: Smartphone,
      slug: 'mobile-apps',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design driving engagement',
      icon: Globe,
      slug: 'ui-ux-design',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      title: 'Video Production',
      description: 'Cinematic storytelling through expert production',
      icon: Video,
      slug: 'video-editing',
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Creative Strategy',
      description: 'Bold ideas that break through the noise',
      icon: Zap,
      slug: 'creative-strategy',
      color: 'from-red-400 to-pink-500'
    }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Fixed Central Heading */}
      <div 
        ref={centerHeadingRef}
        className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none"
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center leading-tight">
          <span className="block text-white">Everything</span>
          <span className="block text-white">Revolves Around</span>
          <span className="block bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            Night Media
          </span>
        </h1>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-cyan-400 to-transparent"></div>
        <div className="w-2 h-2 bg-cyan-400 rounded-full mx-auto mt-2 animate-pulse"></div>
      </div>

      {/* Services Container */}
      <div className="relative z-0 pt-32 pb-32">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isEven = index % 2 === 0;
          
          return (
            <div
              key={service.slug}
              className={`service-orbital mb-48 ${isEven ? 'ml-4 md:ml-16' : 'mr-4 md:mr-16 ml-auto'} max-w-xs md:max-w-sm`}
            >
              <Link
                to={`/services/${service.slug}`}
                className="group block p-8 bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-2xl hover:border-gray-700 transition-all duration-500 hover:scale-105 hover:bg-gray-900/50"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-black" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Hover indicator */}
                <div className={`w-0 h-px bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-500 mt-6`}></div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
        
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>
    </div>
  );
};

export default Services;
