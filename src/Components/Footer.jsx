import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-700 border-t border-gray-200">
      {/* Main Footer Section */}
      <div className="max-w-9xl mx-auto px-6 md:px-12 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Left Column */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            Hotel Shiv Sarovar
          </h3>
          <p className="mt-3 text-gray-500 text-base leading-relaxed">
            Riverside serenity and premium stays in Uttarakhand.
          </p>
        </div>

        {/* Middle Column */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            Locations
          </h4>
          <ul className="space-y-2 text-gray-500">
            <li>Haridwar, Uttarakhand</li>
            <li>Dehradun, Uttarakhand</li>
          </ul>
        </div>

        {/* Right Column */}
        <div>
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Contact</h4>
          <ul className="space-y-2 text-gray-500">
            <li>
              Email:{" "}
              <a
                href="mailto:reservations@shivsarovar.com"
                className="hover:text-gray-800 transition-colors"
              >
                reservations@shivsarovar.com
              </a>
            </li>
            <li>Phone: +91-XXXXXXXXXX</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2025 Hotel Shiv Sarovar. All rights reserved.</p>
          <a
            href="#top"
            className="mt-3 md:mt-0 hover:text-gray-800 transition-colors"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
