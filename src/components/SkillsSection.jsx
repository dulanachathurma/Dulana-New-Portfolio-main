import React from "react";

const skills = [
  { name: "Java", level: 85, color: "bg-red-500" },
  { name: "Python", level: 80, color: "bg-blue-500" },
  { name: "C", level: 75, color: "bg-indigo-600" },
  { name: "JavaScript", level: 88, color: "bg-yellow-500" },
  { name: "TypeScript", level: 82, color: "bg-blue-600" },
  { name: "HTML", level: 92, color: "bg-orange-500" },
  { name: "CSS", level: 88, color: "bg-cyan-500" },
  { name: "PHP", level: 75, color: "bg-indigo-400" },
  { name: "AI / ML", level: 75, color: "bg-purple-500" },
  { name: "MySQL", level: 85, color: "bg-blue-400" },
  { name: "Spring Boot", level: 78, color: "bg-green-500" },
  { name: "React.js", level: 82, color: "bg-cyan-400" },
];

export const SkillsSection = () => {
  return (
    <section className="py-24 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Technical Expertise</h2>
          <p className="text-gray-400 text-lg max-w-xl">
            Proficient in building scalable, secure, and user-centric software solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group p-6 rounded-3xl bg-[#111111] border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium tracking-wide">{skill.name}</span>
                <span className="text-sm text-gray-500 font-mono">{skill.level}%</span>
              </div>
              
              {/* Progress Bar */}
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
