import React from 'react';
import SectionTitle from './SectionTitle';

const Skills = () => {
  return (
    <section id="skills" className="py-6 bg-custom-grid bg-grid-size bg-[#FFF6E9] flex justify-center items-center">
      <div className="sm:px-3 lg:px-2 flex flex-col items-center">
        <SectionTitle>Skills</SectionTitle>

        {/* Centered Card */}
        <div className=" flex justify-center items-center ">
          <div className="card ">
            <b><span>Financial Reporting & Analysis</span></b>
            <b><span>Audit & Assurance</span></b>
            <b><span>Financial Management</span></b>
            <b><span>Microsoft Office Suite</span></b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
