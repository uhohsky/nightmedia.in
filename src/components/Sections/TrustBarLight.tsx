import React from 'react';

const brands = [
  'SYNFICTION.AI', 'AXIOM', 'HELIOS', 'NORTHWIND',
  'OCTAVE', 'MERIDIAN', 'KINETIC', 'LATTICE',
];

/**
 * Trust bar — light environment, wordmark-only in the Vercel register.
 */
const TrustBarLight: React.FC = () => {
  return (
    <section className="env-light env-divide-top">
      <div className="container-enterprise py-20 lg:py-24">
        <p className="text-[11px] font-mono uppercase tracking-[0.32em] text-muted-foreground text-center mb-12">
          Trusted by teams shipping globally
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-x-8 gap-y-8">
          {brands.map((b) => (
            <div
              key={b}
              className="text-center font-display text-[15px] tracking-[0.18em] text-foreground/55 hover:text-foreground transition-colors"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBarLight;
