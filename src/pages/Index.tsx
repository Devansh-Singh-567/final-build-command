import Starfield from "@/components/Starfield";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DomainsSection from "@/components/DomainsSection";
import TimelineSection from "@/components/TimelineSection";
import PrizesSection from "@/components/PrizesSection";
import FAQSection from "@/components/FAQSection";
import SponsorsSection from "@/components/SponsorsSection";
import ContactSection from "@/components/ContactSection";
import RegisterSection from "@/components/RegisterSection";
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
    <FAQSection />
    <SponsorsSection />
    <ContactSection />
    <RegisterSection />
    <Footer />
  </div>
);

export default Index;
