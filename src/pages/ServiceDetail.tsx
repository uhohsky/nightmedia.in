

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServiceDetail = () => {
  const { slug } = useParams();

  useEffect(() => {
    gsap.fromTo('.service-hero',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    gsap.fromTo('.service-section',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.service-content',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  // Enhanced service data mapping with cinematic structure
  const serviceData = {
    'influencer-marketing': {
      title: 'INFLUENCER',
      subtitle: 'MARKETING',
      description: 'Strategic partnerships that amplify your brand through authentic connections and measurable impact.',
      gradient: 'from-pink-500 to-red-500',
      hero: {
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1920&h=1080&fit=crop'
      },
      sections: [
        {
          type: 'narrative',
          title: 'THE POWER OF AUTHENTIC INFLUENCE',
          content: 'In a world oversaturated with advertisements, consumers crave authenticity. Influencer marketing bridges the gap between brands and audiences through trusted voices that speak directly to your target market.',
          visual: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop'
        },
        {
          type: 'stats',
          title: 'PROVEN IMPACT',
          stats: [
            { number: '11X', label: 'Higher ROI than traditional advertising' },
            { number: '89%', label: 'Of marketers say ROI is comparable or better than other channels' },
            { number: '49%', label: 'Of consumers depend on influencer recommendations' }
          ]
        },
        {
          type: 'process',
          title: 'OUR APPROACH',
          steps: [
            { number: '01', title: 'DISCOVERY', description: 'Deep dive into your brand, audience, and objectives to craft the perfect influencer strategy.' },
            { number: '02', title: 'MATCHING', description: 'Identify and vet influencers who align with your brand values and speak to your target audience.' },
            { number: '03', title: 'CREATION', description: 'Collaborate on authentic content that resonates with audiences while meeting brand guidelines.' },
            { number: '04', title: 'OPTIMIZATION', description: 'Monitor performance and optimize campaigns in real-time for maximum impact and ROI.' }
          ]
        },
        {
          type: 'showcase',
          title: 'FEATURED WORK',
          projects: [
            {
              title: 'Fashion Forward',
              description: 'Luxury fashion brand campaign across 50+ micro-influencers',
              image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=600&h=400&fit=crop',
              metrics: { reach: '2.5M', engagement: '12.5%', conversions: '8.3%' }
            },
            {
              title: 'Tech Launch',
              description: 'Product launch campaign with tech reviewers and lifestyle creators',
              image: 'https://images.unsplash.com/photo-1556742400-b3aea7c8b20d?w=600&h=400&fit=crop',
              metrics: { reach: '1.8M', engagement: '15.2%', conversions: '11.7%' }
            }
          ]
        }
      ]
    },
    'web-design': {
      title: 'WEB',
      subtitle: 'DESIGN',
      description: 'Beautiful websites that convert visitors into customers through exceptional user experience and cutting-edge visual design.',
      gradient: 'from-blue-500 to-purple-600',
      hero: {
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1920&h=1080&fit=crop'
      },
      sections: [
        {
          type: 'narrative',
          title: 'DESIGN THAT CONVERTS',
          content: 'Every pixel serves a purpose. Our web designs combine aesthetic beauty with conversion-focused functionality, creating digital experiences that not only captivate but drive measurable business results.',
          visual: 'https://images.unsplash.com/photo-1545670723-196ed0954986?w=800&h=600&fit=crop'
        },
        {
          type: 'stats',
          title: 'PERFORMANCE METRICS',
          stats: [
            { number: '3.8X', label: 'Average conversion rate increase' },
            { number: '65%', label: 'Reduction in bounce rate' },
            { number: '24/7', label: 'Responsive design optimization' }
          ]
        },
        {
          type: 'process',
          title: 'DESIGN PROCESS',
          steps: [
            { number: '01', title: 'RESEARCH', description: 'Understanding your brand, audience, and market to inform design decisions.' },
            { number: '02', title: 'WIREFRAME', description: 'Creating structural blueprints that optimize user flow and experience.' },
            { number: '03', title: 'VISUAL', description: 'Crafting stunning visual designs that align with your brand identity.' },
            { number: '04', title: 'OPTIMIZE', description: 'Testing and refining for maximum performance and user engagement.' }
          ]
        },
        {
          type: 'showcase',
          title: 'FEATURED WORK',
          projects: [
            {
              title: 'E-commerce Redesign',
              description: 'Complete overhaul of luxury retail website with 40% increase in sales',
              image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
              metrics: { reach: '150K', engagement: '8.5%', conversions: '4.2%' }
            }
          ]
        }
      ]
    },
    'web-development': {
      title: 'WEB',
      subtitle: 'DEVELOPMENT',
      description: 'Robust, scalable web applications built with cutting-edge technology and performance-first architecture.',
      gradient: 'from-green-500 to-blue-500',
      hero: {
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1920&h=1080&fit=crop'
      },
      sections: [
        {
          type: 'narrative',
          title: 'CODE THAT PERFORMS',
          content: 'Behind every exceptional digital experience lies clean, efficient code. We build web applications that are not just beautiful, but fast, secure, and scalable for long-term success.',
          visual: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop'
        },
        {
          type: 'stats',
          title: 'TECHNICAL EXCELLENCE',
          stats: [
            { number: '99.9%', label: 'Uptime guarantee' },
            { number: '<2s', label: 'Average page load time' },
            { number: '100%', label: 'Mobile responsive' }
          ]
        },
        {
          type: 'showcase',
          title: 'FEATURED WORK',
          projects: [
            {
              title: 'SaaS Platform',
              description: 'Complex web application serving 10K+ daily active users',
              image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
              metrics: { reach: '10K', engagement: '85%', conversions: '12%' }
            }
          ]
        }
      ]
    },
    'seo': {
      title: 'SEARCH ENGINE',
      subtitle: 'OPTIMIZATION',
      description: 'Data-driven SEO strategies that increase organic visibility and drive qualified traffic to your website.',
      gradient: 'from-yellow-500 to-orange-500',
      hero: {
        image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1920&h=1080&fit=crop'
      },
      sections: [
        {
          type: 'narrative',
          title: 'VISIBILITY THAT MATTERS',
          content: 'In the digital landscape, being found is everything. Our SEO strategies combine technical expertise with content mastery to position your brand where your customers are searching.',
          visual: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
        },
        {
          type: 'stats',
          title: 'SEO RESULTS',
          stats: [
            { number: '300%', label: 'Average organic traffic increase' },
            { number: '1-3', label: 'Page one ranking positions' },
            { number: '6mo', label: 'Average time to see results' }
          ]
        },
        {
          type: 'showcase',
          title: 'FEATURED WORK',
          projects: [
            {
              title: 'Local Business SEO',
              description: 'Restaurant chain achieved #1 local rankings across 15 locations',
              image: 'https://images.unsplash.com/photo-1554774853-719586f82d77?w=600&h=400&fit=crop',
              metrics: { reach: '500K', engagement: '25%', conversions: '18%' }
            }
          ]
        }
      ]
    },
    'social-media-marketing': {
      title: 'SOCIAL MEDIA',
      subtitle: 'MARKETING',
      description: 'Strategic social media campaigns that build communities, drive engagement, and convert followers into customers.',
      gradient: 'from-purple-500 to-pink-500',
      hero: {
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1920&h=1080&fit=crop'
      },
      sections: [
        {
          type: 'narrative',
          title: 'SOCIAL THAT SELLS',
          content: 'Social media is more than just posting content—it\'s about building meaningful connections that translate into business growth. We create social strategies that engage, inspire, and convert.',
          visual: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop'
        },
        {
          type: 'stats',
          title: 'SOCIAL IMPACT',
          stats: [
            { number: '250%', label: 'Average engagement increase' },
            { number: '5M+', label: 'Monthly reach across platforms' },
            { number: '15%', label: 'Average conversion rate from social' }
          ]
        },
        {
          type: 'showcase',
          title: 'FEATURED WORK',
          projects: [
            {
              title: 'Lifestyle Brand Growth',
              description: 'Grew Instagram following from 5K to 100K in 8 months',
              image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
              metrics: { reach: '2M', engagement: '8.5%', conversions: '6.2%' }
            }
          ]
        }
      ]
    },
    'paid-ads': {
      title: 'PAID',
      subtitle: 'ADVERTISING',
      description: 'Performance-driven paid advertising campaigns across Meta, Google, and other platforms for maximum ROI.',
      gradient: 'from-red-500 to-orange-500',
      hero: {
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&h=1080&fit=crop'
      },
      sections: [
        {
          type: 'narrative',
          title: 'ADS THAT DELIVER',
          content: 'Every dollar spent on advertising should return measurable results. Our paid advertising strategies combine creative excellence with data-driven optimization to maximize your advertising investment.',
          visual: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop'
        },
        {
          type: 'stats',
          title: 'AD PERFORMANCE',
          stats: [
            { number: '4.2X', label: 'Average ROAS (Return on Ad Spend)' },
            { number: '35%', label: 'Lower cost per acquisition' },
            { number: '24/7', label: 'Campaign monitoring & optimization' }
          ]
        },
        {
          type: 'showcase',
          title: 'FEATURED WORK',
          projects: [
            {
              title: 'E-commerce Scale',
              description: 'Generated $500K revenue from $125K ad spend in 3 months',
              image: 'https://images.unsplash.com/photo-1556742400-b3aea7c8b20d?w=600&h=400&fit=crop',
              metrics: { reach: '1.2M', engagement: '12%', conversions: '8.5%' }
            }
          ]
        }
      ]
    },
    'branding': {
      title: 'BRANDING &',
      subtitle: 'IDENTITY',
      description: 'Comprehensive brand identity systems that create lasting emotional connections with your audience.',
      gradient: 'from-indigo-500 to-purple-500',
      hero: {
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=1920&h=1080&fit=crop'
      },
      sections: [
        {
          type: 'narrative',
          title: 'BRANDS THAT RESONATE',
          content: 'A strong brand is more than a logo—it\'s the emotional connection between your business and your customers. We craft brand identities that tell compelling stories and drive lasting loyalty.',
          visual: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop'
        },
        {
          type: 'stats',
          title: 'BRAND IMPACT',
          stats: [
            { number: '73%', label: 'Of consumers pay more for trusted brands' },
            { number: '3.5X', label: 'Higher brand recognition after rebrand' },
            { number: '90%', label: 'Client satisfaction rate' }
          ]
        },
        {
          type: 'showcase',
          title: 'FEATURED WORK',
          projects: [
            {
              title: 'Tech Startup Rebrand',
              description: 'Complete brand overhaul resulting in 200% increase in brand recognition',
              image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop',
              metrics: { reach: '800K', engagement: '15%', conversions: '9%' }
            }
          ]
        }
      ]
    },
    'ui-ux-design': {
      title: 'UI/UX',
      subtitle: 'DESIGN',
      description: 'User-centered design solutions that create intuitive, engaging, and conversion-optimized digital experiences.',
      gradient: 'from-teal-500 to-blue-500',
      hero: {
        image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1920&h=1080&fit=crop'
      },
      sections: [
        {
          type: 'narrative',
          title: 'EXPERIENCES THAT DELIGHT',
          content: 'Great design is invisible—it guides users effortlessly toward their goals while creating memorable interactions. Our UI/UX designs balance beauty with functionality for optimal user satisfaction.',
          visual: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop'
        },
        {
          type: 'stats',
          title: 'UX IMPACT',
          stats: [
            { number: '200%', label: 'Average conversion improvement' },
            { number: '50%', label: 'Reduction in user drop-off' },
            { number: '4.8/5', label: 'Average user satisfaction score' }
          ]
        },
        {
          type: 'showcase',
          title: 'FEATURED WORK',
          projects: [
            {
              title: 'Mobile App Redesign',
              description: 'Fintech app redesign increased user retention by 60%',
              image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
              metrics: { reach: '50K', engagement: '75%', conversions: '25%' }
            }
          ]
        }
      ]
    },
    '3d-design': {
      title: '3D DESIGN &',
      subtitle: 'ANIMATION',
      description: 'Cutting-edge 3D visualization and animation that brings concepts to life with photorealistic detail.',
      gradient: 'from-cyan-500 to-blue-500',
      hero: {
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&h=1080&fit=crop'
      },
      sections: [
        {
          type: 'narrative',
          title: 'DIMENSIONS BEYOND REALITY',
          content: '3D design transcends traditional limitations, allowing us to create impossible worlds and showcase products in ways that captivate and convert. Our 3D work pushes creative boundaries while serving strategic goals.',
          visual: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=600&fit=crop'
        },
        {
          type: 'stats',
          title: '3D PERFORMANCE',
          stats: [
            { number: '40%', label: 'Higher engagement with 3D content' },
            { number: '25%', label: 'Increase in time spent on page' },
            { number: '100%', label: 'Photorealistic quality guarantee' }
          ]
        },
        {
          type: 'showcase',
          title: 'FEATURED WORK',
          projects: [
            {
              title: 'Product Visualization',
              description: '3D product showcase increased online sales by 35%',
              image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&h=400&fit=crop',
              metrics: { reach: '300K', engagement: '28%', conversions: '12%' }
            }
          ]
        }
      ]
    },
    'video-editing': {
      title: 'VIDEO',
      subtitle: 'EDITING',
      description: 'Cinematic storytelling through professional video editing and post-production that captivates audiences.',
      gradient: 'from-red-500 to-pink-500',
      hero: {
        image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1920&h=1080&fit=crop'
      },
      sections: [
        {
          type: 'narrative',
          title: 'STORIES THAT MOVE',
          content: 'Video is the most powerful medium for storytelling. Our video editing transforms raw footage into compelling narratives that engage audiences, evoke emotions, and drive action.',
          visual: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop'
        },
        {
          type: 'stats',
          title: 'VIDEO IMPACT',
          stats: [
            { number: '80%', label: 'Of consumers prefer video content' },
            { number: '54%', label: 'Increase in brand awareness' },
            { number: '1200%', label: 'More shares than text and image combined' }
          ]
        },
        {
          type: 'showcase',
          title: 'FEATURED WORK',
          projects: [
            {
              title: 'Brand Documentary',
              description: 'Corporate documentary series generated 2M+ views across platforms',
              image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop',
              metrics: { reach: '2M', engagement: '18%', conversions: '7%' }
            }
          ]
        }
      ]
    },
    'graphic-design': {
      title: 'GRAPHIC',
      subtitle: 'DESIGN',
      description: 'Visual communication that speaks volumes—from brand collateral to digital assets that make an impact.',
      gradient: 'from-orange-500 to-red-500',
      hero: {
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1920&h=1080&fit=crop'
      },
      sections: [
        {
          type: 'narrative',
          title: 'VISUALS THAT COMMUNICATE',
          content: 'Great graphic design doesn\'t just look good—it communicates effectively. Our designs combine aesthetic appeal with strategic messaging to create visuals that inform, inspire, and persuade.',
          visual: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop'
        },
        {
          type: 'stats',
          title: 'DESIGN IMPACT',
          stats: [
            { number: '65%', label: 'Of people are visual learners' },
            { number: '94%', label: 'More views for content with visuals' },
            { number: '43%', label: 'More persuasive with visual elements' }
          ]
        },
        {
          type: 'showcase',
          title: 'FEATURED WORK',
          projects: [
            {
              title: 'Campaign Collateral',
              description: 'Complete visual identity for multi-channel marketing campaign',
              image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop',
              metrics: { reach: '1M', engagement: '22%', conversions: '9%' }
            }
          ]
        }
      ]
    },
    'cgi-ads': {
      title: 'CGI',
      subtitle: 'ADVERTISING',
      description: 'Photorealistic 3D advertisements that capture attention and drive engagement in the digital landscape.',
      gradient: 'from-green-500 to-teal-500',
      hero: {
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1920&h=1080&fit=crop'
      },
      sections: [
        {
          type: 'narrative',
          title: 'BEYOND REALITY',
          content: 'CGI advertising breaks the boundaries of traditional photography, allowing us to create impossible scenarios that capture imagination while delivering your brand message with unprecedented impact.',
          visual: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&h=600&fit=crop'
        },
        {
          type: 'stats',
          title: 'CGI PERFORMANCE',
          stats: [
            { number: '3X', label: 'Higher engagement than traditional ads' },
            { number: '60%', label: 'Increase in brand recall' },
            { number: '100%', label: 'Photorealistic quality' }
          ]
        },
        {
          type: 'showcase',
          title: 'FEATURED WORK',
          projects: [
            {
              title: 'Product Launch Campaign',
              description: 'CGI product visualization campaign for luxury automotive brand',
              image: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=600&h=400&fit=crop',
              metrics: { reach: '5M', engagement: '32%', conversions: '14%' }
            }
          ]
        }
      ]
    },
    'email-marketing': {
      title: 'EMAIL',
      subtitle: 'MARKETING',
      description: 'Strategic email campaigns that nurture leads, retain customers, and drive consistent revenue growth.',
      gradient: 'from-blue-500 to-indigo-500',
      hero: {
        image: 'https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1920&h=1080&fit=crop'
      },
      sections: [
        {
          type: 'narrative',
          title: 'EMAILS THAT CONVERT',
          content: 'Email marketing remains one of the highest ROI marketing channels. Our strategic email campaigns build relationships, nurture prospects, and turn subscribers into loyal customers.',
          visual: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=600&fit=crop'
        },
        {
          type: 'stats',
          title: 'EMAIL RESULTS',
          stats: [
            { number: '42X', label: 'Average ROI for email marketing' },
            { number: '25%', label: 'Average open rate improvement' },
            { number: '15%', label: 'Click-through rate increase' }
          ]
        },
        {
          type: 'showcase',
          title: 'FEATURED WORK',
          projects: [
            {
              title: 'E-commerce Automation',
              description: 'Automated email sequence generated $100K additional revenue',
              image: 'https://images.unsplash.com/photo-1556742400-b3aea7c8b20d?w=600&h=400&fit=crop',
              metrics: { reach: '25K', engagement: '35%', conversions: '18%' }
            }
          ]
        }
      ]
    },
    'content-strategy': {
      title: 'CONTENT',
      subtitle: 'STRATEGY',
      description: 'Data-driven content strategies that build authority, engage audiences, and drive measurable business results.',
      gradient: 'from-purple-500 to-indigo-500',
      hero: {
        image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1920&h=1080&fit=crop'
      },
      sections: [
        {
          type: 'narrative',
          title: 'CONTENT THAT CONNECTS',
          content: 'Strategic content creation goes beyond filling pages—it builds relationships, establishes authority, and guides customers through their journey from awareness to advocacy.',
          visual: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop'
        },
        {
          type: 'stats',
          title: 'CONTENT IMPACT',
          stats: [
            { number: '3X', label: 'More leads than paid search' },
            { number: '62%', label: 'Less cost than traditional marketing' },
            { number: '6X', label: 'Higher conversion rates' }
          ]
        },
        {
          type: 'showcase',
          title: 'FEATURED WORK',
          projects: [
            {
              title: 'B2B Content Hub',
              description: 'Thought leadership content strategy generated 500+ qualified leads',
              image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop',
              metrics: { reach: '750K', engagement: '28%', conversions: '12%' }
            }
          ]
        }
      ]
    }
  };

  const service = serviceData[slug as keyof typeof serviceData];

  if (!service) {
    return (
      <div className="pt-24 pb-20 text-center">
        <h1 className="text-4xl font-mono font-bold mb-4">Service Not Found</h1>
        <Link to="/services" className="text-blue-400 hover:underline">
          Back to Services
        </Link>
      </div>
    );
  }

  // Special handling for Influencer Marketing page
  if (slug === 'influencer-marketing') {
    return (
      <div className="pt-16 bg-black text-white">
        {/* Hero Section - Fullscreen */}
        <section className="service-hero min-h-screen relative flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={service.hero.image}
              alt="Influencer Marketing"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          <div className="relative z-10 text-center px-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-mono font-bold mb-6">
              <div className="gradient-text">{service.title}</div>
              <div className="gradient-text">{service.subtitle}</div>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              {service.description}
            </p>
          </div>
        </section>

        {/* Scroll-triggered sections */}
        <div className="service-content">
          {service.sections.map((section, index) => (
            <section key={index} className="service-section">
              {section.type === 'narrative' && (
                <div className="min-h-screen flex items-center py-20 px-6">
                  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                      <h2 className="text-4xl md:text-6xl font-mono font-bold">
                        {section.title}
                      </h2>
                      <p className="text-xl text-gray-400 leading-relaxed">
                        {section.content}
                      </p>
                    </div>
                    <div className="relative">
                      <img
                        src={section.visual}
                        alt={section.title}
                        className="w-full h-96 object-cover rounded-2xl"
                      />
                    </div>
                  </div>
                </div>
              )}

              {section.type === 'stats' && (
                <div className="py-20 px-6 bg-gray-900/20">
                  <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl md:text-6xl font-mono font-bold mb-16">
                      {section.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                      {section.stats?.map((stat, i) => (
                        <div key={i} className="glass rounded-2xl p-8">
                          <div className="text-5xl font-bold mb-4">{stat.number}</div>
                          <div className="text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {section.type === 'process' && (
                <div className="py-20 px-6">
                  <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-mono font-bold text-center mb-16">
                      {section.title}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {section.steps?.map((step, i) => (
                        <div key={i} className="glass rounded-2xl p-8 magnetic">
                          <div className="text-6xl font-mono font-bold text-gray-600 mb-4">
                            {step.number}
                          </div>
                          <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                          <p className="text-gray-400">{step.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {section.type === 'showcase' && (
                <div className="py-20 px-6 bg-gray-900/20">
                  <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-mono font-bold text-center mb-16">
                      {section.title}
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                      {section.projects?.map((project, i) => (
                        <div key={i} className="glass rounded-2xl overflow-hidden magnetic">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover"
                          />
                          <div className="p-8">
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-gray-400 mb-6">{project.description}</p>
                            <div className="grid grid-cols-3 gap-4 text-center">
                              <div>
                                <div className="text-xl font-bold">{project.metrics.reach}</div>
                                <div className="text-sm text-gray-500">Reach</div>
                              </div>
                              <div>
                                <div className="text-xl font-bold">{project.metrics.engagement}</div>
                                <div className="text-sm text-gray-500">Engagement</div>
                              </div>
                              <div>
                                <div className="text-xl font-bold">{project.metrics.conversions}</div>
                                <div className="text-sm text-gray-500">Conversions</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* CTA Section */}
        <section className="service-section py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-mono font-bold mb-8">
              READY TO AMPLIFY YOUR BRAND?
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Let's create an influencer marketing strategy that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="glass px-12 py-6 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all magnetic"
              >
                Start Your Campaign
              </Link>
              <Link
                to="/services"
                className="border border-white px-12 py-6 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all magnetic"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Cinematic layout for all other services
  return (
    <div className="pt-16 bg-black text-white">
      {/* Hero Section - Fullscreen */}
      <section className="service-hero min-h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.hero.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-mono font-bold mb-6">
            <div className="gradient-text">{service.title}</div>
            <div className="gradient-text">{service.subtitle}</div>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            {service.description}
          </p>
        </div>
      </section>

      {/* Scroll-triggered sections */}
      <div className="service-content">
        {service.sections.map((section, index) => (
          <section key={index} className="service-section">
            {section.type === 'narrative' && (
              <div className="min-h-screen flex items-center py-20 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                    <h2 className="text-4xl md:text-6xl font-mono font-bold">
                      {section.title}
                    </h2>
                    <p className="text-xl text-gray-400 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                  <div className="relative">
                    <img
                      src={section.visual}
                      alt={section.title}
                      className="w-full h-96 object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            )}

            {section.type === 'stats' && (
              <div className="py-20 px-6 bg-gray-900/20">
                <div className="max-w-6xl mx-auto text-center">
                  <h2 className="text-4xl md:text-6xl font-mono font-bold mb-16">
                    {section.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {section.stats?.map((stat, i) => (
                      <div key={i} className="glass rounded-2xl p-8">
                        <div className="text-5xl font-bold mb-4">{stat.number}</div>
                        <div className="text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {section.type === 'process' && (
              <div className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-4xl md:text-6xl font-mono font-bold text-center mb-16">
                    {section.title}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {section.steps?.map((step, i) => (
                      <div key={i} className="glass rounded-2xl p-8 magnetic">
                        <div className="text-6xl font-mono font-bold text-gray-600 mb-4">
                          {step.number}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                        <p className="text-gray-400">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {section.type === 'showcase' && (
              <div className="py-20 px-6 bg-gray-900/20">
                <div className="max-w-6xl mx-auto">
                  <h2 className="text-4xl md:text-6xl font-mono font-bold text-center mb-16">
                    {section.title}
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {section.projects?.map((project, i) => (
                      <div key={i} className="glass rounded-2xl overflow-hidden magnetic">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-64 object-cover"
                        />
                        <div className="p-8">
                          <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                          <p className="text-gray-400 mb-6">{project.description}</p>
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                              <div className="text-xl font-bold">{project.metrics.reach}</div>
                              <div className="text-sm text-gray-500">Reach</div>
                            </div>
                            <div>
                              <div className="text-xl font-bold">{project.metrics.engagement}</div>
                              <div className="text-sm text-gray-500">Engagement</div>
                            </div>
                            <div>
                              <div className="text-xl font-bold">{project.metrics.conversions}</div>
                              <div className="text-sm text-gray-500">Conversions</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

      {/* CTA Section */}
      <section className="service-section py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-mono font-bold mb-8">
            READY TO GET STARTED?
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Let's create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              to="/contact"
              className="glass px-12 py-6 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all magnetic"
            >
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="border border-white px-12 py-6 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all magnetic"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

