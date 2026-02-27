import { useScrollReveal } from "@/hooks/useScrollReveal";

const mainPrizes = [
  { title: "First Prize", amount: "₹50,000", position: "1st" },
  { title: "Second Prize", amount: "₹30,000", position: "2nd" },
  { title: "Third Prize", amount: "₹20,000", position: "3rd" },
];

const specialAwards = [
  { title: "Best Innovative Idea", amount: "₹12,000", icon: "💡" },
  { title: "Best AI Solution Award", amount: "₹12,000", icon: "🤖" },
];

const totalPrizePool = 50000 + 30000 + 20000 + 12000 + 12000;

const PrizesSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="prizes" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <p className="font-heading text-xs tracking-[0.3em] uppercase text-amber mb-3">Rewards</p>
          <h2 className="font-display text-5xl md:text-6xl text-metallic">Prizes</h2>
          <div className="section-divider mt-6 mx-auto max-w-md" />
        </div>

        {/* Total Prize Pool - Featured at Top */}
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-block bg-gradient-to-r from-amber/20 to-amber/10 border border-amber/30 rounded-lg px-12 py-8 backdrop-blur-sm">
            <p className="font-heading text-xs tracking-[0.2em] text-amber mb-3 uppercase">Total Prize Pool</p>
            <p className="font-display text-6xl md:text-7xl text-metallic-amber">₹{totalPrizePool.toLocaleString('en-IN')}</p>
            <p className="font-heading text-sm text-muted-foreground mt-3">Across All Categories</p>
          </div>
        </div>

        {/* Main Prizes */}
        <div className="mb-16 fade-in-section">
          <h3 className="font-heading text-2xl text-center text-amber mb-8 tracking-wider">Main Prizes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mainPrizes.map((prize, i) => (
              <div
                key={prize.title}
                className="tactical-card p-8 text-center relative overflow-hidden group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Position Badge */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-amber/20 rounded-full flex items-center justify-center border border-amber/30">
                  <span className="font-heading text-sm font-bold text-amber">{prize.position}</span>
                </div>
                
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-amber/20 to-amber/10 rounded-full flex items-center justify-center border border-amber/30">
                    <span className="text-2xl">
                      {prize.position === "1st" ? "🏆" : prize.position === "2nd" ? "🥈" : "🥉"}
                    </span>
                  </div>
                </div>
                
                <p className="font-heading text-sm tracking-[0.2em] text-muted-foreground mb-3 uppercase">{prize.title}</p>
                <p className="font-display text-4xl text-metallic-amber">{prize.amount}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Awards */}
        <div className="fade-in-section">
          <h3 className="font-heading text-2xl text-center text-amber mb-8 tracking-wider">Special Awards</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {specialAwards.map((award, i) => (
              <div
                key={award.title}
                className="tactical-card p-8 text-center group"
                style={{ transitionDelay: `${(i + 3) * 100}ms` }}
              >
                <div className="mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue/20 to-purple/20 rounded-full flex items-center justify-center border border-blue/30">
                    <span className="text-2xl">{award.icon}</span>
                  </div>
                </div>
                
                <p className="font-heading text-sm tracking-[0.2em] text-muted-foreground mb-3 uppercase">{award.title}</p>
                <p className="font-display text-3xl text-metallic-amber">{award.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
