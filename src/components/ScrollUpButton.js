import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button aria-label="scroll up"
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >


      <svg width="41" height="72" viewBox="0 0 41 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.3722 50.2776L30.1943 70.5533C30.624 71.4391 31.5186 72.0003 32.5008 72.0003H40.3322C39.6131 70.9743 39.043 69.9921 38.473 68.5977L20.3722 31.2209C20.2845 31.0455 20.0389 31.0455 19.9512 31.2209L1.85919 68.5977C1.28916 69.9921 0.727891 70.9655 0 72.0003H7.83141C8.81362 72.0003 9.70814 71.4391 10.1379 70.5533L19.96 50.2776C20.0477 50.1022 20.2933 50.1022 20.381 50.2776H20.3722Z" fill="#7E573E" />
        <path d="M15.1797 20.644V20.0389C17.6966 20.0389 17.9772 19.6443 17.9772 17.522V3.12204C17.9772 0.999754 17.7054 0.605114 15.1797 0.605114V0H25.1421V0.605114C22.6252 0.605114 22.3446 0.999754 22.3446 3.12204V17.5132C22.3446 19.6355 22.6165 20.0302 25.1421 20.0302V20.6353H15.1797V20.644Z" fill="#7E573E" />
      </svg>


    </button>
  );
};

export default ScrollToTopButton;
