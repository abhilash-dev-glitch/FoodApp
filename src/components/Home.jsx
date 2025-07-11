import React from 'react';
import phoneImage from '../assets/phone.png';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-300 px-10 py-8 font-sans">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
        
        {/* Left content */}
        <div className="lg:w-1/2 text-black text-left space-y-6">
          <h1 className="text-5xl font-extrabold leading-snug">Download the App.<br />It’s very easy and quick</h1>
          <p className="text-gray-800 text-base max-w-md">
            Your cravings, delivered. Explore a world of flavors and order from your favorite local restaurants, all in one easy app
          </p>

          {/* App store buttons */}
          <div className="flex gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-md shadow hover:bg-gray-900 transition">
              <span className="block text-xs uppercase">Lorem Ipsum</span>
              <span className="text-base font-medium">Lorem Play</span>
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-md shadow hover:bg-gray-900 transition">
              <span className="block text-xs uppercase">Lorem Ipsum</span>
              <span className="text-base font-medium">Lorem Store</span>
            </button>
          </div>

          {/* Socials */}
          <div className="flex gap-4 pt-6 text-black">
            <FaTwitter size={20} />
            <FaFacebookF size={20} />
            <FaInstagram size={20} />
          </div>
        </div>

        {/* Right: Phone Image */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <img
            src={phoneImage}
            alt="App Preview"
            className="max-w-[330px] mx-auto drop-shadow-2xl rotate-6 rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
