import React from 'react';

/**
 * Abstract AI-inspired illustration for the hero.
 * Flowing data, connected nodes, cloud infrastructure — purely SVG + CSS.
 * Respects prefers-reduced-motion.
 */
const HeroAILattice: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative aspect-square w-full max-w-[560px] ${className}`} aria-hidden="true">
      {/* Soft gradient glow behind */}
      <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/15 via-accent/10 to-transparent blur-3xl" />

      <svg
        viewBox="0 0 560 560"
        className="relative w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ai-edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.9" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="ai-edge-soft" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.05" />
          </linearGradient>
          <radialGradient id="ai-node" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
          </radialGradient>
        </defs>

        {/* Concentric orbit rings */}
        <g stroke="hsl(var(--border))" strokeWidth="1" fill="none" opacity="0.6">
          <circle cx="280" cy="280" r="240" />
          <circle cx="280" cy="280" r="180" />
          <circle cx="280" cy="280" r="120" />
          <circle cx="280" cy="280" r="60" />
        </g>

        {/* Flowing connecting lines */}
        <g stroke="url(#ai-edge)" strokeWidth="1.2" fill="none" opacity="0.55">
          <path d="M 80 200 Q 280 100 480 200" />
          <path d="M 80 360 Q 280 460 480 360" />
          <path d="M 140 100 L 280 280 L 420 100" />
          <path d="M 140 460 L 280 280 L 420 460" />
          <path d="M 60 280 L 500 280" stroke="url(#ai-edge-soft)" />
          <path d="M 280 60 L 280 500" stroke="url(#ai-edge-soft)" />
        </g>

        {/* Nodes */}
        {[
          { cx: 280, cy: 280, r: 18 },
          { cx: 80, cy: 200, r: 8 },
          { cx: 480, cy: 200, r: 8 },
          { cx: 80, cy: 360, r: 8 },
          { cx: 480, cy: 360, r: 8 },
          { cx: 140, cy: 100, r: 6 },
          { cx: 420, cy: 100, r: 6 },
          { cx: 140, cy: 460, r: 6 },
          { cx: 420, cy: 460, r: 6 },
          { cx: 280, cy: 100, r: 7 },
          { cx: 280, cy: 460, r: 7 },
        ].map((n, i) => (
          <g key={i}>
            <circle cx={n.cx} cy={n.cy} r={n.r + 4} fill="hsl(var(--primary))" opacity="0.12" />
            <circle cx={n.cx} cy={n.cy} r={n.r} fill="url(#ai-node)" />
          </g>
        ))}

        {/* Central core ring */}
        <circle cx="280" cy="280" r="32" stroke="hsl(var(--accent))" strokeWidth="1.5" fill="none" opacity="0.7" />

        {/* Pulsing data dot traveling along a path */}
        <circle r="4" fill="hsl(var(--accent))">
          <animateMotion dur="6s" repeatCount="indefinite" path="M 80 200 Q 280 100 480 200" />
          <animate attributeName="opacity" values="0;1;1;0" dur="6s" repeatCount="indefinite" />
        </circle>
        <circle r="4" fill="hsl(var(--primary))">
          <animateMotion dur="7s" repeatCount="indefinite" path="M 480 360 Q 280 460 80 360" />
          <animate attributeName="opacity" values="0;1;1;0" dur="7s" repeatCount="indefinite" />
        </circle>
        <circle r="3" fill="hsl(var(--accent))">
          <animateMotion dur="5s" repeatCount="indefinite" path="M 60 280 L 500 280" />
          <animate attributeName="opacity" values="0;1;1;0" dur="5s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Floating cloud-infra chips */}
      <div className="absolute top-4 right-2 surface-card px-3 py-2 text-[11px] font-mono text-muted-foreground">
        <span className="text-accent">●</span> infra.deploy
      </div>
      <div className="absolute bottom-6 left-2 surface-card px-3 py-2 text-[11px] font-mono text-muted-foreground">
        <span className="text-primary">●</span> model.inference
      </div>
    </div>
  );
};

export default HeroAILattice;
