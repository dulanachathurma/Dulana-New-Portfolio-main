import Navbar from "../components/Navbar";
import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { EducationSection } from "../components/EducationSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { OpenSourceSection } from "../components/OpenSourceSection";
import { CertificatesSection } from "../components/CertificatesSection";
import { ArticlesSection } from "../components/ArticlesSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { AIAssistant } from "../components/AIAssistant";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <StarBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <OpenSourceSection />
        <CertificatesSection />
        <ArticlesSection />
        <ContactSection />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
};