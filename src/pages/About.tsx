import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '../components/Layout/PageHeader';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
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
    });

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
      year: '2019',
      title: 'The Beginning',
      description: 'Night Media started as a solo freelance operation, helping small businesses establish their digital presence with custom websites.',
    },
    {
      year: '2020',
      title: 'Finding Our Focus',
      description: 'We discovered that great websites alone weren\'t enough. Brands needed complete growth systems — design, development, and marketing working together.',
    },
    {
      year: '2022',
      title: 'Growing The Team',
      description: 'Brought on specialists in frontend development, growth strategy, and video production to offer end-to-end digital solutions.',
    },
    {
      year: '2024',
      title: 'Today & Beyond',
      description: 'Now a full-service creative agency delivering web design, branding, and performance marketing for ambitious brands ready to scale.',
    },
  ];

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <PageHeader
          badge="ABOUT US"
          title="Building Digital Experiences That Drive Growth"
          subtitle="We're a creative agency that combines design excellence with performance obsession. Every project is engineered to make an impact."
        />

        <div className="about-content">
          <section className="about-section story-section mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Story
              </h2>
              <div className="w-16 h-px bg-primary mx-auto"></div>
            </div>

            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <div key={index} className="timeline-item flex gap-8 mb-12 last:mb-0">
                  <div className="flex-shrink-0 w-20">
                    <span className="text-2xl font-bold text-primary">{item.year}</span>
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

          <section className="about-section mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our Philosophy
              </h2>
              <div className="w-16 h-px bg-primary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors duration-300"
                >
                  <span className="text-5xl font-light text-primary/30 mb-4 block">{value.number}</span>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="about-section mb-32">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Meet The Team
              </h2>
              <div className="w-16 h-px bg-primary mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="group rounded-2xl overflow-hidden border border-border bg-card hover:border-primary/50 transition-all duration-300"
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

          <section className="about-section mb-20">
            <div className="rounded-2xl border border-border bg-card p-12 md:p-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">100+</div>
                  <div className="text-muted-foreground">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">50+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">24/7</div>
                  <div className="text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </section>

          <section className="about-section text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Build Something Great?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's create a digital experience that drives real growth for your brand.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-opacity duration-300"
            >
              <span>Work With Night Media</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
