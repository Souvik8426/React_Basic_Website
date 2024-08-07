import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Build the Future with Web</h1>
        <p className="text-gray-600 mb-8">Discover how we can help you connect with the next generation of the internet.</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            Contact sales
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;