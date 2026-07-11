import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroCinematic from '../components/Sections/HeroCinematic';
import TrustBarLight from '../components/Sections/TrustBarLight';
import CapabilityShowcase from '../components/Sections/CapabilityShowcase';
import MetricsBand from '../components/Sections/MetricsBand';
import TestimonialsSection from '../components/Sections/TestimonialsSection';
import ClosingCTA from '../components/Sections/ClosingCTA';

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

      <main className="relative selection:bg-primary selection:text-white pt-16">
        {/* Alternating environments — each section owns its theme via env-* */}
        <HeroCinematic />
        <TrustBarLight />
        <CapabilityShowcase />
        <MetricsBand />
        <TestimonialsSection />
        <ClosingCTA />
      </main>
    </>
  );
};

export default Index;
