
import React, { useState } from 'react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      title: 'Email',
      value: 'hello@nightmedia.com',
      color: 'from-blue-600 to-purple-600'
    },
    {
      title: 'Phone',
      value: '+1 (555) 123-4567',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'Location',
      value: 'New York, NY',
      color: 'from-pink-500 to-red-500'
    }
  ];

  const reasons = [
    '5+ years of industry experience',
    '100+ successful projects delivered',
    '24/7 support and communication',
    'Cutting-edge technology and techniques'
  ];

  return (
    <div className="pt-24 pb-20 px-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded-full mb-6 tracking-wide">
            CONTACT
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-black mb-8 tracking-tight">
            Let's Create<br />
            Something<br />
            <span className="italic">Amazing</span>
          </h1>
          <div className="w-24 h-px bg-cyan-400 mx-auto mb-12"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's start building your next big idea.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-light text-black">Send us a message</h2>
              <div className="w-8 h-8 flex items-center justify-center">
                <div className="w-4 h-4 border-t-2 border-r-2 border-black transform rotate-45"></div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-full px-4 py-3 focus:border-black focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-full px-4 py-3 focus:border-black focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-full px-4 py-3 focus:border-black focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-full px-4 py-3 bg-white focus:border-black focus:outline-none transition-colors"
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:border-black focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-900 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white shadow-lg hover:shadow-2xl transition-all duration-700 rounded-2xl overflow-hidden group">
                  <div className={`relative h-20 bg-gradient-to-br ${info.color} flex items-center justify-center overflow-hidden`}>
                    <div className="text-2xl font-light text-white opacity-30">{String(index + 1).padStart(2, '0')}</div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-6">
                    <h4 className="font-medium text-black mb-1">{info.title}</h4>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div className="bg-white shadow-lg rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-light text-black">Why Choose NightMedia?</h3>
                <div className="w-8 h-8 flex items-center justify-center">
                  <div className="w-4 h-4 border-t-2 border-r-2 border-black transform rotate-45"></div>
                </div>
              </div>
              <ul className="space-y-3">
                {reasons.map((reason, index) => (
                  <li key={index} className="flex items-start text-gray-600">
                    <span className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="bg-white shadow-lg rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-light text-black">Follow Us</h3>
                <div className="w-8 h-8 flex items-center justify-center">
                  <div className="w-4 h-4 border-t-2 border-r-2 border-black transform rotate-45"></div>
                </div>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-black transition-colors font-medium">
                  Instagram
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors font-medium">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-600 hover:text-black transition-colors font-medium">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-full text-lg font-medium cursor-default">
            <span>Ready to Start?</span>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
