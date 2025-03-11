import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
/*************  ✨ Codeium Command ⭐  *************/
/**
 * The root component of the application, which renders a centered, full-height
 * page with a blue title.
 *
 * @returns {JSX.Element} The rendered component.
 */
/******  89530aa1-1676-407a-a47c-37a93f5a09a4  *******/import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Skills from './components/Skills';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="font-sans text-gray-800 bg-blue-50">
      <Navbar />
      <Hero />
      <Experience />
      <Education />
      <Certificates />
      <Skills />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;