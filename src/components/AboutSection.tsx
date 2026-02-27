import { motion } from "framer-motion";
import { Monitor, Users } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="relative py-24 grid-overlay">
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-metallic mb-4">
          About the Mission
        </h2>
        <div className="section-divider w-48 mx-auto" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-xl p-8"
        >
          <Monitor className="text-primary mb-4" size={32} />
          <h3 className="font-heading text-lg font-bold text-foreground mb-3">
            Phase 1 — Online Screening
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Submit your innovative solutions through Unstop. Top teams will be
            shortlisted based on creativity, feasibility, and technical depth.
            This is your gateway to the grand finale.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel rounded-xl p-8"
        >
          <Users className="text-primary mb-4" size={32} />
          <h3 className="font-heading text-lg font-bold text-foreground mb-3">
            Phase 2 — 24-Hour Offline Finale
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Shortlisted teams converge for an intense 24-hour build sprint.
            Code, create, and compete in a high-energy environment with mentors,
            workshops, and everything you need to ship your vision.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
