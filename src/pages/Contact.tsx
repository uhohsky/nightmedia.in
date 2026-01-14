
import React, { useState } from 'react';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send, ArrowRight, Facebook, Instagram, MessageCircle, Youtube } from 'lucide-react';
import PageHeader from '../components/Layout/PageHeader';

const socialMediaLinks = [
  { name: 'Facebook', emoji: '📘', icon: Facebook, url: 'https://facebook.com' },
  { name: 'Instagram', emoji: '📸', icon: Instagram, url: 'https://www.instagram.com/_nightmedia.in/' },
  { name: 'X (Twitter)', emoji: '❌', icon: null, url: 'https://x.com/Nightmediaindia' },
  { name: 'WhatsApp', emoji: '💬', icon: MessageCircle, url: 'https://wa.me/919899505154' },
  { name: 'YouTube', emoji: '▶️', icon: Youtube, url: 'https://www.youtube.com/@NightMediaindia' }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

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
      description: 'Send us an email anytime',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9899051544',
      description: 'Mon-Fri from 10am to 7pm',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'Delhi NCR, Noida, Ghaziabad',
      description: 'Come say hello at our HQ',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="pt-24 px-6">
        <PageHeader
          badge="CONTACT"
          title="Let's work together"
          subtitle="Ready to transform your brand with cutting-edge design and technology? Let's create something extraordinary together."
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-light text-black mb-2">Send us a message</h2>
                <p className="text-gray-600">We'll get back to you within 24 hours</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <Send className="w-6 h-6 text-white" />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 text-gray-900 placeholder-gray-500 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200"
                    placeholder="Sky"
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 text-gray-900 placeholder-gray-500 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200"
                    placeholder="sky@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-3">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 text-gray-900 placeholder-gray-500 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200"
                    placeholder="Your Company"
                  />
                </div>
                <div className="group">
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-3">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 text-gray-900 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200 appearance-none cursor-pointer"
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

              <div className="group">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-3">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-gray-50 border-2 border-transparent rounded-2xl px-6 py-4 text-gray-900 placeholder-gray-500 focus:bg-white focus:border-blue-500 focus:outline-none transition-all duration-200 resize-none"
                  placeholder="Tell us about your project, goals, timeline, and budget..."
                />
              </div>

              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-5 rounded-2xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg"
              >
                <span>Send Message</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group">
                  <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-900 font-medium mb-1">{info.value}</p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </div>
              );
            })}

            {/* Social Media Section */}
            <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="space-y-3">
                {socialMediaLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-700 hover:text-gray-900 transition-colors group"
                  >
                    <span className="text-xl">{social.emoji}</span>
                    <span className="font-medium group-hover:underline">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">Ready to start?</h3>
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                Join 100+ companies that trust us with their digital transformation.
              </p>
              <div className="flex space-x-4 text-sm">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                  Fast delivery
                </span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  24/7 support
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '100+', label: 'Projects completed' },
            { number: '50+', label: 'Happy clients' },
            { number: '5+', label: 'Years experience' },
            { number: '24/7', label: 'Support available' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-light text-black mb-2">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
