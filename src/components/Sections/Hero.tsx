
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [text, setText] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const fullText = 'NIGHTMEDIA';

  const services = [
    { title: 'Web Design', slug: 'web-design', color: 'from-blue-500 to-blue-600' },
    { title: 'CGI Ads', slug: 'cgi-ads', color: 'from-purple-500 to-indigo-600' },
    { title: 'Influencer Marketing', slug: 'influencer-marketing', color: 'from-pink-500 to-rose-500' },
    { title: 'Video Editing', slug: 'video-editing', color: 'from-orange-500 to-amber-500' },
  ];

  const sliceAngle = 360 / services.length;
  const radius = 140;
  const centerSize = 45;

  useEffect(() => {
    gsap.fromTo('.hero-container', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, delay: 0.5 }
    );

    let currentIndex = 0;
    const typeWriter = () => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeWriter, 150);
      }
    };
    
    setTimeout(typeWriter, 1000);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('.projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getSlicePath = (index: number, isHovered: boolean) => {
    const startAngle = (index * sliceAngle - 90) * (Math.PI / 180);
    const endAngle = ((index + 1) * sliceAngle - 90) * (Math.PI / 180);
    const r = isHovered ? radius + 10 : radius;
    const innerR = centerSize;
    const cx = 160;
    const cy = 160;

    const x1 = cx + innerR * Math.cos(startAngle);
    const y1 = cy + innerR * Math.sin(startAngle);
    const x2 = cx + r * Math.cos(startAngle);
    const y2 = cy + r * Math.sin(startAngle);
    const x3 = cx + r * Math.cos(endAngle);
    const y3 = cy + r * Math.sin(endAngle);
    const x4 = cx + innerR * Math.cos(endAngle);
    const y4 = cy + innerR * Math.sin(endAngle);

    return `M ${x1} ${y1} L ${x2} ${y2} A ${r} ${r} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${innerR} ${innerR} 0 0 0 ${x1} ${y1}`;
  };

  const getTextPosition = (index: number) => {
    const midAngle = ((index + 0.5) * sliceAngle - 90) * (Math.PI / 180);
    const textRadius = (radius + centerSize) / 2 + 15;
    return {
      x: 160 + textRadius * Math.cos(midAngle),
      y: 160 + textRadius * Math.sin(midAngle),
      rotation: (index + 0.5) * sliceAngle,
    };
  };

  const getGradientColor = (colorClass: string, type: 'from' | 'to'): string => {
    const colorMap: Record<string, string> = {
      'from-blue-500': '#3b82f6',
      'to-blue-600': '#2563eb',
      'from-purple-500': '#a855f7',
      'to-indigo-600': '#4f46e5',
      'from-pink-500': '#ec4899',
      'to-rose-500': '#f43f5e',
      'from-orange-500': '#f97316',
      'to-amber-500': '#f59e0b',
    };

    const parts = colorClass.split(' ');
    const targetPart = type === 'from' ? parts[0] : parts[1];
    return colorMap[targetPart] || '#6b7280';
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white">
      {/* Large decorative circle */}
      <div className="absolute top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2">
        <div className="w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-red-400 to-pink-400 rounded-full opacity-80"></div>
      </div>

      <div className="hero-container relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-black leading-tight">
              Be brand
              <br />
              <span className="block">
                with <span className="text-blue-600">{text}</span>
                <span className="animate-pulse text-blue-600">|</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-8 fade-in-up">
              For the love of marketing, we enable your brand to reach the best potential outcomes that can be tracked
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up">
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-blue-700 transition-all magnetic"
              >
                Connect Now
              </Link>
              <button 
                onClick={scrollToProjects}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-medium hover:border-gray-400 hover:bg-gray-50 transition-all magnetic"
              >
                View Our Work
              </button>
            </div>
          </div>

          {/* Right Content - Circular Service Wheel */}
          <div className="relative flex justify-center items-center">
            {/* Desktop: Circular Wheel */}
            <div className="hidden md:block relative">
              <svg
                width="320"
                height="320"
                viewBox="0 0 320 320"
                className="transform transition-transform duration-500"
              >
                <defs>
                  {services.map((service, index) => (
                    <linearGradient
                      key={`gradient-${index}`}
                      id={`hero-slice-gradient-${index}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" style={{ stopColor: getGradientColor(service.color, 'from') }} />
                      <stop offset="100%" style={{ stopColor: getGradientColor(service.color, 'to') }} />
                    </linearGradient>
                  ))}
                  <linearGradient id="hero-center-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>

                {/* Pie Slices */}
                {services.map((service, index) => {
                  const isHovered = hoveredIndex === index;
                  const isDimmed = hoveredIndex !== null && hoveredIndex !== index;

                  return (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="cursor-pointer"
                    >
                      <path
                        d={getSlicePath(index, isHovered)}
                        fill={`url(#hero-slice-gradient-${index})`}
                        className={`transition-all duration-300 ease-out ${
                          isDimmed ? 'opacity-40' : 'opacity-90'
                        } ${isHovered ? 'filter drop-shadow-xl' : ''}`}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{
                          transform: isHovered ? 'scale(1.03)' : 'scale(1)',
                          transformOrigin: '160px 160px',
                        }}
                      />
                    </Link>
                  );
                })}

                {/* Service Labels */}
                {services.map((service, index) => {
                  const pos = getTextPosition(index);
                  const isHovered = hoveredIndex === index;
                  const isDimmed = hoveredIndex !== null && hoveredIndex !== index;
                  
                  let textRotation = pos.rotation;
                  if (textRotation > 90 && textRotation < 270) {
                    textRotation += 180;
                  }

                  return (
                    <text
                      key={`text-${index}`}
                      x={pos.x}
                      y={pos.y}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className={`pointer-events-none select-none transition-all duration-300 ${
                        isDimmed ? 'opacity-30' : 'opacity-100'
                      }`}
                      style={{
                        fill: 'white',
                        fontSize: isHovered ? '11px' : '9px',
                        fontWeight: isHovered ? '700' : '500',
                        textShadow: '0 2px 4px rgba(0,0,0,0.4)',
                        transform: `rotate(${textRotation}deg)`,
                        transformOrigin: `${pos.x}px ${pos.y}px`,
                      }}
                    >
                      {service.title}
                    </text>
                  );
                })}

                {/* Center Circle with "N" */}
                <circle
                  cx="160"
                  cy="160"
                  r={centerSize}
                  fill="white"
                  className="drop-shadow-lg"
                />
                <circle
                  cx="160"
                  cy="160"
                  r={centerSize - 3}
                  fill="none"
                  stroke="url(#hero-center-gradient)"
                  strokeWidth="2"
                />
                <text
                  x="160"
                  y="165"
                  textAnchor="middle"
                  className="font-bold"
                  style={{
                    fill: 'url(#hero-center-gradient)',
                    fontSize: '36px',
                    fontFamily: 'serif',
                  }}
                >
                  N
                </text>
              </svg>

              {/* Hover Info Display */}
              {hoveredIndex !== null && (
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center animate-fade-in whitespace-nowrap">
                  <p className="text-lg font-semibold text-gray-800">
                    {services[hoveredIndex].title}
                  </p>
                  <p className="text-xs text-gray-500">Click to explore →</p>
                </div>
              )}
            </div>

            {/* Mobile: Stacked Cards */}
            <div className="md:hidden grid grid-cols-2 gap-3 w-full">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className={`group relative overflow-hidden rounded-xl p-4 bg-gradient-to-br ${service.color} text-white transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                >
                  <div className="relative z-10">
                    <h3 className="text-sm font-semibold mb-1">{service.title}</h3>
                    <span className="text-xs opacity-80 group-hover:opacity-100 transition-opacity">
                      Learn more →
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
