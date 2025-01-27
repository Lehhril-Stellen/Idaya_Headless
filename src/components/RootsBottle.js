import React, {useState, useEffect } from 'react';
import main from "../js/main.js";
import $ from 'jquery'; 

const RootsBottle = ({api,api1}) => {
	useEffect(() => {
		$(window).on("scroll", function() {
			$(".page-section.active").each(function() {
				var windowTop = $(window).scrollTop();
				var elementTop = $(this).offset().top;
				var elementTopMountain = $(this).offset().top;
				var topPosition = windowTop - elementTop;
				var bottomPosition = windowTop - elementTop;
				var movePosition = windowTop - elementTopMountain;
				$(this).find(".vscrolling").css({
					transform: 'translateY(-' + topPosition / 12 + 'px)',
				});
				// $(this).find(".image2").css({ top: topPosition });
				$(this).find(".vscrolling2").css({
					transform: 'translateY(' + bottomPosition / 12 + 'px)'
				});
				$(this).find(".mountain").css({
					transform: 'translateY(-' + movePosition / 8 + 'px)'
				});
			});
		
		
			$(".mountain-section.active").each(function() {
				var windowTop = $(window).scrollTop();
				var elementTop = $(this).offset().top - 200;
				//var elementTopMountain = $(this).offset().top - 200;
				var mountainTopPosition = windowTop - elementTop;
				var mountainBottomPosition = windowTop - elementTop;
				//var movePosition = windowTop - elementTopMountain;
				$(this).find(".moutain_vscrolling").css({
					transform: 'translateY(-' + mountainTopPosition / 12 + 'px)',
				});
				// $(this).find(".image2").css({ top: topPosition });
				$(this).find(".moutain_vscrolling2").css({
					transform: 'translateY(' + mountainBottomPosition / 12 + 'px)'
				});
		
			});
		});
	}, []);

  return (
    <>
    
    <section className="page-section roots-section-2">
			<div className="container position-relative container2">
				<div className="emblem">IHAVE BEEN HERE BEFORE SEASONS WERE BORN.</div>
				<div className="">
					<img src={api} alt=""/>
				</div>

				<div className="bottle">
					<picture className="image vscroll vscrolling d-block"><img className="vscrolling" src={api1} alt=""/></picture>
				</div>
			</div>
	</section>
       
    </>
  );
};

export default RootsBottle;
