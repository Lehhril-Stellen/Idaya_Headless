export const addClassesOnScroll = () => {
  let lastScrollTop = 0;

  const logomark = document.querySelector('.logomark');
  const slide1 = document.getElementById('slide1');
  const newAnimationDiv = document.querySelector('.new-animation');
  const boxnew = document.querySelector(".box-new");

  const scrollHandler = () => {
    const scrollTop = window.scrollY;

    if (scrollTop === 0) {
      // If the scroll position is at the top, remove the classes
      if (logomark) {
        logomark.classList.remove('box-1');
        logomark.classList.add('box-11');
      }
      if (slide1) {
        slide1.classList.remove('box-2');
      }
      if (newAnimationDiv) {
        newAnimationDiv.classList.remove('animate-text');
      }
      if(boxnew){
        boxnew.classList.remove('box-new-show');
      }
    } else if (scrollTop > lastScrollTop) {
      // If scrolling down, add the classes
      if (logomark) {
        logomark.classList.add('box-1');
        logomark.classList.remove("box-11");
      }
      if (slide1) {
        slide1.classList.add('box-2');
      }
      if (newAnimationDiv) {
        newAnimationDiv.classList.add('animate-text');
      }
      if(boxnew){
        boxnew.classList.add('box-new-show');
      }
    }

    lastScrollTop = scrollTop;
  };

  window.addEventListener('scroll', scrollHandler);
};