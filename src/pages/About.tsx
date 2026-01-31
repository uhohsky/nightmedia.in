import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '../components/Layout/PageHeader';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      '.about-section',
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 80%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
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
      bio: 'Growth strategist specializing in influencer campaigns and performance-driven social execution.',
    },
    {
      name: 'Ms Vibha',
      role: 'Video & Motion Lead',
      image: '/images/team/video.jpg',
      bio: 'Video producer focused on cinematic storytelling, brand films, and short-form content.',
    },
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We push boundaries and adopt new technologies to stay ahead.',
    },
    {
      title: 'Quality',
      description: 'Every project is executed with obsessive attention to detail.',
    },
    {
      title: 'Collaboration',
      description: 'Clients work directly with experts — no layers, no noise.',
    },
    {
      title: 'Results',
      description: 'Everything we build is engineered to drive measurable growth.',
    },
  ];

  return (
    <div className="bg-gray-50 text-black min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <PageHeader
          badge="ABOUT US"
          title="Building Digital Growth Systems"
          subtitle="We design and engineer digital experiences that look premium, perform flawlessly, and convert consistently."
        />

        <div className="about-content space-y-24">

          {/* MISSION & VISION */}
          <section className="about-section grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white rounded-2xl shadow-lg p-10">
              <span className="text-sm tracking-widest text-gray-400">MISSION</span>
              <h3 className="text-3xl font-light mt-3 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To help ambitious brands scale using high-performance websites,
                growth systems, and digital strategies that generate real ROI.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-10">
              <span className="text-sm tracking-widest text-gray-400">VISION</span>
              <h3 className="text-3xl font-light mt-3 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the go-to digital growth partner for founders who care
                about performance as much as aesthetics.
              </p>
            </div>
          </section>

          {/* VALUES */}
          <section className="about-section">
            <h2 className="text-4xl font-light text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl shadow-lg p-8 text-center"
                >
                  <h4 className="text-xl font-light mb-3">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* TEAM */}
          <section className="about-section">
            <h2 className="text-4xl font-light text-center mb-12">
              Meet Our Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group"
                >
                  {/* IMAGE — FIXED */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* TEXT */}
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-medium">{member.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* STATS */}
          <section className="about-section bg-white rounded-2xl shadow-lg p-12">
            <h2 className="text-4xl font-light text-center mb-12">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-light">100+</div>
                <p className="text-gray-600">Projects Delivered</p>
              </div>
              <div>
                <div className="text-4xl font-light">50+</div>
                <p className="text-gray-600">Clients Served</p>
              </div>
              <div>
                <div className="text-4xl font-light">5+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <div className="text-4xl font-light">24/7</div>
                <p className="text-gray-600">Founder Access</p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="text-center mt-24">
          <a
            href="/contact"
            className="inline-block bg-black text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
