import { motion } from "framer-motion";

const milestones = [
  { label: "Registrations Open", date: "Mar 2026" },
  { label: "Submission Deadline", date: "Apr 2026" },
  { label: "Shortlist Announcement", date: "Apr 2026" },
  { label: "24-Hour Offline Hackathon", date: "May 2026" },
  { label: "Final Evaluation & Awards", date: "May 2026" },
];

const TimelineSection = () => (
  <section id="timeline" className="relative py-24 grid-overlay">
    <div className="container mx-auto px-4 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-metallic mb-4">
          Mission Timeline
        </h2>
        <div className="section-divider w-48 mx-auto" />
      </motion.div>

      <div className="relative">
        {/* Line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent -translate-y-1/2" />

        <div className="grid md:grid-cols-5 gap-8 md:gap-4">
          {milestones.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="w-4 h-4 rounded-full bg-primary mx-auto mb-4 shadow-[0_0_20px_hsl(var(--primary)/0.5)] relative z-10" />
              <h4 className="font-heading text-xs font-bold text-foreground mb-1">{m.label}</h4>
              <p className="text-muted-foreground text-xs">{m.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TimelineSection;
