import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed z-50 p-2 rounded-full transition-all duration-300",
        "backdrop-blur-sm shadow-md hover:scale-110 active:scale-95",
        // Mobile: center at top
        "top-5 left-1/2 -translate-x-1/2",
        // Desktop: right side
        "md:left-auto md:right-5 md:translate-x-0",
        // Light mode background - White
        "bg-white",
        // Dark mode background - white
        "dark:bg-white-800"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 md:h-6 md:w-6 text-yellow-500" />
      ) : (
        <Moon className="h-5 w-5 md:h-6 md:w-6 text-blue-700" />
      )}
    </button>
  );
};