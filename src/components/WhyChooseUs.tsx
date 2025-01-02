import React from 'react';

const CircularMeter: React.FC<{ value: number; label: string }> = ({ value, label }) => {
  const radius = 30; // Radius of the circle
  const strokeWidth = 4; // Stroke width of the circle
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="relative">
        <svg
          width="80"
          height="80"
          className="transform -rotate-90"
          aria-label={`${label}: ${value}%`}
        >
          {/* Background Circle */}
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
          />
          {/* Progress Circle */}
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="none"
            stroke="#dc2626"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        {/* Percentage Value in Center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-600 font-bold text-xl">
          {value}%
        </div>
      </div>
      <div className="mt-2 text-gray-700 font-medium">{label}</div>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center bg-white p-8 lg:p-16 shadow-md">
      {/* Left Section */}
      <div className="lg:w-1/2 text-center lg:text-left mx-5">
        <h2 className="text-red-600 text-lg font-bold ">Why Choose Us?</h2>
        <h1 className="text-4xl font-extrabold text-gray-800 my-4">Why Choose Us</h1>
        <p className="text-gray-600 mb-8">
          We provide cutting-edge AI services designed to simplify your financial journey and maximize outcomes.
        </p>
        <div className="flex justify-center lg:justify-start gap-8 mb-8">
          <CircularMeter value={100} label="Interest" />
          <CircularMeter value={80} label="Happy Clients" />
          <CircularMeter value={60} label="Followers" />
        </div>
        <p className="text-gray-600 mb-8">
          Our commitment to innovation sets us apart, empowering users to take control of their financial futures.
        </p>
        <button className="bg-red-600 text-white px-6 py-3 rounded-lg shadow hover:bg-red-700 focus:ring-2 focus:ring-red-500">
          Get Started
        </button>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0">
        <img
          src="./robo.avif"
          alt="Robot Illustration"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default WhyChooseUs;
