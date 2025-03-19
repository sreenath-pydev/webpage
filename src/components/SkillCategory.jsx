import React from 'react';

const SkillCategory = ({ title, skills }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-rgbGreen mb-4 text-center">{title}</h3>
      <ul className="space-y-3">
        {skills.map(skill => (
          <li key={skill.id} className="pl-5 relative">
            <span className="absolute  left-0 text-rgbGreen">•</span>
            <strong>{skill.title}</strong> - {skill.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCategory;