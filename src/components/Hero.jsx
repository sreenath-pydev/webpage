import React from 'react';
import SocialIcon from './SocialIcon';
import suProfile from '../images/su-profile.png';
import greenRound from '../images/greenround.png';
import blackLine from '../images/blackline.png';
import yellowDesign from '../images/yellowdesign.png'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
const Hero = () => {

  return (
   <section id="about" className="pt-20 sm:pt-30 pb-0 flex bg-customBeige">
  <div className="max-w-5xl  mx-auto px-4  sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
    
    {/* Left Side - Profile Image */}
    <div className='absolute sm:w-40 w-28 h-28 sm:top-12 top-15 right-0 sm:h-40 sm:left-1/2 '>
      <img 
      src={yellowDesign}
      alt='yellowDesign'
      className=''/>
    </div>

    <div className='flex '>
    <div className="md:w-1/4 flex top-1  -left-1/4 grow ">
      <img 
        src={greenRound}
        alt="greenRound" 
        className="w-custom-450 h-custom-450  rounded-full object-cover"
        
      />
    </div>

    <div className=" sm:w-custom-450 sm:h-custom-450 top-32 sm:pl-12 md:pl-2 md:pt-4 md:pr-0 sm:pr-20 absolute justify-center">
      <img 
        src={suProfile}
        alt="Sreerag Unni" 
        className="w-full h-full sm:w-full sm:h-full rounded-full object-cover"
      />
    </div>
    </div>
    

    {/* Right Side - Text Content */}
    <div className="md:w-3/3 mt-6 sm:pl-24 pt-32 sm:pt-15   md:mt-0 md:ml-10">
      <h1 className="text-5xl md:text-6xl font-bold pb-5 text-rgbGreen mb-2">
          Hello, I’m<br></br>
          Sreerag Unni <br></br>
          a ACCA Affiliate
      </h1>
    <button className='bg-rgbGreen w-32 rounded-lg mb-5 font-bold text-customBeige' >Connect</button>
      {/* Social Icons */}
      <div className="flex justify-center md:justify-start space-x-4 mb-6">
      <FaLinkedin size={40} className='text-gray-800 hover:text-rgbGreen cursor-pointer transition duration-300 hover:scale-110'/>
      <FaInstagramSquare size={40} className='text-gray-800 hover:text-rgbGreen cursor-pointer transition duration-300 hover:scale-110' />
      <IoMdMail size={40} className='text-gray-800 hover:text-rgbGreen cursor-pointer transition duration-300 hover:scale-110'/>
      <FaGithub size={40} className='text-gray-800 hover:text-rgbGreen cursor-pointer transition duration-300 hover:scale-110' />
      </div>
       
     {/* Black line */}
      <div className="md:w-1/4 hidden md:block sm:h-96 bottom-0 right-0 sm:pl-12 md:pl-2 md:pt-4 md:pr-0 sm:pr-20 absolute justify-center">
      <img 
        src={blackLine}
        alt="blackLine" 
        className="w-full h-full sm:w-full sm:h-full rounded-full object-cover"
      />
    </div>

      {/* Contact Info */}
      {/* <div className="flex flex-col md:flex-row md:items-center mb-6 space-y-2 md:space-y-0 md:space-x-6">
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
      </div> */}

      {/* Bio */}
      {/* <p className="text-gray-700">
        ACCA Affiliate with a BCom degree and professional experience as an Assurance Consultant at Ernst & Young. 
        Strong background in financial reporting, audit, risk assessment, and compliance. Proficient in Excel and 
        Microsoft Office Suite, with experience in audit tools and technology. Seeking to apply my skills in 
        financial analysis and auditing in a dynamic professional environment.
      </p> */}
    </div>
    
  </div>
</section>

  );
};

export default Hero;