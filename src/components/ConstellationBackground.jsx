import { useEffect, useRef } from "react";

/**
 * ConstellationBackground
 * ─────────────────────────────────────────────────────────────
 * Auto-drifting ambient constellation network — pure canvas, no library.
 *
 * Key design decisions that prevent ALL interaction bugs:
 *  • z-index: -1          → sits behind every DOM element including footer
 *  • pointer-events: none on BOTH wrapper AND canvas → ALL clicks/taps/
 *    hover events pass straight through to links and buttons
 *  • NO mouse/touch listeners at all → zero interaction, zero interference
 *  • position: fixed, 100vw×100vh → covers only the viewport, never
 *    pushes the footer or any content
 *  • Particles auto-drift smoothly with subtle opacity — purely decorative
 */

const CFG = {
  count:         70,          // particle count
  speedMax:      0.28,        // max drift speed
  rMin:          1.0,         // min particle radius
  rMax:          2.5,         // max particle radius
  connectDist:   130,         // max distance for connecting lines
  lineAlpha:     0.14,        // max line opacity (subtle)
  dotAlphaMin:   0.25,        // particle min opacity
  dotAlphaMax:   0.65,        // particle max opacity
};

// Pre-compute RGB strings for fast rendering
const rgb = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`;
};

// Light mode  → soft indigo
// Dark mode   → soft blue-violet
const THEME = {
  light: { dot: rgb("#6366f1"), line: rgb("#818cf8") },
  dark:  { dot: rgb("#93c5fd"), line: rgb("#a5b4fc") },
};

export const ConstellationBackground = () => {
  const canvasRef = useRef(null);
  const rafRef    = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");

    let W, H, particles;

    // ── Helpers ────────────────────────────────────────────────
    const isDark = () => document.documentElement.classList.contains("dark");

    const makeParticle = () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * CFG.speedMax * 2,
      vy: (Math.random() - 0.5) * CFG.speedMax * 2,
      r:  CFG.rMin + Math.random() * (CFG.rMax - CFG.rMin),
      a:  CFG.dotAlphaMin + Math.random() * (CFG.dotAlphaMax - CFG.dotAlphaMin),
    });

    const init = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
      particles = Array.from({ length: CFG.count }, makeParticle);
    };

    // ── Resize (debounced) ─────────────────────────────────────
    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(init, 200);
    };
    window.addEventListener("resize", onResize);

    // ── Render loop ────────────────────────────────────────────
    const tick = () => {
      ctx.clearRect(0, 0, W, H);

      const { dot, line } = THEME[isDark() ? "dark" : "light"];

      // Update positions — wrap around edges
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
      }

      // Draw connecting lines between close particles
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b  = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < CFG.connectDist) {
            const alpha = CFG.lineAlpha * (1 - d / CFG.connectDist);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${line},${alpha})`;
            ctx.lineWidth   = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dot},${p.a})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    // ── Boot ───────────────────────────────────────────────────
    init();
    rafRef.current = requestAnimationFrame(tick);

    // Watch dark-mode class changes (no re-render needed — tick() reads live)
    const observer = new MutationObserver(() => {});
    observer.observe(document.documentElement, {
      attributes:      true,
      attributeFilter: ["class"],
    });

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      observer.disconnect();
    };
  }, []);

  return (
    /*
     * ┌──────────────────────────────────────────────────────────┐
     * │  wrapper: position fixed, z-index -1                     │
     * │  → sits behind ALL content, nav, footer, modals         │
     * │  pointer-events: none on BOTH wrapper + canvas           │
     * │  → every click / tap passes straight through to the DOM  │
     * └──────────────────────────────────────────────────────────┘
     */
    <div
      aria-hidden="true"
      style={{
        position:      "fixed",
        top:           0,
        left:          0,
        width:         "100vw",
        height:        "100vh",
        zIndex:        -1,          // ← behind everything
        pointerEvents: "none",      // ← clicks pass through wrapper
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display:       "block",
          width:         "100%",
          height:        "100%",
          pointerEvents: "none",    // ← clicks pass through canvas too
        }}
      />
    </div>
  );
};
