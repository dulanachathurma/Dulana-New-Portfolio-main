import { useEffect, useRef, useState } from "react";
import { ArrowRight, ExternalLink, Github, Users, Layers, Cpu, Code2 } from "lucide-react";

const projects = [
  // ==========================================
  // 1. FEATURED SYSTEMS & ADVANCED WORK (Chronological: Latest First)
  // ==========================================

  
  {
  id: 6,
  title: "Sriseta Official Website",
  category: "featured", // Updated
  description: "Full-stack AI-driven astrology platform with live horoscopes, Gemini AI prediction engine, secure JWT authentication, auto-updating web scraper and WhatsApp booking integration.", // Enhanced description
  image: "/project-astrology-website1.jpg",
  tags: ["React 19", "Node.js", "MongoDB", "Google Gemini AI", "Tailwind CSS"], // Updated to reflect real tech stack
  demoUrl: "https://sriseta.vercel.app",
  githubUrl: "https://github.com/dulanachathurma/sriseta-astrology-platform",
  date: "Dec 2025",
  tagColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"
},
  
  {
    id: 24, 
    title: "VoxBridge AI System",
    category: "featured",
    description: "An advanced, low-latency, real-time speech-to-speech interpreter capturing system audio from live streams and meetings. Powered by Google Gemini 2.5 Flash with dynamic VAD chunking and auto-ducking audio control.",
    image: "/voxbridge-ai.jpg", 
    tags: ["React", "Node.js", "Socket.IO", "WebRTC", "Google Gemini API", "Web Audio API"],
    githubUrl: "https://github.com/dulanachathurma/Realtime-Live-Videos-Translator.git", 
    date: "Oct 2026",
    tagColor: "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300"
  },
  {
    id: 22,
    title: "HealthPulse AI - Full-Stack Mobile & Web Companion",
    category: "featured",
    description: "Cloud-Native Trilingual Health Platform featuring real-time BMI tracking analytics, symptom-driven smart doctor recommendations and health vitals logging.",
    image: "/project-health.jpg",
    tags: ["React", "Node.js", "Express", "MongoDB", "Chart.js", "TailwindCSS"],
    githubUrl: "https://github.com/dulanachathurma/Vitacare-mobile-fullstack",
    date: "Oct 2026",
    tagColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300"
  },
  {
    id: 21,
    title: "AstroPulse-AIOps Observability Gateway",
    category: "featured",
    description: "A Cloud-Native Integration Gateway built with Ballerina and Python that uses Claude AI to analyze microservice telemetry logs and generate real-time automated Root Cause Analysis (RCA).",
    image: "/project-astropulse-aiops.jpg",
    tags: ["Ballerina", "Python", "React", "Claude AI", "AIOps", "TailwindCSS"],
    githubUrl: "https://github.com/dulanachathurma/AstroPulse-AIOps",
    date: "Sep 2026",
    tagColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300"
  },
  {
    id: 18,
    title: "Bare-Metal x86 Operating System",
    category: "featured",
    description: "A custom-built, bare-metal x86 operating system featuring a bootloader, round-robin process scheduler, multithreading, memory management (PMM & Heap) and a RAM disk file system.",
    image: "/project-os.jpg", 
    tags: ["C", "Assembly", "OS Development", "QEMU", "Systems Programming"],
    githubUrl: "https://github.com/dulanachathurma/seng21213-os",
    date: "Aug 2026 – Sep 2026",
    tagColor: "bg-slate-100 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300"
  },
  {
    id: 17,
    title: "NexaTask – Modern Task Management Platform",
    category: "featured",
    description: "Modern full-stack task management web app featuring JWT authentication, real-time search, priority-based sorting, dynamic dashboard analytics and schedule tracking.",
    image: "/project-nexatask.jpg",
    tags: ["Full-Stack", "React", "Node.js", "JWT", "TailwindCSS", "Express"],
    githubUrl: "https://github.com/dulanachathurma/NexaTask",
    date: "Mar 2026 – Apr 2026",
    tagColor: "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300"
  },
  {
    id: 1,
    title: "VisionScope AI",
    category: "featured",
    description: "AI-powered real-time human feature detection system with webcam analysis, face & eye tracking, image upload processing and drowsiness detection alerts for driver safety.",
    image: "/project-visionscope-ai.jpg",
    tags: ["Python", "Flask", "OpenCV", "MediaPipe", "React.js", "Machine Learning"],
    githubUrl: "https://github.com/dulanachathurma/VisionScope-AI",
    date: "Jan 2026 – Feb 2026",
    tagColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
  },

  // ==========================================
  // 2. GROUP & ACADEMIC PROJECTS (Chronological Order)
  // ==========================================
  {
    id: 23,
    title: "AuraTouch AI System",
    category: "group",
    isGroup: true,
    myRole: "Computer Vision Lead & Gesture Mapping",
    description: "An AI-powered computer vision system enabling touchless desktop navigation and mouse control via real-time hand gesture tracking using OpenCV and MediaPipe.",
    image: "/gesture-mouse1.jpg",
    tags: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI", "Computer Vision", "Team Project"],
    githubUrl: "https://github.com/dulanachathurma/AI-Gesture-Mouse.git",
    date: "Oct 2026",
    tagColor: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300"
  },
  {
    id: 20,
    title: "CLI Sales Report Generator",
    category: "group",
    isGroup: true,
    myRole: "Core Java Logic & Unit Testing (JUnit 5)",
    description: "A Java command-line application that parses CSV sales data, performs calculations and generates formatted output using Strategy design pattern and JUnit 5 testing.",
    image: "/project-sales-reporter.jpg",
    tags: ["Java", "OOP", "Strategy Pattern", "JUnit 5", "CLI"],
    githubUrl: "https://github.com/dulanachathurma/SENG-21222-Sales-Report-Generator",
    date: "Aug 2026 – Sep 2026",
    tagColor: "bg-fuchsia-100 dark:bg-fuchsia-900/50 text-fuchsia-700 dark:text-fuchsia-300"
  },
  {
    id: 13,
    title: "Pet Care Management System",
    category: "group",
    isGroup: true,
    myRole: "Backend Developer & Booking Logic",
    description: "A full-stack web application designed to streamline pet care service bookings and administrative operations with secure dashboards and role-based access control.",
    image: "/project-petcare.jpg",
    tags: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Git Workflow"],
    githubUrl: "https://github.com/kavindugimshan/Pet-Care-System",
    date: "Aug 2026",
    tagColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
    contributors: [
      { name: "Kavindu Gimshan", username: "kavindugimshan", avatarUrl: "https://github.com/kavindugimshan.png", profileUrl: "https://github.com/kavindugimshan" },
      { name: "Chanindu Iman...", username: "Chanindulmanjith", avatarUrl: "https://github.com/Chanindulmanjith.png", profileUrl: "https://github.com/Chanindulmanjith" },
      { name: "Minindu", username: "Rajapakshaminindu", avatarUrl: "https://github.com/Rajapakshaminindu.png", profileUrl: "https://github.com/Rajapakshaminindu" },
      { name: "DULANA CHAT...", username: "dulanachathurma", avatarUrl: "https://github.com/dulanachathurma.png", profileUrl: "https://github.com/dulanachathurma" }
    ]
  },
  {
    id: 19,
    title: "Vehicle Spare Parts E-Commerce & Management System",
    category: "group",
    isGroup: true,
    myRole: "Full-Stack Developer & Database Architecture",
    description: "A collaborative full-stack web application built to streamline inventory, product cataloging, AJAX live filtering and order management processes with real-time tracking.",
    image: "/project-spareparts.jpg", 
    tags: ["PHP", "MySQL", "JavaScript", "AJAX", "E-Commerce", "Team Collaboration"],
    demoUrl: "http://spareparts.kesug.com",
    githubUrl: "https://github.com/dulanachathurma/Vehicle-Spare-Parts",
    date: "Jul 2026 – Aug 2026",
    tagColor: "bg-fuchsia-100 dark:bg-fuchsia-900/50 text-fuchsia-700 dark:text-fuchsia-300"
  },

  // ==========================================
  // 3. MINI & PERSONAL PROJECTS (Chronological Order)
  // ==========================================
  {
    id: 14,
    title: "My PHP CRUD App",
    category: "mini",
    description: "CRUD web application developed to strengthen backend database management skills with a responsive UI.",
    image: "/project-crud-app.jpg",
    tags: ["HTML5", "CSS3", "PHP", "MySQL"],
    demoUrl: "https://dulanacrud.infy.click",
    githubUrl: "https://github.com/dulanachathurma/My-Crud-App",
    date: "May 2026 – Jun 2026",
    tagColor: "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300"
  },
  {
    id: 9,
    title: "React Stopwatch",
    category: "mini",
    description: "Simple stopwatch application built with React allowing users to start, pause and reset the timer.",
    image: "/stopwatch-app.jpg",
    tags: ["React.js", "JavaScript"],
    demoUrl: "https://dulanawatch.netlify.app/",
    githubUrl: "https://github.com/dulanachathurma/My-Stop-watch",
    date: "Apr 2026",
    tagColor: "bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300"
  },
  {
    id: 12,
    title: "Intelligent Skill Analysis Platform (NexGenAI)",
    category: "mini",
    description: "AI-powered career platform that analyzes CVs, maps skills intelligently and provides career recommendations along with ATS scores in seconds.",
    image: "/project-nexgenai.jpg",
    tags: ["React", "TailwindCSS", "AI Resume Analysis"],
    demoUrl: "https://dulanachathurma.github.io/Intelligent-Career-Skill-Analysis-Platform/",
    githubUrl: "https://github.com/dulanachathurma/Intelligent-Career-Skill-Analysis-Platform",
    date: "Feb 2026 – Mar 2026",
    tagColor: "bg-fuchsia-100 dark:bg-fuchsia-900/50 text-fuchsia-700 dark:text-fuchsia-300"
  },
  {
    id: 2,
    title: "GPA Calculator App",
    category: "mini",
    description: "Academic GPA tracking web application that allows students to calculate Semester GPA, Year GPA and Cumulative GPA across multiple academic years.",
    image: "/project-gpa-calculator.jpg",
    tags: ["React 19", "Vite", "Tailwind CSS", "JavaScript"],
    demoUrl: "https://dcgpa.vercel.app/",
    githubUrl: "https://github.com/dulanachathurma/GPA-Calculator-App",
    date: "Jan 2026",
    tagColor: "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300"
  },
  {
    id: 3,
    title: "CarePoint Medical Center",
    category: "mini",
    description: "Healthcare web application designed for doctor search, appointment booking, payment simulation and ambulance access.",
    image: "/project-medical-center.jpg",
    tags: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://dulanamedical.netlify.app",
    githubUrl: "#",
    date: "Jan 2026",
    tagColor: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300"
  },

  {
    id: 8,
    title: "WeatherSphere Pro App",
    category: "mini",
    description: "Responsive weather application providing real-time weather updates with OpenWeather API integration.",
    image: "/project-weather-app.jpg",
    tags: ["React.js", "Weather API", "JavaScript"],
    demoUrl: "https://dulanachathurma.github.io/WeatherSphere-Pro/",
    githubUrl: "https://github.com/dulanachathurma/WeatherSphere-Pro",
    date: "Dec 2025",
    tagColor: "bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300"
  },
  {
    id: 7,
    title: "TravelScope Website",
    category: "mini",
    description: "Travel platform showcasing Sri Lanka's tourism, integrated with Google Maps API and responsive layouts.",
    image: "/project-travelscope.jpg",
    tags: ["React.js", "JavaScript", "Google Maps API"],
    demoUrl: "https://dulanatravel.vercel.app",
    githubUrl: "https://github.com/dulanachathurma/TravelScope-Website-Project",
    date: "Nov 2025",
    tagColor: "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300"
  },
  {
    id: 11,
    title: "YouTube Frontend UI Clone",
    category: "mini",
    description: "YouTube-inspired homepage UI, built entirely with HTML5 & CSS3 to replicate YouTube's layout.",
    image: "/project-youtube-clone.jpg",
    tags: ["HTML5", "CSS3", "Responsive Design"],
    demoUrl: "https://dulanachathurma.github.io/YouTube-Interface/",
    githubUrl: "https://github.com/dulanachathurma/YouTube-Interface",
    date: "Oct 2025",
    tagColor: "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300"
  }
];

