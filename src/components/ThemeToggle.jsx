export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // 1. දැනටමත් dark mode එක සක්‍රිය දැයි පරීක්ෂා කරන්න
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
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
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "fixed z-50 p-2 rounded-full transition-all duration-300",
        "backdrop-blur-sm shadow-md hover:scale-110 active:scale-95",
        "top-5 left-1/2 -translate-x-1/2",
        "md:left-auto md:right-5 md:translate-x-0",
        "bg-white dark:bg-slate-800" // මෙතැන එකම පේළියට දැමීම වඩා සුදුසුයි
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
