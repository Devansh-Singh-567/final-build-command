import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoBackground from "@/components/VideoBackground";
import AboutSection from "@/components/AboutSection";
import DomainsSection from "@/components/DomainsSection";
import TimelineSection from "@/components/TimelineSection";
import RoundsSection from "@/components/RoundsSection";
import PrizesSection from "@/components/PrizesSection";
import ResultsSection from "@/components/ResultsSection";
import FAQSection from "@/components/FAQSection";
import LocationSection from "@/components/LocationSection";
import RainOverlay from "@/components/RainOverlay";
import BackgroundMusic from "@/components/BackgroundMusic";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`min-h-screen bg-background transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <BackgroundMusic />
      <RainOverlay />
      <Navbar />
      <HeroSection />
      <VideoBackground />
      <AboutSection />
      <DomainsSection />
      <TimelineSection />
      <RoundsSection />
      <PrizesSection />
      <ResultsSection />
      <FAQSection />
      <LocationSection />
    </div>
  );
};

export default Index;
