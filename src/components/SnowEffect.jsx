import { useEffect, useState } from "react";

export const SnowEffect = () => {
  const [snowflakes, setSnowflakes] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark mode check කිරීම
  useEffect(() => {
    const checkDarkMode = () => {
      const dark = document.documentElement.classList.contains('dark');
      setIsDarkMode(dark);
    };

    checkDarkMode();

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { 
      attributes: true, 
      attributeFilter: ['class'] 
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isDarkMode) return;

    // Snowflakes 0 කිරීමට empty array එකක් set කරයි
    setSnowflakes([]);
  }, [isDarkMode]);

  // Dark mode නම් කිසිවක් පෙන්නන්න එපා
  if (isDarkMode) return null;

  return (
    <div className="snow-container">
      {/* Snowflakes රෙන්ඩර් වෙන කොටස හිස් කර ඇත */}
      {snowflakes.map((snow) => (
        <div key={snow.id} />
      ))}

      <style>{`
        .snow-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 9999;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};
