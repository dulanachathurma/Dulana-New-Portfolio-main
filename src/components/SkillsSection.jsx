import { useState } from "react";

const allSkills = [
  // Languages
  { name: "Java", icon: "/icon-java.png", category: "Languages", level: 85, color: "#f89820" },
  { name: "Python", icon: "/icon-python.png", category: "Languages", level: 80, color: "#3776ab" },
  { name: "Ballerina", icon: "/icon-ballerina.png", category: "Languages", level: 75, color: "#20b2aa" },
  { name: "C", icon: "/icon-c-language.png", category: "Languages", level: 75, color: "#a8b9cc" },
  { name: "JavaScript", icon: "/icon-javascript.png", category: "Languages", level: 88, color: "#f7df1e" },
  { name: "PHP", icon: "/icon-php.png", category: "Languages", level: 65, color: "#777bb4" },
  // Frontend
  { name: "HTML5", icon: "/icon-html-css.png", category: "Frontend", level: 92, color: "#e34f26" },
  { name: "CSS3", icon: "/icon-html-css1.png", category: "Frontend", level: 88, color: "#1572b6" },
  { name: "React.js", icon: "/icon-react.png", category: "Frontend", level: 82, color: "#61dafb" },
  // Backend & DB
  { name: "Spring Boot", icon: "/icon-spring-boot.png", category: "Backend & DB", level: 78, color: "#6db33f" },
  { name: "MySQL", icon: "/icon-mysql.png", category: "Backend & DB", level: 80, color: "#4479a1" },
  { name: "PostgreSQL", icon: "/icon-mysql.png", category: "Backend & DB", level: 70, color: "#336791" },
  // AI & ML
  { name: "AI / ML", icon: "/icon-ai-ml.png", category: "AI & ML", level: 75, color: "#ff6b6b" },
  { name: "Flask", icon: "/icon-python.png", category: "AI & ML", level: 68, color: "#3776ab" },
];

const categories = ["All", "Languages", "Frontend", "Backend & DB", "AI & ML"];

const categoryColors = {
  "Languages": { bg: "from-orange-500/20 to-yellow-500/20", border: "border-orange-500/30", badge: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
  "Frontend": { bg: "from-blue-500/20 to-cyan-500/20", border: "border-blue-500/30", badge: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  "Backend & DB": { bg: "from-green-500/20 to-emerald-500/20", border: "border-green-500/30", badge: "bg-green-500/20 text-green-400 border-green-500/30" },
  "AI & ML": { bg: "from-red-500/20 to-pink-500/20", border: "border-red-500/30", badge: "bg-red-500/20 text-red-400 border-red-500/30" },
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filtered = activeCategory === "All"
    ? allSkills
    : allSkills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-32 bg-[#f5f5f7] dark:bg-black transition-colors duration-500 relative overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/3 dark:bg-indigo-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#0071e3] dark:text-[#2997ff] mb-4">
            Technical Expertise
          </p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] dark:text-white mb-6">
            Skills &{" "}
            <span className="bg-gradient-to-r from-[#0071e3] via-[#5e5ce6] to-[#bf5af2] bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-lg text-[#6e6e73] dark:text-[#86868b] max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit built across real-world projects — from web and mobile to AI-driven systems.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-[#0071e3] text-white border-[#0071e3] shadow-[0_4px_20px_rgba(0,113,227,0.4)]"
                  : "bg-white dark:bg-[#1d1d1f] text-[#6e6e73] dark:text-[#86868b] border-black/10 dark:border-white/10 hover:border-[#0071e3]/50 hover:text-[#0071e3] dark:hover:text-[#2997ff]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {filtered.map((skill, index) => {
            const catStyle = categoryColors[skill.category] || categoryColors["Languages"];
            const isHovered = hoveredSkill === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
                className={`group relative flex flex-col items-center p-6 rounded-2xl cursor-pointer
                           bg-white dark:bg-[#1a1a1c]
                           border ${catStyle.border}
                           shadow-[0_2px_16px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_16px_rgba(0,0,0,0.3)]
                           transition-all duration-400 ease-out
                           hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]
                           hover:bg-gradient-to-b hover:${catStyle.bg}`}
                style={{
                  animation: `fadeSlideUp 0.4s ease-out ${index * 0.05}s both`,
                }}
              >
                {/* Glow on hover */}
                {isHovered && (
                  <div
                    className="absolute inset-0 rounded-2xl opacity-20 pointer-events-none transition-opacity duration-300"
                    style={{ background: `radial-gradient(circle at 50% 30%, ${skill.color}, transparent 70%)` }}
                  />
                )}

                {/* Category badge */}
                <span className={`absolute top-3 right-3 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${catStyle.badge} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  {skill.category.split(" ")[0]}
                </span>

                {/* Icon */}
                <div className="w-16 h-16 mb-4 flex items-center justify-center transition-transform duration-400 group-hover:scale-110">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain drop-shadow-lg"
                  />
                </div>

                {/* Skill name */}
                <h4 className="text-sm font-semibold text-[#1d1d1f] dark:text-white tracking-tight mb-3 group-hover:text-[#0071e3] dark:group-hover:text-[#2997ff] transition-colors duration-300">
                  {skill.name}
                </h4>

                {/* Progress bar */}
                <div className="w-full">
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[10px] text-[#86868b] font-medium">Proficiency</span>
                    <span className="text-[10px] font-bold" style={{ color: skill.color }}>{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: isHovered ? `${skill.level}%` : "0%",
                        background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                        boxShadow: `0 0 6px ${skill.color}66`,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats row */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "14+", label: "Technologies", color: "#0071e3" },
            { value: "4", label: "Skill Categories", color: "#5e5ce6" },
            { value: "17+", label: "Projects Built", color: "#bf5af2" },
            { value: "3+", label: "Years Learning", color: "#ff375f" },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white dark:bg-[#1a1a1c] border border-black/[0.06] dark:border-white/[0.06] shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-4xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</p>
              <p className="text-sm text-[#86868b] font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};
