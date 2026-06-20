import { useEffect, useState } from "react";
import { Calendar, MapPin, GraduationCap } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "BSc (Honours) in Software Engineering",
    institution: "University of Kelaniya",
    location: "Sri Lanka",
    date: "Mar 2025 - Apr 2029",
    image: "/education-software-engineering.jpg",
    skills: ["Mathematics for Computing", "C Language", "Data Structures", "OOP", "Database Systems", "Python", "Java", "JavaScript", "HTML & CSS"]
  },
  {
    id: 2,
    degree: "G.C.E. Advanced Level Examination",
    institution: "H/ Rajapaksa National College",
    location: "Weeraketiya, Sri Lanka",
    date: "2023 (2024)",
    image: "/education-al.jpg",
    skills: ["Combined Mathematics: A", "Physics: B", "Chemistry: B"]
  }
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-28 px-6 bg-[#f5f5f7] dark:bg-[#000000] text-[#1d1d1f] dark:text-[#f5f5f7] transition-colors duration-500 relative select-none">
      <div className="container mx-auto max-w-5xl">
        
        {/* Section Header in Apple Editorial Style */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.03em] text-[#1d1d1f] dark:text-[#ffffff] mb-4">
            Academic Foundations
          </h2>
          <p className="text-[#86868b] text-base md:text-lg tracking-tight max-w-2xl mx-auto">
            The structured knowledge blueprints shaping my engineering mindset.
          </p>
        </div>

        {/* Apple Premium Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu) => (
            <div 
              key={edu.id} 
              className="bg-[#ffffff] dark:bg-[#111112] border border-slate-200 dark:border-[#1d1d1f] rounded-[2rem] p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-[0_30px_60px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_30px_60px_rgba(0,0,0,0.4)] hover:border-slate-300 dark:hover:border-[#2d2d30] group"
            >
              <div>
                {/* Header: Institution Image + Meta */}
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-16 h-16 rounded-[1.2rem] overflow-hidden bg-slate-100 dark:bg-[#1d1d1f] border border-slate-200/60 dark:border-[#2d2d30] flex-shrink-0">
                    <img 
                      src={edu.image} 
                      alt={edu.institution}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-[#86868b] mb-1">
                      {edu.institution}
                    </h4>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-[#1d1d1f] dark:text-[#ffffff] leading-snug">
                      {edu.degree}
                    </h3>
                  </div>
                </div>

                {/* Meta Row: Timeline & Location */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs md:text-sm text-[#86868b] font-medium border-t border-slate-100 dark:border-[#1d1d1f] pt-4 mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#6e6e73]" /> {edu.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-[#2d2d30] hidden sm:block" />
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-[#6e6e73]" /> {edu.location}
                  </span>
                </div>
              </div>

              {/* Competencies / Core Subjects */}
              <div>
                <h5 className="text-[11px] font-bold uppercase tracking-wider text-[#6e6e73] mb-3">
                  Core Competencies
                </h5>
                <div className="flex flex-wrap gap-2">
                  {edu.skills.map((skill, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1.5 text-xs font-medium rounded-full bg-[#f5f5f7] dark:bg-[#1d1d1f] text-[#1d1d1f] dark:text-[#a1a1a6] border border-slate-200/40 dark:border-[#2d2d30]/50 transition-colors duration-300 hover:bg-slate-200 dark:hover:bg-[#2d2d30]"
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
