import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Clock, Calendar, User as UserIcon } from 'lucide-react';
import NewsletterSignup from '@/components/Newsletter/NewsletterSignup';
import AiAuditCTA from '@/components/Blog/AiAuditCTA';
import { fetchPostBySlug, fetchRelatedPosts, type Post } from '@/lib/postsApi';
import { renderMarkdown } from '@/lib/markdown';

interface TocEntry { id: string; text: string; level: number; }

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [related, setRelated] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setNotFound(false);
    fetchPostBySlug(slug)
      .then(async (p) => {
        if (!p) { setNotFound(true); return; }
        setPost(p);
        try {
          const rel = await fetchRelatedPosts(p.category, p.slug, 3);
          setRelated(rel);
        } catch { /* non-critical */ }
      })
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
    window.scrollTo(0, 0);
  }, [slug]);

  // Render markdown -> HTML, inject heading IDs, build TOC
  const { html, toc } = useMemo(() => {
    if (!post) return { html: '', toc: [] as TocEntry[] };
    let raw = renderMarkdown(post.body || '');
    const entries: TocEntry[] = [];
    raw = raw.replace(/<h([23])>([\s\S]*?)<\/h\1>/g, (_, level, inner) => {
      const text = inner.replace(/<[^>]+>/g, '').trim();
      const id = slugify(text);
      entries.push({ id, text, level: Number(level) });
      return `<h${level} id="${id}">${inner}</h${level}>`;
    });
    return { html: raw, toc: entries };
  }, [post]);

  // Inject mid-article CTAs by splitting on the first <h2> after halfway
  const { topHtml, bottomHtml } = useMemo(() => {
    if (!html) return { topHtml: '', bottomHtml: '' };
    const h2Matches = [...html.matchAll(/<h2[\s\S]*?<\/h2>/g)];
    if (h2Matches.length < 2) return { topHtml: html, bottomHtml: '' };
    const midIdx = Math.floor(h2Matches.length / 2);
    const splitAt = h2Matches[midIdx].index ?? 0;
    return { topHtml: html.slice(0, splitAt), bottomHtml: html.slice(splitAt) };
  }, [html]);

  if (loading) {
    return (
      <section className="pt-32 pb-20 min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center text-muted-foreground">
          Loading article…
        </div>
      </section>
    );
  }

  if (notFound || !post) {
    return (
      <section className="pt-32 pb-20 min-h-screen bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Article not found</h1>
          <p className="text-muted-foreground mb-8">
            The post you're looking for doesn't exist or was unpublished.
          </p>
          <Link to="/blog" className="text-primary hover:underline">
            ← Back to all articles
          </Link>
        </div>
      </section>
    );
  }

  const canonical = `https://night-media.lovable.app/blog/${post.slug}`;
  const description = post.meta_description || post.excerpt || post.title;
  const datePublished = new Date(post.published_at).toISOString();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description,
    image: post.featured_image_url || undefined,
    datePublished,
    dateModified: new Date(post.updated_at).toISOString(),
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: 'Night Media',
      logo: {
        '@type': 'ImageObject',
        url: 'https://night-media.lovable.app/n-icon-white.svg',
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Night Media India</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonical} />
        {post.featured_image_url && (
          <meta property="og:image" content={post.featured_image_url} />
        )}
        <meta property="article:published_time" content={datePublished} />
        <meta property="article:section" content={post.category} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      </Helmet>

      <article className="pt-24 pb-20 bg-background min-h-screen relative">
        <div className="noise-overlay" />

        {/* Hero image */}
        <div className="max-w-6xl mx-auto px-6 mb-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </Link>
          {post.featured_image_url ? (
            <div className="rounded-3xl overflow-hidden aspect-[16/8] bg-secondary/40">
              <img
                src={post.featured_image_url}
                alt={post.alt_text || post.title}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="rounded-3xl aspect-[16/8] bg-gradient-to-br from-primary/20 via-accent/10 to-background border border-border" />
          )}
        </div>

        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12">
          {/* Main content */}
          <div className="max-w-[720px] mx-auto lg:mx-0 w-full">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-medium border border-primary/20">
                {post.category}
              </span>
              {post.read_time && (
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />{post.read_time}
                </span>
              )}
              <span className="inline-flex items-center gap-1.5">
                <UserIcon className="w-4 h-4" />{post.author}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(post.published_at).toLocaleDateString('en-US', {
                  year: 'numeric', month: 'long', day: 'numeric',
                })}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-10 leading-tight">
              {post.title}
            </h1>

            <div className="prose prose-invert prose-lg max-w-none blog-prose">
              <div dangerouslySetInnerHTML={{ __html: topHtml }} />

              {bottomHtml && (
                <div className="my-12">
                  <NewsletterSignup variant="card" source={`post:${post.slug}`} />
                </div>
              )}

              {bottomHtml && <div dangerouslySetInnerHTML={{ __html: bottomHtml }} />}
            </div>

            <AiAuditCTA />

            {/* Author bio */}
            <div className="glass-card rounded-2xl p-6 my-12 flex items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-xl">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-foreground">{post.author}</div>
                <p className="text-sm text-muted-foreground">
                  Operators behind Night Media — building AI-powered websites and
                  growth systems for Indian founders.
                </p>
              </div>
            </div>

            {/* Related */}
            {related.length > 0 && (
              <div className="mt-16">
                <h2 className="text-xl font-semibold text-foreground mb-6">
                  Related articles
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {related.map((r) => (
                    <Link
                      key={r.id}
                      to={`/blog/${r.slug}`}
                      className="glass-card glow-border rounded-xl p-5 hover-lift group"
                    >
                      <span className="text-xs text-primary font-medium">{r.category}</span>
                      <h3 className="text-sm font-semibold text-foreground mt-2 group-hover:text-primary transition-colors line-clamp-3">
                        {r.title}
                      </h3>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky TOC (desktop only) */}
          {toc.length > 0 && (
            <aside className="hidden lg:block">
              <div className="sticky top-28">
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium mb-4">
                  On this page
                </div>
                <nav className="space-y-2 text-sm border-l border-border pl-4">
                  {toc.map((t) => (
                    <a
                      key={t.id}
                      href={`#${t.id}`}
                      className={`block hover:text-primary transition-colors text-muted-foreground ${
                        t.level === 3 ? 'pl-3 text-xs' : ''
                      }`}
                    >
                      {t.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}
        </div>
      </article>
    </>
  );
};

export default BlogPost;
