import React, { useState, useEffect } from 'react';
import { Heart, Globe, BookOpen, Users, Award, GraduationCap, Star } from 'lucide-react';
import girl from '../assets/girl.png';
function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    students: 0,
    awards: 0,
    teachers: 0,
    success: 0
  });

  const schoolImages = [
    {
      src: "/api/placeholder/600/300",
      alt: "Modern classroom with students",
      title: "Interactive Learning Environment"
    },
    {
      src: "/api/placeholder/600/300", 
      alt: "Students in large lecture hall",
      title: "Spacious Academic Halls"
    },
    {
      src: "/api/placeholder/600/300",
      alt: "Students during examination",
      title: "Excellence in Academics"
    },
     {
      src: "/api/placeholder/600/300",
      alt: "Students during examination",
      title: "Excellence in Academics"
    },
     {
      src: "/api/placeholder/600/300",
      alt: "Students during examination",
      title: "Excellence in Academics"
    }
  ];

  // Counter animation
  useEffect(() => {
    setIsVisible(true);
    
    const animateCounters = () => {
      const targets = { students: 1710, awards: 35, teachers: 50, success: 95 };
      const duration = 2000;
      const steps = 60;
      const increment = duration / steps;
      
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounters({
          students: Math.floor(targets.students * progress),
          awards: Math.floor(targets.awards * progress),
          teachers: Math.floor(targets.teachers * progress),
          success: Math.floor(targets.success * progress)
        });
        
        if (currentStep >= steps) {
          setCounters(targets);
          clearInterval(timer);
        }
      }, increment);
    };

    const timeout = setTimeout(animateCounters, 500);
    return () => clearTimeout(timeout);
  }, []);

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % schoolImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Side - Student Image with Stats */}
        <div className={`relative flex items-center justify-center p-4 sm:p-6 lg:p-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
          <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
            {/* Main Student Image */}
            <div className="relative z-10 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] mx-auto">
              <img 
                src={girl}
                alt="Happy student with books" 
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
            
            {/* Orange Circle Background */}
            <div className="absolute top-6 sm:top-8 lg:top-12 right-20 sm:right-30 lg:right-45 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full opacity-90 -z-10"></div>
            
            {/* Stats Cards */}
            <div className="absolute -top-2 sm:-top-4 lg:-top-6 -left-2 sm:-left-4 lg:-left-6 bg-white rounded-lg sm:rounded-2xl p-2 sm:p-4 lg:p-6 shadow-xl border-2 sm:border-4 border-dashed border-purple-300 transform rotate-2 hover:rotate-0 transition-transform duration-300 min-w-[80px] sm:min-w-[120px]">
              <div className="text-sm sm:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">{counters.students.toLocaleString()}+</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-semibold leading-tight">Happy Students</div>
            </div>
            
            <div className="absolute -bottom-2 sm:-bottom-4 lg:-bottom-6 -right-2 sm:-right-4 lg:-right-6 bg-white rounded-lg sm:rounded-2xl p-2 sm:p-4 lg:p-6 shadow-xl border-2 sm:border-4 border-dashed border-blue-300 transform -rotate-2 hover:rotate-0 transition-transform duration-300 min-w-[80px] sm:min-w-[120px]">
              <div className="text-sm sm:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">{counters.awards}+</div>
              <div className="text-xs sm:text-sm lg:text-base text-gray-600 font-semibold leading-tight">Awards Achieved</div>
            </div>

            {/* Additional Small Stats */}
            <div className="absolute top-1/3 -left-4 sm:-left-6 lg:-left-8 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full p-2 sm:p-3 lg:p-4 shadow-lg animate-bounce">
              <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </div>
            
            <div className="absolute top-1/4 -right-5 sm:-right-7 lg:-right-10 bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-full p-2 sm:p-3 lg:p-4 shadow-lg animate-pulse">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </div>
          </div>
        </div>

        {/* Right Side - Split into Photos (top) and Mission/Vision (bottom) */}
        <div className="flex flex-col">
          
          {/* Top Half - Photos of School */}
          <div className={`flex-1 p-4 sm:p-6 lg:p-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="h-full flex flex-col">
              <div className="mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  Our Learning Environment
                </h2>
                <div className="w-12 sm:w-14 lg:w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              </div>

              {/* Image Carousel */}
              <div className="relative flex-1">
                <div className="h-48 sm:h-64 md:h-80 lg:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  {schoolImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 transform ${
                        index === currentImageIndex
                        ? 'translate-x-0 opacity-100'
                        : 'translate-x-5 opacity-0'
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-100 to-transparent rounded-2xl sm:rounded-3xl drop-shadow-2xl"></div>
                      <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6">
                        <h3 className="text-white text-sm sm:text-lg lg:text-xl font-bold drop-shadow-lg">
                          {image.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Image Indicators */}
                <div className="flex justify-center space-x-1 sm:space-x-2 translate-y-4 sm:translate-y-6 lg:translate-y-[24px]">
                  {schoolImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentImageIndex 
                          ? 'w-6 sm:w-8 lg:w-10 h-2 sm:h-2.5 lg:h-3 bg-gradient-to-r from-purple-500 to-pink-500' 
                          : 'w-2 sm:w-2.5 lg:w-3 h-2 sm:h-2.5 lg:h-3 bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Half - Vision and Mission */}
          <div className={`flex-1 p-4 sm:p-6 lg:p-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="h-full flex flex-col">
              <div className="mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">Our Purpose</h2>
                <div className="w-12 sm:w-14 lg:w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              </div>

              <div className="flex-1 space-y-3 sm:space-y-4 lg:space-y-6">
                {/* Vision Card */}
                <div className="group">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-100">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="p-2 sm:p-2.5 lg:p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg sm:rounded-xl mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Heart className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                      </div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Our Vision
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-xs sm:text-sm lg:text-sm">
                      To inspire and empower young minds to excel academically, develop a strong moral compass, 
                      and contribute meaningfully to society as responsible global citizens.
                    </p>
                  </div>
                </div>

                {/* Mission Card */}
                <div className="group">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-pink-100">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <div className="p-2 sm:p-2.5 lg:p-3 bg-gradient-to-r from-pink-500 to-pink-600 rounded-lg sm:rounded-xl mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                        <Globe className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
                      </div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent">
                        Our Mission
                      </h3>
                    </div>
                    <div className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed text-xs sm:text-sm lg:text-sm">
                      <div className="flex items-start">
                        <BookOpen className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-blue-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                        <p>Dynamic student-centered learning environment fostering growth and creativity.</p>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 lg:w-4 lg:h-4 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                        <p>Nurture well-rounded individuals through academics, sports, arts, and culture.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite 1s;
        }

        /* Mobile specific adjustments for stats cards */
        @media (max-width: 640px) {
          .absolute {
            position: absolute;
          }
          
          /* Ensure stats cards don't overflow on very small screens */
          @media (max-width: 375px) {
            .text-sm {
              font-size: 0.75rem;
            }
            .min-w-\\[80px\\] {
              min-width: 70px;
            }
          }
        }
        @media (min-width: 374px) and (max-width: 512px) and (orientation: landscape) {
          .grid-cols-1 {
            grid-template-columns: 1fr;
          }
        }

        /* Samsung Z Flip specific adjustments */
        @media (max-width: 374px) and (min-height: 740px) {
          .min-h-screen {
            min-height: 100vh;
          }
        }

        /* Tablet specific adjustments */
        @media (min-width: 768px) and (max-width: 1024px) {
          .lg\\:grid-cols-2 {
            grid-template-columns: 1fr;
          }
        }

        /* Large tablet/small desktop adjustments */
        @media (min-width: 1024px) and (max-width: 1280px) {
          .lg\\:max-w-\\[700px\\] {
            max-width: 600px;
          }
        }
      `}</style>
    </div>
  );
}

export default About;