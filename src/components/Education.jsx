import React from 'react';
import SectionTitle from './SectionTitle';

const Education = () => {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Education & Certifications</SectionTitle>
        
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row justify-between mb-4">
            <h3 className="text-xl font-semibold text-blue-800">ACCA Affiliate (With No paper Exemptions)</h3>
            <span className="text-blue-600 font-medium">Oct 2024</span>
          </div>
          <div>
            <p className="mb-2">Specialized in:</p>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Strategic Business Reporting</li>
              <li>Advanced Audit and Assurance</li>
              <li>Strategic Business Leader</li>
              <li>Advanced Financial Management</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row justify-between mb-4">
            <h3 className="text-xl font-semibold text-blue-800">Bachelor of Commerce (BCom), University of Madras</h3>
            <span className="text-blue-600 font-medium">2021</span>
          </div>
          <p className="text-gray-700">
            Achieved First Class with Distinction, acquiring extensive knowledge in commerce, 
            encompassing financial accounting, business law, and economics.
          </p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between mb-4">
            <h3 className="text-xl font-semibold text-blue-800">Class 12 - Commerce, Kendriya Vidyalaya No. 1</h3>
            <span className="text-blue-600 font-medium">2018</span>
          </div>
          <p className="text-gray-700">
            Completed a curriculum focused on commerce and information practices, 
            preparing for advanced studies in finance & accounting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Education;