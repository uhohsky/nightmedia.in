import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Sparkles, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const isSafari =
  typeof navigator !== "undefined" &&
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isSafari || !heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          ".hero-headline-line",
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1, stagger: 0.15 },
          "-=0.4"
        )
        .fromTo(
          ".hero-gradient-text",
          { opacity: 0 },
          { opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ".hero-cta-primary",
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.4 },
          "-=0.3"
        )
        .fromTo(
          ".hero-cta-secondary",
          { opacity: 0, x: 20 },
          { opacity: 1, x: 0, duration: 0.4 },
          "-=0.4"
        )
        .fromTo(
          ".hero-stat",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 },
          "-=0.3"
        );

      gsap.to(".orb-1", {
        y: -120,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { value: "₹50Cr+", label: "Revenue Generated" },
    { value: "150+", label: "Systems Deployed" },
    { value: "3.2x", label: "Avg. Client ROAS" },
  ];

  return (
    <section ref={heroRef} className="min-h-screen flex items-center relative">
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <div className="hero-badge inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card mb-8">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">
            Growth Systems for Ambitious Brands
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="hero-headline-line block">
            Revenue Systems That Compound
          </span>
          <span className="hero-gradient-text block gradient-text-primary">
            Built Through High-Performance Websites
          </span>
        </h1>

        <p className="hero-subtitle text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
          Night Media builds conversion-focused websites and growth systems for
          startups and service businesses.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
          <Link to="/contact" className="hero-cta-primary btn-primary-glow px-8 py-4 rounded-full">
            Get Free Growth Audit
          </Link>
          <Link to="/projects" className="hero-cta-secondary glass-card px-8 py-4 rounded-full">
            View Our Work
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row gap-12 justify-center">
          {stats.map((s, i) => (
            <div key={i} className="hero-stat">
              <div className="text-4xl font-bold">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {!isSafari && (
        <div className="scroll-indicator-wrapper absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      )}
    </section>
  );
};

export default Hero;
