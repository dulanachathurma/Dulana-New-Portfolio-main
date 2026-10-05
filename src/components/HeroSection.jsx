import { useEffect, useState, useRef } from "react";
import { ArrowUpRight, Shield, Cpu, Terminal, ChevronDown, Sparkles } from "lucide-react";

export const HeroSection = () => {
  const [animate, setAnimate] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    setAnimate(true);
  }, []);

  // --- INTERACTIVE GRAPH CANVAS WITH MOBILE PERFORMANCE OPTIMIZATION ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    let mouse = { x: null, y: null, radius: 170 };

    const isMobile = window.innerWidth < 768;

    const handleMouseMove = (e) => {
      if (isMobile) return;
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

    const particleCount = Math.floor((width * height) / 9500);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 1.5 + 1.2,
    }));

    let animationFrameId;

    const drawGrid = (isDark) => {
      const gridSize = 45;
      ctx.beginPath();
      ctx.lineWidth = 0.6;
      ctx.strokeStyle = isDark
        ? "rgba(255, 255, 255, 0.075)"
        : "rgba(0, 0, 0, 0.065)";

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

      drawGrid(isDark);

      if (isMobile) return;

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
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-between items-center px-6 pt-24 pb-8 bg-[#f5f5f7] dark:bg-[#0a101d] text-[#1d1d1f] dark:text-[#f5f5f7] relative overflow-hidden select-none transition-colors duration-500"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif' }}
    >
      {/* 0. INTERACTIVE GRAPH + GRID CANVAS BACKGROUND */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* 1. DYNAMIC LIGHT/DARK AMBIENT GLOW */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[145%] max-w-[1600px] h-[550px] bg-[radial-gradient(ellipse_at_top,_rgba(0,113,227,0.03),_transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(30,58,138,0.15),_transparent_60%)]" />
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 dark:from-blue-600/15 dark:via-indigo-500/10 dark:to-cyan-500/10 rounded-full blur-[150px] opacity-80" />
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="w-full max-w-5xl mx-auto text-center relative z-10 mt-auto mb-16 flex flex-col items-center pt-8">

        {/* TERMINAL HEADER BADGE */}
        <div 
          className={`mb-6 transition-all duration-[1000ms] cubic-bezier(0.25, 1, 0.5, 1) ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-[#0f172a]/90 dark:bg-[#090d16]/90 border border-slate-700/60 dark:border-slate-800/80 shadow-lg backdrop-blur-md font-mono text-xs text-slate-200">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] inline-block border border-[#e0443e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] inline-block border border-[#dea123]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] inline-block border border-[#1aab29]" />
            </div>
            <span className="text-slate-400 pl-1 border-l border-slate-700/80">
              dulana@macbook-air-m1: <span className="text-cyan-400">~/portfolio</span>
            </span>
            <span className="w-2 h-4 bg-emerald-400 animate-pulse inline-block rounded-xs" />
          </div>
        </div>

        {/* PROFILE IMAGE CARD WITH LIGHT & DARK MODE SPINNING GLOW BORDER */}
        <div 
          className={`mb-8 relative transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1) ${
            animate ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative rounded-full p-[3px] overflow-hidden group cursor-pointer border border-slate-300/80 dark:border-transparent shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            
            {/* Spinning Gradient Border (Active in both Light & Dark Mode) */}
            <div className="absolute inset-[-50%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_75%,#0071e3_100%)] dark:bg-[conic-gradient(from_0deg,transparent_75%,#38bdf8_100%)] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10 bg-[#f5f5f7] dark:bg-[#0a101d] p-1.5 rounded-full transition-colors duration-500">
              <div className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden">
                <img 
                  src="/dulana-profile-circle1.jpg" 
                  alt="Dulana Chathurma" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-4 md:right-4 z-20 flex h-5 w-5 md:h-6 md:w-6 items-center justify-center">
             <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
             <span className="relative inline-flex h-4 w-4 md:h-5 md:w-5 rounded-full bg-emerald-500 border-[2.5px] border-[#f5f5f7] dark:border-[#0a101d]"></span>
          </div>
        </div>

        {/* TOP BADGE */}
        <div className="mb-4 overflow-visible inline-block">
          <p 
            className={`text-[#0066cc] dark:text-[#38bdf8] text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1) px-4 py-1.5 rounded-full bg-blue-50/80 dark:bg-sky-950/40 border border-blue-200/60 dark:border-sky-800/40 backdrop-blur-sm ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            SOFTWARE ENGINEERING UNDERGRADUATE · UNIVERSITY OF KELANIYA
          </p>
        </div>

        {/* MAIN HEADLINE */}
        <h1 className="text-4xl sm:text-6xl md:text-7.5xl font-bold tracking-[-0.03em] leading-[1.12] pb-6 mb-2 overflow-visible">
          <span 
            className={`block text-[#1d1d1f] dark:text-[#f8fafc] transition-all duration-[1400ms] delay-100 cubic-bezier(0.25, 1, 0.5, 1) ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            Dulana Chathurma.
          </span>
          <span 
            className={`block bg-clip-text text-transparent bg-gradient-to-r from-[#0071e3] via-[#3b82f6] to-[#0284c7] dark:from-[#ffffff] dark:via-[#cbd5e1] dark:to-[#38bdf8] bg-[length:200%_auto] animate-shimmer transition-all duration-[1400ms] delay-300 cubic-bezier(0.25, 1, 0.5, 1) py-1 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            Engineering Enterprise Intelligence.
          </span>
        </h1>

        {/* SUB-HEADING / DESCRIPTION */}
        <div className="overflow-visible max-w-3xl mx-auto mb-10">
          <p 
            className={`text-[#6e6e73] dark:text-[#94a3b8] text-base sm:text-lg md:text-xl font-normal tracking-tight leading-relaxed transition-all duration-[1400ms] delay-500 cubic-bezier(0.25, 1, 0.5, 1) ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Building production-ready systems with <span className="text-[#1d1d1f] dark:text-[#f8fafc] font-semibold">Spring Boot</span>, <span className="text-[#1d1d1f] dark:text-[#f8fafc] font-semibold">Node.js</span>, and <span className="text-[#1d1d1f] dark:text-[#f8fafc] font-semibold">React</span>, seamlessly integrated with <span className="text-[#1d1d1f] dark:text-[#f8fafc] font-semibold">AI/ML capabilities</span>, UI/UX excellence, and scalable cloud architectures.
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div 
          className={`flex flex-col sm:flex-row gap-5 justify-center items-center transition-all duration-[1400ms] delay-700 cubic-bezier(0.25, 1, 0.5, 1) ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Primary Button */}
          <a 
            href="#projects" 
            className="w-full sm:w-auto bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm font-semibold py-3.5 px-8 rounded-full tracking-tight transition-all duration-300 shadow-[0_4px_20px_rgba(0,113,227,0.3)] hover:shadow-[0_6px_25px_rgba(0,113,227,0.5)] active:scale-98 flex items-center justify-center gap-2 group"
          >
            Explore Featured Projects
            <Sparkles className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
          </a>

          {/* Secondary Button */}
          <a 
            href="/Dulana_Chathurma_Resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto group inline-flex items-center justify-center gap-1.5 py-3.5 px-7 rounded-full border border-slate-300 dark:border-slate-700/80 bg-white/50 dark:bg-slate-900/50 hover:bg-slate-100 dark:hover:bg-slate-800 text-[#1d1d1f] dark:text-[#f5f5f7] text-sm font-semibold tracking-tight transition-all duration-300 shadow-xs hover:border-slate-400 dark:hover:border-slate-600"
          >
            Review Executive CV 
            <ArrowUpRight className="h-4 w-4 text-[#0066cc] dark:text-[#38bdf8] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>

      {/* COMPETENCY GRID CONTAINER */}
      <div className="w-full max-w-5xl mx-auto relative mt-auto">

        {/* Glow Streak Line */}
        <div className="relative w-full h-[1px] mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0071e3]/40 dark:via-slate-200/80 to-transparent h-full" />
          <div className="absolute inset-y-0 left-10 right-10 bg-gradient-to-r from-transparent via-[#0071e3] dark:via-cyan-100 to-transparent h-full" />
          <div className="absolute -inset-y-2 left-1/6 right-1/6 bg-gradient-to-r from-transparent via-[#0071e3]/25 dark:via-cyan-300/60 to-transparent blur-md dark:blur-sm" />
          <div className="absolute -inset-y-1 left-1/3 right-1/3 bg-gradient-to-r from-transparent via-[#38bdf8]/40 dark:via-cyan-200/80 to-transparent blur-xs" />
        </div>

        <div 
          className={`grid grid-cols-1 sm:grid-cols-3 gap-8 pt-2 pb-2 text-[#6e6e73] transition-all duration-[1600ms] delay-900 ${
            animate ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-start gap-3.5 text-left group">
            <div className="p-2.5 rounded-xl bg-slate-200/50 dark:bg-[#1e293b]/60 border border-slate-300/40 dark:border-[#334155] text-[#1d1d1f] dark:text-[#f8fafc] transition-colors duration-300 group-hover:bg-[#0071e3] group-hover:border-[#0071e3]">
              <Shield className="h-4 w-4 text-[#0066cc] dark:text-[#38bdf8] group-hover:text-white" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1d1d1f] dark:text-[#f8fafc] mb-1.5">Robust Core</h3>
              <p className="text-xs leading-relaxed text-[#86868b] dark:text-[#94a3b8]">Spring Boot backend architectures, clean design patterns, and enterprise RESTful APIs.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 text-left group">
            <div className="p-2.5 rounded-xl bg-slate-200/50 dark:bg-[#1e293b]/60 border border-slate-300/40 dark:border-[#334155] text-[#1d1d1f] dark:text-[#f8fafc] transition-colors duration-300 group-hover:bg-[#0071e3] group-hover:border-[#0071e3]">
              <Cpu className="h-4 w-4 text-[#0066cc] dark:text-[#38bdf8] group-hover:text-white" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1d1d1f] dark:text-[#f8fafc] mb-1.5">Intelligent Logic</h3>
              <p className="text-xs leading-relaxed text-[#86868b] dark:text-[#94a3b8]">Integration of LLMs and machine learning algorithms into production workflows.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 text-left group">
            <div className="p-2.5 rounded-xl bg-slate-200/50 dark:bg-[#1e293b]/60 border border-slate-300/40 dark:border-[#334155] text-[#1d1d1f] dark:text-[#f8fafc] transition-colors duration-300 group-hover:bg-[#0071e3] group-hover:border-[#0071e3]">
              <Terminal className="h-4 w-4 text-[#0066cc] dark:text-[#38bdf8] group-hover:text-white" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#1d1d1f] dark:text-[#f8fafc] mb-1.5">Advanced UX</h3>
              <p className="text-xs leading-relaxed text-[#86868b] dark:text-[#94a3b8]">React & Node.js dynamic full-stack ecosystems optimized for fluid interaction.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Cue */}
      <div className="absolute bottom-2 right-6 hidden md:block">
        <a href="#about" aria-label="Scroll down" className="text-[#6e6e73] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors block animate-bounce-subtle">
          <ChevronDown className="h-4 w-4" />
        </a>
      </div>

      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes shimmer {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 2.5s cubic-bezier(0.25, 1, 0.5, 1) infinite;
        }
        .animate-shimmer {
          animation: shimmer 7s ease infinite;
        }
      `}</style>
    </section>
  );
};
