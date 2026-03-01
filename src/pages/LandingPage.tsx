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
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [showDesktopNotice, setShowDesktopNotice] = useState(true);
  const [showInitialVideo, setShowInitialVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
    // Show desktop notice for 3 seconds, then show initial video
    const noticeTimer = setTimeout(() => {
      setShowDesktopNotice(false);
      setShowInitialVideo(true);
      // Play initial video for 5 seconds, then show landing page
      const videoTimer = setTimeout(() => {
        setShowInitialVideo(false);
        const contentTimer = setTimeout(() => setShowContent(true), 500);
        return () => clearTimeout(contentTimer);
      }, 5000);
      return () => clearTimeout(videoTimer);
    }, 3000);
    return () => clearTimeout(noticeTimer);
  }, []);

  // Set initial video to start from 3 seconds when it appears
  useEffect(() => {
    if (showInitialVideo && videoRef.current) {
      videoRef.current.currentTime = 3;
    }
  }, [showInitialVideo]);

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
      {/* Desktop Notice Screen - Shows first */}
      {showDesktopNotice && (
        <div className={`fixed inset-0 z-50 bg-black flex flex-col items-center justify-center px-4 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="text-center max-w-md">
            <div className="mb-8">
              <div className="w-16 h-16 mx-auto mb-4 border-2 border-yellow-400 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4 tracking-wide">
                Desktop Recommended
              </h2>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                Best experience on desktop or laptop
              </p>
            </div>
            <div className="text-xs text-gray-500 italic">
              Proceeding...
            </div>
          </div>
        </div>
      )}

      {/* Initial Batman Video Transition */}
      {showInitialVideo && (
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

      {/* Original Landing Page Content */}
      {!showDesktopNotice && !showInitialVideo && (
        <>
          {/* Thunder and music */}
          <ThunderOnly />
          <LandingMusic shouldStart={showContent} />
          
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
                  className="w-full h-full object-cover sm:object-cover"
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
                />
              )}
            </div>
          )}

          {/* Main content */}
          <div className={`relative z-10 min-h-screen flex flex-col items-center justify-center px-4 ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
            
            {/* Main title */}
            <div className={`text-center mb-8 ${showContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
              <h1 className="font-display text-4xl md:text-7xl text-yellow-400 mb-4 tracking-wider" style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.8)' }}>
                The Final Build 1.0
              </h1>
            </div>

            {/* Tagline */}
            <div className={`text-center mb-12 ${showContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
              <p className="font-heading text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light tracking-wide" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.9)' }}>
                "The Night Needs Coders."
              </p>
            </div>

            {/* Accept mission button */}
            <div className={`${showContent ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
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
        </>
      )}
    </div>
  );
};

export default LandingPage;
