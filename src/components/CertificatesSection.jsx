import { useEffect, useRef } from "react";
import { ExternalLink, Calendar, MapPin, Award } from "lucide-react";

const certificates = [
  // University of Moratuwa 
  {
    id: 1,
    title: "Python for Beginners",
    organization: "University of Moratuwa",
    location: "Moratuwa, Sri Lanka",
    date: "Oct 2025",
    description: "Introduction to programming and Python through the University of Moratuwa's Open Learning platform covering core programming fundamentals.",
    image: "/certificate-online-courses.jpg",
    logoImg: "University_of_Moratuwa_logo.png",
    logoText: "UoM",
    logoBg: "bg-indigo-600",
    skills: ["Python Programming", "Introduction to Programming", "Software Development"],
    viewCertificateUrl: "https://open.uom.lk/lms/mod/customcert/view.php?id=675&downloadown=1",
    tagColor: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300"
  },
  {
    id: 2,
    title: "Web Design for Beginners",
    organization: "University of Moratuwa",
    location: "Moratuwa, Sri Lanka",
    date: "Oct 2025",
    description: "Foundational web design course covering HTML, CSS and modern web development practices through the University of Moratuwa Open Learning platform.",
    image: "/certificate-online-courses1.jpg",
    logoImg: "University_of_Moratuwa_logo.png",
    logoText: "UoM",
    logoBg: "bg-indigo-600",
    skills: ["HTML", "Cascading Style Sheets (CSS)", "Web Design", "UI Basics"],
    viewCertificateUrl: "https://open.uom.lk/lms/mod/customcert/view.php?id=697&downloadown=1",
    tagColor: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300"
  },
  {
    id: 3,
    title: "Advanced Python Programming",
    organization: "Dept. of Computer Science & Engineering, University of Moratuwa",
    location: "Moratuwa, Sri Lanka",
    date: "Apr 2026",
    description: "Advanced-level Python course by the Department of CS & Engineering at UoM, covering AI, Machine Learning, and advanced software engineering with Python.",
    image: "/certificate-online-courses2.jpg",
    logoImg: "University_of_Moratuwa_logo.png",
    logoText: "UoM",
    logoBg: "bg-indigo-600",
    skills: ["Python Programming", "AI", "Machine Learning"],
    viewCertificateUrl: "https://open.uom.lk/lms/mod/customcert/view.php?id=838&downloadown=1",
    tagColor: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300"
  },

  // Dekma Institute
  {
    id: 4,
    title: "Diploma in English (CERF Level B1)",
    organization: "Dekma Institute Matara",
    location: "Matara, Sri Lanka",
    date: "Jun 2024 - Dec 2024",
    description: "Comprehensive English language program focusing on communication, writing proficiency, and spoken English at CERF B1 level.",
    image: "/certificate-english-diploma.jpg",
    logoImg: "oxford.png",
    logoText: "DI",
    logoBg: "bg-emerald-600",
    skills: ["Communication", "Writing English", "Spoken English", "CERF B1"],
    viewCertificateUrl: "https://www.linkedin.com/in/dulana-chathurma/overlay/Certifications/765265356/treasury/?profileId=ACoAAFDfMasBoGUec8AKadGJzB74e0K0BTBPegE",
    tagColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300"
  },

  // Udemy
  {
    id: 5,
    title: "Build Generative AI Apps with No-Code Tools",
    organization: "Udemy",
    location: "Online",
    date: "Oct 2025",
    description: "Hands-on course building Generative AI applications including PDF Chatbot and Receipt Chatbot using no-code and low-code tools.",
    image: "/certificate-udemy-courses1.jpg",
    logoImg: "Udemy_logo.png",
    logoText: "U",
    logoBg: "bg-purple-600",
    skills: ["Generative AI", "PDF Chatbot", "Receipt Chatbot", "No-Code"],
    viewCertificateUrl: "https://www.udemy.com/certificate/UC-1574a301-ef07-4bf3-99b7-5e9bfca6b716/",
    tagColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"
  },
  {
    id: 6,
    title: "Full Stack Web & Mobile App Development | MERN Stack",
    organization: "Udemy",
    location: "Online",
    date: "Oct 2025",
    description: "Comprehensive MERN Stack course covering React.js, State & Event Forms, and 9+ additional skills for full stack web and mobile application development.",
    image: "/certificate-udemy-courses2.jpg",
    logoImg: "Udemy_logo.png",
    logoText: "U",
    logoBg: "bg-purple-600",
    skills: ["React.js", "MERN Stack", "Full Stack", "Mobile Development"],
    viewCertificateUrl: "https://www.udemy.com/certificate/UC-ec191fa2-27b7-4249-8769-e8839a904032/",
    tagColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"
  },
  {
    id: 7,
    title: "Generative AI for Beginners",
    organization: "Udemy",
    location: "Online",
    date: "Oct 2025",
    description: "Introductory course on Generative AI and Machine Learning fundamentals covering modern AI tools and techniques for beginners.",
    image: "/certificate-udemy-courses3.jpg",
    logoImg: "Udemy_logo.png",
    logoText: "U",
    logoBg: "bg-purple-600",
    skills: ["Generative AI", "Machine Learning", "AI Tools"],
    viewCertificateUrl: "https://www.udemy.com/certificate/UC-f0f045c8-41ac-4fe2-96fa-8ba8a961f3ce/",
    tagColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"
  },
  {
    id: 8,
    title: "HTML, CSS & JavaScript - Certification Course for Beginners",
    organization: "Udemy",
    location: "Online",
    date: "Oct 2025",
    description: "Complete beginner course covering HTML, CSS, and JavaScript for building modern websites and understanding front-end web development.",
    image: "/certificate-udemy-courses4.jpg",
    logoImg: "Udemy_logo.png",
    logoText: "U",
    logoBg: "bg-purple-600",
    skills: ["HTML", "CSS", "JavaScript", "Web Development"],
    viewCertificateUrl: "https://www.udemy.com/certificate/UC-226a83f7-6610-4734-9c04-b6216d8f257a/",
    tagColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"
  },
  {
    id: 9,
    title: "Build Generative AI Apps and Solutions with No-Code Tools",
    organization: "Udemy",
    location: "Online",
    date: "Oct 2025",
    description: "Hands-on beginner course focused on building Generative AI applications using no-code tools, including AI-powered PDF and receipt chatbots.",
    image: "/certificate-udemy-ai.jpg",
    logoImg: "Udemy_logo.png",
    logoText: "U",
    logoBg: "bg-purple-600",
    skills: ["Generative AI", "PDF Chatbot", "Receipt Chatbot", "No-Code AI Tools"],
    viewCertificateUrl: "https://www.udemy.com/certificate/UC-1574a301-ef07-4bf3-99b7-5e9bfca6b716/",
    tagColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"
  },
  {
    id: 10,
    title: "Java Programming for Beginners",
    organization: "Udemy",
    location: "Online",
    date: "Oct 2025",
    description: "Beginner-friendly Java programming course covering programming fundamentals, loops, arrays, strings, structures, and object-oriented programming concepts.",
    image: "/certificate-udemy-java.jpg",
    logoImg: "Udemy_logo.png",
    logoText: "U",
    logoBg: "bg-purple-600",
    skills: ["Java", "For Loop", "While Loop", "Arrays", "Structures", "OOP", "Strings"],
    viewCertificateUrl: "https://www.udemy.com/certificate/UC-4f2803e2-1da6-4447-9be2-f6cc0b362622/",
    tagColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"
  },
  {
    id: 41,
    title: "GitHub Dev Day Sri Lanka",
    organization: "GitHub",
    location: "University of Kelaniya · Hybrid",
    date: "Apr 2026",
    description: "Successfully completed the GitHub for Beginners program and participated in GitHub Dev Day Sri Lanka. Learned Git fundamentals, branching, collaboration, pull requests, and GitHub workflow.",
    image: "/certificate-github-dev-day.jpg",
    logoImg: "/github-logo.png",
    logoText: "GH",
    logoBg: "bg-gray-900",
    skills: [
      "Git",
      "GitHub",
      "Version Control",
      "Branching",
      "Pull Requests",
      "Collaboration",
      "Open Source"
    ],
    viewCertificateUrl: "https://nisalgunawardhana.com/github-dev-day/badge/nt6smxx1nvpxmnlk2tw8",
    tagColor: "bg-gray-100 dark:bg-gray-900/50 text-gray-700 dark:text-gray-300"
  },

  // HackerRank
  {
    id: 11,
    title: "SQL (Basic) Certificate",
    organization: "HackerRank",
    location: "Online",
    date: "Nov 2025",
    description: "Skill assessment certifying foundational SQL proficiency including queries, joins, and database management with MySQL.",
    image: "/certificate-hackerrank1.jpg",
    logoImg: "HackerRank.png",
    logoText: "HR",
    logoBg: "bg-green-600",
    skills: ["SQL", "MySQL", "Database Management"],
    viewCertificateUrl: "https://www.hackerrank.com/certificates/iframe/b36c14090ce1",
    tagColor: "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300"
  },
  {
    id: 12,
    title: "CSS (Basic) Certificate",
    organization: "HackerRank",
    location: "Online",
    date: "Nov 2025",
    description: "Skill assessment certifying foundational CSS proficiency covering selectors, layouts, and cascading style sheet techniques.",
    image: "/certificate-hackerrank2.jpg",
    logoImg: "HackerRank.png",
    logoText: "HR",
    logoBg: "bg-green-600",
    skills: ["CSS", "Web Styling", "Layouts"],
    viewCertificateUrl: "https://www.hackerrank.com/certificates/iframe/26a32f7f5087",
    tagColor: "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300"
  },

  // Microsoft
  {
    id: 13,
    title: "Software Construction",
    organization: "Microsoft",
    location: "Online",
    date: "Feb 2026",
    description: "Version control with Git & GitHub, continuous integration, shift-left testing, and shift-left security — core modern software construction workflow.",
    image: "/certificate-microsoft.jpg",
    logoImg: "Microsoft_logo.png",
    logoText: "MS",
    logoBg: "bg-blue-600",
    skills: ["Git & GitHub", "CI/CD", "DevOps", "Software Testing"],
    viewCertificateUrl: "https://www.linkedin.com/in/dulana-chathurma/overlay/Certifications/1914716060/treasury/?profileId=ACoAAFDfMasBoGUec8AKadGJzB74e0K0BTBPegE",
    tagColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
  },
  {
    id: 14,
    title: "Requirement Engineering",
    organization: "Microsoft",
    location: "Online",
    date: "Feb 2026",
    description: "Agile methodology, planning with GitHub Projects, user stories, backlogs, and iterative requirement tracking — practical requirement engineering in industry tools.",
    image: "/certificate-microsoft.jpg",
    logoImg: "Microsoft_logo.png",
    logoText: "MS",
    logoBg: "bg-blue-600",
    skills: ["Agile", "GitHub Projects", "User Stories", "Backlogs"],
    viewCertificateUrl: "https://www.linkedin.com/in/dulana-chathurma/overlay/Certifications/319800522/treasury/?profileId=ACoAAFDfMasBoGUec8AKadGJzB74e0K0BTBPegE",
    tagColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
  },
  {
    id: 15,
    title: "Software Modeling",
    organization: "Microsoft",
    location: "Online",
    date: "Feb 2025",
    description: "Cloud solution architecture modeling — compute, networking, storage components and how they compose into system designs on Azure.",
    image: "/certificate-microsoft.jpg",
    logoImg: "Microsoft_logo.png",
    logoText: "MS",
    logoBg: "bg-blue-600",
    skills: ["Azure", "Cloud Architecture", "System Design", "Modeling"],
    viewCertificateUrl: "https://www.linkedin.com/in/dulana-chathurma/overlay/Certifications/324568203/treasury/?profileId=ACoAAFDfMasBoGUec8AKadGJzB74e0K0BTBPegE",
    tagColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
  },
  {
    id: 16,
    title: "Introduction to DevOps",
    organization: "Microsoft",
    location: "Online",
    date: "Feb 2026",
    description: "DevOps transformation, continuous integration, validated learning, cycle time optimization, and testing strategies — industry standard for modern software V&V pipelines.",
    image: "/certificate-microsoft.jpg",
    logoImg: "Microsoft_logo.png",
    logoText: "MS",
    logoBg: "bg-blue-600",
    skills: ["DevOps", "CI/CD", "Continuous Integration", "Testing"],
    viewCertificateUrl: "https://www.linkedin.com/in/dulana-chathurma/overlay/Certifications/589557013/treasury/?profileId=ACoAAFDfMasBoGUec8AKadGJzB74e0K0BTBPegE",
    tagColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
  },
  {
    id: 17,
    title: "Embedded Systems Development",
    organization: "Microsoft",
    location: "Online",
    date: "Mar 2026",
    description: "IoT solution architecture, device connectivity, Azure IoT Hub, IoT Edge for embedded edge processing, real-time telemetry, and device management — embedded systems in the cloud era.",
    image: "/certificate-microsoft.jpg",
    logoImg: "Microsoft_logo.png",
    logoText: "MS",
    logoBg: "bg-blue-600",
    skills: ["Azure IoT", "Embedded Systems", "IoT Hub", "Edge Computing"],
    viewCertificateUrl: "https://learn.microsoft.com/api/achievements/share/en-gb/TWDulanaChathurma-0789/HZSGG4H8?sharingId=597FD76CF96E1E8B",
    tagColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
  },

  // AWS
  {
    id: 18,
    title: "AWS Well-Architected Foundations",
    organization: "Amazon Web Services (AWS)",
    location: "Online",
    date: "Feb 2026",
    description: "Industry-standard framework covering six pillars: operational excellence, security, reliability, performance, cost optimization, and sustainability with directly applicable design patterns.",
    image: "/certificate-aws1.jpg",
    logoImg: "Amazon_Web_Services_Logo.png",
    logoText: "AWS",
    logoBg: "bg-amber-500",
    skills: ["Cloud Architecture", "AWS", "Well-Architected", "Security"],
    viewCertificateUrl: "https://www.linkedin.com/in/dulana-chathurma/overlay/Certifications/447340418/treasury/?profileId=ACoAAFDfMasBoGUec8AKadGJzB74e0K0BTBPegE",
    tagColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300"
  },
  {
    id: 19,
    title: "Computer Networks",
    organization: "Amazon Web Services (AWS)",
    location: "Online",
    date: "Feb 2026",
    description: "VPC, subnets, route tables, security groups, NACLs, internet gateways — cloud networking that maps directly to TCP/IP and OSI model concepts.",
    image: "/certificate-aws3.jpg",
    logoImg: "Amazon_Web_Services_Logo.png",
    logoText: "AWS",
    logoBg: "bg-amber-500",
    skills: ["VPC", "Networking", "TCP/IP", "AWS Cloud"],
    viewCertificateUrl: "https://www.linkedin.com/in/dulana-chathurma/overlay/Certifications/324286717/treasury/?profileId=ACoAAFDfMasBoGUec8AKadGJzB74e0K0BTBPegE",
    tagColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300"
  },
  {
    id: 20,
    title: "Computer Architecture & Operating Systems",
    organization: "Amazon Web Services (AWS)",
    location: "Online",
    date: "Feb 2026",
    description: "Core computer architecture and operating systems concepts mapped to AWS cloud infrastructure, covering compute instances, storage layers, and OS-level cloud operations.",
    image: "/certificate-aws2.jpg",
    logoImg: "Amazon_Web_Services_Logo.png",
    logoText: "AWS",
    logoBg: "bg-amber-500",
    skills: ["Computer Architecture", "Operating Systems", "AWS", "Cloud Compute"],
    viewCertificateUrl: "https://www.linkedin.com/in/dulana-chathurma/overlay/Certifications/1912525953/treasury/?profileId=ACoAAFDfMasBoGUec8AKadGJzB74e0K0BTBPegE",
    tagColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300"
  },

  // Google
  {
    id: 21,
    title: "Android Basics with Compose (Unit 1 & 2)",
    organization: "Google for Developers",
    location: "Online",
    date: "Feb 2026",
    description: "Google's official Android course using Kotlin & Jetpack Compose. Covers Kotlin basics, UI building, layouts, state management, and app navigation.",
    image: "/certificate-android-compose.jpg",
    logoImg: "Google_2015_logo.png",
    logoText: "G",
    logoBg: "bg-red-500",
    skills: ["Kotlin", "Jetpack Compose", "Android UI", "State Management"],
    viewCertificateUrl: "https://www.linkedin.com/in/dulana-chathurma/overlay/Certifications/589904754/treasury/?profileId=ACoAAFDfMasBoGUec8AKadGJzB74e0K0BTBPegE",
    tagColor: "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300"
  }
];

