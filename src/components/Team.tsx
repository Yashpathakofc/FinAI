import React from "react";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  socials: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Yug Pathak",
    title: "Founder/CEO",
    image: "./Yug.jpeg", // Replace with actual image URLs
    socials: {
      instagram: "https://www.instagram.com/yug._.pathak/?hl=en",
      facebook: "https://www.facebook.com/yug.pathak.3576?mibextid=ZbWKwL",
      linkedin: "https://www.linkedin.com/in/yug-pathak-94b7b225b/",
    },
  },
  {
    name: "Yash Pathak",
    title: "Co-Founder/CTO",
    image: "./Yash (3).jpeg",
    socials: {
      instagram: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
  {
    name: "Raj Pathak",
    title: "Managing Director",
    image: "./Raj (2).jpeg",
    socials: {
      instagram: "#",
      facebook: "#",
      linkedin: "#",
    },
  },
];

const Team: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-8">Meet Our Team</h2> {/* Updated heading */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gray-100 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
                style={{ aspectRatio: "3 / 4" }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-white transition-opacity duration-300 p-4">
                <h3 className="text-lg sm:text-xl font-semibold">{member.name}</h3>
                <p className="text-sm sm:text-base">{member.title}</p>
                <div className="mt-4 flex space-x-4 justify-center">
                  {member.socials.instagram && (
                    <a
                      href={member.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300"
                    >
                      <i className="fab fa-instagram text-2xl"></i>
                    </a>
                  )}
                  {member.socials.facebook && (
                    <a
                      href={member.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300"
                    >
                      <i className="fab fa-facebook-f text-2xl"></i>
                    </a>
                  )}
                  {member.socials.linkedin && (
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-gray-300"
                    >
                      <i className="fab fa-linkedin-in text-2xl"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
