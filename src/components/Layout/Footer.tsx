import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">NIGHTMEDIA</h3>
            <p className="text-muted-foreground max-w-md mb-6 leading-relaxed">
              Creating cinematic digital experiences that push the boundaries of creativity and technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/web-design" className="text-muted-foreground hover:text-accent transition-colors">Web Design</Link></li>
              <li><Link to="/services/influencer-marketing" className="text-muted-foreground hover:text-accent transition-colors">Influencer Marketing</Link></li>
              <li><Link to="/services/cgi-ads" className="text-muted-foreground hover:text-accent transition-colors">CGI Ads</Link></li>
              <li><Link to="/services/video-editing" className="text-muted-foreground hover:text-accent transition-colors">Video Editing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-muted-foreground hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-accent transition-colors">Projects</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 NightMedia. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-muted-foreground hover:text-accent text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-muted-foreground hover:text-accent text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
