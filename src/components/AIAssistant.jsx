import { useState, useRef, useEffect, useCallback } from "react";
import { X, Send, Bot, User, Sparkles, ChevronDown, Volume2, VolumeX, Mic, MicOff } from "lucide-react";

const portfolioKnowledge = {
  name: "Dulana Chathurma",
  title: "AI/ML Software Engineer & Full-Stack Developer",
  shortName: "Dulana",
  university: "University of Kelaniya",
  degree: "BSc (Honours) in Software Engineering (2025–2029)",
  school: "H/ Rajapaksa National College, Weeraketiya",
  alResults: "Combined Mathematics: A, Physics: B, Chemistry: B (Physical Science Stream)",
  location: "Kopiwatta, Getamanna, Beliatta, Hambantota District, Southern Province, Sri Lanka",
  email: "dulanachathurma99@gmail.com",
  phone: "+94 76 75 74 844",
  whatsapp: "+94767574844",
  linkedin: "https://linkedin.com/in/dulana-chathurma",
  github: "https://github.com/dulanachathurma",
  twitter: "https://x.com/DulanaChathurma",
  medium: "https://medium.com/@dulanachathurma99",
  languages: ["Java", "Python", "C", "JavaScript (ES6+)", "PHP", "SQL"],
  frontend: ["React.js", "HTML5", "CSS3", "TailwindCSS", "Responsive UI"],
  backend: ["Spring Boot", "Flask", "RESTful APIs", "Microservices"],
  databases: ["MySQL", "PostgreSQL"],
  aiml: ["Machine Learning", "Scikit-Learn", "Recommendation Algorithms", "CV/ATS Parsing"],
  openSource: [
    {
      name: "WSO2 API Manager (wso2/apim-apps)",
      pr: "Pull Request #1437",
      details: "Enhanced Publisher Portal scope pagination, strengthened shared utility functions, authored Jest unit tests. CodeRabbit Approved & SonarCloud Quality Gate Passed."
    },
    {
      name: "LeetCode Solutions (doocs/leetcode - 36k+ ⭐)",
      pr: "Pull Request #6231 (Merged)",
      details: "Authored optimized JavaScript Dynamic Programming solution for Problem 0042 (Trapping Rain Water). Ranked #22 contributor in the official repository."
    }
  ],
  certifications: [
    "Harvard University CS50x: Introduction to Computer Science (C, Python, SQL, Algorithms)",
    "University of Moratuwa (CODL): Front-End Web Development",
    "University of Moratuwa (Open Learning): Python for Beginners",
    "GitHub Dev Day Sri Lanka: GitHub for Beginners badge",
    "Udemy: Multiple certificates in Java, AI/ML, and Full-Stack Development"
  ],
  articles: [
    "CIA Triad: Safeguarding Our Information (Cybersecurity)",
    "A Developer's Leap into Machine Learning (AI & Algorithms)",
    "Elephant Early Warning System in Railway Transport (AI in Wildlife Conservation)",
    "Understanding the Importance of a Banking System Use Case Diagram (System Design)",
    "The Importance of Diagrams (Software Architecture)"
  ]
};

