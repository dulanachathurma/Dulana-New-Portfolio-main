import { useState, useRef, useEffect, useCallback } from "react";
import { X, Send, Bot, User, Sparkles, ChevronDown, Volume2, VolumeX, Mic, MicOff } from "lucide-react";

const portfolioKnowledge = {
  name: "Dulana Chathurma",
  title: "AI/ML Software Engineer",
  education: "BSc (Honours) in Software Engineering at University of Kelaniya (2025–2029)",
  location: "Beliatta, Hambantota District, Sri Lanka",
  email: "dulanachathurma99@gmail.com",
  phone: "+94 76 75 74 844",
  linkedin: "https://linkedin.com/in/dulana-chathurma",
  github: "https://github.com/dulanachathurma",
  twitter: "https://x.com/DulanaChathurma",
  medium: "https://medium.com/@dulanachathurma99",
  skills: ["Java", "Python", "C", "JavaScript", "PHP", "HTML5", "CSS3", "React.js", "Spring Boot", "MySQL", "PostgreSQL", "AI/ML", "Flask"],
  projects: [
    "CarePoint Medical Center - Healthcare web app with appointment booking",
    "Amazon Clone Website - E-commerce frontend",
    "User Management Application - Full-stack CRUD with Spring Boot + React.js",
    "Sriseta Astrology Website - Horoscopes & booking system",
    "TravelScope - Sri Lanka travel platform",
    "WeatherSphere Pro - Real-time weather app",
    "Todo App - Java + PostgreSQL task manager",
    "ATM Mini Project - C language banking simulation",
    "AI Career & University Recommendation System - ML-based with Flask",
    "YouTube Frontend UI Clone - HTML5 & CSS3",
    "NexGenAI - AI-powered career platform with CV analysis",
  ],
  articles: "Technical articles on Medium covering AI, ML, cybersecurity, and software engineering topics.",
};

