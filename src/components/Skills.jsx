import React from 'react';
import SectionTitle from './SectionTitle';
import SkillCategory from './SkillCategory';

const Skills = () => {
  const technicalSkills = [
    { id: 1, title: "Financial Reporting & Analysis", description: "Proficient in IFRS standards and preparing consolidated statements." },
    { id: 2, title: "Audit & Assurance", description: "Experienced in external audits, risk assessments, and compliance." },
    { id: 3, title: "Financial Management", description: "Expertise in capital structure, working capital, and risk management." },
    { id: 4, title: "Microsoft Office Suite", description: "Microsoft Excel, Word, PowerPoint, Outlook." }
  ];

  const otherSkills = [
    { id: 1, title: "Communication", description: "Clear, concise reporting to stakeholders." },
    { id: 2, title: "Problem-Solving", description: "Strong analytical and critical thinking." },
    { id: 3, title: "Attention to Detail", description: "High accuracy in financial data handling." },
    { id: 4, title: "Time Management", description: "Efficient in meeting tight deadlines." },
    { id: 5, title: "Teamwork", description: "Collaborative and able to lead small teams." },
    { id: 6, title: "Adaptability", description: "Quick learner with a focus on continuous improvement." }
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Skills & Expertise</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SkillCategory title="Technical Skills" skills={technicalSkills} />
          <SkillCategory title="Other Skills" skills={otherSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;