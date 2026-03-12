
import React from 'react';

interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

const PageHeader = ({ badge, title, subtitle, className = "" }: PageHeaderProps) => {
  return (
    <div className={`text-center py-15 ${className}`}>
      {badge && (
        <div className="inline-block px-4 py-2 bg-black text-white text-sm font-medium rounded-full mb-6 tracking-wide">
          {badge}
        </div>
      )}
      <h1 className="font-inter text-[52px] font-bold text-black mb-8 leading-[1.3] text-center">
        {title}
      </h1>
      {subtitle && (
        <p className="text-[20px] font-normal text-gray-600 max-w-[800px] mx-auto mb-8 text-center">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-px bg-cyan-400 mx-auto"></div>
    </div>
  );
};

export default PageHeader;
