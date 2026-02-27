import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/70" />

      {/* Lightning flicker */}
      <div className="absolute inset-0 bg-foreground/5 animate-lightning pointer-events-none" />

      {/* Fog layer */}
      <div className="absolute bottom-0 left-0 right-0 h-64 animate-fog opacity-20"
        style={{
          background: "linear-gradient(transparent, hsl(0 0% 5% / 0.8))",
        }}
      />

      {/* Bat emblem glow behind text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] opacity-[0.06]"
          style={{
            background: `radial-gradient(ellipse, hsl(44 72% 47% / 0.4), transparent 70%)`,
          }}
        />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-6 transition-all duration-[2000ms] ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <p className="font-heading text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
          G.H. Raisoni International Skill Tech University, Pune
        </p>
        <p className="font-heading text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8">
          presents
        </p>

        <h1 className="font-display text-metallic leading-none mb-2">
          <span className="block text-7xl md:text-9xl lg:text-[10rem]">THE FINAL</span>
          <span className="block text-7xl md:text-9xl lg:text-[10rem] text-metallic-amber">BUILD 1.0</span>
        </h1>

        <p className="font-heading text-sm md:text-base tracking-[0.15em] text-muted-foreground mt-6 mb-12">
          24 Hours. One Solution. Infinite Possibilities.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-amber animate-pulse-glow rounded-sm inline-block text-center"
          >
            Register Now
          </a>
          <button
            onClick={() => scrollTo("domains")}
            className="btn-amber-outline rounded-sm"
          >
            Explore Domains
          </button>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
