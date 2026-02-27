import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Nebula fog */}
      <div className="absolute inset-0 bg-gradient-to-b from-cosmic-purple/20 via-transparent to-space-deep/80 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cosmic-purple/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="font-heading text-xs tracking-[0.4em] text-primary mb-6 uppercase">
            G.H. Raisoni International Skill Tech University, Pune
          </p>

          <p className="font-heading text-2xl sm:text-3xl md:text-4xl text-primary mb-6 uppercase tracking-wider">
            presents
          </p>

          <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none text-metallic mb-4">
            THE FINAL
            <br />
            BUILD
            <span className="text-primary"> 1.0</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-muted-foreground text-lg sm:text-xl font-light tracking-wide mt-6 mb-10"
        >
          24 Hours. One Solution. Infinite Possibilities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://unstop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-heading text-sm font-bold uppercase tracking-widest animate-pulse-glow hover:scale-105 transition-transform duration-300 inline-block"
          >
            Register Now
          </a>
          <button
            onClick={() => scrollTo("domains")}
            className="px-8 py-4 rounded-lg border border-primary/40 text-primary font-heading text-sm font-bold uppercase tracking-widest hover:bg-primary/10 hover:border-primary/60 transition-all duration-300"
          >
            Explore Domains
          </button>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
