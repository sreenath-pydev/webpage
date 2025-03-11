import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white bg-opacity-95'}`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">SU</div>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">About</a>
          <a href="#experience" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Experience</a>
          <a href="#education" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Education</a>
          <a href="#certificates" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Certificates</a>
          <a href="#skills" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Skills</a>
          <a href="#contact" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">Contact</a>
        </div>
        <div className="md:hidden">
          <button className="text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;