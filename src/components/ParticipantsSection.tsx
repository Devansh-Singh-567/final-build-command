import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useNavigate } from "react-router-dom";

const ParticipantsSection = () => {
  const ref = useScrollReveal();
  const navigate = useNavigate();

  const handleViewTeams = () => {
    navigate("/teams");
  };

  return (
    <section id="participants" className="py-24 px-6 relative" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 fade-in-section">
          <p className="font-heading text-xs tracking-[0.3em] uppercase text-amber mb-3">Gotham's Heroes</p>
          <h2 className="font-display text-5xl md:text-6xl text-metallic">Participants</h2>
          <div className="section-divider mt-6 mx-auto max-w-md" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Heroes Wanted */}
          <div className="slide-in-left tactical-card p-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 border-2 border-yellow-400 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                </svg>
              </div>
              <p className="font-heading text-xs tracking-[0.2em] text-amber">SIGNAL STATUS</p>
            </div>
            <h3 className="font-display text-3xl text-foreground mb-4">Heroes Wanted</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              The Bat-Signal illuminates the night sky, calling forth the brave souls ready to answer the challenge. 
              Gotham needs its protectors, its innovators, its champions of the code.
            </p>
            <div className="flex items-center text-yellow-400 text-sm">
              <span className="mr-2">»</span>
              <span className="font-mono">DATABASE: EMPTY</span>
            </div>
          </div>

          {/* Mission Briefing */}
          <div className="slide-in-right tactical-card p-8 blueprint-grid">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 border-2 border-yellow-400 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="font-heading text-xs tracking-[0.2em] text-amber">MISSION BRIEF</p>
            </div>
            <h3 className="font-display text-3xl text-foreground mb-4">Join the Ranks</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Assemble your team of elite coders and strategists. The final build awaits those brave enough 
              to face the darkness and emerge victorious in the ultimate test of skill and courage.
            </p>
            <div className="flex items-center text-yellow-400 text-sm">
              <span className="mr-2">»</span>
              <span className="font-mono">STATUS: RECRUITING</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-section">
          <div className="bg-black/60 border border-yellow-400/30 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="font-display text-2xl text-yellow-400 mb-4">The Night is Young</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              "In the darkest night, the brightest stars emerge. Will you answer the call?"
            </p>
            <button
              onClick={handleViewTeams}
              className="px-8 py-3 font-heading text-sm tracking-widest uppercase text-black bg-yellow-400 border border-yellow-400 hover:bg-yellow-300 hover:shadow-lg rounded-sm transition-all duration-300"
            >
              View Teams Database
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center gap-4 mt-12">
          <div className="w-1 h-8 bg-yellow-400/20"></div>
          <div className="w-1 h-12 bg-yellow-400/40"></div>
          <div className="w-1 h-8 bg-yellow-400/20"></div>
        </div>
      </div>
    </section>
  );
};

export default ParticipantsSection;
