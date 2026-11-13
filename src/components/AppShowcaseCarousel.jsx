/**
 * AppShowcaseCarousel — Flagship Mobile Apps Spotlight
 * 3D Barrel / Cylinder rotation carousel
 * Auto-play: 1500 ms  |  Transition: 600 ms cubic-bezier
 */

import { useState, useEffect, useRef, useCallback } from "react";
import { Play, Github, ChevronLeft, ChevronRight, X, Smartphone, ExternalLink } from "lucide-react";

// ─── App Data ─────────────────────────────────────────────────────────────────
// bannerImage: images placed directly in /public/ — no sub-folder
// Drop the real files in and update these paths instantly.
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
    // Real file: /public/home_banner_2.png  — using project-health.jpg as fallback stand-in
    bannerImage: "/home_banner_2.png",
    fallbackImage: "/project-health.jpg",
    videoUrl: "/videos/suwago-demo.mp4",
    accentFrom: "#10b981",
    accentTo: "#14b8a6",
    accentGlow: "rgba(16,185,129,0.40)",
    techBadge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/35",
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
    // Real file: /public/nexthalt-banner.png  — using banner6.png as fallback stand-in
    bannerImage: "/nexthalt-banner.png",
    fallbackImage: "/banner6.png",
    videoUrl: "/videos/nexthalt-demo.mp4",
    accentFrom: "#3b82f6",
    accentTo: "#06b6d4",
    accentGlow: "rgba(59,130,246,0.40)",
    techBadge: "bg-blue-500/15 text-blue-300 border-blue-500/35",
  },
];

const AUTO_MS   = 1500;   // auto-advance interval
const TRANS_MS  = 600;    // 3D rotation transition duration
const PERSP_PX  = 1200;   // CSS perspective depth

// ─── Helpers ─────────────────────────────────────────────────────────────────
const isYouTube = (url) =>
  url && (url.includes("youtube.com") || url.includes("youtu.be"));

const getYouTubeEmbed = (url) => {
  try {
    const u  = new URL(url);
    const id = u.searchParams.get("v") || u.pathname.split("/").pop().split("?")[0];
    return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
  } catch { return url; }
};

