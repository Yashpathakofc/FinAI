import React from 'react';

const FinancialServices: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-gray-50">
      {/* Left Section with Image and Blue Border */}
      <div className="relative lg:w-1/2 p-6 lg:p-12">
        {/* Blue Border */}
        <div className="absolute inset-0 -z-10 bg-blue-800 rounded-lg"></div>
        <img
          src="/ai2.jpg" // Replace with actual path
          alt="Modern Building"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right Section with Text */}
      <div className="lg:w-1/2 p-8 flex flex-col justify-center">
        <div className="flex items-center mb-6">
          <div>
            <h2 className="text-red-600 text-lg font-semibold">About Us</h2>
            <h1 className="text-4xl font-bold mt-2">
              Revolutionizing Financial Services
            </h1>
          </div>
        </div>
        <p className="text-gray-600 mt-4">
          At Financial GenAI Services, we leverage advanced AI technologies to
          redefine traditional finance practices, making expert advice more
          accessible.
        </p>

        <div className="flex mt-8 justify-start space-x-8"> {/* Added space-x-8 for spacing */}
          {/* Clients Section */}
          <div className="text-center ml-8"> {/* Added ml-8 to shift the images and text */}
            <img className="h-20 w-20 mx-auto mb-2" src="user.png" alt="User Icon" />
            <h3 className="text-red-600 text-3xl font-bold">100+</h3>
            <p className="text-gray-600">Clients</p>
            <p className="text-sm text-gray-400">Happy Clients</p>
          </div>

          {/* Solutions Section */}
          <div className="text-center ml-8"> {/* Added ml-8 to shift the images and text */}
            <img className="h-20 w-20 mx-auto mb-2" src="user.png" alt="User Icon" />
            <h3 className="text-red-600 text-3xl font-bold">50+</h3>
            <p className="text-gray-600">Solutions</p>
            <p className="text-sm text-gray-400">Innovative Solutions</p>
          </div>
        </div>

        <p className="mt-8 text-gray-600">
          Our innovative chatbot, Jia, acts like a certified accountant,
          providing expert guidance anytime you need it.
        </p>

        <button className="bg-red-600 hover:bg-red-700 text-white mx-5 font-semibold py-2 px-3 rounded-md text-base mt-6">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default FinancialServices;
  