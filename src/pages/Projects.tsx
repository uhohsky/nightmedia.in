import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import NightMediaIcon from '@/components/Logo/NightMediaIcon';
import NDivider from '@/components/Visuals/NDivider';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 'synfiction-ai',
    number: '01',
    title: 'SYNFICTION.AI',
    category: 'AI Product · Web · Development',
    year: '2025',
    description:
      'A stealth AI startup needed a product-led website that could explain complex technology simply — and convert technical users into early adopters.',
    image: '/images/projects/sfai.jpg',
    slug: 'synfiction-ai',
    externalLink: 'https://synfiction.ai',
    metrics: [
      { label: 'Signup lift', value: '+312%' },
      { label: 'Time-to-demo', value: '11s' },
    ],
  },
  {
    id: 'aidrum-fashion',
    number: '02',
    title: 'Aidrum Fashion',
    category: 'eCommerce · Web · Branding',
    year: '2025',
    description:
      'A D2C fashion brand struggling with cart abandonment. We rebuilt the funnel — 40% conversion lift in 60 days.',
    image: '/images/projects/ecommerce-fashion.jpg',
    slug: 'aidrum-fashion',
    metrics: [
      { label: 'Conversion', value: '+40%' },
      { label: 'AOV', value: '+22%' },
    ],
  },
  {
    id: 'saas-analytics',
    number: '03',
    title: 'SaaS Analytics Platform',
    category: 'Product Design · UI/UX · Dev',
    year: '2024',
    description:
      'Series A SaaS company needed to reduce churn. New dashboard UX cut support tickets by 60% and improved activation.',
    image: '/images/projects/saas-dashboard.jpg',
    slug: 'saas-analytics',
    metrics: [
      { label: 'Tickets', value: '−60%' },
      { label: 'Activation', value: '+48%' },
    ],
  },
  {
    id: 'blamy-kuby',
    number: '04',
    title: 'Blamy Kuby Cosmetics',
    category: 'Brand · Packaging · Strategy',
    year: '2024',
    description:
      'Luxury cosmetics brand entering a crowded market. Positioning and identity that justified 3× premium pricing.',
    image: '/images/projects/brand-identity.jpg',
    slug: 'blamy-kuby',
    metrics: [
      { label: 'Price index', value: '3×' },
      { label: 'Retention', value: '+35%' },
    ],
  },
  {
    id: 'realestate-platform',
    number: '05',
    title: 'Luxury Real Estate',
    category: 'Web · Development · SEO',
    year: '2024',
    description:
      'High-end real estate platform where leads were leaking. New system generated 200+ qualified inquiries monthly.',
    image: '/images/projects/real-estate.jpg',
    slug: 'luxury-realestate',
    metrics: [
      { label: 'Inquiries', value: '200+/mo' },
      { label: 'Organic', value: '+180%' },
    ],
  },
  {
    id: 'fitness-wellness',
    number: '06',
    title: 'Fitness & Wellness App',
    category: 'Mobile · UI/UX · Product',
    year: '2023',
    description:
      'Wellness app with retention problems. UX overhaul increased 30-day retention from 18% to 47%.',
    image: '/images/projects/fitness-app.jpg',
    slug: 'fitness-wellness',
    metrics: [
      { label: 'D30 retention', value: '47%' },
      { label: 'DAU/MAU', value: '+2.1×' },
    ],
  },
];

