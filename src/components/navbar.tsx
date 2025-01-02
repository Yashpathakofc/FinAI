import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-md fixed top-0 left-0 w-full z-10">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 mx-5">
        <img src="/image.png" alt="FIN AI Logo" className="h-16" />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="w-6 h-1 bg-black mb-1"></div>
        <div className="w-6 h-1 bg-black mb-1"></div>
        <div className="w-6 h-1 bg-black"></div>
      </div>

      {/* Navigation Links */}
      <ul
        className={`absolute md:relative bg-white md:bg-transparent top-16 md:top-0 left-0 w-full md:w-auto md:flex items-center space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0 transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        {/* Dropdowns */}
        {[
          {
            title: "Software",
            links: [
              { label: "Software Features", href: "#" },
              { label: "Pricing", href: "#" },
              { label: "Documentation", href: "#" },
            ],
          },
          {
            title: "Services",
            links: [
              { label: "Consulting", href: "#" },
              { label: "Support", href: "#" },
              { label: "Custom Development", href: "#" },
            ],
          },
          {
            title: "Solution",
            links: [
              { label: "Financial Solutions", href: "#" },
              { label: "AI for Business", href: "#" },
              { label: "Case Studies", href: "#" },
            ],
          },
          {
            title: "Resources",
            links: [
              { label: "Blog", href: "#" },
              { label: "Whitepapers", href: "#" },
              { label: "Webinars", href: "#" },
            ],
          },
        ].map((dropdown, index) => (
          <li key={index} className="relative group">
            <span className="Navchild cursor-pointer font-bold flex items-center">
              {dropdown.title}
              <svg
                className="w-4 h-4 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
            {/* Dropdown Menu */}
            <ul className="dropdown-content hidden group-hover:block absolute bg-white shadow-md rounded-md py-2 z-20 w-full md:w-auto">
              {dropdown.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      {/* Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="px-4 py-2 border border-purple-500 text-purple-500 rounded-lg hover:bg-purple-100">
          Login
        </button>
        <button className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
