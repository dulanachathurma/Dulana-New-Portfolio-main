import { ExternalLink, Calendar, ArrowUpRight } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "CIA Triad: Safeguarding Our Information",
    description: "An exploration of the fundamental principles of information security - Confidentiality, Integrity, and Availability.",
    image: "/article-cia-triad.jpg",
    date: "2025",
    link: "https://medium.com/@dulanachathurma99/cia-triad-safeguarding-our-inforation-576563e3dbd3",
    readTime: "5 min read",
    tagColor: "bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border-red-200/50 dark:border-red-800/40",
    tag: "Cybersecurity"
  },
  {
    id: 2,
    title: "The Importance of Diagrams",
    description: "Discover how diagrams simplify complex ideas, improve understanding, and play a vital role in communication, learning, and software development.",
    image: "/article-diagrams.jpg",
    date: "2025",
    link: "https://medium.com/@dulanachathurma99/the-importance-of-diagrams-868b1fb153ee",
    readTime: "4 min read",
    tagColor: "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-200/50 dark:border-blue-800/40",
    tag: "Software Development"
  },
  {
    id: 3,
    title: "Understanding the Importance of a Banking System Use Case Diagram",
    description: "A look into why use case diagrams are essential for modeling banking systems, improving design clarity and communication.",
    image: "/article-banking-use-case.jpg",
    date: "2025",
    link: "https://medium.com/@dulanachathurma99/understanding-the-importance-of-a-banking-system-use-case-diagram-ffe6a938a53f",
    readTime: "6 min read",
    tagColor: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border-emerald-200/50 dark:border-emerald-800/40",
    tag: "System Design"
  },
  {
    id: 4,
    title: "Elephant Early Warning System in Railway Transport",
    description: "How technology is being used to prevent elephant-train collisions in Sri Lanka.",
    image: "/article-elephant-warning-system.jpg",
    date: "2025",
    link: "https://medium.com/@dulanachathurma99/elephant-early-warning-system-in-railway-transport-5b7149200a8c",
    readTime: "4 min read",
    tagColor: "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-200/50 dark:border-amber-800/40",
    tag: "AI & Conservation"
  },
  {
    id: 5,
    title: "A Developer’s Leap into Machine Learning",
    description: "Why I’m shifting my focus to AI and how you can start your own journey into the world of algorithms.",
    image: "/article-leap-into-machine-learning.jpg",
    date: "2026",
    link: "https://medium.com/@dulanachathurma99/a-developers-leap-into-machine-learning-90e518d3c9f9",
    readTime: "4 min read",
    tagColor: "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 border-indigo-200/50 dark:border-indigo-800/40",
    tag: "Machine Learning"
  },
  {
    id: 6,
    title: "Building an AI-Based Career & University Recommendation System",
    description: "How I built an AI system that analyzes academic profiles, interests, and market trends to predict optimal career paths and recommend matching universities for students.",
    image: "/project-ai-career.jpg",
    date: "2026",
    link: "https://medium.com/@dulanachathurma99/ai-career-university-recommendation-system-2cfafe7d9842",
    readTime: "5 min read",
    tagColor: "bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border-purple-200/50 dark:border-purple-800/40",
    tag: "Machine Learning"
  }
];

export const ArticlesSection = () => {
  return (
    <section id="articles" className="py-24 md:py-32 px-6 relative bg-slate-50/50 dark:bg-slate-950 transition-colors duration-500">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-3.5 py-1 rounded-full bg-slate-900/5 dark:bg-white/10 text-slate-700 dark:text-slate-300 text-xs font-semibold tracking-wide uppercase mb-4 backdrop-blur-md border border-black/5 dark:border-white/10">
            Knowledge Sharing
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-slate-900 dark:text-white">
            My Articles
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg max-w-xl mx-auto font-normal leading-relaxed">
            Sharing insights and technical deep-dives on software engineering, AI, and system design.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              // Added lg:hover specifically for laptop animations
              className="group relative rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200/80 dark:border-white/10 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-500 ease-out flex flex-col h-full lg:hover:-translate-y-1.5 lg:hover:shadow-[0_24px_48px_rgba(0,0,0,0.08)] dark:lg:hover:shadow-[0_24px_48px_rgba(0,0,0,0.4)] lg:hover:border-slate-300 dark:lg:hover:border-white/20"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={article.image}
                  alt={article.title}
                  // Image zoom restricted to laptop hover
                  className="w-full h-full object-cover transition-transform duration-700 ease-out lg:group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/10 dark:bg-slate-950/20 opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Tag Badge */}
                <div className="absolute top-3.5 left-3.5">
                  <span className={`px-3 py-1 text-[11px] font-medium tracking-tight rounded-full border backdrop-blur-md shadow-xs ${article.tagColor}`}>
                    {article.tag}
                  </span>
                </div>

                {/* Read Time Badge */}
                <div className="absolute bottom-3.5 right-3.5">
                  <span className="px-2.5 py-1 rounded-full bg-slate-900/60 dark:bg-black/60 backdrop-blur-md text-white/90 text-[11px] font-medium flex items-center gap-1.5 border border-white/10">
                    <Calendar size={11} className="opacity-80" /> {article.readTime}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Date */}
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 dark:text-slate-500 mb-2.5">
                  <span>{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-base md:text-lg font-semibold tracking-tight mb-2.5 text-slate-900 dark:text-slate-100 lg:group-hover:text-green-600 dark:lg:group-hover:text-green-400 transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed mb-6 line-clamp-3 flex-grow font-normal">
                  {article.description}
                </p>

                {/* Read on Medium Button */}
                <div className="pt-4 border-t border-slate-100 dark:border-white/5 mt-auto">
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-1.5 bg-green-600 lg:hover:bg-green-700 dark:bg-green-500 dark:lg:hover:bg-green-400 text-white dark:text-slate-950 text-xs font-medium py-2.5 px-4 rounded-xl transition-all duration-300 shadow-xs active:scale-[0.98]"
                  >
                    <span>Read on Medium</span>
                    {/* Arrow animation restricted to laptop hover */}
                    <ArrowUpRight size={14} className="opacity-80 lg:group-hover:translate-x-0.5 lg:group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <a
            href="https://medium.com/@dulanachathurma99"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-50 lg:hover:bg-green-100 dark:bg-green-900/20 dark:lg:hover:bg-green-900/40 text-green-700 dark:text-green-400 font-medium text-xs md:text-sm py-3 px-8 rounded-full transition-all duration-300 border border-green-200/50 dark:border-green-800/30 lg:hover:scale-105 active:scale-95 shadow-xs"
          >
            <span>View All Articles on Medium</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </section>
  );
};
