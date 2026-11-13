import { useState, useEffect, useRef, useCallback } from "react";
import {
  Play,
  Github,
  ChevronLeft,
  ChevronRight,
  X,
  Smartphone,
  ExternalLink,
  Sparkles,
} from "lucide-react";

// ─── Flagship Apps Data ───────────────────────────────────────────────────────
const FLAGSHIP_APPS = [
  {
    id: "suwago",
    badge: "Flagship Mobile App • AI & Medical Navigation",
    title: "Suwago",
    tagline: "නීරෝගී ජීවිතයකට — ඔබේ සෞඛ්‍ය සහකරු",
    description:
      "Modern AI-Powered Healthcare & Medical Navigation Mobile App built with Android Jetpack Compose, Kotlin and Node.js backend. Features trilingual support, smart vitals analytics, provincial medical facility locator and 1990 emergency dispatch.",
    tech: ["Kotlin", "Jetpack Compose", "Node.js", "MongoDB", "AI Assistant"],
    githubUrl: "https://github.com/dulanachathurma/SuwaGo-Mobile-App.git",
    bannerImage: "/home_banner_2.png",
    fallbackImage: "/project-health.jpg",
    videoUrl: "/videos/suwago-demo.mp4",
    accentFrom: "#10b981",
    accentTo: "#14b8a6",
    accentGlow: "rgba(16,185,129,0.35)",
    techBadge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
  {
    id: "nexthalt",
    badge: "Real-Time Distributed Transit System",
    title: "NextHalt",
    tagline: "වේගවත් ගමනකට — Smart Passenger & Bus Tracking Platform",
    description:
      "Real-time bus tracking app connecting passengers and bus drivers with live location, accurate ETA, smart halt alerts and an integrated intercity parcel delivery service.",
    tech: ["Kotlin", "Jetpack Compose", "Ktor", "PostgreSQL", "Live GPS"],
    githubUrl: "https://github.com/dulanachathurma/smart-public-bus-transport-platform.git",
    bannerImage: "/nexthalt-banner.png",
    fallbackImage: "/banner6.png",
    videoUrl: "/videos/nexthalt-demo.mp4",
    accentFrom: "#3b82f6",
    accentTo: "#06b6d4",
    accentGlow: "rgba(59,130,246,0.35)",
    techBadge: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
];

const AUTO_PLAY_MS = 3500;

// ─── Helpers ──────────────────────────────────────────────────────────────────
const isYouTube = (url) =>
  url && (url.includes("youtube.com") || url.includes("youtu.be"));

const getYouTubeEmbedUrl = (url) => {
  try {
    const u = new URL(url);
    const id =
      u.searchParams.get("v") || u.pathname.split("/").pop().split("?")[0];
    return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
  } catch {
    return url;
  }
};

// ─── Video Modal ──────────────────────────────────────────────────────────────
const VideoModal = ({ app, onClose }) => {
  const backdropRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const isYT = isYouTube(app.videoUrl);

  return (
    <div
      ref={backdropRef}
      onClick={(e) => {
        if (e.target === backdropRef.current) onClose();
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      style={{
        background: "rgba(2, 6, 23, 0.88)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        animation: "modalFadeIn 0.25s cubic-bezier(0.16,1,0.3,1) both",
      }}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden border border-white/10"
        style={{
          background: "linear-gradient(135deg, #0d1117 0%, #161b27 100%)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.08)",
          animation: "modalSlideUp 0.3s cubic-bezier(0.16,1,0.3,1) both",
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-5 py-4 border-b border-white/10">
          <div className="flex-1 min-w-0 mr-3">
            <div className="flex items-center gap-2 mb-1">
              <Smartphone size={14} className="text-blue-400 shrink-0" />
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
                App Demo Walkthrough
              </span>
            </div>
            <h3 className="text-white font-bold text-lg leading-tight truncate">
              {app.title}
            </h3>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {app.tech.slice(0, 4).map((t) => (
                <span
                  key={t}
                  className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${app.techBadge}`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={app.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white/80 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 transition-all duration-200"
            >
              <Github size={13} />
              <span className="hidden sm:inline">View Source</span>
            </a>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-lg text-slate-400 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10 hover:border-white/20 transition-all duration-200"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Video Player 16:9 */}
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <div className="absolute inset-0 bg-black">
            {isYT ? (
              <iframe
                src={getYouTubeEmbedUrl(app.videoUrl)}
                title={`${app.title} Demo`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video
                src={app.videoUrl}
                controls
                autoPlay
                className="w-full h-full object-contain bg-black"
                playsInline
              >
                <p className="text-slate-400 text-sm text-center p-8">
                  Your browser does not support the video tag.{" "}
                  <a href={app.videoUrl} className="text-blue-400 underline">
                    Download the video
                  </a>
                </p>
              </video>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-white/10 flex items-center justify-between">
          <p className="text-xs text-slate-400 italic truncate">{app.tagline}</p>
          <a
            href={app.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-slate-300 hover:text-white transition-colors duration-200 ml-3 shrink-0"
          >
            <ExternalLink size={12} />
            GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

// ─── Main Carousel Component ──────────────────────────────────────────────────
export const AppShowcaseCarousel = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [modalApp, setModalApp] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const intervalRef = useRef(null);
  const progressRef = useRef(null);
  const progressStartRef = useRef(null);
  const totalApps = FLAGSHIP_APPS.length;

  const goTo = useCallback(
    (idx) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setActiveIdx((idx + totalApps) % totalApps);
      setProgress(0);
      progressStartRef.current = performance.now();
      setTimeout(() => setIsTransitioning(false), 600);
    },
    [isTransitioning, totalApps]
  );

  const goNext = useCallback(() => goTo(activeIdx + 1), [activeIdx, goTo]);
  const goPrev = useCallback(() => goTo(activeIdx - 1), [activeIdx, goTo]);

  // Animated progress line
  useEffect(() => {
    const animate = (now) => {
      if (!progressStartRef.current) progressStartRef.current = now;
      const elapsed = now - progressStartRef.current;
      const pct = Math.min((elapsed / AUTO_PLAY_MS) * 100, 100);
      setProgress(pct);
      if (pct < 100) {
        progressRef.current = requestAnimationFrame(animate);
      }
    };

    if (!isPaused && !modalApp) {
      progressStartRef.current = performance.now();
      progressRef.current = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(progressRef.current);
    }

    return () => cancelAnimationFrame(progressRef.current);
  }, [isPaused, modalApp, activeIdx]);

  // Auto-advance
  useEffect(() => {
    if (isPaused || modalApp) return;
    intervalRef.current = setInterval(() => {
      goNext();
    }, AUTO_PLAY_MS);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, modalApp, goNext]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (modalApp) return;
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [modalApp, goNext, goPrev]);

  const activeApp = FLAGSHIP_APPS[activeIdx];

  const handleImgError = (e, fallback) => {
    if (fallback && e.target.src !== window.location.origin + fallback) {
      e.target.src = fallback;
    }
  };

  return (
    <>
      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        /* 3D Depth Zoom Transition */
        .showcase-card-active {
          transform: perspective(1200px) translateZ(0px) scale(1);
          opacity: 1;
          filter: blur(0px);
          z-index: 20;
          pointer-events: auto;
        }
        .showcase-card-inactive-left {
          transform: perspective(1200px) translate3d(-35%, 0, -140px) scale(0.85);
          opacity: 0.35;
          filter: blur(1.5px);
          z-index: 10;
          pointer-events: auto;
          cursor: pointer;
        }
        .showcase-card-inactive-right {
          transform: perspective(1200px) translate3d(35%, 0, -140px) scale(0.85);
          opacity: 0.35;
          filter: blur(1.5px);
          z-index: 10;
          pointer-events: auto;
          cursor: pointer;
        }
        .showcase-card-transition {
          transition: transform 600ms cubic-bezier(0.34, 1.25, 0.64, 1),
                      opacity 600ms cubic-bezier(0.34, 1.25, 0.64, 1),
                      filter 600ms cubic-bezier(0.34, 1.25, 0.64, 1),
                      box-shadow 600ms ease;
        }
      `}</style>

      <section
        className="relative w-full mb-14"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          if (!modalApp) setIsPaused(false);
        }}
        aria-label="Flagship Mobile Apps Showcase"
      >
        {/* Section Header Accent */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-blue-500/40" />
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 dark:border-blue-400/25 shadow-sm">
            <Smartphone size={13} className="text-blue-500 dark:text-blue-400" />
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              Flagship Mobile Apps Spotlight
            </span>
          </div>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-blue-500/40" />
        </div>

        {/* 3D Stage Container */}
        <div className="relative flex items-center justify-center overflow-hidden py-2 select-none min-h-[420px] sm:min-h-[460px]">
          {/* Left Arrow */}
          <button
            onClick={goPrev}
            aria-label="Previous App"
            className="absolute left-2 sm:left-4 z-30 p-2 sm:p-2.5 rounded-full text-white/80 hover:text-white transition-all duration-200 hover:scale-110 active:scale-95"
            style={{
              background: "rgba(10, 16, 36, 0.85)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.16)",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            <ChevronLeft size={18} strokeWidth={2.5} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={goNext}
            aria-label="Next App"
            className="absolute right-2 sm:right-4 z-30 p-2 sm:p-2.5 rounded-full text-white/80 hover:text-white transition-all duration-200 hover:scale-110 active:scale-95"
            style={{
              background: "rgba(10, 16, 36, 0.85)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255, 255, 255, 0.16)",
              boxShadow: "0 8px 30px rgba(0, 0, 0, 0.5)",
            }}
          >
            <ChevronRight size={18} strokeWidth={2.5} />
          </button>

          {/* Cards Stack — Compact Desktop Max Width */}
          <div className="relative w-full max-w-[690px] flex items-center justify-center px-3 sm:px-6">
            {FLAGSHIP_APPS.map((app, index) => {
              const isActive = index === activeIdx;
              const isPrev =
                index === (activeIdx - 1 + totalApps) % totalApps && !isActive;

              let cardClass = "showcase-card-active";
              if (!isActive) {
                cardClass = isPrev
                  ? "showcase-card-inactive-left"
                  : "showcase-card-inactive-right";
              }

              return (
                <div
                  key={app.id}
                  onClick={isActive ? undefined : () => goTo(index)}
                  className={`showcase-card-transition ${cardClass} ${
                    isActive ? "relative w-full" : "absolute w-[92%] sm:w-[85%]"
                  }`}
                  style={{
                    transformOrigin: "center center",
                  }}
                >
                  <div
                    className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800/80 dark:border-white/10"
                    style={{
                      boxShadow: isActive
                        ? `0 25px 60px -12px rgba(0, 0, 0, 0.7), 0 0 45px ${app.accentGlow}`
                        : "0 10px 30px rgba(0, 0, 0, 0.4)",
                    }}
                  >
                    {/* ── Top Section: Full Crisp Banner Image (No text overlaid over the artwork) ── */}
                    <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.6] overflow-hidden bg-slate-950">
                      <img
                        src={app.bannerImage}
                        alt={`${app.title} banner artwork`}
                        className="w-full h-full object-cover transition-transform duration-700"
                        onError={(e) => handleImgError(e, app.fallbackImage)}
                      />

                      {/* Top-Left Status & Architecture Badge */}
                      <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10">
                        <div
                          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wider shadow-md"
                          style={{
                            background: "rgba(10, 16, 36, 0.82)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(255, 255, 255, 0.16)",
                          }}
                        >
                          <span
                            className="w-2 h-2 rounded-full animate-pulse shrink-0"
                            style={{
                              background: `linear-gradient(135deg, ${app.accentFrom}, ${app.accentTo})`,
                            }}
                          />
                          {app.badge}
                        </div>
                      </div>

                      {/* Subtle Vignette at bottom edge of image to blend cleanly */}
                      <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-slate-950/90 to-transparent pointer-events-none" />
                    </div>

                    {/* ── Bottom Section: Crystal Clear Info & Action Panel ── */}
                    <div className="px-5 py-4 sm:px-6 sm:py-5 bg-slate-950/95 dark:bg-[#0b1120]/95 backdrop-blur-md border-t border-white/[0.08]">
                      {/* Sinhala Tagline */}
                      <div className="flex items-center gap-2 mb-2">
                        <Sparkles
                          size={14}
                          className="text-amber-400 shrink-0 animate-pulse"
                        />
                        <p className="text-amber-300/90 dark:text-amber-200 text-xs sm:text-sm font-semibold tracking-wide">
                          {app.tagline}
                        </p>
                      </div>

                      {/* Engineering Description (High Contrast & Legible) */}
                      <p className="text-slate-200 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-3.5 line-clamp-2 sm:line-clamp-3">
                        {app.description}
                      </p>

                      {/* Tech Stack Pills & Action Buttons Bar */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                        {/* Tech Stack */}
                        <div className="flex flex-wrap items-center gap-1.5">
                          {app.tech.map((techItem) => (
                            <span
                              key={techItem}
                              className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold border ${app.techBadge}`}
                            >
                              {techItem}
                            </span>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2.5 shrink-0">
                          {/* Watch Demo CTA */}
                          <button
                            onClick={() => {
                              setIsPaused(true);
                              setModalApp(app);
                            }}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
                            style={{
                              background: `linear-gradient(135deg, ${app.accentFrom}, ${app.accentTo})`,
                              boxShadow: `0 4px 18px ${app.accentGlow}`,
                            }}
                          >
                            <Play size={13} className="fill-white" strokeWidth={0} />
                            <span>Watch Demo</span>
                          </button>

                          {/* GitHub Repo */}
                          <a
                            href={app.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold text-slate-200 hover:text-white bg-slate-800/90 hover:bg-slate-700 border border-white/15 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
                          >
                            <Github size={14} />
                            <span>GitHub Repo</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Progress Bar at bottom of active card */}
                    {isActive && (
                      <div className="w-full h-[3px] bg-white/[0.08] overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${progress}%`,
                            background: `linear-gradient(90deg, ${app.accentFrom}, ${app.accentTo})`,
                            transition:
                              isPaused || modalApp ? "none" : "width 50ms linear",
                            boxShadow: `0 0 10px ${app.accentGlow}`,
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination Dots */}
        <div
          className="flex items-center justify-center gap-2 mt-4"
          aria-label="Carousel pagination"
        >
          {FLAGSHIP_APPS.map((app, i) => (
            <button
              key={app.id}
              onClick={() => goTo(i)}
              aria-label={`Go to ${app.title}`}
              aria-current={i === activeIdx ? "true" : undefined}
              className="rounded-full transition-all duration-500"
              style={{
                height: "7px",
                width: i === activeIdx ? "32px" : "7px",
                background:
                  i === activeIdx
                    ? `linear-gradient(90deg, ${activeApp.accentFrom}, ${activeApp.accentTo})`
                    : "rgba(148, 163, 184, 0.35)",
                border:
                  i === activeIdx
                    ? "none"
                    : "1px solid rgba(148, 163, 184, 0.2)",
                boxShadow:
                  i === activeIdx ? `0 0 10px ${activeApp.accentGlow}` : "none",
              }}
            />
          ))}
        </div>

        {/* Auto-play pause notice */}
        {isPaused && !modalApp && (
          <div className="flex items-center justify-center mt-2.5 gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "rgba(148, 163, 184, 0.5)" }}
            />
            <span className="text-[10px] text-slate-500 font-medium">
              Auto-play paused
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "rgba(148, 163, 184, 0.5)" }}
            />
          </div>
        )}
      </section>

      {/* Video Walkthrough Modal */}
      {modalApp && (
        <VideoModal
          app={modalApp}
          onClose={() => {
            setModalApp(null);
            setIsPaused(false);
            setProgress(0);
            progressStartRef.current = performance.now();
          }}
        />
      )}
    </>
  );
};

export default AppShowcaseCarousel;
