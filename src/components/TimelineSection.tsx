import { useScrollReveal } from "@/hooks/useScrollReveal";

const milestones = [
  { date: "Mar 2026", label: "Registrations Open" },
  { date: "Apr 2026", label: "Submission Deadline" },
  { date: "Apr 2026", label: "Shortlist Announcement" },
  { date: "May 2026", label: "24-Hour Offline Hackathon" },
  { date: "May 2026", label: "Final Evaluation & Awards" },
];

const TimelineSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="timeline" className="py-24 px-6 relative blueprint-grid" ref={ref}>
      <div className="max-w-3xl mx-auto" style={{ maxWidth: "48rem" }}>
        <div className="text-center mb-16 fade-in-section">
          <p className="font-heading text-xs tracking-[0.3em] uppercase text-amber mb-3">Mission Timeline</p>
          <h2 className="font-display text-5xl md:text-6xl text-metallic">Timeline</h2>
          <div className="section-divider mt-6 mx-auto max-w-md" />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {milestones.map((m, i) => (
            <div
              key={i}
              className={`fade-in-section relative flex items-center mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Node */}
              <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-amber -translate-x-1/2 shadow-amber z-10" />

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <p className="font-heading text-xs tracking-[0.2em] text-amber mb-1">{m.date}</p>
                <p className="font-heading text-base tracking-wider uppercase text-foreground">{m.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
