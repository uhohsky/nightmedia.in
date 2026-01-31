import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import PageHeader from '../components/Layout/PageHeader';

gsap.registerPlugin(ScrollTrigger);

/* =========================
   PROJECT DATA
========================= */
const projects = [
  {
    id: 0,
    title: 'SYNFICTION.AI',
    subtitle: 'AI PRODUCT WEBSITE',
    category: 'Web Design & Development',
    description:
      'SYNFICTION.AI is an AI-first product website built to showcase advanced artificial intelligence capabilities with a clean, high-performance, conversion-focused interface.',
    image: '/images/projects/sfai.jpg',
    slug: 'synfiction-ai',
    tags: ['AI', 'Web Design', 'SaaS'],
    metrics: {
      pageSpeed: '95+',
      engagement: 'High',
      conversion: 'Optimized',
    },
    featured: true,
    size: 'large',
    externalLink: 'https://synfiction.ai',
  },

  {
    id: 1,
    title: 'LUXE FASHION',
    subtitle: 'INFLUENCER CAMPAIGN',
    category: 'Influencer Marketing',
    description:
      'A high-end fashion campaign featuring top-tier influencers across multiple platforms, resulting in massive brand growth.',
    image:
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop',
    slug: 'luxe-fashion-campaign',
    tags: ['Fashion', 'Instagram', 'TikTok'],
    metrics: { reach: '2.5M', engagement: '15%', roi: '400%' },
    featured: true,
    size: 'large',
  },

  {
    id: 2,
    title: 'RECENT WEBSITE LAUNCHES',
    subtitle: 'Web Design & Development Projects',
    category: 'Website Development',
    description:
      'A curated collection of high-performing client websites designed and developed by Night Media. This includes eCommerce, legal, fashion, and brand-focused platforms.',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop',
    slug: 'recent-website-launches',
    tags: ['Web Design', 'Development', 'Client Work'],
    metrics: {
      projects: '4+',
      industries: 'Multiple',
      performance: 'High',
    },
    featured: true,
    size: 'large',
  },

  {
    id: 3,
    title: 'PRODUCT LAUNCH',
    subtitle: 'CGI & PRODUCT EXPERIENCE',
    category: 'CGI & Web Experience',
    description:
      'A visually driven product launch experience combining CGI, motion, and interactive design for maximum brand impact.',
    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=800&fit=crop',
    slug: 'product-launch',
    tags: ['CGI', 'Product', 'Launch'],
    metrics: { views: '5M+', ctr: '25%', engagement: 'High' },
    featured: true,
    size: 'large',
    externalLink: 'https://example-product-launch.com', // 🔁 replace later
  },
];

/* =========================
   COMPONENT
========================= */
const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      '.project-showcase',
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.25,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.projects-container',
          start: 'top 80%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="bg-gray-50 text-black overflow-hidden">
      <section className="relative bg-white pt-20">
        <PageHeader
          badge="PORTFOLIO"
          title="Creative Excellence"
          subtitle="Selected projects where strategy, design, and technology meet"
        />
      </section>

      <section ref={containerRef} className="projects-container py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {projects.map((project) => {
            const Wrapper = project.externalLink ? 'a' : Link;
            const wrapperProps = project.externalLink
              ? {
                  href: project.externalLink,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                }
              : { to: `/projects/${project.slug}` };

            return (
              <div key={project.id} className="project-showcase">
                <Wrapper
                  {...wrapperProps}
                  className="group grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h2 className="text-5xl font-light">
                      {project.title}
                    </h2>
                    <h3 className="text-2xl text-gray-500">
                      {project.subtitle}
                    </h3>
                    <p className="text-gray-600 max-w-xl">
                      {project.description}
                    </p>
                  </div>
                </Wrapper>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Projects;
