
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';

const BlogPost = () => {
  const { slug } = useParams();

  useEffect(() => {
    gsap.fromTo('.blog-content',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
  }, []);

  const posts = {
    'influencer-marketing-roi-2025': {
      title: 'Why Influencer Marketing Drives ROI in 2025',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop',
      category: 'Marketing',
      readTime: '5 min read',
      date: 'December 15, 2024',
      author: 'Jordan Smith',
      content: `
        <p>In the rapidly evolving digital landscape of 2025, influencer marketing has emerged as one of the most powerful drivers of return on investment (ROI) for brands across all industries. Gone are the days when influencer partnerships were considered experimental or secondary to traditional advertising methods.</p>

        <h2>The Trust Factor</h2>
        <p>Modern consumers, particularly Gen Z and millennials, place significantly more trust in peer recommendations than in traditional advertising. Our recent data shows that 89% of consumers trust recommendations from influencers they follow more than branded content.</p>

        <h2>Measurable Impact</h2>
        <p>What sets today's influencer marketing apart is the ability to track and measure every aspect of campaign performance. From engagement rates to conversion tracking, brands can now calculate precise ROI figures that often exceed traditional advertising channels by 300-400%.</p>

        <h2>Authentic Storytelling</h2>
        <p>The most successful influencer campaigns in 2025 focus on authentic storytelling rather than direct product promotion. When influencers genuinely integrate products into their lifestyle content, the result is organic engagement that translates directly to sales.</p>

        <h2>Platform Diversification</h2>
        <p>Successful brands are no longer putting all their eggs in one platform basket. The most effective campaigns now span across TikTok, Instagram, YouTube, and emerging platforms, each with tailored content strategies.</p>

        <h2>Looking Forward</h2>
        <p>As we move deeper into 2025, we expect to see even more sophisticated influencer marketing strategies, with AI-powered matching algorithms and real-time performance optimization becoming standard practice.</p>
      `
    },
    'cgi-webgl-design-process': {
      title: 'How We Design with CGI & WebGL',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=600&fit=crop',
      category: 'Technology',
      readTime: '7 min read',
      date: 'December 10, 2024',
      author: 'Maya Chen',
      content: `
        <p>Creating photorealistic CGI and interactive WebGL experiences is both an art and a science. Our process combines cutting-edge technology with creative vision to produce visuals that not only look stunning but also serve strategic business objectives.</p>

        <h2>The Foundation: 3D Modeling</h2>
        <p>Every great CGI project starts with meticulous 3D modeling. We use industry-standard tools like Blender and Cinema 4D to create accurate digital representations of products, environments, or abstract concepts. The key is in the details – every surface, texture, and reflection must be perfect.</p>

        <h2>Lighting and Materials</h2>
        <p>Perhaps the most critical aspect of photorealistic CGI is lighting. We study real-world lighting conditions and recreate them digitally, often using HDRI environments to achieve authentic reflections and shadows. Material creation is equally important – the way light interacts with different surfaces can make or break the realism.</p>

        <h2>WebGL Integration</h2>
        <p>Moving from static renders to interactive WebGL experiences requires careful optimization. We use Three.js and custom shaders to bring 3D content to the web while maintaining smooth performance across devices. Every polygon counts when targeting 60fps in a browser.</p>

        <h2>Performance Optimization</h2>
        <p>The biggest challenge in WebGL development is balancing visual quality with performance. We employ techniques like level-of-detail (LOD) models, texture compression, and progressive loading to ensure our experiences work on everything from high-end desktops to mobile devices.</p>

        <h2>Testing and Iteration</h2>
        <p>Every project goes through rigorous testing across multiple devices and browsers. We use performance monitoring tools to identify bottlenecks and continuously optimize the experience throughout development.</p>
      `
    },
    /*'visual-design-trends-2025': {
      title: 'Top 10 Trends in Visual Design',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&h=600&fit=crop',
      category: 'Design',
      readTime: '6 min read',
      date: 'December 5, 2024',
      author: 'Alex Rivera',
      content: `
        <p>Visual design in 2025 is characterized by a bold blend of futuristic aesthetics and human-centered design principles. Here are the top trends shaping the digital landscape this year.</p>

        <h2>1. Glassmorphism Evolution</h2>
        <p>The glassmorphism trend has evolved beyond simple frosted glass effects. We're seeing more sophisticated implementations with dynamic opacity, color-shifting backgrounds, and interactive glass elements that respond to user input.</p>

        <h2>2. AI-Generated Art Integration</h2>
        <p>Brands are increasingly incorporating AI-generated artwork into their visual identity, creating unique, impossible-to-replicate visual elements that stand out in saturated markets.</p>

        <h2>3. 3D Typography</h2>
        <p>Three-dimensional typography is moving beyond novelty into practical application, with brands using 3D text for everything from hero sections to interactive navigation elements.</p>

        <h2>4. Micro-Interactions</h2>
        <p>The focus on micro-interactions has intensified, with designers crafting detailed animations for every user touchpoint, from button hovers to page transitions.</p>

        <h2>5. Dark Mode Mastery</h2>
        <p>Dark mode design has matured beyond simple color inversions. The best dark themes now feature carefully considered contrast ratios, accent colors, and visual hierarchy.</p>

        <h2>6. Sustainable Design</h2>
        <p>Environmental consciousness is influencing design decisions, with teams optimizing for energy efficiency and reduced data transfer while maintaining visual appeal.</p>
      `*/
        },
    'branding-agency-transform': {
      title: 'How a Branding Agency Can Transform Your Digital Identity',
      image: 'https://source.unsplash.com/featured/?branding',
      category: 'Branding',
      readTime: '6 min read',
      date: 'June 24, 2025',
      author: 'NightMedia Team',
      content: `
        <p>In today’s digital-first world, your brand identity determines how customers perceive and engage with your business...</p>
        <h2>Why Branding Matters</h2>
        <p>A well-crafted brand builds trust and drives conversions...</p>
      `
    }
  }; // <-- NO comma or ... after the last post


  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="pt-24 pb-20">
      <article className="blog-content">
        {/* Hero */}
        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link
                to="/blog"
                className="text-gray-400 hover:text-white transition-colors magnetic"
              >
                ← Back to Blog
              </Link>
            </div>
            
            <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
              <span>{post.category}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-mono font-bold mb-8 gradient-text">
              {post.title}
            </h1>
            
            <div className="glass rounded-2xl overflow-hidden mb-12">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="px-6">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
              style={{
                color: '#e5e7eb',
                lineHeight: '1.8'
              }}
            />
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 mt-16 bg-gray-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-mono font-bold mb-6 gradient-text">
              Inspired by What You Read?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's discuss how these insights can be applied to your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="glass px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all magnetic"
              >
                Start Your Project
              </Link>
              <Link
                to="/blog"
                className="border border-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all magnetic"
              >
                Read More Articles
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default BlogPost;
