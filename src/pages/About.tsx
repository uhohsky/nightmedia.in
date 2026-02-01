
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '../components/Layout/PageHeader';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.fromTo('.about-section',
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Floating elements animation
    gsap.to('.floating-element', {
      y: -30,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
      stagger: 0.5
    });
  }, []);

  const team = [
  {
    name: 'Mr Sky',
    role: 'Lead Web Engineer',
    image: '/images/team/founder.jpg',
    bio: 'Lead Web Engineer with 8+ years of experience building high-performance, conversion-focused websites.',
  },
  {
    name: 'Ms Pihu',
    role: 'Frontend Developer',
    image: '/images/team/dev.jpg',
    bio: 'Frontend developer focused on modern UI, motion design, and scalable web interfaces.',
  },
  {
    name: 'Mr Kartik',
    role: 'Growth & Influencer Strategist',
    image: '/images/team/strategist.jpg',
    bio: 'Growth strategist specializing in influencer campaigns and performance-driven social media execution.',
  },
  {
    name: 'Ms Vibha',
    role: 'Video & Motion Lead',
    image: '/images/team/video.jpg',
    bio: 'Video producer focused on cinematic storytelling, brand films, and short-form performance content.',
  },
];


  const values = [
    {
      title: 'Innovation',
      description: 'We push boundaries and explore new technologies to create cutting-edge solutions.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Quality',
      description: 'Every project receives meticulous attention to detail and uncompromising quality standards.',
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients as partners to achieve shared success.',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Results',
      description: 'Our focus is always on delivering measurable outcomes that drive business growth.',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="pt-24 pb-20 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <PageHeader
          badge="ABOUT US"
          title="Creative Agency Building Digital Experiences"
          subtitle="We're a creative agency that blurs the line between technology and artistry, creating digital experiences that captivate, engage, and deliver results."
        />

        <div className="about-content">
          {/* Mission & Vision */}
          <div className="about-section mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white shadow-lg hover:shadow-2xl transition-all duration-700 rounded-2xl overflow-hidden group">
                <div className="relative h-64 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl font-light text-white opacity-20">01</div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-gray-500 tracking-wider">
                      MISSION
                    </span>
                    <div className="w-8 h-8 flex items-center justify-center">
                      <div className="w-4 h-4 border-t-2 border-r-2 border-black transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light text-black mb-3">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To empower brands with innovative digital solutions that push creative 
                    boundaries while delivering measurable business impact.
                  </p>
                </div>
              </div>

              <div className="bg-white shadow-lg hover:shadow-2xl transition-all duration-700 rounded-2xl overflow-hidden group">
                <div className="relative h-64 bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center overflow-hidden">
                  <div className="text-6xl font-light text-white opacity-20">02</div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-medium text-gray-500 tracking-wider">
                      VISION
                    </span>
                    <div className="w-8 h-8 flex items-center justify-center">
                      <div className="w-4 h-4 border-t-2 border-r-2 border-black transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light text-black mb-3">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the leading creative agency that defines the future of digital 
                    experiences and sets new standards for the industry.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="about-section mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light text-black mb-4">
                Our Values
              </h2>
              <div className="w-16 h-px bg-cyan-400 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white shadow-lg hover:shadow-2xl transition-all duration-700 rounded-2xl overflow-hidden group">
                  <div className={`relative h-32 bg-gradient-to-br ${value.color} flex items-center justify-center overflow-hidden`}>
                    <div className="text-3xl font-light text-white opacity-30">{String(index + 1).padStart(2, '0')}</div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-light text-black mb-3">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team */}
          <div className="about-section mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-light text-black mb-4">
                Meet Our Team
              </h2>
              <div className="w-16 h-px bg-cyan-400 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
  key={index}
  className="bg-white shadow-lg hover:shadow-2xl transition-all duration-700 rounded-2xl overflow-hidden group"
>
  {/* IMAGE WRAPPER (DO NOT REMOVE) */}
 <div className="relative h-48 overflow-hidden">
  <img
    src={member.image}
    alt={member.name}
    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
  />
  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>


  {/* TEXT CONTENT */}
  <div className="p-6">
    <h3 className="text-lg font-light text-black mb-1">
      {member.name}
    </h3>
    <p className="text-gray-500 text-sm mb-3">
      {member.role}
    </p>
    <p className="text-gray-600 text-xs leading-relaxed">
      {member.bio}
    </p>
  </div>
</div>


        
          <div className="about-section">
            <div className="bg-white shadow-lg rounded-2xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-light text-black mb-4">
                  Our Impact
                </h2>
                <div className="w-16 h-px bg-cyan-400 mx-auto"></div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-light text-black mb-2">100+</div>
                  <div className="text-gray-600">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-light text-black mb-2">50+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-light text-black mb-2">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-light text-black mb-2">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <a
            href="/contact"
            className="inline-flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition-colors duration-300 group"
          >
            <span>Start Your Project</span>
            <div className="w-2 h-2 bg-white rounded-full group-hover:translate-x-1 transition-transform duration-300"></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
