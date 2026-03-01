import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import RainOverlay from '@/components/RainOverlay';
import ThunderOnly from '@/components/ThunderOnly';
import LandingMusic from '@/components/LandingMusic';

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleEnterSite = () => {
    setIsTransitioning(true);
    setShowVideo(true);
    
    if (videoRef.current) {
      videoRef.current.currentTime = 3;
      videoRef.current.play();
    }
    
    // Navigate after 5 seconds of video
    setTimeout(() => {
      navigate('/main');
    }, 5000);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Thunder and music */}
      <ThunderOnly />
      <LandingMusic />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/bg.png)' }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Lightning effect */}
        <div className="absolute inset-0 animate-lightning bg-white/5 pointer-events-none" />
      </div>

      {/* Rain effect */}
      <RainOverlay />

      {/* College logo */}
      <div className="absolute -top-16 -left-4 z-20">
        <img 
          src="/ghristu.png" 
          alt="College Logo" 
          className="w-48 h-48 md:w-60 md:h-60 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
        />
      </div>

      {/* Transition overlay */}
      {isTransitioning && (
        <div className="absolute inset-0 z-50">
          {showVideo && (
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="/loading.mp4"
              autoPlay
              muted
              playsInline
            />
          )}
        </div>
      )}

      {/* Main content */}
      <div className={`relative z-10 min-h-screen flex flex-col items-center justify-center px-4 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Main title */}
        <div className={`text-center mb-8 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="font-display text-4xl md:text-7xl text-yellow-400 mb-4 tracking-wider" style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.8)' }}>
            The Final Build 1.0
          </h1>
        </div>

        {/* Tagline */}
        <div className={`text-center mb-12 ${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <p className="font-heading text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light tracking-wide" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.9)' }}>
            "The Night Needs Coders."
          </p>
        </div>

        {/* Accept mission button */}
        <div className={`${showContent ? 'opacity-100' : 'opacity-0'}`}>
          <button
            onClick={handleEnterSite}
            disabled={isTransitioning}
            className={`px-8 py-3 font-heading text-sm tracking-widest uppercase text-black bg-yellow-400 border border-yellow-400 hover:bg-yellow-300 hover:shadow-lg rounded-sm ${
              isTransitioning ? 'opacity-50 cursor-not-allowed animate-pulse' : ''
            }`}
          >
            {isTransitioning ? 'Mission in Progress...' : 'Accept The Mission'}
          </button>
        </div>

        {/* Copyright notice */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xs">
          Copyright © 2026 <a href="https://linkedin.com/in/devansh050607" className="text-red-500 hover:text-red-400 transition-colors">Devansh Singh</a> | GHRISTU, Pune
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
