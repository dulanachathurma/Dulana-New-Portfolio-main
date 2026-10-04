import { ArrowUp, Github, Linkedin, FileText } from "lucide-react";

// X (Twitter) icon as SVG
const XIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Smooth scroll handler function
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    /* උඩ රේඛාව (Top Border) - Light mode එකේදී Black, Dark mode එකේදී White */
    <footer className="relative z-10 bg-[#f5f5f7] dark:bg-black text-[#86868b] py-16 border-t border-black/30 dark:border-white/30">
      <div className="container mx-auto max-w-6xl px-6">
        
        {/* Profile Header */}
        <div className="mb-12 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-[#1d1d1f] dark:text-white mb-2">
            Dulana Chathurma
          </h2>
          <p className="text-sm md:text-base max-w-lg leading-relaxed mx-auto">
            Second year Software Engineering undergraduate at University of Kelaniya. 
            Passionate about building scalable web applications and exploring modern technologies. 
            Actively seeking internship opportunities to contribute and grow.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center md:text-left">
          {[
            { 
              title: "Navigation", 
              links: [
                { name: "About", href: "#about", isInternal: true },
                { name: "Projects", href: "#projects", isInternal: true },
                { name: "Skills", href: "#skills", isInternal: true },
                { name: "Contact", href: "#contact", isInternal: true }
              ] 
            },
            { 
              title: "Professional", 
              links: [
                { name: "GitHub", href: "https://github.com/dulanachathurma" },
                { name: "LinkedIn", href: "https://linkedin.com/in/dulana-chathurma" },
                { name: "X (Twitter)", href: "https://x.com/DulanaChathurma" },
                { name: "Resume", href: "/Dulana_Chathurma_Resume.pdf" }
              ] 
            },
            { title: "Contact", links: ["+94 76 757 4844"] },
            { title: "Location", links: ["Beliatta, Sri Lanka"] }
          ].map((section, idx) => (
            <div key={idx}>
              <h4 className="text-[12px] md:text-[14px] font-semibold text-[#1d1d1f] dark:text-white mb-4 uppercase tracking-widest">
                {section.title}
              </h4>
              <ul className="space-y-3 text-[13px] md:text-[15px]">
                {section.links.map((link, i) => (
                  <li key={i}>
                    {typeof link === 'string' ? (
                      <span className="hover:text-black dark:hover:text-white transition-colors duration-200">
                        {link}
                      </span>
                    ) : link.isInternal ? (
                      <a 
                        href={link.href} 
                        onClick={(e) => handleScroll(e, link.href)}
                        className="hover:text-black dark:hover:text-white transition-colors duration-200 cursor-pointer"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <a 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-black dark:hover:text-white transition-colors duration-200"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* යට රේඛාව (Bottom Border Line) - Light mode එකේදී Black, Dark mode එකේදී White */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/30 dark:border-white/30 gap-6">
          <p className="text-[14px] md:text-[15px]">
            &copy; {currentYear} Dulana Chathurma. Built with excellence.
          </p>
          
          <div className="flex items-center gap-5">
            <a href="https://github.com/dulanachathurma" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-110">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/dulana-chathurma" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#0a66c2] dark:hover:text-[#0a66c2] transition-all duration-200 hover:scale-110">
              <Linkedin size={20} />
            </a>
            <a href="https://x.com/DulanaChathurma" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-110">
              <XIcon size={20} />
            </a>
            <a href="/Dulana_Chathurma_Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black dark:hover:text-white transition-all duration-200 hover:scale-110">
              <FileText size={20} />
            </a>
            
            {/* Scroll-to-top button */}
            <a 
              href="#home" 
              onClick={(e) => handleScroll(e, "#home")}
              className="group relative p-2.5 rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(0,113,227,0.5)] cursor-pointer"
              aria-label="Back to top"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-[#0071e3] via-[#5e5ce6] to-[#bf5af2] opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute inset-[-2px] rounded-full bg-[conic-gradient(from_0deg,#0071e3,#5e5ce6,#bf5af2,#0071e3)] animate-[spin_3s_linear_infinite] opacity-0 group-hover:opacity-60 transition-opacity duration-300 blur-[2px]" />
              <ArrowUp size={16} className="relative z-10 text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
