import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube } from 'lucide-react';
import NightMediaIcon from '../Logo/NightMediaIcon';
import NewsletterSignup from '@/components/Newsletter/NewsletterSignup';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-[hsl(var(--background))]">
      <div className="container-enterprise py-16 lg:py-20">
        {/* Newsletter band */}
        <div className="grid md:grid-cols-2 gap-10 items-center pb-14 mb-14 border-b border-border">
          <div>
            <p className="eyebrow mb-3">The Compound · Weekly</p>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Growth systems, in your inbox.
            </h3>
            <p className="text-muted-foreground max-w-md">
              One operator-grade email a week on AI-powered websites, automation, and revenue
              infrastructure.
            </p>
          </div>
          <NewsletterSignup variant="footer" source="footer" />
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <NightMediaIcon size={26} variant="white" />
              <span className="text-[15px] font-mono font-bold tracking-wide text-foreground">
                NIGHTMEDIA
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm mb-6 leading-relaxed">
              AI-first growth and digital experience company. Websites, content
              systems, brand systems, automation and CGI — engineered for
              ambitious global brands.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: 'https://www.instagram.com/_nightmedia.in', label: 'Instagram' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/company/nightmediaindia/', label: 'LinkedIn' },
                { Icon: Youtube, href: 'https://www.youtube.com/@NightMediaindia', label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full surface-card flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.16em] text-foreground font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/services/web-design" className="hover:text-foreground transition-colors">Web Design</Link></li>
              <li><Link to="/services/performance-marketing" className="hover:text-foreground transition-colors">Performance</Link></li>
              <li><Link to="/services/seo" className="hover:text-foreground transition-colors">SEO</Link></li>
              <li><Link to="/services/video-editing" className="hover:text-foreground transition-colors">Video</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.16em] text-foreground font-semibold mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/projects" className="hover:text-foreground transition-colors">Projects</Link></li>
              <li><Link to="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.16em] text-foreground font-semibold mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/ai-audit" className="hover:text-foreground transition-colors">Free AI Audit</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-foreground transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground">© 2026 Night Media. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">AI-first · Built for global brands.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
