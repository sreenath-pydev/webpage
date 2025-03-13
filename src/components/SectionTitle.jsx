import React from 'react';

const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-3xl font-bold text-blue-600 text-center mb-8 pb-5 relative">
      {children}
      <span className="absolute  left-1/2 bottom-0 transform -translate-x-1/2 -translate-y-1 w-12 h-1 bg-blue-600"></span>
    </h2>
  );
};

export default SectionTitle;