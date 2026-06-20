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
    iconBg: "from-rose-500 to-pink-500",
    tags: ["Leadership", "Community", "Events"],
  },
    {
    id: 2,
    title: "Student Participant – Safe Migration Program",
    location: "International Organization for Migration · On-site",
    date: "Dec 2025 · 1 mo",
    description: "Participated in a Safe Migration awareness program organized by the Rotaract Club of University of Kelaniya. Gained knowledge on international career opportunities and migration safety.",
    image: "/abc.jpg",
    link: "https://www.linkedin.com/in/dulana-chathurma/overlay/Position/2882945007/treasury/?profileId=ACoAAFDfMasBoGUec8AKadGJzB74e0K0BTBPegE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B65jxYYkUQ2%2BYVbBokosGhA%3D%3D",
    linkText: "View Photo",
    iconBg: "from-emerald-500 to-teal-500",
    tags: ["Migration", "Awareness", "Rotaract"],
  },
  {
    id: 3,
    title: "GitHub Dev Day",
    location: "University of Kelaniya · Hybrid",
    date: "Apr 2026 - Present · 1 mo",
    description: "Successfully completed the GitHub for Beginners program and participated in GitHub Dev Day Sri Lanka, led by Nisal Gunawardhana. Gained hands-on experience in Git fundamentals, branching, collaboration, and modern development workflows using GitHub.",
    image: "/github-logo.png",
    link: "https://nisalgunawardhana.com/github-dev-day/badge/nt6smxx1nvpxmnlk2tw8",
    linkText: "View Badge",
    iconBg: "from-gray-700 to-slate-700",
    tags: ["Git", "GitHub", "Open Source"],
  },

];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-600/10 text-blue-600 text-sm font-medium mb-4">
            Professional Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Volunteering & My Experience
          </h2>
       
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and volunteer experiences that have shaped my career
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line */}
         
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600/60 via-blue-600/30 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row items-center gap-6 md:gap-0">

                  {/* LEFT CARD (even index) */}
                  <div className={`w-full md:w-[45%] ${isLeft ? "md:pr-10" : "md:order-3 md:pl-10"}`}>
                    <div className="bg-blue-600 p-[2px] rounded-2xl shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                      {/* Top: image + title */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${exp.iconBg} p-0.5 shadow-md flex-shrink-0`}>
                          <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                            <img
                              src={exp.image}
                              alt={exp.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-gray-800 dark:text-white leading-tight mb-1">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mb-0.5">
                            <MapPin size={11} className="text-blue-600 shrink-0" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                            <Calendar size={11} className="text-blue-600 shrink-0" />
                            <span>{exp.date}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-full text-xs border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Button */}
                      {exp.link && (
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex w-full items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                          {exp.linkText} <ExternalLink size={13} />
                        </a>
                      )}
                    </div>
                  </div>
                    </div>

                  {/* CENTER DOT */}
                  <div className="hidden md:flex md:order-2 w-[10%] justify-center items-center z-10">
                    <div className="w-5 h-5 rounded-full bg-blue-600 shadow-lg ring-4 ring-blue-600/20" />
                  </div>

                  {/* RIGHT EMPTY (for alternating layout) */}
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
