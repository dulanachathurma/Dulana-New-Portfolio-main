import { Calendar, MapPin, GraduationCap, Code2 } from "lucide-react";

const education = [
  {
    id: 1,
    degree: "BSc (Honours) in Software Engineering",
    institution: "University of Kelaniya",
    location: "Sri Lanka",
    date: "2025 - 2029",
    skills: ["Mathematics for Computing", "C Language", "Data Structures", "OOP", "Database", "Python", "Java", "JavaScript", "HTML & CSS", "MySQL", "PHP", "Operating Systems"]
  },
  {
    id: 2,
    degree: "G.C.E Advanced Level Examination",
    institution: "H/ Rajapaksa National College",
    location: "Weeraketiya, Sri Lanka",
    date: "2023",
    skills: ["Combined Mathematics: A", "Physics: B", "Chemistry: B"]
  }
];

export const EducationSection = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-black transition-colors duration-500">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center tracking-tight">
          Education & Expertise
        </h2>

        {/* Education Cards */}
        <div className="space-y-6">
          {education.map((edu) => (
            <div 
              key={edu.id} 
              className="group p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-medium mb-2">{edu.degree}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1.5"><GraduationCap size={16} /> {edu.institution}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={16} /> {edu.location}</span>
                    <span className="flex items-center gap-1.5"><Calendar size={16} /> {edu.date}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {edu.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 text-xs font-medium rounded-full bg-white dark:bg-black border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies Section */}
        <div className="mt-16 p-8 rounded-3xl border border-gray-100 dark:border-gray-800">
          <h3 className="text-xl font-medium mb-8 flex items-center gap-2">
            <Code2 className="text-blue-500" /> Core Competencies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Mathematics", "C Language", "Data Structures", "OOP", "Database Systems", "Python", "Java", "JavaScript", "HTML & CSS", "MySQL", "PHP", "OS"].map((skill) => (
              <div key={skill} className="text-sm text-gray-600 dark:text-gray-400 py-2 border-b border-gray-100 dark:border-gray-800">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
