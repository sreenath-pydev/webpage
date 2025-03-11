import React from 'react';
import SocialIcon from './SocialIcon';

const Footer = () => {
  return (
    <footer id="contact" className="bg-blue-800 text-white py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Contact Me</h2>
        <p className="mb-6">Feel free to reach out for opportunities or collaborations</p>
        
        <div className="flex justify-center space-x-4 mb-6">
          <SocialIcon href="mailto:SreeraguACCA@gmail.com" icon="✉️" label="Email" />
          <SocialIcon href="https://linkedin.com/in/SreeragUnniACCA/" icon="in" label="LinkedIn" />
          <SocialIcon href="#" icon="📷" label="Instagram" />
          <SocialIcon href="tel:+917356977963" icon="📞" label="Phone" />
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center mb-8 space-y-2 md:space-y-0 md:space-x-6">
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
        
        <p className="text-sm opacity-80">© 2025 Sreerag Unni. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;