import { useScrollReveal } from "@/hooks/useScrollReveal";

const rounds = [
  {
    phase: "Day 1 - 9:00 AM",
    title: "Inauguration",
    description: "THE FINAL BUILD 1.0 kicks off with opening ceremony and hackathon announcement. Get ready for an exciting journey ahead!",
    icon: "◇",
    color: "green"
  },
  {
    phase: "Day 1 - 6:00 PM to 7:00 PM",
    title: "Mentoring Round",
    description: "Non-marking mentorship session where industry experts provide valuable feedback and suggestions on project improvements and upgrades.",
    icon: "◉",
    color: "blue"
  },
  {
    phase: "Day 2 - 8:00 AM to 10:00 AM",
    title: "Judging Round",
    description: "Formal evaluation round where all teams present their projects. Only the top 10 teams will advance to the finals based on innovation, technical complexity, and feasibility.",
    icon: "◆",
    color: "orange"
  },
  {
    phase: "Day 2 - Final Round",
    title: "Final Crowned - Jury Presentation",
    description: "The top 10 finalists present their complete solutions to the jury panel. Three winners for main prizes and two teams for special awards will be selected.",
    icon: "♦",
    color: "amber"
  }
];

const meals = [
  {
    day: "Day 1",
    meals: ["Breakfast", "Lunch", "Dinner"]
  },
  {
    day: "Day 2", 
    meals: ["Breakfast", "Lunch"]
  }
];

const RoundsSection = () => {
  const ref = useScrollReveal();

  return (
    <section id="rounds" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <p className="font-heading text-xs tracking-[0.3em] uppercase text-amber mb-3">Journey</p>
          <h2 className="font-display text-5xl md:text-6xl text-metallic">Hackathon Rounds</h2>
          <div className="section-divider mt-6 mx-auto max-w-md" />
          <p className="font-heading text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
            Navigate through the exciting phases of THE FINAL BUILD 1.0 and compete for the ultimate prize
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber/50 via-amber/30 to-amber/50 transform -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-0">
            {rounds.map((round, index) => (
              <div
                key={round.title}
                className={`fade-in-section relative lg:flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-amber rounded-full border-4 border-background z-10">
                  <div className="absolute inset-0 bg-amber rounded-full animate-ping opacity-20" />
                </div>

                {/* Content Card */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'}`}>
                  <div className="tactical-card p-8 relative overflow-hidden group">
                    {/* Phase Badge */}
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-heading tracking-wider uppercase mb-4 ${
                      round.color === 'green' ? 'bg-green/20 text-green border border-green/30' :
                      round.color === 'blue' ? 'bg-blue/20 text-blue border border-blue/30' :
                      round.color === 'orange' ? 'bg-orange/20 text-orange border border-orange/30' :
                      'bg-amber/20 text-amber border border-amber/30'
                    }`}>
                      {round.phase}
                    </div>

                    {/* Icon */}
                    <div className={`mb-4 ${index % 2 === 0 ? 'lg:ml-auto lg:mr-0' : 'lg:mr-auto lg:ml-0'} inline-block`}>
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl ${
                        round.color === 'green' ? 'bg-gradient-to-br from-green/20 to-green/10 border border-green/30' :
                        round.color === 'blue' ? 'bg-gradient-to-br from-blue/20 to-blue/10 border border-blue/30' :
                        round.color === 'orange' ? 'bg-gradient-to-br from-orange/20 to-orange/10 border border-orange/30' :
                        'bg-gradient-to-br from-amber/20 to-amber/10 border border-amber/30'
                      }`}>
                        {round.icon}
                      </div>
                    </div>

                    <h3 className="font-display text-3xl text-metallic mb-4">{round.title}</h3>
                    <p className="font-heading text-sm text-muted-foreground leading-relaxed">
                      {round.description}
                    </p>

                    {/* Additional Details */}
                    {round.title === "Mentoring Round" && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="font-heading text-xs text-blue tracking-wider uppercase">
                          Non-Marking Round - Pure Mentorship
                        </p>
                      </div>
                    )}

                    {round.title === "Judging Round" && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="font-heading text-xs text-orange tracking-wider uppercase">
                          Only Top 10 Teams Advance
                        </p>
                      </div>
                    )}

                    {round.title === "Final Crowned - Jury Presentation" && (
                      <div className="mt-4 pt-4 border-t border-border">
                        <p className="font-heading text-xs text-amber tracking-wider uppercase">
                          3 Main Winners + 2 Special Award Winners
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty Space for alternating layout */}
                <div className="hidden lg:block lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Meals Section */}
        <div className="mt-20 fade-in-section">
          <div className="text-center mb-12">
            <h3 className="font-heading text-2xl text-amber tracking-wider">Meals Provided</h3>
            <p className="font-heading text-sm text-muted-foreground mt-2">Fuel your innovation with complimentary meals</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {meals.map((mealDay, index) => (
              <div
                key={mealDay.day}
                className="tactical-card p-6 text-center"
                style={{ transitionDelay: `${(index + 4) * 100}ms` }}
              >
                <div className="mb-3">
                  <span className="text-2xl">◆</span>
                </div>
                <h4 className="font-heading text-lg text-metallic mb-3">{mealDay.day}</h4>
                <div className="space-y-2">
                  {mealDay.meals.map((meal, mealIndex) => (
                    <p key={mealIndex} className="font-heading text-sm text-muted-foreground">
                      {meal}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoundsSection;
