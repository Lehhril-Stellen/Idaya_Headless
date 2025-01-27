import React, { useState, useEffect, useContext } from "react";
import $ from "jquery";
import { TweenMax, Linear } from "gsap";
import { PageContext } from "../Context/PageContext";

const Press = () => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const pages = useContext(PageContext);

  const [card1, setCard1] = useState([]);
  const [card2, setCard2] = useState([]);
  const [card3, setCard3] = useState([]);
  const [card4, setCard4] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Filter pages context to find the specific page
        const page = pages.find((page) => page.id === 261);

        if (page) {
          setCard1(page.acf_fields.press_cards.card_1);
          setCard2(page.acf_fields.press_cards.card_2);
          setCard3(page.acf_fields.press_cards.card_3);
          setCard4(page.acf_fields.press_cards.card_4);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching the press data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [pages]);

  useEffect(() => {
    $(document).ready(function () {
      $(".age_btn").click(function (event) {
        event.preventDefault();
        $(".overlay").addClass("disappear");
        $("html, body").addClass("headerActive");
        $(".content-inside").addClass("disappear");
      });

      const clouds = $(".clound-image");
      const timeline = [];
      for (let clIndex = 0; clIndex < clouds.length; ++clIndex) {
        const mesure = clouds.length - 1;
        const delay = -(mesure + 2 - clIndex);
        const start = 1 * clIndex;
        const end = +100 - 100 * (mesure - clIndex);

        timeline[clIndex] = TweenMax.fromTo(
          $("#cl" + clIndex),
          50,
          { transform: "translateX(+" + start + "vw)" },
          {
            transform: "translateX(" + end + "vw)",
            ease: Linear.easeNone,
            repeat: -1,
          },
          delay
        );
      }

      const cloudOne = $(".clound-image");
      for (let cloudIndex = 0; cloudIndex < cloudOne.length; ++cloudIndex) {
        const mesure = cloudOne.length - 1;
        const delay = -(mesure + 2 - cloudIndex);
        const start = 1 * cloudIndex;
        const end = +100 - 100 * (mesure - cloudIndex);

        timeline[cloudIndex] = TweenMax.fromTo(
          $("#cloud" + cloudIndex),
          50,
          { transform: "translateX(+" + start + "vw)" },
          {
            transform: "translateX(" + end + "vw)",
            ease: Linear.easeNone,
            repeat: -1,
          },
          delay
        );
      }

      const cloud = $(".clound-image2");
      for (let cloudIndex = 0; cloudIndex < cloud.length; ++cloudIndex) {
        const mesure = cloud.length - 1;
        const delay = -(mesure + 2 - cloudIndex);
        const start = 1 * cloudIndex;
        const end = -100 - 100 * (mesure - cloudIndex);

        timeline[cloudIndex] = TweenMax.fromTo(
          $("#ml" + cloudIndex),
          50,
          { transform: "translateX(+" + start + "vw)" },
          {
            transform: "translateX(" + end + "vw)",
            ease: Linear.easeNone,
            repeat: -1,
          },
          delay
        );
      }

      $("ul.cards-split").on("click", function () {
        $(this).addClass("transition");
      });
    });

    $(document).ready(function () {
      $(".main-inside").addClass("activetitle");
    });

    const sections = $("section");
    $(window).on("scroll", function () {
      const cur_pos = $(this).scrollTop();
      sections.each(function () {
        const top = $(this).offset().top - 280;
        const bottom = top + $(this).outerHeight();
        if (cur_pos >= top && cur_pos <= bottom) {
          $(this).addClass("activetitle");
        }
      });
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
    //

    <div className="prss_page">
      <section className="main-inside about-us">
        <div className="secion1 mb-20">
          <h1 className="h2 text-center site-color animatetext">PRESS</h1>
          <div className="v-line mb-60">
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
      </section>
      <section className="section7 page-section">
        <div className="container relative mt-60">
          <div className="row align-item-center column-row">
            <div className="column-4">
              <picture className="vscrolling vscroll position-relative d-block">
                <img src={card1.image} alt="pairing" />
              </picture>
            </div>
            <div className="column-6">
              <div className="small-content-column_">
                <h3 className="site-color h5">{card1.title}</h3>
                <p>{card1.content}</p>
              </div>
            </div>
          </div>
          <div className="row align-item-center column-row flex-row-reverse leftside">
            <div className="column-4">
              <picture className="vscrolling2 vscroll position-relative d-block">
                <img src={card2.image} />
              </picture>
            </div>
            <div className="column-6">
              <div className="small-content-column_">
                <h3 className="site-color h5">{card2.title}</h3>
                <p>{card2.content}</p>
              </div>
            </div>
          </div>
          <div className="row align-item-center column-row">
            <div className="column-4">
              <picture className="vscrolling vscroll position-relative d-block">
                <img src={card3.image} />
              </picture>
            </div>
            <div className="column-6">
              <div className="small-content-column_">
                <h3 className="site-color h5">{card3.title}</h3>
                <p>{card3.content}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mountain1 clound-image  cloud-left" id="cl1">
          <img src={isMobileView ? "images/cloud1mob.png" : "images/cloud1.png"} alt="" />
        </div>
        <div className="mountain2 clound-image2 cloud-right" id="ml0">
          <img src={isMobileView ? "images/cloud2.mob.png" : "images/cloud2.png"} alt="" />
        </div>
      </section>

      <section className="section8 page-section">
        <div className="container relative leftside">
          <div className="row align-item-center column-row flex-row-reverse">
            <div className="column-4">
              <picture className="vscrolling2 vscroll position-relative d-block">
                <img src={card4.image} />
              </picture>
            </div>
            <div className="column-6">
              <div className="small-content-column_">
                <h3 className="site-color h5">{card4.title}</h3>
                <p>{card4.content}</p>
              </div>
            </div>
          </div>
          <div className="py-60">
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
          </div>
        </div>

        <div className="mountain1 clound-image cloud-left" id="cloud1">
          <img src={isMobileView ? "images/cloud1mob.png" : "images/cloud1.png"} alt="" />
        </div>
        <div className="mountain2 clound-image2 cloud-right" id="ml1">
          <img src={isMobileView ? "images/cloud2mob.png" : "images/cloud2.png"} alt="" />
        </div>
      </section>
    </div>
  );
};

export default Press;
