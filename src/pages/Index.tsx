import React from 'react';
import Hero from '../components/Sections/Hero';
import TrustSection from '../components/Sections/TrustSection';
import ProcessSection from '../components/Sections/ProcessSection';
import ServicesPreview from '../components/Sections/ServicesPreview';
import SeoSupportSection from '../components/Sections/SeoSupportSection';
import FeaturedProjects from '../components/Sections/FeaturedProjects';
import FounderSection from '../components/Sections/FounderSection';
import CallToAction from '../components/Sections/CallToAction';

const Index = () => {
  return (
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
        {/* 1. ATTENTION: The 'Big Hook' for International Revenue */}
        <Hero />
        
        {/* 2. AUTHORITY: Immediate Social Proof & Trust Indicators */}
        <TrustSection />
        
        {/* 3. CLARITY: How your 'Growth Engine' works step-by-step */}
        <ProcessSection />
        
        {/* 4. UTILITY: The specific technical pillars (Web, Ads, Design) */}
        <ServicesPreview />
        
        {/* 5. EDUCATION: Highlighting the SEO bottleneck for brands */}
        <SeoSupportSection />
        
        {/* 6. PROOF: High-ticket case studies and visual evidence */}
        <FeaturedProjects />
        
        {/* 7. TRUST: The personal connection with Sky (The Founder) */}
        <FounderSection />
        
        {/* 8. CONVERSION: The high-intent Call to Action */}
        <CallToAction />
      </div>
    </main>
  );
};

export default Index;