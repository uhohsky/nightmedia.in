
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-mono font-bold mb-4">NIGHTMEDIA</h3>
            <p className="text-gray-400 max-w-md mb-6">
              Creating cinematic digital experiences that push the boundaries of creativity and technology.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/_nightmedia.in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors magnetic">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors magnetic">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors magnetic">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services/web-design" className="hover:text-white transition-colors">Web Design</Link></li>
              <li><Link to="/services/influencer-marketing" className="hover:text-white transition-colors">Influencer Marketing</Link></li>
              <li><Link to="/services/cgi-ads" className="hover:text-white transition-colors">CGI Ads</Link></li>
              <li><Link to="/services/video-editing" className="hover:text-white transition-colors">Video Editing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 NightMedia. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
