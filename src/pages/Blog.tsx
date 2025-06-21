
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  useEffect(() => {
    gsap.fromTo('.blog-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.blog-grid',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  const posts = [
    {
      title: 'Why Influencer Marketing Drives ROI in 2025',
      excerpt: 'Discover how authentic influencer partnerships are revolutionizing brand marketing and delivering unprecedented returns on investment.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      slug: 'influencer-marketing-roi-2025',
      category: 'Marketing',
      readTime: '5 min read',
      date: 'Dec 15, 2024'
    },
    {
      title: 'How We Design with CGI & WebGL',
      excerpt: 'Behind the scenes of our creative process: from concept to photorealistic 3D visuals that stop the scroll.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
      slug: 'cgi-webgl-design-process',
      category: 'Technology',
      readTime: '7 min read',
      date: 'Dec 10, 2024'
    },
    {
      title: 'Top 10 Trends in Visual Design',
      excerpt: 'The visual design trends shaping 2025: from glassmorphism to AI-generated art, explore what\'s next in digital aesthetics.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop',
      slug: 'visual-design-trends-2025',
      category: 'Design',
      readTime: '6 min read',
      date: 'Dec 5, 2024'
    },
    {
      title: 'Case Study: Rebranding in the 3D Era',
      excerpt: 'How we transformed a traditional brand into a 3D-first digital experience, resulting in 300% increased engagement.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      slug: 'rebranding-3d-era-case-study',
      category: 'Case Study',
      readTime: '8 min read',
      date: 'Nov 28, 2024'
    }
  ];

  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-mono font-bold mb-6 gradient-text">
            NightMedia Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Insights, trends, and behind-the-scenes stories from the world of digital creativity and innovation
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Link
            to={`/blog/${posts[0].slug}`}
            className="glass rounded-3xl overflow-hidden block hover:scale-[1.02] transition-all duration-300 magnetic"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                  <span>{posts[0].category}</span>
                  <span>•</span>
                  <span>{posts[0].readTime}</span>
                  <span>•</span>
                  <span>{posts[0].date}</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  {posts[0].title}
                </h2>
                <p className="text-gray-400 text-lg">
                  {posts[0].excerpt}
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(1).map((post, index) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="blog-card glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 magnetic"
            >
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-xs text-gray-400">
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-gray-400 text-sm">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-400 mb-6">
              Subscribe to our newsletter for the latest insights on digital creativity and marketing trends.
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 glass rounded-lg px-4 py-3 bg-transparent border border-gray-600 focus:border-white focus:outline-none transition-colors"
              />
              <button className="glass px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all magnetic">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
