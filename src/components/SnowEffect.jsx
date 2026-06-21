import { useEffect, useState } from "react";

export const SnowEffect = ({ isDarkMode }) => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
   
    if (isDarkMode) return;

    const getSnowflakeCount = () => {
      const width = window.innerWidth;
      if (width < 768) return 20;  // Mobile සඳහා කුඩා ගණනක්
      if (width < 1024) return 30; // Tablet සඳහා
      return 40;                  // Desktop සඳහා (40 පමණ ප්‍රමාණවත්)
    };

    const createSnowflake = (id) => ({
      id: id,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1, // කුඩා ප්‍රමාණය
      duration: Math.random() * 10 + 15, // මන්දගාමී චලනය (15s - 25s)
      delay: Math.random() * 20,
      opacity: Math.random() * 0.3 + 0.1, // ඉතා මෘදු පෙනුම
    });

    const generateSnowflakes = () => {
      const count = getSnowflakeCount();
      const flakes = Array.from({ length: count }, (_, i) => createSnowflake(i));
      setSnowflakes(flakes);
    };

    generateSnowflakes();
    window.addEventListener("resize", generateSnowflakes);
    return () => window.removeEventListener("resize", generateSnowflakes);
  }, [isDarkMode]);

  if (isDarkMode) return null;

  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[9999]">
        {snowflakes.map((snow) => (
          <div
            key={snow.id}
            className="absolute bg-white rounded-full blur-[0.5px]"
            style={{
              left: `${snow.left}%`,
              width: `${snow.size}px`,
              height: `${snow.size}px`,
              opacity: snow.opacity,
              animation: `snowFall ${snow.duration}s linear ${snow.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes snowFall {
          0% { transform: translateY(-10vh); }
          100% { transform: translateY(105vh); }
        }
      `}</style>
    </>
  );
};
