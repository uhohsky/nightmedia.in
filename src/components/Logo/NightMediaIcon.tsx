import React from 'react';

interface NightMediaIconProps {
  className?: string;
  variant?: 'white' | 'dark' | 'metallic';
  size?: number;
  animated?: boolean;
}

/**
 * Signature Night Media "N" lettermark.
 * Three variants:
 *  - white:    flat monochrome (nav / dense contexts)
 *  - dark:     inverted for light backgrounds
 *  - metallic: chromed brand mark with layered gradient + edge light
 *
 * The metallic treatment is the brand's signature UI element and
 * should be preferred at hero / brand-forward surfaces.
 */
const NightMediaIcon: React.FC<NightMediaIconProps> = ({
  className = '',
  variant = 'white',
  size = 32,
  animated = false,
}) => {
  const uid = React.useId().replace(/:/g, '');
  const flat = variant === 'white' ? 'currentColor' : 'hsl(220, 20%, 15%)';

  if (variant !== 'metallic') {
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
        <path
          d="M12 56V8L52 48V8"
          stroke={flat}
          strokeWidth="7"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} ${animated ? 'n-shimmer' : ''}`}
      aria-label="Night Media"
    >
      <defs>
        <linearGradient id={`n-metal-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#DCE7F5" />
          <stop offset="25%" stopColor="#8FA6C2" />
          <stop offset="50%" stopColor="#3C6FB3" />
          <stop offset="75%" stopColor="#0F62FE" />
          <stop offset="100%" stopColor="#19C6D1" />
        </linearGradient>
        <linearGradient id={`n-edge-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.35" />
        </linearGradient>
        <filter id={`n-glow-${uid}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Metal core */}
      <path
        d="M12 56V8L52 48V8"
        stroke={`url(#n-metal-${uid})`}
        strokeWidth="7"
        strokeLinecap="square"
        strokeLinejoin="miter"
        filter={`url(#n-glow-${uid})`}
      />
      {/* Edge specular highlight */}
      <path
        d="M12 56V8L52 48V8"
        stroke={`url(#n-edge-${uid})`}
        strokeWidth="7"
        strokeLinecap="square"
        strokeLinejoin="miter"
        opacity="0.7"
      />
    </svg>
  );
};

export default NightMediaIcon;
