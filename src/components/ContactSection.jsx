import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const canvasRef = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const message = `*New Message from Portfolio*
    
*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}

*Message:*
${formData.message}

---
Sent from Dulana Chathurma Portfolio`;
    
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "94767574844";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
    
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 500);
  };

  // --- INTERACTIVE GRAPH CANVAS WITH MOBILE PERFORMANCE OPTIMIZATION ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    let mouse = { x: null, y: null, radius: 150 };

    const isMobile = window.innerWidth < 768;

    const handleMouseMove = (e) => {
      if (isMobile) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    const parent = canvas.parentElement;
    parent.addEventListener("mousemove", handleMouseMove, { passive: true });
    parent.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    const particleCount = Math.floor((width * height) / 9500);

    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 1.5 + 1.2,
    }));

    let animationFrameId;

    const drawGrid = (isDark) => {
      const gridSize = 45;
      ctx.beginPath();
      ctx.lineWidth = 0.6;
      ctx.strokeStyle = isDark
        ? "rgba(255, 255, 255, 0.05)"
        : "rgba(0, 0, 0, 0.065)";

      for (let x = 0; x <= width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = 0; y <= height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, width, height);
      const isDark = document.documentElement.classList.contains("dark");

      drawGrid(isDark);

      if (isMobile) return;

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        if (mouse.x !== null && mouse.y !== null) {
          let dx = mouse.x - p.x;
          let dy = mouse.y - p.y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            let force = (mouse.radius - dist) / mouse.radius;
            p.x -= (dx / dist) * force * 3;
            p.y -= (dy / dist) * force * 3;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? "rgba(255, 255, 255, 0.45)"
          : "rgba(51, 65, 85, 0.5)";
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          let p2 = particles[j];
          let dx = p.x - p2.x;
          let dy = p.y - p2.y;
          let dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);

            const alpha = 1 - dist / 120;
            ctx.strokeStyle = isDark
              ? `rgba(255, 255, 255, ${0.15 * alpha})`
              : `rgba(71, 85, 105, ${0.25 * alpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animateParticles);
    };

    animateParticles();

    return () => {
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const socialLinks = [
    { 
      name: "LinkedIn", 
      url: "https://linkedin.com/in/dulana-chathurma",
      hoverColor: "hover:bg-[#0a66c2] hover:text-white hover:border-transparent",
      icon: (
        <svg className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    { 
      name: "GitHub", 
      url: "https://github.com/dulanachathurma",
      hoverColor: "hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-transparent",
      icon: (
        <svg className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      )
    },
    { 
      name: "X (Twitter)", 
      url: "https://x.com/DulanaChathurma",
      hoverColor: "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-transparent",
      icon: (
        <svg className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    { 
      name: "Medium", 
      url: "https://medium.com/@dulanachathurma99",
      hoverColor: "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-transparent",
      icon: (
        <svg className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"/>
        </svg>
      )
    },
    { 
      name: "Gmail", 
      url: "mailto:dulanachathurma99@gmail.com",
      hoverColor: "hover:bg-[#ea4335] hover:text-white hover:border-transparent",
      icon: (
        <svg className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    },
  ];

  return (
    <section id="contact" className="pt-24 pb-12 px-4 relative bg-[#f5f5f7] dark:bg-[#000000] overflow-hidden transition-colors duration-500 flex flex-col justify-between min-h-screen">
      {/* 0. HIGH PERFORMANCE CANVAS BACKGROUND */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0 transform-gpu"
        style={{ willChange: "transform" }}
      />

      {/* Dynamic Ambient Background Glow (Thick pure dark effect) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-blue-500/5 via-indigo-500/5 to-cyan-500/5 dark:from-blue-900/10 dark:via-blue-800/10 dark:to-cyan-900/10 rounded-full blur-[150px] opacity-60" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 flex-grow">
        
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-sm md:text-base font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#1d1d1f] dark:text-[#ffffff] tracking-tight">
            Contact Me
          </h2>
          <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-6"></div>
          <p className="text-[#86868b] dark:text-zinc-400 max-w-2xl mx-auto text-sm md:text-lg">
            Get in touch with me for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Side - Socials & Map */}
          <div className="space-y-8">
            
            {/* CONNECT WITH ME */}
            <div className="group relative rounded-2xl">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-600/0 via-cyan-500/0 to-blue-600/0 dark:from-blue-600/15 dark:via-cyan-400/10 dark:to-blue-600/15 blur-lg opacity-100 pointer-events-none" />
              <div className="relative bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-slate-300/80 dark:border-zinc-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_0_25px_rgba(0,0,0,0.8)]">
                <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest mb-5 text-slate-900 dark:text-zinc-200">
                  Connect with me
                </h4>
                <div className="flex gap-3 md:gap-4 flex-wrap">
                  {socialLinks.map((social) => (
                    <a 
                      key={social.name}
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`p-3.5 md:p-4 rounded-xl bg-slate-50 dark:bg-[#121212] text-slate-600 dark:text-zinc-300 border border-slate-200/60 dark:border-zinc-800 transition-all duration-300 hover:-translate-y-0.5 ${social.hoverColor} shadow-sm`}
                      title={social.name}
                    >
                      <div className="flex items-center justify-center">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* FIND ME */}
            <div className="group relative rounded-2xl">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-600/0 via-cyan-500/0 to-blue-600/0 dark:from-blue-600/15 dark:via-cyan-400/10 dark:to-blue-600/15 blur-lg opacity-100 pointer-events-none" />
              <div className="relative bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-slate-300/80 dark:border-zinc-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_0_25px_rgba(0,0,0,0.8)]">
                <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest mb-4 text-slate-900 dark:text-zinc-200">
                  Find me
                </h4>
                
                {/* Location Display */}
                <div className="flex items-start gap-3 md:gap-4 p-4 md:p-5 mb-4 rounded-xl bg-slate-50 dark:bg-[#121212] border border-slate-200/40 dark:border-zinc-800">
                  <div className="p-2 md:p-2.5 rounded-lg bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/30 shrink-0">
                    <MapPin size={20} fill="currentColor" fillOpacity="0.1" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs md:text-sm font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">Current Location</p>
                    <p className="text-sm md:text-base font-semibold text-slate-800 dark:text-zinc-200 leading-relaxed">
                      Chathurma samanala Mawatha, Kopiwatta, <br />
                      Getamanna, Beliatta.
                    </p>
                  </div>
                </div>

                {/* Map Iframe */}
                <div className="rounded-xl overflow-hidden h-48 md:h-56 shadow-inner border border-slate-100 dark:border-zinc-800">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15873.34442111162!2d80.7310344!3d6.0445209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae143162799ef17%3A0x64cf557b7f167e4e!2sGetamanna!5e0!3m2!1sen!2slk!4v1718900000000!5m2!1sen!2slk"
                    className="w-full h-full transition-all duration-700 dark:invert-[0.9] dark:hue-rotate-180"
                    allowFullScreen 
                    loading="lazy"
                    title="Getamanna Kopiwatta Beliatta Map Location"
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right Side - Contact Form Container */}
          <div className="group relative rounded-2xl">
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-600/0 via-cyan-500/0 to-blue-600/0 dark:from-blue-600/15 dark:via-cyan-400/10 dark:to-blue-600/15 blur-lg opacity-100 pointer-events-none" />
            <div className="relative bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-slate-300/80 dark:border-zinc-800/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_0_25px_rgba(0,0,0,0.8)]">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-slate-800 dark:text-white tracking-tight">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                <div>
                  <label className="block text-xs md:text-sm font-bold uppercase tracking-wider mb-2 text-slate-400 dark:text-zinc-400">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 md:py-3.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-[#121212] focus:outline-none focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-blue-600 dark:focus:border-blue-500 transition-all text-sm md:text-base text-slate-800 dark:text-white placeholder:text-slate-400/70 dark:placeholder:text-zinc-600"
                    placeholder="John Doe"
                  />
                </div>
                
                <div>
                  <label className="block text-xs md:text-sm font-bold uppercase tracking-wider mb-2 text-slate-400 dark:text-zinc-400">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 md:py-3.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-[#121212] focus:outline-none focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-blue-600 dark:focus:border-blue-500 transition-all text-sm md:text-base text-slate-800 dark:text-white placeholder:text-slate-400/70 dark:placeholder:text-zinc-600"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-xs md:text-sm font-bold uppercase tracking-wider mb-2 text-slate-400 dark:text-zinc-400">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 md:py-3.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-[#121212] focus:outline-none focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-blue-600 dark:focus:border-blue-500 transition-all text-sm md:text-base text-slate-800 dark:text-white placeholder:text-slate-400/70 dark:placeholder:text-zinc-600"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label className="block text-xs md:text-sm font-bold uppercase tracking-wider mb-2 text-slate-400 dark:text-zinc-400">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 md:py-3.5 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-[#121212] focus:outline-none focus:ring-1 focus:ring-blue-600 dark:focus:ring-blue-500 focus:border-blue-600 dark:focus:border-blue-500 transition-all text-sm md:text-base resize-none text-slate-800 dark:text-white placeholder:text-slate-400/70 dark:placeholder:text-zinc-600"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm hover:shadow-md hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed text-sm md:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      <span>Send via WhatsApp</span>
                    </>
                  )}
                </button>
              </form>
              
              <p className="text-[11px] md:text-xs font-medium text-center text-slate-400 dark:text-zinc-500 mt-5 pt-3 border-t border-slate-100 dark:border-zinc-800/80">
                <MessageCircle size={13} className="inline mr-1 text-green-500" />
                Your message will be sent directly to my WhatsApp
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* --- FOOTER SECTION WITH DISTINCT DIVIDER --- */}
      <footer className="mt-20 pt-8 border-t border-slate-300/70 dark:border-zinc-800/80 relative z-10 w-full transition-colors duration-500">
        <div className="container mx-auto max-w-6xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs md:text-sm text-slate-500 dark:text-zinc-400">
            Copyright © {new Date().getFullYear()} Dulana Chathurma. All rights reserved.
          </p>
          <p className="text-xs md:text-sm text-slate-400 dark:text-zinc-500">
            Designed & Developed with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </section>
  );
};
