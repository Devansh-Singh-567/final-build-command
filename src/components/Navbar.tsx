import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  "Home", "About", "Domains", "Timeline", "Prizes", "FAQs", "Sponsors", "Contact"
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="glass rounded-xl px-6 py-3 flex items-center justify-between">
          <span
            className="font-heading text-sm font-bold tracking-wider text-primary cursor-pointer"
            onClick={() => scrollTo("home")}
          >
            TFB 1.0
          </span>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-xs font-medium tracking-wide text-muted-foreground hover:text-primary transition-colors duration-300 uppercase"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollTo("register")}
              className="ml-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all duration-300"
            >
              Register
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden glass rounded-xl mt-2 p-4 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="block w-full text-left py-2 text-sm text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollTo("register")}
              className="mt-2 w-full px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-bold uppercase tracking-wider"
            >
              Register
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
