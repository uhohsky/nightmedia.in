import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Target, 
  Zap, 
  Users, 
  BarChart3, 
  Clock, 
  Award 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhyNightMedia = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.wnm-header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      );

      document.querySelectorAll('.wnm-stat').forEach((stat) => {
        gsap.fromTo(stat,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.2)',
            scrollTrigger: { trigger: stat, start: 'top 90%' }
          }
        );
      });

      document.querySelectorAll('.wnm-point').forEach((point) => {
        gsap.fromTo(point,
          { opacity: 0, x: -30 },
          {
            opacity: 1, x: 0, duration: 0.5, ease: 'power3.out',
            scrollTrigger: { trigger: point, start: 'top 90%' }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: '100+', label: 'Projects Delivered' },
    { value: '50+', label: 'Happy Clients' },
    { value: '3x', label: 'Avg. Conversion Lift' },
    { value: '<2s', label: 'Avg. Load Time' }
  ];

  const points = [
    {
      icon: Target,
      title: 'Conversion-First Approach',
      description: 'Every design decision is backed by conversion psychology and data.'
    },
    {
      icon: Zap,
      title: 'Performance Obsessed',
      description: 'Lightning-fast websites that score 90+ on Core Web Vitals.'
    },
    {
      icon: Users,
      title: 'Founder-Led Team',
      description: 'Direct access to decision-makers, not account managers.'
    },
    {
      icon: BarChart3,
      title: 'Growth-Focused',
      description: 'We measure success by your business outcomes, not vanity metrics.'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Efficient processes that deliver quality without delays.'
    },
    {
      icon: Award,
      title: 'Full-Stack Expertise',
      description: 'From strategy to design to development—all under one roof.'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 px-6 relative overflow-hidden">
      <div className="gradient-orb w-[600px] h-[600px] -right-40 top-1/2 opacity-15" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="wnm-header mb-20 lg:mb-24">
          <p className="text-xs text-primary uppercase tracking-[0.4em] mb-5 font-medium">
            Why Night Media
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground tracking-tight mb-6 max-w-3xl">
            Built for Results, Not Just Looks
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl">
            We're not just designers—we're growth partners. Every project is engineered 
            to deliver measurable business outcomes.
          </p>
        </div>

        {/* Stats - horizontal row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-20 lg:mb-24">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="wnm-stat glass-card rounded-2xl p-6 lg:p-8 text-center group hover:border-primary/20 transition-all duration-500"
            >
              <div className="text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Points - 2 column clean layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 gap-y-10 lg:gap-y-12">
          {points.map((point, index) => (
            <div 
              key={index}
              className="wnm-point group"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors duration-500">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-2">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNightMedia;
