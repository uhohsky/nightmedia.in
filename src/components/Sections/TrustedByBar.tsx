import React from 'react';

const clients = [
  'SYNFICTION.AI',
  'AEGIS LABS',
  'NORTHWIND',
  'HELIX STUDIO',
  'MERIDIAN',
  'PARALLEL',
  'OCTAVE',
  'FIELDNOTES',
];

/**
 * Trusted-by strip — quiet, editorial, no logos required.
 * Reads as a wordmark rail (Vercel-style).
 */
const TrustedByBar: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 border-t border-border/60">
      <div className="container-enterprise">
        <p className="text-center text-[11px] font-mono uppercase tracking-[0.32em] text-muted-foreground/80 mb-10">
          Trusted by teams building the future
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-8">
          {clients.map((c) => (
            <div
              key={c}
              className="text-center text-[13px] font-medium tracking-[0.14em] text-muted-foreground/70 hover:text-foreground transition-colors duration-500"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedByBar;
