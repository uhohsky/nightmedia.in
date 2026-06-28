import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import HeroAILattice from "../Visuals/HeroAILattice";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const items = el.querySelectorAll<HTMLElement>("[data-reveal]");
    items.forEach((node, i) => {
      node.style.opacity = "0";
      node.style.transform = "translateY(16px)";
      node.style.transition = `opacity 0.7s ease ${i * 80}ms, transform 0.7s ease ${i * 80}ms`;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          node.style.opacity = "1";
          node.style.transform = "translateY(0)";
        });
      });
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32"
    >
      {/* Single, quiet ambient orb */}
      <div className="gradient-orb gradient-orb-1 w-[700px] h-[700px] -top-40 -right-40" aria-hidden="true" />

      <div className="container-enterprise relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <div
              data-reveal
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full surface-card text-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-muted-foreground font-medium tracking-wide">
                AI-Powered Growth Infrastructure
              </span>
            </div>

            <h1
              data-reveal
              className="text-hero text-foreground mt-8 max-w-[18ch]"
            >
              Enterprise growth systems,{" "}
              <span className="text-gradient-brand">engineered with AI.</span>
            </h1>

            <p
              data-reveal
              className="text-body-lg text-muted-foreground mt-8 max-w-[58ch]"
            >
              Night Media designs the websites, automations, and content engines
              that turn ambitious brands into compounding revenue machines —
              built AI-first, tuned for performance, engineered to scale.
            </p>

            <div data-reveal className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                to="/ai-audit"
                className="btn-primary-glow inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[15px]"
              >
                Get Your Free AI Audit
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="btn-secondary-enterprise inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-[15px]"
              >
                Book a Strategy Call
              </Link>
            </div>

            <div data-reveal className="mt-14 flex flex-wrap gap-x-12 gap-y-6">
              {[
                { value: "₹1M+", label: "Revenue generated" },
                { value: "150+", label: "Systems deployed" },
                { value: "3.2×", label: "Average ROI" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                    {s.value}
                  </div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: AI lattice illustration */}
          <div data-reveal className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroAILattice />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
