import React from "react";
import Slider from "react-slick";
import SectionTitle from './SectionTitle';
import { FaLinkedin } from "react-icons/fa";
import Eyphoto from "../images/Eyphotos3.jpg"
const carouselData = [
  {
    id: 1,
    src: "https://media.licdn.com/dms/image/v2/D5622AQGUCMMTWZ6zgA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1728359599015?e=1746057600&v=beta&t=Hbj0KTA5eq__eY3VyfBiRPi7DRvUVN6qbX1NJY3lx80",
    alt: "First slide",
    title: "ACCA Skills Fiesta 2024",
    description: "Grateful for the ACCA Skills Fiesta 2024 experience in Bangalore! Special thanks to Kesav Muralidharan, Sai Priya Amar, Asha M,Vasundhara Chakravarthy, Barsha Sharma, Naina V G, Ashish Shetty, Nikhil Patodi for sharing expert advice. This event not only enhanced my skills but also provided a fantastic platform to network and build valuable connections. ",
  },
  {
    id: 2,
    src: "https://media.licdn.com/dms/image/v2/D5622AQF46aVlPWHkZw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1728359599478?e=1746057600&v=beta&t=64rg4rRF7itLouoH-Q4vNNdHoruYQS9-0Kw41bisUIA",
    alt: "Second slide",
    title: "ACCA Skills Fiesta 2024",
    description: "Grateful for the ACCA Skills Fiesta 2024 experience in Bangalore! Special thanks to Kesav Muralidharan, Sai Priya Amar, Asha M,Vasundhara Chakravarthy, Barsha Sharma, Naina V G, Ashish Shetty, Nikhil Patodi for sharing expert advice. This event not only enhanced my skills but also provided a fantastic platform to network and build valuable connections. ",
  },
  {
    id: 3,
    src: Eyphoto,
    alt: "Third slide",
    title: "EY Experieces",
    description: "P.S. A nostalgic glance at my EY GDS Kochi office days. Grateful for the experience and connections made.",
  },
  {
    id: 4,
    src: "https://media.licdn.com/dms/image/v2/D5622AQFMx28dj5Vpvw/feedshare-shrink_1280/feedshare-shrink_1280/0/1703150897957?e=1746057600&v=beta&t=r77DG-8hI0l5ZyVhGvxpXiaSABq3ezZ7BJJYkeD-wEA",
    alt: "Fourth slide",
    title: "EY",
    description: "I'm incredibly excited about the exceptional EY experience that lies ahead.",
  },
  {
    id: 5,
    src: "https://media.licdn.com/dms/image/v2/D4E22AQEpEVlYQX7JUQ/feedshare-shrink_2048_1536/B4EZPV3eXVHsAs-/0/1734459937268?e=1746057600&v=beta&t=eS-aVA6_FflJzG48F_r-c8FSHL3r2CwH8zFcumtkXB0",
    alt: "Fifith slide",
    title: "𝐀𝐂𝐂𝐀 𝐈𝐧𝐝𝐢𝐚 𝐄𝐦𝐩𝐥𝐨𝐲𝐞𝐫 𝐂𝐨𝐧𝐟𝐞𝐫𝐞𝐧𝐜𝐞",
    description: "The most rewarding part of this experience was the opportunity to meet so many talented professionals. It was inspiring—the energy in the room, the knowledge shared, and the collaborative spirit really highlighted the strength of the ACCA community.",
  },
  {
    id: 6,
    src: "https://media.licdn.com/dms/image/v2/D4E22AQEzojM-WZ_HMw/feedshare-shrink_2048_1536/B4EZPV3eUtHkAs-/0/1734459923106?e=1746057600&v=beta&t=IsXYzozkNTq59mlmZ81bQb76ecxmrIG5Z892v1eT8To",
    alt: "Sixth slide",
    title: "𝐀𝐂𝐂𝐀 𝐈𝐧𝐝𝐢𝐚 𝐄𝐦𝐩𝐥𝐨𝐲𝐞𝐫 𝐂𝐨𝐧𝐟𝐞𝐫𝐞𝐧𝐜𝐞",
    description: "The most rewarding part of this experience was the opportunity to meet so many talented professionals. It was inspiring—the energy in the room, the knowledge shared, and the collaborative spirit really highlighted the strength of the ACCA community.",
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
    <div className="bg-custom-grid bg-grid-size bg-[#FFF6E9]"><SectionTitle>Photo Gallery</SectionTitle>
    <Slider {...settings}>
              
      {carouselData.map((item) => (
        <div key={item.id} className="flex-col  items-center  relative">
            <div className="absolute inset-0 bg-gradient-to-t from-teal-500/30 to-transparent"></div>
          <img src={item.src} alt={item.alt} className="w-4/5 h-[400px] object-cover mx-auto rounded-2xl" />
          
          <div className="absolute bg-black/30 backdrop-blur-sm p-4  rounded-lg bottom-0 left-1/2 transform -translate-x-1/2  text-center items-centerw-full px-4 cursor-pointer  grid place-items-center">
            <h3 className="text-white text-3xl font-bold mb-2">{item.title}</h3>
            <p className="text-white text-sm">{item.description}</p>
             <FaLinkedin size={30} className='text-blue-600 hover:text-blue-900 text-center items-center cursor-pointer'/>
          </div>
          
        </div>
    
      ))}
    </Slider>
    </div>
  );
}
