import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageHeader from '../components/Layout/PageHeader';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    gsap.fromTo(
      '.story-section',
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.story-container',
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div className="bg-gray-50 text-black pt-24 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HERO */}
        <PageHeader
          badge="ABOUT NIGHT MEDIA"
          title="We Build Digital Systems That Scale Brands"
          subtitle="Night Media is a performance-driven creative agency focused on building high-converting websites, growth systems, and digital infrastructure for modern brands."
        />

        <div className="story-container mt-24 space-y-32">

          {/* OUR STORY */}
          <section className="story-section max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Night Media was founded with a simple belief — design alone doesn’t grow businesses.
              In a digital world obsessed with aesthetics, we saw brands struggle because their
              websites, marketing, and systems were not built for performance.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We started Night Media to bridge the gap between creative design and measurable growth.
              Every project we take on is approached as a system — not a campaign, not a one-off
              deliverable, but an ecosystem designed to scale.
            </p>
          </section>

          {/* HOW WE THINK */}
          <section className="story-section max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              How We Think
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We don’t believe in guesswork, trends, or vanity metrics.
              Our work is rooted in clarity, structure, and intent.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Design should convert. Marketing should compound.
              And technology should simplify — not complicate.
            </p>
          </section>

          {/* WHAT WE BUILD */}
          <section className="story-section max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              What We Build
            </h2>
            <ul className="space-y-4 text-lg text-gray-600">
              <li>• High-performance websites & landing pages</li>
              <li>• Conversion-focused design systems</li>
              <li>• Performance marketing & paid media infrastructure</li>
              <li>• Content, video & brand storytelling systems</li>
              <li>• Scalable growth funnels for founders & startups</li>
            </ul>
          </section>

          {/* WHO WE WORK WITH */}
          <section className="story-section max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-light mb-8">
              Who We Work With
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We partner with founders, startups, and growth-focused brands who value
              execution over noise — and systems over shortcuts.
            </p>
          </section>

        </div>

        {/* CTA */}
        <div className="text-center mt-32">
          <a
            href="/contact"
            className="inline-flex items-center bg-black text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-gray-900 transition-all"
          >
            Start Your Project
          </a>
        </div>

      </div>
    </div>
  );
};

export default About;
