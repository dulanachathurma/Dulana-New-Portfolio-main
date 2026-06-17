import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useState } from "react";

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
    demoUrl: "https://dulanachathurma.github.io/Astrology-Services-App/",
    githubUrl: "https://github.com/dulanachathurma/Astrology-Services-App",
    date: "Dec 2025 – Present",
    tagColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"
  },
  {
    id: 10,
    title: "AI Career & University Recommendation System",
    category: "major",
    description: "Building an AI-Based Career Path Prediction and University Recommendation System that helps students make informed decisions. Analyzes academic profiles, interests, and market trends to suggest optimal career paths and matching universities.",
    image: "/project-ai-career.jpg",
    tags: ["Python", "Machine Learning", "AI", "Recommendation System", "Flask"],
    demoUrl: "https://medium.com/@dulanachathurma99/ai-career-university-recommendation-system-2cfafe7d9842",
    githubUrl: "#",
    date: "Mar 2026 – Present",
    tagColor: "bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300"
  },
  {
  id: 4,
  title: "TaskFlow",
  category: "major",
  description: "A modern full-stack task management application built with React, Node.js, Express, and MongoDB Atlas. Features JWT authentication, task creation and management, priority-based task sorting, secure user accounts, responsive design, and real-time database integration for efficient productivity management.", 
  image: "/project-taskflow.jpg",
  tags: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
  githubUrl: "https://github.com/dulanachathurma/Task-Flow",
  date: "2026",
  tagColor: "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300"
},
  {
    id: 12,
    title: "Intelligent Career Skill Analysis Platform (NexGenAI)",
    category: "major",
    description: "NexGenAI is LIVE! An AI-powered career platform that analyzes CVs, maps skills intelligently, and provides career recommendations along with ATS scores in seconds. Features dynamic skill dashboards and career match predictions.",
    image: "/project-nexgenai.jpg",
    tags: ["React", "TailwindCSS", "HTML5", "CSS3", "AI Resume Analysis"],
    demoUrl: "https://dulanachathurma.github.io/Intelligent-Career-Skill-Analysis-Platform/",
    githubUrl: "https://github.com/dulanachathurma/Intelligent-Career-Skill-Analysis-Platform",
    date: "Feb 2026 – Mar 2026",
    tagColor: "bg-fuchsia-100 dark:bg-fuchsia-900/50 text-fuchsia-700 dark:text-fuchsia-300"
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

  const filteredProjects = projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-24 px-4 relative bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">

        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            My Portfolio
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Featured Projects
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-6" />

          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
          </p>
        </div>

        {/* Professional Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-slate-200/60 dark:bg-slate-800/60 p-1.5 rounded-xl backdrop-blur-sm border border-slate-300/50 dark:border-slate-700/50">
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

        {/* Projects Grid with Smooth Animation Mapping */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br from-white to-slate-50/50 dark:from-slate-900 dark:to-slate-800/80 border border-slate-200 dark:border-slate-700/60"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {project.date && (
                  <div className="absolute bottom-3 left-3 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm text-white text-xs font-medium">
                    📅 {project.date}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span
                      key={idx}
                      className={`px-2.5 py-1 text-xs font-medium rounded-full ${project.tagColor} shadow-sm`}
                    >
                      {tag}
                    </span>
                  ))}

                  {project.tags.length > 4 && (
                    <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-5 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

             {/* Footer Actions */}
<div className="flex justify-between items-center pt-3 border-t border-slate-100 dark:border-slate-700">
  <div className="flex gap-3 w-full">
    {project.demoUrl && project.demoUrl !== "#" && (
      <a
        href={project.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
      >
        <ExternalLink size={14} />
        Live Demo
      </a>
    )}

    {project.githubUrl && project.githubUrl !== "#" && (
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1.5 text-sm font-semibold px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
      >
        <Github size={16} />
        Code
      </a>
    )}
  </div>
</div>
              </div>
            </div>
          ))}
        </div>

        {/* empty layout fallback if no projects exist in filtered category */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400">
            No projects found in this category.
          </div>
        )}

        {/* GitHub Button */}
        <div className="text-center mt-12">
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
