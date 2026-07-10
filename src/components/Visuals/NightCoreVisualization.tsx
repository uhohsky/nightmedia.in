import React, { useEffect, useRef } from 'react';
import NightMediaIcon from '../Logo/NightMediaIcon';

/**
 * Night Core — signature interactive hero visualization.
 * A metallic "N" at the gravitational center, surrounded by an
 * orbital lattice of particles connected by soft AI energy lines.
 * Particles respond to cursor proximity (subtle repulsion + brightening).
 * Canvas-driven, DPR-aware, respects prefers-reduced-motion.
 */
interface Particle {
  angle: number;
  radius: number;
  speed: number;
  size: number;
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  glow: number;
}

const NightCoreVisualization: React.FC<{ className?: string }> = ({ className = '' }) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>();
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let w = 0;
    let h = 0;
    let cx = 0;
    let cy = 0;

    const RINGS = [
      { count: 8, radius: 0.22, speed: 0.00028, size: 1.6 },
      { count: 14, radius: 0.34, speed: -0.00022, size: 1.4 },
      { count: 22, radius: 0.46, speed: 0.00016, size: 1.2 },
    ];

    let particles: Particle[] = [];

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      cx = w / 2;
      cy = h / 2;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildParticles();
    };

    const buildParticles = () => {
      const min = Math.min(w, h);
      particles = [];
      RINGS.forEach((ring) => {
        for (let i = 0; i < ring.count; i++) {
          const angle = (i / ring.count) * Math.PI * 2 + Math.random() * 0.3;
          const radius = ring.radius * min + (Math.random() - 0.5) * 8;
          particles.push({
            angle,
            radius,
            speed: ring.speed * (0.85 + Math.random() * 0.3),
            size: ring.size + Math.random() * 0.6,
            baseX: 0,
            baseY: 0,
            x: 0,
            y: 0,
            glow: 0.3 + Math.random() * 0.5,
          });
        }
      });
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const onMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;
    };
    const onLeave = () => {
      mouseRef.current.active = false;
    };
    wrap.addEventListener('mousemove', onMove);
    wrap.addEventListener('mouseleave', onLeave);

    let last = performance.now();

    const draw = (now: number) => {
      const dt = Math.min(now - last, 48);
      last = now;

      ctx.clearRect(0, 0, w, h);

      // Ambient radial wash (very subtle)
      const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(w, h) * 0.55);
      bg.addColorStop(0, 'rgba(15, 98, 254, 0.10)');
      bg.addColorStop(0.55, 'rgba(25, 198, 209, 0.04)');
      bg.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, w, h);

      // Orbit rings (whisper hairlines)
      ctx.lineWidth = 1;
      const min = Math.min(w, h);
      [0.22, 0.34, 0.46, 0.56].forEach((r, i) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r * min, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(154, 176, 196, ${0.06 + i * 0.01})`;
        ctx.stroke();
      });

      // Advance particles
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mouseActive = mouseRef.current.active;

      for (const p of particles) {
        p.angle += p.speed * dt * (reducedMotion ? 0.2 : 1);
        p.baseX = cx + Math.cos(p.angle) * p.radius;
        p.baseY = cy + Math.sin(p.angle) * p.radius;

        // Cursor repulsion (soft)
        let dx = p.baseX - mx;
        let dy = p.baseY - my;
        let dist = Math.hypot(dx, dy);
        let push = 0;
        if (mouseActive && dist < 120) {
          push = (1 - dist / 120) * 22;
        }
        const pxTarget = p.baseX + (dist ? (dx / dist) * push : 0);
        const pyTarget = p.baseY + (dist ? (dy / dist) * push : 0);
        // Smooth follow
        p.x += (pxTarget - p.x) * 0.12;
        p.y += (pyTarget - p.y) * 0.12;
      }

      // Connections — nearest-neighbour, subtle
      const maxDist = min * 0.11;
      ctx.lineWidth = 0.6;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < maxDist) {
            const alpha = (1 - d / maxDist) * 0.22;
            ctx.strokeStyle = `rgba(120, 170, 230, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Radial connections back to core
      ctx.lineWidth = 0.5;
      for (const p of particles) {
        const d = Math.hypot(p.x - cx, p.y - cy);
        const alpha = Math.max(0, 0.14 - d / (min * 4));
        if (alpha > 0.02) {
          ctx.strokeStyle = `rgba(25, 198, 209, ${alpha})`;
          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        }
      }

      // Particles
      for (const p of particles) {
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 6);
        g.addColorStop(0, `rgba(220, 235, 255, ${0.8 * p.glow})`);
        g.addColorStop(0.4, `rgba(15, 98, 254, ${0.35 * p.glow})`);
        g.addColorStop(1, 'rgba(15, 98, 254, 0)');
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = `rgba(240, 248, 255, ${0.95 * p.glow})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      wrap.removeEventListener('mousemove', onMove);
      wrap.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={`relative aspect-square w-full max-w-[620px] ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Metallic N — the gravitational center */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          <div className="absolute inset-0 -m-10 rounded-full bg-primary/15 blur-3xl" />
          <NightMediaIcon
            variant="metallic"
            size={148}
            animated
            className="relative drop-shadow-[0_18px_60px_hsl(var(--primary)/0.35)]"
          />
        </div>
      </div>

      {/* Floating telemetry chips */}
      <div className="absolute top-4 left-2 text-[10px] font-mono uppercase tracking-[0.28em] text-muted-foreground/70">
        night · core
      </div>
      <div className="absolute bottom-4 right-2 text-[10px] font-mono uppercase tracking-[0.28em] text-muted-foreground/70">
        <span className="text-accent">●</span> system online
      </div>
    </div>
  );
};

export default NightCoreVisualization;
