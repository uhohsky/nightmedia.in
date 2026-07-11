import React from 'react';

/**
 * Sculptures — bespoke SVG "product objects" for capability sections.
 * Each is a layered, lit form rendered on demand (no stock imagery).
 * Designed to sit in a spacious frame with dramatic light and quiet motion.
 */

interface SculptureProps {
  className?: string;
}

const gradId = (name: string) => `${name}-${React.useId().replace(/:/g, '')}`;

/* 1. Architectural glass slab — Websites */
export const GlassSlab: React.FC<SculptureProps> = ({ className = '' }) => {
  const g1 = gradId('gs');
  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden>
      <defs>
        <linearGradient id={g1} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#DCE7F5" stopOpacity="0.9" />
          <stop offset="45%" stopColor="#6FA0D6" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#0F62FE" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id={`${g1}-edge`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id={`${g1}-blur`}><feGaussianBlur stdDeviation="18" /></filter>
      </defs>
      <ellipse cx="300" cy="470" rx="220" ry="24" fill="#000" opacity="0.35" filter={`url(#${g1}-blur)`} />
      <g transform="translate(140 90) skewY(-8)">
        <rect width="320" height="380" rx="14" fill={`url(#${g1})`} stroke="#ffffff" strokeOpacity="0.35" />
        <rect width="320" height="380" rx="14" fill="none" stroke={`url(#${g1}-edge)`} strokeWidth="1.4" />
        <line x1="0" y1="70" x2="320" y2="70" stroke="#ffffff" strokeOpacity="0.18" />
        <line x1="0" y1="140" x2="320" y2="140" stroke="#ffffff" strokeOpacity="0.12" />
        <rect x="24" y="24" width="90" height="10" rx="5" fill="#ffffff" fillOpacity="0.6" />
        <rect x="24" y="94" width="180" height="8" rx="4" fill="#ffffff" fillOpacity="0.35" />
        <rect x="24" y="110" width="140" height="8" rx="4" fill="#ffffff" fillOpacity="0.25" />
      </g>
      <g transform="translate(100 60) skewY(-8)" opacity="0.35">
        <rect width="320" height="380" rx="14" fill="none" stroke="#ffffff" strokeOpacity="0.4" />
      </g>
    </svg>
  );
};

/* 2. Woven content strands — Content Systems */
export const ContentWeave: React.FC<SculptureProps> = ({ className = '' }) => {
  const g = gradId('cw');
  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden>
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#19C6D1" />
          <stop offset="100%" stopColor="#0F62FE" />
        </linearGradient>
      </defs>
      <g transform="translate(300 300)">
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i / 24) * Math.PI * 2;
          const r1 = 90, r2 = 220;
          return (
            <path
              key={i}
              d={`M ${Math.cos(a) * r1} ${Math.sin(a) * r1} C ${Math.cos(a) * r2 * 0.6} ${Math.sin(a) * r2 * 0.6 + 40}, ${Math.cos(a + 0.4) * r2 * 0.7} ${Math.sin(a + 0.4) * r2 * 0.7}, ${Math.cos(a + 0.6) * r2} ${Math.sin(a + 0.6) * r2}`}
              stroke={`url(#${g})`}
              strokeOpacity={0.28 + (i % 3) * 0.15}
              strokeWidth="1.2"
              fill="none"
            />
          );
        })}
        <circle r="90" fill="none" stroke="#ffffff" strokeOpacity="0.35" />
        <circle r="70" fill="none" stroke="#ffffff" strokeOpacity="0.15" />
        <circle r="8" fill="#DCE7F5" />
      </g>
    </svg>
  );
};

/* 3. Chrome monolith — Brand Systems */
export const ChromeMonolith: React.FC<SculptureProps> = ({ className = '' }) => {
  const g = gradId('cm');
  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden>
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F4F7FB" />
          <stop offset="35%" stopColor="#8FA6C2" />
          <stop offset="65%" stopColor="#3C6FB3" />
          <stop offset="100%" stopColor="#0B1220" />
        </linearGradient>
        <linearGradient id={`${g}-h`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id={`${g}-b`}><feGaussianBlur stdDeviation="22" /></filter>
      </defs>
      <ellipse cx="300" cy="500" rx="180" ry="20" fill="#000" opacity="0.45" filter={`url(#${g}-b)`} />
      <g transform="translate(220 80)">
        <rect width="160" height="420" rx="6" fill={`url(#${g})`} />
        <rect width="160" height="180" rx="6" fill={`url(#${g}-h)`} opacity="0.55" />
        <rect x="0" y="0" width="6" height="420" fill="#ffffff" fillOpacity="0.35" />
        <rect x="154" y="0" width="6" height="420" fill="#000" fillOpacity="0.35" />
      </g>
    </svg>
  );
};

