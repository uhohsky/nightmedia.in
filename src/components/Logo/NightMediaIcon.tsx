import React from 'react';

interface NightMediaIconProps {
  className?: string;
  variant?: 'white' | 'dark';
  size?: number;
}

/**
 * Clean geometric "N" lettermark for Night Media.
 * Inspired by the angular, premium logo references.
 * Works as navbar icon, favicon base, and brand mark.
 */
const NightMediaIcon: React.FC<NightMediaIconProps> = ({ 
  className = '', 
  variant = 'white',
  size = 32 
}) => {
  const fill = variant === 'white' ? 'currentColor' : 'hsl(220, 20%, 15%)';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Night Media"
    >
      {/* 
        Geometric N: Two vertical strokes connected by a bold diagonal.
        The left vertical has a pointed base, mirroring the logo references.
      */}
      <path
        d="M12 56V8L52 48V8"
        stroke={fill}
        strokeWidth="7"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
};

export default NightMediaIcon;
