
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Palette, Megaphone, Users, Video, ChevronDown } from 'lucide-react';

const serviceCategories = [
  {
    title: 'Web Design',
    icon: Palette,
    color: 'bg-amber-100',
    iconColor: 'text-amber-600',
    path: '/services/web-design',
    items: ['UI/UX Design', 'Landing Pages', 'E-commerce Sites', 'Brand Identity']
  },
  {
    title: 'Digital Marketing',
    icon: Megaphone,
    color: 'bg-purple-100',
    iconColor: 'text-purple-600',
    path: '/services/digital-marketing',
    items: ['SEO Optimization', 'Social Media Marketing', 'Pay Per Click', 'Content Strategy']
  },
  {
    title: 'Influencer Marketing',
    icon: Users,
    color: 'bg-blue-100',
    iconColor: 'text-blue-600',
    path: '/services/influencer-marketing',
    items: ['Campaign Strategy', 'Creator Partnerships', 'Brand Collaborations', 'Performance Analytics']
  },
  {
    title: 'Video Editing',
    icon: Video,
    color: 'bg-green-100',
    iconColor: 'text-green-600',
    path: '/services/video-editing',
    items: ['CGI & VFX', 'Motion Graphics', 'Commercial Ads', 'Social Media Content']
  }
];

const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com' },
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Instagram', url: 'https://www.instagram.com/_nightmedia.in' },
  { name: 'Twitter', url: 'https://x.com/Nightmediaindia' },
  { name: 'WhatsApp', url: 'https://wa.me/919899505154' },
  { name: 'YouTube', url: 'https://www.youtube.com/@NightMediaindia' }
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', hasMegaMenu: true },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'nav-backdrop' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-mono font-bold magnetic">
            NIGHTMEDIA
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.hasMegaMenu ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setShowMegaMenu(true)}
                  onMouseLeave={() => setShowMegaMenu(false)}
                >
                  <Link
                    to={item.path}
                    className={`text-sm font-medium transition-colors hover:text-gray-300 magnetic flex items-center gap-1 ${
                      location.pathname.startsWith('/services') ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    {item.name}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${showMegaMenu ? 'rotate-180' : ''}`} />
                  </Link>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-gray-300 magnetic ${
                    location.pathname === item.path ? 'text-white' : 'text-gray-400'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Link
              to="/contact"
              className="glass px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all magnetic"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden magnetic"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mega Menu */}
        <div
          className={`hidden md:block absolute left-0 right-0 top-full transition-all duration-300 ${
            showMegaMenu ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
          }`}
          onMouseEnter={() => setShowMegaMenu(true)}
          onMouseLeave={() => setShowMegaMenu(false)}
        >
          <div className="max-w-7xl mx-auto px-6 pt-2">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Service Cards */}
              <div className="grid grid-cols-4 gap-0 p-6">
                {serviceCategories.map((category) => (
                  <Link
                    key={category.title}
                    to={category.path}
                    className="group p-6 rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 mx-2"
                  >
                    <div className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <category.icon className={`w-7 h-7 ${category.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.items.map((subItem) => (
                        <li key={subItem} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  </Link>
                ))}
              </div>
              
              {/* Bottom Section */}
              <div className="grid grid-cols-2 gap-0">
                {/* Follow Us */}
                <div className="bg-gray-900 px-6 py-4">
                  <div className="inline-block bg-white text-gray-900 px-4 py-1 rounded text-xs font-bold mb-3">
                    FOLLOW US
                  </div>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* For New Business */}
                <div className="bg-gray-900 px-6 py-4">
                  <div className="inline-block bg-white text-gray-900 px-4 py-1 rounded text-xs font-bold mb-3">
                    FOR NEW BUSINESS
                  </div>
                  <div className="flex flex-wrap gap-6">
                    <a href="mailto:contact@redknightmedia.in" className="text-sm text-gray-300 hover:text-white transition-colors">
                      contact@redknightmedia.in
                    </a>
                    <a href="tel:+919899051544" className="text-sm text-gray-300 hover:text-white transition-colors">
                      +91 98990 51544
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 glass rounded-lg p-4 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              item.hasMegaMenu ? (
                <div key={item.name}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 pb-4 space-y-4">
                      {serviceCategories.map((category) => (
                        <Link
                          key={category.title}
                          to={category.path}
                          className="block py-2 text-sm font-medium text-white"
                          onClick={() => setIsOpen(false)}
                        >
                          {category.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )
            ))}
            <Link
              to="/contact"
              className="block mt-4 text-center glass px-6 py-2 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all"
              onClick={() => setIsOpen(false)}
            >
              Get In Touch
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
