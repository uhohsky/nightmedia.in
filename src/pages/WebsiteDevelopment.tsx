import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { ArrowRight, ArrowUpRight, Check, MessageCircle, Plus, Minus } from 'lucide-react';
import { CONSENT_KEY, hasConsent, initPixel, pixelConfigured, track } from '@/lib/metaPixel';

const WHATSAPP = 'https://wa.me/919899505154?text=' + encodeURIComponent("Hi Night Media, I'd like to discuss a website project.");

const services = [
  { n: '01', t: 'Custom Website Development', d: 'Bespoke websites designed around business goals, user experience and performance.' },
  { n: '02', t: 'Shopify & E-commerce Development', d: 'Premium online stores with intuitive shopping experiences and scalable architecture.' },
  { n: '03', t: 'Landing Page Development', d: 'Conversion-focused landing pages built for paid campaigns, lead generation and customer acquisition.' },
  { n: '04', t: 'Website Redesign', d: 'Transform outdated websites into modern, responsive digital experiences.' },
  { n: '05', t: 'CGI & Immersive Web Experiences', d: 'Advanced visual storytelling, 3D elements and immersive digital experiences for ambitious brands.' },
];
const reasons = [
  { t: 'Strategy Before Design', d: 'Every project starts with your business, audience and competitors — so design decisions have a reason behind them.' },
  { t: 'Performance-Focused Development', d: 'Responsive builds, clean code and technical SEO foundations so pages load fast and work on every device.' },
  { t: 'Premium Visual Storytelling', d: 'Editorial layouts, motion and CGI used with restraint to make your brand feel considered and memorable.' },
  { t: 'Built Around Business Objectives', d: 'Pages are structured around the action you want visitors to take — an enquiry, a purchase or a booking.' },
];
const steps = [
  { n: '01', t: 'Discover', d: 'Understand the business, objectives, audience and competition.' },
  { n: '02', t: 'Design', d: "Create the website's structure, user experience and visual identity." },
  { n: '03', t: 'Develop', d: 'Build the website with responsive design, technical SEO foundations and performance optimisation.' },
  { n: '04', t: 'Launch', d: 'Test, deploy and prepare the website for real-world use.' },
];
const collab = [
  { t: 'Direct access', d: 'You work with the people designing and building your website, not a chain of account managers.' },
  { t: 'Clear milestones', d: 'Scope, stages and review points are agreed before work begins.' },
  { t: 'Shared reviews', d: 'You see designs and working builds as they progress and give feedback at each stage.' },
];
const faqs = [
  ['How much does a custom website cost?', 'It depends on scope — number of pages, features, integrations and visual complexity. After a short consultation we share a fixed quote for your project.'],
  ['How long does website development take?', 'Timelines depend on scope and how quickly content and feedback are ready. We agree a schedule with you before work begins.'],
  ['Do you develop Shopify websites?', 'Yes. We design and develop Shopify and other e-commerce stores.'],
  ['Can you redesign an existing website?', 'Yes. We can redesign your current website while keeping what already works, including existing content and search visibility where possible.'],
  ['Will my website be mobile responsive?', 'Yes. Every website we build is designed and tested for mobile, tablet and desktop.'],
  ['Do you provide ongoing maintenance?', 'Yes, maintenance and support can be arranged after launch. We discuss what you need during the consultation.'],
  ['Can you integrate payment gateways and third-party tools?', 'Yes. We can integrate payment gateways, CRMs, analytics, booking tools and other third-party services your business uses.'],
  ['Can I run Meta and Google Ads to my landing page?', 'Yes. Landing pages can be prepared for advertising traffic, including tracking setup for platforms like Meta and Google.'],
];
const types = ['New Business Website', 'Website Redesign', 'Shopify / E-commerce', 'Landing Page', 'Custom Website', 'CGI / Immersive Website'];
const budgets = ['Below ₹25,000', '₹25,000–₹50,000', '₹50,000–₹1,00,000', '₹1,00,000–₹3,00,000', 'Above ₹3,00,000'];
const timelines = ['Immediately', 'Within 30 Days', 'Within 3 Months', 'Just Exploring'];

