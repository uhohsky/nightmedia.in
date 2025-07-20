
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import PageHeader from '../components/Layout/PageHeader';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  useEffect(() => {
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
      date: 'Dec 15, 2024',
      color: 'from-pink-500 to-red-500',
      featured: true
    },
    {
      title: 'How We Design with CGI & WebGL',
      excerpt: 'Behind the scenes of our creative process: from concept to photorealistic 3D visuals that stop the scroll.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
      slug: 'cgi-webgl-design-process',
      category: 'Technology',
      readTime: '7 min read',
      date: 'Dec 10, 2024',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Top 10 Trends in Visual Design',
      excerpt: 'The visual design trends shaping 2025: from glassmorphism to AI-generated art, explore what\'s next in digital aesthetics.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop',
      slug: 'visual-design-trends-2025',
      category: 'Design',
      readTime: '6 min read',
      date: 'Dec 5, 2024',
      color: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Case Study: Rebranding in the 3D Era',
      excerpt: 'How we transformed a traditional brand into a 3D-first digital experience, resulting in 300% increased engagement.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
      slug: 'rebranding-3d-era-case-study',
      category: 'Case Study',
      readTime: '8 min read',
      date: 'Nov 28, 2024',
      color: 'from-orange-500 to-red-600'
    }
  ];

  return (
    <div className="pt-24 pb-20 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <PageHeader
          badge="BLOG"
          title="Insights & Creative Stories"
          subtitle="Insights, trends, and behind-the-scenes stories from the world of digital creativity and innovation"
        />

        {/* Featured Post */}
        <div className="mb-16">
          <Link
            to={`/blog/${posts[0].slug}`}
            className="block bg-white shadow-lg hover:shadow-2xl transition-all duration-700 rounded-2xl overflow-hidden group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto overflow-hidden">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-white text-black px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{posts[0].category}</span>
                    <span>•</span>
                    <span>{posts[0].readTime}</span>
                    <span>•</span>
                    <span>{posts[0].date}</span>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center">
                    <div className="w-4 h-4 border-t-2 border-r-2 border-black transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></div>
                  </div>
                </div>
                <h2 className="text-3xl lg:text-4xl font-light text-black mb-4 group-hover:text-gray-600 transition-colors duration-300">
                  {posts[0].title}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
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
              className="blog-card bg-white shadow-lg hover:shadow-2xl transition-all duration-700 rounded-2xl overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-black px-3 py-1 rounded-full text-xs font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className="w-3 h-3 border-t-2 border-r-2 border-black transform rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></div>
                  </div>
                </div>
                <h3 className="text-xl font-light text-black mb-3 group-hover:text-gray-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mt-16">
          <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-light text-black mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our newsletter for the latest insights on digital creativity and marketing trends.
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 border border-gray-300 rounded-full px-4 py-3 focus:border-black focus:outline-none transition-colors"
              />
              <button className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-900 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <Link
            to="/contact"
            className="inline-flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition-colors duration-300 group"
          >
            <span>Start Your Project</span>
            <div className="w-2 h-2 bg-white rounded-full group-hover:translate-x-1 transition-transform duration-300"></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
