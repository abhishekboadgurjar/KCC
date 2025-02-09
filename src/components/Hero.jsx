"use client"; // Ensure this is a Client Component in Next.js

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Using Lucide icons for buttons

const images = [
  "/Banner1.jpg",
  "/Banner2.jpeg",
  "/Banner3.jpg",
  "/Banner4.jpg",
  "/Banner5.jpg"
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Function to handle manual navigation
  const prevSlide = () => setIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  const nextSlide = () => setIndex((prevIndex) => (prevIndex + 1) % images.length);

  return (
    <section id="/" className="relative h-screen overflow-hidden">
      {images.map((img, i) => (
        <motion.div
          key={i}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            i === index ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
          style={{ backgroundImage: `url(${img})` }} 
        />
      ))}

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold">Building Roads, Connecting Futures</h1>
        <p className="mt-4 text-lg md:text-xl">Your trusted road construction company with excellence.</p>
        <a href="#contact" className="mt-6 inline-block bg-white text-blue-900 font-bold py-3 px-6 rounded-lg">Get a Quote</a>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
      >
        <ChevronLeft size={30} />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
      >
        <ChevronRight size={30} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button 
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? "bg-white w-6" : "bg-gray-400"
            }`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
