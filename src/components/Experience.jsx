import React from 'react';
import SectionTitle from './SectionTitle';

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Professional Experience</SectionTitle>
        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="flex flex-col sm:flex-row justify-between mb-4">
            <h3 className="text-xl font-semibold text-blue-800">Assurance Consultant</h3>
            <span className="text-blue-600 font-medium">Dec 2023 – Feb 2024</span>
          </div>
          <h4 className="text-lg font-medium mb-4">Ernst & Young GDS, Kochi</h4>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Led comprehensive audits for a diverse portfolio of listed entities in the US, ensuring compliance with regulatory frameworks.</li>
            <li>Validated the accuracy and completeness of financial data through detailed testing, analytical review, and cross-referencing with source documents.</li>
            <li>Implemented and reviewed cut-off procedures to ensure accurate recognition of transactions, contributing to precise period-end financial reporting and reducing the risk of material misstatements.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