const schema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name').max(100),
  business: z.string().trim().min(1, 'Please enter your business name').max(120),
  email: z.string().trim().email('Please enter a valid email').max(255),
  phone: z.string().trim().regex(/^[+\d][\d\s-]{7,17}$/, 'Please enter a valid phone number'),
  website: z.union([z.literal(''), z.string().trim().url('Please enter a full URL, e.g. https://example.com').max(255)]),
  type: z.enum(types as [string, ...string[]], { errorMap: () => ({ message: 'Please choose a website type' }) }),
  budget: z.enum(budgets as [string, ...string[]], { errorMap: () => ({ message: 'Please choose a budget' }) }),
  timeline: z.enum(timelines as [string, ...string[]], { errorMap: () => ({ message: 'Please choose a timeline' }) }),
  description: z.string().trim().min(10, 'Please add a few words about your project').max(1500),
});
type FormState = Record<keyof z.infer<typeof schema>, string>;
const empty: FormState = { name: '', business: '', email: '', phone: '', website: '', type: '', budget: '', timeline: '', description: '' };

const inputCls = 'w-full bg-secondary/60 border border-border rounded-lg px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/25 focus:outline-none transition-colors';

const LeadForm = () => {
  const [f, setF] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const sent = useRef(false);
  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF((s) => ({ ...s, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'loading' || sent.current) return;
    const r = schema.safeParse(f);
    if (!r.success) {
      const errs: Partial<FormState> = {};
      r.error.issues.forEach((i) => { errs[i.path[0] as keyof FormState] ??= i.message; });
      setErrors(errs); return;
    }
    setErrors({}); setStatus('loading');
    try {
      const fd = new FormData();
      Object.entries(r.data).forEach(([k, v]) => fd.append(k, v));
      fd.append('form', 'website-development-landing');
      const res = await fetch('https://getform.io/f/bnlxyrxb', { method: 'POST', body: fd, headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error();
      sent.current = true;
      track('Lead', { content_name: 'Website Development Enquiry', content_category: r.data.type }, `lead-${Date.now()}`);
      setStatus('success');
    } catch { setStatus('error'); }
  };

  if (status === 'success') return (
    <div className="border border-border rounded-2xl p-8 sm:p-10 bg-card text-center" role="status">
      <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-5"><Check className="w-6 h-6 text-primary" /></div>
      <h3 className="text-2xl font-bold mb-3">Enquiry received.</h3>
      <p className="text-muted-foreground max-w-md mx-auto">Thank you — we'll review your project details and get back to you by email or phone.</p>
    </div>
  );

  const err = (k: keyof FormState) => errors[k] && <p id={`${k}-err`} className="text-sm text-destructive mt-1.5">{errors[k]}</p>;
  const lab = (k: string, t: string, req = true) => <label htmlFor={`wd-${k}`} className="block text-sm font-medium mb-2">{t}{req ? ' *' : ' (optional)'}</label>;
  const aria = (k: keyof FormState) => ({ id: `wd-${k}`, 'aria-invalid': !!errors[k], 'aria-describedby': errors[k] ? `${k}-err` : undefined });

  return (
    <form onSubmit={submit} noValidate className="relative z-20 border border-border rounded-2xl p-5 sm:p-8 bg-card space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>{lab('name', 'Full Name')}<input {...aria('name')} className={inputCls} value={f.name} onChange={set('name')} autoComplete="name" maxLength={100} />{err('name')}</div>
        <div>{lab('business', 'Business Name')}<input {...aria('business')} className={inputCls} value={f.business} onChange={set('business')} autoComplete="organization" maxLength={120} />{err('business')}</div>
        <div>{lab('email', 'Work Email')}<input {...aria('email')} type="email" inputMode="email" className={inputCls} value={f.email} onChange={set('email')} autoComplete="email" maxLength={255} />{err('email')}</div>
        <div>{lab('phone', 'Phone Number')}<input {...aria('phone')} type="tel" inputMode="tel" className={inputCls} value={f.phone} onChange={set('phone')} autoComplete="tel" maxLength={18} placeholder="+91" />{err('phone')}</div>
      </div>
      <div>{lab('website', 'Website URL', false)}<input {...aria('website')} type="url" inputMode="url" className={inputCls} value={f.website} onChange={set('website')} placeholder="https://" maxLength={255} />{err('website')}</div>
      <div className="grid sm:grid-cols-3 gap-5">
        {([['type', 'Type of Website', types], ['budget', 'Estimated Budget', budgets], ['timeline', 'Project Timeline', timelines]] as const).map(([k, t, opts]) => (
          <div key={k}>{lab(k, t)}<select {...aria(k)} className={inputCls} value={f[k]} onChange={set(k)}><option value="">Select</option>{opts.map((o) => <option key={o}>{o}</option>)}</select>{err(k)}</div>
        ))}
      </div>
      <div>{lab('description', 'Brief Project Description')}<textarea {...aria('description')} rows={4} className={`${inputCls} resize-none`} value={f.description} onChange={set('description')} maxLength={1500} />{err('description')}</div>
      {status === 'error' && <p className="text-sm text-destructive" role="alert">We couldn't send your enquiry. Please try again or message us on WhatsApp.</p>}
      <button type="submit" disabled={status === 'loading'} className="btn-primary-glow w-full sm:w-auto min-h-12 px-8 py-4 rounded-full text-primary-foreground font-semibold tracking-wide inline-flex items-center justify-center gap-2 disabled:opacity-60">
        {status === 'loading' ? 'SENDING…' : 'REQUEST A CONSULTATION'} <ArrowRight className="w-5 h-5" />
      </button>
    </form>
  );
};

const ConsentBar = ({ onChange }: { onChange: () => void }) => {
  const [show, setShow] = useState(() => pixelConfigured() && localStorage.getItem(CONSENT_KEY) === null);
  if (!show) return null;
  const choose = (v: 'granted' | 'denied') => { localStorage.setItem(CONSENT_KEY, v); setShow(false); onChange(); };
  return (
    <div className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-[60] border border-border bg-card rounded-xl p-4 text-sm">
      <p className="text-muted-foreground mb-3">We use advertising cookies to measure our Meta ads. See our <Link to="/privacy-policy" className="text-foreground underline">Privacy Policy</Link>.</p>
      <div className="flex gap-2"><button onClick={() => choose('granted')} className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium">Accept</button><button onClick={() => choose('denied')} className="px-4 py-2 rounded-full border border-border">Decline</button></div>
    </div>
  );
};

const WebsiteDevelopment = () => {
  const [open, setOpen] = useState<number | null>(0);
  const startTracking = () => { if (hasConsent()) { initPixel(); track('ViewContent', { content_name: 'Website Development Landing' }); } };
  useEffect(() => { startTracking(); }, []);

  const H2 = ({ k, children }: { k: string; children: React.ReactNode }) => (
    <div className="mb-12 sm:mb-16"><p className="text-xs text-primary uppercase tracking-[0.35em] mb-4 font-mono">{k}</p><h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight max-w-3xl leading-[1.08]">{children}</h2></div>
  );

  return (
    <>
      <Helmet>
        <title>Premium Website Design & Development | Night Media</title>
        <meta name="description" content="Night Media creates premium websites, custom digital experiences and high-performance landing pages for ambitious businesses." />
        <link rel="canonical" href="https://night-media.lovable.app/website-development" />
        <meta property="og:title" content="Premium Website Design & Development | Night Media" />
        <meta property="og:description" content="Night Media creates premium websites, custom digital experiences and high-performance landing pages for ambitious businesses." />
        <meta property="og:url" content="https://night-media.lovable.app/website-development" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="bg-background overflow-x-hidden pb-16 md:pb-0">
        {/* HERO */}
        <section className="relative min-h-[100svh] flex items-center pt-28 pb-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <p className="text-xs text-muted-foreground uppercase tracking-[0.35em] mb-6 font-mono">Website Design & Development Studio</p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.04] mb-6">We Build Digital Experiences That Move Brands Forward.</h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10">Premium websites engineered through strategic design, immersive visuals and high-performance development.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#enquiry" className="btn-primary-glow min-h-12 px-8 py-4 rounded-full text-primary-foreground font-semibold tracking-wide inline-flex items-center justify-center gap-2">START YOUR PROJECT <ArrowRight className="w-5 h-5" /></a>
                <a href="#work" className="min-h-12 px-8 py-4 rounded-full border border-border font-semibold tracking-wide inline-flex items-center justify-center hover:bg-secondary transition-colors">EXPLORE OUR WORK</a>
              </div>
            </div>
            {/* Mockup composition */}
            <div className="lg:col-span-6 relative h-[340px] sm:h-[460px] [perspective:1600px]" aria-hidden="true">
              <div className="absolute inset-0 m-auto w-[92%] h-[78%] rounded-xl border border-border bg-card overflow-hidden shadow-2xl [transform:rotateY(-14deg)_rotateX(6deg)] float-element">
                <div className="h-7 border-b border-border flex items-center gap-1.5 px-3"><span className="w-2 h-2 rounded-full bg-muted" /><span className="w-2 h-2 rounded-full bg-muted" /><span className="w-2 h-2 rounded-full bg-muted" /></div>
                <img src="/images/projects/sfai.jpg" alt="" className="w-full h-full object-cover object-top" fetchPriority="high" />
              </div>
              <div className="absolute right-0 bottom-0 w-[28%] min-w-[96px] aspect-[9/19] rounded-[1.4rem] border-4 border-secondary bg-card overflow-hidden shadow-2xl float-element-delayed">
                <img src="/images/projects/sfai.jpg" alt="" className="w-full h-full object-cover object-left-top" />
              </div>
            </div>
          </div>
        </section>

        {/* POSITIONING */}
        <section className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">Design Meets Technology. Strategy Meets Execution.</h2>
            <div className="space-y-5 text-lg text-muted-foreground">
              <p>We Don't Just Build Websites. We Build Digital Experiences.</p>
              <p>We combine strategic thinking, premium design and advanced development to create digital experiences that help ambitious brands stand apart — bringing design, development and visual storytelling together under one studio.</p>
            </div>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="px-4 sm:px-6 py-20 sm:py-28 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <H2 k="Selected Work">Selected Work. Built to Stand Apart.</H2>
            <article className="grid lg:grid-cols-12 gap-8 items-center border-t border-border pt-10">
              <div className="lg:col-span-7 rounded-xl overflow-hidden border border-border">
                <img src="/images/projects/sfai.jpg" alt="SYNFICTION.AI website desktop view" loading="lazy" className="w-full aspect-[16/10] object-cover object-top" />
              </div>
              <div className="lg:col-span-5">
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">AI / Technology · Web Design & Development</p>
                <h3 className="text-3xl sm:text-4xl font-bold mb-4">SYNFICTION.AI</h3>
                <p className="text-muted-foreground text-lg mb-8">A product-led website for an AI creative platform, designed to explain complex technology simply and guide visitors toward signing up.</p>
                <a href="https://synfiction.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors">View Live Website <ArrowUpRight className="w-4 h-4" /></a>
              </div>
            </article>
            <p className="mt-12 text-muted-foreground">More of our work is on the <Link to="/projects" className="text-foreground underline underline-offset-4">projects page</Link>.</p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="px-4 sm:px-6 py-20 sm:py-28 bg-card/40 border-y border-border">
          <div className="max-w-7xl mx-auto">
            <H2 k="Services">Everything Your Digital Presence Needs.</H2>
            <div>
              {services.map((s) => (
                <div key={s.n} className="group grid sm:grid-cols-12 gap-3 sm:gap-8 py-8 border-t border-border last:border-b items-baseline">
                  <span className="sm:col-span-1 font-mono text-sm text-muted-foreground">{s.n}</span>
                  <h3 className="sm:col-span-5 text-2xl sm:text-3xl font-semibold group-hover:text-primary transition-colors">{s.t}</h3>
                  <p className="sm:col-span-6 text-muted-foreground text-lg">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className="px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-7xl mx-auto">
            <H2 k="Why Night Media">Not Just Another Website Development Agency.</H2>
            <div className="grid sm:grid-cols-2 gap-px bg-border border border-border rounded-xl overflow-hidden">
              {reasons.map((r) => (
                <div key={r.t} className="bg-background p-8 sm:p-10"><h3 className="text-xl sm:text-2xl font-semibold mb-3">{r.t}</h3><p className="text-muted-foreground">{r.d}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <H2 k="Process">From First Conversation to Final Launch.</H2>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((s) => (
                <li key={s.n} className="border-t-2 border-primary/60 pt-6"><span className="font-mono text-sm text-muted-foreground">{s.n}</span><h3 className="text-2xl font-bold tracking-wide mt-2 mb-3">{s.t.toUpperCase()}</h3><p className="text-muted-foreground">{s.d}</p></li>
              ))}
            </ol>
          </div>
        </section>

        {/* COLLABORATION (no fabricated testimonials) */}
        <section className="px-4 sm:px-6 py-20 sm:py-28 bg-card/40 border-y border-border">
          <div className="max-w-7xl mx-auto">
            <H2 k="Working Together">How We Work With You.</H2>
            <div className="grid md:grid-cols-3 gap-8">
              {collab.map((c) => <div key={c.t}><h3 className="text-xl font-semibold mb-2">{c.t}</h3><p className="text-muted-foreground">{c.d}</p></div>)}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-4 sm:px-6 py-20 sm:py-28">
          <div className="max-w-4xl mx-auto">
            <H2 k="FAQ">Questions, Answered.</H2>
            <div className="border-t border-border">
              {faqs.map(([q, a], i) => (
                <div key={q} className="border-b border-border">
                  <button className="w-full flex justify-between items-center gap-4 py-5 text-left text-lg font-medium min-h-12" aria-expanded={open === i} onClick={() => setOpen(open === i ? null : i)}>
                    {q}{open === i ? <Minus className="w-5 h-5 shrink-0" /> : <Plus className="w-5 h-5 shrink-0" />}
                  </button>
                  {open === i && <p className="pb-6 text-muted-foreground">{a}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA + FORM */}
        <section id="enquiry" className="px-4 sm:px-6 py-20 sm:py-28 border-t border-border scroll-mt-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] mb-6">Your Next Digital Experience Starts Here.</h2>
              <p className="text-lg text-muted-foreground mb-8">Tell us what you're building. Let's create something worth remembering.</p>
              <p className="text-xs uppercase tracking-[0.3em] font-mono text-primary mb-4">LET'S DISCUSS YOUR PROJECT</p>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground"><MessageCircle className="w-5 h-5" /> Prefer WhatsApp? Message us directly</a>
            </div>
            <div className="lg:col-span-7"><LeadForm /></div>
          </div>
        </section>
      </div>

      {/* Sticky mobile CTA */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 grid grid-cols-2 gap-2 p-3 bg-background/95 backdrop-blur border-t border-border">
        <a href="#enquiry" className="btn-primary-glow min-h-12 rounded-full text-primary-foreground font-semibold text-sm inline-flex items-center justify-center">START A PROJECT</a>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="min-h-12 rounded-full border border-border font-semibold text-sm inline-flex items-center justify-center gap-2"><MessageCircle className="w-4 h-4" /> WhatsApp</a>
      </div>
      <ConsentBar onChange={startTracking} />
    </>
  );
};

export default WebsiteDevelopment;
