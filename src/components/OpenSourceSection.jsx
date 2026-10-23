import { useEffect, useRef, useState } from "react";
import { GitPullRequest, GitFork, Github, ExternalLink, Maximize2, X, CheckCircle2 } from "lucide-react";
import wso2Img from "../assets/images/wso2-contrib.png";
import leetcodeImg from "../assets/images/leetcode-contrib.png";

const contributions = [
  {
    id: "wso2",
    title: "WSO2 API Manager (wso2/apim-apps)",
    description:
      "Contributed to enterprise API Manager web portals codebase. Refactored scope pagination in Publisher Portal, enhanced shared utility safety, and authored comprehensive Jest unit test suites.",
    image: wso2Img,
    fallbackImage: "/wso2-contrib.png",
    tags: [
      { name: "React", color: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300" },
      { name: "Jest", color: "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300" },
      { name: "PR #1437", color: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300" },
      { name: "CodeRabbit Approved", color: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300" },
      { name: "SonarCloud Passed", color: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300" },
    ],
    prUrl: "https://github.com/wso2/apim-apps/pull/1437",
    mainRepoUrl: "https://github.com/wso2/apim-apps",
    forkUrl: "https://github.com/dulanachathurma/apim-apps",
    highlight: "Enterprise Contribution",
    highlightColor: "bg-emerald-600/90",
  },
  {
    id: "leetcode",
    title: "LeetCode Solutions (doocs/leetcode)",
    description:
      "Contributed an optimized JavaScript solution for Problem 0042 (Trapping Rain Water) using Dynamic Programming. Ranked as the #22 contributor in the official repository (36k+ ⭐).",
    image: leetcodeImg,
    fallbackImage: "/leetcode-contrib.png",
    tags: [
      { name: "JavaScript", color: "bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300" },
      { name: "Dynamic Programming", color: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300" },
      { name: "Merged PR #6231", color: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300" },
      { name: "Rank #22 Contributor", color: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300" },
    ],
    prUrl: "https://github.com/doocs/leetcode/pull/6231",
    mainRepoUrl: "https://github.com/doocs/leetcode",
    forkUrl: "https://github.com/dulanachathurma/leetcode",
    highlight: "Merged Pull Request",
    highlightColor: "bg-indigo-600/90",
  },
];

export const OpenSourceSection = () => {
  const canvasRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);

  // Close preview modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    if (selectedImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  // --- INTERACTIVE GRAPH CANVAS (Matching ProjectsSection exactly) ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);
    let mouse = { x: null, y: null, radius: 150 };

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

    const drawGrid = (isDark) => {
      const gridSize = 45;
      ctx.beginPath();
      ctx.lineWidth = 0.6;
      ctx.strokeStyle = isDark ? "rgba(255, 255, 255, 0.075)" : "rgba(0, 0, 0, 0.065)";

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
            p.x -= (dx / dist) * force * 3;
            p.y -= (dy / dist) * force * 3;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? "rgba(180, 205, 235, 0.65)" : "rgba(51, 65, 85, 0.5)";
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
    <section
      id="open-source"
      className="py-24 px-4 relative bg-[#f5f5f7] dark:bg-[#0a101d] overflow-hidden transition-colors duration-500"
    >
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
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            Community & Codebases
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1d1d1f] dark:text-[#f5f5f7]">
            Open Source Contributions
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-6" />

          <p className="text-[#86868b] dark:text-[#94a3b8] max-w-2xl mx-auto text-sm sm:text-base">
            Actively contributing to enterprise software suites, global developer tools, and renowned open-source repositories.
          </p>
        </div>

        {/* Contributions Grid - 2 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {contributions.map((contrib) => (
            <div
              key={contrib.id}
              className="group relative rounded-2xl transition-all duration-500 flex flex-col h-full"
            >
              {/* Dark Mode Glowing Background Aura */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-600/0 via-cyan-500/0 to-blue-600/0 dark:from-blue-600/20 dark:via-cyan-400/15 dark:to-blue-600/20 blur-lg opacity-100 dark:group-hover:opacity-100 dark:group-hover:blur-xl transition-all duration-500 pointer-events-none" />

              {/* Main Card Container */}
              <div className="relative bg-white/90 dark:bg-[#111827]/90 backdrop-blur-md border border-slate-300/80 dark:border-blue-500/30 dark:group-hover:border-cyan-400/60 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03),0_20px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_0_20px_rgba(30,58,138,0.25)] dark:group-hover:shadow-[0_0_35px_rgba(56,189,248,0.3)] group-hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col h-full">
                
                {/* Image Box with Full Preview Support */}
                <div
                  onClick={() =>
                    setSelectedImage({
                      title: contrib.title,
                      image: contrib.image,
                      fallbackImage: contrib.fallbackImage,
                      description: contrib.description,
                      prUrl: contrib.prUrl,
                    })
                  }
                  className="relative h-56 sm:h-64 overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0 cursor-pointer group/img"
                  title="Click to view full preview"
                >
                  <img
                    src={contrib.image}
                    alt={contrib.title}
                    onError={(e) => {
                      if (contrib.fallbackImage && e.target.src !== contrib.fallbackImage) {
                        e.target.src = contrib.fallbackImage;
                      }
                    }}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top-Right Badge: Click Preview Hint */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-[11px] font-medium flex items-center gap-1.5 transition-all duration-300 shadow-md">
                    <Maximize2 size={12} /> Preview
                  </div>

                  {/* Top-Left Tag: Category Highlight */}
                  <div
                    className={`absolute top-3 left-3 px-2.5 py-1 rounded-full ${contrib.highlightColor} text-white text-[10px] font-bold tracking-wider uppercase backdrop-blur-md flex items-center gap-1.5 shadow-md`}
                  >
                    <CheckCircle2 size={12} /> {contrib.highlight}
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-5 flex flex-col flex-grow">
                  {/* Tech Stack & Status Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {contrib.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-2.5 py-0.5 text-[11px] font-semibold rounded-full ${tag.color} shadow-sm border border-black/5 dark:border-white/5`}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">
                    {contrib.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-5 leading-relaxed flex-grow">
                    {contrib.description}
                  </p>

                  {/* Actions Footer */}
                  <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-100 dark:border-slate-800/60 mt-auto">
                    {/* Pull Request Link (Primary CTA) */}
                    <a
                      href={contrib.prUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <GitPullRequest size={15} /> Pull Request
                    </a>

                    {/* Main Repo & Forked Repo (Secondary Actions) */}
                    <div className="flex gap-2">
                      <a
                        href={contrib.mainRepoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <Github size={14} /> Main Repo
                      </a>

                      <a
                        href={contrib.forkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-300/70 dark:border-slate-700 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                      >
                        <GitFork size={14} /> Forked Repo
                      </a>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section Divider */}
        <div className="relative w-full max-w-5xl mx-auto mt-16 flex flex-col items-center justify-center">
          <div className="relative w-full flex items-center justify-center pt-16 pb-4">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 dark:via-cyan-400/60 to-transparent" />
            <div className="absolute w-3/4 h-[4px] bg-gradient-to-r from-transparent via-blue-600/50 dark:via-cyan-400/80 to-transparent blur-[4px]" />
            <div className="absolute w-40 h-[2px] bg-gradient-to-r from-transparent via-sky-400 dark:via-white to-transparent blur-[0.5px] shadow-[0_0_15px_rgba(56,189,248,0.9)]" />
          </div>
        </div>
      </div>

      {/* Full Image Preview Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white dark:bg-[#111827] rounded-2xl overflow-hidden shadow-2xl border border-slate-300 dark:border-blue-500/40"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-800">
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white line-clamp-1">
                {selectedImage.title}
              </h4>

              <div className="flex items-center gap-2">
                <a
                  href={selectedImage.prUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                >
                  <ExternalLink size={12} /> View PR
                </a>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-1.5 rounded-lg text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Close Preview"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Image Box */}
            <div className="p-3 bg-slate-950 flex items-center justify-center max-h-[75vh] overflow-auto">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                onError={(e) => {
                  if (selectedImage.fallbackImage && e.target.src !== selectedImage.fallbackImage) {
                    e.target.src = selectedImage.fallbackImage;
                  }
                }}
                className="max-h-[70vh] w-auto max-w-full rounded-lg object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0f172a]">
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedImage.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
