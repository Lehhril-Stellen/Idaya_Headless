import React, { useState, useEffect } from "react";
import AgeConfirmation from "./AgeConfirmation";
import scrollify from "../js/scrollify";
import js from "../js/main";
import $ from "jquery";

const BannerSlider = () => {

  useEffect(() => {
    function initializeSlider() {
    $(document).ready(function() {
        function scrollifyPage() {
          const $body = $('body');  

          const options = {
            section: '.slides .panel',
            scrollSpeed: 1800,
            updateHash: false,
            offset: 0,
            scrollbars: true,
            standardScrollElements: false,
            setHeights: true,
            overflowScroll: true,
            touchScroll: true,
        
            afterRender() {
              $body.attr('data-pre-index', 0);
            },
        
            before(i, panels) {
              $(panels[i]).addClass('active')
                .siblings().removeClass('active');
        
              let preIndex = parseInt($body.attr('data-pre-index'));
              let direction = i > preIndex ? 'down' : 'up';
        
              $body.attr('data-pre-index', i)
                .removeClass('up down')
                .addClass(direction);
        
              //$('h1').text(direction);
        
              $(document).trigger('onScrollify');
            }
          };

            $.scrollify(options);

       
        }
        
        function drawSvg() {
          console.log('draw svg')
          const $panel = $('.slides .panel');
        
          function drawSVGPaths(_parentElement, _time) {
            console.log('draw drawSVGPaths')

            const paths = $(_parentElement).find('path');
        
            paths.toArray().forEach(el => {
              const $el = $(el);
              const isUp = $('body').hasClass('up');
              const totalLength = isUp ? -el.getTotalLength() : el.getTotalLength();
        
              $el.css({
                strokeDashoffset: totalLength,
                strokeDasharray: `${Math.abs(totalLength)} ${Math.abs(totalLength)}`
              });
        
              $el.animate(
                { strokeDashoffset: 0 },
                { duration: _time }
              );
            });
          }
        
          function startSVGAnimation(parentElement) {
            console.log('draw startSVGAnimation')

            drawSVGPaths(parentElement, 2000);
          } 
        
          function drawSvgInActivePanel() {
            console.log('draw drawSvgInActivePanel')

            $panel.toArray().forEach(el => $(el).hasClass('active') && startSVGAnimation($(el).find('svg')));
          }
        
          drawSvgInActivePanel();
        
          $(document).on('onScrollify', drawSvgInActivePanel);
        }
        
        scrollifyPage();
        drawSvg();
      
        });
    
        $(document).ready(function() {
            var $dashOffset = $("path").css("stroke-dashoffset");
            var $fillOffset = $(".path").css("fill");
            $(window).scroll(function() {
              var $percentageComplete = (($(window).scrollTop() / ($("html").height() - $(window).height())) * 100);
              var $newUnit = parseInt($dashOffset, 10);
              var $newUnitFill = parseInt($fillOffset, 10);
              var $offsetUnit = $percentageComplete * ($newUnit / 100);
              var $offsetUnitFill = $percentageComplete * ($newUnitFill / 100);
              $("path").css("stroke-dashoffset", $newUnit - $offsetUnit);
              $("path").css("stroke", '#7E573E');   
          });
          });  
        }
        const isHomePage = window.location.pathname === '/';

        if (isHomePage) {
          initializeSlider();
        }
        return () => {
      
          if (isHomePage) {
            try {
              $.scrollify.destroy();

            } catch (error) {
              console.error('Error destroying Scrollify Banner :', error);
            }
         
          }
      }
   
      }, []);
   

  return (
    <>
    <div className="main" id="container1">
    	
    	<div className="main-content home_sticky" id="container2">
    		
		    <section className="home" id="sliderHomePage">
		    <div className="main-panel">	

		    	<div id="scenes"  data-relative-input="true">
			    	<picture className="image1" data-depth='0.9'>
			    		<img src="images/mountain1.png" alt=""/>
			    	</picture>
			    	<picture className="image2" data-depth='0.7'>
			    		<img src="images/mountain2.png" alt=""/>
			    	</picture>
			    	<picture className="image3" data-depth='0.5'>
			    		<img src="images/mountain3.png" alt=""/>
			    	</picture>
	    		</div>
	    		<div className="slides">
	    			 <div className="panel vh-fix">
          
				    </div>
	    		<div className="panel vh-fix"  id="slide1">
		    	<div className="compass">
		    		


<div className="svg-container"></div>

		    	</div>
		    </div>
		    <div className="panel vh-fix bottle-cap">
		    	<img src="images/bottle-cap.png" alt="cap"/>
		    </div>
		    <div className="panel vh-fix bottle-banner">		    	
		    	<img src="images/idaaya-bottle.png" alt="idaaya bottle" className="bottle-animate"/>
		    </div>
		    
		</div>
	</div>
		    	
		    	
		    	<div className="overlay"></div>


		    </section>

		    

		</div>
	</div>
    </>
  );
};

export default BannerSlider;
