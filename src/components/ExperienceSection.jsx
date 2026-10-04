import { useEffect, useRef } from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "IEEE Srilanka Section ",
    location: "Sri Lanka · Hybrid",
    date: "Aug 2026 - Present",
    description: "Active student member of the IEEE Sri Lanka Section, engaging in professional networks and technical community initiatives.",
    images: ["/experience-ieee-logo.jpg"],
    link: "https://www.linkedin.com/in/dulana-chathurma/overlay/Position/2984494659/treasury/?profileId=ACoAAFDfMasBoGUec8AKadGJzB74e0K0BTBPegE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BOEEmrJeRSgubvvATRBJvmQ%3D%3D",
    linkText: "View Photo",
    iconBg: "from-blue-600 to-cyan-500",
    tags: ["IEEE", "Professional Network", "Student Member", "ID : 102613884"],
  },
  {
    id: 2,
    title: "LED KLN",
    location: "University of Kelaniya, Sri Lanka",
    date: "Jun 2026 - Present",
    description: "Member of LED KLN, contributing to leadership development activities, teamwork, communication, and student engagement initiatives.",
    images: ["/education-software-engineering1.jpg", "/experience-led-kln-logo.jpg"],
    iconBg: "from-blue-500 to-indigo-500",
    tags: ["Leadership", "Communication", "Team Leadership", "ID : 263092"],
  },
  {
    id: 3,
    title: "Gavel Club - University of Kelaniya",
    location: "Kelaniya, Sri Lanka",
    date: "2023 - Present",
    description: "Faculty Coordinator for social services, organizing events and activities that benefit the community.",
    images: ["/education-software-engineering1.jpg", "/experience-gavel-club.jpg"],
    link: "https://www.linkedin.com/in/dulana-chathurma/overlay/VolunteerExperience/549063134/treasury/?profileId=ACoAAFDfMasBoGUec8AKadGJzB74e0K0BTBPegE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B65jxYYkUQ2%2BYVbBokosGhA%3D%3D",
    linkText: "View Photo",
    iconBg: "from-rose-500 to-pink-500",
    tags: ["Leadership", "Community", "Events"],
  },
  {
    id: 4,
    title: "Student Participant – Safe Migration Program",
    location: "International Organization for Migration · On-site",
    date: "Dec 2025 · 1 mo",
    description: "Participated in a Safe Migration awareness program organized by the Rotaract Club of University of Kelaniya. Gained knowledge on international career opportunities and migration safety.",
    images: ["/education-software-engineering1.jpg", "/abc.jpg"],
    link: "https://www.linkedin.com/in/dulana-chathurma/overlay/Position/2882945007/treasury/?profileId=ACoAAFDfMasBoGUec8AKadGJzB74e0K0BTBPegE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B65jxYYkUQ2%2BYVbBokosGhA%3D%3D",
    linkText: "View Photo",
    iconBg: "from-emerald-500 to-teal-500",
    tags: ["Migration", "Awareness", "Rotaract"],
  },
];

export const ExperienceSection = () => {
  const canvasRef = useRef(null);

  // --- INTERACTIVE GRAPH CANVAS WITH MOBILE PERFORMANCE OPTIMIZATION ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    let mouse = { x: null, y: null, radius: 170 };

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
    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    // Nodes creation
    const particleCount = Math.floor((width * height) / 9500);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 1.5 + 1.2,
    }));

    let animationFrameId;

    // Draw Graph Paper Grid Pattern
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

      // 1. Draw Grid Background
      drawGrid(isDark);

      // Mobile devices නම් heavy calculations සිදු නොකර නවත්වයි
      if (isMobile) return;

      // 2. Draw Moving Nodes & Connecting Lines
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
    <section id="experience" className="py-24 px-4 relative bg-[#f5f5f7] dark:bg-[#0a101d] overflow-hidden transition-colors duration-500">
      {/* 0. INTERACTIVE GRAPH + GRID CANVAS BACKGROUND */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Dynamic Ambient Background Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-cyan-500/5 dark:from-blue-600/10 dark:via-cyan-500/10 dark:to-blue-600/10 rounded-full blur-[150px] opacity-70" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            Professional Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1d1d1f] dark:text-[#f5f5f7]">
            Volunteering & My Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mb-6"></div>
          <p className="text-[#86868b] dark:text-[#94a3b8] max-w-2xl mx-auto text-sm sm:text-base">
            My professional journey and volunteer experiences that have shaped my career
          </p>
        </div>

        {/* Timeline Line */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600/40 via-blue-600/10 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row items-center gap-6 md:gap-0">
                  
                  {/* EXPERIENCE CARD */}
                  <div className={`w-full md:w-[45%] ${isLeft ? "md:pr-10" : "md:order-3 md:pl-10"}`}>
                    <div className="group relative rounded-2xl transition-all duration-500">
                      
                      {/* Dark Mode Glowing Background Aura */}
                      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-600/0 via-cyan-500/0 to-blue-600/0 dark:from-blue-600/20 dark:via-cyan-400/15 dark:to-blue-600/20 blur-lg opacity-100 dark:group-hover:opacity-100 dark:group-hover:blur-xl transition-all duration-500 pointer-events-none" />

                      {/* Main Card Container */}
                      <div className="relative bg-white/90 dark:bg-[#111827]/90 backdrop-blur-md rounded-2xl border border-slate-300/80 dark:border-blue-500/30 dark:group-hover:border-cyan-400/60 p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03),0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_0_20px_rgba(30,58,138,0.25)] dark:group-hover:shadow-[0_0_35px_rgba(56,189,248,0.3)] group-hover:-translate-y-1.5 transition-all duration-500 ease-out">
                        
                        {/* Top: Profile/Logos + Title */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex -space-x-3">
                            {exp.images.map((img, i) => (
                              <div key={i} className={`w-14 h-14 rounded-full bg-gradient-to-br ${exp.iconBg} p-0.5 shadow-sm flex-shrink-0 z-[${i}] transition-transform duration-300 group-hover:scale-105`}>
                                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                                  <img src={img} alt={exp.title} className="w-full h-full object-cover" />
                                </div>
                              </div>
                            ))}
                          </div>
                          <div>
                            <h3 className="text-base font-bold text-gray-800 dark:text-white leading-tight mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                              {exp.title}
                            </h3>
                            <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mb-0.5">
                              <MapPin size={11} className="text-blue-600 dark:text-blue-400 shrink-0" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                              <Calendar size={11} className="text-blue-600 dark:text-blue-400 shrink-0" />
                              <span>{exp.date}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                          {exp.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {exp.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs border border-gray-200 dark:border-blue-500/20 text-gray-600 dark:text-gray-300 bg-gray-100/80 dark:bg-[#1e293b]">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* External Link Button */}
                        {exp.link && (
                          <a href={exp.link} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                            {exp.linkText} <ExternalLink size={13} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden md:flex md:order-2 w-[10%] justify-center items-center z-10">
                    <div className="w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.8)] ring-4 ring-[#f5f5f7] dark:ring-[#0a101d] transition-transform duration-300 group-hover:scale-125" />
                  </div>

                  {/* Right Empty */}
                  <div className={`hidden md:block md:w-[45%] ${isLeft ? "md:order-3" : "md:order-1"}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
