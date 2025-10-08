import React from "react";
import img1 from '../assets/images/img4.jpg'
import img2 from '../assets/images/img5.jpg'
import img3 from '../assets/images/img2.jpg'
import img4 from '../assets/images/img3.jpg'

const InAround = () => {
  const images = [
  img1,
  img2,
  img3,
  img4

  ];

  return (
    <section id="gallery" className="bg-gray-50 py-16 pt-20 px-6 lg:px-20">
      <div className="text-start mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
          In & Around
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Moments from our spaces and the nature around us.
        </p>
      </div>

      <div className="flex flex-wrap justify-between gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-xl shadow-lg w-full sm:w-[45%] lg:w-[22%] h-[30vh]"
          >
            <img
              src={src}
              alt={`Around ${index + 1}`}
              className="w-full h-full object-cover transform transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InAround;
