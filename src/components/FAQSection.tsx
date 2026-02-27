import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "Who can participate?", a: "Any undergraduate or postgraduate student from any recognized institution can participate. Interdisciplinary teams are encouraged." },
  { q: "What is the team size?", a: "Teams must consist of 2 to 4 members. Solo participation is not allowed." },
  { q: "How does the submission work?", a: "Phase 1 submissions happen online via Unstop. Shortlisted teams are invited to the 24-hour offline hackathon." },
  { q: "What are the judging criteria?", a: "Projects are evaluated on innovation, technical complexity, feasibility, design, and presentation quality." },
  { q: "Is accommodation provided?", a: "Yes, accommodation and meals will be arranged for all participants during the 24-hour offline hackathon." },
  { q: "Will participants receive certificates?", a: "All participants in the offline round will receive participation certificates. Winners receive special recognition certificates." },
];

const FAQSection = () => (
  <section id="faqs" className="relative py-24 grid-overlay">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-metallic mb-4">
          FAQs
        </h2>
        <div className="section-divider w-48 mx-auto" />
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="glass-panel rounded-xl border-none px-6"
          >
            <AccordionTrigger className="text-sm font-medium text-foreground hover:text-primary hover:no-underline py-5">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
