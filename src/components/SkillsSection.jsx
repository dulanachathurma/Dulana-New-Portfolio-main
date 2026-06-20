import { Calendar, MapPin } from "lucide-react";

export const SkillsSection = () => {
  const skills = [
    { name: "Java", icon: "/icon-java.png", level: 85, color: "bg-red-500" },
    { name: "Python", icon: "/icon-python.png", level: 80, color: "bg-blue-500" },
    { name: "JavaScript", icon: "/icon-javascript.png", level: 88, color: "bg-yellow-500" },
    { name: "React.js", icon: "/icon-react.png", level: 82, color: "bg-cyan-500" },
    { name: "MySQL", icon: "/icon-mysql.png", level: 85, color: "bg-blue-600" },
    { name: "Spring Boot", icon: "/icon-spring-boot.png", level: 78, color: "bg-green-600" }
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-white dark:bg-black transition-colors duration-700">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[#1d1d1f] dark:text-[#f5f5f7] mb-6">
            Technical Expertise
          </h2>
          <p className="text-[#86868b] max-w-xl mx-auto text-lg font-medium">
            A curated stack of technologies I use to build robust digital solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 rounded-[2rem] bg-[#f5f5f7] dark:bg-[#121212] border border-transparent hover:border-gray-200 dark:hover:border-[#333] transition-all duration-500 hover:scale-[1.05] cursor-default"
            >
              <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center">
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
              </div>
              <h4 className="font-semibold text-center text-[#1d1d1f] dark:text-white mb-3">
                {skill.name}
              </h4>
              <div className="h-1 w-full bg-gray-200 dark:bg-[#262626] rounded-full overflow-hidden">
                <div className={`h-full ${skill.color}`} style={{ width: `${skill.level}%` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Apple Style Stats */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Technologies", value: "12+" },
            { label: "Avg Proficiency", value: "85%" },
            { label: "Years Exp", value: "2+" },
            { label: "Projects", value: "15+" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-8 rounded-[2rem] bg-[#f5f5f7] dark:bg-[#121212]">
              <div className="text-4xl font-bold text-[#1d1d1f] dark:text-white mb-2 tracking-tighter">{stat.value}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-[#86868b] font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
