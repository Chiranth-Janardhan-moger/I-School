import React, { useState, useEffect } from 'react';
import { X, Gift, GraduationCap, Sparkles } from 'lucide-react';

const AnnouncementBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  
 
  const bannerEnabled = false;
  
  // Banner configuration
  const bannerData = {
    title: "🎉 Limited Time Offer!",
    subtitle: "Special Admission Discount",
    description: "Get 50% OFF on all courses! Hurry up, offer valid till this month end.",
    buttonText: "Claim Now",
    buttonLink: "/courses",
    type: "discount",
    backgroundColor: "from-purple-600 to-pink-600"
  };

  useEffect(() => {
    if (!bannerEnabled) return;

    const checkBannerVisibility = () => {
      const lastShown = localStorage.getItem('bannerLastShown');
      const now = Date.now();
      const fiveMinutes = 5 * 60 * 1000; // 2 minutes in milliseconds
 
      if (!lastShown || (now - parseInt(lastShown)) > fiveMinutes) {
        setTimeout(() => {
          setIsVisible(true);
        }, 2000); // Show after 2 seconds
      }
    };

    checkBannerVisibility();
  }, [bannerEnabled]);

  const handleClose = () => {
    setIsVisible(false);
    // Record the time when banner was closed
    localStorage.setItem('bannerLastShown', Date.now().toString());
  };

  const handleButtonClick = () => {
    if (bannerData.buttonLink && bannerData.buttonLink !== '#') {
      window.location.href = bannerData.buttonLink;
    }
    handleClose();
  };

  const getIcon = () => {
    switch (bannerData.type) {
      case 'discount':
        return <Gift className="w-10 h-10 text-yellow-300" />;
      case 'admission':
        return <GraduationCap className="w-10 h-10 text-yellow-300" />;
      case 'workshop':
        return <Sparkles className="w-10 h-10 text-yellow-300" />;
      default:
        return <Gift className="w-10 h-10 text-yellow-300" />;
    }
  };

  if (!bannerEnabled || !isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 select-none">
      <div className="relative max-w-md w-full">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 z-10 hover:scale-110"
          aria-label="Close banner"
        >
          <X size={24} className="text-gray-600" />
        </button>
        
        {/* Banner content */}
        <div className={`bg-gradient-to-br ${bannerData.backgroundColor} rounded-2xl p-8 text-white text-center shadow-2xl animate-bounce-in`}>
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="bg-white/20 rounded-full p-3">
              {getIcon()}
            </div>
          </div>
          
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            {bannerData.title}
          </h2>
          
          {/* Subtitle */}
          <h3 className="text-lg sm:text-xl font-semibold mb-4 text-yellow-300">
            {bannerData.subtitle}
          </h3>
          
          {/* Description */}
          <p className="text-sm sm:text-base opacity-90 mb-6 leading-relaxed">
            {bannerData.description}
          </p>
          
          {/* Action button */}
          <button
            onClick={handleButtonClick}
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            {bannerData.buttonText}
          </button>
          
          {/* Decorative sparkles */}
          {[
            { top: '1rem', left: '1rem' },
            { top: '1rem', right: '1rem' },
            { bottom: '1rem', left: '1rem' },
            { bottom: '1rem', right: '1rem' }
          ].map((position, index) => (
            <div
              key={index}
              className="absolute text-yellow-300 opacity-50"
              style={position}
            >
              <Sparkles size={16} />
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes bounce-in {
          0% {
            transform: scale(0.3) rotate(-5deg);
            opacity: 0;
          }
          50% {
            transform: scale(1.1) rotate(2deg);
            opacity: 1;
          }
          70% {
            transform: scale(0.95) rotate(-1deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
          }
        }
        
        .animate-bounce-in {
          animation: bounce-in 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBanner;