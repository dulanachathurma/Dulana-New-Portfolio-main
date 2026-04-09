import { Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Gavel Club - University of Kelaniya",
    location: "Kelaniya, Sri Lanka",
    date: "2023 - Present",
    description: "Faculty Coordinator for social services, organizing events and activities that benefit the community.",
    image: "/experience-gavel-club.jpg",
    link: "https://www.linkedin.com/in/dulana-chathurma/overlay/VolunteerExperience/549063134/treasury/?profileId=ACoAAFDfMasBoGUec8AKadGJzB74e0K0BTBPegE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B65jxYYkUQ2%2BYVbBokosGhA%3D%3D",
    linkText: "View Photo",
    bgGradient: "from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30",
    borderColor: "border-rose-200 dark:border-rose-800",
    iconBg: "from-rose-500 to-pink-500",
    tagColor: "bg-rose-100 dark:bg-rose-900/50 text-rose-700 dark:text-rose-300"
  },
  {
    id: 2,
    title: "GitHub Dev Day",
    location: "University of Kelaniya · Hybrid",
    date: "Apr 2026 - Present · 1 mo",
    description: "Successfully completed the GitHub for Beginners program and participated in GitHub Dev Day Sri Lanka, led by Nisal Gunawardhana. Gained hands-on experience in Git fundamentals, branching, collaboration, and modern development workflows using GitHub.",
    image: "/github-logo.png",
    link: "https://nisalgunawardhana.com/github-dev-day/badge/nt6smxx1nvpxmnlk2tw8",
    linkText: "View Badge",
    bgGradient: "from-gray-50 to-slate-50 dark:from-gray-950/30 dark:to-slate-950/30",
    borderColor: "border-gray-200 dark:border-gray-700",
    iconBg: "from-gray-700 to-slate-700",
    tagColor: "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
  },
  {
    id: 3,
    title: "Student Participant – Safe Migration Program",
    location: "International Organization for Migration · On-site",
    date: "Dec 2025 · 1 mo",
    description: "Participated in a Safe Migration awareness program organized by the Rotaract Club of University of Kelaniya. Gained knowledge on international career opportunities and migration safety.",
    image: "/abc.jpg",
    link: "https://www.linkedin.com/in/dulana-chathurma/overlay/Position/2882945007/treasury/?profileId=ACoAAFDfMasBoGUec8AKadGJzB74e0K0BTBPegE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B65jxYYkUQ2%2BYVbBokosGhA%3D%3D",
    linkText: "View Photo",
    bgGradient: "from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30",
    borderColor: "border-emerald-200 dark:border-emerald-800",
    iconBg: "from-emerald-500 to-teal-500",
    tagColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300"
  },
  {
    id: 4,
    title: "Traveling Experiences",
    location: "Sri Lanka",
    date: "Aug 2024 - Present · 1 yr 9 mos",
    description: "Managing a travel and lifestyle YouTube page focused on exploring Sri Lanka 🇱🇰✈️. Developed skills in video editing, AI tools usage, and Canva-based photo editing to create engaging digital content.",
    image: "/youtube-logo.png",
    link: "https://www.linkedin.com/in/dulana-chathurma/overlay/Position/2741267109/treasury/?profileId=ACoAAFDfMasBoGUec8AKadGJzB74e0K0BTBPegE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B65jxYYkUQ2%2BYVbBokosGhA%3D%3D",
    linkText: "View Work",
    bgGradient: "from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30",
    borderColor: "border-red-200 dark:border-red-800",
    iconBg: "from-red-500 to-orange-500",
    tagColor: "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300"
  },
  {
    id: 5,
    title: "Central Environmental Authority, Sri Lanka",
    location: "Beliatta, Sri Lanka",
    date: "2020 - 2022",
    description: "School Environmental Pioneer Service Group member at H/Beliatta National College Environmental Pioneer Team. Achieved 3 ranking logos for outstanding contributions.",
    image: "/experience-environmental-authority.jpg",
    link: "https://www.linkedin.com/in/dulana-chathurma/overlay/VolunteerExperience/551584802/image-list/?profileId=ACoAAFDfMasBoGUec8AKadGJzB74e0K0BTBPegE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_volunteering_experience_details%3B92%2FJJghjS1WQuwh0iE7rTw%3D%3D",
    linkText: "View Photo",
    bgGradient: "from-green-50 to-lime-50 dark:from-green-950/30 dark:to-lime-950/30",
    borderColor: "border-green-200 dark:border-green-800",
    iconBg: "from-green-500 to-lime-500",
    tagColor: "bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300"
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Professional Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Volunteering & My Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and volunteer experiences that have shaped my career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className={`group rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br ${exp.bgGradient} border ${exp.borderColor}`}
            >
              <div className="flex p-6 gap-5">
                {/* Image Circle with Gradient Border */}
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${exp.iconBg} p-1 shadow-md`}>
                    <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                      <img 
                        src={exp.image} 
                        alt={exp.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white leading-tight">
                    {exp.title}
                  </h3>
                  
                  {/* Info Row */}
                  <div className="space-y-1.5 mb-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <MapPin size={14} className="text-primary shrink-0" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <Calendar size={14} className="text-primary shrink-0" />
                      <span>{exp.date}</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  {/* Link Button */}
                  {exp.link && (
                    <a 
                      href={exp.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${exp.tagColor} hover:scale-105`}
                    >
                      {exp.linkText} <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Bottom Gradient Line */}
              <div className={`h-1 w-full bg-gradient-to-r ${exp.iconBg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};