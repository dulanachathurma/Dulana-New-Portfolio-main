import { useEffect, useState } from "react";
import { ArrowUpRight, Shield, Cpu, Terminal, ChevronDown } from "lucide-react";

export const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-between items-center px-6 pt-36 pb-8 bg-[#f5f5f7] dark:bg-[#000000] text-[#1d1d1f] dark:text-[#f5f5f7] relative overflow-hidden select-none transition-colors duration-500"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif' }}
    >
      {/* 1. DYNAMIC LIGHT/DARK AMBIENT GLOW */}
      
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[145%] max-w-[1600px] h-[550px] bg-[radial-gradient(ellipse_at_top,_rgba(0,0,0,0.01),_transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.06),_transparent_55%)]" />
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-purple-500/5 dark:from-blue-500/10 dark:via-indigo-500/5 dark:to-purple-500/10 rounded-full blur-[150px] opacity-80" />
      </div>

      {/* Main Impact Copy Area */}
      <div className="w-full max-w-5xl mx-auto text-center relative z-10 mt-auto mb-20 flex flex-col items-center">
        
        {/* 2. AUTHENTIC APPLE SQUIRCLE PROFILE IMAGE */}
        <div 
          className={`mb-8 relative transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1) ${
            animate ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative rounded-[2.2rem] overflow-hidden border border-slate-300/50 dark:border-[#2d2d30] p-1.5 bg-slate-100/80 dark:bg-[#111112] shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] group">
            <img 
              src="/dulana-profile-circle.jpg" 
              alt="Dulana Chathurma" 
              className="w-28 h-28 md:w-32 md:h-32 rounded-[1.8rem] object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Minimal Green Status Indicator */}
            <span className="absolute bottom-2 right-2 w-3.5 h-3.5 bg-emerald-500 border-4 border-slate-100 dark:border-[#111112] rounded-full shadow-sm animate-pulse" />
          </div>
        </div>

        {/* Apple Product Campaign Style Kicker */}
        <div className="mb-6 overflow-hidden inline-block">
          <p 
            className={`text-[#86868b] text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-[1200ms] cubic-bezier(0.25, 1, 0.5, 1) ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Software Engineering • University of Kelaniya
          </p>
        </div>


<h1 className="text-4xl sm:text-6xl md:text-7.5xl font-bold tracking-[-0.035em] leading-[1.06] pb-4 mb-6">
  <span 
    className={`block text-[#86868b] transition-all duration-[1400ms] delay-100 cubic-bezier(0.25, 1, 0.5, 1) ${
      animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
    }`}
  >
    Dulana Chathurma.
  </span>
  <span 
    className={`block bg-clip-text text-transparent bg-gradient-to-r from-[#1d1d1f] via-[#6e6e73] to-[#1d1d1f] dark:from-[#ffffff] dark:via-[#a1a1a6] dark:to-[#ffffff] bg-[length:200%_auto] animate-shimmer transition-all duration-[1400ms] delay-300 cubic-bezier(0.25, 1, 0.5, 1) ${
      animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
    }`}
  >
    Engineering Enterprise Intelligence
  </span>
</h1>

        {/* High-Value Pitch */}
        <div className="overflow-hidden max-w-3xl mx-auto mb-12">
          <p 
            className={`text-[#86868b] text-base sm:text-lg md:text-xl font-normal tracking-tight leading-relaxed transition-all duration-[1400ms] delay-500 cubic-bezier(0.25, 1, 0.5, 1) ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Building production-ready solutions with <span className="text-[#1d1d1f] dark:text-[#f5f5f7] font-medium">Spring Boot</span> robust architectures, seamless <span className="text-[#1d1d1f] dark:text-[#f5f5f7] font-medium">AI/ML integrations</span>, and high-performance full-stack ecosystems that scale.
          </p>
        </div>

        {/* Authentic Apple Interactive Link Group */}
        <div 
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-[1400ms] delay-700 cubic-bezier(0.25, 1, 0.5, 1) ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Main Action Blue Pill Button */}
          <a 
            href="#projects" 
            className="w-full sm:w-auto bg-[#0071e3] hover:bg-[#0077ed] text-white text-sm font-medium py-3 px-7 rounded-full tracking-tight transition-all duration-300 shadow-[0_4px_12px_rgba(0,113,227,0.15)] hover:shadow-[0_6px_20px_rgba(0,113,227,0.3)] active:scale-98"
          >
            Explore Productions
          </a>
          
          {/* Executive Action Link */}
          <a 
            href="/Dulana-Chathurma-CV.pdf" 
            download
            className="group flex items-center gap-1 text-[#0066cc] dark:text-[#2997ff] hover:underline text-sm font-medium tracking-tight"
          >
            Review Executive CV 
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

      </div>

      {/* 4. HORIZONTAL LINE & COMPETENCY GRID (PUSHED DOWN TO LOWER EDGE) */}
      <div 
        className={`w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-slate-200 dark:border-[#1d1d1f] pt-6 pb-2 text-[#6e6e73] transition-all duration-[1600ms] delay-900 mt-auto ${
          animate ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Core Pillar 1: Architecture */}
        <div className="flex items-start gap-3.5 text-left group">
          <div className="p-2.5 rounded-xl bg-slate-200/50 dark:bg-[#1d1d1f]/40 border border-slate-300/40 dark:border-[#2d2d30] text-[#1d1d1f] dark:text-[#f5f5f7] transition-colors duration-300 group-hover:bg-[#0071e3] group-hover:border-[#0071e3]">
            <Shield className="h-4 w-4 text-[#0066cc] dark:text-[#2997ff] group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1d1d1f] dark:text-[#f5f5f7] mb-1.5">Robust Core</h3>
            <p className="text-xs leading-relaxed text-[#86868b]">Spring Boot backend models, clean architecture, and highly secure RESTful APIs.</p>
          </div>
        </div>

        {/* Core Pillar 2: AI / Intelligent Systems */}
        <div className="flex items-start gap-3.5 text-left group">
          <div className="p-2.5 rounded-xl bg-slate-200/50 dark:bg-[#1d1d1f]/40 border border-slate-300/40 dark:border-[#2d2d30] text-[#1d1d1f] dark:text-[#f5f5f7] transition-colors duration-300 group-hover:bg-[#0071e3] group-hover:border-[#0071e3]">
            <Cpu className="h-4 w-4 text-[#0066cc] dark:text-[#2997ff] group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1d1d1f] dark:text-[#f5f5f7] mb-1.5">Intelligent Logic</h3>
            <p className="text-xs leading-relaxed text-[#86868b]">Seamless integration of LLMs and machine learning pipelines into standard workflows.</p>
          </div>
        </div>

        {/* Core Pillar 3: Interactive Experiences */}
        <div className="flex items-start gap-3.5 text-left group">
          <div className="p-2.5 rounded-xl bg-slate-200/50 dark:bg-[#1d1d1f]/40 border border-slate-300/40 dark:border-[#2d2d30] text-[#1d1d1f] dark:text-[#f5f5f7] transition-colors duration-300 group-hover:bg-[#0071e3] group-hover:border-[#0071e3]">
            <Terminal className="h-4 w-4 text-[#0066cc] dark:text-[#2997ff] group-hover:text-white" />
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#1d1d1f] dark:text-[#f5f5f7] mb-1.5">Advanced UX</h3>
            <p className="text-xs leading-relaxed text-[#86868b]">Next.js & React ecosystems optimized for fluid interactivity and Core Web Vitals.</p>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Cue */}
      <div className="absolute bottom-2 right-6 hidden md:block">
        <a href="#about" aria-label="Scroll down" className="text-[#6e6e73] hover:text-[#1d1d1f] dark:hover:text-[#f5f5f7] transition-colors block animate-bounce-subtle">
          <ChevronDown className="h-4 w-4" />
        </a>
      </div>

      {/* 5. MICRO-INTERACTION ANIMATION KEYFRAMES */}
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
