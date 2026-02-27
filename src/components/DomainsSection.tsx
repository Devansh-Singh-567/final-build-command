import { motion } from "framer-motion";
import { Lightbulb, Brain, Shield, Link, Leaf, DollarSign, GraduationCap, Heart, Gamepad2 } from "lucide-react";

const domains = [
  { icon: Lightbulb, name: "Open Innovation", desc: "Solve real-world problems with creative, unconventional approaches." },
  { icon: Brain, name: "AI & ML", desc: "Build intelligent systems that learn, adapt, and transform industries." },
  { icon: Shield, name: "Cybersecurity", desc: "Defend digital frontiers with next-gen security solutions." },
  { icon: Link, name: "Web3 & Blockchain", desc: "Decentralize trust and reshape digital ownership." },
  { icon: Leaf, name: "Sustainability Tech", desc: "Engineer solutions for a greener, more resilient planet." },
  { icon: DollarSign, name: "FinTech", desc: "Reimagine financial services with technology-driven innovation." },
  { icon: GraduationCap, name: "EdTech", desc: "Transform learning experiences through technology." },
  { icon: Heart, name: "HealthTech", desc: "Innovate healthcare solutions for better patient outcomes." },
  { icon: Gamepad2, name: "GamingTech", desc: "Create immersive gaming experiences with cutting-edge technology." },
];

const DomainsSection = () => (
  <section id="domains" className="relative py-24">
    <div className="container mx-auto px-4 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-metallic mb-4">
          Domains
        </h2>
        <div className="section-divider w-48 mx-auto" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {domains.map((d, i) => (
          <motion.div
            key={d.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="glass-panel rounded-xl p-6 group cursor-pointer"
          >
            <d.icon className="text-primary mb-3 group-hover:scale-110 transition-transform" size={28} />
            <h3 className="font-heading text-sm font-bold text-foreground mb-2">{d.name}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-20 overflow-hidden">
              {d.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DomainsSection;
