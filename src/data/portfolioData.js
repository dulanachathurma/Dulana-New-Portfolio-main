// Portfolio Data - එක තැනක් update කළාම හැමතැනම auto update වෙයි!

export const portfolioData = {
  // Personal Info
  name: "Dulana Chathurma",
  title: "AI/ML Software Engineer",
  shortName: "Dulana",
  
  // Hero Section
  hero: {
    greeting: "I'm",
    name: "Dulana Chathurma",
    role: "Aspiring AI/ML Software Engineer | Enthusiastic about Mobile App Design & Development",
    education: "Pursuing B.Sc (Honours) in Software Engineering (UG) – University of Kelaniya",
    tags: ["AI", "ML", "Mobile Apps", "Software Engineering", "Problem Solving", "Full-Stack", "Spring Boot"],
    profileImage: "/dulana-profile-circle.jpg",
    cvLink: "/Dulana-Chathurma-CV.pdf"
  },
  
  // About Section
  about: {
    journey: "I'm Dulana Chathurma, a passionate Software Engineering (UG) student at the University of Kelaniya. My passion lies in creating innovative solutions that bridge complex technical challenges with user-friendly experiences.",
    focus: "Currently diving deep into AI, Machine Learning, and Full-Stack Development, I'm constantly pushing boundaries to learn and build impactful systems. My journey started with curiosity and has evolved into a career driven by continuous learning and excellence.",
    passion: "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, writing technical articles on Medium, or sharing knowledge with the developer community. I believe in writing clean, maintainable code that makes a real difference.",
    stats: [
      { value: "100+", label: "Projects Completed", icon: "Award" },
      { value: "5+", label: "Happy Clients", icon: "Users" },
      { value: "5+", label: "Years of Experience", icon: "Calendar" },
      { value: "20+", label: "Technologies Mastered", icon: "Cpu" }
    ],
    features: [
      { title: "AI & Machine Learning", description: "Building intelligent systems and prediction models using Python and ML algorithms.", icon: "Brain" },
      { title: "Full-Stack Development", description: "Creating complete web applications with Spring Boot, React.js, and MySQL.", icon: "Code" },
      { title: "Database Management", description: "Designing and implementing efficient database solutions with MySQL and PostgreSQL.", icon: "Database" }
    ]
  },
  
  // Skills
  skills: [
    { name: "Java", icon: "/icon-java.png" },
    { name: "Python", icon: "/icon-python.png" },
    { name: "C", icon: "/icon-c-language.png" },
    { name: "JavaScript", icon: "/icon-javascript.png" },
    { name: "HTML", icon: "/icon-html-css.png" },
    { name: "CSS", icon: "/icon-html-css1.png" },
    { name: "AI / ML", icon: "/icon-ai-ml.png" },
    { name: "MySQL", icon: "/icon-mysql.png" },
    { name: "Spring Boot", icon: "/icon-spring-boot.png" },
    { name: "React.js", icon: "/icon-react.png" }
  ],
  
  // Education
  education: [
    {
      degree: "BSc (Honours) in Software Engineering",
      institution: "University of Kelaniya",
      location: "Sri Lanka",
      date: "Mar 2025 - Apr 2029",
      image: "/education-software-engineering.jpg",
      skills: ["Mathematics for Computing", "Communication Skills", "C language", "Database", "PHP Frameworks", "Python", "CSS", "JavaScript", "PHP", "Java", "PMAT", "Data Structures", "MySQL", "Statistical Data Analysis", "HTML", "OOP"]
    },
    {
      degree: "G.C.E Advanced Level Examination 2023(2024)",
      institution: "H/ Rajapaksa National College",
      location: "Weeraketiya, Sri Lanka",
      date: "2023 (2024)",
      image: "/education-al.jpg",
      skills: ["Combined Mathematics: A", "Physics: B", "Chemistry: B"]
    }
  ],
  
  // Experience
  experiences: [
    {
      title: "Gavel Club - University of Kelaniya",
      location: "Kelaniya, Sri Lanka",
      date: "2023 - Present",
      description: "Faculty Coordinator for social services, organizing events and activities that benefit the community.",
      image: "/experience-gavel-club.jpg",
      link: "https://www.linkedin.com/in/dulana-chathurma/overlay/1759575211729/single-media-viewer",
      linkText: "View Photo"
    },
    {
      title: "GitHub Dev Day",
      location: "University of Kelaniya · Hybrid",
      date: "Apr 2026 - Present · 1 mo",
      description: "Successfully completed the GitHub for Beginners program and participated in GitHub Dev Day Sri Lanka, led by Nisal Gunawardhana. Gained hands-on experience in Git fundamentals, branching, collaboration, and modern development workflows using GitHub.",
      image: "/github-logo.png",
      link: "https://nisalgunawardhana.com/github-dev-day/badge/nt6smxx1nvpxmnlk2tw8",
      linkText: "View Badge"
    },
    {
      title: "Student Participant – Safe Migration Program",
      location: "International Organization for Migration · On-site",
      date: "Dec 2025 · 1 mo",
      description: "Participated in a Safe Migration awareness program organized by the Rotaract Club of University of Kelaniya. Gained knowledge on international career opportunities and migration safety.",
      image: "/abc.jpg",
      link: "https://media.licdn.com/dms/image/v2/D562DAQEgBgMu9UoEXA/profile-treasury-image-shrink_1920_1920/B56Z1b0FqnIAAc-/0/1775361877824",
      linkText: "View Photo"
    },
    {
      title: "Traveling Experiences",
      location: "Sri Lanka",
      date: "Aug 2024 - Present · 1 yr 9 mos",
      description: "Managing a travel and lifestyle YouTube page focused on exploring Sri Lanka 🇱🇰✈️. Developed skills in video editing, AI tools usage, and Canva-based photo editing to create engaging digital content.",
      image: "/youtube-logo.png",
      link: "https://www.linkedin.com/in/dulana-chathurma/overlay/Position/2741267109/treasury/",
      linkText: "View Work"
    },
    {
      title: "Central Environmental Authority, Sri Lanka",
      location: "Beliatta, Sri Lanka",
      date: "2020 - 2022",
      description: "School Environmental Pioneer Service Group member at H/Beliatta National College Environmental Pioneer Team. Achieved 3 ranking logos for outstanding contributions.",
      image: "/experience-environmental-authority.jpg",
      link: "https://www.linkedin.com/in/dulana-chathurma/overlay/volunteering-experiences/551584802/multiple-media-viewer",
      linkText: "View Photo"
    }
  ],
  
  // Projects
  projects: [
    {
      id: 1,
      title: "CarePoint Medical Center",
      description: "Modern healthcare web application designed for easy doctor search, appointment booking, and seamless patient experience. Features doctor search, online appointment booking, secure payment simulation, ambulance contact access, and a fully responsive user interface.",
      image: "/project-medical-center.jpg",
      tags: ["HTML5", "CSS3", "JavaScript"],
      demoUrl: "https://dulanamedical.netlify.app",
      githubUrl: "#",
      date: "2026"
    },
    {
      id: 2,
      title: "Amazon Clone Website",
      description: "A simple e-commerce web application inspired by Amazon, designed to simulate an online shopping experience with a clean and interactive interface.",
      image: "/project-amazon-clone.jpg",
      tags: ["HTML5", "CSS3", "JavaScript"],
      demoUrl: "https://github.com/dulanachathurma/Amazon-Clone",
      githubUrl: "https://github.com/dulanachathurma/Amazon-Clone",
      date: "2026"
    },
    {
      id: 3,
      title: "User Management Application",
      description: "Full-stack CRUD web application developed using Spring Boot, React.js, JavaScript, and MySQL. The system allows efficient user data management with a structured backend and a responsive front-end interface.",
      image: "/project-user-management.jpg",
      tags: ["Java", "JavaScript", "Spring Boot", "React.js", "MySQL", "Full-Stack"],
      demoUrl: "https://github.com/dulanachathurma/User-Management-Application",
      githubUrl: "https://github.com/dulanachathurma/User-Management-Application",
      date: "Sep 2025 – Oct 2025"
    },
    {
      id: 4,
      title: "Sriseta Official Website",
      description: "Modern astrology website with live horoscopes, service booking, WhatsApp integration, and mobile-friendly design. Features auto-updating predictions, interactive zodiac slider, and contact forms.",
      image: "/project-astrology-website.jpg",
      tags: ["React.js", "HTML5", "CSS3", "JavaScript"],
      demoUrl: "https://dulanachathurma.github.io/Astrology-Services-App/",
      githubUrl: "https://github.com/dulanachathurma/Astrology-Services-App",
      date: "Dec 2025 – Present"
    },
    {
      id: 5,
      title: "TravelScope Website",
      description: "A comprehensive travel platform showcasing Sri Lanka's beauty, built with modern web technologies.",
      image: "/project-travelscope.jpg",
      tags: ["React.js", "HTML5", "CSS3", "JavaScript", "Google Maps API"],
      demoUrl: "https://dulanachathurma.github.io/TravelScope/#home",
      githubUrl: "https://github.com/dulanachathurma/TravelScope",
      date: "2025"
    },
    {
      id: 6,
      title: "WeatherSphere Pro App",
      description: "Responsive weather web application providing real-time weather updates with a clean interface. Built using React.js, HTML, CSS, and JavaScript.",
      image: "/project-weather-app.jpg",
      tags: ["React.js", "HTML5", "CSS3", "JavaScript", "Weather API"],
      demoUrl: "https://dulanachathurma.github.io/WeatherSphere-Pro/",
      githubUrl: "https://github.com/dulanachathurma/WeatherSphere-Pro",
      date: "Dec 2025 – Present"
    },
    {
      id: 7,
      title: "Todo App",
      description: "A clean Todo App built using Java and PostgreSQL for task management.",
      image: "/project-todo-app.jpg",
      tags: ["Java", "PostgreSQL"],
      demoUrl: "https://github.com/dulanachathurma/Todo-App",
      githubUrl: "https://github.com/dulanachathurma/Todo-App",
      date: "2025"
    },
    {
      id: 8,
      title: "ATM Mini Project",
      description: "ATM simulation program using C, functions, switch cases, and complete banking logic.",
      image: "/project-atm-system.jpg",
      tags: ["C", "Banking Logic"],
      demoUrl: "https://github.com/dulanachathurma/ATM-Bank-Project-System",
      githubUrl: "https://github.com/dulanachathurma/ATM-Bank-Project-System",
      date: "2025"
    },
    {
      id: 9,
      title: "AI Career & University Recommendation System",
      description: "AI-Based Career Path Prediction and University Recommendation System that helps students make informed decisions.",
      image: "/project-ai-career.jpg",
      tags: ["Python", "Machine Learning", "AI", "Recommendation System", "Flask"],
      demoUrl: "https://medium.com/@dulanachathurma99/ai-career-university-recommendation-system-2cfafe7d9842",
      githubUrl: "#",
      date: "Mar 2026 – Present"
    },
    {
      id: 10,
      title: "YouTube Frontend UI Clone",
      description: "YouTube-inspired homepage UI, built entirely with HTML5 & CSS3.",
      image: "/project-youtube-clone.jpg",
      tags: ["HTML5", "CSS3", "Responsive"],
      demoUrl: "https://dulanachathurma.github.io/YouTube-Interface/",
      githubUrl: "https://github.com/dulanachathurma/YouTube-Interface",
      date: "2025"
    },
    {
      id: 11,
      title: "Intelligent Career Skill Analysis Platform (NexGenAI)",
      description: "AI-powered career platform that analyzes CVs, maps skills intelligently, and provides career recommendations along with ATS scores.",
      image: "/project-nexgenai.jpg",
      tags: ["React", "TailwindCSS", "HTML5", "CSS3", "AI Resume Analysis"],
      demoUrl: "https://dulanachathurma.github.io/Intelligent-Career-Skill-Analysis-Platform/",
      githubUrl: "https://github.com/dulanachathurma/Intelligent-Career-Skill-Analysis-Platform",
      date: "Feb 2026 – Mar 2026"
    }
  ],
  
  // Contact Info
  contact: {
    email: "dulanachathurma99@gmail.com",
    phone: "+94 76 75 74 844",
    address: "Kopiwatta, Getamanna, Beliatta, Hambantota District, Sri Lanka",
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.207289909686!2d80.75844177499636!3d6.049260593952773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae142b6c8b5b5a5%3A0x8a0b8c8c8c8c8c8c!2sKopiwatta%2C%20Getamanna%2C%20Beliatta!5e0!3m2!1sen!2slk!4v1690000000000!5m2!1sen!2slk",
    social: {
      linkedin: "https://linkedin.com/in/dulana-chathurma",
      github: "https://github.com/dulanachathurma",
      medium: "https://medium.com/@dulanachathurma99",
      whatsapp: "https://wa.me/94767574844",
      email: "mailto:dulanachathurma99@gmail.com"
    }
  },
  
  // Footer
  footer: {
    copyright: "Dulana Chathurma",
    year: new Date().getFullYear()
  }
};

export default portfolioData;