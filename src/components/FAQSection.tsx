import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Who can participate?", a: "Any student currently enrolled in an undergraduate or postgraduate program from any recognized institution can participate." },
  { q: "What is the team size?", a: "Teams can have a minimum of 2 and a maximum of 4 members." },
  { q: "What will be a registration fee?", a: "Yes, The finalists of THE FINAL BUILD 1.0 will have to pay a registration fee of ₹300 per team." },
  { q: "What should we bring to the offline hackathon?", a: "Bring your laptops, chargers, valid college ID, and your innovative ideas. Food and beverages will be provided." },
  { q: "Can team members be from different colleges?", a: "Yes, cross-college teams are allowed and encouraged." },
  { q: "Will there be mentors available?", a: "Yes, industry experts and faculty mentors will be available throughout the 24-hour hackathon." },
  { q: "How will projects be evaluated?", a: "Projects will be evaluated on innovation, technical complexity, feasibility, design, and presentation." },
  { q: "Will reimbursement be provided for travel expenses?", a: "No, travel reimbursement will not be provided for participants. Teams are responsible for their own transportation arrangements to and from the venue." },
];

const FAQSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="faqs" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <p className="font-heading text-xs tracking-[0.3em] uppercase text-amber mb-3">Intel</p>
          <h2 className="font-display text-5xl md:text-6xl text-metallic">FAQs</h2>
          <div className="section-divider mt-6 mx-auto max-w-md" />
        </div>

        <div className="fade-in-section">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="font-heading text-sm tracking-wider uppercase text-foreground hover:text-amber transition-colors py-4 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
