import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, ArrowRight, Facebook, Instagram, MessageCircle, Youtube } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const socialMediaLinks = [
  { name: 'Facebook', icon: Facebook, url: 'https://facebook.com' },
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
      gsap.fromTo('.contact-hero-title', 
        { opacity: 0, y: 40 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
      gsap.fromTo('.contact-hero-subtitle', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out' }
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
      description: "We'll review your requirements and schedule a discovery call within 24 hours."
    },
    {
      number: '03',
      title: 'Execution Kickoff',
      description: 'Once aligned, we begin building with clear milestones and transparent communication.'
    }
  ];

  return (
    <div ref={containerRef} className="bg-white text-black min-h-screen">
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="contact-hero-title text-4xl md:text-5xl lg:text-6xl font-light text-black tracking-tight mb-6">
            Let's Build Something That Converts
          </h1>
          <p className="contact-hero-subtitle text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Night Media combines strategic design with performance-driven development. 
            Whether it's web design, growth systems, or brand identity—we're here to help you scale.
          </p>
        </div>
      </section>

      <section className="contact-form-section pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-light text-black mb-3">
                  Start a Conversation
                </h2>
                <p className="text-gray-600 font-light">
                  Tell us about your project. We'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-black placeholder-gray-400 focus:bg-white focus:border-black focus:outline-none transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-black placeholder-gray-400 focus:bg-white focus:border-black focus:outline-none transition-all duration-200"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-black mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-black placeholder-gray-400 focus:bg-white focus:border-black focus:outline-none transition-all duration-200"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-black mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-black focus:bg-white focus:border-black focus:outline-none transition-all duration-200 appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      <option value="web-design">Web Design</option>
                      <option value="influencer-marketing">Influencer Marketing</option>
                      <option value="cgi-ads">CGI Ads</option>
                      <option value="video-editing">Video Editing</option>
                      <option value="branding">Branding</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3.5 text-black placeholder-gray-400 focus:bg-white focus:border-black focus:outline-none transition-all duration-200 resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-lg font-medium text-black mb-6">Contact Details</h3>
                <div className="space-y-5">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    const content = (
                      <div className="flex items-start gap-4 group">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gray-200 transition-colors duration-200">
                          <IconComponent className="w-5 h-5 text-gray-700" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-0.5">{info.title}</p>
                          <p className="text-black font-medium">{info.value}</p>
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

              <div className="border-t border-gray-200 pt-8">
                <h3 className="text-lg font-medium text-black mb-6">Follow Us</h3>
                <div className="flex gap-3">
                  {socialMediaLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200"
                        aria-label={social.name}
                      >
                        <IconComponent className="w-5 h-5 text-gray-700" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6 mt-8">
                <h3 className="text-lg font-medium text-black mb-3">A Note from Sky</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  "At Night Media, you work directly with the people who build your project. No account managers, 
                  no layers—just transparent collaboration focused on results. We treat every project like our own."
                </p>
                <p className="text-black text-sm font-medium">— Sky, Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-black mb-4">
              What Happens Next
            </h2>
            <p className="text-gray-600 font-light max-w-xl mx-auto">
              Our process is simple and designed to respect your time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step text-center md:text-left">
                <div className="text-4xl font-light text-gray-300 mb-4">{step.number}</div>
                <h3 className="text-xl font-medium text-black mb-3">{step.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
            Ready to grow your business?
          </h2>
          <p className="text-gray-600 mb-10 text-lg font-light max-w-xl mx-auto">
            Let's turn your vision into a high-performing digital experience.
          </p>
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-300"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
