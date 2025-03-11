import React from 'react';
import SectionTitle from './SectionTitle';
import CertificateCard from './CertificateCard';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "ACCA Affiliate Certificate",
      description: "Awarded October 2024 by the Association of Chartered Certified Accountants",
      image: "/placeholder-certificate.jpg",
      link: "#"
    },
    {
      id: 2,
      title: "Advanced Audit and Assurance",
      description: "ACCA Professional Level Certification",
      image: "/placeholder-certificate.jpg",
      link: "#"
    },
    {
      id: 3,
      title: "Strategic Business Leader",
      description: "ACCA Professional Level Certification",
      image: "/placeholder-certificate.jpg",
      link: "#"
    }
  ];

  return (
    <section id="certificates" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle>Certificates</SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map(cert => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;