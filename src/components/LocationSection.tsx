import { motion } from "framer-motion";
import { MapPin, Navigation, Clock } from "lucide-react";

const LocationSection = () => {
  const mapUrl = "https://maps.app.goo.gl/z57fhj8MvAZLbsu77";

  return (
    <section id="location" className="relative py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-metallic mb-4">
            Venue Location
          </h2>
          <div className="section-divider w-48 mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass-panel rounded-xl p-8"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <MapPin className="text-primary" size={32} />
            </div>
            
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-metallic mb-2">
              G.H. Raisoni International Skill Tech University
            </h3>
            <p className="text-muted-foreground text-lg mb-2">
              Pune, Maharashtra
            </p>
            <p className="text-primary font-medium">
              THE FINAL BUILD 1.0 Hackathon Venue
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="p-3 rounded-lg bg-secondary/50 border border-border mb-3">
                <MapPin className="text-primary mx-auto" size={24} />
              </div>
              <h4 className="font-heading text-sm font-bold text-foreground mb-2">
                Prime Location
              </h4>
              <p className="text-muted-foreground text-sm">
                Easily accessible from all parts of Pune
              </p>
            </div>

            <div className="text-center">
              <div className="p-3 rounded-lg bg-secondary/50 border border-border mb-3">
                <Navigation className="text-primary mx-auto" size={24} />
              </div>
              <h4 className="font-heading text-sm font-bold text-foreground mb-2">
                Easy Navigation
              </h4>
              <p className="text-muted-foreground text-sm">
                Well-connected by public transport
              </p>
            </div>

            <div className="text-center">
              <div className="p-3 rounded-lg bg-secondary/50 border border-border mb-3">
                <Clock className="text-primary mx-auto" size={24} />
              </div>
              <h4 className="font-heading text-sm font-bold text-foreground mb-2">
                24-Hour Access
              </h4>
              <p className="text-muted-foreground text-sm">
                Open throughout the hackathon duration
              </p>
            </div>
          </div>

          <div className="text-center">
            <motion.a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading text-sm font-bold uppercase tracking-widest hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300"
            >
              <Navigation size={18} />
              Get Directions on Google Maps
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;
