
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Rebranding3DEraCaseStudy = () => {
  useEffect(() => {
    gsap.fromTo('.case-study-content',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    gsap.fromTo('.case-study-image',
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: '.case-study-image',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <div className="pt-24 pb-20 bg-black text-white min-h-screen">
      <article className="case-study-content">
        {/* Hero Section */}
        <section className="px-6 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link
                to="/blog"
                className="text-gray-400 hover:text-white transition-colors magnetic"
              >
                ← Back to Blog
              </Link>
            </div>
            
            <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
              <span>Case Study</span>
              <span>•</span>
              <span>8 min read</span>
              <span>•</span>
              <span>Nov 28, 2024</span>
              <span>•</span>
              <span>By NightMedia Team</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-mono font-bold mb-8 gradient-text">
              Case Study: Rebranding in the 3D Era
            </h1>
            
            <div className="glass rounded-2xl overflow-hidden mb-12 case-study-image">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop"
                alt="3D Rebranding Case Study"
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="px-6">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-invert prose-lg max-w-none" style={{ color: '#e5e7eb', lineHeight: '1.8' }}>
              <p className="text-xl mb-8 text-gray-300">
                How we transformed a traditional brand into a 3D-first digital experience, resulting in 300% increased engagement and revolutionary user interaction.
              </p>

              <h2 className="text-3xl font-bold mb-6 gradient-text">The Challenge</h2>
              <p className="mb-6">
                Our client, a luxury furniture manufacturer, approached us with a traditional brand identity that wasn't resonating with modern consumers. Their 2D product catalogs and static website were failing to showcase the craftsmanship and premium quality of their pieces.
              </p>

              <p className="mb-8">
                The challenge was clear: transform their brand into a cutting-edge, 3D-first experience that would captivate audiences and drive conversions in the digital age.
              </p>

              <h2 className="text-3xl font-bold mb-6 gradient-text">Our Approach</h2>
              <p className="mb-6">
                We developed a comprehensive 3D branding strategy that included:
              </p>
              
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>Photorealistic 3D product modeling and visualization</li>
                <li>Interactive WebGL experiences for product exploration</li>
                <li>Immersive AR try-before-you-buy features</li>
                <li>3D animated brand storytelling elements</li>
                <li>Responsive 3D interface design across all touchpoints</li>
              </ul>

              <div className="case-study-image my-12">
                <img
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=600&fit=crop"
                  alt="3D Design Process"
                  className="w-full h-64 object-cover rounded-2xl"
                />
              </div>

              <h2 className="text-3xl font-bold mb-6 gradient-text">The Implementation</h2>
              <p className="mb-6">
                Our team rebuilt the entire visual identity using cutting-edge technologies:
              </p>

              <h3 className="text-2xl font-semibold mb-4">3D Asset Creation</h3>
              <p className="mb-6">
                Every product was meticulously recreated in 3D using advanced modeling techniques. We captured material properties, lighting behaviors, and surface details to achieve photorealistic quality that surpassed traditional photography.
              </p>

              <h3 className="text-2xl font-semibold mb-4">WebGL Integration</h3>
              <p className="mb-6">
                Using Three.js and custom shaders, we developed interactive 3D experiences that allowed customers to explore products from every angle, customize materials in real-time, and visualize items in their own spaces.
              </p>

              <h3 className="text-2xl font-semibold mb-4">Performance Optimization</h3>
              <p className="mb-8">
                We implemented advanced optimization techniques including progressive loading, level-of-detail systems, and efficient texture compression to ensure smooth performance across all devices.
              </p>

              <h2 className="text-3xl font-bold mb-6 gradient-text">The Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                <div className="glass p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">300%</div>
                  <div className="text-gray-400">Increased Engagement</div>
                </div>
                <div className="glass p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">150%</div>
                  <div className="text-gray-400">Higher Conversion Rate</div>
                </div>
                <div className="glass p-6 rounded-2xl text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">5x</div>
                  <div className="text-gray-400">Longer Session Duration</div>
                </div>
              </div>

              <p className="mb-6">
                The transformation was remarkable. Session durations increased by 500%, bounce rates decreased by 60%, and most importantly, conversion rates improved by 150%. Customers spent significantly more time exploring products and were more confident in their purchasing decisions.
              </p>

              <h2 className="text-3xl font-bold mb-6 gradient-text">Key Takeaways</h2>
              <p className="mb-6">
                This project demonstrated the power of 3D technology in modern branding:
              </p>
              
              <ul className="list-disc pl-6 mb-8 space-y-2">
                <li>3D experiences create emotional connections that traditional media cannot achieve</li>
                <li>Interactive elements significantly increase user engagement and time on site</li>
                <li>Photorealistic 3D can reduce return rates by giving customers accurate expectations</li>
                <li>Performance optimization is crucial for 3D web experiences</li>
                <li>AR integration bridges the gap between digital and physical shopping</li>
              </ul>

              <h2 className="text-3xl font-bold mb-6 gradient-text">The Future of Branding</h2>
              <p className="mb-8">
                This case study represents a shift toward immersive, interactive branding experiences. As web technologies continue to advance and consumer expectations evolve, 3D-first design approaches will become the standard for premium brands looking to differentiate themselves in crowded markets.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-16 mt-16 bg-gray-900/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-mono font-bold mb-6 gradient-text">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Let's discuss how 3D experiences can revolutionize your digital presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="glass px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all magnetic"
              >
                Start Your 3D Journey
              </Link>
              <Link
                to="/blog"
                className="border border-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all magnetic"
              >
                Read More Case Studies
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Rebranding3DEraCaseStudy;
