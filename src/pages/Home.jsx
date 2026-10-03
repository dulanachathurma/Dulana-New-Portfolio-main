import Navbar from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { ConstellationBackground } from "@/components/ConstellationBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { EducationSection } from "../components/EducationSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { CertificatesSection } from "../components/CertificatesSection";
import { ArticlesSection } from "../components/ArticlesSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { AIAssistant } from "../components/AIAssistant";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />
      <ConstellationBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificatesSection />
        <ArticlesSection />
        <ContactSection />
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
};