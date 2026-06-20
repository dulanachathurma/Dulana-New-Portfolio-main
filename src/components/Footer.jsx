import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-[#161617] text-gray-500 dark:text-gray-400 py-12 border-t border-gray-200 dark:border-white/10">
      <div className="container mx-auto max-w-5xl px-6">
        
        {/* Apple Style Footer Top - Breadcrumbs or Mini-info */}
        <div className="text-[11px] mb-8 border-b border-gray-200 dark:border-white/10 pb-8 leading-relaxed">
          <p>
            Dulana Chathurma &copy; {currentYear}. All rights reserved. Designed with precision to craft digital experiences. 
            Built using React, Tailwind CSS and passion.
          </p>
        </div>

        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-[12px] font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-[12px]">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}><a href={`#${item.toLowerCase()}`} className="hover:underline">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-2 text-[12px]">
              <li className="flex items-center gap-2"><Mail size={12} className="text-blue-500" /> <a href="mailto:dulanachathurma99@gmail.com" className="hover:underline">Email Me</a></li>
              <li className="flex items-center gap-2"><Phone size={12} className="text-blue-500" /> <a href="tel:+94767574844" className="hover:underline">Call Me</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">Location</h4>
            <ul className="space-y-2 text-[12px]">
              <li className="flex items-start gap-2"><MapPin size={12} className="text-blue-500" /> <span>Kopiwatta, Getamanna,<br/>Beliatta</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[12px] font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">Social</h4>
            <ul className="space-y-2 text-[12px]">
              <li><a href="https://linkedin.com/in/dulana-chathurma" className="hover:underline text-blue-500">LinkedIn</a></li>
              <li><a href="https://github.com/dulanachathurma" className="hover:underline text-blue-500">GitHub</a></li>
              <li><a href="https://medium.com/@dulanachathurma99" className="hover:underline text-blue-500">Medium</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-white/10">
          <p className="text-[11px]">Sri Lanka • {currentYear}</p>
          
          <a
            href="#home"
            className="p-2 rounded-full bg-gray-200 dark:bg-white/10 hover:bg-blue-500 text-gray-600 dark:text-gray-300 hover:text-white transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};
