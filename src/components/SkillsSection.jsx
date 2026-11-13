import { useState } from "react";
import {
  Code2,
  Smartphone,
  Globe,
  Database,
  Cpu,
  Wrench,
  Sparkles,
} from "lucide-react";

const skillCategories = [
  {
    id: "languages",
    name: "Languages",
    title: "💻 Languages",
    icon: Code2,
    badgeColor: "from-amber-500 to-orange-500",
    badgeGlow: "rgba(245, 158, 11, 0.25)",
    borderHover: "hover:border-amber-500/40",
    description: "Core programming languages powering scalable systems, data structures and algorithms.",
    skillsIconUrl:
      "https://skillicons.dev/icons?i=c,python,java,kotlin,js,ts,php,html,css",
  },
  {
    id: "mobile",
    name: "Mobile Development",
    title: "📱 Mobile Development",
    icon: Smartphone,
    badgeColor: "from-emerald-500 to-teal-500",
    badgeGlow: "rgba(16, 185, 129, 0.25)",
    borderHover: "hover:border-emerald-500/40",
    description: "Modern Android engineering with clean architecture, MVI/MVVM and reactive state.",
    skillsIconUrl: "https://skillicons.dev/icons?i=kotlin,androidstudio,java",
    subtext: (
      <span>
        Built native Android apps with <b>Kotlin</b>, <b>Jetpack Compose</b>, and <b>Java</b>.
      </span>
    ),
  },
  {
    id: "web",
    name: "Web Development",
    title: "🌐 Web Development",
    icon: Globe,
    badgeColor: "from-blue-500 to-cyan-500",
    badgeGlow: "rgba(59, 130, 246, 0.25)",
    borderHover: "hover:border-blue-500/40",
    description: "Full-stack web applications, micro-frontends, REST APIs and responsive UI/UX.",
    skillsIconUrl:
      "https://skillicons.dev/icons?i=html,css,tailwind,bootstrap,js,ts,react,nextjs,nodejs,express,php",
  },
  {
    id: "backend",
    name: "Databases & Backend",
    title: "🗄️ Databases & Backend",
    icon: Database,
    badgeColor: "from-purple-500 to-indigo-500",
    badgeGlow: "rgba(168, 85, 247, 0.25)",
    borderHover: "hover:border-purple-500/40",
    description: "Distributed microservices, relational & NoSQL databases, caching and messaging queues.",
    skillsIconUrl:
      "https://skillicons.dev/icons?i=postgres,mysql,mongodb,ktor,nodejs,express,php",
  },
  {
    id: "ai-vision",
    name: "AI & Computer Vision",
    title: "🤖 AI & Computer Vision",
    icon: Cpu,
    badgeColor: "from-rose-500 to-pink-500",
    badgeGlow: "rgba(244, 63, 94, 0.25)",
    borderHover: "hover:border-rose-500/40",
    description: "Real-time CV pipelines, pose & hand gesture tracking, LLM integrations and neural networks.",
    badges: [
      {
        alt: "OpenCV",
        src: "https://img.shields.io/badge/OPENCV-COMPUTER%20VISION-592E00?style=for-the-badge&logo=opencv&logoColor=white&labelColor=592E00&color=F78104",
      },
      {
        alt: "MediaPipe",
        src: "https://img.shields.io/badge/MEDIAPIPE-HAND%20%26%20GESTURE%20TRACKING-592E00?style=for-the-badge&logo=google&logoColor=white&labelColor=592E00&color=F78104",
      },
      {
        alt: "Gemini AI",
        src: "https://img.shields.io/badge/GEMINI%20AI-LLM%20INTEGRATION-592E00?style=for-the-badge&logo=googlegemini&logoColor=white&labelColor=592E00&color=F78104",
      },
      {
        alt: "TensorFlow & PyTorch",
        src: "https://img.shields.io/badge/TENSORFLOW%20%26%20PYTORCH-DEEP%20LEARNING-592E00?style=for-the-badge&logo=tensorflow&logoColor=white&labelColor=592E00&color=F78104",
      },
    ],
  },
  {
    id: "tools",
    name: "Tools & IDEs",
    title: "🧰 Tools & IDEs",
    icon: Wrench,
    badgeColor: "from-cyan-500 to-teal-500",
    badgeGlow: "rgba(6, 182, 212, 0.25)",
    borderHover: "hover:border-cyan-500/40",
    description: "DevOps tooling, cloud hosting platforms, IDE environments and API inspection.",
    skillsIconUrl:
      "https://skillicons.dev/icons?i=vscode,androidstudio,git,github,postman,figma,apple,linux,aws,vercel",
  },
];

