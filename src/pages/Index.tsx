import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroPremium from '../components/Sections/HeroPremium';
import TrustedByBar from '../components/Sections/TrustedByBar';
import ServicesPreview from '../components/Sections/ServicesPreview';
import HorizontalCaseStudies from '../components/Sections/HorizontalCaseStudies';
import GrowthSnapshot from '../components/AI/GrowthSnapshot';
import ProcessSection from '../components/Sections/ProcessSection';
import ResultsSection from '../components/Sections/ResultsSection';
import TestimonialsSection from '../components/Sections/TestimonialsSection';
import NewsletterSignup from '../components/Newsletter/NewsletterSignup';
import CallToAction from '../components/Sections/CallToAction';
import NDivider from '../components/Visuals/NDivider';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Night Media — AI-First Growth & Digital Experience Company</title>
        <meta
          name="description"
          content="Night Media designs AI-powered websites, brand systems and interactive experiences for the world's most ambitious brands."
        />
        <link rel="canonical" href="https://nightmedia.in/" />
        <meta property="og:title" content="Night Media — AI-First Growth & Digital Experience Company" />
        <meta
          property="og:description"
          content="AI-powered websites, brand systems and interactive experiences — engineered for ambitious global brands."
        />
        <meta property="og:url" content="https://nightmedia.in/" />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="relative bg-background pt-16 selection:bg-primary selection:text-white">
        <div
          className="noise-overlay pointer-events-none absolute inset-0 z-0 opacity-[0.025] mix-blend-overlay"
          aria-hidden="true"
        />

        <div className="relative z-10 flex flex-col">
          {/* 1. HERO — Night Core */}
          <HeroPremium />

          {/* 2. TRUSTED BY */}
          <TrustedByBar />

          {/* 3. CAPABILITIES */}
          <ServicesPreview />

          <NDivider label="Selected work" />

          {/* 4. FEATURED WORK */}
          <HorizontalCaseStudies />

          <NDivider label="AI Experiences" />

          {/* 5. AI EXPERIENCES — Playground */}
          <GrowthSnapshot />

          {/* 6. PROCESS */}
          <ProcessSection />

          {/* 7. RESULTS */}
          <ResultsSection />

          {/* 8. TESTIMONIALS */}
          <TestimonialsSection />

          {/* 9. INSIGHTS — Newsletter */}
          <section className="px-4 sm:px-6 py-24 lg:py-32 border-t border-border/60">
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
