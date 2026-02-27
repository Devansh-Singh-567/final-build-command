import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

const domains = ["Open Innovation", "AI & ML", "Cybersecurity", "Web3 & Blockchain", "Sustainability Tech", "FinTech", "EdTech"];

const RegisterSection = () => {
  const [step, setStep] = useState(1);
  const [members, setMembers] = useState([{ name: "", email: "" }]);
  const [leader, setLeader] = useState({ name: "", email: "", phone: "", college: "" });
  const [domain, setDomain] = useState("");
  const [agreed, setAgreed] = useState(false);

  const addMember = () => {
    if (members.length < 3) setMembers([...members, { name: "", email: "" }]);
  };

  const removeMember = (i: number) => {
    setMembers(members.filter((_, idx) => idx !== i));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Registration submitted successfully! 🚀");
  };

  const inputClass = "w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors";

  return (
    <section id="register" className="relative py-24">
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-metallic mb-4">
            Register
          </h2>
          <div className="section-divider w-48 mx-auto" />
        </motion.div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-heading text-xs font-bold ${
                step >= s ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
              } transition-colors`}>
                {s}
              </div>
              {s < 3 && <div className={`w-12 h-px ${step > s ? "bg-primary" : "bg-border"} transition-colors`} />}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="glass-panel rounded-xl p-8">
          {step === 1 && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="font-heading text-sm font-bold text-foreground mb-4">Team Leader</h3>
              <input placeholder="Full Name" required value={leader.name} onChange={(e) => setLeader({ ...leader, name: e.target.value })} className={inputClass} />
              <input type="email" placeholder="Email" required value={leader.email} onChange={(e) => setLeader({ ...leader, email: e.target.value })} className={inputClass} />
              <input placeholder="Phone" required value={leader.phone} onChange={(e) => setLeader({ ...leader, phone: e.target.value })} className={inputClass} />
              <input placeholder="College Name" required value={leader.college} onChange={(e) => setLeader({ ...leader, college: e.target.value })} className={inputClass} />
              <button type="button" onClick={() => setStep(2)} className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading text-xs font-bold uppercase tracking-widest mt-4">
                Next
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="font-heading text-sm font-bold text-foreground mb-4">Team Members</h3>
              {members.map((m, i) => (
                <div key={i} className="flex gap-2">
                  <input placeholder={`Member ${i + 1} Name`} required value={m.name} onChange={(e) => { const updated = [...members]; updated[i].name = e.target.value; setMembers(updated); }} className={inputClass} />
                  <input type="email" placeholder="Email" required value={m.email} onChange={(e) => { const updated = [...members]; updated[i].email = e.target.value; setMembers(updated); }} className={inputClass} />
                  {members.length > 1 && (
                    <button type="button" onClick={() => removeMember(i)} className="text-destructive hover:text-destructive/80 px-2">
                      <Trash2 size={16} />
                    </button>
                  )}
                </div>
              ))}
              {members.length < 3 && (
                <button type="button" onClick={addMember} className="flex items-center gap-2 text-primary text-sm hover:underline">
                  <Plus size={14} /> Add Member
                </button>
              )}
              <div className="flex gap-3 mt-4">
                <button type="button" onClick={() => setStep(1)} className="flex-1 px-6 py-3 rounded-lg border border-border text-foreground font-heading text-xs uppercase tracking-widest">
                  Back
                </button>
                <button type="button" onClick={() => setStep(3)} className="flex-1 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading text-xs font-bold uppercase tracking-widest">
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4 animate-fade-in">
              <h3 className="font-heading text-sm font-bold text-foreground mb-4">Domain & Confirmation</h3>
              <select value={domain} onChange={(e) => setDomain(e.target.value)} required className={inputClass}>
                <option value="">Select Domain</option>
                {domains.map((d) => <option key={d} value={d}>{d}</option>)}
              </select>
              <label className="flex items-start gap-3 text-sm text-muted-foreground cursor-pointer">
                <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} required className="mt-1 accent-primary" />
                I declare that all information provided is accurate and I agree to the hackathon rules and code of conduct.
              </label>
              <div className="flex gap-3 mt-4">
                <button type="button" onClick={() => setStep(2)} className="flex-1 px-6 py-3 rounded-lg border border-border text-foreground font-heading text-xs uppercase tracking-widest">
                  Back
                </button>
                <button type="submit" disabled={!agreed} className="flex-1 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-heading text-xs font-bold uppercase tracking-widest disabled:opacity-40 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all">
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default RegisterSection;
