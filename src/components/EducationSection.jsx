import { Calendar, MapPin } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "BSc (Honours) in Software Engineering",
    institution: "University of Kelaniya",
    location: "Sri Lanka",
    date: "Mar 2025 - Apr 2029",
    image: "/education-software-engineering.jpg",
    bgColor: "bg-white dark:bg-[#161618]", 
    borderColor: "border-slate-200 dark:border-[#2d2d2d]",
    skills: ["Mathematics for Computing", "C Language", "Data Structures", "OOP", "Database Systems", "Python", "Java", "JavaScript", "HTML & CSS", "MySQL", "PHP", "OS", "DSA"]
  },
  {
    id: 2,
    degree: "G.C.E. Advanced Level Examination",
    institution: "H/ Rajapaksa National College",
    location: "Weeraketiya, Sri Lanka",
    date: "2023 (2024)",
    image: "/education-al.jpg",
    bgColor: "bg-[#fbfbfd] dark:bg-[#1c1c1e]", 
    borderColor: "border-slate-200 dark:border-[#2d2d2d]",
    skills: ["Combined Mathematics: A", "Physics: B", "Chemistry: B"]
  }
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-32 px-6 bg-[#f5f5f7] dark:bg-[#000000] transition-colors duration-700">
      <div className="container mx-auto max-w-5xl">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-[-0.03em] text-[#1d1d1f] dark:text-[#f5f5f7] mb-6">
            Academic Foundations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu) => (
            <div 
              key={edu.id} 
              className={`${edu.bgColor} ${edu.borderColor} border rounded-[2rem] p-8 flex flex-col justify-between transition-all duration-500`}
            >
              <div>
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-16 rounded-[1.2rem] overflow-hidden bg-white dark:bg-black">
                    <img src={edu.image} alt={edu.institution} className="w-full h-full object-cover"/>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#86868b] mb-1">
                      {edu.institution}
                    </h4>
                    <h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f] dark:text-white leading-snug">
                      {edu.degree}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-[#86868b] font-medium border-t border-slate-200 dark:border-white/10 pt-6 mb-8">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {edu.date}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={14} /> {edu.location}</span>
                </div>
              </div>

              <div>
                <h5 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6e6e73] mb-4">Core Competencies</h5>
                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 text-[11px] font-medium rounded-md bg-[#e5e7eb] dark:bg-[#252527] text-[#1f2937] dark:text-[#e0e0e0]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
