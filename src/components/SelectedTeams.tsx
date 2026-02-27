import { motion } from "framer-motion";
import { Trophy, Clock, Users } from "lucide-react";

const SelectedTeams = () => (
  <section id="selected-teams" className="relative py-24">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-metallic mb-4">
          Results
        </h2>
        <div className="section-divider w-48 mx-auto" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="glass-panel rounded-xl p-12 text-center"
      >
        <div className="flex justify-center mb-8">
          <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
            <Trophy className="text-primary" size={48} />
          </div>
        </div>

        <h3 className="font-heading text-2xl md:text-3xl font-bold text-metallic mb-4">
          Round Results Coming Soon!
        </h3>

        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          The evaluation process is currently underway. Our judges are carefully reviewing all the innovative submissions across all domains. 
          The results will be announced here shortly.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="p-3 rounded-lg bg-secondary/50 border border-border mb-3">
              <Users className="text-primary mx-auto" size={24} />
            </div>
            <h4 className="font-heading text-sm font-bold text-foreground mb-2">
              Multiple Domains
            </h4>
            <p className="text-muted-foreground text-sm">
              Teams from all 9 innovation domains
            </p>
          </div>

          <div className="text-center">
            <div className="p-3 rounded-lg bg-secondary/50 border border-border mb-3">
              <Trophy className="text-primary mx-auto" size={24} />
            </div>
            <h4 className="font-heading text-sm font-bold text-foreground mb-2">
              Top Performers
            </h4>
            <p className="text-muted-foreground text-sm">
              Most creative and impactful solutions
            </p>
          </div>

          <div className="text-center">
            <div className="p-3 rounded-lg bg-secondary/50 border border-border mb-3">
              <Clock className="text-primary mx-auto" size={24} />
            </div>
            <h4 className="font-heading text-sm font-bold text-foreground mb-2">
              Announcement Soon
            </h4>
            <p className="text-muted-foreground text-sm">
              Stay tuned for the round results
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/30 bg-primary/5"
        >
          <Clock className="text-primary" size={16} />
          <span className="text-primary font-heading text-sm font-medium">
            Round results will be displayed soon
          </span>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default SelectedTeams;
