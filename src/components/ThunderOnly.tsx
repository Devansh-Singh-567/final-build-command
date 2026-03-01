import { useEffect, useRef } from "react";

const ThunderOnly = () => {
  const thunderAudioRef = useRef<HTMLAudioElement | null>(null);
  const thunderIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const thunderAudio = new Audio("/thunder.mp3");
    thunderAudio.volume = 0.2; // Thunder volume at 20% for good effect
    thunderAudioRef.current = thunderAudio;

    const playThunder = () => {
      if (thunderAudioRef.current) {
        thunderAudioRef.current.currentTime = 0;
        thunderAudioRef.current.play().catch(console.error);
      }
    };

    // Start thunder immediately
    const startThunder = () => {
      // Play first thunder after 2 seconds
      setTimeout(playThunder, 2000);
      // Then play every 15 seconds
      thunderIntervalRef.current = setInterval(playThunder, 15000);
    };

    startThunder();

    return () => {
      if (thunderIntervalRef.current) {
        clearInterval(thunderIntervalRef.current);
      }
      if (thunderAudioRef.current) {
        thunderAudioRef.current.pause();
        thunderAudioRef.current.currentTime = 0;
      }
    };
  }, []);

  // No UI controls for thunder-only component
  return null;
};

export default ThunderOnly;
