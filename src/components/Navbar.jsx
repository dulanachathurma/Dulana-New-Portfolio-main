import { cn } from "@/lib/utils";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import profileImg from "../assets/dulana.jpeg";

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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Dark mode initial check
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Scroll detection for enhanced capsule elevation
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll function
  const handleNavClick = useCallback((e, href) => {
    if (e) e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
    setIsMenuOpen(false);
  }, []);

  // Active section detection - Combined IntersectionObserver + Scroll event
  useEffect(() => {
    const allSections = [...navItems.map(item => item.href.substring(1)), "contact"];
    
    // Method 1: IntersectionObserver (primary)
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
        rootMargin: "-80px 0px 0px 0px"
      }
    );

    // Method 2: Scroll event (backup)
    const handleScroll = () => {
      let currentSection = "home";
      const scrollPosition = window.scrollY + 100;
      
      for (let i = allSections.length - 1; i >= 0; i--) {
        const section = allSections[i];
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop - 50 && scrollPosition < offsetBottom - 50) {
            currentSection = section;
            break;
          }
        }
      }
      
      setActiveSection(prev => {
        if (prev !== currentSection) {
          return currentSection;
        }
        return prev;
      });
    };
    
    allSections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none transition-all duration-300">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        {/* Floating Capsule Navbar (SESA Style) */}
        <nav
          className={cn(
            "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 md:py-2.5 border border-gray-100 dark:border-gray-800 flex items-center justify-between transition-all duration-300",
            scrolled
              ? "shadow-[0_12px_35px_rgba(0,0,0,0.18)] dark:shadow-[0_12px_35px_rgba(0,0,0,0.5)]"
              : "shadow-[0_8px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          )}
        >
          {/* =========================================
              DESKTOP VIEW (md:flex)
             ========================================= */}

          {/* 1. Desktop Logo & Branding (Left side) */}
          <div className="hidden md:flex items-center shrink-0">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full overflow-hidden p-[2px] bg-gradient-to-r from-blue-600 to-cyan-500 shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={profileImg}
                  alt="Dulana Chathurma"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="font-extrabold text-base lg:text-lg bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent tracking-tight whitespace-nowrap">
                Dulana Chathurma
              </span>
            </a>
          </div>

          {/* 2. Desktop Navigation Links (Center) */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "px-2.5 lg:px-3 py-1.5 rounded-full text-xs lg:text-[13.5px] font-medium transition-all duration-200 relative whitespace-nowrap",
                    isActive
                      ? "text-blue-600 dark:text-blue-400 font-bold bg-blue-50/80 dark:bg-blue-950/40"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/70 dark:hover:bg-gray-800/60"
                  )}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-blue-600 dark:bg-blue-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* 3. Desktop Actions: Contact Button with Animated Wave Ring + Theme Toggle (Right side) */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            {/* Contact CTA Button (Pulsating SESA style) */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="relative group flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
            >
              <span className="absolute inset-0 rounded-full border-2 border-blue-500 animate-ping opacity-40 pointer-events-none" />
              <span className="relative z-10 px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs lg:text-sm shadow-[0_0_15px_rgba(37,99,235,0.45)] whitespace-nowrap transition-colors">
                Contact
              </span>
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="w-9 h-9 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-800/80 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 transition-colors focus:outline-none shrink-0 shadow-sm"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </div>

          {/* =========================================
              MOBILE VIEW (md:hidden - SESA Style)
             ========================================= */}

          {/* 1. Mobile Hamburger Button (Left side - Circular SESA style) */}
          <div className="flex md:hidden items-center justify-start w-10">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-800/80 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center text-gray-800 dark:text-gray-200 transition-all active:scale-90 shadow-sm focus:outline-none"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* 2. Mobile Logo & Branding (Center - SESA style) */}
          <div className="flex md:hidden items-center justify-center flex-1">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2 group focus:outline-none"
            >
              <div className="w-8 h-8 rounded-full overflow-hidden p-[1.5px] bg-gradient-to-r from-blue-600 to-cyan-500 shadow-sm shrink-0">
                <img
                  src={profileImg}
                  alt="Dulana Chathurma"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="font-extrabold text-base bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent tracking-tight">
                Dulana Chathurma
              </span>
            </a>
          </div>

          {/* 3. Mobile Dark Mode Toggle (Right side - Symmetrical balance) */}
          <div className="flex md:hidden items-center justify-end w-10">
            <button
              onClick={toggleDarkMode}
              className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50/80 dark:bg-gray-800/80 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 transition-colors focus:outline-none shadow-sm"
              aria-label="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu Card (Smooth slide-down) */}
        {isMenuOpen && (
          <>
            {/* Tap-outside Backdrop */}
            <div
              className="fixed inset-0 z-[-1] bg-black/40 backdrop-blur-[2px] md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            <div className="md:hidden mt-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl border border-gray-100 dark:border-gray-800 shadow-[0_15px_35px_rgba(0,0,0,0.2)] overflow-hidden pointer-events-auto transition-all animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col p-4 gap-1.5 max-h-[75vh] overflow-y-auto">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <a
                      key={index}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={cn(
                        "text-left text-sm font-semibold py-2.5 px-4 rounded-xl transition-all",
                        isActive
                          ? "bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 font-bold border-l-4 border-blue-600"
                          : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                      )}
                    >
                      {item.name}
                    </a>
                  );
                })}

                {/* Mobile Contact Action with Animated Rings */}
                <div className="pt-3 px-1">
                  <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, "#contact")}
                    className="relative flex items-center justify-center w-full py-3 group transition-all duration-300 active:scale-95 focus:outline-none"
                  >
                    <span className="absolute inset-0 rounded-full border-2 border-blue-500 animate-ping opacity-30 pointer-events-none" />
                    <span className="relative z-10 w-full py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-center text-sm shadow-[0_0_15px_rgba(37,99,235,0.45)]">
                      Contact Me
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
