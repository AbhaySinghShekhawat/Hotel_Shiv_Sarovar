import React from "react";
import img1 from '../assets/images/img2.jpg'
import img2 from '../assets/images/img3.jpg'
import img3 from '../assets/images/img4.jpg'
import img4 from '../assets/images/img5.jpg'

export default function About() {
  const images = [img1, img2, img3, img4];

  const features = [
    "Complimentary Breakfast",
    "High-speed Wi-Fi",
    "24×7 Reception",
    "Airport Pickup (on request)",
  ];

  return (
    <section id="about" className="relative bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="pt-20 mx-auto flex flex-col lg:flex-row gap-12 items-center">

        {/* LEFT TEXT SECTION */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
            
              A sanctuary
            by the Ganges and the hills
          </h2>
          <p className="text-lg text-[#64748b] leading-relaxed">
            Welcome to Hotel Shiv Sarovar — 
            an elegant boutique experience celebrating Uttarakhand’s soul. 
            Wake to gentle river breezes in Haridwar or the calm of Dehradun’s pine-scented air. 
            Thoughtful hospitality, refined design, and nature’s soothing rhythm await.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-8">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/70 backdrop-blur-md text-center rounded-xl shadow-md px-4 py-3 text-gray-800 text-sm font-medium"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          {images.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={img}
                alt={`gallery-${idx}`}
                className="w-full h-56 md:h-64 lg:h-72 object-cover rounded-2xl transform hover:scale-110 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
