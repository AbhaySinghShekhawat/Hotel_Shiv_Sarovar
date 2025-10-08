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
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      let currentSection = "";
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop - 120;
          const sectionHeight = section.offsetHeight;
          if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
          ) {
            currentSection = link.id;
          }
        }
      });
      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-[#f8fafc]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-5">
        <h1 className="text-xl font-semibold text-gray-900">
          Hotel Shiv Sarovar
        </h1>

        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`relative text-[15px] font-medium transition-colors duration-200 ${
                active === link.id
                  ? "text-black"
                  : "text-gray-700 hover:text-black"
              }`}
            >
              {link.label}
              {/* Animated underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-black transition-all duration-300 ${
                  active === link.id ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </a>
          ))}
        </nav>

        <button className="hidden md:block bg-gradient-to-r from-blue-700 to-yellow-400 text-white font-semibold text-[14px] px-5 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
          Book Now
        </button>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)}
              className={`block text-gray-800 text-[15px] font-medium ${
                active === link.id ? "underline decoration-black" : ""
              }`}
            >
              {link.label}
            </a>
          ))}
          <button className="w-full bg-gradient-to-r from-blue-700 to-yellow-400 text-white font-semibold text-[14px] px-5 py-2 rounded-lg shadow-sm">
            Book Now
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
