export const SkillsSection = () => {
  const skills = [
    { name: "Java", icon: "/icon-java.png" },
    { name: "Python", icon: "/icon-python.png" },
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
        {/* Header - Apple Style with extra bottom margin for space */}
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-gray-100 mb-32 tracking-tight">
          Technical Proficiency.
        </h2>

        {/* Skills Grid - Minimalist approach */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-8 rounded-3xl bg-gray-50/50 dark:bg-gray-900/30 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-500 ease-out hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-none"
            >
              <div className="w-20 h-20 mb-6 flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-full h-full object-contain opacity-90"
                />
              </div>
              <h4 className="text-base font-medium text-gray-700 dark:text-gray-300 tracking-wide">
                {skill.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
