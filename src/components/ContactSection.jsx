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

  const contactInfo = [
    { 
      icon: Mail, 
      text: "dulanachathurma99@gmail.com", 
      href: "mailto:dulanachathurma99@gmail.com", 
      color: "text-blue-500", 
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      borderColor: "group-hover:border-blue-500"
    },
    { 
      icon: Phone, 
      text: "+94 76 75 74 844", 
      href: "tel:+94767574844", 
      color: "text-green-500", 
      bgColor: "bg-green-50 dark:bg-green-950/30",
      borderColor: "group-hover:border-green-500"
    },
    { 
      icon: MapPin, 
      text: "Kopiwatta, Getamanna, Beliatta, Sri Lanka", 
      href: "#", 
      color: "text-red-500", 
      bgColor: "bg-red-50 dark:bg-red-950/30",
      borderColor: "group-hover:border-red-500"
    },
  ];

  const socialLinks = [
    { 
      name: "LinkedIn", 
      url: "https://linkedin.com/in/dulana-chathurma",
      color: "#0077B5",
      bgColor: "bg-[#0077B5]/10",
      hoverBg: "hover:bg-[#0077B5]/20",
      iconColor: "text-[#0077B5]"
    },
    { 
      name: "GitHub", 
      url: "https://github.com/dulanachathurma",
      color: "#333333",
      bgColor: "bg-[#333333]/10",
      hoverBg: "hover:bg-[#333333]/20",
      iconColor: "text-[#333333] dark:text-[#ffffff]"
    },
    { 
      name: "Medium", 
      url: "https://medium.com/@dulanachathurma99",
      color: "#000000",
      bgColor: "bg-black/10 dark:bg-white/10",
      hoverBg: "hover:bg-black/20 dark:hover:bg-white/20",
      iconColor: "text-black dark:text-white"
    },
    { 
      name: "WhatsApp", 
      url: "https://wa.me/94767574844",
      color: "#25D366",
      bgColor: "bg-[#25D366]/10",
      hoverBg: "hover:bg-[#25D366]/20",
      iconColor: "text-[#25D366]"
    },
  ];

  // Social Icons
  const LinkedInIcon = () => (
    <svg className="h-5 w-5" fill="#0077B5" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  );

  const GitHubIcon = () => (
    <svg className="h-5 w-5" fill="#333333" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  const MediumIcon = () => (
    <svg className="h-5 w-5" fill="#000000" viewBox="0 0 24 24">
      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75S24 8.83 24 12z"/>
    </svg>
  );

  const WhatsAppIcon = () => (
    <svg className="h-5 w-5" fill="#25D366" viewBox="0 0 24 24">
      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.181-.573c.978.588 2.014.896 3.15.896h.002c3.18 0 5.767-2.586 5.768-5.766.001-3.18-2.585-5.768-5.766-5.768zm2.421 7.891c-.105.296-.614.582-.842.655-.228.073-.39.102-.631.102-.187 0-.432-.046-.66-.139-.545-.218-1.124-.668-1.541-1.098-.396-.408-.762-.903-1.007-1.447-.226-.502-.274-.969-.135-1.38.086-.253.338-.406.562-.453.14-.03.282-.03.414-.03.104 0 .197.017.285.123.135.163.293.42.365.555.09.168.063.371-.06.531-.121.156-.213.27-.334.435-.076.102-.132.174-.19.264-.074.111-.025.246.058.336.296.317.719.648 1.098.863.216.122.432.191.648.225.141.022.282-.011.423-.074.108-.048.231-.156.306-.258.108-.147.27-.353.369-.456.078-.082.174-.099.276-.051.203.097.606.28.715.369.104.087.158.191.173.301.016.111-.017.245-.079.457z"/>
    </svg>
  );

  const getSocialIcon = (name) => {
    switch(name) {
      case "LinkedIn": return <LinkedInIcon />;
      case "GitHub": return <GitHubIcon />;
      case "Medium": return <MediumIcon />;
      case "WhatsApp": return <WhatsAppIcon />;
      default: return null;
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get in touch with me for collaborations or just a friendly hello
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Get In Touch</h3>
              
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className={`flex items-center gap-4 group transition-all duration-300 hover:translate-x-2 p-3 rounded-xl ${info.bgColor} border border-transparent ${info.borderColor} hover:border-current`}
                  >
                    <div className={`p-3 rounded-full ${info.bgColor} ${info.color} group-hover:scale-110 transition-all duration-300`}>
                      <info.icon className="h-5 w-5" />
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors font-medium">
                      {info.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
              <h4 className="text-xl font-bold mb-5 text-gray-800 dark:text-white">Connect with me</h4>
              <div className="flex gap-4 flex-wrap">
                {socialLinks.map((social) => (
                  <a 
                    key={social.name}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-3.5 rounded-full ${social.bgColor} ${social.hoverBg} transition-all duration-300 hover:scale-110 hover:-translate-y-1 group shadow-md`}
                    title={social.name}
                  >
                    <div className={`${social.iconColor} transition-all duration-300`}>
                      {getSocialIcon(social.name)}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Find me</h4>
              <div className="rounded-xl overflow-hidden h-52 shadow-inner">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.207289909686!2d80.75844177499636!3d6.049260593952773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae142b6c8b5b5a5%3A0x8a0b8c8c8c8c8c8c!2sKopiwatta%2C%20Getamanna%2C%20Beliatta!5e0!3m2!1sen!2slk!4v1690000000000!5m2!1sen!2slk" 
                  className="w-full h-full"
                  allowFullScreen 
                  loading="lazy"
                  title="Location Map"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send me a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-800 dark:text-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-800 dark:text-white"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-gray-800 dark:text-white"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-700 dark:text-gray-300">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-gray-800 dark:text-white"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-md hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    Send via WhatsApp
                  </>
                )}
              </button>
            </form>
            
            <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-5 pt-3 border-t border-gray-100 dark:border-gray-700">
              <MessageCircle size={12} className="inline mr-1 text-green-500" />
              Your message will be sent directly to my WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};