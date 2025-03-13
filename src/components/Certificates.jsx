import React from 'react';
import SectionTitle from './SectionTitle';
import CertificateCard from './CertificateCard';
import CertificateACCA from '../images/CertificateACCA.png';
import DegreeCertificate from '../images/CertificateACCA.png';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "ACCA Affiliate Certificate",
      description: (
        <>
        <b>ACCA</b> Strategic Professional certified, passing <b>SBL, SBR, AFM,</b> and <b>AAA</b> in October <b>2024</b>, showcasing expertise in finance and business strategy.
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
          Earned a <b>Bachelor of Commerce (BCom)</b> in Accounting and Finance from the <b>University of Madras (2019 - 2022)</b>,
          graduating with a <b>7.6 GPA</b>, First Class with Distinction. His academic excellence reflects a strong foundation in financial management and accounting principles.
        </>
      ),
      image: 'https://d1aeya7jd2fyco.cloudfront.net/upload_file/madras-university-online.webp',
      link: "#"
    }
  ];

  return (
    <section id="certificates" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Certificates</SectionTitle>
        
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="group flex flex-col justify-start items-start gap-2 w-96 h-56 duration-500 relative rounded-lg p-4 bg-blue-600 hover:-translate-y-2 hover:shadow-xl shadow-blue-800"
            >
              <img
                src={certificate.image}
                alt={certificate.title}
                className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-10 -right-10 w-1/2 h-1/2 rounded-lg cursor-pointer"
              />

              <div>
                <h2 className="text-2xl font-bold mb-2 text-gray-100">{certificate.title}</h2>
                <p className="text-gray-200 line-clamp-3">{certificate.description}</p>
              </div>
              <button className="hover:bg-blue-800 bg-blue-700 text-gray-100 mt-6 rounded p-2 px-6">
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
