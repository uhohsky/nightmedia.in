import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, TrendingUp } from 'lucide-react';

// Blog images
import influencerMarketingImg from '@/assets/blog/influencer-marketing.jpg';
import performanceMarketingImg from '@/assets/blog/performance-marketing-2025.jpg';
import aiMarketingImg from '@/assets/blog/ai-marketing-automation.jpg';
import growthSystemsImg from '@/assets/blog/growth-systems-brands.jpg';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.blog-hero-badge',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );
      
      gsap.fromTo('.blog-hero-title',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: 'power3.out' }
      );
      
      gsap.fromTo('.blog-hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' }
      );

      gsap.fromTo('.featured-post',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          ease: 'power3.out'
        }
      );

      gsap.fromTo('.blog-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.blog-grid',
            start: 'top 80%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const posts = [
    {
      title: 'Performance Marketing Trends That Will Define 2025-2026',
      excerpt: 'Discover the key shifts in paid advertising, attribution models, and AI-powered optimization that are reshaping digital marketing success.',
      image: performanceMarketingImg,
      slug: 'performance-marketing-trends-2025',
      category: 'Performance Marketing',
      readTime: '8 min read',
      date: 'Jan 28, 2026',
      featured: true,
      trending: true
    },
    {
      title: 'How AI is Revolutionizing Marketing Automation',
      excerpt: 'From predictive analytics to automated creative optimization—learn how leading brands leverage AI to scale their marketing operations.',
      image: aiMarketingImg,
      slug: 'ai-marketing-automation-guide',
      category: 'AI & Automation',
      readTime: '7 min read',
      date: 'Jan 20, 2026',
      trending: true
    },
    {
      title: 'Building Scalable Growth Systems for Brands',
      excerpt: 'A comprehensive framework for creating conversion funnels that compound growth—from acquisition to retention and beyond.',
      image: growthSystemsImg,
      slug: 'growth-systems-framework',
      category: 'Growth Strategy',
      readTime: '10 min read',
      date: 'Jan 15, 2026'
    },
    {
      title: 'Why Influencer Marketing Drives ROI in 2025',
      excerpt: 'Discover how authentic influencer partnerships are revolutionizing brand marketing and delivering unprecedented returns on investment.',
      image: influencerMarketingImg,
      slug: 'influencer-marketing-roi-2025',
      category: 'Influencer Marketing',
      readTime: '6 min read',
      date: 'Jan 10, 2026'
    }
  ];

  return (
    <section ref={sectionRef} className="pt-24 pb-20 bg-background min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-orb gradient-orb-1 absolute top-[10%] left-[10%] w-[600px] h-[600px]" />
        <div className="gradient-orb gradient-orb-2 absolute bottom-[20%] right-[5%] w-[500px] h-[500px]" />
      </div>
      
      <div className="noise-overlay" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20 pt-12">
          <div className="blog-hero-badge inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-medium">Performance Insights</span>
          </div>
          
          <h1 className="blog-hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-6">
            Performance-Driven{' '}
            <span className="gradient-text-primary">Insights</span>
          </h1>
          
          <p className="blog-hero-subtitle text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Strategies, trends, and case studies on marketing, growth, AI, and digital performance.
          </p>
        </div>

        {/* Featured Post */}
        <div className="featured-post mb-16">
          <Link
            to={`/blog/${posts[0].slug}`}
            className="block glass-card glow-border rounded-3xl overflow-hidden group hover-lift"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto lg:min-h-[400px] overflow-hidden">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="px-3 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-medium backdrop-blur-sm border border-primary/20">
                    Featured
                  </span>
                  {posts[0].trending && (
                    <span className="px-3 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-medium backdrop-blur-sm border border-accent/20 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Trending
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground">
                  <span className="text-primary font-medium">{posts[0].category}</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  <span>{posts[0].readTime}</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  <span>{posts[0].date}</span>
                </div>
                
                <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {posts[0].title}
                </h2>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {posts[0].excerpt}
                </p>
                
                <div className="flex items-center gap-2 text-primary font-medium">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Section Divider */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-xl font-semibold text-foreground">Recent Posts</h2>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Blog Grid */}
        <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {posts.slice(1).map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="blog-card glass-card glow-border rounded-2xl overflow-hidden group hover-lift"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium backdrop-blur-sm border border-primary/20">
                    {post.category}
                  </span>
                  {post.trending && (
                    <span className="px-2 py-1 rounded-full bg-accent/20 text-accent text-xs backdrop-blur-sm border border-accent/20">
                      <TrendingUp className="w-3 h-3" />
                    </span>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
                  <span>{post.readTime}</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="glass-card glow-border rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Stay Ahead of the Curve
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Get weekly insights on marketing, growth strategies, and performance optimization delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-secondary/50 border border-border rounded-full px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
            <button className="btn-primary-glow px-6 py-3.5 rounded-full text-primary-foreground font-medium whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">Ready to apply these insights to your business?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 btn-primary-glow px-8 py-4 rounded-full text-primary-foreground font-semibold group"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
