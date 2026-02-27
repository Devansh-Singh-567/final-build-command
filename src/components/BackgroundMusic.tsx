import { useState, useEffect } from 'react';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Auto-play when component mounts
    const audio = new Audio('/space-music.mp3');
    audio.loop = true;
    audio.volume = 0.3; // Set volume to 30%
    
    // Try to autoplay (may be blocked by browser)
    const playPromise = audio.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.log('Autoplay was prevented:', error);
          setIsPlaying(false);
        });
    }

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  const toggleMusic = () => {
    const audio = document.querySelector('audio') as HTMLAudioElement;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio loop>
        <source src="/space-music.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      
      {/* Music toggle button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-4 right-4 z-50 p-3 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary hover:bg-primary/30 transition-all duration-300"
        aria-label="Toggle music"
      >
        {isPlaying ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </button>
    </>
  );
};

export default BackgroundMusic;
