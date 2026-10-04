import { useEffect, useRef, useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  // CATEGORY: major 
  {
    id: 1,
    title: "VisionScope AI",
    category: "major",
    description: "AI-powered real-time human feature detection system with webcam analysis, face & eye tracking, image upload processing, and drowsiness detection alerts for driver safety. Built using Flask, OpenCV, MediaPipe, React, and Machine Learning technologies.",
    image: "/project-visionscope-ai.jpg",
    tags: ["Python", "Flask", "OpenCV", "MediaPipe", "React.js", "Machine Learning"],
    demoUrl: "",
    githubUrl: "https://github.com/dulanachathurma/VisionScope-AI",
    date: "2026",
    tagColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
  },
  {
    id: 6,
    title: "Sriseta Official Website",
    category: "major",
    description: "Modern astrology website with live horoscopes, service booking, WhatsApp integration, and mobile-friendly design. Features auto-updating predictions, interactive zodiac slider, and contact forms.",
    image: "/project-astrology-website.jpg",
    tags: ["React.js", "HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://sriseta.vercel.app",
    githubUrl: "https://github.com/dulanachathurma/sriseta-astrology-platform",
    date: "Dec 2025 – Present",
    tagColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"
  },
  {
    id: 12,
    title: "Intelligent Career Skill Analysis Platform (NexGenAI)",
    category: "mini",
    description: "NexGenAI is LIVE! An AI-powered career platform that analyzes CVs, maps skills intelligently, and provides career recommendations along with ATS scores in seconds. Features dynamic skill dashboards and career match predictions.",
    image: "/project-nexgenai.jpg",
    tags: ["React", "TailwindCSS", "HTML5", "CSS3", "AI Resume Analysis"],
    demoUrl: "https://dulanachathurma.github.io/Intelligent-Career-Skill-Analysis-Platform/",
    githubUrl: "https://github.com/dulanachathurma/Intelligent-Career-Skill-Analysis-Platform",
    date: "Feb 2026 – Mar 2026",
    tagColor: "bg-fuchsia-100 dark:bg-fuchsia-900/50 text-fuchsia-700 dark:text-fuchsia-300"
  },
  {
    id: 17,
    title: "NexaTask – Modern Task Management Platform",
    category: "major",
    description: "NexaTask is a modern, responsive full-stack task management web app featuring a glassmorphism dark UI, JWT authentication, real-time search, priority-based sorting, dynamic dashboard analytics, and schedule tracking.",
    image: "/project-nexatask.jpg",
    tags: ["Full-Stack", "React", "Node.js", "JWT", "TailwindCSS"],
    githubUrl: "https://github.com/dulanachathurma/NexaTask",
    date: "Mar 2026 – Apr 2026",
    tagColor: "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300"
  },
  {
    id: 13,
    title: "Pet Care Management System",
    category: "major",
    description: "A full-stack web application designed to streamline pet care service bookings and administrative operations. Allows pet owners to browse services like grooming and vet checkups and schedule appointments, while providing administrators with a secure dashboard to manage bookings.",
    image: "/project-petcare.jpg",
    tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Git"],
    githubUrl: "https://github.com/kavindugimshan/Pet-Care-System",
    date: "Aug 2026",
    tagColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    contributors: [
      {
        name: "Kavindu Gimshan",
        username: "kavindugimshan",
        avatarUrl: "https://github.com/kavindugimshan.png",
        profileUrl: "https://github.com/kavindugimshan"
      },
      {
        name: "Chanindu Iman...",
        username: "Chanindulmanjith",
        avatarUrl: "https://github.com/Chanindulmanjith.png",
        profileUrl: "https://github.com/Chanindulmanjith"
      },
      {
        name: "Minindu",
        username: "Rajapakshaminindu",
        avatarUrl: "https://github.com/Rajapakshaminindu.png",
        profileUrl: "https://github.com/Rajapakshaminindu"
      },
      {
        name: "DULANA CHAT...",
        username: "dulanachathurma",
        avatarUrl: "https://github.com/dulanachathurma.png",
        profileUrl: "https://github.com/dulanachathurma"
      }
    ]
  },
  {
    id: 18,
    title: "Bare-Metal x86 Operating System",
    category: "major",
    description: "A custom-built, bare-metal x86 operating system developed from scratch. Features include a custom bootloader, round-robin process scheduler, multithreading, memory management (PMM & Heap), and a custom file system on a RAM disk.",
    image: "/project-os.jpg", 
    tags: ["C", "Assembly", "OS Development", "QEMU", "Low-Level"],
    githubUrl: "https://github.com/dulanachathurma/seng21213-os",
    date: "Aug 2026 – Sep 2026",
    tagColor: "bg-slate-100 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300"
  },
  {
    id: 19,
    title: "Vehicle Spare Parts E-Commerce & Management System",
    category: "major",
    description: "A full-stack web application built to streamline inventory, product cataloging, and order management processes with real-time tracking.",
    image: "/project-spareparts.jpg", 
    tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "E-Commerce"],
    demoUrl: "http://spareparts.kesug.com",
    githubUrl: "https://github.com/dulanachathurma/Vehicle-Spare-Parts",
    date: "Jul 2026 – Aug 2026",
    tagColor: "bg-fuchsia-100 dark:bg-fuchsia-900/50 text-fuchsia-700 dark:text-fuchsia-300"
  },
  {
    id: 20,
    title: "CLI Sales Report Generator",
    category: "mini",
    description: "A Java command-line application that parses CSV sales data, performs calculations, and generates formatted output using the Strategy design pattern, custom exception handling, and JUnit 5 testing.",
    image: "/project-sales-reporter.jpg",
    tags: ["Java", "OOP", "Strategy Pattern", "JUnit 5", "CLI"],
    githubUrl: "https://github.com/dulanachathurma/SENG-21222-Sales-Report-Generator",
    date: "Aug 2026 – Sep 2026",
    tagColor: "bg-fuchsia-100 dark:bg-fuchsia-900/50 text-fuchsia-700 dark:text-fuchsia-300"
  },
  {
    id: 21,
    title: "AstroPulse-AIOps Observability Gateway",
    category: "major",
    description: "A Cloud-Native Integration Gateway built with Ballerina and Python that uses Claude AI to analyze microservice telemetry logs and generate real-time automated Root Cause Analysis (RCA) with interactive anomaly simulation.",
    image: "/project-astropulse-aiops.jpg",
    tags: ["Ballerina", "Python", "React", "Claude AI", "AIOps", "TailwindCSS"],
    githubUrl: "https://github.com/dulanachathurma/AstroPulse-AIOps",
    date: "Sep 2026",
    tagColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300"
  },
  {
    id: 22,
    title: "HealthPulse AI - Full-Stack Mobile & Web Companion",
    category: "major",
    description: "A Cloud-Native Trilingual Health & Wellness Platform built with React, Node.js, Express, and Chart.js. Features real-time BMI tracking analytics, symptom-driven smart doctor recommendations, and persistent health vitals logging inside an interactive mobile frame.",
    image: "/project-health.jpg",
    tags: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "TailwindCSS"],
    githubUrl: "https://github.com/dulanachathurma/Vitacare-mobile-fullstack",
    date: "Oct 2026",
    tagColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300"
  },
  {
    id: 2,
    title: "GPA Calculator App",
    category: "mini",
    description: "A full-featured academic GPA tracking web application that allows students to calculate Semester GPA, Year GPA, and Cumulative GPA across multiple academic years with a clean and responsive UI.",
    image: "/project-gpa-calculator.jpg",
    tags: ["React 19", "Vite", "Tailwind CSS", "JavaScript"],
    demoUrl: "https://dcgpa.vercel.app/",
    githubUrl: "https://github.com/dulanachathurma/GPA-Calculator-App",
    date: "2026",
    tagColor: "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300"
  },
  {
    id: 14,
    title: "My PHP CRUD App",
    category: "mini",
    description: "A fully functional CRUD (Create, Read, Update, Delete) web application developed to strengthen backend development skills and database management. It allows users to create, view, update, and delete records with a simple and responsive interface.",
    image: "/project-crud-app.jpg",
    tags: ["HTML5", "CSS3", "PHP", "MySQL"],
    demoUrl: "https://dulanacrud.infy.click",
    githubUrl: "https://github.com/dulanachathurma/My-Crud-App",
    date: "May 2026 – Jun 2026",
    tagColor: "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300"
  },
  {
    id: 3,
    title: "CarePoint Medical Center",
    category: "mini",
    description: "Modern healthcare web application designed for easy doctor search, appointment booking, and seamless patient experience. Features doctor search, online appointment booking, secure payment simulation, ambulance contact access, and a fully responsive user interface.",
    image: "/project-medical-center.jpg",
    tags: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://dulanamedical.netlify.app",
    githubUrl: "#",
    date: "2026",
    tagColor: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300"
  },
  {
    id: 7,
    title: "TravelScope Website",
    category: "mini",
    description: "A comprehensive travel platform showcasing Sri Lanka's beauty, built with modern web technologies. This project represents my passion for both technology and promoting Sri Lankan tourism.",
    image: "/project-travelscope.jpg",
    tags: ["React.js", "HTML5", "CSS3", "JavaScript", "Google Maps API"],
    demoUrl: "https://dulanatravel.vercel.app",
    githubUrl: "https://github.com/dulanachathurma/TravelScope-Website-Project",
    date: "2025",
    tagColor: "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300"
  },
  {
    id: 8,
    title: "WeatherSphere Pro App",
    category: "mini",
    description: "WeatherSphere Pro is a responsive weather web application providing real-time weather updates with a clean interface. Built using React.js, HTML, CSS, and JavaScript, providing real-time weather updates.",
    image: "/project-weather-app.jpg",
    tags: ["React.js", "HTML5", "CSS3", "JavaScript", "Weather API"],
    demoUrl: "https://dulanachathurma.github.io/WeatherSphere-Pro/",
    githubUrl: "https://github.com/dulanachathurma/WeatherSphere-Pro",
    date: "Dec 2025 – Present",
    tagColor: "bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300"
  },
  {
    id: 9,
    title: "React Stopwatch",
    category: "mini",
    description: "This is a simple stopwatch application built with React. It allows users to start, pause, and reset the timer. The interface is clean and responsive, displaying the elapsed time in milliseconds, seconds, and minutes.",
    image: "/stopwatch-app.jpg",
    tags: ["React.js"],
    demoUrl: "https://dulanawatch.netlify.app/",
    githubUrl: "https://github.com/dulanachathurma/My-Stop-watch",
    date: "Apr 2026 – Apr 2026",
    tagColor: "bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300"
  },
  {
    id: 11,
    title: "YouTube Frontend UI Clone",
    category: "mini",
    description: "YouTube-inspired homepage UI, built entirely with HTML5 & CSS3. Replicates the look and feel of YouTube's interface with clean, modern styling.",
    image: "/project-youtube-clone.jpg",
    tags: ["HTML5", "CSS3", "Responsive"],
    demoUrl: "https://dulanachathurma.github.io/YouTube-Interface/",
    githubUrl: "https://github.com/dulanachathurma/YouTube-Interface",
    date: "2025",
    tagColor: "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300"
  }
];

