import React, { useState,useContext, useEffect} from "react";
import axios from "axios";
import { PageContext } from "../Context/PageContext";
import $ from 'jquery'; 

const TermsConditions = () => {

	const pages = useContext(PageContext);

  const [content, setContent] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Filter pages context to find the specific page
        const page = pages.find(page => page.id === 303);

        if (page) {
          setContent(page.acf_fields);
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [pages]);

	useEffect(() => {
		
		$(document).ready( function() {
		  $('.terms_page').addClass('activetitle');
		});
	
		$(window).on('scroll', function() {
		  var cur_pos = $(this).scrollTop();
		  $('section').each(function() {
			var top = $(this).offset().top - 280,
			  bottom = top + $(this).outerHeight();
			if (cur_pos >= top && cur_pos <= bottom) {
			  $(this).addClass('activetitle');
			}
		  });
		});
	  }, []);
		if(loading){
			return <div></div>
		}

  return (
	<div className="termspage conditionpage">

	<div className="vertical_moutain_1 terms_moutain_1"><img src="images/side-mountains-1.png" alt="side mountain"/></div>
		<div className="vertical_moutain_2 terms_moutain_2"><img src="images/side-mountains-2.png" alt="side mountain right"/></div>		
		<section className="main terms_page about-us" id="container1">    	
    	<div className="main-content">
		    <div className="about-us-banner">		    	
		    	<div className="container2_">
		    		<h1 className="h2 site-color text-uppercase text-center">
					terms and <br/>conditions of use
						</h1>
		    	</div>
		    </div>
		</div>
	</section>
	<section className="termslat_sec">
		
		<div className="secion1">
			<div className="v-line small-line"> <svg
                className="sc-16mwcw0-0 iZNjkc"
                width="2"
                height="283"
                viewBox="0 0 2 283"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 0L0.999988 283" stroke="#7E573E" strokeWidth="2" />
              </svg></div>
			<div className="">
				<div className="small-container">
					<p dangerouslySetInnerHTML={{__html: content.content_1}}></p> 

<p dangerouslySetInnerHTML={{__html: content.content_2}}></p>
					
				</div>
				
			</div>
		</div>
	</section>
	</div>
  );
};

export default TermsConditions;
