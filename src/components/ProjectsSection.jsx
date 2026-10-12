const projects = [
  // ==========================================
  // 1. FEATURED SYSTEMS & ADVANCED WORK (Chronological: Most Recent First)
  // ==========================================
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
    description: "Cloud-Native Trilingual Health Platform featuring real-time BMI tracking analytics, symptom-driven smart doctor recommendations, and health vitals logging.",
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
    description: "A custom-built, bare-metal x86 operating system featuring a bootloader, round-robin process scheduler, multithreading, memory management (PMM & Heap), and a RAM disk file system.",
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
    description: "Modern full-stack task management web app featuring JWT authentication, real-time search, priority-based sorting, dynamic dashboard analytics, and schedule tracking.",
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
    description: "AI-powered real-time human feature detection system with webcam analysis, face & eye tracking, image upload processing, and drowsiness detection alerts for driver safety.",
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
    description: "A Java command-line application that parses CSV sales data, performs calculations, and generates formatted output using Strategy design pattern and JUnit 5 testing.",
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
    description: "A collaborative full-stack web application built to streamline inventory, product cataloging, AJAX live filtering, and order management processes with real-time tracking.",
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
    description: "Simple stopwatch application built with React allowing users to start, pause, and reset the timer.",
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
    description: "AI-powered career platform that analyzes CVs, maps skills intelligently, and provides career recommendations along with ATS scores in seconds.",
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
    description: "Academic GPA tracking web application that allows students to calculate Semester GPA, Year GPA, and Cumulative GPA across multiple academic years.",
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
    description: "Healthcare web application designed for doctor search, appointment booking, payment simulation, and ambulance access.",
    image: "/project-medical-center.jpg",
    tags: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://dulanamedical.netlify.app",
    githubUrl: "#",
    date: "Jan 2026",
    tagColor: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300"
  },
  {
    id: 6,
    title: "Sriseta Official Website",
    category: "mini",
    description: "Modern astrology website with live horoscopes, service booking, WhatsApp integration, auto-updating predictions, and interactive sliders.",
    image: "/project-astrology-website.jpg",
    tags: ["React.js", "HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://sriseta.vercel.app",
    githubUrl: "https://github.com/dulanachathurma/sriseta-astrology-platform",
    date: "Dec 2025",
    tagColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"
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
