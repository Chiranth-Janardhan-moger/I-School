import React, { useState, useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';

const FestivalWishesBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  const bannerEnabled = true;
  
  // Festival configuration - you can change this to different festivals
  const festivalData = {
    name: "Navratri",
    greeting: "Happy Navratri! ✨",
    description: "May this festival of lights bring joy, prosperity, and happiness to your life. Let the divine light illuminate your path and fill your home with peace and love.",
    image: "https://png.pngtree.com/png-clipart/20220921/original/pngtree-maa-durga-happy-navratri-hindu-festival-vector-greetings-png-image_8625945.png",
    backgroundColor: "from-amber-500 to-orange-600",
    textColor: "text-white"
  };

  // Alternative festivals you can use:
  /*
  const festivals = {
    diwali: {
      name: "Diwali",
      greeting: "Happy Diwali! ✨",
      description: "May this festival of lights bring joy, prosperity, and happiness to your life. Let the divine light illuminate your path and fill your home with peace and love.",
      image: "https://images.unsplash.com/photo-1605289982774-9a6fef564df8?w=400&h=300&fit=crop&auto=format",
      backgroundColor: "from-amber-500 to-orange-600",
      textColor: "text-white"
    },
    christmas: {
      name: "Christmas",
      greeting: "Merry Christmas! 🎄",
      description: "Wishing you a magical Christmas filled with love, laughter, and cherished moments with family and friends. May the spirit of Christmas bring you peace and joy.",
      image: "https://images.unsplash.com/photo-1512389098783-66b81f86e199?w=400&h=300&fit=crop&auto=format",
      backgroundColor: "from-red-500 to-green-600",
      textColor: "text-white"
    },
    holi: {
      name: "Holi",
      greeting: "Happy Holi! 🌈",
      description: "May this festival of colors paint your life with vibrant hues of joy, love, and celebration. Let the colors of Holi spread happiness and unity in your heart.",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop&auto=format",
      backgroundColor: "from-pink-500 to-purple-600",
      textColor: "text-white"
    }
  };
  */

  useEffect(() => {
    if (!bannerEnabled) return;

    const checkBannerVisibility = () => {
      const lastShown = localStorage.getItem('festivalBannerLastShown');
      const now = Date.now();
      const oneDay = 5* 60 * 1000;
 
      if (!lastShown || (now - parseInt(lastShown)) > oneDay) {
        setTimeout(() => {
          setIsVisible(true);
        }, 2000); // Show after 2 seconds
      }
    };

    checkBannerVisibility();
  }, [bannerEnabled]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('festivalBannerLastShown', Date.now().toString());
  };

  if (!bannerEnabled || !isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 select-none">
      <div className="relative max-w-lg w-full">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 z-10 hover:scale-110"
          aria-label="Close festival wishes"
        >
          <X size={20} className="text-gray-600" />
        </button>
        
        {/* Festival card */}
        <div className={`bg-gradient-to-br ${festivalData.backgroundColor} rounded-3xl overflow-hidden shadow-2xl animate-fade-in`}>
          
          {/* Festival Image */}
          <div className="relative h-48 overflow-hidden">
            <img 
              src={festivalData.image} 
              alt={festivalData.name}
              loading='lazy'
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            
            {/* Decorative sparkles on image */}
            <div className="absolute top-4 left-4 text-yellow-300 animate-pulse">
              <Sparkles size={20} />
            </div>
            <div className="absolute top-6 right-6 text-yellow-300 animate-pulse delay-300">
              <Sparkles size={16} />
            </div>
            <div className="absolute bottom-4 left-6 text-yellow-300 animate-pulse delay-500">
              <Sparkles size={18} />
            </div>
          </div>
          
          {/* Content */}
          <div className={`p-8 ${festivalData.textColor}`}>
            {/* Festival Name & Greeting */}
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-2">
                {festivalData.greeting}
              </h2>
              <div className="w-16 h-1 bg-yellow-300 rounded-full mx-auto"></div>
            </div>
            
            {/* Description */}
            <p className="text-base leading-relaxed text-center opacity-95">
              {festivalData.description}
            </p>
            
            {/* Bottom decoration */}
            <div className="flex justify-center mt-6 space-x-2">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 bg-yellow-300 rounded-full opacity-60"
                  style={{
                    animationDelay: `${index * 0.2}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
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
        
        @keyframes pulse-gentle {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.1);
          }
        }
        
        .animate-pulse {
          animation: pulse-gentle 2s infinite;
        }
      `}</style>
    </div>
  );
};


export default FestivalWishesBanner;
