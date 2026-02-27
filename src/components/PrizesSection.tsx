import { motion } from "framer-motion";
import { Trophy, Award, Medal, Star } from "lucide-react";

const prizes = [
  { icon: Trophy, title: "First Prize", prize: "₹50,000", color: "from-yellow-500/20 to-yellow-600/5", border: "border-yellow-500/30" },
  { icon: Award, title: "Second Prize", prize: "₹30,000", color: "from-gray-300/10 to-gray-400/5", border: "border-gray-400/30" },
  { icon: Medal, title: "Third Prize", prize: "₹20,000", color: "from-amber-700/10 to-amber-800/5", border: "border-amber-700/30" },
];

const specials = [
  { icon: Star, title: "Best Innovation Idea", prize: "₹15,000" },
  { icon: Star, title: "Best AI Implementation", prize: "₹15,000" },
];

const PrizesSection = () => (
  <section id="prizes" className="relative py-24">
    <div className="container mx-auto px-4 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-metallic mb-4">
          Prizes
        </h2>
        <div className="section-divider w-48 mx-auto" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {prizes.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`rounded-xl p-8 text-center bg-gradient-to-b ${p.color} border ${p.border} backdrop-blur-sm`}
          >
            <p.icon className="mx-auto mb-4 text-gold" size={40} />
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">{p.title}</h3>
            <p className="font-heading text-2xl font-bold glow-text text-primary">{p.prize}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 gap-4 max-w-md mx-auto">
        {specials.map((s) => (
          <div key={s.title} className="glass-panel rounded-xl p-5 text-center">
            <s.icon className="mx-auto mb-2 text-primary" size={24} />
            <p className="font-heading text-xs font-bold text-foreground mb-1">{s.title}</p>
            <p className="font-heading text-sm font-bold text-primary">{s.prize}</p>
          </div>
        ))}
      </div>

      {/* Total Prize Pool */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-10 text-center"
      >
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-lg border border-primary/30 bg-primary/5">
          <Trophy className="text-primary" size={20} />
          <span className="text-primary font-heading text-lg font-bold">
            Total Prize Pool: ₹1,40,000
          </span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default PrizesSection;
