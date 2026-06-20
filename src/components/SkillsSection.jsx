import { useState } from "react";

export const SkillsSection = () => {
  const skills = [
    { name: "Java", icon: "/icon-java.png", level: 85, color: "from-red-500 to-orange-500", bgColor: "bg-red-50 dark:bg-red-950/30" },
    { name: "Python", icon: "/icon-python.png", level: 80, color: "from-blue-500 to-green-500", bgColor: "bg-blue-50 dark:bg-blue-950/30" },
    { name: "C", icon: "/icon-c-language.png", level: 75, color: "from-blue-700 to-indigo-700", bgColor: "bg-blue-50 dark:bg-blue-950/30" },
    { name: "JavaScript", icon: "/icon-javascript.png", level: 88, color: "from-yellow-500 to-orange-500", bgColor: "bg-yellow-50 dark:bg-yellow-950/30" },
    { name: "HTML", icon: "/icon-html-css.png", level: 92, color: "from-orange-500 to-red-500", bgColor: "bg-orange-50 dark:bg-orange-950/30" },
    { name: "CSS", icon: "/icon-html-css1.png", level: 88, color: "from-blue-500 to-cyan-500", bgColor: "bg-blue-50 dark:bg-blue-950/30" },
    { name: "AI / ML", icon: "/icon-ai-ml.png", level: 75, color: "from-purple-500 to-pink-500", bgColor: "bg-purple-50 dark:bg-purple-950/30" },
    { name: "MySQL", icon: "/icon-mysql.png", level: 85, color: "from-blue-600 to-cyan-600", bgColor: "bg-blue-50 dark:bg-blue-950/30" },
    { name: "Spring Boot", icon: "/icon-spring-boot.png", level: 78, color: "from-green-600 to-teal-600", bgColor: "bg-green-50 dark:bg-green-950/30" },
    { name: "React.js", icon: "/icon-react.png", level: 82, color: "from-cyan-500 to-blue-500", bgColor: "bg-cyan-50 dark:bg-cyan-950/30" },
  ];

  const scrollingSkills = [...skills, ...skills, ...skills];

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="text-center mb-12 relative z-10">
        <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          Technical Expertise
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"></div>
      </div>

      <div className="relative overflow-hidden py-8">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none"></div>
        
        {/* Row 1 */}
        <div className="mb-8">
          <div className="animate-scroll-left flex gap-6">
            {scrollingSkills.map((skill, index) => (
              <div key={`${skill.name}-row1-${index}`} className={`group min-w-[160px] p-5 rounded-2xl ${skill.bgColor} border border-gray-200 dark:border-gray-700 shadow-lg`}>
                <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <img src={skill.icon} alt={skill.name} className="max-w-full max-h-full object-contain" />
                </div>
                <h4 className="font-semibold text-center">{skill.name}</h4>
                <div className="mt-3 h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${skill.color}`} style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div>
          <div className="animate-scroll-right flex gap-6">
            {[...scrollingSkills].reverse().map((skill, index) => (
              <div key={`${skill.name}-row2-${index}`} className={`group min-w-[160px] p-5 rounded-2xl ${skill.bgColor} border border-gray-200 dark:border-gray-700 shadow-lg`}>
                <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <img src={skill.icon} alt={skill.name} className="max-w-full max-h-full object-contain" />
                </div>
                <h4 className="font-semibold text-center">{skill.name}</h4>
                <div className="mt-3 h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r ${skill.color}`} style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-33.33%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
          width: max-content;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
          width: max-content;
        }
        .animate-scroll-left:hover, .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
