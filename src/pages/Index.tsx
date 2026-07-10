import React from 'react';
import { Helmet } from 'react-helmet-async';
import BentoHero from '../components/Sections/BentoHero';
import FounderTrustBar from '../components/Sections/FounderTrustBar';
import TrustSection from '../components/Sections/TrustSection';
import ProcessSection from '../components/Sections/ProcessSection';
import ServicesPreview from '../components/Sections/ServicesPreview';
import SeoSupportSection from '../components/Sections/SeoSupportSection';
import HorizontalCaseStudies from '../components/Sections/HorizontalCaseStudies';
import FounderSection from '../components/Sections/FounderSection';
import NewsletterSignup from '../components/Newsletter/NewsletterSignup';
import CallToAction from '../components/Sections/CallToAction';
import GrowthSnapshot from '../components/AI/GrowthSnapshot';
import NDivider from '../components/Visuals/NDivider';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Night Media — AI-First Growth & Digital Experience Company</title>
        <meta name="description" content="Night Media is an AI-first growth and digital experience company — AI-powered websites, content systems, brand systems, automation and CGI experiences for ambitious global brands." />
        <link rel="canonical" href="https://nightmedia.in/" />
        <meta property="og:title" content="Night Media — AI-First Growth & Digital Experience Company" />
        <meta property="og:description" content="AI-powered websites, content systems, brand systems, automation and CGI experiences — engineered for ambitious global brands." />
        <meta property="og:url" content="https://nightmedia.in/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="relative bg-background pt-16 selection:bg-primary selection:text-white">
        <div
          className="noise-overlay pointer-events-none absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col">
          {/* 1. HERO — bento composition anchored by metallic N */}
          <BentoHero />

          {/* 2. FOUNDER + TRUST */}
          <FounderTrustBar />
          <TrustSection />

          <NDivider label="How we build" />

          {/* 3. PROCESS */}
          <ProcessSection />

          {/* 4. SOLUTIONS */}
          <ServicesPreview />

          <NDivider label="AI Playground" />

          {/* 5. INTERACTIVE — Growth Snapshot */}
          <GrowthSnapshot />

          {/* 6. SEO EDU */}
          <SeoSupportSection />

          <NDivider label="Selected work" />

          {/* 7. CASE STUDIES — horizontal scroll */}
          <HorizontalCaseStudies />

          {/* 8. FOUNDER */}
          <FounderSection />

          {/* 9. NEWSLETTER */}
          <section className="px-4 sm:px-6 py-20">
            <div className="max-w-4xl mx-auto">
              <NewsletterSignup variant="card" source="homepage" />
            </div>
          </section>

          {/* 10. FINAL CTA */}
          <CallToAction />
        </div>
      </main>
    </>
  );
};

export default Index;
