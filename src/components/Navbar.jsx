import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import dulanaLogo from "../assets/dulana_logo.jpg";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Open Source", href: "#open-source" },
  { name: "Certificates", href: "#certificates" },
  { name: "Articles", href: "#articles" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Dark mode initial check
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark =
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const nextTheme = !prev;
      if (nextTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return nextTheme;
    });
  };

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll
  const handleNavClick = useCallback((e, href) => {
    if (e) e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  }, []);

  // Active section observer
  useEffect(() => {
    const allSections = [...navItems.map((item) => item.href.substring(1)), "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        let bestSection = null;
        let bestRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            bestSection = entry.target.id;
          }
        });

        if (bestSection) {
          setActiveSection(bestSection);
        }
      },
      {
        threshold: [0.1, 0.2, 0.3, 0.4, 0.5],
        rootMargin: "-80px 0px 0px 0px",
      }
    );

    allSections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="relative z-50 pt-3 sm:pt-4 pb-1 sm:pb-2 transition-all duration-300">
      <div className="w-[96%] sm:w-[94%] max-w-7xl mx-auto flex flex-col">
        {/* Main Top Navbar Capsule - White Glass in both light & dark mode */}
        <nav
          className={cn(
            "flex items-center justify-between bg-white/80 dark:bg-white/75 backdrop-blur-xl px-3.5 sm:px-5 py-1.5 md:py-2 rounded-full border border-white/60 dark:border-white/40 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
            scrolled && "shadow-[0_12px_35px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_35px_rgba(0,0,0,0.4)]"
          )}
        >
          {/* Desktop Logo */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full overflow-hidden shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={dulanaLogo}
                  alt="Dulana Chathurma"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="font-extrabold text-base lg:text-lg bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent tracking-tight whitespace-nowrap">
                Dulana Chathurma
              </span>
            </a>
          </div>

          {/* Desktop Links (Optimized for White Glass bar in both light & dark mode) */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 justify-center flex-1 mx-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "px-2.5 xl:px-3 py-1 rounded-full text-xs xl:text-sm font-semibold transition-all duration-200 relative whitespace-nowrap",
                    isActive
                      ? "text-blue-600 dark:text-blue-600 font-bold bg-blue-50/90 dark:bg-blue-50/90 shadow-xs"
                      : "text-slate-700 dark:text-slate-700 hover:text-blue-600 dark:hover:text-blue-600 hover:bg-slate-100/70 dark:hover:bg-slate-100/70"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-blue-600 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="relative group flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1.35], opacity: [0.6, 0.3, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                className="absolute inset-0 rounded-full border-2 border-blue-500"
              />
              <span className="relative z-10 px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs lg:text-sm shadow-[0_0_12px_rgba(37,99,235,0.4)] whitespace-nowrap transition-colors">
                Contact
              </span>
            </a>

            <button
              onClick={toggleDarkMode}
              className="w-8 h-8 rounded-full border border-slate-200/80 dark:border-slate-200/80 bg-slate-50/80 dark:bg-slate-50/80 hover:bg-slate-100 dark:hover:bg-slate-100 flex items-center justify-center text-slate-700 dark:text-slate-700 transition-colors focus:outline-none shrink-0 shadow-xs"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>

          {/* Mobile Header Controls */}
          <div className="flex lg:hidden items-center justify-start w-9">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-9 h-9 rounded-full border border-slate-200/80 dark:border-slate-200/80 bg-slate-50/80 dark:bg-slate-50/80 hover:bg-slate-100 dark:hover:bg-slate-100 flex items-center justify-center text-slate-800 dark:text-slate-800 transition-all active:scale-90 shadow-xs focus:outline-none"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          <div className="flex lg:hidden items-center justify-center flex-1 px-1">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2 group focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden shadow-sm shrink-0">
                <img
                  src={dulanaLogo}
                  alt="Dulana Chathurma"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="font-extrabold text-base bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent tracking-tight whitespace-nowrap">
                Dulana Chathurma
              </span>
            </a>
          </div>

          <div className="flex lg:hidden items-center justify-end w-9">
            <button
              onClick={toggleDarkMode}
              className="w-9 h-9 rounded-full border border-slate-200/80 dark:border-slate-200/80 bg-slate-50/80 dark:bg-slate-50/80 hover:bg-slate-100 dark:hover:bg-slate-100 flex items-center justify-center text-slate-700 dark:text-slate-700 transition-colors focus:outline-none shadow-xs"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Dropdown Card - Separate floating element */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 lg:hidden pointer-events-auto"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative z-50 mt-4 lg:hidden pointer-events-auto"
            >
              <div className="w-[92%] sm:w-[90%] mx-auto bg-white dark:bg-[#121626] backdrop-blur-2xl rounded-[28px] border border-white/40 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                <div className="flex flex-col p-4 gap-0.5">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.href.substring(1);
                    return (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={cn(
                          "flex items-center text-left text-[15px] font-semibold py-2.5 px-4 rounded-2xl transition-all",
                          isActive
                            ? "bg-blue-100/60 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold border-l-4 border-blue-600"
                            : "text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/40 dark:hover:bg-white/5"
                        )}
                      >
                        <span>{item.name}</span>
                      </a>
                    );
                  })}

                  <div className="pt-2.5">
                    <div className="p-1 rounded-full border border-blue-200/50 dark:border-blue-900/60 bg-blue-50/30 dark:bg-blue-950/20">
                      <a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, "#contact")}
                        className="relative group flex items-center justify-center w-full py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-center text-sm shadow-[0_4px_15px_rgba(37,99,235,0.35)] transition-all active:scale-95 focus:outline-none"
                      >
                        <span className="absolute inset-0 rounded-full border-2 border-blue-400 animate-ping opacity-35 pointer-events-none" />
                        <span className="relative z-10">Contact Me</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
