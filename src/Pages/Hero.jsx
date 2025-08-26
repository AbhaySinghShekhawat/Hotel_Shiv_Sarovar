import React, { useState, useEffect } from "react";
import img from '../assets/images/img1.jpg'
import img1 from '../assets/images/img8.jpeg'
import img2 from '../assets/images/img9.jpeg'

const Hero = () => {
  const images = [
    img,
    img1,
    img2,
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-fixed bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
          Hotel Shiv Sarovar
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl">
          Riverside serenity and premium stays across Haridwar & Dehradun.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <button className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-yellow-500 shadow-lg hover:scale-105 transition-transform">
            Explore Rooms
          </button>
          <button className="px-6 py-3 rounded-xl font-semibold text-gray-900 bg-white/80 backdrop-blur-md shadow-lg hover:bg-white hover:scale-105 transition-transform">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
