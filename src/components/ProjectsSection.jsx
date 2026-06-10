import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";


const projects = [
  {
    id: 1,
    title: "VisionScope AI",
    description: "AI-powered real-time human feature detection system with webcam analysis, face & eye tracking, image upload processing, and drowsiness detection alerts for driver safety. Built using Flask, OpenCV, MediaPipe, React, and Machine Learning technologies.",
    image: "/project-visionscope-ai.jpg",
    tags: ["Python", "Flask", "OpenCV", "MediaPipe", "React.js", "Machine Learning"],
    demoUrl: "",
    githubUrl: "https://github.com/dulanachathurma/VisionScope-AI",
    date: "2026",
    tagColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
  },
  {
    id: 2,
    title: "GPA Calculator App",
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
  description: "A fully functional CRUD (Create, Read, Update, Delete) web application developed to strengthen backend development skills and database management. It allows users to create, view, update, and delete records with a simple and responsive interface.",
  image: "/project-crud-app.jpg",
  securityImage: "/security-update.jpg",
  tags: ["HTML5", "CSS3", "PHP", "MySQL"],
  demoUrl: "https://dulanacrud.infy.click",
  githubUrl: "https://github.com/dulanachathurma/My-Crud-App",
  date: "May 2026 – Jun 2026",
  tagColor: "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300"
},
  {
    id: 3,
    title: "CarePoint Medical Center",
    description: "Modern healthcare web application designed for easy doctor search, appointment booking, and seamless patient experience. Features doctor search, online appointment booking, secure payment simulation, ambulance contact access, and a fully responsive user interface.",
    image: "/project-medical-center.jpg",
    tags: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://dulanamedical.netlify.app",
    githubUrl: "#",
    date: "2026",
    tagColor: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300"
  },

  {
    id: 4,
    title: "Amazon Clone Website",
    description: "A simple e-commerce web application inspired by Amazon, designed to simulate an online shopping experience with a clean and interactive interface. Features product browsing, add-to-cart functionality, responsive layout, and interactive UI elements.",
    image: "/project-amazon-clone.jpg",
    tags: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://github.com/dulanachathurma/Amazon-Clone",
    githubUrl: "https://github.com/dulanachathurma/Amazon-Clone",
    date: "2026",
    tagColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300"
  },
  {
    id: 5,
    title: "User Management Application",
    description: "Full-stack CRUD web application developed using Spring Boot, React.js, JavaScript, and MySQL. The system allows efficient user data management with a structured backend and a responsive front-end interface.",
    image: "/project-user-management.jpg",
    tags: ["Java", "JavaScript", "Spring Boot", "React.js", "MySQL", "Full-Stack"],
    demoUrl: "https://github.com/dulanachathurma/User-Management-Application",
    githubUrl: "https://github.com/dulanachathurma/User-Management-Application",
    date: "Sep 2025 – Oct 2025",
    tagColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300"
  },
  {
    id: 6,
    title: "Sriseta Official Website",
    description: "Modern astrology website with live horoscopes, service booking, WhatsApp integration, and mobile-friendly design. Features auto-updating predictions, interactive zodiac slider, and contact forms.",
    image: "/project-astrology-website.jpg",
    tags: ["React.js", "HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://dulanachathurma.github.io/Astrology-Services-App/",
    githubUrl: "https://github.com/dulanachathurma/Astrology-Services-App",
    date: "Dec 2025 – Present",
    tagColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"
  },
  {
    id: 7,
    title: "TravelScope Website",
    description: "A comprehensive travel platform showcasing Sri Lanka's beauty, built with modern web technologies. This project represents my passion for both technology and promoting Sri Lankan tourism.",
    image: "/project-travelscope.jpg",
    tags: ["React.js", "HTML5", "CSS3", "JavaScript", "Google Maps API"],
    demoUrl: "https://dulanachathurma.github.io/TravelScope/#home",
    githubUrl: "https://github.com/dulanachathurma/TravelScope",
    date: "2025",
    tagColor: "bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300"
  },
  {
    id: 8,
    title: "WeatherSphere Pro App",
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
    description: "This is a simple stopwatch application built with React. It allows users to start, pause, and reset the timer. The interface is clean and responsive, displaying the elapsed time in milliseconds, seconds, and minutes.",
    image: "/stopwatch-app.jpg",
    tags: ["React.js"],
    demoUrl: "https://dulanawatch.netlify.app/",
    githubUrl: "https://github.com/dulanachathurma/My-Stop-watch",
    date: "Apr 2026 – Apr 2026",
    tagColor: "bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300"
  },
  {
    id: 10,
    title: "AI Career & University Recommendation System",
    description: "Building an AI-Based Career Path Prediction and University Recommendation System that helps students make informed decisions. Analyzes academic profiles, interests, and market trends to suggest optimal career paths and matching universities.",
    image: "/project-ai-career.jpg",
    tags: ["Python", "Machine Learning", "AI", "Recommendation System", "Flask"],
    demoUrl: "https://medium.com/@dulanachathurma99/ai-career-university-recommendation-system-2cfafe7d9842",
    githubUrl: "#",
    date: "Mar 2026 – Present",
    tagColor: "bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300"
  },
  {
    id: 11,
    title: "YouTube Frontend UI Clone",
    description: "YouTube-inspired homepage UI, built entirely with HTML5 & CSS3. Replicates the look and feel of YouTube's interface with clean, modern styling.",
    image: "/project-youtube-clone.jpg",
    tags: ["HTML5", "CSS3", "Responsive"],
    demoUrl: "https://dulanachathurma.github.io/YouTube-Interface/",
    githubUrl: "https://github.com/dulanachathurma/YouTube-Interface",
    date: "2025",
    tagColor: "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300"
  },
  {
    id: 12,
    title: "Intelligent Career Skill Analysis Platform (NexGenAI)",
    description: "NexGenAI is LIVE! An AI-powered career platform that analyzes CVs, maps skills intelligently, and provides career recommendations along with ATS scores in seconds. Features dynamic skill dashboards and career match predictions.",
    image: "/project-nexgenai.jpg",
    tags: ["React", "TailwindCSS", "HTML5", "CSS3", "AI Resume Analysis"],
    demoUrl: "https://dulanachathurma.github.io/Intelligent-Career-Skill-Analysis-Platform/",
    githubUrl: "https://github.com/dulanachathurma/Intelligent-Career-Skill-Analysis-Platform",
    date: "Feb 2026 – Mar 2026",
    tagColor: "bg-fuchsia-100 dark:bg-fuchsia-900/50 text-fuchsia-700 dark:text-fuchsia-300"
  }
];


export const ProjectsSection = () => {
  const [showImage, setShowImage] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div key={project.id} className="rounded-xl p-5 shadow-lg">

              <img src={project.image} alt={project.title} />

              <h3 className="font-bold text-xl mt-2">{project.title}</h3>

              <p className="text-sm text-gray-600">{project.description}</p>

              <div className="pt-3 border-t">

                {project.securityImage && (
                  <button
                    onClick={() => {
                      setSelectedImage(project.securityImage);
                      setShowImage(true);
                    }}
                    className="w-full mb-3 px-4 py-2 bg-orange-600 text-white rounded-lg"
                  >
                    View Security Update
                  </button>
                )}

                <div className="flex gap-3">

                  {project.demoUrl && project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-green-600 text-white rounded"
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  )}

                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1 bg-gray-800 text-white rounded"
                    >
                      <Github size={14} /> Code
                    </a>
                  )}

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/dulanachathurma"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full"
          >
            Check My GitHub <ArrowRight size={16} />
          </a>
        </div>

        {/* MODAL (IMPORTANT) */}
        {showImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setShowImage(false)}
          >
            <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowImage(false)}
                className="absolute -top-10 right-0 text-white text-4xl"
              >
                ×
              </button>

              <img
                src={selectedImage}
                alt="Security Update"
                className="w-full rounded-xl"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
