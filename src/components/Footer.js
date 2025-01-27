import { Link } from "react-router-dom";
import ScrollUpButton from "../components/ScrollUpButton"
import axios from "axios";
import { useEffect,useState } from "react";

const Footer = ({}) => {
	const apiUrl = process.env.REACT_APP_API_WIDGETS_URL;
  const [widgetTitle1, setWidgetTitle1] = useState({});
  const [widgetTitle2, setWidgetTitle2] = useState({});
  const [widgetTitle3, setWidgetTitle3] = useState({});
  const [footLink, setFootLink] = useState({})


	useEffect(() => {
    const fetchWidgets = async () => {
      if (!apiUrl) {
        console.error('API URL is not defined');
        return;
      }

      try {
        const response = await axios.get(apiUrl);
        if (response.data && response.data['footer-sidebar-1']) {
          setWidgetTitle1(response.data['footer-sidebar-1']);
        } else {
          console.error('footer-sidebar-1 is not defined in the response');
        }
				if (response.data && response.data['footer-sidebar-2']) {
          setWidgetTitle2(response.data['footer-sidebar-2']);
        } else {
          console.error('footer-sidebar-2 is not defined in the response');
        }
				if (response.data && response.data['footer-sidebar-3']) {
          setWidgetTitle3(response.data['footer-sidebar-3']);
        } else {
          console.error('footer-sidebar-3 is not defined in the response');
        }
        if (response.data && response.data['footer-sidebar-4']) {
          setFootLink(response.data['footer-sidebar-4']);
          console.log(response.data['footer-sidebar-4'])
        } else {
          console.error('footer-sidebar-4 is not defined in the response');
        }
      } catch (error) {
        console.error('Error fetching widgets:', error);
      }
    };

    fetchWidgets();
  }, [apiUrl]);
  return (
    <>
	<ScrollUpButton />
     <footer className="footer">
    	<div className="container">
			{widgetTitle1['block-7'] ? (
            <h1 className="" dangerouslySetInnerHTML={{ __html: widgetTitle1['block-7'].content }}></h1>
          ) : (
            <p></p>
          )}
	    	<div className="row">
				<div className="footer_left">
				{widgetTitle2['block-8'] ? (
            <p className="" dangerouslySetInnerHTML={{ __html: widgetTitle2['block-8'].content }}></p>
          ) : (
            <p></p>
          )}
					<input className="" tyle="text" placeholder="EMAIL ID"/>
				</div>
				<div className="footer_right">
					<div class="footer_nav">
						<ul className="navbar">
							<li><Link to="/aboutus">About US</Link></li>
							<li><Link to="/barLocator">Find US</Link></li>
							<li><Link to="/press">Press</Link></li>
						</ul>
						<ul className="navbar">
							<li><Link to="/termsconditions">Terms & Conditions</Link></li>
							<li><Link to="/privacypolicy">Privacy Policy</Link></li>
							{/* <li><Link to="/barLocator">BAR LOCATOR</Link></li> */}
						</ul>
					</div>
				</div>
			</div>
			<div className="footer_bottom-container">
      {footLink['block-10'] ? (
          <div className="footer_bottom" dangerouslySetInnerHTML={{__html: footLink['block-10'].content}}></div>
        ) :(
          <div></div>
        )
      }
			
					{widgetTitle3['block-9'] ? (
            <p className="" dangerouslySetInnerHTML={{ __html: widgetTitle3['block-9'].content }}></p>
          ) : (
            <p></p>
          )}
      </div>
			</div>
          
    </footer>
    </>
  );
};

export default Footer;
