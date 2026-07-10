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
        <title>Services — AI-Powered Websites, Brand & Automation | Night Media</title>
        <meta
          name="description"
          content="AI-powered websites, content systems, brand systems, automation, growth marketing and CGI experiences — one operating system for modern brand growth."
        />
        <meta
          name="keywords"
          content="AI-powered websites, brand systems, AI automation, content systems, growth marketing, CGI experiences, digital experience agency"
        />
        <link rel="canonical" href="https://nightmedia.in/services" />
        <meta property="og:title" content="Services — AI-Powered Websites, Brand & Automation | Night Media" />
        <meta property="og:description" content="One operating system for modern brand growth — AI-powered websites, content, brand, automation and CGI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nightmedia.in/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services — AI-Powered Websites, Brand & Automation | Night Media" />
        <meta name="twitter:description" content="One operating system for modern brand growth — AI-powered websites, content, brand, automation and CGI." />
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
