import React from "react";

function Footer() {
  return (
    <footer id="contact" className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">

      <div className="mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700">

        <div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Hotel Shiv Sarovar
          </h3>
          <p className="mt-3 text-gray-400 leading-relaxed">
            Riverside serenity and premium stays in Uttarakhand.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Locations</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                Haridwar, Uttarakhand
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                Dehradun, Uttarakhand
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="mailto:reservations@shivsarovar.com"
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                reservations@shivsarovar.com
              </a>
            </li>
            <li>
              <span className="hover:text-yellow-400 transition-colors duration-300">
                +91-XXXXXXXXXX
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© 2025 Hotel Shiv Sarovar. All rights reserved.</p>
        <a
          href="#top"
          className="mt-4 md:mt-0 hover:text-yellow-400 transition-colors duration-300"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
