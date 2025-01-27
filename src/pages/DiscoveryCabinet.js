import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery'; 
const DiscoveryCabinet = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    $(document).ready(function () {
      var layer = $("#discovery");

      layer.mousemove(function (e) {
        var ivalueX = (e.pageX * -1) / 20;
        var ivalueY = (e.pageY * -1) / 100;
        console.log("ok");
        $(".dic-item .move_image").css(
          "transform",
          "translate(" + ivalueX + "px," + ivalueY + "px)"
        );
      });
    });
  }, []);
  return (
    <>
      <div className="main">
        <div className="main-content discovery" id="discovery">
          <div className="discovery-row align-item-end">
            <div className="dic-item text-center">
              <div className="dis_element">
              <Link to="#">
                  <img
                    src="images/deer.png"
                    alt="deer"
                    className="img1 move_image"
                  />
                </Link>
              </div>
            </div>
            <div className="dic-item text-center">
              <div className="dis_element">
                <img
                  src="images/stone.png"
                  alt="stone"
                  className="img2 move_image"
                />
              </div>
            </div>
            <div className="dic-item pair">
              <div className="dis_element">
              <Link to="#">
                  <img
                    src="images/perfume-1.png"
                    alt="perfume-1"
                    className="img3 move_image"
                  />
                  <img
                    src="images/stone1.png"
                    alt="stone-1"
                    className="img4  move_image"
                  />
                </Link>
              </div>
            </div>
            <div className="dic-item  pair  text-center glasses">
              <div className="dis_element">
              <Link to="#">
                  <img
                    src="images/glass.png"
                    alt="glass"
                    className="img5  move_image"
                  />
                  <img
                    src="images/glass.png"
                    alt="glass"
                    className="img6  move_image"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="discovery-row align-item-end">
            <div className="dic-item text-center">
              <div className="dis_element">
                <img
                  src="images/stone.png"
                  alt="stone"
                  className="img7 move_image"
                />
              </div>
            </div>
            <div className="dic-item">
              <div className="dis_element">
              <Link to="#">
                  <img
                    src="images/glass.png"
                    alt="glass"
                    className="img8 move_image"
                  />
                </Link>
              </div>
            </div>
            <div className="dic-item">
              <div className="dis_element">
                <div className="hoverTextBox">
                  Himalayan <br />
                  literature
                </div>
                <Link to="/HimalayanLiterature">
                  <img
                    src="images/books.png"
                    alt="books"
                    className="img9 move_image"
                  />
                </Link>
              </div>
            </div>
            <div className="dic-item">
              <div className="dis_element10">
              
                <div className="hoverTextBox">
                  Doorways <br />
                  to discovery
                </div>
                <Link to="#">
                  <img
                    src="images/rock.png"
                    alt="rock"
                    className="img10 move_image"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="discovery-row">
            <div className="dic-item bottlesmain">
              <div className={`dis_element ${navbarOpen ? " slideimge" : ""}`}>
              <Link to="#"  onClick={() => setNavbarOpen((prev) => !prev)}>
                  <img src="images/door1.png" alt="door1" className="img11 door" />
                  <img src="images/Bottles.png" alt="Bottles" className="img11 bottles" />
                </Link>
              </div>
            </div>
            <div className="dic-item pair d-flex align-item-end">
              <div className="dis_element">
                <img
                  src="images/stone.png"
                  alt="stone"
                  className="img12 move_image"
                />
              </div>
              <div className="dis_element">
                <div className="hoverTextBox">
                  Through <br />a moment
                </div>
                <Link to="#">
                  <img
                    src="images/alexander-andrews.png"
                    alt="alexander-andrews"
                    className="img13 move_image"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="discovery-row  align-item-end">
            <div className="dic-item pair d-flex align-item-end">
              <div className="dis_element">
                <div className="hoverTextBox right">
                  Legendary Maps from <br />
                  the Himalayan Club
                </div>
                <a
                  target="_blank"
                  href="https://www.etsy.com/in-en/listing/623021557/antique-map-himalaya-asia-from-9th"
                >
                  <img
                    src="images/map-frame.png"
                    alt="map frame"
                    className="img14 move_image"
                  />
                </a>
              </div>
              <div className="dis_element">
                <img
                  src="images/stone.png"
                  alt="stone"
                  className="img15 move_image"
                />
              </div>
            </div>
            <div className="dic-item">
              <div className="dis_element">
              <Link to="#">
                  <img src="images/door2.png" alt="door2" className="img16" />
                </Link>
              </div>
            </div>
          </div>
          <div className="discovery-row  align-item-end overflow-hidden last-row">
            <div className="dic-item stone-left">
              <img
                src="images/stone-large-1.png"
                alt="stone"
                className="move_image"
              />
            </div>
            <div className="dic-item speaker">
              <div className="hoverTextBox right1">TAKE A PAUSE</div>
              <Link to="#">
                <img
                  src="images/speaker-1.png"
                  alt="speaker"
                  className="move_image"
                />
              </Link>
            </div>
            <div className="dic-item  stone-right">
              <img
                src="images/stone-large-2.png"
                alt="stone-large-2"
                className="move_image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscoveryCabinet;
