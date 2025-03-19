import React from 'react';

const SocialIcon = ({ href, icon, label }) => {
  return (
    <a 
      href={href} 
      className="w-10 h-10 rounded-full bg-rgbGreen text-white flex items-center justify-center hover:bg-rgbGreen transform hover:-translate-y-1 transition-all duration-300"
      aria-label={label}
      title={label}
    >
      {icon}
    </a>
  );
};

export default SocialIcon;