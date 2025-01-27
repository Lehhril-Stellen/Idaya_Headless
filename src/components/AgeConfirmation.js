import React, { useState, useEffect, useRef } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const AgeConfirmation = () => {
  const [cookies, setCookie] = useCookies(['ageConfirmation']);
  const [underAge, setUnderAge] = useState(false);
  const navigate = useNavigate();
  const topSectionRef = useRef(null);

  useEffect(() => {
    const handleOverflowClass = () => {
      if (cookies.ageConfirmation) {
        document.documentElement.classList.add('overflowhide');
      } else {
        document.documentElement.classList.remove('overflowhide');
      }
    };

    handleOverflowClass(); // Initial call

    return () => {
      // Cleanup logic when the component unmounts
      document.documentElement.classList.remove('overflowhide');
    };
  }, [cookies]);

  const handleConfirmAge = () => {
    setCookie('ageConfirmation', true, { path: '/' });
    // Scroll to the top section
    topSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleUnderAge = () => {
    setUnderAge(true);
  };

  const handleCloseUnderAge = () => {
    setUnderAge(false);
  };

  return (
    <>
      {cookies.ageConfirmation ? (
        <>
        </>
      ) : underAge ? (
        <div className="home-content content_aged">
          <div className="content-inside white underage-content">
            <h2>SORRY, YOU MUST BE 21 OR OLDER <br/> TO VIEW THIS WEBSITE.</h2>
            <h6>*Drinking age varies for different states in India.</h6>
            <button className="underage-close-btn" onClick={handleCloseUnderAge}>&#8592; Go Back</button>
          </div>
        </div>
      ) : (
        <div className="home-content content_aged">
          <div className="content-inside white" ref={topSectionRef}>
            <h1 className="white-text h3">MOST THINGS GET FINER WITH AGE.</h1>
            <p className="white-text">
              By clicking ‘I’m of age’, you confirm that you are of legal drinking age in your country.
            </p>

            <ul className="selectone list-none">
              <li>
                <a className="age_btn" onClick={handleConfirmAge}>I’M OF AGE</a>
              </li>
              <li>
                <a className="age_btn" onClick={handleUnderAge}>NOT YET</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default AgeConfirmation;