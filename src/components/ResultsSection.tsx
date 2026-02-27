import { useScrollReveal } from "@/hooks/useScrollReveal";

const ResultsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="results" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="fade-in-section">
          <p className="font-heading text-xs tracking-[0.3em] uppercase text-amber mb-3">Status</p>
          <h2 className="font-display text-5xl md:text-6xl text-metallic mb-4">Results</h2>
          <div className="section-divider mt-4 mb-12 mx-auto max-w-md" />
        </div>

        <div className="fade-in-section tactical-card p-12">
          <div className="flex justify-center mb-6">
            <div className="w-3 h-3 rounded-full bg-amber animate-pulse" />
          </div>
          <h3 className="font-display text-3xl text-foreground mb-6">Round Results Coming Soon!</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {["Multiple Domains", "Top Performers", "Announcement Soon"].map((item) => (
              <div key={item} className="p-4 border border-border rounded-sm">
                <p className="font-heading text-sm tracking-widest uppercase text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
