import { useEffect, useState } from 'react';

const VideoBackground = () => {
  const [isVisible, setIsVisible] = useState(false);

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
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className={`fixed inset-0 z-0 transition-opacity duration-1000 pointer-events-none ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Video background - only visible on desktop/laptop screens */}
      <div className="hidden md:block absolute inset-0">
        <iframe
          src="https://player.vimeo.com/video/1169258615?background=1&autoplay=1&loop=1&muted=1"
          className="absolute inset-0 w-full h-full"
          style={{
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            top: 0,
            left: 0,
            objectFit: 'cover',
            filter: 'brightness(1.2) contrast(1.1)',
          }}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      {/* Mobile: No video, just subtle dark overlay */}
      <div className="md:hidden absolute inset-0 bg-black/20" />
    </div>
  );
};

export default VideoBackground;
