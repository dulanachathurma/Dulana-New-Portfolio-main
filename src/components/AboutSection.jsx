import { useState, useEffect } from "react";
import { Brain, Code, FolderGit2, Briefcase, GraduationCap, Heart, Star, Zap, Sparkles, Server, Github, Building2, Award } from "lucide-react";
import GitHubCalendar from "react-github-calendar";

import profileImg from "../assets/dulana.jpeg";
import profileImg2 from "../assets/Profile.jpg";

const images = [profileImg, profileImg2];

export const AboutSection = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [current]);

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
      description: "Creating complete web applications with Spring Boot, React.js and MySQL.",
      icon: Code,
    },
    {
      title: "Cloud & Systems Architecture",
      description: "Building scalable backends, RESTful APIs and deploying modern web applications using Node.js, Express, Git and Cloud platforms.",
      icon: Server,
    },
  ];

  // Contributed Organizations List
  const organizations = [
    { name: "@wso2", url: "https://github.com/wso2", avatar: "https://github.com/wso2.png" },
    { name: "@ballerina-platform", url: "https://github.com/ballerina-platform", avatar: "https://github.com/ballerina-platform.png" },
    { name: "@doocs (LeetCode)", url: "https://github.com/doocs", avatar: "https://github.com/doocs.png" },
    { name: "@code50", url: "https://github.com/code50", avatar: "https://github.com/code50.png" },
    { name: "@me50", url: "https://github.com/me50", avatar: "https://github.com/me50.png" },
  ];

  // GitHub Achievements List
  const achievements = [
    { name: "Pull Shark x2", desc: "Merged PRs", img: "https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png" },
    { name: "Pair Extraordinaire", desc: "Co-authored code", img: "https://github.githubassets.com/assets/pair-extraordinaire-default-4122822a43b3.png" },
    { name: "YOLO", desc: "Merged without review", img: "https://github.githubassets.com/assets/yolo-default-be282f10d051.png" },
    { name: "Quickdraw", desc: "Closed issue/PR quickly", img: "https://github.githubassets.com/assets/quickdraw-default-39c6eefef397.png" },
  ];

  // Official GitHub light and dark color schemes
  const githubTheme = {
    light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  };

  return (
    <section id="about" className="py-24 px-4 relative bg-slate-50 dark:bg-black transition-colors duration-300">
      <div className="container mx-auto max-w-6xl relative z-10">

        {/* Section Header - Apple Minimal Style */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-slate-200/80 dark:bg-slate-900/90 text-slate-800 dark:text-cyan-400 text-sm font-medium mb-4 backdrop-blur-sm border border-slate-300 dark:border-cyan-500/50 shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
            Biography
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight">
            About Me
          </h2>
          <div className="w-12 h-0.5 bg-slate-900 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-blue-500 mx-auto mb-6 opacity-60"></div>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
            Let me introduce myself and my technical background
          </p>
        </div>

        {/* Stats Cards - Wide Spreading Glow */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative group rounded-2xl bg-white dark:bg-[#090d16] p-6 text-center border border-slate-300 dark:border-blue-500/60 shadow-[0_10px_35px_rgba(0,0,0,0.1)] dark:shadow-[0_0_35px_rgba(6,182,212,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 dark:hover:border-cyan-400 dark:hover:shadow-[0_0_45px_rgba(6,182,212,0.65)]"
            >
              <div className="flex items-center justify-center mb-3">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-cyan-400 border border-slate-200 dark:border-cyan-500/30">
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{stat.value}</div>
              <div className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Top Grid: Profile Card & Enhanced My Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">

          {/* Left: Profile Image Slider */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative group w-full max-w-[320px] lg:max-w-none">
              <div className="relative rounded-3xl p-2 bg-white dark:bg-[#090d16] border border-slate-300 dark:border-blue-500/60 shadow-[0_15px_45px_rgba(0,0,0,0.14)] dark:shadow-[0_0_50px_rgba(6,182,212,0.45)] transition-all duration-500 group-hover:shadow-[0_20px_55px_rgba(0,0,0,0.2)] dark:group-hover:shadow-[0_0_65px_rgba(6,182,212,0.65)]">
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-slate-200 dark:bg-slate-900">
                  {images.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt="Dulana Chathurma"
                      className={`absolute inset-0 w-full h-full object-cover object-top transition-all duration-1000 ease-out ${
                        i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
                      }`}
                    />
                  ))}
                  <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                  
                  <div className="absolute left-3 right-3 bottom-10 px-4 py-2.5 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 text-white pointer-events-none">
                    <p className="text-sm font-semibold tracking-tight leading-tight">Dulana Chathurma</p>
                    <p className="text-[11px] text-white/80 leading-tight mt-0.5">Software Engineering Undergraduate</p>
                  </div>

                  <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        aria-label={`Show photo ${i + 1}`}
                        onClick={() => setCurrent(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === current ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <span className="absolute -bottom-1.5 -right-1.5 w-5 h-5 bg-emerald-500 border-4 border-slate-50 dark:border-black rounded-full shadow-sm"></span>
            </div>
          </div>

          {/* Right: Expanded My Journey Text */}
          <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              My Journey
            </h3>

            <div className="space-y-5 text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300 font-normal max-w-3xl">
              <p>
                I'm <strong className="text-slate-900 dark:text-white font-semibold">Dulana Chathurma</strong>, a Software Engineering undergraduate at the University of Kelaniya. My passion lies in creating innovative solutions that bridge complex technical challenges with user-friendly experiences.
              </p>

              <p>
                Currently diving deep into <span className="text-slate-900 dark:text-cyan-400 font-semibold">AI, Machine Learning</span> and <span className="text-slate-900 dark:text-cyan-400 font-semibold">Full-Stack Development</span>, I'm constantly pushing boundaries to learn and build impactful systems driven by continuous learning and excellence.
              </p>

              <p>
                When I'm not coding, you'll find me exploring emerging AI tech, writing technical articles on Medium, or building impactful full-stack and machine learning solutions.
              </p>
            </div>

            {/* Glowing Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-3">
              <span className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-[#090d16] border border-slate-300 dark:border-blue-500/50 text-slate-700 dark:text-slate-200 text-xs md:text-sm font-medium flex items-center gap-2 shadow-[0_4px_16px_rgba(0,0,0,0.08)] dark:shadow-[0_0_20px_rgba(6,182,212,0.35)]">
                <Heart size={14} className="text-slate-500 dark:text-cyan-400" /> Code with Passion
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-[#090d16] border border-slate-300 dark:border-blue-500/50 text-slate-700 dark:text-slate-200 text-xs md:text-sm font-medium flex items-center gap-2 shadow-[0_4px_16px_rgba(0,0,0,0.08)] dark:shadow-[0_0_20px_rgba(6,182,212,0.35)]">
                <Zap size={14} className="text-slate-500 dark:text-cyan-400" /> Adaptive Learner
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-[#090d16] border border-slate-300 dark:border-blue-500/50 text-slate-700 dark:text-slate-200 text-xs md:text-sm font-medium flex items-center gap-2 shadow-[0_4px_16px_rgba(0,0,0,0.08)] dark:shadow-[0_0_20px_rgba(6,182,212,0.35)]">
                <Star size={14} className="text-slate-500 dark:text-cyan-400" /> Problem Solver
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-[#090d16] border border-slate-300 dark:border-blue-500/50 text-slate-700 dark:text-slate-200 text-xs md:text-sm font-medium flex items-center gap-2 shadow-[0_4px_16px_rgba(0,0,0,0.08)] dark:shadow-[0_0_20px_rgba(6,182,212,0.35)]">
                <Sparkles size={14} className="text-slate-500 dark:text-cyan-400" /> AI Enthusiast
              </span>
            </div>
          </div>

        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-white dark:bg-[#090d16] rounded-2xl p-6 border border-slate-300 dark:border-blue-500/60 shadow-[0_10px_35px_rgba(0,0,0,0.1)] dark:shadow-[0_0_35px_rgba(6,182,212,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-400 dark:hover:border-cyan-400 dark:hover:shadow-[0_0_45px_rgba(6,182,212,0.65)]"
            >
              <div className="flex flex-col items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-cyan-400 border border-slate-200 dark:border-cyan-500/30 shrink-0 transition-colors duration-300 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-cyan-500 dark:group-hover:text-black">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="text-left space-y-2">
                  <h4 className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-normal">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live GitHub Contribution Graph Card */}
        <div className="rounded-2xl bg-white dark:bg-[#090d16] p-6 md:p-8 border border-slate-300 dark:border-blue-500/60 shadow-[0_10px_35px_rgba(0,0,0,0.1)] dark:shadow-[0_0_35px_rgba(6,182,212,0.4)] space-y-8">
          
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-cyan-400 border border-slate-200 dark:border-cyan-500/30">
              <Github className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-slate-900 dark:text-white tracking-tight">
                GitHub Contributions
              </h3>
              <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
                My live activity grid from GitHub (@dulanachathurma)
              </p>
            </div>
          </div>

          {/* Activity Graph */}
          <div className="flex justify-center overflow-x-auto py-2 text-slate-800 dark:text-slate-200">
            <GitHubCalendar 
              username="dulanachathurma"
              blockSize={13}
              blockMargin={4}
              fontSize={14}
              theme={githubTheme}
            />
          </div>

          {/* Bottom Grid: Organizations & Achievements */}
          <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Contributed Organizations */}
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-slate-500 dark:text-cyan-400" />
                <span className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  Contributed Organizations
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2.5">
                {organizations.map((org) => (
                  <a
                    key={org.name}
                    href={org.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-slate-400 dark:hover:border-cyan-400/60 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200 shadow-sm"
                  >
                    <img
                      src={org.avatar}
                      alt={org.name}
                      className="w-5 h-5 rounded-md object-cover bg-slate-200 dark:bg-slate-800"
                      onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                    <span className="text-xs font-medium">{org.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* GitHub Achievements Badges */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-slate-500 dark:text-cyan-400" />
                <span className="text-xs md:text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  GitHub Achievements
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {achievements.map((item) => (
                  <div
                    key={item.name}
                    title={`${item.name} - ${item.desc}`}
                    className="group/badge relative flex items-center justify-center p-1.5 rounded-xl bg-slate-100 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all duration-200 shadow-sm hover:scale-105"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
