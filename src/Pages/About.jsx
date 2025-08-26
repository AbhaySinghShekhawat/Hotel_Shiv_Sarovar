import React from "react";
import img1 from '../assets/images/img2.jpg'
import img2 from '../assets/images/img3.jpg'
import img3 from '../assets/images/img4.jpg'
import img4 from '../assets/images/img5.jpg'

export default function About() {
  const images = [
    img1,
    img2,
    img3,
    img4,
  ];

  const features = [
    "Complimentary Breakfast",
    "High-speed Wi-Fi",
    "24×7 Reception",
    "Airport Pickup (on request)",
  ];

  return (
    <section id="about" className="relative bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="pt-20 mx-auto flex flex-col lg:flex-row gap-12 items-center">

        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">
              A sanctuary
            </span>{" "}
            by the Ganges and the hills
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to <span className="font-semibold bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent">Hotel Shiv Sarovar</span> — 
            an elegant boutique experience celebrating Uttarakhand’s soul. 
            Wake to gentle river breezes in Haridwar or the calm of Dehradun’s pine-scented air. 
            Thoughtful hospitality, refined design, and nature’s soothing rhythm await.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
  {features.map((item, idx) => (
    <div
      key={idx}
      className="bg-white/70 backdrop-blur-md rounded-xl shadow-md px-4 py-3 text-gray-800 text-sm font-medium hover:shadow-xl hover:scale-105 transition-all"
    >
      {item}
    </div>
  ))}
</div>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={img}
                alt={`gallery-${idx}`}
                className="w-full h-56 md:h-64 lg:h-72 object-cover transform hover:scale-110 transition-transform duration-700 rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
