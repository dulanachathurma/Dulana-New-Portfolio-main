import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useState } from "react";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const socialLinks = [
    { 
      name: "LinkedIn", 
      url: "https://linkedin.com/in/dulana-chathurma",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    },
    { 
      name: "GitHub", 
      url: "https://github.com/dulanachathurma",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      )
    },
    { 
      name: "Medium", 
      url: "https://medium.com/@dulanachathurma99",
      icon: (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"/>
        </svg>
      )
    },
   { 
  name: "Gmail", 
  url: "mailto:dulanachathurma99@gmail.com",
  icon: (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
},
  ];

  return (
    <section id="contact" className="py-24 px-4 relative bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-slate-200/50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-200 text-sm font-medium mb-4 backdrop-blur-sm border border-slate-300/30 dark:border-slate-700/30">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white tracking-tight">
            Contact Me
          </h2>
          <div className="w-12 h-0.5 bg-slate-900 dark:bg-white mx-auto mb-6 opacity-30"></div>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-sm">
            Get in touch with me for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Side - Socials & Map */}
          <div className="space-y-8">
            
            {/* CONNECT WITH ME */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/60 dark:border-slate-800/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-5 text-slate-900 dark:text-white">
                Connect with me
              </h4>
              <div className="flex gap-3 flex-wrap">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-800/60 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-transparent shadow-sm"
                    title={social.name}
                  >
                    <div className="w-5 h-5 flex items-center justify-center">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* FIND ME */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/60 dark:border-slate-800/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4 text-slate-900 dark:text-white">
                Find me
              </h4>
              
              {/* Premium Apple Style Clear Location Display */}
              <div className="flex items-start gap-3 p-4 mb-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/40 dark:border-slate-800/40">
                <div className="p-2 rounded-lg bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400 border border-red-100 dark:border-red-900/30 shrink-0">
                  <MapPin size={18} fill="currentColor" fillOpacity="0.1" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Current Location</p>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">
                    Chathurma samanala Mawatha, Kopiwatta, <br />
                    Getamanna, Beliatta.
                  </p>
                </div>
              </div>

              {/* Map Iframe */}
              <div className="rounded-xl overflow-hidden h-48 shadow-inner border border-slate-100 dark:border-slate-800/60">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.3242095640165!2d80.74100000000001!3d6.0461667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae143162799ef17%3A0x64cf557b7f167e4e!2sGetamanna!5e0!3m2!1sen!2slk!4v1718900000000!5m2!1sen!2slk"
                  className="w-full h-full grayscale dark:invert dark:opacity-70 transition-all duration-700 hover:grayscale-0 dark:hover:invert-0"
                  allowFullScreen 
                  loading="lazy"
                  title="Location Map"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form Container */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 md:p-8 border border-slate-200/60 dark:border-slate-800/80 shadow-[0_4px_24px_rgba(0,0,0,0.02)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
            <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-white tracking-tight">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-400 dark:text-slate-500">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-1 focus:ring-slate-900 dark:focus:ring-white focus:border-slate-900 dark:focus:border-white transition-all text-sm text-slate-800 dark:text-white placeholder:text-slate-400/70"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-400 dark:text-slate-500">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-1 focus:ring-slate-900 dark:focus:ring-white focus:border-slate-900 dark:focus:border-white transition-all text-sm text-slate-800 dark:text-white placeholder:text-slate-400/70"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-400 dark:text-slate-500">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-1 focus:ring-slate-900 dark:focus:ring-white focus:border-slate-900 dark:focus:border-white transition-all text-sm text-slate-800 dark:text-white placeholder:text-slate-400/70"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-slate-400 dark:text-slate-500">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 focus:outline-none focus:ring-1 focus:ring-slate-900 dark:focus:ring-white focus:border-slate-900 dark:focus:border-white transition-all text-sm resize-none text-slate-800 dark:text-white placeholder:text-slate-400/70"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-sm hover:shadow-md hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed text-sm"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    <span>Send via WhatsApp</span>
                  </>
                )}
              </button>
            </form>
            
            <p className="text-[11px] font-medium text-center text-slate-400 dark:text-slate-500 mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/60">
              <MessageCircle size={12} className="inline mr-1 text-green-500" />
              Your message will be sent directly to my WhatsApp
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
