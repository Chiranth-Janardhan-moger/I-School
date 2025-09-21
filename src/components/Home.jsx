import React, { useState, useEffect } from 'react';
import img1 from '../assets/1child.png'
import img2 from '../assets/3child.png'
import img3 from '../assets/2child.png'

const HeroPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const heroPages = [
    {
      category: "Learning Summit:",
      title: "Unleashing Creative brilliance",
      descrption: "we provide the real education (sample text )",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 relative overflow-hidden select-none">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating geometric shapes - repositioned for 100% zoom */}
        <div className="absolute top-16 left-8 w-6 h-6 bg-yellow-300 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-32 right-16 w-4 h-4 bg-blue-300 rounded-full animate-float-delayed opacity-60"></div>
        <div className="absolute bottom-24 left-16 w-8 h-8 bg-purple-300 rounded-full animate-float-slow opacity-40"></div>
        <div className="absolute top-48 left-1/4 w-3 h-3 bg-pink-400 rounded-full animate-float opacity-50"></div>
        <div className="absolute bottom-16 right-1/4 w-5 h-5 bg-indigo-300 rounded-full animate-float-delayed opacity-60"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 py-8 min-h-screen flex items-center relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 xl:gap-16 items-center w-full">
          {/* Left Content */}
          <div className={`space-y-6 relative transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            {/* Decorative star - repositioned */}
            <div className="absolute -top-6 -right-6 text-yellow-400 text-4xl lg:text-5xl transform rotate-12 animate-spin-slow hover:scale-110 transition-transform cursor-pointer">
              ⭐
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-gray-800 animate-fade-in-up">{heroPages[0].category}</span>
                <br />
                <span className="text-gray-800 animate-fade-in-up animation-delay-200">Unleashing</span>
                <br />
                <span className="text-yellow-400 font-black animate-fade-in-up animation-delay-400 hover:text-yellow-500 transition-colors cursor-default">Creative</span>
                <br />
                <span className="text-yellow-400 font-black animate-fade-in-up animation-delay-600 hover:text-yellow-500 transition-colors cursor-default">brilliance</span>
              </h1>
              
              <div className="flex items-center space-x-2 text-base lg:text-lg animate-fade-in-up animation-delay-800">
                <span className="font-bold text-gray-800">{heroPages[0].descrption}</span>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4 animate-fade-in-up animation-delay-1000">
                <button className="  bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform active:scale-95 group">
                  <span className="group-hover:animate-pulse">Contact Us</span>
                </button>
                
              </div>
            </div>

            {/* Decorative dots */}
            <div className="flex justify-center mt-4 space-x-2 animate-fade-in-up animation-delay-1200">
              <span className="text-2xl font-bold text-gray-800 animate-bounce animation-delay-0">:</span>
              <span className="text-2xl font-bold text-gray-800 animate-bounce animation-delay-200">:</span>
              <span className="text-2xl font-bold text-gray-800 animate-bounce animation-delay-400">:</span>
            </div>
          </div>

          {/* Right Images - completely redesigned for proper 100% zoom display */}
          <div className={`relative h-80 lg:h-96 xl:h-[500px] transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            {/* Main central image - properly sized and28 positioned */}
            <div className="absolute top-1/2 left-52 transform -translate-x-1/2 -translate-y-1/2 z-20 animate-fade-in-scale animation-delay-600">
              <div className="w-48 h-72 lg:w-56 lg:h-88 xl:w-58 xl:h-88 bg-yellow-400 rounded-full flex items-center justify-center overflow-hidden relative hover:bg-yellow-500 transition-colors duration-300 hover:scale-105 transform group cursor-pointer shadow-xl hover:shadow-2xl border-4 border-black">
                <img
                  src={img1}
                  alt="Happy student"
                  className="w-48 h-72 lg:w-72 lg:h-86 xl:w-72 xl:h-86 object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* "let's" text - repositioned */}
              <div className="absolute -top-8 -right-12 lg:-right-16 text-blue-500 text-2xl lg:text-3xl font-handwriting transform rotate-12 animate-wiggle hover:text-blue-600 transition-colors cursor-pointer">
                let's
              </div>
            </div>

            {/* Top left decorative star */}
            <div className="absolute top-4 left-4 text-yellow-400 text-3xl lg:text-4xl transform -rotate-12 animate-pulse hover:scale-110 transition-transform cursor-pointer">
              ⭐
            </div>

            {/* Top right image - repositioned for proper visibility */}
            <div className="absolute -top-42 right-26 z-10 hidden lg:block animate-fade-in-scale animation-delay-800">
              <div className="w-32 h-32 xl:w-48 xl:h-72 bg-purple-400 rounded-full overflow-hidden shadow-xl flex items-center justify-center hover:bg-purple-500 transition-colors duration-300 hover:scale-105 transform group cursor-pointer hover:shadow-2xl border-3 border-black">
                <img
                  src={img2}
                  alt="Student"
                  className="w-28 h-38 xl:w-42 xl:h-72 object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* "learn" text */}
              <div className="absolute -bottom-6 -left-8 text-green-500 text-xl xl:text-2xl font-handwriting transform rotate-12 animate-wiggle animation-delay-400 hover:text-green-600 transition-colors cursor-pointer">
                learn
              </div>
            </div>

            {/* Bottom right image - repositioned */}
            <div className="absolute bottom-0 right-12 hidden lg:block animate-fade-in-scale animation-delay-1000">
              <div className="w-36 h-36 xl:w-58 xl:h-72 bg-blue-400 rounded-full overflow-hidden shadow-xl flex items-center justify-center hover:bg-blue-500 transition-colors duration-300 hover:scale-105 transform group cursor-pointer hover:shadow-2xl border-3 border-black">
                <img
                  src={img3}
                  alt="Student"
                  className="w-32 h-40 xl:w-56 xl:h-72 object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              {/* "Fun" text */}
              <div className="absolute -top-6 -left-8 text-fuchsia-500 text-xl xl:text-2xl font-handwriting transform rotate-12 animate-wiggle animation-delay-400 hover:text-purple-600 transition-colors cursor-pointer">
                Fun
              </div>
            </div>

            {/* Decorative bursts - repositioned */}
            <div className="absolute top-8 right-12 text-gray-800 animate-spin-slow hover:text-gray-600 transition-colors">
              <svg width="40" height="40" viewBox="0 0 50 50" fill="none" className="transform rotate-45 hover:scale-110 transition-transform">
                <path d="M25 5L25 20M45 25L30 25M25 45L25 30M5 25L20 25M37.0711 12.9289L27.0711 22.9289M37.0711 37.0711L27.0711 27.0711M12.9289 37.0711L22.9289 27.0711M12.9289 12.9289L22.9289 22.9289" stroke="currentColor" strokeWidth="2.5"/>
              </svg>
            </div>

            <div className="absolute bottom-8 left-8 text-gray-800 animate-spin-slow hover:text-gray-600 transition-colors">
              <svg width="40" height="40" viewBox="0 0 50 50" fill="none" className="transform rotate-45 hover:scale-110 transition-transform">
                <path d="M25 5L25 20M45 25L30 25M25 45L25 30M5 25L20 25M37.0711 12.9289L27.0711 22.9289M37.0711 37.0711L27.0711 27.0711M12.9289 37.0711L22.9289 27.0711M12.9289 12.9289L22.9289 22.9289" stroke="currentColor" strokeWidth="2.5"/>
              </svg>
            </div>
            
            {/* Bottom right star */}
            <div className="absolute bottom-4 right-4 text-yellow-400 text-3xl transform rotate-45 animate-pulse hover:scale-110 transition-transform cursor-pointer">
              ⭐
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .font-handwriting {
          font-family: 'Brush Script MT', cursive;
        }
        
        /* Custom Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(12deg); }
          25% { transform: rotate(18deg); }
          75% { transform: rotate(6deg); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        /* Animation Classes */
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 4s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 5s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-wiggle { animation: wiggle 2s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-fade-in-scale { animation: fade-in-scale 0.8s ease-out forwards; }
        
        /* Animation Delays */
        .animation-delay-0 { animation-delay: 0ms; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-800 { animation-delay: 800ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }
        .animation-delay-1200 { animation-delay: 1200ms; }
        .animation-delay-1400 { animation-delay: 1400ms; }
        
        /* Grid Pattern */
        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        /* Enhanced bounce for dots */
        .animate-bounce {
          animation: bounce-gentle 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroPage;