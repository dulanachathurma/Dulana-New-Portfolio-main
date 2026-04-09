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
    description: "A clear look into why use case diagrams are essential for modeling banking systems, improving design clarity and communication.",
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
  }
];

export const ArticlesSection = () => {
  return (
    <section id="articles" className="py-24 px-4 relative bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Knowledge Sharing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Articles
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and insights through technical writing on Medium
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <div 
              key={article.id} 
              className="group rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700"
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Tag Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${article.tagColor} shadow-sm backdrop-blur-sm`}>
                    {article.tag}
                  </span>
                </div>
                
                {/* Read Time Badge */}
                <div className="absolute bottom-3 right-3">
                  <span className="px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm text-white text-xs font-medium flex items-center gap-1">
                    <Calendar size={12} /> {article.readTime}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar size={14} className="text-primary" />
                  <span>{article.date}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 leading-relaxed line-clamp-3">
                  {article.description}
                </p>
                
                {/* Read Button */}
                <a 
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300 group/btn"
                >
                  Read on Medium 
                  <ExternalLink size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </a>
              </div>
              
              {/* Bottom Gradient Line */}
              <div className="h-0.5 w-full bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* View All Button - Blue */}
        <div className="text-center mt-12">
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