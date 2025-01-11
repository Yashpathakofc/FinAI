// HeroSection.tsx
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[100vh] flex items-center mt-18">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/herovideo1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Text Content */}
      <div className="relative text-white px-6 py-16 max-w-[90%] sm:max-w-[70%] md:max-w-[50%] lg:max-w-[40%] mx-auto lg:ml-16">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 mx-5 leading-tight">
          Empowering Your Financial Journey
        </h1>
        <p className="text-base md:text-lg mb-8 mx-5 leading-relaxed">
          Experience the future of finance with AI-driven services that empower you to achieve your financial goals.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white mx-5 font-semibold py-2 px-5 rounded-md text-base">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
