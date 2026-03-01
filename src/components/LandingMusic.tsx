import { useEffect, useRef, useState } from "react";

const LandingMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set audio properties
    audio.volume = 0.4;
    audio.currentTime = 76; // 1:16 in seconds

    // Try autoplay
    audio.play().then(() => {
      setIsPlaying(true);
      console.log("Landing music started automatically");
    }).catch(() => {
      console.log("Autoplay blocked, user needs to click button");
    });

    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.currentTime = 76; // Start from 1:16
      audio.play().then(() => setIsPlaying(true)).catch(console.error);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/music.mp3" loop />
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
    </>
  );
};

export default LandingMusic;