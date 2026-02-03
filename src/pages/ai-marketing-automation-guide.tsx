import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Bot, Brain, Cpu, LineChart } from 'lucide-react';
import { gsap } from 'gsap';
import aiMarketingImg from '@/assets/blog/ai-marketing-automation.jpg';

const AIMarketingAutomationGuide = () => {
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
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary font-medium">AI & Automation</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 min read</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Jan 20, 2026</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              How AI is Revolutionizing Marketing Automation
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              From predictive analytics to automated creative optimization—learn how leading brands leverage AI to scale their marketing operations.
            </p>
          </header>

          <div className="rounded-2xl overflow-hidden mb-12">
            <img src={aiMarketingImg} alt="AI Marketing Automation" className="w-full h-auto object-cover" />
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Artificial intelligence has moved from buzzword to business-critical infrastructure. In 2026, AI-powered marketing automation isn&apos;t optional—it&apos;s the baseline for competitive brands.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
              <Brain className="w-6 h-6 text-primary" />
              1. Predictive Customer Journey Mapping
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              AI models now predict customer behavior with 85%+ accuracy, enabling brands to deliver the right message at the exact moment of maximum impact. This goes beyond simple segmentation—we&apos;re talking about individual-level prediction at scale.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Leading e-commerce brands report 40% increases in conversion rates after implementing predictive journey orchestration powered by machine learning.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
              <Bot className="w-6 h-6 text-primary" />
              2. Autonomous Campaign Management
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              AI systems now manage entire campaign lifecycles—from budget allocation to bid optimization to creative rotation—with minimal human intervention. Marketing teams shift from execution to strategy and oversight.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The result? Agencies report 70% reduction in campaign management time while achieving 25% better performance metrics.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
              <Cpu className="w-6 h-6 text-primary" />
              3. Dynamic Content Personalization
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every email, landing page, and ad unit can now be dynamically personalized based on user behavior, preferences, and predicted intent. One-size-fits-all marketing is officially dead.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Brands implementing AI-driven personalization see average order values increase by 35% and customer lifetime values grow by 50% over 12 months.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
              <LineChart className="w-6 h-6 text-primary" />
              4. Real-Time Performance Optimization
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              AI continuously analyzes performance data and makes micro-adjustments every few seconds. What used to take days of analysis and manual optimization now happens automatically in real-time.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              This level of optimization was impossible with human-only teams. AI systems process millions of data points per hour to find performance opportunities humans would miss.
            </p>

            <div className="glass-card glow-border rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-foreground mb-4">Implementation Checklist</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  Audit your current data infrastructure and identify gaps
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  Start with one high-impact use case (e.g., email personalization)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  Ensure clean, unified customer data before deploying AI tools
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  Build internal AI literacy—your team needs to understand the tools
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">The Human + AI Partnership</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The most successful marketing teams treat AI as a force multiplier, not a replacement. Human creativity, strategic thinking, and brand intuition remain essential. AI handles the scale, speed, and data processing that humans simply can&apos;t match.
            </p>
          </div>

          <div className="glass-card glow-border rounded-2xl p-8 mt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Implement AI in Your Marketing?</h3>
            <p className="text-muted-foreground mb-6">Let&apos;s build intelligent automation systems that scale your growth.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 btn-primary-glow px-6 py-3 rounded-full text-primary-foreground font-semibold">
              Get Started
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default AIMarketingAutomationGuide;
