import { useEffect, useRef } from "react";
import { ExternalLink, Calendar, ArrowUpRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "CIA Triad: Safeguarding Our Information",
    description: "An exploration of the fundamental principles of information security - Confidentiality, Integrity, and Availability.",
    image: "/article-cia-triad.jpg",
    date: "2025",
    link: "https://medium.com/@dulanachathurma99/cia-triad-safeguarding-our-inforation-576563e3dbd3",
    readTime: "5 min read",
    tagColor: "bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border-red-200/50 dark:border-red-800/40",
    tag: "Cybersecurity"
  },
  {
    id: 2,
    title: "The Importance of Diagrams",
    description: "Discover how diagrams simplify complex ideas, improve understanding, and play a vital role in communication, learning, and software development.",
    image: "/article-diagrams.jpg",
    date: "2025",
    link: "https://medium.com/@dulanachathurma99/the-importance-of-diagrams-868b1fb153ee",
    readTime: "4 min read",
    tagColor: "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-200/50 dark:border-blue-800/40",
    tag: "Software Development"
  },
  {
    id: 3,
    title: "Understanding the Importance of a Banking System Use Case Diagram",
    description: "A look into why use case diagrams are essential for modeling banking systems, improving design clarity and communication.",
    image: "/article-banking-use-case.jpg",
    date: "2025",
    link: "https://medium.com/@dulanachathurma99/understanding-the-importance-of-a-banking-system-use-case-diagram-ffe6a938a53f",
    readTime: "6 min read",
    tagColor: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-800/40",
    tag: "System Design"
  },
  {
    id: 4,
    title: "Elephant Early Warning System in Railway Transport",
    description: "How technology is being used to prevent elephant-train collisions in Sri Lanka.",
    image: "/article-elephant-warning-system.jpg",
    date: "2025",
    link: "https://medium.com/@dulanachathurma99/elephant-early-warning-system-in-railway-transport-5b7149200a8c",
    readTime: "4 min read",
    tagColor: "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-200/50 dark:border-amber-800/40",
    tag: "AI & Conservation"
  },
  {
    id: 5,
    title: "A Developer’s Leap into Machine Learning",
    description: "Why I’m shifting my focus to AI and how you can start your own journey into the world of algorithms.",
    image: "/article-leap-into-machine-learning.jpg",
    date: "2026",
    link: "https://medium.com/@dulanachathurma99/a-developers-leap-into-machine-learning-90e518d3c9f9",
    readTime: "4 min read",
    tagColor: "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border-indigo-200/50 dark:border-indigo-800/40",
    tag: "Machine Learning"
  },
  {
    id: 6,
    title: "Building an AI-Based Career & University Recommendation System",
    description: "How I built an AI system that analyzes academic profiles, interests, and market trends to predict optimal career paths and recommend matching universities for students.",
    image: "/project-ai-career.jpg",
    date: "2026",
    link: "https://medium.com/@dulanachathurma99/ai-career-university-recommendation-system-2cfafe7d9842",
    readTime: "5 min read",
    tagColor: "bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border-purple-200/50 dark:border-purple-800/40",
    tag: "Machine Learning"
  },
  {
    id: 7,
    title: "Building a Bare-Metal x86 Operating System from Scratch",
    description: "A comprehensive journey into low-level systems engineering, exploring how to build a custom OS kernel, memory manager, and file system.",
    image: "/project-os.jpg",
    date: "Sep 2026",
    link: "https://medium.com/@dulanachathurma99/i-built-an-operating-system-from-scratch-and-it-broke-every-assumption-i-had-3f6ea673d228",
    readTime: "8 min read",
    tagColor: "bg-slate-50 dark:bg-slate-950/40 text-slate-600 dark:text-slate-400 border-slate-200/50 dark:border-slate-800/40",
    tag: "Low-Level Programming"
  },
  {
    id: 8,
    title: "Building a Cloud-Native Integration Gateway with AI-Driven Observability & System Health Analytics",
    description: "An advanced cloud-native architecture combining integration services with intelligent observability, leveraging JavaScript, Python, and Ballerina for real-time system health analytics.",
    image: "/project-gateway.jpg",
    date: "Sep 2026",
    link: "https://medium.com/@dulanachathurma99/building-a-cloud-native-integration-gateway-with-ai-driven-observability-system-health-analytics-53269835dadf?postPublishedType=repub",
    readTime: "7 min read",
    tagColor: "bg-slate-50 dark:bg-slate-950/40 text-slate-600 dark:text-slate-400 border-slate-200/50 dark:border-slate-800/40",
    tag: "Cloud-Native & AI"
  },
  {
    id: 9,
    title: "Building HealthPulse AI: A Full-Stack Trilingual Health Analytics & Doctor Recommendation Platform",
    description: "An in-depth exploration of building a modern full-stack healthcare mobile web app with Node.js, React, Chart.js, dynamic trilingual (EN/SI/TA) support, and intelligent symptom-based doctor recommendation engines.",
    image: "/project-healthpulse.jpg",
    date: "Oct 2026",
    link: "https://medium.com/@dulanachathurma99/i-built-a-multilingual-health-tracker-with-a-built-in-doctor-finder-afacdc7783d4",
    readTime: "6 min read",
    tagColor: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-800/40",
    tag: "Full-Stack & HealthTech"
  }
];

