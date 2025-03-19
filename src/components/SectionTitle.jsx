import React from 'react';

const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-5xl font-bold text-rgbGreen text-center mb-8 pb-5 relative hover:text-shadow-rgbGreen hover:translate-y-2 duration-500" style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.3)" }}>
      {children}
      <span className="absolute  left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1 w-12 h-1 bg-rgbGreen"></span>
    </h2>
  );
};

export default SectionTitle;