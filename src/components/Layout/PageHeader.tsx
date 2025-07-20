
import React from 'react';

interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

const PageHeader = ({ badge, title, subtitle, className = "" }: PageHeaderProps) => {
  return (
    <div className={`text-center mb-20 ${className}`}>
      {badge && (
        <div className="inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded-full mb-6 tracking-wide">
          {badge}
        </div>
      )}
      <h1 className="text-5xl md:text-7xl font-light text-black mb-8 tracking-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-px bg-cyan-400 mx-auto"></div>
    </div>
  );
};

export default PageHeader;
