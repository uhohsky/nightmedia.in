import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from 'lucide-react';

// AI-generated blog images
import influencerMarketingImg from '@/assets/blog/influencer-marketing.jpg';
import cgiWebglImg from '@/assets/blog/cgi-webgl-design.jpg';
import visualDesignImg from '@/assets/blog/visual-design-trends.jpg';
import rebranding3dImg from '@/assets/blog/rebranding-3d-era.jpg';

const BlogPost = () => {
  const { slug } = useParams();
  const articleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.blog-post-hero',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );
      
      gsap.fromTo('.blog-post-content',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' }
      );
    }, articleRef);

    return () => ctx.revert();
  }, [slug]);

  const posts: Record<string, {
    title: string;
    image: string;
    category: string;
    readTime: string;
    date: string;
    author: string;
    content: string;
  }> = {
    'influencer-marketing-roi-2025': {
      title: 'Why Influencer Marketing Drives ROI in 2025',
      image: influencerMarketingImg,
      category: 'Marketing',
      readTime: '5 min read',
      date: 'December 15, 2024',
      author: 'Night Media Team',
      content: `
        <p class="lead">In the rapidly evolving digital landscape of 2025, influencer marketing has emerged as one of the most powerful drivers of return on investment (ROI) for brands across all industries. Gone are the days when influencer partnerships were considered experimental or secondary to traditional advertising methods.</p>

        <h2>The Trust Factor</h2>
        <p>Modern consumers, particularly Gen Z and millennials, place significantly more trust in peer recommendations than in traditional advertising. Our recent data shows that 89% of consumers trust recommendations from influencers they follow more than branded content.</p>
        <p>This shift in consumer behavior has fundamentally changed how brands need to approach their marketing strategies. The authenticity that influencers bring cannot be replicated through traditional advertising channels.</p>

        <h2>Measurable Impact</h2>
        <p>What sets today's influencer marketing apart is the ability to track and measure every aspect of campaign performance. From engagement rates to conversion tracking, brands can now calculate precise ROI figures that often exceed traditional advertising channels by 300-400%.</p>
        <p>Advanced attribution models allow marketers to understand exactly which influencer touchpoints contributed to conversions, enabling continuous optimization and improved performance over time.</p>

        <h2>Authentic Storytelling</h2>
        <p>The most successful influencer campaigns in 2025 focus on authentic storytelling rather than direct product promotion. When influencers genuinely integrate products into their lifestyle content, the result is organic engagement that translates directly to sales.</p>

        <h2>Platform Diversification</h2>
        <p>Successful brands are no longer putting all their eggs in one platform basket. The most effective campaigns now span across TikTok, Instagram, YouTube, and emerging platforms, each with tailored content strategies that leverage the unique strengths of each platform.</p>

        <h2>Looking Forward</h2>
        <p>As we move deeper into 2025, we expect to see even more sophisticated influencer marketing strategies, with AI-powered matching algorithms and real-time performance optimization becoming standard practice. Brands that embrace these changes will see unprecedented returns on their marketing investments.</p>
      `
    },
    'cgi-webgl-design-process': {
      title: 'How We Design with CGI & WebGL',
      image: cgiWebglImg,
      category: 'Technology',
      readTime: '7 min read',
      date: 'December 10, 2024',
      author: 'Night Media Team',
      content: `
        <p class="lead">Creating photorealistic CGI and interactive WebGL experiences is both an art and a science. Our process combines cutting-edge technology with creative vision to produce visuals that not only look stunning but also serve strategic business objectives.</p>

        <h2>The Foundation: 3D Modeling</h2>
        <p>Every great CGI project starts with meticulous 3D modeling. We use industry-standard tools like Blender and Cinema 4D to create accurate digital representations of products, environments, or abstract concepts. The key is in the details – every surface, texture, and reflection must be perfect.</p>
        <p>Our modeling process involves multiple rounds of refinement, ensuring that every polygon serves a purpose and contributes to the final visual impact.</p>

        <h2>Lighting and Materials</h2>
        <p>Perhaps the most critical aspect of photorealistic CGI is lighting. We study real-world lighting conditions and recreate them digitally, often using HDRI environments to achieve authentic reflections and shadows.</p>
        <p>Material creation is equally important – the way light interacts with different surfaces can make or break the realism. We spend considerable time perfecting material properties to achieve that photorealistic quality.</p>

        <h2>WebGL Integration</h2>
        <p>Moving from static renders to interactive WebGL experiences requires careful optimization. We use Three.js and custom shaders to bring 3D content to the web while maintaining smooth performance across devices. Every polygon counts when targeting 60fps in a browser.</p>

        <h2>Performance Optimization</h2>
        <p>The biggest challenge in WebGL development is balancing visual quality with performance. We employ techniques like level-of-detail (LOD) models, texture compression, and progressive loading to ensure our experiences work on everything from high-end desktops to mobile devices.</p>

        <h2>Testing and Iteration</h2>
        <p>Every project goes through rigorous testing across multiple devices and browsers. We use performance monitoring tools to identify bottlenecks and continuously optimize the experience throughout development.</p>
      `
    },
    'visual-design-trends-2025': {
      title: 'Top 10 Trends in Visual Design',
      image: visualDesignImg,
      category: 'Design',
      readTime: '6 min read',
      date: 'December 5, 2024',
      author: 'Night Media Team',
      content: `
        <p class="lead">Visual design in 2025 is characterized by a bold blend of futuristic aesthetics and human-centered design principles. Here are the top trends shaping the digital landscape this year.</p>

        <h2>1. Glassmorphism Evolution</h2>
        <p>The glassmorphism trend has evolved beyond simple frosted glass effects. We're seeing more sophisticated implementations with dynamic opacity, color-shifting backgrounds, and interactive glass elements that respond to user input.</p>

        <h2>2. AI-Generated Art Integration</h2>
        <p>Brands are increasingly incorporating AI-generated artwork into their visual identity, creating unique, impossible-to-replicate visual elements that stand out in saturated markets.</p>

        <h2>3. 3D Typography</h2>
        <p>Three-dimensional typography is moving beyond novelty into practical application, with brands using 3D text for everything from hero sections to interactive navigation elements.</p>

        <h2>4. Micro-Interactions</h2>
        <p>The focus on micro-interactions has intensified, with designers crafting detailed animations for every user touchpoint, from button hovers to page transitions. These small details significantly impact user experience and brand perception.</p>

        <h2>5. Dark Mode Mastery</h2>
        <p>Dark mode design has matured beyond simple color inversions. The best dark themes now feature carefully considered contrast ratios, accent colors, and visual hierarchy that work seamlessly in low-light environments.</p>

        <h2>6. Sustainable Design</h2>
        <p>Environmental consciousness is influencing design decisions, with teams optimizing for energy efficiency and reduced data transfer while maintaining visual appeal. This includes darker color palettes and optimized image formats.</p>
      `
    },
    'rebranding-3d-era-case-study': {
      title: 'Case Study: Rebranding in the 3D Era',
      image: rebranding3dImg,
      category: 'Case Study',
      readTime: '8 min read',
      date: 'November 28, 2024',
      author: 'Night Media Team',
      content: `
        <p class="lead">When a traditional brand approached us for a complete digital transformation, we knew we had an opportunity to showcase the power of 3D-first design thinking. This case study details our approach and the remarkable results.</p>

        <h2>The Challenge</h2>
        <p>Our client had been in business for over two decades with a loyal customer base, but their digital presence felt dated and failed to resonate with younger audiences. They needed a complete brand refresh that would honor their heritage while positioning them for the future.</p>

        <h2>Our Approach</h2>
        <p>We began with an extensive discovery phase, interviewing stakeholders, analyzing competitors, and conducting user research. This foundation informed our creative direction: a 3D-first visual identity that would set them apart in their industry.</p>

        <h2>The 3D Brand System</h2>
        <p>We created a comprehensive 3D brand system including animated logos, product visualizations, and interactive elements. Every asset was designed to work across digital platforms while maintaining brand consistency.</p>

        <h2>Implementation</h2>
        <p>The rollout included a new website with WebGL-powered 3D experiences, social media assets, and marketing materials. We provided detailed brand guidelines to ensure consistency across all touchpoints.</p>

        <h2>Results</h2>
        <p>Within three months of launch, the client saw a 300% increase in website engagement, 150% growth in social media following, and a 200% improvement in lead generation. The rebrand successfully attracted younger demographics while maintaining their existing customer base.</p>
      `
    }
  };

  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return (
      <div className="pt-32 pb-20 bg-background min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary hover:underline">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article ref={articleRef} className="pt-24 pb-20 bg-background min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-orb gradient-orb-1 absolute top-[5%] right-[10%] w-[500px] h-[500px]" />
        <div className="gradient-orb gradient-orb-2 absolute bottom-[30%] left-[5%] w-[400px] h-[400px]" />
      </div>
      
      <div className="noise-overlay" />

      {/* Hero Section */}
      <div className="blog-post-hero relative z-10 px-6 pt-12 pb-8">
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
              {post.category}
            </span>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
          </div>
          
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-10 leading-tight">
            {post.title}
          </h1>
          
          {/* Featured Image */}
          <div className="glass-card glow-border rounded-2xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="blog-post-content relative z-10 px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <div 
            className="prose prose-lg max-w-none
              prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-foreground
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              [&_.lead]:text-xl [&_.lead]:md:text-2xl [&_.lead]:text-foreground [&_.lead]:leading-relaxed [&_.lead]:mb-8"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card glow-border rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Inspired by What You Read?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Let us help you apply these insights to grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 btn-primary-glow px-8 py-4 rounded-full text-primary-foreground font-semibold group"
              >
                <span>Start Your Project</span>
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

export default BlogPost;
