import { useEffect, useRef } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export const HeroSection = () => {
  const canvasRef = useRef(null);

  // --- MOBILE OPTIMIZED BACKGROUND LOGIC ---
  useEffect(() => {
    // 1. MOBILE CHECK: Don't run animation on mobile to keep scrolling fast
    if (window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    let mouse = { x: null, y: null, radius: 170 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    const parent = canvas.parentElement;
    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    // Node configuration for Desktop
    const particleCount = Math.floor((width * height) / 9000);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 1.5 + 1.2,
    }));

    let animationFrameId;

    // Draw Subtle Grid Pattern
    const drawGrid = (isDark) => {
      const gridSize = 45;
      ctx.beginPath();
      ctx.lineWidth = 0.6;
      ctx.strokeStyle = isDark
        ? "rgba(255, 255, 255, 0.08)"
        : "rgba(0, 0, 0, 0.07)";

      for (let x = 0; x <= width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.classList.contains("dark");

      // 1. Grid Background
      drawGrid(isDark);

      // 2. Nodes & Lines
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          let dx = mouse.x - p.x;
          let dy = mouse.y - p.y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            let force = (mouse.radius - dist) / mouse.radius;
            p.x -= (dx / dist) * force * 3.5;
            p.y -= (dy / dist) * force * 3.5;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? "rgba(180, 205, 235, 0.65)"
          : "rgba(51, 65, 85, 0.5)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          let p2 = particles[j];
          let dx = p.x - p2.x;
          let dy = p.y - p2.y;
          let dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);

            const alpha = 1 - dist / 130;
            ctx.strokeStyle = isDark
              ? `rgba(148, 163, 184, ${0.28 * alpha})`
              : `rgba(71, 85, 105, ${0.25 * alpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animateParticles);
    };

    animateParticles();

    return () => {
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center px-4 bg-[#f5f5f7] dark:bg-[#0a101d] overflow-hidden transition-colors duration-500">
      
      {/* 0. INTERACTIVE GRAPH CANVAS BACKGROUND (HIDDEN ON MOBILE) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden md:block"
      />

      {/* Modern Gradient Background Glows */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[100px]sm:blur-[150px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-[100px]sm:blur-[150px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 py-20 md:py-0 text-center">
        
        {/* Profile Image with subtle border and shadow */}
        <div className="relative inline-block mb-10 group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative aspect-square w-32 md:w-40 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl group-hover:scale-105 transition-all duration-300 ease-out">
            <img 
              src="/path-to-your-profile.jpg" 
              alt="Dulana Chathurma Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Hero Content */}
        <div className="space-y-6">
          <span className="inline-block px-4 py-1 rounded-full bg-slate-900/5 dark:bg-white/10 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-semibold mb-2">
            Software Engineering Student @ University of Kelaniya
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7]">
            Dulana Chathurma
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium max-w-2xl mx-auto leading-relaxed">
            Crafting efficient software solutions and exploring the intersections of AI and low-level engineering.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href="#projects"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 group text-sm md:text-base w-full sm:w-auto"
          >
            View My Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/path-to-your-cv.pdf"
            download
            className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:scale-95 text-sm md:text-base w-full sm:w-auto border border-slate-200 dark:border-slate-700 hover:border-blue-500/50"
          >
            Download CV
            <Download size={18} />
          </a>
        </div>

        {/* Social Media Links */}
        <div className="mt-16 sm:mt-24 pt-10 border-t border-slate-200 dark:border-slate-800/80 max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-6">
            Connect With Me
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {[
              { icon: Linkedin, url: "https://linkedin.com/in/dulana-chathurma", label: "LinkedIn" },
              { icon: Github, url: "https://github.com/dulanachathurma", label: "GitHub" },
              { icon: Mail, url: "mailto:dulanachathurma99@gmail.com", label: "Email" },
              { icon: () => <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"/></svg>, url: "https://medium.com/@dulanachathurma99", label: "Medium" }
            ].map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                title={link.label}
                className="flex items-center justify-center aspect-square w-12 rounded-xl bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 shadow-sm border border-slate-100 dark:border-slate-700/50 hover:bg-slate-50 dark:hover:bg-slate-700/50 hover:text-blue-600 dark:hover:text-blue-400 hover:scale-110 transition-all duration-300"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
