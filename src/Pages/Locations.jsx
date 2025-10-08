import React from "react";
import img1 from '../assets/images/img2.jpg'
import img2 from '../assets/images/img3.jpg'

const locations = [
  {
    title: "Haridwar",
    description:
      "Steps away from the sacred Ganges. Perfect for spiritual retreats and riverside walks.",
    image:img1,
  },
  {
    title: "Dehradun",
    description:
      "Nestled by pine forests and gentle hills. Ideal for nature escapes and city access.",
    image:img2,
      
  },
];

const Locations = () => {
  return (
    <section id="locations" className="bg-gray-50 py-16 px-6 md:px-16">
      <div className="mx-auto text-start  mb-12">
    <h2 className="text-4xl md:text-4xl font-bold 
                mb-4">
                 Locations
            </h2>

        <p className="text-gray-600 text-start text-lg">
          Choose the vibe that calls you — sacred riverside in Haridwar or the
          tranquil hills of Dehradun.
        </p>
      </div>

      <div className=" mx-auto grid md:grid-cols-2 gap-8">
        {locations.map((loc, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:shadow-2xl"
          >

            <div className="relative w-full h-64 overflow-hidden">
              <img
                src={loc.image}
                alt={loc.title}
                className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-yellow-500">
                {loc.title}
              </h3>
              <p className="text-gray-600 mt-2">{loc.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Locations;
