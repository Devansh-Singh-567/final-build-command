import { useScrollReveal } from "@/hooks/useScrollReveal";

const AboutSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <p className="font-heading text-xs tracking-[0.3em] uppercase text-amber mb-3">Classified Briefing</p>
          <h2 className="font-display text-5xl md:text-6xl text-metallic">About the Mission</h2>
          <div className="section-divider mt-6 mx-auto max-w-md" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Phase 1 */}
          <div className="slide-in-left tactical-card p-8">
            <p className="font-heading text-xs tracking-[0.2em] text-amber mb-4">PHASE 01</p>
            <h3 className="font-display text-3xl text-foreground mb-4">Online Screening</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Teams submit innovative ideas across 9 cutting-edge domains. A panel of experts evaluates
              creativity, feasibility, and impact. Only the strongest move forward.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="slide-in-right tactical-card p-8 blueprint-grid">
            <p className="font-heading text-xs tracking-[0.2em] text-amber mb-4">PHASE 02</p>
            <h3 className="font-display text-3xl text-foreground mb-4">24-Hour Offline Finale</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Shortlisted teams converge at the command center for an intense 24-hour build marathon.
              Mentorship, resources, and an electrifying atmosphere fuel the final push.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
