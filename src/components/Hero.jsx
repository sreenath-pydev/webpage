import React from 'react';
import SocialIcon from './SocialIcon';
import suProfile from '../images/su-profile.png';

const Hero = () => {

  return (
    <section id="about" className="pt-24 pb-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <img 
          src={suProfile}
          alt="Sreerag Unni" 
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-500 object-cover"
        />
        <h1 className="text-4xl font-bold text-blue-600 mb-2">Sreerag Unni</h1>
        <h2 className="text-xl text-blue-800 font-normal mb-4">ACCA Affiliate | Financial Reporting & Audit Specialist</h2>
        
        <div className="flex justify-center space-x-4 mb-6">
          <SocialIcon href="mailto:SreeraguACCA@gmail.com" icon="✉️" label="Email" />
          <SocialIcon href="https://linkedin.com/in/SreeragUnniACCA/" icon="in" label="LinkedIn" />
          <SocialIcon href="#" icon="📷" label="Instagram" />
          <SocialIcon href="tel:+917356977963" icon="📞" label="Phone" />
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center mb-6 space-y-2 md:space-y-0 md:space-x-6">
          <div className="flex items-center">
            <span className="mr-2">📞</span>
            <span>+91 7356977963</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">✉️</span>
            <span>SreeraguACCA@gmail.com</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">💼</span>
            <span>linkedin.com/in/SreeragUnniACCA/</span>
          </div>
        </div>
        
        <p className="text-gray-700">
          ACCA Affiliate with a BCom degree and professional experience as an Assurance Consultant at Ernst & Young. 
          Strong background in financial reporting, audit, risk assessment, and compliance. Proficient in Excel and 
          Microsoft Office Suite, with experience in audit tools and technology. Seeking to apply my skills in 
          financial analysis and auditing in a dynamic professional environment.
        </p>
      </div>
    </section>
  );
};

export default Hero;