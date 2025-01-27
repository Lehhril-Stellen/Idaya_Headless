import React, { useRef, useEffect, useState,useContext } from "react";
import { useParallax } from "react-scroll-parallax";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { addClassesOnScroll } from "../js/addClassesOnScroll.js";
import splitH2IntoSpans from "../js/splitH2IntoSpans";
import $ from "jquery";
import axios from "axios";
import { PageContext } from "../Context/PageContext.js";
import CloudAnimation from "./CloudAnimation.js";

const OurrumBanner = () => {
  const pages = useContext(PageContext);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);
  const [isUserScrolling, setIsUserScrolling] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);
  const isMobile = window.innerWidth <= 868;
  const [banner, setBanner] = useState([]);
  const [section1, setSection1] = useState([]);
  const [sorera, setSorera] = useState([]);
  const [swiper, setSwiper] = useState({});
  const [section_6, setSection_6] = useState([]);
  const [section7, setSection7] = useState([]);
  const [card1, setCard1] = useState([]);
  const [card2, setCard2] = useState([]);
  const [card3, setCard3] = useState([]);
  const [card4, setCard4] = useState([]);
  const [card5, setCard5] = useState([]);

  useEffect(() => {
    const page = pages.find(page => page.id === 73);
    if (page) {
      setBanner(page.acf_fields.banner);
      setSection1(page.acf_fields.section1);
      setSorera(page.acf_fields.sorera_section);
      setSwiper(page.acf_fields.slider_section);
      setSection_6(page.acf_fields.section_6);
      setCard1(page.acf_fields.end_cards.card_1);
      setCard2(page.acf_fields.end_cards.card_2);
      setCard3(page.acf_fields.end_cards.card_3);
      setCard4(page.acf_fields.end_cards.card_4);
      setCard5(page.acf_fields.end_cards.card_5);
    }
  }, [pages]);

  useEffect(() => {
    if (!isMobile) {
      addClassesOnScroll();
      window.addEventListener("scroll", handleScrollOnce);
    }

    return () => {
      window.removeEventListener("scroll", handleScrollOnce);
    };
  }, []);

  const handleScrollOnce = () => {
    if (!scrolledDown && window.scrollY > 20) {
      splitH2IntoSpans();
      setScrolledDown(true);
      const header = document.querySelector(".header");
      if (header) {
        header.classList.add("fixed-header");
      }
      window.removeEventListener("scroll", handleScrollOnce);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const headerHeight = $("#rum").height();
      if (!isMobile) {
        if ($(window).scrollTop() >= headerHeight) {
          $(".header").removeClass("fixed-header").css("position", "absolute");
        } else {
          $(".header").addClass("fixed-header").css("position", "fixed");
        }
      } else {
        $(".header").removeClass("fixed-header").css("position", "");
      }
    };

    $(window).on("scroll", handleScroll);

    return () => {
      $(window).off("scroll", handleScroll);
      $(".header").removeClass("fixed-header").css("position", "");
    };
  }, [isMobile]);

  useEffect(() => {
    function handleScroll() {
      setIsUserScrolling(true);
      let timeout;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsUserScrolling(false);
      }, 200);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function initializeSliderRum() {
      // Only initialize scrollify if it's not a mobile view
      if (!isMobile) {
        const options = {
          section: ".ourrumslide .panel",
          scrollSpeed: 500,
          scrollbars: true,
          updateHash: false,
          touchScroll: true,
          overflowScroll: true,
          setHeights: true,
          fade: true,
        };

        $.scrollify(options);
      }
    }

    const isOurRumPage = window.location.pathname === "/ourrum";

    if (isOurRumPage) {
      initializeSliderRum();
    }

    return () => {
      if (isOurRumPage && !isMobile) {
        try {
          $.scrollify.destroy();
        } catch (error) {}
      }
    };
  }, []);

  useEffect(() => {
    $(".home").addClass("activetitle");
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const rootsBanner = document.querySelector(".ourrumslide");
      if (rootsBanner) {
        rootsBanner.classList.add("ourrum_active");
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
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

    var clouds = $(".clound-image-left"),
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

    // .clound-image2
    var cloud2 = $(".clound-image2"),
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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    standardScrollElements: false,
    setHeights: true,
    overflowScroll: true,
    touchScroll: true,
    scrollbars: true,
    updateHash: false,
    fade: true,
  };
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
    <div className="main" id="container1">
      <div className="main-content home_sticky" id="container2">
        <section className="home">
          <div className="main-panel">
            <div
              id="scenes"
              className="our-rum-banner"
              data-relative-input="true"
            ></div>
            <div className="slides ourrumslide" id="ourum">
              <div className="panel vh-fix">
                <div className="logomark">
                  {/* <img src={banner.image} alt="logomark" /> */}
                  <img src="images/logomark.svg" alt="logomark" />
                </div>
              </div>
              <div className="box-new text-white no-blend-mode">
                <h4 className="text-white w-100 text-center mb-10 mt-60">
                  {banner.title}
                </h4>
              </div>
              <div className="panel vh-fix ourrum-slide1" id="slide1">
                <div className="box-new-1">
                  <div className="new-animation">
                    <h2
                      className="w-100"
                      dangerouslySetInnerHTML={{ __html: banner.slogan }}
                    ></h2>
                  </div>
                </div>
              </div>
              <div className="panel vh-fix">
                <section className="main-inside our-rum" id="rum">
                  <div className="secion1">
                    <div className="v-line line-big">
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
                    <div className="">
                      <div className="text-center secion1_content">
                        <p>{section1.content_1}</p>

                        <p>{section1.content_2}</p>
                      </div>
                      <div className="text-center rum-glass position-relative text-uppercase">
                        <img src="images/rum-glass.png" alt="rum glass" />
                      </div>
                    </div>
                  </div>
                </section>

                <section
                  className="sorera-section page-section"
                  style={{
                    backgroundImage: `url(${sorera.bg_image})`,
                  }}
                >
                  <div className="container position-relative">
                    <div className="small-content">
                      <p className="white-text">{sorera.content_1}</p>
                      <p
                        className="white-text font-20 text-uppercase"
                        dangerouslySetInnerHTML={{ __html: sorera.content_2 }}
                      ></p>
                    </div>
                  </div>
                </section>

                <section className="section5 page-section">
                  <div className="container">
                    <div className="slider-container position-relative">
                      <div className="row align-item-end">
                        <div className="position-relative ourrum_textscroll">
                          <picture className="">
                            <img
                              className="cercle_img vscroll vscrolling"
                              src="images/circularimg.png"
                              alt="Circular"
                            />
                          </picture>
                          <Slider
                            {...sliderSettings}
                            className="ourrum_textslider"
                          >
                            {Object.keys(swiper).map((key, index) => (
                              <div key={index} className="content">
                                <picture className="sideimage2 vscroll vscrolling2">
                                  <img
                                    src={swiper[key].img_2}
                                    alt={swiper[key].title}
                                  />
                                </picture>
                                <picture className="image vscroll vscrolling">
                                  <img
                                    src={swiper[key].img_1}
                                    alt={swiper[key].title}
                                  />
                                </picture>
                                <div className="details">
                                  <h3 className="site-color">
                                    {swiper[key].title}
                                  </h3>
                                  <p>{swiper[key].content}</p>
                                </div>
                              </div>
                            ))}
                          </Slider>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="horizontal_moutain_1 mountain">
                    <img src="images/mountains.png" alt="mountains" />
                  </div>
                </section>

                <section className="section6 page-section">
                  <div className="container">
                    <div className="text-center">
                      <h3
                        className="h2 site-color text-uppercase animatetext"
                        dangerouslySetInnerHTML={{ __html: section_6.title }}
                      ></h3>
                      <p
                        className="font-24"
                        dangerouslySetInnerHTML={{ __html: section_6.content }}
                      ></p>
                      <div className="v-line small-line mt-40">
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
                </section>

                <section className="section7 page-section">
                  <div className="container relative">
                    <div className="row align-item-center column-row">
                      <div className="column-4">
                        <picture className="vscrolling vscroll position-relative d-block">
                          <img src={card1.img} alt="pairing" />
                        </picture>
                      </div>
                      <div className="column-6">
                        <div className="small-content-column">
                          <h3 className="site-color h3 mb-30">{card1.title}</h3>
                          <p className="">
                          {card1.content}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row align-item-center column-row flex-row-reverse">
                      <div className="column-4">
                        <picture className="vscrolling2 vscroll position-relative d-block">
                          <img src={card2.img} />
                        </picture>
                      </div>
                      <div className="column-6">
                        <div className="small-content-column">
                          <h3 className="site-color h3 mb-30">{card2.title}</h3>
                          <p className="">
                          {card2.content}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row align-item-center column-row">
                      <div className="column-4">
                        <picture className="vscrolling vscroll position-relative d-block">
                          <img src={card3.img} />
                        </picture>
                      </div>
                      <div className="column-6">
                        <div className="small-content-column">
                          <h3 className="site-color h3 mb-30">{card3.title}</h3>
                          <p className=''>{card3.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mountain1 clound-image-left  cloud-left" id="cl1">
                    <img src={isMobileView ? "images/cloud1mob.png" : "images/cloud1.png"} alt="" />
                  </div>
                  <div className="mountain2 clound-image2 cloud-right" id="ml0">
                    <img src={isMobileView ? "images/cloude2mob.png" : "images/cloud2.png"} alt="" />
                  </div>
                </section>

                <section className="section8 page-section">
                  <div className="container relative">
                    <div className="row align-item-center column-row flex-row-reverse">
                      <div className="column-4">
                        <picture className="vscrolling2 vscroll position-relative d-block">
                          <img src={card4.img} />
                        </picture>
                      </div>
                      <div className="column-6">
                        <div className="small-content-column">
                          <h3 className="site-color h3 mb-30">{card4.title}</h3>
                          <p>
                          {card4.content}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row align-item-center column-row">
                      <div className="column-4">
                        <picture className="vscrolling vscroll position-relative d-block">
                          <img src={card5.img} />
                        </picture>
                      </div>
                      <div className="column-6">
                        <div className="small-content-column">
                          <h3 className="site-color h3 mb-30">{card5.title}</h3>
                          <p>
                          {card5.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="v-line line-big">
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
                  <div className="mountain1 clound-image  cloud-left" id="cloud1">
                    <img src={isMobileView ? "images/cloud1mob.png" : "images/cloud1.png"} alt="" />
                  </div>
                  <div className="mountain2 clound-image2 cloud-right" id="ml1">
                    <img src={isMobileView ? "images/cloud2mob.png" : "images/cloud2.png"} alt="" />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurrumBanner;
