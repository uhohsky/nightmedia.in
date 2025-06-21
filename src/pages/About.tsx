
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.fromTo('.about-section',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const team = [
    {
      name: 'Alex Rivera',
      role: 'Creative Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: 'Visionary leader with 8+ years in digital design and brand strategy.'
    },
    {
      name: 'Maya Chen',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332b76c?w=400&h=400&fit=crop&crop=face',
      bio: 'Full-stack developer specializing in WebGL and immersive experiences.'
    },
    {
      name: 'Jordan Smith',
      role: 'Influencer Strategist',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Expert in influencer partnerships and social media strategy.'
    },
    {
      name: 'Sofia Patel',
      role: 'Video Producer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Award-winning video producer with expertise in cinematic storytelling.'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We push boundaries and explore new technologies to create cutting-edge solutions.',
      icon: '🚀'
    },
    {
      title: 'Quality',
      description: 'Every project receives meticulous attention to detail and uncompromising quality standards.',
      icon: '⭐'
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients as partners to achieve shared success.',
      icon: '🤝'
    },
    {
      title: 'Results',
      description: 'Our focus is always on delivering measurable outcomes that drive business growth.',
      icon: '📈'
    }
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-mono font-bold mb-6 gradient-text">
            About NightMedia
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            We're a creative agency that blurs the line between technology and artistry, 
            creating digital experiences that captivate, engage, and deliver results.
          </p>
          <div className="glass rounded-3xl p-12">
            <p className="text-lg text-gray-300 leading-relaxed">
              Founded in 2019, NightMedia has been at the forefront of digital innovation, 
              helping brands tell their stories through cutting-edge web design, strategic 
              influencer partnerships, photorealistic CGI, and cinematic video production. 
              Our team of creative technologists combines artistic vision with technical 
              expertise to create experiences that don't just look amazing—they drive real business results.
            </p>
          </div>
        </div>
      </section>

      <div className="about-content">
        {/* Mission & Vision */}
        <section className="about-section px-6 py-16 bg-gray-900/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="glass rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-gray-400 text-lg">
                  To empower brands with innovative digital solutions that push creative 
                  boundaries while delivering measurable business impact. We believe in 
                  the power of technology to transform how brands connect with their audiences.
                </p>
              </div>
              <div className="glass rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
                <p className="text-gray-400 text-lg">
                  To be the leading creative agency that defines the future of digital 
                  experiences, where every project pushes the boundaries of what's possible 
                  and sets new standards for the industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="about-section px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-mono font-bold text-center mb-12 gradient-text">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="glass rounded-xl p-6 text-center magnetic">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="about-section px-6 py-16 bg-gray-900/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-mono font-bold text-center mb-12 gradient-text">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="glass rounded-xl p-6 text-center magnetic">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-gray-400 text-sm mb-3">{member.role}</p>
                  <p className="text-gray-500 text-xs">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="about-section px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="glass rounded-3xl p-12">
              <h2 className="text-4xl font-mono font-bold text-center mb-12 gradient-text">
                Our Impact
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">100+</div>
                  <div className="text-gray-400">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                  <div className="text-gray-400">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-section px-6 py-16 bg-gray-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-mono font-bold mb-6 gradient-text">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's create something extraordinary that pushes boundaries and delivers results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="glass px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all magnetic"
              >
                Start Your Project
              </a>
              <a
                href="/projects"
                className="border border-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all magnetic"
              >
                View Our Work
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
