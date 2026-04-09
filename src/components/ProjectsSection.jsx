import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
    title: "Todo App",
    description: "A clean Todo App built using Java and PostgreSQL for task management.",
    image: "/project-todo-app.jpg",
    tags: ["Java", "PostgreSQL"],
    demoUrl: "https://github.com/dulanachathurma/Todo-App",
    githubUrl: "https://github.com/dulanachathurma/Todo-App",
    date: "2025",
    tagColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
  },
  {
    id: 9,
    title: "ATM Mini Project",
    description: "ATM simulation program using C, functions, switch cases, and complete banking logic.",
    image: "/project-atm-system.jpg",
    tags: ["C", "Banking Logic"],
    demoUrl: "https://github.com/dulanachathurma/ATM-Bank-Project-System",
    githubUrl: "https://github.com/dulanachathurma/ATM-Bank-Project-System",
    date: "2025",
    tagColor: "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300"
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
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            My Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700"
            >
              {/* Image Container with Overlay */}
              <div className="relative h-52 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                    <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                {/* Action Buttons */}
                <div className="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex space-x-3">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:gap-2"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300 hover:gap-2"
                      >
                        <Github size={16} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Bottom Gradient Line */}
              <div className="h-1 w-full bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
       <div className="text-center mt-12">
  <a
    className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
    target="_blank"
    rel="noopener noreferrer"
    href="https://github.com/dulanachathurma"
  >
    Check My GitHub <ArrowRight size={16} />
  </a>
</div>
      </div>
    </section>
  );
};