function getBotReply(userMsg) {
  const msg = userMsg.toLowerCase().trim();

  // 1. Greetings & Pleasantries
  if (msg.match(/\b(hi|hello|hey|good morning|good afternoon|good evening|hola|ayubowan|kohomada|halo|wassup)\b/)) {
    return `👋 Ayubowan! I'm Dulana's AI Assistant. I know everything about Dulana's projects, open-source work, technical skills, education at University of Kelaniya, certificates, articles, and contact details. How can I help you today?`;
  }

  // 2. Who is Dulana / About / Overview
  if (msg.match(/\b(who are you|who is dulana|about dulana|tell me about|kauruda|introduce|background|bio|profile)\b/)) {
    return `Dulana Chathurma is an aspiring AI/ML Software Engineer and Full-Stack Developer from Sri Lanka. He is currently pursuing a BSc (Honours) in Software Engineering at the University of Kelaniya (2025–2029). He has completed 100+ projects, contributed to enterprise open-source projects like WSO2 and LeetCode, and writes technical articles on Medium!`;
  }

  // 3. Open Source & Contributions (WSO2, LeetCode)
  if (msg.match(/\b(open source|opensource|contribution|contributions|wso2|leetcode|pr|pull request|doocs)\b/)) {
    return `Dulana is an active open-source contributor! Highlights include:\n• WSO2 API Manager (wso2/apim-apps): PR #1437 — improved Publisher Portal scope pagination, added utility safety, and wrote Jest unit tests (CodeRabbit approved & SonarCloud passed).\n• LeetCode (doocs/leetcode, 36k+ ⭐): PR #6231 (Merged) — wrote an optimized JavaScript DP solution for Problem 0042 (Trapping Rain Water), ranking as #22 contributor in the repository!`;
  }

  // 4. Education & Academic Background
  if (msg.match(/\b(education|university|degree|kelaniya|study|college|school|a\/l|al|advanced level|results|marks|exam)\b/)) {
    return `Dulana's Academic Background:\n🎓 Higher Education: BSc (Honours) in Software Engineering at University of Kelaniya (2025–2029).\n🏫 Secondary Education: H/ Rajapaksa National College, Weeraketiya.\n📊 G.C.E. Advanced Level Results: Combined Mathematics: A, Physics: B, Chemistry: B (Physical Science Stream).`;
  }

  // 5. Specific Projects Inquiry
  if (msg.match(/\b(nexgenai|ats|resume parser|career skill)\b/)) {
    return `NexGenAI (Intelligent Career Skill Analysis Platform) is an AI-powered web app built with React.js and TailwindCSS. It parses resumes/CVs, maps skills intelligently, calculates ATS compatibility scores, and recommends personalized career paths!`;
  }
  if (msg.match(/\b(ai career|university recommendation|recommendation system)\b/)) {
    return `AI Career & University Recommendation System is an intelligent machine learning project built with Python, ML algorithms, and Flask. It guides students to optimal university degrees and career paths based on their interests and skills. Read Dulana's article about it on Medium!`;
  }
  if (msg.match(/\b(sriseta|astrology|horoscope|zodiac)\b/)) {
    return `Sriseta Official Website is a modern astrology platform built with React.js. It features daily/weekly horoscopes, an interactive zodiac slider, automated predictions, astrology consultation booking, and direct WhatsApp integration!`;
  }
  if (msg.match(/\b(carepoint|medical|doctor|hospital|healthcare|appointment)\b/)) {
    return `CarePoint Medical Center is a healthcare web platform built with HTML5, CSS3, and JavaScript. It provides online doctor search, appointment scheduling, a secure payment simulation, and emergency ambulance access!`;
  }
  if (msg.match(/\b(user management|crud|spring boot app)\b/)) {
    return `User Management Application is a full-stack CRUD application developed with Spring Boot, React.js, JavaScript, and MySQL. It features clean REST APIs, structured state management, and a responsive UI.`;
  }
  if (msg.match(/\b(travelscope|travel|sri lanka travel|maps)\b/)) {
    return `TravelScope is a travel exploration platform showcasing the beauty of Sri Lanka. Built with React.js and Google Maps API, it helps travelers discover destinations and plan itineraries.`;
  }
  if (msg.match(/\b(weathersphere|weather app|weather)\b/)) {
    return `WeatherSphere Pro is a real-time weather web application built with React.js and live meteorological APIs, providing dynamic city forecasts and sleek UI cards.`;
  }
  if (msg.match(/\b(todo|atm|banking project|c language|amazon|youtube)\b/)) {
    return `Additional Projects include:\n• Todo App: Task manager built with Java and PostgreSQL.\n• ATM Banking System: Full banking logic simulation in C language.\n• Amazon Clone: Modern e-commerce UI built with HTML5, CSS3, JS.\n• YouTube Clone: Responsive video platform homepage interface.`;
  }

  // 6. All Projects Overview
  if (msg.match(/\b(project|projects|portfolio|what did he build|build|apps|system|wada|hadapu)\b/)) {
    return `Dulana has built 100+ projects across AI/ML, Full-Stack, and Frontend:\n1. NexGenAI (AI CV Skill & ATS Analyzer)\n2. AI Career & University Recommendation System (Python + ML + Flask)\n3. User Management System (Spring Boot + React + MySQL)\n4. Sriseta Astrology Platform (React.js)\n5. CarePoint Medical Center (HTML/CSS/JS)\n6. TravelScope & WeatherSphere Pro\n7. Todo App (Java + PostgreSQL) & ATM Simulator (C)\nScroll to the Projects section to test live demos and view source code!`;
  }

  // 7. Technical Skills & Languages
  if (msg.match(/\b(skill|skills|technologies|tech stack|languages|language|know|tools|frameworks)\b/)) {
    return `Dulana's Technical Skills:\n💻 Languages: Java, Python, C, JavaScript (ES6+), PHP, SQL\n🎨 Frontend: React.js, HTML5, CSS3, TailwindCSS\n⚙️ Backend: Spring Boot, Flask, RESTful APIs\n🗄️ Databases: MySQL, PostgreSQL\n🤖 AI/ML: Scikit-learn, Machine Learning, Recommendation Systems, ATS Parsing\n🛠️ Tools: Git, GitHub, Jest Unit Testing, VS Code, Postman, Vite`;
  }

  // 8. Specific Tech Check (Java, Python, React, Spring Boot, C, etc.)
  if (msg.match(/\b(java|spring boot)\b/)) {
    return `Java & Spring Boot: Dulana develops enterprise-ready full-stack applications using Spring Boot, REST APIs, Hibernate/JPA, and Java OOP. He built the full-stack User Management Application with Spring Boot and React!`;
  }
  if (msg.match(/\b(python|ai|machine learning|ml|flask)\b/)) {
    return `Python & AI/ML: Dulana specializes in Machine Learning algorithms, predictive modeling, Flask backends, and data science. He built the AI Career & University Recommendation System and NexGenAI ATS analyzer using ML models!`;
  }
  if (msg.match(/\b(react|javascript|js|frontend|tailwind|css)\b/)) {
    return `React.js & Frontend: Dulana creates fast, responsive, and aesthetic web applications with React.js, TailwindCSS, modern component state, and sleek animations (including Sriseta, NexGenAI, TravelScope, and this portfolio).`;
  }
  if (msg.match(/\b(c language|c programming|c)\b/) && !msg.match(/\b(cv|resume)\b/)) {
    return `C Programming: Dulana studied C at Harvard CS50x and University of Kelaniya, developing algorithms, data structures, and projects like the ATM banking system.`;
  }

  // 9. Certifications & Badges
  if (msg.match(/\b(certificate|certificates|certification|certifications|cs50|harvard|moratuwa|course|courses|badge)\b/)) {
    return `Dulana's Certifications:\n🏆 Harvard University: CS50x - Introduction to Computer Science (C, Python, SQL, Data Structures)\n🎓 University of Moratuwa: Front-End Web Development (CODL)\n🐍 University of Moratuwa: Python for Beginners\n🎖️ GitHub Dev Day Sri Lanka: GitHub for Beginners Verified Badge\n📜 Multiple Udemy certificates in Java, AI/ML, and Web Engineering. Check out the Certificates section!`;
  }

  // 10. Medium Articles & Writing
  if (msg.match(/\b(article|articles|medium|blog|blogs|write|writing|post|publications)\b/)) {
    return `Dulana regularly publishes technical articles on Medium (@dulanachathurma99):\n📝 "CIA Triad: Safeguarding Our Information" (Cybersecurity)\n📝 "A Developer's Leap into Machine Learning" (AI/ML)\n📝 "Elephant Early Warning System in Railway Transport" (AI & Wildlife)\n📝 "Understanding the Importance of a Banking System Use Case Diagram"\n📝 "The Importance of Diagrams in Software Engineering"\nRead them directly in the Articles section!`;
  }

  // 11. Experience & Extracurriculars
  if (msg.match(/\b(experience|experiences|gavel|rotaract|iom|youtube|volunteering|activities|leader|leadership)\b/)) {
    return `Dulana's Experience & Leadership:\n🎤 Gavel Club (University of Kelaniya): Faculty Coordinator for Social Services, organizing community initiatives.\n🌐 GitHub Dev Day: Active participant in Git fundamentals and collaboration workflows.\n🤝 Safe Migration Program: Student participant with Rotaract Club & IOM.\n🎥 Travel & Lifestyle YouTube Channel: Content creator exploring Sri Lanka with video editing and AI storytelling tools.\n🌱 Central Environmental Authority: School Environmental Pioneer member with 3 ranking awards.`;
  }

  // 12. Contact Details & Social Links
  if (msg.match(/\b(contact|email|phone|whatsapp|linkedin|github|twitter|reach|message|call|talk)\b/)) {
    return `You can reach Dulana directly:\n📧 Email: ${portfolioKnowledge.email}\n📞 Phone: ${portfolioKnowledge.phone}\n💬 WhatsApp: https://wa.me/94767574844\n💼 LinkedIn: linkedin.com/in/dulana-chathurma\n🐙 GitHub: github.com/dulanachathurma\n✍️ Medium: medium.com/@dulanachathurma99\n🐦 X/Twitter: x.com/DulanaChathurma`;
  }

  // 13. Location / Residence
  if (msg.match(/\b(location|where|country|city|town|sri lanka|address|live|based)\b/)) {
    return `Dulana is based in Beliatta, Hambantota District, Southern Province, Sri Lanka. He is open to remote work worldwide as well as on-site positions in Sri Lanka!`;
  }

  // 14. CV / Resume Download
  if (msg.match(/\b(cv|resume|download cv|download resume|pdf|curriculum)\b/)) {
    return `You can download or review Dulana's CV right from this portfolio! Click the "Review Executive CV" button in the Home section at the top of the page.`;
  }

  // 15. Hiring, Jobs, & Internship Opportunities
  if (msg.match(/\b(hire|hiring|intern|internship|job|opportunity|work with|available|freelance|recruit|full time|part time)\b/)) {
    return `Yes! Dulana is actively seeking Internship and Junior Software Engineering opportunities in:\n• AI / Machine Learning Engineering\n• Full-Stack Development (Spring Boot + React.js)\n• Frontend / Mobile Web App Development\nHe is ready to contribute to impactful software teams. Reach him at ${portfolioKnowledge.email} or +94 76 75 74 844!`;
  }

  // 16. Singlish & Sinhala Inquiries
  if (msg.match(/\b(kauruda|mokakda|monawada|karana|karala|kiyanna|visthara|thiyenne|oyage|oyata|puluwanda|uththara|danna)\b/)) {
    return `දුලාන චතුර්ම කියන්නේ කැළණිය විශ්වවිද්‍යාලයේ මෘදුකාංග ඉංජිනේරු (BSc Honours in Software Engineering) උපාධිය හදාරන දක්ෂ AI/ML Software Engineer කෙනෙක්.\n• Projects: NexGenAI, AI Career Recommender, User Management App (Spring Boot + React), Sriseta Astrology, CarePoint\n• Open Source: WSO2 API Manager (PR #1437) සහ LeetCode #22 contributor\n• Skills: Java, Python, C, JavaScript, React, Spring Boot, MySQL, AI/ML\n• Contact: dulanachathurma99@gmail.com / 076 75 74 844`;
  }

  // 17. Thank you & Goodbye
  if (msg.match(/\b(thank|thanks|great|awesome|good job|bye|goodbye|see you|tc|take care)\b/)) {
    return `You're very welcome! If you have any more questions about Dulana's work, experience, or want to collaborate, feel free to ask anytime. Have a wonderful day! 🚀`;
  }

  // Default fallback with helpful prompt buttons
  return `I can tell you anything about Dulana! You can ask about:\n• 🚀 "Featured Projects" (NexGenAI, Sriseta, User Management, AI Recommender)\n• 🐙 "Open Source Work" (WSO2 PR #1437, LeetCode rank #22)\n• 💻 "Technical Skills" (Java, Python, React, Spring Boot, AI/ML)\n• 🎓 "Education & A/L Results" (University of Kelaniya, Rajapaksa National College)\n• 📜 "Certificates" (Harvard CS50x, Moratuwa, GitHub Dev Day)\n• 📬 "Contact & Hire" (Email, Phone, WhatsApp, CV)\nWhat would you like to explore?`;
}

