import React, { useState, useEffect, useContext } from "react";
import AgeConfirmation from "../components/AgeConfirmation";
import Imagesplit from "../components/Imagesplit";
import BannerSlider from "../components/BannerSlider";
import ImageSequenceCanvas from "../components/ImageSequenceCanvas";
import ImageSequenceMobile from "../components/ImageSequenceMobile";
import MediaQuery from "react-responsive";
import axios from "axios";
import { PageContext } from "../Context/PageContext";
import CloudAnimation from "../components/CloudAnimation";

const HomepagePart = () => {
  const pages = useContext(PageContext);
  const [data, setData] = useState(null);
  const [section2, setSection2] = useState([]);
  const [awardBG, setAwardBG] = useState();
  const [seekSection, setSeekSection] = useState([]);
  const [card, setCard] = useState([]);
  const [sloganSection, setSloganSection] = useState();
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const page = pages.find((page) => page.id === 11);
    if (page) {
      console.log(page); // Check your console to ensure data structure
      setSection2(page.acf_fields.second_sec);
      setAwardBG(page.acf_fields.award_section);
      setSeekSection(page.acf_fields.seeking_section);
      const cardSection = page.acf_fields.card_section;
      const cardsArray = Object.keys(cardSection).map(
        (key) => cardSection[key]
      );
      setCard(cardsArray);
      console.log(cardsArray);
      setSloganSection(page.acf_fields.slogan_section);
    }
  }, [pages]);

  useEffect(() => {
    var sections = $("section");
    $(window).on("scroll", function () {
      var cur_pos = $(this).scrollTop();
      sections.each(function () {
        var top = $(this).offset().top - 300,
          bottom = top + $(this).outerHeight();
        if (cur_pos >= top && cur_pos <= bottom) {
          //nav.find('a').removeClass('active');
          // sections.removeClass('active');
          $(this).addClass("activetitle");
        }
      });
    });
  }, []);

  useEffect(() => {
    // Animation for .clound-image
    var clouds = $(".clound-image"),
      timeline = [];
    clouds.each(function (clIndex) {
      var measure = clouds.length - 1,
        delay = -(measure + 2 - clIndex),
        start = 1 * clIndex,
        end = +100 - 100 * (measure - clIndex);
      timeline[clIndex] = TweenMax.fromTo(
        $(this),
        90,
        { transform: "translateX(+" + start + "vw)" },
        {
          transform: "translateX(" + end + "vw)",
          ease: Linear.easeNone,
          repeat: -1,
        },
        delay
      );
    });

    // animation two
    var clouds = $(".clound-image-one"),
      timeline = [];
    clouds.each(function (clIndex) {
      var measure = clouds.length - 1,
        delay = -(measure + 2 - clIndex),
        start = 1 * clIndex,
        end = +100 - 100 * (measure - clIndex);
      timeline[clIndex] = TweenMax.fromTo(
        $(this),
        90,
        { transform: "translateX(+" + start + "vw)" },
        {
          transform: "translateX(" + end + "vw)",
          ease: Linear.easeNone,
          repeat: -1,
        },
        delay
      );
    });

    // Animation for .clound-image2
    var cloud2 = $(".clound-image2"),
      timeline2 = [];
    cloud2.each(function (cloudIndex) {
      var measure = cloud2.length - 1,
        delay = -(measure + 2 - cloudIndex),
        start = 1 * cloudIndex,
        end = -100 - 100 * (measure - cloudIndex);
      timeline2[cloudIndex] = TweenMax.fromTo(
        $(this),
        100,
        { transform: "translateX(+" + start + "vw)" },
        {
          transform: "translateX(" + end + "vw)",
          ease: Linear.easeNone,
          repeat: -1,
        },
        delay
      );
    });

    // Animation for .clound-image2
    var cloud2 = $(".clound-image2-two"),
      timeline2 = [];
    cloud2.each(function (cloudIndex) {
      var measure = cloud2.length - 1,
        delay = -(measure + 2 - cloudIndex),
        start = 1 * cloudIndex,
        end = -100 - 100 * (measure - cloudIndex);
      timeline2[cloudIndex] = TweenMax.fromTo(
        $(this),
        90,
        { transform: "translateX(+" + start + "vw)" },
        {
          transform: "translateX(" + end + "vw)",
          ease: Linear.easeNone,
          repeat: -1,
        },
        delay
      );
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
      <MediaQuery minWidth={768}>
        {(matches) =>
          matches ? (
            <div className="nopage_main">
              <ImageSequenceCanvas
                scrollHeight={2000}
                numFrames={100}
                width={1920}
                height={940}
              />
            </div>
          ) : null
        }
      </MediaQuery>

      <MediaQuery maxWidth={767}>
        {(matches) =>
          matches ? (
            <div className="nopage_main only_mobile">
              <ImageSequenceMobile
                scrollHeight={2000}
                numFrames={100}
                width={680}
                height={580}
              />
            </div>
          ) : null
        }
      </MediaQuery>

      <section className="main-inside mt-160vh page-section">
        <div className="mountain1 clound-image" id="">
          <img src={isMobileView ? "images/cloud1mob.png" : "images/cloud1.png"} alt="" />
        </div>
        <div className="mountain2 clound-image2" id="">
          <img src={isMobileView ? "images/cloud2mob.png"   : "images/cloud2.png"} alt="" />
        </div>
        {/* <CloudAnimation/> */}
        <div className="secion1">
          <div className="">
            <div className="animate-text">
              <h2
                className="text-center site-color animatetext"
                dangerouslySetInnerHTML={{ __html: section2.spirit_heading }}
              />
            </div>
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
            <div className="text-center secion1_content">
              <p dangerouslySetInnerHTML={{ __html: section2.spirit_text }}></p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="video-section"
        style={{
          backgroundImage: `url(${awardBG})`,
        }}
      >
        <button className="video-btn">
          <img src="images/video-play.svg" alt="video" />
        </button>
      </section>

      <section className="home-secion4 page-section">
        <div className="vertical_moutain_1">
          <img src="images/left.png" alt="side mountain" />
        </div>
        <div className="vertical_moutain_2">
          <img src="images/right.png" alt="side mountain right" />
        </div>
        <div className="container small-container text-center">
          <h2
            className="site-color text-uppercase animatetext mb-60"
            dangerouslySetInnerHTML={{ __html: seekSection.heading }}
          ></h2>
          <div className="gray-text">
            <div
              dangerouslySetInnerHTML={{ __html: seekSection.content }}
            ></div>
            <div className="v-line small-line">
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
            <p
              className="italicText"
              dangerouslySetInnerHTML={{ __html: seekSection.quote }}
            ></p>
          </div>
        </div>
      </section>

      <Imagesplit card={card} />

      <section className="home-secion5 pt-50 homeprimary_Sec">
        <div className="mountain1 clound-image-one cloud-left" id="">
          <img src={isMobileView ? "images/cloud1mob.png" : "images/cloud1.png"} alt="" />
        </div>
        <div className="mountain2 clound-image2-two cloud-right" id="">
          <img src={isMobileView ? "images/cloud2mob.png" : "images/cloud2.png"} alt="" />
        </div>
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
        <div className="container text-center">
          <h2
            className="site-color text-uppercase animatetext mb-60 text-center"
            dangerouslySetInnerHTML={{ __html: sloganSection }}
          ></h2>
          <div className="gray-text">
            <div className="v-line small-line">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default HomepagePart;
