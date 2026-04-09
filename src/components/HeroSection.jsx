import { Download, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const textArray = [
    "Aspiring AI/ML Software Engineer",
    "Enthusiastic about Mobile App Design & Development",
    "Pursuing B.Sc (Honours) in Software Engineering (UG) – University of Kelaniya"
  ];

  const tags = [
    "AI", "ML", "Mobile Apps", "Software Engineering", 
    "Problem Solving", "Full-Stack", "Spring Boot"
  ];

  useEffect(() => {
    let timer;
    
    if (isTyping) {
      if (charIndex < textArray[textIndex].length) {
        timer = setTimeout(() => {
          setDisplayText(prev => prev + textArray[textIndex].charAt(charIndex));
          setCharIndex(prev => prev + 1);
        }, 50);
      } else {
        timer = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (charIndex > 0) {
        timer = setTimeout(() => {
          setDisplayText(prev => prev.slice(0, -1));
          setCharIndex(prev => prev - 1);
        }, 30);
      } else {
        if (textIndex + 1 < textArray.length) {
          setTextIndex(prev => prev + 1);
        } else {
          setTextIndex(0);
        }
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timer);
  }, [charIndex, isTyping, textIndex, textArray]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
      <div className="container mx-auto max-w-5xl text-center">
        
        {/* Profile Image with Blue Border Circle + Animation */}
        <div className="mb-8 relative inline-block group">
          {/* Outer rotating ring - BLUE (thinner) */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 animate-spin-slow opacity-80"></div>
          
          {/* Inner pulsing ring - BLUE (thinner) */}
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-300 to-blue-500 animate-pulse-ring opacity-60"></div>
          
          {/* Glow effect on hover - BLUE (smaller) */}
          <div className="absolute -inset-3 rounded-full bg-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          {/* Main image with THINNER BLUE border */}
          <div className="relative w-36 h-36 md:w-48 md:h-48 rounded-full overflow-hidden mx-auto shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-blue-500/30 border-2 border-blue-500">
            <img 
              src="/dulana-profile-circle.jpg" 
              alt="Dulana Chathurma" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          
          {/* Status dot */}
          <div className="absolute bottom-2 right-2 md:bottom-3 md:right-3">
            <div className="w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white shadow-lg animate-pulse-status"></div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Hi, I'm <span className="text-gray-900 dark:text-white"></span>{' '}
          <br /><span className="text-blue-600">Dulana Chathurma</span>
        </h1>
        
        <div className="h-24 mb-8">
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            {displayText}
            <span className="inline-block w-0.5 h-6 bg-blue-500 ml-1 animate-blink"></span>
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a 
            href="#contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            Hire Me
          </a>
          <a 
            href="/Dulana-Chathurma-CV.pdf" 
            download
            className="px-6 py-3 rounded-full border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 flex items-center gap-2 hover:-translate-y-1"
          >
            <Download className="h-4 w-4" /> Download CV
          </a>
        </div>
        
        <div className="flex flex-wrap gap-3 justify-center">
          {tags.map((tag, index) => (
            <span 
              key={tag} 
              className="px-4 py-2 bg-primary/10 rounded-full text-sm font-medium cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-primary/20 hover:text-primary active:scale-95"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown className="h-8 w-8" />
          </a>
        </div>
      </div>

      <style>{`
        /* Rotating ring animation */
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        /* Pulse ring animation */
        @keyframes pulse-ring {
          0%, 100% { transform: scale(0.95); opacity: 0.6; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        
        /* Blinking cursor */
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        /* Bounce animation */
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        /* Status pulse */
        @keyframes pulse-status {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
          border-radius: 50%;
        }
        
        .animate-pulse-ring {
          animation: pulse-ring 2s ease-in-out infinite;
          border-radius: 50%;
        }
        
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .animate-pulse-status {
          animation: pulse-status 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};