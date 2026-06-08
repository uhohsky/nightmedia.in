import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Sparkles, Clock, User as UserIcon } from 'lucide-react';
import NewsletterSignup from '@/components/Newsletter/NewsletterSignup';
import { fetchPublishedPosts, type Post } from '@/lib/postsApi';

const CATEGORIES = ['All', 'AI', 'SEO', 'Growth', 'Web Design', 'Branding'];

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');

  useEffect(() => {
    let cancelled = false;
    fetchPublishedPosts()
      .then((data) => { if (!cancelled) setPosts(data); })
      .catch((e) => { if (!cancelled) setError(e.message || 'Failed to load'); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const matchCat =
        category === 'All' ||
        p.category.toLowerCase().includes(category.toLowerCase());
      const matchQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        (p.excerpt || '').toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [posts, category, query]);

  return (
    <>
      <Helmet>
        <title>Insights from Night Media | Growth & AI Blog</title>
        <meta
          name="description"
          content="Frameworks, case studies, and operator insights on AI, SEO, growth, web design, and branding for Indian startups."
        />
        <link rel="canonical" href="https://night-media.lovable.app/blog" />
        <meta property="og:title" content="Insights from Night Media" />
        <meta
          property="og:description"
          content="Frameworks and operator insights on AI, growth, and high-converting websites."
        />
        <meta property="og:url" content="https://night-media.lovable.app/blog" />
        <meta property="og:type" content="website" />
      </Helmet>

      <section className="pt-24 pb-20 bg-background min-h-screen relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="gradient-orb gradient-orb-1 absolute top-[10%] left-[10%] w-[600px] h-[600px]" />
          <div className="gradient-orb gradient-orb-2 absolute bottom-[20%] right-[5%] w-[500px] h-[500px]" />
        </div>
        <div className="noise-overlay" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Hero */}
          <div className="text-center mb-14 pt-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground font-medium">
                From Builders, Not Marketers
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-6">
              Insights from{' '}
              <span className="gradient-text-primary">Night Media</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Frameworks, case studies, and operator insights on AI, growth, and
              building revenue systems that compound.
            </p>
          </div>

          {/* Filters + search */}
          <div className="mb-12 flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between relative z-20">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                    category === c
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-secondary/40 text-muted-foreground border-border hover:text-foreground hover:border-primary/40'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-72">
              <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles…"
                className="w-full bg-secondary/40 border border-border rounded-full pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                aria-label="Search articles"
              />
            </div>
          </div>

          {/* Grid */}
          {loading ? (
            <div className="text-center text-muted-foreground py-20">Loading articles…</div>
          ) : error ? (
            <div className="text-center text-destructive py-20">Couldn't load posts: {error}</div>
          ) : filtered.length === 0 ? (
            <div className="text-center text-muted-foreground py-20">
              No articles match your filters.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {filtered.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="glass-card glow-border rounded-2xl overflow-hidden group hover-lift flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden bg-secondary/40">
                    {post.featured_image_url ? (
                      <img
                        src={post.featured_image_url}
                        alt={post.alt_text || post.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/10" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium backdrop-blur-sm border border-primary/20">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                      {post.excerpt || post.meta_description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <UserIcon className="w-3.5 h-3.5" />
                        {post.author}
                      </span>
                      {post.read_time && (
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {post.read_time}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="max-w-3xl mx-auto mb-20">
            <NewsletterSignup variant="card" source="blog-index" />
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-6">
              Ready to apply these frameworks to your business?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 btn-primary-glow px-8 py-4 rounded-full text-primary-foreground font-semibold group"
            >
              <span>Book a Strategy Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