const categoryTabs = [
  "All",
  "Languages",
  "Mobile Development",
  "Web Development",
  "Databases & Backend",
  "AI & Computer Vision",
  "Tools & IDEs",
];

export const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCategories =
    activeTab === "All"
      ? skillCategories
      : skillCategories.filter((cat) => cat.name === activeTab);

  return (
    <section
      id="skills"
      className="py-28 px-4 bg-[#f5f5f7] dark:bg-[#0a101d] transition-colors duration-500 relative overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-500/5 dark:bg-cyan-500/5 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold mb-4 tracking-wider uppercase">
            <Sparkles size={12} /> Technical Expertise
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#f5f5f7] mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-5" />
          <p className="text-sm sm:text-base text-[#86868b] dark:text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
            A comprehensive engineering toolkit built across real-world systems — from native Android and enterprise backends to computer vision and AI agents.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-1.5 bg-slate-200/60 dark:bg-[#1e293b]/60 p-1.5 rounded-2xl backdrop-blur-sm border border-slate-300/50 dark:border-blue-500/20 max-w-4xl">
            {categoryTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow-md scale-105"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className={`group relative rounded-2xl transition-all duration-500 flex flex-col h-full ${cat.borderHover}`}
              >
                {/* Glow Backdrop */}
                <div
                  className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none"
                  style={{ background: cat.badgeGlow }}
                />

                <div className="relative bg-white/90 dark:bg-[#111827]/90 backdrop-blur-md border border-slate-300/80 dark:border-blue-500/30 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03),0_20px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_0_20px_rgba(30,58,138,0.2)] group-hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                  {/* Card Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-md bg-gradient-to-br ${cat.badgeColor}`}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                        {cat.title}
                      </h3>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                        {cat.name}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Icons or Badges Container */}
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-col items-center justify-center">
                    {cat.skillsIconUrl && (
                      <div className="py-2 w-full flex justify-center overflow-x-auto">
                        <a
                          href="https://skillicons.dev"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="transition-transform duration-300 hover:scale-105"
                        >
                          <img
                            src={cat.skillsIconUrl}
                            alt={cat.name}
                            className="max-w-full h-auto drop-shadow-md"
                            loading="lazy"
                          />
                        </a>
                      </div>
                    )}

                    {/* Subtext (for Mobile Development) */}
                    {cat.subtext && (
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center mt-3 leading-relaxed">
                        {cat.subtext}
                      </p>
                    )}

                    {/* Shields Badges (for AI & Computer Vision) */}
                    {cat.badges && (
                      <div className="flex flex-col items-center gap-2 w-full py-1">
                        {cat.badges.map((badge, idx) => (
                          <div
                            key={idx}
                            className="transition-transform duration-200 hover:scale-105"
                          >
                            <img
                              src={badge.src}
                              alt={badge.alt}
                              className="h-7 drop-shadow-sm rounded"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            { value: "18+", label: "Core Technologies", color: "#0071e3" },
            { value: "6", label: "Specialized Domains", color: "#5e5ce6" },
            { value: "20+", label: "Engineering Projects", color: "#bf5af2" },
            { value: "100%", label: "Clean Code & Architecture", color: "#10b981" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white/90 dark:bg-[#111827]/90 backdrop-blur-md border border-slate-300/80 dark:border-blue-500/30 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_0_20px_rgba(30,58,138,0.2)] text-center transition-all duration-300 hover:-translate-y-1"
            >
              <p
                className="text-3xl sm:text-4xl font-extrabold mb-1"
                style={{ color: stat.color }}
              >
                {stat.value}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400 font-semibold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
