import React, { useState, useEffect } from 'react';
import { Heart, Globe, BookOpen, Users, GraduationCap, Star } from 'lucide-react';
import img8 from "../assets/8.jpg";   // left side static image
import img1 from "../assets/1.jpg";   // carousel image 1
import img3 from "../assets/3.jpg";   // carousel image 2
import img20 from "../assets/20.jpg";
import img10 from "../assets/10.jpg"; // carousel image 3

function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    students: 0,
    awards: 0,
    teachers: 0,
    success: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);

  const schoolImages = [
    {
      src: img1,
      alt: "Modern classroom with students",
      title: "Interactive Learning Environment"
    },
    {
      src: img3, 
      alt: "Students in large lecture hall",
      title: "Spacious Academic Halls"
    },
    {
      src: img20,
      alt: "Students during examination",
      title: "Learning Beyond Books"
    },
    {
      src: img10,
      alt: "Students during examination",
      title: "Excellence in Academics"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true);

            const animateCounters = () => {
              const targets = { students: 1710, awards: 35, teachers: 50, success: 95 };
              const duration = 2000;
              const startTime = Date.now();

              const animate = () => {
                const elapsed = Date.now() - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easeOut = 1 - Math.pow(1 - progress, 3);

                setCounters({
                  students: Math.floor(targets.students * easeOut),
                  awards: Math.floor(targets.awards * easeOut),
                  teachers: Math.floor(targets.teachers * easeOut),
                  success: Math.floor(targets.success * easeOut)
                });

                if (progress < 1) {
                  requestAnimationFrame(animate);
                } else {
                  setCounters(targets);
                }
              };

              setTimeout(() => requestAnimationFrame(animate), 300);
            };

            animateCounters();
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '-50px 0px'
      }
    );

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % schoolImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [schoolImages.length]);

  return (
    <div
      id="about"
      className="relative min-h-screen overflow-hidden select-none bg-gradient-radial from-purple-100 via-white-100 to-pink-100"
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700 mb-4 sm:mb-6 pt-8 z-10 relative ">
        About Us
      </h2>
      {/* Background SVG shapes - Hidden on mobile, visible on larger screens */}
      <svg className="hidden sm:block absolute top-0 -left-20 w-60 h-60 lg:w-80 lg:h-80 opacity-40 sm:opacity-50 lg:opacity-60 z-0" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="100" fill="url(#grad1)" />
        <defs>
          <radialGradient id="grad1" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 100) rotate(90) scale(100)">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
      
      <svg className="hidden sm:block absolute bottom-7 right-0 w-64 h-64 lg:w-96 lg:h-96 opacity-30 sm:opacity-40 lg:opacity-50 z-0" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="300" height="300" rx="30" fill="url(#grad2)" />
        <defs>
          <linearGradient id="grad2" x1="0" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f9a8d4" />
            <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Additional Creative Background Elements - Hidden on mobile */}
      <svg className="hidden lg:block absolute top-1/3 right-1/4 w-24 h-24 xl:w-32 xl:h-32 opacity-30 z-0 animate-float" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,0 90,35 73,85 27,85 10,35" fill="url(#grad3)" />
        <defs>
          <linearGradient id="grad3" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.3" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating decorative dots - Hidden on mobile */}
      <div className="hidden sm:block absolute top-1/2 left-1/4 w-4 h-4 lg:w-6 lg:h-6 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full opacity-60 z-0 animate-pulse"></div>
      <div className="hidden sm:block absolute top-1/6 right-1/3 w-3 h-3 lg:w-4 lg:h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-70 z-0 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="hidden sm:block absolute bottom-1/3 left-1/6 w-3 h-3 lg:w-5 lg:h-5 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-50 z-0 animate-pulse" style={{animationDelay: '2s'}}></div>
 
      <div className="min-h-screen p-4 sm:p-6 lg:p-8 xl:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 relative z-5">
     
          {/* Left Side - Main Image Section */}
          <div className={`lg:col-span-3 relative flex items-center justify-center transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              
              {/* Main Image */}
              <div className="relative z-20 w-full mx-auto rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-500">
                <img 
                  src={img8}
                  draggable={false}
                  alt="Happy student with books" 
                  className="w-full h-auto rounded-2xl sm:rounded-3xl"
                />
              </div>

              {/* Background Decorative Elements - Hidden on mobile */}
             
              
              {/* Additional floating elements - Hidden on mobile, limited on small screens */}
              <div className="hidden sm:block absolute top-1/2 -left-12 sm:-left-16 lg:-left-20 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-cyan-300 to-blue-500 rounded-xl sm:rounded-2xl opacity-50 sm:opacity-60 lg:opacity-70 z-15 animate-float-delayed transform rotate-45"></div>
              
              {/* Stats Cards - Responsive positioning */}
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-xl border-2 sm:border-4 border-dashed border-purple-400 transform rotate-1 sm:rotate-3 hover:rotate-0 transition-transform duration-400 cursor-default min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] hover:shadow-purple-400 scale-100 hover:scale-105 z-30">
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-purple-700 tracking-wide">{counters.students.toLocaleString()}+</div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-600 font-semibold leading-tight">Happy Students</div>
              </div>

              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-xl border-2 sm:border-4 border-dashed border-pink-400 transform -rotate-1 sm:-rotate-3 hover:rotate-0 transition-transform duration-400 cursor-default min-w-[120px] sm:min-w-[140px] lg:min-w-[160px] hover:shadow-pink-400 scale-100 hover:scale-105 z-30">
                <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-pink-700 tracking-wide">{counters.awards}+</div>
                <div className="text-sm sm:text-base lg:text-lg text-gray-600 font-semibold leading-tight">Awards Won</div>
              </div>

              {/* Floating Icons - Hidden on mobile, shown on larger screens */}
              <div className="hidden sm:block absolute -top-16 sm:-top-20 lg:-top-24 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full p-3 lg:p-4 shadow-lg animate-float cursor-default hover:scale-110 transition-transform duration-300 z-25">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8" />
              </div>
              
            

            
            </div>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-2 flex flex-col space-y-6 lg:space-y-8 relative z-5">
            
            {/* Top Half - Photos Carousel */}
            <div className={`flex-1 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700 mb-3 sm:mb-4 text-center lg:text-left">
                Our Learning Environment
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded mb-4 sm:mb-6 mx-auto lg:mx-0"></div>

              <div className="relative h-[200px] sm:h-[240px] lg:h-[280px] xl:h-[320px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl hover:shadow-3xl transition-shadow duration-500 z-20">
                {schoolImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 transform ${
                      index === currentImageIndex ? 'translate-x-0 opacity-100 z-20' : 'translate-x-6 opacity-0 z-10'
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-2xl sm:rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl sm:rounded-3xl"></div>
                    <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-3 sm:left-4 lg:left-6 text-white text-lg sm:text-xl lg:text-2xl font-bold sm:font-extrabold drop-shadow-lg">
                      {image.title}
                    </div>
                  </div>
                ))}

              
                
              </div>
              <div className="absolute top-70 left-1/2   xl:top-105  lg:top-104 sm:top-84 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-30">
                  {schoolImages.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`transition-all duration-300 rounded-full ${
                        idx === currentImageIndex 
                          ? 'w-6 sm:w-8 lg:w-10 h-2 sm:h-2.5 lg:h-3 bg-gradient-to-r from-purple-500 to-pink-500' 
                          : 'w-2 sm:w-2.5 lg:w-3 h-2 sm:h-2.5 lg:h-3 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Select image ${idx + 1}`}
                    />
                  ))}
                </div>
              
            </div>

            {/* Bottom Half - Mission and Vision */}
            <div className={`flex-1 mt-8 sm:mt-6 lg:mt-0 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-700 mb-3 sm:mb-4 text-center lg:text-left">
                Our Purpose
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded mb-4 sm:mb-6 mx-auto lg:mx-0"></div>

              <div className="space-y-4 sm:space-y-6">
                {/* Vision Card */}
                <div className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 shadow-lg sm:shadow-xl lg:shadow-2xl border border-purple-200 sm:border-purple-300 hover:border-purple-500 cursor-default hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-purple-200 sm:hover:shadow-purple-400 transition transform duration-500 z-20 relative">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl sm:rounded-2xl text-white shadow-lg sm:shadow-xl mr-3 sm:mr-4 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                    To be the most innovative and accessible play school network, empowering educators, delighting children, and transforming early childhood education through personalized, high-quality learning experiences.
                  </p>
                </div>

                {/* Mission Card */}
                <div className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 shadow-lg sm:shadow-xl lg:shadow-2xl border border-pink-200 sm:border-pink-300 hover:border-pink-500 cursor-default hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-pink-200 sm:hover:shadow-pink-400 transition transform duration-500 z-20 relative">
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-gradient-to-r from-pink-600 to-pink-700 rounded-xl sm:rounded-2xl text-white shadow-lg sm:shadow-xl mr-3 sm:mr-4 group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-pink-700 to-blue-700 bg-clip-text text-transparent">
                      Our Mission
                    </h3>
                  </div>
                  <div className="space-y-2 sm:space-y-3 text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                    <div className="flex items-start">
                      <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <p>Unlocking Potential with Joy: To ensure every child thrives to their fullest, learning effortlessly in an atmosphere of love, care, and encouragement.</p>
                    </div>
                    <div className="flex items-start">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-green-600 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                      <p>Fostering Child-Led Discovery: To nurture curiosity and creativity by letting children explore their interests freely, guided subtly by inspired educators.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite 1s;
        }
        .bg-gradient-radial {
          background-image: radial-gradient(circle, var(--tw-gradient-stops));
        }
        .z-25 {
          z-index: 25;
        }
        .z-15 {
          z-index: 15;
        }
      `}</style>
    </div>
  );
}

export default About;