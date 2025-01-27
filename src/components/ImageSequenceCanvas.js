import React, { useRef, useEffect, useState } from 'react';

const ImageCanvas = ({ scrollHeight, numFrames, width, height }) => {
  const canvasRef = useRef(null);
  const [frameIndex, setFrameIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const preloadedImagesRef = useRef([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = () => {
      const promises = [];
      for (let i = 0; i < numFrames; i++) {
        promises.push(
          new Promise(resolve => {
            const img = new Image();
            img.src = `/img/${i.toString().padStart(4, "0")}.jpg`;
            img.onload = resolve;
            preloadedImagesRef.current.push(img);
          })
        );
      }
      Promise.all(promises).then(() => {
        setImagesLoaded(true);
        setLoading(false);
      });
    };
    loadImages();
  }, [numFrames]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollFraction = window.scrollY / (scrollHeight - window.innerHeight);
      const index = Math.min(numFrames - 2, Math.ceil(scrollFraction * numFrames));
      setFrameIndex(index);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [numFrames, scrollHeight]);

  useEffect(() => {
    if (imagesLoaded) {
      const img = preloadedImagesRef.current[frameIndex];
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      context.clearRect(0, 0, canvas.width, canvas.height);

      const x = (canvas.width - img.width) / 2;
      const y = (canvas.height - img.height) / 2;

      context.drawImage(img, x, y);
    }
  }, [frameIndex, imagesLoaded, width, height]);

  return (
    <div style={{ height: scrollHeight }}>
      <div className="banner_video">
        {loading && (
        
            <div className='banner_loader text-center'><img src='/images/loader.gif'/></div>
         
        )}
        <canvas
          ref={canvasRef}
          style={{ width: '100%', height: '100vh', objectFit: 'cover' }}
          width={width}
          height={height}
        />
      </div>
    </div>
  );
};

export default ImageCanvas;