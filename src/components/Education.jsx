import React from 'react';
import SectionTitle from './SectionTitle';
import { motion } from "framer-motion";
const Education = () => {
  return (
    <section id="education" className="py-16 bg-customBeige">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          {/* Left Column - Education Details */}
          <div className="sm:col-span-2 space-y-6">
            {[ 
              {
                title: "ACCA Affiliate (No Paper Exemptions)",
                date: "Oct 2024",
                description: "Specialized in:",
                subjects: [
                  "Strategic Business Reporting",
                  "Advanced Audit and Assurance",
                  "Strategic Business Leader",
                  "Advanced Financial Management"
                ]
              },
              {
                title: "BCom, University of Madras",
                date: "2021",
                description: "Achieved First Class with Distinction, acquiring extensive knowledge in commerce, encompassing financial accounting, business law, and economics."
              },
              {
                title: "Class 12 - Commerce, Kendriya Vidyalaya",
                date: "2018",
                description: "Completed a curriculum focused on commerce and information practices, preparing for advanced studies in finance & accounting."
              }
            ].map((edu, index) => (
              <motion.div key={index} className="bg-rgbHex p-6 rounded-lg shadow-sm hover:-translate-y-2 duration-300 cursor-pointer hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
                <h3 className="text-xl font-semibold text-rgbGreen">{edu.title}</h3>
                <span className="text-rgbGreen font-medium">{edu.date}</span>
                {edu.description && <p className="mt-2 text-gray-700">{edu.description}</p>}
                {edu.subjects && (
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {edu.subjects.map((subject, i) => (
                      <li key={i}>{subject}</li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* Right Column - Section Title */}
          <motion.div className="sm:col-span-1 flex justify-center sm:items-start sm:justify-end order-first sm:order-last"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true }}
            >
            <SectionTitle>Education</SectionTitle>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
