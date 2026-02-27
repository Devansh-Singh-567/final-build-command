import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DomainsSection from "@/components/DomainsSection";
import TimelineSection from "@/components/TimelineSection";
import RoundsSection from "@/components/RoundsSection";
import PrizesSection from "@/components/PrizesSection";
import ResultsSection from "@/components/ResultsSection";
import FAQSection from "@/components/FAQSection";
import LocationSection from "@/components/LocationSection";
import FooterSection from "@/components/FooterSection";
import RainOverlay from "@/components/RainOverlay";
import BackgroundMusic from "@/components/BackgroundMusic";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <BackgroundMusic />
      <RainOverlay />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DomainsSection />
      <TimelineSection />
      <RoundsSection />
      <PrizesSection />
      <ResultsSection />
      <FAQSection />
      <LocationSection />
      <FooterSection />
    </div>
  );
};

export default Index;
