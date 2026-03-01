import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const links = ["Home", "About", "Domains", "Timeline", "Rounds", "Prizes", "Results", "Participants", "FAQs", "Location"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    if (id === "Participants") {
      navigate("/teams");
      setMobileOpen(false);
      return;
    }
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-background/95 backdrop-blur-sm shadow-lg" : "bg-background/30 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-display text-xl tracking-wider text-amber">TFB 1.0</span>

        {/* Desktop */}
        <div className="hidden lg:flex gap-6">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="font-heading text-xs tracking-widest uppercase text-muted-foreground hover:text-amber transition-colors duration-300"
            >
              {l}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-sm border-t border-border px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="font-heading text-sm tracking-widest uppercase text-muted-foreground hover:text-amber transition-colors text-left"
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
