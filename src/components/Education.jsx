import React from 'react';
import SectionTitle from './SectionTitle';

const Education = () => {
  return (
    <section id="education" className="py-16 bg-customBeige">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          

          {/* Left Column - Education Details */}
          <div className="sm:col-span-2 space-y-6 ">
            <div className="bg-rgbHex p-6 rounded-lg shadow-sm hover:-translate-y-2 duration-300 cursor-pointer hover:shadow-xl">
              <h3 className="text-xl font-semibold text-rgbGreen">ACCA Affiliate (No Paper Exemptions)</h3>
              <span className="text-rgbGreen font-medium">Oct 2024</span>
              <p className="mt-2">Specialized in:</p>
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                <li>Strategic Business Reporting</li>
                <li>Advanced Audit and Assurance</li>
                <li>Strategic Business Leader</li>
                <li>Advanced Financial Management</li>
              </ul>
            </div>

            <div className="bg-rgbHex p-6 rounded-lg shadow-sm hover:-translate-y-2 duration-300 cursor-pointer hover:shadow-xl">
              <h3 className="text-xl font-semibold text-rgbGreen">BCom, University of Madras</h3>
              <span className="text-rgbGreen font-medium">2021</span>
              <p className="text-gray-700 mt-2">
                Achieved First Class with Distinction, acquiring extensive knowledge in commerce, 
                encompassing financial accounting, business law, and economics.
              </p>
            </div>

            <div className="bg-rgbHex p-6 rounded-lg shadow-sm hover:-translate-y-2 duration-300 cursor-pointer hover:shadow-xl">
              <h3 className="text-xl font-semibold text-rgbGreen">Class 12 - Commerce, Kendriya Vidyalaya</h3>
              <span className="text-rgbGreen font-medium">2018</span>
              <p className="text-gray-700 mt-2">
                Completed a curriculum focused on commerce and information practices, 
                preparing for advanced studies in finance & accounting.
              </p>
            </div>
          </div>

          {/* Right Column - Section Title */}
          <div className=" sm:col-span-1 flex justify-center sm:items-start sm:justify-end order-first sm:order-last">
            <SectionTitle>Education</SectionTitle>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
