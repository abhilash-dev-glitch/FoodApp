// components/About.jsx
import { Outlet, Link } from 'react-router-dom';

function About() {
  return (
    <div className="pt-24 px-6 min-h-screen bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-300 text-black">
      <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
      <p className="max-w-2xl mx-auto text-center mb-8 text-gray-800">
        We are a passionate team building a smooth and fresh experience for food lovers. Learn more about our mission and people.
      </p>

      <div className="text-center mb-8">
        <Link
          to="team"
          className="inline-block bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition"
        >
          Meet the Team
        </Link>
      </div>

      <Outlet />
    </div>
  );
}

export default About;
