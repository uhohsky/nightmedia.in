import React from 'react';
import Hero from '../components/Sections/Hero';
import SeoSupportSection from '../components/Sections/SeoSupportSection';
import TrustSection from '../components/Sections/TrustSection';
import ServicesPreview from '../components/Sections/ServicesPreview';
import ProcessSection from '../components/Sections/ProcessSection';
import FeaturedProjects from '../components/Sections/FeaturedProjects';
import FounderSection from '../components/Sections/FounderSection';
import CallToAction from '../components/Sections/CallToAction';

const Index = () => {
  return (
    <div className="pt-16 bg-background relative">
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />
      
      {/* Sections */}
      <Hero />
      <SeoSupportSection />
      <TrustSection />
      <ServicesPreview />
      <ProcessSection />
      <FeaturedProjects />
      <FounderSection />
      <CallToAction />
    </div>
  );
};

export default Index;
