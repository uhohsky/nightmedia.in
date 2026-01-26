
import React from 'react';
import Hero from '../components/Sections/Hero';
import TrustSection from '../components/Sections/TrustSection';
import ServicesPreview from '../components/Sections/ServicesPreview';
import ProcessSection from '../components/Sections/ProcessSection';
import FeaturedProjects from '../components/Sections/FeaturedProjects';
import CallToAction from '../components/Sections/CallToAction';

const Index = () => {
  return (
    <div className="pt-16 bg-background">
      <Hero />
      <TrustSection />
      <ServicesPreview />
      <ProcessSection />
      <FeaturedProjects />
      <CallToAction />
    </div>
  );
};

export default Index;
