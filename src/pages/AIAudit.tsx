import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Sparkles, Check, ArrowRight, Cpu, LineChart, Search, Workflow } from 'lucide-react';

/**
 * /ai-audit — Phase 1 lead magnet.
 * Free AI Growth Audit: visitor submits site + context,
 * receives a personalised audit deck within 72 hours.
 */
const AIAudit = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    revenue: '',
    goal: '',
    consent: false,
  });

  const update = (k: string, v: string | boolean) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) return;
    setStatus('loading');
    try {
      const fd = new FormData();
      Object.entries(form).forEach(([k, v]) => fd.append(k, String(v)));
      fd.append('form', 'ai-growth-audit');
      const res = await fetch('https://getform.io/f/bnlxyrxb', {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('failed');
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const benefits = [
    { icon: Search, title: 'Conversion teardown', copy: 'Where your site leaks revenue — page by page.' },
    { icon: Cpu, title: 'AI opportunity map', copy: '5 places AI can compound output inside your funnel.' },
    { icon: Workflow, title: 'Automation shortlist', copy: 'High-ROI automations ranked by payback period.' },
    { icon: LineChart, title: '30/60/90 plan', copy: 'A prioritized roadmap your team can execute Monday.' },
  ];

  return (
    <>
      <Helmet>
        <title>Free AI Growth Audit | Night Media</title>
        <meta
          name="description"
          content="Get a personalised AI Growth Audit from Night Media. We teardown your website, funnel and automations and return a 30/60/90 day plan within 72 hours."
        />
        <link rel="canonical" href="https://night-media.lovable.app/ai-audit" />
        <meta property="og:title" content="Free AI Growth Audit | Night Media" />
        <meta property="og:description" content="A free, personalised AI-first teardown of your website, funnel and automations." />
        <meta property="og:url" content="https://night-media.lovable.app/ai-audit" />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="relative bg-background pt-24 pb-20 min-h-screen overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="gradient-orb gradient-orb-1 absolute top-[10%] left-[5%] w-[600px] h-[600px]" />
          <div className="gradient-orb gradient-orb-2 absolute bottom-[10%] right-[5%] w-[500px] h-[500px]" />
        </div>
        <div className="noise-overlay pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground font-medium">Free · 72-hour turnaround</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
              Your Free <span className="gradient-text-primary">AI Growth Audit</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              We tear down your website, funnel and automations through an AI-first lens
              and send back a prioritized 30/60/90 day plan. No pitch. No deck. Just leverage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Benefits */}
            <div className="lg:col-span-5 space-y-4">
              {benefits.map((b, i) => (
                <div key={i} className="glass-card glow-border rounded-2xl p-5 flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                    <b.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{b.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.copy}</p>
                  </div>
                </div>
              ))}
              <div className="glass-card rounded-2xl p-5 text-sm text-muted-foreground">
                <p>
                  Audits are personally reviewed by <span className="text-foreground font-medium">Sky</span>,
                  Night Media's founder. We accept ~10 per month to keep quality high.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              {status === 'success' ? (
                <div className="glass-card glow-border rounded-3xl p-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-5">
                    <Check className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Request received.</h2>
                  <p className="text-muted-foreground max-w-md mx-auto mb-8">
                    We've got it. Sky personally reviews every audit — expect your
                    plan in your inbox within 72 hours. While you wait:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link to="/blog" className="btn-primary-glow px-6 py-3 rounded-full text-primary-foreground font-medium">
                      Read the growth blog
                    </Link>
                    <Link to="/projects" className="glass-card glow-border px-6 py-3 rounded-full text-foreground font-medium">
                      See client systems
                    </Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card glow-border rounded-3xl p-6 md:p-10 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Your name" required value={form.name} onChange={(v) => update('name', v)} />
                    <Field label="Work email" required type="email" value={form.email} onChange={(v) => update('email', v)} />
                    <Field label="Company" required value={form.company} onChange={(v) => update('company', v)} />
                    <Field label="Website URL" required type="url" placeholder="https://" value={form.website} onChange={(v) => update('website', v)} />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">Annual revenue (optional)</label>
                    <select
                      value={form.revenue}
                      onChange={(e) => update('revenue', e.target.value)}
                      className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground focus:border-primary focus:outline-none"
                    >
                      <option value="">Select range</option>
                      <option>Pre-revenue</option>
                      <option>&lt; ₹50L</option>
                      <option>₹50L – ₹5Cr</option>
                      <option>₹5Cr – ₹50Cr</option>
                      <option>₹50Cr+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-muted-foreground mb-2">What's the #1 growth goal we should focus on?</label>
                    <textarea
                      required
                      maxLength={1000}
                      rows={4}
                      value={form.goal}
                      onChange={(e) => update('goal', e.target.value)}
                      placeholder="e.g. Double inbound qualified leads / Cut CAC by 30% / Launch AI-powered support…"
                      className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none resize-none"
                    />
                  </div>
                  <label className="flex items-start gap-3 text-sm text-muted-foreground">
                    <input
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => update('consent', e.target.checked)}
                      className="mt-1 accent-primary"
                      required
                    />
                    <span>
                      I agree to receive my audit by email and occasional emails from Night Media.
                    </span>
                  </label>
                  {status === 'error' && (
                    <p className="text-sm text-destructive">Something went wrong. Please try again or email hello@nightmedia.in.</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'loading' || !form.consent}
                    className="btn-primary-glow w-full px-6 py-4 rounded-full text-primary-foreground font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {status === 'loading' ? 'Submitting…' : 'Request my free AI audit'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    Personally reviewed by Sky · 72-hour turnaround · No sales pitch.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

const Field = ({
  label,
  value,
  onChange,
  type = 'text',
  required,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) => (
  <div>
    <label className="block text-sm text-muted-foreground mb-2">{label}{required && ' *'}</label>
    <input
      type={type}
      required={required}
      maxLength={255}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
    />
  </div>
);

export default AIAudit;
