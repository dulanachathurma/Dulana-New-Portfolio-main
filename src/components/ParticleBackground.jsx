import { useEffect, useRef, useState, useCallback } from "react";

export const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const isDarkModeRef = useRef(false);

  // Watch for dark mode changes
  useEffect(() => {
    const checkDarkMode = () => {
      const dark = document.documentElement.classList.contains("dark");
      setIsDarkMode(dark);
      isDarkModeRef.current = dark;
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const createParticles = useCallback((width, height) => {
    // Calculate particle count based on screen area — not too many for performance
    const area = width * height;
    const count = Math.min(Math.floor(area / 8000), 180);
    const particles = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        baseRadius: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    return particles;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width, height;

    const resize = () => {
      // Get the full scrollable height of the page, minus footer
      const footer = document.querySelector("footer");
      const footerHeight = footer ? footer.offsetHeight : 0;
      const fullHeight = Math.max(
        document.body.scrollHeight - footerHeight,
        window.innerHeight
      );

      width = window.innerWidth;
      height = fullHeight;

      canvas.width = width;
      canvas.height = height;

      particlesRef.current = createParticles(width, height);
    };

    resize();

    // Debounced resize
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 200);
    };

    window.addEventListener("resize", handleResize);

    // Mouse tracking — convert to absolute page coordinates
    const handleMouseMove = (e) => {
      mouseRef.current = {
        x: e.pageX,
        y: e.pageY,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Connection distance
    const connectionDist = 130;
    const mouseInfluenceRadius = 160;

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const dark = isDarkModeRef.current;
      const particles = particlesRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Colors based on theme
      const particleColor = dark
        ? "rgba(200, 210, 230, "
        : "rgba(80, 90, 120, ";
      const lineColor = dark
        ? "rgba(150, 170, 200, "
        : "rgba(100, 120, 160, ";
      const mouseLineColor = dark
        ? "rgba(120, 160, 255, "
        : "rgba(80, 120, 220, ";
      const glowColor = dark
        ? "rgba(100, 150, 255, "
        : "rgba(70, 100, 200, ";

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particles
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Mouse interaction — push particles away gently and enlarge
        const dxMouse = p.x - mx;
        const dyMouse = p.y - my;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouseInfluenceRadius) {
          const force = (mouseInfluenceRadius - distMouse) / mouseInfluenceRadius;
          const angle = Math.atan2(dyMouse, dxMouse);
          p.x += Math.cos(angle) * force * 1.5;
          p.y += Math.sin(angle) * force * 1.5;
          p.radius = p.baseRadius + force * 2.5;
        } else {
          p.radius += (p.baseRadius - p.radius) * 0.05;
        }

        // Draw particle with subtle glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = particleColor + p.opacity + ")";
        ctx.fill();

        // Glow for particles near mouse
        if (distMouse < mouseInfluenceRadius) {
          const glowIntensity =
            ((mouseInfluenceRadius - distMouse) / mouseInfluenceRadius) * 0.4;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = glowColor + glowIntensity + ")";
          ctx.fill();
        }

        // Draw connections between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.25;

            // Check if either particle is near mouse — if so, brighten the line
            const d1 = Math.sqrt(
              (p.x - mx) ** 2 + (p.y - my) ** 2
            );
            const d2 = Math.sqrt(
              (p2.x - mx) ** 2 + (p2.y - my) ** 2
            );
            const nearMouse =
              d1 < mouseInfluenceRadius || d2 < mouseInfluenceRadius;

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = nearMouse
              ? mouseLineColor + alpha * 2.5 + ")"
              : lineColor + alpha + ")";
            ctx.lineWidth = nearMouse ? 1.2 : 0.6;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Re-calculate canvas height periodically to account for dynamic content
    const heightInterval = setInterval(() => {
      const footer = document.querySelector("footer");
      const footerHeight = footer ? footer.offsetHeight : 0;
      const fullHeight = Math.max(
        document.body.scrollHeight - footerHeight,
        window.innerHeight
      );
      if (Math.abs(height - fullHeight) > 50) {
        height = fullHeight;
        canvas.height = height;
        particlesRef.current = createParticles(width, height);
      }
    }, 2000);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
      clearTimeout(resizeTimeout);
      clearInterval(heightInterval);
    };
  }, [createParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};
