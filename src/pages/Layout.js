import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  const location = useLocation();
  const [navbarOpen, setNavbarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const header = document.querySelector(".header");
      if (scroll >= 100) {
        header.classList.add("fixed");
      } else {
        header.classList.remove("fixed");
      }
    };

    const closeNavbar = () => {
      setNavbarOpen(false); // Close navbar when route changes
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close navbar when route changes
    setNavbarOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="header">
        <div className="container">
          <nav className="row">
            <div className="logo">
              <Link to="/">
                <img src="/images/logo.svg" alt="logo" />
              </Link>
            </div>
            <button
              className="toggle" aria-label="toggle"
              onClick={() => setNavbarOpen((prev) => !prev)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7L4 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
                <path
                  opacity="0.5"
                  d="M20 12L4 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
                <path
                  d="M20 17L4 17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
            <div className={`navlink ${navbarOpen ? " show-menu" : ""}`}>
              <div className="remove_toggle">
                <button
                  className="toggle"
                  onClick={() => setNavbarOpen((prev) => !prev)}
                >
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
                </button>
              </div>
              <ul className="nav">
                <li className={location.pathname === "/ourrum" ? "active" : ""}>
                  <Link to="/ourrum">OUR RUM</Link>
                </li>
                <li
                  className={location.pathname === "/ourRoots" ? "active" : ""}
                >
                  <Link to="/ourRoots">OUR ROOTS</Link>
                </li>
             
                <li
                  className={
                    location.pathname === "/discoverycabinet" ? "active" : ""
                  }
                >
                  {/* <Link to="/discoverycabinet">DISCOVERY CABINET</Link> */}
                </li>
                <li
                  className={
                    location.pathname === "" ? "active" : ""
                  }
                >
                  <Link to="/barLocator">FIND US</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <main style={{minHeight:"100vh"}}>
      <Outlet />
      </main>
      {/* footer */}
      <Footer />
    </>
  );
};

export default Layout;
