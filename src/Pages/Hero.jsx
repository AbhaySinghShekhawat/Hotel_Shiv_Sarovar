import React from "react";
import img from "../assets/images/img1.jpg"; // use your house background image here

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat mt-[50px] flex items-center justify-start"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* White fade at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 md:px-16 lg:px-24">
        <h1 className="text-4xl md:text-6xl font-bold text-[#1e293b] mb-4">
          Hotel Shiv Sarovar
        </h1>

        <p className="text-lg md:text-xl text-[#334155] mb-8">
          Riverside serenity and premium stays across Haridwar & Dehradun.
        </p>

        <div className="flex sm:flex-row gap-4">
          <button className="px-8 py-3 rounded-md font-semibold text-white bg-gradient-to-r from-blue-700 to-yellow-400 shadow-md hover:scale-105 transition-transform">
            Explore Rooms
          </button>
          <button className="px-8 py-3 rounded-md font-semibold text-[#1e293b] bg-white shadow-md hover:shadow-lg hover:scale-105 transition-transform">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