const Projects = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      gsap.fromTo(
        '.hero-eyebrow',
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
      );
      gsap.fromTo(
        '.hero-word',
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.08, ease: 'power4.out', delay: 0.1 }
      );
      gsap.fromTo(
        '.hero-sub',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power3.out' }
      );

      // Project rows — pinned image, sliding content
      gsap.utils.toArray<HTMLElement>('.project-row').forEach((row) => {
        const image = row.querySelector('.project-media');
        const content = row.querySelector('.project-copy');

        gsap.fromTo(
          image,
          { scale: 1.15, opacity: 0.6 },
          {
            scale: 1,
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: row,
              start: 'top 85%',
              end: 'bottom 20%',
              scrub: 1,
            },
          }
        );

        gsap.fromTo(
          content?.querySelectorAll('.copy-item') ?? [],
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: row,
              start: 'top 70%',
            },
          }
        );
      });

      // Marquee
      if (marqueeRef.current) {
        const inner = marqueeRef.current.querySelector('.marquee-inner');
        if (inner) {
          gsap.to(inner, {
            xPercent: -50,
            ease: 'none',
            duration: 30,
            repeat: -1,
          });
        }
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>Portfolio & Case Studies | Night Media</title>
        <meta
          name="description"
          content="Selected work from Night Media: high-converting websites, growth systems, and brand campaigns with measurable outcomes."
        />
        <link rel="canonical" href="https://night-media.lovable.app/projects" />
        <meta property="og:title" content="Portfolio & Case Studies | Night Media" />
        <meta
          property="og:description"
          content="Selected work from Night Media: high-converting websites, growth systems, and brand campaigns."
        />
        <meta property="og:url" content="https://night-media.lovable.app/projects" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div ref={rootRef} className="bg-background min-h-screen relative overflow-hidden">
        {/* HERO */}
        <section className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 px-6">
          <div className="max-w-[1400px] mx-auto">
            <div className="hero-eyebrow flex items-center gap-3 mb-10">
              <NightMediaIcon variant="metallic" size={18} />
              <span className="text-[11px] font-mono uppercase tracking-[0.32em] text-muted-foreground">
                Selected Work / 2023 — 2026
              </span>
            </div>

            <h1 className="font-display font-semibold tracking-[-0.03em] text-foreground leading-[0.92] text-[clamp(3rem,10vw,10rem)]">
              <span className="hero-word inline-block mr-4">Systems</span>
              <span className="hero-word inline-block mr-4 text-metallic">shipped.</span>
              <br />
              <span className="hero-word inline-block mr-4">Numbers</span>
              <span className="hero-word inline-block italic font-light">defended.</span>
            </h1>

            <div className="hero-sub mt-12 max-w-2xl grid grid-cols-[1fr_auto] gap-10 items-end">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Real problems. Real systems. Measurable outcomes. Each project answers one question:
                can Night Media scale a business?
              </p>
              <div className="hidden md:flex flex-col text-right">
                <span className="text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground">
                  Scroll
                </span>
                <span className="text-4xl font-display text-metallic leading-none mt-1">↓</span>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div
          ref={marqueeRef}
          className="border-y border-border py-6 overflow-hidden bg-card/40 backdrop-blur-sm"
          aria-hidden="true"
        >
          <div className="marquee-inner flex whitespace-nowrap gap-14 text-[13px] font-mono uppercase tracking-[0.28em] text-muted-foreground">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex gap-14 shrink-0">
                {[
                  'Websites that convert',
                  'AI growth infrastructure',
                  'Founder-led execution',
                  'Performance systems',
                  'Editorial brand identity',
                  'India → Global',
                ].map((t, j) => (
                  <span key={`${i}-${j}`} className="inline-flex items-center gap-6">
                    {t}
                    <NightMediaIcon variant="metallic" size={12} />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* PROJECT ROWS */}
        <section className="relative py-24 lg:py-32 px-6">
          <div className="max-w-[1400px] mx-auto space-y-32 lg:space-y-48">
            {projects.map((project, idx) => {
              const reversed = idx % 2 === 1;
              const Wrapper: React.ElementType = project.externalLink ? 'a' : Link;
              const wrapperProps = project.externalLink
                ? { href: project.externalLink, target: '_blank', rel: 'noopener noreferrer' }
                : { to: `/projects/${project.slug}` };

              return (
                <article
                  key={project.id}
                  className={`project-row grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                    reversed ? 'lg:[&>.project-media]:order-2' : ''
                  }`}
                >
                  {/* Media */}
                  <Wrapper
                    {...(wrapperProps as any)}
                    className="project-media group relative col-span-1 lg:col-span-7 block overflow-hidden rounded-2xl surface-card"
                  >
                    <div className="relative aspect-[16/11] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-background/10 to-transparent" />

                      <div className="absolute top-6 left-6 flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full border border-white/20 bg-background/60 backdrop-blur text-[11px] font-mono uppercase tracking-[0.22em] text-foreground">
                          {project.category}
                        </span>
                      </div>

                      <div className="absolute top-6 right-6 w-11 h-11 rounded-full bg-background/70 backdrop-blur border border-border flex items-center justify-center transition-transform duration-500 group-hover:rotate-45">
                        <ArrowUpRight className="w-4 h-4 text-foreground" />
                      </div>

                      <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                        <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-muted-foreground">
                          {project.year}
                        </span>
                        <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-muted-foreground">
                          {project.number} / {String(projects.length).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </Wrapper>

                  {/* Copy */}
                  <div className="project-copy col-span-1 lg:col-span-5 space-y-8">
                    <div className="copy-item flex items-center gap-4">
                      <span className="font-mono text-metallic text-sm tracking-widest">
                        {project.number}
                      </span>
                      <span className="h-px flex-1 bg-border" />
                      <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-muted-foreground">
                        {project.year}
                      </span>
                    </div>

                    <h2 className="copy-item font-display font-semibold text-foreground text-4xl md:text-5xl lg:text-6xl leading-[1.02] tracking-[-0.02em]">
                      {project.title}
                    </h2>

                    <p className="copy-item text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
                      {project.description}
                    </p>

                    <div className="copy-item grid grid-cols-2 gap-4 max-w-md">
                      {project.metrics.map((m, i) => (
                        <div
                          key={i}
                          className="surface-card p-5 rounded-xl border border-border"
                        >
                          <div className="text-2xl md:text-3xl font-display font-semibold text-metallic tracking-tight">
                            {m.value}
                          </div>
                          <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-muted-foreground mt-2">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <Wrapper
                      {...(wrapperProps as any)}
                      className="copy-item inline-flex items-center gap-3 text-sm font-medium text-foreground group border-b border-border pb-2 hover:border-primary transition-colors"
                    >
                      <span>View case study</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </Wrapper>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <NDivider label="More coming" />

        {/* CTA */}
        <section className="relative pb-32 px-6">
          <div className="max-w-[1200px] mx-auto surface-card rounded-3xl p-12 md:p-20 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 opacity-10">
              <NightMediaIcon variant="metallic" size={360} />
            </div>
            <div className="relative z-10 max-w-2xl">
              <p className="eyebrow mb-6">Next case study</p>
              <h2 className="font-display font-semibold text-foreground text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.02em] mb-8">
                Yours could be the one we publish next.
              </h2>
              <p className="text-lg text-muted-foreground mb-10 max-w-xl">
                We work with founders who want systems, not campaigns. If you're serious about
                scale, let's talk.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold group hover:bg-primary/90 transition-colors"
              >
                Start a conversation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Projects;
