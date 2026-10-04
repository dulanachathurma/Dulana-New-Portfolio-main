import { Brain, Code, Database, FolderGit2, Briefcase, GraduationCap, Heart, Star, Zap, Sparkles, Server } from "lucide-react";
import profileImg from "../assets/dulana.jpeg";

export const AboutSection = () => {
  const stats = [
    { value: "17+", label: "Projects Completed", icon: FolderGit2 },
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
      title: "Cloud & Systems Architecture", 
      description: "Building scalable backends, RESTful APIs, and deploying modern web applications using Node.js, Express, Git, and Cloud platforms.",
      icon: Server, 
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative bg-slate-50 dark:bg-black transition-colors duration-300">
      <div className="container mx-auto max-w-5xl relative z-10">

        {/* Section Header - Apple Minimal Style */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-slate-200/60 dark:bg-slate-900/80 text-slate-800 dark:text-cyan-400 text-sm font-medium mb-4 backdrop-blur-sm border border-slate-300/40 dark:border-cyan-500/30 shadow-sm">
            Biography
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-0.5 bg-slate-900 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 mx-auto mb-6 opacity-40"></div>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm">
            Let me introduce myself and my technical background
          </p>
        </div>

        {/* Stats Cards - Clean Apple Light & Dark Blue/Cyan Glow */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div 
              key={stat.label} 
              className="relative group rounded-2xl bg-white dark:bg-slate-950 p-5 text-center border border-slate-200/80 dark:border-slate-800 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_0_25px_rgba(6,182,212,0.15)] transition-all duration-300 hover:-translate-y-1 dark:hover:border-cyan-500/50 dark:hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
            >
              <div className="flex items-center justify-center mb-3">
                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 text-slate-700 dark:text-cyan-400 border border-slate-100 dark:border-cyan-500/20">
                  <stat.icon className="h-5 w-5" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{stat.value}</div>
              <div className="text-xs font-medium text-slate-400 dark:text-slate-500 mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left: Profile Image & Bio Text (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-8">

            {/* Profile Image Container */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 p-2 bg-white dark:bg-slate-950 shadow-md dark:shadow-[0_0_25px_rgba(59,130,246,0.2)]">
                  <img
                    src={profileImg}
                    alt="Dulana Chathurma"
                    className="w-48 h-48 lg:w-full lg:h-auto max-w-[240px] aspect-square rounded-xl object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Minimal Online Status Dot */}
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-4 border-slate-50 dark:border-black rounded-full shadow-sm"></span>
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
                  Currently diving deep into <span className="text-slate-900 dark:text-cyan-400 font-medium">AI, Machine Learning</span>, and <span className="text-slate-900 dark:text-cyan-400 font-medium">Full-Stack Development</span>, I'm constantly pushing boundaries to learn and build impactful systems driven by continuous learning and excellence.
                </p>

                <p>
                  When I'm not coding, you'll find me exploring emerging AI tech, writing technical articles on Medium, or building impactful full-stack and machine learning solutions.
                </p>
              </div>

              {/* Passion tags - Updated with AI Enthusiast */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
                <span className="px-3 py-1 rounded-lg bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium flex items-center gap-1.5 shadow-sm dark:shadow-[0_0_12px_rgba(6,182,212,0.15)]">
                  <Heart size={12} className="text-slate-400 dark:text-cyan-400" /> Code with Passion
                </span>
                <span className="px-3 py-1 rounded-lg bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium flex items-center gap-1.5 shadow-sm dark:shadow-[0_0_12px_rgba(6,182,212,0.15)]">
                  <Zap size={12} className="text-slate-400 dark:text-cyan-400" /> Adaptive Learner
                </span>
                <span className="px-3 py-1 rounded-lg bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium flex items-center gap-1.5 shadow-sm dark:shadow-[0_0_12px_rgba(6,182,212,0.15)]">
                  <Star size={12} className="text-slate-400 dark:text-cyan-400" /> Problem Solver
                </span>
                <span className="px-3 py-1 rounded-lg bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium flex items-center gap-1.5 shadow-sm dark:shadow-[0_0_12px_rgba(6,182,212,0.15)]">
                  <Sparkles size={12} className="text-slate-400 dark:text-cyan-400" /> AI Enthusiast
                </span>
              </div>
            </div>
          </div>

          {/* Right: Feature cards (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {features.map((feature) => (
              <div 
                key={feature.title} 
                className="group relative bg-white dark:bg-slate-950 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-[0_4px_24px_rgba(0,0,0,0.02)] dark:shadow-[0_0_25px_rgba(6,182,212,0.12)] transition-all duration-300 hover:border-slate-400 dark:hover:border-cyan-500/60 dark:hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-cyan-400 border border-slate-100 dark:border-cyan-500/20 shrink-0 transition-colors duration-300 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-cyan-500 dark:group-hover:text-black">
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
