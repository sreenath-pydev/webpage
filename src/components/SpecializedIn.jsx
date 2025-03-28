import React from "react";
import SectionTitle from "./SectionTitle";
import "../App.css";
import { motion } from "framer-motion";

const SpecializedIn = () => {
  return (
    <div className="flex pb-10 pt-10 flex-col items-center justify-center sm:min-h-screen bg-amber-50 p-4">
      <div className="w-full text-center mb-8">
        <SectionTitle>Specialized In</SectionTitle>
      </div>

      <div className="relative w-full max-w-4xl">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-rgbGreen transform -translate-x-1/2"></div>

        {/* Timeline Dots */}
        {[10, 35, 61, 88].map((top, index) => (
          <div
            key={index}
            className="absolute left-1/2"
            style={{ top: `${top}%` }}
          >
            <div className="w-4 h-4 bg-rgbGreen transform -translate-x-1/2 rotate-45"></div>
          </div>
        ))}

        {/* First Row */}
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1 mb-28">
            <AnimatedBox title="Advanced Audit and Assurance" direction="left" />
          </div>
          <div className="col-span-1 pt-28">
            <AnimatedBox title="Advanced Financial Management" direction="right" />
          </div>
          <div className="col-span-1 mt-0 mb-8">
            <AnimatedBox title="Strategic Business Reporting" direction="left" />
          </div>
          <div className="col-span-1"></div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1"></div>
          <div className="col-span-1">
            <AnimatedBox title="Strategic Business Leader" direction="right" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Animated Card Component
const AnimatedBox = ({ title, direction }) => {
  return (
    <motion.div
      className="div h-[5em] flex sm:w-[25em] bg-rgbHex m-auto rounded-[1em] relative group py-5 z-0 overflow-hidden sm:justify-center hover:translate-x-2 duration-300 shadow-2xl cursor-pointer"
      initial={{ opacity: 0, x: direction === "left" ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="z-[-1] h-[6em] w-[150%] rounded-[1em] bg-gradient-to-br from-rgbHex via-rgbHex to-rgbGreen absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[420%] duration-500 origin-bottom-right"></div>
      <h1 className="z-20 font-bold font-Poppin text-center text-rgbGray group-hover:text-white delay-150 sm:text-[1.4em]">
        {title}
      </h1>
    </motion.div>
  );
};

export default SpecializedIn;
