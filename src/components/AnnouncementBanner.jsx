import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import poster1 from '../assets/poster1.jpg'; // Replace with your first poster path
import poster2 from '../assets/poster2.jpg'; // Replace with your second poster path

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPoster, setSelectedPoster] = useState(null);
  
  const bannerEnabled = true;
  const posters = React.useMemo(() => [
    poster1,
    poster2
  ], []);
  
  useEffect(() => {
    if (!bannerEnabled) return;

    // Randomly select a poster
    const randomPoster = posters[Math.floor(Math.random() * posters.length)];
    setSelectedPoster(randomPoster);

    const checkBannerVisibility = () => {
      const lastShown = sessionStorage.getItem('festivalBannerLastShown');
      const now = Date.now();
      const oneDay =  24 * 60 * 60 * 1000; // Show once per 24 hours
 
      if (!lastShown || (now - parseInt(lastShown)) > oneDay) {
        setTimeout(() => {
          setIsVisible(true);
        }, 2000); // Show after 2 seconds
      }
    };

    checkBannerVisibility();
  }, [bannerEnabled,posters]);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('festivalBannerLastShown', Date.now().toString());
  };

  if (!bannerEnabled || !isVisible || !selectedPoster) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
      <div className="relative max-w-lg w-full">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 z-10 hover:scale-110"
          aria-label="Close banner"
        >
          <X size={20} className="text-gray-600" />
        </button>
        
        {/* Poster Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-fade-in">
          <img 
            src={selectedPoster} 
            alt="I-School Poster"
            loading="lazy"
            draggable="false"
            className="w-full h-auto object-contain pointer-events-none select-none"
            style={{
              WebkitUserSelect: 'none',
              WebkitTouchCallout: 'none',
              userSelect: 'none'
            }}
            onContextMenu={(e) => e.preventDefault()}
            onTouchStart={(e) => e.currentTarget.style.WebkitUserSelect = 'none'}
          />
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in {
          0% {
            transform: scale(0.8) translateY(20px);
            opacity: 0;
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        img {
          -webkit-user-drag: none;
          -khtml-user-drag: none;
          -moz-user-drag: none;
          -o-user-drag: none;
          user-drag: none;
        }
      `}</style>
    </div>
  );
};

export default Banner;