export const CertificatesSection = () => {
  const canvasRef = useRef(null);

  // --- INTERACTIVE GRAPH CANVAS WITH MOBILE PERFORMANCE OPTIMIZATION ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    let mouse = { x: null, y: null, radius: 150 };

    // Mobile Check to optimize scroll performance
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
    <section id="certificates" className="py-24 px-4 relative bg-[#f5f5f7] dark:bg-[#0a101d] overflow-hidden transition-colors duration-500">
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
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            Professional Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1d1d1f] dark:text-[#f5f5f7]">
            My Certificates
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-6"></div>
          <p className="text-[#86868b] dark:text-[#94a3b8] max-w-2xl mx-auto text-sm sm:text-base">
            Professional certifications and courses I've completed to enhance my skills.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="group relative rounded-2xl transition-all duration-500 flex flex-col h-full"
            >
              {/* Dark Mode Glowing Background Aura */}
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-600/0 via-cyan-500/0 to-blue-600/0 dark:from-blue-600/20 dark:via-cyan-400/15 dark:to-blue-600/20 blur-lg opacity-100 dark:group-hover:opacity-100 dark:group-hover:blur-xl transition-all duration-500 pointer-events-none" />

              {/* Main Card Container */}
              <div className="relative bg-white/90 dark:bg-[#111827]/90 backdrop-blur-md border border-slate-300/80 dark:border-blue-500/30 dark:group-hover:border-cyan-400/60 rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03),0_20px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_0_20px_rgba(30,58,138,0.25)] dark:group-hover:shadow-[0_0_35px_rgba(56,189,248,0.3)] group-hover:-translate-y-2 transition-all duration-500 ease-out flex flex-col h-full">
                
                {/* Image Container */}
                <div className="relative h-44 overflow-hidden bg-slate-100 dark:bg-slate-800 shrink-0">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 right-3">
                    <div className="w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-5 flex flex-col flex-grow">
                  {/* Organization Logo + Name Row */}
                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div className={`w-8 h-8 rounded-full flex-shrink-0 shadow-sm overflow-hidden ${cert.logoImg ? "bg-white border border-slate-200 dark:border-slate-700 p-1" : `${cert.logoBg} flex items-center justify-center`}`}>
                      {cert.logoImg ? (
                        <img
                          src={cert.logoImg}
                          alt={cert.organization}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            e.target.style.display = "none";
                            e.target.parentElement.classList.remove("bg-white", "border", "border-slate-200", "dark:border-slate-700", "p-1");
                            e.target.parentElement.classList.add(cert.logoBg, "flex", "items-center", "justify-center");
                            const span = document.createElement("span");
                            span.className = "text-white text-[10px] font-bold tracking-wide";
                            span.textContent = cert.logoText;
                            e.target.parentElement.appendChild(span);
                          }}
                        />
                      ) : (
                        <span className="text-white text-[10px] font-bold tracking-wide">
                          {cert.logoText}
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-[#86868b] dark:text-[#94a3b8] leading-tight line-clamp-1">{cert.organization}</p>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold mb-2 text-slate-800 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {cert.title}
                  </h3>

                  {/* Location & Date */}
                  <div className="flex flex-wrap gap-3 text-[11px] text-[#86868b] dark:text-[#94a3b8] mb-3 font-medium">
                    <span className="flex items-center gap-1">
                      <MapPin size={11} className="text-blue-600 dark:text-blue-400" /> {cert.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={11} className="text-blue-600 dark:text-blue-400" /> {cert.date}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-300 text-xs mb-4 leading-relaxed line-clamp-2 flex-grow">
                    {cert.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
                    {cert.skills.slice(0, 2).map((skill, idx) => (
                      <span key={idx} className={`px-2.5 py-0.5 text-[11px] rounded-full ${cert.tagColor} font-semibold shadow-sm border border-black/5 dark:border-white/5`}>
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 2 && (
                      <span className="px-2.5 py-0.5 text-[11px] rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-black/5 dark:border-white/5 font-semibold">
                        +{cert.skills.length - 2}
                      </span>
                    )}
                  </div>

                  {/* View Certificate Button */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 mt-auto">
                    <a
                      href={cert.viewCertificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-1.5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                    >
                      View Certificate <ExternalLink size={13} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* View All LinkedIn Button */}
        <div className="text-center mt-16">
          <a
            href="https://www.linkedin.com/in/dulana-chathurma/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            View All on LinkedIn <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
