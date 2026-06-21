export const ThemeToggle = () => {


  return (
    <button
      onClick={toggleTheme}
     
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "fixed z-50 p-2 rounded-full transition-all duration-300",
        "backdrop-blur-sm shadow-md hover:scale-110 active:scale-95",
        "top-5 left-1/2 -translate-x-1/2",
        "md:left-auto md:right-5 md:translate-x-0",
        "bg-white",
        "dark:bg-slate-800" 
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
