import React from 'react';
import NightMediaIcon from '../Logo/NightMediaIcon';

const testimonials = [
  {
    quote:
      'Night Media didn\'t redesign our site. They rewired how the business acquires customers. The system compounds every week.',
    name: 'Ananya Verma',
    role: 'Founder, Synfiction',
  },
  {
    quote:
      'Craft you\'d expect from Apple, shipped at startup speed. Rare combination. Rarer team.',
    name: 'Marcus Reed',
    role: 'VP Marketing, Aegis Labs',
  },
  {
    quote:
      'They think like operators, design like a studio, and execute like an engineering org. It shows in every pixel.',
    name: 'Priya Nair',
    role: 'Head of Growth, Meridian',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="env-dark env-divide-top py-28 lg:py-40">
      <div className="container-enterprise">
        <div className="max-w-3xl mb-20">
          <p className="eyebrow mb-5">Voices</p>
          <h2 className="font-display text-[40px] lg:text-[64px] leading-[1.02] tracking-[-0.028em] font-medium text-foreground">
            The teams we build with,
            <br />
            <span className="text-muted-foreground">on the work.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="surface-card rounded-3xl p-8 lg:p-10 flex flex-col"
            >
              <NightMediaIcon variant="metallic" size={22} className="mb-8 opacity-80" />
              <blockquote className="text-[17px] lg:text-[18px] leading-[1.55] text-foreground/95 tracking-[-0.005em]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-10 pt-6 border-t border-border/70">
                <div className="text-[13px] font-medium text-foreground">{t.name}</div>
                <div className="text-[12px] text-muted-foreground mt-0.5">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
