import { useState, useEffect, useRef } from 'react';

interface TransitionScreenProps {
  isActive: boolean;
  onComplete: () => void;
}

const TransitionScreen = ({ isActive, onComplete }: TransitionScreenProps) => {
  const [phase, setPhase] = useState<'idle' | 'black-in' | 'video' | 'black-out' | 'complete'>('idle');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isActive && phase === 'idle') {
      // Phase 1: 0.5s black fade in
      setPhase('black-in');
      
      // Phase 2: Start video after 0.5s
      const videoTimer = setTimeout(() => {
        setPhase('video');
        if (videoRef.current) {
          videoRef.current.currentTime = 3; // Start from 3 seconds as before
          videoRef.current.play().catch(err => console.log('Video play error:', err));
        }
      }, 500);

      // Phase 3: Black fade out after 5s of video (total 5.5s)
      const fadeOutTimer = setTimeout(() => {
        setPhase('black-out');
      }, 5500);

      // Phase 4: Complete transition after 0.5s fade out (total 6s)
      const completeTimer = setTimeout(() => {
        setPhase('complete');
        onComplete();
      }, 6000);

      return () => {
        clearTimeout(videoTimer);
        clearTimeout(fadeOutTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [isActive, phase, onComplete]);

  if (!isActive || phase === 'idle') return null;

  return (
    <div className="fixed inset-0 z-50 bg-black">
      {/* Black fade in */}
      {phase === 'black-in' && (
        <div className="absolute inset-0 bg-black opacity-100" />
      )}
      
      {/* Video phase */}
      {phase === 'video' && (
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="/loading.mp4"
          autoPlay
          muted
          playsInline
          onLoadedData={() => {
            console.log('Video loaded');
          }}
          onError={(e) => {
            console.log('Video error:', e);
          }}
        />
      )}
      
      {/* Black fade out */}
      {phase === 'black-out' && (
        <div className="absolute inset-0 bg-black opacity-100" />
      )}
    </div>
  );
};

export default TransitionScreen;
