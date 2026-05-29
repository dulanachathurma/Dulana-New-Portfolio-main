import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // INIT THEME
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  // TOGGLE
  const toggleTheme = () => {
    const root = document.documentElement;

    if (root.classList.contains("dark")) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      root.classList.add("dark");
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
        "top-5 left-1/2 -translate-x-1/2 md:left-auto md:right-5 md:translate-x-0",

        // FIXED COLORS
        "bg-white dark:bg-slate-900"
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
