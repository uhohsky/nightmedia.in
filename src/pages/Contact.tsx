
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

  return (
    <div className="pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-mono font-bold mb-6 gradient-text">
            Let's Create Something Amazing
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's start building your next big idea.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full glass rounded-lg px-4 py-3 bg-transparent border border-gray-600 focus:border-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full glass rounded-lg px-4 py-3 bg-transparent border border-gray-600 focus:border-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full glass rounded-lg px-4 py-3 bg-transparent border border-gray-600 focus:border-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full glass rounded-lg px-4 py-3 bg-black border border-gray-600 focus:border-white focus:outline-none transition-colors"
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
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full glass rounded-lg px-4 py-3 bg-transparent border border-gray-600 focus:border-white focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>

              <button
                type="submit"
                className="w-full glass px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-black transition-all magnetic"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <p className="text-gray-400">hello@nightmedia.com</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-gray-400">New York, NY</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Why Choose NightMedia?</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>5+ years of industry experience</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>100+ successful projects delivered</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>24/7 support and communication</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Cutting-edge technology and techniques</span>
                </li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors magnetic">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors magnetic">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors magnetic">
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
