import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-100 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src="https://via.placeholder.com/32.png" alt="Vetric Logo" className="h-6 mr-2" />
          <span className="text-lg font-bold">Name</span>
        </a>
        <nav className="flex justify-center space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Pricing</a>
          <a href="#" className="hover:underline">Features</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Header;