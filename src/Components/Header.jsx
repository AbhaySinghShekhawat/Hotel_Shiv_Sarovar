import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "rooms", label: "Rooms" },
    { id: "locations", label: "Locations" },
    { id: "gallery", label: "Gallery" },
  ];

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 50) setScrolled(true);
    else setScrolled(false);

    let currentSection = "hero";

    navLinks.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) {
        const sectionTop = section.offsetTop - 100; 
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSection = link.id;
        }
      }
    });

    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 50) {
      currentSection = navLinks[navLinks.length - 1].id;
    }

    setActive(currentSection);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/30 backdrop-blur-md shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold text-gray-900">Hotel Shiv Sarovar</h1>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative text-lg font-medium transition-colors duration-200 ${
                active === link.id ? "bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.label}
              {active === link.id && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-yellow-400 rounded-full"></span>
              )}
            </a>
          ))}
        </nav>

        <button className="hidden md:block bg-gradient-to-r from-blue-600 to-yellow-500 text-white font-semibold px-5 py-2 rounded-xl shadow-lg hover:scale-105 transition-transform">
          Book Now
        </button>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-lg px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left text-lg font-medium ${
                active === link.id ? "bg-gradient-to-r from-blue-600 to-yellow-500 bg-clip-text text-transparent" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {link.label}
            </a>
          ))}
          <button className="w-full bg-gradient-to-r from-blue-600 to-yellow-500 text-white font-semibold px-5 py-2 rounded-xl shadow-lg">
            Book Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
