import { useEffect, useRef } from "react";

/**
 * ConstellationBackground
 * ─────────────────────────────────────────────────────────────────
 * Auto-drifting constellation network — purely decorative, zero interactions.
 *
 * ✅ position: fixed, z-index: -1  → sits behind ALL content
 * ✅ pointer-events: none on BOTH wrapper + canvas → clicks/links work perfectly
 * ✅ No mouse/touch listeners → zero scroll/interaction interference
 * ✅ Footer excluded automatically (footer has its own solid bg on top)
 * ✅ Dark/Light mode aware — regenerates particles on theme toggle
 *
 * Light mode → soft indigo particles + visible connecting lines
 * Dark mode  → bright cyan-blue glowing particles + bold lines
 */

const THEME = {
  light: {
    dot:         "99,102,241",    // indigo-500
    dotAlpha:    [0.35, 0.70],
    line:        "99,102,241",
    lineAlpha:   0.18,
    lineWidth:   0.65,
    connectDist: 150,
    count:       100,
    speed:       0.25,
    rMin:        1.0,
    rMax:        2.5,
    glow:        false,
  },
  dark: {
    dot:         "56,189,248",    // sky-400 — electric cyan
    dotAlpha:    [0.55, 0.92],
    line:        "125,211,252",   // sky-300
    lineAlpha:   0.32,
    lineWidth:   0.85,
    connectDist: 165,
    count:       115,
    speed:       0.22,
    rMin:        1.3,
    rMax:        2.9,
    glow:        true,            // radial glow halo on each dot
  },
};

export const ConstellationBackground = () => {
  const canvasRef = useRef(null);
  const rafRef    = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext("2d");

    let W, H, particles;

    const isDark   = () => document.documentElement.classList.contains("dark");
    const getTheme = () => THEME[isDark() ? "dark" : "light"];

    // ── Particle factory ──────────────────────────────────────────
    const make = (t) => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * t.speed * 2,
      vy: (Math.random() - 0.5) * t.speed * 2,
      r:  t.rMin + Math.random() * (t.rMax - t.rMin),
      a:  t.dotAlpha[0] + Math.random() * (t.dotAlpha[1] - t.dotAlpha[0]),
    });

    // ── Init ──────────────────────────────────────────────────────
    const init = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
      const t = getTheme();
      particles = Array.from({ length: t.count }, () => make(t));
    };

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(init, 180);
    };
    window.addEventListener("resize", onResize);

    // ── Render loop ───────────────────────────────────────────────
    const tick = () => {
      const t = getTheme();
      ctx.clearRect(0, 0, W, H);

      // Move & wrap
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
      }

      // Lines
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b  = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < t.connectDist) {
            const alpha = t.lineAlpha * (1 - d / t.connectDist);
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(${t.line},${alpha})`;
            ctx.lineWidth   = t.lineWidth;
            ctx.stroke();
          }
        }
      }

      // Dots (+ glow ring in dark mode)
      for (const p of particles) {
        if (t.glow) {
          const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
          grd.addColorStop(0, `rgba(${t.dot},${p.a * 0.45})`);
          grd.addColorStop(1, `rgba(${t.dot},0)`);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${t.dot},${p.a})`;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    // ── Boot ──────────────────────────────────────────────────────
    init();
    rafRef.current = requestAnimationFrame(tick);

    // Regenerate on dark/light toggle for instant color switch
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
    // position:fixed + z-index:-1 → behind ALL content including footer
    // Footer has its own solid background so constellation won't show through it
    // pointer-events:none on BOTH → every click passes through to links/buttons
    <div
      aria-hidden="true"
      style={{
        position:      "fixed",
        inset:         0,
        zIndex:        -1,
        pointerEvents: "none",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          display:       "block",
          width:         "100%",
          height:        "100%",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};
