import React from "react";

interface ReviewCardProps {
  name: string;
  role: string;
  image: string;
  text: string;
  rating: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, role, image, text, rating }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-gray-100 rounded-lg shadow-md mx-4 transform transition-transform hover:-translate-y-2 hover:shadow-lg hover:ring-2 hover:ring-pink-500">
      <div className="flex justify-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-pink-500 text-lg">&#9733;</span>
        ))}
      </div>
      <p className="text-gray-700 mb-4">{text}</p>
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full border border-gray-300 mr-4"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: "Raj Kumar Pathak",
      role: "Financial Advisor",
      image: "./Raj.jpeg", // Replace with the actual image path
      text: "Working with Financial GenAI Services transformed my approach to managing finances—effortless and effective!",
      rating: 5,
    },
    {
      name: "Yash Pathak",
      role: "Investor",
      image: "./Yash.jpeg", // Replace with the actual image path
      text: "Financial GenAI Services revolutionized my investments—Jia is a game-changer!",
      rating: 5,
    },
    {
      name: "Yug Pathak",
      role: "Business Owner",
      image: "./Yug.jpeg", // Replace with the actual image path
      text: "Jia helped streamline my accounting process, making financial management a breeze!",
      rating: 5,
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-sm font-bold text-pink-600 uppercase">Testimonial</h2>
        <h1 className="text-3xl font-bold text-gray-800">What Our Clients Say About Us</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mx-6">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            name={review.name}
            role={review.role}
            image={review.image}
            text={review.text}
            rating={review.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