export const ArticlesSection = () => {
  const canvasRef = useRef(null);

  // --- INTERACTIVE GRAPH CANVAS WITH MOBILE PERFORMANCE OPTIMIZATION ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    let mouse = { x: null, y: null, radius: 150 };

    // Mobile Check to prevent scroll lag
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
    parent.addEventListener("mousemove", handleMouseMove, { passive: true });
    parent.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    const particleCount = Math.floor((width * height) / 9500);

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 1.5 + 1.2,
    }));

    let animationFrameId;

    // Draw Subtle Grid Pattern
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

      // 1. Grid Background
      drawGrid(isDark);

      // Mobile devices නම් heavy particle logic run නොකර නතර කරයි
      if (isMobile) return;

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
            p.x -= (dx / dist) * force * 3;
            p.y -= (dy / dist) * force * 3;
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

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);

            const alpha = 1 - dist / 120;
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
    <section id="articles" className="py-24 px-4 relative bg-[#f5f5f7] dark:bg-[#0a101d] overflow-hidden transition-colors duration-500">
      {/* 0. HIGH PERFORMANCE CANVAS BACKGROUND */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 transform-gpu"
        style={{ willChange: "transform" }}
      />

      {/* Dynamic Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-cyan-500/5 dark:from-blue-600/10 dark:via-cyan-500/10 dark:to-blue-600/10 rounded-full blur-[150px] opacity-70" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-3.5 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase mb-4 border border-blue-200/50 dark:border-blue-800/40">
            Knowledge Sharing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-[#1d1d1f] dark:text-[#f5f5f7]">
            My Articles
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-6"></div>
          <p className="text-[#86868b] dark:text-[#94a3b8] text-base md:text-lg max-w-xl mx-auto font-normal leading-relaxed">
            Sharing insights and technical deep-dives on software engineering, AI, and system design.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article) => (
            <article key={article.id} className="group relative rounded-3xl transition-all duration-500 flex flex-col h-full">
              
              {/* Dark Mode Glowing Background Aura */}
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-blue-600/0 via-cyan-500/0 to-blue-600/0 dark:from-blue-600/20 dark:via-cyan-400/15 dark:to-blue-600/20 blur-lg opacity-100 dark:group-hover:opacity-100 dark:group-hover:blur-xl transition-all duration-500 pointer-events-none" />

              {/* Main Card Container */}
              <div className="relative bg-white/90 dark:bg-[#111827]/90 backdrop-blur-md border border-slate-300/80 dark:border-blue-500/30 dark:group-hover:border-cyan-400/60 rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03),0_20px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_0_20px_rgba(30,58,138,0.25)] dark:group-hover:shadow-[0_0_35px_rgba(56,189,248,0.3)] lg:group-hover:-translate-y-1.5 transition-all duration-500 ease-out flex flex-col h-full">
                
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out lg:group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-950/20 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Tag Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className={`px-3 py-1 text-[11px] font-medium tracking-tight rounded-full border backdrop-blur-md shadow-xs ${article.tagColor}`}>
                      {article.tag}
                    </span>
                  </div>

                  {/* Read Time Badge */}
                  <div className="absolute bottom-3.5 right-3.5">
                    <span className="px-2.5 py-1 rounded-full bg-slate-900/60 dark:bg-black/60 backdrop-blur-md text-white/90 text-[11px] font-medium flex items-center gap-1.5 border border-white/10">
                      <Calendar size={11} className="opacity-80" /> {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Date */}
                  <div className="flex items-center gap-1.5 text-xs font-medium text-[#86868b] dark:text-[#94a3b8] mb-2.5">
                    <span>{article.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base md:text-lg font-semibold tracking-tight mb-2.5 text-slate-900 dark:text-slate-100 lg:group-hover:text-blue-600 dark:lg:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                    {article.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#86868b] dark:text-[#94a3b8] text-xs md:text-sm leading-relaxed mb-6 line-clamp-3 flex-grow font-normal">
                    {article.description}
                  </p>

                  {/* Read on Medium Button */}
                  <div className="pt-4 border-t border-slate-100 dark:border-white/5 mt-auto">
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-1.5 bg-[#02c36a] lg:hover:bg-[#00a95c] dark:bg-[#02c36a] text-white text-xs font-medium py-2.5 px-4 rounded-xl transition-all duration-300 shadow-sm active:scale-[0.98]"
                    >
                      <span>Read on Medium</span>
                      <ArrowUpRight size={14} className="opacity-80 lg:group-hover:translate-x-0.5 lg:group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </a>
                  </div>
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <a
            href="https://medium.com/@dulanachathurma99"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 lg:hover:bg-blue-700 dark:bg-blue-600 dark:lg:hover:bg-blue-500 text-white font-medium text-xs md:text-sm py-3.5 px-8 rounded-full transition-all duration-300 lg:hover:scale-105 active:scale-95 shadow-md lg:hover:shadow-lg"
          >
            <span>View All Articles on Medium</span>
            <ExternalLink size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};
