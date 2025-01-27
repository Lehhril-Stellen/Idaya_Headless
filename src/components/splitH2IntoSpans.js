function splitH2IntoSpans() {
    const mainBody = document.querySelector('.main-body');
    if (!mainBody) {
      console.error('No main-body element found');
      return;
    }
  
    const h2Element = mainBody.querySelector('h2');
    if (!h2Element) {
      console.error('No h2 element found');
      return;
    }
  
    const textContent = h2Element.innerHTML.trim(); 
    const lines = textContent.split('<br/>'); 
  
    let spans = [];
    let spanIndex = 1; 
    for (let i = 0; i < lines.length; i++) {
      const words = lines[i].trim().split(/\s+/);
      for (let j = 0; j < words.length; j++) {
        spans.push(`<span><!--${spanIndex++}-->${words[j]}</span>`); 
      }
      if (i < lines.length - 1) {
        spans.push('<br/>'); 
      }
    }
  
    
    h2Element.innerHTML = spans.join('\n');
  
    
    const overlay1 = document.createElement('div');
    overlay1.classList.add('overlay-1');
    const overlay2 = document.createElement('div');
    overlay2.classList.add('overlay-2');
    const overlay3 = document.createElement('div');
    overlay3.classList.add('overlay-3');
    h2Element.after(overlay1, overlay2, overlay3);
  }
  
  
  document.addEventListener("DOMContentLoaded", function() {
    splitH2IntoSpans();
  });
  export default splitH2IntoSpans;