import { Brain, Code, Database, FolderGit2, Briefcase, GraduationCap, Sparkles, Rocket, Heart, Star, Zap } from "lucide-react";

export const AboutSection = () => {
  const stats = [
    { value: "11+", label: "Projects Completed", icon: FolderGit2, color: "text-blue-500", bgColor: "bg-blue-500/10" },
    { value: "2+", label: "Years of Experience", icon: Briefcase, color: "text-green-500", bgColor: "bg-green-500/10" },
    { value: "2nd Year", label: "Undergraduate", icon: GraduationCap, color: "text-blue-500", bgColor: "bg-blue-500/10" },
  ];

  const features = [
    { 
      title: "AI & Machine Learning", 
      description: "Building intelligent systems and prediction models using Python and ML algorithms.",
      icon: Brain, 
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
     
      gradient: "from-blue-500/20 to-purple-500/20"
    },
    { 
      title: "Full-Stack Development", 
      description: "Creating complete web applications with Spring Boot, React.js, and MySQL.",
      icon: Code, 
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    { 
      title: "Database Management", 
      description: "Designing and implementing efficient database solutions with MySQL and PostgreSQL.",
      icon: Database, 
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      
      gradient: "from-orange-500/20 to-yellow-500/20"
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 text-4xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 text-4xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 text-3xl opacity-5 animate-bounce"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          About Me<span className="text-primary"></span>
          <span className="inline-block ml-2 text-3xl animate-wave"></span>
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Let me introduce myself <span className="inline-block"></span>
        </p>

        {/* Stats Cards - 3 cards row with colors */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div 
              key={stat.label} 
              className={`${stat.bgColor} backdrop-blur-sm rounded-xl p-4 text-center card-hover border border-${stat.color.split('-')[1]}-200/30 transition-all duration-300 hover:scale-105`}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-2xl">{stat.emoji}</span>
                <stat.icon className={`h-7 w-7 ${stat.color}`} />
              </div>
              <div className={`text-2xl md:text-3xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              My Journey<span className="text-primary"></span>
              <span className="text-2xl"></span>
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              <span className="text-2xl mr-2"></span> 
              I'm <strong className="text-primary text-lg">Dulana Chathurma</strong>, a passionate 2nd year Software Engineering (UG) student at the University of Kelaniya. 
              My passion lies in creating innovative solutions that bridge complex technical challenges with user-friendly experiences.
              <span className="inline-block ml-1"></span>
            </p>

            <p className="text-muted-foreground leading-relaxed">
              <span className="text-xl mr-2"></span>
              Currently diving deep into <strong className="text-purple-500">AI, Machine Learning</strong> and 
              <strong className="text-blue-500"> Full-Stack Development</strong>, I'm constantly pushing boundaries to learn and build impactful systems. 
              With over 2 years of coding experience and 11+ projects completed, my journey started with curiosity and has evolved into a career driven by continuous learning and excellence.
              <span className="inline-block ml-1">⚡</span>
            </p>

            <p className="text-muted-foreground leading-relaxed">
              <span className="text-xl mr-2"></span>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              writing technical articles on Medium, or sharing knowledge with the developer community. 
              I believe in writing clean, maintainable code that makes a real difference.
              <span className="inline-block ml-1"></span>
            </p>

            {/* Passion tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-600 dark:text-pink-400 text-sm flex items-center gap-1">
                <Heart size={14} className="text-pink-500" /> Code with Love
              </span>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-600 dark:text-blue-400 text-sm flex items-center gap-1">
                <Zap size={14} className="text-yellow-500" /> Fast Learner
              </span>
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 text-green-600 dark:text-green-400 text-sm flex items-center gap-1">
                <Star size={14} className="text-yellow-500" /> Problem Solver
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {features.map((feature) => (
              <div 
                key={feature.title} 
                className={`bg-gradient-to-r ${feature.gradient} rounded-xl p-6 card-hover border border-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-full ${feature.bgColor} ${feature.color}`}>
                    <span className="text-xl mr-1">{feature.emoji}</span>
                    <feature.icon className="h-6 w-6 inline-block" />
                  </div>
                  <div className="text-left">
                    <h4 className={`font-semibold text-lg ${feature.color} flex items-center gap-2`}>
                      {feature.title}
                      <span className="text-sm opacity-70 animate-pulse">✦</span>
                    </h4>
                    <p className="text-muted-foreground mt-2">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}

           
          </div>
        </div>
      </div>

      {/* Add custom animations */}
      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          20% { transform: rotate(15deg); }
          40% { transform: rotate(-10deg); }
          60% { transform: rotate(5deg); }
          80% { transform: rotate(-5deg); }
        }
        
        .animate-wave {
          animation: wave 1.5s ease-in-out infinite;
          display: inline-block;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};