function stripMarkdown(text) {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[•🎓💼📬📝⚡🚀🐙✍️🤖📍📄☕⚛️🙏👋🤔]/gu, "")
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
  const [isVisible, setIsVisible] = useState(false); // for animation

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

  // Animate in/out
  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => setIsVisible(true));
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 120);
      if (!isMobile) inputRef.current?.focus();
      setHasUnread(false);
    }
  }, [messages, isOpen, isMobile]);

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

  useEffect(() => {
    if (!isOpen || !voiceEnabled) {
      window.speechSynthesis?.cancel();
      setIsSpeaking(false);
    }
  }, [isOpen, voiceEnabled]);

  // Voice input
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
      handleSendMessage(transcript);
    };
    recognition.start();
    recognitionRef.current = recognition;
  };

  const stopListening = () => {
    recognitionRef.current?.stop();
    setIsListening(false);
  };

  const handleSendMessage = (text) => {
    const trimmed = (text !== undefined ? text : input).trim();
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
      setMessages(prev => [...prev, {
        role: "bot",
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }]);
      setIsTyping(false);
      speak(reply);
    }, 700 + Math.random() * 500);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 300);
    window.speechSynthesis?.cancel();
  };

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

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => { setIsOpen(true); setHasUnread(false); }}
          className="fixed bottom-6 right-5 z-50 group"
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
            <span className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-black/80 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
              Ask AI Assistant ✨
            </span>
          </div>
        </button>
      )}

      {/* ── MOBILE: Bottom Sheet Overlay ── */}
      {isOpen && isMobile && (
        <>
          {/* Backdrop */}
          <div
            className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
            onClick={handleClose}
          />

          {/* Bottom Sheet Panel */}
          <div
            className={`fixed bottom-0 left-0 right-0 z-50 flex flex-col rounded-t-3xl overflow-hidden
                        shadow-[0_-12px_40px_rgba(0,0,0,0.5)] border-t border-white/10
                        transition-transform duration-300 ease-out
                        ${isVisible ? "translate-y-0" : "translate-y-full"}`}
            style={{
              height: "78vh",
              background: "linear-gradient(165deg, #1a1a2e 0%, #16213e 55%, #0f3460 100%)",
            }}
          >
            {/* Drag Handle */}
            <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
              <div className="w-10 h-1 rounded-full bg-white/20" />
            </div>

            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className={`w-9 h-9 rounded-full bg-gradient-to-br from-[#0071e3] to-[#bf5af2] flex items-center justify-center ${isSpeaking ? "animate-pulse" : ""}`}>
                    <Bot size={17} className="text-white" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#1a1a2e]" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-tight">Dulana's AI Assistant</p>
                  <p className={`text-[10px] ${isSpeaking ? "text-blue-400" : isListening ? "text-red-400" : "text-emerald-400"}`}>
                    {isSpeaking ? "🔊 Speaking..." : isListening ? "🎙️ Listening..." : "● Online • Instant reply"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                {/* Voice toggle */}
                <button
                  onClick={() => { setVoiceEnabled(!voiceEnabled); if (voiceEnabled) window.speechSynthesis?.cancel(); }}
                  className={`p-2 rounded-full transition-all ${voiceEnabled ? "bg-blue-500/20 text-blue-400" : "text-white/30 hover:text-white/60"}`}
                  title={voiceEnabled ? "Voice ON" : "Voice OFF"}
                >
                  {voiceEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                </button>

                {/* Close — large, easy to tap */}
                <button
                  onClick={handleClose}
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all active:scale-95"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white ${
                    msg.role === "bot" ? "bg-gradient-to-br from-[#0071e3] to-[#5e5ce6]" : "bg-gradient-to-br from-[#bf5af2] to-[#ff375f]"
                  }`}>
                    {msg.role === "bot" ? <Bot size={14} /> : <User size={14} />}
                  </div>
                  <div className={`max-w-[78%] flex flex-col gap-1 ${msg.role === "user" ? "items-end" : "items-start"}`}>
                    <div className={`px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${
                      msg.role === "bot"
                        ? "bg-white/[0.08] text-white/90 rounded-tl-sm"
                        : "bg-gradient-to-br from-[#0071e3] to-[#5e5ce6] text-white rounded-tr-sm"
                    }`}>
                      {renderMessage(msg.text)}
                    </div>
                    <div className="flex items-center gap-2 px-1">
                      <span className="text-[9px] text-white/30">{msg.time}</span>
                      {msg.role === "bot" && voiceEnabled && (
                        <button onClick={() => speak(msg.text)} className="text-white/20 hover:text-blue-400 transition-colors" title="Replay">
                          <Volume2 size={10} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0071e3] to-[#5e5ce6] flex items-center justify-center">
                    <Bot size={14} className="text-white" />
                  </div>
                  <div className="bg-white/[0.08] px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                    {[0, 150, 300].map((d, i) => (
                      <span key={i} className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: `${d}ms` }} />
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
                  className="flex-shrink-0 text-[10px] px-3 py-1.5 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-[#0071e3] hover:bg-[#0071e3]/10 active:scale-95 transition-all whitespace-nowrap"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="px-4 pb-5 pt-1 flex-shrink-0">
              <div className="flex items-center gap-2 bg-white/[0.07] rounded-2xl border border-white/10 px-3.5 py-3 focus-within:border-[#0071e3]/60 transition-all duration-200">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder={isListening ? "Listening..." : "Ask me anything..."}
                  className="flex-1 bg-transparent text-white text-sm placeholder-white/30 outline-none"
                />
                <button
                  onTouchStart={startListening}
                  onTouchEnd={stopListening}
                  onMouseDown={startListening}
                  onMouseUp={stopListening}
                  className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                    isListening ? "bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.7)] scale-110 animate-pulse" : "bg-white/10 text-white/50 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {isListening ? <MicOff size={15} className="text-white" /> : <Mic size={15} />}
                </button>
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!input.trim()}
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0071e3] to-[#5e5ce6] flex items-center justify-center text-white disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-[0_0_12px_rgba(0,113,227,0.6)] active:scale-95 transition-all"
                >
                  <Send size={15} />
                </button>
              </div>
              <p className="text-center text-[9px] text-white/20 mt-2">
                {voiceEnabled ? "🔊 Voice ON — tap 🔉 to replay" : "🔇 Voice OFF"} • Hold 🎙️ to speak
              </p>
            </div>
          </div>
        </>
      )}

      {/* ── DESKTOP: Floating Panel ── */}
      {isOpen && !isMobile && (
        <div
          className={`fixed bottom-6 right-6 z-50 w-[360px] flex flex-col rounded-3xl overflow-hidden
                      shadow-[0_24px_60px_rgba(0,0,0,0.4)] border border-white/10
                      transition-all duration-300 origin-bottom-right
                      ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
                      ${isMinimized ? "h-16" : "h-[520px]"}`}
          style={{ background: "linear-gradient(145deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#0071e3]/20 to-[#bf5af2]/20 border-b border-white/10 flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br from-[#0071e3] to-[#bf5af2] flex items-center justify-center ${isSpeaking ? "animate-pulse" : ""}`}>
                  <Bot size={18} className="text-white" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-[#1a1a2e]" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-none">Dulana's AI Assistant</p>
                <p className={`text-[10px] mt-0.5 ${isSpeaking ? "text-blue-400" : isListening ? "text-red-400" : "text-emerald-400"}`}>
                  {isSpeaking ? "🔊 Speaking..." : isListening ? "🎙️ Listening..." : "● Online • Instant reply"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => { setVoiceEnabled(!voiceEnabled); if (voiceEnabled) window.speechSynthesis?.cancel(); }}
                className={`p-1.5 rounded-full transition-all ${voiceEnabled ? "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30" : "hover:bg-white/10 text-white/40 hover:text-white"}`}
                title={voiceEnabled ? "Voice ON" : "Voice OFF"}
              >
                {voiceEnabled ? <Volume2 size={15} /> : <VolumeX size={15} />}
              </button>
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1.5 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-all"
              >
                <ChevronDown size={16} className={`transition-transform duration-300 ${isMinimized ? "rotate-180" : ""}`} />
              </button>
              <button
                onClick={handleClose}
                className="p-1.5 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-all"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4" style={{ scrollbarWidth: "none" }}>
                {messages.map((msg, i) => (
                  <div key={i} className={`flex gap-2.5 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                    <div className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white ${
                      msg.role === "bot" ? "bg-gradient-to-br from-[#0071e3] to-[#5e5ce6]" : "bg-gradient-to-br from-[#bf5af2] to-[#ff375f]"
                    }`}>
                      {msg.role === "bot" ? <Bot size={14} /> : <User size={14} />}
                    </div>
                    <div className={`max-w-[78%] flex flex-col gap-1 ${msg.role === "user" ? "items-end" : "items-start"}`}>
                      <div className={`px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${
                        msg.role === "bot"
                          ? "bg-white/[0.07] text-white/90 rounded-tl-sm"
                          : "bg-gradient-to-br from-[#0071e3] to-[#5e5ce6] text-white rounded-tr-sm"
                      }`}>
                        {renderMessage(msg.text)}
                      </div>
                      <div className="flex items-center gap-2 px-1">
                        <span className="text-[9px] text-white/30">{msg.time}</span>
                        {msg.role === "bot" && voiceEnabled && (
                          <button onClick={() => speak(msg.text)} className="text-white/20 hover:text-blue-400 transition-colors" title="Replay">
                            <Volume2 size={10} />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0071e3] to-[#5e5ce6] flex items-center justify-center">
                      <Bot size={14} className="text-white" />
                    </div>
                    <div className="bg-white/[0.07] px-4 py-3 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                      {[0, 150, 300].map((d, i) => (
                        <span key={i} className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: `${d}ms` }} />
                      ))}
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>

              {/* Quick Suggestions */}
              <div className="px-4 pb-2 flex gap-2 overflow-x-auto flex-shrink-0" style={{ scrollbarWidth: "none" }}>
                {["Skills", "Projects", "Contact", "Hire me?", "GitHub"].map((q) => (
                  <button
                    key={q}
                    onClick={() => handleSendMessage(q)}
                    className="flex-shrink-0 text-[10px] px-3 py-1 rounded-full border border-white/15 text-white/60 hover:text-white hover:border-[#0071e3] hover:bg-[#0071e3]/10 transition-all whitespace-nowrap"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="px-4 pb-4 flex-shrink-0">
                <div className="flex items-center gap-2 bg-white/[0.06] rounded-2xl border border-white/10 px-4 py-2.5 focus-within:border-[#0071e3]/60 transition-all duration-200">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder={isListening ? "Listening..." : "Ask me anything..."}
                    className="flex-1 bg-transparent text-white text-xs placeholder-white/30 outline-none"
                  />
                  <button
                    onMouseDown={startListening}
                    onMouseUp={stopListening}
                    className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                      isListening ? "bg-red-500 animate-pulse scale-110" : "bg-white/10 text-white/50 hover:bg-white/20 hover:text-white"
                    }`}
                    title="Hold to speak"
                  >
                    {isListening ? <MicOff size={13} className="text-white" /> : <Mic size={13} />}
                  </button>
                  <button
                    onClick={() => handleSendMessage()}
                    disabled={!input.trim()}
                    className="w-7 h-7 rounded-full bg-gradient-to-br from-[#0071e3] to-[#5e5ce6] flex items-center justify-center text-white disabled:opacity-40 hover:shadow-[0_0_12px_rgba(0,113,227,0.6)] transition-all hover:scale-105"
                  >
                    <Send size={13} />
                  </button>
                </div>
                <p className="text-center text-[9px] text-white/20 mt-1.5">
                  {voiceEnabled ? "🔊 Voice ON" : "🔇 Voice OFF"} • Hold 🎙️ to speak
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};
