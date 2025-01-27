import React, { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import RootsBottle from '../components/RootsBottle';
import animatetext from '../js/animatetext.js';
import { PageContext } from '../Context/PageContext';
import $ from 'jquery'; 

const OurRoots = () => {
    const pages = useContext(PageContext);
  
    // State for different sections of the page
    const [bannerTitle, setBannerTitle] = useState('');
    const [section1Content1, setSection1Content1] = useState('');
    const [section1Content2, setSection1Content2] = useState('');
    const [section2Img1, setSection2Img1] = useState('');
    const [section2Img2, setSection2Img2] = useState('');
    const [section3Title, setSection3Title] = useState('');
    const [section3Content1, setSection3Content1] = useState('');
    const [section3Content2, setSection3Content2] = useState('');
    const [section3BgImg, setSection3BgImg] = useState('');
  
    useEffect(() => {
      const page = pages.find(page => page.id === 174);
      if (page) {
        const { banner, section_1, section_2, section_3 } = page.acf_fields;
        setBannerTitle(banner?.title || '');
        setSection1Content1(section_1?.content_1 || '');
        setSection1Content2(section_1?.content_2 || '');
        setSection2Img1(section_2?.img_1 || '');
        setSection2Img2(section_2?.img_2 || '');
        setSection3Title(section_3?.title || '');
        setSection3Content1(section_3?.content_1 || '');
        setSection3Content2(section_3?.content_2 || '');
        setSection3BgImg(section_3?.bg_img || '');
      }
    }, [pages]);
    useEffect(() => {
        if (bannerTitle) {
            animatetext();
        }
    }, [bannerTitle]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const line = document.querySelector('.visible_hide');
            if (line) {
                line.style.visibility = 'visible';
            }
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const rootsBanner = document.querySelector('.roots-banner');
            if (rootsBanner) {
                rootsBanner.classList.add('active_page');
            }
        }, 0);
        return () => clearTimeout(timeoutId);
    }, []);

    useEffect(() => {
        $(document).ready(function () {
            $('.main-content').addClass('activetitle');
        });
        var sections = $('section');
        $(window).on('scroll', function () {
            var cur_pos = $(this).scrollTop();
            sections.each(function () {
                var top = $(this).offset().top - 200,
                    bottom = top + $(this).outerHeight();
                if (cur_pos >= top && cur_pos <= bottom) {
                    $(this).addClass('activetitle');
                }
            });
        });
    }, []);

    useEffect(() => {
        const emblemInit = (el, str) => {
            const element = document.querySelector(el);
            if (element) {
                const text = str ? str : element.innerHTML;
                element.innerHTML = '';
                for (let i = 0; i < text.length; i++) {
                    const letter = text[i];
                    const span = document.createElement('span');
                    const node = document.createTextNode(letter);
                    const r = (360 / text.length) * i;
                    const x = (Math.PI / text.length).toFixed(0) * i;
                    const y = (Math.PI / text.length).toFixed(0) * i;
                    span.appendChild(node);
                    span.style.webkitTransform = `rotateZ(${r}deg) translate3d(${x}px,${y}px,0)`;
                    span.style.transform = `rotateZ(${r}deg) translate3d(${x}px,${y}px,0)`;
                    element.appendChild(span);
                }
            }
        };

        emblemInit('.emblem');
    }, []);

    return (
        <div className='ourroot-page'>
            <div className="roots-banner" >
                <picture className="anim1 root-mountain1 animate-mountain vscroll"><img src="images/mountain-1.svg" alt=""/></picture>
                <picture className="anim2 root-mountain2 animate-mountain vscroll"><img src="images/mountain-2.svg" alt=""/></picture>
            </div>
            <div className="main" id="container1">
                <section className="main-content roots page-section" id="container2" style={{ minHeight: "50vh" }}>
                    <section className="our-roots-banner">
                        <div className="banner-content animate-text container2">
                            <h2 className="h2 site-color new-fade-anime text-uppercase mt-40" dangerouslySetInnerHTML={{ __html: bannerTitle }}>
                            </h2>
                        </div>
                    </section>
                </section>
            </div>
            <section className="main-inside our-root visible_hide">
                <div className="secion1">
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
                    <div className="">
                        <div className="text-center secion1_content">
                            <p className='font-24' dangerouslySetInnerHTML={{ __html: section1Content1 }}></p>
                            <p className='font-24' dangerouslySetInnerHTML={{ __html: section1Content2 }}></p>
                        </div>
                    </div>
                </div>
            </section>
            <RootsBottle api={section2Img1} api1={section2Img2} />
            <section className="roots-section-3 page-section" style={{
                backgroundImage: `url(${section3BgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
                <div className="dark-snow"><img src="images/dark-snow.png" alt="dark snow" /></div>
                <div className="container relative">
                    <h2 className="h2 site-color text-center text-uppercase new-fade-anime mb-3vw" dangerouslySetInnerHTML={{ __html: section3Title }}>
                    </h2>
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
                    <div className="small-container text-center white-text">
                        <p dangerouslySetInnerHTML={{ __html: section3Content1 }}></p>
                        <p dangerouslySetInnerHTML={{ __html: section3Content2 }}></p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default OurRoots;
