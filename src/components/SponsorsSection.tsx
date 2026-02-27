import { motion } from "framer-motion";

const SponsorsSection = () => (
  <section id="sponsors" className="relative py-24">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-metallic mb-4">
          Sponsors
        </h2>
        <div className="section-divider w-48 mx-auto mb-6" />
        <p className="text-muted-foreground">Sponsor logos will appear here</p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="glass-panel rounded-xl h-24 flex items-center justify-center text-muted-foreground text-sm opacity-50 hover:opacity-100 transition-opacity"
          >
            Sponsor {i}
          </div>
        ))}
      </div>

      <div className="text-center">
        <button className="px-6 py-3 rounded-lg border border-primary/40 text-primary font-heading text-xs font-bold uppercase tracking-widest hover:bg-primary/10 transition-all">
          Become a Sponsor
        </button>
      </div>
    </div>
  </section>
);

export default SponsorsSection;
