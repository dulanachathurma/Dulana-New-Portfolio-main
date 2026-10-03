import { useEffect, useRef } from "react";

/**
 * ConstellationBackground — Prominent Visible Network
 * ─────────────────────────────────────────────────────
 * Designed to match the reference image:
 *   Light mode: thin indigo/slate lines on soft white — clearly visible
 *   Dark  mode: bright cyan-blue glowing lines on deep navy — bold & electric
 *
 * Architecture (zero interaction bugs):
 *   • z-index: -1, pointer-events: none on BOTH wrapper + canvas
 *   • No mouse/touch listeners → auto-drift only, zero event interference
 *   • position: fixed → never affects layout or scroll
 */

// ── Config ───────────────────────────────────────────────────────
const LIGHT = {
  bg:          "#f8faff",         // soft off-white page tint
  dot:         "99,102,241",      // indigo-500
  dotAlpha:    [0.45, 0.80],
  line:        "99,102,241",      // indigo lines
  lineAlpha:   0.22,
  connectDist: 160,
  count:       110,
  speed:       0.28,
  rMin:        1.2,
  rMax:        2.8,
};

const DARK = {
  bg:          "#060d1f",         // near-black navy
  dot:         "56,189,248",      // sky-400 (electric cyan-blue)
  dotAlpha:    [0.55, 0.95],
  line:        "99,179,237",      // sky-300 for lines
  lineAlpha:   0.38,              // much more visible in dark
  connectDist: 170,
  count:       120,
  speed:       0.25,
  rMin:        1.4,
  rMax:        3.0,
};

// ── Component ────────────────────────────────────────────────────
export const ConstellationBackground = () => {
  const canvasRef = useRef(null);
  const rafRef    = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");

    let W, H, particles;

    const isDark  = () => document.documentElement.classList.contains("dark");
    const getTheme = () => (isDark() ? DARK : LIGHT);

    // ── Particle factory ─────────────────────────────────────────
    const make = (theme) => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * theme.speed * 2,
      vy: (Math.random() - 0.5) * theme.speed * 2,
      r:  theme.rMin + Math.random() * (theme.rMax - theme.rMin),
      a:  theme.dotAlpha[0] + Math.random() * (theme.dotAlpha[1] - theme.dotAlpha[0]),
    });

    // ── Init / resize ────────────────────────────────────────────
    const init = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
      const t = getTheme();
      particles = Array.from({ length: t.count }, () => make(t));
    };

    let resizeTimer;
    const onResize = () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(init, 180); };
    window.addEventListener("resize", onResize);

    // ── Render loop ──────────────────────────────────────────────
    const tick = () => {
      const theme = getTheme();
      ctx.clearRect(0, 0, W, H);

      // Update positions (wrap)
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
      }

      // Draw lines between nearby particles
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b  = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < theme.connectDist) {
            const alpha = theme.lineAlpha * (1 - d / theme.connectDist);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${theme.line},${alpha})`;
            ctx.lineWidth   = isDark() ? 0.9 : 0.65;
            ctx.stroke();
          }
        }
      }

      // Draw particles (with subtle glow in dark mode)
      for (const p of particles) {
        if (isDark()) {
          // Outer glow ring
          const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3.5);
          grd.addColorStop(0,   `rgba(${theme.dot},${p.a * 0.5})`);
          grd.addColorStop(1,   `rgba(${theme.dot},0)`);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        }
        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${theme.dot},${p.a})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    init();
    rafRef.current = requestAnimationFrame(tick);

    // Watch theme toggling
    const observer = new MutationObserver(() => {
      const t = getTheme();
      particles = particles.map(() => make(t));
    });
    observer.observe(document.documentElement, {
      attributes: true, attributeFilter: ["class"],
    });

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position:      "fixed",
        inset:         0,
        zIndex:        -1,          // behind everything
        pointerEvents: "none",      // clicks pass through
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display:       "block",
          width:         "100%",
          height:        "100%",
          pointerEvents: "none",    // clicks pass through canvas too
        }}
      />
    </div>
  );
};
