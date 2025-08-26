import React from "react";
import img from '../assets/images/img7.avif'

function StayBox() {
  return (
    <div className="flex items-center justify-center px-6 py-12 md:px-12 md:py-20 bg-gray-50">
      <div
        className="relative w-full rounded-2xl shadow border overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed "
        style={{
          backgroundImage:
            "url(" + img + ")",
        }}
      >
        <div className="absolute inset-0 bg-white/70"></div>

        <div className="relative z-10 p-10 md:p-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Plan your stay
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Write to us with your preferred dates and location (Haridwar or
            Dehradun). Our team will get back shortly.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-yellow-500 shadow-md hover:opacity-90 transition">
              Email Reservations
            </button>
            <button className="px-6 py-3 rounded-lg font-semibold text-gray-900 bg-white border hover:bg-gray-100 transition">
              Browse Rooms
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StayBox;
