import { ArrowUp, Github, Linkedin, FileText } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f5f5f7] dark:bg-[#161617] text-[#86868b] py-16 border-t border-black/10 dark:border-white/10">
      <div className="container mx-auto max-w-6xl px-6">
        
        {/* Top Info Section */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-[#1d1d1f] dark:text-white mb-2">Dulana Chathurma</h2>
          <p className="text-sm max-w-lg leading-relaxed">
            Second year Software Engineering undergraduate at University of Kelaniya. 
            Passionate about building scalable web applications and exploring modern technologies. 
            Actively seeking internship opportunities to contribute and grow.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {[
            { title: "Navigation", links: ["About", "Projects", "Skills", "Contact"] },
            { 
              title: "Professional", 
              links: [
                { name: "GitHub", href: "https://github.com/dulanachathurma" },
                { name: "LinkedIn", href: "https://linkedin.com/in/dulana-chathurma" },
                { name: "Resume", href: "/Dulana-Chathurma-CV.pdf" }
              ] 
            },
            { title: "Contact", links: ["dulanachathurma99@gmail.com", "+94 76 757 4844"] },
            { title: "Location", links: ["Beliatta, Sri Lanka"] }
          ].map((section, idx) => (
            <div key={idx}>
              <h4 className="text-[12px] font-semibold text-[#1d1d1f] dark:text-white mb-4 uppercase tracking-widest">
                {section.title}
              </h4>
              <ul className="space-y-3 text-[13px]">
                {section.links.map((link, i) => (
                  <li key={i}>
                    {typeof link === 'string' ? (
                      <span className="hover:text-black dark:hover:text-white cursor-pointer transition-colors duration-200">
                        {link}
                      </span>
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

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-black/10 dark:border-white/10 gap-6">
          <p className="text-[12px]">
            &copy; {currentYear} Dulana Chathurma. Built with excellence.
          </p>
          
          <div className="flex items-center gap-6">
            {/* Social Icons - Apple Style: Gray by default, Black/White on hover */}
            <a href="https://github.com/dulanachathurma" className="text-gray-500 hover:text-black dark:hover:text-white transition-all duration-200">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/dulana-chathurma" className="text-gray-500 hover:text-black dark:hover:text-white transition-all duration-200">
              <Linkedin size={20} />
            </a>
            <a href="/Dulana-Chathurma-CV.pdf" target="_blank" className="text-gray-500 hover:text-black dark:hover:text-white transition-all duration-200">
              <FileText size={20} />
            </a>
            
            {/* Apple Style Back to Top Button */}
            <a 
              href="#home" 
              className="p-2 rounded-full bg-black/5 dark:bg-white/10 text-gray-500 hover:text-black dark:hover:text-white transition-all duration-300 hover:scale-105"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
