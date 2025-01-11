import { useState } from "react";

interface NavbarProps {
  toggleLogin: () => void;
  toggleSignUp: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleLogin, toggleSignUp }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg fixed top-0 left-0 w-full z-10">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 mx-5">
        <img
          src="/image.png"
          alt="FIN AI Logo"
          className="h-12"
        />
      </div>

      {/* Hamburger Icon for Mobile */}
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="w-6 h-1 bg-white mb-1 rounded-full"></div>
        <div className="w-6 h-1 bg-white mb-1 rounded-full"></div>
        <div className="w-6 h-1 bg-white rounded-full"></div>
      </div>

      {/* Navigation Links */}
      <ul
        className={`absolute md:relative bg-white md:bg-transparent text-gray-800 md:text-white top-20 md:top-0 left-0 w-full md:w-auto md:flex items-center space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0 transition-all duration-300 shadow-lg md:shadow-none rounded-lg md:rounded-none ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
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
            <span className="cursor-pointer font-bold flex items-center hover:text-purple-200">
              {dropdown.title}
              <svg
                className="w-4 h-4 ml-2 transition-transform transform group-hover:rotate-180"
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
            <ul className="dropdown-content hidden group-hover:block absolute bg-white text-gray-800 shadow-md rounded-md py-2 z-20 mt-2 w-48">
              {dropdown.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-purple-500"
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
        <button
          onClick={toggleLogin}
          className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-purple-500 transition"
        >
          Log In
        </button>
        <button
          onClick={toggleSignUp}
          className="px-4 py-2 bg-white text-purple-500 rounded-lg hover:bg-purple-500 hover:text-white transition"
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
