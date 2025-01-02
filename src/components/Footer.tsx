import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-950 text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-center lg:text-left mb-8">
          {/* Branding Section */}
          <h2 className="text-2xl font-semibold mb-4 lg:mb-0">
            Financial GenAI Services
          </h2>

          {/* Contact Button */}
          <div className="bg-white text-black py-4 px-6 rounded shadow-md inline-flex items-center">
            <p className="mr-4">Do you have any questions?</p>
            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Separator */}
        <hr className="border-gray-500 my-8" />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center lg:text-left">
          {/* Menu Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  Service
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="hover:text-gray-300 transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <p>+91 8962313507</p>
            <p>yugpathak2005@gmail.com</p>
            <p>DLF CyberHub</p>
            <p>Gurugram, India (122002)</p>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300"
              >
                <i className="fab fa-youtube text-2xl"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 text-center text-sm">
          <span className="font-bold">© 2025 Financial GenAI Services</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
