import React, { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-10 h-10 rounded-full bg-rgbGreen text-white flex items-center justify-center shadow-md hover:bg-rgbGreen transition-colors z-10"
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </>
  );
};

export default BackToTop;