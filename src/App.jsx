import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import SpecializedIn from './components/SpecializedIn';
import Carousel  from './components/Carousel';




function App() {
  
  return (
    <div className="font-sans overflow-hidden text-gray-800 bg-blue-50">
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Certificates />
      <SpecializedIn/>
      <Skills /> 
      <Carousel/>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
