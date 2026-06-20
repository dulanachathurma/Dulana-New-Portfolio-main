export const SkillsSection = () => {
  const skills = [
    { name: "Java", icon: "/icon-java.png" },
    { name: "Python", icon: "/icon-python.png" },
    { name: "PHP", icon: "/icon-php.png" },
    { name: "C", icon: "/icon-c-language.png" },
    { name: "JavaScript", icon: "/icon-javascript.png" },
    { name: "HTML", icon: "/icon-html-css.png" },
    { name: "CSS", icon: "/icon-html-css1.png" },
    { name: "AI / ML", icon: "/icon-ai-ml.png" },
    { name: "MySQL", icon: "/icon-mysql.png" },
    { name: "Spring Boot", icon: "/icon-spring-boot.png" },
    { name: "React.js", icon: "/icon-react.png" },
  ];

  return (
    <section id="skills" className="py-32 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight">
          Technical Proficiency.
        </h2>

        {/* පරතරය */}
        <div className="mb-[120px]"></div>

        {/* Skills Grid - Apple Floating Cards Style */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center p-8 rounded-[2rem] 
                         bg-white dark:bg-[#1d1d1f] 
                         border border-black/[0.08] dark:border-white/[0.08] 
                         shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-none
                         transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]
                         hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] 
                         dark:hover:bg-[#252527]"
            >
              {/* Icon */}
              <div className="w-20 h-20 mb-6 flex items-center justify-center 
                              transition-transform duration-500 group-hover:scale-105">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Text */}
              <h4 className="text-base font-medium text-gray-900 dark:text-gray-100 tracking-wide">
                {skill.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
