import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, TrendingUp, Target, Zap, BarChart3 } from 'lucide-react';
import { gsap } from 'gsap';
import performanceMarketingImg from '@/assets/blog/performance-marketing-2025.jpg';

const PerformanceMarketingTrends2025 = () => {
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
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary font-medium">Performance Marketing</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 min read</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Jan 28, 2026</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Performance Marketing Trends That Will Define 2025-2026
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover the key shifts in paid advertising, attribution models, and AI-powered optimization that are reshaping digital marketing success.
            </p>
          </header>

          <div className="rounded-2xl overflow-hidden mb-12">
            <img src={performanceMarketingImg} alt="Performance Marketing Trends 2025" className="w-full h-auto object-cover" />
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The performance marketing landscape is evolving faster than ever. As we move through 2025 and into 2026, brands that adapt to these shifts will dominate their markets while others struggle to keep pace.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-primary" />
              1. AI-Powered Creative Optimization
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Machine learning algorithms now generate and test thousands of ad variations in real-time. The best-performing creative elements are automatically combined, reducing creative production costs by up to 60% while improving conversion rates.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Brands leveraging AI creative tools are seeing 3-4x improvements in ROAS compared to traditional A/B testing methods. The key is feeding these systems with high-quality brand assets and clear performance objectives.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-primary" />
              2. First-Party Data Becomes Non-Negotiable
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With third-party cookies phased out and privacy regulations tightening globally, first-party data strategies are now essential. Companies with robust customer data platforms are achieving 2x better targeting precision.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Building owned audiences through value exchanges—exclusive content, early access, loyalty programs—is the foundation of sustainable performance marketing in 2025-2026.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
              <Zap className="w-6 h-6 text-primary" />
              3. Multi-Touch Attribution Evolution
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Linear and last-click attribution are obsolete. Advanced algorithmic attribution models now weight touchpoints based on actual conversion impact, giving marketers accurate insights into channel performance.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Marketing mix modeling (MMM) combined with multi-touch attribution (MTA) provides the complete picture brands need to allocate budgets effectively across channels.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6 flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-primary" />
              4. Performance Creative at Scale
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The line between brand and performance is disappearing. High-impact creative that drives emotional connection AND measurable action is the new standard. Static ads are being replaced by dynamic, personalized experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Video-first strategies dominate, with short-form content (under 15 seconds) driving the highest engagement and conversion rates across platforms.
            </p>

            <div className="glass-card glow-border rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-foreground mb-4">Key Takeaways</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  Invest in AI-powered creative tools to scale ad production
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  Build first-party data infrastructure now—it&apos;s your competitive moat
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  Upgrade to algorithmic attribution for accurate budget allocation
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">•</span>
                  Prioritize video-first, mobile-optimized creative strategies
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-6">What This Means for Your Brand</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The brands winning in 2025-2026 are those who treat performance marketing as a system—not a series of isolated campaigns. Integrating AI tools, first-party data, and advanced attribution into a cohesive growth engine is the path to sustainable scaling.
            </p>
          </div>

          <div className="glass-card glow-border rounded-2xl p-8 mt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Scale Your Performance Marketing?</h3>
            <p className="text-muted-foreground mb-6">Let&apos;s build a data-driven growth system that delivers measurable results.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 btn-primary-glow px-6 py-3 rounded-full text-primary-foreground font-semibold">
              Get Started
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PerformanceMarketingTrends2025;
