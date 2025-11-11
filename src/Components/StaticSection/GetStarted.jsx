import React from 'react';
import { Link } from 'react-router';
import getStartedImg from '../../assets/staticImage.jpeg';

const GetStarted = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10 items-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-20">
            Ready to Manage Your{' '}
            <span className="bg-white text-[#632EE3] px-2 py-1 rounded-lg">
              AI Models?
            </span>
          </h2>
          <p className="text-base md:text-lg mb-8 text-white/90 max-w-lg">
            Join our platform to add, track, and optimize your AI models all in
            one place. Empower your development process with a smarter,
            organized workflow designed for innovation.
          </p>
          <Link
            to="/login"
            className="bg-black text-white font-semibold py-3 px-8 rounded-lg hover:bg-gray-800 transition duration-300 shadow-md"
          >
            Get Started
          </Link>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={getStartedImg}
            alt="AI teamwork illustration"
            className="w-full md:w-[90%] rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
