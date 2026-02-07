import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { Sparkles, ChevronDown } from "lucide-react";

const isSafari =
  typeof navigator !== "undefined" &&
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!heroRef.current || isSafari) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          ".hero-line-1",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.3"
        )
        .fromTo(
          ".hero-line-2",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.5"
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ".hero-cta-group",
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.5 },
          "-=0.3"
        )
        .fromTo(
          ".hero-stat",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.12, duration: 0.4 },
          "-=0.2"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "$5M+", label: "Revenue Generated" },
    { value: "150+", label: "Systems Deployed" },
    { value: "3.2x", label: "Avg. ROI" },
  ];

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">

        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground font-medium">
            Revenue-Focused Growth Systems
          </span>
        </div>

        {/* ✅ SEO-SAFE H1 (single H1, animated spans inside) */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8">
          <span className="hero-line-1 block text-foreground">
            Revenue Systems That Compound
          </span>
          <span className="hero-line-2 block gradient-text-primary mt-2">
            Built Through High-Performance Websites
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
          NightMedia is a global website development and performance marketing
          agency building high-converting websites, funnels, and SEO systems for
          ambitious brands.
        </p>

        {/* CTAs */}
        <div className="hero-cta-group flex flex-col sm:flex-row gap-5 justify-center mb-20">
          <Link
            to="/contact"
            className="px-10 py-4 rounded-full btn-primary-glow font-semibold"
          >
            Get Free Growth Audit
          </Link>
          <Link
            to="/projects"
            className="px-10 py-4 rounded-full glass-card glow-border font-semibold"
          >
            View Our Work
          </Link>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 md:gap-20 justify-center">
          {stats.map((s, i) => (
            <div key={i} className="hero-stat text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {s.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {!isSafari && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      )}
    </section>
  );
};

export default Hero;
