import { Brain, Code, Database, FolderGit2, Briefcase, GraduationCap, Heart, Star, Zap } from "lucide-react";
import profileImg from "../assets/dulana.jpeg";

export const AboutSection = () => {
  const stats = [
    { value: "11+", label: "Projects Completed", icon: FolderGit2 },
    { value: "2+", label: "Years of Experience", icon: Briefcase },
    { value: "2nd Year", label: "Undergraduate", icon: GraduationCap },
  ];

  const features = [
    { 
      title: "AI & Machine Learning", 
      description: "Building intelligent systems and prediction models using Python and ML algorithms.",
      icon: Brain, 
    },
    { 
      title: "Full-Stack Development", 
      description: "Creating complete web applications with Spring Boot, React.js, and MySQL.",
      icon: Code, 
    },
    { 
      title: "Database Management", 
      description: "Designing and implementing efficient database solutions with MySQL and PostgreSQL.",
      icon: Database, 
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Section Header - Apple Minimal Style */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-slate-200/50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200 text-sm font-medium mb-4 backdrop-blur-sm border border-slate-300/30 dark:border-slate-700/30">
            Biography
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-0.5 bg-slate-900 dark:bg-white mx-auto mb-6 opacity-30"></div>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm">
            Let me introduce myself and my technical background
          </p>
        </div>

        {/* Stats Cards - Premium Clean Style */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div 
              key={stat.label} 
              className="bg-white dark:bg-slate-900 rounded-2xl p-5 text-center border border-slate-200/60 dark:border-slate-800/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-center mb-3">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-800/60">
                  <stat.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{stat.value}</div>
              <div className="text-xs font-medium text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Text content & Profile Image (Spans 5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-8">
            
            {/* Profile Image Container - Premium Square/Rounded Cut */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 p-2 bg-white dark:bg-slate-900 shadow-md">
                  <img
                    src={profileImg}
                    alt="Dulana Chathurma"
                    className="w-48 h-48 lg:w-full lg:h-auto max-w-[240px] aspect-square rounded-xl object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Minimal Online Status Dot */}
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-4 border-slate-50 dark:border-slate-950 rounded-full shadow-sm"></span>
              </div>
            </div>

            <div className="text-center lg:text-left space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                My Journey
              </h3>

              <div className="space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 font-normal">
                <p>
                  I'm <strong className="text-slate-900 dark:text-white font-semibold">Dulana Chathurma</strong>, a Software Engineering undergraduate at the University of Kelaniya. My passion lies in creating innovative solutions that bridge complex technical challenges with user-friendly experiences.
                </p>

                <p>
                  Currently diving deep into <span className="text-slate-900 dark:text-white font-medium">AI, Machine Learning</span>, and <span className="text-slate-900 dark:text-white font-medium">Full-Stack Development</span>, I'm constantly pushing boundaries to learn and build impactful systems driven by continuous learning and excellence.
                </p>

                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, writing technical articles on Medium, or sharing knowledge with the developer community.
                </p>
              </div>

              {/* Passion tags - Apple Elegant Monochrome Tags */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
                <span className="px-3 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 text-slate-700 dark:text-slate-400 text-xs font-medium flex items-center gap-1.5 shadow-sm">
                  <Heart size={12} className="text-slate-400" /> Code with Passion
                </span>
                <span className="px-3 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 text-slate-700 dark:text-slate-400 text-xs font-medium flex items-center gap-1.5 shadow-sm">
                  <Zap size={12} className="text-slate-400" /> Adaptive Learner
                </span>
                <span className="px-3 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800/80 text-slate-700 dark:text-slate-400 text-xs font-medium flex items-center gap-1.5 shadow-sm">
                  <Star size={12} className="text-slate-400" /> Problem Solver
                </span>
              </div>
            </div>
          </div>

          {/* Right: Feature cards (Spans 7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {features.map((feature) => (
              <div 
                key={feature.title} 
                className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/60 dark:border-slate-800/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-slate-400 dark:hover:border-slate-600 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border border-slate-100 dark:border-slate-800/60 shrink-0 transition-colors duration-300 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div className="text-left space-y-1.5">
                    <h4 className="font-bold text-base text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
                      {feature.title}
                    </h4>
                    <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
