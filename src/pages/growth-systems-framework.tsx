import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Layers, Users, RefreshCw, Rocket } from 'lucide-react';
import { gsap } from 'gsap';
import growthSystemsImg from '@/assets/blog/growth-systems-brands.jpg';

const GrowthSystemsFramework = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.blog-content',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-background min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-orb gradient-orb-1 absolute top-[5%] right-[10%] w-[500px] h-[500px]" />
        <div className="gradient-orb gradient-orb-2 absolute bottom-[30%] left-[5%] w-[400px] h-[400px]" />
      </div>
      
      <div className="noise-overlay" />

      <article className="blog-content relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6 text-sm text-muted-foreground">
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary font-medium">Growth Strategy</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 10 min read</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Jan 15, 2026</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Building Scalable Growth Systems for Brands
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              A comprehensive framework for creating conversion funnels that compound growth—from acquisition to retention and beyond.
            </p>
          </header>

          <div className="rounded-2xl overflow-hidden mb-12">
            <img src={growthSystemsImg} alt="Growth Systems Framework" className="w-full h-auto object-cover" />
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Most brands focus on tactics. Winning brands build systems. A growth system compounds over time, creating sustainable competitive advantage that random campaigns never achieve.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
              <Layers className="w-6 h-6 text-primary" />
              1. The Foundation: Acquisition Engine
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Your acquisition engine should combine paid media, organic content, and partnership channels into an integrated system. Each channel should reinforce the others, creating a flywheel effect.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The key is diversification with coordination. Relying on a single channel is fragile. Building multiple channels that work together is resilient and scalable.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              2. The Conversion Layer: Optimized Funnels
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Traffic means nothing without conversion. Every funnel stage should be measured, tested, and optimized continuously. Small improvements at each stage compound into massive overall gains.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A 10% improvement at each of five funnel stages results in 61% total improvement. This is the power of systematic optimization.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
              <RefreshCw className="w-6 h-6 text-primary" />
              3. The Retention Loop: Customer Lifetime Value
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Acquiring a customer is expensive. Retaining them is profitable. Build retention into your product and marketing from day one—not as an afterthought.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Email sequences, loyalty programs, personalized recommendations, and community building all contribute to retention. The goal is making it easy and rewarding for customers to keep coming back.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
              <Rocket className="w-6 h-6 text-primary" />
              4. The Amplification Effect: Referral & Advocacy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Happy customers become your best marketing channel. Design referral mechanics into your customer experience. Make sharing and recommending your brand effortless and rewarding.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Word-of-mouth and referrals have the highest trust factor of any marketing channel. A systematic approach to generating referrals can reduce CAC by 50% or more.
            </p>

            <div className="glass-card glow-border rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-foreground mb-4">The Growth System Framework</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Acquisition</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Multi-channel paid media</li>
                    <li>• SEO & content marketing</li>
                    <li>• Strategic partnerships</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Conversion</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Landing page optimization</li>
                    <li>• Checkout flow refinement</li>
                    <li>• Personalized experiences</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Retention</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Email automation</li>
                    <li>• Loyalty programs</li>
                    <li>• Customer success</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Amplification</h4>
                  <ul className="space-y-1 text-muted-foreground text-sm">
                    <li>• Referral systems</li>
                    <li>• Review generation</li>
                    <li>• Community building</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">Building Your Growth System</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Start with one layer. Perfect it. Then add the next. Trying to build everything at once leads to mediocrity everywhere. Sequential mastery creates compound advantage over time.
            </p>
          </div>

          <div className="glass-card glow-border rounded-2xl p-8 mt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Build Your Growth System?</h3>
            <p className="text-muted-foreground mb-6">Let&apos;s create a sustainable growth engine for your brand.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 btn-primary-glow px-6 py-3 rounded-full text-primary-foreground font-semibold">
              Get Started
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default GrowthSystemsFramework;
