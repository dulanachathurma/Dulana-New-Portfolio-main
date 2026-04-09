import { Calendar, MapPin, GraduationCap } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "BSc (Honours) in Software Engineering",
    institution: "University of Kelaniya",
    location: "Sri Lanka",
    date: "Mar 2025 - Apr 2029",
    image: "/education-software-engineering.jpg",
    bgColor: "from-indigo-50 to-purple-50 dark:from-indigo-950/40 dark:to-purple-950/40",
    borderColor: "border-indigo-200 dark:border-indigo-800",
    iconBg: "bg-gradient-to-br from-indigo-500 to-purple-500",
    skills: ["Mathematics for Computing", "Communication Skills", "C language", "Database", "PHP Frameworks", "Python", "CSS", "JavaScript", "PHP", "Java", "PMAT", "Data Structures", "MySQL", "Statistical Data Analysis", "HTML", "OOP"]
  },
  {
    id: 2,
    degree: "G.C.E Advanced Level Examination 2023(2024)",
    institution: "H/ Rajapaksa National College",
    location: "Weeraketiya, Sri Lanka",
    date: "2023 (2024)",
    image: "/education-al.jpg",
    bgColor: "from-blue-50 to-cyan-50 dark:from-blue-950/40 dark:to-cyan-950/40",
    borderColor: "border-blue-200 dark:border-blue-800",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    skills: ["Combined Mathematics: A", "Physics: B", "Chemistry: B"]
  }
];

export const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My Education
        </h2>
        
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          My academic journey and qualifications.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu) => (
            <div 
              key={edu.id} 
              className={`group rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br ${edu.bgColor} border ${edu.borderColor}`}
            >
              <div className="flex p-6 gap-4">
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 rounded-full overflow-hidden shadow-md ${edu.iconBg} p-0.5`}>
                    <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                      <img 
                        src={edu.image} 
                        alt={edu.degree}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{edu.degree}</h3>
                  <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-300 mb-3">
                    <span className="flex items-center gap-1">
                      <GraduationCap size={14} className="text-primary" /> {edu.institution}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-primary" /> {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="text-primary" /> {edu.date}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {edu.skills.slice(0, 6).map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs rounded-full bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 shadow-sm">
                        {skill}
                      </span>
                    ))}
                    {edu.skills.length > 6 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-white/70 dark:bg-gray-800/70 text-gray-500 dark:text-gray-400 shadow-sm">
                        +{edu.skills.length - 6}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