export const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("major");
  const canvasRef = useRef(null);
  const filteredProjects = projects.filter(project => project.category === activeTab);

  // --- MOBILE OPTIMIZED INTERACTIVE GRAPH CANVAS ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    let mouse = { x: null, y: null, radius: 150 };

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
    parent.addEventListener("mousemove", handleMouseMove, { passive: true });
    parent.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    // Dynamic density factor for mobile devices
    const isMobile = window.innerWidth < 768;
    const densityDivider = isMobile ? 14000 : 9500; // Less nodes on mobile for maximum fps & smooth scrolling
    const particleCount = Math.floor((width * height) / densityDivider);

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
    <section id="projects" className="py-24 px-4 relative bg-[#f5f5f7] dark:bg-[#0a101d] overflow-hidden transition-colors duration-500">
      {/* 0. HIGH PERFORMANCE MOBILE CANVAS BACKGROUND */}
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
            My Portfolio
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1d1d1f] dark:text-[#f5f5f7]">
            Featured Projects
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-6" />

          <p className="text-[#86868b] dark:text-[#94a3b8] max-w-2xl mx-auto text-sm sm:text-base">
            Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
          </p>
        </div>

        {/* Professional Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-slate-200/60 dark:bg-[#1e293b]/60 p-1.5 rounded-xl backdrop-blur-sm border border-slate-300/50 dark:border-blue-500/20">
            <button
              onClick={() => setActiveTab("major")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === "major"
                  ? "bg-blue-600 text-white shadow-md scale-105"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              Major Ventures
            </button>
            <button
              onClick={() => setActiveTab("mini")}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                activeTab === "mini"
                  ? "bg-blue-600 text-white shadow-md scale-105"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              Personal Projects
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative rounded-2xl transition-all duration-500 flex flex-col h-full">
              
              {/* Permanent Dark Mode Glowing Background Aura */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-600/0 via-cyan-500/0 to-blue-600/0 dark:from-blue-600/20 dark:via-cyan-400/15 dark:to-blue-600/20 blur-lg opacity-100 dark:group-hover:opacity-100 dark:group-hover:blur-xl transition-all duration-500 pointer-events-none" />

              {/* Main Project Card Container */}
              <div className="relative bg-white/90 dark:bg-[#111827]/90 backdrop-blur-md border-2 border-gray-200/80 dark:border-blue-500/30 dark:group-hover:border-cyan-400/60 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03),0_20px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_0_20px_rgba(30,58,138,0.25)] dark:group-hover:shadow-[0_0_35px_rgba(56,189,248,0.3)] group-hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col h-full">
                
                {/* Image Container */}
                <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {project.date && (
                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium tracking-wide">
                      📅 {project.date}
                    </div>
                  )}
                </div>

                {/* Content Box */}
                <div className="p-5 flex flex-col flex-grow">
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3.5">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-2.5 py-0.5 text-[11px] font-semibold rounded-full ${project.tagColor} shadow-sm border border-black/5 dark:border-white/5`}
                      >
                        {tag}
                      </span>
                    ))}

                    {project.tags.length > 3 && (
                      <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-black/5 dark:border-white/5">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-5 leading-relaxed line-clamp-3 flex-grow">
                    {project.description}
                  </p>

                  {/* Footer Actions */}
                  <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800/60 mt-auto">
                    <div className="flex gap-3 w-full">
                      {project.demoUrl && project.demoUrl !== "#" && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                        >
                          <ExternalLink size={13} />
                          Live Demo
                        </a>
                      )}

                      {project.githubUrl && project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                        >
                          <Github size={14} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Empty layout fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400">
            No projects found in this category.
          </div>
        )}

        {/* GitHub Central Button */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/dulanachathurma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Check My GitHub
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
};
