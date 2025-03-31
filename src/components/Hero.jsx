import React from 'react';
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";

import suProfile from '../images/su-profile.png';
import greenRound from '../images/greenround.png';
import blackLine from '../images/blackline.png';
import yellowDesign from '../images/yellowdesign.png'
import Cv from "../files/Sreerag_ACCA_Audit.pdf"

const Hero = () => {

  return (
   <section id="about" className="pt-20 sm:pt-30 pb-0 flex bg-customBeige">
    <motion.div className="max-w-5xl  mx-auto px-4  sm:px-6 lg:px-8 flex flex-col md:flex-row items-center md:items-start text-center md:text-left" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}>
    
    {/* Yellow design */}
    <motion.div className='absolute sm:w-40 w-28 h-28 sm:top-12 top-15 right-0 sm:h-40 sm:left-1/2'
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <img src={yellowDesign} alt='yellowDesign'/>
    </motion.div>
    
    <div className='flex '>
      {/* Green design */}
      <motion.div className="md:w-1/4 flex top-1 -left-1/4 grow"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}>
        <img src={greenRound} alt="greenRound" className="w-custom-450 h-custom-450  rounded-full object-cover"/>
      </motion.div>

      {/* Profile Image */}
      <motion.div className=" sm:w-custom-450 sm:h-custom-450 top-32 sm:pl-12 md:pl-2 md:pt-4 md:pr-0 sm:pr-20 absolute justify-center"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <img src={suProfile} alt="Sreerag Unni" className="w-full h-full sm:w-full sm:h-full rounded-full object-cover"/>
      </motion.div>
    </div>
    
    <div className="md:w-3/3 mt-6 sm:pl-24 pt-32 sm:pt-15   md:mt-0 md:ml-10">

      {/* Right Side - Text Content */}
      <motion.h1 className="text-5xl md:text-6xl font-bold pb-5 text-rgbGreen mb-2"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}>
        Hello, I’am<br></br>Sreerag Unni <br></br>a ACCA Affiliate
      </motion.h1>

      {/* Right Side - CV Download button */}
      <motion.button className='w-52 bg-rgbHex text-center rounded-lg mb-5 sm:flex items-center justify-center gap-2 px-4 py-2 hover:transition duration-400 hover:scale-110 hover:text-rgbGreen' initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}>
        <a href={Cv} className='font-bold text-customBeige hover:text-rgbGreen' target="_blank" >Download CV</a>
        <FaFileDownload />
      </motion.button>

      {/* Right Side - Social Icons */}
      <motion.div 
            className="flex justify-center md:justify-start space-x-4 mb-6"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            {[
              { href: 'https://www.linkedin.com/in/sreeragunniacca/', icon: <FaLinkedin size={40} /> },
              { href: 'https://www.instagram.com/sreerag_u?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', icon: <FaInstagramSquare size={40} /> },
              { href: 'https://mail.google.com/mail/?view=cm&fs=1&to=sreeraguacca@gmail.com', icon: <IoMdMail size={40} /> },
              { href: 'https://github.com/SreeragUnniACCA', icon: <FaGithub size={40} /> }
            ].map(({ href, icon }, index) => (
              <a 
                key={index} 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="border-4 border-rgbGreen hover:border-Green text-rgbGreen hover:rgbHex bg-transparent 
             transition-all duration-300 ease-in-out 
             rounded-lg 
             hover:scale-130 hover:-translate-y-1.5 
             hover:bg-rgbHex hover:rgbHext 
             hover:shadow-[0_0_25px_#FAC670] inline-block"
              >
                {icon}
              </a>
            ))}
      </motion.div>
       
      {/* Black line */}
      <motion.div className="md:w-1/4 hidden md:block sm:h-96 bottom-0 right-0 sm:pl-12 md:pl-2 md:pt-4 md:pr-0 sm:pr-20 absolute justify-center"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}>
          <img 
            src={blackLine}
            alt="blackLine" 
            className="w-full h-full sm:w-full sm:h-full rounded-full object-cover"
          />
      </motion.div>  
    </div>
    </motion.div>
  </section>

  );
};

export default Hero;