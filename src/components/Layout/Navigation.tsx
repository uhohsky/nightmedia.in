import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import NightMediaIcon from '../Logo/NightMediaIcon';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-backdrop' : 'bg-transparent'
      }`}
    >
      <div className="container-enterprise py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <NightMediaIcon size={26} variant="white" />
            <span className="text-[15px] font-mono font-bold tracking-wide text-foreground">
              NIGHTMEDIA
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-4 py-2 rounded-full text-[14px] font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-foreground bg-white/5'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-3 btn-primary-glow px-5 py-2 rounded-full text-[14px] font-semibold"
            >
              Get in touch
            </Link>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 surface-card rounded-2xl p-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-3 px-4 rounded-xl text-base font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-foreground bg-white/5'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="block mt-2 text-center btn-primary-glow px-6 py-3 rounded-full text-base font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Get in touch
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
