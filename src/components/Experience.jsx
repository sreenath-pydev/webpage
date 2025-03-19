import React from 'react';
import SectionTitle from './SectionTitle';

import { Fieldset } from 'primereact/fieldset';
        
const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-custom-grid bg-grid-size bg-[#FFF6E9]">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Two-column layout */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Left Column - Heading */}
      <div className="md:col-span-1 flex items-center">
        <SectionTitle>Professional Experience</SectionTitle>
      </div>

      {/* Right Column - Experience Details */}
      <div className="md:col-span-2">
        {/* <div className="bg-white p-6 rounded-lg shadow-2xl">
          <div className="flex flex-col sm:flex-row justify-between mb-4">
            <h3 className="text-xl font-semibold text-rgbGreen">Assurance Consultant</h3>
            <span className="text-rgbGreen font-medium">Dec 2023 – Feb 2024</span>
          </div>
          <h4 className="text-lg font-medium mb-4">Ernst & Young GDS, Kochi</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Led comprehensive audits for a diverse portfolio of listed entities in the US, ensuring compliance with regulatory frameworks.</li>
            <li>Validated the accuracy and completeness of financial data through detailed testing, analytical review, and cross-referencing with source documents.</li>
            <li>Implemented and reviewed cut-off procedures to ensure accurate recognition of transactions, contributing to precise period-end financial reporting and reducing the risk of material misstatements.</li>
          </ul>
        </div> */}
        <div
              
              className="group flex flex-col justify-start items-start gap-2 w-full h-72 duration-500 relative rounded-lg p-4 bg-rgbHex hover:-translate-y-2 hover:shadow-xl shadow-rgbHex cursor-pointer"
            >
              <img
                src="https://analyticsindiamag.com/wp-content/uploads/2025/01/Analytics-India-Magazine-banners-2025-01-10T180353.465.jpg"
                alt="{certificate.title}"
                className=" sm:absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg cursor-pointer"
              />

              <div>
                <h2 className="text-2xl font-bold mb-2 text-rgbGray">Assurance Consultant</h2>
                <p className="text-rgbGray line-clamp-3 h-32"> From December 2023 to February 2024, I led audits for listed US entities, ensuring strict regulatory compliance throughout the process. My responsibilities included conducting thorough financial data validation through both testing and analytical review, as well as reviewing cut-off procedures to guarantee accurate period-end reporting.</p>
              </div>
              {/* <button className="hover:shadow-md bg-rgbGreen text-gray-100 mt-6 rounded p-2 px-6">
                View
              </button> */}
            </div>
      </div>

    </div>
  </div>
</section>

  );
};

export default Experience;
