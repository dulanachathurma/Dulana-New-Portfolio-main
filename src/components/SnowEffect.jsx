import { useEffect, useState } from "react";

export const SnowEffect = () => {
  const [snowflakes, setSnowflakes] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark mode check කරන්න
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
    // Dark mode නම් snow effect එක පෙන්නන්න එපා
    if (isDarkMode) return;

    // Window size එක අනුව snowflakes ගණන
    const getSnowflakeCount = () => {
      const width = window.innerWidth;
      if (width < 768) return 80;      // Mobile
      if (width < 1024) return 120;    // Tablet
      return 180;                       // Desktop
    };

    const createSnowflake = (id) => ({
      id: id,
      left: Math.random() * 100,
      size: Math.random() * 8 + 2,
      duration: Math.random() * 8 + 4,
      delay: Math.random() * 15,
      opacity: Math.random() * 0.5 + 0.3,
      rotation: Math.random() * 360,
    });

    const generateSnowflakes = () => {
      const count = getSnowflakeCount();
      const flakes = [];
      for (let i = 0; i < count; i++) {
        flakes.push(createSnowflake(i));
      }
      setSnowflakes(flakes);
    };

    generateSnowflakes();

    const handleResize = () => {
      generateSnowflakes();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isDarkMode]);

  // Dark mode නම් කිසිවක් පෙන්නන්න එපා
  if (isDarkMode) return null;

  return (
    <div className="snow-container">
      {snowflakes.map((snow) => (
        <div
          key={snow.id}
          className="snowflake"
          style={{
            left: `${snow.left}%`,
            width: `${snow.size}px`,
            height: `${snow.size}px`,
            opacity: snow.opacity,
            animation: `snowFall ${snow.duration}s linear ${snow.delay}s infinite`,
            transform: `rotate(${snow.rotation}deg)`,
          }}
        />
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

        .snowflake {
          position: absolute;
          top: -10px;
          background: radial-gradient(circle at 30% 30%, 
            rgba(255, 255, 255, 0.95), 
            rgba(200, 220, 255, 0.7)
          );
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(100, 150, 255, 0.4);
          pointer-events: none;
          will-change: transform;
        }

        /* Light mode snowflake extra bright */
        .snowflake {
          background: radial-gradient(circle at 30% 30%, 
            rgba(255, 255, 255, 0.95), 
            rgba(180, 210, 255, 0.8)
          );
          box-shadow: 0 0 10px rgba(100, 150, 255, 0.5);
        }

        @keyframes snowFall {
          0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(50vh) translateX(15px) rotate(180deg);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(30px) rotate(360deg);
            opacity: 0;
          }
        }

        /* Different animation for some snowflakes */
        .snowflake:nth-child(even) {
          animation-name: snowFallDrift;
        }

        @keyframes snowFallDrift {
          0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(50vh) translateX(-15px) rotate(-180deg);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(-25px) rotate(-360deg);
            opacity: 0;
          }
        }

        /* Animation performance optimize */
        @media (prefers-reduced-motion: reduce) {
          .snowflake {
            animation: none !important;
            display: none;
          }
        }

        /* Mobile optimization */
        @media (max-width: 768px) {
          .snowflake {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
};