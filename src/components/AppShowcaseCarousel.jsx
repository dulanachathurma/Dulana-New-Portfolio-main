import { useState, useEffect, useRef, useCallback } from "react";
import {
  Play,
  Github,
  ChevronLeft,
  ChevronRight,
  X,
  Smartphone,
  ExternalLink,
} from "lucide-react";

// ─── Flagship App Data ────────────────────────────────────────────────────────
const FLAGSHIP_APPS = [
  {
    id: "suwago",
    badge: "Flagship Mobile App • AI & Medical Navigation",
    title: "Suwago",
    tagline: "නීරෝගී ජීවිතයකට — ඔබේ සෞඛ්‍ය සහකරු",
    description:
      "Modern AI-Powered Healthcare & Medical Navigation Mobile App built with Android Jetpack Compose, Kotlin and Node.js backend. Features trilingual support, smart vitals analytics, provincial medical facility locator, and 1990 emergency dispatch.",
    tech: ["Kotlin", "Jetpack Compose", "Node.js", "MongoDB", "AI Assistant"],
    githubUrl: "https://github.com/dulanachathurma/SuwaGo-Mobile",
    bannerImage: "/images/home_banner_2.png",
    videoUrl: "/videos/suwago-demo.mp4",
    accentColor: "from-emerald-500 to-teal-500",
    accentGlow: "rgba(16,185,129,0.35)",
    techColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  },
  {
    id: "nexthalt",
    badge: "Real-Time Distributed Transit System",
    title: "NextHalt",
    tagline: "වේගවත් ගමනකට — Smart Passenger & Bus Tracking Platform",
    description:
      "Real-time bus tracking app connecting passengers and bus drivers with live location, accurate ETA, smart halt alerts, and an integrated intercity parcel delivery service.",
    tech: ["Kotlin", "Jetpack Compose", "Ktor", "PostgreSQL", "Live GPS"],
    githubUrl: "https://github.com/dulanachathurma/NextHalt",
    bannerImage: "/images/nexthalt-banner.png",
    videoUrl: "/videos/nexthalt-demo.mp4",
    accentColor: "from-blue-500 to-cyan-500",
    accentGlow: "rgba(59,130,246,0.35)",
    techColor: "bg-blue-500/15 text-blue-300 border-blue-500/30",
  },
];

