import React, { useState } from 'react';
import { X } from 'lucide-react';

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  // Control visibility - set to false to hide the announcement bar
  const visible = true;
  
  const announcements = [
    { id: 1, text: "🎉 New Admission Open - Apply Now!", link: "#academics" },
      { id: 1, text: "                     ", link: "#academics" },
        { id: 1, text: "🎉 New Admission Open - Apply Now!", link: "#academics" },
            { id: 1, text: "                     ", link: "#academics" },
    { id: 2, text: "🎉 New Admission Open - Apply Now!", link: "#contact" }
  ];

  const handleClose = () => setIsVisible(false);
  
  const handleAnnouncementClick = (link) => {
    if (link && link !== '#') {
      window.location.href = link;
    }
  };

  if (!visible || !isVisible) return null;

  return (
   <div className='bg-gradient-to-r from-blue-100 via-purple-100 to-purple-100 select-none mt-4' >
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-2 px-4 rounded-4xl  relative overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="flex-1 overflow-hidden">
          <div className="marquee-container">
            <div className="marquee-content">
              {announcements.map((announcement) => (
                <span
                  key={announcement.id}
                  onClick={() => handleAnnouncementClick(announcement.link)}
                  className="inline-block px-8 cursor-pointer hover:text-yellow-300 transition-colors duration-300 whitespace-nowrap font-medium"
                >
                  {announcement.text}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <button
          onClick={handleClose}
          className="ml-4 p-1 hover:bg-white/20 rounded-full transition-colors duration-200 flex-shrink-0"
          aria-label="Close announcement"
        >
          <X size={24} />
        </button>
      </div>
      </div>
      <style >{`
        .marquee-container {
          overflow: hidden;
          white-space: nowrap;
          position: relative;
          width: 100%;
        }
        
        .marquee-content {
          display: inline-block;
          padding-left: 100%;
          animation: marquee 30s linear infinite;
          white-space: nowrap;
        }
        
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .marquee-content:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 768px) {
          .marquee-content {
            animation-duration: 25s;
          }
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBar;