import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import RainOverlay from '@/components/RainOverlay';
import TeamsMusic from '@/components/TeamsMusic';

const Teams = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
    
    // Show loading video for 3 seconds, then show content
    const videoTimer = setTimeout(() => {
      setShowVideo(false);
      const contentTimer = setTimeout(() => setShowContent(true), 500);
      return () => clearTimeout(contentTimer);
    }, 3000);
    
    return () => clearTimeout(videoTimer);
  }, []);

  const handleGoBack = () => {
    navigate('/main');
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Loading Video */}
      {showVideo && (
        <div className="fixed inset-0 z-50">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            style={{
              objectFit: 'cover',
              width: '100vw',
              height: '100vh',
              position: 'fixed',
              top: 0,
              left: 0
            }}
            src="/loading.mp4"
            autoPlay
            muted
            playsInline
            onLoadedMetadata={() => {
              if (videoRef.current) {
                videoRef.current.currentTime = 3;
              }
            }}
          />
        </div>
      )}

      {/* Main Content */}
      {!showVideo && (
        <>
          {/* Background image */}
          <div 
            className="absolute inset-0 bg-center bg-no-repeat hidden md:block"
            style={{ 
              backgroundImage: 'url(/team.jpg)',
              backgroundSize: '100%',
              backgroundPosition: 'center'
            }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Mobile black background */}
          <div className="absolute inset-0 bg-black md:hidden">
            {/* Dark overlay for mobile */}
            <div className="absolute inset-0 bg-black/70" />
          </div>

          {/* Rain effect */}
          <RainOverlay />
          <TeamsMusic />

          {/* Main content */}
          <div className={`relative z-10 min-h-screen flex flex-col items-center justify-center px-4 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            
            {/* Batman-themed content */}
            <div className={`text-center ${showContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
              {/* Batman symbol */}
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-6 border-2 border-yellow-400 rounded-lg flex items-center justify-center bg-black/80">
                  <svg className="w-16 h-16 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h1 className="font-display text-4xl md:text-6xl text-yellow-400 mb-6 tracking-wider" style={{ textShadow: '0 6px 12px rgba(0, 0, 0, 0.9)', fontFamily: 'serif' }}>
                The Signal Waits
              </h1>

              {/* Message */}
              <div className="max-w-2xl mx-auto mb-8">
                <p className="font-heading text-lg md:text-xl text-gray-300 leading-relaxed font-light tracking-wide" style={{ textShadow: '0 3px 6px rgba(0, 0, 0, 0.9)', fontFamily: 'serif' }}>
                  "Darkness falls... but the cave remains empty."
                </p>
                <p className="font-heading text-base md:text-lg text-gray-400 mt-4 italic" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.8)' }}>
                  The shadows await their guardians.
                </p>
              </div>

              {/* Batman-style decorative elements */}
              <div className="flex justify-center gap-8 mb-8">
                <div className="w-2 h-12 bg-yellow-400/30"></div>
                <div className="w-2 h-16 bg-yellow-400/50"></div>
                <div className="w-2 h-12 bg-yellow-400/30"></div>
              </div>

              {/* Mysterious message */}
              <div className="text-center mb-8">
                <p className="font-heading text-lg text-gray-400 italic tracking-wide" style={{ textShadow: '0 3px 6px rgba(0, 0, 0, 0.9)', fontFamily: 'serif' }}>
                  "The shadows are empty... for now."
                </p>
              </div>

              {/* Back button */}
              <button
                onClick={handleGoBack}
                className="px-8 py-3 font-heading text-sm tracking-widest uppercase text-black bg-yellow-400 border border-yellow-400 hover:bg-yellow-300 hover:shadow-lg rounded-sm transition-all duration-300"
              >
                Return to the Cave
              </button>
            </div>

            {/* Copyright notice */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-[8px] md:text-xs">
              <span className="whitespace-nowrap">
                Copyright © 2026 <a href="https://linkedin.com/in/devansh050607" className="text-yellow-400 hover:text-yellow-300 transition-colors">Devansh Singh</a> | GHRISTU, Pune
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Teams;
