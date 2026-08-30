import { ExternalLink, Calendar } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "CIA Triad: Safeguarding Our Information",
    description: "An exploration of the fundamental principles of information security - Confidentiality, Integrity, and Availability.",
    image: "/article-cia-triad.jpg",
    date: "2025",
    link: "https://medium.com/@dulanachathurma99/cia-triad-safeguarding-our-inforation-576563e3dbd3",
    readTime: "5 min read",
    tagColor: "bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300",
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
    tagColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
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
    tagColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300",
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
    tagColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300",
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
  tagColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300",
  tag: "Machine Learning"
}
];

export const ArticlesSection = () => {
  return (
    <section id="articles" className="py-24 px-4 relative bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            Knowledge Sharing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            My Articles
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Sharing knowledge and insights through technical writing on Medium
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="group relative rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-2 border-white dark:border-slate-800/80 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.02),0_20px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.15),0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Tag Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 text-[11px] font-bold rounded-full ${article.tagColor} shadow-sm backdrop-blur-sm border border-black/5 dark:border-white/5`}>
                    {article.tag}
                  </span>
                </div>

                {/* Read Time Badge */}
                <div className="absolute bottom-3 right-3">
                  <span className="px-2.5 py-1 rounded-md bg-black/40 backdrop-blur-sm text-white text-[11px] font-semibold flex items-center gap-1">
                    <Calendar size={11} /> {article.readTime}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Date */}
                <div className="flex items-center gap-1.5 text-xs font-medium text-slate-400 dark:text-slate-500 mb-2.5">
                  <Calendar size={13} />
                  <span>{article.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-2 text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-300 text-xs mb-5 leading-relaxed line-clamp-3 flex-grow">
                  {article.description}
                </p>

                {/* Read on Medium Button */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 mt-auto">
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center gap-1.5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white text-xs font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                  >
                    Read on Medium <ExternalLink size={13} />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <a
            href="https://medium.com/@dulanachathurma99"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            View All Articles on Medium <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
