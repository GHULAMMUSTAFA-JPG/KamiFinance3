import React, { useState, useEffect } from "react";
import Link from "next/link";
import icon1 from "/public/images/icon/n_pad.svg";
import icon2 from "/public/images/icon/time.svg";
import icon3 from "/public/images/icon/location.svg";
import icon4 from "/public/images/icon/search.svg";
import icon5 from "/public/images/icon/us_flag.png";
import icon6 from "/public/images/icon/arrow_down.svg";
import logo from "/public/images/logo/logo.svg";
import s1 from "/public/images/logo/logo.webp";
import MobileMenu from "../MobileMenu/MobileMenu";
import { NavBar } from "./Navbar";
import Image from "next/image";

const Header = (props) => {
  const [searchActive, setSearchState] = useState(false);
  const [mobailActive, setMobailState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="site-header header-style-one">
      <div className="header__top-wrap gray-bg">
        <div className="container">
          <div className="header__top ul_li_between">
            <div className="header__top-cta">
              <Image src={icon1} alt="" />
              <span>Customer Support :</span> +971 502 694 269
            </div>
            <ul className="header__top-info ul_li">
              <li>
                <Image src={icon2} alt="" />
                Monday to Friday 09:00 am - 05:00 Pm
              </li>
              <li>
                <Image src={icon3} alt="" />
                Dubai 123, United Arab Emirates
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`header__wrap stricky  ${
          isSticky ? "stricked-menu stricky-fixed" : ""
        }`}
      >
        <div className="container">
          <div className="header__inner ul_li_between">
            {/* first logo */}
            <div className="header__logo">
              <Link onClick={ClickHandler} href="/">
                <Image src={s1} alt="" />
              </Link>
            </div>
            <div className="main-menu__wrap ul_li navbar navbar-expand-lg">
              <NavBar ClickHandler={ClickHandler} />
            </div>
            <div className="xb-hamburger-menu">
              <div className="xb-nav-mobile">
                <div
                  className="xb-nav-mobile-button"
                  onClick={() => setMobailState(!mobailActive)}
                >
                  <i className="fal fa-bars"></i>
                </div>
              </div>
            </div>
            <ul className="header__action ul_li">
              <li>
                <span
                  className="header__search header-search-btn"
                  onClick={() => setSearchState(!searchActive)}
                >
                  <Image src={icon4} alt="" />
                  Search
                </span>
              </li>
              <li>
                {/* <div className="header__language">
                  <ul>
                    <li>
                      <Link
                        onClick={ClickHandler}
                        href="/"
                        className="lang-btn"
                      >
                        <div className="flag">
                          <Image src={icon5} alt="" />
                        </div>
                        English
                        <div className="arrow_down">
                          <Image src={icon6} alt="" />
                        </div>
                      </Link>
                      <ul className="lang_sub_list">
                        <li>
                          <Link onClick={ClickHandler} href="/">
                            English
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/">
                            Arabic
                          </Link>
                        </li>
                        <li>
                          <Link onClick={ClickHandler} href="/">
                            Bangla
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="xb-header-wrap">
        <div className={`xb-header-menu ${mobailActive ? "active" : ""}`}>
          <div className="xb-header-menu-scroll">
            <div
              className="xb-menu-close xb-hide-xl xb-close"
              onClick={() => setMobailState(!mobailActive)}
            ></div>
            <div className="xb-logo-mobile xb-hide-xl">
              <Link onClick={ClickHandler} href="/" rel="home">
                <Image src={s1} alt="" />
              </Link>
            </div>
            <div className="xb-header-mobile-search xb-hide-xl">
              <form role="search" onSubmit={SubmitHandler}>
                <input
                  type="text"
                  placeholder="Search..."
                  name="s"
                  className="search-field"
                />
                <button type="submit" className="search-submit"></button>
              </form>
            </div>
            <nav className="xb-header-nav">
              <MobileMenu />
            </nav>
          </div>
        </div>
        <div
          className="xb-header-menu-backdrop"
          onClick={() => setMobailState(false)}
        ></div>
      </div>

      <div
        className={`header-search-form-wrapper ${searchActive ? "open" : ""}`}
      >
        <div
          className="xb-search-close xb-close"
          onClick={() => setSearchState(!searchActive)}
        ></div>
        <div className="header-search-container">
          <form role="search" className="search-form" onSubmit={SubmitHandler}>
            <input
              type="search"
              className="search-field"
              placeholder="Search …"
              name="s"
            />
          </form>
        </div>
      </div>
      <div className={`body-overlay ${searchActive ? "active" : ""}`}></div>
    </header>
  );
};

export default Header;
