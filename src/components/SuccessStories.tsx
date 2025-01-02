import React from "react";

interface SuccessStory {
  image: string;
  description: string;
}

const SuccessStories: React.FC = () => {
  const stories: SuccessStory[] = [
    { image: "./success.avif", description: "Success Story 1" },
    { image: "./passion.jpg", description: "Success Story 2" },
    { image: "./shine.jpeg", description: "Success Story 3" },
    { image: "./dance.webp", description: "Success Story 4" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10">
          <h2 className="text-3xl sm:text-4xl text-pink-600 uppercase mb-4 sm:mb-0">
            Case Studies
          </h2>
          <h1 className="text-3xl sm:text-5xl text-center text-gray-800 mb-6 sm:mb-0 flex-1">
            Success Stories in Finance
          </h1>
          <button className="px-6 py-2 bg-pink-600 text-white text-sm rounded-md shadow-lg hover:bg-pink-700">
            Get Started
          </button>
        </div>

        {/* Grid of Success Stories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
              <img
                src={story.image}
                alt={`Success Story ${index + 1}`}
                className="w-full h-64 sm:h-72 lg:h-80 object-cover transition-transform transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <p className="text-white text-lg sm:text-xl font-semibold px-4 sm:px-6">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