export const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("all");
  const canvasRef = useRef(null);

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  // --- INTERACTIVE GRAPH CANVAS ---
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
    <section id="projects" className="py-24 px-4 relative bg-[#f5f5f7] dark:bg-[#0a101d] overflow-hidden transition-colors duration-500">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 transform-gpu"
        style={{ willChange: "transform" }}
      />

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
            Featured Projects & Engineering Work
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-6" />

          <p className="text-[#86868b] dark:text-[#94a3b8] max-w-2xl mx-auto text-sm sm:text-base">
            Architected and built scalable systems, AI algorithms, low-level software and collaborative team applications.
          </p>
        </div>

        {/* Navigation Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-1.5 bg-slate-200/60 dark:bg-[#1e293b]/60 p-1.5 rounded-2xl backdrop-blur-sm border border-slate-300/50 dark:border-blue-500/20">
            
            <button
              onClick={() => setActiveTab("all")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "all"
                  ? "bg-blue-600 text-white shadow-md scale-105"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              <Layers size={15} /> All Projects
            </button>

            <button
              onClick={() => setActiveTab("featured")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "featured"
                  ? "bg-blue-600 text-white shadow-md scale-105"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              <Cpu size={15} /> Featured Systems & AI
            </button>

            <button
              onClick={() => setActiveTab("group")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "group"
                  ? "bg-blue-600 text-white shadow-md scale-105"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              <Users size={15} /> Group & Academic Projects
            </button>

            <button
              onClick={() => setActiveTab("mini")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "mini"
                  ? "bg-blue-600 text-white shadow-md scale-105"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
              }`}
            >
              <Code2 size={15} /> Personal Apps & Utilities
            </button>

          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative rounded-2xl transition-all duration-500 flex flex-col h-full">
              
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-600/0 via-cyan-500/0 to-blue-600/0 dark:from-blue-600/20 dark:via-cyan-400/15 dark:to-blue-600/20 blur-lg opacity-100 dark:group-hover:opacity-100 dark:group-hover:blur-xl transition-all duration-500 pointer-events-none" />

              <div className="relative bg-white/90 dark:bg-[#111827]/90 backdrop-blur-md border border-slate-300/80 dark:border-blue-500/30 dark:group-hover:border-cyan-400/60 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03),0_20px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_0_20px_rgba(30,58,138,0.25)] dark:group-hover:shadow-[0_0_35px_rgba(56,189,248,0.3)] group-hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col h-full">
                
                {/* Image Box */}
                <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Group Project Tag */}
                  {project.isGroup && (
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-indigo-600/90 text-white text-[10px] font-bold tracking-wider uppercase backdrop-blur-md flex items-center gap-1.5 shadow-md">
                      <Users size={12} /> Team Project
                    </div>
                  )}

                  {project.date && (
                    <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm text-white text-[11px] font-medium tracking-wide">
                      📅 {project.date}
                    </div>
                  )}
                </div>

                {/* Content Box */}
                <div className="p-5 flex flex-col flex-grow">
                  
                  {/* Tech Stack Tags */}
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
                  <h3 className="text-lg font-bold mb-1.5 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Group Role Mention */}
                  {project.myRole && (
                    <div className="mb-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                      <span className="opacity-75">My Role:</span> {project.myRole}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-5 leading-relaxed line-clamp-3 flex-grow">
                    {project.description}
                  </p>

                  {/* Actions Footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-800/60 mt-auto">
                    <div className="flex gap-3 w-full">
                      {project.demoUrl && project.demoUrl !== "#" && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                        >
                          <ExternalLink size={13} /> Live Demo
                        </a>
                      )}

                      {project.githubUrl && project.githubUrl !== "#" && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
                        >
                          <Github size={14} /> Code Base
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Empty Fallback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400">
            No projects found in this category.
          </div>
        )}

        {/* GitHub Button & Divider */}
        <div className="relative w-full max-w-5xl mx-auto mt-16 flex flex-col items-center justify-center">
          <a
            href="https://github.com/dulanachathurma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Check My GitHub
            <ArrowRight size={16} />
          </a>

          <div className="relative w-full flex items-center justify-center pt-28 pb-8">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 dark:via-cyan-400/60 to-transparent" />
            <div className="absolute w-3/4 h-[4px] bg-gradient-to-r from-transparent via-blue-600/50 dark:via-cyan-400/80 to-transparent blur-[4px]" />
            <div className="absolute w-40 h-[2px] bg-gradient-to-r from-transparent via-sky-400 dark:via-white to-transparent blur-[0.5px] shadow-[0_0_15px_rgba(56,189,248,0.9)]" />
          </div>
        </div>

      </div>
    </section>
  );
};
