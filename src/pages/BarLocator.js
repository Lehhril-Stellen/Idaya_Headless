import axios from "axios";
import React, { useState, useEffect,useContext } from "react";
import { PageContext } from "../Context/PageContext";

const BarLocator = () => {
  const pages = useContext(PageContext);

  const [barList1, setBarList1] = useState({ city: '', locations: [] });
  const [barList2, setBarList2] = useState({ city: '', locations: [] });
  const [barList3, setBarList3] = useState({ city: '', locations: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const page = pages.find(page => page.id === 201);
        if (page) {
          setBarList1({
            city: page.acf_fields.bar_list_1.city,
            locations: Object.values(page.acf_fields.bar_list_1.bar_list)
          });
          setBarList2({
            city: page.acf_fields.bar_list_2.city,
            locations: Object.values(page.acf_fields.bar_list_2.bar_list)
          });
          setBarList3({
            city: page.acf_fields.bar_list_3.city,
            locations: Object.values(page.acf_fields.bar_list_3.bar_list)
          });
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [pages]);

  useEffect(() => {
    $(document).ready( function() {
			$('.home-secion4').addClass('activetitle');
		  });

		var sections = $('section')
$(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop();
    sections.each(function() {
        var top = $(this).offset().top -200,
            bottom = top + $(this).outerHeight();
        if (cur_pos >= top && cur_pos <= bottom) {
            $(this).addClass('activetitle');
        }
    });
});
}, []);
  const [activeSection, setActiveSection] = useState(null);

  const handleNavLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.classList.toggle("active");

      if (activeSection && activeSection !== sectionId) {
        document.getElementById(activeSection).classList.remove("active");
      }

      setActiveSection(activeSection === sectionId ? null : sectionId);

      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (loading) {
    return <div></div>; // Show this while loading
  }

 
 
  return (
    <>
      <div className="barlocator_page">
        <section className="home-secion4 bar-section">
          <div className="vertical_moutain_1">
            <img src="images/newleftfind.png" alt="side mountain" />
          </div>
          <div className="vertical_moutain_2">
            <img src="images/right-find.png" alt="side mountain right" />
          </div>
          <div className="duble_moutain">
            <div className="vertical_moutain_1">
              <img src="images/newleftfind.png" alt="side mountain" />
            </div>
            <div className="vertical_moutain_2">
              <img
                src="images/right-find.png"
                alt="side mountain right"
              />
            </div>
          </div>

          <div className="container small-container text-center">
            <div className="rum_glass">
              <img src="images/rumglass.png" alt="side mountain right" />
            </div>
            <h1 className="h2 site-color text-uppercase animatetext">
                FIND US
              </h1>
            <div className="gray-text">
              <p>CHOOSE YOUR LOCATION</p>
              <div className="v-line small-line">
                <svg
                  className="sc-16mwcw0-0 iZNjkc"
                  width="2"
                  height="283"
                  viewBox="0 0 2 283"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 0L0.999988 283"
                    stroke="#7E573E"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>

            <div className="container barcon">
              <nav className="bar_detail">
                <ul className="barpanne">
                  <li>
                    <button
                      onClick={() => handleNavLinkClick("1")}
                      className={activeSection === "1" ? "active" : ""}
                    >
                      <div className="barmenu">
                        <svg width="20" height="20" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.35462 2L15.395 20.8142C15.7927 21.388 16.641 21.388 17.0387 20.8142L30.0791 2" stroke="#7E573E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>

                        <p>{barList1.city}</p>
                        {/* <span>13 Bars</span> */}
                      </div>
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleNavLinkClick("2")}
                      className={activeSection === "2" ? "active" : ""}
                    >
                      <div className="barmenu">
                      <svg width="20" height="20" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.35462 2L15.395 20.8142C15.7927 21.388 16.641 21.388 17.0387 20.8142L30.0791 2" stroke="#7E573E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>{barList2.city}</p>
                        {/* <span>13 Bars</span> */}
                      </div>
                    </button>
                  </li>
                 <li>
                    <button
                      onClick={() => handleNavLinkClick("3")}
                      className={activeSection === "3" ? "active" : ""}
                    >
                      <div className="barmenu">
                      <svg width="20" height="20" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.35462 2L15.395 20.8142C15.7927 21.388 16.641 21.388 17.0387 20.8142L30.0791 2" stroke="#7E573E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>{barList3.city}</p>
                        {/* <span>13 Bars</span> */}
                      </div>
                    </button>
                  </li>
                   {/* <li>
                    <button
                      onClick={() => handleNavLinkClick("4")}
                      className={activeSection === "4" ? "active" : ""}
                    >
                      <div className="barmenu">
                      <svg width="20" height="20" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.35462 2L15.395 20.8142C15.7927 21.388 16.641 21.388 17.0387 20.8142L30.0791 2" stroke="#7E573E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>MUMBAI</p>
                        <span>13 Bars</span>
                      </div>
                    </button>
                  </li> */}
                </ul>
              </nav>

              <div className="sections bar_details">
                <section
                  id="1"
                  className={`panel bar_detail ${
                    activeSection === "1" ? "active" : ""
                  }`}
                >
                  <div className="gray-text">
                    <h2 className="site-color text-uppercase">BARS</h2>
                    <div className="gray-text">
                      <p>CHOOSE YOUR LOCATION</p>
                      <div className="v-line small-line">
                        <svg
                          className="sc-16mwcw0-0 iZNjkc"
                          width="2"
                          height="283"
                          viewBox="0 0 2 283"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 0L0.999988 283"
                            stroke="#7E573E"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="bardetails">
                    <div
                      className="barmenu accordion"
                      onClick={() => handleNavLinkClick("1")}
                    >
                     
                      <svg width="20" height="20" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.35462 2L15.395 20.8142C15.7927 21.388 16.641 21.388 17.0387 20.8142L30.0791 2" stroke="#7E573E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>

                      <p>{barList1.city}</p>
                      {/* <span>13 Bars</span> */}
                    </div>
                    <p>{barList1.locations[0]}</p>
                    <p>{barList1.locations[1]}</p>
                  </div>
                </section>
                <section
                  id="2"
                  className={`panel bar_detail ${
                    activeSection === "2" ? "active" : ""
                  }`}
                >
                  <div className="gray-text">
                    <h2 className="site-color text-uppercase">BARS</h2>
                    <div className="gray-text">
                      <p>CHOOSE YOUR LOCATION</p>
                      <div className="v-line small-line">
                        <svg
                          className="sc-16mwcw0-0 iZNjkc"
                          width="2"
                          height="283"
                          viewBox="0 0 2 283"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 0L0.999988 283"
                            stroke="#7E573E"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="bardetails">
                    <div
                      className="barmenu accordion"
                      onClick={() => handleNavLinkClick("2")}
                    >
                                           <svg width="20" height="20" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.35462 2L15.395 20.8142C15.7927 21.388 16.641 21.388 17.0387 20.8142L30.0791 2" stroke="#7E573E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <p>{barList2.city}</p>
                      {/* <span>13 Bars</span> */}
                    </div>
                    <p>{barList2.locations[0]}</p>
                    <p>{barList2.locations[1]}</p>
                  </div>
                </section>
               <section
                  id="3"
                  className={`panel bar_detail ${
                    activeSection === "3" ? "active" : ""
                  }`}
                >
                  <div className="gray-text">
                    <h2 className="site-color text-uppercase">BARS</h2>
                    <div className="gray-text">
                      <p>CHOOSE YOUR LOCATION</p>
                      <div className="v-line small-line">
                        <svg
                          className="sc-16mwcw0-0 iZNjkc"
                          width="2"
                          height="283"
                          viewBox="0 0 2 283"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 0L0.999988 283"
                            stroke="#7E573E"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="bardetails">
                    <div
                      className="barmenu accordion"
                      onClick={() => handleNavLinkClick("3")}
                    >
                                           <svg width="20" height="20" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.35462 2L15.395 20.8142C15.7927 21.388 16.641 21.388 17.0387 20.8142L30.0791 2" stroke="#7E573E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <p>{barList3.city}</p>
                      {/* <span>13 Bars</span> */}
                    </div>
                    <p>{barList3.locations[0]}</p>
                    <p>{barList3.locations[1]}</p>
                  </div>
                </section>
                 {/* <section
                  id="4"
                  className={`panel bar_detail ${
                    activeSection === "4" ? "active" : ""
                  }`}
                >
                  <div className="gray-text">
                    <h2 className="site-color text-uppercase">BARS</h2>
                    <div className="gray-text">
                      <p>CHOOSE YOUR LOCATION</p>
                      <div className="v-line small-line">
                        <svg
                          className="sc-16mwcw0-0 iZNjkc"
                          width="2"
                          height="283"
                          viewBox="0 0 2 283"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 0L0.999988 283"
                            stroke="#7E573E"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="bardetails">
                    <div
                      className="barmenu accordion"
                      onClick={() => handleNavLinkClick("4")}
                    >
                                          <svg width="20" height="20" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.35462 2L15.395 20.8142C15.7927 21.388 16.641 21.388 17.0387 20.8142L30.0791 2" stroke="#7E573E" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <p>MUMBAI</p>
                      <span>13 Bars</span>
                    </div>
                    <p>CAFÉ TONINO, ONE HORIZON CENTRE</p>
                    <p>DELHI CLUB HOUSE, ONE HORIZON CENTRE</p>
                    <p>WHISKEY SAMBA, ONE HORIZON CENTRE</p>
                    <p>THE QUORUM CLUB, ONE HORIZON CENTRE</p>
                    <p>COMRIN, ONE HORIZON CENTRE</p>
                    <p>STRIKER PUB & BAR, GOLF COURSE ROAD</p>
                    <p>IBIS, GOLF COURSE ROAD</p>
                    <p>RYU, 32ND MILESTONE</p>
                    <p>CAD, 32ND MILESTONE</p>
                    <p>HOUSE OF CELESTE, 32ND MILESTONE</p>
                    <p>DLF CLUB 3, SECTOR 24</p>
                    <p>DLF CLUB 4, DLF PHASE 4</p>
                    <p>DLF CLUB 5, SECTOR 53</p>
                  </div>
                </section> */}
              </div>
            </div>
          </div>
          <div className="rum_glass left-side">
            <img src="images/rumglassleft.png" alt="side rum left" />
          </div>
        </section>
      </div>
    </>
  );
};

export default BarLocator;
