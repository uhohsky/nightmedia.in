import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, ArrowRight, Instagram, MessageCircle, Youtube, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const socialMediaLinks = [
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/_nightmedia.in/' },
  { name: 'WhatsApp', icon: MessageCircle, url: 'https://wa.me/919899505154' },
  { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@NightMediaindia' }
];

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-badge',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
      );
      
      gsap.fromTo('.contact-hero-title', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: 'power3.out' }
      );
      
      gsap.fromTo('.contact-hero-subtitle', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out' }
      );
      
      gsap.fromTo('.contact-form-section', 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' }
      );
      
      gsap.fromTo('.process-step',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.process-section',
            start: 'top 80%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://getform.io/f/bnlxyrxb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast.success("Thank you for your message! We'll get back to you soon.");
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        });
      } else {
        toast.error("Failed to send your message. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'Contact@nightmedia.in',
      href: 'mailto:Contact@nightmedia.in'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9899051544',
      href: 'tel:+919899051544'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Delhi NCR, India',
      href: null
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Submit Your Inquiry',
      description: 'Fill out the form with your project details. We read every message personally.'
    },
    {
      number: '02',
      title: 'Strategy Review',
      description: "We review your requirements and schedule a discovery call within 24 hours."
    },
    {
      number: '03',
      title: 'Execution Kickoff',
      description: 'Once aligned, we begin building with clear milestones and transparent communication.'
    }
  ];

  return (
    <div ref={containerRef} className="bg-background min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-orb gradient-orb-1 absolute top-[10%] right-[10%] w-[600px] h-[600px]" />
        <div className="gradient-orb gradient-orb-2 absolute bottom-[20%] left-[5%] w-[500px] h-[500px]" />
      </div>
      
      <div className="noise-overlay" />

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="contact-badge inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-medium">Get In Touch</span>
          </div>
          
          <h1 className="contact-hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-6">
            Let's Build Something{' '}
            <span className="gradient-text-primary">That Converts</span>
          </h1>
          
          <p className="contact-hero-subtitle text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Night Media combines strategic design with performance-driven development. 
            Whether it's web design, growth systems, or brand identity—we're here to help you scale.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="contact-form-section relative z-10 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="glass-card glow-border rounded-3xl p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                    Start a Conversation
                  </h2>
                  <p className="text-muted-foreground">
                    Tell us about your project. We'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3.5 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3.5 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3.5 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                        Service Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3.5 text-foreground focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select a service</option>
                        <option value="web-design">Web Design & Development</option>
                        <option value="performance-marketing">Performance Marketing</option>
                        <option value="lead-generation">Lead Generation</option>
                        <option value="seo">SEO</option>
                        <option value="branding">Branding</option>
                        <option value="video-editing">Video Editing</option>
                        <option value="influencer-marketing">Influencer Marketing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3.5 text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project, goals, and timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 btn-primary-glow px-8 py-4 rounded-full text-primary-foreground font-semibold group"
                  >
                    Send Message
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Details */}
              <div className="glass-card glow-border rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-6">Contact Details</h3>
                <div className="space-y-5">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    const content = (
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground mb-0.5">{info.title}</p>
                          <p className="text-foreground font-medium">{info.value}</p>
                        </div>
                      </div>
                    );

                    if (info.href) {
                      return (
                        <a key={index} href={info.href} className="block hover:opacity-80 transition-opacity">
                          {content}
                        </a>
                      );
                    }
                    return <div key={index}>{content}</div>;
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card glow-border rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-6">Follow Us</h3>
                <div className="flex gap-3">
                  {socialMediaLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center hover:bg-primary/20 transition-colors"
                        aria-label={social.name}
                      >
                        <IconComponent className="w-5 h-5 text-primary" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Founder Note */}
              <div className="glass-card glow-border rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">A Note from Sky</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  "At Night Media, you work directly with the people who build your project. No account managers, 
                  no layers—just transparent collaboration focused on results. We treat every project like our own."
                </p>
                <p className="text-primary text-sm font-medium">— Sky, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section relative z-10 py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Happens Next
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our process is simple and designed to respect your time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step glass-card glow-border rounded-2xl p-8 text-center">
                <div className="text-5xl font-bold gradient-text-primary mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-muted-foreground mb-10 text-lg max-w-xl mx-auto">
            Let's turn your vision into a high-performing digital experience.
          </p>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 btn-primary-glow px-8 py-4 rounded-full text-primary-foreground font-semibold group"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
