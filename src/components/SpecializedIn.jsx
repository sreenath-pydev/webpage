import React from 'react';
import SectionTitle from './SectionTitle';
import '../App.css'
const SpecializedIn = () => {
  return (
    <div className="flex pb-10 pt-10 bottom-0 flex-col items-center justify-center sm:min-h-screen bg-amber-50 p-4">
      <div className="w-full text-center mb-8">
        <SectionTitle>Specialized In</SectionTitle>
      </div>
      <div className="relative w-full max-w-4xl">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-rgbGreen transform -translate-x-1/2"></div>
        <div className="absolute left-1/2 top-[10%] w-4 h-4 bg-rgbGreen transform -translate-x-1/2 rotate-45"></div>
        <div className="absolute left-1/2 top-[35%] w-4 h-4 bg-rgbGreen transform -translate-x-1/2 rotate-45"></div>
        <div className="absolute left-1/2 top-[61%] w-4 h-4 bg-rgbGreen transform -translate-x-1/2 rotate-45"></div>
        <div className="absolute left-1/2 top-[88%] w-4 h-4 bg-rgbGreen transform -translate-x-1/2 rotate-45"></div>
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1 mb-28">
            <div className="div h-[5em] flex sm:w-[25em] bg-rgbHex m-auto rounded-[1em] relative group py-5 z-0 overflow-hidden sm:justify-center hover:translate-x-2 duration-300 shadow-2xl cursor-pointer">
              <div className="z-[-1] h-[6em] w-[150%] rounded-[1em] bg-gradient-to-br from-rgbHex via-rgbHex to-rgbGreen absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[420%] duration-500 origin-bottom-right"></div>
              <h1 className="z-20 font-bold font-Poppin text-center text-rgbGray group-hover:text-white delay-150 sm:text-[1.4em]">Advanced Audit and Assurance</h1>
            </div>
          </div>
          <div className="col-span-1 pt-28">
            <div className="div h-[5em] flex sm:w-[25em] bg-rgbHex m-auto rounded-[1em] relative group py-5 z-0 overflow-hidden sm:justify-center hover:translate-x-2 duration-300 shadow-2xl cursor-pointer">
              <div className="z-[-1] h-[6em] w-[150%] rounded-[1em] bg-gradient-to-br from-rgbHex via-rgbHex to-rgbGreen absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[420%] duration-500 origin-bottom-right"></div>
              <h1 className="z-20 font-bold font-Poppin text-center text-rgbGray  group-hover:text-white delay-150 sm:text-[1.4em]">Advanced Financial Management</h1>
            </div>
          </div>
          <div className="col-span-1 mt-0 mb-8">
            <div className="div h-[5em] flex sm:w-[25em] bg-rgbHex m-auto rounded-[1em] relative group py-5 z-0 overflow-hidden sm:justify-center hover:translate-x-2 duration-300 shadow-2xl cursor-pointer">
              <div className="z-[-1] h-[6em] w-[150%] rounded-[1em] bg-gradient-to-br from-rgbHex via-rgbHex to-rgbGreen absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[420%] duration-500 origin-bottom-right"></div>
              <h1 className="z-20 font-bold font-Poppin text-center text-rgbGray group-hover:text-white delay-150 sm:text-[1.4em]">Strategic Business Reporting</h1>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-1"></div>
          <div className="col-span-1">
            <div className="div h-[5em] flex sm:w-[25em] bg-rgbHex m-auto rounded-[1em] relative group py-5 z-0 overflow-hidden sm:justify-center hover:translate-x-2 duration-300 shadow-2xl cursor-pointer">
              <div className="z-[-1] h-[6em] w-[150%] rounded-[1em] bg-gradient-to-br from-rgbHex via-rgbHex to-rgbGreen absolute bottom-full right-0 group-hover:-rotate-90 group-hover:h-[420%] duration-500 origin-bottom-right"></div>
              <h1 className="z-20 font-bold font-Poppin text-center text-rgbGray group-hover:text-white delay-150 sm:text-[1.4em]">Strategic Business Leader</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecializedIn;