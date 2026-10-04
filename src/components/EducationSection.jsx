import { useEffect, useRef } from "react";
import { Calendar, MapPin } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "BSc (Honours) in Software Engineering",
    institution: "University of Kelaniya",
    location: "Sri Lanka",
    date: "Mar 2025 - Apr 2029",
    images: ["/education-software-engineering1.jpg", "/education-software-engineering2.jpg"],
    skills: ["Mathematics for Computing", "C Language", "Data Structures", "OOP", "Database Systems", "Python", "Java", "JavaScript", "HTML & CSS", "MySQL", "PHP", "OS", "DSA"]
  },
  {
    id: 2,
    degree: "Open Learning Programming Courses",
    institution: "University of Moratuwa",
    location: "Sri Lanka",
    date: "Oct 2025 - Jan 2027",
    images: ["/education-uom-open-learning.jpg"],
    skills: ["Python", "Python Calculator Projects", "Programming Fundamentals", "Problem Solving"]
  },
  {
    id: 3,
    degree: "G.C.E. Advanced Level Examination",
    institution: "H/ Rajapaksa National College",
    location: "Weeraketiya, Sri Lanka",
    date: "2023 (2024)",
    images: ["/educations-al.jpg"],
    skills: ["Combined Mathematics: A", "Physics: B", "Chemistry: B"]
  }
];

export const EducationSection = () => {
  const canvasRef = useRef(null);

  // --- INTERACTIVE GRAPH CANVAS + VISIBLE GRID LOGIC ---
  useEffect(() => {
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

    // Draw Subtle Grid Pattern (කොටු රටාව)
    const drawGrid = (isDark) => {
      const gridSize = 45;
      ctx.beginPath();
      ctx.lineWidth = 0.6;
      ctx.strokeStyle = isDark
        ? "rgba(255, 255, 255, 0.075)" // Dark Mode Grid
        : "rgba(0, 0, 0, 0.065)";      // Light Mode Grid

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

      // 2. Interactive Nodes & Lines
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse Interactivity Push
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

        // Draw Nodes
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? "rgba(180, 205, 235, 0.65)"
          : "rgba(51, 65, 85, 0.5)";
        ctx.fill();

        // Draw Lines
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
      id="education" 
      className="py-24 px-4 relative bg-[#f5f5f7] dark:bg-[#0a101d] overflow-hidden transition-colors duration-500"
    >
      {/* 0. INTERACTIVE GRAPH + GRID CANVAS BACKGROUND */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Ambient Glow Effects */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-r from-blue-500/5 to-indigo-500/5 dark:from-blue-600/10 dark:to-cyan-500/10 rounded-full blur-[140px] opacity-70" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            Academic Background
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1d1d1f] dark:text-[#f5f5f7]">
            Academic Foundations
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mb-6"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600/40 via-blue-600/10 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {education.map((edu, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={edu.id} className="relative flex flex-col md:flex-row items-center gap-6 md:gap-0">
                  
                  {/* EDUCATION CARD WITH PERMANENT DARK MODE GLOW */}
                  <div className={`w-full md:w-[45%] ${isLeft ? "md:pr-10" : "md:order-3 md:pl-10"}`}>
                    <div className="group relative rounded-2xl transition-all duration-500">
                      
                      {/* Permanent Dark Mode Glowing Background Aura */}
                      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-600/0 via-cyan-500/0 to-blue-600/0 dark:from-blue-600/20 dark:via-cyan-400/15 dark:to-blue-600/20 blur-lg opacity-100 dark:group-hover:opacity-100 dark:group-hover:blur-xl transition-all duration-500 pointer-events-none" />

                      {/* Main Card Container with Permanent Glow Borders */}
                      <div className="relative bg-white/90 dark:bg-[#111827]/90 backdrop-blur-md border-2 border-gray-200/80 dark:border-blue-500/30 dark:group-hover:border-cyan-400/60 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03),0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_0_20px_rgba(30,58,138,0.25)] dark:group-hover:shadow-[0_0_35px_rgba(56,189,248,0.3)] group-hover:-translate-y-1.5 transition-all duration-500 ease-out">
                        
                        {/* Top: images + Title */}
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex -space-x-3">
                            {edu.images.map((img, idx) => (
                              <div key={idx} className="w-14 h-14 rounded-full overflow-hidden bg-white dark:bg-gray-800 border-2 border-white dark:border-blue-500/40 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                                <img src={img} alt={`${edu.institution} ${idx}`} className="w-full h-full object-cover" />
                              </div>
                            ))}
                          </div>
                          <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#86868b] dark:text-[#94a3b8] mb-1">
                              {edu.institution}
                            </h4>
                            <h3 className="text-base font-bold text-gray-800 dark:text-white leading-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                              {edu.degree}
                            </h3>
                            <div className="flex flex-col gap-1 text-xs text-gray-500 dark:text-gray-400">
                              <div className="flex items-center gap-1.5">
                                <MapPin size={11} className="text-blue-600 dark:text-blue-400 shrink-0" />
                                <span>{edu.location}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Calendar size={11} className="text-blue-600 dark:text-blue-400 shrink-0" />
                                <span>{edu.date}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Skills */}
                        <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6e6e73] dark:text-[#94a3b8] mb-3">Core Competencies</h5>
                        <div className="flex flex-wrap gap-1.5">
                          {edu.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-0.5 rounded-lg text-xs font-medium bg-gray-200/80 dark:bg-[#1e293b] text-[#333333] dark:text-[#cbd5e1] border border-transparent dark:border-blue-500/20 transition-colors duration-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CENTER DOT */}
                  <div className="hidden md:flex md:order-2 w-[10%] justify-center items-center z-10">
                    <div className="w-4 h-4 rounded-full bg-blue-600 shadow-[0_0_12px_rgba(37,99,235,0.8)] ring-4 ring-[#f5f5f7] dark:ring-[#0a101d] transition-transform duration-300 group-hover:scale-125" />
                  </div>

                  {/* RIGHT EMPTY */}
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
