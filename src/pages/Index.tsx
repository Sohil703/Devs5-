import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TeamSection from "@/components/TeamSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import WhyHireUs from "@/components/WhyHireUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background antialiased selection:bg-primary/20 selection:text-primary">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <TeamSection />
    <SkillsSection />
    <ProjectsSection />
    <WhyHireUs />
    <TestimonialsSection />
    <StatsSection />
    <Footer />
  </div>
);

export default Index;
