
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const CaseStudyRebranding3D = () => {
  useEffect(() => {
    gsap.fromTo('.case-study-content',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );

    gsap.fromTo('.case-study-image',
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out", delay: 0.3 }
    );
  }, []);

  return (
    <div className="pt-24 pb-20 bg-gray-50 min-h-screen">
      <div className="case-study-content max-w-4xl mx-auto px-6">
        {/* Back button */}
        <div className="mb-8">
          <Link
            to="/blog"
            className="text-gray-500 hover:text-black transition-colors duration-300 flex items-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back to Blog</span>
          </Link>
        </div>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
            <span>Case Study</span>
            <span>•</span>
            <span>8 min read</span>
            <span>•</span>
            <span>Nov 28, 2024</span>
            <span>•</span>
            <span>By NightMedia Team</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-light text-black mb-8 leading-tight">
            Case Study: Rebranding in the 3D Era
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            How we transformed a traditional brand into a 3D-first digital experience, resulting in 300% increased engagement.
          </p>
        </header>

        {/* Hero Image */}
        <div className="case-study-image mb-16">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=700&fit=crop"
              alt="3D Rebranding Case Study"
              className="w-full h-96 md:h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-lg max-w-none">
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <div>
              <h2 className="text-3xl font-light text-black mb-6">The Challenge</h2>
              <p className="text-lg mb-6">
                Our client, a traditional manufacturing company with 50+ years of history, approached us with a critical challenge. 
                Their brand identity was outdated, their digital presence was minimal, and they were losing market share to more 
                digitally-savvy competitors. They needed a complete transformation that would position them as industry leaders 
                in the modern era.
              </p>
              <p className="text-lg">
                The primary goal was to create a brand experience that would resonate with both their existing B2B customers 
                and attract a new generation of tech-forward decision-makers, all while maintaining the trust and reliability 
                their brand was known for.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-light text-black mb-6">Our Approach</h2>
              <p className="text-lg mb-6">
                We developed a comprehensive 3D-first rebranding strategy that would revolutionize how the company presented 
                itself to the world. Our approach centered around creating immersive digital experiences that showcased their 
                products and capabilities in ways never before possible.
              </p>
              
              <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                <h3 className="text-2xl font-light text-black mb-4">Key Strategy Elements:</h3>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
                    <span>Photorealistic 3D product visualizations using advanced WebGL technology</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
                    <span>Interactive storytelling elements that guide users through the brand journey</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
                    <span>Immersive virtual showroom experiences accessible from any device</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-black rounded-full mt-3 flex-shrink-0"></span>
                    <span>Dynamic animations that bring static products to life</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-light text-black mb-6">Implementation</h2>
              <p className="text-lg mb-6">
                Our team rebuilt the entire visual identity from the ground up, starting with a new logo that could seamlessly 
                transition between 2D and 3D environments. We developed a comprehensive 3D asset library that included every 
                product in their catalog, each rendered with meticulous attention to detail.
              </p>
              <p className="text-lg mb-6">
                The website became the centerpiece of the transformation. Built using cutting-edge WebGL technology, it featured 
                interactive 3D models that users could rotate, zoom, and configure in real-time. We implemented advanced lighting 
                systems and material rendering to ensure photorealistic quality across all devices.
              </p>
              <p className="text-lg">
                The rollout included a comprehensive digital marketing campaign featuring 3D advertisements, interactive social 
                media content, and immersive email experiences that maintained consistent visual language across all touchpoints.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-light text-black mb-6">Results</h2>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl font-light text-black mb-2">300%</div>
                    <div className="text-gray-600">Increase in Engagement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-light text-black mb-2">150%</div>
                    <div className="text-gray-600">Longer Session Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-light text-black mb-2">85%</div>
                    <div className="text-gray-600">Higher Click-through Rate</div>
                  </div>
                </div>
              </div>
              
              <p className="text-lg mb-6">
                The transformation exceeded all expectations. Within the first quarter post-launch, the company saw a 300% 
                increase in website engagement, with users spending an average of 5.2 minutes exploring the 3D experiences 
                compared to 1.7 minutes on the previous static site.
              </p>
              <p className="text-lg mb-6">
                Lead generation improved by 220%, with the interactive product configurator becoming the primary driver of 
                qualified inquiries. The immersive experience allowed potential customers to better understand the products, 
                resulting in more informed and serious prospects.
              </p>
              <p className="text-lg">
                Perhaps most importantly, the rebrand positioned the company as an innovation leader in their industry, 
                opening doors to partnerships and opportunities that were previously out of reach.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-light text-black mb-6">Lessons Learned</h2>
              <p className="text-lg mb-6">
                This project reinforced our belief that 3D technology isn't just about visual appeal—it's about creating 
                meaningful connections between brands and their audiences. When implemented thoughtfully, 3D experiences 
                can transform how customers perceive and interact with products.
              </p>
              <p className="text-lg">
                The key to success was balancing cutting-edge technology with user experience fundamentals. Every 3D element 
                served a purpose, whether it was to educate, engage, or inspire action. This purposeful approach ensured that 
                the technology enhanced rather than overwhelmed the core brand message.
              </p>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="mt-20 pt-16 border-t border-gray-200">
          <div className="text-center">
            <h2 className="text-4xl font-light text-black mb-6">
              Ready for Your Own Transformation?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how 3D experiences can revolutionize your brand and drive unprecedented engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-3 bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-900 transition-colors duration-300 group"
              >
                <span>Start Your Project</span>
                <div className="w-2 h-2 bg-white rounded-full group-hover:translate-x-1 transition-transform duration-300"></div>
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center space-x-3 border border-black text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-black hover:text-white transition-all duration-300"
              >
                <span>View More Projects</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudyRebranding3D;