const AUTO_PLAY_MS = 4500;

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

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const handleBackdropClick = (e) => {
    if (e.target === backdropRef.current) onClose();
  };

  const isYT = isYouTube(app.videoUrl);

  return (
    <div
      ref={backdropRef}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      style={{
        background: "rgba(2, 6, 23, 0.88)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        animation: "modalFadeIn 0.25s cubic-bezier(0.16,1,0.3,1) both",
      }}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden border border-white/10"
        style={{
          background: "linear-gradient(135deg, #0d1117 0%, #161b27 100%)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.06)",
          animation: "modalSlideUp 0.3s cubic-bezier(0.16,1,0.3,1) both",
        }}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between px-5 py-4 border-b border-white/8">
          <div className="flex-1 min-w-0 mr-3">
            <div className="flex items-center gap-2 mb-1">
              <Smartphone size={14} className="text-slate-400 shrink-0" />
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
                  className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${app.techColor}`}
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
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white/75 hover:text-white bg-white/8 hover:bg-white/14 border border-white/12 hover:border-white/22 transition-all duration-200"
            >
              <Github size={12} />
              <span className="hidden sm:inline">View Source</span>
            </a>
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-lg text-slate-400 hover:text-white bg-white/8 hover:bg-white/14 border border-white/12 hover:border-white/22 transition-all duration-200"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* 16:9 Video Player */}
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

        {/* Modal Footer */}
        <div className="px-5 py-3 border-t border-white/8 flex items-center justify-between">
          <p className="text-xs text-slate-500 italic truncate">{app.tagline}</p>
          <a
            href={app.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors duration-200 ml-3 shrink-0"
          >
            <ExternalLink size={11} />
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

  // ── Navigation helpers ─────────────────────────────────────────────────────
  const goTo = useCallback(
    (idx, skipTransition = false) => {
      if (isTransitioning && !skipTransition) return;
      setIsTransitioning(true);
      setActiveIdx((idx + totalApps) % totalApps);
      setProgress(0);
      progressStartRef.current = performance.now();
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning, totalApps]
  );

  const goNext = useCallback(() => goTo(activeIdx + 1), [activeIdx, goTo]);
  const goPrev = useCallback(() => goTo(activeIdx - 1), [activeIdx, goTo]);

  // ── Animated progress bar ──────────────────────────────────────────────────
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

  // ── Auto-advance interval ──────────────────────────────────────────────────
  useEffect(() => {
    if (isPaused || modalApp) return;
    intervalRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % totalApps);
      setProgress(0);
      progressStartRef.current = performance.now();
    }, AUTO_PLAY_MS);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, modalApp, totalApps]);

  // ── Keyboard navigation ────────────────────────────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      if (modalApp) return;
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [modalApp, goNext, goPrev]);

  const prevIdx = (activeIdx - 1 + totalApps) % totalApps;
  const nextIdx = (activeIdx + 1) % totalApps;
  const activeApp = FLAGSHIP_APPS[activeIdx];

  return (
    <>
      {/* Inject keyframe animations */}
      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(28px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes progressSweep {
          from { width: 0%; }
          to   { width: 100%; }
        }
        .carousel-card-active {
          transform: scale(1) translateY(0px);
          opacity: 1;
          filter: blur(0px);
          z-index: 10;
        }
        .carousel-card-side {
          transform: scale(0.90) translateY(8px);
          opacity: 0.45;
          filter: blur(1.5px);
          z-index: 5;
        }
        .carousel-card-transition {
          transition: transform 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      opacity  700ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      filter   700ms cubic-bezier(0.25, 0.46, 0.45, 0.94),
                      box-shadow 700ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
      `}</style>

      <section
        className="relative w-full mb-14"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-label="Flagship Mobile Apps Showcase"
      >

        {/* ── Section Label ── */}
        <div className="flex items-center justify-center gap-3 mb-7">
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-blue-500/40" />
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 dark:border-blue-400/25">
            <Smartphone size={13} className="text-blue-500 dark:text-blue-400" />
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              Flagship Mobile Apps Spotlight
            </span>
          </div>
          <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-blue-500/40" />
        </div>

        {/* ── Carousel Stage ── */}
        <div className="relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] select-none overflow-visible">

          {/* Left Arrow */}
          <button
            onClick={goPrev}
            aria-label="Previous app"
            className="absolute left-0 sm:left-2 z-20 p-2.5 sm:p-3 rounded-full text-white/70 hover:text-white transition-all duration-200 hover:scale-110 active:scale-95"
            style={{
              background: "rgba(15,23,42,0.75)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.14)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>

          {/* Right Arrow */}
          <button
            onClick={goNext}
            aria-label="Next app"
            className="absolute right-0 sm:right-2 z-20 p-2.5 sm:p-3 rounded-full text-white/70 hover:text-white transition-all duration-200 hover:scale-110 active:scale-95"
            style={{
              background: "rgba(15,23,42,0.75)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.14)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>

          {/* Cards Container */}
          <div className="relative w-full flex items-center justify-center px-8 sm:px-14">

            {/* ── PREV (peeking left) ── */}
            <div
              onClick={goPrev}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter") goPrev(); }}
              aria-label={`View ${FLAGSHIP_APPS[prevIdx].title}`}
              className="carousel-card-side carousel-card-transition absolute left-0 cursor-pointer"
              style={{ width: "clamp(100px, 20%, 200px)" }}
            >
              <div className="rounded-2xl overflow-hidden aspect-[9/14] sm:aspect-[9/13]">
                <img
                  src={FLAGSHIP_APPS[prevIdx].bannerImage}
                  alt={FLAGSHIP_APPS[prevIdx].title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.style.background = "linear-gradient(135deg, #1e293b, #0f172a)";
                  }}
                />
              </div>
            </div>

            {/* ── ACTIVE CENTER CARD ── */}
            <div
              className="carousel-card-active carousel-card-transition relative rounded-3xl overflow-hidden"
              style={{
                width: "clamp(280px, 92%, 820px)",
                maxWidth: "820px",
                boxShadow: `0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.07), 0 0 60px ${activeApp.accentGlow}`,
              }}
            >
              {/* Banner Image */}
              <div className="relative w-full" style={{ paddingBottom: "52%" }}>
                <img
                  src={activeApp.bannerImage}
                  alt={`${activeApp.title} banner`}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ transition: "opacity 500ms ease" }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.style.background =
                      "linear-gradient(135deg, #1e3a5f 0%, #0f172a 50%, #1a1030 100%)";
                  }}
                />

                {/* Dark gradient overlay — ensures text legibility */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(2,6,23,0.97) 0%, rgba(2,6,23,0.72) 38%, rgba(2,6,23,0.18) 68%, transparent 100%)",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to right, rgba(2,6,23,0.55) 0%, transparent 50%, rgba(2,6,23,0.35) 100%)",
                  }}
                />

                {/* Top-left badge */}
                <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
                  <div
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wider"
                    style={{
                      background: "rgba(15,23,42,0.80)",
                      backdropFilter: "blur(10px)",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full animate-pulse shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${activeApp.accentColor.includes("emerald") ? "#10b981" : "#3b82f6"}, ${activeApp.accentColor.includes("emerald") ? "#14b8a6" : "#06b6d4"})`,
                      }}
                    />
                    {activeApp.badge}
                  </div>
                </div>

                {/* Animated progress bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px]"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="h-full rounded-full transition-none"
                    style={{
                      width: `${isPaused || modalApp ? progress : progress}%`,
                      background: `linear-gradient(90deg, ${activeApp.accentColor.includes("emerald") ? "#10b981, #14b8a6" : "#3b82f6, #06b6d4"})`,
                      transition: isPaused || modalApp ? "none" : "width 50ms linear",
                    }}
                  />
                </div>

                {/* Content overlay at bottom of image */}
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-5 sm:px-7 sm:pb-6">
                  {/* Title */}
                  <h3
                    className="text-white font-black mb-1 leading-tight"
                    style={{ fontSize: "clamp(1.4rem, 4vw, 2rem)" }}
                  >
                    {activeApp.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-white/60 text-xs sm:text-sm font-medium mb-3 leading-snug line-clamp-1">
                    {activeApp.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-white/82 text-[12px] sm:text-sm leading-relaxed mb-4 line-clamp-2 sm:line-clamp-3 max-w-[90%]">
                    {activeApp.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {activeApp.tech.map((t) => (
                      <span
                        key={t}
                        className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold border ${activeApp.techColor}`}
                        style={{ backdropFilter: "blur(6px)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2.5 flex-wrap">
                    {/* Watch Demo */}
                    <button
                      onClick={() => {
                        setIsPaused(true);
                        setModalApp(activeApp);
                      }}
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95 hover:brightness-110"
                      style={{
                        background: `linear-gradient(135deg, ${activeApp.accentColor.includes("emerald") ? "#059669, #0d9488" : "#2563eb, #0891b2"})`,
                        boxShadow: `0 6px 24px ${activeApp.accentGlow}`,
                      }}
                    >
                      <Play size={14} className="fill-white" strokeWidth={0} />
                      Watch Demo
                    </button>

                    {/* GitHub Repo */}
                    <a
                      href={activeApp.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white/85 hover:text-white transition-all duration-200 hover:scale-105 active:scale-95"
                      style={{
                        background: "rgba(15,23,42,0.85)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.20)",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.35)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(30,41,59,0.95)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(15,23,42,0.85)";
                      }}
                    >
                      <Github size={14} />
                      GitHub Repo
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* ── NEXT (peeking right) ── */}
            <div
              onClick={goNext}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter") goNext(); }}
              aria-label={`View ${FLAGSHIP_APPS[nextIdx].title}`}
              className="carousel-card-side carousel-card-transition absolute right-0 cursor-pointer"
              style={{ width: "clamp(100px, 20%, 200px)" }}
            >
              <div className="rounded-2xl overflow-hidden aspect-[9/14] sm:aspect-[9/13]">
                <img
                  src={FLAGSHIP_APPS[nextIdx].bannerImage}
                  alt={FLAGSHIP_APPS[nextIdx].title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.style.background = "linear-gradient(135deg, #1e293b, #0f172a)";
                  }}
                />
              </div>
            </div>

          </div>{/* /Cards Container */}
        </div>{/* /Carousel Stage */}

        {/* ── Pagination Dots ── */}
        <div className="flex items-center justify-center gap-2 mt-5" aria-label="Carousel pagination">
          {FLAGSHIP_APPS.map((app, i) => (
            <button
              key={app.id}
              onClick={() => goTo(i)}
              aria-label={`Go to ${app.title}`}
              aria-current={i === activeIdx ? "true" : undefined}
              className="transition-all duration-500 rounded-full"
              style={{
                height: "7px",
                width: i === activeIdx ? "32px" : "7px",
                background:
                  i === activeIdx
                    ? `linear-gradient(90deg, ${activeApp.accentColor.includes("emerald") ? "#10b981, #14b8a6" : "#3b82f6, #06b6d4"})`
                    : "rgba(148,163,184,0.35)",
                border: i === activeIdx ? "none" : "1px solid rgba(148,163,184,0.2)",
                boxShadow: i === activeIdx ? `0 0 10px ${activeApp.accentGlow}` : "none",
              }}
            />
          ))}
        </div>

        {/* ── Pause indicator ── */}
        {isPaused && !modalApp && (
          <div className="flex items-center justify-center mt-3 gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "rgba(148,163,184,0.5)" }}
            />
            <span className="text-[10px] text-slate-500 dark:text-slate-500 font-medium">
              Auto-play paused
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "rgba(148,163,184,0.5)" }}
            />
          </div>
        )}
      </section>

      {/* ── Video Modal Portal ── */}
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
