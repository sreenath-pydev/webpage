import React from "react";
import SectionTitle from "./SectionTitle";

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-[#FFF6E9]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Column - Heading */}
          <div className="md:col-span-1 flex items-center">
            <SectionTitle>Professional Experience</SectionTitle>
          </div>

          {/* Right Column - Experience Details */}
          <div className="md:col-span-2">
            <div className="group flex flex-col gap-2 w-full h-72 relative rounded-lg p-4 bg-rgbHex duration-700 hover:-translate-y-2 hover:shadow-xl cursor-pointer">
              {/* Experience Image */}
              <img
                src="https://analyticsindiamag.com/wp-content/uploads/2025/01/Analytics-India-Magazine-banners-2025-01-10T180353.465.jpg"
                alt="Assurance Consultant"
                className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg"
              />

              {/* Experience Details */}
              <div>
                <h2 className="text-2xl font-bold mb-2 text-gray-800">Assurance Consultant</h2>
                <p className="text-gray-600 line-clamp-3 h-32">
                  From December 2023 to February 2024, I led audits for listed US entities, ensuring strict regulatory compliance.
                  My responsibilities included conducting thorough financial data validation and reviewing cut-off procedures 
                  to guarantee accurate period-end reporting.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
