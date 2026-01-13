
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    { title: 'Web Design', slug: 'web-design', color: 'from-blue-500 to-blue-600' },
    { title: 'CGI Ads', slug: 'cgi-ads', color: 'from-purple-500 to-indigo-600' },
    { title: 'Influencer Marketing', slug: 'influencer-marketing', color: 'from-pink-500 to-rose-500' },
    { title: 'Video Editing', slug: 'video-editing', color: 'from-orange-500 to-amber-500' },
    { title: 'Performance Marketing', slug: 'performance-marketing', color: 'from-cyan-500 to-teal-500' },
    { title: 'Digital Marketing', slug: 'digital-marketing', color: 'from-violet-500 to-purple-600' },
    { title: 'SEO Optimization', slug: 'seo-optimization', color: 'from-emerald-500 to-green-600' },
    { title: 'UI/UX Design', slug: 'ui-ux-design', color: 'from-red-500 to-pink-500' },
  ];

  const sliceAngle = 360 / services.length;
  const radius = 280;
  const centerSize = 100;

  // Calculate SVG path for a pie slice
  const getSlicePath = (index: number, isHovered: boolean) => {
    const startAngle = (index * sliceAngle - 90) * (Math.PI / 180);
    const endAngle = ((index + 1) * sliceAngle - 90) * (Math.PI / 180);
    const r = isHovered ? radius + 15 : radius;
    const innerR = centerSize;

    const x1 = 300 + innerR * Math.cos(startAngle);
    const y1 = 300 + innerR * Math.sin(startAngle);
    const x2 = 300 + r * Math.cos(startAngle);
    const y2 = 300 + r * Math.sin(startAngle);
    const x3 = 300 + r * Math.cos(endAngle);
    const y3 = 300 + r * Math.sin(endAngle);
    const x4 = 300 + innerR * Math.cos(endAngle);
    const y4 = 300 + innerR * Math.sin(endAngle);

    return `M ${x1} ${y1} L ${x2} ${y2} A ${r} ${r} 0 0 1 ${x3} ${y3} L ${x4} ${y4} A ${innerR} ${innerR} 0 0 0 ${x1} ${y1}`;
  };

  // Calculate text position for each slice
  const getTextPosition = (index: number) => {
    const midAngle = ((index + 0.5) * sliceAngle - 90) * (Math.PI / 180);
    const textRadius = (radius + centerSize) / 2 + 20;
    return {
      x: 300 + textRadius * Math.cos(midAngle),
      y: 300 + textRadius * Math.sin(midAngle),
      rotation: (index + 0.5) * sliceAngle,
    };
  };

  return (
    <section className="services-section py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-light text-black mb-8 tracking-tight">
            What We Do Best
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We specialize in creating digital experiences that push boundaries and drive results
          </p>
          <div className="w-24 h-px bg-cyan-400 mx-auto"></div>
        </div>

        {/* Desktop: Circular Wheel */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="relative">
            <svg
              width="600"
              height="600"
              viewBox="0 0 600 600"
              className="transform transition-transform duration-500"
            >
              <defs>
                {services.map((service, index) => (
                  <linearGradient
                    key={`gradient-${index}`}
                    id={`slice-gradient-${index}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" className={`${service.color.split(' ')[0].replace('from-', 'text-')}`} style={{ stopColor: getGradientColor(service.color, 'from') }} />
                    <stop offset="100%" className={`${service.color.split(' ')[1].replace('to-', 'text-')}`} style={{ stopColor: getGradientColor(service.color, 'to') }} />
                  </linearGradient>
                ))}
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
                      fill={`url(#slice-gradient-${index})`}
                      className={`transition-all duration-300 ease-out ${
                        isDimmed ? 'opacity-40' : 'opacity-90'
                      } ${isHovered ? 'filter drop-shadow-2xl' : ''}`}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      style={{
                        transform: isHovered ? `scale(1.02)` : 'scale(1)',
                        transformOrigin: '300px 300px',
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
                
                // Adjust rotation for readability
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
                      fontSize: isHovered ? '14px' : '11px',
                      fontWeight: isHovered ? '700' : '500',
                      textShadow: '0 2px 4px rgba(0,0,0,0.3)',
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
                cx="300"
                cy="300"
                r={centerSize}
                fill="white"
                className="drop-shadow-xl"
              />
              <circle
                cx="300"
                cy="300"
                r={centerSize - 5}
                fill="none"
                stroke="url(#center-gradient)"
                strokeWidth="3"
              />
              <defs>
                <linearGradient id="center-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              <text
                x="300"
                y="310"
                textAnchor="middle"
                className="font-bold"
                style={{
                  fill: 'url(#center-gradient)',
                  fontSize: '72px',
                  fontFamily: 'serif',
                }}
              >
                N
              </text>
            </svg>

            {/* Hover Info Display */}
            {hoveredIndex !== null && (
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-16 text-center animate-fade-in">
                <p className="text-2xl font-semibold text-gray-800">
                  {services[hoveredIndex].title}
                </p>
                <p className="text-sm text-gray-500 mt-1">Click to explore →</p>
              </div>
            )}
          </div>
        </div>

        {/* Mobile: Stacked Cards */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {services.map((service) => (
            <Link
              key={service.slug}
              to={`/services/${service.slug}`}
              className={`group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${service.color} text-white transition-all duration-300 hover:scale-105 hover:shadow-xl`}
            >
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <span className="text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                  Learn more →
                </span>
              </div>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/services"
            className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

// Helper function to get actual color values
function getGradientColor(colorClass: string, type: 'from' | 'to'): string {
  const colorMap: Record<string, string> = {
    'from-blue-500': '#3b82f6',
    'to-blue-600': '#2563eb',
    'from-purple-500': '#a855f7',
    'to-indigo-600': '#4f46e5',
    'from-pink-500': '#ec4899',
    'to-rose-500': '#f43f5e',
    'from-orange-500': '#f97316',
    'to-amber-500': '#f59e0b',
    'from-cyan-500': '#06b6d4',
    'to-teal-500': '#14b8a6',
    'from-violet-500': '#8b5cf6',
    'to-purple-600': '#9333ea',
    'from-emerald-500': '#10b981',
    'to-green-600': '#16a34a',
    'from-red-500': '#ef4444',
  };

  const parts = colorClass.split(' ');
  const targetPart = type === 'from' ? parts[0] : parts[1];
  return colorMap[targetPart] || '#6b7280';
}

export default ServicesPreview;
