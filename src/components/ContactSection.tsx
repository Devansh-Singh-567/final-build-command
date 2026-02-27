import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: "", email: "", college: "", category: "General", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder
    alert("Message sent! We'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <p className="font-heading text-xs tracking-[0.3em] uppercase text-amber mb-3">Comms</p>
          <h2 className="font-display text-5xl md:text-6xl text-metallic">Contact</h2>
          <div className="section-divider mt-6 mx-auto max-w-md" />
        </div>

        <form onSubmit={handleSubmit} className="fade-in-section space-y-4">
          <input
            type="text"
            placeholder="Name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-amber transition-colors font-body"
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-amber transition-colors font-body"
          />
          <input
            type="text"
            placeholder="College"
            value={form.college}
            onChange={(e) => setForm({ ...form, college: e.target.value })}
            className="w-full bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-amber transition-colors font-body"
          />
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground focus:outline-none focus:border-amber transition-colors font-body"
          >
            <option>General</option>
            <option>Technical</option>
            <option>Sponsorship</option>
            <option>Other</option>
          </select>
          <textarea
            placeholder="Message"
            rows={4}
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full bg-card border border-border rounded-sm px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-amber transition-colors resize-none font-body"
          />
          <button type="submit" className="btn-amber rounded-sm w-full">
            Send Message
          </button>
        </form>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 fade-in-section text-muted-foreground text-sm">
          <a href="mailto:hackathon@raisoni.net" className="flex items-center gap-2 hover:text-amber transition-colors">
            <Mail className="w-4 h-4" /> hackathon@raisoni.net
          </a>
          <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-amber transition-colors">
            <Phone className="w-4 h-4" /> +91 98765 43210
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
