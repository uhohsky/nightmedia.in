
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Twitter, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const FounderSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.fromTo('.founder-content',
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.founder-section',
            start: 'top 70%',
          }
        }
      );

      // Image animation
      gsap.fromTo('.founder-image-wrapper',
        { opacity: 0, x: 60, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.founder-section',
            start: 'top 70%',
          }
        }
      );

      // Parallax for decorative elements
      gsap.to('.founder-orb', {
        y: -60,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="founder-section py-32 lg:py-48 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="founder-orb absolute top-1/4 left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-primary/10 via-transparent to-transparent blur-[100px]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div className="founder-content">
            <p className="text-xs text-primary uppercase tracking-[0.3em] mb-5 font-medium">Meet the Founder</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-8">
              Sky
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Building digital growth systems for ambitious brands since 2019. I believe every business deserves a website that actually converts – not just looks good.
              </p>
              <p>
                At Night Media, we combine creative excellence with performance obsession. Every pixel, every line of code, every campaign is engineered for one thing: <span className="text-foreground font-medium">growth</span>.
              </p>
              <p>
                When you work with us, you work directly with me. No junior handoffs. No communication gaps. Just focused execution that drives results.
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-4 mt-10">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card glow-border flex items-center justify-center hover-lift"
              >
                <Linkedin className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass-card glow-border flex items-center justify-center hover-lift"
              >
                <Twitter className="w-5 h-5 text-foreground" />
              </a>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
              >
                Let's talk about your project
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="founder-image-wrapper relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card">
              <img
  src="/images/team/founder.jpg"
  alt="Sky – Founder of Night Media"
  className="w-full h-full object-cover"
/>


              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-3xl glass-card-static rotate-12 opacity-30" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full glass-card-static opacity-20" />
            
            {/* Stats card */}
            <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-6">
              <div className="text-3xl font-bold gradient-text-primary mb-1">150+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
