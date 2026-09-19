import React from 'react';

/**
 * N Signal — proprietary tiny N glyph used sparingly across the homepage:
 * section markers, AI states, method rail, button motion. Never decorative-everywhere.
 */
const NSignal: React.FC<{ size?: number; className?: string; pulse?: boolean }> = ({
  size = 14,
  className = '',
  pulse = false,
}) => {
  const id = React.useId().replace(/:/g, '');
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={`n-sig ${className} ${pulse ? 'n-sig-pulse' : ''}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`n-sig-grad-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C9D1D8" />
          <stop offset="60%" stopColor="#3B9EFF" />
          <stop offset="100%" stopColor="#38C9C0" />
        </linearGradient>
      </defs>
      <path
        d="M12 56V8L52 48V8"
        stroke={`url(#n-sig-grad-${id})`}
        strokeWidth="9"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
};

export default NSignal;
