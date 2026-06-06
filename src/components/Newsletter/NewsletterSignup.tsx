import React, { useState } from 'react';
import { Sparkles, Check } from 'lucide-react';

interface NewsletterSignupProps {
  variant?: 'inline' | 'card' | 'footer';
  source?: string;
  className?: string;
}

/**
 * "The Compound" — Night Media's growth-systems newsletter.
 * Captures top-of-funnel visitors not ready to buy.
 * Submits to the existing Getform endpoint with a `source` tag.
 */
const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  variant = 'inline',
  source = 'site',
  className = '',
}) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) || trimmed.length > 255) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    try {
      const fd = new FormData();
      fd.append('email', trimmed);
      fd.append('form', 'newsletter');
      fd.append('source', source);
      const res = await fetch('https://getform.io/f/bnlxyrxb', {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('failed');
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  if (variant === 'footer') {
    return (
      <form onSubmit={handleSubmit} className={`w-full ${className}`} aria-label="Subscribe to The Compound newsletter">
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="flex-1 bg-secondary/40 border border-border rounded-full px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary-glow px-5 py-2.5 rounded-full text-sm text-primary-foreground font-medium whitespace-nowrap disabled:opacity-60"
          >
            {status === 'loading' ? 'Joining…' : status === 'success' ? 'Subscribed' : 'Subscribe'}
          </button>
        </div>
        {status === 'success' && (
          <p className="text-xs text-primary mt-2 flex items-center gap-1"><Check className="w-3 h-3" />You're in. First issue lands soon.</p>
        )}
        {status === 'error' && (
          <p className="text-xs text-destructive mt-2">Please enter a valid email and try again.</p>
        )}
      </form>
    );
  }

  // card / inline shared
  const wrapper =
    variant === 'card'
      ? 'glass-card glow-border rounded-3xl p-8 md:p-12 text-center'
      : '';

  return (
    <div className={`${wrapper} ${className}`}>
      {variant === 'card' && (
        <>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-5">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">The Compound · Weekly</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            Get the growth systems most agencies won't share.
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            One operator-grade email each week on AI-powered websites, content engines, and automation that compounds revenue. No fluff. Unsubscribe anytime.
          </p>
        </>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" aria-label="Subscribe to The Compound newsletter">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your work email"
          className="flex-1 bg-secondary/50 border border-border rounded-full px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
          aria-label="Email address"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-primary-glow px-6 py-3.5 rounded-full text-primary-foreground font-medium whitespace-nowrap disabled:opacity-60"
        >
          {status === 'loading' ? 'Joining…' : status === 'success' ? 'Subscribed ✓' : 'Subscribe'}
        </button>
      </form>
      {status === 'success' && (
        <p className="text-sm text-primary mt-4 flex items-center justify-center gap-1.5"><Check className="w-4 h-4" />You're in. First issue lands soon.</p>
      )}
      {status === 'error' && (
        <p className="text-sm text-destructive mt-4">Please enter a valid email and try again.</p>
      )}
    </div>
  );
};

export default NewsletterSignup;
