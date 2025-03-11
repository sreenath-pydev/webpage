import React from 'react';

const CertificateCard = ({ certificate }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <img 
        src={certificate.image} 
        alt={certificate.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">{certificate.title}</h3>
        <p className="text-gray-700 mb-4">{certificate.description}</p>
        <a 
          href={certificate.link} 
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800 transition-colors"
        >
          View Certificate
        </a>
      </div>
    </div>
  );
};

export default CertificateCard;