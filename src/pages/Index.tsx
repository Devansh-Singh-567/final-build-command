import Starfield from "@/components/Starfield";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DomainsSection from "@/components/DomainsSection";
import TimelineSection from "@/components/TimelineSection";
import PrizesSection from "@/components/PrizesSection";
import SelectedTeams from "@/components/SelectedTeams";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <Starfield />
    <Navbar />
    <HeroSection />
    <AboutSection />
    <DomainsSection />
    <TimelineSection />
    <PrizesSection />
    <SelectedTeams />
    <FAQSection />
    <ContactSection />
    <LocationSection />
    <Footer />
  </div>
);

export default Index;
