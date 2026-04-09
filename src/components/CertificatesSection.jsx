import { ExternalLink, Calendar, MapPin, Award } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Online Certification Course",
    organization: "Open Learning Platform",
    location: "Moratuwa, Sri Lanka",
    date: "Oct 2025 - Jan 2027",
    description: "Specialized programming courses through Open Learning platform focusing on Python development and software engineering principles.",
    image: "/certificate-online-courses.jpg",
    skills: ["Python", "Python Calculator projects", "Software Development Process"],
    links: [
      { text: "Python Certificate", url: "https://www.linkedin.com/in/dulana-chathurma/overlay/Certifications/1285080660/treasury/?profileId=ACoAAFDfMasBoGUec8AKadGJzB74e0K0BTBPegE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BxAMr3FWFQpWmEla9JIUMBA%3D%3D" },
      { text: "Web Design", url: "https://www.linkedin.com/in/dulana-chathurma/overlay/Certifications/1753715295/treasury/?profileId=ACoAAFDfMasBoGUec8AKadGJzB74e0K0BTBPegE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BxAMr3FWFQpWmEla9JIUMBA%3D%3D" },
      { text: "Advanced Python", url: "https://www.linkedin.com/in/dulana-chathurma/overlay/Certifications/1128708382/treasury/?profileId=ACoAAFDfMasBoGUec8AKadGJzB74e0K0BTBPegE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BxAMr3FWFQpWmEla9JIUMBA%3D%3D" }
    ],
    tagColor: "bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300"
  },
  {
    id: 2,
    title: "Diploma in English (CERF Level B1)",
    organization: "Dekma Institute Matara",
    location: "Matara, Sri Lanka",
    date: "Jun 2024 - Dec 2024",
    description: "Comprehensive English language program focusing on communication skills, writing proficiency, and spoken English at CERF B1 level.",
    image: "/certificate-english-diploma.jpg",
    skills: ["Communication with English", "Writing English", "Spoken English", "Speaking English"],
    links: [
      { text: "View Certificate", url: "https://www.linkedin.com/in/dulana-chathurma/overlay/Certifications/765265356/treasury/?profileId=ACoAAFDfMasBoGUec8AKadGJzB74e0K0BTBPegE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BxAMr3FWFQpWmEla9JIUMBA%3D%3D" }
    ],
    tagColor: "bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300"
  },
  {
    id: 3,
    title: "Online Certification Course - Udemy",
    organization: "Udemy Online Platform",
    location: "Online",
    date: "2025",
    description: "Comprehensive collection of Udemy courses covering Generative AI, Machine Learning, Full Stack Development, and programming fundamentals.",
    image: "/certificate-udemy-courses.jpg",
    skills: ["Generative AI", "Machine Learning", "Full Stack", "Java", "HTML/CSS/JS"],
    links: [
      { text: "Generative AI", url: "https://www.udemy.com/certificate/UC-f0f045c8-41ac-4fe2-96fa-8ba8a961f3ce/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com" },
      { text: "AI Chatbot", url: "https://www.udemy.com/certificate/UC-1574a301-ef07-4bf3-99b7-5e9bfca6b716/" },
      { text: "HTML/CSS/JS", url: "https://www.udemy.com/certificate/UC-226a83f7-6610-4734-9c04-b6216d8f257a/" },
      { text: "Machine Learning", url: "https://www.udemy.com/certificate/UC-43e7411b-68f6-4c4a-8338-37498974e265/" },
      { text: "Java", url: "https://www.udemy.com/certificate/UC-4f2803e2-1da6-4447-9be2-f6cc0b362622/" },
      { text: "Full Stack", url: "https://www.udemy.com/certificate/UC-ec191fa2-27b7-4249-8769-e8839a904032/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com" }
    ],
    tagColor: "bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300"
  },
  {
    id: 4,
    title: "Online Certification Course - HackerRank",
    organization: "HackerRank Platform",
    location: "Online",
    date: "2025",
    description: "Programming challenges and skill assessments demonstrating proficiency in problem-solving and coding abilities.",
    image: "/certificate-hackerrank.jpg",
    skills: ["Problem Solving", "Coding", "Algorithms"],
    links: [
      { text: "Certificate 1", url: "https://www.hackerrank.com/certificates/iframe/b36c14090ce1" },
      { text: "Certificate 2", url: "https://www.hackerrank.com/certificates/iframe/26a32f7f5087" }
    ],
    tagColor: "bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300"
  },
  {
    id: 5,
    title: "Microsoft Certificates",
    organization: "Microsoft Learn",
    location: "Online",
    date: "2025",
    description: "Achieved Microsoft technology associate-level credentials, demonstrating proficiency in Azure, AI fundamentals, and developer tools.",
    image: "/certificate-microsoft.jpg",
    skills: ["Azure", "AI Fundamentals", "Developer Tools"],
    links: [
      { text: "View on LinkedIn", url: "https://www.linkedin.com/in/dulana-chathurma/overlay/Certifications/324568203/image-list/?profileId=ACoAAFDfMasBoGUec8AKadGJzB74e0K0BTBPegE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BDWEo3HrFRQSHpb6dXY8xNg%3D%3D" }
    ],
    tagColor: "bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300"
  },
  {
    id: 6,
    title: "AWS Certificates",
    organization: "Amazon Web Services (AWS)",
    location: "Online",
    date: "2025",
    description: "Cloud practitioner and specialty certifications validating expertise in AWS cloud architecture, development, and machine learning.",
    image: "/certificate-aws.jpg",
    skills: ["Cloud Architecture", "AWS Development", "Machine Learning"],
    links: [
      { text: "View on LinkedIn", url: "https://www.linkedin.com/in/dulana-chathurma/overlay/Certifications/324286717/treasury/?profileId=ACoAAFDfMasBoGUec8AKadGJzB74e0K0BTBPegE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BDWEo3HrFRQSHpb6dXY8xNg%3D%3D" }
    ],
    tagColor: "bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300"
  }
];

export const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Professional Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Certificates
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and courses I've completed to enhance my skills
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              className="group rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border border-gray-200 dark:border-gray-700"
            >
              {/* Image Container */}
              <div className="relative h-44 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-3 right-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Award className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Title */}
                <h3 className="text-lg font-bold mb-1 text-gray-800 dark:text-white line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h3>
                
                {/* Organization */}
                <p className="text-sm text-primary font-medium mb-2">{cert.organization}</p>
                
                {/* Location & Date */}
                <div className="flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} /> {cert.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {cert.date}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-xs mb-4 leading-relaxed line-clamp-2">
                  {cert.description}
                </p>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cert.skills.slice(0, 3).map((skill, idx) => (
                    <span key={idx} className={`px-2 py-0.5 text-xs rounded-full ${cert.tagColor} font-medium`}>
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Links */}
                <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100 dark:border-gray-700">
                  {cert.links.slice(0, 2).map((link, idx) => (
                    <a 
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary-dark transition-colors duration-300 hover:gap-1.5"
                    >
                      {link.text} <ExternalLink size={10} />
                    </a>
                  ))}
                  {cert.links.length > 2 && (
                    <a 
                      href="#"
                      className="inline-flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-primary transition-colors duration-300"
                    >
                      +{cert.links.length - 2} more
                    </a>
                  )}
                </div>
              </div>
              
              {/* Bottom Gradient Line */}
              <div className="h-0.5 w-full bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* View All Button - Blue */}
        <div className="text-center mt-12">
          <a 
            href="https://www.linkedin.com/in/dulana-chathurma/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            View All on LinkedIn <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};