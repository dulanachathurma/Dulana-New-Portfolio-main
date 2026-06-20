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
    <section id="skills" className="py-24 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Header - Apple Style */}
        <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-gray-100 mb-16 tracking-tight">
          Technical Proficiency.
        </h2>

        {/* Skills Grid - Minimalist */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-6 rounded-3xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-500 ease-out"
            >
              <div className="w-16 h-16 mb-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-full h-full object-contain opacity-90"
                />
              </div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 tracking-wide">
                {skill.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
