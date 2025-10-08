import React from "react";
import img from '../assets/images/img4.jpg'
import img1 from '../assets/images/img5.jpg'
import img2 from '../assets/images/img6.jpg'

const rooms = [
  {
    title: "Deluxe Room",
    description: "Elegant interiors with warm wood textures and premium comfort.",
    image: img,
    
  },

  {
    title: "Hillside Room",
    description:
      "Tranquil ambiance with pine-scented air and nature-inspired decor.",
    image: img1,
  },
  {
    title: "Family Suite",
    description:
      "Generous space for togetherness with a cozy living area and modern luxury.",
    image:img2,
  },
];

export default function Rooms() {
  return (
    <section
      id="rooms"
      className="py-16 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="pt-20 mx-auto ">
        <h2 className="text-4xl text-start md:text-4xl font-bold text-gray-900 mb-4">
          Our
          Rooms
          
        </h2>
        <p className="text-lg text-start text-[#1e293b] mb-12">
          Refined spaces designed for calm, comfort, and connection with nature.
        </p>

        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-5">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="group relative bg-white/90 shadow-lg rounded-2xl w-full sm:w-[90%] md:w-[45%] lg:w-[35%] flex flex-col overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="rounded-t-2xl w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent rounded-t-2xl"></div>
              </div>

              <div className="p-6 flex flex-col items-start justify-between flex-grow">
                <h3 className="text-2xl text-start font-semibold text-gray-900 mb-3">
                  {room.title}
                </h3>
                <p className="text-gray-600 text-start flex-grow">
                  {room.description}
                </p>

                <button className="mt-6 px-5 py-2 bg-transparent/5 text-zinc-900 rounded-xl hover:bg-yellow-500 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
