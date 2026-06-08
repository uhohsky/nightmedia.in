import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

/**
 * Reusable CTA block dropped inside long-form blog posts.
 * Encourages readers to book a free AI Audit.
 */
const AiAuditCTA: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`glass-card glow-border rounded-2xl p-8 my-10 not-prose ${className}`}>
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass mb-4">
      <Sparkles className="w-3.5 h-3.5 text-primary" />
      <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
        Free AI Audit
      </span>
    </div>
    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
      Get a Free AI Audit for Your Business
    </h3>
    <p className="text-muted-foreground mb-6 max-w-xl">
      We'll review your website, marketing &amp; growth systems — no fluff, just
      actionable insights you can ship this week.
    </p>
    <Link
      to="/contact"
      className="inline-flex items-center gap-2 btn-primary-glow px-6 py-3 rounded-full text-primary-foreground font-semibold group"
    >
      <span>Book Your Free Audit</span>
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
);

export default AiAuditCTA;
