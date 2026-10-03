import { useEffect, useRef } from "react";

/**
 * ConstellationBackground
 * ─────────────────────────────────────────────────────────────
 * Anti-gravity, floating constellation network using a plain
 * <canvas> element. No extra npm package required.
 *
 * Features
 *  • position: fixed  →  zero scroll lag / speed impact
 *  • pointer-events: none on wrapper, auto on canvas
 *    →  grab lines connect to cursor while letting scroll pass through
 *  • Dark-mode aware (reads .dark on <html>)
 *  • "Grab" interaction: lines drawn from nearby particles to mouse
 *  • Click interactions DISABLED
 */

const CONFIG = {
  particleCount: 80,
  maxSpeed: 0.35,
  minRadius: 1.2,
  maxRadius: 2.8,
  connectionDist: 140,
  grabRadius: 180,
  grabLineWidth: 1.2,
  baseLineWidth: 0.5,
  baseLineAlpha: 0.18,
  grabLineAlpha: 0.55,
  particleAlphaMin: 0.4,
  particleAlphaMax: 0.9,
};

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

const LIGHT_PARTICLE = hexToRgb("#6366f1");
const DARK_PARTICLE  = hexToRgb("#818cf8");
const LIGHT_LINE     = hexToRgb("#6366f1");
const DARK_LINE      = hexToRgb("#93c5fd");
const GRAB_LINE_LIGHT = hexToRgb("#4f46e5");
const GRAB_LINE_DARK  = hexToRgb("#60a5fa");

export const ConstellationBackground = () => {
  const canvasRef  = useRef(null);
  const stateRef   = useRef({
    particles: [],
    mouse: { x: -9999, y: -9999 },
    raf: null,
    dark: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");
    const S      = stateRef.current;

    // ── helpers ─────────────────────────────────────────────
    const isDark = () => document.documentElement.classList.contains("dark");

    const makeParticle = (w, h) => ({
      x:  Math.random() * w,
      y:  Math.random() * h,
      vx: (Math.random() - 0.5) * CONFIG.maxSpeed * 2,
      vy: (Math.random() - 0.5) * CONFIG.maxSpeed * 2,
      r:  CONFIG.minRadius + Math.random() * (CONFIG.maxRadius - CONFIG.minRadius),
      a:  CONFIG.particleAlphaMin + Math.random() * (CONFIG.particleAlphaMax - CONFIG.particleAlphaMin),
    });

    const initParticles = (w, h) => {
      S.particles = Array.from({ length: CONFIG.particleCount }, () => makeParticle(w, h));
    };

    // ── resize ───────────────────────────────────────────────
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(canvas.width, canvas.height);
    };

    resize();

    let resizeTimer;
    const onResize = () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(resize, 200); };
    window.addEventListener("resize", onResize);

    // ── mouse (no click, only move/leave) ────────────────────
    const onMove = (e) => {
      const t = e.touches ? e.touches[0] : e;
      S.mouse = { x: t.clientX, y: t.clientY };
    };
    const onLeave = () => { S.mouse = { x: -9999, y: -9999 }; };

    window.addEventListener("mousemove",  onMove,  { passive: true });
    window.addEventListener("touchmove",  onMove,  { passive: true });
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("touchend",   onLeave);

    // ── animation loop ───────────────────────────────────────
    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;
      const dark = isDark();
      const { particles, mouse } = S;

      ctx.clearRect(0, 0, W, H);

      const pColor  = dark ? DARK_PARTICLE  : LIGHT_PARTICLE;
      const lColor  = dark ? DARK_LINE      : LIGHT_LINE;
      const gColor  = dark ? GRAB_LINE_DARK : GRAB_LINE_LIGHT;

      // update positions
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0)  p.x = W;
        if (p.x > W)  p.x = 0;
        if (p.y < 0)  p.y = H;
        if (p.y > H)  p.y = 0;
      }

      // draw connections between particles
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b   = particles[j];
          const dx  = a.x - b.x;
          const dy  = a.y - b.y;
          const d   = Math.sqrt(dx * dx + dy * dy);
          if (d < CONFIG.connectionDist) {
            const alpha = CONFIG.baseLineAlpha * (1 - d / CONFIG.connectionDist);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${lColor},${alpha})`;
            ctx.lineWidth   = CONFIG.baseLineWidth;
            ctx.stroke();
          }
        }
      }

      // draw grab lines from cursor to nearby particles
      for (const p of particles) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d  = Math.sqrt(dx * dx + dy * dy);
        if (d < CONFIG.grabRadius) {
          const alpha = CONFIG.grabLineAlpha * (1 - d / CONFIG.grabRadius);
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = `rgba(${gColor},${alpha})`;
          ctx.lineWidth   = CONFIG.grabLineWidth;
          ctx.stroke();
        }
      }

      // draw particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${pColor},${p.a})`;
        ctx.fill();
      }

      S.raf = requestAnimationFrame(draw);
    };

    S.raf = requestAnimationFrame(draw);

    // watch for dark-mode toggle
    const observer = new MutationObserver(() => { S.dark = isDark(); });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      cancelAnimationFrame(S.raf);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize",      onResize);
      window.removeEventListener("mousemove",   onMove);
      window.removeEventListener("touchmove",   onMove);
      window.removeEventListener("mouseleave",  onLeave);
      window.removeEventListener("touchend",    onLeave);
      observer.disconnect();
    };
  }, []);

  return (
    /* wrapper: fixed, full-viewport, pointer-events none so scroll is never blocked */
    <div
      style={{
        position:      "fixed",
        top:           0,
        left:          0,
        width:         "100vw",
        height:        "100vh",
        pointerEvents: "none",
        zIndex:        0,
      }}
    >
      {/* canvas itself gets pointer-events:auto so grab interaction works */}
      <canvas
        ref={canvasRef}
        style={{
          display:       "block",
          width:         "100%",
          height:        "100%",
          pointerEvents: "auto",
        }}
      />
    </div>
  );
};
