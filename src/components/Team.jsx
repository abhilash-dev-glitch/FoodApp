// components/Team.jsx
import React from 'react';

const team = [
  {
    name: "Anaya Rao",
    designation: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    linkedin: "https://www.linkedin.com/in/anayarao"
  },
  {
    name: "Raj Malhotra",
    designation: "CTO",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    linkedin: "https://www.linkedin.com/in/rajmalhotra"
  },
  {
    name: "Sneha Iyer",
    designation: "Design Lead",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    linkedin: "https://www.linkedin.com/in/snehaiyer"
  },
  {
    name: "Amit Sharma",
    designation: "Marketing Head",
    image: "https://randomuser.me/api/portraits/men/62.jpg",
    linkedin: "https://www.linkedin.com/in/amitsharma"
  }
];

const Team = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-300 py-16 px-6 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-black mb-10">Our Core Team</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-xl text-center transition transform hover:scale-105"
            data-aos="fade-up"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-md"
            />
            <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{member.designation}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              LinkedIn Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
