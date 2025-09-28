import React, { useState, useEffect, useRef } from "react";
import img15 from "../assets/15.jpg";
import img17 from "../assets/17.jpg";
import img19 from "../assets/19.jpg";
import img18 from "../assets/18.jpg";

const Academic = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [animateCards, setAnimateCards] = useState([]);
  const sectionRef = useRef(null);

  const classes = [
    {
      name: "Playgroup",
      image: img15,
      desc: "Fun-based learning for toddlers to explore and socialize.",
      details: {
        age: "1-2 years",
        fees: "₹30,000 per year",
        info: "Interactive learning, social skills, and playful activities for early childhood development.",
      },
    },
    {
      name: "Nursery",
      image: img17,
      desc: "Strong foundations in language, numbers, and creativity.",
      details: {
        age: "3-4 years",
        fees: "₹35,000 per year",
        info: "Building language, math, and motor skills through play and structured learning.",
      },
    },
    {
      name: "LKG",
      image: img19,
      desc: "Structured learning with fun activities.",
      details: {
        age: "4-5 years",
        fees: "₹40,000 per year",
        info: "Phonics, numbers, and storytelling with interactive activities.",
      },
    },
    {
      name: "UKG",
      image: img18,
      desc: "Preparing children for primary school with growth focus.",
      details: {
        age: "5-6 years",
        fees: "₹45,000 per year",
        info: "Holistic prep for school — academics, creativity, and confidence.",
      },
    },
  ];

  // Animate cards on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (entries[0].isIntersecting) {
          classes.forEach((_, index) => {
            setTimeout(() => {
              setAnimateCards((prev) =>
                prev.includes(index) ? prev : [...prev, index]
              );
            }, index * 300);
          });
          obs.disconnect(); // stop observing after first trigger
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const toggleDetails = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      ref={sectionRef}
      className="relative min-h-screen p-8 overflow-hidden bg-gradient-to-br from-pink-100 via-yellow-50 to-blue-100 select-none"
    >
      {/* Floating playful shapes */}
      <div className="absolute -top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full opacity-40 animate-float"></div>
      <div className="absolute top-20 right-10 w-24 h-24 bg-blue-300 rounded-full opacity-40 animate-float-slow"></div>
      <div className="absolute bottom-0 left-20 w-40 h-40 bg-green-200 rounded-full opacity-40 animate-float"></div>
      <div className="absolute bottom-10 right-20 w-20 h-20 bg-pink-300 rounded-full opacity-40 animate-float-slow"></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-pink-700 drop-shadow-sm">
          Academics
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {classes.map((cls, index) => (
            <div
              key={index}
              className={`rounded-2xl bg-white shadow-lg overflow-hidden transform transition duration-700 ease-out hover:shadow-2xl hover:scale-105
                ${
                  animateCards.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
            >
              <img
                src={cls.image}
                alt={cls.name}
                draggable={false}
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-5 text-center">
                <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                  {cls.name}
                </h3>
                <p className="text-gray-600 text-sm">{cls.desc}</p>
                <button
                  onClick={() => toggleDetails(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`details-${index}`}
                  className="mt-4 px-5 py-2 bg-pink-400 text-white font-medium rounded-full hover:bg-pink-500 transition-all duration-300"
                >
                  {openIndex === index ? "Read Less" : "Read More"}
                </button>
              </div>

              {/* Expandable Section */}
              <div
                id={`details-${index}`}
                className={`transition-all duration-700 ease-in-out overflow-hidden select-text ${
                  openIndex === index
                    ? "max-h-96 opacity-100 p-5 bg-gradient-to-r from-pink-50 via-yellow-50 to-blue-50"
                    : "max-h-0 opacity-0 p-0"
                }`}
              >
                <p className="text-md">
                  <strong>Minimum Age:</strong> {cls.details.age}
                </p>
                <p className="text-md">
                  <strong>Fees:</strong> {cls.details.fees}
                </p>
                <p className="text-gray-700 mt-2">{cls.details.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) }
          50% { transform: translateY(-15px) }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) }
          50% { transform: translateY(-8px) }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Academic;
