import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroHome from '../components/home/HeroHome';
import TrustStrip from '../components/home/TrustStrip';
import WhatWeDo from '../components/home/WhatWeDo';
import CapabilityLaunches from '../components/home/CapabilityLaunches';
import FeaturedWork from '../components/home/FeaturedWork';
import AILab from '../components/home/AILab';
import Method from '../components/home/Method';
import Proof from '../components/home/Proof';
import FinalCTA from '../components/home/FinalCTA';
import '../home.css';

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

      <main className="home-root selection:bg-[#3B9EFF] selection:text-white">
        <HeroHome />
        <TrustStrip />
        <WhatWeDo />
        <CapabilityLaunches />
        <FeaturedWork />
        <AILab />
        <Method />
        <Proof />
        <FinalCTA />
      </main>
    </>
  );
};

export default Index;