function getBotReply(userMsg) {
  const msg = userMsg.toLowerCase().trim();
  if (msg.match(/\b(hi|hello|hey|good morning|good afternoon|good evening|hola|ayubowan)\b/)) {
    return `👋 Hello! I'm Dulana's AI Assistant. I can answer questions about Education and background, Projects and skills, Contact and social links, and Articles and experience. What would you like to know?`;
  }
  if (msg.match(/name|who/)) {
    return `I'm the AI assistant for ${portfolioKnowledge.name} — an aspiring ${portfolioKnowledge.title} from Sri Lanka!`;
  }
  if (msg.match(/education|university|degree|study|student/)) {
    return `Education: ${portfolioKnowledge.education}. Previously studied Combined Mathematics, Physics and Chemistry for A Levels at H Rajapaksa National College. Results: Maths A, Physics B, Chemistry B.`;
  }
  if (msg.match(/skill|tech|language|stack|know|expertise|proficiency/)) {
    return `Technical Skills: ${portfolioKnowledge.skills.join(", ")}. Specializing in AI and ML, Full-Stack Development, and Mobile-friendly UIs.`;
  }
  if (msg.match(/project|build|make|create|work/)) {
    return `Featured Projects: ${portfolioKnowledge.projects.join(". ")}. Scroll to the Projects section to explore them all with live demos!`;
  }
  if (msg.match(/contact|email|phone|reach|message|hire/)) {
    return `Contact Dulana: Email is ${portfolioKnowledge.email}. Phone is ${portfolioKnowledge.phone}. Also available on LinkedIn, GitHub, and X Twitter.`;
  }
  if (msg.match(/github|code|repo|repository/)) {
    return `GitHub: github.com/dulanachathurma. Check out 11 plus open-source projects including Spring Boot apps, React frontends, and AI systems!`;
  }
  if (msg.match(/linkedin/)) {
    return `LinkedIn: linkedin.com/in/dulana-chathurma. Connect on LinkedIn to see professional experience and certificates!`;
  }
  if (msg.match(/twitter|x\.com|tweet/)) {
    return `X Twitter: x.com/DulanaChathurma. Follow on X for tech updates and insights!`;
  }
  if (msg.match(/article|blog|medium|write|post/)) {
    return `Articles on Medium at medium.com/@dulanachathurma99. ${portfolioKnowledge.articles}`;
  }
  if (msg.match(/ai|ml|machine learning|artificial intelligence/)) {
    return `AI and ML Expertise: Dulana is building an AI Career and University Recommendation System using Python, Machine Learning and Flask. Also developed NexGenAI — an AI-powered platform that analyzes CVs and provides career path recommendations with ATS scores!`;
  }
  if (msg.match(/location|where|country|sri lanka|live|based/)) {
    return `Location: ${portfolioKnowledge.location}. Available for remote opportunities worldwide!`;
  }
  if (msg.match(/cv|resume|download/)) {
    return `You can download Dulana's CV using the button on the Home page — just click Review Executive CV!`;
  }
  if (msg.match(/internship|job|opportunity|hire|recruit/)) {
    return `Yes! Dulana is actively seeking internship opportunities in AI and ML Engineering, Full-Stack Development with Spring Boot and React, and Mobile App Development. Feel free to reach out at ${portfolioKnowledge.email}!`;
  }
  if (msg.match(/spring boot|java|backend/)) {
    return `Spring Boot Expertise: Dulana built a full-stack User Management Application using Spring Boot, React.js, and MySQL, featuring clean REST APIs, CRUD operations, and a responsive frontend!`;
  }
  if (msg.match(/react|frontend|ui|interface/)) {
    return `React.js Projects include: Sriseta Astrology Website, TravelScope Travel Platform, WeatherSphere Pro App, NexGenAI Career Platform, and User Management App. All built with React.js, hooks, and responsive design!`;
  }
  if (msg.match(/thank|thanks|bye|goodbye|see you/)) {
    return `You're welcome! Feel free to come back if you have more questions. Have a great day!`;
  }
  return `I'm not sure about that specific query. Try asking about Skills and technologies, Projects and demos, Contact information, Education background, or Internship availability. Or just say hi to start fresh!`;
}

// Strip markdown for speech
function stripMarkdown(text) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[•🎓💼📬📝⚡🚀🐙💼✍️🤖📍📄☕⚛️🙏👋🤔]/gu, "")
    .replace(/\n+/g, ". ")
    .trim();
}

