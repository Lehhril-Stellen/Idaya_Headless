import React, { useState, useEffect } from "react";
import axios from 'axios';

const Imagesplit = ({ card }) => {
  const [isTransition, setIsTransition] = useState(false);
  const [displayContent, setDisplayContent] = useState(false);
  const [cardWithImages, setCardWithImages] = useState([]);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  const handleToggle = () => {
    setIsTransition((prevIsTransition) => !prevIsTransition);

    if (!isTransition) {
      setTimeout(() => {
        setDisplayContent(true);
      }, 500);
    } else {
      setDisplayContent(false);
    }
  };

  const transitionClass = isTransition ? 'transition' : '';
  const contentStyle = displayContent ? { display: 'block' } : { display: 'none' };

  // Fetch image URL if it's an ID
  const fetchImageUrl = async (imageId) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/media/${imageId}`);
      return response.data.source_url;
    } catch (error) {
      console.error("Error fetching image URL:", error);
      return null;
    }
  };

  // Use effect to fetch images if they are IDs
  useEffect(() => {
    const fetchImages = async () => {
      const updatedCards = await Promise.all(card.map(async cardItem => {
        if (typeof cardItem.card_image === 'number') {
          const imageUrl = await fetchImageUrl(cardItem.card_image);
          return { ...cardItem, card_image: imageUrl };
        }
        return cardItem;
      }));
      setCardWithImages(updatedCards);
    };

    fetchImages();
  }, [card]);

  // Handle viewport size changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="home-section5">
      <div className="container">
        <ul className={`cards-split cards-down ${transitionClass}`}>
          {cardWithImages.map((cardItem, index) => (
            <li key={index} className={`card card-${index + 1}`} onClick={handleToggle}>
              <img src={isMobileView ? cardItem.mobile_image : cardItem.card_image} alt={`card ${index + 1}`} loading="lazy"/>
              <div className="content" style={contentStyle}>
                <h4>{cardItem.card_title}</h4>
                <p dangerouslySetInnerHTML={{ __html: cardItem.card_text }}></p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Imagesplit;
