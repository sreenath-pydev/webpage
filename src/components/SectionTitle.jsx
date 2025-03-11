import React from 'react';

const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-3xl font-bold text-blue-600 text-center mb-8 relative">
      {children}
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-12 h-1 bg-blue-600"></span>
    </h2>
  );
};

export default SectionTitle;