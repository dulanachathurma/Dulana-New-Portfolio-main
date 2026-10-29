import { useEffect, useState, useCallback, useRef } from "react";
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
  const navRef = useRef(null);

  // Initialize theme + keep state in sync with <html class="dark">
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const isDark =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark", isDark);
    setIsDarkMode(isDark);

    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Toggle theme
  const toggleDarkMode = () => {
    const nextTheme = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
    setIsDarkMode(nextTheme);
  };

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Navbar colors with inline !important (beats any stylesheet override)
  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const styles = isDarkMode
      ? {
          "background-color": `rgba(255, 255, 255, ${scrolled ? 0.98 : 0.92})`,
          "background-image": "none",
          "border-color": "rgba(0, 0, 0, 0.15)",
          color: "#000000",
          "box-shadow": "0 6px 20px rgba(0, 0, 0, 0.15)",
        }
      : {
          "background-color": `rgba(0, 0, 0, ${scrolled ? 0.9 : 0.7})`,
          "background-image": "none",
          "border-color": "rgba(255, 255, 255, 0.2)",
          color: "#ffffff",
          "box-shadow": "0 6px 20px rgba(0, 0, 0, 0.5)",
        };

    Object.entries(styles).forEach(([prop, value]) => {
      nav.style.setProperty(prop, value, "important");
    });
  }, [isDarkMode, scrolled]);

  // Smooth scrolling
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
    const allSections = [
      ...navItems.map((item) => item.href.substring(1)),
      "contact",
    ];

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
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const toggleBtnClass = cn(
    "rounded-full border flex items-center justify-center transition-colors focus:outline-none shrink-0 shadow-sm",
    isDarkMode
      ? "!border-black/20 !bg-black/10 hover:!bg-black/20"
      : "!border-white/20 !bg-white/10 hover:!bg-white/20"
  );

  const themeIcon = isDarkMode ? (
    <Sun size={16} className="!text-black" />
  ) : (
    <Moon size={16} className="!text-white" />
  );

  return (
    <header className="absolute top-4 sm:top-6 left-0 right-0 z-50 p-2 sm:p-3 transition-all duration-300">
      <div className="w-[96%] sm:w-[94%] max-w-7xl mx-auto flex flex-col">
        {/* Main Navbar */}
        <nav
          ref={navRef}
          className="flex items-center justify-between px-3.5 sm:px-5 py-1.5 md:py-2 rounded-full border backdrop-blur-md transition-all duration-300"
        >
          {/* Desktop Logo */}
          <div className="hidden lg:flex items-center shrink-0">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2.5 group focus:outline-none"
            >
              <div
                className={cn(
                  "w-8 h-8 lg:w-9 lg:h-9 rounded-full overflow-hidden shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-105 border",
                  isDarkMode ? "border-black/20" : "border-white/30"
                )}
              >
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

          {/* Desktop Navigation Links */}
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
                      ? isDarkMode
                        ? "!text-blue-600 font-bold bg-black/10"
                        : "!text-blue-400 font-bold bg-white/10"
                      : isDarkMode
                        ? "!text-black hover:!text-blue-600 hover:bg-black/5"
                        : "!text-white/90 hover:!text-white hover:bg-white/10"
                  )}
                >
                  {item.name}

                  {isActive && (
                    <span
                      className={cn(
                        "absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full",
                        isDarkMode ? "bg-blue-600" : "bg-blue-400"
                      )}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            {/* Contact Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="relative group flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none"
            >
              <motion.span
                animate={{
                  scale: [1, 1.2, 1.35],
                  opacity: [0.6, 0.3, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeOut",
                }}
                className="absolute inset-0 rounded-full border-2 border-blue-500"
              />

              <span className="relative z-10 px-4 py-1.5 rounded-full bg-blue-600 hover:bg-blue-700 !text-white font-bold text-xs lg:text-sm shadow-[0_0_12px_rgba(37,99,235,0.4)] whitespace-nowrap transition-colors">
                Contact
              </span>
            </a>

            {/* Desktop Theme Toggle */}
            <button
              onClick={toggleDarkMode}
              className={cn(toggleBtnClass, "w-8 h-8")}
              aria-label={
                isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
              }
              title={
                isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
              }
            >
              {themeIcon}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center justify-start w-9">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "w-9 h-9 rounded-full border flex items-center justify-center transition-all active:scale-90 shadow-sm focus:outline-none",
                isDarkMode
                  ? "!border-black/20 !bg-black/10 hover:!bg-black/20"
                  : "!border-white/20 !bg-white/10 hover:!bg-white/20"
              )}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? (
                <X
                  size={18}
                  className={isDarkMode ? "!text-black" : "!text-white"}
                />
              ) : (
                <Menu
                  size={18}
                  className={isDarkMode ? "!text-black" : "!text-white"}
                />
              )}
            </button>
          </div>

          {/* Mobile Logo */}
          <div className="flex lg:hidden items-center justify-center flex-1 px-1">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2 group focus:outline-none"
            >
              <div
                className={cn(
                  "w-8 h-8 rounded-full overflow-hidden shadow-sm shrink-0 border",
                  isDarkMode ? "border-black/20" : "border-white/30"
                )}
              >
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

          {/* Mobile Theme Toggle */}
          <div className="flex lg:hidden items-center justify-end w-9">
            <button
              onClick={toggleDarkMode}
              className={cn(toggleBtnClass, "w-9 h-9")}
              aria-label={
                isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
              }
            >
              {themeIcon}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 lg:hidden pointer-events-auto bg-black/50"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Dropdown Card */}
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute z-50 left-0 right-0 lg:hidden pointer-events-auto"
              style={{ top: "72px" }}
            >
              <div
                className={cn(
                  "w-[92%] sm:w-[90%] mx-auto rounded-[28px] border shadow-2xl transition-colors",
                  isDarkMode
                    ? "bg-white text-black border-black/10"
                    : "bg-zinc-900 text-white border-white/10"
                )}
              >
                <div className="flex flex-col p-4 gap-0.5">
                  {/* Mobile Navigation Links */}
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
                            ? isDarkMode
                              ? "bg-blue-100 text-blue-600 font-bold border-l-4 border-blue-600"
                              : "bg-blue-600/30 text-blue-400 font-bold border-l-4 border-blue-500"
                            : isDarkMode
                              ? "text-black hover:bg-black/5"
                              : "text-white hover:bg-white/10"
                        )}
                      >
                        <span>{item.name}</span>
                      </a>
                    );
                  })}

                  {/* Mobile Contact Button */}
                  <div className="pt-2.5">
                    <div
                      className={cn(
                        "p-1 rounded-full border",
                        isDarkMode
                          ? "border-blue-200 bg-blue-50"
                          : "border-blue-500/30 bg-blue-500/10"
                      )}
                    >
                      <a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, "#contact")}
                        className="relative group flex items-center justify-center w-full py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 !text-white font-bold text-center text-sm shadow-[0_4px_15px_rgba(37,99,235,0.35)] transition-all active:scale-95 focus:outline-none"
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