export const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: `👋 Hi! I'm **Dulana's AI Assistant**.\n\nAsk me anything about his skills, projects, contact info, or how to hire him! 🚀`,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const recognitionRef = useRef(null);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
      if (!isMobile) inputRef.current?.focus();
      setHasUnread(false);
    }
  }, [messages, isOpen, isMobile]);

  // Lock scroll on mobile when open
  useEffect(() => {
    if (isMobile && isOpen && !isMinimized) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobile, isOpen, isMinimized]);

  // Text-to-Speech
  const speak = useCallback((text) => {
    if (!voiceEnabled || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const clean = stripMarkdown(text);
    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.lang = "en-US";
    utterance.rate = 0.95;
    utterance.pitch = 1.05;
    utterance.volume = 1;
    // Pick a nice voice if available
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(v =>
      v.name.includes("Google") || v.name.includes("Samantha") || v.name.includes("Karen") || v.name.includes("Daniel")
    );
    if (preferred) utterance.voice = preferred;
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  }, [voiceEnabled]);

  // Stop speaking when chat closes or voice disabled
  useEffect(() => {
    if (!isOpen || !voiceEnabled) {
      window.speechSynthesis?.cancel();
      setIsSpeaking(false);
    }
  }, [isOpen, voiceEnabled]);

  // Voice input (Speech Recognition)
  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Voice input is not supported in your browser. Try Chrome!");
      return;
    }
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      setTimeout(() => {
        setInput("");
        handleSendMessage(transcript);
      }, 300);
    };
    recognition.start();
    recognitionRef.current = recognition;
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setIsListening(false);
  };

  const handleSendMessage = (text) => {
    const trimmed = (text || input).trim();
    if (!trimmed) return;
    const userMsg = {
      role: "user",
      text: trimmed,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    setTimeout(() => {
      const reply = getBotReply(trimmed);
      const botMsg = {
        role: "bot",
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
      speak(reply);
    }, 800 + Math.random() * 500);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Render bold + links
  const renderText = (text) => {
    const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i} className="font-semibold text-white">{part.slice(2, -2)}</strong>;
      }
      const linkMatch = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
      if (linkMatch) {
        return <a key={i} href={linkMatch[2]} target="_blank" rel="noopener noreferrer" className="text-[#2997ff] underline hover:text-blue-300">{linkMatch[1]}</a>;
      }
      return <span key={i}>{part}</span>;
    });
  };

  const renderMessage = (text) =>
    text.split("\n").map((line, i) => (
      <p key={i} className={line === "" ? "mt-1" : ""}>{renderText(line)}</p>
    ));

  // Panel dimensions
  const panelClass = isMobile
    ? `fixed inset-0 z-50 flex flex-col`
    : `fixed bottom-6 right-6 z-50 w-[360px] flex flex-col rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.4)] border border-white/10 transition-all duration-300 ${isMinimized ? "h-16" : "h-[520px]"}`;

  const panelStyle = isMobile
    ? { background: "linear-gradient(165deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" }
    : { background: "linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => { setIsOpen(true); setHasUnread(false); }}
          className="fixed bottom-6 right-6 z-50 group"
          aria-label="Open AI Assistant"
        >
          <div className="relative">
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0071e3] to-[#bf5af2] animate-ping opacity-25 scale-110" />
            <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#0071e3] via-[#5e5ce6] to-[#bf5af2] flex items-center justify-center shadow-[0_8px_32px_rgba(0,113,227,0.5)] hover:shadow-[0_12px_40px_rgba(94,92,230,0.6)] transition-all duration-300 hover:scale-110">
              <Sparkles size={22} className="text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
            {hasUnread && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white dark:border-black animate-bounce" />
            )}
            <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black/80 dark:bg-white/10 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              Ask AI Assistant ✨
            </span>
          </div>
        </button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div className={panelClass} style={panelStyle}>

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#0071e3]/20 to-[#bf5af2]/20 border-b border-white/10 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className={`rounded-full bg-gradient-to-br from-[#0071e3] to-[#bf5af2] flex items-center justify-center ${isSpeaking ? "animate-pulse" : ""} w-9 h-9`}>
                  <Bot size={18} className="text-white" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#1a1a2e]" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-none">Dulana's AI Assistant</p>
                <p className={`text-[10px] mt-0.5 ${isSpeaking ? "text-blue-400" : "text-emerald-400"}`}>
                  {isSpeaking ? "🔊 Speaking..." : isListening ? "🎙️ Listening..." : "● Online • Instant reply"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              {/* Voice toggle */}
              <button
                onClick={() => { setVoiceEnabled(!voiceEnabled); if (voiceEnabled) window.speechSynthesis?.cancel(); }}
                className={`p-1.5 rounded-full transition-all ${voiceEnabled ? "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30" : "hover:bg-white/10 text-white/40 hover:text-white"}`}
                aria-label={voiceEnabled ? "Disable voice" : "Enable voice"}
                title={voiceEnabled ? "Voice ON" : "Voice OFF"}
              >
                {voiceEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
              </button>

              {/* Minimize (desktop only) */}
              {!isMobile && (
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-all"
                  aria-label={isMinimized ? "Expand" : "Minimize"}
                >
                  <ChevronDown size={16} className={`transition-transform duration-300 ${isMinimized ? "rotate-180" : ""}`} />
                </button>
              )}

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-all"
                aria-label="Close chat"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Body — hidden if minimized on desktop */}
          {(!isMinimized || isMobile) && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                    <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white ${
                      msg.role === "bot"
                        ? "bg-gradient-to-br from-[#0071e3] to-[#5e5ce6]"
                        : "bg-gradient-to-br from-[#bf5af2] to-[#ff375f]"
                    }`}>
                      {msg.role === "bot" ? <Bot size={14} /> : <User size={14} />}
                    </div>
                    <div className={`max-w-[78%] ${msg.role === "user" ? "items-end" : "items-start"} flex flex-col gap-1`}>
                      <div className={`px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${
                        msg.role === "bot"
                          ? "bg-white/[0.07] text-white/90 rounded-tl-sm"
                          : "bg-gradient-to-br from-[#0071e3] to-[#5e5ce6] text-white rounded-tr-sm"
                      }`}>
                        {renderMessage(msg.text)}
                      </div>
                      <div className="flex items-center gap-2 px-1">
                        <span className="text-[9px] text-white/30">{msg.time}</span>
                        {/* Re-speak button on bot messages */}
                        {msg.role === "bot" && voiceEnabled && (
                          <button
                            onClick={() => speak(msg.text)}
                            className="text-white/20 hover:text-blue-400 transition-colors"
                            title="Play voice"
                          >
                            <Volume2 size={10} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing indicator */}
                {isTyping && (
                  <div className="flex gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0071e3] to-[#5e5ce6] flex items-center justify-center">
                      <Bot size={14} className="text-white" />
                    </div>
                    <div className="bg-white/[0.07] px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                      {[0, 150, 300].map((delay, i) => (
                        <span key={i} className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: `${delay}ms` }} />
                      ))}
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Quick Suggestions */}
              <div className="px-4 pb-2 flex gap-2 overflow-x-auto flex-shrink-0" style={{ scrollbarWidth: "none" }}>
                {["Skills", "Projects", "Contact", "Hire me?", "GitHub", "Location"].map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSendMessage(q)}
                    className="flex-shrink-0 text-[10px] px-3 py-1.5 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-[#0071e3] hover:bg-[#0071e3]/10 transition-all duration-200 whitespace-nowrap"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Input area */}
              <div className="px-4 pb-4 flex-shrink-0">
                <div className="flex items-center gap-2 bg-white/[0.06] rounded-2xl border border-white/10 px-3 py-2.5 focus-within:border-[#0071e3]/60 transition-all duration-200">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder={isListening ? "Listening..." : "Ask me anything..."}
                    className="flex-1 bg-transparent text-white text-xs placeholder-white/30 outline-none"
                  />

                  {/* Mic button */}
                  <button
                    onMouseDown={startListening}
                    onMouseUp={stopListening}
                    onTouchStart={startListening}
                    onTouchEnd={stopListening}
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                      isListening
                        ? "bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.7)] scale-110 animate-pulse"
                        : "bg-white/10 text-white/50 hover:bg-white/20 hover:text-white"
                    }`}
                    title={isListening ? "Listening..." : "Hold to speak"}
                  >
                    {isListening ? <MicOff size={13} className="text-white" /> : <Mic size={13} />}
                  </button>

                  {/* Send button */}
                  <button
                    onClick={() => handleSendMessage()}
                    disabled={!input.trim()}
                    className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0071e3] to-[#5e5ce6] flex items-center justify-center text-white disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-[0_0_12px_rgba(0,113,227,0.6)] transition-all duration-200 hover:scale-105"
                  >
                    <Send size={13} />
                  </button>
                </div>

                {/* Voice status hint */}
                <p className="text-center text-[9px] text-white/20 mt-1.5">
                  {voiceEnabled ? "🔊 Voice replies ON — tap speaker to replay" : "🔇 Voice replies OFF"}
                  {" • Hold 🎙️ to speak"}
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
