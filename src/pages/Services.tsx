import React from 'react';
import { Helmet } from 'react-helmet-async';
import ServicesHero from '../components/Services/ServicesHero';
import WhyWebDesign from '../components/Services/WhyWebDesign';
import WebDesignServices from '../components/Services/WebDesignServices';
import WebDesignProcess from '../components/Services/WebDesignProcess';
import SecondaryServices from '../components/Services/SecondaryServices';
import WhyNightMedia from '../components/Services/WhyNightMedia';
import ServicesCTA from '../components/Services/ServicesCTA';

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Web Design & Development Agency | Night Media India</title>
        <meta 
          name="description" 
          content="Night Media is a premium web design and development agency in India. We build high-converting websites, UI/UX design, and growth systems for startups and businesses." 
        />
        <meta 
          name="keywords" 
          content="web design agency, website development agency, UI UX design, web development India, conversion-focused design, responsive web design" 
        />
        <link rel="canonical" href="https://nightmedia.in/services" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Web Design & Development Agency | Night Media India" />
        <meta property="og:description" content="Premium web design and development agency building high-converting websites for startups and businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nightmedia.in/services" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Design & Development Agency | Night Media India" />
        <meta name="twitter:description" content="Premium web design and development agency building high-converting websites for startups and businesses." />
      </Helmet>

      <div className="pt-16 bg-background relative">
        {/* Noise overlay */}
        <div className="noise-overlay" />
        
        {/* Sections */}
        <ServicesHero />
        <WhyWebDesign />
        <WebDesignServices />
        <WebDesignProcess />
        <SecondaryServices />
        <WhyNightMedia />
        <ServicesCTA />
      </div>
    </>
  );
};

export default Services;
