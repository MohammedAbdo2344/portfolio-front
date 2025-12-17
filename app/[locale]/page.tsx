import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import FeaturedProjects from "@/components/featured-projects";
import TechnologiesSection from "@/components/technologies-section";
import ContactSection from "@/components/contact-section";

export default function Home({ params }: { params: Promise<{ locale: string }> }) {
  return (
    <div className="min-h-screen gradient-bg text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <TechnologiesSection />
      <ContactSection />
    </div>
  );
}
