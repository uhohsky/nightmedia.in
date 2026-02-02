import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from 'lucide-react';

import rebranding3dImg from '@/assets/blog/rebranding-3d-era.jpg';
import cgiWebglImg from '@/assets/blog/cgi-webgl-design.jpg';

gsap.registerPlugin(ScrollTrigger);

const Rebranding3DEraCaseStudy = () => {
  const articleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.case-study-hero',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo('.case-study-content',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' }
      );

      gsap.fromTo('.stat-card',
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.stats-grid',
            start: 'top 80%'
          }
        }
      );
    }, articleRef);

    return () => ctx.revert();
  }, []);

  return (
    <article ref={articleRef} className="pt-24 pb-20 bg-background min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-orb gradient-orb-1 absolute top-[5%] right-[10%] w-[500px] h-[500px]" />
        <div className="gradient-orb gradient-orb-2 absolute bottom-[30%] left-[5%] w-[400px] h-[400px]" />
      </div>
      
      <div className="noise-overlay" />

      {/* Hero Section */}
      <div className="case-study-hero relative z-10 px-6 pt-12 pb-8">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blog</span>
          </Link>
          
          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
            <span className="px-3 py-1 rounded-full bg-primary/20 text-primary font-medium">
              Case Study
            </span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>November 28, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>Night Media Team</span>
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-10 leading-tight">
            Case Study: Rebranding in the 3D Era
          </h1>
          
          {/* Featured Image */}
          <div className="glass-card glow-border rounded-2xl overflow-hidden">
            <img
              src={rebranding3dImg}
              alt="3D Rebranding Case Study"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="case-study-content relative z-10 px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-12">
            How we transformed a traditional brand into a 3D-first digital experience, resulting in 300% increased engagement and revolutionary user interaction.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">The Challenge</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our client, a luxury furniture manufacturer, approached us with a traditional brand identity that was not resonating with modern consumers. Their 2D product catalogs and static website were failing to showcase the craftsmanship and premium quality of their pieces.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-12">
            The challenge was clear: transform their brand into a cutting-edge, 3D-first experience that would captivate audiences and drive conversions in the digital age.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Our Approach</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            We developed a comprehensive 3D branding strategy that included:
          </p>
          
          <ul className="list-disc pl-6 mb-12 space-y-3 text-muted-foreground">
            <li>Photorealistic 3D product modeling and visualization</li>
            <li>Interactive WebGL experiences for product exploration</li>
            <li>Immersive AR try-before-you-buy features</li>
            <li>3D animated brand storytelling elements</li>
            <li>Responsive 3D interface design across all touchpoints</li>
          </ul>

          <div className="glass-card glow-border rounded-2xl overflow-hidden my-12">
            <img
              src={cgiWebglImg}
              alt="3D Design Process"
              className="w-full h-64 object-cover"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">The Implementation</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our team rebuilt the entire visual identity using cutting-edge technologies:
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-4">3D Asset Creation</h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Every product was meticulously recreated in 3D using advanced modeling techniques. We captured material properties, lighting behaviors, and surface details to achieve photorealistic quality that surpassed traditional photography.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-4">WebGL Integration</h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Using Three.js and custom shaders, we developed interactive 3D experiences that allowed customers to explore products from every angle, customize materials in real-time, and visualize items in their own spaces.
          </p>

          <h3 className="text-xl font-semibold text-foreground mb-4">Performance Optimization</h3>
          <p className="text-muted-foreground leading-relaxed mb-12">
            We implemented advanced optimization techniques including progressive loading, level-of-detail systems, and efficient texture compression to ensure smooth performance across all devices.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">The Results</h2>
          
          {/* Stats Grid */}
          <div className="stats-grid grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="stat-card glass-card glow-border rounded-2xl p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text-primary mb-2">300%</div>
              <div className="text-muted-foreground">Increased Engagement</div>
            </div>
            <div className="stat-card glass-card glow-border rounded-2xl p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text-primary mb-2">150%</div>
              <div className="text-muted-foreground">Higher Conversion Rate</div>
            </div>
            <div className="stat-card glass-card glow-border rounded-2xl p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text-primary mb-2">5x</div>
              <div className="text-muted-foreground">Longer Session Duration</div>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-12">
            The transformation was remarkable. Session durations increased by 500%, bounce rates decreased by 60%, and most importantly, conversion rates improved by 150%. Customers spent significantly more time exploring products and were more confident in their purchasing decisions.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Key Takeaways</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This project demonstrated the power of 3D technology in modern branding:
          </p>
          
          <ul className="list-disc pl-6 mb-12 space-y-3 text-muted-foreground">
            <li>3D experiences create emotional connections that traditional media cannot achieve</li>
            <li>Interactive elements significantly increase user engagement and time on site</li>
            <li>Photorealistic 3D can reduce return rates by giving customers accurate expectations</li>
            <li>Performance optimization is crucial for 3D web experiences</li>
            <li>AR integration bridges the gap between digital and physical shopping</li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">The Future of Branding</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            This case study represents a shift toward immersive, interactive branding experiences. As web technologies continue to advance and consumer expectations evolve, 3D-first design approaches will become the standard for premium brands looking to differentiate themselves in crowded markets.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <div className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card glow-border rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Let us help you create 3D experiences that revolutionize your digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 btn-primary-glow px-8 py-4 rounded-full text-primary-foreground font-semibold group"
              >
                <span>Start Your 3D Journey</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 glass-card glow-border px-8 py-4 rounded-full text-foreground font-medium hover:bg-secondary/50 transition-colors"
              >
                Read More Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Rebranding3DEraCaseStudy;
