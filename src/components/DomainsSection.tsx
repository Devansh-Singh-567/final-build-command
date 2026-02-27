import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Lightbulb, Brain, Shield, Link, Leaf, Landmark, GraduationCap, HeartPulse, Gamepad2,
} from "lucide-react";

const domains = [
  { name: "Open Innovation", icon: Lightbulb },
  { name: "AI & ML", icon: Brain },
  { name: "Cybersecurity", icon: Shield },
  { name: "Web3 & Blockchain", icon: Link },
  { name: "Sustainability Tech", icon: Leaf },
  { name: "FinTech", icon: Landmark },
  { name: "EdTech", icon: GraduationCap },
  { name: "HealthTech", icon: HeartPulse },
  { name: "GamingTech", icon: Gamepad2 },
];

const DomainsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="domains" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <p className="font-heading text-xs tracking-[0.3em] uppercase text-amber mb-3">Operation Fields</p>
          <h2 className="font-display text-5xl md:text-6xl text-metallic">Domains</h2>
          <div className="section-divider mt-6 mx-auto max-w-md" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((d, i) => (
            <div
              key={d.name}
              className="fade-in-section tactical-card p-6 flex items-center gap-4 cursor-default group transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <d.icon className="w-6 h-6 text-amber opacity-70 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
              <span className="font-heading text-sm tracking-widest uppercase text-foreground">{d.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;
