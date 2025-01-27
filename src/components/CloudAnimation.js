import React,{useState,useEffect} from 'react'

const CloudAnimation = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Animation for .clound-image
    var clouds = $('.clound-image'),
      timeline = [];
    clouds.each(function (clIndex) {
      var measure = clouds.length - 1,
        delay = -(measure + 2 - clIndex),
        start = 1 * clIndex,
        end = +100 - 100 * (measure - clIndex);
      timeline[clIndex] = TweenMax.fromTo($(this), 90, { transform: 'translateX(+' + start + 'vw)' }, { transform: 'translateX(' + end + 'vw)', ease: Linear.easeNone, repeat: -1 }, delay);
    });
  
    // animation two
    var clouds = $('.clound-image-one'),
    timeline = [];
  clouds.each(function (clIndex) {
    var measure = clouds.length - 1,
      delay = -(measure + 2 - clIndex),
      start = 1 * clIndex,
      end = +100 - 100 * (measure - clIndex);
    timeline[clIndex] = TweenMax.fromTo($(this), 90, { transform: 'translateX(+' + start + 'vw)' }, { transform: 'translateX(' + end + 'vw)', ease: Linear.easeNone, repeat: -1 }, delay);
  });
  
    // Animation for .clound-image2
    var cloud2 = $('.clound-image2'),
      timeline2 = [];
    cloud2.each(function (cloudIndex) {
      var measure = cloud2.length - 1,
        delay = -(measure + 2 - cloudIndex),
        start = 1 * cloudIndex,
        end = -100 - 100 * (measure - cloudIndex);
      timeline2[cloudIndex] = TweenMax.fromTo($(this), 100, { transform: 'translateX(+' + start + 'vw)' }, { transform: 'translateX(' + end + 'vw)', ease: Linear.easeNone, repeat: -1 }, delay);
    });
  
     // Animation for .clound-image2
     var cloud2 = $('.clound-image2-two'),
     timeline2 = [];
   cloud2.each(function (cloudIndex) {
     var measure = cloud2.length - 1,
       delay = -(measure + 2 - cloudIndex),
       start = 1 * cloudIndex,
       end = -100 - 100 * (measure - cloudIndex);
     timeline2[cloudIndex] = TweenMax.fromTo($(this), 90, { transform: 'translateX(+' + start + 'vw)' }, { transform: 'translateX(' + end + 'vw)', ease: Linear.easeNone, repeat: -1 }, delay);
   });
  }, []);

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
    <>
    <div className="mountain1 clound-image" id="">
        <img src={isMobileView ? "images/new.webp" : "images/cloud1.png"} alt="" />
        </div>
        <div className="mountain2 clound-image2" id="">
        <img src={isMobileView ? "images/new1.webp" : "images/cloud1.png"} alt="" />
        </div>
    </>
  )
}

export default CloudAnimation