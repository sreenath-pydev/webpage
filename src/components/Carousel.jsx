import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import SectionTitle from './SectionTitle';
import { FaLinkedin } from "react-icons/fa";
import photo1 from "../images/photo1.png"
import photo2 from "../images/photo2.png"
import photo3 from "../images/photo3.png"
import photo4 from "../images/photo4.png"
import photo5 from "../images/photo5.png"
import photo6 from "../images/photo6.png"

const carouselData = [
  {
    id: 1,
    src: photo1,
    alt: "First slide",
    title: "ACCA Skills Fiesta 2024",
    description: "Thankful for the ACCA Skills Fiesta 2024 in Bangalore, which enhanced my skills and networking. Special thanks to Kesav Muralidharan and the team for their expert advice ",
    link:"https://www.linkedin.com/posts/sreeragunniacca_grateful-for-the-acca-skills-fiesta-2024-activity-7249265593797730304-PIK7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0rl6kBpeRZSToz7pAL1wRoMMvFKHLNPt0"
  },
  {
    id: 2,
    src: photo2,
    alt: "Second slide",
    title: "ACCA Skills Fiesta 2024",
    description: "Thankful for the ACCA Skills Fiesta 2024 in Bangalore, which enhanced my skills and networking. Special thanks to Kesav Muralidharan and the team for their expert advice ",
    link:"https://www.linkedin.com/posts/sreeragunniacca_grateful-for-the-acca-skills-fiesta-2024-activity-7249265593797730304-PIK7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0rl6kBpeRZSToz7pAL1wRoMMvFKHLNPt0"
  },
  {
    id: 3,
    src: photo3,
    alt: "Third slide",
    title: "EY Experieces",
    description: "P.S. A nostalgic glance at my EY GDS Kochi office days. Grateful for the experience and connections made.",
    link:"https://www.linkedin.com/posts/sreeragunniacca_im-sure-many-of-you-can-relate-to-saying-activity-7252227003179794432-Ckrw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD0rl6kBpeRZSToz7pAL1wRoMMvFKHLNPt0"
  },
  {
    id: 4,
    src: photo4,
    alt: "Fourth slide",
    title: "EY",
    description: "I'm incredibly excited about the exceptional EY experience that lies ahead.",
    link:"https://www.linkedin.com/posts/sreeragunniacca_ey-gds-eygds-activity-7143532629609308161-l1pi?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD0rl6kBpeRZSToz7pAL1wRoMMvFKHLNPt0"
  },
  {
    id: 5,
    src: photo5,
    alt: "Fifith slide",
    title: "𝐀𝐂𝐂𝐀 𝐈𝐧𝐝𝐢𝐚 𝐄𝐦𝐩𝐥𝐨𝐲𝐞𝐫 𝐂𝐨𝐧𝐟𝐞𝐫𝐞𝐧𝐜𝐞",
    description: "Meeting talented professionals and experiencing the ACCA community's energy and collaboration was truly inspiring.",
    link:"https://www.linkedin.com/posts/sreeragunniacca_%F0%9D%90%96%F0%9D%90%A1%F0%9D%90%9E%F0%9D%90%A7-%F0%9D%90%88-%F0%9D%90%AB%F0%9D%90%9E%F0%9D%90%A0%F0%9D%90%A2%F0%9D%90%AC%F0%9D%90%AD%F0%9D%90%9E%F0%9D%90%AB%F0%9D%90%9E%F0%9D%90%9D-%F0%9D%90%9F%F0%9D%90%A8%F0%9D%90%AB-%F0%9D%90%AD%F0%9D%90%A1%F0%9D%90%9E-activity-7274852260688326657-07Ww?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD0rl6kBpeRZSToz7pAL1wRoMMvFKHLNPt0"
  },
  {
    id: 6,
    src: photo6,
    alt: "Sixth slide",
    title: "𝐀𝐂𝐂𝐀 𝐈𝐧𝐝𝐢𝐚 𝐄𝐦𝐩𝐥𝐨𝐲𝐞𝐫 𝐂𝐨𝐧𝐟𝐞𝐫𝐞𝐧𝐜𝐞",
    description: "Meeting talented professionals and experiencing the ACCA community's energy and collaboration was truly inspiring.",
    link:"https://www.linkedin.com/posts/sreeragunniacca_%F0%9D%90%96%F0%9D%90%A1%F0%9D%90%9E%F0%9D%90%A7-%F0%9D%90%88-%F0%9D%90%AB%F0%9D%90%9E%F0%9D%90%A0%F0%9D%90%A2%F0%9D%90%AC%F0%9D%90%AD%F0%9D%90%9E%F0%9D%90%AB%F0%9D%90%9E%F0%9D%90%9D-%F0%9D%90%9F%F0%9D%90%A8%F0%9D%90%AB-%F0%9D%90%AD%F0%9D%90%A1%F0%9D%90%9E-activity-7274852260688326657-07Ww?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD0rl6kBpeRZSToz7pAL1wRoMMvFKHLNPt0"
  },
];

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,

  };

  return (
    <motion.div className="bg-custom-grid bg-grid-size bg-[#FFF6E9]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}   
          transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <SectionTitle>Photo Gallery</SectionTitle>
    <Slider {...settings}>
              
      {carouselData.map((item) => (
        <motion.div key={item.id} className="flex-col  items-center  relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}   
          transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <div className="absolute  inset-0 bg-gradient-to-t from-teal-500/30 to-transparent"></div>
          <img src={item.src} alt={item.alt} className="w-full sm:w-4/5 sm:h-[400px] h-[250px] object-cover mx-auto rounded-2xl" />
          
          <div className="absolute  bg-black/30 backdrop-blur-sm p-4  rounded-lg sm:bottom-5 bottom-1 left-1/2 transform -translate-x-1/2  text-center items-center w-[90%] sm:w-[70%] px-4 cursor-pointer  grid place-items-center">
            <h3 className="text-white sm:text-3xl sm:font-bold font-medium mb-2">{item.title}</h3>
            <p className="text-white text-sm hidden sm:block">{item.description}</p>
            <a href={item.link} target="_blank">
             <FaLinkedin size={30} className='text-blue-600 hover:text-blue-900 text-center items-center cursor-pointer'/></a>
          </div>
          
        </motion.div>
    
      ))}
    </Slider>
    </motion.div>
  );
}