// ─── Video Modal ──────────────────────────────────────────────────────────────
const VideoModal = ({ app, onClose }) => {
  const backdropRef = useRef(null);

  useEffect(() => {
    const h = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", h); document.body.style.overflow = ""; };
  }, [onClose]);

  return (
    <div
      ref={backdropRef}
      onClick={(e) => { if (e.target === backdropRef.current) onClose(); }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
      style={{
        background: "rgba(2,6,23,0.90)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        animation: "asc-fadein 0.22s ease both",
      }}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden border border-white/10"
        style={{
          background: "linear-gradient(145deg,#0d1117,#161b27)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.75),0 0 0 1px rgba(255,255,255,0.06)",
          animation: "asc-slideup 0.28s cubic-bezier(0.16,1,0.3,1) both",
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-5 py-4 border-b border-white/[0.08]">
          <div className="flex-1 min-w-0 mr-3">
            <div className="flex items-center gap-2 mb-1">
              <Smartphone size={13} className="text-slate-400 shrink-0" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">App Demo Walkthrough</span>
            </div>
            <h3 className="text-white font-black text-lg leading-tight truncate">{app.title}</h3>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {app.tech.slice(0, 4).map((t) => (
                <span key={t} className={`px-2 py-0.5 rounded-full text-[10px] font-bold border ${app.techBadge}`}>{t}</span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={app.githubUrl} target="_blank" rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white/70 hover:text-white bg-white/[0.07] hover:bg-white/[0.13] border border-white/10 hover:border-white/20 transition-all duration-200"
            >
              <Github size={12} /> View Source
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white bg-white/[0.07] hover:bg-white/[0.13] border border-white/10 hover:border-white/20 transition-all duration-200"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* 16:9 player */}
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <div className="absolute inset-0 bg-black">
            {isYouTube(app.videoUrl) ? (
              <iframe
                src={getYouTubeEmbed(app.videoUrl)}
                title={`${app.title} Demo`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <video src={app.videoUrl} controls autoPlay className="w-full h-full object-contain" playsInline>
                <p className="text-slate-400 text-sm text-center p-8">
                  Your browser does not support the video tag.{" "}
                  <a href={app.videoUrl} className="text-blue-400 underline">Download</a>
                </p>
              </video>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-white/[0.08] flex items-center justify-between gap-3">
          <p className="text-xs text-slate-500 italic truncate">{app.tagline}</p>
          <a
            href={app.githubUrl} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-slate-400 hover:text-white transition-colors duration-200 shrink-0"
          >
            <ExternalLink size={11} /> GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
};

// ─── 3D Barrel Slide ──────────────────────────────────────────────────────────
// Each slide sits on the surface of an imaginary cylinder.
// totalCards cards → each separated by (360 / totalCards)°.
// Active card faces forward (rotateY = 0); others rotate around the Y axis.

const BarrelSlide = ({ app, offset, totalCards, onClick, isActive }) => {
  const angleStep = 360 / totalCards;          // degrees per slot
  const faceAngle = offset * angleStep;         // this card's Y rotation
  // radius so cards don't overlap — depends on card width (~720px approx)
  const radius    = Math.round(720 / (2 * Math.tan(Math.PI / totalCards)));

  const style = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    transform: `rotateY(${faceAngle}deg) translateZ(${radius}px)`,
    transition: `transform ${TRANS_MS}ms cubic-bezier(0.45,0.05,0.55,0.95),
                 opacity   ${TRANS_MS}ms ease,
                 filter    ${TRANS_MS}ms ease`,
    opacity : isActive ? 1 : 0.38,
    filter  : isActive ? "blur(0px)" : "blur(2px)",
    cursor  : isActive ? "default" : "pointer",
    pointerEvents: "auto",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
  };

  const handleImgError = (e) => {
    if (app.fallbackImage && e.target.src !== window.location.origin + app.fallbackImage) {
      e.target.src = app.fallbackImage;
    } else {
      e.target.style.display = "none";
      e.target.parentElement.style.background =
        "linear-gradient(135deg,#1e3a5f 0%,#0f172a 60%,#1a1030 100%)";
    }
  };

  return (
    <div style={style} onClick={isActive ? undefined : onClick}>
      <div
        className="relative w-full h-full rounded-3xl overflow-hidden"
        style={{
          boxShadow: isActive
            ? `0 28px 70px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.08), 0 0 55px ${app.accentGlow}`
            : "0 10px 30px rgba(0,0,0,0.4)",
        }}
      >
        {/* Banner image — object-cover, vivid & bright */}
        <img
          src={app.bannerImage}
          alt={`${app.title} banner`}
          className="absolute inset-0 w-full h-full object-cover"
          onError={handleImgError}
        />

        {/* Gradient: only bottom 55% fades to dark, top/center stays bright */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(2,6,23,0.96) 0%, rgba(2,6,23,0.70) 32%, rgba(2,6,23,0.12) 58%, transparent 100%)",
          }}
        />
        {/* Subtle left/right vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(2,6,23,0.35) 0%, transparent 35%, transparent 65%, rgba(2,6,23,0.35) 100%)",
          }}
        />

        {/* Top-left badge */}
        <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold text-white uppercase tracking-wider"
            style={{
              background: "rgba(10,16,36,0.78)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.14)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse shrink-0"
              style={{ background: `linear-gradient(135deg,${app.accentFrom},${app.accentTo})` }}
            />
            {app.badge}
          </div>
        </div>

        {/* Content overlay — anchored to bottom */}
        {isActive && (
          <div className="absolute bottom-0 left-0 right-0 px-5 pb-6 sm:px-7 sm:pb-7">
            {/* Title */}
            <h3
              className="text-white font-black leading-tight mb-1"
              style={{ fontSize: "clamp(1.35rem,3.8vw,2rem)" }}
            >
              {app.title}
            </h3>
            {/* Tagline */}
            <p className="text-white/55 text-xs sm:text-sm font-medium mb-2 line-clamp-1">
              {app.tagline}
            </p>
            {/* Description */}
            <p className="text-white/80 text-[12px] sm:text-sm leading-relaxed mb-3.5 line-clamp-2 sm:line-clamp-3 max-w-[88%]">
              {app.description}
            </p>
            {/* Tech stack */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {app.tech.map((t) => (
                <span
                  key={t}
                  className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-bold border ${app.techBadge}`}
                  style={{ backdropFilter: "blur(6px)" }}
                >
                  {t}
                </span>
              ))}
            </div>
            {/* Action buttons */}
            <div className="flex gap-2.5 flex-wrap">
              {/* Watch Demo */}
              <button
                data-action="watch"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white transition-all duration-200 hover:scale-105 active:scale-95 hover:brightness-110"
                style={{
                  background: `linear-gradient(135deg,${app.accentFrom},${app.accentTo})`,
                  boxShadow: `0 6px 22px ${app.accentGlow}`,
                }}
              >
                <Play size={13} className="fill-white" strokeWidth={0} />
                Watch Demo
              </button>
              {/* GitHub */}
              <a
                href={app.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-action="github"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white/85 hover:text-white transition-all duration-200 hover:scale-105 active:scale-95"
                style={{
                  background: "rgba(10,16,36,0.88)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.20)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.38)",
                }}
              >
                <Github size={13} />
                GitHub Repo
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────
export const AppShowcaseCarousel = () => {
  const total      = FLAGSHIP_APPS.length;
  const [rotation, setRotation]   = useState(0);   // cumulative Y° of the cylinder
  const [modalApp, setModalApp]   = useState(null);
  const [isPaused, setIsPaused]   = useState(false);
  const [progress, setProgress]   = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  const intervalRef  = useRef(null);
  const rafRef       = useRef(null);
  const progStartRef = useRef(null);
  const angleStep    = 360 / total;

  // Active index derived from cumulative rotation
  // We rotate the cylinder so the active slot faces front (rotateY=0 on cylinder = face front)
  // Spinning forward (next) = cylinder rotates -angleStep (counter-clockwise from viewer)
  const activeIdx = ((-Math.round(rotation / angleStep) % total) + total) % total;

  // ── spin helper ───────────────────────────────────────────────────────────
  const spin = useCallback(
    (direction /* +1 = next, -1 = prev */) => {
      if (isSpinning) return;
      setIsSpinning(true);
      setProgress(0);
      progStartRef.current = performance.now();
      setRotation((r) => r - direction * angleStep);
      setTimeout(() => setIsSpinning(false), TRANS_MS + 50);
    },
    [isSpinning, angleStep]
  );

  const goNext = useCallback(() => spin(1),  [spin]);
  const goPrev = useCallback(() => spin(-1), [spin]);

  // ── progress-bar rAF ──────────────────────────────────────────────────────
  useEffect(() => {
    const tick = (now) => {
      if (!progStartRef.current) progStartRef.current = now;
      const pct = Math.min(((now - progStartRef.current) / AUTO_MS) * 100, 100);
      setProgress(pct);
      if (pct < 100) rafRef.current = requestAnimationFrame(tick);
    };

    if (!isPaused && !modalApp) {
      progStartRef.current = performance.now();
      rafRef.current = requestAnimationFrame(tick);
    } else {
      cancelAnimationFrame(rafRef.current);
    }
    return () => cancelAnimationFrame(rafRef.current);
  }, [isPaused, modalApp, rotation]);    // reset bar on each slide change

  // ── auto-advance interval ─────────────────────────────────────────────────
  useEffect(() => {
    if (isPaused || modalApp) { clearInterval(intervalRef.current); return; }
    intervalRef.current = setInterval(() => {
      setIsSpinning(true);
      setProgress(0);
      progStartRef.current = performance.now();
      setRotation((r) => r - angleStep);
      setTimeout(() => setIsSpinning(false), TRANS_MS + 50);
    }, AUTO_MS);
    return () => clearInterval(intervalRef.current);
  }, [isPaused, modalApp, angleStep]);

  // ── keyboard nav ──────────────────────────────────────────────────────────
  useEffect(() => {
    const h = (e) => {
      if (modalApp) return;
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft")  goPrev();
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [modalApp, goNext, goPrev]);

  // ── click delegation on active card ──────────────────────────────────────
  const handleCardClick = useCallback(
    (e) => {
      const action = e.target.closest("[data-action]")?.dataset?.action;
      if (action === "watch") {
        setIsPaused(true);
        setModalApp(FLAGSHIP_APPS[activeIdx]);
      }
    },
    [activeIdx]
  );

  // radius matches BarrelSlide's radius for perspective stage sizing
  const approxRadius = Math.round(720 / (2 * Math.tan(Math.PI / total)));
  const stageH = 460; // px — height of the 3D stage div

  const activeApp = FLAGSHIP_APPS[activeIdx];

  return (
    <>
      {/* ── Keyframes ── */}
      <style>{`
        @keyframes asc-fadein  { from{opacity:0}             to{opacity:1} }
        @keyframes asc-slideup { from{opacity:0;transform:translateY(28px) scale(0.97)} to{opacity:1;transform:none} }
      `}</style>

      <section
        className="relative w-full mb-14"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { if (!modalApp) setIsPaused(false); }}
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

        {/* ── 3D Cylinder Stage ── */}
        <div
          className="relative mx-auto"
          style={{
            maxWidth: "820px",
            height: `${stageH}px`,
            perspective: `${PERSP_PX}px`,
            perspectiveOrigin: "50% 50%",
            overflow: "visible",
          }}
        >
          {/* Left arrow */}
          <button
            onClick={goPrev}
            aria-label="Previous app"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full text-white/70 hover:text-white transition-all duration-200 hover:scale-110 active:scale-95"
            style={{
              transform: "translateY(-50%) translateX(-50%)",
              background: "rgba(10,16,36,0.80)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.14)",
              boxShadow: "0 8px 28px rgba(0,0,0,0.5)",
              zIndex: 30,
            }}
          >
            <ChevronLeft size={20} strokeWidth={2.5} />
          </button>

          {/* Right arrow */}
          <button
            onClick={goNext}
            aria-label="Next app"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3 rounded-full text-white/70 hover:text-white transition-all duration-200 hover:scale-110 active:scale-95"
            style={{
              transform: "translateY(-50%) translateX(50%)",
              background: "rgba(10,16,36,0.80)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.14)",
              boxShadow: "0 8px 28px rgba(0,0,0,0.5)",
              zIndex: 30,
            }}
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>

          {/* 3D Cylinder — the rotating drum */}
          <div
            onClick={handleCardClick}
            style={{
              position: "relative",
              width: "100%",
              height: "100%",
              transformStyle: "preserve-3d",
              transform: `rotateY(${rotation}deg)`,
              transition: `transform ${TRANS_MS}ms cubic-bezier(0.45,0.05,0.55,0.95)`,
            }}
          >
            {FLAGSHIP_APPS.map((app, i) => {
              // offset = how many slots away from the front-facing slot
              const offset = i;   // slot 0 starts at 0°, slot 1 at angleStep°, …
              const isActive = i === activeIdx;
              return (
                <BarrelSlide
                  key={app.id}
                  app={app}
                  offset={offset}
                  totalCards={total}
                  isActive={isActive}
                  onClick={isActive ? undefined : (e) => {
                    // clicking a side card advances in the right direction
                    const dist = ((i - activeIdx + total) % total);
                    dist <= total / 2 ? goNext() : goPrev();
                  }}
                />
              );
            })}
          </div>

          {/* Progress bar — bottom edge of stage */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full overflow-hidden"
            style={{ background: "rgba(255,255,255,0.07)", zIndex: 20 }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: `linear-gradient(90deg,${activeApp.accentFrom},${activeApp.accentTo})`,
                transition: isPaused || modalApp ? "none" : "width 60ms linear",
                boxShadow: `0 0 8px ${activeApp.accentGlow}`,
              }}
            />
          </div>
        </div>

        {/* ── Pagination dots ── */}
        <div className="flex items-center justify-center gap-2 mt-5" aria-label="Carousel pagination">
          {FLAGSHIP_APPS.map((app, i) => (
            <button
              key={app.id}
              onClick={() => {
                if (i === activeIdx || isSpinning) return;
                const dist = ((i - activeIdx + total) % total);
                dist <= total / 2 ? goNext() : goPrev();
              }}
              aria-label={`Go to ${app.title}`}
              aria-current={i === activeIdx ? "true" : undefined}
              className="rounded-full transition-all duration-500"
              style={{
                height: "7px",
                width: i === activeIdx ? "32px" : "7px",
                background:
                  i === activeIdx
                    ? `linear-gradient(90deg,${activeApp.accentFrom},${activeApp.accentTo})`
                    : "rgba(148,163,184,0.32)",
                border: i === activeIdx ? "none" : "1px solid rgba(148,163,184,0.18)",
                boxShadow: i === activeIdx ? `0 0 10px ${activeApp.accentGlow}` : "none",
              }}
            />
          ))}
        </div>

        {/* Pause hint */}
        {isPaused && !modalApp && (
          <div className="flex items-center justify-center mt-3 gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(148,163,184,0.45)" }} />
            <span className="text-[10px] text-slate-500 font-medium">Auto-play paused</span>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(148,163,184,0.45)" }} />
          </div>
        )}
      </section>

      {/* ── Video Modal ── */}
      {modalApp && (
        <VideoModal
          app={modalApp}
          onClose={() => {
            setModalApp(null);
            setIsPaused(false);
            setProgress(0);
            progStartRef.current = performance.now();
          }}
        />
      )}
    </>
  );
};

export default AppShowcaseCarousel;
