import React from 'react';
import { motion } from "framer-motion";
import SectionTitle from './SectionTitle';
import CertificateACCA from '../images/CertificateACCA.png';
import DegreeCertificate from '../images/CertificateACCA.png';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "ACCA Affiliate Certificate",
      description: (
        <>
        <b>ACCA Strategic Professional</b> certified (Oct <b>2024</b>), passed <b>SBL, SBR, AFM, AAA</b>, demonstrating expertise in finance and strategy.
        </>
      ),
      image: CertificateACCA,
      link: "#"
    },
    {
      id: 2,
      title: "Degree Certificate",
      description: (
        <>
        Earned a <b>BCom in Accounting & Finance</b> from <b>University of Madras (2019-2022)</b> with <b>7.6 GPA</b>, First Class with Distinction. </>
      ),
      image: 'https://d1aeya7jd2fyco.cloudfront.net/upload_file/madras-university-online.webp',
      link: "#"
    }
  ];

  return (
    <section id="certificates" className="py-2 bg-custom-grid bg-grid-size bg-[#FFF6E9] ">
      <motion.div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}   
        transition={{ duration: 0.5, ease: 'easeOut' }}
        >
        <SectionTitle>Certificates</SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-8 place-items-center ">
          {certificates.map((certificate) => (
            
  <motion.div key={certificate.id} 
      className="relative group cursor-pointer overflow-hidden duration-500 w-64 h-80 shadow-2xl bg-rgbHex text-gray-50 p-5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}   
      transition={{ duration: 0.5, ease: 'easeOut' }}
      
      >
  <div className="">
    <img
      src={certificate.image}
      alt="img"
      className="group-hover:scale-110 w-full h-60 bg-rgbHex duration-500"
    ></img>
    <div
      className="absolute w-56 left-0 p-5 -bottom-16 duration-500 group-hover:-translate-y-12"
    >
      <div
        className="absolute -z-10 left-0 w-64 h-48 opacity-0 duration-500 group-hover:opacity-50 group-hover:bg-blue-900"
      ></div>
      <span className="text-xl font-bold">{certificate.title}</span>
      <p className="group-hover:opacity-100 w-56 duration-500 opacity-0">
        {certificate.description}
      </p>
    </div>
  </div>
</motion.div>

          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certificates;
