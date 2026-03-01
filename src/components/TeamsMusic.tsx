import { useEffect, useState, useRef } from "react";

const TeamsMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const audio = new Audio("/team.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audio.currentTime = 0; // Start from beginning
    audioRef.current = audio;

    const playMusic = () => {
      if (audioRef.current) {
        audioRef.current.currentTime = 0; // Start from beginning
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          console.log("Teams music started automatically");
        }).catch(console.error);
      }
    };

    // Start music automatically after a short delay
    setTimeout(playMusic, 1000);

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [hasInteracted]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Ensure we start from beginning
        audioRef.current.currentTime = 0; // Start from beginning
        audioRef.current.play().then(() => setIsPlaying(true)).catch(console.error);
      }
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleMusic}
        className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-2 hover:bg-white/30 transition-colors"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default TeamsMusic;
