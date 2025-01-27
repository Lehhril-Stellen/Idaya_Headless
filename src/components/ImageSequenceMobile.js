import React, { useRef, useEffect, useState } from 'react';

function getCurrentFrame(index) {
    return `/mobileImg/${index.toString().padStart(4, '0')}.jpg`;
  }

  const ImageSequenceMobile = ({ scrollHeight, numFrames, width, height }) => {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [frameIndex, setFrameIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
  
    // Step 1: Load images
    function preloadImages() {
      const loadImage = (index) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          const imgSrc = getCurrentFrame(index);
  
          img.onload = () => {
            resolve(img);
          };
  
          img.onerror = () => {
            console.error(`Failed to load image: ${imgSrc}`);
            reject(new Error(`Failed to load image: ${imgSrc}`));
          };
  
          img.src = imgSrc;
        });
      };
  
      const loadAllImages = async () => {
        setIsLoading(true);
        try {
          const imagePromises = Array.from({ length: numFrames }, (_, index) =>
            loadImage(index)
          );
          const loadedImages = await Promise.all(imagePromises);
          setImages(loadedImages);
          setIsLoading(false);
          console.log('All images loaded successfully');
        } catch (error) {
          setError(error);
          setIsLoading(false);
          console.error('Error loading images:', error.message);
        }
      };
  
      loadAllImages();
    }
  
    // Step 2: Handle scroll events
    const handleScroll = () => {
      const scrollFraction = window.scrollY / (scrollHeight - window.innerHeight);
      const index = Math.min(
        numFrames - 1,
        Math.ceil(scrollFraction * numFrames)
      );
  
      if (index <= 0 || index > numFrames) {
        return;
      }
  
      setFrameIndex(index);
    };
  
    // Step 3: Set up canvas
    const renderCanvas = () => {
      const canvas = canvasRef.current;
      if (!canvas) {
        console.error('Canvas reference is not available');
        return;
      }
  
      const context = canvas.getContext('2d');
      if (context) {
        context.canvas.width = width;
        context.canvas.height = height;
      } else {
        console.error('Failed to get 2D context from canvas');
      }
    };
  
    // Step 4: Render images to canvas
    useEffect(() => {
      preloadImages();
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    useEffect(() => {
      if (!canvasRef.current || images.length < 1) {
        return;
      }
  
      renderCanvas();
    }, [images, width, height]);
  
    useEffect(() => {
      if (!canvasRef.current || images.length < 1) {
        return;
      }
  
      const context = canvasRef.current.getContext('2d');
      let requestId;
  
      const render = () => {
        context.clearRect(0, 0, width, height);
        context.drawImage(images[frameIndex], 0, 0, width, height);
        requestId = requestAnimationFrame(render);
      };
  
      render();
  
      return () => cancelAnimationFrame(requestId);
    }, [frameIndex, images, width, height]);
  
    return (
      <div style={{ height: scrollHeight }}>
        {isLoading ? (
          <div className='banner_loader text-center'><img src='/images/loader.gif'/></div>
        ) : (
          <div className='banner_video'> <canvas ref={canvasRef} /></div>
        )}
      </div>
    );
  };
  

export default ImageSequenceMobile;