/* 4. Orbital AI core — Automation */
export const OrbitalCore: React.FC<SculptureProps> = ({ className = '' }) => {
  const g = gradId('oc');
  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden>
      <defs>
        <radialGradient id={g}>
          <stop offset="0%" stopColor="#DCE7F5" />
          <stop offset="50%" stopColor="#0F62FE" />
          <stop offset="100%" stopColor="#08131F" />
        </radialGradient>
      </defs>
      <g transform="translate(300 300)">
        {[110, 160, 220].map((r, i) => (
          <ellipse
            key={i}
            rx={r}
            ry={r * 0.35}
            fill="none"
            stroke="#ffffff"
            strokeOpacity={0.14 - i * 0.02}
            transform={`rotate(${-18 + i * 12})`}
          />
        ))}
        {[110, 160, 220].map((r, i) =>
          Array.from({ length: 6 }).map((_, j) => {
            const a = (j / 6) * Math.PI * 2 + i;
            return (
              <circle
                key={`${i}-${j}`}
                cx={Math.cos(a) * r}
                cy={Math.sin(a) * r * 0.35}
                r={2 + (i === 0 ? 1 : 0)}
                fill="#DCE7F5"
                opacity={0.5 + (i === 0 ? 0.4 : 0)}
              />
            );
          }),
        )}
        <circle r="46" fill={`url(#${g})`} />
        <circle r="46" fill="none" stroke="#ffffff" strokeOpacity="0.6" />
      </g>
    </svg>
  );
};

/* 5. Signal wave — Growth Marketing */
export const SignalWave: React.FC<SculptureProps> = ({ className = '' }) => {
  const g = gradId('sw');
  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden>
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#19C6D1" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#0F62FE" />
          <stop offset="100%" stopColor="#19C6D1" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {Array.from({ length: 40 }).map((_, i) => {
        const x = 40 + i * 13;
        const h = 40 + Math.sin(i * 0.4) * 30 + i * 4;
        return (
          <rect
            key={i}
            x={x}
            y={300 - h / 2}
            width="4"
            height={h}
            rx="2"
            fill={`url(#${g})`}
            opacity={0.35 + (i / 40) * 0.6}
          />
        );
      })}
      <path
        d="M40 340 C 160 260, 280 400, 400 220 S 560 200, 560 200"
        fill="none"
        stroke="#DCE7F5"
        strokeWidth="1.5"
        strokeOpacity="0.7"
      />
      <circle cx="560" cy="200" r="6" fill="#DCE7F5" />
    </svg>
  );
};

/* 6. Cinematic prism — CGI & Digital Experiences */
export const CinematicPrism: React.FC<SculptureProps> = ({ className = '' }) => {
  const g = gradId('cp');
  return (
    <svg viewBox="0 0 600 600" className={className} aria-hidden>
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#19C6D1" />
          <stop offset="50%" stopColor="#0F62FE" />
          <stop offset="100%" stopColor="#7B3FE4" />
        </linearGradient>
        <filter id={`${g}-b`}><feGaussianBlur stdDeviation="24" /></filter>
      </defs>
      <ellipse cx="300" cy="490" rx="200" ry="22" fill="#000" opacity="0.4" filter={`url(#${g}-b)`} />
      <g transform="translate(300 300)">
        <polygon points="0,-190 165,95 -165,95" fill={`url(#${g})`} opacity="0.85" />
        <polygon points="0,-190 165,95 -165,95" fill="none" stroke="#ffffff" strokeOpacity="0.5" />
        <line x1="0" y1="-190" x2="0" y2="95" stroke="#ffffff" strokeOpacity="0.3" />
        <line x1="-165" y1="95" x2="165" y2="95" stroke="#ffffff" strokeOpacity="0.15" />
        <path d="M -240 130 L 240 130" stroke="#DCE7F5" strokeOpacity="0.4" />
        <path d="M -260 20 L -80 20" stroke="#19C6D1" strokeOpacity="0.7" />
        <path d="M 80 -40 L 260 -40" stroke="#0F62FE" strokeOpacity="0.7" />
      </g>
    </svg>
  );
};
