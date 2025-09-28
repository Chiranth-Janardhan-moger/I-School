import React, { useState } from "react";
import img12 from "../assets/12.jpg";
import img34 from "../assets/34.jpg";
import img32 from "../assets/32.jpg";
import img30 from "../assets/30.jpg";
import img29 from "../assets/29.jpg";
import img27 from "../assets/27.jpg";
import img37 from "../assets/37.jpg";
import img36 from "../assets/36.jpg";

import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

const photos = [
  { url: img12, title: "Yellow Colour Day", emoji: "💛" },
  { url: img34, title: "Festival Celebrations",  emoji: "🕉️" },
  { url: img32, title: "Red Colour Day", emoji: "❤️" },
  { url: img30, title: "Blue Colour Day", emoji: "💙" },
  { url: img29, title: "Snacks Time Yummy", emoji: "🍪" },
  { url: img27, title: "Art & Crafts", emoji: "🎨" },
  { url: img37, title: "Raksha bandhan", emoji: "🎉" },
  { url: img36, title: "Independence Day", emoji: "🇮🇳" },
];

  const generateStyles = (index) => {
    const baseRotate = (index % 2 === 0 ? -6 : 6);
    const variation = (Math.random() * 6 - 3); // -3 to +3 deg
    const rotate = baseRotate + variation;

    // Small vertical random offset to create layered effect
    const verticalOffset = -index * 20 + Math.floor(Math.random() * 10);

    return { rotate, verticalOffset };
  };

  return (
    <div className="select-none  relative min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-100 p-3 sm:p-6 lg:p-8 xl:p-12 flex flex-col items-center overflow-x-hidden overflow-y-auto">
      {/* Header */}
      <h2 className="text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold mb-6 sm:mb-8 lg:mb-10 xl:mb-16 text-gray-800">Gallery</h2>

      {/* Responsive grid container */}
      <div className="relative w-full max-w-lg sm:max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-6 lg:gap-8 xl:gap-10 px-2 sm:px-4">
          {photos.map((photo, index) => {
            const { rotate, verticalOffset } = generateStyles(index);

            return (
              <div
                key={index}
                onClick={() => setSelectedImage(photo)}
                className="relative cursor-pointer bg-white rounded-xl sm:rounded-xl lg:rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:z-50 mx-auto w-full"
                style={{
                  transform: `rotate(${rotate}deg)`,
                  marginBottom: `${Math.abs(verticalOffset) * 0.2}px`, // Further reduced for mobile
                  boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                }}
                title={`${photo.emoji} ${photo.title}`}
              >
                <img
                  src={photo.url}
                  alt={photo.title}
                  draggable={false}
                  className="w-full object-cover rounded-t-xl sm:rounded-t-xl lg:rounded-t-2xl
                    h-48 sm:h-40 md:h-44 lg:h-48 xl:h-56"
                />
                <div className="p-4 sm:p-3 lg:p-4 text-center font-semibold text-gray-700 select-none
                  text-lg sm:text-base lg:text-lg xl:text-xl">
                  <span className="mr-2 sm:mr-2 text-xl sm:text-lg lg:text-xl">{photo.emoji}</span>
                  {photo.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 sm:p-6 lg:p-8"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close Button - Always visible and positioned outside content area */}
          <button
            onClick={() => setSelectedImage(null)}
            className="fixed top-4 right-4 bg-white/95 hover:bg-white text-gray-800 rounded-full p-3 shadow-xl border-2 border-gray-200 backdrop-blur-sm transition-all duration-200 hover:scale-110 z-[70]"
            aria-label="Close image modal"
          >
            <X className="w-6 h-6" />
          </button>

          

          <div
            className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Container with controlled dimensions */}
            <div className="flex-1 flex items-center justify-center bg-gray-50 min-h-0">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-full object-contain"
                style={{ 
                  maxHeight: 'calc(90vh - 120px)', // Account for info bar and padding
                  width: 'auto',
                  height: 'auto'
                }}
              />
            </div>

            {/* Info Bar - Fixed at bottom */}
            <div className="bg-gradient-to-t from-black/90 to-black/70 p-4 text-white flex items-center gap-2 flex-shrink-0">
              <span className="text-2xl">{selectedImage.emoji}</span>
              <h3 className="text-lg font-bold">{selectedImage.title}</h3>
            </div>

            {/* Additional close option - Click anywhere instruction */}
            <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
              Click anywhere to close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;