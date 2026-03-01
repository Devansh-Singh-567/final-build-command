import { useEffect, useRef, useState } from 'react';

const VideoBackground = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;
      const locationSection = document.getElementById('location');
      const locationTop = locationSection ? locationSection.offsetTop : window.innerHeight * 4;
      
      // Show video background after scrolling past hero section
      // Hide video background when reaching location section
      if (scrollPosition > heroHeight * 0.8 && scrollPosition < locationTop - window.innerHeight) {
        setIsVisible(true);
        // Auto play video when visible
        if (videoRef.current && !isPlaying) {
          videoRef.current.playbackRate = 1.2; // Reduce speed to 1.2x
          videoRef.current.muted = true; // Ensure muted
          videoRef.current.play().catch(err => {
            console.log('Video autoplay failed:', err);
          });
          setIsPlaying(true);
        }
      } else {
        setIsVisible(false);
        // Pause video when not visible
        if (videoRef.current && isPlaying) {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isPlaying]);

  return (
    <div 
      className={`fixed inset-0 z-0 transition-opacity duration-1000 pointer-events-none ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/video.mp4"
        loop
        muted
        playsInline
        style={{
          filter: 'brightness(0.7) contrast(1.1)', // Default brightness
        }}
      />
      {/* Mobile brightness overlay - only on mobile */}
      <div className="md:hidden absolute inset-0 bg-white/20" />
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />
    </div>
  );
};

export default VideoBackground;
