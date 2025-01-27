import axios from "axios";
import React, { useState, useEffect,useContext } from "react";
import { PageContext } from "../Context/PageContext";
import $ from 'jquery'; 

const AboutUs = () => {
    const pages = useContext(PageContext);

    const [banner, setBanner] = useState(null);
    const [section1, setSection1] = useState([]);
    const [founder1, setFounder1] = useState([]);
    const [founder2, setFounder2] = useState([]);
    const [founder3, setFounder3] = useState([]);
    const [lastBG, setLastBG] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Filter pages context to find the specific page
          const page = pages.find(page => page.id === 227);
  
          if (page) {
            setBanner(page.acf_fields.banner);
            setSection1(page.acf_fields.page_section);
            setFounder1(page.acf_fields.founder_section.founder_1);
            setFounder2(page.acf_fields.founder_section.founder_2);
            setFounder3(page.acf_fields.founder_section.founder_3);
            setLastBG(page.acf_fields.about_end_image);
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
        $(document).ready(function () {
            $('.main-inside').addClass('activetitle');
        });

        const sections = $('section');
        $(window).on('scroll', function () {
            const cur_pos = $(this).scrollTop();
            sections.each(function () {
                const top = $(this).offset().top - 300,
                    bottom = top + $(this).outerHeight();
                if (cur_pos >= top && cur_pos <= bottom) {
                    $(this).addClass('activetitle');
                }
            });
        });

        const handleScroll = () => {
            $(".mountain-section.active").each(function () {
                const windowTop = $(window).scrollTop();
                const elementTop = $(this).offset().top - 300;
                const mountainTopPosition = windowTop - elementTop;
                const mountainBottomPosition = windowTop - elementTop;

                $(this).find(".moutain_vscrolling").css({
                    transform: "translateY(-" + mountainTopPosition / 10 + "px)",
                });

                $(this).find(".moutain_vscrolling2").css({
                    transform: "translateY(" + mountainBottomPosition / 10 + "px)",
                });
            });
        };

        // Attach the scroll event handler
        $(window).on("scroll", handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            $(window).off("scroll", handleScroll);
        };
    }, []);

    if (!banner) {
			return <div></div>
    }

    return (
        <div className="about_page">
            <div className="vertical_moutain_1 aboutus_mountain"><img src="images/side-mountains-1.png" alt="side mountain" /></div>
            <div className="vertical_moutain_2 aboutus_mountain"><img src="images/side-mountains-2.png" alt="side mountain right" /></div>

            <section className="main-inside about-us page-section">
                <div className="secion1">
                    <h1 className="h2 text-center site-color animatetext">
                        {banner.title}
                    </h1>
                    <div className="v-line small-line">
                        <svg className="sc-16mwcw0-0 iZNjkc" width="2" height="283" viewBox="0 0 2 283" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0L0.999988 283" stroke="#7E573E" strokeWidth="2" />
                        </svg>
                    </div>
                    <div className="">
                        <div className="text-center container3">
                            <p dangerouslySetInnerHTML={{ __html: banner.content_1 }}></p>
                            <p dangerouslySetInnerHTML={{ __html: banner.content_2 }}></p>
                        </div>
                    </div>
                </div>
            </section>

            {loading ? (
                <div>Loading content...</div>
            ) : (
                <>
                    <section className="page-section about-section-2">
                        <div className="container position-relative container2">
                            <div className="logomark"><img src="images/logomark.png" /></div>
                            <div className="">
                                <picture className="vscroll vscrolling2 d-block"><img src={section1.img_1} alt="" /></picture>
                            </div>

                            <div className="right_image_about">
                                <picture className="vscroll vscrolling d-block"><img src={section1.img_2} alt="" /></picture>
                            </div>
                        </div>
                    </section>

                    <section className="about-section-3 mountain-section page-section">
                        <div className="about-golden-mount">
                            <picture className="vscroll d-block pic1"><img src="images/golden-mountain1.png" alt="" /></picture>
                            <picture className="vscroll d-block pic2"><img src="images/golden-mountain2.png" alt="" /></picture>
                        </div>
                        <div className="snow-6"><img src="images/snow-6.png" alt="snow" /></div>
                        <div className="pouring-image-1"><img src="images/pouring-image-1.gif" alt="pouring image-1" /></div>
                        <div className="pouring-image-2"><img src="images/pouring-image-2.gif" alt="pouring image-2" /></div>
                        <div className="container relative">
                            <div className="small-container text-center">
                                <section className="about-content-small-section">
                                    <h2 className="h3 site-color text-center text-uppercase animatetext">
                                        {founder1.name}
                                    </h2>
                                    <p className="text-center text-uppercase">{founder1.title}</p>
                                    <p dangerouslySetInnerHTML={{ __html: founder1.content }}></p>
                                </section>
                                <section className="about-content-small-section">
                                    <h2 className="h3 site-color text-center text-uppercase animatetext">
                                        {founder2.name}
                                    </h2>
                                    <p className="text-center text-uppercase">
                                        {founder2.title}
                                    </p>
                                    <p dangerouslySetInnerHTML={{ __html: founder2.content }}></p>
                                </section>
                                <section className="about-content-small-section">
                                    <h2 className="h3 site-color text-center text-uppercase animatetext">
                                        {founder3.name}
                                    </h2>
                                    <p className="text-center text-uppercase">{founder3.title}</p>
                                    <p dangerouslySetInnerHTML={{ __html: founder3.content }}></p>
                                </section>
                            </div>
                        </div>
                    </section>

                    <section className="mountain-bg-section mountain-section position-relative" style={{
                        backgroundImage: `url(${lastBG})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}>
                        <div className="light-snow"><img src="images/light-snow.png" alt="light snow" /></div>
                    </section>
                </>
            )}
        </div>
    );
};

export default AboutUs;
