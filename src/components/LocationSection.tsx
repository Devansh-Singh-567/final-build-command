import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Navigation, Clock } from "lucide-react";

const LocationSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="location" className="py-24 px-6 relative" ref={ref}>
      {/* Background image fitted to section */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/80" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16 fade-in-section">
          <p className="font-heading text-xs tracking-[0.3em] uppercase text-amber mb-3">Coordinates</p>
          <h2 className="font-display text-5xl md:text-6xl text-metallic">Location</h2>
          <p className="font-heading text-sm tracking-wider text-muted-foreground mt-4">
            THE FINAL BUILD 1.0 Hackathon Venue
          </p>
          <div className="section-divider mt-6 mx-auto max-w-md" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="fade-in-section space-y-6">
            <div>
              <h3 className="font-display text-2xl text-foreground mb-2">G.H. Raisoni International Skill Tech University</h3>
              <p className="text-muted-foreground text-sm">Pune, Maharashtra</p>
            </div>

            <div className="space-y-4">
              {[
                { icon: MapPin, label: "Prime Location" },
                { icon: Navigation, label: "Easy Navigation" },
                { icon: Clock, label: "24-Hour Access" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-amber" strokeWidth={1.5} />
                  <span className="font-heading text-sm tracking-wider uppercase text-foreground">{label}</span>
                </div>
              ))}
            </div>

            <a
              href="https://maps.google.com/?q=G.H.+Raisoni+International+Skill+Tech+University+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amber-outline rounded-sm inline-block mt-4"
            >
              Get Directions on Google Maps
            </a>
          </div>

          <div className="fade-in-section rounded-sm overflow-hidden border border-border h-64 md:h-auto">
            <iframe
              title="Venue Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzEzLjQiTiA3M8KwNTEnMjQuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) brightness(0.4) contrast(1.2)" }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* Copyright notice */}
        <div className="text-center mt-16 fade-in-section">
          <p className="text-white text-xs">
            Copyright © 2026 <a href="https://linkedin.com/in/devansh050607" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-300 transition-colors">Devansh Singh</a> | GHRISTU, Pune
          </p>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
