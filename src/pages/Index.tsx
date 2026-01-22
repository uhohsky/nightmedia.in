
import React from 'react';
import Hero from '../components/Sections/Hero';
import ServicesPreview from '../components/Sections/ServicesPreview';
import FeaturedProjects from '../components/Sections/FeaturedProjects';
import CallToAction from '../components/Sections/CallToAction';

const Index = () => {
  return (
    <div className="pt-16 bg-white">
      <Hero />
      <ServicesPreview />
      <FeaturedProjects />
      <CallToAction />
    </div>
  );
};

export default Index;
