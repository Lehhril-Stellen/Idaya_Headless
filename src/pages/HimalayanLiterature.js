import React, { useState, useEffect } from "react";

const HimalayanLiterature = () => {
 
  return (
    <>
      <div className="main">
        <section className="discovery-detail page-section">
            <h2 className="text-center site-color animatetext">
                HIMALAYAN LITERATURE
            </h2>
            <div className="v-line">
              <svg
                className="sc-16mwcw0-0 iZNjkc"
                width="2"
                height="283"
                viewBox="0 0 2 283"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 0L0.999988 283" stroke="#7E573E" strokeWidth="2" />
              </svg>
            </div>

            <div className="container container2 mt-15">
                <div className="row">
                    <div className="left-column dic-item column-7 vscroll vscrolling2 d-block">
                        <div className="hoverTextBox single hover-right">Himalayan art <span>by Swati Chopra</span> </div>                
                        <picture className="">
                        <img
                            src="images/himalayan-art.jpg"
                            alt="himalayan art"
                            className="move_image" />
                        </picture>              
                    </div>
                    <div className="right-column dic-item column-7 vscroll vscrolling d-block">
                        <div className="hoverTextBox single">Himalayan art <span>by Swati Chopra</span> </div>                
                            <picture className="">
                            <img
                            src="images/himalyan-desert.jpg"
                            alt="himalyan desert"
                            className="move_image" />
                            </picture>    
                    
                    </div>
                    <div className="left-column dic-item column-7 image-left2 vscroll vscrolling2 d-block">
                        <div className="hoverTextBox single hover-right">Himalayan art <span>by Swati Chopra</span> </div>                
                            <picture className="">
                            <img
                            src="images/himalyan-style.jpg"
                            alt="himalyan style"
                            className="move_image" />
                            </picture> 
                        
                        </div>
                </div>
            </div>
        </section>
      </div>
    </>
  );
};

export default HimalayanLiterature;
