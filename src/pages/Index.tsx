import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Sections/Hero';
import FounderTrustBar from '../components/Sections/FounderTrustBar';
import TrustSection from '../components/Sections/TrustSection';
import ProcessSection from '../components/Sections/ProcessSection';
import ServicesPreview from '../components/Sections/ServicesPreview';
import SeoSupportSection from '../components/Sections/SeoSupportSection';
import FeaturedProjects from '../components/Sections/FeaturedProjects';
import FounderSection from '../components/Sections/FounderSection';
import NewsletterSignup from '../components/Newsletter/NewsletterSignup';
import CallToAction from '../components/Sections/CallToAction';

const Index = () => {
  return (
    <>
    <Helmet>
      <title>NightMedia | Website Development & Growth Agency in India</title>
      <meta name="description" content="Night Media builds high-converting websites, funnels, and growth systems for startups and businesses in India." />
      <link rel="canonical" href="https://night-media.lovable.app/" />
      <meta property="og:title" content="NightMedia | Website Development & Growth Agency in India" />
      <meta property="og:description" content="Night Media builds high-converting websites, funnels, and growth systems for startups and businesses in India." />
      <meta property="og:url" content="https://night-media.lovable.app/" />
      <meta property="og:type" content="website" />
    </Helmet>
    <main className="relative bg-background pt-16 selection:bg-primary selection:text-white">
      {/* Optimized Noise Overlay: 
          Using pointer-events-none and absolute positioning to prevent 
          performance lag on mobile scrolls.
      */}
      <div 
        className="noise-overlay pointer-events-none absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay" 
        aria-hidden="true"
      />
      
      <div className="relative z-10 flex flex-col gap-0">
        {/* 1. ATTENTION: AI-first hook + tiered CTAs */}
        <Hero />

        {/* 2. FOUNDER TRUST: Sky + UpGrad + AI-first + building in public */}
        <FounderTrustBar />

        {/* 3. AUTHORITY: Immediate Social Proof & Trust Indicators */}
        <TrustSection />

        {/* 4. CLARITY: How your 'Growth Engine' works step-by-step */}
        <ProcessSection />

        {/* 5. UTILITY: The specific technical pillars (Web, Ads, Design) */}
        <ServicesPreview />

        {/* 6. EDUCATION: Highlighting the SEO bottleneck for brands */}
        <SeoSupportSection />

        {/* 7. PROOF: High-ticket case studies and visual evidence */}
        <FeaturedProjects />

        {/* 8. TRUST: The personal connection with Sky (The Founder) */}
        <FounderSection />

        {/* 9. LEVEL-1 CAPTURE: Newsletter for visitors not ready to buy */}
        <section className="px-4 sm:px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <NewsletterSignup variant="card" source="homepage" />
          </div>
        </section>

        {/* 10. CONVERSION: The high-intent Call to Action */}
        <CallToAction />
      </div>
    </main>
    </>
  );
};

export default Index;