import { Calendar, MapPin } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "BSc (Honours) in Software Engineering",
    institution: "University of Kelaniya",
    location: "Sri Lanka",
    date: "Mar 2025 - Apr 2029",
    image: "/education-software-engineering.jpg",
    skills: ["Mathematics for Computing", "C Language", "Data Structures", "OOP", "Database Systems", "Python", "Java", "JavaScript", "HTML & CSS", "MySQL", "PHP", "OS", "DSA"]
  },
  {
  id: 2,
  degree: "Open Learning Programming Courses",
  institution: "University of Moratuwa",
  location: "Sri Lanka",
  date: "Oct 2025 - Jan 2027",
  image: "/education-uom-open-learning.jpg",
  skills: [
    "Python",
    "Python Calculator Projects",
    "Programming Fundamentals",
    "Problem Solving"
  ]
},
  {
    id: 3,
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
    <section id="education" className="py-24 px-4 relative bg-[#fbfbfd] dark:bg-[#050505]">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-600/10 text-blue-600 text-sm font-medium mb-4">
            Academic Background
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1d1d1f] dark:text-[#f5f5f7]">
            Academic Foundations
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mb-6"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600/40 via-blue-600/10 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {education.map((edu, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={edu.id} className="relative flex flex-col md:flex-row items-center gap-6 md:gap-0">
                  
                  {/* EDUCATION CARD */}
                  <div className={`w-full md:w-[45%] ${isLeft ? "md:pr-10" : "md:order-3 md:pl-10"}`}>
                    <div className="bg-white dark:bg-[#121212] border-2 border-gray-200 dark:border-[#262626] rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03),0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2),0_20px_50px_rgba(0,0,0,0.4)] hover:-translate-y-1.5 transition-all duration-500 ease-out">
                      
                      {/* Top: image + Title */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 rounded-full overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-[#262626] flex-shrink-0">
                          <img src={edu.image} alt={edu.institution} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#86868b] mb-1">
                            {edu.institution}
                          </h4>
                          <h3 className="text-base font-bold text-gray-800 dark:text-white leading-tight mb-2">
                            {edu.degree}
                          </h3>
                          <div className="flex flex-col gap-1 text-xs text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-1.5">
                              <MapPin size={11} className="text-blue-600 shrink-0" />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Calendar size={11} className="text-blue-600 shrink-0" />
                              <span>{edu.date}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Skills */}
                      <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#6e6e73] mb-3">Core Competencies</h5>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 rounded-lg text-xs font-medium bg-gray-200 dark:bg-[#1f1f1f] text-[#333333] dark:text-[#cccccc]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CENTER DOT */}
                  <div className="hidden md:flex md:order-2 w-[10%] justify-center items-center z-10">
                    <div className="w-4 h-4 rounded-full bg-blue-600 shadow-md ring-4 ring-[#fbfbfd] dark:ring-[#050505]" />
                  </div>

                  {/* RIGHT EMPTY */}
                  <div className={`hidden md:block md:w-[45%] ${isLeft ? "md:order-3" : "md:order-1"}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
