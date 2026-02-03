import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-badge',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );

      gsap.fromTo('.about-title',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: 'power3.out' }
      );

      gsap.fromTo('.about-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' }
      );

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
            toggleActions: 'play none none reverse'
          }
        }
      );

      gsap.fromTo('.timeline-item',
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.story-section',
            start: 'top 70%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
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
      number: '01',
      title: 'Craft Over Chaos',
      description: 'We believe in thoughtful design that serves a purpose. Every pixel, every interaction, every line of code is intentional.',
    },
    {
      number: '02',
      title: 'Results-Driven',
      description: 'Beautiful design means nothing without performance. We measure success by the growth we deliver.',
    },
    {
      number: '03',
      title: 'Partnership First',
      description: 'We work with you, not for you. Collaboration and transparency are at the core of everything we do.',
    },
    {
      number: '04',
      title: 'Always Evolving',
      description: 'The digital landscape never stops moving. Neither do we. Continuous learning keeps us ahead.',
    },
  ];

  const timeline = [
    {
      year: '2020',
      title: 'The Beginning',
      description: 'Night Media launched with a clear mission: help ambitious brands build digital systems that actually convert.',
    },
    {
      year: '2022',
      title: 'Scaling Growth Systems',
      description: 'Expanded beyond web design to offer complete growth infrastructure—performance marketing, lead generation, and conversion optimization.',
    },
    {
      year: '2024',
      title: 'Full-Service Agency',
      description: 'Brought on specialists in AI, video production, and influencer marketing to deliver end-to-end digital transformation.',
    },
    {
      year: '2026',
      title: 'Building the Future',
      description: 'Focused on scalable digital growth systems, partnering with brands ready to dominate their markets with data-driven strategies.',
    },
  ];

  return (
    <div ref={containerRef} className="bg-background min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-orb gradient-orb-1 absolute top-[10%] right-[10%] w-[600px] h-[600px]" />
        <div className="gradient-orb gradient-orb-2 absolute bottom-[30%] left-[5%] w-[500px] h-[500px]" />
      </div>
      
      <div className="noise-overlay" />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="about-badge inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-medium">About Us</span>
          </div>
          
          <h1 className="about-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-6">
            Building Digital Experiences{' '}
            <span className="gradient-text-primary">That Drive Growth</span>
          </h1>
          
          <p className="about-subtitle text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We&apos;re a creative agency that combines design excellence with performance obsession. Every project is engineered to make an impact.
          </p>
        </div>
      </section>

      <div className="about-content relative z-10 max-w-7xl mx-auto px-6">
        {/* Story Section */}
        <section className="about-section story-section mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Story
            </h2>
            <div className="w-16 h-px bg-primary mx-auto"></div>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="timeline-item flex gap-8 mb-12 last:mb-0">
                <div className="flex-shrink-0 w-20">
                  <span className="text-2xl font-bold gradient-text-primary">{item.year}</span>
                </div>
                <div className="flex-1 pb-12 border-l-2 border-border pl-8 relative">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary"></div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="about-section mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Philosophy
            </h2>
            <div className="w-16 h-px bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl glass-card glow-border"
              >
                <span className="text-5xl font-light gradient-text-primary mb-4 block">{value.number}</span>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="about-section mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet The Team
            </h2>
            <div className="w-16 h-px bg-primary mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden glass-card glow-border"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="about-section mb-20">
          <div className="rounded-3xl glass-card glow-border p-12 md:p-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
              <div>
                <div className="text-4xl md:text-5xl font-bold gradient-text-primary mb-2">100+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold gradient-text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold gradient-text-primary mb-2">6+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold gradient-text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="about-section text-center pb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Build Something Great?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s create a digital experience that drives real growth for your brand.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 btn-primary-glow px-8 py-4 rounded-full text-primary-foreground font-semibold group"
          >
            <span>Work With Night Media</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
